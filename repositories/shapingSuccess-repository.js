const CrudRepository = require("./crud-repository");
const { shapingSuccess } = require("../models");

class ShapingSuccessRepository extends CrudRepository{
    constructor() {
        super(shapingSuccess)
    }
}

module.exports = ShapingSuccessRepository;