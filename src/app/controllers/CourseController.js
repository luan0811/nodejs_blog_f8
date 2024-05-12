const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
//dành cho các trang khác riêng lẻ
class courseController {
    //[Get] /courses/:slug
    show(req, res, next) {
        //req.params.name/id , cấu hình ở routes là gì thì đặt slug với tên đó
        // req.params.slug
        // res.send('Course detail - ' + req.params.slug);
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
    }
//[Get] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
}

module.exports = new courseController();
