const db = {
    'user': [
        { id: 1, name: "Joaquin" },
        { id: 2, name: "Pedro" },
        { id: 3, name: "Juan" },
        { id: 4, name: "Ana" },
        { id: 5, name: "Sofia" }
    ]
};

function list(table) {
    return db[table];
}

function get(table) {
    let col = list(table);
    return col.filter(item => item.id === id)[0] || null;
}

function upsert(table, data) {
    db[table].push(data)
}

function remove(table, id) {    
    return true;
}

module.exports = {
    list, get, upsert, remove
}