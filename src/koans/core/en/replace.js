jshero.koans.add({

  id: 'replace',

  title: 'String: replace()',

  lesson: `The <code>replace</code> method replaces a substring with another:

<pre><code>let str = 'JavaScript';
let newstr = str.replace('Java', 'ECMA');</code></pre>

<code>'Java'</code> is replaced with <code>'ECMA'</code>. Thus <code>newstr</code> has the value <code>'ECMAScript'</code>.
The original string remains unchanged. Only the first occurrence is replaced:

<pre><code>let newstr = 'Dada'.replace('a', 'i');</code></pre>

<code>newstr</code> has the value <code>'Dida'</code> and not <code>'Didi'</code>.`,

  task: `Write a function <code>normalize</code>, that replaces <code>'-'</code> with <code>'/'</code> in a date string.
<code>normalize('20-05-2017')</code> should return <code>'20/05/2017'</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('normalize');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('normalize', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("normalize('20-05-2017')", '20/05/2017');
    },

    function() {
      return jshero.testutil.assert_functionReturns("normalize('8-11-1922')", '8/11/1922');
    }

  ]

});
