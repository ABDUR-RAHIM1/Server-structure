const qestionsModel = require("../model/questions")

const getAllQuestion = async(req, res) => {
      try {
           const questions = await qestionsModel.find();
           res.status(200).json({message : "questions", questions})
      } catch (error) {
          res.status(500).json({ message: "somthing went wrong", error: error.message })
      }
}


const addQuestion = async (req, res) => {
     const {   ques, ans,options } = req.body;
     try {
          const newQestion = await qestionsModel({
               ques, ans,options
          });

          const question = await newQestion.save();
          res.status(201).json({ message: "Question add successfuly", question: question })
     } catch (error) {
          res.status(500).json({ message: "somthing went wrong", error: error.message })
     }
}



module.exports = { getAllQuestion, addQuestion }