const { Client } = require("pg");
const postgresOption = require("../utils/config").data.postgres.option;

let client;

export default {
  selectTodoAll: async function () {
    try {
      client = new Client(postgresOption);
      await client.connect();
      console.log("Connected successfully in async");
      const allRows = await client.query(
        "select content, status, favorite, id_seq from todos_table ORDER BY updated_date DESC"
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
      const createCount = await client.query(
        "insert into todos_table (content, status, registered_date, updated_date ) values($1, 'TODO', current_timestamp, current_timestamp)",
        [content]
      );
      return createCount.rowCount;
    } catch (err) {
      console.log("Something wrong happend", e);
    } finally {
      await client.end();
      console.log("Client disconnected successfully");
    }
  },
  updateStatus: async function (id, status) {
    try {
      client = new Client(postgresOption);
      await client.connect();
      console.log("Connected successfully in async");
      const updateStatusCount = await client.query(
        "update todos_table set status = $1, updated_date = current_timestamp where id_seq = $2",
        [status, id]
      );
      return updateStatusCount.rowCount;
    } catch (err) {
      console.log("Something wrong happend", e);
    } finally {
      await client.end();
      console.log("Client disconnected successfully");
    }
  },
  updateFavorite: async function (id, favorite) {
    try {
      client = new Client(postgresOption);
      await client.connect();
      console.log("Connected successfully in async");
      const updateFavoriteCount = await client.query(
        "update todos_table set favorite = $1, updated_date = current_timestamp where id_seq = $2",
        [favorite, id]
      );
      return updateFavoriteCount.rowCount;
    } catch (err) {
      console.log("Something wrong happend", e);
    } finally {
      await client.end();
      console.log("Client disconnected successfully");
    }
  },
};
