const TD = require('../../model/todoModel');

exports.uncheckAll = async (req, res) => {
    TD.updateMany({ checked: true, user: req.user  }, {$set: {checked: false}},
        (err, o) => {
            if (err) {
                res.json({ msg: "Error"});
            }
            else {
                res.json({ msg: "SUCCESS"});
            }
        })
}