(function(testutil){jshero.koans.add({id:"function",title:"Funktionen",lesson:"Eine Funktion ist ein Block von Anweisungen, der beliebig oft ausgef\xFChrt werden kann. Eine Funktion kann\nParameter entgegennehmen und eine Funktion kann einen Wert zur\xFCckgeben. Funktionen kann man mit dem Schl\xFCsselwort\n<code>function</code> definieren. Es folgen:\n<ul><li>der Name der Funktion,</li>\n<li>die Parameter eingeschlossen in runden Klammern,</li>\n<li>die Anweisungen eingeschlossen in geschweiften Klammern.</li></ul>\nMit dem Schl\xFCsselwort <code>return</code> kann ein Wert zur\xFCckgegeben werden. Gleichzeitig beendet <code>return</code>\ndie Funktion. Anweisungen nach einem <code>return</code> werden nicht mehr ausgef\xFChrt. Mit\n\n<pre><code>function farbe() {\n  return 'gr\xFCn';\n}</code></pre>\n\ndefinieren wir eine Funktion mit Namen <code>farbe</code>, die <code>'gr\xFCn'</code> zur\xFCckgibt.\nDie Funktion nimmt keine Paramter entgegen (die runde Klammer ist leer) und sie enth\xE4lt genau eine Anweisung, die R\xFCckgabe.\nDie Funktion wird nicht mit einem Semikolon abgeschlossen.<br><br>\n\xDCber ihren Namen wird die Funktion aufgerufen:\n\n<pre><code>let ergebnis = farbe();</code></pre>\n\nJetzt wird die Funktion ausgef\xFChrt. Ihre R\xFCckgabe wird der Variablen <code>ergebnis</code> zugewiesen.\n<code>ergebnis</code> hat dann den Wert <code>'gr\xFCn'</code>.",task:"Definiere eine Funktion <code>hallo</code>, die <code>'Hallo Welt!'</code> zur\xFCckgibt.",hint:"<pre><code>function hallo() {\n  ...\n}</code></pre>",solution:"<pre><code>function hallo() {\n  return 'Hallo Welt!';\n}</code></pre>",tests:[function(){return testutil.assert_isFunction("hallo")},function(){return testutil.assert_functionReturns("hallo()","Hallo Welt!")}]})})(jshero.testutil);