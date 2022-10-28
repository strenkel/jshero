(function(testutil) {

  jshero.koans.add({

    id: 'playground',

    title: 'Playground',

    lesson: `JS Hero has a <a href="../playground.html">Playground</a>. Here I want to show you how to write small programs using the Playground.
Programs usually has an input and an output. Within the Playground, the easiest way to achieve this is to use the two functions
<code>prompt()</code> and <code>alert()</code>:

<pre><code>let name = prompt('What is your name?');
alert('Hello ' + name + '!');</code></pre>

If you enter this code in the Playground and click on "Run", a dialog opens with the question "What is your name?".
If you type "Kitty Pryde" and confirm the input, the dialog closes and a window with the message "Hello Kitty Pryde!" opens.
After clicking on "OK" this window closes as well and our little program ends. With "Run" it can be started again.
<br><br>
<code>prompt()</code> and <code>alert()</code> are two functions provided by the browser.
<br><br>
<code>prompt()</code> takes a string as parameter. Above <code>prompt()</code> is passed the string <code>'What is your name?'</code>.
This string is displayed in the dialog window. Now <code>prompt()</code> interrupts the program execution and waits for our input. 
If we enter "Kitty Pryde" and confirm the input with "OK", <code>prompt()</code> returns the string <code>'Kitty Pryde'</code>.
This return is assigned to the variable <code>name</code>.
<br><br>
<code>alert()</code>, like <code>prompt()</code>, takes a string as parameter.
Above we pass the expression <code>'Hello' + name + '!'</code> to <code>alert()</code>. The variable
<code>name</code> has the value <code>'Kitty Pryde'</code>, so this expression results in <code>'Hello Kitty Pride!'</code>.
With this string <code>alert()</code> is called. <code>alert()</code> displays this string in a small window and interrupts the program execution.
After clicking on "OK" <code>alert()</code> terminates without a return value.
<br><br>
<code>prompt()</code> and <code>alert()</code> should not be used in professional web development. But they are ideal for practicing.
<br><br>
<code>prompt()</code> and <code>alert()</code> can't be used on most JS Hero exercise pages.
This is because the solution code runs encapsulated in a so-called WebWorker. Both functions are not available there.
<br><br>
So, let's practice variable assignment and concatenation again:`,

    task: `Which value does <code>x</code> have after execution of the following code?
<pre><code>let x = 'Tic';
x = x + 'Tac';
x = x + x;</code></pre>`,

    hint: `Paste the code into the Playgrund and display <code>x</code> with <code>alert()</code>.`,

    tests: [

      function() {
        return testutil.assert_isString('TicTacTicTac');
      }

    ]

  });

})(jshero.testutil);