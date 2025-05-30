// environment.js

// ✅ Load environment variables BEFORE accessing process.env
require("dotenv").config();

const development = {
	name: "development",
	db: process.env.DB_DEVELOPMENT,
	db_name: process.env.DB_NAME_DEVELOPMENT,
	deployment: process.env.DEPLOYMENT,
};

const production = {
	name: "production",
	db: process.env.DB,
	db_name: process.env.DB_NAME,
	deployment: process.env.DEPLOYMENT,
};

// ✅ Dynamically export based on ENVIRONMENT
module.exports =
	process.env.ENVIRONMENT === "development" ? development : production;
