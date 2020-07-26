export const getTodoList = (data) => {
  console.log("開始★");
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
      },
    };
    allIds.push(intId);
  });
  return { allIds, byIds };
};
