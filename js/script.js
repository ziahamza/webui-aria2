var toHTML = function(txt){
  var html = txt + '<br>';
  return html;
};
require(["dojo/dom", "dojo/io/script", "dojo/domReady!"], function(dom, ioScript){
  var log = dom.byId("console");
  log.innerHTML += toHTML("connecting!!!");
  ioScript.get({
    url: "http://localhost:6800/jsonrpc",
    timeout: 3000,
    content: {
      jsonrpc: 2.0,
      id: 'webui',
      method: 'aria2.getVersion'
    },
    callbackParamName: 'jsoncallback',
    load: function(data){
      log.innerHTML += toHTML("connected!!!!!");
      log.innerHTML += toHTML(JSON.stringify(data));
    },
    error: function(){
      log.innerHTML += toHTML("error from aria2, please connect!!!");
    }
  });
});




