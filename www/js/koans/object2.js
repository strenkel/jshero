(function(testutil){jshero.koans.add({id:"object2",title:"Objekte erzeugen",lesson:"Die Werte von Objekt-Eigenschaften kann man auch mithilfe von Variablen festlegen:\n\n<pre><code>let title = 'Clean Code';\nlet author = 'Robert C. Martin';\nlet book = {\n  title: title,\n  author: author\n};</code></pre>\n\nHier wird ein Objekt mit den Eigenschaften <code>title</code> und <code>author</code> erzeugt.\n<code>title</code> erh\xE4lt den Wert <code>'Clean Code'</code> und <code>author</code> den Wert\n<code>'Robert C. Martin'</code>.\nIn der Zeile <code>title: title</code> ist <code>title</code> vor dem Doppelpunkt die Objekt-Eigenschaft\nund nach dem Doppelpunkt die zuvor definierte Variable.",task:"Schreibe eine Funktion <code>createPoint</code>, die die Koordinaten eines Punkts in der Ebene\nentgegennimmt und ein Objekt mit den Eigenschaften x und y sowie den \xFCbergebenen Koordinaten zur\xFCckgibt.<br><br>\nBeispiel: <code>createPoint(1,&nbsp;2)</code> sollte <code>{x:&nbsp;1,&nbsp;y:&nbsp;2}</code> zur\xFCckgeben.",hint:"<pre><code>function createPoint(x, y) {\n  return ...\n}</code></pre>",solution:"<pre><code>function createPoint(x, y) {\n  return {\n    x: x,\n    y: y\n  };\n}</code></pre>",tests:[function(){return testutil.assert_isFunction("createPoint")},function(){return testutil.assert_functionHasNumOfParameter("createPoint",2)},function(){return testutil.assert_functionReturnsObject("createPoint(1, 2)",{x:1,y:2})},function(){return testutil.assert_functionReturnsObject("createPoint(-5, 18)",{x:-5,y:18})}]})})(jshero.testutil);