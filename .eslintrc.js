module.exports = {
    'root': true,
    'extends': [
        'eslint:recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': { 'project': ['./tsconfig.json'] },
    'plugins': [
        '@typescript-eslint'
    ],
    'globals': {
        'setTimeout': 'readonly',
        'setInterval': 'readonly',
        'console': 'readonly'
    },
    'overrides': [{
        'files': ['*.ts', '*.tsx'],
        'extends': [
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
        'parserOptions': {
            'project': ['./tsconfig.json']
        },
    }],
    'rules': {
        'linebreak-style': 0,
        'comma-dangle': 0,
        'indent': ['error', 4],
        'max-len': ['error', 120],
        'object-curly-spacing': ['error', 'always'],
        'arrow-parens': ['error', 'as-needed'],
        'quotes': ['error', 'single'],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'no-redeclare': ['error', { 'builtinGlobals': false }],
        'sort-imports': ['warning', {
            'ignoreCase': false,
            'ignoreDeclarationSort': false,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
            'allowSeparatedGroups': true
        }]
    }
};
