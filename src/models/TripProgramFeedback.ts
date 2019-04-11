import {
  pre,
  prop,
  Typegoose,
  InstanceType,
  staticMethod,
} from 'typegoose';
import { DateTime } from 'luxon';
import { ObjectId } from 'bson';

@pre<TripProgramFeedback>('save', function (next) {
  if (!this.createdDate) {
    this.createdDate = DateTime.utc().toJSDate();
  }
  this.updatedDate = DateTime.utc().toJSDate();

  next();
})
export class TripProgramFeedback extends Typegoose {
  @prop({ index: true })
  userId?: string;

  @prop({ index: true })
  howItCompares?: TripProgramFeedback.HowDoesItCompare;

  @prop({ index: true })
  lightFlashesWokeUp?: TripProgramFeedback.YesNo;

  @prop({ index: true })
  createdDate?: Date;

  @prop({ index: true })
  updatedDate?: Date;

  @staticMethod
  static async findById(_id: string | ObjectId) {
    if (typeof _id === 'string') {
      _id = new ObjectId(_id);
    }
    return TripProgramFeedbackModel.findOne(_id);
  }
}

export const TripProgramFeedbackModel = new TripProgramFeedback().getModelForClass(TripProgramFeedback);

export type TripProgramFeedbackType = InstanceType<TripProgramFeedback>;

export namespace TripProgramFeedback {
  export type HowDoesItCompare = 'better' | 'same' | 'worse';

  export type YesNo = 'yes' | 'no';
}
