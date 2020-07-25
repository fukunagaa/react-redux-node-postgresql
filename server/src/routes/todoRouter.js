import dbaccess from "../db/dbaccess";

export async function createTodo(content) {
  const insertCount = await dbaccess.createTodo(content);
  return insertCount;
}

export async function selectTodoAll() {
  const allRows = await dbaccess.selectTodoAll();
  return allRows;
}

export async function updateTodo(id, status) {
  const updateCount = await dbaccess.updateTodo(id, status);
  return updateCount;
}

export async function updateFavorite(id, favorite) {
    const updateFavorite = await dbaccess.updateFavorite(id, favorite);
    return updateFavorite;
  }