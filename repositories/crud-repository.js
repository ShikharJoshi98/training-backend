const { where } = require("sequelize");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("Error in create in crud repo:", error.message);
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.destroy({
                where: {
                    id
                }
            });
            return response;
        } catch (error) {
            console.log("Error in destroy in crud repo:", error.message);
        }
    }

    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log("Error in get in crud repo:", error.message);
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log("Error in get in crud repo:", error.message);
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id
                }
            });
            return response;
        } catch (error) {
            console.log("Error in update in crud repo:", error.message);
        }
    }

    async updateByType(fieldName, data, fieldValue) {
        try {
            const response = await this.model.update(data, {
                where: { [fieldName]: fieldValue }
            });
            return response;
        } catch (error) {
            console.log("Error in updateByType in crud repo:", error.message);
        }
    }

    async getByType(fieldName, fieldValue) {
        try {
            const response = await this.model.findAll({
                where: { [fieldName]: fieldValue },
             
            });
            return response;
        } catch (error) {
            console.log("Error in updateByType in crud repo:", error.message);
        }
    }

    async getOne(fieldName, fieldValue) {
        try {
            const response = await this.model.findOne({
                where: { [fieldName]: fieldValue },
            });
            return response;
        } catch (error) {
            console.log("Error in getOne in crud repo:", error.message);
        }
    }
}

module.exports = CrudRepository;