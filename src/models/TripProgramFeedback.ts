import {
  prop,
  Typegoose,
} from 'typegoose';

export class TripProgramFeedback extends Typegoose {
  @prop({ index: true })
  userId?: string;
}

export const TripProgramFeedbackModel = new TripProgramFeedback().getModelForClass(TripProgramFeedback);

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
