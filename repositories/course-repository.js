const CrudRepository = require("./crud-repository");
const { Course } = require("../models");

class CourseRepository extends CrudRepository {
    constructor() {
        super(Course);
    }
    async selectTopCourse(ids, instituteId) {
        try {
            await this.model.update(
                { isTopCourse: true },
                { where: { id: ids, instituteId } }
            );
        } catch (error) {
            console.log("Error in selectTopCourse in courserepo",error.message)
        }
    }
}

module.exports = CourseRepository;