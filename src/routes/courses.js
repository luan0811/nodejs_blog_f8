var express = require('express');
var router = express.Router();
const siteRouter = require('./site');
const courseController = require('../app/controllers/CourseController');
//đây là cho trang news
// newsController.index
// tuyến đường gốc phải ở dưới cùng
//khi định nghỉa  tuyến đường phải định nghỉa thêm phương thức
//sau đó vào controller để tạo

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.get('/:slug', courseController.show);
router.use('/', siteRouter);
module.exports = router;
