jshero.koans.add({

  id: 'arraypush',

  title: 'Array: shift() and push()',

  lesson: `Like strings, arrays have several methods. Two of these methods are <code>shift</code> and <code>push</code>.
To remind you: Methods are functions that are applied to an object, here an array. Methods are appended with a point to the object.
<br><br>
The array method <code>shift</code> removes the first element from an array and returns that element.
The length of the array is reduced by 1.

<pre><code>var languages = ['C', 'Java', 'JavaScript'];
var firstLanguage = languages.shift();</code></pre>

The array <code>languages</code> is created with 3 programming languages.
After <code>shift</code> the array <code>languages</code> contains only 2 items,
viz. <code>['Java', 'JavaScript']</code>. The value <code>'C'</code> is stored in <code>firstLanguage</code>.
<br><br>
The method <code>push</code> adds a new element to an array.
The new element is passed as a parameter and is added to the end of the array.

<pre><code>var languages = [];
languages.push('C');
languages.push('Java');
languages.push('JavaScript');</code></pre>

Here an empty array is filled successively with the passed values.
Finally we get the array <code>['C', 'Java', 'JavaScript']</code>.`,

  task: `Write a function <code>rotate</code> that rotates the elements of an array.
All elements should be moved one position to the left.
The 0th element should be placed at the end of the array. The rotated array should be returned.
<code>rotate(['a', 'b', 'c'])</code> should return <code>['b', 'c', 'a']</code>.`,

  beforeTests: function() {
    if (typeof rotate !== 'undefined') {
      rotate = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('rotate');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('rotate', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('rotate([1, 2])', [2, 1]);
    },

    function() {
      return jshero.testutil.assert_functionReturns("rotate(['a', 'b', 'c'])", ['b', 'c', 'a']);
    },

    function() {
      return jshero.testutil.assert_functionReturns("rotate([1, 'b', 'c', 37])", ['b', 'c', 37, 1]);
    }
  ]

});