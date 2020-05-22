module.exports = {
    async multiply(req, res) {
        const { left, right } = req.body;
        res.status(200).json({ result: left * right })
    }
}