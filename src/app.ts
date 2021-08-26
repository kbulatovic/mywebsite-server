import dbConnect from './db';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';

// Get controller routes
import usersRouter from './controllers/usersController';
import postsRouter from 'controllers/postsController';

const app = new Koa();

app.use(bodyParser());
app.use(json());

// Connect to database
dbConnect();

// Register routes
usersRouter(app);
postsRouter(app);

// Start server
app.listen(3000);
