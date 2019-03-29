import * as express from 'express';
const app = express();

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import routes from './routes';
import middleware from './middleware';

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(middleware);

app.use(routes);


export default app;
