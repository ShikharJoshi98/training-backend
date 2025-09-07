const { UpcomingBatches } = require('../models');
const CrudRepository = require('./crud-repository');

class UpcomingBatchesRepository extends CrudRepository {
    constructor() {
        super(UpcomingBatches);
    }
    async findBatches(fieldName, fieldValue) {
        try {
            const response = await this.model.findAll({
                where: { [fieldName]: fieldValue },
                include: [
                    { model: Course }
                ]
            });
            return response;
        } catch (error) {
            console.log("Error in updateByType in crud repo:", error.message);
        }
    }
}

module.exports = UpcomingBatchesRepository;