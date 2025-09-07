const { blogServices } = require("../services");

async function createBlogs(req, res) {
    try {
        const { heading, date, tagline, desc, instituteId } = req.body;
        const blog = await blogServices.addBlogs({ heading, date, tagline, desc, instituteId });
        return res
            .status(200)
            .json({
                success: true,
                message: "Added Blogs Successfully",
                blog
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

async function getBlogs(req, res) {
    try {
        const { id } = req.params;
        const blogs = await blogServices.fetchBlogs(id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched Blogs Successfully",
                blogs
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: true,
                message: error.message
            });
    }
}

async function getBlog(req, res) {
    try {
        const blog = await blogServices.fetchSingleBlog(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched Blog Successfully",
                blog
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: true,
                message: error.message
            });
    }
}

async function updateBlog(req, res) {
    try {
        const { heading, date, tagline, desc } = req.body;

        const blog = await blogServices.editBlog(req.params.id, { heading, date, tagline, desc })
        return res
            .status(200)
            .json({
                success: true,
                message: "Edited Blog Successfully",
                blog
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

async function deleteBlog(req,res) {
    try {
        const blog = await blogServices.deleteBlog(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Deleted Successfully"
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
    createBlogs,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
}