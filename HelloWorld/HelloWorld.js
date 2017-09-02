var http = require("http"),
    fs = require("fs");
console.log("1");
//var html = fs.readFileSync("./index.html");
http.createServer(function(req,res){
  console.log("2");
  fs.readFile("./index.html", function(err,html){
    res.write(html)
    res.end()
    console.log("3");
  });
  console.log("4");
}).listen(1111)
console.log("5");
