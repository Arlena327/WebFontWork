var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    post:8088,
    user: 'yqh',
    password: '437929',
    database:'baidunews'
});

/* 后台路由 */

// 获取所有新闻列表
router.get('/getnewsAdmin', function(req, res, next) {
	// 查询数据库 并让数据按序排列 新添加的在前面显示
	connection.query('select * from `news` ORDER BY id DESC', function(err, rows) { 
	    res.json(rows); //响应 将数组以json的形式发送给前端
	});
});



// 修改模态框取值
router.get('/curnews',function(req,res){
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM news WHERE id = ?',[newsid],function(err,rows){
		res.json(rows);
	});
});

// 确认更新  Tips 注意post请求中是body 而不是query
router.post('/update',function(req,res){
	var newsid = req.body.newsid,
		newstype = req.body.newstype,
		newimg = req.body.newimg,
		newstitle = req.body.newstitle,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc;
	connection.query('UPDATE news SET newstitle = ?,newstype = ?,newimg = ?,newssrc = ?,newstime = ? WHERE id = ?',[newstitle,newstype,newimg,newssrc,newstime,newsid],function(err,rows){
		res.json(rows.changedRows);
	});
})

// 删除
router.post('/delete',function(req,res){
	var newsid = req.body.newsid;
	connection.query('DELETE FROM news WHERE id = ?',[newsid],function(err,rows){
		res.json(rows);
	});
});


// 插入新闻
router.post('/insert',function(req,res){
	var newstype = req.body.newstype,
		newstitle = req.body.newstitle,
		newimg = req.body.newimg,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc;
	connection.query('INSERT INTO news (newstitle,newstype,newimg,newstime,newssrc) VALUES (?,?,?,?,?)',[newstitle,newstype,newimg,newstime,newssrc],function(err,result){
		if (!err) {
			res.json(result.insertID);
		}
	});
})



module.exports = router;
