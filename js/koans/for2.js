(function() {

  jshero.koans.add({

    id: 'for2',

    title: 'Schleifen und Arrays',

    lesson: '<code>for</code>-Schleifen eignen sich besonders gut zum Durchlaufen von Arrays. Die folgende Funktion filtert aus einem Array diejenigen Elemente heraus, die größer gleich 10 sind. ' +
      'Die gefilterten Werte werden als Array zurückgegeben:' +
      '<pre><code>var filter = function(in) {<br>' +
      '  var out = [];<br>' +
      '  for (var i = 1; i < in.length; i++) {<br>' +
      '    if (in[i] >= 10) {<br>' +
      '      out.push(in[i]);<br>' +
      '    }<br>' +
      '  }<br>' +
      '  return out;<br>' +
      '};</code></pre>',

    task: 'Schreibe eine Funktion <code>mean</code>, die ein Array gefüllt mit Zahlen entgegennimmt und den Mittelwert dieser Zahlen zurückgibt. ' +
      'Tipp: Um den Mittelwert von n Zahlen zu berechnen, mußt du die Zahlen aufaddieren und die erhaltene Summe durch n teilen. ' +
      '<code>mean([1, 4])</code> sollte <code>(1 + 4)/2 = 2.5</code> ergeben.',

    beforeTests: function() {
      if (typeof mean !== "undefined") {
        mean = undefined;
      }
    },

    tests: [
      function() {
        return jshero.testutil.assert_isFunction('mean');
      },

      function() {
        return jshero.testutil.assert_functionHasNumOfParameter('mean', 1);
      },

      function() {
        return jshero.testutil.assert_functionReturns('mean([0])', 0);
      },

      function() {
        return jshero.testutil.assert_functionReturns('mean([1, 2])', 1.5);
      },

      function() {
        return jshero.testutil.assert_functionReturns('mean([1, 4, 10, 85])', 25);
      },

      function() {
        return jshero.testutil.assert_functionReturns('mean([-2, -4, 17, 34])', 11.25);
      }
    ]

  });

})();
