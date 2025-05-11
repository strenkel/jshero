(function (testutil) {

  jshero.koans.add({

    id: 'switch',

    title: 'Switch',

    lesson: `The <code>switch</code> statement allows you to execute different blocks of code based on the value of a variable.  
It's a cleaner alternative to writing multiple <code>if...else if</code> conditions when checking the same variable
against different values. The comparison is made with strict equality (===).
<br><br>
The structure of a <code>switch</code> statement looks like this:

<pre><code>let fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log('Yellow');
    break;
  case 'apple':
    console.log('Red');
    break;
  default:
    console.log('unknown');
}</code></pre>

Each <code>case</code> compares the value of the variable (in this case, <code>fruit</code>) with a specific value
(like <code>'banana'</code> or <code>'apple'</code>). If a match is found, the corresponding code block is executed.
<br><br>
The <code>break</code> statement tells the program to exit the <code>switch</code> after executing the matching case.
If you omit break, the code of the next case is executed, even if its condition is not fulfilled.
This can lead to confusing code, so it's best to end each case with <code>break</code>.
In functions, you can also use <code>return</code> as an alternative.
<br><br>
If no <code>case</code> matches, the code in <code>default</code> will run (if provided).
In the example above, the value of <code>fruit</code> is <code>'apple'</code>, so the output is <code>Red</code>.`,

    task: `Write a function <code>getDayName</code> that takes a number between 1 and 7 and returns the corresponding
weekday name. If no number between 1 and 7 is passed, <code>'unknown'</code> should be returned.
<br><br>
Example: <code>getDayName(1)</code> should return <code>'Monday'</code>.`,

    hint: `<pre><code>function getDayName(n) {
  switch (n) {
    ...
  }
}</code></pre>`,

    solution: `<pre><code>function getDayName(n) {
  switch (n) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'unknown';
  }
}</code></pre>`,

    tests: [

      function () {
        return testutil.assert_isFunction('getDayName');
      },

      function () {
        return testutil.assert_functionHasNumOfParameter('getDayName', 1);
      },

      function () {
        return testutil.assert_functionReturns("getDayName(1)", "Monday");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(2)", "Tuesday");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(3)", "Wednesday");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(4)", "Thursday");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(5)", "Friday");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(6)", "Saturday");
      },
      
      function () {
        return testutil.assert_functionReturns("getDayName(7)", "Sunday");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(8)", "unknown");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(0)", "unknown");
      }
    ]
  });

})(jshero.testutil);
