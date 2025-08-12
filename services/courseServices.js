const { CourseRepository, UpcomingBatchesRepository, CurriculumRepository } = require("../repositories");

const courseRepository = new CourseRepository();
const upcomingBatchesRepository = new UpcomingBatchesRepository();
const curriculumRepository = new CurriculumRepository();

async function addCourse(data) {
    try {
        const response = await courseRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in addCourse in course services",error.message);
    }
}

async function getAllCourses(instituteId,id) {
    try {
        const response = await courseRepository.getByType(instituteId, id);
        return response;
    } catch (error) {
        console.log("Error in getAllCourses in course services",error.message);
    }
}

async function addUpcomingBatches(data) {
    try {
        const response = await upcomingBatchesRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in addUpcomingBatches in course services",error.message);
    }
}

async function addTopic(data) {
    try {
        const response = await curriculumRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in addTopic in course services", error.message)
    }
}

module.exports = {
    addCourse,
    getAllCourses,
    addUpcomingBatches,
    addTopic
}