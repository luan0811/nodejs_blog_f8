var express = require('express');
var router = express.Router();

const meController = require('../app/controllers/MeController');
//đây là cho trang news
// newsController.index
// tuyến đường gốc phải ở dưới cùng
//khi định nghỉa  tuyến đường phải định nghỉa thêm phương thức
//sau đó vào controller để tạo

router.get('/stored/courses', meController.storedCourses);

module.exports = router;
