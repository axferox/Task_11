const fsextra = require("fs-extra");
fsextra.removeSync("test/logs/error.logger.log");
fsextra.removeSync("test/logs/combined.logger.log");