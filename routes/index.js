const express = require("express");
const router = express.Router();

const {
  getAllFeedback,
  addFeedback,
  deleteFeedback,
  updateFeedback,
} = require("../model/index");

//Get by week request
router.get("/", async function (req, res, next) {
  console.log("request made");
  const { week } = req.body;
  const result = await getAllFeedback(week);
  console.log("It worked");
  res.json({ success: true, data: result });
});

// req.body = {
//   "week": "2"
// }

//Post new feedback request
router.post("/", async function (req, res, next) {
  console.log("request made");
  const { feedback, week, date } = req.body;
  const result = await addFeedback(feedback, week, date);
  console.log("It worked");
  res.json({
    success: true,
    message: `This feedback was added to week ${week}`,
  });
});

/*
{
  "feedback": "Backend was crap",
  "week": 2,
  "date": "20/03/2020"
} */

//Delete feedback request
router.delete("/:id", async function (req, res, next) {
  const id = req.params.id;
  const result = await deleteFeedback(id);
  res.json({ success: true, data: result });
});

//Patch edit feedback for new feedback
router.patch("/:id", async function (req, res, next) {
  const { feedback } = req.body;
  const id = req.params.id;
  let result = await updateFeedback(id, feedback);
  res.json({ success: true, data: result });
});

module.exports = router;
