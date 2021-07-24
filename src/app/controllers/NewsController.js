class NewsController {
    index(req, res) {
        res.render("news")
    }
    show(req, res) {
        res.json("â")
    }
}
module.exports = new NewsController()