const { courseServices } = require("../services");

async function addCourseCategory(req,res) {
    try {
        const courseCategory = await courseServices.addCourseCategory(req.body);
        return res
            .status(200)
            .json({
                success: true,
                message: "Added Course Category",
                courseCategory
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function fetchCourseCategory(req,res) {
    try {
        const categories = await courseServices.getCourseCategory(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched Course Categories",
                categories
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function addCourseDetails(req, res) {
    try {
        const course = await courseServices.addCourse(req.body);
        return res
            .status(200)
            .json({
                success: true,
                message: "Added Course Details",
                course
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function getCourseDetails(req, res) {
    try {
        const courses = await courseServices.getAllCourses("instituteId", req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Courses fetched successfully",
                courses
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function getCourse(req,res) {
     try {
        const course = await courseServices.getCourse(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Course fetched successfully",
                course
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function deleteCourse(req, res) {
    try {
        const course = await courseServices.deleteCourse(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Deleted Course Successfully",
                course
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function createUpcomingBatches(req, res) {
    try {
        const upcomingBatch = await courseServices.addUpcomingBatches({ ...req.body.upcomingBatchFormValues, instituteId: req.params.id });
        return res
            .status(200)
            .json({
                success: true,
                message: "Created Batch Successfully",
                upcomingBatch
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function getUpcomingBatches(req, res) {
    try {
        const batches = await courseServices.getUpcomingBatches(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "fetched batches successfully",
                batches,
                batchesLength: batches.length
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function deleteUpcomingBatches(req, res) {
    try {
        const batch = await courseServices.deteteUpcomingBatches(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Deleted Upcoming Batch",
                batch
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}


async function addCourseTopic(req, res) {
    try {
        console.log(req.body);
        if (!req.body) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing Chapter"
                });
        }

        const topicInfo = await courseServices.addTopic(req.body);

        return res
            .status(200)
            .json({
                success: true,
                message: "Successfully added topics",
                topicInfo
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function getTopicInfo(req, res) {
    try {
        const { instituteId } = req.params;

        const topicInfo = await courseServices.getTopic(instituteId);

        return res
            .status(200)
            .json({
                success: true,
                message: "chapter fetched successfully",
                topicInfo
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function editTopicInfo(req, res) {
    try {
        const updatedTopic = await courseServices.editTopic(req.params.id, { topic: req.body.newTopic });
        return res
            .status(200)
            .json({
                success: true,
                message: "Updated Topic Successfully",
                updatedTopic
            });
    } catch (error) {
       return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function deleteTopic(req,res) {
    try {
        const topic = await courseServices.deleteTopic(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Deleted topic successfully",
                topic
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function getCourseCurriculum(req,res) {
    try {
        const curriculum = await courseServices.fetchCourseCurriculum(req.params.courseId, req.params.instituteId);
        return res
            .status(200)
            .json({
                success: true,
                message: 'Fetched Curriculum Successfully',
                curriculum
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function updateSubTopics(req, res) {
    try {
        const topic = await courseServices.addSubTopic(req.params.id, req.body.data);
        return res
            .status(200)
            .json({
                success: true,
                topic
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function editSubTopic(req, res) {
    try {        
        const subTopic = await courseServices.updateSubTopic(req.params.id, req.body.index, req.body.data);
        return res
            .status(200)
            .json({
                success: true,
                message: "successfully edited",
                subTopic
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function deleteSubTopic(req, res) {
    try {
        const subTopic = await courseServices.deleteSubTopic(req.params.id, req.body.index);
        return res
            .status(200)
            .json({
                success: true,
                message: "successfully edited",
                subTopic
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function selectTopCourse(req, res) {
    try {
        const topic = await courseServices.selectTopCourse(req.params.id, req.body.courseIds);
        return res
            .status(200)
            .json({
                success: true,
                topic
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

module.exports = {
    addCourseCategory,
    fetchCourseCategory,
    addCourseDetails,
    getCourseDetails,
    getCourse,
    createUpcomingBatches,
    addCourseTopic,
    getTopicInfo,
    editTopicInfo,
    deleteTopic,
    updateSubTopics,
    editSubTopic,
    deleteSubTopic,
    selectTopCourse,
    getUpcomingBatches,
    deleteUpcomingBatches,
    deleteCourse,
    getCourseCurriculum
}