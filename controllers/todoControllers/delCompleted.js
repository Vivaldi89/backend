const TD = require('../../model/todoModel');

exports.delCompleted = async (req, res) => {
    TD.deleteMany({
        checked: true,
        user: req.user
    }, (err) => {
        if (err) {
            res.json({ msg: "Error"});
        }
        else {
            res.json({ msg: "SUCCESS"});
        }
    }
)}
