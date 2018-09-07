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

    var sign = function(){
        inquirer.propmpt([{

            name:"name",
            type: "input",
            message: "what is your name?"
        },{

            name: "email",
            type: "input",
            message: "Your email please?"
        },{

            password: "password",
            type: "input",
            message: "Password needed."
        }



        }]).then(function(answer){
            connection.query("Insert INTO input", {
                name:answer.name,
                
            })
        })
    }
