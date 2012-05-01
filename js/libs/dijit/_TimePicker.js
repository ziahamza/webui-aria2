//>>built
require({cache:{"url:dijit/templates/TimePicker.html":"<div id=\"widget_${id}\" class=\"dijitMenu\"\n    ><div data-dojo-attach-point=\"upArrow\" class=\"dijitButtonNode dijitUpArrowButton\" data-dojo-attach-event=\"onmouseenter:_buttonMouse,onmouseleave:_buttonMouse\"\n\t\t><div class=\"dijitReset dijitInline dijitArrowButtonInner\" role=\"presentation\">&#160;</div\n\t\t><div class=\"dijitArrowButtonChar\">&#9650;</div></div\n    ><div data-dojo-attach-point=\"timeMenu,focusNode\" data-dojo-attach-event=\"onclick:_onOptionSelected,onmouseover,onmouseout\"></div\n    ><div data-dojo-attach-point=\"downArrow\" class=\"dijitButtonNode dijitDownArrowButton\" data-dojo-attach-event=\"onmouseenter:_buttonMouse,onmouseleave:_buttonMouse\"\n\t\t><div class=\"dijitReset dijitInline dijitArrowButtonInner\" role=\"presentation\">&#160;</div\n\t\t><div class=\"dijitArrowButtonChar\">&#9660;</div></div\n></div>\n"}});
define("dijit/_TimePicker",["dojo/_base/array","dojo/date","dojo/date/locale","dojo/date/stamp","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/_base/event","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/_base/sniff","dojo/query","dijit/typematic","./_Widget","./_TemplatedMixin","./form/_FormValueWidget","dojo/text!./templates/TimePicker.html"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12){
return _5("dijit._TimePicker",[_f,_10],{templateString:_12,baseClass:"dijitTimePicker",clickableIncrement:"T00:15:00",visibleIncrement:"T01:00:00",visibleRange:"T05:00:00",value:new Date(),_visibleIncrement:2,_clickableIncrement:1,_totalIncrements:10,constraints:{},serialize:_4.toISOString,setValue:function(_13){
_9.deprecated("dijit._TimePicker:setValue() is deprecated.  Use set('value', ...) instead.","","2.0");
this.set("value",_13);
},_setValueAttr:function(_14){
this._set("value",_14);
this._showText();
},_setFilterStringAttr:function(val){
this._set("filterString",val);
this._showText();
},isDisabledDate:function(){
return false;
},_getFilteredNodes:function(_15,_16,_17,_18){
var _19=[],_1a=_18?_18.date:this._refDate,n,i=_15,max=this._maxIncrement+Math.abs(i),chk=_17?-1:1,dec=_17?1:0,inc=1-dec;
do{
i-=dec;
n=this._createOption(i);
if(n){
if((_17&&n.date>_1a)||(!_17&&n.date<_1a)){
break;
}
_19[_17?"unshift":"push"](n);
_1a=n.date;
}
i+=inc;
}while(_19.length<_16&&(i*chk)<max);
return _19;
},_showText:function(){
var _1b=_4.fromISOString;
this.timeMenu.innerHTML="";
this._clickableIncrementDate=_1b(this.clickableIncrement);
this._visibleIncrementDate=_1b(this.visibleIncrement);
this._visibleRangeDate=_1b(this.visibleRange);
var _1c=function(_1d){
return _1d.getHours()*60*60+_1d.getMinutes()*60+_1d.getSeconds();
},_1e=_1c(this._clickableIncrementDate),_1f=_1c(this._visibleIncrementDate),_20=_1c(this._visibleRangeDate),_21=(this.value||this.currentFocus).getTime();
this._refDate=new Date(_21-_21%(_1e*1000));
this._refDate.setFullYear(1970,0,1);
this._clickableIncrement=1;
this._totalIncrements=_20/_1e;
this._visibleIncrement=_1f/_1e;
this._maxIncrement=(60*60*24)/_1e;
var _22=Math.min(this._totalIncrements,10),_23=this._getFilteredNodes(0,(_22>>1)+1,false),_24=[],_25=_22-_23.length,_26=this._getFilteredNodes(0,_25,true,_23[0]);
if(_26.length<_25&&_23.length>0){
_24=this._getFilteredNodes(_23.length,_25-_26.length,false,_23[_23.length-1]);
}
_1.forEach(_26.concat(_23,_24),function(n){
this.timeMenu.appendChild(n);
},this);
},constructor:function(){
this.constraints={};
},postMixInProperties:function(){
this.inherited(arguments);
this._setConstraintsAttr(this.constraints);
},_setConstraintsAttr:function(_27){
_b.mixin(this,_27);
if(!_27.locale){
_27.locale=this.lang;
}
},postCreate:function(){
this.connect(this.timeMenu,_c("ie")?"onmousewheel":"DOMMouseScroll","_mouseWheeled");
this._connects.push(_e.addMouseListener(this.upArrow,this,"_onArrowUp",33,250));
this._connects.push(_e.addMouseListener(this.downArrow,this,"_onArrowDown",33,250));
this.inherited(arguments);
},_buttonMouse:function(e){
_6.toggle(e.currentTarget,e.currentTarget==this.upArrow?"dijitUpArrowHover":"dijitDownArrowHover",e.type=="mouseenter"||e.type=="mouseover");
},_createOption:function(_28){
var _29=new Date(this._refDate);
var _2a=this._clickableIncrementDate;
_29.setHours(_29.getHours()+_2a.getHours()*_28,_29.getMinutes()+_2a.getMinutes()*_28,_29.getSeconds()+_2a.getSeconds()*_28);
if(this.constraints.selector=="time"){
_29.setFullYear(1970,0,1);
}
var _2b=_3.format(_29,this.constraints);
if(this.filterString&&_2b.toLowerCase().indexOf(this.filterString)!==0){
return null;
}
var div=_7.create("div",{"class":this.baseClass+"Item"});
div.date=_29;
div.index=_28;
_7.create("div",{"class":this.baseClass+"ItemInner",innerHTML:_2b},div);
if(_28%this._visibleIncrement<1&&_28%this._visibleIncrement>-1){
_6.add(div,this.baseClass+"Marker");
}else{
if(!(_28%this._clickableIncrement)){
_6.add(div,this.baseClass+"Tick");
}
}
if(this.isDisabledDate(_29)){
_6.add(div,this.baseClass+"ItemDisabled");
}
if(this.value&&!_2.compare(this.value,_29,this.constraints.selector)){
div.selected=true;
_6.add(div,this.baseClass+"ItemSelected");
if(_6.contains(div,this.baseClass+"Marker")){
_6.add(div,this.baseClass+"MarkerSelected");
}else{
_6.add(div,this.baseClass+"TickSelected");
}
this._highlightOption(div,true);
}
return div;
},_onOptionSelected:function(tgt){
var _2c=tgt.target.date||tgt.target.parentNode.date;
if(!_2c||this.isDisabledDate(_2c)){
return;
}
this._highlighted_option=null;
this.set("value",_2c);
this.onChange(_2c);
},onChange:function(){
},_highlightOption:function(_2d,_2e){
if(!_2d){
return;
}
if(_2e){
if(this._highlighted_option){
this._highlightOption(this._highlighted_option,false);
}
this._highlighted_option=_2d;
}else{
if(this._highlighted_option!==_2d){
return;
}else{
this._highlighted_option=null;
}
}
_6.toggle(_2d,this.baseClass+"ItemHover",_2e);
if(_6.contains(_2d,this.baseClass+"Marker")){
_6.toggle(_2d,this.baseClass+"MarkerHover",_2e);
}else{
_6.toggle(_2d,this.baseClass+"TickHover",_2e);
}
},onmouseover:function(e){
this._keyboardSelected=null;
var tgr=(e.target.parentNode===this.timeMenu)?e.target:e.target.parentNode;
if(!_6.contains(tgr,this.baseClass+"Item")){
return;
}
this._highlightOption(tgr,true);
},onmouseout:function(e){
this._keyboardSelected=null;
var tgr=(e.target.parentNode===this.timeMenu)?e.target:e.target.parentNode;
this._highlightOption(tgr,false);
},_mouseWheeled:function(e){
this._keyboardSelected=null;
_8.stop(e);
var _2f=(_c("ie")?e.wheelDelta:-e.detail);
this[(_2f>0?"_onArrowUp":"_onArrowDown")]();
},_onArrowUp:function(_30){
if(typeof _30=="number"&&_30==-1){
return;
}
if(!this.timeMenu.childNodes.length){
return;
}
var _31=this.timeMenu.childNodes[0].index;
var _32=this._getFilteredNodes(_31,1,true,this.timeMenu.childNodes[0]);
if(_32.length){
this.timeMenu.removeChild(this.timeMenu.childNodes[this.timeMenu.childNodes.length-1]);
this.timeMenu.insertBefore(_32[0],this.timeMenu.childNodes[0]);
}
},_onArrowDown:function(_33){
if(typeof _33=="number"&&_33==-1){
return;
}
if(!this.timeMenu.childNodes.length){
return;
}
var _34=this.timeMenu.childNodes[this.timeMenu.childNodes.length-1].index+1;
var _35=this._getFilteredNodes(_34,1,false,this.timeMenu.childNodes[this.timeMenu.childNodes.length-1]);
if(_35.length){
this.timeMenu.removeChild(this.timeMenu.childNodes[0]);
this.timeMenu.appendChild(_35[0]);
}
},handleKey:function(e){
if(e.charOrCode==_a.DOWN_ARROW||e.charOrCode==_a.UP_ARROW){
_8.stop(e);
if(this._highlighted_option&&!this._highlighted_option.parentNode){
this._highlighted_option=null;
}
var _36=this.timeMenu,tgt=this._highlighted_option||_d("."+this.baseClass+"ItemSelected",_36)[0];
if(!tgt){
tgt=_36.childNodes[0];
}else{
if(_36.childNodes.length){
if(e.charOrCode==_a.DOWN_ARROW&&!tgt.nextSibling){
this._onArrowDown();
}else{
if(e.charOrCode==_a.UP_ARROW&&!tgt.previousSibling){
this._onArrowUp();
}
}
if(e.charOrCode==_a.DOWN_ARROW){
tgt=tgt.nextSibling;
}else{
tgt=tgt.previousSibling;
}
}
}
this._highlightOption(tgt,true);
this._keyboardSelected=tgt;
return false;
}else{
if(e.charOrCode==_a.ENTER||e.charOrCode===_a.TAB){
if(!this._keyboardSelected&&e.charOrCode===_a.TAB){
return true;
}
if(this._highlighted_option){
this._onOptionSelected({target:this._highlighted_option});
}
return e.charOrCode===_a.TAB;
}
}
return undefined;
}});
});
