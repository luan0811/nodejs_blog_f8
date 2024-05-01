class NewsController {
    //GET /news
    index(req, res) {
        res.render('news')
    }
    //trang detail của news
    //[Get] /news/:slug hoặc /news/:id
    show(req, res) {
        res.send('News Detail')
    }
}

module.exports = new NewsController