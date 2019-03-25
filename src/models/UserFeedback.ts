import {
  pre,
  prop,
  Typegoose,
  staticMethod,
  InstanceType,
  instanceMethod,
} from 'typegoose';
import { DateTime } from 'luxon';
import { TripProgramFeedbackModel } from './TripProgramFeedback';

@pre<UserFeedback>('save', function (next) {
  if (!this.createdDate) {
    this.createdDate = DateTime.utc().toJSDate();
  }
  this.updatedDate = DateTime.utc().toJSDate();

  next();
})
export class UserFeedback extends Typegoose {
  @prop({ unique: true })
  userId?: string;

  @prop({ index: true, enum: UserFeedback.WhatBothersMostTrip })
  whatBothersMostTrip?: UserFeedback.WhatBothersMostTrip;

  @prop({ index: true, enum: UserFeedback.WhatBothersMostShift })
  whatBothersMostShift?: UserFeedback.WhatBothersMostShift;

  @prop({ index: true })
  createdDate?: Date;

  @prop({ index: true })
  updatedDate?: Date;

  @staticMethod
  static async findByUserId(userId: string) {
    let user = await UserFeedbackModel.findOne({ userId });

    if (!user) {
      user = new UserFeedbackModel();
      user.userId = userId;
      await user.save();
    }

    return user;
  }

  @instanceMethod
  createTripFeedback() {
    let trip = new TripProgramFeedbackModel();

    trip.userId = this.userId;

    return trip;
  }

  @instanceMethod
  getTripProgramFeedback() {
    return TripProgramFeedbackModel.find({ userId: this.userId });
  }

}

export const UserFeedbackModel = new UserFeedback().getModelForClass(UserFeedback);

export type UserFeedbackType = InstanceType<UserFeedback>;

export namespace UserFeedback {
  export enum WhatBothersMostTrip {
    CANT_STAY_ASLEEP = 'cant_stay_asleep',
    SLEEPY_NEXT_DAY = 'sleepy_next_day',
  }

  export enum WhatBothersMostShift {
  }
}
