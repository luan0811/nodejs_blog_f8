var express = require('express');
var router = express.Router();

const courseController = require('../app/controllers/CourseController');
//đây là cho trang news
// newsController.index
// tuyến đường gốc phải ở dưới cùng
//khi định nghỉa  tuyến đường phải định nghỉa thêm phương thức
//sau đó vào controller để tạo


router.get('/:slug', courseController.show);
router.get('/:create', courseController.create);
module.exports = router;
