//>>built
define("dojox/charting/Element",["dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/_base/declare","dojox/gfx","dojox/gfx/utils","dojox/gfx/shape"],function(_1,_2,_3,_4,_5,_6,_7){
return _4("dojox.charting.Element",null,{chart:null,group:null,htmlElements:null,dirty:true,constructor:function(_8){
this.chart=_8;
this.group=null;
this.htmlElements=[];
this.dirty=true;
this.trailingSymbol="...";
this._events=[];
},createGroup:function(_9){
if(!_9){
_9=this.chart.surface;
}
if(!this.group){
this.group=_9.createGroup();
}
return this;
},purgeGroup:function(){
this.destroyHtmlElements();
if(this.group){
_6.forEach(this.group,function(_a){
_7.dispose(_a);
});
this.group.clear();
this.group.removeShape();
this.group=null;
}
this.dirty=true;
if(this._events.length){
_2.forEach(this._events,function(_b){
_b.shape.disconnect(_b.handle);
});
this._events=[];
}
return this;
},cleanGroup:function(_c){
this.destroyHtmlElements();
if(!_c){
_c=this.chart.surface;
}
if(this.group){
this.group.clear();
}else{
this.group=_c.createGroup();
}
this.dirty=true;
return this;
},destroyHtmlElements:function(){
if(this.htmlElements.length){
_2.forEach(this.htmlElements,_3.destroy);
this.htmlElements=[];
}
},destroy:function(){
this.purgeGroup();
},getTextWidth:function(s,_d){
return _5._base._getTextBox(s,{font:_d}).w||0;
},getTextWithLimitLength:function(s,_e,_f,_10){
if(!s||s.length<=0){
return {text:"",truncated:_10||false};
}
if(!_f||_f<=0){
return {text:s,truncated:_10||false};
}
var _11=2,_12=0.618,_13=s.substring(0,1)+this.trailingSymbol,_14=this.getTextWidth(_13,_e);
if(_f<=_14){
return {text:_13,truncated:true};
}
var _15=this.getTextWidth(s,_e);
if(_15<=_f){
return {text:s,truncated:_10||false};
}else{
var _16=0,end=s.length;
while(_16<end){
if(end-_16<=_11){
while(this.getTextWidth(s.substring(0,_16)+this.trailingSymbol,_e)>_f){
_16-=1;
}
return {text:(s.substring(0,_16)+this.trailingSymbol),truncated:true};
}
var _17=_16+Math.round((end-_16)*_12),_18=this.getTextWidth(s.substring(0,_17),_e);
if(_18<_f){
_16=_17;
end=end;
}else{
_16=_16;
end=_17;
}
}
}
},getTextWithLimitCharCount:function(s,_19,_1a,_1b){
if(!s||s.length<=0){
return {text:"",truncated:_1b||false};
}
if(!_1a||_1a<=0||s.length<=_1a){
return {text:s,truncated:_1b||false};
}
return {text:s.substring(0,_1a)+this.trailingSymbol,truncated:true};
},_plotFill:function(_1c,dim,_1d){
if(!_1c||!_1c.type||!_1c.space){
return _1c;
}
var _1e=_1c.space;
switch(_1c.type){
case "linear":
if(_1e==="plot"||_1e==="shapeX"||_1e==="shapeY"){
_1c=_5.makeParameters(_5.defaultLinearGradient,_1c);
_1c.space=_1e;
if(_1e==="plot"||_1e==="shapeX"){
var _1f=dim.height-_1d.t-_1d.b;
_1c.y1=_1d.t+_1f*_1c.y1/100;
_1c.y2=_1d.t+_1f*_1c.y2/100;
}
if(_1e==="plot"||_1e==="shapeY"){
var _1f=dim.width-_1d.l-_1d.r;
_1c.x1=_1d.l+_1f*_1c.x1/100;
_1c.x2=_1d.l+_1f*_1c.x2/100;
}
}
break;
case "radial":
if(_1e==="plot"){
_1c=_5.makeParameters(_5.defaultRadialGradient,_1c);
_1c.space=_1e;
var _20=dim.width-_1d.l-_1d.r,_21=dim.height-_1d.t-_1d.b;
_1c.cx=_1d.l+_20*_1c.cx/100;
_1c.cy=_1d.t+_21*_1c.cy/100;
_1c.r=_1c.r*Math.sqrt(_20*_20+_21*_21)/200;
}
break;
case "pattern":
if(_1e==="plot"||_1e==="shapeX"||_1e==="shapeY"){
_1c=_5.makeParameters(_5.defaultPattern,_1c);
_1c.space=_1e;
if(_1e==="plot"||_1e==="shapeX"){
var _1f=dim.height-_1d.t-_1d.b;
_1c.y=_1d.t+_1f*_1c.y/100;
_1c.height=_1f*_1c.height/100;
}
if(_1e==="plot"||_1e==="shapeY"){
var _1f=dim.width-_1d.l-_1d.r;
_1c.x=_1d.l+_1f*_1c.x/100;
_1c.width=_1f*_1c.width/100;
}
}
break;
}
return _1c;
},_shapeFill:function(_22,_23){
if(!_22||!_22.space){
return _22;
}
var _24=_22.space;
switch(_22.type){
case "linear":
if(_24==="shape"||_24==="shapeX"||_24==="shapeY"){
_22=_5.makeParameters(_5.defaultLinearGradient,_22);
_22.space=_24;
if(_24==="shape"||_24==="shapeX"){
var _25=_23.width;
_22.x1=_23.x+_25*_22.x1/100;
_22.x2=_23.x+_25*_22.x2/100;
}
if(_24==="shape"||_24==="shapeY"){
var _25=_23.height;
_22.y1=_23.y+_25*_22.y1/100;
_22.y2=_23.y+_25*_22.y2/100;
}
}
break;
case "radial":
if(_24==="shape"){
_22=_5.makeParameters(_5.defaultRadialGradient,_22);
_22.space=_24;
_22.cx=_23.x+_23.width/2;
_22.cy=_23.y+_23.height/2;
_22.r=_22.r*_23.width/200;
}
break;
case "pattern":
if(_24==="shape"||_24==="shapeX"||_24==="shapeY"){
_22=_5.makeParameters(_5.defaultPattern,_22);
_22.space=_24;
if(_24==="shape"||_24==="shapeX"){
var _25=_23.width;
_22.x=_23.x+_25*_22.x/100;
_22.width=_25*_22.width/100;
}
if(_24==="shape"||_24==="shapeY"){
var _25=_23.height;
_22.y=_23.y+_25*_22.y/100;
_22.height=_25*_22.height/100;
}
}
break;
}
return _22;
},_pseudoRadialFill:function(_26,_27,_28,_29,end){
if(!_26||_26.type!=="radial"||_26.space!=="shape"){
return _26;
}
var _2a=_26.space;
_26=_5.makeParameters(_5.defaultRadialGradient,_26);
_26.space=_2a;
if(arguments.length<4){
_26.cx=_27.x;
_26.cy=_27.y;
_26.r=_26.r*_28/100;
return _26;
}
var _2b=arguments.length<5?_29:(end+_29)/2;
return {type:"linear",x1:_27.x,y1:_27.y,x2:_27.x+_26.r*_28*Math.cos(_2b)/100,y2:_27.y+_26.r*_28*Math.sin(_2b)/100,colors:_26.colors};
return _26;
}});
});
