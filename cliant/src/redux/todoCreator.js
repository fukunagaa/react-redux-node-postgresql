export const getLocalTodoList = (data) => {
  let byIds = new Object();
  let allIds = [];
  data.map((obj) => {
    let intId = Number(obj.id_seq);
    byIds = {
      ...byIds,
      [intId]: {
        content: obj.content,
        status: obj.status,
        favorite: obj.favorite,
        changingFlag: false,
      },
    };
    allIds.push(intId);
  });
  return { allIds, byIds };
};
