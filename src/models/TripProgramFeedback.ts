import {
  prop,
  Typegoose,
  InstanceType,
} from 'typegoose';

export class TripProgramFeedback extends Typegoose {
  @prop({ index: true })
  userId?: string;

  @prop({ index: true, enum: TripProgramFeedback.HowDoesItCompare })
  howItCompares?: TripProgramFeedback.HowDoesItCompare;

  @prop({ index: true, enum: TripProgramFeedback.YesNo })
  lightFlashesWokeUp?: TripProgramFeedback.YesNo;
}

export const TripProgramFeedbackModel = new TripProgramFeedback().getModelForClass(TripProgramFeedback);

export type TripProgramFeedbackType = InstanceType<TripProgramFeedback>;

export namespace TripProgramFeedback {
  export enum HowDoesItCompare {
    BETTER = 'better',
    SAME = 'save',
    WORSE = 'worse',
  }

  export enum YesNo {
    YES = 'YES',
    NO = 'NO',
  }
}
