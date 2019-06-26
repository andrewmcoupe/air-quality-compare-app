module.exports = {
	transform: {
		"^.+\\.(js|jsx)?$": "babel-jest"
	},
	moduleNameMapper: {
		"\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
	},
	setupFiles: ["<rootDir>/node_modules/regenerator-runtime/runtime"]
};
