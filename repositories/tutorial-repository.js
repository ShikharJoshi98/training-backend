const CrudRepository = require("./crud-repository");
const { Tutorial } = require("../models");
const { where } = require("sequelize");

class TutorialRepository extends CrudRepository {
    constructor() {
        super(Tutorial);
    }
}

module.exports = TutorialRepository;