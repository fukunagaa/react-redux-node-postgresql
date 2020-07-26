import dbaccess from "../db/dbaccess";

export async function createTodo(content) {
  const insertCount = await dbaccess.createTodo(content);
  return insertCount;
}

export async function selectTodoAll() {
  const allRows = await dbaccess.selectTodoAll();
  return allRows;
}

export async function updateStatus(id, status) {
  const updateStatusCount = await dbaccess.updateStatus(id, status);
  return updateStatusCount;
}

export async function updateContent(id, content) {
  const updateContentCount = await dbaccess.updateContent(id, content);
  return updateContentCount;
}

export async function updateFavorite(id, favorite) {
  const updateFavoriteCount = await dbaccess.updateFavorite(id, favorite);
  return updateFavoriteCount;
}
