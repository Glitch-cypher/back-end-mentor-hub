const { query } = require("../db");

// 1. getAllFeedback()
// 2. addFeedback(feedbacktext,week,date) INSERT feedbacktext, week, date INTO table
// 3. deleteFeedback(id)
// 4. updateFeedback(id, feedbacktext)

//get all feedback (we will sort the specific week out after if array returns)

async function getAllFeedback() {
  const result = await query(`SELECT * FROM feedback;`);
  return result.row;
}

// add feedback

async function addFeedback(feedbacktext, week, date) {
  const result = await query(
    `INSERT INTO feedback (feedback, week, date) VALUES ($1, $2, $3);`,
    [feedback, week, date]
  );
  return result.row;
}

// deleteFeedback

async function deleteFeedback(id) {
  const result = await query(`DELETE FROM feedback WHERE id = ($1);`, [id]);
  return result;
}

// update feedback
async function updateFeedback(id, feedbacktext) {
  // const result = await query(`UPDATE feedback `)
}
