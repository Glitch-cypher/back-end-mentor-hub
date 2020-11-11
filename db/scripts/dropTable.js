const { query } = require("../index");
require("dotenv").config();

const sqlStatement = `
DROP TABLE public.link
`;

async function dropTable() {
  let result = await query(sqlStatement);
}

dropTable();
