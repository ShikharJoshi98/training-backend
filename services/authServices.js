const bcrypt = require('bcrypt');
const RegisterRepository = require("../repositories/registerInstitue-repository");

const registerRepository = new RegisterRepository();

async function addInstitute(data) {
    try {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const userData = { ...data, password: hashedPassword };
        const instituteExists = await registerRepository.findByName(userData.instituteName);
        if (instituteExists) {
            const error = new Error("Institute already exists");
            error.statusCode = 409;
            throw error;
        }
        const response = await registerRepository.create(userData);
        return response;
    } catch (error) {
        console.log("Error in authServices in addInstitute", error.message);
        throw error;
    }
}

module.exports = { addInstitute };