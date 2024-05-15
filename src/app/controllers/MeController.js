const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
//dành cho các trang khác riêng lẻ
class MeController {
    //[Get] /me/stored/coures
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
