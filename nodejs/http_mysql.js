var http = require("http");
var mysql = require("mysql");
var sys = require("sys");
var url = require("url");

var serverPort = 8080;

var db = mysql.createClient({
	database: "teste",
	host: "localhost",
	password: "",
	user: "root"
});

http.createServer(function(request, response) {
	var url_parts = url.parse(request.url, true);
	var aParam = url_parts.query;
	
	switch (aParam.action) {
		case "municipios":
			db.query("SELECT * FROM tabela", function (error, results, fields) {
				if (error) {
					throw error;
				}
				
				console.log(JSON.stringify(results));
				
				db.end();
			});
			
			response.writeHeader(200, { "Content-Type": "text/plain" });
			response.write("Municípios OK");
			response.end();
			
			break;
		case "politicos":
			response.writeHeader(200, { "Content-Type": "text/plain" });
			response.write("Politicos OK");
			response.end();
			
			break;
		case "profile":
			response.writeHeader(200, { "Content-Type": "text/plain" });
			response.write("Profile OK");
			response.end();
			
			break;
		case "suggest":
			response.writeHeader(200, { "Content-Type": "text/plain" });
			response.write(JSON.stringify({"teste":"abc"}));
			response.end();
			
			break;
		case undefined:
			response.writeHeader(404);
			response.end();
			
			break;
		default:
			response.writeHeader(404);
			response.end();
	}
}).listen(serverPort);

console.log("Server running on " + serverPort);
