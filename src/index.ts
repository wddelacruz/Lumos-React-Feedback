import * as express from 'express';
import { routes } from './routes';

const PORT = process.env.PORT || 8440;
const app = express();

const server = app.listen(PORT, () => {
  console.log('App now listening on', PORT);
});

app.use(routes);

app.use((req, res, next) => {
  console.log(req.method, req.path, ':', res.statusCode, res.statusMessage);
  next();
});
