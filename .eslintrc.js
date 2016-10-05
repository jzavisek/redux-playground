

// These rules represent best practices for the React developer community
module.exports = {
  
  env: {
    es6: true
  },

  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: [
    'react'
  ],

  // Configures the react plugin to treat some rules with regard to this specific React.js version
  settings: {
    react: {
      version: '0.15'
    }
  },
  
  globals: {},

  rules: {
    
    /* --- standard/known-errors.js --- */
    
    // Disallow Assignment in Conditional Statements
    // This rule is aimed at eliminating ambiguous assignments in for, if, while, and do...while
    // conditional statements.
    'no-cond-assign': [2, 'except-parens'],

    // Disallow use of constant expressions in conditions
    // Comparing a literal expression in a condition is usually a typo or development trigger for a
    // specific behavior.
    'no-constant-condition': 2,

    // Disallow Controls Characters in Regular Expressions
    // Control characters are special, invisible characters in the ASCII range 0-31. These
    // characters are rarely used in JavaScript strings so a regular expression containing these
    // characters is most likely a mistake.
    'no-control-regex': 2,

    // Disallow debugger
    // Production code should definitely not contain debugger, as it will cause the browser / Node
    // to stop executing code.
    'no-debugger': 2,

    // No duplicate arguments
    // Outside of strict mode duplicate arguments will mask the value of the first argument.
    'no-dupe-args': 2,

    // Disallow Duplicate Keys
    // Creating objects with duplicate keys in objects can cause unexpected behavior in your
    // application.
    'no-dupe-keys': 2,

    // Rule to disallow a duplicate case label
    // A switch statements with duplicate case labels is normally an indication of a programmer
    // error.
    'no-duplicate-case': 2,

    // Disallow Empty Character Classes
    // Empty character classes in regular expressions do not match anything and can result in code
    // that may not work as intended.
    'no-empty-character-class': 2,

    // Disallow Empty Block Statements
    // Empty block statements are usually an indicator of an error, or at the very least, an
    // indicator that some refactoring is likely needed.
    'no-empty': 2,

    // Disallow Assignment of the Exception Parameter
    // When an error is caught using a catch block, it's possible to accidentally (or purposely)
    // overwrite the reference to the error. This makes it impossible to track the error from that
    // point on.
    'no-ex-assign': 2,

    // Disallow Unnecessary Labels
    // If a loop contains no nested loops or switches, labeling the loop is unnecessary.
    'no-extra-label': 2,

    // Disallow Extra Semicolons
    // JavaScript will more or less let you put semicolons after any statement without complaining.
    // Typos and misunderstandings about where semicolons are required can lead to extra semicolons
    // that are unnecessary.
    'no-extra-semi': 2,

    // Disallow Function Assignment
    // JavaScript functions can be written as a FunctionDeclaration `function foo() { ... }` or as a
    // FunctionExpression `var foo = function() { ... }`. While a JavaScript interpreter might
    // tolerate it, overwriting/reassigning a function written as a FunctionDeclaration is often
    // indicative of a mistake or issue.
    'no-func-assign': 2,

    // Declarations in Program or Function Body
    // In JavaScript, prior to ES6, a function declaration is only allowed in the first level of a
    // program or the body of another function, though parsers sometimes erroneously accept them
    // elsewhere.
    // A variable declaration is permitted anywhere a statement can go, even nested deeply inside
    // other blocks. This is often undesirable due to variable hoisting, and moving declarations to
    // the root of the program or function body can increase clarity.
    'no-inner-declarations': [2, 'both'],

    // Disallow Invalid Regular Expressions
    // This rule validates string arguments passed to the RegExp constructor.
    'no-invalid-regexp': 2,

    // No irregular whitespace
    // Various whitespace characters can be inputted by programmers by mistake for example from
    // copying or keyboard shortcuts. Pressing Alt + Space on OS X adds in a non breaking space
    // character for example.
    'no-irregular-whitespace': 2,

    // Disallow negated left operand of `in` operator
    'no-negated-in-lhs': 2,

    // Disallow Symbol Constructor
    // This rule is aimed at preventing the accidental calling of Symbol with the `new` operator.
    'no-new-symbol': 2,

    // Disallow Global Object Function Calls
    // This rule is aimed at preventing the accidental calling of global objects as functions.
    'no-obj-calls': 2,

    // Disallow Spaces in Regular Expressions
    // This rule aims to eliminate errors due to multiple spaces inside of a regular expression.
    'no-regex-spaces': 2,

    // Disallow Self Assignment
    // Self assignments have no effect, so probably those are an error due to incomplete
    // refactoring. Those indicate that what you should do is still remaining.
    'no-self-assign': 2,

    // Disallow Sparse Arrays
    // Sparse arrays contain empty slots, most frequently due to multiple commas being used in an
    // array literal. The confusion around sparse arrays defined in this manner is enough that it's
    // recommended to avoid using them.
    'no-sparse-arrays': 2,

    // Avoid unexpected multiline expressions
    // This particular rule aims to spot scenarios where a newline looks like it is ending a
    // statement, but is not.
    'no-unexpected-multiline': 2,

    // Disallow Unreachable Code
    // This rule is aimed at detecting unreachable code. It produces an error when a statements in a
    // block exist after a `return`, `throw`, `break`, or `continue` statement.
    'no-unreachable': 2,

    // Disallow Unused Labels
    // Labels that are declared and not used anywhere in the code are most likely an error due to
    // incomplete refactoring.
    'no-unused-labels': 2,

    // Disallow unnecessary constructor
    // ES2015 provides a default class constructor if one is not specified. As such, it is
    // unnecessary to provide an empty constructor or one that simply delegates into its parent
    // class.
    'no-useless-constructor': 2,

    // Disallow unnecessary escape usage
    // Escaping non-special characters in strings and regular expressions doesn’t have any effects
    // on results. This rule flags escapes that can be safely removed without changing behavior.
    'no-useless-escape': 2,

    // Suggest using the rest parameters instead of `arguments`
    // This rule is aimed to flag usage of `arguments` variables.
    'prefer-rest-params': 2,

    // Require isNaN()
    // This rule is aimed at eliminating potential errors as the result of comparing against the
    // special value NaN.
    'use-isnan': 2,

    // Ensures that the results of typeof are compared against a valid string
    // This rule aims to prevent errors from likely typos by ensuring that when the result of a
    // typeof operation is compared against a string, that the string is a valid value.
    'valid-typeof': 2,

    // Verify calls of super() in constructors
    // This rule is aimed to flag invalid/missing super() calls.
    'constructor-super': 2,

    // Disallow modifying variables of class declarations
    // This rule is aimed to flag modifying variables of class declarations.
    'no-class-assign': 2,

    // Disallow modifying variables that are declared using `const`
    // We cannot modify variables that are declared using const keyword. It will raise a runtime
    // error.
    'no-const-assign': 2,

    // Disallow duplicate name in class members
    // If there are declarations of the same name in class members, the last declaration overwrites
    // other declarations silently. It can cause unexpected behaviors.
    'no-dupe-class-members': 2,

    // Disallow use of `this`/`super` before calling `super()` in constructors
    // In the constructor of derived classes, if `this`/`super` are used before `super()` calls, it
    // raises a reference error.
    'no-this-before-super': 2,

    // Disallow Variables Deletion
    // The delete operator will only delete the properties of objects. It cannot "delete" variables
    // or anything else. Using them on variables might lead to unexpected behavior.
    'no-delete-var': 2,

    // Disallow Labels That Are Variable Names
    // This rule aims to create clearer code by disallowing the bad practice of creating a label
    // that shares a name with a variable that is in scope.
    'no-label-var': 2,

    // Disallow Shadowing of Restricted Names
    // Value Properties of the Global Object (NaN, Infinity, undefined) as well as strict mode
    // restricted identifiers eval and arguments are considered to be restricted names in
    // JavaScript. Defining them to mean something else can have unintended consequences and confuse
    // others reading the code.
    'no-shadow-restricted-names': 2,

    // Disallow Shadowing
    // This rule aims to eliminate shadowed variable declarations.
    'no-shadow': 2,

    // Disallow Undeclared Variables
    // This rule can help you locate potential ReferenceErrors resulting from misspellings of
    // variable and parameter names, or accidental implicit globals.
    'no-undef': [2, {
      typeof: true
    }],

    // Enforces getter/setter pairs in objects
    // It's a common mistake in JavaScript to create an object with just a setter for a property but
    // never have a corresponding getter defined for it. Without a getter, you cannot read the
    // property, so it ends up not being used.
    'accessor-pairs': 2,

    // Require Default Case in Switch Statements
    // The thinking is that it's better to always explicitly state what the default behavior should
    // be so that it's clear whether or not the developer forgot to include the default behavior by
    // mistake. This rule aims to require default case in switch statements. You may optionally
    // include a `// no default` after the last case if there is no default case.
    'default-case': 2,

    // Require === and !==
    // The reason for this is that == and != do type coercion which follows the rather obscure
    // Abstract Equality Comparison Algorithm. This rule is aimed at eliminating the type-unsafe
    // equality operators.
    //
    // @see  http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
    eqeqeq: 2,

    // Disallow Use of caller/callee
    // The use of arguments.caller and arguments.callee make several code optimizations impossible.
    // They have been deprecated in future versions of JavaScript and their use is forbidden in
    // ECMAScript 5 while in strict mode.
    'no-caller': 2,

    // Disallow empty destructuring patterns
    // This rule aims to flag any empty patterns in destructured objects and arrays.
    'no-empty-pattern': 2,

    // Disallow Case Statement Fallthrough
    // This rule is aimed at eliminating unintentional fallthrough of one case to the other.
    'no-fallthrough': 2,

    // Disallow Reassignment of Native Objects
    // Reports an error when they encounter an attempt to assign a value to built-in native object.
    'no-native-reassign': 2,

    // Disallow Octal Escapes
    // As of version 5 of the ECMAScript specification, octal escape sequences are a deprecated
    // feature and should not be used. It is recommended that Unicode escapes be used instead.
    'no-octal-escape': 2,

    // Disallow Octal Literals
    // The rule is aimed at preventing the use of a deprecated JavaScript feature, the use of octal
    // literals.
    'no-octal': 2,

    // Disallow Use of __proto__
    // __proto__ property has been deprecated as of ECMAScript 3.1 and shouldn't be used in the
    // code. Use getPrototypeOf method instead.
    'no-proto': 2,

    // Disallow Redeclaring Variables
    // This rule is aimed at eliminating variables that have multiple declarations in the same
    // scope.
    'no-redeclare': [2, {
      builtinGlobals: true
    }],

    // Disallow Comparisons to Itself
    // This rule aims to highlight a potentially confusing and potentially pointless piece of code.
    // There are almost no situations in which you would need to compare something to itself.
    'no-self-compare': 2,

    // Restrict what can be thrown as an exception
    // This rule is aimed at maintaining consistency when throwing exception by disallowing to throw
    // literals and other expressions which cannot possibly be an Error object.
    'no-throw-literal': 2,

    // Disallow Unused Expressions
    // This rule aims to eliminate unused expressions. The value of an expression should always be
    // used, except in the case of expressions that side effect: function calls, assignments, and
    // the `new` operator.
    'no-unused-expressions': [2, {
      allowShortCircuit: true,
      allowTernary: true
    }],

    // Disallow generator functions that do not have yield
    'require-yield': 2,
    
    /* --- standard/best-practices.js --- */
    
    // Enforce return statements in callbacks of array's methods
    // This rule enforces usage of return statement in callbacks of array's methods.
    'array-callback-return': 1,

    // This rule enforces consistent use of trailing commas in object and array literals
    // Allow when multiline
    'comma-dangle': [2, 'only-multiline'],

    // Require Function Expressions to have a Name
    // If you provide the optional name for a function expression then you will get the name of the
    // function expression in the stack trace.
    // If you are tempted to create anonymous function expression, consider using arrow function
    // instead.
    'func-names': 0,

    // Disallow lexical declarations in case/default clauses
    // This rule disallows lexical declarations (let, const, function and class) in case/default
    // clauses. The reason is that the lexical declaration is visible in the entire switch block but
    // it only gets initialized when it is assigned, which will only happen if the case where it is
    // defined is reached.
    'no-case-declarations': 1,

    // Disallow Use of console
    // In general, you should use a logging library which offers more flexibility in terms of log
    // level configuration and log destinations (i.e. sending logs to external storage/monitoring
    // service), such as `debug` or `bunyan`.
    // Feel free to turn this rule off in your project-level ruleset if you are ok with logging to
    // console only.
    //
    // @see  https://www.npmjs.com/package/debug
    // @see  https://www.npmjs.com/package/bunyan
    'no-console': 1,

    // Disallow Extra Boolean Casts
    // In contexts such as an if statement's test where the result of the expression will already be
    // coerced to a Boolean, casting to a Boolean via double negation (!!) is unnecessary.
    'no-extra-boolean-cast': 1,

    // no-extra-parens
    // This rule restricts the use of parentheses to only where they are necessary.
    //
    // @see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/
    //       Operator_Precedence
    'no-extra-parens': 1,

    // Disallow Initializing to undefined
    // In JavaScript, a variable that is declared and not initialized to any value automatically
    // gets the value of undefined.
    'no-undef-init': 1,

    // Disallow Use of `undefined` Variable
    // In ECMAScript 3 it was possible to overwrite the value of undefined. While ECMAScript 5
    // disallows overwriting undefined, it's still possible to shadow `undefined`.
    'no-undefined': 2,

    // Disallow Unused Variables
    // This rule is aimed at eliminating unused variables, functions and variables in parameters of
    // functions.
    'no-unused-vars': 2,

    // Disallow Early Use
    // This rule will warn when it encounters a reference to an identifier that has not been yet
    // declared (but is declared later)
    // Function declarations are exempted from the rule, so it is allowed to use a function name
    // before its declaration
    'no-use-before-define': [2, 'nofunc'],

    // Require let or const instead of var
    // This rule is aimed at discouraging the use of var and encouraging the use of const or let
    // instead.
    'no-var': 2,

    // Require Consistent Returns
    // This rule is aimed at ensuring all return statements either specify a value or don't specify
    // a value.
    'consistent-return': 1,

    // Require Guarding for-in
    // This rule is aimed at preventing unexpected behavior that could arise from using a for in
    // loop without filtering the results in the loop.
    'guard-for-in': 1,

    // Disallow duplicate exports/imports
    // An ES6/ES2015 import can be spread over multiple lines, but this takes up unneeded
    // whitespace. This rules validates that all imports from a single module exists in a single
    // import statement.
    'no-duplicate-imports': [1, {
      includeExports: true
    }],

    // Disallow eval()
    // This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by
    // disallowing the use of the eval() function.
    'no-eval': 2,

    // Disallow Implied eval()
    // This rule aims to eliminate implied eval() through the use of setTimeout(), setInterval() or
    // execScript().
    'no-implied-eval': 2,

    // Disallow Extending of Native Objects
    // In JavaScript, you can extend any object, including builtin or "native" objects. Sometimes
    // people change the behavior of these native objects in ways that break the assumptions made
    // about them in other parts of the code.
    'no-extend-native': 2,

    // Disallow unnecessary function binding
    'no-extra-bind': 2,

    // Disallow Floating Decimals
    // Float values in JavaScript contain a decimal point, and there is no requirement that the
    // decimal point be preceded or followed by a number. Although not a syntax error, this format
    // for numbers can make it difficult to distinguish between true decimal numbers and the dot
    // operator.
    'no-floating-decimal': 1,

    // Disallow the type conversion with shorter notations
    // This rule is aimed to flag shorter notations for the type conversion, then suggest a more
    // self-explanatory notation.
    'no-implicit-coercion': 1,

    // Disallow this keywords outside of classes or class-like objects
    // Under the strict mode, this keywords outside of classes or class-like objects might be
    // undefined and raise a TypeError. This rule aims to flag usage of this keywords outside of
    // classes or class-like objects.
    'no-invalid-this': 0,

    // Disallow Labeled Statements
    // While convenient in some cases, labels tend to be used only rarely and are frowned upon by
    // some as a remedial form of flow control that is more error prone and harder to understand.
    'no-labels': 2,

    // Disallow Unnecessary Nested Blocks
    // This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of
    // a script or within other blocks.
    'no-lone-blocks': 2,

    // Disallow Functions in Loops
    // This error is raised to highlight a piece of code that may not work as you expect it to and
    // could also indicate a misunderstanding of how the language works.
    'no-loop-func': 1,

    // Disallow Function Constructor
    // This error is raised to highlight the use of a bad practice. By passing a string to the
    // Function constructor, you are requiring the engine to parse that string much in the way it
    // has to when you call the eval function.
    'no-new-func': 2,

    // Disallow Primitive Wrapper Instances
    // Primitive wrapper objects are, in fact, objects. That means typeof will return "object"
    // instead of "string", "number", or "boolean". The second problem comes with boolean objects.
    // Every object is truthy, that means an instance of Boolean always resolves to true even when
    // its actual value is false. This rule aims to eliminate the use of String, Number, and Boolean
    // with the `new` operator.
    'no-new-wrappers': 2,

    // Disallow new For Side Effects
    // This rule is aimed at maintaining consistency and convention by disallowing constructor calls
    // using the new keyword that do not assign the resulting object to a variable.
    'no-new': 2,

    // Disallow Assignment in return Statement
    // This rule aims to eliminate assignments from return statements.
    'no-return-assign': 2,

    // Disallow Use of the Comma Operator
    // The comma operator includes multiple expressions where only one is expected. It evaluates
    // each operand from left to right and returns the value of the last operand. However, this
    // frequently obscures side effects, and its use is often an accident.
    'no-sequences': 2,

    // Disallow unmodified conditions of loops
    // This rule finds references which are inside of loop conditions, then checks the variables of
    // those references are modified in the loop.
    'no-unmodified-loop-condition': 1,

    // Disallow unnecessary .call() and .apply()
    // This rule is aimed to flag usage of Function.prototype.call() and Function.prototype.apply()
    // that can be replaced with the normal function invocation.
    'no-useless-call': 2,

    // Disallow unncessary concatenation of strings
    // This rule aims to flag the concatenation of 2 literals when they could be combined into a
    // single literal.
    'no-useless-concat': 1,

    // No `with` Statements
    // The with statement is potentially problematic because it adds members of an object to the
    // current scope, making it impossible to tell what a variable inside the block actually refers
    // to. Additionally, the with statement cannot be used in strict mode.
    'no-with': 2,

    // Suggest using arrow functions as callbacks
    // This rule is aimed to flag usage of function expressions in an argument list.
    'prefer-arrow-callback': 1,

    // Suggest using const
    // This rule is aimed at flagging variables that are declared using let keyword, but never
    // modified after the initial assignment. This helps v8 to better optimise code at runtime.
    'prefer-const': 1,

    // Suggest using Reflect methods where applicable
    'prefer-reflect': 1,

    // Suggest using the spread operator instead of .apply()
    // This rule is aimed to flag usage of Function.prototype.apply() that can be replaced with the
    // spread operator.
    'prefer-spread': 1,

    // Suggest using template literals instead of string concatenation
    // This rule is aimed to flag usage of + operators with strings.
    'prefer-template': 1,

    // Require Variable Declarations to be at the top of their scope
    // This rule aims to keep all variable declarations in the leading series of statements.
    // Allowing multiple declarations helps promote maintainability.
    'vars-on-top': 1,

    // Require or disallow Yoda Conditions
    // Yoda conditions are so named because the literal value of the condition comes first while the
    // variable comes second ("red" === color).
    yoda: 2,

    // Disallow creation of dense arrays using the Array constructor
    // Use of the Array constructor to construct a new array is generally discouraged in favour of
    // array literal notation because of the single-argument pitfall.
    'no-array-constructor': 1,

    // Disallow the use of the Object constructor
    // While there are no performance differences between the two approaches, the byte savings and
    // conciseness of the object literal form is what has made it the de facto way of creating new
    // objects.
    'no-new-object': 1,
    
    /* --- known-errors.js --- */
    
    'react/jsx-no-bind': [2, {
      ignoreRefs: true,
      allowArrowFunctions: true
    }],

    // Prevent duplicate properties in JSX
    // Creating JSX elements with duplicate props can cause unexpected behavior in your application.
    'react/jsx-no-duplicate-props': 2,

    // Disallow undeclared variables in JSX
    // This rules can help you locate potential ReferenceErrors resulting from misspellings or
    // missing components.
    'react/jsx-no-undef': 2,

    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,

    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 2,

    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,

    // Prevent usage of isMounted
    // isMounted is an anti-pattern, is not available when using ES6 classes, and it is on its way
    // to being officially deprecated.
    'react/no-is-mounted': 2,

    // Prevent usage of unknown DOM property
    // In JSX all DOM properties and attributes should be camelCased to be consistent with standard
    // JavaScript style. This can be a possible source of error if you are used to writing plain
    // HTML.
    'react/no-unknown-property': 2,

    // Prevent missing props validation in a React component definition
    // PropTypes improve the reusability of your component by validating the received data. It can
    // warn other developers if they make a mistake while reusing the component with improper data
    // type.
    'react/prop-types': 2,

    // Prevent missing React when using JSX
    // When using JSX, <a /> expands to React.createElement("a"). Therefore the React variable must
    // be in scope.
    'react/react-in-jsx-scope': 2,
    
    /* --- best-practices.js --- */
    
    // Enforce boolean attributes notation in JSX
    // In JSX when using a boolean attribute you can set the attribute value to true or omit the
    // value. This rule will enforce one or the other to keep consistency in your code.
    'react/jsx-boolean-value': [1, 'never'],

    // Prevent missing displayName in a React component definition
    'react/display-name': 1,

    // Prevent multiple component definitions per file
    'react/no-multi-comp': [1, {
      ignoreStateless: true
    }],

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 1,

    // Enforce ES6 class for React Components
    'react/prefer-es6-class': 2,

    // Enforce stateless React Components to be written as a pure function
    // Stateless functional components are more simple than class based components and will benefit
    // from future React performance optimizations specific to these components.
    'react/prefer-stateless-function': 1,

    // Prevent usage of dangerous JSX properties
    'react/no-danger': 1,

    // Prevent usage of deprecated methods
    'react/no-deprecated': 1,

    // Restrict file extensions that may be required
    // require() statements should generally not include a file extension as there is a well defined
    // mechanism for resolving a module ID to a specific file. This rule inspects the module ID
    // being required and creates a warning if the ID contains a '.jsx' file extension.
    'react/require-extension': [1, {
      extensions: ['.js', '.jsx']
    }],

    // Prevent missing parentheses around multiline JSX
    // Wrapping multiline JSX in parentheses can improve readability and/or convenience.
    'react/wrap-multilines': [1, {
      declaration: true,
      assignment: true,
      return: true
    }]
  }
}