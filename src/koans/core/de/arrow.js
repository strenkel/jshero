jshero.koans.add({

    id: 'arrow',
  
    title: 'Pfeilfunktionen',
  
    lesson: `Pfeilfunktionen (engl.: arrow functions) bieten verschiedene Möglichkeiten, Funktionsausdrücke noch
kürzer zu schreiben. Zunächst kann <code>function</code> durch einen Pfeil ersetzt werden:

<pre><code>const f1 = function(a, b) {
  const offset = 100;
  return a + b + offset;
};

const f2 = (a, b) => {
  const offset = 100;
  return a + b + offset;
};</code></pre>

Die beiden Funktionen <code>f1</code> und <code>f2</code> sind funktional identisch. <code>f1</code>
wird ein anonymer Funktionsausdruck zugeordnet, <code>f2</code> eine Pfeilfunktion.<br><br>
Kann man den return-Wert direkt mit einem Ausdruck bestimmen, so kann man das <code>return</code>
inklusive der Funktionsklammern auch weglassen:

<pre><code>const f3 = function(a, b) {
  return a * b * 100;
};

const f4 = (a, b) => a * b * 100;
};</code></pre>

<code>f3</code> und <code>f4</code> sind wieder funktional identisch.<br><br>
Besitzt die Funktion nur einen Parameter, so ergibt sich eine weitere Vereinfachung.
In diesem Fall kann man die Parameter-Klammer weglassen:

<pre><code>const f5 = function(a) {
  return a * a;
};

const f4 = a => a * a;
};</code></pre>

Pfeilfunktionen werden, wie wir später sehen, hauptsächlich in der funktionalen Programmierung verwendet.<br><br>
Da man die Verwendung von Pfeilfunktionen nur schwer testen kann, hier eine anspruchsvolle Aufgabe aus
dem Gebiet der Mathematik:`,
  
    task: `Schreibe eine Funktion <code>toDecimal</code>, die einen String mit einer
<a href="https://de.wikipedia.org/wiki/Dualsystem">Binärzahl</a> entgegen nimmt und diese als Dezimalzahl zurückgibt.<br><br>
Beispiel: <code>toDecimal("10")</code> sollte <code>2</code> und
<code>toDecimal("101")</code> sollte <code>5</code> zurückgeben.`,
  
    tests: [
      function() {
        return jshero.testutil.assert_isFunction('toDecimal');
      },
  
      function() {
        return jshero.testutil.assert_functionHasNumOfParameter('toDecimal', 1);
      },
  
      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("0")', 0);
      },

        
      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("1")', 1);
      },

        
      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("10")', 2);
      },

        
      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("11")', 3);
      },

        
      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("100")', 4);
      },

        
      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("101")', 5);
      },

        
      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("110")', 6);
      },

        
      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("111")', 7);
      },

      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("1000")', 8);
      },

      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("10000000000")', 1024);
      },

      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("11111010000")', 2000);
      },

      function() {
        return jshero.testutil.assert_functionReturns('toDecimal("101110111000")', 3000);
      }
     
    ]
     
  });
  