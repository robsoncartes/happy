module.exports = {
    index: function (req, res) {
        const city = req.query.city;
        return res.render('index', {city});
    }
}