const { Institute } = require('../models');
const CrudRepository = require('./crud-repository');

class AuthRepository extends CrudRepository{
    constructor() {
        super(Institute)
    }

    async findByName(username) {
        try {
            const response = await this.model.findOne({
                where: { username },
            });

            return response;
        } catch (error) {
            console.log("Error in findByName in Register Repo", error.message);
        }
    }

}

module.exports = AuthRepository;