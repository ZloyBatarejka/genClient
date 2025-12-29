const { resolve } = require("node:path");


const getSwaggerSource = (swagger) => `./swagger/${swagger}`;

const genClients = async (config, swaggerFileMap) => {

	const { generateApi } = await import("swagger-typescript-api");

	return Promise.all(
		Object.entries(swaggerFileMap).map(([swaggerFile, clientPath]) =>
			generateApi({
				...config,
				input: resolve(process.cwd(), swaggerFile),
				output: resolve(process.cwd(), clientPath),
			}),
		),
	)
};



const getSwaggerFilesAndClientsPaths = (entries, getTarget) =>
	Object.entries(entries).reduce((acc, [source, target]) => {
		acc[getSwaggerSource(source)] = getTarget(target);
		return acc;
	}, {});

module.exports = {
	genClients,
	getSwaggerFilesAndClientsPaths,
};
