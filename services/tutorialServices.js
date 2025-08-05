const { TutorialRepository, TutorialSectionRepository } = require("../repositories");

const tutorialRepository = new TutorialRepository();
const tutorialSectionRepository = new TutorialSectionRepository();

async function createSection(data) {
    try {
        const response = await tutorialSectionRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in createSection in tutorialServices", error.message);
    }
}

async function createTutorial(data) {
    try {
        const response = await tutorialRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in createTutorial in tutorialServices", error.message);
    }    
}

module.exports = { createTutorial,createSection };
