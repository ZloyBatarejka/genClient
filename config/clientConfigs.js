const { getSwaggerFilesAndClientsPaths } = require("../generator/genClients");

const swaggerGenConfig = {
	httpClientType: "fetch",
	singleHttpClient: true,
	cleanOutput: true,
	moduleNameFirstTag: true,
	modular: true,
	unwrapResponseData: true,
	generateUnionEnums: true,
	silent: true,
	templates: "./config/clientTemplates/",
};

const getGenerateTarget = (name) => `./src/core/api/${name}/__generated__`;

const swaggerFilesAndClientsPaths = getSwaggerFilesAndClientsPaths(
	{
		"openapi.json": "openapiGeneratedClient",
	},
	getGenerateTarget,
);

module.exports = {
	swaggerFilesAndClientsPaths,
	swaggerGenConfig,
};
