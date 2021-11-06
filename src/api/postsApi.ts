import Application from 'koa';
import Router from 'koa-router';
import { PostsService } from 'models/Posts';
import errMsg from 'utils/errMsg';

export default (app: Application): void => {
  const router = new Router({
    prefix: '/posts'
  });

  const posts = new PostsService();

  router.get('/', async (ctx, next) => {
    try {
      const data = await posts.getAll();

      ctx.body = data;

      await next();
    } catch (error) {
      ctx.status = 500;
      errMsg(error);
      throw error;
    }
  });

  router.get('/:id', async (ctx, next) => {
    try {          
      const id = Number(ctx.params.id);
      const data = await posts.get(id);

      ctx.body = data;

      await next();
    } catch (error) {
      ctx.status = 404;
      ctx.body = { message: error.message };
    }
  });
  
  router.post('/', async(ctx, next) => {
    try {
      const data = await posts.create(ctx.request.body);

      ctx.body = data;
  
      await next();  
    } catch (error) {
      ctx.status = 404;
      ctx.body = { message: error.message };
    }
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());
};

