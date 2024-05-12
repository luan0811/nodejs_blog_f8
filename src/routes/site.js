var express = require('express');
var router = express.Router();

const siteController = require('../app/controllers/SiteController');
//đây là cho trang ít cần chi tiết
// newsController.index
// tuyến đường gốc phải ở dưới cùng
//router. phương thức

router.get('/search', siteController.search);
router.get('/', siteController.index);
module.exports = router;
