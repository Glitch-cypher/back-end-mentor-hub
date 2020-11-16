const express = require("express");
const router = express.Router();

const {
  getAllFeedback,
  addFeedback,
  deleteFeedback,
  updateFeedback,
} = require("../model/index");

const {
  getAllLinks,
  addLink,
  deleteLink,
  updateLink,
} = require("../model-link/index");

//get all links by week
router.get("/link", async function (req, res, next) {
  console.log("get request made");
  const { week } = req.query;
  const result = await getAllLinks(week);
  console.log("get link worked");
  res.json({ success: true, data: result });
});

// add link
router.post("/link", async function (req, res, next) {
  console.log("post request made");
  const { projectlink, week } = req.body;
  console.log(projectlink);
  const result = await addLink(projectlink, week);
  console.log("post link worked");
  res.json({
    success: true,
    data: result,
  });
});

//delete link
router.delete("/link/:id", async function (req, res, next) {
  const id = req.params.id;
  const result = await deleteLink(id);
  res.json({ success: true, data: result });
});

// update link
router.patch("/link/:id", async function (req, res, next) {
  console.log("patch request made");
  const { projectLink } = req.body;
  const id = req.params.id;
  const result = await updateLink(id, projectLink);
  console.log("patch request worked");
  res.json({ success: true, data: result });
});

//Get by week request
router.get("/feedback", async function (req, res, next) {
  console.log("get request made");
  const result = await getAllFeedback();
  console.log("get request worked");
  res.json({ success: true, data: result });
});

//Post new feedback request - allow
router.post("/feedback", async function (req, res, next) {
  console.log("post request made");
  const { feedback, week, date } = req.body;
  const result = await addFeedback(feedback, week, date);
  console.log("post request worked");
  res.json({
    success: true,
    data: result,
  });
});

//Delete feedback request
router.delete("/feedback/:id", async function (req, res, next) {
  const id = req.params.id;
  const result = await deleteFeedback(id);
  res.json({ success: true, data: result });
});

//Patch edit feedback for new feedback
router.patch("/feedback/:id", async function (req, res, next) {
  const { feedback } = req.body;
  const id = req.params.id;
  const result = await updateFeedback(id, feedback);
  res.json({ success: true, data: result });
});

module.exports = router;
