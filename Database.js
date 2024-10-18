import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'elibrary',
  password:'Root@123'
})

connection.connect((err)=>{
    if(err){
        console.log('connection failed',err)
    }
    console.log('database connected sucessfully')
})






// CREATE TABLE Books (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     bookid varchar(50),
//     title VARCHAR(255) NOT NULL,
//     author varchar(50),
//     genre VARCHAR(50),
//     image longblob,
//     file longblob,
//     availability BOOLEAN DEFAULT TRUE
// );











export default  connection