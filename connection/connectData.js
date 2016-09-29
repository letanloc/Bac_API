var MongoDB =require('mongodb').Db;
var Server  =require('mongodb').Server;
var local  ='localhost';
var dbPort =27017;
var  dbname ="db_suc_khoe";
var db  =new MongoDB (dbname,new Server(local,dbPort,{auto_reconnect:true}),{W:1}
);
db.open(function(error,d){
	if(error){
	}else {	
		var a;
			console.log(" connection to database"+dbname);
	}
});
module.exports={
		users:db.collection('Users')

};
