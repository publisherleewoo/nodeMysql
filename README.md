 npm에 아래와같이 나와서 통째로 복사 붙여넣기 했는데 connection.end();도 함께넣었더니 Cannot enqueue Query after invoking quit 라는 에러가 떴다. 유의하자.





```javascript
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
// connection.connect();   
// 암묵적으로 연결하기때문에 connect와 end는 써줄필요없다.  사용시 두번의 접속시에 에러가난다. 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
// connection.end();

```








# v

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
