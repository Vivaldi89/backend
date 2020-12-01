const TD = require('../../model/todoModel');

exports.markAsChecked = async (req, res) => {
    TD.updateOne({
        id: req.params.id,
        user: req.user
    }, {$set: {checked: req.params.check}}, 
    (err, newTD) => {
        if (err) {
            res.status(204).send(err);
        }
        else {
            res.send({ msg: "Success"});
        }
    }
)}