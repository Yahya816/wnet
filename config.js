var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "srv1672.hstgr.io",
	    user: "u860919425_Waziper",
	    password: "Waziper@321",
	    database: "u860919425_Waziper",
	    charset : "utf8mb4",
	    debug: false,
	    waitForConnections: true,
	    multipleStatements: true
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 