import {
  prop,
  Typegoose,
  staticMethod,
  InstanceType,
  instanceMethod,
} from 'typegoose';
import { TripProgramFeedbackModel } from './TripProgramFeedback';

export class UserFeedback extends Typegoose {
  @prop({ unique: true })
  userId?: string;

  @prop({ index: true, enum: UserFeedback.WhatBothersMostTrip })
  whatBothersMostTrip?: UserFeedback.WhatBothersMostTrip;

  @prop({ index: true, enum: UserFeedback.WhatBothersMostShift })
  whatBothersMostShift?: UserFeedback.WhatBothersMostShift;

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
