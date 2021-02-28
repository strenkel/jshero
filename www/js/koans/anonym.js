jshero.koans.add({id:"anonym",title:"Anonyme Functionen",lesson:"Wir haben bisher Funktionsdeklarationen kennen gelernt. Man kann Funktionen aber auch direkt im laufenden\nCode definieren. Eine solche Funktionsdefinition im laufende Code nennt man Funktionsausdruck.\nSo kann man zum Beispiel einer Variablen direkt eine Funktion zuordnen.\n\n<pre><code>let plusOne = function(x) {\n  return x + 1;\n};</code></pre>\n\nHier wurde keine Funktion deklariert, sondern wir haben einen Funktionsausdruck direkt einer Variablen zugeordnet.\nDa es sich hier um eine Variablen-Zuordnung handelt, sollte das Statement mit einem Semikolon abgeschlossen werden.\nIm Gegensatz zu einer Funktionsdeklaration kann man bei einem Funktionsausdruck den Namen der Funktion weglassen.\nMan spricht in diesem Fall von einer anonymen Funktion. Eine Funktionsdeklaration und ein Funktionsausdruck mit\nVariablendeklaration sind praktisch gleichwertig.\n\n<pre><code>let startNumbers = [1, 2, 3];\nlet newNumbers = startNumbers.map(function (x) {\n  return x + 1;\n});\nconsole.log(newNumbers); // > [2, 3, 4]</code></pre>\n\n",task:"Schreibe eine Funktion <code>double</code>, die ein Array mit Zahlen entgegennimmt und die diese Zahlen\nverdoppelt als Array zur\xFCckgibt.<br><br>\nBeispiel: <code>double([1, 2, 3])</code> sollte <code>[2, 4, 6]</code> ergeben.",hint:"Versuche eine L\xF6sung mit Schleife und eine L\xF6sung mit der Array-Methode <code>map()</code> zu finden.",solution:"<pre><code>// mit Schleife\nfunction double(myNumbers) {\n  let result = [];\n  for (let i = 0; i < myNumbers.length; i++) {\n    result.push(myNumbers[i] * 2);\n  }\n  return result;\n}\n\n// mit map()\nfunction timesTwo(x) {\n  return 2 * x;\n}\n\nfunction double(myNumbers) {\n  return myNumbers.map(timesTwo);\n}</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("double")},function(){return jshero.testutil.assert_functionHasNumOfParameter("double",1)},function(){return jshero.testutil.assert_functionReturns("double([1])",[2])},function(){return jshero.testutil.assert_functionReturns("double([10, 15])",[20,30])},function(){return jshero.testutil.assert_functionReturns("double([1, 2, 3])",[2,4,6])}]});