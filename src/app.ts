import dbConnect from './db';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';

// Get controller routes
import usersRouter from './controllers/usersController';

const app = new Koa();

app.use(bodyParser());
app.use(json());

dbConnect();
usersRouter(app);

app.listen(3000);
