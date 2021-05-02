const express = require("express");
const server = express();
const path = require("path");
const { addAdmin } = require("./models/AdminModel");
const cookieParser = require("cookie-parser");
const fs = require("fs");

require("dotenv").config({path: path.join(__dirname, '..', '.env')});


const PORT = process.env.PORT;


//Server Middlawares
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));


//Setting
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));



//Routes
const RoutesPath = path.join(__dirname, 'routes');
fs.readdir(RoutesPath, (err, files) => {
	if(err) throw new Error(err);
	files.forEach(route => {
		const RoutePath = path.join(RoutesPath, route);
		const Route = require(RoutePath);
		if(Route.path && Route.router) server.use(Route.path, Route.router);
	});
});

server.listen(PORT, () => console.log("Server " + PORT + "da ishlani boshladi"));

// (async () => {
//     let res = await addAdmin("admin", "fulfilladminuchunkod")
// })()