const { FAQRepository } = require("../repositories")

const faqRepository = new FAQRepository();

async function createFaq(data) {
  try {
    const faqExist = await faqRepository.getOne("instituteId", data.instituteId);
    const { question, answer } = data;

    if (faqExist) {
      const updatedFaqArray = [...faqExist.faqArray, { question, answer }];

      const response = await faqRepository.updateByType(
        "instituteId",
        { faqArray: updatedFaqArray },
        data.instituteId
      );

      return response;
    } else {
      const faqArray = [{ question, answer }];

      const response = await faqRepository.create({
        faqArray,
        instituteId: data.instituteId,
      });

      return response;
    }
  } catch (error) {
    console.log("Error in createFaq in faqServices:", error.message);
    throw error; // <-- rethrow for better error handling
  }
}


async function getFaq(id,index) {
    try {
        const response = await faqRepository.getOne("instituteId", id);
        
        return response;
    } catch (error) {
        console.log("Error in getFaq in faqServices : ", error.message);
    }
}

async function deleteFaq(instituteId, questionToDelete) {
  try {
    console.log(questionToDelete);
        const faqExist = await faqRepository.getOne("instituteId", instituteId);
    if (!faqExist) {
      throw new Error("FAQ document not found");
    }

    const updatedFaqArray = faqExist.faqArray.filter(
      faq => faq.question !== questionToDelete
    );

    const response = await faqRepository.updateByType(
      "instituteId",
      { faqArray: updatedFaqArray },
      instituteId
    );

    return response;
    } catch (error) {
        console.log("Error in deleteFaq in faqServices : ", error.message);
    }
}

module.exports = {
    createFaq,
    getFaq,
    deleteFaq
};