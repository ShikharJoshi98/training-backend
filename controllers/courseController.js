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

module.exports = {
    addCourseDetails
}