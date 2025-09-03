const bcrypt = require('bcrypt');
const { AuthRepository } = require('../repositories');
const generateTokenAndSetCookie = require('../utils/generateTokenAndSetCookie');
const SuperAdminRepository = require('../repositories/superAdmin-repository');

const authRepository = new AuthRepository();
const superAdminRepository = new SuperAdminRepository();

async function addInstitute(data) {
    try {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const userData = { ...data, password: hashedPassword };
        const instituteExists = await authRepository.findByName(userData.username);

        if (instituteExists) {
            const error = new Error("Institute already exists");
            error.statusCode = 409;
            throw error;
        }

        let response = await authRepository.create(userData);

        response = response.get({ plain: true });
        delete response.password;
        return response;
    } catch (error) {
        throw error;
    }
}

async function addSuperAdmin(data) {
    try {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const superAdminData = { ...data, password: hashedPassword };
        let response = await superAdminRepository.create(superAdminData);

        response = response.get({ plain: true });
        delete response.password;

        return response;
    } catch (error) {
        console.error("Error in addSuperAdmin in authservices", error.message);
    }
}

async function findUser(data) {
    try {
        const institute = await authRepository.findByName(data);
        if (institute) {
            return institute;
        }

        const superAdmin = await superAdminRepository.findByName(data);
        if (superAdmin) {
            return superAdmin;
        }

        return null;

    } catch (error) {
        console.error("Error in findUser in authservices:", error.message);
        throw error; 
    }
}


async function login(data) {
    try {
        if (data.role === 'SuperAdmin') {
            const response = await superAdminRepository.findByName(data.username);
            const isPasswordValid = await bcrypt.compare(data.password, response.password);
            if (!isPasswordValid) {
                const error = new Error("Invalid Password");
                error.statusCode = 409;
                throw error;
            }

            const user = response.get ? response.get({ plain: true }) : response;
            delete user.password;

            return { user: user, token: generateTokenAndSetCookie(data.username, data.role) };
        }
        else if (data.role === 'user') {
            const response = await authRepository.findByName(data.username);

            if (!response) {
                const error = new Error("Invalid credentials");
                error.statusCode = 409;
                throw error;
            }

            const isPasswordValid = await bcrypt.compare(data.password, response.password);
            if (!isPasswordValid) {
                const error = new Error("Invalid Password");
                error.statusCode = 409;
                throw error;
            }

            const user = response.get ? response.get({ plain: true }) : response;
            delete user.password;

            return { user: user, token: generateTokenAndSetCookie(data.username, data.role) };
        }
        return null;
    } catch (error) {
        throw error;
    }
};

async function authChecker(data) {
    try {
        let response;
        if (data.role === 'SuperAdmin') {
            response = await superAdminRepository.findByName(data.username);
            response = response.get({ plain: true });
            delete response.password;
            return response;
        }
        else if (data.role === 'user') {
            response = await authRepository.findByName(data.username);
            response = response.get({ plain: true });
            delete response.password;
            return response;
        }

        if (!response) {
            const error = new Error("User not found");
            error.statusCode = 409;
            throw error;
        }

        return null;
    } catch (error) {
        throw error;
    }
}

module.exports = { addInstitute, addSuperAdmin, login, authChecker, findUser };