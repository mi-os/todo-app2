# ToDo App ( Node.js + Express + MySQL )

- Node.js (v12.16.2)
- npm (v6.14.4)

![](todo-app-480.gif)

**データベース作成**
```
CREATE DATABASE list_app;
CRAETE TABLE items (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```


**ローカルで実行するコマンド**
```
npm install
source ~/.bash_profile
mysql.server start
```

**アプリケーションの実行**
```
node app.js
```

**実行結果を確認する**
```
http://localhost:3000/
```


