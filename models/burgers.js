var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        })
    },

    update: function(id, cb){
        orm.update(id ,cb);
    },

    create: function(name, cb){
        orm.create(name, function(results) {
            cb(results)
        });
    }
}

module.exports = burger;