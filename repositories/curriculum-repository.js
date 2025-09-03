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
     async selectCourseCurriculum(courseId, instituteId) {
        try {
            const response = await this.model.findAll   ({
                where: { courseId: courseId, instituteId:instituteId },             
            });
            return response;
        } catch (error) {
            console.log("Error in selectCourseCurriculum in courserepo",error.message)
        }
    }
}

module.exports = CurriculumRepository;