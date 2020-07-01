const nanoid = require("nanoid");

const TABLA = "auth";
module.exports = (injectedStore) => {
  let store = injectedStore;
  try {
    if (!store) {
      store = require("../../../store/dummy");
    }

    const upsert = (data) => {
      const authData = {
        id: data.id ? (id = body.id) : (id = nanoid.nanoid(4)),
        username: data.username
          ? (username = data.username)
          : "Usuario o contraseña inavlida",
        password: data.password
          ? (password = data.password)
          : "Usuario o contraseña inavlida",
      };
      return store.upsert(TABLA, authData);
    };
    return { upsert };
  } catch (err) {
    return err.message;
  }
};
