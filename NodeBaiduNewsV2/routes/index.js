var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var newstype = req.query.newstype;

  var connection = mysql.createConnection({
	    host: 'localhost',
	    post:8088,
	    user: 'yqh',
	    password: '437929',
	    database:'baidunews'
	});

	connection.connect();

	//查询
	connection.query('select * from `news` where `newstype` = ?',[newstype], function(err, rows, fields) {
	    res.json(rows); //响应 将数组以json的形式发送给前端
	    // console.log('查询结果为: ', rows);
	});

});

module.exports = router;
