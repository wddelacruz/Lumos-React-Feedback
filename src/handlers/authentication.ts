import { RequestHandler } from "express-serve-static-core";

export namespace authentication {
  export const authentication: RequestHandler = (req, res, next) => {
    // TODO: Actually have authentication here
    next();
  }
}
