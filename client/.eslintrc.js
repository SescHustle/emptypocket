module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'airbnb',
		'prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
	rules: {
		'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
	},
};
