jshero.koans.add({

  id: "nor",

  title: "NOR",

  lesson: `In the last task you have coded a so-called NAND (Not AND) gate. NAND gates are a standard component in
digital electronics. Any Boolean function can be implemented by using a combination of NAND gates.
Here you will get to know another standard gate, the NOR (Not OR) gate.`,

  task: `Write a function <code>nor</code> that takes two Boolean values.
If both values are <code>false</code>, the result should be <code>true</code>.
In the other cases the return should be <code>false</code>. The call <code>nor(false, false)</code>
should return <code>true</code>. The calls <code>nor(true, false)</code>, <code>nor(false, true)</code>
and <code>nor(true, true)</code> should return <code>false</code>.`,

  beforeTests: function() {
    if (typeof nor !== "undefined") {
      nor = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('nor');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('nor', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nor(false, false)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nor(false, true)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nor(true, false)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nor(true, true)', false);
    }

  ]

});
