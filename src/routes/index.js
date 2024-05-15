const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
// giống y dispatch servlet

function route(app) {
    // Local Host --- hosting
    // Action ---> Dispatcher ---> Function handle
    // ở dưới chính là controller

    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    //cái gạch chéo luôn nằm dưới cùng
    app.use('/', siteRouter);
}

module.exports = route;
