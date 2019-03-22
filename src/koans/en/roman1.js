(function(testutil) {

  jshero.koans.add({

    id: 'roman1',

    title: 'Roman numerals I',

    lesson: `The following task is challenging.`,

    task: `Write a function <code>roman</code> that converts a
<a href="https://en.wikipedia.org/wiki/Roman_numerals">Roman number</a> (up to 1000) into an Arabic.
<code>roman("CDLXXXIII")</code> should return <code>483</code>.`,

    beforeTests: function() {
      if (typeof roman !== "undefined") {
        roman = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('roman');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('roman', 1);
      },

      function() {
        return testutil.assert_functionReturns('roman("I")', 1);
      },

      function() {
        return testutil.assert_functionReturns('roman("II")', 2);
      },

      function() {
        return testutil.assert_functionReturns('roman("III")', 3);
      },

      function() {
        return testutil.assert_functionReturns('roman("IV")', 4);
      },

      function() {
        return testutil.assert_functionReturns('roman("V")', 5);
      },

      function() {
        return testutil.assert_functionReturns('roman("VI")', 6);
      },

      function() {
        return testutil.assert_functionReturns('roman("X")', 10);
      },

      function() {
        return testutil.assert_functionReturns('roman("CDLXXXIII")', 483);
      },

      function() {
        return testutil.assert_functionReturns('roman("DCLXVI")', 666);
      },

      function() {
        return testutil.assert_functionReturns('roman("CMXCIX")', 999);
      },

      function() {
        return testutil.assert_functionReturns('roman("M")', 1000);
      }

    ]

  });

})(jshero.testutil);