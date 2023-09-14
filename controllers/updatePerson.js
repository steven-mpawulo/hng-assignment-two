const Person = require("../models/Person");

const updatePerson = async (req, res) => {
    const personId = req.params.id;
    console.log(personId);
    const body = req.body;
    console.log(body);

    if (Object.keys(body).length !== 0) {
        if (body.name) {
            await Person.findByIdAndUpdate({ '_id': personId }, { $set: { "name": body.name } }, {new: true}).exec().then((updatedPerson) => {
                console.log(updatedPerson);
                if (updatedPerson) {
                    res.status(200).json({ "message": "person updated successfully", "person": updatedPerson });
                } else {
                    res.status(400).json({"message": "failed to update person", "reason": "perso does not exist"});
                }

            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "something went wrong"});
            });
        } else {
            res.status(400).json({ "message": "please provide person name to update" });
        }
    } else {
        res.status(400).json({ "message": "please provide person data to update" });
    }
}

module.exports = updatePerson;