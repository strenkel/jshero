(function(testutil){jshero.koans.add({id:"functioncall",title:"Funktionsaufruf",lesson:"Wichtig ist der Unterschied zwischen der Definition und dem Aufruf einer Funktion.\nMit der Definition, z. B.\n\n<pre><code>function f() {\n  return 'hallo';\n}</code></pre>\n\nwird festgelegt, was die Funktion machen soll. Sie wird dabei nicht ausgef\xFChrt.\nSie wird lediglich zur Ausf\xFChrung bereitgestellt.\nErst mit ihrem Aufruf\n\n<pre><code>let x = f();</code></pre>\n\nwird die Funktion ausgef\xFChrt. Dann werden die Anweisungen im Funktionsblock der Reihe nach abgearbeitet.\nDie R\xFCckgabe der Funktion wird in diesem Beispiel der Variablen <code>x</code> zugewiesen.\nDefiniert werden Funktionen mit dem Schl\xFCsselwort <code>function</code>. Aufgerufen werden Funktionen \xFCber ihren Namen.\nFunktionen werden einmal definiert, um sie dann durch ihren Aufruf an verschiedenen Stellen mehrfach zu benutzen.",task:"1. Definiere eine Funktion <code>begruesse</code>, die den Wert <code>'Moin!'</code> zur\xFCckgibt.\n<br/>\n2. Deklariere eine Variable <code>begruessung</code>. Rufe die Funktion <code>begruesse</code> auf und weise der Variablen\n<code>begruessung</code> die R\xFCckgabe dieses Aufrufs zu.",hint:"<pre><code>function begruesse() {\n  ...\n};\n\nlet begruessung = ...</code></pre>",solution:"<pre><code>function begruesse() {\n  return 'Moin!';\n};\n\nlet begruessung = begruesse();</code></pre>",tests:[function(){return testutil.assert_isFunction("begruesse")},function(){return testutil.assert_functionReturns("begruesse()","Moin!")},function(){return testutil.assert_variableDefined("begruessung")},function(){return testutil.assert_variableHasValue("begruessung","Moin!")}]})})(jshero.testutil);