var Qo=Object.defineProperty;var el=(i,e,t)=>e in i?Qo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ue=(i,e,t)=>el(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hs="160",Nn={ROTATE:0,DOLLY:1,PAN:2},Fn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tl=0,bs=1,nl=2,ro=1,il=2,Jt=3,gn=0,bt=1,Qt=2,pn=0,Rn=1,Ts=2,As=3,ws=4,rl=5,Tn=100,sl=101,al=102,Rs=103,Cs=104,ol=200,ll=201,cl=202,ul=203,Qr=204,es=205,hl=206,dl=207,fl=208,pl=209,ml=210,gl=211,_l=212,vl=213,xl=214,Ml=0,Sl=1,El=2,ir=3,yl=4,bl=5,Tl=6,Al=7,so=0,wl=1,Rl=2,mn=0,Cl=1,Pl=2,Ll=3,Dl=4,Ul=5,Il=6,ao=300,ri=301,si=302,ts=303,ns=304,dr=306,is=1e3,Gt=1001,rs=1002,Et=1003,Ps=1004,Sr=1005,yt=1006,Nl=1007,vi=1008,nn=1009,Fl=1010,Ol=1011,ds=1012,oo=1013,dn=1014,fn=1015,xi=1016,lo=1017,co=1018,Cn=1020,Bl=1021,It=1023,zl=1024,Gl=1025,Pn=1026,ai=1027,Hl=1028,uo=1029,kl=1030,ho=1031,fo=1033,Er=33776,yr=33777,br=33778,Tr=33779,Ls=35840,Ds=35841,Us=35842,Is=35843,po=36196,Ns=37492,Fs=37496,Os=37808,Bs=37809,zs=37810,Gs=37811,Hs=37812,ks=37813,Vs=37814,Ws=37815,Xs=37816,qs=37817,Ys=37818,js=37819,Ks=37820,Zs=37821,Ar=36492,$s=36494,Js=36495,Vl=36283,Qs=36284,ea=36285,ta=36286,mo=3e3,Ln=3001,Wl=3200,Xl=3201,ql=0,Yl=1,Pt="",dt="srgb",rn="srgb-linear",fs="display-p3",fr="display-p3-linear",rr="linear",$e="srgb",sr="rec709",ar="p3",On=7680,na=519,jl=512,Kl=513,Zl=514,go=515,$l=516,Jl=517,Ql=518,ec=519,ia=35044,or="300 es",ss=1035,en=2e3,lr=2001;class In{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ra=1234567;const mi=Math.PI/180,Mi=180/Math.PI;function li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function ps(i,e){return(i%e+e)%e}function tc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function nc(i,e,t){return i!==e?(t-i)/(e-i):0}function gi(i,e,t){return(1-t)*i+t*e}function ic(i,e,t,n){return gi(i,e,1-Math.exp(-t*n))}function rc(i,e=1){return e-Math.abs(ps(i,e*2)-e)}function sc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ac(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function oc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lc(i,e){return i+Math.random()*(e-i)}function cc(i){return i*(.5-Math.random())}function uc(i){i!==void 0&&(ra=i);let e=ra+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hc(i){return i*mi}function dc(i){return i*Mi}function as(i){return(i&i-1)===0&&i!==0}function fc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pc(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const mc={DEG2RAD:mi,RAD2DEG:Mi,generateUUID:li,clamp:_t,euclideanModulo:ps,mapLinear:tc,inverseLerp:nc,lerp:gi,damp:ic,pingpong:rc,smoothstep:sc,smootherstep:ac,randInt:oc,randFloat:lc,randFloatSpread:cc,seededRandom:uc,degToRad:hc,radToDeg:dc,isPowerOfTwo:as,ceilPowerOfTwo:fc,floorPowerOfTwo:cr,setQuaternionFromProperEuler:pc,normalize:Mt,denormalize:Qn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=r[0],p=r[3],h=r[6],y=r[1],x=r[4],R=r[7],L=r[2],C=r[5],A=r[8];return s[0]=o*_+a*y+l*L,s[3]=o*p+a*x+l*C,s[6]=o*h+a*R+l*A,s[1]=c*_+u*y+d*L,s[4]=c*p+u*x+d*C,s[7]=c*h+u*R+d*A,s[2]=f*_+m*y+g*L,s[5]=f*p+m*x+g*C,s[8]=f*h+m*R+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,m=c*s-o*l,g=t*d+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wr.makeScale(e,t)),this}rotate(e){return this.premultiply(wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new He;function _o(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gc(){const i=ur("canvas");return i.style.display="block",i}const sa={};function _i(i){i in sa||(sa[i]=!0,console.warn(i))}const aa=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oa=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wi={[rn]:{transfer:rr,primaries:sr,toReference:i=>i,fromReference:i=>i},[dt]:{transfer:$e,primaries:sr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[fr]:{transfer:rr,primaries:ar,toReference:i=>i.applyMatrix3(oa),fromReference:i=>i.applyMatrix3(aa)},[fs]:{transfer:$e,primaries:ar,toReference:i=>i.convertSRGBToLinear().applyMatrix3(oa),fromReference:i=>i.applyMatrix3(aa).convertLinearToSRGB()}},_c=new Set([rn,fr]),je={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_c.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=wi[e].toReference,r=wi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return wi[i].primaries},getTransfer:function(i){return i===Pt?rr:wi[i].transfer}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bn;class vo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bn===void 0&&(Bn=ur("canvas")),Bn.width=e.width,Bn.height=e.height;const n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ii(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vc=0;class xo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cr(r[o].image)):s.push(Cr(r[o]))}else s=Cr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Cr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xc=0;class Lt extends In{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Gt,r=Gt,s=yt,o=vi,a=It,l=nn,c=Lt.DEFAULT_ANISOTROPY,u=Pt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=li(),this.name="",this.source=new xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ln?dt:Pt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ao)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?Ln:mo}set encoding(e){_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ln?dt:Pt}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=ao;Lt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,R=(m+1)/2,L=(h+1)/2,C=(u+f)/4,A=(d+_)/4,W=(g+p)/4;return x>R&&x>L?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=A/n):R>L?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=C/r,s=W/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=W/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mc extends In{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(_i("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ln?dt:Pt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Lt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends Mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mo extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sc extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||u!==g){let p=1-a;const h=l*f+c*m+u*g+d*_,y=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const L=Math.sqrt(x),C=Math.atan2(L,h*y);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const R=a*y;if(l=l*p+f*R,c=c*p+m*R,u=u*p+g*R,d=d*p+_*R,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-a*m,e[t+2]=c*g+u*m+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),f=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(la.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(la.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new U,la=new Un;class Si{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nt):Nt.fromBufferAttribute(s,o),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ri.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ri.copy(n.boundingBox)),Ri.applyMatrix4(e.matrixWorld),this.union(Ri)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hi),Ci.subVectors(this.max,hi),zn.subVectors(e.a,hi),Gn.subVectors(e.b,hi),Hn.subVectors(e.c,hi),an.subVectors(Gn,zn),on.subVectors(Hn,Gn),Mn.subVectors(zn,Hn);let t=[0,-an.z,an.y,0,-on.z,on.y,0,-Mn.z,Mn.y,an.z,0,-an.x,on.z,0,-on.x,Mn.z,0,-Mn.x,-an.y,an.x,0,-on.y,on.x,0,-Mn.y,Mn.x,0];return!Lr(t,zn,Gn,Hn,Ci)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,zn,Gn,Hn,Ci))?!1:(Pi.crossVectors(an,on),t=[Pi.x,Pi.y,Pi.z],Lr(t,zn,Gn,Hn,Ci))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new U,new U,new U,new U,new U,new U,new U,new U],Nt=new U,Ri=new Si,zn=new U,Gn=new U,Hn=new U,an=new U,on=new U,Mn=new U,hi=new U,Ci=new U,Pi=new U,Sn=new U;function Lr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Sn.fromArray(i,s);const a=r.x*Math.abs(Sn.x)+r.y*Math.abs(Sn.y)+r.z*Math.abs(Sn.z),l=e.dot(Sn),c=t.dot(Sn),u=n.dot(Sn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ec=new Si,di=new U,Dr=new U;class Ei{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ec.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;di.subVectors(e,this.center);const t=di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(di,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(di.copy(e.center).add(Dr)),this.expandByPoint(di.copy(e.center).sub(Dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new U,Ur=new U,Li=new U,ln=new U,Ir=new U,Di=new U,Nr=new U;class ms{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.origin).addScaledVector(this.direction,t),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ur.copy(e).add(t).multiplyScalar(.5),Li.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Ur);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Li),a=ln.dot(this.direction),l=-ln.dot(Li),c=ln.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ur).addScaledVector(Li,f),m}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),r=jt.dot(jt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,r,s){Ir.subVectors(t,e),Di.subVectors(n,e),Nr.crossVectors(Ir,Di);let o=this.direction.dot(Nr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ln.subVectors(this.origin,e);const l=a*this.direction.dot(Di.crossVectors(ln,Di));if(l<0)return null;const c=a*this.direction.dot(Ir.cross(ln));if(c<0||l+c>o)return null;const u=-a*ln.dot(Nr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,r,s,o,a,l,c,u,d,f,m,g,_,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,f,m,g,_,p)}set(e,t,n,r,s,o,a,l,c,u,d,f,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/kn.setFromMatrixColumn(e,0).length(),s=1/kn.setFromMatrixColumn(e,1).length(),o=1/kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yc,e,bc)}lookAt(e,t,n){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),cn.crossVectors(n,Rt),cn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),cn.crossVectors(n,Rt)),cn.normalize(),Ui.crossVectors(Rt,cn),r[0]=cn.x,r[4]=Ui.x,r[8]=Rt.x,r[1]=cn.y,r[5]=Ui.y,r[9]=Rt.y,r[2]=cn.z,r[6]=Ui.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],y=n[3],x=n[7],R=n[11],L=n[15],C=r[0],A=r[4],W=r[8],S=r[12],b=r[1],G=r[5],q=r[9],le=r[13],P=r[2],I=r[6],k=r[10],Y=r[14],X=r[3],V=r[7],J=r[11],te=r[15];return s[0]=o*C+a*b+l*P+c*X,s[4]=o*A+a*G+l*I+c*V,s[8]=o*W+a*q+l*k+c*J,s[12]=o*S+a*le+l*Y+c*te,s[1]=u*C+d*b+f*P+m*X,s[5]=u*A+d*G+f*I+m*V,s[9]=u*W+d*q+f*k+m*J,s[13]=u*S+d*le+f*Y+m*te,s[2]=g*C+_*b+p*P+h*X,s[6]=g*A+_*G+p*I+h*V,s[10]=g*W+_*q+p*k+h*J,s[14]=g*S+_*le+p*Y+h*te,s[3]=y*C+x*b+R*P+L*X,s[7]=y*A+x*G+R*I+L*V,s[11]=y*W+x*q+R*k+L*J,s[15]=y*S+x*le+R*Y+L*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*m-n*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*d-t*a*m-s*o*d+n*o*m+s*a*u-n*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],y=d*p*c-_*f*c+_*l*m-a*p*m-d*l*h+a*f*h,x=g*f*c-u*p*c-g*l*m+o*p*m+u*l*h-o*f*h,R=u*_*c-g*d*c+g*a*m-o*_*m-u*a*h+o*d*h,L=g*d*l-u*_*l-g*a*f+o*_*f+u*a*p-o*d*p,C=t*y+n*x+r*R+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=y*A,e[1]=(_*f*s-d*p*s-_*r*m+n*p*m+d*r*h-n*f*h)*A,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*h+n*l*h)*A,e[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*m-n*l*m)*A,e[4]=x*A,e[5]=(u*p*s-g*f*s+g*r*m-t*p*m-u*r*h+t*f*h)*A,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*h-t*l*h)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*A,e[8]=R*A,e[9]=(g*d*s-u*_*s-g*n*m+t*_*m+u*n*h-t*d*h)*A,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*h+t*a*h)*A,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*m-t*a*m)*A,e[12]=L*A,e[13]=(u*_*r-g*d*r+g*n*f-t*_*f-u*n*p+t*d*p)*A,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*p-t*a*p)*A,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,m=s*u,g=s*d,_=o*u,p=o*d,h=a*d,y=l*c,x=l*u,R=l*d,L=n.x,C=n.y,A=n.z;return r[0]=(1-(_+h))*L,r[1]=(m+R)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-R)*C,r[5]=(1-(f+h))*C,r[6]=(p+y)*C,r[7]=0,r[8]=(g+x)*A,r[9]=(p-y)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=kn.set(r[0],r[1],r[2]).length();const o=kn.set(r[4],r[5],r[6]).length(),a=kn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const c=1/s,u=1/o,d=1/a;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=u,Ft.elements[5]*=u,Ft.elements[6]*=u,Ft.elements[8]*=d,Ft.elements[9]*=d,Ft.elements[10]*=d,t.setFromRotationMatrix(Ft),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=en){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(a===en)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===lr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=en){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),f=(t+e)*c,m=(n+r)*u;let g,_;if(a===en)g=(o+s)*d,_=-2*d;else if(a===lr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const kn=new U,Ft=new ht,yc=new U(0,0,0),bc=new U(1,1,1),cn=new U,Ui=new U,Rt=new U,ca=new ht,ua=new Un;class pr{constructor(e=0,t=0,n=0,r=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ua.setFromEuler(this),this.setFromQuaternion(ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class So{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tc=0;const ha=new U,Vn=new Un,Kt=new ht,Ii=new U,fi=new U,Ac=new U,wc=new Un,da=new U(1,0,0),fa=new U(0,1,0),pa=new U(0,0,1),Rc={type:"added"},Cc={type:"removed"};class Tt extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new U,t=new pr,n=new Un,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new He}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(da,e)}rotateY(e){return this.rotateOnAxis(fa,e)}rotateZ(e){return this.rotateOnAxis(pa,e)}translateOnAxis(e,t){return ha.copy(e).applyQuaternion(this.quaternion),this.position.add(ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(da,e)}translateY(e){return this.translateOnAxis(fa,e)}translateZ(e){return this.translateOnAxis(pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ii.copy(e):Ii.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(fi,Ii,this.up):Kt.lookAt(Ii,fi,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),Vn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,e,Ac),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,wc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new U(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new U,Zt=new U,Fr=new U,$t=new U,Wn=new U,Xn=new U,ma=new U,Or=new U,Br=new U,zr=new U;let Ni=!1;class Bt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ot.subVectors(e,t),r.cross(Ot);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ot.subVectors(r,t),Zt.subVectors(n,t),Fr.subVectors(e,t);const o=Ot.dot(Ot),a=Ot.dot(Zt),l=Ot.dot(Fr),c=Zt.dot(Zt),u=Zt.dot(Fr),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$t)===null?!1:$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getUV(e,t,n,r,s,o,a,l){return Ni===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ni=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,$t)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$t.x),l.addScaledVector(o,$t.y),l.addScaledVector(a,$t.z),l)}static isFrontFacing(e,t,n,r){return Ot.subVectors(n,t),Zt.subVectors(e,t),Ot.cross(Zt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),Ot.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ni===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ni=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Wn.subVectors(r,n),Xn.subVectors(s,n),Or.subVectors(e,n);const l=Wn.dot(Or),c=Xn.dot(Or);if(l<=0&&c<=0)return t.copy(n);Br.subVectors(e,r);const u=Wn.dot(Br),d=Xn.dot(Br);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Wn,o);zr.subVectors(e,s);const m=Wn.dot(zr),g=Xn.dot(zr);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Xn,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return ma.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(ma,a);const h=1/(p+_+f);return o=_*h,a=f*h,t.copy(n).addScaledVector(Wn,o).addScaledVector(Xn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Fi={h:0,s:0,l:0};function Gr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=ps(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Gr(o,s,e+1/3),this.g=Gr(o,s,e),this.b=Gr(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const n=Eo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return je.fromWorkingColorSpace(mt.copy(this),e),Math.round(_t(mt.r*255,0,255))*65536+Math.round(_t(mt.g*255,0,255))*256+Math.round(_t(mt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,r=mt.g,s=mt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=dt){je.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,r=mt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Fi);const n=gi(un.h,Fi.h,t),r=gi(un.s,Fi.s,t),s=gi(un.l,Fi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Ye;Ye.NAMES=Eo;let Pc=0;class yi extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Rn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=es,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rn&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==es&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(n.stencilFail=this.stencilFail),this.stencilZFail!==On&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yo extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new U,Oi=new Ae;class et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oi.fromBufferAttribute(this,t),Oi.applyMatrix3(e),this.setXY(t,Oi.x,Oi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ia&&(e.usage=this.usage),e}}class bo extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class To extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dn extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lc=0;const Ut=new ht,Hr=new Tt,qn=new U,Ct=new Si,pi=new Si,ut=new U;class Ht extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_o(e)?To:bo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Hr.lookAt(e),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pi.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Ct.min,pi.min),Ct.expandByPoint(ut),ut.addVectors(Ct.max,pi.max),Ct.expandByPoint(ut)):(Ct.expandByPoint(pi.min),Ct.expandByPoint(pi.max))}Ct.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ut.fromBufferAttribute(a,c),l&&(qn.fromBufferAttribute(e,c),ut.add(qn)),r=Math.max(r,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new et(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new U,u[b]=new U;const d=new U,f=new U,m=new U,g=new Ae,_=new Ae,p=new Ae,h=new U,y=new U;function x(b,G,q){d.fromArray(r,b*3),f.fromArray(r,G*3),m.fromArray(r,q*3),g.fromArray(o,b*2),_.fromArray(o,G*2),p.fromArray(o,q*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const le=1/(_.x*p.y-p.x*_.y);isFinite(le)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(le),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(le),c[b].add(h),c[G].add(h),c[q].add(h),u[b].add(y),u[G].add(y),u[q].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let b=0,G=R.length;b<G;++b){const q=R[b],le=q.start,P=q.count;for(let I=le,k=le+P;I<k;I+=3)x(n[I+0],n[I+1],n[I+2])}const L=new U,C=new U,A=new U,W=new U;function S(b){A.fromArray(s,b*3),W.copy(A);const G=c[b];L.copy(G),L.sub(A.multiplyScalar(A.dot(G))).normalize(),C.crossVectors(W,G);const le=C.dot(u[b])<0?-1:1;l[b*4]=L.x,l[b*4+1]=L.y,l[b*4+2]=L.z,l[b*4+3]=le}for(let b=0,G=R.length;b<G;++b){const q=R[b],le=q.start,P=q.count;for(let I=le,k=le+P;I<k;I+=3)S(n[I+0]),S(n[I+1]),S(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new et(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ga=new ht,En=new ms,Bi=new Ei,_a=new U,Yn=new U,jn=new U,Kn=new U,kr=new U,zi=new U,Gi=new Ae,Hi=new Ae,ki=new Ae,va=new U,xa=new U,Ma=new U,Vi=new U,Wi=new U;class tn extends Tt{constructor(e=new Ht,t=new yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(kr.fromBufferAttribute(d,e),o?zi.addScaledVector(kr,u):zi.addScaledVector(kr.sub(t),u))}t.add(zi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bi.copy(n.boundingSphere),Bi.applyMatrix4(s),En.copy(e.ray).recast(e.near),!(Bi.containsPoint(En.origin)===!1&&(En.intersectSphere(Bi,_a)===null||En.origin.distanceToSquared(_a)>(e.far-e.near)**2))&&(ga.copy(s).invert(),En.copy(e.ray).applyMatrix4(ga),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,En)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let R=y,L=x;R<L;R+=3){const C=a.getX(R),A=a.getX(R+1),W=a.getX(R+2);r=Xi(this,h,e,n,c,u,d,C,A,W),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const y=a.getX(p),x=a.getX(p+1),R=a.getX(p+2);r=Xi(this,o,e,n,c,u,d,y,x,R),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let R=y,L=x;R<L;R+=3){const C=R,A=R+1,W=R+2;r=Xi(this,h,e,n,c,u,d,C,A,W),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const y=p,x=p+1,R=p+2;r=Xi(this,o,e,n,c,u,d,y,x,R),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Dc(i,e,t,n,r,s,o,a){let l;if(e.side===bt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===gn,a),l===null)return null;Wi.copy(a),Wi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wi);return c<t.near||c>t.far?null:{distance:c,point:Wi.clone(),object:i}}function Xi(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Yn),i.getVertexPosition(l,jn),i.getVertexPosition(c,Kn);const u=Dc(i,e,t,n,Yn,jn,Kn,Vi);if(u){r&&(Gi.fromBufferAttribute(r,a),Hi.fromBufferAttribute(r,l),ki.fromBufferAttribute(r,c),u.uv=Bt.getInterpolation(Vi,Yn,jn,Kn,Gi,Hi,ki,new Ae)),s&&(Gi.fromBufferAttribute(s,a),Hi.fromBufferAttribute(s,l),ki.fromBufferAttribute(s,c),u.uv1=Bt.getInterpolation(Vi,Yn,jn,Kn,Gi,Hi,ki,new Ae),u.uv2=u.uv1),o&&(va.fromBufferAttribute(o,a),xa.fromBufferAttribute(o,l),Ma.fromBufferAttribute(o,c),u.normal=Bt.getInterpolation(Vi,Yn,jn,Kn,va,xa,Ma,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};Bt.getNormal(Yn,jn,Kn,d.normal),u.face=d}return u}class bi extends Ht{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(u,3)),this.setAttribute("uv",new Dn(d,2));function g(_,p,h,y,x,R,L,C,A,W,S){const b=R/A,G=L/W,q=R/2,le=L/2,P=C/2,I=A+1,k=W+1;let Y=0,X=0;const V=new U;for(let J=0;J<k;J++){const te=J*G-le;for(let he=0;he<I;he++){const H=he*b-q;V[_]=H*y,V[p]=te*x,V[h]=P,c.push(V.x,V.y,V.z),V[_]=0,V[p]=0,V[h]=C>0?1:-1,u.push(V.x,V.y,V.z),d.push(he/A),d.push(1-J/W),Y+=1}}for(let J=0;J<W;J++)for(let te=0;te<A;te++){const he=f+te+I*J,H=f+te+I*(J+1),K=f+(te+1)+I*(J+1),ue=f+(te+1)+I*J;l.push(he,H,ue),l.push(H,K,ue),X+=6}a.addGroup(m,X,S),m+=X,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=oi(i[t]);for(const r in n)e[r]=n[r]}return e}function Uc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ao(i){return i.getRenderTarget()===null?i.outputColorSpace:je.workingColorSpace}const Ic={clone:oi,merge:St};var Nc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nc,this.fragmentShader=Fc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.uniformsGroups=Uc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gs extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=en}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends gs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mi*2*Math.atan(Math.tan(mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zn=-90,$n=1;class Oc extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zt(Zn,$n,e,t);r.layers=this.layers,this.add(r);const s=new zt(Zn,$n,e,t);s.layers=this.layers,this.add(s);const o=new zt(Zn,$n,e,t);o.layers=this.layers,this.add(o);const a=new zt(Zn,$n,e,t);a.layers=this.layers,this.add(a);const l=new zt(Zn,$n,e,t);l.layers=this.layers,this.add(l);const c=new zt(Zn,$n,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wo extends Lt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ri,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bc extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(_i("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ln?dt:Pt),this.texture=new wo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bi(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:pn});s.uniforms.tEquirect.value=t;const o=new tn(r,s),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=yt),new Oc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Vr=new U,zc=new U,Gc=new He;class hn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Vr.subVectors(n,t).cross(zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gc.getNormalMatrix(e),r=this.coplanarPoint(Vr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new Ei,qi=new U;class Ro{constructor(e=new hn,t=new hn,n=new hn,r=new hn,s=new hn,o=new hn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],h=r[12],y=r[13],x=r[14],R=r[15];if(n[0].setComponents(l-s,f-c,p-m,R-h).normalize(),n[1].setComponents(l+s,f+c,p+m,R+h).normalize(),n[2].setComponents(l+o,f+u,p+g,R+y).normalize(),n[3].setComponents(l-o,f-u,p-g,R-y).normalize(),n[4].setComponents(l-a,f-d,p-_,R-x).normalize(),t===en)n[5].setComponents(l+a,f+d,p+_,R+x).normalize();else if(t===lr)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(e){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(qi.x=r.normal.x>0?e.max.x:e.min.x,qi.y=r.normal.y>0?e.max.y:e.min.y,qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Co(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Hc(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const d=c.array,f=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,d){const f=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const h=g[_];t?i.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):i.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class mr extends Ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const y=h*f-o;for(let x=0;x<c;x++){const R=x*d-s;g.push(R,-y,0),_.push(0,0,1),p.push(x/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const x=y+c*h,R=y+c*(h+1),L=y+1+c*(h+1),C=y+1+c*h;m.push(x,R,C),m.push(R,L,C)}this.setIndex(m),this.setAttribute("position",new Dn(g,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}var kc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$c=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,du=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",xu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ou=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ku=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ju=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,th=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ih=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ah=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ch=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_h=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Th=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ah=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ph=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ih=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,td=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,id=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ad=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ld=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ud=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_d=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:kc,alphahash_pars_fragment:Vc,alphamap_fragment:Wc,alphamap_pars_fragment:Xc,alphatest_fragment:qc,alphatest_pars_fragment:Yc,aomap_fragment:jc,aomap_pars_fragment:Kc,batching_pars_vertex:Zc,batching_vertex:$c,begin_vertex:Jc,beginnormal_vertex:Qc,bsdfs:eu,iridescence_fragment:tu,bumpmap_pars_fragment:nu,clipping_planes_fragment:iu,clipping_planes_pars_fragment:ru,clipping_planes_pars_vertex:su,clipping_planes_vertex:au,color_fragment:ou,color_pars_fragment:lu,color_pars_vertex:cu,color_vertex:uu,common:hu,cube_uv_reflection_fragment:du,defaultnormal_vertex:fu,displacementmap_pars_vertex:pu,displacementmap_vertex:mu,emissivemap_fragment:gu,emissivemap_pars_fragment:_u,colorspace_fragment:vu,colorspace_pars_fragment:xu,envmap_fragment:Mu,envmap_common_pars_fragment:Su,envmap_pars_fragment:Eu,envmap_pars_vertex:yu,envmap_physical_pars_fragment:Nu,envmap_vertex:bu,fog_vertex:Tu,fog_pars_vertex:Au,fog_fragment:wu,fog_pars_fragment:Ru,gradientmap_pars_fragment:Cu,lightmap_fragment:Pu,lightmap_pars_fragment:Lu,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Uu,lights_pars_begin:Iu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Ou,lights_phong_fragment:Bu,lights_phong_pars_fragment:zu,lights_physical_fragment:Gu,lights_physical_pars_fragment:Hu,lights_fragment_begin:ku,lights_fragment_maps:Vu,lights_fragment_end:Wu,logdepthbuf_fragment:Xu,logdepthbuf_pars_fragment:qu,logdepthbuf_pars_vertex:Yu,logdepthbuf_vertex:ju,map_fragment:Ku,map_pars_fragment:Zu,map_particle_fragment:$u,map_particle_pars_fragment:Ju,metalnessmap_fragment:Qu,metalnessmap_pars_fragment:eh,morphcolor_vertex:th,morphnormal_vertex:nh,morphtarget_pars_vertex:ih,morphtarget_vertex:rh,normal_fragment_begin:sh,normal_fragment_maps:ah,normal_pars_fragment:oh,normal_pars_vertex:lh,normal_vertex:ch,normalmap_pars_fragment:uh,clearcoat_normal_fragment_begin:hh,clearcoat_normal_fragment_maps:dh,clearcoat_pars_fragment:fh,iridescence_pars_fragment:ph,opaque_fragment:mh,packing:gh,premultiplied_alpha_fragment:_h,project_vertex:vh,dithering_fragment:xh,dithering_pars_fragment:Mh,roughnessmap_fragment:Sh,roughnessmap_pars_fragment:Eh,shadowmap_pars_fragment:yh,shadowmap_pars_vertex:bh,shadowmap_vertex:Th,shadowmask_pars_fragment:Ah,skinbase_vertex:wh,skinning_pars_vertex:Rh,skinning_vertex:Ch,skinnormal_vertex:Ph,specularmap_fragment:Lh,specularmap_pars_fragment:Dh,tonemapping_fragment:Uh,tonemapping_pars_fragment:Ih,transmission_fragment:Nh,transmission_pars_fragment:Fh,uv_pars_fragment:Oh,uv_pars_vertex:Bh,uv_vertex:zh,worldpos_vertex:Gh,background_vert:Hh,background_frag:kh,backgroundCube_vert:Vh,backgroundCube_frag:Wh,cube_vert:Xh,cube_frag:qh,depth_vert:Yh,depth_frag:jh,distanceRGBA_vert:Kh,distanceRGBA_frag:Zh,equirect_vert:$h,equirect_frag:Jh,linedashed_vert:Qh,linedashed_frag:ed,meshbasic_vert:td,meshbasic_frag:nd,meshlambert_vert:id,meshlambert_frag:rd,meshmatcap_vert:sd,meshmatcap_frag:ad,meshnormal_vert:od,meshnormal_frag:ld,meshphong_vert:cd,meshphong_frag:ud,meshphysical_vert:hd,meshphysical_frag:dd,meshtoon_vert:fd,meshtoon_frag:pd,points_vert:md,points_frag:gd,shadow_vert:_d,shadow_frag:vd,sprite_vert:xd,sprite_frag:Md},oe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Vt={basic:{uniforms:St([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:St([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:St([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:St([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:St([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:St([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:St([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:St([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:St([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:St([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:St([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:St([oe.common,oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:St([oe.lights,oe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Vt.physical={uniforms:St([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Yi={r:0,b:0,g:0};function Sd(i,e,t,n,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function g(p,h){let y=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===dr)?(u===void 0&&(u=new tn(new bi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:oi(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=je.getTransfer(x.colorSpace)!==$e,(d!==x||f!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new tn(new mr(2,2),new sn({name:"BackgroundMaterial",uniforms:oi(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==$e,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(Yi,Ao(i)),n.buffers.color.setClear(Yi.r,Yi.g,Yi.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Ed(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(P,I,k,Y,X){let V=!1;if(o){const J=_(Y,k,I);c!==J&&(c=J,m(c.object)),V=h(P,Y,k,X),V&&y(P,Y,k,X)}else{const J=I.wireframe===!0;(c.geometry!==Y.id||c.program!==k.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=k.id,c.wireframe=J,V=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,W(P,I,k,Y),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,I,k){const Y=k.wireframe===!0;let X=a[P.id];X===void 0&&(X={},a[P.id]=X);let V=X[I.id];V===void 0&&(V={},X[I.id]=V);let J=V[Y];return J===void 0&&(J=p(f()),V[Y]=J),J}function p(P){const I=[],k=[],Y=[];for(let X=0;X<r;X++)I[X]=0,k[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:Y,object:P,attributes:{},index:null}}function h(P,I,k,Y){const X=c.attributes,V=I.attributes;let J=0;const te=k.getAttributes();for(const he in te)if(te[he].location>=0){const K=X[he];let ue=V[he];if(ue===void 0&&(he==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),he==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),K===void 0||K.attribute!==ue||ue&&K.data!==ue.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function y(P,I,k,Y){const X={},V=I.attributes;let J=0;const te=k.getAttributes();for(const he in te)if(te[he].location>=0){let K=V[he];K===void 0&&(he==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),he==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const ue={};ue.attribute=K,K&&K.data&&(ue.data=K.data),X[he]=ue,J++}c.attributes=X,c.attributesNum=J,c.index=Y}function x(){const P=c.newAttributes;for(let I=0,k=P.length;I<k;I++)P[I]=0}function R(P){L(P,0)}function L(P,I){const k=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;k[P]=1,Y[P]===0&&(i.enableVertexAttribArray(P),Y[P]=1),X[P]!==I&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),X[P]=I)}function C(){const P=c.newAttributes,I=c.enabledAttributes;for(let k=0,Y=I.length;k<Y;k++)I[k]!==P[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function A(P,I,k,Y,X,V,J){J===!0?i.vertexAttribIPointer(P,I,k,X,V):i.vertexAttribPointer(P,I,k,Y,X,V)}function W(P,I,k,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=Y.attributes,V=k.getAttributes(),J=I.defaultAttributeValues;for(const te in V){const he=V[te];if(he.location>=0){let H=X[te];if(H===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){const K=H.normalized,ue=H.itemSize,ve=t.get(H);if(ve===void 0)continue;const ge=ve.buffer,Ce=ve.type,Pe=ve.bytesPerElement,ye=n.isWebGL2===!0&&(Ce===i.INT||Ce===i.UNSIGNED_INT||H.gpuType===oo);if(H.isInterleavedBufferAttribute){const ke=H.data,N=ke.stride,ot=H.offset;if(ke.isInstancedInterleavedBuffer){for(let Se=0;Se<he.locationSize;Se++)L(he.location+Se,ke.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Se=0;Se<he.locationSize;Se++)R(he.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Se=0;Se<he.locationSize;Se++)A(he.location+Se,ue/he.locationSize,Ce,K,N*Pe,(ot+ue/he.locationSize*Se)*Pe,ye)}else{if(H.isInstancedBufferAttribute){for(let ke=0;ke<he.locationSize;ke++)L(he.location+ke,H.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ke=0;ke<he.locationSize;ke++)R(he.location+ke);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ke=0;ke<he.locationSize;ke++)A(he.location+ke,ue/he.locationSize,Ce,K,ue*Pe,ue/he.locationSize*ke*Pe,ye)}}else if(J!==void 0){const K=J[te];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(he.location,K);break;case 3:i.vertexAttrib3fv(he.location,K);break;case 4:i.vertexAttrib4fv(he.location,K);break;default:i.vertexAttrib1fv(he.location,K)}}}}C()}function S(){q();for(const P in a){const I=a[P];for(const k in I){const Y=I[k];for(const X in Y)g(Y[X].object),delete Y[X];delete I[k]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const I=a[P.id];for(const k in I){const Y=I[k];for(const X in Y)g(Y[X].object),delete Y[X];delete I[k]}delete a[P.id]}function G(P){for(const I in a){const k=a[I];if(k[P.id]===void 0)continue;const Y=k[P.id];for(const X in Y)g(Y[X].object),delete Y[X];delete k[P.id]}}function q(){le(),u=!0,c!==l&&(c=l,m(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:le,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:R,disableUnusedAttributes:C}}function yd(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,d){i.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,f){if(f===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,f),t.update(d,s,f)}function c(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function bd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,R=o||e.has("OES_texture_float"),L=x&&R,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:R,floatVertexTextures:L,maxSamples:C}}function Td(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new hn,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let R=h.clippingState||null;l.value=R,R=u(g,f,x,m);for(let L=0;L!==x;++L)R[L]=t[L];h.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,R=m;x!==_;++x,R+=4)o.copy(d[x]).applyMatrix4(y,a),o.normal.toArray(p,R),p[R+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Ad(i){let e=new WeakMap;function t(o,a){return a===ts?o.mapping=ri:a===ns&&(o.mapping=si),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ts||a===ns)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wd extends gs{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ti=4,Sa=[.125,.215,.35,.446,.526,.582],An=20,Wr=new wd,Ea=new Ye;let Xr=null,qr=0,Yr=0;const bn=(1+Math.sqrt(5))/2,Jn=1/bn,ya=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,bn,Jn),new U(0,bn,-Jn),new U(Jn,0,bn),new U(-Jn,0,bn),new U(bn,Jn,0),new U(-bn,Jn,0)];class ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Aa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xr,qr,Yr),e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:xi,format:It,colorSpace:rn,depthBuffer:!1},r=Ta(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ta(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rd(s)),this._blurMaterial=Cd(s,e,t)}return r}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,n,r){const a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ea),u.toneMapping=mn,u.autoClear=!1;const m=new yo({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),g=new tn(new bi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Ea),_=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const x=this._cubeSize;ji(r,y*x,h>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ri||e.mapping===si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Aa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ji(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ya[(r-1)%ya.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new tn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*An-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):An;p>An&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${An}`);const h=[];let y=0;for(let A=0;A<An;++A){const W=A/_,S=Math.exp(-W*W/2);h.push(S),A===0?y+=S:A<p&&(y+=2*S)}for(let A=0;A<h.length;A++)h[A]=h[A]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const R=this._sizeLods[r],L=3*R*(r>x-ti?r-x+ti:0),C=4*(this._cubeSize-R);ji(t,L,C,3*R,2*R),l.setRenderTarget(t),l.render(d,Wr)}}function Rd(i){const e=[],t=[],n=[];let r=i;const s=i-ti+1+Sa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ti?l=Sa[o-i+ti-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,y=new Float32Array(_*g*m),x=new Float32Array(p*g*m),R=new Float32Array(h*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,W=C>2?0:-1,S=[A,W,0,A+2/3,W,0,A+2/3,W+1,0,A,W,0,A+2/3,W+1,0,A,W+1,0];y.set(S,_*g*C),x.set(f,p*g*C);const b=[C,C,C,C,C,C];R.set(b,h*g*C)}const L=new Ht;L.setAttribute("position",new et(y,_)),L.setAttribute("uv",new et(x,p)),L.setAttribute("faceIndex",new et(R,h)),e.push(L),r>ti&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ta(i,e,t){const n=new _n(i,e,t);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Cd(i,e,t){const n=new Float32Array(An),r=new U(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Aa(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function wa(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function _s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ts||l===ns,u=l===ri||l===si;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ba(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new ba(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ld(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Dd(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let x=0,R=y.length;x<R;x+=3){const L=y[x+0],C=y[x+1],A=y[x+2];f.push(L,C,C,A,A,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,R=y.length/3-1;x<R;x+=3){const L=x+0,C=x+1,A=x+2;f.push(L,C,C,A,A,L)}}else return;const p=new(_o(f)?To:bo)(f,1);p.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Ud(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(s,g,a,m*l),t.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,h;if(r)p=i,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,m*l,_),t.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<_;h++)this.render(m[h]/l,g[h]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let h=0;for(let y=0;y<_;y++)h+=g[y];t.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function Id(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Nd(i,e){return i[0]-e[0]}function Fd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Od(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let P=function(){q.dispose(),s.delete(u),u.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let W=0;y===!0&&(W=1),x===!0&&(W=2),R===!0&&(W=3);let S=u.attributes.position.count*W,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const G=new Float32Array(S*b*4*g),q=new Mo(G,S,b,g);q.type=fn,q.needsUpdate=!0;const le=W*4;for(let I=0;I<g;I++){const k=L[I],Y=C[I],X=A[I],V=S*b*4*I;for(let J=0;J<k.count;J++){const te=J*le;y===!0&&(o.fromBufferAttribute(k,J),G[V+te+0]=o.x,G[V+te+1]=o.y,G[V+te+2]=o.z,G[V+te+3]=0),x===!0&&(o.fromBufferAttribute(Y,J),G[V+te+4]=o.x,G[V+te+5]=o.y,G[V+te+6]=o.z,G[V+te+7]=0),R===!0&&(o.fromBufferAttribute(X,J),G[V+te+8]=o.x,G[V+te+9]=o.y,G[V+te+10]=o.z,G[V+te+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new Ae(S,b)},s.set(u,_),u.addEventListener("dispose",P)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const h=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",h),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<m;x++){const R=g[x];R[0]=x,R[1]=f[x]}g.sort(Fd);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Nd);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let x=0;x<8;x++){const R=a[x],L=R[0],C=R[1];L!==Number.MAX_SAFE_INTEGER&&C?(_&&u.getAttribute("morphTarget"+x)!==_[L]&&u.setAttribute("morphTarget"+x,_[L]),p&&u.getAttribute("morphNormal"+x)!==p[L]&&u.setAttribute("morphNormal"+x,p[L]),r[x]=C,h+=C):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const y=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Bd(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Po extends Lt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Pn,u!==Pn&&u!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pn&&(n=dn),n===void 0&&u===ai&&(n=Cn),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lo=new Lt,Do=new Po(1,1);Do.compareFunction=go;const Uo=new Mo,Io=new Sc,No=new wo,Ra=[],Ca=[],Pa=new Float32Array(16),La=new Float32Array(9),Da=new Float32Array(4);function ci(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ra[r];if(s===void 0&&(s=new Float32Array(r),Ra[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function st(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function at(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gr(i,e){let t=Ca[e];t===void 0&&(t=new Int32Array(e),Ca[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2fv(this.addr,e),at(t,e)}}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;i.uniform3fv(this.addr,e),at(t,e)}}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4fv(this.addr,e),at(t,e)}}function Vd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Da.set(n),i.uniformMatrix2fv(this.addr,!1,Da),at(t,n)}}function Wd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;La.set(n),i.uniformMatrix3fv(this.addr,!1,La),at(t,n)}}function Xd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Pa.set(n),i.uniformMatrix4fv(this.addr,!1,Pa),at(t,n)}}function qd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2iv(this.addr,e),at(t,e)}}function jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3iv(this.addr,e),at(t,e)}}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4iv(this.addr,e),at(t,e)}}function Zd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2uiv(this.addr,e),at(t,e)}}function Jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3uiv(this.addr,e),at(t,e)}}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4uiv(this.addr,e),at(t,e)}}function ef(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Do:Lo;t.setTexture2D(e||s,r)}function tf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Io,r)}function nf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||No,r)}function rf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Uo,r)}function sf(i){switch(i){case 5126:return zd;case 35664:return Gd;case 35665:return Hd;case 35666:return kd;case 35674:return Vd;case 35675:return Wd;case 35676:return Xd;case 5124:case 35670:return qd;case 35667:case 35671:return Yd;case 35668:case 35672:return jd;case 35669:case 35673:return Kd;case 5125:return Zd;case 36294:return $d;case 36295:return Jd;case 36296:return Qd;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return rf}}function af(i,e){i.uniform1fv(this.addr,e)}function of(i,e){const t=ci(e,this.size,2);i.uniform2fv(this.addr,t)}function lf(i,e){const t=ci(e,this.size,3);i.uniform3fv(this.addr,t)}function cf(i,e){const t=ci(e,this.size,4);i.uniform4fv(this.addr,t)}function uf(i,e){const t=ci(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hf(i,e){const t=ci(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function df(i,e){const t=ci(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ff(i,e){i.uniform1iv(this.addr,e)}function pf(i,e){i.uniform2iv(this.addr,e)}function mf(i,e){i.uniform3iv(this.addr,e)}function gf(i,e){i.uniform4iv(this.addr,e)}function _f(i,e){i.uniform1uiv(this.addr,e)}function vf(i,e){i.uniform2uiv(this.addr,e)}function xf(i,e){i.uniform3uiv(this.addr,e)}function Mf(i,e){i.uniform4uiv(this.addr,e)}function Sf(i,e,t){const n=this.cache,r=e.length,s=gr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lo,s[o])}function Ef(i,e,t){const n=this.cache,r=e.length,s=gr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Io,s[o])}function yf(i,e,t){const n=this.cache,r=e.length,s=gr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||No,s[o])}function bf(i,e,t){const n=this.cache,r=e.length,s=gr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Uo,s[o])}function Tf(i){switch(i){case 5126:return af;case 35664:return of;case 35665:return lf;case 35666:return cf;case 35674:return uf;case 35675:return hf;case 35676:return df;case 5124:case 35670:return ff;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return _f;case 36294:return vf;case 36295:return xf;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return Sf;case 35679:case 36299:case 36307:return Ef;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return bf}}class Af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sf(t.type)}}class wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tf(t.type)}}class Rf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function Ua(i,e){i.seq.push(e),i.map[e.id]=e}function Cf(i,e,t){const n=i.name,r=n.length;for(jr.lastIndex=0;;){const s=jr.exec(n),o=jr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ua(t,c===void 0?new Af(a,i,e):new wf(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Rf(a),Ua(t,d)),t=d}}}class tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Cf(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ia(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Pf=37297;let Lf=0;function Df(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Uf(i){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(i);let n;switch(e===t?n="":e===ar&&t===sr?n="LinearDisplayP3ToLinearSRGB":e===sr&&t===ar&&(n="LinearSRGBToLinearDisplayP3"),i){case rn:case fr:return[n,"LinearTransferOETF"];case dt:case fs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Na(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Df(i.getShaderSource(e),o)}else return r}function If(i,e){const t=Uf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nf(i,e){let t;switch(e){case Cl:t="Linear";break;case Pl:t="Reinhard";break;case Ll:t="OptimizedCineon";break;case Dl:t="ACESFilmic";break;case Il:t="AgX";break;case Ul:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ff(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ni).join(`
`)}function Of(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ni).join(`
`)}function Bf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ni(i){return i!==""}function Fa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(i){return i.replace(Gf,kf)}const Hf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kf(i,e){let t=Fe[e];if(t===void 0){const n=Hf.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return os(t)}const Vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ba(i){return i.replace(Vf,Wf)}function Wf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function za(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ro?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===il?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jt&&(e="SHADOWMAP_TYPE_VSM"),e}function qf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case si:e="ENVMAP_TYPE_CUBE";break;case dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case si:e="ENVMAP_MODE_REFRACTION";break}return e}function jf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case so:e="ENVMAP_BLENDING_MULTIPLY";break;case wl:e="ENVMAP_BLENDING_MIX";break;case Rl:e="ENVMAP_BLENDING_ADD";break}return e}function Kf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zf(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xf(t),c=qf(t),u=Yf(t),d=jf(t),f=Kf(t),m=t.isWebGL2?"":Ff(t),g=Of(t),_=Bf(s),p=r.createProgram();let h,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ni).join(`
`),h.length>0&&(h+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ni).join(`
`),y.length>0&&(y+=`
`)):(h=[za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ni).join(`
`),y=[m,za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==mn?Nf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,If("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ni).join(`
`)),o=os(o),o=Fa(o,t),o=Oa(o,t),a=os(a),a=Fa(a,t),a=Oa(a,t),o=Ba(o),a=Ba(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===or?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===or?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=x+h+o,L=x+y+a,C=Ia(r,r.VERTEX_SHADER,R),A=Ia(r,r.FRAGMENT_SHADER,L);r.attachShader(p,C),r.attachShader(p,A),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function W(q){if(i.debug.checkShaderErrors){const le=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(C).trim(),I=r.getShaderInfoLog(A).trim();let k=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,C,A);else{const X=Na(r,C,"vertex"),V=Na(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+X+`
`+V)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(P===""||I==="")&&(Y=!1);Y&&(q.diagnostics={runnable:k,programLog:le,vertexShader:{log:P,prefix:h},fragmentShader:{log:I,prefix:y}})}r.deleteShader(C),r.deleteShader(A),S=new tr(r,p),b=zf(r,p)}let S;this.getUniforms=function(){return S===void 0&&W(this),S};let b;this.getAttributes=function(){return b===void 0&&W(this),b};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(p,Pf)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let $f=0;class Jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qf(e),t.set(e,n)),n}}class Qf{constructor(e){this.id=$f++,this.code=e,this.usedTimes=0}}function ep(i,e,t,n,r,s,o){const a=new So,l=new Jf,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,b,G,q,le){const P=q.fog,I=le.geometry,k=S.isMeshStandardMaterial?q.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),X=Y&&Y.mapping===dr?Y.image.height:null,V=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,te=J!==void 0?J.length:0;let he=0;I.morphAttributes.position!==void 0&&(he=1),I.morphAttributes.normal!==void 0&&(he=2),I.morphAttributes.color!==void 0&&(he=3);let H,K,ue,ve;if(V){const vt=Vt[V];H=vt.vertexShader,K=vt.fragmentShader}else H=S.vertexShader,K=S.fragmentShader,l.update(S),ue=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const ge=i.getRenderTarget(),Ce=le.isInstancedMesh===!0,Pe=le.isBatchedMesh===!0,ye=!!S.map,ke=!!S.matcap,N=!!Y,ot=!!S.aoMap,Se=!!S.lightMap,we=!!S.bumpMap,pe=!!S.normalMap,Ze=!!S.displacementMap,Le=!!S.emissiveMap,E=!!S.metalnessMap,v=!!S.roughnessMap,F=S.anisotropy>0,ee=S.clearcoat>0,$=S.iridescence>0,Q=S.sheen>0,me=S.transmission>0,ce=F&&!!S.anisotropyMap,fe=ee&&!!S.clearcoatMap,be=ee&&!!S.clearcoatNormalMap,Ie=ee&&!!S.clearcoatRoughnessMap,Z=$&&!!S.iridescenceMap,Ve=$&&!!S.iridescenceThicknessMap,T=Q&&!!S.sheenColorMap,j=Q&&!!S.sheenRoughnessMap,ae=!!S.specularMap,ne=!!S.specularColorMap,_e=!!S.specularIntensityMap,ze=me&&!!S.transmissionMap,We=me&&!!S.thicknessMap,Oe=!!S.gradientMap,se=!!S.alphaMap,w=S.alphaTest>0,ie=!!S.alphaHash,re=!!S.extensions,Ee=!!I.attributes.uv1,xe=!!I.attributes.uv2,Xe=!!I.attributes.uv3;let qe=mn;return S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(qe=i.toneMapping),{isWebGL2:u,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:K,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Pe,instancing:Ce,instancingColor:Ce&&le.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:rn,map:ye,matcap:ke,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:X,aoMap:ot,lightMap:Se,bumpMap:we,normalMap:pe,displacementMap:f&&Ze,emissiveMap:Le,normalMapObjectSpace:pe&&S.normalMapType===Yl,normalMapTangentSpace:pe&&S.normalMapType===ql,metalnessMap:E,roughnessMap:v,anisotropy:F,anisotropyMap:ce,clearcoat:ee,clearcoatMap:fe,clearcoatNormalMap:be,clearcoatRoughnessMap:Ie,iridescence:$,iridescenceMap:Z,iridescenceThicknessMap:Ve,sheen:Q,sheenColorMap:T,sheenRoughnessMap:j,specularMap:ae,specularColorMap:ne,specularIntensityMap:_e,transmission:me,transmissionMap:ze,thicknessMap:We,gradientMap:Oe,opaque:S.transparent===!1&&S.blending===Rn,alphaMap:se,alphaTest:w,alphaHash:ie,combine:S.combine,mapUv:ye&&_(S.map.channel),aoMapUv:ot&&_(S.aoMap.channel),lightMapUv:Se&&_(S.lightMap.channel),bumpMapUv:we&&_(S.bumpMap.channel),normalMapUv:pe&&_(S.normalMap.channel),displacementMapUv:Ze&&_(S.displacementMap.channel),emissiveMapUv:Le&&_(S.emissiveMap.channel),metalnessMapUv:E&&_(S.metalnessMap.channel),roughnessMapUv:v&&_(S.roughnessMap.channel),anisotropyMapUv:ce&&_(S.anisotropyMap.channel),clearcoatMapUv:fe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:T&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:j&&_(S.sheenRoughnessMap.channel),specularMapUv:ae&&_(S.specularMap.channel),specularColorMapUv:ne&&_(S.specularColorMap.channel),specularIntensityMapUv:_e&&_(S.specularIntensityMap.channel),transmissionMapUv:ze&&_(S.transmissionMap.channel),thicknessMapUv:We&&_(S.thicknessMap.channel),alphaMapUv:se&&_(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(pe||F),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:xe,vertexUv3s:Xe,pointsUvs:le.isPoints===!0&&!!I.attributes.uv&&(ye||se),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:le.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===$e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qt,flipSided:S.side===bt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:re&&S.extensions.derivatives===!0,extensionFragDepth:re&&S.extensions.fragDepth===!0,extensionDrawBuffers:re&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const G in S.defines)b.push(G),b.push(S.defines[G]);return S.isRawShaderMaterial===!1&&(y(b,S),x(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function R(S){const b=g[S.type];let G;if(b){const q=Vt[b];G=Ic.clone(q.uniforms)}else G=S.uniforms;return G}function L(S,b){let G;for(let q=0,le=c.length;q<le;q++){const P=c[q];if(P.cacheKey===b){G=P,++G.usedTimes;break}}return G===void 0&&(G=new Zf(i,b,S,s),c.push(G)),G}function C(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:R,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:W}}function tp(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function np(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ga(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ha(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,m,g,_,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),e++,h}function a(d,f,m,g,_,p){const h=o(d,f,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(d,f,m,g,_,p){const h=o(d,f,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||np),n.length>1&&n.sort(f||Ga),r.length>1&&r.sort(f||Ga)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function ip(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ha,i.set(n,[o])):r>=s.length?(o=new Ha,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function sp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ap=0;function op(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lp(i,e){const t=new rp,n=sp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,o=new ht,a=new ht;function l(u,d){let f=0,m=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,p=0,h=0,y=0,x=0,R=0,L=0,C=0,A=0,W=0,S=0;u.sort(op);const b=d===!0?Math.PI:1;for(let q=0,le=u.length;q<le;q++){const P=u[q],I=P.color,k=P.intensity,Y=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=I.r*k*b,m+=I.g*k*b,g+=I.b*k*b;else if(P.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(P.sh.coefficients[V],k);S++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const J=P.shadow,te=n.get(P);te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,r.directionalShadow[_]=te,r.directionalShadowMap[_]=X,r.directionalShadowMatrix[_]=P.shadow.matrix,R++}r.directional[_]=V,_++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(I).multiplyScalar(k*b),V.distance=Y,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,r.spot[h]=V;const J=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,J.updateMatrices(P),P.castShadow&&W++),r.spotLightMatrix[h]=J.matrix,P.castShadow){const te=n.get(P);te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,r.spotShadow[h]=te,r.spotShadowMap[h]=X,C++}h++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(I).multiplyScalar(k),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=V,y++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*b),V.distance=P.distance,V.decay=P.decay,P.castShadow){const J=P.shadow,te=n.get(P);te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,te.shadowCameraNear=J.camera.near,te.shadowCameraFar=J.camera.far,r.pointShadow[p]=te,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=P.shadow.matrix,L++}r.point[p]=V,p++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(k*b),V.groundColor.copy(P.groundColor).multiplyScalar(k*b),r.hemi[x]=V,x++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const G=r.hash;(G.directionalLength!==_||G.pointLength!==p||G.spotLength!==h||G.rectAreaLength!==y||G.hemiLength!==x||G.numDirectionalShadows!==R||G.numPointShadows!==L||G.numSpotShadows!==C||G.numSpotMaps!==A||G.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=y,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+A-W,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=W,r.numLightProbes=S,G.directionalLength=_,G.pointLength=p,G.spotLength=h,G.rectAreaLength=y,G.hemiLength=x,G.numDirectionalShadows=R,G.numPointShadows=L,G.numSpotShadows=C,G.numSpotMaps=A,G.numLightProbes=S,r.version=ap++)}function c(u,d){let f=0,m=0,g=0,_=0,p=0;const h=d.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const R=u[y];if(R.isDirectionalLight){const L=r.directional[f];L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(h),f++}else if(R.isSpotLight){const L=r.spot[g];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(h),L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(h),g++}else if(R.isRectAreaLight){const L=r.rectArea[_];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(h),a.identity(),o.copy(R.matrixWorld),o.premultiply(h),a.extractRotation(o),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(h),m++}else if(R.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function ka(i,e){const t=new lp(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cp(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ka(i,e),t.set(s,[l])):o>=a.length?(l=new ka(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class up extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hp extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pp(i,e,t){let n=new Ro;const r=new Ae,s=new Ae,o=new tt,a=new up({depthPacking:Xl}),l=new hp,c={},u=t.maxTextureSize,d={[gn]:bt,[bt]:gn,[Qt]:Qt},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:dp,fragmentShader:fp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new tn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let h=this.type;this.render=function(C,A,W){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),q=i.state;q.setBlending(pn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const le=h!==Jt&&this.type===Jt,P=h===Jt&&this.type!==Jt;for(let I=0,k=C.length;I<k;I++){const Y=C[I],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const V=X.getFrameExtents();if(r.multiply(V),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,X.mapSize.y=s.y)),X.map===null||le===!0||P===!0){const te=this.type!==Jt?{minFilter:Et,magFilter:Et}:{};X.map!==null&&X.map.dispose(),X.map=new _n(r.x,r.y,te),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const J=X.getViewportCount();for(let te=0;te<J;te++){const he=X.getViewport(te);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),q.viewport(o),X.updateMatrices(Y,te),n=X.getFrustum(),R(A,W,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Jt&&y(X,W),X.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(S,b,G)};function y(C,A){const W=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _n(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,W,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,W,m,_,null)}function x(C,A,W,S){let b=null;const G=W.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(G!==void 0)b=G;else if(b=W.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=b.uuid,le=A.uuid;let P=c[q];P===void 0&&(P={},c[q]=P);let I=P[le];I===void 0&&(I=b.clone(),P[le]=I,A.addEventListener("dispose",L)),b=I}if(b.visible=A.visible,b.wireframe=A.wireframe,S===Jt?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,W.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=i.properties.get(b);q.light=W}return b}function R(C,A,W,S,b){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Jt)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld);const le=e.update(C),P=C.material;if(Array.isArray(P)){const I=le.groups;for(let k=0,Y=I.length;k<Y;k++){const X=I[k],V=P[X.materialIndex];if(V&&V.visible){const J=x(C,V,S,b);C.onBeforeShadow(i,C,A,W,le,J,X),i.renderBufferDirect(W,null,le,J,C,X),C.onAfterShadow(i,C,A,W,le,J,X)}}}else if(P.visible){const I=x(C,P,S,b);C.onBeforeShadow(i,C,A,W,le,I,null),i.renderBufferDirect(W,null,le,I,C,null),C.onAfterShadow(i,C,A,W,le,I,null)}}const q=C.children;for(let le=0,P=q.length;le<P;le++)R(q[le],A,W,S,b)}function L(C){C.target.removeEventListener("dispose",L);for(const W in c){const S=c[W],b=C.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function mp(i,e,t){const n=t.isWebGL2;function r(){let w=!1;const ie=new tt;let re=null;const Ee=new tt(0,0,0,0);return{setMask:function(xe){re!==xe&&!w&&(i.colorMask(xe,xe,xe,xe),re=xe)},setLocked:function(xe){w=xe},setClear:function(xe,Xe,qe,lt,vt){vt===!0&&(xe*=lt,Xe*=lt,qe*=lt),ie.set(xe,Xe,qe,lt),Ee.equals(ie)===!1&&(i.clearColor(xe,Xe,qe,lt),Ee.copy(ie))},reset:function(){w=!1,re=null,Ee.set(-1,0,0,0)}}}function s(){let w=!1,ie=null,re=null,Ee=null;return{setTest:function(xe){xe?Pe(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(xe){ie!==xe&&!w&&(i.depthMask(xe),ie=xe)},setFunc:function(xe){if(re!==xe){switch(xe){case Ml:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case El:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case Al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=xe}},setLocked:function(xe){w=xe},setClear:function(xe){Ee!==xe&&(i.clearDepth(xe),Ee=xe)},reset:function(){w=!1,ie=null,re=null,Ee=null}}}function o(){let w=!1,ie=null,re=null,Ee=null,xe=null,Xe=null,qe=null,lt=null,vt=null;return{setTest:function(Ke){w||(Ke?Pe(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ke){ie!==Ke&&!w&&(i.stencilMask(Ke),ie=Ke)},setFunc:function(Ke,xt,kt){(re!==Ke||Ee!==xt||xe!==kt)&&(i.stencilFunc(Ke,xt,kt),re=Ke,Ee=xt,xe=kt)},setOp:function(Ke,xt,kt){(Xe!==Ke||qe!==xt||lt!==kt)&&(i.stencilOp(Ke,xt,kt),Xe=Ke,qe=xt,lt=kt)},setLocked:function(Ke){w=Ke},setClear:function(Ke){vt!==Ke&&(i.clearStencil(Ke),vt=Ke)},reset:function(){w=!1,ie=null,re=null,Ee=null,xe=null,Xe=null,qe=null,lt=null,vt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,h=!1,y=null,x=null,R=null,L=null,C=null,A=null,W=null,S=new Ye(0,0,0),b=0,G=!1,q=null,le=null,P=null,I=null,k=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,V=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=V>=1):J.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=V>=2);let te=null,he={};const H=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ue=new tt().fromArray(H),ve=new tt().fromArray(K);function ge(w,ie,re,Ee){const xe=new Uint8Array(4),Xe=i.createTexture();i.bindTexture(w,Xe),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<re;qe++)n&&(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)?i.texImage3D(ie,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ie+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Xe}const Ce={};Ce[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(i.DEPTH_TEST),l.setFunc(ir),Le(!1),E(bs),Pe(i.CULL_FACE),pe(pn);function Pe(w){f[w]!==!0&&(i.enable(w),f[w]=!0)}function ye(w){f[w]!==!1&&(i.disable(w),f[w]=!1)}function ke(w,ie){return m[w]!==ie?(i.bindFramebuffer(w,ie),m[w]=ie,n&&(w===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ie),w===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ie)),!0):!1}function N(w,ie){let re=_,Ee=!1;if(w)if(re=g.get(ie),re===void 0&&(re=[],g.set(ie,re)),w.isWebGLMultipleRenderTargets){const xe=w.texture;if(re.length!==xe.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Xe=0,qe=xe.length;Xe<qe;Xe++)re[Xe]=i.COLOR_ATTACHMENT0+Xe;re.length=xe.length,Ee=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,Ee=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function ot(w){return p!==w?(i.useProgram(w),p=w,!0):!1}const Se={[Tn]:i.FUNC_ADD,[sl]:i.FUNC_SUBTRACT,[al]:i.FUNC_REVERSE_SUBTRACT};if(n)Se[Rs]=i.MIN,Se[Cs]=i.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(Se[Rs]=w.MIN_EXT,Se[Cs]=w.MAX_EXT)}const we={[ol]:i.ZERO,[ll]:i.ONE,[cl]:i.SRC_COLOR,[Qr]:i.SRC_ALPHA,[ml]:i.SRC_ALPHA_SATURATE,[fl]:i.DST_COLOR,[hl]:i.DST_ALPHA,[ul]:i.ONE_MINUS_SRC_COLOR,[es]:i.ONE_MINUS_SRC_ALPHA,[pl]:i.ONE_MINUS_DST_COLOR,[dl]:i.ONE_MINUS_DST_ALPHA,[gl]:i.CONSTANT_COLOR,[_l]:i.ONE_MINUS_CONSTANT_COLOR,[vl]:i.CONSTANT_ALPHA,[xl]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(w,ie,re,Ee,xe,Xe,qe,lt,vt,Ke){if(w===pn){h===!0&&(ye(i.BLEND),h=!1);return}if(h===!1&&(Pe(i.BLEND),h=!0),w!==rl){if(w!==y||Ke!==G){if((x!==Tn||C!==Tn)&&(i.blendEquation(i.FUNC_ADD),x=Tn,C=Tn),Ke)switch(w){case Rn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ts:i.blendFunc(i.ONE,i.ONE);break;case As:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ws:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Rn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ts:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case As:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ws:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}R=null,L=null,A=null,W=null,S.set(0,0,0),b=0,y=w,G=Ke}return}xe=xe||ie,Xe=Xe||re,qe=qe||Ee,(ie!==x||xe!==C)&&(i.blendEquationSeparate(Se[ie],Se[xe]),x=ie,C=xe),(re!==R||Ee!==L||Xe!==A||qe!==W)&&(i.blendFuncSeparate(we[re],we[Ee],we[Xe],we[qe]),R=re,L=Ee,A=Xe,W=qe),(lt.equals(S)===!1||vt!==b)&&(i.blendColor(lt.r,lt.g,lt.b,vt),S.copy(lt),b=vt),y=w,G=!1}function Ze(w,ie){w.side===Qt?ye(i.CULL_FACE):Pe(i.CULL_FACE);let re=w.side===bt;ie&&(re=!re),Le(re),w.blending===Rn&&w.transparent===!1?pe(pn):pe(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const Ee=w.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),F(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(w){q!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),q=w)}function E(w){w!==tl?(Pe(i.CULL_FACE),w!==le&&(w===bs?i.cullFace(i.BACK):w===nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),le=w}function v(w){w!==P&&(X&&i.lineWidth(w),P=w)}function F(w,ie,re){w?(Pe(i.POLYGON_OFFSET_FILL),(I!==ie||k!==re)&&(i.polygonOffset(ie,re),I=ie,k=re)):ye(i.POLYGON_OFFSET_FILL)}function ee(w){w?Pe(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function $(w){w===void 0&&(w=i.TEXTURE0+Y-1),te!==w&&(i.activeTexture(w),te=w)}function Q(w,ie,re){re===void 0&&(te===null?re=i.TEXTURE0+Y-1:re=te);let Ee=he[re];Ee===void 0&&(Ee={type:void 0,texture:void 0},he[re]=Ee),(Ee.type!==w||Ee.texture!==ie)&&(te!==re&&(i.activeTexture(re),te=re),i.bindTexture(w,ie||Ce[w]),Ee.type=w,Ee.texture=ie)}function me(){const w=he[te];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function be(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function T(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ae(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ne(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _e(w){ue.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),ue.copy(w))}function ze(w){ve.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),ve.copy(w))}function We(w,ie){let re=d.get(ie);re===void 0&&(re=new WeakMap,d.set(ie,re));let Ee=re.get(w);Ee===void 0&&(Ee=i.getUniformBlockIndex(ie,w.name),re.set(w,Ee))}function Oe(w,ie){const Ee=d.get(ie).get(w);u.get(ie)!==Ee&&(i.uniformBlockBinding(ie,Ee,w.__bindingPointIndex),u.set(ie,Ee))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},te=null,he={},m={},g=new WeakMap,_=[],p=null,h=!1,y=null,x=null,R=null,L=null,C=null,A=null,W=null,S=new Ye(0,0,0),b=0,G=!1,q=null,le=null,P=null,I=null,k=null,ue.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:ye,bindFramebuffer:ke,drawBuffers:N,useProgram:ot,setBlending:pe,setMaterial:Ze,setFlipSided:Le,setCullFace:E,setLineWidth:v,setPolygonOffset:F,setScissorTest:ee,activeTexture:$,bindTexture:Q,unbindTexture:me,compressedTexImage2D:ce,compressedTexImage3D:fe,texImage2D:ae,texImage3D:ne,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:T,texStorage3D:j,texSubImage2D:be,texSubImage3D:Ie,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ve,scissor:_e,viewport:ze,reset:se}}function gp(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):ur("canvas")}function _(E,v,F,ee){let $=1;if((E.width>ee||E.height>ee)&&($=ee/Math.max(E.width,E.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const Q=v?cr:Math.floor,me=Q($*E.width),ce=Q($*E.height);d===void 0&&(d=g(me,ce));const fe=F?g(me,ce):d;return fe.width=me,fe.height=ce,fe.getContext("2d").drawImage(E,0,0,me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+me+"x"+ce+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return as(E.width)&&as(E.height)}function h(E){return a?!1:E.wrapS!==Gt||E.wrapT!==Gt||E.minFilter!==Et&&E.minFilter!==yt}function y(E,v){return E.generateMipmaps&&v&&E.minFilter!==Et&&E.minFilter!==yt}function x(E){i.generateMipmap(E)}function R(E,v,F,ee,$=!1){if(a===!1)return v;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=v;if(v===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RGBA){const me=$?rr:je.getTransfer(ee);F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=me===$e?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function L(E,v,F){return y(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==Et&&E.minFilter!==yt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){return E===Et||E===Ps||E===Sr?i.NEAREST:i.LINEAR}function A(E){const v=E.target;v.removeEventListener("dispose",A),S(v),v.isVideoTexture&&u.delete(v)}function W(E){const v=E.target;v.removeEventListener("dispose",W),G(v)}function S(E){const v=n.get(E);if(v.__webglInit===void 0)return;const F=E.source,ee=f.get(F);if(ee){const $=ee[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(E),Object.keys(ee).length===0&&f.delete(F)}n.remove(E)}function b(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const F=E.source,ee=f.get(F);delete ee[v.__cacheKey],o.memory.textures--}function G(E){const v=E.texture,F=n.get(E),ee=n.get(v);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(F.__webglFramebuffer[$]))for(let Q=0;Q<F.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(F.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(F.__webglFramebuffer[$]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[$])}else{if(Array.isArray(F.__webglFramebuffer))for(let $=0;$<F.__webglFramebuffer.length;$++)i.deleteFramebuffer(F.__webglFramebuffer[$]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let $=0;$<F.__webglColorRenderbuffer.length;$++)F.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[$]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let $=0,Q=v.length;$<Q;$++){const me=n.get(v[$]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(v[$])}n.remove(v),n.remove(E)}let q=0;function le(){q=0}function P(){const E=q;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),q+=1,E}function I(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function k(E,v){const F=n.get(E);if(E.isVideoTexture&&Ze(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(F,E,v);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function Y(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ue(F,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function X(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ue(F,E,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function V(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ve(F,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const J={[is]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[rs]:i.MIRRORED_REPEAT},te={[Et]:i.NEAREST,[Ps]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[Nl]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},he={[jl]:i.NEVER,[ec]:i.ALWAYS,[Kl]:i.LESS,[go]:i.LEQUAL,[Zl]:i.EQUAL,[Ql]:i.GEQUAL,[$l]:i.GREATER,[Jl]:i.NOTEQUAL};function H(E,v,F){if(F?(i.texParameteri(E,i.TEXTURE_WRAP_S,J[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,J[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,J[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,te[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,te[v.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Gt||v.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,C(v.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,C(v.minFilter)),v.minFilter!==Et&&v.minFilter!==yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Et||v.minFilter!==Sr&&v.minFilter!==vi||v.type===fn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===xi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function K(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const ee=v.source;let $=f.get(ee);$===void 0&&($={},f.set(ee,$));const Q=I(v);if(Q!==E.__cacheKey){$[Q]===void 0&&($[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[Q].usedTimes++;const me=$[E.__cacheKey];me!==void 0&&($[E.__cacheKey].usedTimes--,me.usedTimes===0&&b(v)),E.__cacheKey=Q,E.__webglTexture=$[Q].texture}return F}function ue(E,v,F){let ee=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=i.TEXTURE_3D);const $=K(E,v),Q=v.source;t.bindTexture(ee,E.__webglTexture,i.TEXTURE0+F);const me=n.get(Q);if(Q.version!==me.__version||$===!0){t.activeTexture(i.TEXTURE0+F);const ce=je.getPrimaries(je.workingColorSpace),fe=v.colorSpace===Pt?null:je.getPrimaries(v.colorSpace),be=v.colorSpace===Pt||ce===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ie=h(v)&&p(v.image)===!1;let Z=_(v.image,Ie,!1,r.maxTextureSize);Z=Le(v,Z);const Ve=p(Z)||a,T=s.convert(v.format,v.colorSpace);let j=s.convert(v.type),ae=R(v.internalFormat,T,j,v.colorSpace,v.isVideoTexture);H(ee,v,Ve);let ne;const _e=v.mipmaps,ze=a&&v.isVideoTexture!==!0&&ae!==po,We=me.__version===void 0||$===!0,Oe=L(v,Z,Ve);if(v.isDepthTexture)ae=i.DEPTH_COMPONENT,a?v.type===fn?ae=i.DEPTH_COMPONENT32F:v.type===dn?ae=i.DEPTH_COMPONENT24:v.type===Cn?ae=i.DEPTH24_STENCIL8:ae=i.DEPTH_COMPONENT16:v.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Pn&&ae===i.DEPTH_COMPONENT&&v.type!==ds&&v.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=dn,j=s.convert(v.type)),v.format===ai&&ae===i.DEPTH_COMPONENT&&(ae=i.DEPTH_STENCIL,v.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Cn,j=s.convert(v.type))),We&&(ze?t.texStorage2D(i.TEXTURE_2D,1,ae,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ae,Z.width,Z.height,0,T,j,null));else if(v.isDataTexture)if(_e.length>0&&Ve){ze&&We&&t.texStorage2D(i.TEXTURE_2D,Oe,ae,_e[0].width,_e[0].height);for(let se=0,w=_e.length;se<w;se++)ne=_e[se],ze?t.texSubImage2D(i.TEXTURE_2D,se,0,0,ne.width,ne.height,T,j,ne.data):t.texImage2D(i.TEXTURE_2D,se,ae,ne.width,ne.height,0,T,j,ne.data);v.generateMipmaps=!1}else ze?(We&&t.texStorage2D(i.TEXTURE_2D,Oe,ae,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,T,j,Z.data)):t.texImage2D(i.TEXTURE_2D,0,ae,Z.width,Z.height,0,T,j,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,ae,_e[0].width,_e[0].height,Z.depth);for(let se=0,w=_e.length;se<w;se++)ne=_e[se],v.format!==It?T!==null?ze?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ne.width,ne.height,Z.depth,T,ne.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ae,ne.width,ne.height,Z.depth,0,ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ne.width,ne.height,Z.depth,T,j,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ae,ne.width,ne.height,Z.depth,0,T,j,ne.data)}else{ze&&We&&t.texStorage2D(i.TEXTURE_2D,Oe,ae,_e[0].width,_e[0].height);for(let se=0,w=_e.length;se<w;se++)ne=_e[se],v.format!==It?T!==null?ze?t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,ne.width,ne.height,T,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ae,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(i.TEXTURE_2D,se,0,0,ne.width,ne.height,T,j,ne.data):t.texImage2D(i.TEXTURE_2D,se,ae,ne.width,ne.height,0,T,j,ne.data)}else if(v.isDataArrayTexture)ze?(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,ae,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,T,j,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,Z.width,Z.height,Z.depth,0,T,j,Z.data);else if(v.isData3DTexture)ze?(We&&t.texStorage3D(i.TEXTURE_3D,Oe,ae,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,T,j,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ae,Z.width,Z.height,Z.depth,0,T,j,Z.data);else if(v.isFramebufferTexture){if(We)if(ze)t.texStorage2D(i.TEXTURE_2D,Oe,ae,Z.width,Z.height);else{let se=Z.width,w=Z.height;for(let ie=0;ie<Oe;ie++)t.texImage2D(i.TEXTURE_2D,ie,ae,se,w,0,T,j,null),se>>=1,w>>=1}}else if(_e.length>0&&Ve){ze&&We&&t.texStorage2D(i.TEXTURE_2D,Oe,ae,_e[0].width,_e[0].height);for(let se=0,w=_e.length;se<w;se++)ne=_e[se],ze?t.texSubImage2D(i.TEXTURE_2D,se,0,0,T,j,ne):t.texImage2D(i.TEXTURE_2D,se,ae,T,j,ne);v.generateMipmaps=!1}else ze?(We&&t.texStorage2D(i.TEXTURE_2D,Oe,ae,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,T,j,Z)):t.texImage2D(i.TEXTURE_2D,0,ae,T,j,Z);y(v,Ve)&&x(ee),me.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ve(E,v,F){if(v.image.length!==6)return;const ee=K(E,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const Q=n.get($);if($.version!==Q.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);const me=je.getPrimaries(je.workingColorSpace),ce=v.colorSpace===Pt?null:je.getPrimaries(v.colorSpace),fe=v.colorSpace===Pt||me===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,Ie=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let se=0;se<6;se++)!be&&!Ie?Z[se]=_(v.image[se],!1,!0,r.maxCubemapSize):Z[se]=Ie?v.image[se].image:v.image[se],Z[se]=Le(v,Z[se]);const Ve=Z[0],T=p(Ve)||a,j=s.convert(v.format,v.colorSpace),ae=s.convert(v.type),ne=R(v.internalFormat,j,ae,v.colorSpace),_e=a&&v.isVideoTexture!==!0,ze=Q.__version===void 0||ee===!0;let We=L(v,Ve,T);H(i.TEXTURE_CUBE_MAP,v,T);let Oe;if(be){_e&&ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,ne,Ve.width,Ve.height);for(let se=0;se<6;se++){Oe=Z[se].mipmaps;for(let w=0;w<Oe.length;w++){const ie=Oe[w];v.format!==It?j!==null?_e?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,w,0,0,ie.width,ie.height,j,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,w,ne,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,w,0,0,ie.width,ie.height,j,ae,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,w,ne,ie.width,ie.height,0,j,ae,ie.data)}}}else{Oe=v.mipmaps,_e&&ze&&(Oe.length>0&&We++,t.texStorage2D(i.TEXTURE_CUBE_MAP,We,ne,Z[0].width,Z[0].height));for(let se=0;se<6;se++)if(Ie){_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Z[se].width,Z[se].height,j,ae,Z[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ne,Z[se].width,Z[se].height,0,j,ae,Z[se].data);for(let w=0;w<Oe.length;w++){const re=Oe[w].image[se].image;_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,w+1,0,0,re.width,re.height,j,ae,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,w+1,ne,re.width,re.height,0,j,ae,re.data)}}else{_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,j,ae,Z[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ne,j,ae,Z[se]);for(let w=0;w<Oe.length;w++){const ie=Oe[w];_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,w+1,0,0,j,ae,ie.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,w+1,ne,j,ae,ie.image[se])}}}y(v,T)&&x(i.TEXTURE_CUBE_MAP),Q.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ge(E,v,F,ee,$,Q){const me=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),fe=R(F.internalFormat,me,ce,F.colorSpace);if(!n.get(v).__hasExternalTextures){const Ie=Math.max(1,v.width>>Q),Z=Math.max(1,v.height>>Q);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Q,fe,Ie,Z,v.depth,0,me,ce,null):t.texImage2D($,Q,fe,Ie,Z,0,me,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,n.get(F).__webglTexture,0,we(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,n.get(F).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(E,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let ee=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||pe(v)){const $=v.depthTexture;$&&$.isDepthTexture&&($.type===fn?ee=i.DEPTH_COMPONENT32F:$.type===dn&&(ee=i.DEPTH_COMPONENT24));const Q=we(v);pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,ee,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ee,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const ee=we(v);F&&pe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<ee.length;$++){const Q=ee[$],me=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),fe=R(Q.internalFormat,me,ce,Q.colorSpace),be=we(v);F&&pe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,fe,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,fe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,fe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);const ee=n.get(v.depthTexture).__webglTexture,$=we(v);if(v.depthTexture.format===Pn)pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===ai)pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ye(E){const v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=i.createRenderbuffer(),Ce(v.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Ce(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(E,v,F){const ee=n.get(E);v!==void 0&&ge(ee.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ye(E)}function N(E){const v=E.texture,F=n.get(E),ee=n.get(v);E.addEventListener("dispose",W),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=v.version,o.memory.textures++);const $=E.isWebGLCubeRenderTarget===!0,Q=E.isWebGLMultipleRenderTargets===!0,me=p(E)||a;if($){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let fe=0;fe<v.mipmaps.length;fe++)F.__webglFramebuffer[ce][fe]=i.createFramebuffer()}else F.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)F.__webglFramebuffer[ce]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Q)if(r.drawBuffers){const ce=E.texture;for(let fe=0,be=ce.length;fe<be;fe++){const Ie=n.get(ce[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&pe(E)===!1){const ce=Q?v:[v];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<ce.length;fe++){const be=ce[fe];F.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Ie=s.convert(be.format,be.colorSpace),Z=s.convert(be.type),Ve=R(be.internalFormat,Ie,Z,be.colorSpace,E.isXRRenderTarget===!0),T=we(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,T,Ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),H(i.TEXTURE_CUBE_MAP,v,me);for(let ce=0;ce<6;ce++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ge(F.__webglFramebuffer[ce][fe],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else ge(F.__webglFramebuffer[ce],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(v,me)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ce=E.texture;for(let fe=0,be=ce.length;fe<be;fe++){const Ie=ce[fe],Z=n.get(Ie);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),H(i.TEXTURE_2D,Ie,me),ge(F.__webglFramebuffer,E,Ie,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),y(Ie,me)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ce=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ee.__webglTexture),H(ce,v,me),a&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ge(F.__webglFramebuffer[fe],E,v,i.COLOR_ATTACHMENT0,ce,fe);else ge(F.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ce,0);y(v,me)&&x(ce),t.unbindTexture()}E.depthBuffer&&ye(E)}function ot(E){const v=p(E)||a,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,$=F.length;ee<$;ee++){const Q=F[ee];if(y(Q,v)){const me=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(Q).__webglTexture;t.bindTexture(me,ce),x(me),t.unbindTexture()}}}function Se(E){if(a&&E.samples>0&&pe(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,ee=E.height;let $=i.COLOR_BUFFER_BIT;const Q=[],me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(E),fe=E.isWebGLMultipleRenderTargets===!0;if(fe)for(let be=0;be<v.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let be=0;be<v.length;be++){Q.push(i.COLOR_ATTACHMENT0+be),E.depthBuffer&&Q.push(me);const Ie=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ie===!1&&(E.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[be]),Ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),fe){const Z=n.get(v[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,F,ee,0,0,F,ee,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let be=0;be<v.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,ce.__webglColorRenderbuffer[be]);const Ie=n.get(v[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function we(E){return Math.min(r.maxSamples,E.samples)}function pe(E){const v=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ze(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Le(E,v){const F=E.colorSpace,ee=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ss||F!==rn&&F!==Pt&&(je.getTransfer(F)===$e?a===!1?e.has("EXT_sRGB")===!0&&ee===It?(E.format=ss,E.minFilter=yt,E.generateMipmaps=!1):v=vo.sRGBToLinear(v):(ee!==It||$!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=P,this.resetTextureUnits=le,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=ke,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=pe}function _p(i,e,t){const n=t.isWebGL2;function r(s,o=Pt){let a;const l=je.getTransfer(o);if(s===nn)return i.UNSIGNED_BYTE;if(s===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(s===co)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Fl)return i.BYTE;if(s===Ol)return i.SHORT;if(s===ds)return i.UNSIGNED_SHORT;if(s===oo)return i.INT;if(s===dn)return i.UNSIGNED_INT;if(s===fn)return i.FLOAT;if(s===xi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Bl)return i.ALPHA;if(s===It)return i.RGBA;if(s===zl)return i.LUMINANCE;if(s===Gl)return i.LUMINANCE_ALPHA;if(s===Pn)return i.DEPTH_COMPONENT;if(s===ai)return i.DEPTH_STENCIL;if(s===ss)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Hl)return i.RED;if(s===uo)return i.RED_INTEGER;if(s===kl)return i.RG;if(s===ho)return i.RG_INTEGER;if(s===fo)return i.RGBA_INTEGER;if(s===Er||s===yr||s===br||s===Tr)if(l===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Er)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Er)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===br)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ls||s===Ds||s===Us||s===Is)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ls)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ds)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Us)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Is)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===po)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ns||s===Fs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ns)return l===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Fs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Os||s===Bs||s===zs||s===Gs||s===Hs||s===ks||s===Vs||s===Ws||s===Xs||s===qs||s===Ys||s===js||s===Ks||s===Zs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Os)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ks)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ws)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ys)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===js)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ks)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ar||s===$s||s===Js)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ar)return l===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$s)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Js)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vl||s===Qs||s===ea||s===ta)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ar)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Qs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ea)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ta)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class vp extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wn extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mp extends In{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,h=null;const y=[],x=[],R=new Ae;let L=null;const C=new zt;C.layers.enable(1),C.viewport=new tt;const A=new zt;A.layers.enable(2),A.viewport=new tt;const W=[C,A],S=new vp;S.layers.enable(1),S.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=y[H];return K===void 0&&(K=new Kr,y[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=y[H];return K===void 0&&(K=new Kr,y[H]=K),K.getGripSpace()},this.getHand=function(H){let K=y[H];return K===void 0&&(K=new Kr,y[H]=K),K.getHandSpace()};function q(H){const K=x.indexOf(H.inputSource);if(K===-1)return;const ue=y[K];ue!==void 0&&(ue.update(H.inputSource,H.frame,c||o),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function le(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",le),r.removeEventListener("inputsourceschange",P);for(let H=0;H<y.length;H++){const K=x[H];K!==null&&(x[H]=null,y[H].disconnect(K))}b=null,G=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,h=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",le),r.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new _n(m.framebufferWidth,m.framebufferHeight,{format:It,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ue=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?ai:Pn,ue=_.stencil?Cn:dn);const ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new _n(f.textureWidth,f.textureHeight,{format:It,type:nn,depthTexture:new Po(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(h);Ce.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(H){for(let K=0;K<H.removed.length;K++){const ue=H.removed[K],ve=x.indexOf(ue);ve>=0&&(x[ve]=null,y[ve].disconnect(ue))}for(let K=0;K<H.added.length;K++){const ue=H.added[K];let ve=x.indexOf(ue);if(ve===-1){for(let Ce=0;Ce<y.length;Ce++)if(Ce>=x.length){x.push(ue),ve=Ce;break}else if(x[Ce]===null){x[Ce]=ue,ve=Ce;break}if(ve===-1)break}const ge=y[ve];ge&&ge.connect(ue)}}const I=new U,k=new U;function Y(H,K,ue){I.setFromMatrixPosition(K.matrixWorld),k.setFromMatrixPosition(ue.matrixWorld);const ve=I.distanceTo(k),ge=K.projectionMatrix.elements,Ce=ue.projectionMatrix.elements,Pe=ge[14]/(ge[10]-1),ye=ge[14]/(ge[10]+1),ke=(ge[9]+1)/ge[5],N=(ge[9]-1)/ge[5],ot=(ge[8]-1)/ge[0],Se=(Ce[8]+1)/Ce[0],we=Pe*ot,pe=Pe*Se,Ze=ve/(-ot+Se),Le=Ze*-ot;K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Le),H.translateZ(Ze),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=Pe+Ze,v=ye+Ze,F=we-Le,ee=pe+(ve-Le),$=ke*ye/v*E,Q=N*ye/v*E;H.projectionMatrix.makePerspective(F,ee,$,Q,E,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;S.near=A.near=C.near=H.near,S.far=A.far=C.far=H.far,(b!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,G=S.far);const K=H.parent,ue=S.cameras;X(S,K);for(let ve=0;ve<ue.length;ve++)X(ue[ve],K);ue.length===2?Y(S,C,A):S.projectionMatrix.copy(C.projectionMatrix),V(H,S,K)};function V(H,K,ue){ue===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Mi*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let J=null;function te(H,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ve=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let ge=0;ge<ue.length;ge++){const Ce=ue[ge];let Pe=null;if(m!==null)Pe=m.getViewport(Ce);else{const ke=d.getViewSubImage(f,Ce);Pe=ke.viewport,ge===0&&(e.setRenderTargetTextures(h,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(h))}let ye=W[ge];ye===void 0&&(ye=new zt,ye.layers.enable(ge),ye.viewport=new tt,W[ge]=ye),ye.matrix.fromArray(Ce.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ce.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ge===0&&(S.matrix.copy(ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(ye)}}for(let ue=0;ue<y.length;ue++){const ve=x[ue],ge=y[ue];ve!==null&&ge!==void 0&&ge.update(ve,K,c||o)}J&&J(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const he=new Co;he.setAnimationLoop(te),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}}function Sp(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Ao(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,y,x,R){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,R)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,y,x):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===bt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===bt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=e.get(h).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,y,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=x*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const y=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ep(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const R=x.program;n.uniformBlockBinding(y,R)}function c(y,x){let R=r[y.id];R===void 0&&(g(y),R=u(y),r[y.id]=R,y.addEventListener("dispose",p));const L=x.program;n.updateUBOMapping(y,L);const C=e.render.frame;s[y.id]!==C&&(f(y),s[y.id]=C)}function u(y){const x=d();y.__bindingPointIndex=x;const R=i.createBuffer(),L=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,R),R}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],R=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,A=R.length;C<A;C++){const W=Array.isArray(R[C])?R[C]:[R[C]];for(let S=0,b=W.length;S<b;S++){const G=W[S];if(m(G,C,S,L)===!0){const q=G.__offset,le=Array.isArray(G.value)?G.value:[G.value];let P=0;for(let I=0;I<le.length;I++){const k=le[I],Y=_(k);typeof k=="number"||typeof k=="boolean"?(G.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,q+P,G.__data)):k.isMatrix3?(G.__data[0]=k.elements[0],G.__data[1]=k.elements[1],G.__data[2]=k.elements[2],G.__data[3]=0,G.__data[4]=k.elements[3],G.__data[5]=k.elements[4],G.__data[6]=k.elements[5],G.__data[7]=0,G.__data[8]=k.elements[6],G.__data[9]=k.elements[7],G.__data[10]=k.elements[8],G.__data[11]=0):(k.toArray(G.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,R,L){const C=y.value,A=x+"_"+R;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const W=L[A];if(typeof C=="number"||typeof C=="boolean"){if(W!==C)return L[A]=C,!0}else if(W.equals(C)===!1)return W.copy(C),!0}return!1}function g(y){const x=y.uniforms;let R=0;const L=16;for(let A=0,W=x.length;A<W;A++){const S=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,G=S.length;b<G;b++){const q=S[b],le=Array.isArray(q.value)?q.value:[q.value];for(let P=0,I=le.length;P<I;P++){const k=le[P],Y=_(k),X=R%L;X!==0&&L-X<Y.boundary&&(R+=L-X),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=R,R+=Y.storage}}}const C=R%L;return C>0&&(R+=L-C),y.__size=R,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const R=o.indexOf(x.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class yp{constructor(e={}){const{canvas:t=gc(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const h=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const x=this;let R=!1,L=0,C=0,A=null,W=-1,S=null;const b=new tt,G=new tt;let q=null;const le=new Ye(0);let P=0,I=t.width,k=t.height,Y=1,X=null,V=null;const J=new tt(0,0,I,k),te=new tt(0,0,I,k);let he=!1;const H=new Ro;let K=!1,ue=!1,ve=null;const ge=new ht,Ce=new Ae,Pe=new U,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return A===null?Y:1}let N=n;function ot(M,D){for(let B=0;B<M.length;B++){const z=M[B],O=t.getContext(z,D);if(O!==null)return O}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hs}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",ie,!1),N===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),N=ot(D,M),N===null)throw ot(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Se,we,pe,Ze,Le,E,v,F,ee,$,Q,me,ce,fe,be,Ie,Z,Ve,T,j,ae,ne,_e,ze;function We(){Se=new Ld(N),we=new bd(N,Se,e),Se.init(we),ne=new _p(N,Se,we),pe=new mp(N,Se,we),Ze=new Id(N),Le=new tp,E=new gp(N,Se,pe,Le,we,ne,Ze),v=new Ad(x),F=new Pd(x),ee=new Hc(N,we),_e=new Ed(N,Se,ee,we),$=new Dd(N,ee,Ze,_e),Q=new Bd(N,$,ee,Ze),T=new Od(N,we,E),Ie=new Td(Le),me=new ep(x,v,F,Se,we,_e,Ie),ce=new Sp(x,Le),fe=new ip,be=new cp(Se,we),Ve=new Sd(x,v,F,pe,Q,f,l),Z=new pp(x,Q,we),ze=new Ep(N,Ze,we,pe),j=new yd(N,Se,Ze,we),ae=new Ud(N,Se,Ze,we),Ze.programs=me.programs,x.capabilities=we,x.extensions=Se,x.properties=Le,x.renderLists=fe,x.shadowMap=Z,x.state=pe,x.info=Ze}We();const Oe=new Mp(x,N);this.xr=Oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(I,k,!1))},this.getSize=function(M){return M.set(I,k)},this.setSize=function(M,D,B=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=M,k=D,t.width=Math.floor(M*Y),t.height=Math.floor(D*Y),B===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(I*Y,k*Y).floor()},this.setDrawingBufferSize=function(M,D,B){I=M,k=D,Y=B,t.width=Math.floor(M*B),t.height=Math.floor(D*B),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,D,B,z){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,D,B,z),pe.viewport(b.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,D,B,z){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,D,B,z),pe.scissor(G.copy(te).multiplyScalar(Y).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(M){pe.setScissorTest(he=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(M=!0,D=!0,B=!0){let z=0;if(M){let O=!1;if(A!==null){const de=A.texture.format;O=de===fo||de===ho||de===uo}if(O){const de=A.texture.type,Me=de===nn||de===dn||de===ds||de===Cn||de===lo||de===co,Te=Ve.getClearColor(),Re=Ve.getClearAlpha(),Be=Te.r,De=Te.g,Ne=Te.b;Me?(m[0]=Be,m[1]=De,m[2]=Ne,m[3]=Re,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=Be,g[1]=De,g[2]=Ne,g[3]=Re,N.clearBufferiv(N.COLOR,0,g))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),fe.dispose(),be.dispose(),Le.dispose(),v.dispose(),F.dispose(),Q.dispose(),_e.dispose(),ze.dispose(),me.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",vt),Oe.removeEventListener("sessionend",Ke),ve&&(ve.dispose(),ve=null),xt.stop()};function se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=Ze.autoReset,D=Z.enabled,B=Z.autoUpdate,z=Z.needsUpdate,O=Z.type;We(),Ze.autoReset=M,Z.enabled=D,Z.autoUpdate=B,Z.needsUpdate=z,Z.type=O}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function re(M){const D=M.target;D.removeEventListener("dispose",re),Ee(D)}function Ee(M){xe(M),Le.remove(M)}function xe(M){const D=Le.get(M).programs;D!==void 0&&(D.forEach(function(B){me.releaseProgram(B)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,B,z,O,de){D===null&&(D=ye);const Me=O.isMesh&&O.matrixWorld.determinant()<0,Te=Ko(M,D,B,z,O);pe.setMaterial(z,Me);let Re=B.index,Be=1;if(z.wireframe===!0){if(Re=$.getWireframeAttribute(B),Re===void 0)return;Be=2}const De=B.drawRange,Ne=B.attributes.position;let nt=De.start*Be,wt=(De.start+De.count)*Be;de!==null&&(nt=Math.max(nt,de.start*Be),wt=Math.min(wt,(de.start+de.count)*Be)),Re!==null?(nt=Math.max(nt,0),wt=Math.min(wt,Re.count)):Ne!=null&&(nt=Math.max(nt,0),wt=Math.min(wt,Ne.count));const ct=wt-nt;if(ct<0||ct===1/0)return;_e.setup(O,z,Te,B,Re);let qt,Je=j;if(Re!==null&&(qt=ee.get(Re),Je=ae,Je.setIndex(qt)),O.isMesh)z.wireframe===!0?(pe.setLineWidth(z.wireframeLinewidth*ke()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(O.isLine){let Ge=z.linewidth;Ge===void 0&&(Ge=1),pe.setLineWidth(Ge*ke()),O.isLineSegments?Je.setMode(N.LINES):O.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else O.isPoints?Je.setMode(N.POINTS):O.isSprite&&Je.setMode(N.TRIANGLES);if(O.isBatchedMesh)Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Je.renderInstances(nt,ct,O.count);else if(B.isInstancedBufferGeometry){const Ge=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_r=Math.min(B.instanceCount,Ge);Je.renderInstances(nt,ct,_r)}else Je.render(nt,ct)};function Xe(M,D,B){M.transparent===!0&&M.side===Qt&&M.forceSinglePass===!1?(M.side=bt,M.needsUpdate=!0,Ai(M,D,B),M.side=gn,M.needsUpdate=!0,Ai(M,D,B),M.side=Qt):Ai(M,D,B)}this.compile=function(M,D,B=null){B===null&&(B=M),p=be.get(B),p.init(),y.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==B&&M.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(x._useLegacyLights);const z=new Set;return M.traverse(function(O){const de=O.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Te=de[Me];Xe(Te,B,O),z.add(Te)}else Xe(de,B,O),z.add(de)}),y.pop(),p=null,z},this.compileAsync=function(M,D,B=null){const z=this.compile(M,D,B);return new Promise(O=>{function de(){if(z.forEach(function(Me){Le.get(Me).currentProgram.isReady()&&z.delete(Me)}),z.size===0){O(M);return}setTimeout(de,10)}Se.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let qe=null;function lt(M){qe&&qe(M)}function vt(){xt.stop()}function Ke(){xt.start()}const xt=new Co;xt.setAnimationLoop(lt),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(M){qe=M,Oe.setAnimationLoop(M),M===null?xt.stop():xt.start()},Oe.addEventListener("sessionstart",vt),Oe.addEventListener("sessionend",Ke),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(D),D=Oe.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,D,A),p=be.get(M,y.length),p.init(),y.push(p),ge.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(ge),ue=this.localClippingEnabled,K=Ie.init(this.clippingPlanes,ue),_=fe.get(M,h.length),_.init(),h.push(_),kt(M,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,V),this.info.render.frame++,K===!0&&Ie.beginShadows();const B=p.state.shadowsArray;if(Z.render(B,M,D),K===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(_,M),p.setupLights(x._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let O=0,de=z.length;O<de;O++){const Me=z[O];vs(_,M,Me,Me.viewport)}}else vs(_,M,D);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(x,M,D),_e.resetDefaultState(),W=-1,S=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function kt(M,D,B,z){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||H.intersectsSprite(M)){z&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);const Me=Q.update(M),Te=M.material;Te.visible&&_.push(M,Me,Te,B,Pe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||H.intersectsObject(M))){const Me=Q.update(M),Te=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Pe.copy(Me.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(Te)){const Re=Me.groups;for(let Be=0,De=Re.length;Be<De;Be++){const Ne=Re[Be],nt=Te[Ne.materialIndex];nt&&nt.visible&&_.push(M,Me,nt,B,Pe.z,Ne)}}else Te.visible&&_.push(M,Me,Te,B,Pe.z,null)}}const de=M.children;for(let Me=0,Te=de.length;Me<Te;Me++)kt(de[Me],D,B,z)}function vs(M,D,B,z){const O=M.opaque,de=M.transmissive,Me=M.transparent;p.setupLightsView(B),K===!0&&Ie.setGlobalState(x.clippingPlanes,B),de.length>0&&jo(O,de,D,B),z&&pe.viewport(b.copy(z)),O.length>0&&Ti(O,D,B),de.length>0&&Ti(de,D,B),Me.length>0&&Ti(Me,D,B),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function jo(M,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const de=we.isWebGL2;ve===null&&(ve=new _n(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?xi:nn,minFilter:vi,samples:de?4:0})),x.getDrawingBufferSize(Ce),de?ve.setSize(Ce.x,Ce.y):ve.setSize(cr(Ce.x),cr(Ce.y));const Me=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(le),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Te=x.toneMapping;x.toneMapping=mn,Ti(M,B,z),E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve);let Re=!1;for(let Be=0,De=D.length;Be<De;Be++){const Ne=D[Be],nt=Ne.object,wt=Ne.geometry,ct=Ne.material,qt=Ne.group;if(ct.side===Qt&&nt.layers.test(z.layers)){const Je=ct.side;ct.side=bt,ct.needsUpdate=!0,xs(nt,B,z,wt,ct,qt),ct.side=Je,ct.needsUpdate=!0,Re=!0}}Re===!0&&(E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve)),x.setRenderTarget(Me),x.setClearColor(le,P),x.toneMapping=Te}function Ti(M,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let O=0,de=M.length;O<de;O++){const Me=M[O],Te=Me.object,Re=Me.geometry,Be=z===null?Me.material:z,De=Me.group;Te.layers.test(B.layers)&&xs(Te,D,B,Re,Be,De)}}function xs(M,D,B,z,O,de){M.onBeforeRender(x,D,B,z,O,de),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(x,D,B,z,M,de),O.transparent===!0&&O.side===Qt&&O.forceSinglePass===!1?(O.side=bt,O.needsUpdate=!0,x.renderBufferDirect(B,D,z,O,M,de),O.side=gn,O.needsUpdate=!0,x.renderBufferDirect(B,D,z,O,M,de),O.side=Qt):x.renderBufferDirect(B,D,z,O,M,de),M.onAfterRender(x,D,B,z,O,de)}function Ai(M,D,B){D.isScene!==!0&&(D=ye);const z=Le.get(M),O=p.state.lights,de=p.state.shadowsArray,Me=O.state.version,Te=me.getParameters(M,O.state,de,D,B),Re=me.getProgramCacheKey(Te);let Be=z.programs;z.environment=M.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(M.isMeshStandardMaterial?F:v).get(M.envMap||z.environment),Be===void 0&&(M.addEventListener("dispose",re),Be=new Map,z.programs=Be);let De=Be.get(Re);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===Me)return Ss(M,Te),De}else Te.uniforms=me.getUniforms(M),M.onBuild(B,Te,x),M.onBeforeCompile(Te,x),De=me.acquireProgram(Te,Re),Be.set(Re,De),z.uniforms=Te.uniforms;const Ne=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=Ie.uniform),Ss(M,Te),z.needsLights=$o(M),z.lightsStateVersion=Me,z.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function Ms(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=tr.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Ss(M,D){const B=Le.get(M);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Ko(M,D,B,z,O){D.isScene!==!0&&(D=ye),E.resetTextureUnits();const de=D.fog,Me=z.isMeshStandardMaterial?D.environment:null,Te=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:rn,Re=(z.isMeshStandardMaterial?F:v).get(z.envMap||Me),Be=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ne=!!B.morphAttributes.position,nt=!!B.morphAttributes.normal,wt=!!B.morphAttributes.color;let ct=mn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ct=x.toneMapping);const qt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=qt!==void 0?qt.length:0,Ge=Le.get(z),_r=p.state.lights;if(K===!0&&(ue===!0||M!==S)){const Dt=M===S&&z.id===W;Ie.setState(z,M,Dt)}let Qe=!1;z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==_r.state.version||Ge.outputColorSpace!==Te||O.isBatchedMesh&&Ge.batching===!1||!O.isBatchedMesh&&Ge.batching===!0||O.isInstancedMesh&&Ge.instancing===!1||!O.isInstancedMesh&&Ge.instancing===!0||O.isSkinnedMesh&&Ge.skinning===!1||!O.isSkinnedMesh&&Ge.skinning===!0||O.isInstancedMesh&&Ge.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ge.instancingColor===!1&&O.instanceColor!==null||Ge.envMap!==Re||z.fog===!0&&Ge.fog!==de||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ie.numPlanes||Ge.numIntersection!==Ie.numIntersection)||Ge.vertexAlphas!==Be||Ge.vertexTangents!==De||Ge.morphTargets!==Ne||Ge.morphNormals!==nt||Ge.morphColors!==wt||Ge.toneMapping!==ct||we.isWebGL2===!0&&Ge.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Ge.__version=z.version);let vn=Ge.currentProgram;Qe===!0&&(vn=Ai(z,D,O));let Es=!1,ui=!1,vr=!1;const ft=vn.getUniforms(),xn=Ge.uniforms;if(pe.useProgram(vn.program)&&(Es=!0,ui=!0,vr=!0),z.id!==W&&(W=z.id,ui=!0),Es||S!==M){ft.setValue(N,"projectionMatrix",M.projectionMatrix),ft.setValue(N,"viewMatrix",M.matrixWorldInverse);const Dt=ft.map.cameraPosition;Dt!==void 0&&Dt.setValue(N,Pe.setFromMatrixPosition(M.matrixWorld)),we.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ft.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,ui=!0,vr=!0)}if(O.isSkinnedMesh){ft.setOptional(N,O,"bindMatrix"),ft.setOptional(N,O,"bindMatrixInverse");const Dt=O.skeleton;Dt&&(we.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),ft.setValue(N,"boneTexture",Dt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(ft.setOptional(N,O,"batchingTexture"),ft.setValue(N,"batchingTexture",O._matricesTexture,E));const xr=B.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0&&we.isWebGL2===!0)&&T.update(O,B,vn),(ui||Ge.receiveShadow!==O.receiveShadow)&&(Ge.receiveShadow=O.receiveShadow,ft.setValue(N,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(xn.envMap.value=Re,xn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ui&&(ft.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Zo(xn,vr),de&&z.fog===!0&&ce.refreshFogUniforms(xn,de),ce.refreshMaterialUniforms(xn,z,Y,k,ve),tr.upload(N,Ms(Ge),xn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(tr.upload(N,Ms(Ge),xn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ft.setValue(N,"center",O.center),ft.setValue(N,"modelViewMatrix",O.modelViewMatrix),ft.setValue(N,"normalMatrix",O.normalMatrix),ft.setValue(N,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Dt=z.uniformsGroups;for(let Mr=0,Jo=Dt.length;Mr<Jo;Mr++)if(we.isWebGL2){const ys=Dt[Mr];ze.update(ys,vn),ze.bind(ys,vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vn}function Zo(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function $o(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,D,B){Le.get(M.texture).__webglTexture=D,Le.get(M.depthTexture).__webglTexture=B;const z=Le.get(M);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const B=Le.get(M);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,B=0){A=M,L=D,C=B;let z=!0,O=null,de=!1,Me=!1;if(M){const Re=Le.get(M);Re.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):Re.__webglFramebuffer===void 0?E.setupRenderTarget(M):Re.__hasExternalTextures&&E.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture);const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const De=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[D])?O=De[D][B]:O=De[D],de=!0):we.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?O=Le.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?O=De[B]:O=De,b.copy(M.viewport),G.copy(M.scissor),q=M.scissorTest}else b.copy(J).multiplyScalar(Y).floor(),G.copy(te).multiplyScalar(Y).floor(),q=he;if(pe.bindFramebuffer(N.FRAMEBUFFER,O)&&we.drawBuffers&&z&&pe.drawBuffers(M,O),pe.viewport(b),pe.scissor(G),pe.setScissorTest(q),de){const Re=Le.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Re.__webglTexture,B)}else if(Me){const Re=Le.get(M.texture),Be=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,B||0,Be)}W=-1},this.readRenderTargetPixels=function(M,D,B,z,O,de,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){pe.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Re=M.texture,Be=Re.format,De=Re.type;if(Be!==It&&ne.convert(Be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=De===xi&&(Se.has("EXT_color_buffer_half_float")||we.isWebGL2&&Se.has("EXT_color_buffer_float"));if(De!==nn&&ne.convert(De)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===fn&&(we.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-z&&B>=0&&B<=M.height-O&&N.readPixels(D,B,z,O,ne.convert(Be),ne.convert(De),de)}finally{const Re=A!==null?Le.get(A).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(M,D,B=0){const z=Math.pow(2,-B),O=Math.floor(D.image.width*z),de=Math.floor(D.image.height*z);E.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,M.x,M.y,O,de),pe.unbindTexture()},this.copyTextureToTexture=function(M,D,B,z=0){const O=D.image.width,de=D.image.height,Me=ne.convert(B.format),Te=ne.convert(B.type);E.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,M.x,M.y,O,de,Me,Te,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,Me,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,M.x,M.y,Me,Te,D.image),z===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(M,D,B,z,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=M.max.x-M.min.x+1,Me=M.max.y-M.min.y+1,Te=M.max.z-M.min.z+1,Re=ne.convert(z.format),Be=ne.convert(z.type);let De;if(z.isData3DTexture)E.setTexture3D(z,0),De=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)E.setTexture2DArray(z,0),De=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Ne=N.getParameter(N.UNPACK_ROW_LENGTH),nt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),wt=N.getParameter(N.UNPACK_SKIP_PIXELS),ct=N.getParameter(N.UNPACK_SKIP_ROWS),qt=N.getParameter(N.UNPACK_SKIP_IMAGES),Je=B.isCompressedTexture?B.mipmaps[O]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Je.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(De,O,D.x,D.y,D.z,de,Me,Te,Re,Be,Je.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(De,O,D.x,D.y,D.z,de,Me,Te,Re,Je.data)):N.texSubImage3D(De,O,D.x,D.y,D.z,de,Me,Te,Re,Be,Je),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ne),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qt),O===0&&z.generateMipmaps&&N.generateMipmap(De),pe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,pe.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fs?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===fr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?Ln:mo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ln?dt:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bp extends yp{}bp.prototype.isWebGL1Renderer=!0;class Tp extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ap extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Va=new ht,ls=new ms,Ki=new Ei,Zi=new U;class Fo extends Tt{constructor(e=new Ht,t=new Ap){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),Ki.radius+=s,e.ray.intersectsSphere(Ki)===!1)return;Va.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Va);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Zi.fromBufferAttribute(d,p),Wa(Zi,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Zi.fromBufferAttribute(d,g),Wa(Zi,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wa(i,e,t,n,r,s,o){const a=ls.distanceSqToPoint(i);if(a<t){const l=new U;ls.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Oo extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hs);const wp=`
  precision highp float;

  in vec3 position;

  void main() {
    gl_Position = vec4(position, 1.0);
  }
`,Bo=`
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_viewportOrigin;
uniform float u_visualAspect;
uniform float u_vortexAspect;
uniform int u_rotateSource;
uniform int u_vortexCount;
uniform float u_time;
uniform vec2 u_vortexPos[3];
uniform vec2 u_vortexVel[3];
uniform float u_vortexRadius[3];
uniform float u_vortexSpin[3];
uniform float u_speed;
uniform float u_vortexStrength;
uniform float u_ledStrength;
uniform float u_glow;
uniform int u_displayMode;
uniform int u_colorMode;
uniform float u_colorStyleMix;
uniform vec4 u_flowMix;
uniform float u_cellBoilMix;
uniform float u_cellStretchMix;
uniform float u_skinMix;
uniform float u_unevenCellMix;
uniform float u_fireflyEnabled;
uniform float u_hueCenter;
uniform float u_sectorHalfWidth;

out vec4 outColor;

#define PI 3.141592653589793

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec3 rgbToHsv(vec3 color) {
  vec4 k = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(color.bg, k.wz), vec4(color.gb, k.xy), step(color.b, color.g));
  vec4 q = mix(vec4(p.xyw, color.r), vec4(color.r, p.yzx), step(p.x, color.r));
  float delta = q.x - min(q.w, q.y);
  float epsilon = 1.0e-10;
  return vec3(
    abs(q.z + (q.w - q.y) / (6.0 * delta + epsilon)),
    delta / (q.x + epsilon),
    q.x
  );
}

vec3 hsvToRgb(vec3 hsv) {
  vec3 primary = abs(fract(hsv.xxx + vec3(0.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0);
  return hsv.z * mix(vec3(1.0), clamp(primary - 1.0, 0.0, 1.0), hsv.y);
}

vec3 sectorizeV1Color(vec3 rawColor) {
  vec3 hsv = rgbToHsv(clamp(rawColor, 0.0, 1.0));
  // The continuous triangle fold retains more local hue contrast than sine
  // while guaranteeing that every chromatic pixel stays in this panel's
  // rotating, disjoint sector. It also avoids one transcendental per pixel.
  float triangle = abs(fract(hsv.x + 0.25) * 2.0 - 1.0) * 2.0 - 1.0;
  float localHue = triangle * u_sectorHalfWidth;
  hsv.x = fract(u_hueCenter + localHue);
  return hsvToRgb(hsv);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
    mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.52;
  mat2 r = mat2(0.82, -0.57, 0.57, 0.82);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = r * p * 2.03 + 12.7;
    a *= 0.5;
  }
  return v;
}

vec2 rotate2(vec2 p, float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c) * p;
}

vec2 flowPatch(vec2 uv, vec2 center, vec2 dir, float radius, float phase) {
  vec2 d = uv - center;
  float wobble = fbm((uv + center) * 8.0 + vec2(phase * 0.07, -phase * 0.05));
  d += vec2(
    fbm(uv * 5.2 + phase * 0.06),
    fbm(uv * 4.7 - phase * 0.05 + 9.0)
  ) * 0.060 - 0.030;
  float m = smoothstep(radius * (0.95 + wobble * 0.28), radius * 0.16, length(d));
  float curl = sin((d.x * dir.y - d.y * dir.x) * 14.0 + phase + wobble * 5.0) * 0.5 + 0.5;
  vec2 tangent = normalize(vec2(-d.y, d.x) + 0.0001);
  vec2 bentDir = normalize(dir + tangent * (curl - 0.5) * 1.15 + vec2(d.y, -d.x) * 0.75);
  return bentDir * m * (0.30 + 0.42 * wobble);
}

float warpedVoronoi(vec2 p, float time, out float membrane, out float fill, out float ribs, out float idValue) {
  vec2 base = floor(p);
  vec2 f = fract(p);
  float cluster = fbm(base * 0.42 + time * 0.012);
  vec2 sizeSkew = vec2(
    mix(0.86, 1.34, hash12(base + 31.0)),
    mix(0.82, 1.42, hash12(base + 47.0))
  );
  float f1 = 20.0;
  float f2 = 20.0;
  vec2 nearest = vec2(0.0);
  idValue = 0.0;

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 cell = vec2(float(x), float(y));
      vec2 id = base + cell;
      vec2 jitter = vec2(hash12(id + 0.17), hash12(id + 9.41));
      jitter = 0.5 + (jitter - 0.5) * 0.64;
      jitter += 0.08 * vec2(
        sin(time * 0.23 + hash12(id + 2.0) * 6.283),
        cos(time * 0.19 + hash12(id + 5.0) * 6.283)
      );
      vec2 d = cell + jitter - f;
      float angle = (hash12(id + 3.7) - 0.5) * 1.7 + sin(time * 0.045 + hash12(id) * 6.0) * 0.22;
      d = rotate2(d, angle);
      float localCluster = mix(cluster, hash12(id + 21.0), 0.38);
      d *= vec2(0.78 + hash12(id + 6.1) * 0.28, 1.24 + hash12(id + 8.4) * 0.80);
      d *= mix(vec2(1.0), sizeSkew * mix(0.70, 1.38, localCluster), 0.24 + u_unevenCellMix * 0.42);
      float dist = dot(d, d);
      if (dist < f1) {
        f2 = f1;
        f1 = dist;
        nearest = d;
        idValue = hash12(id + 13.3);
      } else if (dist < f2) {
        f2 = dist;
      }
    }
  }

  float d1 = sqrt(f1);
  float edge = sqrt(f2) - d1;
  membrane = 1.0 - smoothstep(0.035, 0.145, edge);
  fill = 1.0 - smoothstep(0.30, 0.76, d1);
  float ribLine = sin(nearest.y * 14.0 + sin(nearest.x * 8.0 + time * 0.18) * 1.3);
  ribs = fill * (1.0 - membrane) * (1.0 - smoothstep(0.06, 0.24, abs(ribLine)));
  return d1;
}

// Color: main hue is controlled independently from shape/motion settings.
vec3 palette(float t, int mode, float time) {
  t = fract(t);
  vec3 blue1 = vec3(0.005, 0.025, 0.22);
  vec3 blue2 = vec3(0.00, 0.16, 0.95);
  vec3 blue3 = vec3(0.00, 0.86, 1.00);
  vec3 blue4 = vec3(0.86, 0.98, 1.00);
  vec3 blue = mix(blue1, blue2, smoothstep(0.08, 0.42, t));
  blue = mix(blue, blue3, smoothstep(0.35, 0.76, t));
  blue = mix(blue, blue4, pow(smoothstep(0.88, 1.0, t), 8.0) * 0.55);

  vec3 red1 = vec3(0.28, 0.00, 0.06);
  vec3 red2 = vec3(1.00, 0.02, 0.06);
  vec3 red3 = vec3(1.00, 0.00, 0.78);
  vec3 red4 = vec3(0.55, 1.00, 0.05);
  vec3 red = mix(red1, red2, smoothstep(0.04, 0.42, t));
  red = mix(red, red3, smoothstep(0.38, 0.72, t));
  red = mix(red, red4, smoothstep(0.76, 0.94, t) * (1.0 - smoothstep(0.95, 1.0, t)));
  red = mix(red, vec3(1.0, 0.86, 0.96), pow(smoothstep(0.94, 1.0, t), 9.0) * 0.38);

  vec3 hotA = vec3(0.02, 0.05, 0.16);
  vec3 hotB = vec3(1.00, 0.08, 0.78);
  vec3 hotC = vec3(1.00, 0.54, 0.02);
  vec3 hotD = vec3(0.62, 0.10, 1.00);
  vec3 hotE = vec3(0.00, 0.74, 0.95);
  vec3 vivid = mix(hotA, hotB, smoothstep(0.05, 0.24, t));
  vivid = mix(vivid, hotC, smoothstep(0.24, 0.48, t));
  vivid = mix(vivid, hotD, smoothstep(0.48, 0.70, t));
  vivid = mix(vivid, hotE, smoothstep(0.72, 0.90, t) * 0.70);
  vivid = mix(vivid, vec3(1.0), pow(smoothstep(0.90, 1.0, t), 6.0) * 0.50);
  vivid = pow(max(vivid, 0.0), vec3(0.62));

  vec3 green1 = vec3(0.02, 0.09, 0.025);
  vec3 green2 = vec3(0.00, 0.78, 0.20);
  vec3 green3 = vec3(0.12, 1.00, 0.78);
  vec3 green4 = vec3(0.80, 1.00, 0.14);
  vec3 green = mix(green1, green2, smoothstep(0.05, 0.40, t));
  green = mix(green, green3, smoothstep(0.38, 0.74, t));
  green = mix(green, green4, smoothstep(0.72, 0.94, t) * 0.55);

  vec3 yellow1 = vec3(0.18, 0.08, 0.01);
  vec3 yellow2 = vec3(1.00, 0.48, 0.02);
  vec3 yellow3 = vec3(1.00, 0.92, 0.18);
  vec3 yellow4 = vec3(0.00, 0.82, 0.70);
  vec3 yellow = mix(yellow1, yellow2, smoothstep(0.05, 0.40, t));
  yellow = mix(yellow, yellow3, smoothstep(0.34, 0.72, t));
  yellow = mix(yellow, yellow4, smoothstep(0.78, 0.96, t) * 0.34);

  vec3 white1 = vec3(0.72, 0.82, 0.90);
  vec3 white2 = vec3(1.00, 0.92, 0.78);
  vec3 white3 = vec3(0.88, 1.00, 0.96);
  vec3 pearl = mix(white1, white2, smoothstep(0.10, 0.56, t));
  pearl = mix(pearl, white3, smoothstep(0.48, 0.92, t));
  pearl = mix(pearl, vec3(1.0), pow(smoothstep(0.78, 1.0, t), 4.0) * 0.45);

  vec3 pink = mix(vec3(0.22, 0.00, 0.10), vec3(1.00, 0.00, 0.62), smoothstep(0.08, 0.50, t));
  pink = mix(pink, vec3(1.00, 0.48, 0.92), smoothstep(0.48, 0.84, t));
  pink = mix(pink, vec3(0.96, 0.98, 1.00), smoothstep(0.88, 1.0, t) * 0.34);

  vec3 purple = mix(vec3(0.05, 0.00, 0.20), vec3(0.48, 0.08, 1.00), smoothstep(0.08, 0.52, t));
  purple = mix(purple, vec3(1.00, 0.00, 0.78), smoothstep(0.50, 0.78, t) * 0.52);
  purple = mix(purple, vec3(0.00, 0.82, 1.00), smoothstep(0.78, 0.98, t) * 0.38);

  if (mode == 1) return blue;
  if (mode == 2) return red;
  if (mode == 3) return green;
  if (mode == 4) return yellow;
  if (mode == 5) return pearl;
  if (mode == 6) return pink;
  if (mode == 7) return purple;

  return vivid;
}

vec3 contrastAccent(float t, int mode) {
  t = fract(t);
  vec3 cyan = vec3(0.00, 0.92, 1.00);
  vec3 lime = vec3(0.52, 1.00, 0.02);
  vec3 magenta = vec3(1.00, 0.00, 0.82);
  vec3 orange = vec3(1.00, 0.38, 0.00);
  vec3 violet = vec3(0.50, 0.16, 1.00);
  vec3 pearl = vec3(0.96, 0.98, 1.00);

  if (mode == 1) return mix(mix(cyan, pearl, smoothstep(0.25, 0.58, t)), orange, smoothstep(0.72, 0.96, t) * 0.42);
  if (mode == 2) return mix(mix(cyan, lime, smoothstep(0.22, 0.62, t)), pearl, smoothstep(0.78, 0.98, t) * 0.55);
  if (mode == 3) return mix(mix(magenta, cyan, smoothstep(0.24, 0.62, t)), pearl, smoothstep(0.78, 0.98, t) * 0.45);
  if (mode == 4) return mix(mix(cyan, magenta, smoothstep(0.20, 0.58, t)), violet, smoothstep(0.70, 0.96, t) * 0.38);
  if (mode == 5) return mix(mix(cyan, magenta, smoothstep(0.20, 0.62, t)), lime, smoothstep(0.72, 0.96, t) * 0.30);
  if (mode == 6) return mix(mix(cyan, lime, smoothstep(0.20, 0.58, t)), pearl, smoothstep(0.70, 0.96, t) * 0.38);
  if (mode == 7) return mix(mix(orange, lime, smoothstep(0.20, 0.58, t)), cyan, smoothstep(0.72, 0.96, t) * 0.42);
  return palette(t, 0, 0.0);
}

vec3 analogPalette(float t, int mode) {
  t = fract(t);
  if (mode == 1) {
    return mix(mix(vec3(0.005, 0.015, 0.16), vec3(0.00, 0.20, 0.85), smoothstep(0.08, 0.52, t)), vec3(0.00, 0.78, 1.00), smoothstep(0.62, 0.96, t) * 0.55);
  }
  if (mode == 2) {
    return mix(mix(vec3(0.24, 0.00, 0.035), vec3(1.00, 0.02, 0.06), smoothstep(0.08, 0.48, t)), vec3(1.00, 0.00, 0.72), smoothstep(0.54, 0.96, t) * 0.62);
  }
  if (mode == 3) {
    return mix(mix(vec3(0.02, 0.08, 0.02), vec3(0.00, 0.68, 0.18), smoothstep(0.08, 0.52, t)), vec3(0.16, 1.00, 0.56), smoothstep(0.60, 0.96, t) * 0.52);
  }
  if (mode == 4) {
    return mix(mix(vec3(0.20, 0.08, 0.00), vec3(1.00, 0.42, 0.00), smoothstep(0.08, 0.50, t)), vec3(1.00, 0.88, 0.16), smoothstep(0.58, 0.96, t) * 0.58);
  }
  if (mode == 5) {
    return mix(mix(vec3(0.72, 0.80, 0.88), vec3(1.00, 0.92, 0.80), smoothstep(0.08, 0.56, t)), vec3(0.90, 1.00, 0.98), smoothstep(0.58, 0.96, t) * 0.50);
  }
  if (mode == 6) {
    return mix(mix(vec3(0.24, 0.00, 0.12), vec3(1.00, 0.00, 0.58), smoothstep(0.08, 0.52, t)), vec3(1.00, 0.42, 0.86), smoothstep(0.58, 0.96, t) * 0.55);
  }
  if (mode == 7) {
    return mix(mix(vec3(0.04, 0.00, 0.18), vec3(0.40, 0.08, 0.88), smoothstep(0.08, 0.52, t)), vec3(0.78, 0.18, 1.00), smoothstep(0.58, 0.96, t) * 0.50);
  }
  return palette(t, 0, 0.0);
}

vec2 panelUv(vec2 fragUv, out float inside, out float edge) {
  if (u_displayMode == 0) {
    inside = 1.0;
    edge = 0.0;
    return fragUv;
  }

  float screenAspect = u_resolution.x / u_resolution.y;
  float targetAspect = 0.265;
  vec2 size = vec2(targetAspect / screenAspect, 0.92);
  if (size.x > 0.54) {
    size.x = 0.54;
    size.y = size.x * screenAspect / targetAspect;
  }
  vec2 mn = 0.5 - size * 0.5;
  vec2 mx = 0.5 + size * 0.5;
  vec2 q = (fragUv - mn) / size;
  vec2 d = min(q, 1.0 - q);
  inside = step(0.0, d.x) * step(0.0, d.y);
  edge = inside * (1.0 - smoothstep(0.0, 0.018, min(d.x, d.y)));
  return q;
}

void main() {
  vec2 fragUv = (gl_FragCoord.xy - u_viewportOrigin) / u_resolution;
  float inside;
  float edge;
  vec2 uv = panelUv(fragUv, inside, edge);

  if (inside < 0.5) {
    float vignette = 1.0 - length(fragUv - 0.5) * 1.25;
    outColor = vec4(vec3(0.001, 0.002, 0.006) * max(vignette, 0.0), 1.0);
    return;
  }

  if (u_rotateSource == 1) {
    uv = vec2(uv.y, 1.0 - uv.x);
  }

  vec2 p = uv;
  float t = u_time * max(u_speed, 0.01);
  float visualAspect = u_visualAspect;

  vec2 coreP = uv;
  float hole = 0.0;
  float sink = 0.0;
  float lensBowl = 0.0;
  float innerInk = 0.0;
  float lensEnergy = 0.0;
  vec2 lensWarp = vec2(0.0);

  // Black-hole lensing: each dark circle bends the sampling domain before the fluid is generated.
  // The warp follows the circle velocity, so material in front is thrown into the wake.
  for (int i = 0; i < 3; i++) {
    if (i >= u_vortexCount) continue;
    vec2 vortexPos = u_vortexPos[i];
    if (u_rotateSource == 1) {
      vortexPos = vec2(vortexPos.y, 1.0 - vortexPos.x);
    }
    vec2 coreUv = coreP - vortexPos;
    // The fluid field and the displayed mesh do not share an aspect ratio.
    // Keep the V1 field tuning in u_visualAspect, but measure the event
    // horizon in the actual panel aspect so every black circle stays round.
    vec2 coreMetric = vec2(coreUv.x * u_vortexAspect, coreUv.y);
    float coreDist = length(coreMetric);
    float r = u_vortexRadius[i];
    float influence = 1.0 - smoothstep(r * 0.55, r * 2.50, coreDist);
    float mass = influence * (r * r) / (coreDist * coreDist + r * r * 0.34);
    mass = min(mass, 1.28);
    float horizonFade = smoothstep(r * 0.34, r * 0.78, coreDist);
    float flip = influence * horizonFade * (1.0 - smoothstep(r * 0.62, r * 2.50, coreDist));
    vec2 bendMetric = -coreMetric * flip * 0.48 * u_vortexStrength;
    bendMetric *= horizonFade;
    lensWarp += vec2(bendMetric.x / u_vortexAspect, bendMetric.y);
    lensEnergy += (flip + mass * 0.06) * horizonFade;

    float blackCore = 1.0 - smoothstep(r * 0.36, r * 0.43, coreDist);
    hole = max(hole, blackCore);
    innerInk = max(innerInk, 1.0 - smoothstep(r * 0.20, r * 0.38, coreDist));
    sink = max(sink, mass * 0.08 * (1.0 - blackCore));
    lensBowl = max(lensBowl, flip * 0.04 * (1.0 - blackCore));
  }

  float flowTurn = sin(t * 0.115) + 0.45 * sin(t * 0.047 + 1.7);
  float flowEpochTime = t * 0.070;
  float flowEpoch = floor(flowEpochTime);
  float epochBlend = smoothstep(0.18, 0.92, fract(flowEpochTime));
  float calmA = smoothstep(0.70, 0.90, hash12(vec2(flowEpoch, 8.73)));
  float calmB = smoothstep(0.70, 0.90, hash12(vec2(flowEpoch + 1.0, 8.73)));
  float calmGate = mix(calmA, calmB, epochBlend);
  float uniA = smoothstep(0.50, 0.72, hash12(vec2(flowEpoch, 2.17))) * (1.0 - calmA);
  float uniB = smoothstep(0.50, 0.72, hash12(vec2(flowEpoch + 1.0, 2.17))) * (1.0 - calmB);
  float uniGate = mix(uniA, uniB, epochBlend);
  float cellularGate = mix(
    smoothstep(0.56, 0.78, hash12(vec2(flowEpoch, 4.91))),
    smoothstep(0.56, 0.78, hash12(vec2(flowEpoch + 1.0, 4.91))),
    epochBlend
  );
  float surgeGate = mix(
    smoothstep(0.76, 0.94, hash12(vec2(flowEpoch, 6.34))),
    smoothstep(0.76, 0.94, hash12(vec2(flowEpoch + 1.0, 6.34))),
    epochBlend
  );
  float cellBoilGate = u_cellBoilMix;
  float cellStretchGate = u_cellStretchMix;
  float skinSurfaceGate = u_skinMix;
  float plainGate = 1.0 - clamp(u_flowMix.z + cellBoilGate + cellStretchGate, 0.0, 1.0);
  float forcedFlow = clamp(u_flowMix.x + u_flowMix.y + u_flowMix.z + u_flowMix.w + u_cellBoilMix + u_cellStretchMix, 0.0, 1.0);
  float autoFade = 1.0 - smoothstep(0.18, 0.92, forcedFlow);
  calmGate *= autoFade;
  uniGate *= autoFade;
  cellularGate *= autoFade;
  surgeGate *= autoFade;
  float waveMode = 0.5 + 0.5 * sin(t * 0.039);
  float cellMode = 0.5 + 0.5 * sin(t * 0.031 + 2.2);
  float divisionMode = pow(0.5 + 0.5 * sin(t * 0.021 + fbm(uv * 1.35) * 4.0), 3.0);
  float pulse = 0.5 + 0.5 * sin(t * 0.72 + fbm(uv * 2.4) * 2.6);
  calmGate = clamp(calmGate + u_flowMix.x, 0.0, 1.0);
  uniGate = clamp(uniGate + u_flowMix.y, 0.0, 1.0);
  cellularGate = clamp(cellularGate + u_flowMix.z + cellBoilGate + cellStretchGate, 0.0, 1.0);
  surgeGate = clamp(surgeGate + u_flowMix.w, 0.0, 1.0);
  float flowActivity = mix(1.0, 0.035, calmGate);
  waveMode = mix(waveMode, 1.0, uniGate * 0.85);
  divisionMode = mix(divisionMode, 1.0, cellularGate * 0.82 + cellBoilGate * 0.18);
  cellMode = mix(cellMode, 1.0, cellularGate * 0.72 + cellBoilGate * 0.20);
  pulse = mix(pulse, 1.0, surgeGate * 0.70);
  vec2 waveDir = normalize(vec2(sin(t * 0.041) * 0.7 + 0.9, cos(t * 0.037) * 0.6));
  float waveBend = fbm(uv * 3.0 + vec2(t * 0.014, -t * 0.010));
  float wave = sin(dot(uv, waveDir) * (12.0 + waveBend * 9.0) + t * (0.50 + waveMode * 0.55) + waveBend * 4.5);
  vec2 oilFlow = vec2(flowTurn * 0.22, cos(t * 0.083) * 0.11) * flowActivity;
  oilFlow += waveDir * wave * (0.010 + waveMode * 0.020 + uniGate * 0.075) * (1.0 - divisionMode * 0.45) * flowActivity;
  oilFlow += waveDir * uniGate * 0.16;
  vec2 oilShear = vec2((uv.y - 0.5) * sin(t * 0.071) * 0.20, (uv.x - 0.5) * cos(t * 0.053) * 0.10) * flowActivity * (1.0 - uniGate * 0.65);

  vec2 patchA = flowPatch(
    uv,
    vec2(0.52 + 0.19 * sin(t * 0.061), 0.24 + 0.14 * cos(t * 0.047)),
    normalize(vec2(cos(t * 0.19), sin(t * 0.13))),
    0.20 + 0.05 * sin(t * 0.043),
    t * 3.1
  );
  vec2 patchB = flowPatch(
    uv,
    vec2(0.47 + 0.17 * sin(t * 0.039 + 3.0), 0.70 + 0.12 * cos(t * 0.052)),
    normalize(vec2(-sin(t * 0.16), cos(t * 0.12))),
    0.17 + 0.04 * cos(t * 0.050),
    -t * 2.4
  );
  vec2 localSpill = patchA * (0.024 + 0.020 * pulse + surgeGate * 0.035) + patchB * (0.018 + 0.018 * (1.0 - pulse) + surgeGate * 0.026);
  localSpill *= mix(flowActivity, 2.4, surgeGate);

  p = uv + lensWarp + oilFlow + oilShear + localSpill;
  // Fluid: multiple motion regimes create waves, cell-like splitting, local spills, and a subtle pulse.
  vec2 warp = vec2(
    fbm(p * (2.45 + pulse * 0.28) + vec2(t * 0.038, -t * 0.026) + waveDir * waveMode * 0.35),
    fbm(p * (2.65 + cellMode * 0.38) + vec2(-9.4, 5.1) + vec2(-t * 0.033, t * 0.030))
  ) - 0.5;
  p += warp * (0.090 + pulse * 0.030 + surgeGate * 0.055) + localSpill * (0.48 + surgeGate * 0.62);

  vec2 q = p;
  q.x *= visualAspect * 2.9;
  float skinGate = cellularGate;
  // Material field: the oily domain comes first, then Voronoi is evaluated in
  // that bent space. This makes scales/cells stretch into chili-oil shapes
  // instead of drawing oil on top of unrelated Voronoi cells.
  float boilStability = cellBoilGate * cellularGate;
  float voronoiWarpAmount = mix(0.14 + surgeGate * 0.13, 0.060, skinGate);
  voronoiWarpAmount *= 1.0 - boilStability * 0.58;
  vec2 oilDomain = p + oilFlow * 0.42 + localSpill * 1.10 + lensWarp * 0.12;
  vec2 skinDomain = uv + lensWarp * 0.16 + warp * 0.10 + localSpill * 0.18;
  skinDomain = mix(skinDomain, uv + lensWarp * 0.10, boilStability * 0.72);
  oilDomain = mix(oilDomain, skinDomain, skinGate);
  vec2 flowDir = normalize(waveDir + vec2(
    fbm(uv * 1.7 + t * 0.010) - 0.5,
    fbm(uv * 1.9 - t * 0.012 + 4.0) - 0.5
  ) * 0.38);
  vec2 stretchDir = flowDir;
  vec2 stretchPerp = vec2(-stretchDir.y, stretchDir.x);
  vec2 centeredOil = oilDomain - 0.5;
  float stretchAmount = surgeGate * 0.24;
  vec2 vorUv = 0.5
    + stretchDir * dot(centeredOil, stretchDir) * (1.0 + stretchAmount)
    + stretchPerp * dot(centeredOil, stretchPerp) * (1.0 - stretchAmount * 0.20);
  float zoom = 1.0 + cellStretchGate * 1.45;
  vec2 zoomCenter = vec2(0.50 + 0.08 * sin(t * 0.037), 0.54 + 0.16 * cos(t * 0.029));
  vorUv = mix(vorUv, zoomCenter + (vorUv - zoomCenter) / zoom, cellStretchGate);
  vorUv += warp * mix(0.10, 0.034, skinGate) * (1.0 - cellStretchGate * skinGate * 0.55) * (1.0 - boilStability * 0.66);
  vec2 punchWarp = vec2(0.0);
  float punch = 0.0;
  vec2 pd0 = vec2((uv.x - 0.38) * visualAspect / 0.265, uv.y - 0.32);
  vec2 pd1 = vec2((uv.x - 0.62) * visualAspect / 0.265, uv.y - 0.56);
  vec2 pd2 = vec2((uv.x - 0.46) * visualAspect / 0.265, uv.y - 0.78);
  float pa0 = smoothstep(0.48, 0.98, sin(t * 1.25 + 1.7) * 0.5 + 0.5);
  float pa1 = smoothstep(0.48, 0.98, sin(t * 1.05 + 4.1) * 0.5 + 0.5);
  float pa2 = smoothstep(0.48, 0.98, sin(t * 0.92 + 6.2) * 0.5 + 0.5);
  float pm0 = exp(-dot(pd0, pd0) / 0.018) * pa0 * cellBoilGate;
  float pm1 = exp(-dot(pd1, pd1) / 0.022) * pa1 * cellBoilGate;
  float pm2 = exp(-dot(pd2, pd2) / 0.020) * pa2 * cellBoilGate;
  punchWarp += normalize(pd0 + vec2(0.0001)) * pm0 * 0.036;
  punchWarp += normalize(pd1 + vec2(0.0001)) * pm1 * 0.040;
  punchWarp += normalize(pd2 + vec2(0.0001)) * pm2 * 0.034;
  punch = max(pm0, max(pm1, pm2));
  punch *= 1.0 - smoothstep(0.18, 0.70, lensEnergy);
  punchWarp *= 1.0 - smoothstep(0.18, 0.70, lensEnergy);
  vorUv += punchWarp;
  vec2 vorWarp = vec2(
    fbm(vorUv * 2.2 + vec2(t * 0.020, -t * 0.014)),
    fbm(vorUv * 2.0 + vec2(-6.4, 3.1) + vec2(-t * 0.017, t * 0.019))
  ) - 0.5;
  vorWarp += (vec2(
    fbm(vorUv * 5.0 + vorWarp * 1.8 + 12.0),
    fbm(vorUv * 5.4 - vorWarp * 1.6 - 9.0)
  ) - 0.5) * mix(0.30, 0.105, skinGate) * (1.0 - cellStretchGate * skinGate * 0.50) * (1.0 - boilStability * 0.60);
  vec2 vorQ = vorUv + vorWarp * voronoiWarpAmount;
  vorQ.x *= visualAspect * mix(2.15 + surgeGate * 0.35, 2.55, skinGate);
  vorQ = mix(vorQ, vec2((uv.x - 0.5) * visualAspect * 2.55 + 0.5, uv.y), boilStability * 0.42);
  float preNoVortexBoil = 1.0 - smoothstep(0.020, 0.115, lensEnergy);
  vec2 pressureDirA = normalize(vec2(
    sin(uv.y * 8.0 + t * 0.21),
    cos(uv.x * 7.0 - t * 0.18)
  ) + 0.0001);
  vec2 pressureDirB = normalize(vec2(
    fbm(uv * vec2(2.2, 5.8) + vec2(-t * 0.012, t * 0.017)) - 0.5,
    fbm(uv * vec2(3.1, 4.6) + vec2(t * 0.016, t * 0.010) + 8.0) - 0.5
  ) + 0.0001);
  vec2 pressureDirC = normalize(mix(vec2(-pressureDirA.y, pressureDirA.x), pressureDirB, 0.45));
  float pressureCellA = fbm(uv * vec2(4.2, 10.5) + vec2(t * 0.010, -t * 0.012));
  float pressureCellB = fbm(uv * vec2(6.4, 7.2) + vec2(-t * 0.014, t * 0.009) + 17.0);
  vec2 pressureDirD = normalize(vec2(
    sin(uv.y * 9.0 + t * 0.31 + pressureCellB * 4.0),
    cos(uv.x * 7.0 - t * 0.27 + pressureCellA * 5.0)
  ) + pressureDirA * 0.25);
  float pressurePulseA = smoothstep(0.18, 0.92, sin(t * 0.82 + pressureCellA * 8.0) * 0.5 + 0.5);
  float pressurePulseB = smoothstep(0.24, 0.96, sin(t * 0.57 + pressureCellB * 10.5 + 2.4) * 0.5 + 0.5);
  float pressurePulseC = smoothstep(0.34, 0.98, sin(t * 1.08 + (pressureCellA - pressureCellB) * 7.0 + 5.1) * 0.5 + 0.5);
  float pressureMaskA = smoothstep(0.18, 0.78, pressureCellA) * (1.0 - smoothstep(0.92, 1.0, pressureCellA));
  float pressureMaskB = smoothstep(0.24, 0.72, pressureCellB) * (1.0 - smoothstep(0.86, 1.0, pressureCellB));
  float crossingMask = smoothstep(0.34, 0.80, pressureCellA + pressureCellB * 0.45);
  vec2 pressureWarp = (
    pressureDirA * pressurePulseA * pressureMaskA +
    pressureDirB * pressurePulseB * pressureMaskB * 0.72 +
    pressureDirC * pressurePulseC * pressureMaskA * pressureMaskB * 0.70 +
    pressureDirD * pressurePulseA * pressurePulseB * crossingMask * 0.52
  ) * preNoVortexBoil * cellBoilGate * cellularGate * 0.072;
  // Keep Cellular borders coherent during boil. The pulse should read as
  // lens/height pressure, not as melting Voronoi borders.
  vorQ += pressureWarp * 0.16;
  float vorMembrane;
  float vorFill;
  float vorRibs;
  float vorId;
  float vorCellScale = (3.25 + cellularGate * 2.75 + cellBoilGate * 3.0) * (1.0 - cellStretchGate * skinGate * 0.34);
  float stableCellTime = t * (1.0 - boilStability * 0.82);
  float vorDist = warpedVoronoi(vorQ * vorCellScale, stableCellTime, vorMembrane, vorFill, vorRibs, vorId);
  float baseVorMembrane = vorMembrane;
  // Boil: existing Voronoi cells rise and relax outside the black-hole lens
  // field. No extra colony layer is drawn; the current cell body gets height.
  float noVortexBoil = 1.0 - smoothstep(0.020, 0.115, lensEnergy);
  float boilId = vorId;
  float colonyField = vorFill;
  float boilRim = vorMembrane;
  float cellBeat = 0.5 + 0.5 * sin(
    t * (0.48 + vorId * 0.80)
    + vorId * 18.0
    + floor(vorId * 9.0)
    + pressureCellA * 2.2
    - pressureCellB * 1.6
  );
  float boilPulse = smoothstep(0.18, 0.96, cellBeat);
  boilPulse = pow(boilPulse, 1.35);
  float colonyRegion = smoothstep(0.18, 0.82, fbm(uv * 1.20 + vec2(t * 0.003, -t * 0.004)));
  float colonyMask = noVortexBoil * mix(0.74, 1.0, colonyRegion);
  float boilImpact = cellBoilGate * colonyMask * (0.22 + boilPulse * 0.92);
  float microMembrane = vorMembrane;
  float microFill = vorFill;
  float microRibs = vorRibs;
  float microId = vorId;
  vec2 idDir = normalize(vec2(hash12(vec2(vorId, 2.1)) - 0.5, hash12(vec2(vorId, 7.4)) - 0.5) + 0.0001);
  vec2 colonyDir = normalize(mix(idDir, pressureDirA + pressureDirB * 0.65 + pressureDirC * 0.55 + pressureDirD * 0.45, 0.56 + 0.34 * pressurePulseB) + 0.0001);
  vec2 cellLocal = vec2(dot(vorQ, colonyDir), dot(vorQ, vec2(-colonyDir.y, colonyDir.x)));
  float splitSeam = (1.0 - smoothstep(0.012, 0.055, abs(fract(cellLocal.x * (1.8 + vorId * 2.2) + vorId * 3.1) - 0.50))) * vorFill * boilImpact * smoothstep(0.78, 0.98, boilPulse) * 0.22;
  float colonyBulge = boilImpact * vorFill * (0.35 + vorFill * 0.82);
  float microDist = vorDist;
  float boilCells = colonyBulge * (0.88 + boilRim * 0.12);
  boilCells *= 1.0 - smoothstep(0.96, 1.0, vorMembrane);
  float boilBody = smoothstep(0.10, 0.66, boilCells);
  float lensRise = boilImpact * smoothstep(0.12, 0.88, vorFill) * (1.0 - smoothstep(0.86, 1.0, vorMembrane));
  vec2 lensGrad = vec2(dFdx(vorFill), dFdy(vorFill));
  vec2 lensDir = normalize(lensGrad * (0.55 + pressurePulseA * 0.28) + colonyDir * (0.0022 + pressurePulseB * 0.0030) + pressureDirC * pressurePulseC * 0.0024 + pressureDirD * crossingMask * 0.0020);
  float lensReturn = sin(boilPulse * 3.14159265);
  float directionFlutter = 0.72 + 0.28 * sin(t * 0.36 + vorId * 9.0 + pressureCellB * 3.0);
  vec2 boilLensWarp = lensDir * lensRise * lensReturn * directionFlutter * (0.095 + 0.155 * smoothstep(0.30, 0.95, vorFill));
  vorMembrane = max(vorMembrane, boilRim * boilImpact * 0.18);
  vorMembrane = max(vorMembrane, splitSeam * 0.18);
  vorRibs = max(vorRibs, boilRim * boilImpact * 0.16);
  float vorScaleMode = smoothstep(0.12, 0.88, cellularGate + surgeGate * 0.35);
  float stretchRemnant = smoothstep(0.58, 0.88, fbm(uv * 1.10 + flowDir * 0.36 + vec2(t * 0.008, -t * 0.005)));
  vorScaleMode *= mix(1.0, 0.46 + stretchRemnant * 0.20, cellStretchGate);
  vec2 skinQ = skinDomain;
  skinQ.x *= visualAspect * 2.9;
  q = mix(q, skinQ, skinGate * 0.86);
  q += boilLensWarp * (2.25 + cellularGate * 3.30);
  vec2 flowQ = vec2(sin(t * 0.093) * 0.55, cos(t * 0.067) * 0.30) + waveDir * wave * 0.22;
  float cellBlob = fbm(q * (2.75 + cellMode * 1.15) + flowQ + vec2(t * 0.034, -t * 0.042));
  float splitField = sin(cellBlob * 15.0 + fbm(q * 8.0 - t * 0.026) * 4.5 + t * 0.32);
  float cellWarp = fbm(q * (5.0 + cellMode * 1.6) + vec2(-4.0, 7.0) + warp * 2.7 + vec2(-t * 0.039, t * 0.032));
  float thick = fbm(q * (5.6 + pulse * 1.3) + vec2(sin(t * 0.040) * 0.55, t * 0.058) + cellBlob * (0.35 + cellMode * 0.42));
  float fineScale = mix(14.0, 7.5, plainGate);
  float fine = fbm(q * fineScale + warp * mix(2.8, 1.2, plainGate) + localSpill * mix(1.7, 0.35, plainGate) - vec2(t * 0.050, sin(t * 0.052) * 0.32));
  cellBlob = mix(cellBlob, vorFill * 0.62 + vorId * 0.38, vorScaleMode * 0.72);
  cellBlob = mix(cellBlob, vorFill * 0.62 + boilId * 0.18 + colonyBulge * 0.20, boilBody * 0.34);
  cellWarp = mix(cellWarp, 1.0 - vorMembrane * 0.58 + vorRibs * 0.22, vorScaleMode * 0.54);
  cellWarp = mix(cellWarp, max(cellWarp, 0.48 + colonyBulge * 0.64 - splitSeam * 0.22), boilBody * 0.56);
  thick = mix(thick, vorDist + vorRibs * 0.35, vorScaleMode * 0.45);
  thick = mix(thick, max(thick, 0.40 + colonyBulge * 0.70 - microDist * 0.08), boilBody * 0.46);
  float boil = (cellularGate * 0.32 + cellBoilGate * 1.75) * (
    0.5 + 0.5 * sin(fbm(q * (5.8 + cellBoilGate * 5.6) + vec2(t * 0.12, -t * 0.08) + microId * boilCells * 2.2) * 18.0 + t * (2.3 + cellBoilGate * 1.8))
  );
  float tubeField = sin(q.x * 13.0 + fbm(q * 3.0 + t * 0.030) * 7.0)
    + sin(q.y * 17.0 + fbm(q * 4.6 - t * 0.024) * 6.0)
    + sin((q.x + q.y) * 10.0 + thick * 8.0 + t * 0.40);
  float tubeLines = 1.0 - smoothstep(0.05, 0.42, abs(tubeField));
  float lineSuppression = 1.0 - vorScaleMode * 0.72;
  float tubeNetwork = tubeLines * cellularGate * 0.08 * lineSuppression * (1.0 - cellStretchGate * 0.92);
  float tubeCore = (1.0 - smoothstep(0.02, 0.16, abs(tubeField))) * 0.45
    * cellularGate * (0.58 + lineSuppression * 0.42);
  float bubbleField = fbm(q * (6.8 + cellBoilGate * 7.0) + vec2(sin(t * 0.35), cos(t * 0.29)) + cellBlob * 1.4 + vorId * cellBoilGate * 2.0 + microId * boilCells * 1.6);
  float heartbeat = 0.5 + 0.5 * sin(t * (2.15 + cellBoilGate * 1.9) + bubbleField * (8.0 + cellBoilGate * 4.0));
  heartbeat = smoothstep(0.28, 0.92, heartbeat);
  float bubblePush = smoothstep(0.48 - cellBoilGate * 0.10, 0.86, bubbleField) * (cellularGate + cellBoilGate * 0.85) * (0.38 + 0.62 * heartbeat);
  bubblePush = max(bubblePush, colonyBulge * (0.58 + heartbeat * 0.82));
  float vein = sin((q.y * 18.0 + thick * 8.5 + sin(q.x * 11.0 + t * 0.090) * 1.6 + wave * waveMode * 2.4));
  float bands = sin((q.x * 10.5 - q.y * 6.5) + thick * 10.0 + fine * 1.4 + splitField * cellMode * (0.9 + cellularGate * 1.8) + boil * 2.2 + sin(t * 0.060) * 1.7);
  float layer = smoothstep(-0.28, 0.46, bands + vein * 0.42);
  layer = mix(layer, smoothstep(-0.18, 0.62, sin((q.x * 2.6 + q.y * 1.8) + thick * 3.0 + t * 0.045)), plainGate * 0.72);
  float cellContour = fract(cellBlob * (4.2 + boilCells * 1.7) + cellWarp * (2.0 + boilCells * 0.55) + layer * 0.42 + microId * boilCells * 0.72);
  cellContour = mix(cellContour, fract(boilId * 4.7 + vorFill * 1.65 + boilRim * 0.28), boilBody * cellBoilGate * 0.12);
  float dividingMembrane = splitSeam * (0.72 + heartbeat * 0.28);
  float contourMembrane = 1.0 - smoothstep(0.018, 0.090, abs(cellContour - 0.50));
  contourMembrane *= 1.0 - cellularGate * (0.42 + cellBoilGate * 0.28);
  float stableMembrane = baseVorMembrane * vorScaleMode;
  float membrane = max(contourMembrane, stableMembrane);
  membrane = max(membrane, dividingMembrane * boilCells * 0.78);
  membrane = mix(membrane, max(boilRim * (0.72 + boilImpact * 0.14), splitSeam * 0.30), boilBody * cellBoilGate * 0.16);
  membrane = max(membrane, stableMembrane * (0.88 + cellBoilGate * 0.18));
  membrane = mix(membrane, membrane * 0.48 + smoothstep(0.42, 0.78, thick) * 0.18, skinSurfaceGate);
  membrane *= 1.0 - plainGate * 0.82;
  float whiteGel = smoothstep(0.78, 1.18, cellWarp + membrane * 0.38) * mix(1.0, 0.45, skinSurfaceGate);
  float blackPuddle = smoothstep(0.62, 0.91, fbm(q * 4.3 + 31.0)) * smoothstep(0.18, 0.76, 1.0 - cellWarp);
  blackPuddle = max(
    blackPuddle,
    smoothstep(0.56, 0.84, fbm(q * 5.2 + warp * 2.2 + vec2(t * 0.020, -t * 0.018))) * smoothstep(0.30, 0.92, 1.0 - thick) * 0.72
  );
  float blackSeason = smoothstep(0.20, 0.86, sin(t * 0.027 + hash12(vec2(floor(t * 0.045), 5.1)) * 4.0) * 0.5 + 0.5);
  blackPuddle = max(
    blackPuddle,
    smoothstep(0.46, 0.76, fbm(q * 7.2 + vec2(-t * 0.018, t * 0.015) + cellBlob * 1.6)) * smoothstep(0.22, 0.80, 1.0 - fine) * blackSeason
  );
  blackPuddle = max(blackPuddle, cellularGate * smoothstep(0.62, 0.92, 1.0 - bubbleField) * 0.34);
  blackPuddle = max(
    blackPuddle,
    vorScaleMode * vorMembrane * smoothstep(0.38, 0.88, 1.0 - vorId) * 0.38 * (1.0 - cellularGate * cellBoilGate * 0.64)
  );
  blackPuddle *= 1.0 - cellularGate * cellBoilGate * 0.34;
  blackPuddle *= 1.0 - stableMembrane * cellularGate * 0.20;
  blackPuddle *= mix(1.0, 0.28, plainGate);
  float darkChannel = smoothstep(0.48, 0.86, 1.0 - cellWarp) * (1.0 - membrane * 0.55) * (1.0 - whiteGel * 0.5);
  darkChannel = max(darkChannel, stableMembrane * (0.50 - cellularGate * cellBoilGate * 0.20));
  darkChannel *= 1.0 - boilBody * cellBoilGate * 0.58;
  darkChannel *= 1.0 - cellularGate * cellBoilGate * 0.18;
  darkChannel *= mix(1.0, 0.36, plainGate);
  // Organic depth: broad black-green vessels and small pores, closer to a
  // translucent skin/oil surface than a uniform Voronoi outline.
  vec2 vesselDir = normalize(vec2(0.32 + sin(t * 0.017) * 0.16, 1.0));
  vec2 vesselPerp = vec2(-vesselDir.y, vesselDir.x);
  vec2 vesselQ = vec2(dot(q, vesselDir), dot(q, vesselPerp));
  float vesselFlow = fbm(q * 1.35 + vec2(t * 0.010, -t * 0.008) + lensWarp * 0.35);
  float vesselLine = 1.0 - smoothstep(0.035, 0.22, abs(sin(vesselQ.x * 7.2 + vesselFlow * 5.6 + thick * 2.8)));
  vesselLine *= smoothstep(0.38, 0.76, fbm(q * 2.0 + vec2(-t * 0.009, t * 0.006)));
  vesselLine *= 1.0 - smoothstep(0.50, 0.86, whiteGel);
  float poreField = fbm(q * 9.0 + cellBlob * 2.2 + vec2(t * 0.018, -t * 0.015));
  float pores = smoothstep(0.72, 0.90, poreField) * smoothstep(0.28, 0.82, 1.0 - cellWarp);
  pores *= max(cellularGate, skinSurfaceGate) * (1.0 - plainGate * 0.70);
  vesselLine *= 1.0 + skinSurfaceGate * 0.65;
  pores *= 1.0 + skinSurfaceGate * 0.85;
  blackPuddle = max(blackPuddle, vesselLine * 0.56 + pores * 0.22);
  darkChannel = max(darkChannel, vesselLine * 0.72 + pores * 0.32);
  float noisyBoundary = 1.0 - smoothstep(0.018, 0.090, abs(fract(thick * 3.5 + fine * 1.2 + cellBlob * 1.8) - 0.5));
  noisyBoundary *= 1.0 - cellularGate * (0.36 + cellBoilGate * 0.24);
  float boundary = max(noisyBoundary, stableMembrane);
  boundary *= 1.0 - plainGate * 0.86;
  float cellIndex = floor((cellBlob * 5.5 + cellWarp * 3.0 + layer * 1.8 + vorId * vorScaleMode * 3.0)) / 8.0;
  float oil = fract(cellIndex + thick * 0.55 + fine * 0.22 + layer * 0.12);
  float divisionRegion = smoothstep(0.42, 0.78, fbm(uv * 1.9 + vec2(t * 0.006, -t * 0.007)));
  float divisionAmount = smoothstep(0.18, 0.82, divisionMode) * divisionRegion;
  float splitScale = mix(4.0, 8.5, cellMode) + boilCells * 5.5;
  float splitCell = fract((cellBlob * 1.35 + cellWarp * 0.95 + thick * 0.40) * splitScale);
  float splitMembrane = 1.0 - smoothstep(0.020, 0.095, abs(splitCell - 0.50));
  float splitFill = smoothstep(0.10, 0.36, splitCell) * (1.0 - smoothstep(0.64, 0.92, splitCell));
  float splitRibs = splitFill * (1.0 - smoothstep(0.06, 0.25, abs(sin(thick * 22.0 + cellWarp * 8.0 + t * 0.12 + boil * 1.8))));

  float analogBlackStyle = clamp(u_colorStyleMix, 0.0, 1.0);
  float contrastStyle = 1.0 - analogBlackStyle;
  float colorRate = mix(0.030, 0.055, contrastStyle);
  float colorEpoch = floor(t * colorRate);
  float colorPhase = fract(t * colorRate);
  float colorSwap = smoothstep(0.86, 0.98, hash12(vec2(colorEpoch, 12.4)));
  float colorSwapTarget = hash12(vec2(colorEpoch, 43.8)) * 1.45 - 0.36;
  float colorSwapEase = colorSwap * smoothstep(0.0, 0.28, colorPhase) * (1.0 - smoothstep(0.78, 1.0, colorPhase));
  float autoColor = float(u_colorMode == 0);
  float globalHue = (sin(t * 0.018) * 0.18 + sin(t * 0.007 + 2.1) * 0.14 + colorSwapTarget * colorSwapEase) * autoColor;
  float localHueDrift = fbm(uv * 1.2 + vec2(t * 0.006, -t * 0.004)) * mix(0.045, 0.22, contrastStyle + autoColor);
  // Color mode owns palette separation. Shape modes feed the coordinates, but
  // the color mode decides whether pigments stay restrained, vivid, or random.
  float pearlColorMode = float(u_colorMode == 5);
  float colorSeparation = mix(0.86, 0.46, analogBlackStyle);
  colorSeparation = mix(colorSeparation, 0.42, pearlColorMode);
  float colorBands = mix(8.0, 5.0, analogBlackStyle);
  float separatedOil = floor(fract(oil + layer * 0.22 + cellBlob * 0.10) * colorBands) / colorBands;
  float separatedUnder = floor(fract(oil + 0.43 + fine * 0.10) * colorBands) / colorBands;
  float colorEdge = smoothstep(0.42, 0.58, fract(oil * colorBands + thick * 0.18 + fine * 0.08));
  separatedOil = mix(oil, separatedOil, colorSeparation);
  separatedUnder = mix(oil + 0.42, separatedUnder, colorSeparation * 0.86);
  vec3 col = mix(palette(separatedOil + globalHue + localHueDrift, u_colorMode, u_time), analogPalette(separatedOil + globalHue + localHueDrift, u_colorMode), analogBlackStyle);
  vec3 under = mix(palette(separatedUnder + globalHue * 0.7, u_colorMode, u_time + 39.0), analogPalette(separatedUnder + globalHue * 0.7, u_colorMode), analogBlackStyle);
  vec3 cellColor = mix(
    palette(floor(fract(cellIndex + cellWarp * 0.18) * colorBands) / colorBands + localHueDrift + t * 0.010, u_colorMode, u_time + 12.0),
    analogPalette(floor(fract(cellIndex + cellWarp * 0.18) * colorBands) / colorBands + localHueDrift + t * 0.010, u_colorMode),
    analogBlackStyle
  );
  float accentField = fbm(q * 2.0 + warp * 0.42 + vec2(t * 0.014, -t * 0.010));
  float accentIsland = smoothstep(0.54, 0.74, accentField + 0.16 * sin(thick * 6.0 + t * 0.05));
  accentIsland *= 1.0 - smoothstep(0.86, 1.0, accentField);
  vec3 accentColor = contrastAccent(separatedOil + fine * 0.28 + localHueDrift, u_colorMode);
  col = mix(col, accentColor, contrastStyle * accentIsland * 0.42);
  cellColor = mix(cellColor, accentColor, contrastStyle * smoothstep(0.62, 0.90, cellWarp + accentField * 0.35) * 0.26);
  vec3 divisionBase = mix(vec3(0.92, 0.62, 0.24), vec3(0.52, 0.92, 0.56), smoothstep(0.18, 0.86, cellWarp + fine * 0.25));
  divisionBase = mix(divisionBase, vec3(1.0, 0.84, 0.44), splitRibs * 0.36);
  divisionBase *= 0.74 + 0.36 * splitFill;
  vec3 vorCellColor = mix(
    vec3(0.96, 0.62, 0.20),
    vec3(0.40, 0.95, 0.68),
    smoothstep(0.12, 0.92, vorId + cellWarp * 0.25)
  );
  vorCellColor = mix(vorCellColor, mix(palette(vorId + oil * 0.33 + localHueDrift, u_colorMode, u_time + 71.0), analogPalette(vorId + oil * 0.33 + localHueDrift, u_colorMode), analogBlackStyle), 0.42);
  vorCellColor *= 0.72 + vorFill * 0.40 + vorRibs * 0.18;
  col = mix(under * 0.42, col, max(colorEdge, 0.48 + 0.30 * layer));
  col = mix(col, cellColor, (0.24 + 0.24 * colorEdge) + 0.14 * smoothstep(0.35, 0.78, cellBlob));
  col = mix(col, mix(under, col, 0.56 + 0.18 * layer), plainGate * 0.72);
  col = mix(col, mix(palette(oil + 0.78, u_colorMode, u_time), analogPalette(oil + 0.78, u_colorMode), analogBlackStyle), boundary * 0.12);
  col = mix(col, vec3(0.56, 0.78, 0.66), membrane * (0.08 + analogBlackStyle * 0.035));
  col = mix(col, vec3(0.88, 0.96, 0.86), whiteGel * 0.045);
  col = mix(col, divisionBase, max(divisionAmount, boilCells * 0.28) * splitFill * 0.42);
  col = mix(col, vec3(0.012, 0.008, 0.004), max(splitMembrane * divisionAmount, splitSeam * 0.78) * 0.42);
  col = mix(col, vec3(0.07, 0.034, 0.014), max(splitRibs * divisionAmount, splitSeam * 0.38) * 0.24);
  col = mix(col, vec3(0.010, 0.007, 0.006), cellularGate * 0.14);
  vec3 boilBodyColor = mix(
    palette(boilId + localHueDrift + oil * 0.28, u_colorMode, u_time + 94.0),
    analogPalette(boilId + localHueDrift + oil * 0.28, u_colorMode),
    analogBlackStyle
  );
  float darkCellInterior = smoothstep(0.46, 0.86, blackPuddle + darkChannel * 0.72 + (1.0 - cellWarp) * 0.18);
  vec3 brightMembraneTint = mix(vec3(0.92, 0.96, 0.90), vec3(1.0, 0.78, 0.38), smoothstep(0.25, 0.85, vorId));
  vec3 darkMembraneTint = vec3(0.018, 0.009, 0.005);
  vec3 membraneTint = mix(darkMembraneTint, brightMembraneTint, darkCellInterior * (0.72 + cellBoilGate * 0.28));
  col = mix(col, boilBodyColor * (0.80 + colonyBulge * 0.42), boilBody * cellBoilGate * 0.38);
  col = mix(col, membraneTint, boilRim * boilImpact * 0.24);
  col += vec3(1.0, 0.80, 0.38) * pow(max(colonyBulge, 0.0), 2.3) * cellBoilGate * 0.18;
  vec3 skinTint = mix(vec3(0.035, 0.17, 0.075), vec3(0.00, 0.30, 0.24), smoothstep(0.20, 0.86, cellBlob));
  skinTint = mix(skinTint, vec3(0.03, 0.08, 0.20), smoothstep(0.58, 0.95, thick) * 0.45);
  col = mix(col, col * 0.42 + skinTint * 1.05, skinSurfaceGate * (0.34 + darkChannel * 0.18));
  vec3 tubeColor = mix(vec3(0.98, 0.72, 0.18), vec3(0.86, 0.08, 0.02), smoothstep(0.46, 0.90, oil));
  tubeColor = mix(tubeColor, contrastAccent(oil + 0.18 + localHueDrift, u_colorMode), contrastStyle * (0.26 + 0.18 * cellWarp));
  col = mix(col, tubeColor, tubeNetwork * (0.18 + bubblePush * 0.10));
  col += vec3(1.0, 0.78, 0.34) * tubeCore * (0.12 + bubblePush * 0.16);
  col = mix(col, vec3(0.012, 0.006, 0.004), cellularGate * (1.0 - tubeNetwork) * smoothstep(0.38, 0.82, 1.0 - cellWarp) * 0.24);
  // Voronoi composition: low warp reads as biological plates; high warp smears
  // the same cells into oil islands without drawing a regular grid.
  col = mix(col, vorCellColor, vorScaleMode * vorFill * (0.38 + cellularGate * 0.18));
  float edgeBrightWhenDark = smoothstep(0.42, 0.86, darkChannel + blackPuddle * 0.70);
  vec3 cellularEdgeColor = mix(
    vec3(0.004, 0.003, 0.002),
    mix(vec3(0.94, 0.96, 0.88), vec3(1.0, 0.70, 0.28), smoothstep(0.20, 0.90, vorId)),
    cellularGate * edgeBrightWhenDark * (0.55 + cellBoilGate * 0.35)
  );
  float continuousEdge = stableMembrane * cellularGate * (0.18 + cellBoilGate * 0.08);
  col = mix(col, cellularEdgeColor, max(vorScaleMode * vorMembrane * (0.13 + smoothstep(0.45, 0.95, 1.0 - vorId) * 0.14), continuousEdge));
  col += vec3(0.62, 0.88, 0.62) * vorRibs * vorScaleMode * 0.055;
  float blackMix = mix(0.40, 0.58, analogBlackStyle);
  blackMix = mix(blackMix, 0.46, pearlColorMode);
  vec3 deepOil = mix(vec3(0.002, 0.003, 0.007), vec3(0.005, 0.030, 0.014), smoothstep(0.20, 0.90, thick));
  col = mix(col, deepOil, blackPuddle * (blackMix + skinSurfaceGate * 0.10));
  col *= 1.0 - darkChannel * (0.44 + skinSurfaceGate * 0.16);
  float moodBlue = smoothstep(0.15, 0.75, sin(t * 0.013 + 0.4) * 0.5 + 0.5) * autoColor;
  float moodGreen = smoothstep(0.18, 0.82, sin(t * 0.011 + 2.5) * 0.5 + 0.5) * autoColor;
  float moodGold = smoothstep(0.20, 0.86, sin(t * 0.009 + 4.4) * 0.5 + 0.5) * autoColor;
  float moodWhite = pow(smoothstep(0.58, 0.98, sin(t * 0.006 + 1.3) * 0.5 + 0.5), 3.0) * autoColor;
  vec3 moodTint = normalize(vec3(0.20 + moodGold * 1.25, 0.28 + moodGreen * 1.10 + moodGold * 0.35, 0.24 + moodBlue * 1.35));
  col = mix(col, col * moodTint * 1.85, 0.30);
  float pearlMode = float(u_colorMode == 5);
  col = mix(col, vec3(0.92, 0.98, 1.0), moodWhite * smoothstep(0.52, 1.0, cellWarp + fine * 0.28) * 0.30);
  col = mix(col, palette(oil + 0.36 + localHueDrift, 0, u_time), pearlMode * (0.18 + boundary * 0.12 + splitRibs * 0.10));
  col = mix(col, vec3(0.94, 0.98, 1.0), pearlMode * whiteGel * 0.24);
  col = pow(max(col, 0.0), vec3(0.94));
  col = (col - 0.5) * mix(1.78, 1.46, skinSurfaceGate) + 0.5;
  float satLum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(satLum), col, 1.55);

  // Gloss/depth: height-derived normals create wet, raised fluid highlights.
  float height = cellBlob * 0.52 + thick * 0.48 + fine * 0.14 + membrane * 0.30 + layer * 0.16 + divisionAmount * splitFill * 0.40 + splitRibs * divisionAmount * 0.18 + boil * 0.18 + bubblePush * 0.62 + colonyBulge * 0.78 + lensRise * 1.75 + boilRim * boilImpact * 0.34 - splitSeam * 0.34 + tubeNetwork * 0.18 + vorMembrane * vorScaleMode * 0.50 + vorFill * vorScaleMode * 0.18 + vorRibs * vorScaleMode * 0.20;
  vec2 grad = vec2(dFdx(height), dFdy(height));
  vec3 normal = normalize(vec3(-grad * 34.0, 1.0));
  vec3 lightDir = normalize(vec3(-0.35, 0.5, 0.76));
  float spec = pow(max(dot(reflect(-lightDir, normal), vec3(0.0, 0.0, 1.0)), 0.0), 62.0);
  spec += pow(max(dot(normal, lightDir), 0.0), 18.0) * 0.16;
  spec *= 1.0;

  // Glow: firefly-like emitters appear sparsely and blink with irregular timing.
  vec2 cell = floor(uv * vec2(12.0, 32.0));
  float sparkleSeed = hash12(cell);
  vec2 cellUv = fract(uv * vec2(12.0, 32.0)) - 0.5;
  float fireflyCount = smoothstep(0.94, 0.995, hash12(cell + floor(t * 0.025)));
  float blink = 0.5 + 0.5 * sin(t * (0.18 + sparkleSeed * 0.42) + sparkleSeed * 20.0);
  blink = pow(smoothstep(0.34, 1.0, blink), 3.0);
  float glint = exp(-dot(cellUv, cellUv) * 28.0) * fireflyCount * blink * u_fireflyEnabled * 0.78;
  float microGlow = pow(max(fine - 0.78, 0.0), 2.0) * 0.55 * u_fireflyEnabled;

  float darkInk = smoothstep(0.72, 0.97, fbm(q * 12.0 + 19.0)) * smoothstep(0.16, 1.0, fine);
  col *= 1.0 - darkInk * 0.58;
  col += vec3(1.0, 0.98, 0.92) * spec * 1.35;
  col += vec3(0.88, 0.97, 1.0) * (glint + microGlow * 0.25) * u_glow * 3.2;

  // Vortex: final event horizon mask. No painted halo; the visible effect is the warped background.
  col = mix(col, vec3(0.0), max(hole, innerInk * 0.86));

  // LED texture: thin display structure, clamped so high GUI values stay usable.
  float ledAmount = min(u_ledStrength, 0.72);
  vec2 ledUv = uv * vec2(180.0, 320.0);
  vec2 ledCell = abs(fract(ledUv) - 0.5);
  float gridLine = max(smoothstep(0.475, 0.5, ledCell.x), smoothstep(0.475, 0.5, ledCell.y));
  float dotMask = 1.0 - smoothstep(0.15, 0.49, length(ledCell));
  float scan = 0.965 + 0.035 * sin(uv.y * 1600.0);
  col *= mix(1.0, 0.88 + dotMask * 0.17, ledAmount);
  col *= mix(1.0, 1.0 - gridLine * 0.20, ledAmount);
  col *= mix(1.0, scan, ledAmount * 0.38);

  float vignette = 1.0 - smoothstep(0.25, 0.86, length(uv - 0.5));
  col *= 0.66 + 0.50 * vignette;
  col = pow(max(col, 0.0), vec3(0.92));

  outColor = vec4(sectorizeV1Color(col), 1.0);
}
`,Rp=[.2,1.45,2.7,3.95,5.2],Cp=[.48,.38,.66,.58,.3],Pp=[.58,.42,.54,.34,.66],zo=Bo.replace("col = mix(col, vec3(0.0), max(hole, innerInk * 0.86));","col = mix(col, vec3(0.0), max(hole, innerInk * 0.86) * 0.0);");if(zo===Bo)throw new Error("The V1 event-horizon shader hook could not be found.");function cs(i,e){let t=(i^e)>>>0;return t=Math.imul(t^t>>>16,2146121005),t=Math.imul(t^t>>>15,2221713035),((t^t>>>16)>>>0)/4294967296}function Zr(i,e){return i.reduce((t,n,r)=>t+n*e[r],0)}function Lp(i,e,t){const n=Math.min(1,Math.max(0,t));return{phase:cs(i,2246822507)*47+11+Zr(Rp,e)+n*.72,lens:[Zr(Cp,e),Zr(Pp,e)],flowMix:[0,0,.18+n*.42,n*.08],layuMix:.06+n*.42,cellBoilMix:.08+n*.62,cellStretchMix:.04+n*.36,curlMix:.06+n*.46,skinMix:.42-n*.12,unevenCellMix:.26+n*.34}}function Dp(i,e){const t=new Ae(.5,.5);return{u_resolution:{value:new Ae(e,e)},u_viewportOrigin:{value:new Ae(0,0)},u_visualAspect:{value:1},u_rotateSource:{value:0},u_vortexCount:{value:1},u_time:{value:cs(i,1831565813)*41+7},u_vortexPos:{value:[t,new Ae(-10,-10),new Ae(-10,-10)]},u_vortexVel:{value:[new Ae,new Ae,new Ae]},u_vortexRadius:{value:[.12,0,0]},u_vortexSpin:{value:[cs(i,2654435769)>.5?1:-1,1,-1]},u_speed:{value:1},u_vortexStrength:{value:4.2},u_ledStrength:{value:.12},u_glow:{value:.54},u_displayMode:{value:0},u_colorMode:{value:5},u_colorStyleMix:{value:.28},u_flowMix:{value:new tt(0,0,.18,0)},u_layuMix:{value:.06},u_cellBoilMix:{value:.08},u_cellStretchMix:{value:.04},u_curlMix:{value:.06},u_skinMix:{value:.42},u_unevenCellMix:{value:.26},u_fireflyEnabled:{value:0},u_hueCenter:{value:.64},u_sectorHalfWidth:{value:.18}}}class Up{constructor(e,t=512){Ue(this,"texture");Ue(this,"scene",new Tp);Ue(this,"camera",new gs);Ue(this,"target");Ue(this,"material");Ue(this,"quad");Ue(this,"uniforms");Ue(this,"seed");Ue(this,"renderCount",0);this.seed=e>>>0,this.uniforms=Dp(e,t),this.target=new _n(t,t,{minFilter:yt,magFilter:yt,format:It,type:nn,depthBuffer:!1,stencilBuffer:!1}),this.target.texture.generateMipmaps=!1,this.target.texture.colorSpace=Pt,this.target.texture.name="view-driven-v1-typography-pattern",this.texture=this.target.texture,this.material=new Oo({uniforms:this.uniforms,vertexShader:wp,fragmentShader:zo,glslVersion:or,depthTest:!1,depthWrite:!1}),this.quad=new tn(new mr(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad)}update(e,t,n){const r=Lp(this.seed,t,n);this.uniforms.u_time.value=r.phase,this.uniforms.u_vortexPos.value[0].set(...r.lens),this.uniforms.u_flowMix.value.set(...r.flowMix),this.uniforms.u_layuMix.value=r.layuMix,this.uniforms.u_cellBoilMix.value=r.cellBoilMix,this.uniforms.u_cellStretchMix.value=r.cellStretchMix,this.uniforms.u_curlMix.value=r.curlMix,this.uniforms.u_skinMix.value=r.skinMix,this.uniforms.u_unevenCellMix.value=r.unevenCellMix;const s=e.getRenderTarget(),o=e.getViewport(new tt),a=e.getScissor(new tt),l=e.getScissorTest(),c=e.getClearColor(new Ye),u=e.getClearAlpha(),d=e.xr.enabled;e.xr.enabled=!1;try{e.setRenderTarget(this.target);const f=e.getPixelRatio();e.setViewport(0,0,this.target.width/f,this.target.height/f),e.setScissorTest(!1),e.setClearColor(460813,1),e.clear(!0,!0,!0),e.render(this.scene,this.camera),this.renderCount+=1}finally{e.setRenderTarget(s),e.setViewport(o),e.setScissor(a),e.setScissorTest(l),e.setClearColor(c,u),e.xr.enabled=d}}getSnapshot(){const e=this.uniforms.u_vortexPos.value[0];return{renderCount:this.renderCount,phase:this.uniforms.u_time.value,lens:[e.x,e.y]}}dispose(){this.quad.geometry.dispose(),this.material.dispose(),this.target.dispose()}}const At=["top","front","right","back","left"],Go={top:[0,1,0],front:[0,0,1],right:[1,0,0],back:[0,0,-1],left:[-1,0,0]},qa=1.35,Ip=[1,0,0,0,0];function Np(i){if(Array.isArray(i))return[i[0],i[1],i[2]];const e=i;return[e.x,e.y,e.z]}function Ya(){return{weights:Ip,dominant:"top",boundaryEnergy:0}}function Ho(i,e=qa){const[t,n,r]=Np(i),s=Math.hypot(t,n,r);if(![t,n,r,s].every(Number.isFinite)||s<=Number.EPSILON)return Ya();const o=Number.isFinite(e)&&e>0?e:qa,a=t/s,l=n/s,c=r/s,u=[Math.pow(Math.max(l,0),o),Math.pow(Math.max(c,0),o),Math.pow(Math.max(a,0),o),Math.pow(Math.max(-c,0),o),Math.pow(Math.max(-a,0),o)],d=u.reduce((p,h)=>p+h,0);if(!Number.isFinite(d)||d<=Number.EPSILON)return Ya();const f=[u[0]/d,u[1]/d,u[2]/d,u[3]/d,u[4]/d];let m=0;for(let p=1;p<f.length;p+=1)f[p]>f[m]&&(m=p);const g=f.reduce((p,h)=>p+h*h,0),_=Math.min(1,Math.max(0,1-g));return{weights:f,dominant:At[m],boundaryEnergy:_}}const gt=Object.freeze({minX:-1.18,maxX:1.18,minY:-.57,maxY:.57}),$r=24,$i=Math.SQRT2;function Fp(i,e){const t=new Uint8Array(e*e),n=gt.maxX-gt.minX,r=gt.maxY-gt.minY;for(let s=0;s<i.length;s+=2){const o=(i[s]-gt.minX)/n,a=(i[s+1]-gt.minY)/r,l=Math.round(o*(e-1)),c=Math.round(a*(e-1));for(let u=-1;u<=1;u+=1){const d=c+u;if(!(d<0||d>=e))for(let f=-1;f<=1;f+=1){const m=l+f;m<0||m>=e||(t[d*e+m]=1)}}}return t}function ja(i,e,t){const n=new Float32Array(i.length),r=e*4;for(let s=0;s<i.length;s+=1)n[s]=i[s]===t?0:r;for(let s=0;s<e;s+=1)for(let o=0;o<e;o+=1){const a=s*e+o;let l=n[a];o>0&&(l=Math.min(l,n[a-1]+1)),s>0&&(l=Math.min(l,n[a-e]+1),o>0&&(l=Math.min(l,n[a-e-1]+$i)),o+1<e&&(l=Math.min(l,n[a-e+1]+$i))),n[a]=l}for(let s=e-1;s>=0;s-=1)for(let o=e-1;o>=0;o-=1){const a=s*e+o;let l=n[a];o+1<e&&(l=Math.min(l,n[a+1]+1)),s+1<e&&(l=Math.min(l,n[a+e]+1),o>0&&(l=Math.min(l,n[a+e-1]+$i)),o+1<e&&(l=Math.min(l,n[a+e+1]+$i))),n[a]=l}return n}function Op(i,e){if(!Number.isInteger(e)||e<32)throw new Error(`Glyph SDF size must be an integer of at least 32; received ${e}.`);const t=Fp(i,e),n=ja(t,e,1),r=ja(t,e,0),s=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1){const l=.5+(t[o]?Math.min(r[o],$r):-Math.min(n[o],$r))/($r*2);s[o]=Math.round(Math.min(1,Math.max(0,l))*255)}return s}const Ka=.56,Bp=.78,Ji=.39,Qi=.72;function ko(i,e,t,n=0){const r=e*Ka,s=t*Ka;switch(i){case"top":return[r,Bp+n,-s];case"front":return[r,Ji+s,Qi+n];case"right":return[Qi+n,Ji+s,-r];case"back":return[-r,Ji+s,-Qi-n];case"left":return[-Qi-n,Ji+s,r]}}const zp=28672,Wt=Object.freeze({minX:-1.48,maxX:1.48,minY:-.86,maxY:.86}),ei=256,Gp=.068;function Xt(i,e){let t=(i^Math.imul(e+1,2654435769))>>>0;return t=Math.imul(t^t>>>16,2146121005),t=Math.imul(t^t>>>15,2221713035),((t^t>>>16)>>>0)/4294967296}function Za(i,e){let t=0,n=1/e,r=i;for(;r>0;)t+=r%e*n,r=Math.floor(r/e),n/=e;return t}function $a(i){return i-Math.floor(i)}function nr(i,e,t){const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)}function Hp(i,e,t,n){const r=Xt(n^1779033703,t)*Math.PI*2,s=Xt(n^3144134277,t)*Math.PI*2,o=i/Wt.maxX,a=e/Wt.maxY,l=Math.max(0,1-Math.pow(Math.max(Math.abs(o),Math.abs(a)),3.2)),c=Math.sin(e*5.1+r)*.045+Math.sin((i+e)*3.4-s)*.018,u=Math.sin(i*4.3+s)*.034+Math.cos((i-e)*3+r)*.014;return[i+c*l,e+u*l]}function kp(i,e,t){const n=i/Wt.maxX,r=e/Wt.maxY,s=Xt(t^1013904242,1)*Math.PI*2,o=Xt(t^2773480762,2)*Math.PI*2,a=i/1.3,l=e/.68,c=Math.atan2(l,a),u=Math.hypot(a,l)+Math.sin(c*3+s)*.06+Math.sin(c*7-o)*.034+Math.sin(c*11+s-o)*.017,d=1-nr(.82,1.13,u),f=n*.22+Math.sin(n*4.2+s)*.13+Math.sin(n*9.4-o)*.045,m=-.24-n*.16+Math.cos(n*5.8+o)*.1,g=Math.abs(r-f),_=Math.abs(r-m),p=Math.exp(-Math.pow(g/.205,1.55)),h=Math.exp(-Math.pow(_/.12,1.45))*.34,y=Math.hypot(n*.88,r*1.03),x=Math.exp(-Math.pow(y/.82,2.1))*.22,R=1-nr(.61,1.02,Math.abs(n)),L=1-nr(.7,1.04,Math.abs(r)),C=.72+.28*Math.sin(n*11+s)**2,A=Math.max(p*C,h)*R*L,W=Math.exp(-(Math.pow((n+.46)/.3,2)+Math.pow((r-.18)/.23,2)))*.28,S=Math.exp(-(Math.pow((n-.36)/.24,2)+Math.pow((r+.25)/.29,2)))*.24,b=Math.min(1,.34+Math.max(A*.72,x,W,S));return Math.min(1,Math.max(0,d*b))}function Vp(i,e,t){if(e<gt.minX||e>gt.maxX||t<gt.minY||t>gt.maxY)return 0;const n=(e-gt.minX)/(gt.maxX-gt.minX),r=(t-gt.minY)/(gt.maxY-gt.minY),s=Math.min(ei-1,Math.max(0,Math.round(n*(ei-1)))),o=Math.min(ei-1,Math.max(0,Math.round(r*(ei-1)))),a=i[o*ei+s]/255;return nr(.485,.535,a)}function Ja(i){let e=2166136261;for(const t of i)for(const n of t){const r=Math.round(n*1e6);e^=r,e=Math.imul(e,16777619)}return(e>>>0).toString(16).padStart(8,"0")}function Wp(i,e,t=zp,n){if(!Number.isInteger(t)||t<=0)throw new RangeError("Galaxy point count must be a positive integer.");const r=e>>>0,s=Wt.maxX-Wt.minX,o=Wt.maxY-Wt.minY,a=Xt(r^1359893119,0),l=Xt(r^2600822924,0),c=new Float32Array(t*2),u=new Float32Array(t*2),d=new Float32Array(t),f=new Float32Array(t),m=new Float32Array(t),g=new Float32Array(t);for(let y=0;y<t;y+=1){const x=y+1,R=$a(Za(x,2)+a),L=$a(Za(x,3)+l),C=Wt.minX+R*s,A=Wt.minY+L*o,W=y*2;c[W]=C,c[W+1]=A,u[W]=R,u[W+1]=L;const S=Xt(r^1541459225,y);d[y]=.58+Math.pow(S,2.1)*1.55,f[y]=Xt(r^3418070365,y),m[y]=Xt(r^1654270250,y),g[y]=kp(C,A,r)}const _={};for(let y=0;y<At.length;y+=1){const x=At[y],R=n?null:Op(i.byFace[x].positions,ei),L=new Float32Array(t*3),C=new Float32Array(t);for(let A=0;A<t;A+=1){const W=A*2,S=c[W],b=c[W+1],[G,q]=Hp(S,b,y,r),P=(Xt(r^Math.imul(y+1,521288629),A)*2-1)*Gp,I=ko(x,G,q,P),k=A*3;L[k]=I[0],L[k+1]=I[1],L[k+2]=I[2],C[A]=n?n(x,G,q):Vp(R,G,q)}_[x]={positions:L,membership:C}}const p=[u,d,f,m,g],h=At.flatMap(y=>[_[y].positions,_[y].membership]);return{seed:r,pointCount:t,byFace:_,fieldUv:u,sizeNoise:d,activation:f,paletteNoise:m,galaxyAffinity:g,structuralHash:Ja(p),layoutHash:Ja([...p,...h])}}const Xp=1.35,qp=`
  precision highp float;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform vec4 uWeightsA;
  uniform float uWeightLeft;
  uniform float uBoundaryEnergy;
  uniform float uPointScale;
  uniform float uFieldSpread;
  uniform float uParticleSize;
  uniform float uReadingElevation;

  in vec3 position;
  in vec3 aTarget0;
  in vec3 aTarget1;
  in vec3 aTarget2;
  in vec3 aTarget3;
  in vec3 aTarget4;
  in vec2 aFieldUv;
  in vec4 aMembershipA;
  in float aMembershipLeft;
  in vec4 aParticle;

  out vec2 vPatternUv;
  out float vMembership;
  out float vSizeNoise;
  out float vActivation;
  out float vPaletteNoise;
  out float vGalaxyAffinity;
  out float vBoundaryEnergy;

  void main() {
    vec4 shapeWeightsA = pow(max(uWeightsA, vec4(0.0)), vec4(2.15));
    float shapeWeightLeft = pow(max(uWeightLeft, 0.0), 2.15);
    float shapeWeightTotal = max(
      dot(shapeWeightsA, vec4(1.0)) + shapeWeightLeft,
      0.000001
    );
    shapeWeightsA /= shapeWeightTotal;
    shapeWeightLeft /= shapeWeightTotal;

    vec3 center0 = vec3(0.0, 0.78, 0.0);
    vec3 center1 = vec3(0.0, 0.39, 0.72);
    vec3 center2 = vec3(0.72, 0.39, 0.0);
    vec3 center3 = vec3(0.0, 0.39, -0.72);
    vec3 center4 = vec3(-0.72, 0.39, 0.0);
    vec3 target0 = center0 + (aTarget0 - center0) * uFieldSpread;
    vec3 target1 = center1 + (aTarget1 - center1) * uFieldSpread;
    vec3 target2 = center2 + (aTarget2 - center2) * uFieldSpread;
    vec3 target3 = center3 + (aTarget3 - center3) * uFieldSpread;
    vec3 target4 = center4 + (aTarget4 - center4) * uFieldSpread;
    // Optional generic reading layout. Rotate each complete side state toward
    // the viewer's upper ring, about the common object center, after spread.
    // A zero setting follows the default shader path unchanged.
    if (uReadingElevation > 0.0001) {
      float c = cos(uReadingElevation), s = sin(uReadingElevation);
      vec3 center = vec3(0.0, 0.39, 0.0);
      vec3 p1 = target1-center, p2 = target2-center;
      vec3 p3 = target3-center, p4 = target4-center;
      target1 = center + vec3(p1.x, c*p1.y+s*p1.z, -s*p1.y+c*p1.z);
      target2 = center + vec3(c*p2.x-s*p2.y, s*p2.x+c*p2.y, p2.z);
      target3 = center + vec3(p3.x, c*p3.y-s*p3.z, s*p3.y+c*p3.z);
      target4 = center + vec3(c*p4.x+s*p4.y, -s*p4.x+c*p4.y, p4.z);
    }
    vec3 body =
      target0 * shapeWeightsA.x +
      target1 * shapeWeightsA.y +
      target2 * shapeWeightsA.z +
      target3 * shapeWeightsA.w +
      target4 * shapeWeightLeft;

    float membership =
      dot(aMembershipA, shapeWeightsA) +
      aMembershipLeft * shapeWeightLeft;
    float phase = aParticle.z * 6.2831853 + dot(aFieldUv, vec2(13.4, 9.1));
    vec3 curl = vec3(
      sin(phase + body.y * 7.0),
      cos(phase * 1.17 + body.x * 5.0 - body.z * 3.0),
      sin(phase * 0.83 + body.z * 6.0)
    );
    float curlAmount = uBoundaryEnergy * uBoundaryEnergy *
      (0.018 + 0.040 * uBoundaryEnergy);
    body += curl * curlAmount * mix(0.42, 1.0, aParticle.z);

    vec4 viewPosition = modelViewMatrix * vec4(body, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = clamp(
      0.0125 * uPointScale / max(-viewPosition.z, 0.2) *
      aParticle.x * uParticleSize * (1.0 + uBoundaryEnergy * 0.12),
      1.0,
      11.0
    );

    vPatternUv = aFieldUv;
    vMembership = membership;
    vSizeNoise = aParticle.x;
    vActivation = aParticle.y;
    vPaletteNoise = aParticle.z;
    vGalaxyAffinity = aParticle.w;
    vBoundaryEnergy = uBoundaryEnergy;
  }
`,Yp=`
  precision highp float;

  uniform sampler2D uPattern;
  uniform float uDensity;
  uniform float uGalaxyConcentration;
  uniform float uSignalContrast;
  uniform float uOuterStars;
  uniform float uReadability;
  uniform float uFigureEmphasis;

  in vec2 vPatternUv;
  in float vMembership;
  in float vSizeNoise;
  in float vActivation;
  in float vPaletteNoise;
  in float vGalaxyAffinity;
  in float vBoundaryEnergy;
  out vec4 outColor;

  vec3 paletteColor(float selector, vec4 probabilities) {
    float first = probabilities.x;
    float second = first + probabilities.y;
    float third = second + probabilities.z;
    if (selector < first) return vec3(0.867, 0.976, 0.949);
    if (selector < second) return vec3(0.384, 0.863, 0.824);
    if (selector < third) return vec3(0.867, 0.545, 0.796);
    return vec3(0.529, 0.471, 0.824);
  }

  void main() {
    // Particle existence depends on the galaxy field only. Glyph membership is
    // deliberately absent, so text cannot emerge from density or opacity.
    float galaxyExponent = mix(0.55, 2.40, uGalaxyConcentration);
    float visibility = uDensity * pow(
      clamp(vGalaxyAffinity, 0.0, 1.0),
      galaxyExponent
    );
    vec2 fieldPoint = vec2(
      mix(-1.48, 1.48, vPatternUv.x),
      mix(-0.86, 0.86, vPatternUv.y)
    );
    float outerRadius = length(vec2(fieldPoint.x / 1.30, fieldPoint.y / 0.68));
    float outerEnvelope = smoothstep(0.94, 1.03, outerRadius) *
      (1.0 - smoothstep(1.08, 1.58, outerRadius));
    float outerJitter = pow(fract(
      vPaletteNoise * 37.719 + vPatternUv.x * 11.13 + vPatternUv.y * 7.17
    ), 3.2);
    float outerVisibility = uDensity * uOuterStars * outerEnvelope *
      mix(0.025, 0.19, outerJitter);
    visibility = max(visibility, outerVisibility);
    if (vActivation > visibility) discard;
    // Explicitly selected generic alternative: foreground survives while the
    // surrounding field keeps a deterministic 16% sample. This changes density,
    // unlike the inherited color-only presentation, and is disabled by default.
    if (uFigureEmphasis > 0.5) {
      float figure = smoothstep(0.08, 0.70, vMembership);
      float keep = mix(0.16, 1.0, figure);
      if (fract(vPaletteNoise * 61.731 + vActivation * 17.913) > keep) discard;
    }

    vec2 centered = gl_PointCoord * 2.0 - 1.0;
    float angle = atan(centered.y, centered.x);
    float liquidEdge = length(centered) +
      sin(angle * 3.0 + vPaletteNoise * 19.0) * 0.035 +
      sin(angle * 5.0 - vPaletteNoise * 11.0) * 0.018;
    if (liquidEdge > 1.0) discard;

    float galaxy = smoothstep(0.10, 0.86, vGalaxyAffinity);
    vec3 color;
    vec4 backgroundProbabilities = mix(
      vec4(0.02, 0.06, 0.42, 0.50),
      vec4(0.03, 0.08, 0.41, 0.48),
      galaxy
    );
    vec4 figureProbabilities = mix(
      vec4(0.48, 0.46, 0.04, 0.02),
      vec4(0.46, 0.48, 0.04, 0.02),
      galaxy
    );
    float backgroundSelector = fract(vPaletteNoise * 1.071 + 0.173);
    float figureSelector = fract(vPaletteNoise * 1.733 + 0.417);
    vec3 backgroundColor = paletteColor(backgroundSelector, backgroundProbabilities);
    vec3 figureColor = paletteColor(figureSelector, figureProbabilities);
    float ambiguityNoise = fract(vPaletteNoise * 83.271 + 0.371);
    float colorCarrier = smoothstep(-0.035, 0.035, ambiguityNoise);
    float figureSignal = clamp(
      vMembership * uSignalContrast * colorCarrier,
      0.0,
      1.0
    );
    color = mix(backgroundColor, figureColor, figureSignal);

    vec3 field = texture(uPattern, clamp(vPatternUv, vec2(0.018), vec2(0.982))).rgb;
    float fieldLuma = dot(field, vec3(0.299, 0.587, 0.114));
    color *= mix(
      0.78,
      1.09,
      smoothstep(0.10, 0.92, fieldLuma)
    );
    color = mix(color, color * 0.76 + field * 0.24, 0.055);

    float dome = sqrt(max(0.0, 1.0 - liquidEdge * liquidEdge));
    vec3 splatNormal = normalize(vec3(centered.x, -centered.y, dome + 0.08));
    vec3 lightDirection = normalize(vec3(-0.38, 0.58, 0.72));
    float wetHighlight = pow(max(dot(splatNormal, lightDirection), 0.0), 22.0);
    float edgeShade = mix(0.66, 1.0, smoothstep(0.0, 0.74, dome));
    color *= edgeShade;
    color = mix(color, vec3(0.90, 0.96, 1.0), 0.012 + vSizeNoise * 0.012);
    color += wetHighlight * vec3(0.72, 0.88, 1.0) * 0.28;
    color += pow(dome, 7.0) * vec3(0.07, 0.018, 0.10) * vBoundaryEnergy;

    // Optional, user-selected color candidates. Geometry, density and alpha
    // remain identical. Zero preserves the existing presentation exactly.
    if (uReadability > 0.5) {
      vec3 field = uReadability < 1.5 ? vec3(0.52, 0.59, 0.63)
        : uReadability < 2.5 ? vec3(0.10, 0.16, 0.20) : vec3(0.10, 0.25, 0.38);
      vec3 figure = uReadability < 1.5 ? vec3(0.04, 0.065, 0.08)
        : uReadability < 2.5 ? vec3(0.97, 0.95, 0.82) : vec3(0.95, 0.63, 0.17);
      color = mix(field, figure, clamp(vMembership, 0.0, 1.0));
    }
    outColor = vec4(color, 1.0);
  }
`;function jp(i){const e=i,t=Array.isArray(i)?i:[e.x,e.y,e.z],n=Math.hypot(t[0],t[1],t[2]);return!Number.isFinite(n)||n<=Number.EPSILON?[0,1,0]:[t[0]/n,t[1]/n,t[2]/n]}function Kp(i,e,t,n){return i===null||Math.abs(t-n)>1e-10?!1:i.every((r,s)=>Math.abs(r-e[s])<=1e-10)}function Zp(i){const e=new Ht;e.setAttribute("position",new et(new Float32Array(i.pointCount*3),3));for(let r=0;r<At.length;r+=1){const s=At[r];e.setAttribute(`aTarget${r}`,new et(i.byFace[s].positions,3))}e.setAttribute("aFieldUv",new et(i.fieldUv,2));const t=new Float32Array(i.pointCount*4);for(let r=0;r<4;r+=1){const s=i.byFace[At[r]].membership;for(let o=0;o<i.pointCount;o+=1)t[o*4+r]=s[o]}e.setAttribute("aMembershipA",new et(t,4)),e.setAttribute("aMembershipLeft",new et(i.byFace.left.membership,1));const n=new Float32Array(i.pointCount*4);for(let r=0;r<i.pointCount;r+=1){const s=r*4;n[s]=i.sizeNoise[r],n[s+1]=i.activation[r],n[s+2]=i.paletteNoise[r],n[s+3]=i.galaxyAffinity[r]}return e.setAttribute("aParticle",new et(n,4)),e.boundingSphere=new Ei(new U(0,.42,0),1.7),e}class $p{constructor(e,t,n,r,s,o){Ue(this,"root",new wn);Ue(this,"renderer");Ue(this,"seed");Ue(this,"data");Ue(this,"geometry");Ue(this,"material");Ue(this,"points");Ue(this,"pattern");Ue(this,"uniforms");Ue(this,"direction",[0,1,0]);Ue(this,"weights",[1,0,0,0,0]);Ue(this,"dominant","top");Ue(this,"boundaryEnergy",0);Ue(this,"sharpness",Xp);Ue(this,"lastPatternWeights",null);Ue(this,"lastPatternEnergy",Number.NaN);Ue(this,"updateCount",0);this.renderer=e,this.seed=n>>>0,this.data=Wp(t,this.seed,s,o);const a=Math.min(e.domElement.width,e.domElement.height);this.pattern=new Up(this.seed,a<700?256:320),this.geometry=Zp(this.data),this.uniforms={uWeightsA:{value:new tt(1,0,0,0)},uWeightLeft:{value:0},uBoundaryEnergy:{value:0},uPointScale:{value:1},uFieldSpread:{value:r.spread},uParticleSize:{value:r.particleSize},uReadingElevation:{value:0},uPattern:{value:this.pattern.texture},uDensity:{value:r.density},uGalaxyConcentration:{value:r.galaxyConcentration},uSignalContrast:{value:r.signalContrast},uOuterStars:{value:r.outerStars},uReadability:{value:0},uFigureEmphasis:{value:0}},this.material=new Oo({uniforms:this.uniforms,vertexShader:qp,fragmentShader:Yp,glslVersion:or,transparent:!1,depthTest:!0,depthWrite:!0,blending:Rn}),this.points=new Fo(this.geometry,this.material),this.points.name="five-direction-chromatic-galaxy-field",this.points.frustumCulled=!1,this.points.renderOrder=2,this.root.name="chromatic-galaxy-typography",this.root.add(this.points),this.setViewDirection(this.direction)}setReadability(e){this.uniforms.uReadability.value={current:0,ink:1,chalk:2,duotone:3}[e]}setFigureEmphasis(e){this.uniforms.uFigureEmphasis.value=e?1:0}setReadingElevation(e){this.uniforms.uReadingElevation.value=Math.max(0,Math.min(45,e))*Math.PI/180}setViewDirection(e){this.direction=jp(e);const t=Ho(this.direction,this.sharpness);return this.weights=t.weights,this.dominant=t.dominant,this.boundaryEnergy=t.boundaryEnergy,this.uniforms.uWeightsA.value.set(t.weights[0],t.weights[1],t.weights[2],t.weights[3]),this.uniforms.uWeightLeft.value=t.weights[4],this.uniforms.uBoundaryEnergy.value=t.boundaryEnergy,!Kp(this.lastPatternWeights,t.weights,this.lastPatternEnergy,t.boundaryEnergy)?(this.pattern.update(this.renderer,t.weights,t.boundaryEnergy),this.lastPatternWeights=[...t.weights],this.lastPatternEnergy=t.boundaryEnergy,this.updateCount+=1,!0):!1}setSharpness(e){return!Number.isFinite(e)||e<=0||Math.abs(e-this.sharpness)<=Number.EPSILON?!1:(this.sharpness=e,this.setViewDirection(this.direction))}setPointScale(e){Number.isFinite(e)&&e>0&&(this.uniforms.uPointScale.value=e)}setParameters(e){this.uniforms.uDensity.value=e.density,this.uniforms.uGalaxyConcentration.value=e.galaxyConcentration,this.uniforms.uFieldSpread.value=e.spread,this.uniforms.uParticleSize.value=e.particleSize,this.uniforms.uSignalContrast.value=e.signalContrast,this.uniforms.uOuterStars.value=e.outerStars}getDebugSnapshot(){return{seed:this.seed,pointCount:this.data.pointCount,layoutHash:this.data.layoutHash,structuralHash:this.data.structuralHash,direction:[...this.direction],weights:[...this.weights],dominant:this.dominant,boundaryEnergy:this.boundaryEnergy,updateCount:this.updateCount,patternRenderCount:this.pattern.getSnapshot().renderCount,drawCalls:1,attributeSlots:10,pointOpacity:1}}dispose(){this.root.remove(this.points),this.geometry.dispose(),this.material.dispose(),this.pattern.dispose()}}const Jp=Object.freeze({density:1,galaxyConcentration:.29,spread:.87,particleSize:.85,signalContrast:1,outerStars:0}),dm=new U(0,.95,0);function Vo(i,e,t){if(Math.abs(e)>1||Math.abs(t)>1)return 0;const n=Math.min(i.size-1,Math.max(0,Math.round((e+1)*.5*(i.size-1)))),r=Math.min(i.size-1,Math.max(0,Math.round((1-t)*.5*(i.size-1))));return i.pixels[r*i.size+n]/255}function Qp(i,e){const[t,n,r]=e;return i==="top"?[t/.9,-r/.9]:i==="front"?[t/.9,(n-.95)/.9]:i==="right"?[-r/.9,(n-.95)/.9]:i==="back"?[-t/.9,(n-.95)/.9]:[r/.9,(n-.95)/.9]}function Wo(i,e,t,n){const r=ko(i,e*.9/.56,t*.9/.56,0);return i==="top"?[r[0],.95+n,r[2]]:i==="front"?[r[0],r[1]-.39+.95,n]:i==="right"?[n,r[1]-.39+.95,r[2]]:i==="back"?[r[0],r[1]-.39+.95,-n]:[-n,r[1]-.39+.95,r[2]]}function em(i,e,t,n){const s=e*.88,o=t*.88,a=Math.pow(Math.max(.001,1-Math.pow(Math.abs(s),8)-Math.pow(Math.abs(o),8)),1/8),l=Wo(i,s,o,a*.9);return[l[0]*n,l[1],l[2]*n]}function Qa(i){return i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,(i|i<<1)&1431655765}function Xo(i,e){const t=[];for(let n=0;n<i.size;n++)for(let r=0;r<i.size;r++)i.pixels[n*i.size+r]>127&&t.push({u:r/(i.size-1)*2-1,v:1-n/(i.size-1)*2,key:Qa(r)|Qa(n)<<1});if(t.sort((n,r)=>n.key-r.key),!t.length)throw new Error(`${i.label}: 形が空です。入力かしきい値を調整してください。`);return Array.from({length:e},(n,r)=>{const s=t[Math.min(t.length-1,Math.floor((r+.5)/e*t.length))];return[s.u,s.v]})}function tm(i,e){const t=[];for(let n=0;n<e;n++)for(let r=0;r<e;r++)for(let s=0;s<e;s++){const o=[(s+.5)/e*1.8-.9,(n+.5)/e*1.8+.05,(r+.5)/e*1.8-.9];At.every((a,l)=>Vo(i[l],...Qp(a,o))>.5)&&t.push(...o)}return{positions:new Float32Array(t),candidates:e**3}}function qo(i){return[[1,3],[2,4]].map(([e,t])=>{let n=0,r=0;for(let s=0;s<i[e].size;s++)for(let o=0;o<i[e].size;o++){const a=i[e].size,l=i[e].pixels[s*a+o]>127,c=i[t].pixels[s*a+(a-1-o)]>127;(l||c)&&n++,l&&c&&r++}return n?r/n:1})}const nm=`
uniform vec3 uDirection; uniform float uContrast; uniform float uMode; uniform float uReveal; uniform float uSize;
uniform vec4 uWeights; uniform float uLeft;
attribute vec3 a0; attribute vec3 a1; attribute vec3 a2; attribute vec3 a3; attribute vec3 a4;
attribute vec3 aNormal; attribute float aInk; attribute vec3 aTint;
varying vec3 vColor; varying float vAlpha;
void main(){
 vec3 p=position;
 if(uMode<.5){ vec4 w=pow(uWeights,vec4(2.15)); float l=pow(uLeft,2.15); float total=dot(w,vec4(1.))+l; w/=total; l/=total; p=a0*w.x+a1*w.y+a2*w.z+a3*w.w+a4*l; }
 float d=dot(aNormal,uDirection);
 float signal=smoothstep(uReveal,uReveal+.22,d);
 vColor=uMode<.5?vec3(.88,.85,.77):uMode>1.5?vec3(.68,.80,.78):mix(vec3(.23,.30,.32),aTint,aInk*signal);
 if(uContrast>.5){vec3 bg=uContrast<1.5?vec3(.52,.59,.63):uContrast<2.5?vec3(.10,.16,.20):vec3(.10,.25,.38); vec3 fg=uContrast<1.5?vec3(.04,.065,.08):uContrast<2.5?vec3(.97,.95,.82):vec3(.95,.63,.17); vColor=mix(bg,fg,uMode<.5||uMode>1.5?1.:aInk*signal);}
 vAlpha=uMode>.5&&uMode<1.5?mix(.33,1.,aInk*signal):1.;
 vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
 gl_PointSize=clamp(uSize/max(-mv.z,.2),1.,8.);
}`,im="varying vec3 vColor; varying float vAlpha; void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard; gl_FragColor=vec4(vColor,vAlpha*(1.-smoothstep(.32,.5,r)));}";class fm{constructor(e){Ue(this,"root",new wn);Ue(this,"geometry",new Ht);Ue(this,"material");Ue(this,"pointCount",0);Ue(this,"generatedMs",0);Ue(this,"hullCandidates",0);Ue(this,"positionUpdates",0);Ue(this,"bounds",[]);Ue(this,"weights",[0,1,0,0,0]);Ue(this,"direction",new U(0,0,1));this.project=e;const t=performance.now(),{mode:n,budget:r,masks:s,depth:o}=e;let a;const l=[],c=[],u=[];if(n==="morph")this.pointCount=r,a=new Float32Array(r*3),At.forEach((m,g)=>{const _=Xo(s[g],r),p=new Float32Array(r*3);_.forEach(([h,y],x)=>p.set(Wo(m,h,y,.9),x*3)),this.geometry.setAttribute(`a${g}`,new et(p,3))});else if(n==="shell"){const m=Math.floor(Math.sqrt(r/5)),g=[];At.forEach((_,p)=>{for(let h=0;h<m;h++)for(let y=0;y<m;y++){const x=(y+.5)/m*2-1,R=1-(h+.5)/m*2;g.push(...em(_,x,R,o)),l.push(...Go[_]),c.push(Vo(s[p],x,R)),u.push(.92,.78,.51)}}),a=new Float32Array(g),this.pointCount=g.length/3}else{const m=tm(s,48);this.hullCandidates=m.candidates;const g=m.positions;this.pointCount=Math.min(r,g.length/3),a=new Float32Array(this.pointCount*3);for(let _=0;_<this.pointCount;_++)a.set(g.subarray(Math.floor(_/this.pointCount*g.length/3)*3,Math.floor(_/this.pointCount*g.length/3)*3+3),_*3)}if(this.geometry.setAttribute("position",new et(a,3)),n!=="morph")for(let m=0;m<5;m++)this.geometry.setAttribute(`a${m}`,new et(a,3));this.geometry.setAttribute("aNormal",new et(l.length?new Float32Array(l):new Float32Array(this.pointCount*3),3)),this.geometry.setAttribute("aInk",new et(c.length?new Float32Array(c):new Float32Array(this.pointCount),1)),this.geometry.setAttribute("aTint",new et(u.length?new Float32Array(u):new Float32Array(this.pointCount*3),3)),this.material=new sn({vertexShader:nm,fragmentShader:im,uniforms:{uDirection:{value:this.direction},uContrast:{value:{current:0,ink:1,chalk:2,duotone:3}[e.contrast??"current"]},uMode:{value:n==="morph"?0:n==="shell"?1:2},uReveal:{value:e.reveal},uSize:{value:10},uWeights:{value:new tt(0,1,0,0)},uLeft:{value:0}},transparent:!0,depthWrite:!1});const d=new Fo(this.geometry,this.material);d.frustumCulled=!1,this.root.add(d),this.geometry.computeBoundingBox();const f=this.geometry.boundingBox;f&&!f.isEmpty()&&(this.bounds=[...f.min.toArray(),...f.max.toArray()]),this.generatedMs=performance.now()-t}setView(e,t){this.direction.copy(e).normalize(),this.weights=Ho(this.direction).weights,this.material.uniforms.uWeights.value.set(...this.weights.slice(0,4)),this.material.uniforms.uLeft.value=this.weights[4],this.material.uniforms.uSize.value=t*(this.project.mode==="shell"?.035:.012)}snapshot(){return{mode:this.project.mode,pointCount:this.pointCount,weights:this.weights,generatedMs:this.generatedMs,positionUpdates:this.positionUpdates,fixedGeometry:this.project.mode!=="morph",bounds:this.bounds,attributeBytes:Object.values(this.geometry.attributes).reduce((e,t)=>e+t.array.byteLength,0),hullCandidates:this.hullCandidates,oppositeAgreement:qo(this.project.masks)}}dispose(){this.geometry.dispose(),this.material.dispose()}}function rm(i,e){if(i.length!==At.length||e.length!==At.length)throw new RangeError("Raster membership needs five masks and five scales.");const t={};return At.forEach((n,r)=>{const s=i[r],o=e[r];if(!Number.isInteger(s.size)||s.size<2||s.pixels.length!==s.size**2)throw new RangeError("Raster membership needs square masks with at least two pixels.");if(!Number.isFinite(o)||o<=0)throw new RangeError("Raster membership scale must be finite and positive.");t[n]={mask:s,scale:o}}),(n,r,s)=>{const{mask:o,scale:a}=t[n],l=r/a,c=s/a;if(!Number.isFinite(l)||!Number.isFinite(c)||Math.abs(l)>1||Math.abs(c)>1)return 0;const u=(l+1)*.5*(o.size-1),d=(1-c)*.5*(o.size-1),f=Math.floor(u),m=Math.floor(d),g=Math.min(o.size-1,f+1),_=Math.min(o.size-1,m+1),p=u-f,h=d-m,y=(x,R)=>o.pixels[R*o.size+x]>127?1:0;return(y(f,m)*(1-p)+y(g,m)*p)*(1-h)+(y(f,_)*(1-p)+y(g,_)*p)*h}}const us=35,hr=us*Math.PI/180;function pm(i,e){const t=new U(...Go[i]);return e&&i!=="top"&&t.multiplyScalar(Math.cos(hr)).setY(Math.sin(hr)),t}function sm(i,e){if(!e)return i;const t=i.clone().normalize(),n=Math.hypot(t.x,t.z);if(n<1e-8)return t;const r=Math.atan2(t.y,n),s=Math.max(0,(r-hr)/(Math.PI/2-hr))*Math.PI/2;return new U(t.x/n*Math.cos(s),Math.sin(s),t.z/n*Math.cos(s))}class mm{constructor(e,t){Ue(this,"root");Ue(this,"geometry",new Ht);Ue(this,"pointCount");Ue(this,"generatedMs");Ue(this,"field");this.project=t;const n=performance.now(),r=[],s=At.map((l,c)=>{const u=Xo(t.masks[c],16384);let d=.01,f=.01;u.forEach(([_,p])=>{d=Math.max(d,Math.abs(_)),f=Math.max(f,Math.abs(p))});const m=Math.min(1.1/d,.51/f),g=new Float32Array(u.length*2);return r.push(m),u.forEach(([_,p],h)=>g.set([_*m,p*m],h*2)),{face:l,text:t.masks[c].label,codepoints:[],advanceWidthEm:d*m*2,widthEm:d*m*2,heightEm:f*m*2,positions:g}}),o={};for(const l of s)o[l.face]={positions:l.positions};const a={byFace:o};this.field=new $p(e,a,42,Jp,t.budget,t.sampling==="raster"?rm(t.masks,r):void 0),this.field.setReadability(t.contrast??"current"),this.field.setFigureEmphasis(t.emphasis==="figure"),this.field.setReadingElevation(t.viewing==="raised"?us:0),this.root=new wn,this.field.root.position.y=.56,this.root.add(this.field.root),this.pointCount=t.budget,this.generatedMs=performance.now()-n}setView(e,t){this.field.setViewDirection(sm(e,this.project.viewing==="raised")),this.field.setPointScale(t)}snapshot(){const e=this.field.getDebugSnapshot();return{mode:"galaxy",pointCount:e.pointCount,weights:e.weights,generatedMs:this.generatedMs,positionUpdates:0,fixedGeometry:!1,bounds:[],attributeBytes:e.pointCount*116,hullCandidates:0,oppositeAgreement:qo(this.project.masks),sourceGenerator:"AmbientParticleField/createAmbientTargetData",layoutHash:e.layoutHash,sampling:this.project.sampling??"sdf",emphasis:this.project.emphasis??"field",viewing:this.project.viewing??"horizontal",readingElevationDeg:this.project.viewing==="raised"?us:0}}dispose(){this.geometry.dispose(),this.field.dispose()}}const eo={type:"change"},Jr={type:"start"},to={type:"end"},er=new ms,no=new hn,am=Math.cos(70*mc.DEG2RAD);class gm extends In{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:Fn.ROTATE,TWO:Fn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Q),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Q),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(eo),n.update(),s=r.NONE},this.update=(function(){const T=new U,j=new Un().setFromUnitVectors(e.up,new U(0,1,0)),ae=j.clone().invert(),ne=new U,_e=new Un,ze=new U,We=2*Math.PI;return function(se=null){const w=n.object.position;T.copy(w).sub(n.target),T.applyQuaternion(j),a.setFromVector3(T),n.autoRotate&&s===r.NONE&&G(S(se)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ie=n.minAzimuthAngle,re=n.maxAzimuthAngle;isFinite(ie)&&isFinite(re)&&(ie<-Math.PI?ie+=We:ie>Math.PI&&(ie-=We),re<-Math.PI?re+=We:re>Math.PI&&(re-=We),ie<=re?a.theta=Math.max(ie,Math.min(re,a.theta)):a.theta=a.theta>(ie+re)/2?Math.max(ie,a.theta):Math.min(re,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=V(a.radius):a.radius=V(a.radius*c),T.setFromSpherical(a),T.applyQuaternion(ae),w.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Ee=!1;if(n.zoomToCursor&&C){let xe=null;if(n.object.isPerspectiveCamera){const Xe=T.length();xe=V(Xe*c);const qe=Xe-xe;n.object.position.addScaledVector(R,qe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Xe=new U(L.x,L.y,0);Xe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ee=!0;const qe=new U(L.x,L.y,0);qe.unproject(n.object),n.object.position.sub(qe).add(Xe),n.object.updateMatrixWorld(),xe=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;xe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(xe).add(n.object.position):(er.origin.copy(n.object.position),er.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(er.direction))<am?e.lookAt(n.target):(no.setFromNormalAndCoplanarPoint(n.object.up,n.target),er.intersectPlane(no,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ee=!0);return c=1,C=!1,Ee||ne.distanceToSquared(n.object.position)>o||8*(1-_e.dot(n.object.quaternion))>o||ze.distanceToSquared(n.target)>0?(n.dispatchEvent(eo),ne.copy(n.object.position),_e.copy(n.object.quaternion),ze.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",fe),n.domElement.removeEventListener("pointerdown",Le),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",v),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Q),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Xa,l=new Xa;let c=1;const u=new U,d=new Ae,f=new Ae,m=new Ae,g=new Ae,_=new Ae,p=new Ae,h=new Ae,y=new Ae,x=new Ae,R=new U,L=new Ae;let C=!1;const A=[],W={};function S(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function b(T){const j=Math.abs(T)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*j)}function G(T){l.theta-=T}function q(T){l.phi-=T}const le=(function(){const T=new U;return function(ae,ne){T.setFromMatrixColumn(ne,0),T.multiplyScalar(-ae),u.add(T)}})(),P=(function(){const T=new U;return function(ae,ne){n.screenSpacePanning===!0?T.setFromMatrixColumn(ne,1):(T.setFromMatrixColumn(ne,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ae),u.add(T)}})(),I=(function(){const T=new U;return function(ae,ne){const _e=n.domElement;if(n.object.isPerspectiveCamera){const ze=n.object.position;T.copy(ze).sub(n.target);let We=T.length();We*=Math.tan(n.object.fov/2*Math.PI/180),le(2*ae*We/_e.clientHeight,n.object.matrix),P(2*ne*We/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(le(ae*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),P(ne*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function k(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(T,j){if(!n.zoomToCursor)return;C=!0;const ae=n.domElement.getBoundingClientRect(),ne=T-ae.left,_e=j-ae.top,ze=ae.width,We=ae.height;L.x=ne/ze*2-1,L.y=-(_e/We)*2+1,R.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function V(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function J(T){d.set(T.clientX,T.clientY)}function te(T){X(T.clientX,T.clientX),h.set(T.clientX,T.clientY)}function he(T){g.set(T.clientX,T.clientY)}function H(T){f.set(T.clientX,T.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const j=n.domElement;G(2*Math.PI*m.x/j.clientHeight),q(2*Math.PI*m.y/j.clientHeight),d.copy(f),n.update()}function K(T){y.set(T.clientX,T.clientY),x.subVectors(y,h),x.y>0?k(b(x.y)):x.y<0&&Y(b(x.y)),h.copy(y),n.update()}function ue(T){_.set(T.clientX,T.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(_),n.update()}function ve(T){X(T.clientX,T.clientY),T.deltaY<0?Y(b(T.deltaY)):T.deltaY>0&&k(b(T.deltaY)),n.update()}function ge(T){let j=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),j=!0;break}j&&(T.preventDefault(),n.update())}function Ce(T){if(A.length===1)d.set(T.pageX,T.pageY);else{const j=Ve(T),ae=.5*(T.pageX+j.x),ne=.5*(T.pageY+j.y);d.set(ae,ne)}}function Pe(T){if(A.length===1)g.set(T.pageX,T.pageY);else{const j=Ve(T),ae=.5*(T.pageX+j.x),ne=.5*(T.pageY+j.y);g.set(ae,ne)}}function ye(T){const j=Ve(T),ae=T.pageX-j.x,ne=T.pageY-j.y,_e=Math.sqrt(ae*ae+ne*ne);h.set(0,_e)}function ke(T){n.enableZoom&&ye(T),n.enablePan&&Pe(T)}function N(T){n.enableZoom&&ye(T),n.enableRotate&&Ce(T)}function ot(T){if(A.length==1)f.set(T.pageX,T.pageY);else{const ae=Ve(T),ne=.5*(T.pageX+ae.x),_e=.5*(T.pageY+ae.y);f.set(ne,_e)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const j=n.domElement;G(2*Math.PI*m.x/j.clientHeight),q(2*Math.PI*m.y/j.clientHeight),d.copy(f)}function Se(T){if(A.length===1)_.set(T.pageX,T.pageY);else{const j=Ve(T),ae=.5*(T.pageX+j.x),ne=.5*(T.pageY+j.y);_.set(ae,ne)}p.subVectors(_,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(_)}function we(T){const j=Ve(T),ae=T.pageX-j.x,ne=T.pageY-j.y,_e=Math.sqrt(ae*ae+ne*ne);y.set(0,_e),x.set(0,Math.pow(y.y/h.y,n.zoomSpeed)),k(x.y),h.copy(y);const ze=(T.pageX+j.x)*.5,We=(T.pageY+j.y)*.5;X(ze,We)}function pe(T){n.enableZoom&&we(T),n.enablePan&&Se(T)}function Ze(T){n.enableZoom&&we(T),n.enableRotate&&ot(T)}function Le(T){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",v)),be(T),T.pointerType==="touch"?me(T):F(T))}function E(T){n.enabled!==!1&&(T.pointerType==="touch"?ce(T):ee(T))}function v(T){Ie(T),A.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",v)),n.dispatchEvent(to),s=r.NONE}function F(T){let j;switch(T.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Nn.DOLLY:if(n.enableZoom===!1)return;te(T),s=r.DOLLY;break;case Nn.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;he(T),s=r.PAN}else{if(n.enableRotate===!1)return;J(T),s=r.ROTATE}break;case Nn.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;J(T),s=r.ROTATE}else{if(n.enablePan===!1)return;he(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Jr)}function ee(T){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;H(T);break;case r.DOLLY:if(n.enableZoom===!1)return;K(T);break;case r.PAN:if(n.enablePan===!1)return;ue(T);break}}function $(T){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(T.preventDefault(),n.dispatchEvent(Jr),ve(T),n.dispatchEvent(to))}function Q(T){n.enabled===!1||n.enablePan===!1||ge(T)}function me(T){switch(Z(T),A.length){case 1:switch(n.touches.ONE){case Fn.ROTATE:if(n.enableRotate===!1)return;Ce(T),s=r.TOUCH_ROTATE;break;case Fn.PAN:if(n.enablePan===!1)return;Pe(T),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Fn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ke(T),s=r.TOUCH_DOLLY_PAN;break;case Fn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(T),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Jr)}function ce(T){switch(Z(T),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ot(T),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Se(T),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pe(T),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ze(T),n.update();break;default:s=r.NONE}}function fe(T){n.enabled!==!1&&T.preventDefault()}function be(T){A.push(T.pointerId)}function Ie(T){delete W[T.pointerId];for(let j=0;j<A.length;j++)if(A[j]==T.pointerId){A.splice(j,1);return}}function Z(T){let j=W[T.pointerId];j===void 0&&(j=new Ae,W[T.pointerId]=j),j.set(T.pageX,T.pageY)}function Ve(T){const j=T.pointerId===A[0]?A[1]:A[0];return W[j]}n.domElement.addEventListener("contextmenu",fe),n.domElement.addEventListener("pointerdown",Le),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",$,{passive:!1}),this.update()}}const it=256;async function _m(){await document.fonts.load("700 120px Plex")}function vm(i){const e=document.createElement("canvas");e.width=e.height=it;const t=e.getContext("2d");t.fillStyle="black",t.fillRect(0,0,it,it),t.fillStyle="white",t.font="700 150px Plex, sans-serif";const n=t.measureText(i),s=150*Math.min(1,218/Math.max(1,n.width));t.font=`700 ${s}px Plex, sans-serif`,t.textAlign="center",t.textBaseline="middle";const o=t.measureText(i),a=((o.actualBoundingBoxAscent||s/2)-(o.actualBoundingBoxDescent||0))/2;return t.textBaseline="alphabetic",t.fillText(i,it/2,it/2+a),Yo(e,i)}function xm(i){const e=document.createElement("canvas");e.width=e.height=it;const t=e.getContext("2d");return t.fillStyle="black",t.fillRect(0,0,it,it),t.strokeStyle="white",t.lineWidth=24,t.beginPath(),i==="ring"?t.arc(128,128,74,0,Math.PI*2):(t.moveTo(128,35),t.lineTo(218,128),t.lineTo(128,221),t.lineTo(38,128),t.closePath()),t.stroke(),Yo(e,i==="ring"?"自作の輪":"自作の菱形")}function Yo(i,e){const t=i.getContext("2d").getImageData(0,0,it,it).data;return{size:it,pixels:Uint8Array.from({length:it*it},(n,r)=>t[r*4]),label:e}}async function Mm(i,e,t){if(!["image/png","image/jpeg","image/webp"].includes(i.type))throw new Error("PNG・JPEG・WebP画像を選んでください。");if(i.size>8*1024*1024)throw new Error("画像は8MB以内にしてください。");let n;try{n=await createImageBitmap(i)}catch{throw new Error("画像として開けませんでした。正常なPNG・JPEG・WebPを選んでください。")}if(n.width*n.height>32e6)throw n.close(),new Error("画像は3200万画素以内にしてください。");const r=document.createElement("canvas");r.width=r.height=it;const s=r.getContext("2d"),o=218/Math.max(n.width,n.height),a=n.width*o,l=n.height*o;s.drawImage(n,(it-a)/2,(it-l)/2,a,l),n.close();const c=s.getImageData(0,0,it,it).data;return{size:it,label:i.name,pixels:Uint8Array.from({length:it*it},(u,d)=>{const f=c[d*4+3]/255,m=(.2126*c[d*4]+.7152*c[d*4+1]+.0722*c[d*4+2])/255;return(t==="alpha"?f:t==="dark"?(1-m)*f:m*f)>=e?255:0})}}function Sm(i){const e=document.createElement("canvas");e.width=e.height=i.size;const t=e.getContext("2d"),n=t.createImageData(i.size,i.size);return i.pixels.forEach((r,s)=>{n.data[s*4]=r,n.data[s*4+1]=r,n.data[s*4+2]=r,n.data[s*4+3]=255}),t.putImageData(n,0,0),e.toDataURL()}function om(i){return i.flatMap(e=>{const t=e.pixels.reduce((c,u)=>c+(u>127?1:0),0),n=t/e.pixels.length;if(!t)throw new Error(`${e.label}: 形が空です。`);let r=0;for(let c=1;c<e.size-1;c++)for(let u=1;u<e.size-1;u++){const d=c*e.size+u;e.pixels[d]>127&&[d-1,d+1,d-e.size,d+e.size].some(f=>e.pixels[f]<=127)&&r++}const s=[];(n<.025||r/t>.6)&&s.push(`${e.label}: 256pxの輪郭で細線が多い形です。線を太くするか文字を短くしてください。`),n>.65&&s.push(`${e.label}: ほぼ全面が選択されています。背景の明暗を確認してください。`);const o=new Uint8Array(e.pixels.length),a=new Uint32Array(e.pixels.length);let l=0;for(let c=0;c<e.pixels.length;c++){if(o[c]||e.pixels[c]<=127)continue;let u=0,d=1;for(a[0]=c,o[c]=1;u<d;){const f=a[u++],m=f%e.size,g=Math.floor(f/e.size);for(let _=-1;_<=1;_++)for(let p=-1;p<=1;p++){const h=m+p,y=g+_;if(h<0||y<0||h>=e.size||y>=e.size)continue;const x=y*e.size+h;!o[x]&&e.pixels[x]>127&&(o[x]=1,a[d++]=x)}}d<=9&&l++}return l&&s.push(`${e.label}: 9画素以下の孤立した部分が${l}個あります。点群では欠ける場合があるため、拡大して確認してください。`),s})}const lm=["galaxy","morph","shell","hull"],cm=["current","ink","chalk","duotone"],um=["dark","mid","light"];function Em(i){if(i.length>3e6)throw Error("プロジェクトが大きすぎます。");let e;try{e=JSON.parse(i)}catch{throw Error("プロジェクトJSONとして読めませんでした。保存したファイルを選んでください。")}if(!e||typeof e!="object"||e.version!==1||!lm.includes(e.mode)||![4096,12e3,28672].includes(e.budget)||!Number.isFinite(e.depth)||e.depth<.6||e.depth>1.2||![.25,.5,.7].includes(e.reveal)||!Number.isFinite(e.threshold)||e.threshold<.1||e.threshold>.9||e.contrast!==void 0&&!cm.includes(e.contrast)||e.background!==void 0&&!um.includes(e.background)||e.sampling!==void 0&&!["sdf","raster"].includes(e.sampling)||e.emphasis!==void 0&&!["field","figure"].includes(e.emphasis)||e.viewing!==void 0&&!["horizontal","raised"].includes(e.viewing)||!Array.isArray(e.masks)||e.masks.length!==5)throw Error("プロジェクトの形式を確認してください。");const t=e.masks.map(n=>{if(!n||n.size!==256||typeof n.label!="string"||n.label.length>256||!Array.isArray(n.pixels)||n.pixels.length!==65536||!n.pixels.every(r=>Number.isInteger(r)&&r>=0&&r<=255))throw Error("画像データの形式が違います。");return{size:256,label:n.label,pixels:new Uint8Array(n.pixels)}});return om(t),{version:1,mode:e.mode,budget:e.budget,depth:e.depth,reveal:e.reveal,threshold:e.threshold,contrast:e.contrast??"current",background:e.background??"dark",sampling:e.sampling??"sdf",emphasis:e.emphasis??"field",viewing:e.viewing??"horizontal",masks:t}}function ym(i){return JSON.stringify({...i,masks:i.masks.map(e=>({...e,pixels:Array.from(e.pixels)}))})}function io(i){const e=Array.isArray(i)?[i[0],i[1],i[2]]:[i.x,i.y,i.z];if(!e.every(Number.isFinite))return null;const t=Math.hypot(...e);return t>Number.EPSILON?[e[0]/t,e[1]/t,e[2]/t]:null}function bm(i,e=[0,1,0]){const t=io(i),n=io(e);if(!t||!n)return null;const r=Math.max(-1,Math.min(1,t[0]*n[0]+t[1]*n[1]+t[2]*n[2])),s=Math.abs(r);return{angleDeg:Math.acos(s)*180/Math.PI,faceOnRatio:s,frontFacing:r>0}}export{fm as A,dm as C,At as F,mm as G,mc as M,gm as O,zt as P,Un as Q,us as R,Tp as S,U as V,yp as W,vm as a,Sm as b,ym as c,ht as d,Ln as e,_m as f,wn as g,Mm as i,Em as p,pm as r,xm as s,bm as t,om as v};
