// Work in progress. Not ready!

(function() {

  jshero.koans.add({

    id: "for",

    title: "for-loop",

    lesson: `Loops can execute code blocks several times. JavaScript knows different kinds of loops. The simplest one is the <code>for</code> loop.

<pre><code>var sum = 0;
for (var i = 1; i < 3; i++) {
  sum = sum + i;<br>' +
}</code></pre>

The <code>for</code> loop consists of three control expressions and the loop code.
The three control expressions follow the <code>for</code> keyword in parentheses.
They are separated by semicolons. The first expression is the start expression. It is executed once at the beginning of the loop.
The so-called loop variable is normally initialized here. The second expression is the loop condition.
It is evaluated to <code>true</code> or <code>false</code> before each loop iteration. If this expression evaluates to <code>true</code>,
the loop code is executed. If this expression evaluates to <code>false</code>, the loop is terminated and the program execution continues after the loop.
The third expression, called the final expression, is executed after each loop iteration. The loop variable is normally increased here.
Then a new loop iteration is started with a new evaluation of the loop condition.
The loop code follows the three control expressions in brackets.
In our example <code>sum</code> has the value <code>0</code> initially. In the start expression <code>i</code> is initialized with <code>1</code>.
The loop condition <code>1 < 3</code> is fulfilled, so the loop code is executed.
<code>sum</code> receives the value <code>0 + 1</code>, i. e. <code>1</code>.
Now in the final expression <code>i</code> is increased by <code>1</code>. (<code>i++</code> is identical to <code>i = i + 1</code>).
<code>i</code> thus receives the value <code>2</code>. The second loop starts with the evaluation of the loop condition.
This condition (<code>2 < 3</code>) is still fulfilled.
The loop code is executed again and <code>sum</code> is now given the value <code>1 + 2</code>, that is <code>3</code>.
In the final expression <code>i</code> is increased again and gets the value <code>3</code>.
The loop condition <code>3 < 3</code> is no longer fulfilled. The loop is terminated and the program execution continues after the loop.
Our code example has added all natural numbers smaller than 3.`,

    task: `Write a function <code>addTo</code> that accepts a number as a parameter and adds all the natural numbers smaller than the parameter.
The result of the addition is to be returned. <code>addTo(4)</code> should return <code>6</code>.`,

    beforeTests: function() {
      if (typeof addiereBis !== "undefined") {
        addiereBis = undefined;
      }
    },

    tests: [

      function() {
        var ok = typeof addiereBis === 'function';
        var msg;
        if (ok) {
          msg = '<code>addiereBis</code> ist eine Funktion.';
        } else {
          msg = '<code>addiereBis</code> ist keine Funktion.';
        }
        return {
          ok: ok,
          msg: msg
        };
      },

      function() {
        var ok = addiereBis.length === 1;
        var msg;
        if (ok) {
          msg = '<code>addiereBis</code> hat 1 Parameter.';
        } else {
          msg = '<code>addiereBis</code> hat nicht 1, sondern ' + addiereBis.length + ' Parameter.';
        }
        return {
          ok: ok,
          msg: msg
        };
      },

      function() {
        var ok, msg, e;
        try {
          var result = addiereBis(2);
          ok = result === 1
          if (ok) {
            msg = '<code>addiereBis(2)</code> gibt <code>1</code> zurück.';
          } else {
            msg = '<code>addiereBis(2)</code> gibt nicht <code>1</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
          }
        } catch (exc) {
          ok = false;
          msg = 'Fehler beim Aufruf von <code>addiereBis(2)</code>.';
          e = exc;
        }
        return {
          ok: ok,
          msg: msg,
          e: e
        };
      },

      function() {
        var ok, msg, e;
        try {
          var result = addiereBis(4);
          ok = result === 6
          if (ok) {
            msg = '<code>addiereBis(4)</code> gibt <code>6</code> zurück.';
          } else {
            msg = '<code>addiereBis(4)</code> gibt nicht <code>6</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
          }
        } catch (exc) {
          ok = false;
          msg = 'Fehler beim Aufruf von <code>addiereBis(4)</code>.';
          e = exc;
        }
        return {
          ok: ok,
          msg: msg,
          e: e
        };
      }

    ]

  });

})();
