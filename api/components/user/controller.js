const nanoid = require("nanoid");

const table = "user";

module.exports = function(injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require("../../store/dummy");
    }

    function list() {
        return store.list(table);
    }

    function get(id) {
        return store.get(table, id);
    }

    function upsert(body) {
        const user = {
            name: body.name
        }

        if (body.id) user.id = body.id;
        else user.id = nanoid();

        return store.upsert(table, user);
    }

    return {
        list, get, upsert
    };
}
