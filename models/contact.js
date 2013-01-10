var mongodb = require('./db')

function Contact(name, email, message, time){
	this.name = name
	this.email = email
	this.message = message
	
	if(time){
		this.time = time
	}else{
		this.time = new Date()
	}
}

module.exports = Contact

Contact.prototype.save = function(callback){
	var contact = {
		name: this.name
		email: this.email,
		message: this.message,
		time: this.time
	}

	mongodb.open(function(err,db){
		if(err){
			return callback(err)
		}

		db.collection('contact', function(err,collection){
			if(err){
				mongodb.close()
				return callback(err)
			}

			collection.ensureIndex('name')
			collection.insert(contact, {
				safe:true
			}, function(err,contact){
				mongodb.close()
				callback(err,contact)
			})
		})
	})
}

Contact.get = function get(article, callback){
	mongodb.open(function(err, db){
		if(err){
			return callback(err)
		}

		db.collection('contact', function(err, collection){
			if(err){
				mongodb.close()
				return callback(err)
			}

			var query = {}
			if(article){
				query.article = article
			}

			collection.find(query).sort({
				time: -1
			}).toArray(function(err,docs){
				mongodb.close()
				if(err){
					callback(err, null)
				}

				var contacts = []
				docs.forEach(function(doc, index){
					var contact = new Contact(doc.name, doc.email,doc)
					contacts.push(contact)
				})
				callback(null, contacts)
			})
		})
	})	
}


