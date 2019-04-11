import * as express from "express";
import * as validator from "express-validator/check";
import { tripFeedback } from "../handlers/tripFeedback";
import { authentication } from "../handlers/authentication";

export const tripRoute = express.Router();

tripRoute.post('/', [
  authentication.authentication,
  express.json(),
  validator.body('userId').isString(),
  validator.body('howItCompares').optional({ nullable: true }).isString(),
  validator.body('whatBothersMost').optional({ nullable: true }).isString(),
  validator.body('lightFlashesWokeUp').optional({ nullable: true }).isString(),
  tripFeedback.post,
]);

tripRoute.put('/:id', [
  authentication.authentication,
  express.json(),
  validator.body('userId').isString(),
  validator.body('howItCompares').optional({ nullable: true }).isString(),
  validator.body('lightFlashesWokeUp').optional({ nullable: true }).isString(),
  tripFeedback.put,
]);
