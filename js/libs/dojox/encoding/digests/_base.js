//>>built
define("dojox/encoding/digests/_base",["dojo/_base/lang"],function(_1){
var d=_1.getObject("dojox.encoding.digests",true);
d.outputTypes={Base64:0,Hex:1,String:2,Raw:3};
d.addWords=function(a,b){
var l=(a&65535)+(b&65535);
var m=(a>>16)+(b>>16)+(l>>16);
return (m<<16)|(l&65535);
};
var _2=8;
var _3=(1<<_2)-1;
d.stringToWord=function(s){
var wa=[];
for(var i=0,l=s.length*_2;i<l;i+=_2){
wa[i>>5]|=(s.charCodeAt(i/_2)&_3)<<(i%32);
}
return wa;
};
d.wordToString=function(wa){
var s=[];
for(var i=0,l=wa.length*32;i<l;i+=_2){
s.push(String.fromCharCode((wa[i>>5]>>>(i%32))&_3));
}
return s.join("");
};
d.wordToHex=function(wa){
var h="0123456789abcdef",s=[];
for(var i=0,l=wa.length*4;i<l;i++){
s.push(h.charAt((wa[i>>2]>>((i%4)*8+4))&15)+h.charAt((wa[i>>2]>>((i%4)*8))&15));
}
return s.join("");
};
d.wordToBase64=function(wa){
var p="=",_4="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=[];
for(var i=0,l=wa.length*4;i<l;i+=3){
var t=(((wa[i>>2]>>8*(i%4))&255)<<16)|(((wa[i+1>>2]>>8*((i+1)%4))&255)<<8)|((wa[i+2>>2]>>8*((i+2)%4))&255);
for(var j=0;j<4;j++){
if(i*8+j*6>wa.length*32){
s.push(p);
}else{
s.push(_4.charAt((t>>6*(3-j))&63));
}
}
}
return s.join("");
};
return d;
});
