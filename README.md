# todo-app2
prog-todo-app

-Node.js Express

-ローカルで実行するコマンド
source ~/.bash_profile
mysql.server start

-add ↓ to package.json if start app.js at local
"scripts": {
    "start": "nodemon -r './.module' ./app.js"
  },

-DB local
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'list_app'
});

---
-heroku
https://taskmgmtapp.herokuapp.com/
cleardb-tetrahedral-60158
mysql://bc5442e52bb181:362f3522@us-cdbr-iron-east-01.cleardb.net/heroku_2b76291a6e0ce81?reconnect=true
heroku config:set DATABASE_URL='mysql://bc5442e52bb181:362f3522@us-cdbr-iron-east-01.cleardb.net/heroku_2b76291a6e0ce81?reconnect=true'

host: 'us-cdbr-iron-east-01.cleardb.net',
user: 'bc5442e52bb181',
password: '362f3522',
database: 'heroku_2b76291a6e0ce81'

mysql --host=us-cdbr-iron-east-01.cleardb.net --user=bc5442e52bb181 --password=362f3522 --reconnect heroku_2b76291a6e0ce81

-Database
table: 'items',


CREATE TABLE IF NOT EXISTS items (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL
);

DESCRIBE items;

$heroku local

-package.json
"scripts": {
    "start": "nodemon -r './.module' ./app.js"
  },

  heroku run node app.js

  https://taskmgmtapp.herokuapp.com/