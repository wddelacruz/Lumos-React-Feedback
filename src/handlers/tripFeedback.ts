import { RequestHandler } from "express";
import {
  UserFeedbackModel,
} from "../models";

export namespace tripFeedback {
  export const post: RequestHandler = async (req, res, next) => {
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
