const pg = require("pg");

var config = {
   user: "testuser",
   database: "testdb",
   password: "passontogether1",
   host: "ec2-54-166-157-164.compute-1.amazonaws.com",
   port: 5432,
   max: 10,
   idleTimeoutMillis: 30000
};

const client = new pg.Client(config);

module.exports.endpoint= function(req, cb) {
client.connect();

client.on("error", function (err, client) {
   console.error("client error", err.message, err.stack);
});

client.query("CREATE TABLE demo(fname varchar(10), lname varchar(10)");
client.end(); 
client.on("end",function(err, res) {
   /*if(err) {
       return console.error("error running query", err);
   }*/
   console.log("sucess:", res);
  //client.end();
  cb(undefined, res);
}); 
};
