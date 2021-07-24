const newRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function routes(app) {
    app.use('/courses', coursesRouter);

    app.use('/news', newRouter);

    app.use('/', siteRouter);
}

module.exports = routes;
