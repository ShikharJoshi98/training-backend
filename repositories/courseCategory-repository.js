const CrudRepository = require("./crud-repository");
const { CourseCategory } = require("../models");

class CourseCategoryRepository extends CrudRepository{
    constructor() {
        super(CourseCategory);
    }
}

module.exports = CourseCategoryRepository;