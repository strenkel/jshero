if(typeof jshero==="undefined"){var jshero={}}jshero.serverlog=function(){const log=function(id){navigator.sendBeacon("https://www.jshero.net/api/log/".concat(id))};return{log:log}}();