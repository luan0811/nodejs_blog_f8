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
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    //[Get] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[Post] /courses/store
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/sddefault.jpg`;
        //tạo mới 1 course, bỏ formData vô trong, đó chính là req.body, những gì mình nhập
        const course = new Course(formData);
        //lưu xuống database
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
    //[Get] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
    //[Put] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    //[Detele]
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            // .then(() => res.redirect('/me/stored/courses'))
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new courseController();
