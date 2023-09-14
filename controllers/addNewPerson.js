const Person = require("../models/Person");

const addNewPerson = async (req, res) => {
    const body = req.body;
    console.log(body);

    if (Object.keys(body).length !== 0) {
        if (body.name) {
            const person = new Person({
                name: body.name,
            });

            await person.save().then((person) => {
                console.log(person);
                res.status(200).json({"message": "person saved", "person": person});
            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "failed to save person"});
            });
        } else {
            res.status(400).json({"message": "please provide person name"});
        }
    } else {
        res.status(400).json({"message": "please provide person data"});
    }
}

module.exports = addNewPerson;