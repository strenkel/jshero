(function(testutil) {

  jshero.koans.add({

    id: 'playground',

    title: 'Playground',

    lesson: `JS Hero has a <a href="../playground.html">Playground</a>. Here I want to show you how to write small programs using the Playground.
Programs usually has an input and an output. Within the Playground, the easiest way to achieve this is to use the two functions
<code>prompt()</code> and <code>alert()</code>:

<pre><code>let name = prompt('What's your name?');
alert('Hello ' + name + '!');</code></pre>

If you enter this code in the Playground and click on "Run", a dialog opens with the question "What's your name?".
If you type "Kitty Pryde" and confirm the input, the dialog closes and a window with the message "Hello Kitty Pryde!" opens.
After clicking on "OK" this window closes as well and our little program ends. With "Run" it can be started again.

<code>prompt()</code> and <code>alert()</code> are two functions provided by the browser.

<code>prompt()</code> takes a string as parameter. Above <code>prompt()</code> is passed the string <code>'What's your name?'</code>.
This string is displayed in the dialog window. Now <code>prompt()</code> interrupts the program execution and waits for our input. 
If we enter <code>"Kitty Pryde"</code> and confirm the input with "OK", <code>prompt()</code> returns the string <code>'Kitty Pryde'</code>.
This return is assigned to the variable <code>name</code>.

<code>alert()</code>, like <code>prompt()</code>, takes a string as parameter.
Above we pass the expression <code>'Hello' + name + '!'</code> to <code>alert()</code>.
<code>name</code> has the value <code>'Kitty Pryde'</code>, so this expression results in <code>'Hello Kitty Pride!'</code>.
With this string <code>alert()</code> is called. <code>alert()</code> displays this string in a small window and interrupts the program execution.
After clicking on "OK" <code>alert()</code> terminates without a return value.

<code>prompt()</code> and <code>alert()</code> can't be used on the JS Hero exercise pages.
This is because the solution code runs encapsulated in a so-called WebWorker. Both functions are not available there.

prompt() and alert() should not be used in professional web development. But they are ideal for practicing.`,

  task: '',

  });

})(jshero.testutil);