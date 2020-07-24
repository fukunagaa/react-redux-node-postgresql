const { Client } = require("pg");
const postgresOption = require("../utils/config").data.postgres.option;

let client;

export default {
  selectTodoAll: async function () {
    try {
      client = new Client(postgresOption)
      await client.connect();
      console.log("Connected successfully in async");
      const allRows = await client.query(
        "select id, content, status, favorite from todos_table"
      );
      return allRows.rows;
    } catch (err) {
      console.log("Something wrong happend", e);
    } finally {
      await client.end();
      console.log("Client disconnected successfully");
    }
  },
  createTodo: async function (id, content) {
    try {
      client = new Client(postgresOption);
      await client.connect();
      console.log("Connected successfully in async");
      const result = await client.query(
        "insert into todos_table (id, content, status, registered_date, updated_date ) values($1, $2, 'TODO', current_timestamp, current_timestamp)",
        [id, content]
      );
      return result.rowCount;
    } catch (err) {
      console.log("Something wrong happend", e);
    } finally {
      await client.end();
      console.log("Client disconnected successfully");
    }
  },
};
