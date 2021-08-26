import connect from './db';
import Koa from 'koa';

const app = new Koa();

connect();

app.use(async ctx => {
  ctx.body = 'Hello world'
})

app.listen(3000);
