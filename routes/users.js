var express = require('express');
var router = express.Router();

/*用户注册*/
router.get('/reg', function(req, res) {
  res.render('user/reg', {title: '注册'});
});
/*用户提交注册信息的处理*/
router.post('/reg', function (req, res) {

});
/*显示用户登录表单*/
router.get('/login', function (req, res) {
  res.render('user/login', {title: '登录'});
});
/*用户提交登录信息的处理*/
router.post('/login', function (req, res) {

});
router.get('/logout', function (req, res) {

});



module.exports = router;
