const CrudRepository = require("./crud-repository");
const { Chapter } = require("../models");

class ChapterRepository extends CrudRepository{
    constructor() {
        super(Chapter)
    }

    async findChapter(instituteId, tutorialId) {
        try {
            const response = await this.model.findOne({
                where: { instituteId,tutorialId }
            });

            return response;
        } catch (error) {
            console.log("Error in findChapter in ChapterRepository", error.message);
        }
    }
}

module.exports = ChapterRepository;