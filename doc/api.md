RESTful API接口
==============

## 获取网站全局的配置，站点参数等
    /index (GET) 

## 已登录用户的个人信息，阅读过的书籍
    /user/:userid (GET)

## 修改个人信息
    /user/update (PUT)
    params: userid

## 退出登录
    /user/logout (GET)

## 用户注册
    /user/signup (POST)

## 用户阅读书籍信息
    /:userid/books (GET)

## 用户增加阅读书籍
    /:userid/books (POST)

## 用户修改阅读书籍
    /:userid/books (PUT)

## 用户删除阅读书籍
    /:userid/books (DELETE)

## 获取图书列表
    /books      (GET)
    /books/list (GET)

## 获取图书信息
    /book/:bookid (GET)

## 添加图书
    /book/  (POST)

## 修改图书
    /book/:bookid (PUT)

## 删除图书
    /book/:bookid (DELETE)
