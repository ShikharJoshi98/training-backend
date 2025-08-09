const CrudRepository = require("./crud-repository");
const { SocialLinks, Institute } = require("../models");

class CompanyInfoRepository extends CrudRepository {
    constructor() {
        super(Institute)
    }
    async findInstitute(id) {
        try {
            const response = await this.model.findByPk(id, {
                attributes: { exclude: ['password'] }
            });
            return response;
        } catch (error) {
            console.log("Error in findInstitute in CompanyInfoRepository:", error.message);
        }
    }
}

class SocialLinksRepository extends CrudRepository {
    constructor() {
        super(SocialLinks)
    }
}

module.exports = { CompanyInfoRepository, SocialLinksRepository };