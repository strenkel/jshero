jshero.koans.add({

  id: 'var',

  title: 'Variables',

  lesson: `<a href='https://en.wikipedia.org/wiki/JavaScript'>JavaScript</a> programs consist of a series of statements.
Each statement performs an elementary operation.
By executing many instructions you can finally solve complex tasks.
Each statement is written in a line and closed with a semicolon.<br><br>
An elementary statement is the declaration and initialization of a variable. A variable is a container for a value. The statement
<pre><code>let city = 'Porbandar';</code></pre>
declares a variable with the name <code>city</code> and initializes it with the value <code>'Porbandar'</code>.
The variable is declared with the keyword <code>let</code>.
Use the equals sign, the assignment operator, to assign a value to the variable.
Note: JavaScript is case-sensitive. <code>city</code> and <code>City</code> are two different variables.`,

  task: `Declare a variable <code>firstname</code> and initialize it with the value <code>'Lata'</code>.`,

  hint: `<pre><code>let firstname = ...</code></pre>`,

  solution: `<pre><code>let firstname = 'Lata';</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_variableDefined('firstname');
    },

    function() {
      return jshero.testutil.assert_variableHasValue('firstname', 'Lata');
    }
  ]

});
