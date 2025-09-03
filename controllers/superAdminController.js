const { superAdminServices } = require("../services");

async function fetchInstitutes(req,res) {
   try {
       const institutes = await superAdminServices.getInstitutes();
       return res
           .status(200)
           .json({
               success: true,
               message: "institutes fetched successfully",
               institutes
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

async function deleteInstitutes(req,res) {
    try {
        const institute = await superAdminServices.deleteInstitutes(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Institute Deleted Successfully",
                institute
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

async function editInstitute(req,res) {
    try {
        console.log(req.body.data);
        const institute = await superAdminServices.updateInstitute(req.params.id, req.body.data);
        return res
            .status(200)
            .json({
                success: true,
                message: "Institute edited Successfully",
                institute
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

module.exports = {
    fetchInstitutes,
    deleteInstitutes,
    editInstitute
}