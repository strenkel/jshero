(function(testutil){jshero.koans.add({id:"regexword",title:"Regex: Wortgrenzen",lesson:"Ein weiterer Anker ist <code>\\b</code>. Er steht f\xFCr eine Wortgrenze. <code>/\\bJa/</code> findet\nalle W\xF6rter, die mit <code>Ja</code> beginnen und <code>/tion\\b/</code> alle W\xF6rter, die mit <code>tion</code> enden.\nVerwendet man <code>\\b</code> sowohl am Anfang als auch am Ende, so kann man nach ganzen W\xF6rten suchen.\n\n<pre><code>var t1 = /\\bdenke/.test('Wir denken'); // true\nvar t2 = /\\bdenke/.test('Bedenke'); // false\nvar t3 = /lauf\\b/.test('der Wettlauf hat'); // true\nvar t4 = /lauf\\b/.test('laufen'); // false\nvar t5 = /\\bso\\b/.test('Aber so ist'); // true</code></pre>\n\nWichtig ist, welche Zeichen als Wortgrenze gelten. In den obigen Beispielen war es das Leerzeichen.\nHinzu kommen alle Satzzeichen wie Punkt, Komma, Ausrufezeichen usw.\nAber auch der Bindestrich gilt als Wortgrenze. <code>/Anna\\b/</code> findet sich in <code>Anna-Ida</code>.\nTats\xE4chlich gelten alle Zeichen, die nicht zur Zeichenklasse <code>\\w</code> geh\xF6ren, als Wortgrenze.\nEs z\xE4hlen also alle nicht-alphanumerischen Zeichen ohne den Unterstrich als Wortgrenze.\nDas bezieht sich allerdings auf das englische Alphabet.\nAlle deutschen Umlaute gelten somit als Wortgrenze. Hier muss man aufpassen.\n<code>/bei\\b/</code> findet sich in <code>bei\xDFen</code>, da <code>\xDF</code> als Wortgrenze angesehen wird.",task:"Schreibe eine Funktion <code>hatLauf</code>, die pr\xFCft, ob ein String ein Wort enth\xE4lt, dass mit\n<code>lauf</code> beginnt. Dabei soll es keine Rolle spielen, ob <code>lauf</code> mit gro\xDFem oder kleinem\n<code>l</code> beginnt.",tests:[function(){return testutil.assert_isFunction("hatLauf")},function(){return testutil.assert_functionHasNumOfParameter("hatLauf",1)},function(){return testutil.assert_functionReturns("hatLauf('Lauf!')",true)},function(){return testutil.assert_functionReturns("hatLauf('Wir laufen da lang!')",true)},function(){return testutil.assert_functionReturns("hatLauf('weglaufen')",false)},function(){return testutil.assert_functionReturns("hatLauf('lau')",false)}]})})(jshero.testutil);