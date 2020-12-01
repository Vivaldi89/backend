const TD = require('../../model/todoModel');

exports.deleteOne = async (req, res) => {
    const num = Number(req.params.id)
    TD.findOneAndDelete ({
        id: num,
        user: req.user
    }, (err, obj) => {
        if (err) {
            res.json({ msg: "Error"});
        }
        else {
            res.json({ msg: "SUCCESS"});
        }
    }
)}