import { Typegoose } from 'typegoose';

export class TripProgramFeedback extends Typegoose {
}

export const TripProgramFeedbackModel = new TripProgramFeedback().getModelForClass(TripProgramFeedback);

export namespace TripProgramFeedback {
  export enum WhatBothersYouMost {
    CANT_FALL_ASLEEP = 'i_cant_fall_asleep',
    I_FEEL_SLEEPY = 'i_feel_sleepy_next_day',
  }

  export enum HowDoesItCompare {
    BETTER = 1,
    SAME = 0,
    WORSE = -1,
  }

  export enum YesNo {
    YES = 'YES',
    NO = 'NO',
  }
}
