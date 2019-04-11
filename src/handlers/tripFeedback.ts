import { RequestHandler } from "express";
import { validationResult } from "express-validator/check";
import { UserFeedbackModel, TripProgramFeedbackModel } from "../models";

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

      if (req.body.whatBothersMost) {
        user.whatBothersMostTrip = req.body.whatBothersMost;
      }
      trip.howItCompares = req.body.howItCompares;
      trip.lightFlashesWokeUp = req.body.lightFlashesWokeUp;

      await user.save();
      await trip.save();

      res.status(201).json(trip).once('finish', next);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        msg: `An error occured`,
        err,
      }).once('finish', next);
    }
  }

  export const put: RequestHandler = async (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(401).json({ errors: errors.array }).once('finish', next);
      return;
    }

    try {
      let trip = await TripProgramFeedbackModel.findById(req.params.id);

      if (trip) {
        trip.howItCompares = req.body.howItCompares;
        trip.lightFlashesWokeUp = req.body.lightFlashesWokeUp;

        res.json(await trip.save()).once('finish', next);
      } else {
        res.status(404).json({
          msg: `Trip feedback not found`,
        }).once('finish', next);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        msg: `An error occured`,
        err
      }).once('finish', next);
    }
  }
}
