const Person = require("../models/Person");

const fetchPerson = async (req, res) => {
    const personId = req.params.id;
    console.log(personId);

    if (personId) {
        await Person.findById({'_id': personId}).exec().then((person) => {
            console.log(person);
            if (person) {
                res.status(200).json({"message": "person successfully fetched", "person": person});
            } else {
                res.status(400).json({"message": "sorry person does not exist "});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong"});
        });
    } else {
        res.status(400).json({"message": "please provide person Id"})
    }
}

module.exports = fetchPerson;