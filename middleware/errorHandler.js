var message = {
    "message": "404 Page not found."
};

module.exports = (req, res, next) => {
    res.status(404).json(message);
}