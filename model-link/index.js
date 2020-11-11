const { query } = require("../db");

//get all feedback (we will sort the specific week out after if array returns)

async function getAllLinks(week) {
  const result = await query(`SELECT * FROM feedback WHERE week = ($1);`, [
    week,
  ]);
  return result.rows;
}

// add feedback

async function addLink(projectLink, week) {
  const result = await query(
    `INSERT INTO feedback (projectLink, week) VALUES ($1, $2);`,
    [projectLink, week]
  );
  return result.rows;
}

// deleteFeedback

async function deleteLink(id) {
  const result = await query(`DELETE FROM projectLink WHERE id = ($1);`, [id]);
  return result.rows;
}

// update feedback

async function updateLink(id, projectLink) {
  const result = await query(
    `UPDATE link SET projectLink = ($1) WHERE id = ($2)`,
    [projectLink, id]
  );
  return result.rows;
}

module.exports = {
  getAllLinks,
  addLink,
  deleteLink,
  updateLink,
};