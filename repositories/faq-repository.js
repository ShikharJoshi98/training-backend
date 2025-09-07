const CrudRepository = require("./crud-repository");
const { FAQ } = require("../models");

class FAQRepository extends CrudRepository{
    constructor() {
        super(FAQ);
    }
}

module.exports = FAQRepository;