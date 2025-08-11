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

async function getTutorialSection(instituteId, id) {
    try {
        const response = await tutorialSectionRepository.getByType(instituteId, id);
        return response;
    } catch (error) {
        console.log("Error in getTutorialSection in tutorialServices", error.message);
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

async function getTutorials(id) {
    try {
        const response = await tutorialRepository.getByType("instituteId", id);
        return response;
    } catch (error) {
        console.log("Error in getTutorials in tutorialServices", error.message);
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

async function getChapter(instituteId) {
    try {
        const response = await chapterRepository.findChapter(instituteId);
        return response;
    } catch (error) {
        console.log("Error in getChapter in tutorialServices", error.message);
    }
}

async function addSubChapter(id,data) {
    try {
        const response = await chapterRepository.get(id);
        const updatedSubChapters = response?.subChapter;
        updatedSubChapters.push(data);

        response.subChapter = updatedSubChapters;
        await response.save();
        
        return response;
    } catch (error) {
        console.log("Error in addSubChapter in tutorialServices", error.message);
    }
}


module.exports = {
    createTutorial,
    createSection,
    addChapter,
    getChapter,
    getTutorialSection,
    getTutorials,
    addSubChapter
};
