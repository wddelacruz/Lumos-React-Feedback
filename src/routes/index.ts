import { Router } from 'express';
import { tripRoute } from './tripRoute';

export const routes = Router();

routes.use('/trip', tripRoute);
