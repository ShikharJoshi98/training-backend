const { CourseRepository } = require("../repositories");

const courseRepository = new CourseRepository();

async function addCourse(data) {
    try {
        const response = await courseRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in addCourse in course repo",error.message);
    }
}

module.exports = {
    addCourse
}