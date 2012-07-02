// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

var base64 = (function (obj) {
  var a64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    a256 = {
      indexOf: function (c) {
        return c.charCodeAt(0);
      },
      charAt: String.fromCharCode
    };

  function code(s, discard, alpha, beta, w1, w2) {
    s = String(s);
    var b = 0, x = '', i, c, bs = 1, sb = 1, length = s.length, tmp;
    for (i = 0; i < length || (!discard && sb > 1); i += 1) {
      b *= w1;
      bs *= w1;
      if (i < length) {
        c = alpha.indexOf(s.charAt(i));
        if (c <= -1 || c >= w1) {
          throw new RangeError();
        }
        sb *= w1;
        b += c;
      }
      while (bs >= w2) {
        bs /= w2;
        if (sb > 1) {
          tmp = b;
          b %= bs;
          x += beta.charAt((tmp - b) / bs);
          sb /= w2;
        }
      }
    }
    return x;
  }

  obj.btoa = function (s) {
    s = code(s, false, a256, a64, 256, 64);
    return s + '===='.slice((s.length % 4) || 4);
  };

  obj.atob = function (s) {
    var i;
    s = String(s).split('=');
    for (i = s.length - 1; i >= 0; i -= 1) {
      if (s[i].length % 4 === 1) {
        throw new RangeError();
      }
      s[i] = code(s[i], true, a64, a256, 64, 256);
    }
    return s.join('');
  };

  return obj;
}({}));
function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
		{
			return unescape(y);
		}
	}
}



