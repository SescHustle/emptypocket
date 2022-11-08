module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'prettier', 'eslint:recommended', 'plugin:n/recommended'],
	plugins: ['prettier', 'n'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {},
};
