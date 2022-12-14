module.exports = {
	'ignorePatterns': ['**/*.cjs'],
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': ['error', 2],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-single'],
		'semi': ['error', 'never'],
		'no-unused-vars': [2, { 'args': 'none' }],
		'comma-dangle': ['error']
	}
}
