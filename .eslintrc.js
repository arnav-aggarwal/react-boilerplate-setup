module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
    'parser': 'babel-eslint',
    'plugins': ['react', 'jsx-a11y', 'import'],
    'rules': {
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/no-unescaped-entities': [0],
        'react/no-array-index-key': [0],
        'react/prop-types': [0],
        'prefer-template': [0],
        'comma-dangle': [0],
        'import/newline-after-import': [0],
        'no-mixed-operators': [0],
        'indent': ['error', 4],
        'react/jsx-indent': [2, 4],
        'max-len': [0], 
    },
    'extends': 'airbnb',
};
