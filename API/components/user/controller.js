const nanoid = require("nanoid");
const auth = require("../auth");
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

    const upsert = async (body) => {
      const user = {
        id: body.id ? (id = body.id) : (id = nanoid.nanoid(4)),
        name: body.name,
        lastname: body.lastname,
        username: body.username,
      };
      if (body.password || body.username) {
        await auth.upsert({
          id: user.id,
          username: user.username,
          password: body.password,
        });
      }
      return store.upsert(TABLA, user);
    };
    return { list, get, upsert };
  } catch (err) {
    return err.message;
  }
};
