const { CompanyInfoRepository, SocialLinksRepository } = require("./companyInfo-repository");

module.exports = {
    CrudRepository: require("./crud-repository"),
    CompanyInfoRepository: CompanyInfoRepository ,
    SocialLinksRepository: SocialLinksRepository,
    TestimonialRepository: require("./testimonial-repository"),
    TutorialRepository: require("./tutorial-repository"),
    TutorialSectionRepository: require("./tutorialSection-repository"),
    AuthRepository: require("./auth-repository"),
    ChapterRepository: require("./chapter-repository"),
    CourseRepository: require("./course-repository")
}