const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./courses')

function route(app) {

    app.use('/me', meRouter);

    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = route;
