const { query } = require("../index");
require("dotenv").config();

const sqlStatement = `
CREATE TABLE feedback(
id SERIAL PRIMARY KEY,
feedback TEXT,
week INT,
date TEXT
)
`;

async function createTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createTable();
