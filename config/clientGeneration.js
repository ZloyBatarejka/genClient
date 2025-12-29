const { genClients } = require("../generator/genClients");

const {
	swaggerGenConfig,
	swaggerFilesAndClientsPaths,
} = require("./clientConfigs");

genClients(swaggerGenConfig, swaggerFilesAndClientsPaths);

