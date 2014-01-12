#用户模块
====================

## 注册

(1) __url__: ``/signup``      
(2) __request__:

```
{
    'username': 'beforeload',
    'email': 'fe.daniel91@gmail.com',
    'password': '123456'
    'repeatPassword': '123456'
}
```

(3) __response__:

```
{
    'code': 200, /* 200 成功 400 失败*/
    'msg': "信息"
}
```

## 登录

(1) __url__: ``/login``           
(2) __request__:

```
{
    'email': 'fe.daniel91@gmail.com',
    'password': '123456'
}
```

(3) __response__:

```
{
    'code': 200, /* 200 成功 400 失败*/
    'msg': "信息"
}

```

## 登出

(1) url: ``/logout``          
(2) response: 
```
{
    'code': 200, /* 200 成功 400 失败*/
    'msg': '信息'
}
```
