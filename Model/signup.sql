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
    console.log("connected as id: " + connection.threadId);
    })

    var questions = [
        {
            type: 'input',
            name: 'full name',
            message: "what\'s your full name??"
        },
        {
            type: 'input',
            name: 'email',
            message: "What\'s your email???"
        },  
        {
            type: 'password',
            name: 'myPassword',
            message: "What\'s your password??"
        },

       
    ];

    inquirer.prompt(questions).then(function (answers) {
       
        console.log(JSON.stringify(answers, null, '    '));
   
         console.log(answers.myPassword);

         if (answers.myPassword == "  "){

              console.log("Your right")
         }

         else{
             console.log("wrong password!")
         }

        


         
    });
    
