import { Router } from "express";
import * as body from "body-parser";
import * as validator from "express-validator/check";
import { tripFeedback } from "../handlers/tripFeedback";
import { authentication } from "../handlers/authentication";

export const tripRoute = Router();

tripRoute.post('/', [
  authentication.authentication,
  body.json(),
  validator.body('userId').exists().isString(),
  validator.body('lightFlashesWakeUp').optional().isString(),
  tripFeedback.post,
]);
