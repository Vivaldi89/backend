const TD = require('../../model/todoModel');

exports.checkAll = async (req, res) => {
    TD.updateMany({ checked: false, user: req.user }, {$set: {checked: true}},
        (err, o) => {
            if (err) {
                res.json({ msg: "Error"});
            }
            else {
                res.json({ msg: "SUCCESS"});
            }
        })
}