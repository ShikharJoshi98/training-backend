const CrudRepository = require("./crud-repository");
const { StudentDetails } = require("../models");

class StudentRepository extends CrudRepository{
    constructor() {
        super(StudentDetails);
    }
}

module.exports = StudentRepository;