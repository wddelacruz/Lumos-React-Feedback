import * as express from "express";
import * as validator from "express-validator/check";
import { tripFeedback } from "../handlers/tripFeedback";
import { authentication } from "../handlers/authentication";

export const tripRoute = express.Router();

tripRoute.post('/', [
  authentication.authentication,
  express.json(),
  validator.body('userId').exists().isString(),
  validator.body('howItCompares').exists().isString(),
  validator.body('lightFlashesWokeUp').optional().isString(),
  tripFeedback.post,
]);
