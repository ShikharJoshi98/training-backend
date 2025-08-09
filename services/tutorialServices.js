const { TutorialRepository, TutorialSectionRepository, ChapterRepository } = require("../repositories");

const tutorialRepository = new TutorialRepository();
const tutorialSectionRepository = new TutorialSectionRepository();
const chapterRepository = new ChapterRepository();

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

async function addChapter(data) {
    try {
        const response = await chapterRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in addChapter in tutorialServices", error.message)
    }
}

async function getChapter(instituteId, tutorialId) {
    try {
        const response = await chapterRepository.findChapter(instituteId, tutorialId);
        return response;
    } catch (error) {
        console.log("Error in getChapter in tutorialServices", error.message)
    }
}

module.exports = {
    createTutorial,
    createSection,
    addChapter,
    getChapter
};
