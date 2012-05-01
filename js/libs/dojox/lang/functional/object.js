//>>built
define("dojox/lang/functional/object",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/window","./lambda"],function(_1,_2,_3,df){
var _4={};
_2.mixin(df,{keys:function(_5){
var t=[];
for(var i in _5){
if(!(i in _4)){
t.push(i);
}
}
return t;
},values:function(_6){
var t=[];
for(var i in _6){
if(!(i in _4)){
t.push(_6[i]);
}
}
return t;
},filterIn:function(_7,f,o){
o=o||_3.global;
f=df.lambda(f);
var t={},v,i;
for(i in _7){
if(!(i in _4)){
v=_7[i];
if(f.call(o,v,i,_7)){
t[i]=v;
}
}
}
return t;
},forIn:function(_8,f,o){
o=o||_3.global;
f=df.lambda(f);
for(var i in _8){
if(!(i in _4)){
f.call(o,_8[i],i,_8);
}
}
return o;
},mapIn:function(_9,f,o){
o=o||_3.global;
f=df.lambda(f);
var t={},i;
for(i in _9){
if(!(i in _4)){
t[i]=f.call(o,_9[i],i,_9);
}
}
return t;
}});
return df;
});
