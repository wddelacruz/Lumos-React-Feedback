import { Typegoose } from 'typegoose';

export class TripProgramFeedback extends Typegoose {
}

export const TripProgramFeedbackModel = new TripProgramFeedback().getModelForClass(TripProgramFeedback);

export namespace TripProgramFeedback {
  export enum WhatBothersYouMost {
  }
}
