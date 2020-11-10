const util = require("util");

const mysql = require ("mysql") 
const connection = mysql.createConnection ({
    host: "localhost", 
    user: "root",
    password: "American123!", 
    database: "employeetracker"
})
connection.connect()
connection.query = util.promisify(connection.query)
module.exports = connection