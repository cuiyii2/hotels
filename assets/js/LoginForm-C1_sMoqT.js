import{k as N,d as H,B as M,a3 as z,h as S,P as k,R as L,V as O,r as x,o as q,c as $,b as y,w as h,a as D,e as A,u as C,J as G,ap as K,F as W,aq as J,ar as P,O as Z,aa as Q}from"./index-ChWs1m5F.js";import{u as X,a as Y}from"./tabs-BAoJWEke.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";var V={exports:{}},U={exports:{}};(function(){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",v={rotl:function(a,i){return a<<i|a>>>32-i},rotr:function(a,i){return a<<32-i|a>>>i},endian:function(a){if(a.constructor==Number)return v.rotl(a,8)&16711935|v.rotl(a,24)&4278255360;for(var i=0;i<a.length;i++)a[i]=v.endian(a[i]);return a},randomBytes:function(a){for(var i=[];a>0;a--)i.push(Math.floor(Math.random()*256));return i},bytesToWords:function(a){for(var i=[],l=0,s=0;l<a.length;l++,s+=8)i[s>>>5]|=a[l]<<24-s%32;return i},wordsToBytes:function(a){for(var i=[],l=0;l<a.length*32;l+=8)i.push(a[l>>>5]>>>24-l%32&255);return i},bytesToHex:function(a){for(var i=[],l=0;l<a.length;l++)i.push((a[l]>>>4).toString(16)),i.push((a[l]&15).toString(16));return i.join("")},hexToBytes:function(a){for(var i=[],l=0;l<a.length;l+=2)i.push(parseInt(a.substr(l,2),16));return i},bytesToBase64:function(a){for(var i=[],l=0;l<a.length;l+=3)for(var s=a[l]<<16|a[l+1]<<8|a[l+2],f=0;f<4;f++)l*8+f*6<=a.length*8?i.push(c.charAt(s>>>6*(3-f)&63)):i.push("=");return i.join("")},base64ToBytes:function(a){a=a.replace(/[^A-Z0-9+\/]/ig,"");for(var i=[],l=0,s=0;l<a.length;s=++l%4)s!=0&&i.push((c.indexOf(a.charAt(l-1))&Math.pow(2,-2*s+8)-1)<<s*2|c.indexOf(a.charAt(l))>>>6-s*2);return i}};U.exports=v})();var j=U.exports,w={utf8:{stringToBytes:function(c){return w.bin.stringToBytes(unescape(encodeURIComponent(c)))},bytesToString:function(c){return decodeURIComponent(escape(w.bin.bytesToString(c)))}},bin:{stringToBytes:function(c){for(var v=[],a=0;a<c.length;a++)v.push(c.charCodeAt(a)&255);return v},bytesToString:function(c){for(var v=[],a=0;a<c.length;a++)v.push(String.fromCharCode(c[a]));return v.join("")}}},R=w;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var rr=function(c){return c!=null&&(E(c)||er(c)||!!c._isBuffer)};function E(c){return!!c.constructor&&typeof c.constructor.isBuffer=="function"&&c.constructor.isBuffer(c)}function er(c){return typeof c.readFloatLE=="function"&&typeof c.slice=="function"&&E(c.slice(0,0))}(function(){var c=j,v=R.utf8,a=rr,i=R.bin,l=function(s,f){s.constructor==String?f&&f.encoding==="binary"?s=i.stringToBytes(s):s=v.stringToBytes(s):a(s)?s=Array.prototype.slice.call(s,0):!Array.isArray(s)&&s.constructor!==Uint8Array&&(s=s.toString());for(var o=c.bytesToWords(s),p=s.length*8,n=1732584193,t=-271733879,e=-1732584194,r=271733878,u=0;u<o.length;u++)o[u]=(o[u]<<8|o[u]>>>24)&16711935|(o[u]<<24|o[u]>>>8)&4278255360;o[p>>>5]|=128<<p%32,o[(p+64>>>9<<4)+14]=p;for(var d=l._ff,_=l._gg,g=l._hh,m=l._ii,u=0;u<o.length;u+=16){var T=n,B=t,F=e,I=r;n=d(n,t,e,r,o[u+0],7,-680876936),r=d(r,n,t,e,o[u+1],12,-389564586),e=d(e,r,n,t,o[u+2],17,606105819),t=d(t,e,r,n,o[u+3],22,-1044525330),n=d(n,t,e,r,o[u+4],7,-176418897),r=d(r,n,t,e,o[u+5],12,1200080426),e=d(e,r,n,t,o[u+6],17,-1473231341),t=d(t,e,r,n,o[u+7],22,-45705983),n=d(n,t,e,r,o[u+8],7,1770035416),r=d(r,n,t,e,o[u+9],12,-1958414417),e=d(e,r,n,t,o[u+10],17,-42063),t=d(t,e,r,n,o[u+11],22,-1990404162),n=d(n,t,e,r,o[u+12],7,1804603682),r=d(r,n,t,e,o[u+13],12,-40341101),e=d(e,r,n,t,o[u+14],17,-1502002290),t=d(t,e,r,n,o[u+15],22,1236535329),n=_(n,t,e,r,o[u+1],5,-165796510),r=_(r,n,t,e,o[u+6],9,-1069501632),e=_(e,r,n,t,o[u+11],14,643717713),t=_(t,e,r,n,o[u+0],20,-373897302),n=_(n,t,e,r,o[u+5],5,-701558691),r=_(r,n,t,e,o[u+10],9,38016083),e=_(e,r,n,t,o[u+15],14,-660478335),t=_(t,e,r,n,o[u+4],20,-405537848),n=_(n,t,e,r,o[u+9],5,568446438),r=_(r,n,t,e,o[u+14],9,-1019803690),e=_(e,r,n,t,o[u+3],14,-187363961),t=_(t,e,r,n,o[u+8],20,1163531501),n=_(n,t,e,r,o[u+13],5,-1444681467),r=_(r,n,t,e,o[u+2],9,-51403784),e=_(e,r,n,t,o[u+7],14,1735328473),t=_(t,e,r,n,o[u+12],20,-1926607734),n=g(n,t,e,r,o[u+5],4,-378558),r=g(r,n,t,e,o[u+8],11,-2022574463),e=g(e,r,n,t,o[u+11],16,1839030562),t=g(t,e,r,n,o[u+14],23,-35309556),n=g(n,t,e,r,o[u+1],4,-1530992060),r=g(r,n,t,e,o[u+4],11,1272893353),e=g(e,r,n,t,o[u+7],16,-155497632),t=g(t,e,r,n,o[u+10],23,-1094730640),n=g(n,t,e,r,o[u+13],4,681279174),r=g(r,n,t,e,o[u+0],11,-358537222),e=g(e,r,n,t,o[u+3],16,-722521979),t=g(t,e,r,n,o[u+6],23,76029189),n=g(n,t,e,r,o[u+9],4,-640364487),r=g(r,n,t,e,o[u+12],11,-421815835),e=g(e,r,n,t,o[u+15],16,530742520),t=g(t,e,r,n,o[u+2],23,-995338651),n=m(n,t,e,r,o[u+0],6,-198630844),r=m(r,n,t,e,o[u+7],10,1126891415),e=m(e,r,n,t,o[u+14],15,-1416354905),t=m(t,e,r,n,o[u+5],21,-57434055),n=m(n,t,e,r,o[u+12],6,1700485571),r=m(r,n,t,e,o[u+3],10,-1894986606),e=m(e,r,n,t,o[u+10],15,-1051523),t=m(t,e,r,n,o[u+1],21,-2054922799),n=m(n,t,e,r,o[u+8],6,1873313359),r=m(r,n,t,e,o[u+15],10,-30611744),e=m(e,r,n,t,o[u+6],15,-1560198380),t=m(t,e,r,n,o[u+13],21,1309151649),n=m(n,t,e,r,o[u+4],6,-145523070),r=m(r,n,t,e,o[u+11],10,-1120210379),e=m(e,r,n,t,o[u+2],15,718787259),t=m(t,e,r,n,o[u+9],21,-343485551),n=n+T>>>0,t=t+B>>>0,e=e+F>>>0,r=r+I>>>0}return c.endian([n,t,e,r])};l._ff=function(s,f,o,p,n,t,e){var r=s+(f&o|~f&p)+(n>>>0)+e;return(r<<t|r>>>32-t)+f},l._gg=function(s,f,o,p,n,t,e){var r=s+(f&p|o&~p)+(n>>>0)+e;return(r<<t|r>>>32-t)+f},l._hh=function(s,f,o,p,n,t,e){var r=s+(f^o^p)+(n>>>0)+e;return(r<<t|r>>>32-t)+f},l._ii=function(s,f,o,p,n,t,e){var r=s+(o^(f|~p))+(n>>>0)+e;return(r<<t|r>>>32-t)+f},l._blocksize=16,l._digestsize=16,V.exports=function(s,f){if(s==null)throw new Error("Illegal argument "+s);var o=c.wordsToBytes(l(s,f));return f&&f.asBytes?o:f&&f.asString?i.bytesToString(o):c.bytesToHex(o)}})();var tr=V.exports;const nr=N(tr),or={class:"login-btn"},ur=H({__name:"LoginForm",setup(c){const v=M(),a=z(),i=X(),l=Y(),s=S(),f=k({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),o=S(!1),p=k({username:"",password:""}),n=e=>{e&&e.validate(async r=>{if(r){o.value=!0;try{const{data:u}=await J({...p,password:nr(p.password)});a.setToken(u.access_token),await P(),i.setTabs([]),l.setKeepAliveName([]),v.push(Z),Q({title:"React 付费版本 🔥🔥🔥",dangerouslyUseHTMLString:!0,message:"预览地址：<a href='https://pro.spicyboy.cn'>https://pro.spicyboy.cn</a>",type:"success",duration:8e3})}finally{o.value=!1}}})},t=e=>{e&&e.resetFields()};return L(()=>{document.onkeydown=e=>{if(e.code==="Enter"||e.code==="enter"||e.code==="NumpadEnter"){if(o.value)return;n(s.value)}}}),O(()=>{document.onkeydown=null}),(e,r)=>{const u=x("user"),d=x("el-icon"),_=x("el-input"),g=x("el-form-item"),m=x("lock"),T=x("el-form"),B=x("el-button");return q(),$(W,null,[y(T,{ref_key:"loginFormRef",ref:s,model:p,rules:f,size:"large"},{default:h(()=>[y(g,{prop:"username"},{default:h(()=>[y(_,{modelValue:p.username,"onUpdate:modelValue":r[0]||(r[0]=F=>p.username=F),placeholder:"用户名：admin / user"},{prefix:h(()=>[y(d,{class:"el-input__icon"},{default:h(()=>[y(u)]),_:1})]),_:1},8,["modelValue"])]),_:1}),y(g,{prop:"password"},{default:h(()=>[y(_,{modelValue:p.password,"onUpdate:modelValue":r[1]||(r[1]=F=>p.password=F),type:"password",placeholder:"密码：123456","show-password":"",autocomplete:"new-password"},{prefix:h(()=>[y(d,{class:"el-input__icon"},{default:h(()=>[y(m)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),D("div",or,[y(B,{icon:C(G),round:"",size:"large",onClick:r[2]||(r[2]=F=>t(s.value))},{default:h(()=>r[4]||(r[4]=[A(" 重置 ")])),_:1},8,["icon"]),y(B,{icon:C(K),round:"",size:"large",type:"primary",loading:o.value,onClick:r[3]||(r[3]=F=>n(s.value))},{default:h(()=>r[5]||(r[5]=[A(" 登录 ")])),_:1},8,["icon","loading"])])],64)}}}),ir=b(ur,[["__scopeId","data-v-2f75db1f"]]);export{ir as default};
