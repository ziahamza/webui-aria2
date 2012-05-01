//>>built
define("dojox/lang/functional/sequence",["dojo/_base/lang","./lambda"],function(_1,df){
_1.mixin(df,{repeat:function(n,f,z,o){
o=o||dojo.global;
f=df.lambda(f);
var t=new Array(n),i=1;
t[0]=z;
for(;i<n;t[i]=z=f.call(o,z),++i){
}
return t;
},until:function(pr,f,z,o){
o=o||dojo.global;
f=df.lambda(f);
pr=df.lambda(pr);
var t=[];
for(;!pr.call(o,z);t.push(z),z=f.call(o,z)){
}
return t;
}});
return df;
});
