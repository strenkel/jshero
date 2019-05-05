(function(testutil) {

  jshero.koans.add({

    id: 'roman1',

    title: 'Roman numerals I',

    lesson: `The following task is challenging.`,

    task: `Write a function <code>arabic</code> that converts a
<a href="https://en.wikipedia.org/wiki/Roman_numerals">Roman number</a> (up to 1000) into an
<a href="https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system">Arabic</a>.
<code>arabic("CDLXXXIII")</code> should return <code>483</code>.`,

    beforeTests: function() {
      if (typeof arabic !== "undefined") {
        arabic = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('arabic');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('arabic', 1);
      },

      function() {
        return testutil.assert_functionReturns('arabic("I")', 1);
      },

      function() {
        return testutil.assert_functionReturns('arabic("II")', 2);
      },

      function() {
        return testutil.assert_functionReturns('arabic("III")', 3);
      },

      function() {
        return testutil.assert_functionReturns('arabic("IV")', 4);
      },

      function() {
        return testutil.assert_functionReturns('arabic("V")', 5);
      },

      function() {
        return testutil.assert_functionReturns('arabic("VI")', 6);
      },

      function() {
        return testutil.assert_functionReturns('arabic("X")', 10);
      },

      function() {
        return testutil.assert_functionReturns('arabic("CDLXXXIII")', 483);
      },

      function() {
        return testutil.assert_functionReturns('arabic("DCLXVI")', 666);
      },

      function() {
        return testutil.assert_functionReturns('arabic("CMXCIX")', 999);
      },

      function() {
        return testutil.assert_functionReturns('arabic("M")', 1000);
      }

    ]

  });

})(jshero.testutil);
