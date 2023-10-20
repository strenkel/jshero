jshero.koans.add({id:"xor",title:"XOR",lesson:"The Boolean operators have an order: First NOT, then AND, last OR.\nIf you want to change this order, use parentheses:\n\n<pre><code>let x1 = true || false && false;\nlet x2 = (true || false) && false;\nlet x3 = !false && false;\nlet x4 = !(false && false);</code></pre>\n\nIn the 1st line <code>&&</code> is evaluated first. <code>x1</code> is <code>true</code>.\nIn the 2nd line <code>||</code> is evaluated first. <code>x2</code> is <code>false</code>.\nIn the 3rd line <code>!</code> is evaluated first. <code>x3</code> is <code>false</code>.\nIn the 4th line <code>&&</code> is evaluated first. <code>x4</code> is <code>true</code>.<br><br>\n\nIn the following task you should code another important gate, the XOR (eXclusive OR) gate.",task:"Write a function <code>xor</code> that takes two Boolean values. If both values are different, the result should\nbe <code>true</code>. If both values are the same, the result should be <code>false</code>.<br><br>\nI.e.: The calls <code>xor(true,&nbsp;false)</code> and <code>xor(false,&nbsp;true)</code> should return <code>true</code>.\nThe calls <code>xor(true,&nbsp;true)</code> and <code>xor(false,&nbsp;false)</code> should return <code>false</code>.",hint:"Write an expression that returns <code>true</code> only if the first parameter is <code>true</code> and the second is <code>false</code>.\nThen write an expression that returns <code>true</code> only if the first parameter is <code>false</code> and the second is <code>true</code>.\nCombine both expressions appropriately.",solution:"<pre><code>function xor(a, b) {\n  return a && !b || !a && b;\n}</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("xor")},function(){return jshero.testutil.assert_functionHasNumOfParameter("xor",2)},function(){return jshero.testutil.assert_functionReturns("xor(true, true)",false)},function(){return jshero.testutil.assert_functionReturns("xor(false, false)",false)},function(){return jshero.testutil.assert_functionReturns("xor(true, false)",true)},function(){return jshero.testutil.assert_functionReturns("xor(false, true)",true)}]});