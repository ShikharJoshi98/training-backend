const { TutorialSection } = require("../models");
const CrudRepository = require("./crud-repository");

class TutorialSectionRepository extends CrudRepository{
    constructor() {
        super(TutorialSection);
    }
}

module.exports = TutorialSectionRepository;