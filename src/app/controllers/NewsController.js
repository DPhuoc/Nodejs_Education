
class NewsController {

    // [Get] /news
    index(req, res) {
        res.render('news');
    }

    //[Get] /:slug
    show(req, res) {
        res.send(req.params.slug);
    }

}

module.exports = new NewsController;