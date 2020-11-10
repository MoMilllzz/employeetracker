const inquirer = require("inquirer");
const path = require ("path");
const fs = require ("fs");
const Choices = require("inquirer/lib/objects/choices");
const connection = require("./db/connection");
const questions = [
    {
        type: "list",
        name: "departments",
        message: "What department would you like to view",
        choices: [
"view all employees", "view all roles", "view all departments"
        ]
    }
    ]

    function viewallemployees(){
        connection.query("select * from employee", function (error, res){
            if (error) throw error
            console.log (res)
            connection.end ()
        })
    }

    viewallemployees()