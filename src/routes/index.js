const usersRouter = require('./user.router');

function routerApi(app) {
    app.use('/api/users', usersRouter);
}

module.exports = {routerApi};