var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password: "root",
    database: "signup_DB"
})

connection.connect(function(err){
    console.log("connected ass id: "+connection.threadId);
    })
