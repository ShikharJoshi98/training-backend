const {domains} = require("../models");
const CrudRepository = require("./crud-repository");

class DomainRepository extends CrudRepository{
    constructor() {
        super(domains)
    }
}

module.exports = DomainRepository;