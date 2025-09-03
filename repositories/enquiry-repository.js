const CrudRepository  = require("./crud-repository");
const { StudentEnquiry } = require("../models");

class EnquiryRepository extends CrudRepository{
    constructor() {
        super(StudentEnquiry);
    }
}

module.exports = EnquiryRepository;
