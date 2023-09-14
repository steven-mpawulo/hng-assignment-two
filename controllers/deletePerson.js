const Person = require("../models/Person");

const deletePerson = async (req, res) => {
    const personId = req.params.id;
    console.log(personId);

    await Person.findByIdAndDelete({'_id': personId}).exec().then((deletedPerson) => {
        console.log(deletedPerson);
        if (deletedPerson) {
            res.status(200).json({"message": "person successfully deleted", "person": deletedPerson});
        } else {
            res.status(400).json({"message": "person already deleted"});
        }
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "something went wrong"});
    });

}

module.exports = deletePerson;