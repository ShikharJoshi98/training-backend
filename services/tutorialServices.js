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

async function deleteTutorial(id) {
    try {
        const response = await tutorialRepository.destroy(id);
        return response;
    } catch (error) {
        console.log("Error in deleteTutorial in tutorialServices", error.message);
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

async function editChapter(id, data) {
    try {
        const response = await chapterRepository.update(id, data);
        return response;
    } catch (error) {
        console.log("Error in editChapter in tutorial services", error.message);
    }
}

async function deleteChapter(id) {
    try {
        const response = await chapterRepository.destroy(id);
        return response;
    } catch (error) {
        console.log("Error in deleteChapter in tutorial services", error.message);
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

async function deleteSubChapter(id, index) {
  try {
    const response = await chapterRepository.get(id);
    if (!response) throw new Error("Chapter not found");

    let updated = [...response.subChapter];

    if (index < 0 || index >= updated.length) {
      throw new Error("Index out of bounds");
    }

    updated = updated.filter((_, i) => i !== index);

    response.subChapter = updated.length > 0 ? updated : null;
     console.log(response.subChapter); 
    await response.save();

    return response;
  } catch (error) {
    console.error("Error deleteSubChapter in tutorial Services", error.message);
    throw error;
  }
}


module.exports = {
    createTutorial,
    createSection,
    addChapter,
    getChapter,
    editChapter,
    deleteChapter,
    getTutorialSection,
    getTutorials,
    deleteTutorial,
    addSubChapter,
    deleteSubChapter
};
