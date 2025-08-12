const { courseServices } = require("../services");

async function addCourseDetails(req, res) {
    try {
        const course = await courseServices.addCourse(req.body);
        return res
            .status(200)
            .json({
                success: false,
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

async function getCourseDetails(req,res) {
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

async function createUpcomingBatches(req,res) {
    try {
        const upcomingBatch = await courseServices.addUpcomingBatches(req.body);
        return res
            .status(200)
            .json({
                success: true,
                message: "Batch Added Successfully",
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

async function addCourseTopic(req, res) {
    try {
      
        if (!req.body.topic) {
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

async function updateSubTopics(req,res) {
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

async function selectTopCourse(req,res) {
    try {
        const topic = await courseServices.selectTopCourse(req.params.id,req.body.courseIds);
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
    addCourseDetails,
    getCourseDetails,
    createUpcomingBatches,
    addCourseTopic,
    getTopicInfo,
    updateSubTopics,
    selectTopCourse
}