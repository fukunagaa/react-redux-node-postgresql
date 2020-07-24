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
        "select content, status, favorite, id_seq from todos_table"
      );
      return allRows.rows;
    } catch (err) {
      console.log("Something wrong happend", e);
    } finally {
      await client.end();
      console.log("Client disconnected successfully");
    }
  },
  createTodo: async function (content) {
    try {
      client = new Client(postgresOption);
      await client.connect();
      console.log("Connected successfully in async");
      const result = await client.query(
        "insert into todos_table (content, status, registered_date, updated_date ) values($1, 'TODO', current_timestamp, current_timestamp)",
        [content]
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
