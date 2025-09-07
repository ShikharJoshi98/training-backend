const CrudRepository = require("./crud-repository")
const { whyChooseUs } = require("../models");

class WhyChooseUsRepository extends CrudRepository{
    constructor() {
       super(whyChooseUs)
   }
}

module.exports = WhyChooseUsRepository;