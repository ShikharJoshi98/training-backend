const { CompanyInfoRepository, SocialLinksRepository } = require("./companyInfo-repository");

module.exports = {
    CrudRepository: require("./crud-repository"),
    CompanyInfoRepository: CompanyInfoRepository,
    DomainRepository: require("./domain-repository"),
    SocialLinksRepository: SocialLinksRepository,
    TestimonialRepository: require("./testimonial-repository"),
    TutorialRepository: require("./tutorial-repository"),
    TutorialSectionRepository: require("./tutorialSection-repository"),
    AuthRepository: require("./auth-repository"),
    ChapterRepository: require("./chapter-repository"),
    CourseRepository: require("./course-repository"),
    UpcomingBatchesRepository: require("./upcomingBatches-repository"),
    CurriculumRepository: require("./curriculum-repository"),
    EnquiryRepository: require("./enquiry-repository"),
    CourseCategoryRepository: require("./courseCategory-repository"),
    SuperAdminRepository: require("./superAdmin-repository"),
    HeroSectionRepository: require("./heroSection-repository"),
    AboutUsRepository: require("./aboutUs-repository"),
}