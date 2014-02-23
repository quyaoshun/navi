RESTful API接口
==============

## 获取网站全局的配置，站点参数等
    /api/index (GET) 

## 已登录用户的个人信息，阅读过的书籍
    /api/user/:userId (GET)

## 修改个人信息
    /api/user/:userId (PUT)

## 退出登录
    /api/user/logout (GET)

## 用户注册
    /api/user/signup (POST)

## 用户阅读书籍信息
    /api/:userid/books (GET)

## 用户增加阅读书籍
    /api/:userid/books (POST)

## 用户修改阅读书籍
    /api/:userid/books (PUT)

## 用户删除阅读书籍
    /api/:userid/books (DELETE)

## 获取图书列表
    /api/books      (GET)
    /api/books/list (GET)

## 获取图书信息
    /api/books/:bookid (GET)

## 添加图书
    /api/books   (POST)

## 修改图书
    /api/book/:bookid (PUT)

## 删除图书
    /api/book/:bookid (DELETE)
