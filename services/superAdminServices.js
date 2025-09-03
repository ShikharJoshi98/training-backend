const bcrypt = require('bcrypt');
const { AuthRepository } = require("../repositories");

const authRepository = new AuthRepository

async function getInstitutes() {
    try {
        const response = await authRepository.getAll();
        return response;
    } catch (error) {
        console.log("error in getInstitutes in super admin services:", error.message);
    }
}

async function deleteInstitutes(id) {
    try {
        const response = await authRepository.destroy(id);
        return response;
    } catch (error) {
        console.log("error in deleteInstitutes in super admin services:", error.message);
    }
}

async function updateInstitute(id, data) {
    try {
        let updatedData=data;
        if (data.password) {
            const hashedPassword = await bcrypt.hash(data.password, 10);
            updatedData = { ...data, password: hashedPassword };
        }
        
        const response = await authRepository.update(id, updatedData);
       
        return response;
    } catch (error) {
        console.log("error in updateInstitute in super admin services:", error.message)
    }
}

module.exports = {
    getInstitutes,
    deleteInstitutes,
    updateInstitute
}