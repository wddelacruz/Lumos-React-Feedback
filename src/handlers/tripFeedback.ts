import { RequestHandler } from "express";
import { validationResult } from "express-validator/check";
import { UserFeedbackModel } from "../models";

export namespace tripFeedback {
  export const post: RequestHandler = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(401).json({
        errors: errors.array(),
      }).once('finish', next);
      return;
    }

    try {
      let user = await UserFeedbackModel.findByUserId(req.body.userId);
      let trip = user.createTripFeedback();

      trip.howItCompares = req.body.howItCompares;
      trip.lightFlashesWokeUp = req.body.lightFlashesWokeUp;

      await trip.save();

      res.json(trip).once('finish', next);
    } catch (err) {
      res.status(500).json({
        msg: `An error occured`,
        err,
      }).once('finish', next);
    }
  }
}
