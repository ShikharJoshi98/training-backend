const CrudRepository = require("./crud-repository");
const { Testimonial } = require("../models");

class TestimonialRepository extends CrudRepository{
    constructor() {
        super(Testimonial)
    }
}

module.exports = TestimonialRepository;