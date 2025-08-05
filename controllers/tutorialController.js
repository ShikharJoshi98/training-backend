const { tutorialServices } = require("../services");

async function addTutorial(req, res) {
    try {
        const { section, tutorialName, tutorialImage } = req.body;
        if (!section || !tutorialName || !tutorialImage) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing Required fields"
                });
        }
        const tutorial = await tutorialServices.createTutorial({ section, tutorialName, tutorialImage });
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
        const { sectionName } = req.body;
        if (!sectionName) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }
        const tutorialSection = await tutorialServices.createSection({ sectionName });
        return res
            .status(200)
            .json({
                success: true,
                message: "Successfully added section",
                tutorialSection
            });
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

module.exports = { addTutorial,addSection };