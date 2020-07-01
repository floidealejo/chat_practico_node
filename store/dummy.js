const db = {
  user: [
    { id: "1", name: "Alejandro", lastname: "Upegui", username: "alebetau" },
    // { id: "2", name: "Julian", lastname: "Noriega", username: "jubeta" },
  ],
};
const list = async (table) => {
  return db[table];
};
const get = async (table, id) => {
  let collection = await list(table);
  return collection.filter((item) => item.id === id)[0] || null;
};
const upsert = async (table, data) => {
  db[table].push(data);
};
const remove = async (table, id) => {
  return true;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
};
