//>>built
define("dojox/mvc/_DataBindingMixin",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/Stateful","dijit/registry"],function(_1,_2,_3,_4,_5){
return _3("dojox.mvc._DataBindingMixin",null,{ref:null,isValid:function(){
return this.get("binding")?this.get("binding").get("valid"):true;
},_dbstartup:function(){
if(this._databound){
return;
}
this._unwatchArray(this._viewWatchHandles);
this._viewWatchHandles=[this.watch("ref",function(_6,_7,_8){
if(this._databound){
this._setupBinding();
}
}),this.watch("value",function(_9,_a,_b){
if(this._databound){
var _c=this.get("binding");
if(_c){
if(!((_b&&_a)&&(_a.valueOf()===_b.valueOf()))){
_c.set("value",_b);
}
}
}
})];
this._beingBound=true;
this._setupBinding();
delete this._beingBound;
this._databound=true;
},_setupBinding:function(_d){
if(!this.ref){
return;
}
var _e=this.ref,pw,pb,_f;
if(_e&&_1.isFunction(_e.toPlainObject)){
_f=_e;
}else{
if(/^\s*expr\s*:\s*/.test(_e)){
_e=_e.replace(/^\s*expr\s*:\s*/,"");
_f=_1.getObject(_e);
}else{
if(/^\s*rel\s*:\s*/.test(_e)){
_e=_e.replace(/^\s*rel\s*:\s*/,"");
_d=_d||this._getParentBindingFromDOM();
if(_d){
_f=_1.getObject(""+_e,false,_d);
}
}else{
if(/^\s*widget\s*:\s*/.test(_e)){
_e=_e.replace(/^\s*widget\s*:\s*/,"");
var _10=_e.split(".");
if(_10.length==1){
_f=_5.byId(_e).get("binding");
}else{
pb=_5.byId(_10.shift()).get("binding");
_f=_1.getObject(_10.join("."),false,pb);
}
}else{
_d=_d||this._getParentBindingFromDOM();
if(_d){
_f=_1.getObject(""+_e,false,_d);
}else{
try{
if(_1.getObject(_e) instanceof _4){
_f=_1.getObject(_e);
}
}
catch(err){
if(_e.indexOf("${")==-1){
throw new Error("dojox.mvc._DataBindingMixin: '"+this.domNode+"' widget with illegal ref expression: '"+_e+"'");
}
}
}
}
}
}
}
if(_f){
if(_1.isFunction(_f.toPlainObject)){
this.binding=_f;
this._updateBinding("binding",null,_f);
}else{
throw new Error("dojox.mvc._DataBindingMixin: '"+this.domNode+"' widget with illegal ref not evaluating to a dojo.Stateful node: '"+_e+"'");
}
}
},_isEqual:function(one,_11){
return one===_11||isNaN(one)&&typeof one==="number"&&isNaN(_11)&&typeof _11==="number";
},_updateBinding:function(_12,old,_13){
this._unwatchArray(this._modelWatchHandles);
var _14=this.get("binding");
if(_14&&_1.isFunction(_14.watch)){
var _15=this;
this._modelWatchHandles=[_14.watch("value",function(_16,old,_17){
if(_15._isEqual(old,_17)){
return;
}
if(_15._isEqual(_15.get("value"),_17)){
return;
}
_15.set("value",_17);
}),_14.watch("valid",function(_18,old,_19){
_15._updateProperty(_18,old,_19,true);
if(_19!==_15.get(_18)){
if(_15.validate&&_1.isFunction(_15.validate)){
_15.validate();
}
}
}),_14.watch("required",function(_1a,old,_1b){
_15._updateProperty(_1a,old,_1b,false,_1a,_1b);
}),_14.watch("readOnly",function(_1c,old,_1d){
_15._updateProperty(_1c,old,_1d,false,_1c,_1d);
}),_14.watch("relevant",function(_1e,old,_1f){
_15._updateProperty(_1e,old,_1f,false,"disabled",!_1f);
})];
var val=_14.get("value");
if(val!=null){
this.set("value",val);
}
}
this._updateChildBindings();
},_updateProperty:function(_20,old,_21,_22,_23,_24){
if(old===_21){
return;
}
if(_21===null&&_22!==undefined){
_21=_22;
}
if(_21!==this.get("binding").get(_20)){
this.get("binding").set(_20,_21);
}
if(_23){
this.set(_23,_24);
}
},_updateChildBindings:function(_25){
var _26=this.get("binding")||_25;
if(_26&&!this._beingBound){
_2.forEach(_5.findWidgets(this.domNode),function(_27){
if(_27.ref&&_27._setupBinding){
_27._setupBinding(_26);
}else{
_27._updateChildBindings(_26);
}
});
}
},_getParentBindingFromDOM:function(){
var pn=this.domNode.parentNode,pw,pb;
while(pn){
pw=_5.getEnclosingWidget(pn);
if(pw){
pb=pw.get("binding");
if(pb&&_1.isFunction(pb.toPlainObject)){
break;
}
}
pn=pw?pw.domNode.parentNode:null;
}
return pb;
},_unwatchArray:function(_28){
_2.forEach(_28,function(h){
h.unwatch();
});
}});
});
