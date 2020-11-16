const { query } = require("../index");
require("dotenv").config();

const sqlStatement = `
DROP TABLE public.feedback
`;

async function dropTable() {
  let result = await query(sqlStatement);
}

dropTable();
