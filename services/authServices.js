const bcrypt = require('bcrypt');
const { AuthRepository } = require('../repositories');

const authRepository = new AuthRepository();

async function addInstitute(data) {
    try {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const userData = { ...data, password: hashedPassword };
        const instituteExists = await authRepository.findByName(userData.instituteName);

        if (instituteExists) {
            const error = new Error("Institute already exists");
            error.statusCode = 409;
            throw error;
        }

        const response = await authRepository.create(userData);
        return response;
    } catch (error) {
        console.log("Error in authServices in addInstitute", error.message);
        throw error;
    }
}

async function login(data) {
    try {
        const response = await authRepository.findByName(data.instituteName);
        if (!response) {
            const error = new Error("Invalid credentials");
            error.statusCode = 409;
            throw error;
        }
        
        const isPasswordValid = await bcrypt.compare(data.password,response.password);
        if (!isPasswordValid) {
            const error = new Error("Invalid Password");
            error.statusCode = 409;
            throw error;
        }
        return response;
    } catch (error) {
        console.log("Error in authServices in login", error.message);
        throw error;
    }
};

module.exports = { addInstitute,login };