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

        }
    }
}

module.exports = CourseRepository;