const mongoose = require('mongoose');
const crypto = require('crypto');
const User = require('./modules/Users.js');
const objectId = require("mongodb").ObjectID;
mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://localhost:27017/vue_black_jack", { useNewUrlParser: true }); 
mongoose.set('useCreateIndex', true);



exports.createUser = function(userData){
	let user = {
		name: userData.name,
		email: userData.email,
		password: hash(userData.password)
	}

	return new User(user).save()
		.then((doc)=>{
			return doc;
		})
		.catch(()=> {return false});
}


exports.checkUser = function(userData) { 
	return User
		.findOne({email: userData.email})
		.then((doc)=>{
			if(doc){
				if ( doc.password == hash(userData.password) ){
					return Promise.resolve(doc);
				} else {
					return false; 
				}
			}else{				
				return false; 
			}			
		}).catch(()=>{
			return false;
		});
}

exports.updateUser = function(data){
	return User.findOneAndUpdate({"_id": new objectId(data.id)}, {bet: data.cash}, (err, result)=>{
		if (err) throw err;
		console.log(result);
	});
}

function hash(text) {
	return crypto.createHash('sha1')
	.update(text).digest('base64')
}