const CrudRepository = require("./crud-repository");
const { SuperAdmin } = require("../models");

class SuperAdminRepository extends CrudRepository{
    constructor() {
        super(SuperAdmin);
    }

    async findByName(username) {
        try {
            const response = await this.model.findOne({
                where: { username }
            });

            return response;
        } catch (error) {
            console.log("Error in findByName in SuperAdminRepository Repo", error.message);
        }
    }
}

module.exports = SuperAdminRepository;