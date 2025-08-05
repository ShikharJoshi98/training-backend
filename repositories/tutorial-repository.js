const CrudRepository = require("./crud-repository");
const { Tutorial } = require("../models");

class TutorialRepository extends CrudRepository {
    constructor() {
        super(Tutorial);
   }
}

module.exports = TutorialRepository;