const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
// app.use(express.urlencoded({extended: false}));

const databaseName = 'list_app';
const tableName = 'items';
connection.query('create database if not exists ??;', list_app);
connection.query('use ??', list_app);
connection.query('create table if not exists items(id int auto_increment, name varchar(255), isDone boolean, index(id))');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.render('index.ejs', {items: results});
    }
  );
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/create', (req, res) => {
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.itemName],
    (error, results) => {
      res.redirect('/index');
    }
  );
});

app.post('/delete/:id', (req, res) => {
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.redirect('/index');
    }
  );
});

app.get('/edit/:id', (req, res) => {
  connection.query(
    'SELECT * FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.render('edit.ejs', {item: results[0]});
    }
  );
});

app.post('/update/:id', (req, res) => {
  // 選択されたメモを更新する処理を書いてください
  connection.query(
    'UPDATE items SET name = ? WHERE id = ?',
    [req.body.itemName, req.params.id],
    (error, results) => {
      res.redirect('/index');
    }
  );
  // 以下の一覧画面へリダイレクトする処理を削除してください
});

connection.connect();

const port = process.removeListener.PORT || 3000;

app.listen(port)