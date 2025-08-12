const { UpcomingBatches } = require('../models');
const CrudRepository = require('./crud-repository');

class UpcomingBatchesRepository extends CrudRepository{
    constructor() {
        super(UpcomingBatches);
    }
}

module.exports = UpcomingBatchesRepository;