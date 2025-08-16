const { CourseRepository, UpcomingBatchesRepository, CurriculumRepository } = require("../repositories");

const courseRepository = new CourseRepository();
const upcomingBatchesRepository = new UpcomingBatchesRepository();
const curriculumRepository = new CurriculumRepository();

async function addCourse(data) {
    try {
        const response = await courseRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in addCourse in course services", error.message);
    }
}

async function getAllCourses(instituteId, id) {
    try {
        const response = await courseRepository.getByType(instituteId, id);
        return response;
    } catch (error) {
        console.log("Error in getAllCourses in course services", error.message);
    }
}

async function deleteCourse(id) {
    try {
        const response = await courseRepository.destroy(id);
        return response;
    } catch (error) {
        console.log("error in deleteAllCourses in course services", error.message);
    }
}

async function addUpcomingBatches(data) {
    try {
        const response = await upcomingBatchesRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in addUpcomingBatches in course services", error.message);
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

async function getTopic(instituteId) {
    try {
        const response = await curriculumRepository.findTopic(instituteId);
        return response;
    } catch (error) {
        console.log("Error in getTopic in course services", error.message);
    }
}

async function editTopic(id, data) {
    try {
        const response = await curriculumRepository.update(id, data);
        return response;
    } catch (error) {
        console.log("Error in editTopic in course services", error.message);
    }
}

async function deleteTopic(id) {
    try {
        const response = await curriculumRepository.destroy(id);
        return response;
    } catch (error) {
        console.log("Error in deleteTopic in course services", error.message);
    }
}

async function addSubTopic(id, data) {
    try {
        const response = await curriculumRepository.get(id);
        const updatedSubTopics = response?.subTopic;
        updatedSubTopics.push(data);

        response.subTopic = updatedSubTopics;
        await response.save();

        return response;
    } catch (error) {
        console.log("Error in addSubTopic in course services", error.message);
    }
}

async function updateSubTopic(id, index, data) {
    try {
        const response = await curriculumRepository.get(id);
        const updated = [...response.subTopic];
        updated[index] = data;
        response.subTopic = updated;
        await response.save();
        return response;
    } catch (error) {
        console.log("Error in selectTopCourse in course services", error.message);
    }
}

async function deleteSubTopic(id, index) {
  try {
    const response = await curriculumRepository.get(id);
    if (!response) throw new Error("Curriculum not found");

    const updated = [...response.subTopic];
    if (index < 0 || index >= updated.length) {
      throw new Error("Index out of bounds");
    }

    updated.splice(index, 1);
    response.subTopic = updated;
    await response.save();

    return response;
  } catch (error) {
    console.error("Error deleting subtopic:", error.message);
    throw error;
  }
}


async function selectTopCourse(id, courseIds) {
    try {
        await courseRepository.updateByType("instituteId", { isTopCourse: false }, id);
        const response = await courseRepository.selectTopCourse(courseIds.courseIds, id);

        return response;
    } catch (error) {
        console.log("Error in selectTopCourse in course services", error.message);
    }
}

async function getUpcomingBatches(id) {
    try {
        const response = await upcomingBatchesRepository.getByType('instituteId', id);
        return response;
    } catch (error) {
        console.log("Error in getUpcomingBatches in course services", error.message);
    }
}

async function deteteUpcomingBatches(id) {
    try {
        const response = await upcomingBatchesRepository.destroy(id);
        return response;
    } catch (error) {
        console.log("Error in deteteUpcomingBatches in course services", error.message)
    }
}

module.exports = {
    addCourse,
    getAllCourses,
    addUpcomingBatches,
    addTopic,
    getTopic,
    editTopic,
    deleteTopic,
    addSubTopic,
    updateSubTopic,
    deleteSubTopic,
    selectTopCourse,
    getUpcomingBatches,
    deteteUpcomingBatches,
    deleteCourse
}