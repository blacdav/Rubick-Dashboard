const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'your-db-endpoint.rds.amazonaws.com',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});
