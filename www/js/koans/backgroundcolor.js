jshero.koans.add({id:"backgroundcolor",title:"Dynamische Webseiten",lesson:"Webseiten basieren auf HTML, der Hypertext Markup Language. HTML-Seiten bestehen aus Text und werden\ndurch sogenannte Tags strukturiert. Tags stellen meist einen rechteckigen Bereich der Webseite dar.\nDiese Bereiche k\xF6nnen mit CSS, den Cascading Style Sheets, formatiert werden. Mit CSS kann man die\nPosition, die Gr\xF6\xDFe, die Farbe und vieles mehr der einzelnen Tags festlegen. Eine gute Einf\xFChrung in HTML\nund CSS findest Du auf <a href=\"https://wiki.selfhtml.org\">SELFHTML</a>.<br><br>\n\nHier lernst Du, wie Du Webseiten mit Hilfe von JavaScript ver\xE4ndern kannst.\nSolche Webseiten nennt man auch dynamische Webseiten. Ein gutes Beispiel f\xFCr eine dynamische Webseite ist JS Hero.\nSind auf einer Seite alle Tests gr\xFCn, wechselt die Farbe der oberen Titelleiste von rot auf gr\xFCn.\nDas geschiet mit Hilfe von JavaScript. Einen solchen Farbwechsel wollen wir jetzt programmieren.<br><br>\n\nUm einzelne Tags einer Webseite ver\xE4ndern zu k\xF6nnen, ben\xF6tigt JavaScript eine gesonderte Bibliothek,\ndas Document Object Model (DOM). Diese Bibliothek steht in jedem Browser \xFCber das\n<code>document</code> Objekt zur Verf\xFCgung. Um auf ein Tag, auch HTML-Element genannt, zugreifen zu k\xF6nnen,\nmuss man es identifizieren. Das geht am besten, wenn man dem Tag im HTML Code eine ID zuweist.\nHat ein Tag die ID <code>content</code>, so sieht der Zugriff wie folgt aus:  \n\n<pre><code>var elm = document.getElementById(\"content\");</code></pre>\n\n<code>document</code> besitzt die Methode <code>getElementById</code>. \xDCbergibt man dieser Methode eine ID,\nso liefert sie ein Objekt zur\xFCck, dass das entsprechende HTML-Element repr\xE4sentiert.\nDieses Objekt besitzt nun Eigenschaften und Methoden, mit denen man das HTML-Element ver\xE4ndern kann.\nEine dieser Eigenschaften ist <code>style</code>. Es ist ein Objekt, dass alle CSS-Eigenschaften\ndes HTML-Elements repr\xE4sentiert. Mit diesem Objekt k\xF6nnen wir nun die Hintergrundfarbe eines HTML-Elements\nver\xE4ndern:\n\n<pre><code>var elm = document.getElementById(\"content\");\nelm.style.backgroundColor = 'blue';</code></pre>\n\nIm ersten Schritt holen wir uns mit der bekannten Methode <code>getElementById</code> das HTML-Element.\nIm zweiten Schritt setzen wir die Eigenschaft <code>backgroundColor</code> des <code>style</code>-Objekts\nauf <code>'blue'</code>. Das HTML-Element wir augenblicklich blau.",task:"Unterhalb der Aufgabe befindet sich ein grauer Streifen. Der Streifen ist ein HTML-Element\nmit der ID <code>fixme</code>. Setze die Hintergrundfarbe dieses Streifens auf orange.",hint:"Setze <code>backgroundColor</code> auf <code>'orange'</code>.",solution:"<pre><code>var elm = document.getElementById('fixme');\nelm.style.backgroundColor = 'orange';</code></pre>",tests:[function(){var root=document.getElementById("fixme");var backgroundColor=root.style.backgroundColor;if(backgroundColor==="orange"){return{ok:true,msg:"Die Hintergrundfarbe des Streifens ist <code>'orange'</code>."}}else{return{ok:false,msg:"Die Hintergrundfarbe des Streifens ist nicht <code>'orange'</code>, sondern <code>'"+backgroundColor+"'."}}}]});