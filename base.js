module.exports = {
  'extends': ['strict'],
  'rules': {

    // array format
    'array-bracket-newline': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'never'],

    // require parens in arrow function arguments only when needed
    'arrow-parens': ['error', 'as-needed'],

    // Enforces Stroustrup style brace formatting
    'brace-style': ['error', 'stroustrup'],

    // Do not enforce camel case property names.
    'camelcase': ['error', {
      'properties': 'never',
    }],

    // require dangling commas
    'comma-dangle': ['error', 'always-multiline'],

    // TEMP: Disable the complexity rule for the time being.
    'complexity': ['off'],

    // prefer kebab-case for file names
    'filenames/match-exported': [2, 'kebab'],

    // blacklist certain identifiers to prevent them being used
    'id-blacklist': ['off'],

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': ['off'],

    // require identifiers to match the provided regular expression
    // identifiers must always be camel cased, and never have two
    // or more contiguous upper case characters.
    // Alternatively they can be all uppercase.
    'id-match': [
      2, '^([A-Z_]{2,}|[A-Z]?[a-z]+([A-Z]{1,2}[a-z]+)*[A-Z]?|id|JSON|_|_.*|.*[Ii]ndexedDB|getMatchedCSSRules|.*SKU)$', {
        // identifiers in properties are also checked
        'properties': false,
      },
    ],

    // TEMP: Increase the allowed maximum number of function paramaters for the time being.
    'max-params': ['error', 7],

    // disable max-statements rule
    'max-statements': ['off'],

    // allow/disallow an empty newline after var statement
    'newline-after-var': [2, 'always'],

    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': ['off'],

    // allow confusing arrow function returns when wrapped in parens.
    'no-confusing-arrow': ['error', {
      'allowParens': true,
    }],

    // allow inline comments
    'no-inline-comments': ['off'],

    // TEMP: Disable the chek of usage of this outside classes.
    'no-invalid-this': ['off'],

    // disallow the use of magic numbers
    'no-magic-numbers': ['off'],

    // disallow declaration of variables already declared in the outer scope (but allow err and res)
    'no-shadow': ['error', {
      'allow': ['err', 'res'],
    }],

    // allow/disallow dangling underscores in identifiers
    'no-underscore-dangle': ['off'],

    // allow fixme, todo etc.
    'no-warning-comments': ['off'],

    // allow padding at the top and bottom of blocks
    'padded-blocks': ['off'],

    // [refer destructuring for objects
    'prefer-destructuring': ['error', {
      array: false,
      object: true,
    }],

    // don't prefer Reflect
    'prefer-reflect': ['off'],

    // require no semi colon
    'semi': ['error', 'never'],

    // Never require a space before function opening parenthesis
    'space-before-function-paren': ['error', 'never'],

    // disable use strict rule
    'strict': ['off'],

    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': ['error', 'never'],

  },
}
