import Application from "koa";
import Router from "koa-router"
import User from "../models/UsersModel";

export default (app: Application): void => {
    const router = new Router({
        prefix: '/users'
    });
    
    router
        .get('/', async (ctx) => {
            try {
                const users = await User.findAll()
                ctx.body = users;
            } catch (error) {
                console.error(error);
                throw error;
            }
        });

    app
        .use(router.routes())
        .use(router.allowedMethods());
};

