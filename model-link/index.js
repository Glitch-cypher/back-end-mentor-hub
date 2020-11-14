const { query } = require("../db");

//get all feedback (we will sort the specific week out after if array returns)

async function getAllLinks() {
  const result = await query(`SELECT * FROM link;`);
  return result.rows;
}

// add feedback

async function addLink(projectLink, week) {
  const result = await query(
    `INSERT INTO link (projectLink, week) VALUES ($1, $2) RETURNING *;`,
    [projectLink, week]
  );
  return result.rows;
}

// deleteFeedback

async function deleteLink(id) {
  const result = await query(`DELETE FROM link WHERE id = ($1);`, [id]);
  return result.rows;
}

// update feedback

async function updateLink(id, projectLink) {
  const result = await query(
    `UPDATE link SET projectLink = ($1) WHERE id = ($2) RETURNING *;`,
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
