/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

//>>built
require({cache:{"dojox/main":function(){define(["dojo/_base/kernel"],function(_1){return _1.dojox;});},"dojox/mobile/compat":function(){define(["dojo/_base/lang","dojo/_base/sniff"],function(_2,_3){var dm=_2.getObject("dojox.mobile",true);if(!_3("webkit")){var s="dojox/mobile/_compat";require([s]);}return dm;});},"dijit/main":function(){define("dijit/main",["dojo/_base/kernel"],function(_4){return _4.dijit;});}}});require(["dojo/i18n"],function(_5){_5._preloadLocalizations("dojox/mobile/app/nls/compat",[]);});define("dojox/mobile/app/compat",["dijit","dojo","dojox","dojo/require!dojox/mobile/compat"],function(_6,_7,_8){_7.provide("dojox.mobile.app.compat");_7.require("dojox.mobile.compat");_7.extend(_8.mobile.app.AlertDialog,{_doTransition:function(_9){var h=_7.marginBox(this.domNode.firstChild).h;var _a=this.controller.getWindowSize().h;var _b=_a-h;var _c=_a;var _d=_7.fx.slideTo({node:this.domNode,duration:400,top:{start:_9<0?_b:_c,end:_9<0?_c:_b}});var _e=_7[_9<0?"fadeOut":"fadeIn"]({node:this.mask,duration:400});var _f=_7.fx.combine([_d,_e]);var _10=this;_7.connect(_f,"onEnd",this,function(){if(_9<0){_10.domNode.style.display="none";_7.destroy(_10.domNode);_7.destroy(_10.mask);}});_f.play();}});_7.extend(_8.mobile.app.List,{deleteRow:function(){var row=this._selectedRow;_7.style(row,{visibility:"hidden",minHeight:"0px"});_7.removeClass(row,"hold");var _11=_7.contentBox(row).h;_7.animateProperty({node:row,duration:800,properties:{height:{start:_11,end:1},paddingTop:{end:0},paddingBottom:{end:0}},onEnd:this._postDeleteAnim}).play();}});if(_8.mobile.app.ImageView&&!_7.create("canvas").getContext){_7.extend(_8.mobile.app.ImageView,{buildRendering:function(){this.domNode.innerHTML="ImageView widget is not supported on this browser."+"Please try again with a modern browser, e.g. "+"Safari, Chrome or Firefox";this.canvas={};},postCreate:function(){}});}if(_8.mobile.app.ImageThumbView){_7.extend(_8.mobile.app.ImageThumbView,{place:function(_12,x,y){_7.style(_12,{top:y+"px",left:x+"px",visibility:"visible"});}});}});