import Koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import { getPortPromise } from 'portfinder';
import { createServer } from 'https';
import { readFileSync } from 'fs';
import { registerApiEndpoints } from './api';
import { devServer } from './config';

const { cwd } = process;
  
const app = new Koa();

app.use(bodyParser());
app.use(json());
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  await next();
});

// Register all api endpoints
registerApiEndpoints(app);

(async () => {
  try {
    const port = await getPortPromise({
      startPort: devServer.port,
      stopPort: devServer.port
    });
    
    const getCertFile = (name: string): string => `${cwd()}/certificates/${name}`;

    createServer({
      key: readFileSync(getCertFile('localhost-key.pem')),
      cert: readFileSync(getCertFile('localhost.pem'))
    }, app.callback()).listen(port);

    console.log('Listening on https://localhost:' + port);
  } catch (error) {
    throw error;
  }
})();
