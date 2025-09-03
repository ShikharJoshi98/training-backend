const CrudRepository = require("./crud-repository");
const { AboutUs } = require("../models");

class AboutUsRepository extends CrudRepository{
    constructor() {
        super(AboutUs)
    }
}

module.exports = AboutUsRepository;