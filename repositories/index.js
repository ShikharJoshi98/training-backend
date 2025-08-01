const { CompanyInfoRepository, SocialLinksRepository } = require("./companyInfo-repository");
const TestimonialRepository = require("./testimonial-repository");

module.exports = {
    CrudRepository: require("./crud-repository"),
    CompanyInfoRepository: CompanyInfoRepository ,
    SocialLinksRepository: SocialLinksRepository,
    TestimonialRepository:TestimonialRepository
}