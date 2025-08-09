const { tutorialServices } = require("../services");

async function addTutorial(req, res) {
    try {
        const { section, tutorialName, tutorialImage, instituteId } = req.body;
        if (!section || !tutorialName || !tutorialImage) {
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

async function addTutorialChapter(req, res) {
    try {
        const { chapter, subChapter, instituteId, tutorialId } = req.body;

        if (!chapter) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing Chapter"
                });
        }

        const chapterInfo = await tutorialServices.addChapter({ chapter, subChapter, instituteId, tutorialId });

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
        const { tutorialId, instituteId } = req.params;

        const chapterInfo = await tutorialServices.getChapter(instituteId, tutorialId);

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

module.exports = {
    addTutorial,
    addSection,
    addTutorialChapter,
    getChapterInfo
};