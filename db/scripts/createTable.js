const { query } = require("../index");
require("dotenv").config();

const sqlStatement = `
CREATE TABLE link(
id SERIAL PRIMARY KEY,
projectLink TEXT,
week INT
)
`;

async function createTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createTable();
