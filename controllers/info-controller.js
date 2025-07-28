const info = (req, res) => {
    res.status(200).json({
        success: true,
        message:"Info API"
    })
}

module.exports = {
    info
}