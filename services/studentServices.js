const bcrypt = require('bcrypt');
const { StudentDetailsRepository } = require("../repositories");

const studentDetailsRepository = new StudentDetailsRepository();

async function addStudent(data) {
    try {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const studentData = { ...data, password: hashedPassword };
        
        const response = await studentDetailsRepository.create(studentData);
        return response;
    } catch (error) {
        console.log("Error in addStudent in studentServices", error.message);
    }
}

async function getStudentUsername(username) {
    try {
        const response = await studentDetailsRepository.getOne('username', username);
        return response;
    } catch (error) {
        console.log("Error in getStudentUsername in studentServices", error.message);
    }
}

async function getStudents(id) {
    try {
        const response = await studentDetailsRepository.getByType("instituteId", id);
        return response;
    } catch (error) {
        console.log("Error in getStudents in studentServices", error.message);
    }
}

async function deleteStudent(id) {
    try {
        const response = await studentDetailsRepository.destroy(id);
        return response;
    } catch (error) {
        console.log("Error in deleteStudent in studentServices", error.message);
    }
}

async function getStudent(id) {
    try {
        const response = await studentDetailsRepository.get(id);
        return response;
    } catch (error) {
        console.log("Error in getStudent in studentServices", error.message);
    }
}

async function updateStudent(id,data) {
    try {
        const response = await studentDetailsRepository.update(id, data);
        return response;
    } catch (error) {
        console.log("Error in updateStudent in studentServices", error.message);
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentUsername,
    deleteStudent,
    getStudent,
    updateStudent
}