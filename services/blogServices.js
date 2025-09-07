const { BlogsRepository } = require("../repositories")

const blogRepository = new BlogsRepository();

async function addBlogs(data) {
    try {
        const response = await blogRepository.create(data);
        return response;
    } catch (error) {
        console.log("error in blogservices in addBlogs : ", error.message);
    }
}

async function fetchBlogs(id) {
    try {
        const response = await blogRepository.getByType("instituteId", id);
        return response;
    } catch (error) {
        console.log("error in blogservices in fetchBlogs : ", error.message);
    }
}

async function fetchSingleBlog(id) {
    try {
        const response = await blogRepository.get(id);
        return response;
    } catch (error) {
        console.log("error in blogservices in fetchSingleBlog : ", error.message);
    }
}

async function editBlog(id,data) {
    try {
        const response = await blogRepository.update(id, data);
        return response;
    } catch (error) {
        console.log("error in blogservices in fetchSingleBlog : ", error.message);
    }
}

async function deleteBlog(id) {
    try {
        const response = await blogRepository.destroy(id);
        return response;
    } catch (error) {
        console.log("error in blogservices in deleteBlog : ", error.message);
    }
}

module.exports = {
    addBlogs,
    fetchBlogs,
    fetchSingleBlog,
    editBlog,
    deleteBlog
};