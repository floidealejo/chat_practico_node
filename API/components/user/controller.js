const nanoid = require("nanoid");

const TABLA = "user";

module.exports = (injectedStore) => {
  let store = injectedStore;
  try {
    if (!store) {
      store = require("../../../store/dummy");
    }
    const list = () => {
      return store.list(TABLA);
    };
    const get = (id) => {
      return store.get(TABLA, id);
    };

    const upsert = (body) => {
      const user = {
        id: body.id ? (id = body.id) : (id = nanoid.nanoid(4)),
        name: body.name,
        lastname: body.lastname,
        username: body.username,
      };
      return store.upsert(TABLA, user);
    };
    return { list, get, upsert };
  } catch (err) {
    return err.message;
  }
};
