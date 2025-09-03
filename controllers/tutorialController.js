const { tutorialServices } = require("../services");

async function addTutorial(req, res) {
    try {
        const { section, tutorialName, tutorialImage, instituteId } = req.body;
        if (!section || !tutorialName) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing Required fields"
                });
        }
        const tutorial = await tutorialServices.createTutorial({ section, tutorialName, tutorialImage, instituteId });
        return res
            .status(200)
            .json({
                success: true,
                message: "Tutorial Added Successfully",
                tutorial
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function getTutorials(req, res) {
    try {
        const tutorials = await tutorialServices.getTutorials(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched All tutorials",
                tutorials
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function addSection(req, res) {
    try {
        const { sectionName, instituteId } = req.body;
        if (!sectionName) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }
        const tutorialSection = await tutorialServices.createSection({ sectionName, instituteId });
        return res
            .status(200)
            .json({
                success: true,
                message: "Successfully added section",
                tutorialSection
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function getTutorialSection(req, res) {
    try {
        const { id } = req.params;
        const tutorialSections = await tutorialServices.getTutorialSection('instituteId', id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Successfully fetched tutorial section",
                tutorialSections
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function addTutorialChapter(req, res) {
    try {
        const { chapter, instituteId, tutorialId } = req.body;
        
        if (!chapter) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing Chapter"
                });
        }

        const chapterInfo = await tutorialServices.addChapter({ chapter, instituteId, tutorialId });

        return res
            .status(200)
            .json({
                success: true,
                message: "Successfully added chapters",
                chapterInfo
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function getChapterInfo(req, res) {
    try {
        const { instituteId } = req.params;

        const chapterInfo = await tutorialServices.getChapter(instituteId);

        return res
            .status(200)
            .json({
                success: true,
                message: "chapter fetched successfully",
                chapterInfo
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function editChapterInfo(req, res) {
    try {
        const updatedTopic = await tutorialServices.editChapter(req.params.id, { chapter: req.body.newChapter });
        return res
            .status(200)
            .json({
                success: true,
                message: "Updated Chapter Successfully",
                updatedTopic
            });
    } catch (error) {
       return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function deleteChapter(req,res) {
    try {
        const chapter = await tutorialServices.deleteChapter(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Deleted chapter successfully",
                chapter
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function deleteTutorial(req, res) {
    try {
        const { id } = req.params;

        const tutorial = await tutorialServices.deleteTutorial(id);

        return res
            .status(200)
            .json({
                success: true,
                message: "Tutorial deleted successfully",
                tutorial
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function updateSubChapters(req,res) {
    try {
        const chapter = await tutorialServices.addSubChapter(req.params.id,req.body.data);
        return res
            .status(200)
            .json({
                success: true,
                chapter
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function editSubChapter(req, res) {
    try {        
        const subChapter= await tutorialServices.updateSubChapter(req.params.id, req.body.index, req.body.data);
        return res
            .status(200)
            .json({
                success: true,
                message: "successfully edited",
                subChapter
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function deleteSubChapter(req, res) {
    try {
        const subChapter = await tutorialServices.deleteSubChapter(req.params.id, req.body.index);
        return res
            .status(200)
            .json({
                success: true,
                message: "successfully deleted",
                subChapter
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}


module.exports = {
    addTutorial,
    addSection,
    addTutorialChapter,
    getChapterInfo,
    editChapterInfo,
    deleteChapter,
    getTutorialSection,
    getTutorials,
    deleteTutorial,
    updateSubChapters,
    editSubChapter,
    deleteSubChapter
};