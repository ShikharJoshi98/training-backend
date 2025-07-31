const { CompanyInfoRepository, SocialLinksRepository } = require("./companyInfo-repository");

module.exports = {
    CrudRepository: require("./crud-repository"),
    CompanyInfoRepository: CompanyInfoRepository ,
    SocialLinksRepository: SocialLinksRepository
}