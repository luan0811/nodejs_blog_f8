var express = require('express')
var router = express.Router()

const newsController = require('../app/controllers/NewsController')
//đây là cho trang news
// newsController.index
// tuyến đường gốc phải ở dưới cùng

router.use('/:slug', newsController.show)
router.use('/', newsController.index)
module.exports = router;