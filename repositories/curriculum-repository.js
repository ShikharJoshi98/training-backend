const CrudRepository = require("./crud-repository");
const { Curriculum } = require("../models");

class CurriculumRepository extends CrudRepository{
    constructor() {
        super(Curriculum)
    }

    async findTopic(instituteId) {
        try {
            const response = await this.model.findAll({
                where: { instituteId }
            });

            return response;
        } catch (error) {
            console.log("Error in findTopic in CurriculumRepository", error.message);
        }
    }
}

module.exports = CurriculumRepository;