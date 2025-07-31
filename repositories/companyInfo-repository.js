const CrudRepository = require("./crud-repository");
const { CompanyInfo,SocialLinks } = require("../models");

class CompanyInfoRepository extends CrudRepository {
    constructor() {
        super(CompanyInfo)
    }
}

class SocialLinksRepository extends CrudRepository {
    constructor() {
        super(SocialLinks)
    }
}

module.exports = {CompanyInfoRepository,SocialLinksRepository};