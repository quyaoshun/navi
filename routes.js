/*
 * GET home page.
 */
var 
/* delete
	crypto = require('crypto'),
	User = require('../models/user.js'),
	Post = require('../models/post.js'),
*/
	site = require('./controllers/site.js'),
	comments = require('./controllers/comments.js')
module.exports = function(app){
    app.get('/', site.index)

    app.post('/post', checkLogin)
    app.post('/post', comments.comment)	

	/*
    app.get('/reg', checkNotLogin)
    app.get('/reg', function(req,res){
        res.render('reg',{
            title:'User Register',
            layout:'layout', 
            user:req.session.user,
            success:req.flash('success').toString(),
            error:req.flash('error').toString()

        }) 
    })
    
    app.post('/reg', checkNotLogin)
    app.post('/reg', function(req,res){
        if(req.body['password-repeat'] != req.body['password']){
            req.flash('error','两次输入的口令不一致') 
            return res.redirect('/reg')
        } 
        
        var md5 = crypto.createHash('md5')
        var password = md5.update(req.body.password).digest('base64')

        var newUser = new User({
            name: req.body.username,
            password: password,
        })

        User.get(newUser.name, function(err, user){
            if(user){
                err = 'Username already exists.'
            }

            if(err){
                req.flash('error', err)
                return res.redirect('/reg')
            }

            newUser.save(function(err){
                if(err){
                    req.flash('error',err)
                    return res.redirect('/reg')
                }

                req.session.user = newUser
                req.flash('success','Register Successed.')
                res.redirect('/')
            })
        })
    })

    app.get('/login', checkNotLogin)
    app.get('/login', function(req, res){
        res.render('login',{
            title:'login',

            user:req.session.user,
            success:req.flash('success').toString(),
            error:req.flash('error').toString()
        }) 
    })

    app.post('/login', checkNotLogin)
    app.post('/login', function(req, res){
        var md5 = crypto.createHash('md5'),
            password = md5.update(req.body.password).digest('base64')
        
        User.get(req.body.username, function(err, user){
            if(!user){
                req.flash('error', 'user does not exist.') 
                return res.redirect('/login') 
            }
            if(user.password != password){
                req.flash('error', 'password is wrong.') 
                return redirect('/')
            }

            req.session.user = user
            req.flash('success','login successed')
            res.redirect('/')
        })
    })

    app.get('/logout', checkLogin)
    app.get('/logout', function(req, res){
        req.session.user = null
        req.flash('success','logout success')
        res.redirect('/')
    })




    app.get('/u/:user', function(req,res){
        User.get(req.params.user, function(err, user){
            if(!user){
                req.flash('error','User is not exist.') 
                return res.redirect('/')
            }

            Post.get(user.name, function(err, posts){
                if(err){
                    req.flash('err',err) 
                    return res.redirect('/')
                } 
                res.render('user',{
                    title:user.name,
                    posts:posts,
                    user : req.session.user,
                    success : req.flash('success').toString(),
                    error : req.flash('error').toString()
                })
            })
        })
    })
*/
}


function checkLogin(req, res, next){
    if(!req.session.user){
        req.flash('error','未登录')
        return res.redirect('/login')
    }
    next()
}


function checkNotLogin(req,res,next){
    if(req.session.user){
        req.flash('error','已登录') 
        return res.redirect('/')
    }
    next()
}
