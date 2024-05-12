const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
//dành cho các trang khác riêng lẻ
class SiteController {
    //sử dụng promise
    //trang home
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                //khi dùng handlebar thì phải dùng cái này
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[Get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
