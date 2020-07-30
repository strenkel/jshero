jshero.koans.add({id:"stringupper",title:"String: toUpperCase()",lesson:"In addition to the <code>length</code> property, strings have methods.\nThese are functions that are applied to the string. Like the <code>length</code> property,\nthese methods are appended with a point to the string or to a variable that contains a string.\nThe arguments enclosed in parentheses follow. Two of these string methods are the parameterless\nmethods <code>toUpperCase</code> and <code>toLowerCase</code>. They return the string in\nuppercase or lowercase.\n\n<pre><code>let town = 'Mthatha';\nlet output = town.toUpperCase();</code/></pre>\n\n<code>output</code> has the value <code>'MTHATHA'</code>.\n<code>town</code> still has the value <code>'Mthatha'</code>.\n\n<pre><code>output = town.toLowerCase();</code/></pre>\n\nNow <code>output</code> has the value <code>'mthatha'</code>.",task:"Write a function <code>toCase</code> that takes a string and returns that string in\nlowercase and uppercase with <code>-</code> as delimiter.<br><br>\nExample: <code>toCase('Mthatha')</code> should return <code>'mthatha-MTHATHA'</code>.",hint:"<pre><code>function toCase(text) {\n  return ... + '-' + ...;\n}</code></pre>",solution:"<pre><code>function toCase(text) {\n  return text.toLowerCase() + '-' + text.toUpperCase();\n}</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("toCase")},function(){return jshero.testutil.assert_functionHasNumOfParameter("toCase",1)},function(){return jshero.testutil.assert_functionReturns("toCase('Mthatha')","mthatha-MTHATHA")},function(){return jshero.testutil.assert_functionReturns("toCase('Johannesburg')","johannesburg-JOHANNESBURG")}]});