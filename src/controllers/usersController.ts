import Application from 'koa';
import Router from 'koa-router';
import User from '../services/users/UsersModel';

export default (app: Application): void => {
  const router = new Router({
    prefix: '/users'
  });
    
  router
    .get('/', async (ctx) => {
      try {
        const users = await User.findAll();
        ctx.body = users;
      } catch (error) {
        console.error(error);
      }
    })
    .get('/:id', async(ctx) => {
      try {
        const { id } = ctx.params;
        const user = await User.findOne({
          where: { id }
        });

        ctx.body = !user
          ? 'User not found!'
          : user;
      } catch (error) {
        console.error(error);
      }
    });

  app
    .use(router.routes())
    .use(router.allowedMethods());
};

