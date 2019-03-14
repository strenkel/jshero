(function(testutil) {

  jshero.koans.add({

    id: "jsx03",

    title: "Assign variables",

    lesson: `A variable can be assigned the value of another variable.
<pre><code>var name1 = "Olga";
var name2 = name1;
name1 = "Clara";</code></pre>
In the second line, <code>name2</code> is assigned the value of <code>name1</code>.
The variable <code>name2</code> gets the value <code>"Olga"</code>. This value is retained by <code>name2</code>,
even if <code>name1</code> receives a new value afterwards.`,

    task: `Which value does <code>x</code> have after execution of the following code?
<pre><code>var x = "Laurel";
var y = "Hardy";
var z = y;
y = x;
x = z;</code></pre>`,

    solution: `<pre><code>"Hardy"</code></pre>`,

    beforeTests: function() {
    },

    tests: [

      function() {
        return testutil.assert_isString('Hardy');
      }

    ]

  });

})(jshero.testutil);