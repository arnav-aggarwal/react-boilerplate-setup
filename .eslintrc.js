module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
    },
    parser: 'babel-eslint',
    plugins: [
        'react',
        'jsx-a11y',
    ],
    rules: {
        //////////////////////////////////////////
        // Starting from the top of ESLint rules//
        //////////////////////////////////////////
        'no-await-in-loop': 1,
        'no-compare-neg-zero': 2,
        'no-cond-assign': 1,
        'no-console': 1,
        'no-control-regex': 2,
        'no-debugger': 0,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': [1, { allowEmptyCatch: true }],
        'no-empty-character-class': 1,
        'no-ex-assign': 1,
        'no-extra-boolean-cast': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': [2, {
            skipStrings: true,
            skipComments: true,
            // skipRegExps: true,
            skipTemplates: true,
        }],
        'no-obj-calls': 2,
        'no-prototype-builtins': 0,
        'no-regex-spaces': 1,
        'no-sparse-arrays': 1,
        'no-template-curly-in-string': 1,
        'no-unexpected-multiline': 1,
        'no-unreachable': 1,
        'no-unsafe-finally': 1,
        'no-unsafe-negation': 1,
        'use-isnan': 2,
        'valid-jsdoc': 1,
        'valid-typeof': 2,

        'accessor-pairs': 1,
        'array-callback-return': 2,
        'block-scoped-var': 1,
        'class-methods-use-this': 1,
        complexity: 0,
        'consistent-return': 0,
        curly: 1,
        'default-case': 0,
        'dot-location': 0,
        'dot-notation': 1,
        'eqeqeq': 1,
        'guard-for-in': 1,
        'no-alert': 1,
        'no-caller': 1,
        'no-case-declarations': 1,
        'no-div-regex': 0,
        'no-else-return': 1,
        'no-empty-function': [1, { allow: ['arrowFunctions', ] }],
        'no-empty-pattern': 2,
        'no-eq-null': 0, // eqeqeq takes care of this
        'no-eval': 1,
        'no-extend-native': 1,
        'no-extra-bind': 1,
        'no-extra-label': 1,
        'no-fallthrough': 1,
        'no-floating-decimal': 1,
        'no-global-assign': 1,
        'no-implicit-coercion': 0,
        'no-implicit-globals': 1,
        'no-implied-eval': 2,
        'no-invalid-this': 1,
        'no-iterator': 1,
        'no-labels': 1,
        'no-lone-blocks': 1,
        'no-loop-func': 0,
        'no-magic-numbers': 0,
        'no-multi-spaces': [1, {
            // ignoreEOLComments: true,
        }],
        'no-multi-str': 1,
        'no-new': 1,
        'no-new-func': 1,
        'no-new-wrappers': 1,
        'no-octal': 1,
        'no-param-reassign': 0,
        'no-proto': 1,
        'no-redeclare': 1,
        // 'no-restricted-properties': don't need,
        'no-return-assign': 0,
        'no-return-await': 1,
        'no-script-url': 1,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 1,
        'no-throw-literal': 1,
        'no-unmodified-loop-condition': 1,
        'no-unused-labels': 1,
        'no-unused-expressions': [1, {
            allowTernary: true,
            allowShortCircuit: true,
        }],
        'no-useless-call': 1,
        'no-useless-concat': 1,
        'no-useless-escape': 1,
        'no-useless-return': 1,
        'no-void': 1,
        'no-warning-comments': 0,
        'no-with': 1,
        'prefer-promise-reject-errors': 1,
        radix: 0,
        'require-await': 1,
        'vars-on-top': 0,
        'wrap-iife': [1, 'inside'],
        yoda: 1,
        strict: 0,
        'init-declarations': 0,
        'no-catch-shadow': 1,
        'no-delete-var': 1,
        'no-label-var': 1,
        'no-restricted-globals': 0,
        'no-shadow': 1,
        'no-shadow-restricted-names': 2,
        'no-undef': 1,
        'no-undef-init': 1,
        'no-undefined': 0,
        'no-unused-vars': 1,
        'no-use-before-define': 2,

        //////////
        // Node //
        //////////
        'callback-return': 0,
        'global-require': 0,
        'handle-callback-err': 1,
        'no-mixed-requires': 1,
        'no-new-require': 1,
        'no-path-concat': 1,
        'no-process-env': 0,
        'no-process-exit': 0,
        'no-restricted-modules': 0,
        'no-sync': 1,

        ////////////
        // Styling//
        ////////////
        'array-bracket-newline': 0,
        'array-bracket-spacing': 0,
        'array-element-newline': 0,
        'block-spacing': 1,
        'brace-style': 1,
        'camelcase': 0,
        'capitalized-comments': 0,
        'comma-dangle': 0,
        'comma-spacing': 1,
        'comma-style': 1,
        'consistent-this': 0,
        'eol-last': 1,
        'func-call-spacing': 1,
        'func-name-matching': 1,
        'func-names': 0,
        'func-style': [1, 'declaration'],
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'indent': [1, 4],
        'jsx-quotes': [1, 'prefer-double'],
        'key-spacing': 1,
        'keyword-spacing': 1,
        'line-comment-positon': 0,
        'linebreak-style': 0,
        'lines-around-comment': 0,
        'max-depth': 0,
        'max-len': 0,
        'max-lines': 0,
        'max-nested-callbacks': 0,
        'max-params': [1, 2],
        'max-statements': 0,
        'max-statements-per-line': 0,
        'multiline-ternary': 0,
        'new-cap': 1,
        'new-parens': 1,
        'newline-per-chained-call': 0,
        'no-array-constructor': 1,
        'no-bitwise': 0,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 1,
        'no-mixed-operators': 0,
        'no-mixed-spaces-and-tabs': 0, //other rules take care of this
        'no-multi-assign': 1,
        'no-multiple-empty-lines': 0,
        'no-nested-ternary': 0,
        'no-new-object': 1,
        'no-plusplus': 0,
        'no-restricted-syntax': 0,
        'no-tabs': 0, // other rules take care of this
        'no-ternary': 0,
        'no-trailing-spaces': 1,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 1,
        'no-whitespace-before-property': 1,
        'nonblock-statement-body-position': 0, // other rules take care of this
        'object-curly-newline': 0,
        'object-curly-spacing': [1, 'always'],
        'object-property-newline': 0,
        'one-var': 1,
        'one-var-declaration-per-line': 1,
        'operator-assignment': 1,
        'operator-linebreak': 0,
        'padded-blocks': 0,
        'padding-line-between-statements': 0,
        'quote-props': 0,
        quotes: [1, 'single'],
        'require-jsdoc': 0,
        semi: 1,
        'semi-spacing': 1,
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': 1,
        'space-before-function-paren': [1, 'never'],
        'space-in-parens': 0,
        'space-infix-ops': 1,
        'space-unary-ops': 1,
        'spaced-comment': 0,
        'template-tag-spacing': 1,
        'unicode-bom': 0,
        'wrap-regex': 0,

        ////////
        // ES6//
        ////////
        'arrow-body-style': [1, 'as-needed'],
        'arrow-parens': [1, 'as-needed'],
        'arrow-spacing': 1,
        'constructor-super': 2,
        'generator-star-spacing': [1, { 'before': false, 'after': true }],
        'no-class-assign': 2,
        'no-confusing-arrow': 0,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 1,
        'no-new-symbol': 2,
        'no-restricted-imports': 0,
        'no-this-before-super': 2,
        'no-useless-computed-key': 1,
        'no-useless-constructor': 1,
        'no-useless-rename': 1,
        'no-var': 1,
        'prefer-arrow-callback': 0,
        'prefer-const': 1,
        'prefer-destructuring': 0,
        'prefer-numeric-literals': 1,
        'prefer-rest-params': 1,
        'prefer-spread': 1,
        'prefer-template': 0,
        'require-yield': 1,
        'rest-spread-spacing': 1,
        'sort-imports': 0,
        'symbol-description': 1,
        'template-curly-spacing': 1,
        'yield-star-spacing': 1,

        //////////
        // React//
        //////////
        'react/display-name': 1,
        'react/forbid-component-props': 0,
        // 'react/forbid-elements': not needed,
        // 'react/forbid-prop-types': not needed,
        // 'react/forbid-foreign-prop-types': not needed,
        'react/no-array-index-key': 1,
        'react/no-children-prop': 1,
        'react/no-danger': 0,
        'react/no-danger-with-children': 1,
        'react/no-deprecated': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 1,
        'react/no-is-mounted': 1,
        'react/no-multi-comp': 0,
        'react/no-render-return-value': 1,
        'react/no-set-state': 0,
        'react/no-string-refs': 1,
        'react/no-unescaped-entities': 0,
        'react/no-unknown-property': 1,
        'react/no-unused-prop-types': 0, // don't need it
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': 1,
        'react/prefer-stateless-function': 1,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 2,
        'react/require-default-props': 0,
        'react/require-optimization': 0,
        'react/require-render-return': 2,
        'react/self-closing-comp': 1,
        'react/sort-comp': 1,
        'react/sort-prop-types': 0,
        'react/style-prop-object': 1,
        'react/void-dom-elements-no-children': 2,


        //////////////////////////////
        // Rules changed in process //
        //////////////////////////////
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-sort-props': 0,
        'react/jsx-max-props-per-line': 0,
        'react/jsx-no-literals': 0,
        'react/jsx-handler-names': 0,
        'react/jsx-no-bind': 1,
    },

    // Applied in reverse order - react/all will override eslint:all
    extends: [
        'plugin:react/all',
        'eslint:all',
        'plugin:jsx-a11y/recommended',
    ],
};
