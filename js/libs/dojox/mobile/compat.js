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
require(["dojo/i18n"],function(_1){_1._preloadLocalizations("dojox/mobile/nls/compat",[]);});define("dojox/mobile/compat",["dojo/_base/lang","dojo/_base/sniff"],function(_2,_3){var dm=_2.getObject("dojox.mobile",true);if(!_3("webkit")){var s="dojox/mobile/_compat";require([s]);}return dm;});