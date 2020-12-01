const TD = require('../../model/todoModel');

exports.todos = async (req, res) => {
    const result = await TD.find({ user: req.user})
    if (result) {
        res.json(result);
    }
    else {
        res.json({ error: err });
    }
}