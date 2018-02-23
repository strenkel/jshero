jshero.koans.add({

  id: "xor",

  title: "XOR",

  lesson: `In the last task you have coded a so-called NAND (Not AND) gate.
NAND gates are a standard component in digital electronics. Any Boolean function can be implemented by using a combination of NAND gates.
Here you will get to know another important gate, the XOR (eXclusive OR) gate.`,

  task: `Write a function <code>xor</code> that takes two Boolean values. If both values are different, the result should be <code>true</code>.
If both values are the same, the result should be <code>false</code>. The calls <code>xor(true, false)</code> and
<code>xor(false, true)</code> should return <code>true</code>.
The calls <code>xor(true, true)</code> and <code>xor(false, false)</code> should return <code>false</code>.`,

  beforeTests: function() {
    if (typeof xor !== "undefined") {
      xor = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('xor');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('xor', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(true, true)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(false, false)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(true, false)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(false, true)', true);
    }

  ]

});
