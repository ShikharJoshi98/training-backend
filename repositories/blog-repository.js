const CrudRepository = require('./crud-repository');
const { Blogs } = require("../models");

class BlogsRepository extends CrudRepository{
    constructor() {
        super(Blogs);
    }
}

module.exports = BlogsRepository;