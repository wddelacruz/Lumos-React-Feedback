import {
  prop,
  Typegoose,
} from 'typegoose';

export class UserFeedback extends Typegoose {
  @prop({ unique: true })
  userId?: string;

  @prop({ index: true, enum: UserFeedback.WhatBothersMostTrip })
  whatBothersMostTrip?: UserFeedback.WhatBothersMostTrip;

  @prop({ index: true, enum: UserFeedback.WhatBothersMostShift })
  whatBothersMostShift?: UserFeedback.WhatBothersMostShift;
}

export const UserFeedbackModel = new UserFeedback().getModelForClass(UserFeedback);

export namespace UserFeedback {
  export enum WhatBothersMostTrip {
  }

  export enum WhatBothersMostShift {
  }
}
