var connection = require("./connections.js");

var orm = {
    all: function(tableInput, cb){
        connection.query("SELECT * FROM " + tableInput + ";", function(err, res){
            if(err) throw err;
            cb(res)
        })
    },

    update: function(burger_id, cb){

         var query = "UPDATE burgers SET eaten = '1' WHERE id = ?;";
        connection.query(query, burger_id, function(err, result){
            if(err)throw err;
            cb(result);
        })
    },
    create: function (burger_name, res) {
        console.log(burger_name);
        
        var query = "INSERT INTO burgers (burger_name) VALUES (?)"
        connection.query(query, burger_name, function(err, result){
            if(err)throw err;
            res(result);
        });
    }, 

}

module.exports = orm;