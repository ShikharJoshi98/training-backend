const CrudRepository = require("./crud-repository");
const { whoWeAreSection } = require("../models");

class WhoWeAreRepository extends CrudRepository{
    constructor() {
        super(whoWeAreSection)
    }
}

module.exports = WhoWeAreRepository;