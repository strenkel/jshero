if(typeof jshero==="undefined"){var jshero={}}jshero.testutil=function(I18N,jsheroDate,jsheroUtil,jsheroArray,jsheroObject,evaluator,stringify){"use strict";var matchHtmlRegExp=/["'&<>\s]/;function escapeHtml(string){var str=""+string;var match=matchHtmlRegExp.exec(str);if(!match){return str}var escape;var html="";var index=0;var lastIndex=0;for(index=match.index;index<str.length;index++){switch(str.charCodeAt(index)){case 32:escape="&nbsp;";break;case 34:escape="&quot;";break;case 38:escape="&amp;";break;case 39:escape="&#39;";break;case 60:escape="&lt;";break;case 62:escape="&gt;";break;default:continue;}if(lastIndex!==index){html+=str.substring(lastIndex,index)}lastIndex=index+1;html+=escape}return lastIndex!==index?html+str.substring(lastIndex,index):html}var assert_isFunction=function(f_name){var ok=evaluator.evalTest("typeof "+f_name+"=== 'function';");var msg;if(ok){msg="<code>"+f_name+"</code> "+I18N("isAFunction")+"."}else{msg="<code>"+f_name+"</code> "+I18N("isNotAFunction")+"."}return{ok:ok,msg:msg}};var assert_isString=function(value){var ok=evaluator.equalsString(value);return createXHasValueResult(ok)};var assert_isValue=function(value){var ok=evaluator.equalsValue(value);return createXHasValueResult(ok)};var assert_functionReturnsType=function(f_call,expectedReturnType){var ok,msg,e;var fCallEscaped=escapeHtml(f_call);try{var result=evaluator.evalTest(f_call);switch(expectedReturnType){case"Array":ok=Array.isArray(result);if(ok){msg=jsheroUtil.formatMessage(I18N("functionReturnsAnArray"),[fCallEscaped])}else{msg=jsheroUtil.formatMessage(I18N("functionNotReturnsAnArray"),[fCallEscaped])}break;case"Date":ok=jsheroDate.isDate(result);if(ok){msg=jsheroUtil.formatMessage(I18N("functionReturnsADate"),[fCallEscaped])}else{msg=jsheroUtil.formatMessage(I18N("functionNotReturnsADate"),[fCallEscaped])}break;default:ok=false;msg=I18N("unknownError");console.error("testutil.assert_functionReturnsType: unkwown type");break;}}catch(exc){ok=false;msg=I18N("errorAtCallOf")+" <code>"+fCallEscaped+"</code>.";e=exc}return{ok:ok,msg:msg,e:e}};var assert_functionLogs=function(f_call,expectedLog){var ok,msg,e;var fCallEscaped=escapeHtml(f_call);try{evaluator.evalTest(f_call);var expectedLogExcaped=escapeHtml(stringify(expectedLog));if(jshero.log.hasLog(expectedLog)){ok=true;msg=jsheroUtil.formatMessage(I18N("doesLog"),[fCallEscaped,expectedLogExcaped])}else{ok=false;msg=jsheroUtil.formatMessage(I18N("doesNotLog"),[fCallEscaped,expectedLogExcaped])}}catch(exc){ok=false;msg=I18N("errorAtCallOf")+" <code>"+fCallEscaped+"</code>.";e=exc}return{msg:msg,ok:ok,e:e}};var assert_functionReturns=function(f_call,expectedReturnValue,options){options=options||{};var ok,msg,e;var fCallEscaped=escapeHtml(f_call);try{var result=evaluator.evalTest(f_call);if(Array.isArray(expectedReturnValue)){ok=jsheroArray.isEqual(result,expectedReturnValue)}else if(jsheroDate.isValidDate(expectedReturnValue)){ok=jsheroDate.isEqual(result,expectedReturnValue)}else if(Number.isNaN(expectedReturnValue)){ok=Number.isNaN(result)}else{ok=result===expectedReturnValue}if(jsheroDate.isValidDate(expectedReturnValue)){if(ok){msg=jsheroUtil.formatMessage(I18N("functionReturnsDate"),[fCallEscaped,jsheroDate.toString(expectedReturnValue,options)])}else{if(jsheroDate.isValidDate(result)){msg=jsheroUtil.formatMessage(I18N("functionNotReturnsDate"),[fCallEscaped,jsheroDate.toString(expectedReturnValue,options),jsheroDate.toString(result,options)])}else{msg=jsheroUtil.formatMessage(I18N("functionNotReturnsValidDate"),[fCallEscaped,jsheroDate.toString(expectedReturnValue,options),escapeHtml(stringify(result))])}}}else{if(ok){msg=jsheroUtil.formatMessage(I18N("functionReturns"),[fCallEscaped,escapeHtml(stringify(expectedReturnValue))])}else{msg=jsheroUtil.formatMessage(I18N("functionNotReturns"),[fCallEscaped,escapeHtml(stringify(expectedReturnValue)),escapeHtml(stringify(result))])}}}catch(exc){ok=false;msg=I18N("errorAtCallOf")+" <code>"+fCallEscaped+"</code>.";e=exc}return{ok:ok,msg:msg,e:e}};var assert_functionReturnsObject=function(f_call,expectedReturnValue){var ok,msg,e;var fCallEscaped=escapeHtml(f_call);try{var result=evaluator.evalTest(f_call);ok=jsheroObject.flatEquals(result,expectedReturnValue);if(ok){msg=jsheroUtil.formatMessage(I18N("functionReturns"),[fCallEscaped,escapeHtml(stringify(expectedReturnValue))])}else{msg=jsheroUtil.formatMessage(I18N("functionNotReturns"),[fCallEscaped,escapeHtml(stringify(expectedReturnValue)),escapeHtml(stringify(result))])}}catch(exc){ok=false;msg=I18N("errorAtCallOf")+" <code>"+fCallEscaped+"</code>.";e=exc}return{ok:ok,msg:msg,e:e}};var assert_variableDefined=function(name){var ok=evaluator.evalTest("typeof "+name+" !== 'undefined';");var msg;if(ok){msg=jsheroUtil.formatMessage(I18N("varHasValue"),[name])}else{msg=jsheroUtil.formatMessage(I18N("varHasNoValue"),[name])}return{ok:ok,msg:msg}};var assert_variableHasValue=function(name,expValue){var actValue=evaluator.evalTest(name);var ok=actValue===expValue;return createVariableHasValueResult(ok,name,actValue,expValue)};var assert_variableIsObject=function(name,expObject){var actObject=evaluator.evalTest(name);var ok=jsheroObject.flatEquals(actObject,expObject);return createVariableHasValueResult(ok,name,actObject,expObject)};var assert_functionHasNumOfParameter=function(f_name,expectedNumOfParam){var actualNumOfParam=evaluator.evalTest(f_name+".length;");var ok=actualNumOfParam===expectedNumOfParam;var msg;if(ok){msg=jsheroUtil.formatMessage(I18N("correctNumOfParam"),[f_name,expectedNumOfParam])}else{msg=jsheroUtil.formatMessage(I18N("wrongNumOfParam"),[f_name,expectedNumOfParam,actualNumOfParam])}return{ok:ok,msg:msg}};var createXHasValueResult=function(ok){var msg;if(ok){msg="<code>x</code> "+I18N("hasValue")+" <code>"+evaluator.getCode()+"</code>."}else{msg="<code>x</code> "+I18N("hasNotValue")+" <code>"+evaluator.getCode()+"</code>."}return{ok:ok,msg:msg}};var createVariableHasValueResult=function(ok,name,actValue,expValue){var msg;if(ok){msg=jsheroUtil.formatMessage(I18N("varHasValueOf"),[name,escapeHtml(stringify(expValue))])}else{msg=jsheroUtil.formatMessage(I18N("varHasWrongValue"),[name,escapeHtml(stringify(expValue)),escapeHtml(stringify(actValue))])}return{ok:ok,msg:msg}};return{assert_isFunction:assert_isFunction,assert_functionReturnsType:assert_functionReturnsType,assert_functionReturns:assert_functionReturns,assert_functionReturnsObject:assert_functionReturnsObject,assert_functionHasNumOfParameter:assert_functionHasNumOfParameter,assert_functionLogs:assert_functionLogs,assert_variableDefined:assert_variableDefined,assert_variableHasValue:assert_variableHasValue,assert_variableIsObject:assert_variableIsObject,assert_isString:assert_isString,assert_isValue:assert_isValue}}(jshero.i18n.get,jshero.date,jshero.util,jshero.array,jshero.object,jshero.evaluator,jshero.nodeutil.inspect);