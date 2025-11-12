const { studentServices } = require("../services");

async function createStudent(req, res) {
    try {
        const { branchCode } = req.body;

        function usernameGenerator() {
            const randomSuffix = Math.floor(10000 + Math.random() * 90000);
            return `${branchCode}-${randomSuffix}`;
        }
        let username, password, studentExist;
        let attempts = 0;
        const maxAttempts = 10;

        function passwordGenerator(username) {
            const suffix = Math.random().toString(36).slice(-4);
            return `${username}-${suffix}`;
        }
        do {
            username = usernameGenerator();
            password = passwordGenerator(username);
            studentExist = await studentServices.getStudentUsername(username);
            attempts++;
            
            if (attempts >= maxAttempts) {
                throw new Error("Failed to generate unique username after multiple attempts.");
            }
        } while (studentExist);
        
        const student = await studentServices.addStudent({ ...req.body, username: username, password: password });

        return res
            .status(200)
            .json({
                success: true,
                username,
                password,
                message: "Added Student Successfully"
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

// RUD-88510-o8bv

async function fetchStudents(req, res) {
    try {
        const students = await studentServices.getStudents(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched Students Successfully",
                students,
                noOfStudents: students.length
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

async function removeStudent(req, res) {
    try {
        const student = await studentServices.deleteStudent(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Deleted Student Successfully",
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

async function fetchStudent(req, res) {
    try {
        const { id } = req.params;
        const student = await studentServices.getStudent(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                student,
                message: "Fetched Student Details Successfully"
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

async function editStudentDetails(req, res) {
    try {
        const student = await studentServices.updateStudent(req.params.id, req.body);
        return res
            .status(200)
            .json({
                success: true,
                message: "Updated Student Detail Successfully",
                student
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
    createStudent,
    fetchStudents,
    removeStudent,
    fetchStudent,
    editStudentDetails
};