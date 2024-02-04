const { addQuestion } = require("../controller/question");
const { getAllQuestion } = require("../controller/question");

 const router = require("express").Router();


 router.get("/questions", getAllQuestion)
 router.post("/questions", addQuestion)



 module.exports = router