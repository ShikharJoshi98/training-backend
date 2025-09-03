const CrudRepository = require("./crud-repository");
const { HeroSection } = require("../models");

class HeroSectionRepository extends CrudRepository {
    constructor() {
        super(HeroSection)
    }
};

module.exports = HeroSectionRepository
