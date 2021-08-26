import Application from 'koa';
// import Router from 'koa-router';
// import { getAllPosts } from '../services/posts';

export default (app: Application): void => {
  console.log(123);
  // const router = new Router({
  //   prefix: '/posts'
  // });
    
  // router
  //   .get('/', async (ctx) => {
  //     try {
  //       ctx.body = await getAllPosts();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   });

  // app
  //   .use(router.routes())
  //   .use(router.allowedMethods());
};

