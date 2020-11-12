const { query } = require("../db");

// 1. getAllFeedback()
// 2. addFeedback(feedbacktext,week,date) INSERT feedbacktext, week, date INTO table
// 3. deleteFeedback(id)
// 4. updateFeedback(id, feedbacktext)

//get all feedback (we will sort the specific week out after if array returns)

async function getAllFeedback(week) {
  const result = await query(
    `SELECT * FROM feedback WHERE week = ($1) ORDER BY date;`,
    [week]
  );
  return result.rows;
}

// add feedback

async function addFeedback(feedbacktext, week, date) {
  const result = await query(
    `INSERT INTO feedback (feedback, week, date) VALUES ($1, $2, $3) RETURNING *;`,
    [feedbacktext, week, date]
  );
  console.log(result.rows);
  return result.rows;
}

// deleteFeedback

async function deleteFeedback(id) {
  const result = await query(`DELETE FROM feedback WHERE id = ($1);`, [id]);
  return result.rows;
}

// update feedback

async function updateFeedback(id, feedbacktext) {
  const result = await query(
    `UPDATE feedback SET feedback = ($1) WHERE id = ($2) RETURNING *;`,
    [feedbacktext, id]
  );
  return result.rows;
}

module.exports = {
  getAllFeedback,
  addFeedback,
  deleteFeedback,
  updateFeedback,
};
