import * as express from 'express';
import { routes } from './routes';

const PORT = process.env.PORT || 8440;
const app = express();

const server = app.listen(PORT, () => {
  console.log('App now listening on', PORT);
});

app.use(routes);
