const mysqul = require("mysqul");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "FloridaGators",
    database: "department_DB",
    database: "role_DB",
    database: "employee_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
   
}