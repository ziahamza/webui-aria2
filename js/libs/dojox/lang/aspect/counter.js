//>>built
define(["dijit","dojo","dojox"],function(_1,_2,_3){
_2.provide("dojox.lang.aspect.counter");
(function(){
var _4=_3.lang.aspect;
var _5=function(){
this.reset();
};
_2.extend(_5,{before:function(){
++this.calls;
},afterThrowing:function(){
++this.errors;
},reset:function(){
this.calls=this.errors=0;
}});
_4.counter=function(){
return new _5;
};
})();
});
