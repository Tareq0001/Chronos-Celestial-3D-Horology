var sf=Object.defineProperty;var af=(r,e,t)=>e in r?sf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Le=(r,e,t)=>af(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Il="186",Cr={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},of=0,Lc=1,lf=2,ia=1,ru=2,Qr=3,ji=0,Qt=1,In=2,ci=0,is=1,Ic=2,Nc=3,Uc=4,cf=5,Sr=100,hf=101,uf=102,df=103,ff=104,pf=200,mf=201,_f=202,gf=203,su=204,au=205,vf=206,xf=207,Mf=208,Sf=209,yf=210,bf=211,Ef=212,Tf=213,wf=214,Ro=0,Po=1,Do=2,hs=3,Lo=4,Io=5,No=6,Uo=7,ou=0,Af=1,Cf=2,Yn=0,lu=1,cu=2,hu=3,Nl=4,uu=5,du=6,fu=7,pu=300,er=301,Nr=302,Ba=303,za=304,Ra=306,Ln=1e3,li=1001,Oo=1002,Bt=1003,Rf=1004,Ds=1005,Wt=1006,ka=1007,qi=1008,pn=1009,mu=1010,_u=1011,us=1012,Ul=1013,Zn=1014,Wn=1015,Kn=1016,Ol=1017,Fl=1018,ds=1020,gu=35902,vu=35899,xu=1021,Mu=1022,Un=1023,di=1026,Yi=1027,Su=1028,Bl=1029,tr=1030,zl=1031,kl=1033,ra=33776,sa=33777,aa=33778,oa=33779,Fo=35840,Bo=35841,zo=35842,ko=35843,Ho=36196,Go=37492,Vo=37496,Wo=37488,Xo=37489,fa=37490,qo=37491,Yo=37808,Zo=37809,Ko=37810,Jo=37811,$o=37812,Qo=37813,jo=37814,el=37815,tl=37816,nl=37817,il=37818,rl=37819,sl=37820,al=37821,ol=36492,ll=36494,cl=36495,hl=36283,ul=36284,pa=36285,dl=36286,Pf=3200,fl=0,Df=1,bi="",Tn="srgb",ma="srgb-linear",_a="linear",ct="srgb",Ha=7680,Lf=519,If=512,Nf=513,Uf=514,Hl=515,Of=516,Ff=517,Gl=518,Bf=519,zf=35044,Oc="300 es",Xn=2e3,fs=2001;function kf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hf(){const r=ga("canvas");return r.style.display="block",r}const Fc={};function Bc(...r){const e="THREE."+r.shift();console.log(e,...r)}function yu(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function We(...r){r=yu(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function st(...r){r=yu(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Rr(...r){const e=r.join(" ");e in Fc||(Fc[e]=!0,We(...r))}function Gf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Vf={[Ro]:Po,[Do]:No,[Lo]:Uo,[hs]:Io,[Po]:Ro,[No]:Do,[Uo]:Lo,[Io]:hs};class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,pl=180/Math.PI;function Gr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[r&255]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function $e(r,e,t){return Math.max(e,Math.min(t,r))}function Wf(r,e){return(r%e+e)%e}function Ga(r,e,t){return(1-t)*r+t*e}function Wr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xf={DEG2RAD:la},gc=class gc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gc.prototype.isVector2=!0;let fe=gc;class Ri{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(d!==g||l!==u||c!==f||h!==_){let p=l*u+c*f+h*_+d*g;p<0&&(u=-u,f=-f,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const y=Math.acos(p),T=Math.sin(y);m=Math.sin(m*y)/T,o=Math.sin(o*y)/T,l=l*m+u*o,c=c*m+f*o,h=h*m+_*o,d=d*m+g*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+_*o,d=d*m+g*o;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+h*d+l*f-c*u,e[t+1]=l*_+h*u+c*d-o*f,e[t+2]=c*_+h*f+o*u-l*d,e[t+3]=h*_-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vc=class vc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vc.prototype.isVector3=!0;let F=vc;const Va=new F,zc=new Ri,xc=class xc{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],T=i[4],x=i[7],S=i[2],w=i[5],A=i[8];return s[0]=a*g+o*y+l*S,s[3]=a*p+o*T+l*w,s[6]=a*m+o*x+l*A,s[1]=c*g+h*y+d*S,s[4]=c*p+h*T+d*w,s[7]=c*m+h*x+d*A,s[2]=u*g+f*y+_*S,s[5]=u*p+f*T+_*w,s[8]=u*m+f*x+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,_=t*d+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xc.prototype.isMatrix3=!0;let Ye=xc;const Wa=new Ye,kc=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){const r={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(i.r=Pr(i.r),i.g=Pr(i.g),i.b=Pr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?_a:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ma]:{primaries:e,whitePoint:n,transfer:_a,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),r}const tt=qf();function hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ar;class Yf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ar===void 0&&(ar=ga("canvas")),ar.width=e.width,ar.height=e.height;const i=ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=hi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zf=0;class Vl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Xa(i[a].image)):s.push(Xa(i[a]))}else s=Xa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let Kf=0;const qa=new F;class Xt extends Ni{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=li,i=li,s=Wt,a=qi,o=Un,l=pn,c=Xt.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Gr(),this.name="",this.source=new Vl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qa).x}get height(){return this.source.getSize(qa).y}get depth(){return this.source.getSize(qa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=pu;Xt.DEFAULT_ANISOTROPY=1;const Mc=class Mc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,x=(f+1)/2,S=(m+1)/2,w=(h+u)/4,A=(d+g)/4,v=(_+p)/4;return T>x&&T>S?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=A/n):x>S?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=A/s,i=v/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(d-g)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mc.prototype.isVector4=!0;let bt=Mc;class Jf extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Xt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Jf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bu extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $f extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ca=class Ca{constructor(e,t,n,i,s,a,o,l,c,h,d,u,f,_,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,f,_,g,p)}set(e,t,n,i,s,a,o,l,c,h,d,u,f,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,f=a*d,_=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,_=c*h,g=c*d;t[0]=u+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,_=c*h,g=c*d;t[0]=u-g*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,_=o*h,g=o*d;t[0]=l*h,t[4]=_*c-f,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-u*d,t[8]=_*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+_,t[10]=u-g*d}else if(e.order==="XZY"){const u=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=a*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qf,e,jf)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),vi.crossVectors(n,cn),vi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),vi.crossVectors(n,cn)),vi.normalize(),Ls.crossVectors(cn,vi),i[0]=vi.x,i[4]=Ls.x,i[8]=cn.x,i[1]=vi.y,i[5]=Ls.y,i[9]=cn.y,i[2]=vi.z,i[6]=Ls.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],T=n[7],x=n[11],S=n[15],w=i[0],A=i[4],v=i[8],E=i[12],D=i[1],I=i[5],N=i[9],O=i[13],L=i[2],B=i[6],Y=i[10],V=i[14],ne=i[3],$=i[7],P=i[11],C=i[15];return s[0]=a*w+o*D+l*L+c*ne,s[4]=a*A+o*I+l*B+c*$,s[8]=a*v+o*N+l*Y+c*P,s[12]=a*E+o*O+l*V+c*C,s[1]=h*w+d*D+u*L+f*ne,s[5]=h*A+d*I+u*B+f*$,s[9]=h*v+d*N+u*Y+f*P,s[13]=h*E+d*O+u*V+f*C,s[2]=_*w+g*D+p*L+m*ne,s[6]=_*A+g*I+p*B+m*$,s[10]=_*v+g*N+p*Y+m*P,s[14]=_*E+g*O+p*V+m*C,s[3]=y*w+T*D+x*L+S*ne,s[7]=y*A+T*I+x*B+S*$,s[11]=y*v+T*N+x*Y+S*P,s[15]=y*E+T*O+x*V+S*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],g=e[7],p=e[11],m=e[15],y=l*f-c*u,T=o*f-c*d,x=o*u-l*d,S=a*f-c*h,w=a*u-l*h,A=a*d-o*h;return t*(g*y-p*T+m*x)-n*(_*y-p*S+m*w)+i*(_*T-g*S+m*A)-s*(_*x-g*w+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],y=t*o-n*a,T=t*l-i*a,x=t*c-s*a,S=n*l-i*o,w=n*c-s*o,A=i*c-s*l,v=h*g-d*_,E=h*p-u*_,D=h*m-f*_,I=d*p-u*g,N=d*m-f*g,O=u*m-f*p,L=y*O-T*N+x*I+S*D-w*E+A*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return e[0]=(o*O-l*N+c*I)*B,e[1]=(i*N-n*O-s*I)*B,e[2]=(g*A-p*w+m*S)*B,e[3]=(u*w-d*A-f*S)*B,e[4]=(l*D-a*O-c*E)*B,e[5]=(t*O-i*D+s*E)*B,e[6]=(p*x-_*A-m*T)*B,e[7]=(h*A-u*x+f*T)*B,e[8]=(a*N-o*D+c*v)*B,e[9]=(n*D-t*N-s*v)*B,e[10]=(_*w-g*x+m*y)*B,e[11]=(d*x-h*w-f*y)*B,e[12]=(o*E-a*I-l*v)*B,e[13]=(t*I-n*E+i*v)*B,e[14]=(g*T-_*S-p*y)*B,e[15]=(h*S-d*T+u*y)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,_=s*d,g=a*h,p=a*d,m=o*d,y=l*c,T=l*h,x=l*d,S=n.x,w=n.y,A=n.z;return i[0]=(1-(g+m))*S,i[1]=(f+x)*S,i[2]=(_-T)*S,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(u+m))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(_+T)*A,i[9]=(p-y)*A,i[10]=(1-(u+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=or.set(i[0],i[1],i[2]).length();const o=or.set(i[4],i[5],i[6]).length(),l=or.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Rn.copy(this);const c=1/a,h=1/o,d=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Xn,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Xn)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===fs)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Xn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Xn)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===fs)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ca.prototype.isMatrix4=!0;let wt=Ca;const or=new F,Rn=new wt,Qf=new F(0,0,0),jf=new F(1,1,1),vi=new F,Ls=new F,cn=new F,Gc=new wt,Vc=new Ri;class Pi{constructor(e=0,t=0,n=0,i=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ep=0;const Wc=new F,lr=new Ri,jn=new wt,Is=new F,Xr=new F,tp=new F,np=new Ri,Xc=new F(1,0,0),qc=new F(0,1,0),Yc=new F(0,0,1),Zc={type:"added"},ip={type:"removed"},cr={type:"childadded",child:null},Ya={type:"childremoved",child:null};class qt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new F,t=new Pi,n=new Ri,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ye}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return Wc.copy(e).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Xr,Is,this.up):jn.lookAt(Is,Xr,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),lr.setFromRotationMatrix(jn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zc),cr.child=e,this.dispatchEvent(cr),cr.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zc),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qt.DEFAULT_UP=new F(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class at extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rp={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Ka(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=Wf(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ka(a,s,e+1/3),this.g=Ka(a,s,e),this.b=Ka(a,s,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return tt.workingToColorSpace(Gt.copy(this),e),Math.round($e(Gt.r*255,0,255))*65536+Math.round($e(Gt.g*255,0,255))*256+Math.round($e(Gt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,s=Gt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Tn){tt.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Ns);const n=Ga(xi.h,Ns.h,t),i=Ga(xi.s,Ns.s,t),s=Ga(xi.l,Ns.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new et;et.NAMES=Tu;class sp extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pn=new F,ei=new F,Ja=new F,ti=new F,hr=new F,ur=new F,Kc=new F,$a=new F,Qa=new F,ja=new F,eo=new bt,to=new bt,no=new bt;class Nn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pn.subVectors(e,t),i.cross(Pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pn.subVectors(i,t),ei.subVectors(n,t),Ja.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(ei),l=Pn.dot(Ja),c=ei.dot(ei),h=ei.dot(Ja),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return eo.setScalar(0),to.setScalar(0),no.setScalar(0),eo.fromBufferAttribute(e,t),to.fromBufferAttribute(e,n),no.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(eo,s.x),a.addScaledVector(to,s.y),a.addScaledVector(no,s.z),a}static isFrontFacing(e,t,n,i){return Pn.subVectors(n,t),ei.subVectors(e,t),Pn.cross(ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;hr.subVectors(i,n),ur.subVectors(s,n),$a.subVectors(e,n);const l=hr.dot($a),c=ur.dot($a);if(l<=0&&c<=0)return t.copy(n);Qa.subVectors(e,i);const h=hr.dot(Qa),d=ur.dot(Qa);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(hr,a);ja.subVectors(e,s);const f=hr.dot(ja),_=ur.dot(ja);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ur,o);const p=h*_-f*d;if(p<=0&&d-h>=0&&f-_>=0)return Kc.subVectors(s,i),o=(d-h)/(d-h+(f-_)),t.copy(i).addScaledVector(Kc,o);const m=1/(p+g+u);return a=g*m,o=u*m,t.copy(n).addScaledVector(hr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ws{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Os.subVectors(this.max,qr),dr.subVectors(e.a,qr),fr.subVectors(e.b,qr),pr.subVectors(e.c,qr),Mi.subVectors(fr,dr),Si.subVectors(pr,fr),Fi.subVectors(dr,pr);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Fi.z,Fi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Fi.z,0,-Fi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Fi.y,Fi.x,0];return!io(t,dr,fr,pr,Os)||(t=[1,0,0,0,1,0,0,0,1],!io(t,dr,fr,pr,Os))?!1:(Fs.crossVectors(Mi,Si),t=[Fs.x,Fs.y,Fs.z],io(t,dr,fr,pr,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new F,new F,new F,new F,new F,new F,new F,new F],Dn=new F,Us=new ws,dr=new F,fr=new F,pr=new F,Mi=new F,Si=new F,Fi=new F,qr=new F,Os=new F,Fs=new F,Bi=new F;function io(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Bi.fromArray(r,s);const o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dt=new F,Bs=new fe;let ap=0;class ui extends Ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zf,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class wu extends ui{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Au extends ui{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends ui{constructor(e,t,n){super(new Float32Array(e),t,n)}}const op=new ws,Yr=new F,ro=new F;class Wl{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):op.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(ro)),this.expandByPoint(Yr.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lp=0;const yn=new wt,so=new qt,mr=new F,hn=new ws,Zr=new ws,Ot=new F;class jt extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?Au:wu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(hn.min,Zr.min),hn.expandByPoint(Ot),Ot.addVectors(hn.max,Zr.max),hn.expandByPoint(Ot)):(hn.expandByPoint(Zr.min),hn.expandByPoint(Zr.max))}hn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(mr.fromBufferAttribute(e,c),Ot.add(mr)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ui(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new F,l[v]=new F;const c=new F,h=new F,d=new F,u=new fe,f=new fe,_=new fe,g=new F,p=new F;function m(v,E,D){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,D),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,E),_.fromBufferAttribute(s,D),h.sub(c),d.sub(c),f.sub(u),_.sub(u);const I=1/(f.x*_.y-_.x*f.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(I),o[v].add(g),o[E].add(g),o[D].add(g),l[v].add(p),l[E].add(p),l[D].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,E=y.length;v<E;++v){const D=y[v],I=D.start,N=D.count;for(let O=I,L=I+N;O<L;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new F,x=new F,S=new F,w=new F;function A(v){S.fromBufferAttribute(i,v),w.copy(S);const E=o[v];T.copy(E),T.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(w,E);const I=x.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,I)}for(let v=0,E=y.length;v<E;++v){const D=y[v],I=D.start,N=D.count;for(let O=I,L=I+N;O<L;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new F,s=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),g=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let m=0;m<h;m++)u[_++]=c[f++]}return new ui(u,h,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new F,cp=new F,hp=new Ye;class ai{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ao.subVectors(n,t).cross(cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ao),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hp.getNormalMatrix(e),i=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let up=0;class As extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=is,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=au,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ai().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ii=new F,oo=new F,zs=new F,ks=new F;class Cu{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oo.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),ks.copy(this.origin).sub(oo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zs),o=ks.dot(this.direction),l=-ks.dot(zs),c=ks.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=s*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(oo).addScaledVector(zs,u),f}intersectSphere(e,t){if(e.radius<0)return null;ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,_=t.x-a.x,g=t.y-a.y,p=t.z-a.z,m=n.x-a.x,y=n.y-a.y,T=n.z-a.z,x=Math.abs(l),S=Math.abs(c),w=Math.abs(h);let A,v,E,D,I,N,O,L,B,Y,V,ne;if(x>=S&&x>=w?(E=l,N=d,B=_,ne=m,l>=0?(A=c,v=h,D=u,I=f,O=g,L=p,Y=y,V=T):(A=h,v=c,D=f,I=u,O=p,L=g,Y=T,V=y)):S>=w?(E=c,N=u,B=g,ne=y,c>=0?(A=h,v=l,D=f,I=d,O=p,L=_,Y=T,V=m):(A=l,v=h,D=d,I=f,O=_,L=p,Y=m,V=T)):(E=h,N=f,B=p,ne=T,h>=0?(A=l,v=c,D=d,I=u,O=_,L=g,Y=m,V=y):(A=c,v=l,D=u,I=d,O=g,L=_,Y=y,V=m)),E===0)return null;const $=A/E,P=v/E,C=1/E,te=D-$*N,re=I-P*N,_e=O-$*B,pe=L-P*B,Ce=Y-$*ne,H=V-P*ne,Z=Ce*pe-H*_e,ce=te*H-re*Ce,Te=_e*re-pe*te;if(i){if(Z<0||ce<0||Te<0)return null}else if((Z<0||ce<0||Te<0)&&(Z>0||ce>0||Te>0))return null;const he=Z+ce+Te;if(he===0)return null;const we=C*(Z*N+ce*B+Te*ne);return(he>0?we<0:we>0)?null:this.at(we/he,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ru extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jc=new wt,zi=new Cu,Hs=new Wl,$c=new F,Gs=new F,Vs=new F,Ws=new F,lo=new F,Xs=new F,Qc=new F,qs=new F;class He extends qt{constructor(e=new jt,t=new Ru){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(lo.fromBufferAttribute(d,e),a?Xs.addScaledVector(lo,h):Xs.addScaledVector(lo.sub(t),h))}t.add(Xs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),zi.copy(e.ray).recast(e.near),!(Hs.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Hs,$c)===null||zi.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(Jc.copy(s).invert(),zi.copy(e.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const p=u[_],m=a[p.materialIndex],y=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,S=T;x<S;x+=3){const w=o.getX(x),A=o.getX(x+1),v=o.getX(x+2);i=Ys(this,m,e,n,c,h,d,w,A,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const y=o.getX(p),T=o.getX(p+1),x=o.getX(p+2);i=Ys(this,a,e,n,c,h,d,y,T,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const p=u[_],m=a[p.materialIndex],y=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,S=T;x<S;x+=3){const w=x,A=x+1,v=x+2;i=Ys(this,m,e,n,c,h,d,w,A,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const y=p,T=p+1,x=p+2;i=Ys(this,a,e,n,c,h,d,y,T,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function dp(r,e,t,n,i,s,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ji,o),l===null)return null;qs.copy(o),qs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:r}}function Ys(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Gs),r.getVertexPosition(l,Vs),r.getVertexPosition(c,Ws);const h=dp(r,e,t,n,Gs,Vs,Ws,Qc);if(h){const d=new F;Nn.getBarycoord(Qc,Gs,Vs,Ws,d),i&&(h.uv=Nn.getInterpolatedAttribute(i,o,l,c,d,new fe)),s&&(h.uv1=Nn.getInterpolatedAttribute(s,o,l,c,d,new fe)),a&&(h.normal=Nn.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};Nn.getNormal(Gs,Vs,Ws,u.normal),h.face=u,h.barycoord=d}return h}class fp extends Xt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Bt,h=Bt,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ki=new Wl,pp=new fe(.5,.5),Zs=new F;class Xl{constructor(e=new ai,t=new ai,n=new ai,i=new ai,s=new ai,a=new ai){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],_=s[8],g=s[9],p=s[10],m=s[11],y=s[12],T=s[13],x=s[14],S=s[15];if(i[0].setComponents(c-a,f-h,m-_,S-y).normalize(),i[1].setComponents(c+a,f+h,m+_,S+y).normalize(),i[2].setComponents(c+o,f+d,m+g,S+T).normalize(),i[3].setComponents(c-o,f-d,m-g,S-T).normalize(),n)i[4].setComponents(l,u,p,x).normalize(),i[5].setComponents(c-l,f-u,m-p,S-x).normalize();else if(i[4].setComponents(c-l,f-u,m-p,S-x).normalize(),t===Xn)i[5].setComponents(c+l,f+u,m+p,S+x).normalize();else if(t===fs)i[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=pp.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zs.x=i.normal.x>0?e.max.x:e.min.x,Zs.y=i.normal.y>0?e.max.y:e.min.y,Zs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pu extends Xt{constructor(e=[],t=er,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _r extends Xt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ps extends Xt{constructor(e,t,n=Zn,i,s,a,o=Bt,l=Bt,c,h=di,d=1){if(h!==di&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class mp extends ps{constructor(e,t=Zn,n=er,i,s,a=Bt,o=Bt,l,c=di){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Du extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $t extends jt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function _(g,p,m,y,T,x,S,w,A,v,E){const D=x/A,I=S/v,N=x/2,O=S/2,L=w/2,B=A+1,Y=v+1;let V=0,ne=0;const $=new F;for(let P=0;P<Y;P++){const C=P*I-O;for(let te=0;te<B;te++){const re=te*D-N;$[g]=re*y,$[p]=C*T,$[m]=L,c.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[m]=w>0?1:-1,h.push($.x,$.y,$.z),d.push(te/A),d.push(1-P/v),V+=1}}for(let P=0;P<v;P++)for(let C=0;C<A;C++){const te=u+C+B*P,re=u+C+B*(P+1),_e=u+(C+1)+B*(P+1),pe=u+(C+1)+B*P;l.push(te,re,pe),l.push(re,_e,pe),ne+=6}o.addGroup(f,ne,E),f+=ne,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class un extends jt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let _=0;const g=[],p=n/2;let m=0;y(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function y(){const x=new F,S=new F;let w=0;const A=(t-e)/n;for(let v=0;v<=s;v++){const E=[],D=v/s,I=D*(t-e)+e;for(let N=0;N<=i;N++){const O=N/i,L=O*l+o,B=Math.sin(L),Y=Math.cos(L);S.x=I*B,S.y=-D*n+p,S.z=I*Y,d.push(S.x,S.y,S.z),x.set(B,A,Y).normalize(),u.push(x.x,x.y,x.z),f.push(O,1-D),E.push(_++)}g.push(E)}for(let v=0;v<i;v++)for(let E=0;E<s;E++){const D=g[E][v],I=g[E+1][v],N=g[E+1][v+1],O=g[E][v+1];(e>0||E!==0)&&(h.push(D,I,O),w+=3),(t>0||E!==s-1)&&(h.push(I,N,O),w+=3)}c.addGroup(m,w,0),m+=w}function T(x){const S=_,w=new fe,A=new F;let v=0;const E=x===!0?e:t,D=x===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,p*D,0),u.push(0,D,0),f.push(.5,.5),_++;const I=_;for(let N=0;N<=i;N++){const L=N/i*l+o,B=Math.cos(L),Y=Math.sin(L);A.x=E*Y,A.y=p*D,A.z=E*B,d.push(A.x,A.y,A.z),u.push(0,D,0),w.x=B*.5+.5,w.y=Y*.5*D+.5,f.push(w.x,w.y),_++}for(let N=0;N<i;N++){const O=S+N,L=I+N;x===!0?h.push(L,L+1,O):h.push(L+1,L,O),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new fe:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new F,i=[],s=[],a=[],o=new F,l=new wt;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new F)}s[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos($e(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos($e(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ql extends Qn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _p extends ql{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Yl(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const jc=new F,eh=new F,co=new Yl,ho=new Yl,uo=new Yl;class Lu extends Qn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(eh.subVectors(i[0],i[1]).add(i[0]),c=eh);const d=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(jc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=jc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),co.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,g,p),ho.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,g,p),uo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(co.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ho.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),uo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(co.calc(l),ho.calc(l),uo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function th(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function gp(r,e){const t=1-r;return t*t*e}function vp(r,e){return 2*(1-r)*r*e}function xp(r,e){return r*r*e}function rs(r,e,t,n){return gp(r,e)+vp(r,t)+xp(r,n)}function Mp(r,e){const t=1-r;return t*t*t*e}function Sp(r,e){const t=1-r;return 3*t*t*r*e}function yp(r,e){return 3*(1-r)*r*r*e}function bp(r,e){return r*r*r*e}function ss(r,e,t,n,i){return Mp(r,e)+Sp(r,t)+yp(r,n)+bp(r,i)}class Iu extends Qn{constructor(e=new fe,t=new fe,n=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new fe){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ss(e,i.x,s.x,a.x,o.x),ss(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ep extends Qn{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ss(e,i.x,s.x,a.x,o.x),ss(e,i.y,s.y,a.y,o.y),ss(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nu extends Qn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tp extends Qn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uu extends Qn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(rs(e,i.x,s.x,a.x),rs(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ou extends Qn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(rs(e,i.x,s.x,a.x),rs(e,i.y,s.y,a.y),rs(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fu extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(th(o,l.x,c.x,h.x,d.x),th(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new fe().fromArray(i))}return this}}var va=Object.freeze({__proto__:null,ArcCurve:_p,CatmullRomCurve3:Lu,CubicBezierCurve:Iu,CubicBezierCurve3:Ep,EllipseCurve:ql,LineCurve:Nu,LineCurve3:Tp,QuadraticBezierCurve:Uu,QuadraticBezierCurve3:Ou,SplineCurve:Fu});class Bu extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new va[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new va[i.type]().fromJSON(i))}return this}}class as extends Bu{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Nu(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Uu(this.currentPoint.clone(),new fe(e,t),new fe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Iu(this.currentPoint.clone(),new fe(e,t),new fe(n,i),new fe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Fu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new ql(e,t,n,i,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yr extends as{constructor(e){super(e),this.uuid=Gr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new as().fromJSON(i))}return this}}function wp(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=zu(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Dp(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,d=l;for(let u=t;u<i;u+=t){const f=r[u],_=r[u+1];f<o&&(o=f),_<l&&(l=_),f>h&&(h=f),_>d&&(d=_)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ms(s,a,t,o,l,c,0),a}function zu(r,e,t,n,i){let s;if(i===Gp(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=nh(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=nh(a/n|0,r[a],r[a+1],s);return s&&Ur(s,s.next)&&(gs(s),s=s.next),s}function nr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ur(t,t.next)||Et(t.prev,t,t.next)===0)){if(gs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ms(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Op(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Cp(r,n,i,s):Ap(r)){e.push(l.i,r.i,c.i),gs(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Rp(nr(r),e),ms(r,e,t,n,i,s,2)):a===2&&Pp(r,e,t,n,i,s):ms(nr(r),e,t,n,i,s,1);break}}}function Ap(r){const e=r.prev,t=r,n=r.next;if(Et(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),d=Math.min(o,l,c),u=Math.max(i,s,a),f=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=f&&jr(i,o,s,l,a,c,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Cp(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Et(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,d=s.y,u=a.y,f=Math.min(o,l,c),_=Math.min(h,d,u),g=Math.max(o,l,c),p=Math.max(h,d,u),m=ml(f,_,e,t,n),y=ml(g,p,e,t,n);let T=r.prevZ,x=r.nextZ;for(;T&&T.z>=m&&x&&x.z<=y;){if(T.x>=f&&T.x<=g&&T.y>=_&&T.y<=p&&T!==i&&T!==a&&jr(o,h,l,d,c,u,T.x,T.y)&&Et(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=f&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==a&&jr(o,h,l,d,c,u,x.x,x.y)&&Et(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=m;){if(T.x>=f&&T.x<=g&&T.y>=_&&T.y<=p&&T!==i&&T!==a&&jr(o,h,l,d,c,u,T.x,T.y)&&Et(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==a&&jr(o,h,l,d,c,u,x.x,x.y)&&Et(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Rp(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ur(n,i)&&Hu(n,t,t.next,i)&&_s(n,i)&&_s(i,n)&&(e.push(n.i,t.i,i.i),gs(t),gs(t.next),t=r=i),t=t.next}while(t!==r);return nr(t)}function Pp(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zp(a,o)){let l=Gu(a,o);a=nr(a,a.next),l=nr(l,l.next),ms(a,e,t,n,i,s,0),ms(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Dp(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=zu(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Bp(c))}i.sort(Lp);for(let s=0;s<i.length;s++)t=Ip(i[s],t);return t}function Lp(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Ip(r,e){const t=Np(r,e);if(!t)return e;const n=Gu(t,r);return nr(n,n.next),nr(t,t.next)}function Np(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Ur(r,t))return t;do{if(Ur(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ku(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);_s(t,r)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Up(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Up(r,e){return Et(r.prev,r,e.prev)<0&&Et(e.next,r,r.next)<0}function Op(r,e,t,n){let i=r;do i.z===0&&(i.z=ml(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Fp(i)}function Fp(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function ml(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Bp(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ku(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function jr(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&ku(r,e,t,n,i,s,a,o)}function zp(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!kp(r,e)&&(_s(r,e)&&_s(e,r)&&Hp(r,e)&&(Et(r.prev,r,e.prev)||Et(r,e.prev,e))||Ur(r,e)&&Et(r.prev,r,r.next)>0&&Et(e.prev,e,e.next)>0)}function Et(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ur(r,e){return r.x===e.x&&r.y===e.y}function Hu(r,e,t,n){const i=Js(Et(r,e,t)),s=Js(Et(r,e,n)),a=Js(Et(t,n,r)),o=Js(Et(t,n,e));return!!(i!==s&&a!==o||i===0&&Ks(r,t,e)||s===0&&Ks(r,n,e)||a===0&&Ks(t,r,n)||o===0&&Ks(t,e,n))}function Ks(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Js(r){return r>0?1:r<0?-1:0}function kp(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Hu(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function _s(r,e){return Et(r.prev,r,r.next)<0?Et(r,e,r.next)>=0&&Et(r,r.prev,e)>=0:Et(r,e,r.prev)<0||Et(r,r.next,e)<0}function Hp(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Gu(r,e){const t=_l(r.i,r.x,r.y),n=_l(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function nh(r,e,t,n){const i=_l(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function gs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function _l(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gp(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Vp{static triangulate(e,t,n=2){return wp(e,t,n)}}class Er{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Er.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];ih(e),rh(n,e);let a=e.length;t.forEach(ih);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,rh(n,t[l]);const o=Vp.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ih(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function rh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Xi extends jt{constructor(e=new yr([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new gt(i,3)),this.setAttribute("uv",new gt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Wp;let T,x=!1,S,w,A,v;if(m){T=m.getSpacedPoints(h),x=!0,u=!1;const K=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,K),w=new F,A=new F,v=new F}u||(p=0,f=0,_=0,g=0);const E=o.extractPoints(c);let D=E.shape;const I=E.holes;if(!Er.isClockWise(D)){D=D.reverse();for(let K=0,se=I.length;K<se;K++){const oe=I[K];Er.isClockWise(oe)&&(I[K]=oe.reverse())}}function O(K){const oe=10000000000000001e-36;let le=K[0];for(let de=1;de<=K.length;de++){const Oe=de%K.length,De=K[Oe],Ve=De.x-le.x,qe=De.y-le.y,U=Ve*Ve+qe*qe,it=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(le.x),Math.abs(le.y)),Qe=oe*it*it;if(U<=Qe){K.splice(Oe,1),de--;continue}le=De}}O(D),I.forEach(O);const L=I.length,B=D;for(let K=0;K<L;K++){const se=I[K];D=D.concat(se)}function Y(K,se,oe){return se||st("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(se,oe)}const V=D.length;function ne(K,se,oe){let le,de,Oe;const De=K.x-se.x,Ve=K.y-se.y,qe=oe.x-K.x,U=oe.y-K.y,it=De*De+Ve*Ve,Qe=De*U-Ve*qe;if(Math.abs(Qe)>Number.EPSILON){const R=Math.sqrt(it),M=Math.sqrt(qe*qe+U*U),G=se.x-Ve/R,q=se.y+De/R,Q=oe.x-U/M,ue=oe.y+qe/M,me=((Q-G)*U-(ue-q)*qe)/(De*U-Ve*qe);le=G+De*me-K.x,de=q+Ve*me-K.y;const j=le*le+de*de;if(j<=2)return new fe(le,de);Oe=Math.sqrt(j/2)}else{let R=!1;De>Number.EPSILON?qe>Number.EPSILON&&(R=!0):De<-Number.EPSILON?qe<-Number.EPSILON&&(R=!0):Math.sign(Ve)===Math.sign(U)&&(R=!0),R?(le=-Ve,de=De,Oe=Math.sqrt(it)):(le=De,de=Ve,Oe=Math.sqrt(it/2))}return new fe(le/Oe,de/Oe)}const $=[];for(let K=0,se=B.length,oe=se-1,le=K+1;K<se;K++,oe++,le++)oe===se&&(oe=0),le===se&&(le=0),$[K]=ne(B[K],B[oe],B[le]);const P=[];let C,te=$.concat();for(let K=0,se=L;K<se;K++){const oe=I[K];C=[];for(let le=0,de=oe.length,Oe=de-1,De=le+1;le<de;le++,Oe++,De++)Oe===de&&(Oe=0),De===de&&(De=0),C[le]=ne(oe[le],oe[Oe],oe[De]);P.push(C),te=te.concat(C)}let re;if(p===0)re=Er.triangulateShape(B,I);else{const K=[],se=[];for(let oe=0;oe<p;oe++){const le=oe/p,de=f*Math.cos(le*Math.PI/2),Oe=_*Math.sin(le*Math.PI/2)+g;for(let De=0,Ve=B.length;De<Ve;De++){const qe=Y(B[De],$[De],Oe);ce(qe.x,qe.y,-de),le===0&&K.push(qe)}for(let De=0,Ve=L;De<Ve;De++){const qe=I[De];C=P[De];const U=[];for(let it=0,Qe=qe.length;it<Qe;it++){const R=Y(qe[it],C[it],Oe);ce(R.x,R.y,-de),le===0&&U.push(R)}le===0&&se.push(U)}}re=Er.triangulateShape(K,se)}const _e=re.length,pe=_+g;for(let K=0;K<V;K++){const se=u?Y(D[K],te[K],pe):D[K];x?(A.copy(S.normals[0]).multiplyScalar(se.x),w.copy(S.binormals[0]).multiplyScalar(se.y),v.copy(T[0]).add(A).add(w),ce(v.x,v.y,v.z)):ce(se.x,se.y,0)}for(let K=1;K<=h;K++)for(let se=0;se<V;se++){const oe=u?Y(D[se],te[se],pe):D[se];x?(A.copy(S.normals[K]).multiplyScalar(oe.x),w.copy(S.binormals[K]).multiplyScalar(oe.y),v.copy(T[K]).add(A).add(w),ce(v.x,v.y,v.z)):ce(oe.x,oe.y,d/h*K)}for(let K=p-1;K>=0;K--){const se=K/p,oe=f*Math.cos(se*Math.PI/2),le=_*Math.sin(se*Math.PI/2)+g;for(let de=0,Oe=B.length;de<Oe;de++){const De=Y(B[de],$[de],le);ce(De.x,De.y,d+oe)}for(let de=0,Oe=I.length;de<Oe;de++){const De=I[de];C=P[de];for(let Ve=0,qe=De.length;Ve<qe;Ve++){const U=Y(De[Ve],C[Ve],le);x?ce(U.x,U.y+T[h-1].y,T[h-1].x+oe):ce(U.x,U.y,d+oe)}}}Ce(),H();function Ce(){const K=i.length/3;if(u){let se=0,oe=V*se;for(let le=0;le<_e;le++){const de=re[le];Te(de[2]+oe,de[1]+oe,de[0]+oe)}se=h+p*2,oe=V*se;for(let le=0;le<_e;le++){const de=re[le];Te(de[0]+oe,de[1]+oe,de[2]+oe)}}else{for(let se=0;se<_e;se++){const oe=re[se];Te(oe[2],oe[1],oe[0])}for(let se=0;se<_e;se++){const oe=re[se];Te(oe[0]+V*h,oe[1]+V*h,oe[2]+V*h)}}n.addGroup(K,i.length/3-K,0)}function H(){const K=i.length/3;let se=0;Z(B,se),se+=B.length;for(let oe=0,le=I.length;oe<le;oe++){const de=I[oe];Z(de,se),se+=de.length}n.addGroup(K,i.length/3-K,1)}function Z(K,se){let oe=K.length;for(;--oe>=0;){const le=oe;let de=oe-1;de<0&&(de=K.length-1);for(let Oe=0,De=h+p*2;Oe<De;Oe++){const Ve=V*Oe,qe=V*(Oe+1),U=se+le+Ve,it=se+de+Ve,Qe=se+de+qe,R=se+le+qe;he(U,it,Qe,R)}}}function ce(K,se,oe){l.push(K),l.push(se),l.push(oe)}function Te(K,se,oe){we(K),we(se),we(oe);const le=i.length/3,de=y.generateTopUV(n,i,le-3,le-2,le-1);Xe(de[0]),Xe(de[1]),Xe(de[2])}function he(K,se,oe,le){we(K),we(se),we(le),we(se),we(oe),we(le);const de=i.length/3,Oe=y.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);Xe(Oe[0]),Xe(Oe[1]),Xe(Oe[3]),Xe(Oe[1]),Xe(Oe[2]),Xe(Oe[3])}function we(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function Xe(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Xp(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new va[i.type]().fromJSON(i)),new Xi(n,e.options)}}const Wp={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new fe(s,a),new fe(o,l),new fe(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],_=e[i*3+2],g=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-d),new fe(u,1-_),new fe(g,1-m)]:[new fe(o,1-l),new fe(h,1-d),new fe(f,1-_),new fe(p,1-m)]}};function Xp(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Pa extends jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const y=m*u-a;for(let T=0;T<c;T++){const x=T*d-s;_.push(x,-y,0),g.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const T=y+c*m,x=y+c*(m+1),S=y+1+c*(m+1),w=y+1+c*m;f.push(T,x,w),f.push(x,S,w)}this.setIndex(f),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class xa extends jt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new F,_=new fe;for(let g=0;g<=i;g++){for(let p=0;p<=n;p++){const m=s+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}d+=u}for(let g=0;g<i;g++){const p=g*(n+1);for(let m=0;m<n;m++){const y=m+p,T=y,x=y+n+1,S=y+n+2,w=y+1;o.push(T,x,w),o.push(x,S,w)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ma extends jt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new F,u=new F,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const y=[],T=m/n,x=a+T*o,S=e*Math.cos(x),w=Math.sqrt(e*e-S*S);let A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){const E=v/t,D=i+E*s;d.x=-w*Math.cos(D),d.y=S,d.z=w*Math.sin(D),_.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),p.push(E+A,1-T),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const T=h[m][y+1],x=h[m][y],S=h[m+1][y],w=h[m+1][y+1];(m!==0||a>0)&&f.push(T,x,w),(m!==n-1||l<Math.PI)&&f.push(x,S,w)}this.setIndex(f),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bn extends jt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new F,f=new F,_=new F;for(let g=0;g<=n;g++){const p=a+g/n*o;for(let m=0;m<=i;m++){const y=m/i*s;f.x=(e+t*Math.cos(p))*Math.cos(y),f.y=(e+t*Math.cos(p))*Math.sin(y),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(m/i),d.push(g/n)}}for(let g=1;g<=n;g++)for(let p=1;p<=i;p++){const m=(i+1)*g+p-1,y=(i+1)*(g-1)+p-1,T=(i+1)*(g-1)+p,x=(i+1)*g+p;l.push(m,y,x),l.push(y,T,x)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Zl extends jt{constructor(e=new Ou(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new F,l=new F,c=new fe;let h=new F;const d=[],u=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function g(){for(let T=0;T<t;T++)p(T);p(s===!1?t:0),y(),m()}function p(T){h=e.getPointAt(T/t,h);const x=a.normals[T],S=a.binormals[T];for(let w=0;w<=i;w++){const A=w/i*Math.PI*2,v=Math.sin(A),E=-Math.cos(A);l.x=E*x.x+v*S.x,l.y=E*x.y+v*S.y,l.z=E*x.z+v*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let T=1;T<=t;T++)for(let x=1;x<=i;x++){const S=(i+1)*(T-1)+(x-1),w=(i+1)*T+(x-1),A=(i+1)*T+x,v=(i+1)*(T-1)+x;_.push(S,w,v),_.push(w,A,v)}}function y(){for(let T=0;T<=t;T++)for(let x=0;x<=i;x++)c.x=T/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Zl(new va[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Or(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(sh(i))i.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(sh(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Jt(r){const e={};for(let t=0;t<r.length;t++){const n=Or(r[t]);for(const i in n)e[i]=n[i]}return e}function sh(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function qp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Yp={clone:Or,merge:Jt};var Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=Kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=qp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(i.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Jp extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mt extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ah extends Mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $p extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qp extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kl extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const fo=new wt,oh=new F,lh=new F;class Wu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(oh),lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(fo,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===fs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $s=new F,Qs=new Ri,zn=new F;class Xu extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($s,Qs,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Qs,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($s,Qs,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Qs,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new F,ch=new fe,hh=new fe;class fn extends Xu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,ch,hh),t.subVectors(hh,ch)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jp extends Wu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class uh extends Kl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Jl extends Xu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class em extends Wu{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dh extends Kl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new em}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class tm extends Kl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const gr=-90,vr=1;class nm extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(gr,vr,e,t);i.layers=this.layers,this.add(i);const s=new fn(gr,vr,e,t);s.layers=this.layers,this.add(s);const a=new fn(gr,vr,e,t);a.layers=this.layers,this.add(a);const o=new fn(gr,vr,e,t);o.layers=this.layers,this.add(o);const l=new fn(gr,vr,e,t);l.layers=this.layers,this.add(l);const c=new fn(gr,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class im extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,We("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class fh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Sc=class Sc{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Sc.prototype.isMatrix2=!0;let ph=Sc;class sm extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function mh(r,e,t,n){const i=am(n);switch(t){case xu:return r*e;case Su:return r*e/i.components*i.byteLength;case Bl:return r*e/i.components*i.byteLength;case tr:return r*e*2/i.components*i.byteLength;case zl:return r*e*2/i.components*i.byteLength;case Mu:return r*e*3/i.components*i.byteLength;case Un:return r*e*4/i.components*i.byteLength;case kl:return r*e*4/i.components*i.byteLength;case ra:case sa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case aa:case oa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bo:case ko:return Math.max(r,16)*Math.max(e,8)/4;case Fo:case zo:return Math.max(r,8)*Math.max(e,8)/2;case Ho:case Go:case Wo:case Xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vo:case fa:case qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case jo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case tl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case nl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case il:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ol:case ll:case cl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hl:case ul:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pa:case dl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function am(r){switch(r){case pn:case mu:return{byteLength:1,components:1};case us:case _u:case Kn:return{byteLength:2,components:1};case Ol:case Fl:return{byteLength:2,components:4};case Zn:case Ul:case Wn:return{byteLength:4,components:1};case gu:case vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qu(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function om(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
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
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
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
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,ym=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Im=`vec3 transformedNormal = objectNormal;
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
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,e_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,a_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o_=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,__=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v_=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D_=`#ifdef USE_NORMALMAP
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
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Y_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,J_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ig=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_g=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,gg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,bg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Eg=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wg=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Ag=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Cg=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Rg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pg=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Lg=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Ig=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Ng=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Og=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Fg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,zg=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,kg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Hg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Je={alphahash_fragment:lm,alphahash_pars_fragment:cm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:_m,batching_vertex:gm,begin_vertex:vm,beginnormal_vertex:xm,bsdfs:Mm,iridescence_fragment:Sm,bumpmap_pars_fragment:ym,clipping_planes_fragment:bm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:wm,color_fragment:Am,color_pars_fragment:Cm,color_pars_vertex:Rm,color_vertex:Pm,common:Dm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Im,displacementmap_pars_vertex:Nm,displacementmap_vertex:Um,emissivemap_fragment:Om,emissivemap_pars_fragment:Fm,colorspace_fragment:Bm,colorspace_pars_fragment:zm,envmap_fragment:km,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Gm,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:e_,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:Zm,gradientmap_pars_fragment:Km,lightmap_pars_fragment:Jm,lights_lambert_fragment:$m,lights_lambert_pars_fragment:Qm,lights_pars_begin:jm,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:r_,lights_physical_fragment:s_,lights_physical_pars_fragment:a_,lights_fragment_begin:o_,lights_fragment_maps:l_,lights_fragment_end:c_,lightprobes_pars_fragment:h_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:d_,logdepthbuf_pars_vertex:f_,logdepthbuf_vertex:p_,map_fragment:m_,map_pars_fragment:__,map_particle_fragment:g_,map_particle_pars_fragment:v_,metalnessmap_fragment:x_,metalnessmap_pars_fragment:M_,morphinstance_vertex:S_,morphcolor_vertex:y_,morphnormal_vertex:b_,morphtarget_pars_vertex:E_,morphtarget_vertex:T_,normal_fragment_begin:w_,normal_fragment_maps:A_,normal_pars_fragment:C_,normal_pars_vertex:R_,normal_vertex:P_,normalmap_pars_fragment:D_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:U_,opaque_fragment:O_,packing:F_,premultiplied_alpha_fragment:B_,project_vertex:z_,dithering_fragment:k_,dithering_pars_fragment:H_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:W_,shadowmap_pars_vertex:X_,shadowmap_vertex:q_,shadowmask_pars_fragment:Y_,skinbase_vertex:Z_,skinning_pars_vertex:K_,skinning_vertex:J_,skinnormal_vertex:$_,specularmap_fragment:Q_,specularmap_pars_fragment:j_,tonemapping_fragment:eg,tonemapping_pars_fragment:tg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:rg,uv_pars_vertex:sg,uv_vertex:ag,worldpos_vertex:og,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:dg,cube_frag:fg,depth_vert:pg,depth_frag:mg,distance_vert:_g,distance_frag:gg,equirect_vert:vg,equirect_frag:xg,linedashed_vert:Mg,linedashed_frag:Sg,meshbasic_vert:yg,meshbasic_frag:bg,meshlambert_vert:Eg,meshlambert_frag:Tg,meshmatcap_vert:wg,meshmatcap_frag:Ag,meshnormal_vert:Cg,meshnormal_frag:Rg,meshphong_vert:Pg,meshphong_frag:Dg,meshphysical_vert:Lg,meshphysical_frag:Ig,meshtoon_vert:Ng,meshtoon_frag:Ug,points_vert:Og,points_frag:Fg,shadow_vert:Bg,shadow_frag:zg,sprite_vert:kg,sprite_frag:Hg},ye={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Gn={basic:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Jt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Jt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Jt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Jt([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Jt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Jt([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Jt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Jt([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Jt([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Jt([ye.lights,ye.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Gn.physical={uniforms:Jt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const js={r:0,b:0,g:0},Gg=new wt,Yu=new Ye;Yu.set(-1,0,0,0,1,0,0,0,1);function Vg(r,e,t,n,i,s){const a=new et(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const x=y.backgroundBlurriness>0;T=e.get(T,x)}return T}function _(y){let T=!1;const x=f(y);x===null?p(a,o):x&&x.isColor&&(p(x,1),T=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,T){const x=f(T);x&&(x.isCubeTexture||x.mapping===Ra)?(c===void 0&&(c=new He(new $t(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Or(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yu),c.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,(h!==x||d!==x.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new He(new Pa(2,2),new Jn({name:"BackgroundMaterial",uniforms:Or(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,T){y.getRGB(js,Vu(r)),t.buffers.color.setClear(js.r,js.g,js.b,T,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:_,addToRenderList:g,dispose:m}}function Wg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(I,N,O,L,B){let Y=!1;const V=d(I,L,O,N);s!==V&&(s=V,c(s.object)),Y=f(I,L,O,B),Y&&_(I,L,O,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(I,N,O,L),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function d(I,N,O,L){const B=L.wireframe===!0;let Y=n[N.id];Y===void 0&&(Y={},n[N.id]=Y);const V=I.isInstancedMesh===!0?I.id:0;let ne=Y[V];ne===void 0&&(ne={},Y[V]=ne);let $=ne[O.id];$===void 0&&($={},ne[O.id]=$);let P=$[B];return P===void 0&&(P=u(l()),$[B]=P),P}function u(I){const N=[],O=[],L=[];for(let B=0;B<t;B++)N[B]=0,O[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,N,O,L){const B=s.attributes,Y=N.attributes;let V=0;const ne=O.getAttributes();for(const $ in ne)if(ne[$].location>=0){const C=B[$];let te=Y[$];if(te===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),C===void 0||C.attribute!==te||te&&C.data!==te.data)return!0;V++}return s.attributesNum!==V||s.index!==L}function _(I,N,O,L){const B={},Y=N.attributes;let V=0;const ne=O.getAttributes();for(const $ in ne)if(ne[$].location>=0){let C=Y[$];C===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(C=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(C=I.instanceColor));const te={};te.attribute=C,C&&C.data&&(te.data=C.data),B[$]=te,V++}s.attributes=B,s.attributesNum=V,s.index=L}function g(){const I=s.newAttributes;for(let N=0,O=I.length;N<O;N++)I[N]=0}function p(I){m(I,0)}function m(I,N){const O=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;O[I]=1,L[I]===0&&(r.enableVertexAttribArray(I),L[I]=1),B[I]!==N&&(r.vertexAttribDivisor(I,N),B[I]=N)}function y(){const I=s.newAttributes,N=s.enabledAttributes;for(let O=0,L=N.length;O<L;O++)N[O]!==I[O]&&(r.disableVertexAttribArray(O),N[O]=0)}function T(I,N,O,L,B,Y,V){V===!0?r.vertexAttribIPointer(I,N,O,B,Y):r.vertexAttribPointer(I,N,O,L,B,Y)}function x(I,N,O,L){g();const B=L.attributes,Y=O.getAttributes(),V=N.defaultAttributeValues;for(const ne in Y){const $=Y[ne];if($.location>=0){let P=B[ne];if(P===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(P=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(P=I.instanceColor)),P!==void 0){const C=P.normalized,te=P.itemSize,re=e.get(P);if(re===void 0)continue;const _e=re.buffer,pe=re.type,Ce=re.bytesPerElement,H=pe===r.INT||pe===r.UNSIGNED_INT||P.gpuType===Ul;if(P.isInterleavedBufferAttribute){const Z=P.data,ce=Z.stride,Te=P.offset;if(Z.isInstancedInterleavedBuffer){for(let he=0;he<$.locationSize;he++)m($.location+he,Z.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let he=0;he<$.locationSize;he++)p($.location+he);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let he=0;he<$.locationSize;he++)T($.location+he,te/$.locationSize,pe,C,ce*Ce,(Te+te/$.locationSize*he)*Ce,H)}else{if(P.isInstancedBufferAttribute){for(let Z=0;Z<$.locationSize;Z++)m($.location+Z,P.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let Z=0;Z<$.locationSize;Z++)p($.location+Z);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Z=0;Z<$.locationSize;Z++)T($.location+Z,te/$.locationSize,pe,C,te*Ce,te/$.locationSize*Z*Ce,H)}}else if(V!==void 0){const C=V[ne];if(C!==void 0)switch(C.length){case 2:r.vertexAttrib2fv($.location,C);break;case 3:r.vertexAttrib3fv($.location,C);break;case 4:r.vertexAttrib4fv($.location,C);break;default:r.vertexAttrib1fv($.location,C)}}}}y()}function S(){E();for(const I in n){const N=n[I];for(const O in N){const L=N[O];for(const B in L){const Y=L[B];for(const V in Y)h(Y[V].object),delete Y[V];delete L[B]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;const N=n[I.id];for(const O in N){const L=N[O];for(const B in L){const Y=L[B];for(const V in Y)h(Y[V].object),delete Y[V];delete L[B]}}delete n[I.id]}function A(I){for(const N in n){const O=n[N];for(const L in O){const B=O[L];if(B[I.id]===void 0)continue;const Y=B[I.id];for(const V in Y)h(Y[V].object),delete Y[V];delete B[I.id]}}}function v(I){for(const N in n){const O=n[N],L=I.isInstancedMesh===!0?I.id:0,B=O[L];if(B!==void 0){for(const Y in B){const V=B[Y];for(const ne in V)h(V[ne].object),delete V[ne];delete B[Y]}delete O[L],Object.keys(O).length===0&&delete n[N]}}}function E(){D(),a=!0,s!==i&&(s=i,c(s.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function Xg(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function qg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Un&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pn&&A!==Wn&&!v&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:x,maxSamples:S,samples:w}}function Yg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ai,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,T=y*4;let x=m.clippingState||null;l.value=x,x=h(_,u,T,f);for(let S=0;S!==T;++S)x[S]=t[S];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,x=f;T!==g;++T,x+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const Tr=4,Zg=6,Kg=20,Jg=256,Kr=new Jl,_h=new et;let po=null,mo=0,_o=0,go=!1;const $g=new F,Hi=new F;class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=$g}=s;po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(po,mo,_o),this._renderer.xr.enabled=go,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Kn,format:Un,colorSpace:ma,depthBuffer:!1},i=vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qg(s)),this._blurMaterial=e0(s,e,t),this._ggxMaterial=jg(s,e,t)}return i}_compileMaterial(e){const t=new He(new jt,e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,n,i,s){const l=new fn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(_h),d.toneMapping=Yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new $t,new Ru({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(_h),m=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[T],s.y,s.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[T]));const S=this._cubeSize;xr(i,x*S,T>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(g,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===er||e.mapping===Nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-Tr?n-_+Tr:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,xr(s,p,m,3*g,2*g),i.setRenderTarget(s),i.render(o,Kr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,xr(e,p,m,3*g,2*g),i.setRenderTarget(e),i.render(o,Kr)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-Tr?i-this._lodMax+Tr:0),u=4*(this._cubeSize-h);xr(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Kr)}}function Qg(r){const e=[],t=[];let n=r;const i=r-Tr+1+Zg;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,_=new Float32Array(f*u*d),g=new Float32Array(f*u*d);for(let m=0;m<d;m++){const y=m%3*2/3-1,T=m>2?0:-1,x=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];_.set(x,f*u*m);for(let S=0;S<u;S++){const w=h[S*2]*2-1,A=h[S*2+1]*2-1;m===0?Hi.set(1,A,w):m===1?Hi.set(-w,1,-A):m===2?Hi.set(-w,A,1):m===3?Hi.set(-1,A,-w):m===4?Hi.set(-w,-1,A):Hi.set(w,A,-1),Hi.toArray(g,(m*u+S)*f)}}const p=new jt;p.setAttribute("position",new ui(_,f)),p.setAttribute("outputDirection",new ui(g,f)),t.push(new He(p,null)),n>Tr&&n--}return{lodMeshes:t,sizeLods:e}}function vh(r,e,t){const n=new On(r,e,t);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function jg(r,e,t){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Da(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function e0(r,e,t){return new Jn({name:"SphericalGaussianBlur",defines:{SAMPLES:Kg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Da(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function xh(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Mh(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Da(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zu extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Pu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $t(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:ci});s.uniforms.tEquirect.value=t;const a=new He(i,s),o=t.minFilter;return t.minFilter===qi&&(t.minFilter=Wt),new nm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function t0(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Ba||f===za)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const g=new Zu(_.height);return g.fromEquirectangularTexture(r,u),e.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,_=f===Ba||f===za,g=f===er||f===Nr;if(_||g){let p=t.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new gh(r)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return _&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new gh(r)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Ba?u.mapping=er:f===za&&(u.mapping=Nr),u}function l(u){let f=0;const _=6;for(let g=0;g<_;g++)u[g]!==void 0&&f++;return f===_}function c(u){const f=u.target;f.removeEventListener("dispose",c);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function n0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Rr("WebGLRenderer: "+n+" extension not supported."),i}}}function i0(r,e,t,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,_=d.attributes.position;let g=0;if(_===void 0)return;if(f!==null){const y=f.array;g=f.version;for(let T=0,x=y.length;T<x;T+=3){const S=y[T+0],w=y[T+1],A=y[T+2];u.push(S,w,w,A,A,S)}}else{const y=_.array;g=_.version;for(let T=0,x=y.length/3-1;T<x;T+=3){const S=T+0,w=T+1,A=T+2;u.push(S,w,w,A,A,S)}}const p=new(_.count>=65535?Au:wu)(u,1);p.version=g;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function r0(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let g=0;for(let p=0;p<f;p++)g+=u[p];t.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function s0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function a0(r,e,t){const n=new WeakMap,i=new bt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let D=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var f=D;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let S=o.attributes.position.count*x,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*w*4*d),v=new bu(A,S,w,d);v.type=Wn,v.needsUpdate=!0;const E=x*4;for(let I=0;I<d;I++){const N=m[I],O=y[I],L=T[I],B=S*w*4*I;for(let Y=0;Y<N.count;Y++){const V=Y*E;_===!0&&(i.fromBufferAttribute(N,Y),A[B+V+0]=i.x,A[B+V+1]=i.y,A[B+V+2]=i.z,A[B+V+3]=0),g===!0&&(i.fromBufferAttribute(O,Y),A[B+V+4]=i.x,A[B+V+5]=i.y,A[B+V+6]=i.z,A[B+V+7]=0),p===!0&&(i.fromBufferAttribute(L,Y),A[B+V+8]=i.x,A[B+V+9]=i.y,A[B+V+10]=i.z,A[B+V+11]=L.itemSize===4?i.w:1)}}u={count:d,texture:v,size:new fe(S,w)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function o0(r,e,t,n,i){let s=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const l0={[lu]:"LINEAR_TONE_MAPPING",[cu]:"REINHARD_TONE_MAPPING",[hu]:"CINEON_TONE_MAPPING",[Nl]:"ACES_FILMIC_TONE_MAPPING",[du]:"AGX_TONE_MAPPING",[fu]:"NEUTRAL_TONE_MAPPING",[uu]:"CUSTOM_TONE_MAPPING"};function c0(r,e,t,n,i,s){const a=new On(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new jt;c.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gt([0,2,0,0,2,0],2));const h=new Jp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new He(c,h),u=new Jl(-1,1,1,-1,0,1);let f=null,_=null,g=!1,p,m=null,y=[],T=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),l!==null&&l.setSize(x,S);for(let w=0;w<y.length;w++){const A=y[w];A.setSize&&A.setSize(x,S)}},this.setEffects=function(x){y=x,T=y.length>0&&y[0].isRenderPass===!0;const S=a.width,w=a.height;y.length>0&&o===null&&(o=new On(S,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new On(S,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){const v=y[A];v.setSize&&v.setSize(S,w)}},this.begin=function(x,S){if(g||x.toneMapping===Yn&&y.length===0)return!1;if(m=S,S!==null){const w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return T===!1&&x.setRenderTarget(a),p=x.toneMapping,x.toneMapping=Yn,!0},this.hasRenderPass=function(){return T},this.end=function(x,S){x.toneMapping=p,g=!0;let w=a,A=o;for(let v=0;v<y.length;v++){const E=y[v];E.enabled!==!1&&(E.render(x,A,w,S),E.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(f!==x.outputColorSpace||_!==x.toneMapping){f=x.outputColorSpace,_=x.toneMapping,h.defines={},tt.getTransfer(f)===ct&&(h.defines.SRGB_TRANSFER="");const v=l0[_];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(m),x.render(d,u),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Ku=new Xt,gl=new ps(1,1),Ju=new bu,$u=new $f,Qu=new Pu,Sh=[],yh=[],bh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function Vr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sh[i];if(s===void 0&&(s=new Float32Array(i),Sh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function La(r,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function h0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function u0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function d0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function f0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function p0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Th.set(n),r.uniformMatrix2fv(this.addr,!1,Th),Ut(t,n)}}function m0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Eh.set(n),r.uniformMatrix3fv(this.addr,!1,Eh),Ut(t,n)}}function _0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;bh.set(n),r.uniformMatrix4fv(this.addr,!1,bh),Ut(t,n)}}function g0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function v0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function x0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function M0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function S0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function b0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function E0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function T0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(gl.compareFunction=t.isReversedDepthBuffer()?Gl:Hl,s=gl):s=Ku,t.setTexture2D(e||s,i)}function w0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$u,i)}function A0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qu,i)}function C0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ju,i)}function R0(r){switch(r){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return _0;case 5124:case 35670:return g0;case 35667:case 35671:return v0;case 35668:case 35672:return x0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return y0;case 36295:return b0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return C0}}function P0(r,e){r.uniform1fv(this.addr,e)}function D0(r,e){const t=Vr(e,this.size,2);r.uniform2fv(this.addr,t)}function L0(r,e){const t=Vr(e,this.size,3);r.uniform3fv(this.addr,t)}function I0(r,e){const t=Vr(e,this.size,4);r.uniform4fv(this.addr,t)}function N0(r,e){const t=Vr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function U0(r,e){const t=Vr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function O0(r,e){const t=Vr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function F0(r,e){r.uniform1iv(this.addr,e)}function B0(r,e){r.uniform2iv(this.addr,e)}function z0(r,e){r.uniform3iv(this.addr,e)}function k0(r,e){r.uniform4iv(this.addr,e)}function H0(r,e){r.uniform1uiv(this.addr,e)}function G0(r,e){r.uniform2uiv(this.addr,e)}function V0(r,e){r.uniform3uiv(this.addr,e)}function W0(r,e){r.uniform4uiv(this.addr,e)}function X0(r,e,t){const n=this.cache,i=e.length,s=La(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=gl:a=Ku;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function q0(r,e,t){const n=this.cache,i=e.length,s=La(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||$u,s[a])}function Y0(r,e,t){const n=this.cache,i=e.length,s=La(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Qu,s[a])}function Z0(r,e,t){const n=this.cache,i=e.length,s=La(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ju,s[a])}function K0(r){switch(r){case 5126:return P0;case 35664:return D0;case 35665:return L0;case 35666:return I0;case 35674:return N0;case 35675:return U0;case 35676:return O0;case 5124:case 35670:return F0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return k0;case 5125:return H0;case 36294:return G0;case 36295:return V0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}class J0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=R0(t.type)}}class $0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K0(t.type)}}class Q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function wh(r,e){r.seq.push(e),r.map[e.id]=e}function j0(r,e,t){const n=r.name,i=n.length;for(vo.lastIndex=0;;){const s=vo.exec(n),a=vo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){wh(t,c===void 0?new J0(o,r,e):new $0(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Q0(o),wh(t,d)),t=d}}}class ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);j0(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ah(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const ev=37297;let tv=0;function nv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ch=new Ye;function iv(r){tt._getMatrix(Ch,tt.workingColorSpace,r);const e=`mat3( ${Ch.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case _a:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Rh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+nv(r.getShaderSource(e),o)}else return s}function rv(r,e){const t=iv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sv={[lu]:"Linear",[cu]:"Reinhard",[hu]:"Cineon",[Nl]:"ACESFilmic",[du]:"AgX",[fu]:"Neutral",[uu]:"Custom"};function av(r,e){const t=sv[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new F;function ov(){tt.getLuminanceCoefficients(ea);const r=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function cv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function es(r){return r!==""}function Ph(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(r){return r.replace(uv,fv)}const dv=new Map;function fv(r,e){let t=Je[e];if(t===void 0){const n=dv.get(e);if(n!==void 0)t=Je[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vl(t)}const pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(r){return r.replace(pv,mv)}function mv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ih(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _v={[ia]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function gv(r){return _v[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vv={[er]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE_UV"};function xv(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vv[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mv={[Nr]:"ENVMAP_MODE_REFRACTION"};function Sv(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Mv[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yv={[ou]:"ENVMAP_BLENDING_MULTIPLY",[Af]:"ENVMAP_BLENDING_MIX",[Cf]:"ENVMAP_BLENDING_ADD"};function bv(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yv[r.combine]||"ENVMAP_BLENDING_NONE"}function Ev(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Tv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=gv(t),c=xv(t),h=Sv(t),d=bv(t),u=Ev(t),f=lv(t),_=cv(s),g=i.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(es).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(es).join(`
`),m.length>0&&(m+=`
`)):(p=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),m=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Yn?av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,rv("linearToOutputTexel",t.outputColorSpace),ov(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),a=vl(a),a=Ph(a,t),a=Dh(a,t),o=vl(o),o=Ph(o,t),o=Dh(o,t),a=Lh(a),o=Lh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=y+p+a,x=y+m+o,S=Ah(i,i.VERTEX_SHADER,T),w=Ah(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(I){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g)||"",O=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(w)||"",B=N.trim(),Y=O.trim(),V=L.trim();let ne=!0,$=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,S,w);else{const P=Rh(i,S,"vertex"),C=Rh(i,w,"fragment");st("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+P+`
`+C)}else B!==""?We("WebGLProgram: Program Info Log:",B):(Y===""||V==="")&&($=!1);$&&(I.diagnostics={runnable:ne,programLog:B,vertexShader:{log:Y,prefix:p},fragmentShader:{log:V,prefix:m}})}i.deleteShader(S),i.deleteShader(w),v=new ca(i,g),E=hv(i,g)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,ev)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}let wv=0;class Av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cv(e),t.set(e,n)),n}}class Cv{constructor(e){this.id=wv++,this.code=e,this.usedTimes=0}}function Rv(r){return r===tr||r===fa||r===pa}function Pv(r,e,t,n,i,s){const a=new Eu,o=new Av,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,E,D,I,N,O){const L=I.fog,B=N.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ne=e.get(v.envMap||Y,V),$=ne&&ne.mapping===Ra?ne.image.height:null,P=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const C=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=C!==void 0?C.length:0;let re=0;B.morphAttributes.position!==void 0&&(re=1),B.morphAttributes.normal!==void 0&&(re=2),B.morphAttributes.color!==void 0&&(re=3);let _e,pe,Ce,H;if(P){const mt=Gn[P];_e=mt.vertexShader,pe=mt.fragmentShader}else{_e=v.vertexShader,pe=v.fragmentShader;const mt=o.getVertexShaderStage(v),ot=o.getFragmentShaderStage(v);o.update(v,mt,ot),Ce=mt.id,H=ot.id}const Z=r.getRenderTarget(),ce=r.state.buffers.depth.getReversed(),Te=N.isInstancedMesh===!0,he=N.isBatchedMesh===!0,we=!!v.map,Xe=!!v.matcap,K=!!ne,se=!!v.aoMap,oe=!!v.lightMap,le=!!v.bumpMap&&v.wireframe===!1,de=!!v.normalMap,Oe=!!v.displacementMap,De=!!v.emissiveMap,Ve=!!v.metalnessMap,qe=!!v.roughnessMap,U=v.anisotropy>0,it=v.clearcoat>0,Qe=v.dispersion>0,R=v.retroreflectivity>0,M=v.iridescence>0,G=v.sheen>0,q=v.transmission>0,Q=U&&!!v.anisotropyMap,ue=it&&!!v.clearcoatMap,me=it&&!!v.clearcoatNormalMap,j=it&&!!v.clearcoatRoughnessMap,ie=M&&!!v.iridescenceMap,ge=M&&!!v.iridescenceThicknessMap,Be=G&&!!v.sheenColorMap,Se=G&&!!v.sheenRoughnessMap,ve=!!v.specularMap,ze=!!v.specularColorMap,Ge=!!v.specularIntensityMap,Ze=q&&!!v.transmissionMap,k=q&&!!v.thicknessMap,xe=!!v.gradientMap,ee=!!v.alphaMap,Me=v.alphaTest>0,Ae=!!v.alphaHash,ae=!!v.extensions;let ke=Yn;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ke=r.toneMapping);const Ue={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:_e,fragmentShader:pe,defines:v.defines,customVertexShaderID:Ce,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:he,batchingColor:he&&N._colorsTexture!==null,instancing:Te,instancingColor:Te&&N.instanceColor!==null,instancingMorph:Te&&N.morphTexture!==null,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:we,matcap:Xe,envMap:K,envMapMode:K&&ne.mapping,envMapCubeUVHeight:$,aoMap:se,lightMap:oe,bumpMap:le,normalMap:de,displacementMap:Oe,emissiveMap:De,normalMapObjectSpace:de&&v.normalMapType===Df,normalMapTangentSpace:de&&v.normalMapType===fl,packedNormalMap:de&&v.normalMapType===fl&&Rv(v.normalMap.format),metalnessMap:Ve,roughnessMap:qe,anisotropy:U,anisotropyMap:Q,clearcoat:it,clearcoatMap:ue,clearcoatNormalMap:me,clearcoatRoughnessMap:j,dispersion:Qe,retroreflection:R,iridescence:M,iridescenceMap:ie,iridescenceThicknessMap:ge,sheen:G,sheenColorMap:Be,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:ze,specularIntensityMap:Ge,transmission:q,transmissionMap:Ze,thicknessMap:k,gradientMap:xe,opaque:v.transparent===!1&&v.blending===is&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:Me,alphaHash:Ae,combine:v.combine,mapUv:we&&_(v.map.channel),aoMapUv:se&&_(v.aoMap.channel),lightMapUv:oe&&_(v.lightMap.channel),bumpMapUv:le&&_(v.bumpMap.channel),normalMapUv:de&&_(v.normalMap.channel),displacementMapUv:Oe&&_(v.displacementMap.channel),emissiveMapUv:De&&_(v.emissiveMap.channel),metalnessMapUv:Ve&&_(v.metalnessMap.channel),roughnessMapUv:qe&&_(v.roughnessMap.channel),anisotropyMapUv:Q&&_(v.anisotropyMap.channel),clearcoatMapUv:ue&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(v.sheenRoughnessMap.channel),specularMapUv:ve&&_(v.specularMap.channel),specularColorMapUv:ze&&_(v.specularColorMap.channel),specularIntensityMapUv:Ge&&_(v.specularIntensityMap.channel),transmissionMapUv:Ze&&_(v.transmissionMap.channel),thicknessMapUv:k&&_(v.thicknessMap.channel),alphaMapUv:ee&&_(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(de||U),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(we||ee),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&de===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:re,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:we&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===ct,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===In,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)E.push(D),E.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(E,v),y(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const E=f[v.type];let D;if(E){const I=Gn[E];D=Yp.clone(I.uniforms)}else D=v.uniforms;return D}function x(v,E){let D=h.get(E);return D!==void 0?++D.usedTimes:(D=new Tv(r,E,v,i),c.push(D),h.set(E,D)),D}function S(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:x,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function Dv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Lv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Nh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Uh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,g,p,m){let y=r[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:p,group:m},r[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=_,y.materialVariant=a(u),y.groupOrder=g,y.renderOrder=u.renderOrder,y.z=p,y.group=m),e++,y}function l(u,f,_,g,p,m,y){y.reversedDepth===!0&&(p=-p);const T=o(u,f,_,g,p,m);_.transmission>0?n.push(T):_.transparent===!0?i.push(T):t.push(T)}function c(u,f,_,g,p,m){const y=o(u,f,_,g,p,m);_.transmission>0?n.unshift(y):_.transparent===!0?i.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||Lv),n.length>1&&n.sort(f||Nh),i.length>1&&i.sort(f||Nh)}function d(){for(let u=e,f=r.length;u<f;u++){const _=r[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function Iv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Uh,r.set(n,[a])):i>=s.length?(a=new Uh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Nv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new et};break;case"SpotLight":t={position:new F,direction:new F,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function Uv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ov=0;function Fv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Bv(r){const e=new Nv,t=Uv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new wt,a=new wt;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,y=0,T=0,x=0,S=0,w=0,A=0,v=0,E=0,D=0;c.sort(Fv);for(let N=0,O=c.length;N<O;N++){const L=c[N],B=L.color,Y=L.intensity,V=L.distance;let ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===tr?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*Y,d+=B.g*Y,u+=B.b*Y;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],Y);D++}else if(L.isSunLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const P=L.shadow,C=t.get(L);C.shadowIntensity=P.intensity,C.shadowBias=P.bias,C.shadowNormalBias=P.normalBias,C.shadowRadius=P.radius,C.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[_]=C,n.sunShadowMap[_]=ne;const te=P.getViewportCount();for(let re=0;re<te;re++)n.sunShadowMatrix[g+re]=P.getMatrix(re),n.sunShadowCascade[g+re]=P._cascadeData[re];g+=te,_++}n.sun[f]=$,f++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const P=L.shadow,C=t.get(L);C.shadowIntensity=P.intensity,C.shadowBias=P.bias,C.shadowNormalBias=P.normalBias,C.shadowRadius=P.radius,C.shadowMapSize=P.mapSize,n.directionalShadow[p]=C,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=$,p++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(B).multiplyScalar(Y),$.distance=V,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[y]=$;const P=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,P.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[y]=P.matrix,L.castShadow){const C=t.get(L);C.shadowIntensity=P.intensity,C.shadowBias=P.bias,C.shadowNormalBias=P.normalBias,C.shadowRadius=P.radius,C.shadowMapSize=P.mapSize,n.spotShadow[y]=C,n.spotShadowMap[y]=ne,A++}y++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(B).multiplyScalar(Y),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=$,T++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const P=L.shadow,C=t.get(L);C.shadowIntensity=P.intensity,C.shadowBias=P.bias,C.shadowNormalBias=P.normalBias,C.shadowRadius=P.radius,C.shadowMapSize=P.mapSize,C.shadowCameraNear=P.camera.near,C.shadowCameraFar=P.camera.far,n.pointShadow[m]=C,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=L.shadow.matrix,w++}n.point[m]=$,m++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(Y),$.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[x]=$,x++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==y||I.rectAreaLength!==T||I.hemiLength!==x||I.numSunShadows!==_||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==v||I.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=T,n.point.length=m,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=D,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=y,I.rectAreaLength=T,I.hemiLength=x,I.numSunShadows=_,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=v,I.numLightProbes=D,n.version=Ov++)}function l(c,h){let d=0,u=0,f=0,_=0,g=0,p=0;const m=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const x=c[y];if(x.isSunLight){const S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),d++}else if(x.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(x.isSpotLight){const S=n.spot[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),_++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Oh(r){const e=new Bv(r),t=[],n=[],i=[];function s(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function zv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Oh(r),e.set(i,[o])):s>=a.length?(o=new Oh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gv=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Vv=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Fh=new wt,Jr=new F,xo=new F;function Wv(r,e,t){let n=new Xl;const i=new fe,s=new fe,a=new bt,o=new $p,l=new Qp,c={},h=t.maxTextureSize,d={[ji]:Qt,[Qt]:ji,[In]:In},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:kv,fragmentShader:Hv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new jt;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new He(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let m=this.type;this.render=function(w,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===ru&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ia);const E=r.getRenderTarget(),D=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ci),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=m!==this.type;O&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=w.length;L<B;L++){const Y=w[L],V=Y.shadow;if(V===void 0){We("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ne=V.getFrameExtents();i.multiply(ne),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,V.mapSize.y=s.y));const $=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=$,V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Qr){if(Y.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new On(i.x,i.y,{format:tr,type:Kn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new ps(i.x,i.y,Wn),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=di,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt}else Y.isPointLight?(V.map=new Zu(i.x),V.map.depthTexture=new mp(i.x,Zn)):(V.map=new On(i.x,i.y),V.map.depthTexture=new ps(i.x,i.y,Zn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=di,this.type===ia?(V.map.depthTexture.compareFunction=$?Gl:Hl,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);const P=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,v);for(let C=0;C<P;C++){const te=V.getCamera(C);if(Y.isPointLight){const re=V.camera,_e=V.matrix,pe=Y.distance||re.far;pe!==re.far&&(re.far=pe,re.updateProjectionMatrix()),Jr.setFromMatrixPosition(Y.matrixWorld),re.position.copy(Jr),xo.copy(re.position),xo.add(Gv[C]),re.up.copy(Vv[C]),re.lookAt(xo),re.updateMatrixWorld(),_e.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Fh.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Fh,re.coordinateSystem,re.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,C),r.clear();else{C===0&&(r.setRenderTarget(V.map),r.clear());const re=V.getViewport(C);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),N.viewport(a)}n=V.getFrustum(C),x(A,v,te,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Qr&&y(V,v),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(E,D,I)};function y(w,A){const v=e.update(g);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new On(i.x,i.y,{format:tr,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,v,u,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,v,f,g,null)}function T(w,A,v,E){let D=null;const I=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)D=I;else if(D=v.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=D.uuid,O=A.uuid;let L=c[N];L===void 0&&(L={},c[N]=L);let B=L[O];B===void 0&&(B=D.clone(),L[O]=B,A.addEventListener("dispose",S)),D=B}if(D.visible=A.visible,D.wireframe=A.wireframe,E===Qr?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:d[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const N=r.properties.get(D);N.light=v}return D}function x(w,A,v,E,D){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Qr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const O=e.update(w),L=w.material;if(Array.isArray(L)){const B=O.groups;for(let Y=0,V=B.length;Y<V;Y++){const ne=B[Y],$=L[ne.materialIndex];if($&&$.visible){const P=T(w,$,E,D);w.onBeforeShadow(r,w,A,v,O,P,ne),r.renderBufferDirect(v,null,O,P,w,ne),w.onAfterShadow(r,w,A,v,O,P,ne)}}}else if(L.visible){const B=T(w,L,E,D);w.onBeforeShadow(r,w,A,v,O,B,null),r.renderBufferDirect(v,null,O,B,w,null),w.onAfterShadow(r,w,A,v,O,B,null)}}const N=w.children;for(let O=0,L=N.length;O<L;O++)x(N[O],A,v,E,D)}function S(w){w.target.removeEventListener("dispose",S);for(const v in c){const E=c[v],D=w.target.uuid;D in E&&(E[D].dispose(),delete E[D])}}}function Xv(r,e){function t(){let k=!1;const xe=new bt;let ee=null;const Me=new bt(0,0,0,0);return{setMask:function(Ae){ee!==Ae&&!k&&(r.colorMask(Ae,Ae,Ae,Ae),ee=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,ae,ke,Ue,mt){mt===!0&&(Ae*=Ue,ae*=Ue,ke*=Ue),xe.set(Ae,ae,ke,Ue),Me.equals(xe)===!1&&(r.clearColor(Ae,ae,ke,Ue),Me.copy(xe))},reset:function(){k=!1,ee=null,Me.set(-1,0,0,0)}}}function n(){let k=!1,xe=!1,ee=null,Me=null,Ae=null;return{setReversed:function(ae){if(xe!==ae){const ke=e.get("EXT_clip_control");ae?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),xe=ae;const Ue=Ae;Ae=null,this.setClear(Ue)}},getReversed:function(){return xe},setTest:function(ae){ae?Z(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(ae){ee!==ae&&!k&&(r.depthMask(ae),ee=ae)},setFunc:function(ae){if(xe&&(ae=Vf[ae]),Me!==ae){switch(ae){case Ro:r.depthFunc(r.NEVER);break;case Po:r.depthFunc(r.ALWAYS);break;case Do:r.depthFunc(r.LESS);break;case hs:r.depthFunc(r.LEQUAL);break;case Lo:r.depthFunc(r.EQUAL);break;case Io:r.depthFunc(r.GEQUAL);break;case No:r.depthFunc(r.GREATER);break;case Uo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=ae}},setLocked:function(ae){k=ae},setClear:function(ae){Ae!==ae&&(Ae=ae,xe&&(ae=1-ae),r.clearDepth(ae))},reset:function(){k=!1,ee=null,Me=null,Ae=null,xe=!1}}}function i(){let k=!1,xe=null,ee=null,Me=null,Ae=null,ae=null,ke=null,Ue=null,mt=null;return{setTest:function(ot){k||(ot?Z(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!k&&(r.stencilMask(ot),xe=ot)},setFunc:function(ot,Cn,Fn){(ee!==ot||Me!==Cn||Ae!==Fn)&&(r.stencilFunc(ot,Cn,Fn),ee=ot,Me=Cn,Ae=Fn)},setOp:function(ot,Cn,Fn){(ae!==ot||ke!==Cn||Ue!==Fn)&&(r.stencilOp(ot,Cn,Fn),ae=ot,ke=Cn,Ue=Fn)},setLocked:function(ot){k=ot},setClear:function(ot){mt!==ot&&(r.clearStencil(ot),mt=ot)},reset:function(){k=!1,xe=null,ee=null,Me=null,Ae=null,ae=null,ke=null,Ue=null,mt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,_=[],g=null,p=!1,m=null,y=null,T=null,x=null,S=null,w=null,A=null,v=new et(0,0,0),E=0,D=!1,I=null,N=null,O=null,L=null,B=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ne=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec($)[1]),V=ne>=1):$.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=ne>=2);let P=null,C={};const te=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),_e=new bt().fromArray(te),pe=new bt().fromArray(re);function Ce(k,xe,ee,Me){const Ae=new Uint8Array(4),ae=r.createTexture();r.bindTexture(k,ae),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<ee;ke++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(xe+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return ae}const H={};H[r.TEXTURE_2D]=Ce(r.TEXTURE_2D,r.TEXTURE_2D,1),H[r.TEXTURE_CUBE_MAP]=Ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[r.TEXTURE_2D_ARRAY]=Ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),H[r.TEXTURE_3D]=Ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(hs),le(!1),de(Lc),Z(r.CULL_FACE),se(ci);function Z(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function ce(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function Te(k,xe){return u[k]!==xe?(r.bindFramebuffer(k,xe),u[k]=xe,k===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=xe),k===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function he(k,xe){let ee=_,Me=!1;if(k){ee=f.get(xe),ee===void 0&&(ee=[],f.set(xe,ee));const Ae=k.textures;if(ee.length!==Ae.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let ae=0,ke=Ae.length;ae<ke;ae++)ee[ae]=r.COLOR_ATTACHMENT0+ae;ee.length=Ae.length,Me=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ee)}function we(k){return g!==k?(r.useProgram(k),g=k,!0):!1}const Xe={[Sr]:r.FUNC_ADD,[hf]:r.FUNC_SUBTRACT,[uf]:r.FUNC_REVERSE_SUBTRACT};Xe[df]=r.MIN,Xe[ff]=r.MAX;const K={[pf]:r.ZERO,[mf]:r.ONE,[_f]:r.SRC_COLOR,[su]:r.SRC_ALPHA,[yf]:r.SRC_ALPHA_SATURATE,[Mf]:r.DST_COLOR,[vf]:r.DST_ALPHA,[gf]:r.ONE_MINUS_SRC_COLOR,[au]:r.ONE_MINUS_SRC_ALPHA,[Sf]:r.ONE_MINUS_DST_COLOR,[xf]:r.ONE_MINUS_DST_ALPHA,[bf]:r.CONSTANT_COLOR,[Ef]:r.ONE_MINUS_CONSTANT_COLOR,[Tf]:r.CONSTANT_ALPHA,[wf]:r.ONE_MINUS_CONSTANT_ALPHA};function se(k,xe,ee,Me,Ae,ae,ke,Ue,mt,ot){if(k===ci){p===!0&&(ce(r.BLEND),p=!1);return}if(p===!1&&(Z(r.BLEND),p=!0),k!==cf){if(k!==m||ot!==D){if((y!==Sr||S!==Sr)&&(r.blendEquation(r.FUNC_ADD),y=Sr,S=Sr),ot)switch(k){case is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ic:r.blendFunc(r.ONE,r.ONE);break;case Nc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:st("WebGLState: Invalid blending: ",k);break}else switch(k){case is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ic:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Nc:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",k);break}T=null,x=null,w=null,A=null,v.set(0,0,0),E=0,m=k,D=ot}return}Ae=Ae||xe,ae=ae||ee,ke=ke||Me,(xe!==y||Ae!==S)&&(r.blendEquationSeparate(Xe[xe],Xe[Ae]),y=xe,S=Ae),(ee!==T||Me!==x||ae!==w||ke!==A)&&(r.blendFuncSeparate(K[ee],K[Me],K[ae],K[ke]),T=ee,x=Me,w=ae,A=ke),(Ue.equals(v)===!1||mt!==E)&&(r.blendColor(Ue.r,Ue.g,Ue.b,mt),v.copy(Ue),E=mt),m=k,D=!1}function oe(k,xe){k.side===In?ce(r.CULL_FACE):Z(r.CULL_FACE);let ee=k.side===Qt;xe&&(ee=!ee),le(ee),k.blending===is&&k.transparent===!1?se(ci):se(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const Me=k.stencilWrite;o.setTest(Me),Me&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(k){I!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),I=k)}function de(k){k!==of?(Z(r.CULL_FACE),k!==N&&(k===Lc?r.cullFace(r.BACK):k===lf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),N=k}function Oe(k){k!==O&&(V&&r.lineWidth(k),O=k)}function De(k,xe,ee){k?(Z(r.POLYGON_OFFSET_FILL),(L!==xe||B!==ee)&&(L=xe,B=ee,a.getReversed()&&(xe=-xe),r.polygonOffset(xe,ee))):ce(r.POLYGON_OFFSET_FILL)}function Ve(k){k?Z(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function qe(k){k===void 0&&(k=r.TEXTURE0+Y-1),P!==k&&(r.activeTexture(k),P=k)}function U(k,xe,ee){ee===void 0&&(P===null?ee=r.TEXTURE0+Y-1:ee=P);let Me=C[ee];Me===void 0&&(Me={type:void 0,texture:void 0},C[ee]=Me),(Me.type!==k||Me.texture!==xe)&&(P!==ee&&(r.activeTexture(ee),P=ee),r.bindTexture(k,xe||H[k]),Me.type=k,Me.texture=xe)}function it(){const k=C[P];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(k){st("WebGLState:",k)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(k){st("WebGLState:",k)}}function M(){try{r.texSubImage2D(...arguments)}catch(k){st("WebGLState:",k)}}function G(){try{r.texSubImage3D(...arguments)}catch(k){st("WebGLState:",k)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(k){st("WebGLState:",k)}}function Q(){try{r.compressedTexSubImage3D(...arguments)}catch(k){st("WebGLState:",k)}}function ue(){try{r.texStorage2D(...arguments)}catch(k){st("WebGLState:",k)}}function me(){try{r.texStorage3D(...arguments)}catch(k){st("WebGLState:",k)}}function j(){try{r.texImage2D(...arguments)}catch(k){st("WebGLState:",k)}}function ie(){try{r.texImage3D(...arguments)}catch(k){st("WebGLState:",k)}}function ge(k){return d[k]!==void 0?d[k]:r.getParameter(k)}function Be(k,xe){d[k]!==xe&&(r.pixelStorei(k,xe),d[k]=xe)}function Se(k){_e.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),_e.copy(k))}function ve(k){pe.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),pe.copy(k))}function ze(k,xe){let ee=c.get(xe);ee===void 0&&(ee=new WeakMap,c.set(xe,ee));let Me=ee.get(k);Me===void 0&&(Me=r.getUniformBlockIndex(xe,k.name),ee.set(k,Me))}function Ge(k,xe){const Me=c.get(xe).get(k);l.get(xe)!==Me&&(r.uniformBlockBinding(xe,Me,k.__bindingPointIndex),l.set(xe,Me))}function Ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,C={},u={},f=new WeakMap,_=[],g=null,p=!1,m=null,y=null,T=null,x=null,S=null,w=null,A=null,v=new et(0,0,0),E=0,D=!1,I=null,N=null,O=null,L=null,B=null,_e.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:ce,bindFramebuffer:Te,drawBuffers:he,useProgram:we,setBlending:se,setMaterial:oe,setFlipSided:le,setCullFace:de,setLineWidth:Oe,setPolygonOffset:De,setScissorTest:Ve,activeTexture:qe,bindTexture:U,unbindTexture:it,compressedTexImage2D:Qe,compressedTexImage3D:R,texImage2D:j,texImage3D:ie,pixelStorei:Be,getParameter:ge,updateUBOMapping:ze,uniformBlockBinding:Ge,texStorage2D:ue,texStorage3D:me,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:Se,viewport:ve,reset:Ze}}function qv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return _?new OffscreenCanvas(R,M):ga("canvas")}function p(R,M,G){let q=1;const Q=Qe(R);if((Q.width>G||Q.height>G)&&(q=G/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(q*Q.width),me=Math.floor(q*Q.height);u===void 0&&(u=g(ue,me));const j=M?g(ue,me):u;return j.width=ue,j.height=me,j.getContext("2d").drawImage(R,0,0,ue,me),We("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+me+")."),j}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function y(R){r.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,M,G,q,Q,ue=!1){if(R!==null){if(r[R]!==void 0)return r[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let me;q&&(me=e.get("EXT_texture_norm16"),me||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===r.RED&&(G===r.FLOAT&&(j=r.R32F),G===r.HALF_FLOAT&&(j=r.R16F),G===r.UNSIGNED_BYTE&&(j=r.R8),G===r.UNSIGNED_SHORT&&me&&(j=me.R16_EXT),G===r.SHORT&&me&&(j=me.R16_SNORM_EXT)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.R8UI),G===r.UNSIGNED_SHORT&&(j=r.R16UI),G===r.UNSIGNED_INT&&(j=r.R32UI),G===r.BYTE&&(j=r.R8I),G===r.SHORT&&(j=r.R16I),G===r.INT&&(j=r.R32I)),M===r.RG&&(G===r.FLOAT&&(j=r.RG32F),G===r.HALF_FLOAT&&(j=r.RG16F),G===r.UNSIGNED_BYTE&&(j=r.RG8),G===r.UNSIGNED_SHORT&&me&&(j=me.RG16_EXT),G===r.SHORT&&me&&(j=me.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RG8UI),G===r.UNSIGNED_SHORT&&(j=r.RG16UI),G===r.UNSIGNED_INT&&(j=r.RG32UI),G===r.BYTE&&(j=r.RG8I),G===r.SHORT&&(j=r.RG16I),G===r.INT&&(j=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGB8UI),G===r.UNSIGNED_SHORT&&(j=r.RGB16UI),G===r.UNSIGNED_INT&&(j=r.RGB32UI),G===r.BYTE&&(j=r.RGB8I),G===r.SHORT&&(j=r.RGB16I),G===r.INT&&(j=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),G===r.UNSIGNED_INT&&(j=r.RGBA32UI),G===r.BYTE&&(j=r.RGBA8I),G===r.SHORT&&(j=r.RGBA16I),G===r.INT&&(j=r.RGBA32I)),M===r.RGB&&(G===r.UNSIGNED_SHORT&&me&&(j=me.RGB16_EXT),G===r.SHORT&&me&&(j=me.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),M===r.RGBA){const ie=ue?_a:tt.getTransfer(Q);G===r.FLOAT&&(j=r.RGBA32F),G===r.HALF_FLOAT&&(j=r.RGBA16F),G===r.UNSIGNED_BYTE&&(j=ie===ct?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&me&&(j=me.RGBA16_EXT),G===r.SHORT&&me&&(j=me.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(R,M){let G;return R?M===null||M===Zn||M===ds?G=r.DEPTH24_STENCIL8:M===Wn?G=r.DEPTH32F_STENCIL8:M===us&&(G=r.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zn||M===ds?G=r.DEPTH_COMPONENT24:M===Wn?G=r.DEPTH_COMPONENT32F:M===us&&(G=r.DEPTH_COMPONENT16),G}function w(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==Wt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function v(R){const M=R.target;M.removeEventListener("dispose",v),I(M)}function E(R){const M=n.get(R);if(M.__webglInit===void 0)return;const G=R.source,q=f.get(G);if(q){const Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(R),Object.keys(q).length===0&&f.delete(G)}n.remove(R)}function D(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const G=R.source,q=f.get(G);delete q[M.__cacheKey],a.memory.textures--}function I(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Q=0;Q<M.__webglFramebuffer[q].length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[q][Q]);else r.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)r.deleteFramebuffer(M.__webglFramebuffer[q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=R.textures;for(let q=0,Q=G.length;q<Q;q++){const ue=n.get(G[q]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(G[q])}n.remove(R)}let N=0;function O(){N=0}function L(){return N}function B(R){N=R}function Y(){const R=N;return R>=i.maxTextures&&We("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ne(R,M){const G=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const q=R.image;if(q===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,R,M);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function $(R,M){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ce(G,R,M);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function P(R,M){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ce(G,R,M);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function C(R,M){const G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Te(G,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}const te={[Ln]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[Oo]:r.MIRRORED_REPEAT},re={[Bt]:r.NEAREST,[Rf]:r.NEAREST_MIPMAP_NEAREST,[Ds]:r.NEAREST_MIPMAP_LINEAR,[Wt]:r.LINEAR,[ka]:r.LINEAR_MIPMAP_NEAREST,[qi]:r.LINEAR_MIPMAP_LINEAR},_e={[If]:r.NEVER,[Bf]:r.ALWAYS,[Nf]:r.LESS,[Hl]:r.LEQUAL,[Uf]:r.EQUAL,[Gl]:r.GEQUAL,[Of]:r.GREATER,[Ff]:r.NOTEQUAL};function pe(R,M){if(M.type===Wn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wt||M.magFilter===ka||M.magFilter===Ds||M.magFilter===qi||M.minFilter===Wt||M.minFilter===ka||M.minFilter===Ds||M.minFilter===qi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,te[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,re[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==Ds&&M.minFilter!==qi||M.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ce(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const q=M.source;let Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));const ue=V(M);if(ue!==R.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[ue].usedTimes++;const me=Q[R.__cacheKey];me!==void 0&&(Q[R.__cacheKey].usedTimes--,me.usedTimes===0&&D(M)),R.__cacheKey=ue,R.__webglTexture=Q[ue].texture}return G}function H(R,M,G){return Math.floor(Math.floor(R/G)/M)}function Z(R,M,G,q){const ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,G,q,M.data);else{ue.sort((Be,Se)=>Be.start-Se.start);let me=0;for(let Be=1;Be<ue.length;Be++){const Se=ue[me],ve=ue[Be],ze=Se.start+Se.count,Ge=H(ve.start,M.width,4),Ze=H(Se.start,M.width,4);ve.start<=ze+1&&Ge===Ze&&H(ve.start+ve.count-1,M.width,4)===Ge?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++me,ue[me]=ve)}ue.length=me+1;const j=t.getParameter(r.UNPACK_ROW_LENGTH),ie=t.getParameter(r.UNPACK_SKIP_PIXELS),ge=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Be=0,Se=ue.length;Be<Se;Be++){const ve=ue[Be],ze=Math.floor(ve.start/4),Ge=Math.ceil(ve.count/4),Ze=ze%M.width,k=Math.floor(ze/M.width),xe=Ge,ee=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(r.UNPACK_SKIP_ROWS,k),t.texSubImage2D(r.TEXTURE_2D,0,Ze,k,xe,ee,G,q,M.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,j),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(r.UNPACK_SKIP_ROWS,ge)}}function ce(R,M,G){let q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=r.TEXTURE_3D);const Q=Ce(R,M),ue=M.source;t.bindTexture(q,R.__webglTexture,r.TEXTURE0+G);const me=n.get(ue);if(ue.version!==me.__version||Q===!0){if(t.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ee=tt.getPrimaries(tt.workingColorSpace),Me=M.colorSpace===bi?null:tt.getPrimaries(M.colorSpace),Ae=M.colorSpace===bi||ee===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let ie=p(M.image,!1,i.maxTextureSize);ie=it(M,ie);const ge=s.convert(M.format,M.colorSpace),Be=s.convert(M.type);let Se=x(M.internalFormat,ge,Be,M.normalized,M.colorSpace,M.isVideoTexture);pe(q,M);let ve;const ze=M.mipmaps,Ge=M.isVideoTexture!==!0,Ze=me.__version===void 0||Q===!0,k=ue.dataReady,xe=w(M,ie);if(M.isDepthTexture)Se=S(M.format===Yi,M.type),Ze&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,Se,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Se,ie.width,ie.height,0,ge,Be,null));else if(M.isDataTexture)if(ze.length>0){Ge&&Ze&&t.texStorage2D(r.TEXTURE_2D,xe,Se,ze[0].width,ze[0].height);for(let ee=0,Me=ze.length;ee<Me;ee++)ve=ze[ee],Ge?k&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ve.width,ve.height,ge,Be,ve.data):t.texImage2D(r.TEXTURE_2D,ee,Se,ve.width,ve.height,0,ge,Be,ve.data);M.generateMipmaps=!1}else Ge?(Ze&&t.texStorage2D(r.TEXTURE_2D,xe,Se,ie.width,ie.height),k&&Z(M,ie,ge,Be)):t.texImage2D(r.TEXTURE_2D,0,Se,ie.width,ie.height,0,ge,Be,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ge&&Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,Se,ze[0].width,ze[0].height,ie.depth);for(let ee=0,Me=ze.length;ee<Me;ee++)if(ve=ze[ee],M.format!==Un)if(ge!==null)if(Ge){if(k)if(M.layerUpdates.size>0){const Ae=mh(ve.width,ve.height,M.format,M.type);for(const ae of M.layerUpdates){const ke=ve.data.subarray(ae*Ae/ve.data.BYTES_PER_ELEMENT,(ae+1)*Ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,ae,ve.width,ve.height,1,ge,ke)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ve.width,ve.height,ie.depth,ge,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Se,ve.width,ve.height,ie.depth,0,ve.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ve.width,ve.height,ie.depth,ge,Be,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Se,ve.width,ve.height,ie.depth,0,ge,Be,ve.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ge&&Ze&&t.texStorage2D(r.TEXTURE_2D,xe,Se,ze[0].width,ze[0].height);for(let ee=0,Me=ze.length;ee<Me;ee++)ve=ze[ee],M.format!==Un?ge!==null?Ge?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Se,ve.width,ve.height,0,ve.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?k&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ve.width,ve.height,ge,Be,ve.data):t.texImage2D(r.TEXTURE_2D,ee,Se,ve.width,ve.height,0,ge,Be,ve.data)}else if(M.isDataArrayTexture)if(Ge){if(Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,Se,ie.width,ie.height,ie.depth),k)if(M.layerUpdates.size>0){const ee=mh(ie.width,ie.height,M.format,M.type);for(const Me of M.layerUpdates){const Ae=ie.data.subarray(Me*ee/ie.data.BYTES_PER_ELEMENT,(Me+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,ie.width,ie.height,1,ge,Be,Ae)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Be,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,ie.width,ie.height,ie.depth,0,ge,Be,ie.data);else if(M.isData3DTexture)Ge?(Ze&&t.texStorage3D(r.TEXTURE_3D,xe,Se,ie.width,ie.height,ie.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Be,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Se,ie.width,ie.height,ie.depth,0,ge,Be,ie.data);else if(M.isFramebufferTexture){if(Ze)if(Ge)t.texStorage2D(r.TEXTURE_2D,xe,Se,ie.width,ie.height);else{let ee=ie.width,Me=ie.height;for(let Ae=0;Ae<xe;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,Se,ee,Me,0,ge,Be,null),ee>>=1,Me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const ee=r.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ie.parentNode!==ee){ee.appendChild(ie),d.add(M),ee.onpaint=Me=>{const Ae=Me.changedElements;for(const ae of d)Ae.includes(ae.image)&&(ae.needsUpdate=!0)},ee.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ie);else{const Ae=r.RGBA,ae=r.RGBA,ke=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ae,ae,ke,ie)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ge&&Ze){const ee=Qe(ze[0]);t.texStorage2D(r.TEXTURE_2D,xe,Se,ee.width,ee.height)}for(let ee=0,Me=ze.length;ee<Me;ee++)ve=ze[ee],Ge?k&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ge,Be,ve):t.texImage2D(r.TEXTURE_2D,ee,Se,ge,Be,ve);M.generateMipmaps=!1}else if(Ge){if(Ze){const ee=Qe(ie);t.texStorage2D(r.TEXTURE_2D,xe,Se,ee.width,ee.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,Be,ie)}else t.texImage2D(r.TEXTURE_2D,0,Se,ge,Be,ie);m(M)&&y(q),me.__version=ue.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Te(R,M,G){if(M.image.length!==6)return;const q=Ce(R,M),Q=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);const ue=n.get(Q);if(Q.version!==ue.__version||q===!0){t.activeTexture(r.TEXTURE0+G);const me=tt.getPrimaries(tt.workingColorSpace),j=M.colorSpace===bi?null:tt.getPrimaries(M.colorSpace),ie=M.colorSpace===bi||me===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let ae=0;ae<6;ae++)!ge&&!Be?Se[ae]=p(M.image[ae],!0,i.maxCubemapSize):Se[ae]=Be?M.image[ae].image:M.image[ae],Se[ae]=it(M,Se[ae]);const ve=Se[0],ze=s.convert(M.format,M.colorSpace),Ge=s.convert(M.type),Ze=x(M.internalFormat,ze,Ge,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,xe=ue.__version===void 0||q===!0,ee=Q.dataReady;let Me=w(M,ve);pe(r.TEXTURE_CUBE_MAP,M);let Ae;if(ge){k&&xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Ze,ve.width,ve.height);for(let ae=0;ae<6;ae++){Ae=Se[ae].mipmaps;for(let ke=0;ke<Ae.length;ke++){const Ue=Ae[ke];M.format!==Un?ze!==null?k?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,0,0,Ue.width,Ue.height,ze,Ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,Ze,Ue.width,Ue.height,0,Ue.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,0,0,Ue.width,Ue.height,ze,Ge,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,Ze,Ue.width,Ue.height,0,ze,Ge,Ue.data)}}}else{if(Ae=M.mipmaps,k&&xe){Ae.length>0&&Me++;const ae=Qe(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Be){k?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Se[ae].width,Se[ae].height,ze,Ge,Se[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ze,Se[ae].width,Se[ae].height,0,ze,Ge,Se[ae].data);for(let ke=0;ke<Ae.length;ke++){const mt=Ae[ke].image[ae].image;k?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,0,0,mt.width,mt.height,ze,Ge,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,Ze,mt.width,mt.height,0,ze,Ge,mt.data)}}else{k?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ze,Ge,Se[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ze,ze,Ge,Se[ae]);for(let ke=0;ke<Ae.length;ke++){const Ue=Ae[ke];k?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,0,0,ze,Ge,Ue.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,Ze,ze,Ge,Ue.image[ae])}}}m(M)&&y(r.TEXTURE_CUBE_MAP),ue.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function he(R,M,G,q,Q,ue){const me=s.convert(G.format,G.colorSpace),j=s.convert(G.type),ie=x(G.internalFormat,me,j,G.normalized,G.colorSpace),ge=n.get(M),Be=n.get(G);if(Be.__renderTarget=M,!ge.__hasExternalTextures){const Se=Math.max(1,M.width>>ue),ve=Math.max(1,M.height>>ue);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,ie,Se,ve,M.depth,0,me,j,null):t.texImage2D(Q,ue,ie,Se,ve,0,me,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),qe(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,Q,Be.__webglTexture,0,Ve(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,Q,Be.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const q=M.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ue=S(M.stencilBuffer,Q),me=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve(M),ue,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve(M),ue,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ue,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,R)}else{const q=M.textures;for(let Q=0;Q<q.length;Q++){const ue=q[Q],me=s.convert(ue.format,ue.colorSpace),j=s.convert(ue.type),ie=x(ue.internalFormat,me,j,ue.normalized,ue.colorSpace);qe(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve(M),ie,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve(M),ie,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ie,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xe(R,M,G){const q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),pe(r.TEXTURE_CUBE_MAP,M.depthTexture);const ge=s.convert(M.depthTexture.format),Be=s.convert(M.depthTexture.type);let Se;M.depthTexture.format===di?Se=r.DEPTH_COMPONENT24:M.depthTexture.format===Yi&&(Se=r.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,M.width,M.height,0,ge,Be,null)}}else ne(M.depthTexture,0);const ue=Q.__webglTexture,me=Ve(M),j=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,ie=M.depthTexture.format===Yi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===di)qe(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,j,ue,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,ie,j,ue,0);else if(M.depthTexture.format===Yi)qe(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,j,ue,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,ie,j,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(R){const M=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)Xe(M.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?Xe(M.__webglFramebuffer[0],R,0):Xe(M.__webglFramebuffer,R,0)}else if(G){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=r.createRenderbuffer(),we(M.__webglDepthbuffer[q],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ue)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),we(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ue)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(R,M,G){const q=n.get(R);M!==void 0&&he(q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&K(R)}function oe(R){const M=R.texture,G=n.get(R),q=n.get(M);R.addEventListener("dispose",v);const Q=R.textures,ue=R.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=M.version,a.memory.textures++),ue){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let ie=0;ie<M.mipmaps.length;ie++)G.__webglFramebuffer[j][ie]=r.createFramebuffer()}else G.__webglFramebuffer[j]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)G.__webglFramebuffer[j]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(me)for(let j=0,ie=Q.length;j<ie;j++){const ge=n.get(Q[j]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&qe(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const ie=Q[j];G.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[j]);const ge=s.convert(ie.format,ie.colorSpace),Be=s.convert(ie.type),Se=x(ie.internalFormat,ge,Be,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ve=Ve(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,Se,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,G.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),we(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),pe(r.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)he(G.__webglFramebuffer[j][ie],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else he(G.__webglFramebuffer[j],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(M)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let j=0,ie=Q.length;j<ie;j++){const ge=Q[j],Be=n.get(ge);let Se=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,Be.__webglTexture),pe(Se,ge),he(G.__webglFramebuffer,R,ge,r.COLOR_ATTACHMENT0+j,Se,0),m(ge)&&y(Se)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),pe(j,M),M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)he(G.__webglFramebuffer[ie],R,M,r.COLOR_ATTACHMENT0,j,ie);else he(G.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,j,0);m(M)&&y(j),t.unbindTexture()}R.depthBuffer&&K(R)}function le(R){const M=R.textures;for(let G=0,q=M.length;G<q;G++){const Q=M[G];if(m(Q)){const ue=T(R),me=n.get(Q).__webglTexture;t.bindTexture(ue,me),y(ue),t.unbindTexture()}}}const de=[],Oe=[];function De(R){if(R.samples>0){if(qe(R)===!1){const M=R.textures,G=R.width,q=R.height;let Q=r.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=n.get(R),j=M.length>1;if(j)for(let ge=0;ge<M.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Be=n.get(M[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,G,q,0,0,G,q,Q,r.NEAREST),l===!0&&(de.length=0,Oe.length=0,de.push(r.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(de.push(ue),Oe.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let ge=0;ge<M.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Be=n.get(M[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,Be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ve(R){return Math.min(i.maxSamples,R.samples)}function qe(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function it(R,M){const G=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==ma&&G!==bi&&(tt.getTransfer(G)===ct?(q!==Un||Q!==pn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",G)),M}function Qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=ne,this.setTexture2DArray=$,this.setTexture3D=P,this.setTextureCube=C,this.rebindTextures=se,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=he,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yv(r,e){function t(n,i=bi){let s;const a=tt.getTransfer(i);if(n===pn)return r.UNSIGNED_BYTE;if(n===Ol)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===mu)return r.BYTE;if(n===_u)return r.SHORT;if(n===us)return r.UNSIGNED_SHORT;if(n===Ul)return r.INT;if(n===Zn)return r.UNSIGNED_INT;if(n===Wn)return r.FLOAT;if(n===Kn)return r.HALF_FLOAT;if(n===xu)return r.ALPHA;if(n===Mu)return r.RGB;if(n===Un)return r.RGBA;if(n===di)return r.DEPTH_COMPONENT;if(n===Yi)return r.DEPTH_STENCIL;if(n===Su)return r.RED;if(n===Bl)return r.RED_INTEGER;if(n===tr)return r.RG;if(n===zl)return r.RG_INTEGER;if(n===kl)return r.RGBA_INTEGER;if(n===ra||n===sa||n===aa||n===oa)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Bo||n===zo||n===ko)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===fa||n===qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ho||n===Go)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wo)return s.COMPRESSED_R11_EAC;if(n===Xo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===fa)return s.COMPRESSED_RG11_EAC;if(n===qo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yo||n===Zo||n===Ko||n===Jo||n===$o||n===Qo||n===jo||n===el||n===tl||n===nl||n===il||n===rl||n===sl||n===al)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Yo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ko)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===ll||n===cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ol)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hl||n===ul||n===pa||n===dl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===hl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ul)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Du(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:Zv,fragmentShader:Kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Pa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends Ni{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",p=new Jv,m={},y=t.getContextAttributes();let T=null,x=null;const S=[],w=[],A=new fe;let v=null,E=null;const D=new fn;D.viewport=new bt;const I=new fn;I.viewport=new bt;const N=[D,I],O=new im;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=S[H];return Z===void 0&&(Z=new Za,S[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=S[H];return Z===void 0&&(Z=new Za,S[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=S[H];return Z===void 0&&(Z=new Za,S[H]=Z),Z.getHandSpace()};function Y(H){const Z=w.indexOf(H.inputSource);if(Z===-1)return;const ce=S[Z];ce!==void 0&&(ce.update(H.inputSource,H.frame,c||a),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function V(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ne);for(let H=0;H<S.length;H++){const Z=w[H];Z!==null&&(w[H]=null,S[H].disconnect(Z))}L=null,B=null,p.reset();for(const H in m)delete m[H];if(e.setRenderTarget(T),f=null,u=null,d=null,i=null,x=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),E!==null){const H=E.camera;H.fov=E.fov,H.zoom=E.zoom,H.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Te=null,he=null;y.depth&&(he=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=y.stencil?Yi:di,Te=y.stencil?ds:Zn);const we={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(we),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new On(u.textureWidth,u.textureHeight,{format:Un,type:pn,depthTexture:new ps(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new On(f.framebufferWidth,f.framebufferHeight,{format:Un,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ce.setContext(i),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ne(H){for(let Z=0;Z<H.removed.length;Z++){const ce=H.removed[Z],Te=w.indexOf(ce);Te>=0&&(w[Te]=null,S[Te].disconnect(ce))}for(let Z=0;Z<H.added.length;Z++){const ce=H.added[Z];let Te=w.indexOf(ce);if(Te===-1){for(let we=0;we<S.length;we++)if(we>=w.length){w.push(ce),Te=we;break}else if(w[we]===null){w[we]=ce,Te=we;break}if(Te===-1)break}const he=S[Te];he&&he.connect(ce)}}const $=new F,P=new F;function C(H,Z,ce){$.setFromMatrixPosition(Z.matrixWorld),P.setFromMatrixPosition(ce.matrixWorld);const Te=$.distanceTo(P),he=Z.projectionMatrix.elements,we=ce.projectionMatrix.elements,Xe=he[14]/(he[10]-1),K=he[14]/(he[10]+1),se=(he[9]+1)/he[5],oe=(he[9]-1)/he[5],le=(he[8]-1)/he[0],de=(we[8]+1)/we[0],Oe=Xe*le,De=Xe*de,Ve=Te/(-le+de),qe=Ve*-le;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(qe),H.translateZ(Ve),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),he[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const U=Xe+Ve,it=K+Ve,Qe=Oe-qe,R=De+(Te-qe),M=se*K/it*U,G=oe*K/it*U;H.projectionMatrix.makePerspective(Qe,R,M,G,U,it),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function te(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let Z=H.near,ce=H.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(ce=p.depthFar)),O.near=I.near=D.near=Z,O.far=I.far=D.far=ce,(L!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,B=O.far),O.layers.mask=H.layers.mask|6,D.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;const Te=H.parent,he=O.cameras;te(O,Te);for(let we=0;we<he.length;we++)te(he[we],Te);he.length===2?C(O,D,I):O.projectionMatrix.copy(D.projectionMatrix),E===null&&H.isPerspectiveCamera&&(E={camera:H,fov:H.fov,zoom:H.zoom}),re(H,O,Te)};function re(H,Z,ce){ce===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=pl*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(H){return m[H]};let _e=null;function pe(H,Z){if(h=Z.getViewerPose(c||a),_=Z,h!==null){const ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Te=!1;ce.length!==O.cameras.length&&(O.cameras.length=0,Te=!0);for(let K=0;K<ce.length;K++){const se=ce[K];let oe=null;if(f!==null)oe=f.getViewport(se);else{const de=d.getViewSubImage(u,se);oe=de.viewport,K===0&&(e.setRenderTargetTextures(x,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(x))}let le=N[K];le===void 0&&(le=new fn,le.layers.enable(K),le.viewport=new bt,N[K]=le),le.matrix.fromArray(se.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(se.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(oe.x,oe.y,oe.width,oe.height),K===0&&(O.matrix.copy(le.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Te===!0&&O.cameras.push(le)}const he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const K=d.getDepthInformation(ce[0]);K&&K.isValid&&K.texture&&p.init(K,i.renderState)}if(he&&he.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let K=0;K<ce.length;K++){const se=ce[K].camera;if(se){let oe=m[se];oe||(oe=new Du,m[se]=oe);const le=d.getCameraImage(se);oe.sourceTexture=le}}}}for(let ce=0;ce<S.length;ce++){const Te=w[ce],he=S[ce];Te!==null&&he!==void 0&&he.update(Te,Z,c||a)}_e&&_e(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Ce=new qu;Ce.setAnimationLoop(pe),this.setAnimationLoop=function(H){_e=H},this.dispose=function(){}}}const Qv=new wt,ju=new Ye;ju.set(-1,0,0,0,1,0,0,0,1);function jv(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Vu(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,T,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),T=y.envMap,x=y.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ju),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ex(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const w=S.program;n.uniformBlockBinding(x,w)}function c(x,S){let w=i[x.id];w===void 0&&(p(x),w=h(x),i[x.id]=w,x.addEventListener("dispose",y));const A=S.program;n.updateUBOMapping(x,A);const v=e.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function h(x){const S=d();x.__bindingPointIndex=S;const w=r.createBuffer(),A=x.__size,v=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,A,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const S=i[x.id],w=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let v=0,E=w.length;v<E;v++){const D=w[v];if(Array.isArray(D))for(let I=0,N=D.length;I<N;I++)f(D[I],v,I,A);else f(D,v,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,S,w,A){if(g(x,S,w,A)===!0){const v=x.__offset,E=x.value;if(Array.isArray(E)){let D=0;for(let I=0;I<E.length;I++){const N=E[I],O=m(N);_(N,x.__data,D),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,x.__data)}}function _(x,S,w){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,w)}function g(x,S,w,A){const v=x.value,E=S+"_"+w;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{const D=A[E];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function p(x){const S=x.uniforms;let w=0;const A=16;for(let E=0,D=S.length;E<D;E++){const I=Array.isArray(S[E])?S[E]:[S[E]];for(let N=0,O=I.length;N<O;N++){const L=I[N],B=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,V=B.length;Y<V;Y++){const ne=B[Y],$=m(ne),P=w%A,C=P%$.boundary,te=P+C;w+=C,te!==0&&A-te<$.storage&&(w+=A-te),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=$.storage}}}const v=w%A;return v>0&&(w+=A-v),x.__size=w,x.__cache={},this}function m(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):We("WebGLRenderer: Unsupported uniform value type.",x),S}function y(x){const S=x.target;S.removeEventListener("dispose",y);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function T(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:T}}const tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function nx(){return kn===null&&(kn=new fp(tx,16,16,tr,Kn),kn.name="DFG_LUT",kn.minFilter=Wt,kn.magFilter=Wt,kn.wrapS=li,kn.wrapT=li,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class ix{constructor(e={}){const{canvas:t=Hf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=f,p=new Set([kl,zl,Bl]),m=new Set([pn,Zn,us,ds,Ol,Fl]),y=new Uint32Array(4),T=new Int32Array(4),x=new F;let S=null,w=null;const A=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1,N=null,O=null,L=null,B=null;this._outputColorSpace=Tn;let Y=0,V=0,ne=null,$=-1,P=null;const C=new bt,te=new bt;let re=null;const _e=new et(0);let pe=0,Ce=t.width,H=t.height,Z=1,ce=null,Te=null;const he=new bt(0,0,Ce,H),we=new bt(0,0,Ce,H);let Xe=!1;const K=new Xl;let se=!1,oe=!1;const le=new wt,de=new F,Oe=new bt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function qe(){return ne===null?Z:1}let U=n;function it(b,z){return t.getContext(b,z)}let Qe,R,M,G,q,Q,ue,me,j,ie,ge,Be,Se,ve,ze,Ge,Ze,k,xe,ee,Me,Ae,ae;try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Il}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Cn,!1),U===null){const z="webgl2";if(U=it(z,b),U===null)throw it(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(b){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Cn,!1),st("WebGLRenderer: "+b.message),b}function ke(){Qe=new n0(U),Qe.init(),Me=new Yv(U,Qe),R=new qg(U,Qe,e,Me),M=new Xv(U,Qe),R.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),O=U.createFramebuffer(),L=U.createFramebuffer(),B=U.createFramebuffer(),G=new s0(U),q=new Dv,Q=new qv(U,Qe,M,q,R,Me,G),ue=new t0(D),me=new om(U),Ae=new Wg(U,me),j=new i0(U,me,G,Ae),ie=new o0(U,j,me,Ae,G),k=new a0(U,R,Q),ze=new Yg(q),ge=new Pv(D,ue,Qe,R,Ae,ze),Be=new jv(D,q),Se=new Iv,ve=new zv(Qe),Ze=new Vg(D,ue,M,ie,_,l),Ge=new Wv(D,ie,R),ae=new ex(U,G,R,M),xe=new Xg(U,Qe,G),ee=new r0(U,Qe,G),G.programs=ge.programs,D.capabilities=R,D.extensions=Qe,D.properties=q,D.renderLists=Se,D.shadowMap=Ge,D.state=M,D.info=G}g!==pn&&(E=new c0(g,t.width,t.height,o,i,s));const Ue=new $v(D,U);this.xr=Ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(Ce,H,!1))},this.getSize=function(b){return b.set(Ce,H)},this.setSize=function(b,z,J=!0){if(Ue.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=b,H=z,t.width=Math.floor(b*Z),t.height=Math.floor(z*Z),J===!0&&(t.style.width=b+"px",t.style.height=z+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(Ce*Z,H*Z).floor()},this.setDrawingBufferSize=function(b,z,J){Ce=b,H=z,Z=J,t.width=Math.floor(b*J),t.height=Math.floor(z*J),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(g===pn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,z,J,W){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,z,J,W),M.viewport(C.copy(he).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(we)},this.setScissor=function(b,z,J,W){b.isVector4?we.set(b.x,b.y,b.z,b.w):we.set(b,z,J,W),M.scissor(te.copy(we).multiplyScalar(Z).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(b){M.setScissorTest(Xe=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){Te=b},this.getClearColor=function(b){return b.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,J=!0){let W=0;if(b){let X=!1;if(ne!==null){const Ee=ne.texture.format;X=p.has(Ee)}if(X){const Ee=ne.texture.type,Pe=m.has(Ee),be=Ze.getClearColor(),Ie=Ze.getClearAlpha(),Fe=be.r,Ke=be.g,je=be.b;Pe?(y[0]=Fe,y[1]=Ke,y[2]=je,y[3]=Ie,U.clearBufferuiv(U.COLOR,0,y)):(T[0]=Fe,T[1]=Ke,T[2]=je,T[3]=Ie,U.clearBufferiv(U.COLOR,0,T))}else W|=U.COLOR_BUFFER_BIT}z&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Cn,!1),Ze.dispose(),Se.dispose(),ve.dispose(),q.dispose(),ue.dispose(),ie.dispose(),Ae.dispose(),ae.dispose(),ge.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",bc),Ue.removeEventListener("sessionend",Ec),Oi.stop()};function mt(b){b.preventDefault(),Bc("WebGLRenderer: Context Lost."),I=!0}function ot(){Bc("WebGLRenderer: Context Restored."),I=!1;const b=G.autoReset,z=Ge.enabled,J=Ge.autoUpdate,W=Ge.needsUpdate,X=Ge.type;ke(),G.autoReset=b,Ge.enabled=z,Ge.autoUpdate=J,Ge.needsUpdate=W,Ge.type=X}function Cn(b){st("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Fn(b){const z=b.target;z.removeEventListener("dispose",Fn),$d(z)}function $d(b){Qd(b),q.remove(b)}function Qd(b){const z=q.get(b).programs;z!==void 0&&(z.forEach(function(J){ge.releaseProgram(J)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,J,W,X,Ee){z===null&&(z=De);const Pe=X.isMesh&&X.matrixWorld.determinantAffine()<0,be=tf(b,z,J,W,X);M.setMaterial(W,Pe);let Ie=J.index,Fe=1;if(W.wireframe===!0){if(Ie=j.getWireframeAttribute(J),Ie===void 0)return;Fe=2}const Ke=J.drawRange,je=J.attributes.position;let Ne=Ke.start*Fe,lt=(Ke.start+Ke.count)*Fe;Ee!==null&&(Ne=Math.max(Ne,Ee.start*Fe),lt=Math.min(lt,(Ee.start+Ee.count)*Fe)),Ie!==null?(Ne=Math.max(Ne,0),lt=Math.min(lt,Ie.count)):je!=null&&(Ne=Math.max(Ne,0),lt=Math.min(lt,je.count));const Pt=lt-Ne;if(Pt<0||Pt===1/0)return;Ae.setup(X,W,be,J,Ie);let vt,dt=xe;if(Ie!==null&&(vt=me.get(Ie),dt=ee,dt.setIndex(vt)),X.isMesh)W.wireframe===!0?(M.setLineWidth(W.wireframeLinewidth*qe()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(X.isLine){let kt=W.linewidth;kt===void 0&&(kt=1),M.setLineWidth(kt*qe()),X.isLineSegments?dt.setMode(U.LINES):X.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else X.isPoints?dt.setMode(U.POINTS):X.isSprite&&dt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const kt=X._multiDrawStarts,Re=X._multiDrawCounts,Zt=X._multiDrawCount,rt=Ie?me.get(Ie).bytesPerElement:1,Sn=q.get(W).currentProgram.getUniforms();for(let Bn=0;Bn<Zt;Bn++)Sn.setValue(U,"_gl_DrawID",Bn),dt.render(kt[Bn]/rt,Re[Bn])}else if(X.isInstancedMesh)dt.renderInstances(Ne,Pt,X.count);else if(J.isInstancedBufferGeometry){const kt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Re=Math.min(J.instanceCount,kt);dt.renderInstances(Ne,Pt,Re)}else dt.render(Ne,Pt)};function yc(b,z,J,W){N!==null&&b.isNodeMaterial&&N.setObject(W,b),se===!0&&ze.setState(b,J,!1),b.transparent===!0&&b.side===In&&b.forceSinglePass===!1?(b.side=Qt,b.needsUpdate=!0,Ps(b,z,W),b.side=ji,b.needsUpdate=!0,Ps(b,z,W),b.side=In):Ps(b,z,W)}this.compile=function(b,z,J=null){J===null&&(J=b),N!==null&&N.renderStart(b,z,J),w=ve.get(J),w.init(z),v.push(w),J.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),b!==J&&b.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),oe=this.localClippingEnabled,se=ze.init(this.clippingPlanes,oe),se===!0&&ze.setGlobalState(this.clippingPlanes,z),N!==null&&Ge.render(w.state.shadowsArray,J,z);const W=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const be=Ee[Pe];yc(be,J,z,X),W.add(be)}else yc(Ee,J,z,X),W.add(Ee)}),w=v.pop(),N!==null&&N.renderEnd(),W},this.compileAsync=function(b,z,J=null){const W=this.compile(b,z,J);return new Promise(X=>{function Ee(){if(W.forEach(function(Pe){const Ie=q.get(Pe).currentProgram;(Ie===void 0||Ie.isReady())&&W.delete(Pe)}),W.size===0){X(b);return}setTimeout(Ee,10)}Qe.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Oa=null;function jd(b){Oa&&Oa(b)}function bc(){Oi.stop()}function Ec(){Oi.start()}const Oi=new qu;Oi.setAnimationLoop(jd),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(b){Oa=b,Ue.setAnimationLoop(b),b===null?Oi.stop():Oi.start()},Ue.addEventListener("sessionstart",bc),Ue.addEventListener("sessionend",Ec),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(b,z);const J=Ue.enabled===!0&&Ue.isPresenting===!0,W=E!==null&&(ne===null||J)&&E.begin(D,ne);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(z),z=Ue.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,z,ne),w=ve.get(b,v.length),w.init(z),w.state.textureUnits=Q.getTextureUnits(),v.push(w),le.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(le,Xn,z.reversedDepth),oe=this.localClippingEnabled,se=ze.init(this.clippingPlanes,oe),S=Se.get(b,A.length),S.init(),A.push(S),Ue.enabled===!0&&Ue.isPresenting===!0){const Pe=D.xr.getDepthSensingMesh();Pe!==null&&Fa(Pe,z,-1/0,D.sortObjects)}Fa(b,z,0,D.sortObjects),S.finish(),N!==null&&N.updateLights(w.state.lightsArray),D.sortObjects===!0&&S.sort(ce,Te),Ve=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Ve&&Ze.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&ze.beginShadows();const X=w.state.shadowsArray;if(Ge.render(X,b,z),se===!0&&ze.endShadows(),(W&&E.hasRenderPass())===!1){const Pe=S.opaque,be=S.transmissive;if(w.setupLights(),z.isArrayCamera){const Ie=z.cameras;if(be.length>0)for(let Fe=0,Ke=Ie.length;Fe<Ke;Fe++){const je=Ie[Fe];wc(Pe,be,b,je)}Ve&&Ze.render(b);for(let Fe=0,Ke=Ie.length;Fe<Ke;Fe++){const je=Ie[Fe];Tc(S,b,je,je.viewport)}}else be.length>0&&wc(Pe,be,b,z),Ve&&Ze.render(b),Tc(S,b,z)}ne!==null&&V===0&&(Q.updateMultisampleRenderTarget(ne),Q.updateRenderTargetMipmap(ne)),W&&E.end(D),b.isScene===!0&&b.onAfterRender(D,b,z),Ae.resetDefaultState(),$=-1,P=null,v.pop(),v.length>0?(w=v[v.length-1],Q.setTextureUnits(w.state.textureUnits),se===!0&&ze.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,N!==null&&N.renderEnd()};function Fa(b,z,J,W){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(K)){W&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(le);const Pe=ie.update(b),be=b.material;be.visible&&S.push(b,Pe,be,J,Oe.z,null,z)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(K))){const Pe=ie.update(b),be=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Oe.copy(Pe.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(le)),Array.isArray(be)){const Ie=Pe.groups;for(let Fe=0,Ke=Ie.length;Fe<Ke;Fe++){const je=Ie[Fe],Ne=be[je.materialIndex];Ne&&Ne.visible&&S.push(b,Pe,Ne,J,Oe.z,je,z)}}else be.visible&&S.push(b,Pe,be,J,Oe.z,null,z)}}const Ee=b.children;for(let Pe=0,be=Ee.length;Pe<be;Pe++)Fa(Ee[Pe],z,J,W)}function Tc(b,z,J,W){const{opaque:X,transmissive:Ee,transparent:Pe}=b;w.setupLightsView(J),se===!0&&ze.setGlobalState(D.clippingPlanes,J),W&&M.viewport(C.copy(W)),X.length>0&&Rs(X,z,J),Ee.length>0&&Rs(Ee,z,J),Pe.length>0&&Rs(Pe,z,J),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function wc(b,z,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Ne=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new On(1,1,{generateMipmaps:!0,type:Ne?Kn:pn,minFilter:qi,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Ee=w.state.transmissionRenderTarget[W.id],Pe=W.viewport||C;Ee.setSize(Pe.z*D.transmissionResolutionScale,Pe.w*D.transmissionResolutionScale);const be=D.getRenderTarget(),Ie=D.getActiveCubeFace(),Fe=D.getActiveMipmapLevel();D.setRenderTarget(Ee),D.getClearColor(_e),pe=D.getClearAlpha(),pe<1&&D.setClearColor(16777215,.5),D.clear(),Ve&&Ze.render(J);const Ke=D.toneMapping;D.toneMapping=Yn;const je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),se===!0&&ze.setGlobalState(D.clippingPlanes,W),Rs(b,J,W),Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let lt=0,Pt=z.length;lt<Pt;lt++){const vt=z[lt],{object:dt,geometry:kt,material:Re,group:Zt}=vt;if(Re.side===In&&dt.layers.test(W.layers)){const rt=Re.side;Re.side=Qt,Re.needsUpdate=!0,Ac(dt,J,W,kt,Re,Zt),Re.side=rt,Re.needsUpdate=!0,Ne=!0}}Ne===!0&&(Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee))}D.setRenderTarget(be,Ie,Fe),D.setClearColor(_e,pe),je!==void 0&&(W.viewport=je),D.toneMapping=Ke}function Rs(b,z,J){const W=z.isScene===!0?z.overrideMaterial:null;for(let X=0,Ee=b.length;X<Ee;X++){const Pe=b[X],{object:be,geometry:Ie,group:Fe}=Pe;let Ke=Pe.material;Ke.allowOverride===!0&&W!==null&&(Ke=W),be.layers.test(J.layers)&&Ac(be,z,J,Ie,Ke,Fe)}}function Ac(b,z,J,W,X,Ee){N!==null&&X.isNodeMaterial&&N.setObject(b,X),b.onBeforeRender(D,z,J,W,X,Ee),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(D,z,J,W,b,Ee),X.transparent===!0&&X.side===In&&X.forceSinglePass===!1?(X.side=Qt,X.needsUpdate=!0,D.renderBufferDirect(J,z,W,X,b,Ee),X.side=ji,X.needsUpdate=!0,D.renderBufferDirect(J,z,W,X,b,Ee),X.side=In):D.renderBufferDirect(J,z,W,X,b,Ee),b.onAfterRender(D,z,J,W,X,Ee)}function Ps(b,z,J){z.isScene!==!0&&(z=De);const W=q.get(b),X=w.state.lights,Ee=w.state.shadowsArray,Pe=X.state.version,be=ge.getParameters(b,X.state,Ee,z,J,w.state.lightProbeGridArray),Ie=ge.getProgramCacheKey(be);let Fe=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;const Ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=ue.get(b.envMap||W.environment,Ke),W.envMapRotation=W.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Fn),Fe=new Map,W.programs=Fe);let je=Fe.get(Ie);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===Pe)return Rc(b,be),je}else be.uniforms=ge.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,J,be),b.onBeforeCompile(be,D),je=ge.acquireProgram(be,Ie),Fe.set(Ie,je),W.uniforms=be.uniforms;const Ne=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=ze.uniform),Rc(b,be),W.needsLights=rf(b),W.lightsStateVersion=Pe,W.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.sunLights.value=X.state.sun,Ne.sunLightShadows.value=X.state.sunShadow,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.sunShadowMatrix.value=X.state.sunShadowMatrix,Ne.sunShadowCascade.value=X.state.sunShadowCascade,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=je,W.uniformsList=null,je}function Cc(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=ca.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Rc(b,z){const J=q.get(b);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function ef(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let J=0,W=b.length;J<W;J++){const X=b[J];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function tf(b,z,J,W,X){z.isScene!==!0&&(z=De),Q.resetTextureUnits();const Ee=z.fog,Pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,be=ne===null?D.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:tt.workingColorSpace,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Fe=ue.get(W.envMap||Pe,Ie),Ke=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,je=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,Pt=!!J.morphAttributes.color;let vt=Yn;W.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(vt=D.toneMapping);const dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,kt=dt!==void 0?dt.length:0,Re=q.get(W),Zt=w.state.lights;if(se===!0&&(oe===!0||b!==P)){const _t=b===P&&W.id===$;ze.setState(W,b,_t)}let rt=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Zt.state.version||Re.outputColorSpace!==be||X.isBatchedMesh&&Re.batching===!1||!X.isBatchedMesh&&Re.batching===!0||X.isBatchedMesh&&Re.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Re.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Re.instancing===!1||!X.isInstancedMesh&&Re.instancing===!0||X.isSkinnedMesh&&Re.skinning===!1||!X.isSkinnedMesh&&Re.skinning===!0||X.isInstancedMesh&&Re.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Re.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Re.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Re.instancingMorph===!1&&X.morphTexture!==null||Re.envMap!==Fe||W.fog===!0&&Re.fog!==Ee||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ze.numPlanes||Re.numIntersection!==ze.numIntersection)||Re.vertexAlphas!==Ke||Re.vertexTangents!==je||Re.morphTargets!==Ne||Re.morphNormals!==lt||Re.morphColors!==Pt||Re.toneMapping!==vt||Re.morphTargetsCount!==kt||!!Re.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Re.__version=W.version);let Sn=Re.currentProgram;rt===!0&&(Sn=Ps(W,z,X),N&&W.isNodeMaterial&&N.onUpdateProgram(W,Sn,Re));let Bn=!1,mi=!1,rr=!1;const ut=Sn.getUniforms(),Ct=Re.uniforms;if(M.useProgram(Sn.program)&&(Bn=!0,mi=!0,rr=!0),W.id!==$&&($=W.id,mi=!0),Re.needsLights){const _t=ef(w.state.lightProbeGridArray,X);Re.lightProbeGrid!==_t&&(Re.lightProbeGrid=_t,mi=!0)}if(Bn||P!==b){M.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",b.projectionMatrix),ut.setValue(U,"viewMatrix",b.matrixWorldInverse);const gi=ut.map.cameraPosition;gi!==void 0&&gi.setValue(U,de.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),P!==b&&(P=b,mi=!0,rr=!0)}if(Re.needsLights&&(Zt.state.sunShadowMap.length>0&&ut.setValue(U,"sunShadowMap",Zt.state.sunShadowMap,Q),Zt.state.directionalShadowMap.length>0&&ut.setValue(U,"directionalShadowMap",Zt.state.directionalShadowMap,Q),Zt.state.spotShadowMap.length>0&&ut.setValue(U,"spotShadowMap",Zt.state.spotShadowMap,Q),Zt.state.pointShadowMap.length>0&&ut.setValue(U,"pointShadowMap",Zt.state.pointShadowMap,Q)),X.isSkinnedMesh){ut.setOptional(U,X,"bindMatrix"),ut.setOptional(U,X,"bindMatrixInverse");const _t=X.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ut.setValue(U,"boneTexture",_t.boneTexture,Q))}X.isBatchedMesh&&(ut.setOptional(U,X,"batchingTexture"),ut.setValue(U,"batchingTexture",X._matricesTexture,Q),ut.setOptional(U,X,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",X._indirectTexture,Q),ut.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",X._colorsTexture,Q));const _i=J.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&k.update(X,J,Sn),(mi||Re.receiveShadow!==X.receiveShadow)&&(Re.receiveShadow=X.receiveShadow,ut.setValue(U,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(Ct.envMapIntensity.value=z.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=nx()),mi){if(ut.setValue(U,"toneMappingExposure",D.toneMappingExposure),Re.needsLights&&nf(Ct,rr),Ee&&W.fog===!0&&Be.refreshFogUniforms(Ct,Ee),Be.refreshMaterialUniforms(Ct,W,Z,H,w.state.transmissionRenderTarget[b.id]),Re.needsLights&&Re.lightProbeGrid){const _t=Re.lightProbeGrid;Ct.probesSH.value=_t.texture,Ct.probesMin.value.copy(_t.boundingBox.min),Ct.probesMax.value.copy(_t.boundingBox.max),Ct.probesResolution.value.copy(_t.resolution)}ca.upload(U,Cc(Re),Ct,Q)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ca.upload(U,Cc(Re),Ct,Q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(U,"center",X.center),ut.setValue(U,"modelViewMatrix",X.modelViewMatrix),ut.setValue(U,"normalMatrix",X.normalMatrix),ut.setValue(U,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const _t=W.uniformsGroups;for(let gi=0,sr=_t.length;gi<sr;gi++){const Dc=_t[gi];ae.update(Dc,Sn),ae.bind(Dc,Sn)}}return Sn}function nf(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.sunLights.needsUpdate=z,b.sunLightShadows.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function rf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(b,z,J){const W=q.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=z,q.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const J=q.get(b);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,J=0){ne=b,Y=z,V=J;let W=null,X=!1,Ee=!1;if(b){const be=q.get(b);if(be.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(U.FRAMEBUFFER,be.__webglFramebuffer),C.copy(b.viewport),te.copy(b.scissor),re=b.scissorTest,M.viewport(C),M.scissor(te),M.setScissorTest(re),$=-1;return}else if(be.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(be.__hasExternalTextures)Q.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ke=b.depthTexture;if(be.__boundDepthTexture!==Ke){if(Ke!==null&&q.has(Ke)&&(b.width!==Ke.image.width||b.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}const Ie=b.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);const Fe=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?W=Fe[z][J]:W=Fe[z],X=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?W=q.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[J]:W=Fe,C.copy(b.viewport),te.copy(b.scissor),re=b.scissorTest}else C.copy(he).multiplyScalar(Z).floor(),te.copy(we).multiplyScalar(Z).floor(),re=Xe;if(J!==0&&(W=O),M.bindFramebuffer(U.FRAMEBUFFER,W)&&M.drawBuffers(b,W),M.viewport(C),M.scissor(te),M.setScissorTest(re),X){const be=q.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,J)}else if(Ee){const be=z;for(let Ie=0;Ie<b.textures.length;Ie++){const Fe=q.get(b.textures[Ie]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,J,be)}}else if(b!==null&&J!==0){const be=q.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,be.__webglTexture,J)}$=-1};function Pc(b){const z=q.get(b);return(z.__readFormat!==b.format||z.__readType!==b.type)&&(z.__readFormat=b.format,z.__readType=b.type,z.__formatReadable=R.textureFormatReadable(b.format),z.__typeReadable=R.textureTypeReadable(b.type)),z}this.readRenderTargetPixels=function(b,z,J,W,X,Ee,Pe,be=0){if(!(b&&b.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){M.bindFramebuffer(U.FRAMEBUFFER,Ie);try{const Fe=b.textures[be],Ke=Fe.format,je=Fe.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be);const Ne=Pc(Fe);if(Ne.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-W&&J>=0&&J<=b.height-X&&U.readPixels(z,J,W,X,Me.convert(Ke),Me.convert(je),Ee)}finally{const Fe=ne!==null?q.get(ne).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,z,J,W,X,Ee,Pe,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie)if(z>=0&&z<=b.width-W&&J>=0&&J<=b.height-X){M.bindFramebuffer(U.FRAMEBUFFER,Ie);const Fe=b.textures[be],Ke=Fe.format,je=Fe.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be);const Ne=Pc(Fe);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),U.readPixels(z,J,W,X,Me.convert(Ke),Me.convert(je),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Pt=ne!==null?q.get(ne).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,Pt);const vt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gf(U,vt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(lt),U.deleteSync(vt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,J=0){const W=Math.pow(2,-J),X=Math.floor(b.image.width*W),Ee=Math.floor(b.image.height*W),Pe=z!==null?z.x:0,be=z!==null?z.y:0;Q.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,Pe,be,X,Ee),M.unbindTexture()},this.copyTextureToTexture=function(b,z,J=null,W=null,X=0,Ee=0){let Pe,be,Ie,Fe,Ke,je,Ne,lt,Pt;const vt=b.isCompressedTexture?b.mipmaps[Ee]:b.image;if(J!==null)Pe=J.max.x-J.min.x,be=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,Fe=J.min.x,Ke=J.min.y,je=J.isBox3?J.min.z:0;else{const Ct=Math.pow(2,-X);Pe=Math.floor(vt.width*Ct),be=Math.floor(vt.height*Ct),b.isDataArrayTexture?Ie=vt.depth:b.isData3DTexture?Ie=Math.floor(vt.depth*Ct):Ie=1,Fe=0,Ke=0,je=0}W!==null?(Ne=W.x,lt=W.y,Pt=W.z):(Ne=0,lt=0,Pt=0);const dt=Me.convert(z.format),kt=Me.convert(z.type);let Re;z.isData3DTexture?(Q.setTexture3D(z,0),Re=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Q.setTexture2DArray(z,0),Re=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(z,0),Re=U.TEXTURE_2D),M.activeTexture(U.TEXTURE0),M.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),M.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),M.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Zt=M.getParameter(U.UNPACK_ROW_LENGTH),rt=M.getParameter(U.UNPACK_IMAGE_HEIGHT),Sn=M.getParameter(U.UNPACK_SKIP_PIXELS),Bn=M.getParameter(U.UNPACK_SKIP_ROWS),mi=M.getParameter(U.UNPACK_SKIP_IMAGES);M.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),M.pixelStorei(U.UNPACK_SKIP_IMAGES,je);const rr=b.isDataArrayTexture||b.isData3DTexture,ut=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const Ct=q.get(b),_i=q.get(z),_t=q.get(Ct.__renderTarget),gi=q.get(_i.__renderTarget);M.bindFramebuffer(U.READ_FRAMEBUFFER,_t.__webglFramebuffer),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let sr=0;sr<Ie;sr++)rr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(b).__webglTexture,X,je+sr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(z).__webglTexture,Ee,Pt+sr)),U.blitFramebuffer(Fe,Ke,Pe,be,Ne,lt,Pe,be,U.DEPTH_BUFFER_BIT,U.NEAREST);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||q.has(b)){const Ct=q.get(b),_i=q.get(z);M.bindFramebuffer(U.READ_FRAMEBUFFER,L),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let _t=0;_t<Ie;_t++)rr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,X,je+_t):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ct.__webglTexture,X),ut?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_i.__webglTexture,Ee,Pt+_t):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_i.__webglTexture,Ee),X!==0?U.blitFramebuffer(Fe,Ke,Pe,be,Ne,lt,Pe,be,U.COLOR_BUFFER_BIT,U.NEAREST):ut?U.copyTexSubImage3D(Re,Ee,Ne,lt,Pt+_t,Fe,Ke,Pe,be):U.copyTexSubImage2D(Re,Ee,Ne,lt,Fe,Ke,Pe,be);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ut?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Re,Ee,Ne,lt,Pt,Pe,be,Ie,dt,kt,vt.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,Ee,Ne,lt,Pt,Pe,be,Ie,dt,vt.data):U.texSubImage3D(Re,Ee,Ne,lt,Pt,Pe,be,Ie,dt,kt,vt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ee,Ne,lt,Pe,be,dt,kt,vt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ee,Ne,lt,vt.width,vt.height,dt,vt.data):U.texSubImage2D(U.TEXTURE_2D,Ee,Ne,lt,Pe,be,dt,kt,vt);M.pixelStorei(U.UNPACK_ROW_LENGTH,Zt),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Sn),M.pixelStorei(U.UNPACK_SKIP_ROWS,Bn),M.pixelStorei(U.UNPACK_SKIP_IMAGES,mi),Ee===0&&z.generateMipmaps&&U.generateMipmap(Re),M.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),M.unbindTexture()},this.resetState=function(){Y=0,V=0,ne=null,M.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Bh={type:"change"},$l={type:"start"},ed={type:"end"},ta=new Cu,zh=new ai,rx=Math.cos(70*Xf.DEG2RAD),It=new F,tn=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mo=1e-6;class sx extends sm{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cr.ROTATE,MIDDLE:Cr.DOLLY,RIGHT:Cr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Ri,this._lastTargetPosition=new F,this._quat=new Ri().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fh,this._sphericalDelta=new fh,this._scale=1,this._panOffset=new F,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new F,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ox.bind(this),this._onPointerDown=ax.bind(this),this._onPointerUp=lx.bind(this),this._onContextMenu=mx.bind(this),this._onMouseWheel=ux.bind(this),this._onKeyDown=dx.bind(this),this._onTouchStart=fx.bind(this),this._onTouchMove=px.bind(this),this._onMouseDown=cx.bind(this),this._onMouseMove=hx.bind(this),this._interceptControlDown=_x.bind(this),this._interceptControlUp=gx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ht.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bh),this.update(),this.state=ht.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=It.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ta.origin.copy(this.object.position),ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ta.direction))<rx?this.object.lookAt(this.target):(zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ta.intersectPlane(zh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Mo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mo||this._lastTargetPosition.distanceToSquared(this.target)>Mo?(this.dispatchEvent(Bh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;It.copy(i).sub(this.target);let s=It.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ax(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ox(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function lx(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ed),this.state=ht.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cx(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ht.DOLLY;break;case Cr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ht.ROTATE}break;case Cr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent($l)}function hx(r){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function ux(r){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(r.preventDefault(),this.dispatchEvent($l),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ed))}function dx(r){this.enabled!==!1&&this._handleKeyDown(r)}function fx(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ht.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ht.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent($l)}function px(r){switch(this._trackPointer(r),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ht.NONE}}function mx(r){this.enabled!==!1&&r.preventDefault()}function _x(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gx(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function si(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function td(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vs={duration:.5,overwrite:!1,delay:0},Ql,zt,xt,wn=1e8,pt=1/wn,xl=Math.PI*2,vx=xl/4,xx=0,nd=Math.sqrt,Mx=Math.cos,Sx=Math.sin,Ft=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},fi=function(e){return typeof e=="number"},jl=function(e){return typeof e>"u"},$n=function(e){return typeof e=="object"},rn=function(e){return e!==!1},ec=function(){return typeof window<"u"},na=function(e){return At(e)||Ft(e)},id=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yt=Array.isArray,yx=/random\([^)]+\)/g,bx=/,\s*/g,kh=/(?:-?\.?\d|\.)+/gi,rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,So=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sd=/[+-]=-?[.\d]+/,Ex=/[^,'"\[\]\s]+/gi,Tx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,Hn,Ml,tc,xn={},Sa={},ad,od=function(e){return(Sa=Fr(e,xn))&&ln},nc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xs=function(e,t){return!t&&console.warn(e)},ld=function(e,t){return e&&(xn[e]=t)&&Sa&&(Sa[e]=t)||xn},Ms=function(){return 0},wx={suppressEvents:!0,isStart:!0,kill:!1},ha={suppressEvents:!0,kill:!1},Ax={suppressEvents:!0},ic={},Ai=[],Sl={},cd,dn={},yo={},Hh=30,ua=[],rc="",sc=function(e){var t=e[0],n,i;if($n(t)||At(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ua.length;i--&&!ua[i].targetTest(t););n=ua[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Dd(e[i],n)))||e.splice(i,1);return e},Ki=function(e){return e._gsap||sc(An(e))[0]._gsap},hd=function(e,t,n){return(n=e[t])&&At(n)?e[t]():jl(n)&&e.getAttribute&&e.getAttribute(t)||n},sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},Dr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Cx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ya=function(){var e=Ai.length,t=Ai.slice(0),n,i;for(Sl={},Ai.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ac=function(e){return!!(e._initted||e._startAt||e.add)},ud=function(e,t,n,i){Ai.length&&!zt&&ya(),e.render(t,n,!!(zt&&t<0&&ac(e))),Ai.length&&!zt&&ya()},dd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ex).length<2?t:Ft(e)?e.trim():e},fd=function(e){return e},Mn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Rx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Fr=function(e,t){for(var n in t)e[n]=t[n];return e},Gh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$n(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ba=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},os=function(e){var t=e.parent||yt,n=e.keyframes?Rx(Yt(e.keyframes)):Mn;if(rn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Px=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},pd=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ia=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Di=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ji=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Dx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yl=function(e,t,n,i){return e._startAt&&(zt?e._startAt.revert(ha):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Lx=function r(e){return!e||e._ts&&r(e.parent)},Vh=function(e){return e._repeat?Br(e._tTime,e=e.duration()+e._rDelay)*e:0},Br=function(e,t){var n=Math.floor(e=St(e/t));return e&&n===e?n-1:n},Ea=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Na=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},Ua=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=St(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Na(e),n._dirty||Ji(n,e)),e},md=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ea(e.rawTime(),t),(!t._dur||Cs(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),Ji(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},Vn=function(e,t,n,i){return t.parent&&Di(t),t._start=St((fi(n)?n:n||e!==yt?En(e,n,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pd(e,t,"_first","_last",e._sort?"_start":0),bl(t)||(e._recent=t),i||md(e,t),e._ts<0&&Ua(e,e._tTime),e},_d=function(e,t){return(xn.ScrollTrigger||nc("scrollTrigger",t))&&xn.ScrollTrigger.create(t,e)},gd=function(e,t,n,i,s){if(lc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cd!==mn.frame)return Ai.push(e),e._lazy=[s,i],1},Ix=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},bl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Nx=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Ix(e)&&!(!e._initted&&bl(e))||(e._ts<0||e._dp._ts<0)&&!bl(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=Cs(0,e._tDur,t),h=Br(l,o),e._yoyo&&h&1&&(a=1-a),h!==Br(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||zt||i||e._zTime===pt||!t&&e._zTime){if(!e._initted&&gd(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&yl(e,t,n,!0),e._onUpdate&&!n&&_n(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&_n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Di(e,1),!n&&!zt&&(_n(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ux=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},zr=function(e,t,n,i){var s=e._repeat,a=St(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:St(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Ua(e,e._tTime=e._tDur*o),e.parent&&Na(e),n||Ji(e.parent,e),e},Wh=function(e){return e instanceof nn?Ji(e):zr(e,e._dur)},Ox={_start:0,endTime:Ms,totalDuration:Ms},En=function r(e,t,n){var i=e.labels,s=e._recent||Ox,a=e.duration()>=wn?s.endTime(!1):e._dur,o,l,c;return Ft(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Yt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ls=function(e,t,n){var i=fi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=rn(l.vars.inherit)&&l.parent;a.immediateRender=rn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Lt(t[0],a,t[s+1])},Ui=function(e,t){return e||e===0?t(e):t},Cs=function(e,t,n){return n<e?e:n>t?t:n},Vt=function(e,t){return!Ft(e)||!(t=Tx.exec(e))?"":t[1]},Fx=function(e,t,n){return Ui(n,function(i){return Cs(e,t,i)})},El=[].slice,vd=function(e,t){return e&&$n(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$n(e[0]))&&!e.nodeType&&e!==Hn},Bx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ft(i)&&!t||vd(i,1)?(s=n).push.apply(s,An(i)):n.push(i)})||n},An=function(e,t,n){return xt&&!t&&xt.selector?xt.selector(e):Ft(e)&&!n&&(Ml||!kr())?El.call((t||tc).querySelectorAll(e),0):Yt(e)?Bx(e,n):vd(e)?El.call(e,0):e?[e]:[]},Tl=function(e){return e=An(e)[0]||xs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return An(t,n.querySelectorAll?n:n===e?xs("Invalid scope")||tc.createElement("div"):e)}},xd=function(e){return e.sort(function(){return .5-Math.random()})},Md=function(e){if(At(e))return e;var t=$n(e)?e:{each:e},n=$i(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return Ft(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,_){var g=(_||t).length,p=a[g],m,y,T,x,S,w,A,v,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,wn])[1],!E){for(A=-wn;A<(A=_[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(p=a[g]=[],m=l?Math.min(E,g)*h-.5:i%E,y=E===wn?0:l?g*d/E-.5:i/E|0,A=0,v=wn,w=0;w<g;w++)T=w%E-m,x=y-(w/E|0),p[w]=S=c?Math.abs(c==="y"?x:T):nd(T*T+x*x),S>A&&(A=S),S<v&&(v=S);i==="random"&&xd(p),p.max=A-v,p.min=v,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(E>g?g-1:c?c==="y"?g/E:E:Math.max(E,g/E))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Vt(t.amount||t.each)||0,n=n&&g<0?$x(n):n}return g=(p[u]-p.min)/p.max||0,St(p.b+(n?n(g):g)*p.v)+p.u}},wl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=St(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(fi(n)?0:Vt(n))}},Sd=function(e,t){var n=Yt(e),i,s;return!n&&$n(e)&&(i=n=e.radius||wn,e.values?(e=An(e.values),(s=!fi(e[0]))&&(i*=i)):e=wl(e.increment)),Ui(t,n?At(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=wn,h=0,d=e.length,u,f;d--;)s?(u=e[d].x-o,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?e[h]:a,s||h===a||fi(a)?h:h+Vt(a)}:wl(e))},yd=function(e,t,n,i){return Ui(Yt(e)?!t:n===!0?!!(n=0):!i,function(){return Yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},zx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},kx=function(e,t){return function(n){return e(parseFloat(n))+(t||Vt(n))}},Hx=function(e,t,n){return Ed(e,t,0,1,n)},bd=function(e,t,n){return Ui(n,function(i){return e[~~t(i)]})},Gx=function r(e,t,n){var i=t-e;return Yt(e)?bd(e,r(0,e.length),t):Ui(n,function(s){return(i+(s-e)%i)%i+e})},Vx=function r(e,t,n){var i=t-e,s=i*2;return Yt(e)?bd(e,r(0,e.length-1),t):Ui(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ss=function(e){return e.replace(yx,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(bx);return yd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ed=function(e,t,n,i,s){var a=t-e,o=i-n;return Ui(s,function(l){return n+((l-e)/a*o||0)})},Wx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Ft(e),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Yt(e)&&!Yt(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var g=Math.min(u,~~_);return h[g](_-g)},n=t}else i||(e=Fr(Yt(e)?[]:{},e));if(!h){for(l in t)oc.call(o,e,l,"get",t[l]);s=function(_){return uc(_,o)||(a?e.p:e)}}}return Ui(n,s)},Xh=function(e,t,n){var i=e.labels,s=wn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},_n=function(e,t,n){var i=e.vars,s=i[t],a=xt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ai.length&&ya(),o&&(xt=o),h=l?s.apply(c,l):s.call(c),xt=a,h},ts=function(e){return Di(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&_n(e,"onInterrupt"),e},Ar,Td=[],wd=function(e){if(e)if(e=!e.name&&e.default||e,ec()||e.headless){var t=e.name,n=At(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ms,render:uc,add:oc,kill:oM,modifier:aM,rawVars:0},a={targetTest:0,get:0,getSetter:hc,aliases:{},register:0};if(kr(),e!==i){if(dn[t])return;Mn(i,Mn(ba(e,s),a)),Fr(i.prototype,Fr(s,ba(e,a))),dn[i.prop=t]=i,e.targetTest&&(ua.push(i),ic[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ld(t,i),e.register&&e.register(ln,i,an)}else Td.push(e)},ft=255,ns={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},bo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ft+.5|0},Ad=function(e,t,n){var i=e?fi(e)?[e>>16,e>>8&ft,e&ft]:0:ns.black,s,a,o,l,c,h,d,u,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ns[e])i=ns[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ft,i&ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ft,e&ft]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(kh),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=bo(l+1/3,s,a),i[1]=bo(l,s,a),i[2]=bo(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(rd),n&&i.length<4&&(i[3]=1),i}else i=e.match(kh)||ns.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/ft,a=i[1]/ft,o=i[2]/ft,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Cd=function(e){var t=[],n=[],i=-1;return e.split(Ci).forEach(function(s){var a=s.match(wr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},qh=function(e,t,n){var i="",s=(e+i).match(Ci),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return e;if(s=s.map(function(u){return(u=Ad(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Cd(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Ci,"1").split(wr),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Ci),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Ci=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ns)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Xx=/hsl[a]?\(/,Rd=function(e){var t=e.join(" "),n;if(Ci.lastIndex=0,Ci.test(t))return n=Xx.test(t),e[1]=qh(e[1],n),e[0]=qh(e[0],n,Cd(e[1])),!0},ys,mn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,u,f,_=function g(p){var m=r()-i,y=p===!0,T,x,S,w;if((m>e||m<0)&&(n+=m-t),i+=m,S=i-n,T=S-a,(T>0||y)&&(w=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=T+(T>=s?4:s-T),x=1),y||(l=c(g)),x)for(f=0;f<o.length;f++)o[f](S,u,w,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){ad&&(!Ml&&ec()&&(Hn=Ml=window,tc=Hn.document||{},xn.gsap=ln,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(ln.version),od(Sa||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),Td.forEach(wd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},ys=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ys=0,c=Ms},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,y){var T=m?function(x,S,w,A){p(x,S,w,A),d.remove(T)}:p;return d.remove(p),o[y?"unshift":"push"](T),kr(),T},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),kr=function(){return!ys&&mn.wake()},nt={},qx=/^[\d.\-M][\d.\-,\s]/,Yx=/["']/g,Zx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Yx,"").trim():+c,i=l.substr(o+1).trim();return t},Kx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Jx=function(e){var t=(e+"").split("("),n=nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Zx(t[1])]:Kx(e).split(",").map(dd)):nt._CE&&qx.test(e)?nt._CE("",e):n},$x=function(e){return function(t){return 1-e(1-t)}},$i=function(e,t){return e&&(At(e)?e:nt[e]||Jx(e))||t},ir=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return sn(e,function(o){nt[o]=xn[o]=s,nt[a=o.toLowerCase()]=n;for(var l in s)nt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=nt[o+"."+l]=s[l]}),s},Pd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Eo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/xl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Sx((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Pd(o);return s=xl/s,l.config=function(c,h){return r(e,c,h)},l},To=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Pd(n);return i.config=function(s){return r(e,s)},i};sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ir(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;ir("Elastic",Eo("in"),Eo("out"),Eo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ir("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ir("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ir("Circ",function(r){return-(nd(1-r*r)-1)});ir("Sine",function(r){return r===1?1:-Mx(r*vx)+1});ir("Back",To("in"),To("out"),To());nt.SteppedEase=nt.steps=xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-pt;return function(o){return((i*Cs(0,a,o)|0)+s)*n}}};vs.ease=nt["quad.out"];sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return rc+=r+","+r+"Params,"});var Dd=function(e,t){this.id=xx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hd,this.set=t?t.getSetter:hc},bs=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,zr(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),ys||mn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,zr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(kr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ua(this,n),!s._dp||s.parent||md(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ud(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Vh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Vh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Br(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ea(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime(Cs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Na(this),Dx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(kr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=St(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Vn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ea(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ax);var i=zt;return zt=n,ac(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(En(this,n),rn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,rn(i)),this._dur||(this._zTime=-pt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-pt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=At(n)?n:fd,l=function(){var h=i.then;i.then=null,s&&s(),At(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ts(this)},r})();Mn(bs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var nn=(function(r){td(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=rn(n.sortChildren),yt&&Vn(n.parent||yt,si(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_d(si(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ls(0,arguments,this),this},t.from=function(i,s,a){return ls(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ls(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,os(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(i,s,En(this,a),1),this},t.call=function(i,s,a){return Vn(this,Lt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Lt(i,a,En(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,os(a).immediateRender=rn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,os(o).immediateRender=rn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:St(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,_,g,p,m,y,T,x,S,w,A;if(this!==yt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,x=this._start,T=this._ts,m=!T,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=St(h%p),h===l?(g=this._repeat,u=c):(S=St(h/p),g=~~S,g&&g===S&&(u=c,g--),u>c&&(u=c)),S=Br(this._tTime,p),!o&&this._tTime&&S!==g&&this._tTime-S*p-this._dur<=0&&(S=g),w&&g&1&&(u=c-u,A=1),g!==S&&!this._lock){var v=w&&S&1,E=v===(w&&g&1);if(g<S&&(v=!v),o=v?0:h%c?c:h,this._lock=1,this.render(o||(A?0:St(g*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Ux(this,St(o),St(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!S&&(_n(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!m){y=0,_&&(h+=this._zTime=-pt);break}}f=_}else{f=this._last;for(var D=i<0?i:u;f;){if(_=f._prev,(f._act||D<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(D-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(D-f._start)*f._ts,s,a||zt&&ac(f)),u!==this._time||!this._ts&&!m){y=0,_&&(h+=this._zTime=D?-pt:pt);break}}f=_}}if(y&&!s&&(this.pause(),y.render(u>=o?0:-pt)._zTime=u>=o?1:-1,this._ts))return this._start=x,Na(this),this.render(i,s,a);this._onUpdate&&!s&&_n(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Di(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(_n(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(fi(s)||(s=En(this,s,i)),!(i instanceof bs)){if(Yt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ft(i))return this.addLabel(i,s);if(At(i))i=Lt.delayedCall(0,i);else return this}return this!==i?Vn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-wn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Lt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Ft(i)?this.removeLabel(i):At(i)?this.killTweensOf(i):(i.parent===this&&Ia(this,i),i===this._recent&&(this._recent=this._last),Ji(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(mn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=En(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Lt.delayedCall(0,s||Ms,a);return o.data="isPause",this._hasPause=1,Vn(this,o,En(this,i))},t.removePause=function(i){var s=this._first;for(i=En(this,i);s;)s._start===i&&s.data==="isPause"&&Di(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ei!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=An(i),l=this._first,c=fi(s),h;l;)l instanceof Lt?Cx(l._targets,o)&&(c?(!Ei||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=En(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,_=Lt.to(a,Mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||pt,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&zr(_,p,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,d||[])}},s));return u?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Mn({startAt:{time:En(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Xh(this,En(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Xh(this,En(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=St(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ji(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ji(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=wn,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=St(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;zr(a,a===yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(yt._ts&&(ud(yt,Ea(i,yt)),cd=mn.frame),mn.frame>=Hh){Hh+=vn.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&vn.autoSleep&&mn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||mn.sleep()}}},e})(bs);Mn(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qx=function(e,t,n,i,s,a,o){var l=new an(this._pt,e,t,0,1,Fd,null,s),c=0,h=0,d,u,f,_,g,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ss(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),u=n.match(So)||[];d=So.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?Dr(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=So.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(sd.test(i)||m)&&(l.e=0),this._pt=l,l},oc=function(e,t,n,i,s,a,o,l,c,h){At(i)&&(i=i(s||0,e,a));var d=e[t],u=n!=="get"?n:At(d)?c?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=At(d)?c?iM:Ud:cc,_;if(Ft(i)&&(~i.indexOf("random(")&&(i=Ss(i)),i.charAt(1)==="="&&(_=Dr(u,i)+(Vt(u)||0),(_||_===0)&&(i=_))),!h||u!==i||Al)return!isNaN(u*i)&&i!==""?(_=new an(this._pt,e,t,+u||0,i-(u||0),typeof d=="boolean"?sM:Od,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&nc(t,i),Qx.call(this,e,t,u,i,f,l||vn.stringFilter,c))},jx=function(e,t,n,i,s){if(At(e)&&(e=cs(e,s,t,n,i)),!$n(e)||e.style&&e.nodeType||Yt(e)||id(e))return Ft(e)?cs(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=cs(e[o],s,t,n,i);return a},Ld=function(e,t,n,i,s,a){var o,l,c,h;if(dn[e]&&(o=new dn[e]).init(s,o.rawVars?t[e]:jx(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new an(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ar))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Ei,Al,lc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,T=e._overwrite==="auto"&&!Ql,x=e.timeline,S=i.easeReverse||d,w,A,v,E,D,I,N,O,L,B,Y,V,ne;if(x&&(!u||!s)&&(s="none"),e._ease=$i(s,vs.ease),e._rEase=S&&($i(S)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||u&&!i.stagger){if(O=p[0]?Ki(p[0]).harness:0,V=O&&i[O.prop],w=ba(i,ic),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?ha:wx),g._lazy=0),a){if(Di(e._startAt=Lt.set(p,Mn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&rn(l),startAt:null,delay:0,onUpdate:c&&function(){return _n(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!o&&!f)&&e._startAt.revert(ha),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),v=Mn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&rn(l),immediateRender:o,stagger:0,parent:m},w),V&&(v[O.prop]=V),Di(e._startAt=Lt.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(ha):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&rn(l)||l&&!_,A=0;A<p.length;A++){if(D=p[A],N=D._gsap||sc(p)[A]._gsap,e._ptLookup[A]=B={},Sl[N.id]&&Ai.length&&ya(),Y=y===p?A:y.indexOf(D),O&&(L=new O).init(D,V||w,e,Y,y)!==!1&&(e._pt=E=new an(e._pt,D,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function($){B[$]=E}),L.priority&&(I=1)),!O||V)for(v in w)dn[v]&&(L=Ld(v,w,e,Y,D,y))?L.priority&&(I=1):B[v]=E=oc.call(e,D,v,"get",w[v],Y,y,0,i.stringFilter);e._op&&e._op[A]&&e.kill(D,e._op[A]),T&&e._pt&&(Ei=e,yt.killTweensOf(D,B,e.globalTime(t)),ne=!e.parent,Ei=0),e._pt&&l&&(Sl[N.id]=1)}I&&Bd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ne,u&&t<=0&&x.render(wn,!0,!0)},eM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Al=1,e.vars[t]="+=0",lc(e,o),Al=0,l?xs(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Rt(n)+Vt(d.e)),d.b&&(d.b=h.s+Vt(d.b))},tM=function(e,t){var n=e[0]?Ki(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Fr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},nM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Yt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},cs=function(e,t,n,i,s){return At(e)?e.call(t,n,i,s):Ft(e)&&~e.indexOf("random(")?Ss(e):e},Id=rc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Nd={};sn(Id+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Nd[r]=1});var Lt=(function(r){td(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:os(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||yt,y=(Yt(n)||id(n)?fi(n[0]):"length"in i)?[n]:An(n),T,x,S,w,A,v,E,D;if(o._targets=y.length?sc(y):xs("GSAP target "+n+" not found. https://gsap.com",!vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||u||na(c)||na(h)){i=o.vars;var I=i.easeReverse||i.yoyoEase;if(T=o.timeline=new nn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:y}),T.kill(),T.parent=T._dp=si(o),T._start=0,u||na(c)||na(h)){if(w=y.length,E=u&&Md(u),$n(u))for(A in u)~Id.indexOf(A)&&(D||(D={}),D[A]=u[A]);for(x=0;x<w;x++)S=ba(i,Nd),S.stagger=0,I&&(S.easeReverse=I),D&&Fr(S,D),v=y[x],S.duration=+cs(c,si(o),x,v,y),S.delay=(+cs(h,si(o),x,v,y)||0)-o._delay,!u&&w===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),T.to(v,S,E?E(x,v,y):0),T._ease=nt.none;T.duration()?c=h=0:o.timeline=0}else if(_){os(Mn(T.vars.defaults,{ease:"none"})),T._ease=$i(_.ease||i.ease||"none");var N=0,O,L,B;if(Yt(_))_.forEach(function(Y){return T.to(y,Y,">")}),T.duration();else{S={};for(A in _)A==="ease"||A==="easeEach"||nM(A,_[A],S,_.easeEach);for(A in S)for(O=S[A].sort(function(Y,V){return Y.t-V.t}),N=0,x=0;x<O.length;x++)L=O[x],B={ease:L.e,duration:(L.t-(x?O[x-1].t:0))/100*c},B[A]=L.v,T.to(y,B,N),N+=B.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return f===!0&&!Ql&&(Ei=si(o),yt.killTweensOf(y),Ei=0),Vn(m,si(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===St(m._time)&&rn(d)&&Lx(si(o))&&m.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-h)||0)),p&&_d(si(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-pt&&!h?l:i<pt?0:i,u,f,_,g,p,m,y,T;if(!c)Nx(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(u=St(d%g),d===l?(_=this._repeat,u=c):(p=St(d/g),_=~~p,_&&_===p?(u=c,_--):u>c&&(u=c)),m=this._yoyo&&_&1,m&&(u=c-u),p=Br(this._tTime,g),u===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(St(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(gd(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var x=u<o;if(x!==this._inv){var S=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(x?-1:1)/S:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(_n(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&yl(this,i,s,a),_n(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&_n(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&yl(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Di(this,1),!s&&!(h&&!o)&&(d||o||m)&&(_n(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ys||mn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||lc(this,c),h=this._ease(c/this._dur),eM(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Ua(this,0),this.parent||pd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ts(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ei&&Ei.vars.overwrite!==!0)._first||ts(this),this.parent&&a!==this.timeline.totalDuration()&&zr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?An(i):o,c=this._ptLookup,h=this._pt,d,u,f,_,g,p,m;if((!s||s==="all")&&Px(o,l))return s==="all"&&(this._pt=0),ts(this);for(d=this._op=this._op||[],s!=="all"&&(Ft(s)&&(g={},sn(s,function(y){return g[y]=1}),s=g),s=tM(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],s==="all"?(d[m]=s,_=u,f={}):(f=d[m]=d[m]||{},_=s);for(g in _)p=u&&u[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ia(this,p,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ts(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ls(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ls(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return yt.killTweensOf(i,s,a)},e})(bs);Mn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});sn("staggerTo,staggerFrom,staggerFromTo",function(r){Lt[r]=function(){var e=new nn,t=El.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var cc=function(e,t,n){return e[t]=n},Ud=function(e,t,n){return e[t](n)},iM=function(e,t,n,i){return e[t](i.fp,n)},rM=function(e,t,n){return e.setAttribute(t,n)},hc=function(e,t){return At(e[t])?Ud:jl(e[t])&&e.setAttribute?rM:cc},Od=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Fd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},uc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},aM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},oM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ia(this,t,"_pt"):t.dep||(n=1),t=i;return!n},lM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Bd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},an=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Od,this.d=l||this,this.set=c||cc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=lM,this.m=n,this.mt=s,this.tween=i},r})();sn(rc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return ic[r]=1});xn.TweenMax=xn.TweenLite=Lt;xn.TimelineLite=xn.TimelineMax=nn;yt=new nn({sortChildren:!1,defaults:vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vn.stringFilter=Rd;var Qi=[],da={},cM=[],Yh=0,hM=0,wo=function(e){return(da[e]||cM).map(function(t){return t()})},Cl=function(){var e=Date.now(),t=[];e-Yh>2&&(wo("matchMediaInit"),Qi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Hn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),wo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Yh=e,wo("matchMedia"))},zd=(function(){function r(t,n){this.selector=n&&Tl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){At(n)&&(s=i,i=n,n=At);var a=this,o=function(){var c=xt,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Tl(s)),xt=a,d=i.apply(a,arguments),At(d)&&a._r.push(d),xt=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===At?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=xt;xt=null,n(this),xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Lt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Qi.length;a--;)Qi[a].id===this.id&&Qi.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),uM=(function(){function r(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){$n(n)||(n={matches:n});var a=new zd(0,s||this.scope),o=a.conditions={},l,c,h;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Hn.matchMedia(n[c]),l&&(Qi.indexOf(a)<0&&Qi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Cl):l.addEventListener("change",Cl)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ta={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return wd(i)})},timeline:function(e){return new nn(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ft(e)&&(e=An(e)[0]);var s=Ki(e||{}).get,a=n?fd:dd;return n==="native"&&(n=""),e&&(t?a((dn[t]&&dn[t].get||s)(e,t,n,i)):function(o,l,c){return a((dn[o]&&dn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=An(e),e.length>1){var i=e.map(function(h){return ln.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var a=dn[t],o=Ki(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;Ar._pt=0,d.init(e,n?h+n:h,Ar,0,[e]),d.render(1,d),Ar._pt&&uc(1,Ar)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=ln.to(e,Mn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$i(e.ease,vs.ease)),Gh(vs,e||{})},config:function(e){return Gh(vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!dn[o]&&!xn[o]&&xs(t+" effect requires "+o+" plugin.")}),yo[t]=function(o,l,c){return n(An(o),Mn(l||{},s),c)},a&&(nn.prototype[t]=function(o,l,c){return this.add(yo[t](o,$n(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){nt[e]=$i(t)},parseEase:function(e,t){return arguments.length?$i(e,t):nt},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new nn(e),i,s;for(n.smoothChildTiming=rn(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Lt&&i.vars.onComplete===i._targets[0]))&&Vn(n,i,i._start-i._delay),i=s;return Vn(yt,n,0),n},context:function(e,t){return e?new zd(e,t):xt},matchMedia:function(e){return new uM(e)},matchMediaRefresh:function(){return Qi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Cl()},addEventListener:function(e,t){var n=da[e]||(da[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=da[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Gx,wrapYoyo:Vx,distribute:Md,random:yd,snap:Sd,normalize:Hx,getUnit:Vt,clamp:Fx,splitColor:Ad,toArray:An,selector:Tl,mapRange:Ed,pipe:zx,unitize:kx,interpolate:Wx,shuffle:xd},install:od,effects:yo,ticker:mn,updateRoot:nn.updateRoot,plugins:dn,globalTimeline:yt,core:{PropTween:an,globals:ld,Tween:Lt,Timeline:nn,Animation:bs,getCache:Ki,_removeLinkedListItem:Ia,reverting:function(){return zt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return Ql=e}}};sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ta[r]=Lt[r]});mn.add(nn.updateRoot);Ar=Ta.to({},{duration:0});var dM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=dM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ao=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ft(s)&&(l={},sn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}fM(o,s)}}}},ln=Ta.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ao("roundProps",wl),Ao("modifiers"),Ao("snap",Sd))||Ta;Lt.version=nn.version=ln.version="3.15.0";ad=1;ec()&&kr();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Zh,Ti,Lr,dc,Zi,Kh,fc,pM=function(){return typeof window<"u"},pi={},Wi=180/Math.PI,Ir=Math.PI/180,Mr=Math.atan2,Jh=1e8,pc=/([A-Z])/g,mM=/(left|right|width|margin|padding|x)/i,_M=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},MM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},kd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Hd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},SM=function(e,t,n){return e.style[t]=n},yM=function(e,t,n){return e.style.setProperty(t,n)},bM=function(e,t,n){return e._gsap[t]=n},EM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},TM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},wM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Tt="transform",on=Tt+"Origin",AM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in pi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=oi(i,o)}):this.tfm[e]=a.x?a[e]:oi(i,e),e===on&&(this.tfm.zOrigin=a.zOrigin);else return qn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Tt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(on,t,"")),e=Tt}(s||t)&&this.props.push(e,t,s[e])},Gd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},CM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(pc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=fc(),(!s||!s.isStart)&&!n[Tt]&&(Gd(n),i.zOrigin&&n[on]&&(n[on]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Vd=function(e,t){var n={target:e,props:[],revert:CM,save:AM};return e._gsap||ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Wd,Pl=function(e,t){var n=Ti.createElementNS?Ti.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ti.createElement(e);return n&&n.style?n:Ti.createElement(e)},gn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(pc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Hr(t)||t,1)||""},$h="O,Moz,ms,Ms,Webkit".split(","),Hr=function(e,t,n){var i=t||Zi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!($h[a]+e in s););return a<0?null:(a===3?"ms":a>=0?$h[a]:"")+e},Dl=function(){pM()&&window.document&&(Zh=window,Ti=Zh.document,Lr=Ti.documentElement,Zi=Pl("div")||{style:{}},Pl("div"),Tt=Hr(Tt),on=Tt+"Origin",Zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wd=!!Hr("perspective"),fc=ln.core.reverting,dc=1)},Qh=function(e){var t=e.ownerSVGElement,n=Pl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Lr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Lr.removeChild(n),s},jh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Xd=function(e){var t,n;try{t=e.getBBox()}catch{t=Qh(e),n=1}return t&&(t.width||t.height)||n||(t=Qh(e)),t&&!t.width&&!t.x&&!t.y?{x:+jh(e,["x","cx","x1"])||0,y:+jh(e,["y","cy","y1"])||0,width:0,height:0}:t},qd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xd(e))},Li=function(e,t){if(t){var n=e.style,i;t in pi&&t!==on&&(t=Tt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(pc,"-$1").toLowerCase())):n.removeAttribute(t)}},wi=function(e,t,n,i,s,a){var o=new an(e._pt,t,n,0,1,a?Hd:kd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},eu={deg:1,rad:1,turn:1},RM={grid:1,flex:1},Ii=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Zi.style,l=mM.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",_,g,p,m;if(i===a||!s||eu[i]||eu[a])return s;if(a!=="px"&&!u&&(s=r(e,t,n,"px")),m=e.getCTM&&qd(e),(f||a==="%")&&(pi[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[h],Rt(f?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(u?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ti||!g.appendChild)&&(g=Ti.body),p=g._gsap,p&&f&&p.width&&l&&p.time===mn.time&&!p.uncache)return Rt(s/p.width*d);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=d+i,_=e[h],y?e.style[t]=y:Li(e,t)}else(f||a==="%")&&!RM[gn(g,"display")]&&(o.position=gn(e,"position")),g===e&&(o.position="static"),g.appendChild(Zi),_=Zi[h],g.removeChild(Zi),o.position="absolute";return l&&f&&(p=Ki(g),p.time=mn.time,p.width=g[h]),Rt(u?_*s/d:_&&s?d/_*s:0)},oi=function(e,t,n,i){var s;return dc||Dl(),t in qn&&t!=="transform"&&(t=qn[t],~t.indexOf(",")&&(t=t.split(",")[0])),pi[t]&&t!=="transform"?(s=Ts(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Aa(gn(e,on))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=wa[t]&&wa[t](e,t,n)||gn(e,t)||hd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ii(e,t,s,n)+n:s},PM=function(e,t,n,i){if(!n||n==="none"){var s=Hr(t,e,1),a=s&&gn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=gn(e,"borderTopColor"))}var o=new an(this._pt,e.style,t,0,1,Fd),l=0,c=0,h,d,u,f,_,g,p,m,y,T,x,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=gn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=gn(e,t)||i,g?e.style[t]=g:Li(e,t)),h=[n,i],Rd(h),n=h[0],i=h[1],u=n.match(wr)||[],S=i.match(wr)||[],S.length){for(;d=wr.exec(i);)p=d[0],y=i.substring(l,d.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=u[c++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),p.charAt(1)==="="&&(p=Dr(f,p)+x),m=parseFloat(p),T=p.substr((m+"").length),l=wr.lastIndex-T.length,T||(T=T||vn.units[t]||x,l===i.length&&(i+=T,o.e+=T)),x!==T&&(f=Ii(e,t,g,T)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Hd:kd;return sd.test(i)&&(o.e=0),this._pt=o,o},tu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},DM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=tu[n]||n,t[1]=tu[i]||i,t.join(" ")},LM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],pi[o]&&(l=1,o=o==="transformOrigin"?on:Tt),Li(n,o);l&&(Li(n,Tt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ts(n,1),a.uncache=1,Gd(i)))}},wa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new an(e._pt,t,n,0,0,LM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Es=[1,0,0,1,0,0],Yd={},Zd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nu=function(e){var t=gn(e,Tt);return Zd(t)?Es:t.substr(7).match(rd).map(Rt)},mc=function(e,t){var n=e._gsap||Ki(e),i=e.style,s=nu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Es:s):(s===Es&&!e.offsetParent&&e!==Lr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Lr.appendChild(e)),s=nu(e),l?i.display=l:Li(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Lr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ll=function(e,t,n,i,s,a){var o=e._gsap,l=s||mc(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],T=t.split(" "),x=parseFloat(T[0])||0,S=parseFloat(T[1])||0,w,A,v,E;n?l!==Es&&(A=f*p-_*g)&&(v=x*(p/A)+S*(-g/A)+(g*y-p*m)/A,E=x*(-_/A)+S*(f/A)-(f*y-_*m)/A,x=v,S=E):(w=Xd(e),x=w.x+(~T[0].indexOf("%")?x/100*w.width:x),S=w.y+(~(T[1]||T[0]).indexOf("%")?S/100*w.height:S)),i||i!==!1&&o.smooth?(m=x-c,y=S-h,o.xOffset=d+(m*f+y*g)-m,o.yOffset=u+(m*_+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[on]="0px 0px",a&&(wi(a,o,"xOrigin",c,x),wi(a,o,"yOrigin",h,S),wi(a,o,"xOffset",d,o.xOffset),wi(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},Ts=function(e,t){var n=e._gsap||new Dd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=gn(e,on)||"0",h,d,u,f,_,g,p,m,y,T,x,S,w,A,v,E,D,I,N,O,L,B,Y,V,ne,$,P,C,te,re,_e,pe;return h=d=u=g=p=m=y=T=x=0,f=_=1,n.svg=!!(e.getCTM&&qd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Tt]!=="none"?l[Tt]:"")),i.scale=i.rotate=i.translate="none"),A=mc(e,n.svg),n.svg&&(n.uncache?(ne=e.getBBox(),c=n.xOrigin-ne.x+"px "+(n.yOrigin-ne.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Ll(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,w=n.yOrigin||0,A!==Es&&(I=A[0],N=A[1],O=A[2],L=A[3],h=B=A[4],d=Y=A[5],A.length===6?(f=Math.sqrt(I*I+N*N),_=Math.sqrt(L*L+O*O),g=I||N?Mr(N,I)*Wi:0,y=O||L?Mr(O,L)*Wi+g:0,y&&(_*=Math.abs(Math.cos(y*Ir))),n.svg&&(h-=S-(S*I+w*O),d-=w-(S*N+w*L))):(pe=A[6],re=A[7],P=A[8],C=A[9],te=A[10],_e=A[11],h=A[12],d=A[13],u=A[14],v=Mr(pe,te),p=v*Wi,v&&(E=Math.cos(-v),D=Math.sin(-v),V=B*E+P*D,ne=Y*E+C*D,$=pe*E+te*D,P=B*-D+P*E,C=Y*-D+C*E,te=pe*-D+te*E,_e=re*-D+_e*E,B=V,Y=ne,pe=$),v=Mr(-O,te),m=v*Wi,v&&(E=Math.cos(-v),D=Math.sin(-v),V=I*E-P*D,ne=N*E-C*D,$=O*E-te*D,_e=L*D+_e*E,I=V,N=ne,O=$),v=Mr(N,I),g=v*Wi,v&&(E=Math.cos(v),D=Math.sin(v),V=I*E+N*D,ne=B*E+Y*D,N=N*E-I*D,Y=Y*E-B*D,I=V,B=ne),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Rt(Math.sqrt(I*I+N*N+O*O)),_=Rt(Math.sqrt(Y*Y+pe*pe)),v=Mr(B,Y),y=Math.abs(v)>2e-4?v*Wi:0,x=_e?1/(_e<0?-_e:_e):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Zd(gn(e,Tt)),V&&e.setAttribute("transform",V))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Rt(f),n.scaleY=Rt(_),n.rotation=Rt(g)+o,n.rotationX=Rt(p)+o,n.rotationY=Rt(m)+o,n.skewX=y+o,n.skewY=T+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[on]=Aa(c)),n.xOffset=n.yOffset=0,n.force3D=vn.force3D,n.renderTransform=n.svg?NM:Wd?Kd:IM,n.uncache=0,n},Aa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Co=function(e,t,n){var i=Vt(t);return Rt(parseFloat(t)+parseFloat(Ii(e,"x",n+"px",i)))+i},IM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Kd(e,t)},Gi="0deg",$r="0px",Vi=") ",Kd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,T=n.zOrigin,x="",S=m==="auto"&&e&&e!==1||m===!0;if(T&&(d!==Gi||h!==Gi)){var w=parseFloat(h)*Ir,A=Math.sin(w),v=Math.cos(w),E;w=parseFloat(d)*Ir,E=Math.cos(w),a=Co(y,a,A*E*-T),o=Co(y,o,-Math.sin(w)*-T),l=Co(y,l,v*E*-T+T)}p!==$r&&(x+="perspective("+p+Vi),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(S||a!==$r||o!==$r||l!==$r)&&(x+=l!==$r||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Vi),c!==Gi&&(x+="rotate("+c+Vi),h!==Gi&&(x+="rotateY("+h+Vi),d!==Gi&&(x+="rotateX("+d+Vi),(u!==Gi||f!==Gi)&&(x+="skew("+u+", "+f+Vi),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Vi),y.style[Tt]=x||"translate(0, 0)"},NM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,T=parseFloat(a),x=parseFloat(o),S,w,A,v,E;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ir,c*=Ir,S=Math.cos(l)*d,w=Math.sin(l)*d,A=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Ir,E=Math.tan(c-h),E=Math.sqrt(1+E*E),A*=E,v*=E,h&&(E=Math.tan(h),E=Math.sqrt(1+E*E),S*=E,w*=E)),S=Rt(S),w=Rt(w),A=Rt(A),v=Rt(v)):(S=d,v=u,w=A=0),(T&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(T=Ii(f,"x",a,"px"),x=Ii(f,"y",o,"px")),(_||g||p||m)&&(T=Rt(T+_-(_*S+g*A)+p),x=Rt(x+g-(_*w+g*v)+m)),(i||s)&&(E=f.getBBox(),T=Rt(T+i/100*E.width),x=Rt(x+s/100*E.height)),E="matrix("+S+","+w+","+A+","+v+","+T+","+x+")",f.setAttribute("transform",E),y&&(f.style[Tt]=E)},UM=function(e,t,n,i,s){var a=360,o=Ft(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Wi:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Jh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Jh)%a-~~(c/a)*a)),e._pt=u=new an(e._pt,t,n,i,c,gM),u.e=h,u.u="deg",e._props.push(n),u},iu=function(e,t){for(var n in t)e[n]=t[n];return e},OM=function(e,t,n){var i=iu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Tt]=t,o=Ts(n,1),Li(n,Tt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Tt],a[Tt]=t,o=Ts(n,1),a[Tt]=c);for(l in pi)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Vt(c),_=Vt(h),d=f!==_?Ii(n,l,c,_):parseFloat(c),u=parseFloat(h),e._pt=new an(e._pt,o,l,d,u-d,Rl),e._pt.u=_||0,e._props.push(l));iu(o,i)};sn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});wa[e>1?"border"+r:r]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(_){return oi(o,_,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,f,d)}});var Jd={name:"css",register:Dl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,u,f,_,g,p,m,y,T,x,S,w,A,v,E;dc||Dl(),this.styles=this.styles||Vd(e),v=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(dn[g]&&Ld(g,t,n,i,e,s)))){if(f=typeof h,_=wa[g],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ss(h)),_)_(this,e,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Ci.lastIndex=0,Ci.test(c)||(p=Vt(c),m=Vt(h),m?p!==m&&(c=Ii(e,g,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),v.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Ft(c)&&~c.indexOf("random(")&&(c=Ss(c)),Vt(c+"")||c==="auto"||(c+=vn.units[g]||Vt(oi(e,g))||""),(c+"").charAt(1)==="="&&(c=oi(e,g))):c=oi(e,g),u=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),g in qn&&(g==="autoAlpha"&&(u===1&&oi(e,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,o.visibility),wi(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=qn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in pi,T){if(this.styles.save(g),E=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=gn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=h,h=gn(e,"perspective"),D?e.style.perspective=D:Li(e,"perspective")}d=parseFloat(h)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||Ts(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new an(this._pt,o,Tt,0,1,S.renderTransform,S,0,-1),x.dep=1),g==="scale")this._pt=new an(this._pt,S,"scaleY",S.scaleY,(y?Dr(S.scaleY,y+d):d)-S.scaleY||0,Rl),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(on,0,o[on]),h=DM(h),S.svg?Ll(e,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==S.zOrigin&&wi(this,S,"zOrigin",S.zOrigin,m),wi(this,o,g,Aa(c),Aa(h)));continue}else if(g==="svgOrigin"){Ll(e,h,1,w,0,this);continue}else if(g in Yd){UM(this,S,g,u,y?Dr(u,y+h):h);continue}else if(g==="smoothOrigin"){wi(this,S,"smooth",S.smooth,h);continue}else if(g==="force3D"){S[g]=h;continue}else if(g==="transform"){OM(this,h,e);continue}}else g in o||(g=Hr(g)||g);if(T||(d||d===0)&&(u||u===0)&&!_M.test(h)&&g in o)p=(c+"").substr((u+"").length),d||(d=0),m=Vt(h)||(g in vn.units?vn.units[g]:p),p!==m&&(u=Ii(e,g,c,m)),this._pt=new an(this._pt,T?S:o,g,u,(y?Dr(u,y+d):d)-u,!T&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?MM:Rl),this._pt.u=m||0,T&&E!==h?(this._pt.b=c,this._pt.e=E,this._pt.r=xM):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=vM);else if(g in o)PM.call(this,e,g,c,y?y+h:h);else if(g in e)this.add(e,g,c||e[g],y?y+h:h,i,s);else if(g!=="parseTransform"){nc(g,h);continue}T||(g in o?v.push(g,0,o[g]):typeof e[g]=="function"?v.push(g,2,e[g]()):v.push(g,1,c||e[g])),a.push(g)}}A&&Bd(this)},render:function(e,t){if(t.tween._time||!fc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:oi,aliases:qn,getSetter:function(e,t,n){var i=qn[t];return i&&i.indexOf(",")<0&&(t=i),t in pi&&t!==on&&(e._gsap.x||oi(e,"x"))?n&&Kh===n?t==="scale"?EM:bM:(Kh=n||{})&&(t==="scale"?TM:wM):e.style&&!jl(e.style[t])?SM:~t.indexOf("-")?yM:hc(e,t)},core:{_removeProperty:Li,_getMatrix:mc}};ln.utils.checkPrefix=Hr;ln.core.getStyleSaver=Vd;(function(r,e,t,n){var i=sn(r+","+e+","+t,function(s){pi[s]=1});sn(e,function(s){vn.units[s]="deg",Yd[s]=1}),qn[i[13]]=r+","+e,sn(n,function(s){var a=s.split(":");qn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){vn.units[r]="px"});ln.registerPlugin(Jd);var Kt=ln.registerPlugin(Jd)||ln;Kt.core.Tween;class ri{static createClousDeParis(e=1024,t="#1e293b"){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,e,e);const s=32,a=s/2;for(let l=0;l<e;l+=s)for(let c=0;c<e;c+=s)i.fillStyle="rgba(255, 255, 255, 0.18)",i.beginPath(),i.moveTo(c+a,l),i.lineTo(c+a,l+a),i.lineTo(c,l+a),i.fill(),i.fillStyle="rgba(255, 255, 255, 0.08)",i.beginPath(),i.moveTo(c+a,l+a),i.lineTo(c+s,l+a),i.lineTo(c+a,l+s),i.fill(),i.fillStyle="rgba(0, 0, 0, 0.35)",i.beginPath(),i.moveTo(c+a,l+a),i.lineTo(c,l+a),i.lineTo(c+a,l+s),i.fill(),i.fillStyle="rgba(0, 0, 0, 0.22)",i.beginPath(),i.moveTo(c+a,l),i.lineTo(c+s,l+a),i.lineTo(c+a,l+a),i.fill(),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(c+a-1,l+a-1,2,2);const o=new _r(n);return o.wrapS=Ln,o.wrapT=Ln,o}static createSunburst(e=1024,t="#0b1329"){const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d"),s=e/2,a=e/2,o=e/2;i.fillStyle=t,i.fillRect(0,0,e,e);const l=720;for(let d=0;d<l;d++){const u=d/l*Math.PI*2,f=.03+Math.sin(d*12)*.02+Math.random()*.03;i.strokeStyle=`rgba(255, 255, 255, ${f.toFixed(3)})`,i.lineWidth=1,i.beginPath(),i.moveTo(s,a),i.lineTo(s+Math.cos(u)*o,a+Math.sin(u)*o),i.stroke()}const c=i.createRadialGradient(s,a,10,s,a,o);return c.addColorStop(0,"rgba(255, 255, 255, 0.15)"),c.addColorStop(.5,"rgba(255, 255, 255, 0.03)"),c.addColorStop(.85,"rgba(0, 0, 0, 0.25)"),c.addColorStop(1,"rgba(0, 0, 0, 0.65)"),i.fillStyle=c,i.fillRect(0,0,e,e),new _r(n)}static createPerlage(e=1024){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");n.fillStyle="#cbd5e1",n.fillRect(0,0,e,e);const i=24,s=i*.85;for(let o=-i;o<e+i;o+=s)for(let l=-i;l<e+i;l+=s){const c=Math.floor(o/s)%2*(s/2),h=l+c,d=o,u=n.createRadialGradient(h-4,d-4,2,h,d,i);u.addColorStop(0,"rgba(255, 255, 255, 0.7)"),u.addColorStop(.4,"rgba(203, 213, 225, 0.4)"),u.addColorStop(.8,"rgba(100, 116, 139, 0.3)"),u.addColorStop(1,"rgba(51, 65, 85, 0.6)"),n.fillStyle=u,n.beginPath(),n.arc(h,d,i,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255, 255, 255, 0.15)",n.lineWidth=1,n.beginPath(),n.arc(h,d,i*.65,0,Math.PI*1.5),n.stroke()}const a=new _r(t);return a.wrapS=Ln,a.wrapT=Ln,a}static createCotesDeGeneve(e=1024){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");n.fillStyle="#e2e8f0",n.fillRect(0,0,e,e);const i=64;for(let a=0;a<e;a+=i){const o=n.createLinearGradient(a,0,a+i,0);o.addColorStop(0,"rgba(255, 255, 255, 0.45)"),o.addColorStop(.5,"rgba(226, 232, 240, 0.1)"),o.addColorStop(.95,"rgba(100, 116, 139, 0.35)"),o.addColorStop(1,"rgba(71, 85, 105, 0.6)"),n.fillStyle=o,n.fillRect(a,0,i,e);for(let l=0;l<e;l+=12)n.strokeStyle="rgba(255, 255, 255, 0.08)",n.beginPath(),n.arc(a+i/2,l,i*.7,.2,Math.PI-.2),n.stroke()}const s=new _r(t);return s.wrapS=Ln,s.wrapT=Ln,s}static createMoonTexture(e=1024){const t=document.createElement("canvas");t.width=e,t.height=e/2;const n=t.getContext("2d");n.fillStyle="#cbd5e1",n.fillRect(0,0,t.width,t.height),[{x:t.width*.35,y:t.height*.4,rx:90,ry:60,rot:.2},{x:t.width*.48,y:t.height*.35,rx:110,ry:75,rot:-.1},{x:t.width*.28,y:t.height*.6,rx:70,ry:50,rot:.4},{x:t.width*.65,y:t.height*.5,rx:80,ry:55,rot:.1},{x:t.width*.82,y:t.height*.45,rx:60,ry:40,rot:-.3}].forEach(a=>{const o=n.createRadialGradient(a.x,a.y,10,a.x,a.y,a.rx);o.addColorStop(0,"rgba(51, 65, 85, 0.85)"),o.addColorStop(.7,"rgba(71, 85, 105, 0.55)"),o.addColorStop(1,"rgba(148, 163, 184, 0)"),n.save(),n.translate(a.x,a.y),n.rotate(a.rot),n.scale(1,a.ry/a.rx),n.fillStyle=o,n.beginPath(),n.arc(0,0,a.rx,0,Math.PI*2),n.fill(),n.restore()});for(let a=0;a<180;a++){const o=Math.random()*t.width,l=Math.random()*t.height,c=2+Math.random()*14;n.fillStyle="rgba(15, 23, 42, 0.5)",n.beginPath(),n.arc(o-1,l-1,c,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255, 255, 255, 0.6)",n.beginPath(),n.arc(o+1,l+1,c*.9,0,Math.PI*2),n.fill(),n.fillStyle="rgba(30, 41, 59, 0.4)",n.beginPath(),n.arc(o,l,c*.75,0,Math.PI*2),n.fill()}return new _r(t)}static createCarbonTexture(e=512){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");n.fillStyle="#0f172a",n.fillRect(0,0,e,e);for(let s=0;s<240;s++){const a=Math.random()*e,o=Math.random()*e,l=20+Math.random()*80,c=8+Math.random()*25,h=Math.random()*Math.PI;n.save(),n.translate(a,o),n.rotate(h);const d=Math.floor(25+Math.random()*45);n.fillStyle=`rgb(${d}, ${d+4}, ${d+8})`,n.fillRect(-l/2,-c/2,l,c),n.restore()}const i=new _r(t);return i.wrapS=Ln,i.wrapT=Ln,i}}class FM{constructor(e){Le(this,"container");Le(this,"scene");Le(this,"camera");Le(this,"renderer");Le(this,"controls");Le(this,"animFrameId",null);Le(this,"clock");Le(this,"explodedGroup");Le(this,"layerCrystal");Le(this,"layerBezel");Le(this,"layerHands");Le(this,"layerDial");Le(this,"layerMoonPhase");Le(this,"layerTourbillon");Le(this,"layerBridges");Le(this,"layerGearTrain");Le(this,"layerMainplate");Le(this,"layerCaseback");Le(this,"tourbillonOuterCage");Le(this,"tourbillonInnerCage");Le(this,"balanceWheel");Le(this,"hairspringMesh");Le(this,"palletFork");Le(this,"escapeWheel");Le(this,"fourthWheel");Le(this,"thirdWheel");Le(this,"centerWheel");Le(this,"barrelMesh");Le(this,"moonSphere");Le(this,"hourHand");Le(this,"minuteHand");Le(this,"chronoSecondHand");Le(this,"chronoMinuteHand");Le(this,"caseMeshes",[]);Le(this,"screwMeshes",[]);Le(this,"dialMesh");Le(this,"dialMaterial");Le(this,"explodeRatio",0);Le(this,"isAutoRotating",!1);Le(this,"isWireframe",!1);Le(this,"currentConfig",{caseMaterial:"platinum",dialPattern:"clous_de_paris",screwFinish:"blued"});Le(this,"chronoRunning",!1);Le(this,"chronoStartTime",0);Le(this,"chronoElapsed",0);Le(this,"onResize",()=>{if(!this.container)return;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)});this.container=e,this.clock=new rm,this.scene=new sp,this.scene.background=null;const t=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight;this.camera=new fn(42,t/n,.1,100),this.camera.position.set(0,4.5,9.5),this.renderer=new ix({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Nl,this.renderer.toneMappingExposure=1.35,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ru,this.container.appendChild(this.renderer.domElement),this.controls=new sx(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2.5,this.controls.maxDistance=24,this.controls.target.set(0,0,0),this.setupLighting(),this.explodedGroup=new at,this.scene.add(this.explodedGroup),this.layerCrystal=new at,this.layerBezel=new at,this.layerHands=new at,this.layerDial=new at,this.layerMoonPhase=new at,this.layerTourbillon=new at,this.layerBridges=new at,this.layerGearTrain=new at,this.layerMainplate=new at,this.layerCaseback=new at,this.explodedGroup.add(this.layerCaseback,this.layerMainplate,this.layerGearTrain,this.layerBridges,this.layerTourbillon,this.layerMoonPhase,this.layerDial,this.layerHands,this.layerBezel,this.layerCrystal),this.buildCaseAndBezel(),this.buildMainplateAndBridges(),this.buildPrecisionGearTrain(),this.buildTriAxialTourbillon(),this.buildAstronomicalMoonPhase(),this.buildGuillocheDial(),this.buildBreguetHands(),this.buildSapphireCrystals(),window.addEventListener("resize",this.onResize),this.animate=this.animate.bind(this),this.animate()}setupLighting(){const e=new tm(16777215,.7);this.scene.add(e);const t=new dh(16774634,2.8);t.position.set(6,12,8),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,this.scene.add(t);const n=new dh(9684477,2);n.position.set(-8,-4,-6),this.scene.add(n);const i=new uh(16707722,1.8,20);i.position.set(0,-6,5),this.scene.add(i);const s=new uh(16777215,1.2,15);s.position.set(0,0,7),this.scene.add(s)}createGearGeometry(e,t,n,i=.15){const s=new yr,a=e*.12,o=t*2;for(let h=0;h<=o;h++){const d=h/o*Math.PI*2,f=h%2===1?e+a:e,_=Math.cos(d)*f,g=Math.sin(d)*f;h===0?s.moveTo(_,g):s.lineTo(_,g)}const l=new as;l.absarc(0,0,i,0,Math.PI*2,!0),s.holes.push(l);const c={depth:n,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.02,bevelThickness:.02};return new Xi(s,c)}createScrew(e,t,n,i=.1){new at;const s=new un(.8,.7,.4,24);new $t(1.4,.3,.25);let a=1920728,o=.95,l=.18;this.currentConfig.screwFinish==="gold"?a=15381256:this.currentConfig.screwFinish==="polished"&&(a=15857145);const c=new Mt({color:a,metalness:o,roughness:l,wireframe:this.isWireframe}),h=new He(s,c);return h.rotation.x=Math.PI/2,h.position.set(e,t,n),h.scale.set(i,i,i),this.screwMeshes.push(h),h}createJewelBearing(e,t,n,i=.22,s=.07){const a=new at,o=new bn(i*.95,.04,16,32),l=new Mt({color:16096779,metalness:.95,roughness:.15,wireframe:this.isWireframe}),c=new He(o,l);a.add(c);const h=new un(i*.85,i*.85,.08,24),d=new ah({color:14222377,transmission:.7,opacity:.9,transparent:!0,roughness:.08,ior:1.76,metalness:.1,wireframe:this.isWireframe}),u=new He(h,d);return u.rotation.x=Math.PI/2,a.add(u),a.position.set(e,t,n),a}buildCaseAndBezel(){const e=this.getCaseColorHex(),t=new Mt({color:e,metalness:this.currentConfig.caseMaterial==="carbon"?.2:.94,roughness:this.currentConfig.caseMaterial==="carbon"?.45:.2,wireframe:this.isWireframe});this.currentConfig.caseMaterial==="carbon"&&(t.map=ri.createCarbonTexture());const n=new bn(3.6,.38,24,64),i=new He(n,t);this.caseMeshes.push(i),this.layerBezel.add(i);const s=new un(3.52,3.42,.4,64,1,!0),a=new Mt({color:1976635,metalness:.85,roughness:.25,side:Qt,wireframe:this.isWireframe}),o=new He(s,a);o.rotation.x=Math.PI/2,o.position.z=-.15,this.layerBezel.add(o),[{x:-2.3,y:3.2,rot:-.3},{x:2.3,y:3.2,rot:.3},{x:-2.3,y:-3.2,rot:.3},{x:2.3,y:-3.2,rot:-.3}].forEach(T=>{const x=new $t(.45,1.4,.7),S=new He(x,t);S.position.set(T.x,T.y,-.2),S.rotation.z=T.rot,this.caseMeshes.push(S),this.layerBezel.add(S)});const c=new un(.42,.42,.6,32),h=new He(c,t);h.rotation.z=Math.PI/2,h.position.set(3.9,0,-.2),this.caseMeshes.push(h),this.layerBezel.add(h);const d=new un(.24,.24,.5,24),u=new He(d,t);u.rotation.z=Math.PI/2.8,u.position.set(3.6,1.6,-.2),this.caseMeshes.push(u),this.layerBezel.add(u);const f=new He(d,t);f.rotation.z=Math.PI/1.5,f.position.set(3.6,-1.6,-.2),this.caseMeshes.push(f),this.layerBezel.add(f);const _=new bn(3.55,.32,20,64),g=new He(_,t);this.caseMeshes.push(g),this.layerCaseback.add(g);const p=new xa(2.3,3.4,48),m=new Mt({color:9741240,metalness:.9,roughness:.28,side:In}),y=new He(p,m);this.layerCaseback.add(y)}buildMainplateAndBridges(){const e=ri.createPerlage(1024),t=new un(3.38,3.38,.28,64),n=new Mt({color:14870768,map:e,metalness:.92,roughness:.22,wireframe:this.isWireframe}),i=new He(t,n);i.rotation.x=Math.PI/2,this.layerMainplate.add(i);const s=ri.createCotesDeGeneve(1024),a=new Mt({color:16317180,map:s,metalness:.94,roughness:.18,wireframe:this.isWireframe}),o=new yr;o.moveTo(-2.2,.4),o.lineTo(.2,.4),o.quadraticCurveTo(1.6,1.8,.4,2.6),o.lineTo(-1.8,2.4),o.quadraticCurveTo(-2.6,1.4,-2.2,.4);const l=new Xi(o,{depth:.2,bevelEnabled:!0,bevelSegments:2,bevelSize:.02,bevelThickness:.02}),c=new He(l,a);c.position.z=-.1,this.layerBridges.add(c);const h=new yr;h.moveTo(.1,-.6),h.lineTo(2.4,-.4),h.quadraticCurveTo(2.7,1.2,1.2,1.9),h.lineTo(.2,.8);const d=new Xi(h,{depth:.18,bevelEnabled:!0,bevelSegments:2,bevelSize:.02,bevelThickness:.02}),u=new He(d,a);u.position.z=-.08,this.layerBridges.add(u);const f=new yr;f.moveTo(-1.6,-1.8),f.quadraticCurveTo(0,-1.1,1.6,-1.8),f.lineTo(1.4,-2.1),f.quadraticCurveTo(0,-1.4,-1.4,-2.1),f.closePath();const _=new Xi(f,{depth:.16,bevelEnabled:!0,bevelSegments:2,bevelSize:.02,bevelThickness:.02}),g=new He(_,a);g.position.z=.12,this.layerBridges.add(g),this.layerBridges.add(this.createJewelBearing(-.8,1.5,.15)),this.layerBridges.add(this.createJewelBearing(1.4,.6,.14)),this.layerBridges.add(this.createJewelBearing(.8,-.1,.14)),this.layerBridges.add(this.createJewelBearing(0,-1.6,.22)),this.layerBridges.add(this.createScrew(-1.9,2.2,.14)),this.layerBridges.add(this.createScrew(.2,2.4,.14)),this.layerBridges.add(this.createScrew(2.2,.8,.14)),this.layerBridges.add(this.createScrew(-1.4,-1.95,.22)),this.layerBridges.add(this.createScrew(1.4,-1.95,.22))}buildPrecisionGearTrain(){const e=new Mt({color:16096779,metalness:.95,roughness:.2,wireframe:this.isWireframe}),t=new Mt({color:9741240,metalness:.96,roughness:.16,wireframe:this.isWireframe});this.barrelMesh=new at;const n=new He(new un(1.2,1.2,.22,48),new Mt({color:14251782,metalness:.9,roughness:.25}));n.rotation.x=Math.PI/2,this.barrelMesh.add(n);const i=new He(this.createGearGeometry(1.2,48,.08,.4),e);this.barrelMesh.add(i),this.barrelMesh.position.set(-1.1,1.2,-.15),this.layerGearTrain.add(this.barrelMesh),this.centerWheel=new at;const s=new He(this.createGearGeometry(.85,36,.06,.2),e);this.centerWheel.add(s),this.centerWheel.position.set(0,0,-.12),this.layerGearTrain.add(this.centerWheel),this.thirdWheel=new at;const a=new He(this.createGearGeometry(.68,30,.05,.15),e);this.thirdWheel.add(a),this.thirdWheel.position.set(.95,-.65,-.1),this.layerGearTrain.add(this.thirdWheel),this.fourthWheel=new at;const o=new He(this.createGearGeometry(.55,24,.05,.12),e);this.fourthWheel.add(o),this.fourthWheel.position.set(.4,-1.25,-.08),this.layerGearTrain.add(this.fourthWheel),this.escapeWheel=new at;const l=new He(this.createGearGeometry(.42,15,.04,.08),t);this.escapeWheel.add(l),this.escapeWheel.position.set(-.35,-1.4,-.05),this.layerGearTrain.add(this.escapeWheel),this.palletFork=new at;const c=new He(new $t(.4,.06,.04),t);this.palletFork.add(c);const h=new Mt({color:15680580,roughness:.1}),d=new He(new $t(.04,.08,.04),h);d.position.set(-.16,.04,0);const u=new He(new $t(.04,.08,.04),h);u.position.set(.16,.04,0),this.palletFork.add(d,u),this.palletFork.position.set(-.1,-1.75,0),this.layerGearTrain.add(this.palletFork)}buildTriAxialTourbillon(){const e=new at;e.position.set(0,-1.65,.15),this.layerTourbillon.add(e),this.tourbillonOuterCage=new at,e.add(this.tourbillonOuterCage);const t=new Mt({color:3718648,metalness:.9,roughness:.2,wireframe:this.isWireframe}),n=new He(new bn(.95,.04,16,48),t);this.tourbillonOuterCage.add(n);for(let _=0;_<3;_++){const g=_/3*Math.PI*2,p=new He(new un(.03,.03,.4,12),t);p.position.set(Math.cos(g)*.92,Math.sin(g)*.92,.2),p.rotation.x=Math.PI/2,this.tourbillonOuterCage.add(p)}this.tourbillonInnerCage=new at,this.tourbillonOuterCage.add(this.tourbillonInnerCage);const i=new Mt({color:14723437,metalness:.95,roughness:.15,wireframe:this.isWireframe}),s=new He(new bn(.72,.035,16,36),i);this.tourbillonInnerCage.add(s),this.balanceWheel=new at,this.tourbillonInnerCage.add(this.balanceWheel);const a=new Mt({color:16096779,metalness:.96,roughness:.15,wireframe:this.isWireframe}),o=new He(new bn(.62,.03,16,48),a);this.balanceWheel.add(o);const l=new He(new $t(1.24,.04,.02),a);this.balanceWheel.add(l);for(let _=0;_<4;_++){const g=_/4*Math.PI*2+Math.PI/4,p=new He(new un(.03,.03,.06,12),a);p.position.set(Math.cos(g)*.62,Math.sin(g)*.62,0),p.rotation.z=g,this.balanceWheel.add(p)}new Bu;const c=[],h=5.5,d=160;for(let _=0;_<=d;_++){const g=_/d,p=g*h*Math.PI*2,m=.08+g*.42;c.push(new F(Math.cos(p)*m,Math.sin(p)*m,.04))}const u=new Zl(new Lu(c),90,.012,8,!1),f=new Mt({color:3718648,metalness:.8,roughness:.25,wireframe:this.isWireframe});this.hairspringMesh=new He(u,f),this.balanceWheel.add(this.hairspringMesh)}buildAstronomicalMoonPhase(){const e=new at;e.position.set(0,1.45,.18),this.layerMoonPhase.add(e);const t=new xa(.55,1.15,48),n=new Mt({color:132631,metalness:.5,roughness:.4,side:In}),i=new He(t,n);e.add(i);const s=new Ma(.48,32,32),a=ri.createMoonTexture(1024),o=new Mt({map:a,roughness:.75,metalness:.05,wireframe:this.isWireframe});this.moonSphere=new He(s,o),e.add(this.moonSphere);const l=new He(new bn(.62,.03,16,48),new Mt({color:16096779,metalness:.95,roughness:.15}));e.add(l)}buildGuillocheDial(){const e=new yr;e.absarc(0,0,3.35,0,Math.PI*2,!1);const t=new as;t.absarc(0,1.45,.65,0,Math.PI*2,!0),e.holes.push(t);const n=new as;n.absarc(0,-1.65,1.1,0,Math.PI*2,!0),e.holes.push(n);const i=new Xi(e,{depth:.08,bevelEnabled:!0,bevelSegments:2,bevelSize:.015,bevelThickness:.015}),s=ri.createClousDeParis(1024,"#0f172a");this.dialMaterial=new Mt({color:1976635,map:s,metalness:.85,roughness:.32,wireframe:this.isWireframe}),this.dialMesh=new He(i,this.dialMaterial),this.dialMesh.position.z=.22,this.layerDial.add(this.dialMesh);const a=new Mt({color:16317180,metalness:.95,roughness:.15});for(let o=1;o<=12;o++){if(o===6)continue;const l=-(o/12)*Math.PI*2+Math.PI/2,c=2.85,h=new $t(.12,.45,.06),d=new He(h,a);d.position.set(Math.cos(l)*c,Math.sin(l)*c,.3),d.rotation.z=l-Math.PI/2,this.layerDial.add(d)}}buildBreguetHands(){const e=new Mt({color:1920728,metalness:.95,roughness:.15,wireframe:this.isWireframe});this.hourHand=new at;const t=new He(new $t(.1,1.4,.03),e);t.position.y=.7;const n=new He(new bn(.16,.035,16,24),e);n.position.y=1.35,this.hourHand.add(t,n),this.hourHand.position.z=.38,this.layerHands.add(this.hourHand),this.minuteHand=new at;const i=new He(new $t(.08,2.3,.03),e);i.position.y=1.15;const s=new He(new bn(.14,.03,16,24),e);s.position.y=2.25,this.minuteHand.add(i,s),this.minuteHand.position.z=.42,this.layerHands.add(this.minuteHand),this.chronoSecondHand=new at;const a=new He(new $t(.035,3.2,.025),e);a.position.y=1.3;const o=new He(new bn(.18,.04,16,24),e);o.position.y=-.55,this.chronoSecondHand.add(a,o),this.chronoSecondHand.position.z=.46,this.layerHands.add(this.chronoSecondHand);const l=new He(new un(.15,.15,.1,24),new Mt({color:16096779,metalness:.95,roughness:.15}));l.rotation.x=Math.PI/2,l.position.z=.48,this.layerHands.add(l)}buildSapphireCrystals(){const e=new ah({color:16777215,transmission:.95,opacity:.98,transparent:!0,roughness:.02,ior:1.77,reflectivity:.3,thickness:.8,attenuationColor:new et(14412542),attenuationDistance:2,wireframe:this.isWireframe}),t=new Ma(3.5,48,24,0,Math.PI*2,0,Math.PI*.28),n=new He(t,e);n.position.z=-.6,this.layerCrystal.add(n);const i=new un(2.35,2.35,.1,48),s=new He(i,e);s.rotation.x=Math.PI/2,s.position.z=-.2,this.layerCaseback.add(s)}animate(){this.animFrameId=requestAnimationFrame(this.animate);const e=this.clock.getDelta(),t=this.clock.getElapsedTime();if(this.tourbillonOuterCage&&(this.tourbillonOuterCage.rotation.z=-t*(Math.PI*2/60)),this.tourbillonInnerCage&&(this.tourbillonInnerCage.rotation.x=Math.sin(t*1.5)*.35,this.tourbillonInnerCage.rotation.y=t*(Math.PI*2/30)),this.balanceWheel){const n=Math.sin(t*Math.PI*2*4)*(280*(Math.PI/180));if(this.balanceWheel.rotation.z=n,this.hairspringMesh){const i=1+Math.sin(t*Math.PI*2*4)*.08;this.hairspringMesh.scale.set(i,i,1)}}if(this.palletFork&&(this.palletFork.rotation.z=Math.sign(Math.sin(t*Math.PI*2*4))*.12),this.barrelMesh&&(this.barrelMesh.rotation.z-=e*.05),this.centerWheel&&(this.centerWheel.rotation.z+=e*.2),this.thirdWheel&&(this.thirdWheel.rotation.z-=e*.6),this.fourthWheel&&(this.fourthWheel.rotation.z+=e*1.5),this.escapeWheel){const n=Math.floor(t*8);this.escapeWheel.rotation.z=-n*(Math.PI*2/15)}this.moonSphere&&(this.moonSphere.rotation.y+=e*.03),this.minuteHand&&(this.minuteHand.rotation.z=-t*.08),this.hourHand&&(this.hourHand.rotation.z=-t*.08/12),this.chronoRunning&&(this.chronoElapsed=(performance.now()-this.chronoStartTime)/1e3,this.chronoSecondHand&&(this.chronoSecondHand.rotation.z=-(this.chronoElapsed%60)*(Math.PI*2/60))),this.isAutoRotating&&(this.explodedGroup.rotation.y+=e*.4),this.controls.update(),this.renderer.render(this.scene,this.camera)}setExplodedRatio(e,t=!0){this.explodeRatio=Math.max(0,Math.min(1,e));const n={crystal:this.explodeRatio*6.5,bezel:this.explodeRatio*4.8,hands:this.explodeRatio*3.6,dial:this.explodeRatio*2.4,moonPhase:this.explodeRatio*1.5,tourbillon:this.explodeRatio*.5,bridges:this.explodeRatio*-.9,gearTrain:this.explodeRatio*-2.2,mainplate:this.explodeRatio*-3.6,caseback:this.explodeRatio*-5.2};t?(Kt.to(this.layerCrystal.position,{z:n.crystal,duration:.9,ease:"power2.out"}),Kt.to(this.layerBezel.position,{z:n.bezel,duration:.9,ease:"power2.out"}),Kt.to(this.layerHands.position,{z:n.hands,duration:.9,ease:"power2.out"}),Kt.to(this.layerDial.position,{z:n.dial,duration:.9,ease:"power2.out"}),Kt.to(this.layerMoonPhase.position,{z:n.moonPhase,duration:.9,ease:"power2.out"}),Kt.to(this.layerTourbillon.position,{z:n.tourbillon,duration:.9,ease:"power2.out"}),Kt.to(this.layerBridges.position,{z:n.bridges,duration:.9,ease:"power2.out"}),Kt.to(this.layerGearTrain.position,{z:n.gearTrain,duration:.9,ease:"power2.out"}),Kt.to(this.layerMainplate.position,{z:n.mainplate,duration:.9,ease:"power2.out"}),Kt.to(this.layerCaseback.position,{z:n.caseback,duration:.9,ease:"power2.out"})):(this.layerCrystal.position.z=n.crystal,this.layerBezel.position.z=n.bezel,this.layerHands.position.z=n.hands,this.layerDial.position.z=n.dial,this.layerMoonPhase.position.z=n.moonPhase,this.layerTourbillon.position.z=n.tourbillon,this.layerBridges.position.z=n.bridges,this.layerGearTrain.position.z=n.gearTrain,this.layerMainplate.position.z=n.mainplate,this.layerCaseback.position.z=n.caseback)}getExplodedRatio(){return this.explodeRatio}updateCaseMaterial(e){this.currentConfig.caseMaterial=e;const t=this.getCaseColorHex();this.caseMeshes.forEach(n=>{const i=n.material;i.color.setHex(t),e==="carbon"?(i.map=ri.createCarbonTexture(),i.metalness=.2,i.roughness=.45):(i.map=null,i.metalness=e==="titanium"?.88:.95,i.roughness=e==="titanium"?.32:.18),i.needsUpdate=!0})}updateDialPattern(e){this.currentConfig.dialPattern=e,this.dialMaterial&&(e==="clous_de_paris"?(this.dialMaterial.map=ri.createClousDeParis(1024,"#1e293b"),this.dialMaterial.opacity=1,this.dialMaterial.transparent=!1):e==="sunburst"?(this.dialMaterial.map=ri.createSunburst(1024,"#0f172a"),this.dialMaterial.opacity=1,this.dialMaterial.transparent=!1):e==="navy_guilloche"?(this.dialMaterial.map=ri.createClousDeParis(1024,"#0c4a6e"),this.dialMaterial.opacity=1,this.dialMaterial.transparent=!1):e==="skeleton"&&(this.dialMaterial.map=null,this.dialMaterial.opacity=.15,this.dialMaterial.transparent=!0),this.dialMaterial.needsUpdate=!0)}updateScrewFinish(e){this.currentConfig.screwFinish=e;let t=1920728;e==="gold"&&(t=15381256),e==="polished"&&(t=15857145),this.screwMeshes.forEach(n=>{const i=n.material;i.color.setHex(t),i.needsUpdate=!0})}getCaseColorHex(){switch(this.currentConfig.caseMaterial){case"platinum":return 14870768;case"rosegold":return 14723437;case"titanium":return 9741240;case"carbon":return 1976635}}toggleAutoRotate(){return this.isAutoRotating=!this.isAutoRotating,this.isAutoRotating}toggleWireframe(){return this.isWireframe=!this.isWireframe,this.scene.traverse(e=>{if(e.isMesh){const t=e.material;Array.isArray(t)?t.forEach(n=>{"wireframe"in n&&(n.wireframe=this.isWireframe)}):t&&"wireframe"in t&&(t.wireframe=this.isWireframe)}}),this.isWireframe}resetCamera(){Kt.to(this.camera.position,{x:0,y:4.5,z:9.5,duration:1.2,ease:"power2.inOut"}),Kt.to(this.controls.target,{x:0,y:0,z:0,duration:1.2,ease:"power2.inOut"}),Kt.to(this.explodedGroup.rotation,{x:0,y:0,z:0,duration:1.2,ease:"power2.inOut"})}startChronograph(){this.chronoRunning||(this.chronoRunning=!0,this.chronoStartTime=performance.now()-this.chronoElapsed*1e3)}stopChronograph(){this.chronoRunning=!1}resetChronograph(){this.chronoRunning=!1,this.chronoElapsed=0,this.chronoSecondHand&&Kt.to(this.chronoSecondHand.rotation,{z:0,duration:.35,ease:"elastic.out(1, 0.4)"})}flybackChronograph(){this.chronoElapsed=0,this.chronoStartTime=performance.now(),this.chronoRunning=!0,this.chronoSecondHand&&(this.chronoSecondHand.rotation.z=0)}dispose(){this.animFrameId!==null&&cancelAnimationFrame(this.animFrameId),window.removeEventListener("resize",this.onResize),this.renderer.dispose(),this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement)}}class BM{constructor(){Le(this,"ctx",null);Le(this,"isMuted",!1);Le(this,"volume",.6);Le(this,"tickIntervalId",null);Le(this,"tickStep",0);Le(this,"materialTimbre","platinum")}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=Math.max(0,Math.min(1,e))}getVolume(){return this.volume}setMuted(e){this.isMuted=e,e&&this.tickIntervalId!==null?(window.clearInterval(this.tickIntervalId),this.tickIntervalId=null):!e&&this.tickIntervalId===null&&this.startEscapementAudio()}toggleMute(){return this.setMuted(!this.isMuted),this.isMuted}getIsMuted(){return this.isMuted}setMaterialTimbre(e){this.materialTimbre=e}startEscapementAudio(){this.tickIntervalId===null&&(this.initContext(),this.tickIntervalId=window.setInterval(()=>{this.isMuted||this.playEscapementImpulse()},125))}stopEscapementAudio(){this.tickIntervalId!==null&&(window.clearInterval(this.tickIntervalId),this.tickIntervalId=null)}playEscapementImpulse(){if(!this.ctx||this.isMuted||this.volume<=.001)return;const e=this.ctx.currentTime;this.tickStep=(this.tickStep+1)%2;const t=this.tickStep===0;let n=2600,i=.035,s=14;switch(this.materialTimbre){case"platinum":n=t?2400:2250,i=.03,s=12;break;case"rosegold":n=t?2800:2650,i=.045,s=18;break;case"titanium":n=t?3400:3150,i=.025,s=22;break;case"carbon":n=t?1900:1800,i=.018,s=8;break}const a=this.ctx.sampleRate*.015,o=this.ctx.createBuffer(1,a,this.ctx.sampleRate),l=o.getChannelData(0);for(let y=0;y<a;y++)l[y]=(Math.random()*2-1)*Math.exp(-y/(a*.2));const c=this.ctx.createBufferSource();c.buffer=o;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(n*1.5,e),h.Q.setValueAtTime(s,e);const d=this.ctx.createGain(),u=this.volume*.45;d.gain.setValueAtTime(u,e),d.gain.exponentialRampToValueAtTime(1e-4,e+.015),c.connect(h),h.connect(d),d.connect(this.ctx.destination),c.start(e),c.stop(e+.015);const f=this.ctx.createOscillator(),_=this.ctx.createGain();f.type="triangle",f.frequency.setValueAtTime(n,e),f.frequency.exponentialRampToValueAtTime(n*.65,e+i);const g=this.volume*.28;_.gain.setValueAtTime(g,e),_.gain.exponentialRampToValueAtTime(1e-4,e+i),f.connect(_),_.connect(this.ctx.destination),f.start(e),f.stop(e+i);const p=this.ctx.createOscillator(),m=this.ctx.createGain();p.type="sine",p.frequency.setValueAtTime(n*2.3,e),p.frequency.exponentialRampToValueAtTime(n*1.8,e+i*.6),m.gain.setValueAtTime(this.volume*.08,e),m.gain.exponentialRampToValueAtTime(1e-4,e+i*.6),p.connect(m),m.connect(this.ctx.destination),p.start(e),p.stop(e+i*.6)}playChronoClick(e=!0){if(this.initContext(),!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type=e?"sawtooth":"square";const s=e?1450:920;n.frequency.setValueAtTime(s,t),n.frequency.exponentialRampToValueAtTime(180,t+.04),i.gain.setValueAtTime(this.volume*.7,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.04),n.connect(i),i.connect(this.ctx.destination),n.start(t),n.stop(t+.04)}playFlybackHammer(){if(this.initContext(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime;for(let t=0;t<2;t++){const n=e+t*.025,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(850-t*150,n),i.frequency.exponentialRampToValueAtTime(120,n+.05),s.gain.setValueAtTime(this.volume*.65,n),s.gain.exponentialRampToValueAtTime(1e-4,n+.05),i.connect(s),s.connect(this.ctx.destination),i.start(n),i.stop(n+.05)}}}var _c={};(function r(e,t,n,i){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=(function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),C=P.getContext("2d");C.fillRect(0,0,1,1);var te=P.transferToImageBitmap();C.createPattern(te,"no-repeat")}catch{return!1}return!0})();function l(){}function c(P){var C=t.exports.Promise,te=C!==void 0?C:e.Promise;return typeof te=="function"?new te(P):(P(l,l),null)}var h=(function(P,C){return{transform:function(te){if(P)return te;if(C.has(te))return C.get(te);var re=new OffscreenCanvas(te.width,te.height),_e=re.getContext("2d");return _e.drawImage(te,0,0),C.set(te,re),re},clear:function(){C.clear()}}})(o,new Map),d=(function(){var P=Math.floor(16.666666666666668),C,te,re={},_e=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(pe){var Ce=Math.random();return re[Ce]=requestAnimationFrame(function H(Z){_e===Z||_e+P-1<Z?(_e=Z,delete re[Ce],pe()):re[Ce]=requestAnimationFrame(H)}),Ce},te=function(pe){re[pe]&&cancelAnimationFrame(re[pe])}):(C=function(pe){return setTimeout(pe,P)},te=function(pe){return clearTimeout(pe)}),{frame:C,cancel:te}})(),u=(function(){var P,C,te={};function re(_e){function pe(Ce,H){_e.postMessage({options:Ce||{},callback:H})}_e.init=function(H){var Z=H.transferControlToOffscreen();_e.postMessage({canvas:Z},[Z])},_e.fire=function(H,Z,ce){if(C)return pe(H,null),C;var Te=Math.random().toString(36).slice(2);return C=c(function(he){function we(Xe){Xe.data.callback===Te&&(delete te[Te],_e.removeEventListener("message",we),C=null,h.clear(),ce(),he())}_e.addEventListener("message",we),pe(H,Te),te[Te]=we.bind(null,{data:{callback:Te}})}),C},_e.reset=function(){_e.postMessage({reset:!0});for(var H in te)te[H](),delete te[H]}}return function(){if(P)return P;if(!n&&s){var _e=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([_e])))}catch(pe){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",pe),null}re(P)}return P}})(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(P,C){return C?C(P):P}function g(P){return P!=null}function p(P,C,te){return _(P&&g(P[C])?P[C]:f[C],te)}function m(P){return P<0?0:Math.floor(P)}function y(P,C){return Math.floor(Math.random()*(C-P))+P}function T(P){return parseInt(P,16)}function x(P){return P.map(S)}function S(P){var C=String(P).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:T(C.substring(0,2)),g:T(C.substring(2,4)),b:T(C.substring(4,6))}}function w(P){var C=p(P,"origin",Object);return C.x=p(C,"x",Number),C.y=p(C,"y",Number),C}function A(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function v(P){var C=P.getBoundingClientRect();P.width=C.width,P.height=C.height}function E(P){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=P,C}function D(P,C,te,re,_e,pe,Ce,H,Z){P.save(),P.translate(C,te),P.rotate(pe),P.scale(re,_e),P.arc(0,0,1,Ce,H,Z),P.restore()}function I(P){var C=P.angle*(Math.PI/180),te=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-C+(.5*te-Math.random()*te),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function N(P,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var te=C.tick++/C.totalTicks,re=C.x+C.random*C.tiltCos,_e=C.y+C.random*C.tiltSin,pe=C.wobbleX+C.random*C.tiltCos,Ce=C.wobbleY+C.random*C.tiltSin;if(P.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-te)+")",P.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))P.fill(V(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(pe-re)*.1,Math.abs(Ce-_e)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var H=Math.PI/10*C.wobble,Z=Math.abs(pe-re)*.1,ce=Math.abs(Ce-_e)*.1,Te=C.shape.bitmap.width*C.scalar,he=C.shape.bitmap.height*C.scalar,we=new DOMMatrix([Math.cos(H)*Z,Math.sin(H)*Z,-Math.sin(H)*ce,Math.cos(H)*ce,C.x,C.y]);we.multiplySelf(new DOMMatrix(C.shape.matrix));var Xe=P.createPattern(h.transform(C.shape.bitmap),"no-repeat");Xe.setTransform(we),P.globalAlpha=1-te,P.fillStyle=Xe,P.fillRect(C.x-Te/2,C.y-he/2,Te,he),P.globalAlpha=1}else if(C.shape==="circle")P.ellipse?P.ellipse(C.x,C.y,Math.abs(pe-re)*C.ovalScalar,Math.abs(Ce-_e)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):D(P,C.x,C.y,Math.abs(pe-re)*C.ovalScalar,Math.abs(Ce-_e)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var K=Math.PI/2*3,se=4*C.scalar,oe=8*C.scalar,le=C.x,de=C.y,Oe=5,De=Math.PI/Oe;Oe--;)le=C.x+Math.cos(K)*oe,de=C.y+Math.sin(K)*oe,P.lineTo(le,de),K+=De,le=C.x+Math.cos(K)*se,de=C.y+Math.sin(K)*se,P.lineTo(le,de),K+=De;else P.moveTo(Math.floor(C.x),Math.floor(C.y)),P.lineTo(Math.floor(C.wobbleX),Math.floor(_e)),P.lineTo(Math.floor(pe),Math.floor(Ce)),P.lineTo(Math.floor(re),Math.floor(C.wobbleY));return P.closePath(),P.fill(),C.tick<C.totalTicks}function O(P,C,te,re,_e){var pe=C.slice(),Ce=P.getContext("2d"),H,Z,ce=c(function(Te){function he(){H=Z=null,Ce.clearRect(0,0,re.width,re.height),h.clear(),_e(),Te()}function we(){n&&!(re.width===i.width&&re.height===i.height)&&(re.width=P.width=i.width,re.height=P.height=i.height),!re.width&&!re.height&&(te(P),re.width=P.width,re.height=P.height),Ce.clearRect(0,0,re.width,re.height),pe=pe.filter(function(Xe){return N(Ce,Xe)}),pe.length?H=d.frame(we):he()}H=d.frame(we),Z=he});return{addFettis:function(Te){return pe=pe.concat(Te),ce},canvas:P,promise:ce,reset:function(){H&&d.cancel(H),Z&&Z()}}}function L(P,C){var te=!P,re=!!p(C||{},"resize"),_e=!1,pe=p(C,"disableForReducedMotion",Boolean),Ce=s&&!!p(C||{},"useWorker"),H=Ce?u():null,Z=te?A:v,ce=P&&H?!!P.__confetti_initialized:!1,Te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,he;function we(K,se,oe){for(var le=p(K,"particleCount",m),de=p(K,"angle",Number),Oe=p(K,"spread",Number),De=p(K,"startVelocity",Number),Ve=p(K,"decay",Number),qe=p(K,"gravity",Number),U=p(K,"drift",Number),it=p(K,"colors",x),Qe=p(K,"ticks",Number),R=p(K,"shapes"),M=p(K,"scalar"),G=!!p(K,"flat"),q=w(K),Q=le,ue=[],me=P.width*q.x,j=P.height*q.y;Q--;)ue.push(I({x:me,y:j,angle:de,spread:Oe,startVelocity:De,color:it[Q%it.length],shape:R[y(0,R.length)],ticks:Qe,decay:Ve,gravity:qe,drift:U,scalar:M,flat:G}));return he?he.addFettis(ue):(he=O(P,ue,Z,se,oe),he.promise)}function Xe(K){var se=pe||p(K,"disableForReducedMotion",Boolean),oe=p(K,"zIndex",Number);if(se&&Te)return c(function(De){De()});te&&he?P=he.canvas:te&&!P&&(P=E(oe),document.body.appendChild(P)),re&&!ce&&Z(P);var le={width:P.width,height:P.height};H&&!ce&&H.init(P),ce=!0,H&&(P.__confetti_initialized=!0);function de(){if(H){var De={getBoundingClientRect:function(){if(!te)return P.getBoundingClientRect()}};Z(De),H.postMessage({resize:{width:De.width,height:De.height}});return}le.width=le.height=null}function Oe(){he=null,re&&(_e=!1,e.removeEventListener("resize",de)),te&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,ce=!1)}return re&&!_e&&(_e=!0,e.addEventListener("resize",de,!1)),H?H.fire(K,le,Oe):we(K,le,Oe)}return Xe.reset=function(){H&&H.reset(),he&&he.reset()},Xe}var B;function Y(){return B||(B=L(null,{useWorker:!0,resize:!0})),B}function V(P,C,te,re,_e,pe,Ce){var H=new Path2D(P),Z=new Path2D;Z.addPath(H,new DOMMatrix(C));var ce=new Path2D;return ce.addPath(Z,new DOMMatrix([Math.cos(Ce)*_e,Math.sin(Ce)*_e,-Math.sin(Ce)*pe,Math.cos(Ce)*pe,te,re])),ce}function ne(P){if(!a)throw new Error("path confetti are not supported in this browser");var C,te;typeof P=="string"?C=P:(C=P.path,te=P.matrix);var re=new Path2D(C),_e=document.createElement("canvas"),pe=_e.getContext("2d");if(!te){for(var Ce=1e3,H=Ce,Z=Ce,ce=0,Te=0,he,we,Xe=0;Xe<Ce;Xe+=2)for(var K=0;K<Ce;K+=2)pe.isPointInPath(re,Xe,K,"nonzero")&&(H=Math.min(H,Xe),Z=Math.min(Z,K),ce=Math.max(ce,Xe),Te=Math.max(Te,K));he=ce-H,we=Te-Z;var se=10,oe=Math.min(se/he,se/we);te=[oe,0,0,oe,-Math.round(he/2+H)*oe,-Math.round(we/2+Z)*oe]}return{type:"path",path:C,matrix:te}}function $(P){var C,te=1,re="#000000",_e='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?C=P:(C=P.text,te="scalar"in P?P.scalar:te,_e="fontFamily"in P?P.fontFamily:_e,re="color"in P?P.color:re);var pe=10*te,Ce=""+pe+"px "+_e,H=new OffscreenCanvas(pe,pe),Z=H.getContext("2d");Z.font=Ce;var ce=Z.measureText(C),Te=Math.ceil(ce.actualBoundingBoxRight+ce.actualBoundingBoxLeft),he=Math.ceil(ce.actualBoundingBoxAscent+ce.actualBoundingBoxDescent),we=2,Xe=ce.actualBoundingBoxLeft+we,K=ce.actualBoundingBoxAscent+we;Te+=we+we,he+=we+we,H=new OffscreenCanvas(Te,he),Z=H.getContext("2d"),Z.font=Ce,Z.fillStyle=re,Z.fillText(C,Xe,K);var se=1/te;return{type:"bitmap",bitmap:H.transferToImageBitmap(),matrix:[se,0,0,se,-Te*se/2,-he*se/2]}}t.exports=function(){return Y().apply(this,arguments)},t.exports.reset=function(){Y().reset()},t.exports.create=L,t.exports.shapeFromPath=ne,t.exports.shapeFromText=$})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),_c,!1);const zM=_c.exports;_c.exports.create;class kM{constructor(){Le(this,"currentPosition","CH");Le(this,"currentTemperature",23);Le(this,"serialNumber","CH-2026-TA915-001");Le(this,"records",[]);Le(this,"metrics",null);Le(this,"isTesting",!1);this.generateRandomSerialNumber(),this.initDefaultRecords()}generateRandomSerialNumber(){const e=Math.floor(1e3+Math.random()*9e3);return this.serialNumber=`CH-2026-TA915-${e}`,this.serialNumber}getSerialNumber(){return this.serialNumber}setPosition(e){this.currentPosition=e}getPosition(){return this.currentPosition}setTemperature(e){this.currentTemperature=e}getTemperature(){return this.currentTemperature}calculateCurrentRate(){let e=1.2;switch(this.currentPosition){case"CH":e+=.4;break;case"FH":e+=.2;break;case"12H":e-=.6;break;case"6H":e-=.3;break;case"9H":e-=.5;break}return this.currentTemperature===8?e-=.8:this.currentTemperature===38&&(e+=.9),e+=(Math.random()-.5)*.3,Number(e.toFixed(2))}initDefaultRecords(){const e=[{pos:"12H",temp:23},{pos:"12H",temp:23},{pos:"9H",temp:23},{pos:"9H",temp:23},{pos:"6H",temp:23},{pos:"6H",temp:23},{pos:"FH",temp:23},{pos:"FH",temp:23},{pos:"CH",temp:23},{pos:"CH",temp:23},{pos:"CH",temp:8},{pos:"CH",temp:23},{pos:"CH",temp:38},{pos:"12H",temp:23},{pos:"12H",temp:23}];this.records=e.map((t,n)=>{let i=1.3;return t.pos==="12H"&&(i+=.6),t.pos==="9H"&&(i+=.4),t.pos==="6H"&&(i-=.3),t.pos==="FH"&&(i+=.2),t.pos==="CH"&&(i+=.5),t.temp===8&&(i-=.7),t.temp===38&&(i+=.8),i+=Math.sin(n*1.5)*.25,{day:n+1,position:t.pos,temperature:t.temp,dailyRate:Number(i.toFixed(2))}}),this.computeMetrics()}computeMetrics(){const e=this.records.map(m=>m.dailyRate),t=e.reduce((m,y)=>m+y,0)/e.length,n=[];for(let m=1;m<10;m++)n.push(Math.abs(e[m]-e[m-1]));const i=n.reduce((m,y)=>m+y,0)/n.length,s=Math.max(...n),a=e.slice(0,6),o=e.slice(6,10),l=a.reduce((m,y)=>m+y,0)/a.length,h=o.reduce((m,y)=>m+y,0)/o.length-l,d=Math.max(...e.slice(0,10))-Math.min(...e.slice(0,10)),u=e[10],f=e[12],_=Math.abs(f-u)/30,g=Math.abs(e[14]-e[0]),p=t>=-4&&t<=6&&i<=2&&s<=5&&h>=-6&&h<=8&&d<=10&&_<=.6&&g<=5;return this.metrics={meanDailyRate:Number(t.toFixed(2)),meanVariation:Number(i.toFixed(2)),maxVariation:Number(s.toFixed(2)),diffHorizVert:Number(h.toFixed(2)),greatestDiff:Number(d.toFixed(2)),thermalCoeff:Number(_.toFixed(3)),rateResumption:Number(g.toFixed(2)),passed:p},this.metrics}getMetrics(){return this.metrics||this.computeMetrics(),this.metrics}getRecords(){return this.records}async runFull15DayTest(e){if(this.isTesting)return this.getMetrics();this.isTesting=!0,this.generateRandomSerialNumber();const t=[],n=[{pos:"12H",temp:23},{pos:"12H",temp:23},{pos:"9H",temp:23},{pos:"9H",temp:23},{pos:"6H",temp:23},{pos:"6H",temp:23},{pos:"FH",temp:23},{pos:"FH",temp:23},{pos:"CH",temp:23},{pos:"CH",temp:23},{pos:"CH",temp:8},{pos:"CH",temp:23},{pos:"CH",temp:38},{pos:"12H",temp:23},{pos:"12H",temp:23}];for(let s=0;s<n.length;s++){const a=n[s];let o=1.1+(Math.random()*.8-.4);a.pos==="12H"&&(o+=.4),a.pos==="9H"&&(o+=.3),a.pos==="6H"&&(o-=.2),a.pos==="FH"&&(o+=.15),a.pos==="CH"&&(o+=.35),a.temp===8&&(o-=.6),a.temp===38&&(o+=.7);const l={day:s+1,position:a.pos,temperature:a.temp,dailyRate:Number(o.toFixed(2))};t.push(l),e(s+1,l),await new Promise(c=>setTimeout(c,120))}this.records=t;const i=this.computeMetrics();if(this.isTesting=!1,i.passed)try{zM({particleCount:80,spread:70,origin:{y:.6},colors:["#e0a96d","#38bdf8","#d4af37","#ffffff"]})}catch{}return i}}const HM={ar:{brandTitle:"كـرونـوس",brandSubtitle:"المرصد الميكانيكي الحركي الفلكي ثلاثي الأبعاد",creatorTag:"المبتكر وكبير مهندسي النظم المعمارية",architectName:"أ. طارق ابوعشي",movementCaliber:"عيار CH-915 الفلكي المعقد",jewelsCount:"٣٨ ياقوتة كوراندم اصطناعي",frequency:"٢٨,٨٠٠ ذبذبة/ساعة (٤ هرتز)",powerReserve:"احتياطي طاقة ٧٢ ساعة",navObservatory:"المرصد الحركي",navMovement:"حركة العيار",navExploded:"العرض التفكيكي",navChronograph:"الكرونوغراف",navCosc:"فحص الكرونومتر COSC",navSpecifications:"المواصفات التقنية",explodeSliderLabel:"تفكيك الطبقات الميكانيكية في الفضاء الثلاثي",explodeBtn:"تفكيك كامل للمنظومة",assembleBtn:"إعادة تجميع العيار",resetCameraBtn:"إعادة ضبط المنظور",toggleWireframe:"الهيكل الشبكي",autoRotate:"دوران بانورامي مستمر",soundToggle:"صوت الدقات الميكانيكية",soundVolume:"مستوى الرنين الصوتي",customizerTitle:"تخصيص الخامات الحرفية الراقية",caseMaterial:"سبيكة العلبة الفاخرة",matPlatinum:"بلاتين 950 نقي",matRoseGold:"ذهب وردي 18 قيراط 5N",matTitanium:"تيتانيوم الدرجة 5 الجوي",matCarbon:"كربون مركب مشكل حرارياً",dialPattern:"زخرفة الميناء الحرفية (Guilloché)",patternClousDeParis:"مسامير باريس (Clous de Paris)",patternSunburst:"أشعة الشمس السديمية",patternSkeleton:"هيكل مفرغ مكشوف بالكامل",patternNavyGuilloche:"أمواج جنيف الملكية الزرقاء",screwsColor:"معالجة المسامير الميكانيكية",screwBlued:"فولاذ معالج حرارياً بالزرقة الملكية",screwPolished:"بلاتين مصقول بمرآة سوداء",screwGold:"ذهب عيار 18 مصقول يدوياً",layerInspectorTitle:"مستكشف الطبقات الميكانيكية الحركية",layerCrystal:"البلورة الزفيرية المقببة (Sapphire Crystal)",layerCrystalDesc:"زفير سويسري نقي بدرجة صلادة 9 موس، مع معالجة ثنائية مضادة للانعكاس وانكسار فرينل عالي الدقة.",layerHands:"عقارب بريجيه الزرقاء (Breguet Hands)",layerHandsDesc:"عقارب مفرغة بتشطيب حراري أزرق بوزن متوازن فائق الخفة لتقليل القصور الذاتي.",layerDial:"الميناء الفلكي المزخرف (Guilloché Dial)",layerDialDesc:"نقوش يدوية هندسية دقيقة مع فتحة كاشفة للتوربيون وقرص أطوار القمر المرصع بالنجوم.",layerMoonPhase:"مؤشر أطوار القمر الكروي (Moon Phase)",layerMoonPhaseDesc:"كرة قمرية ثلاثية الأبعاد بدقة تضاريس مجهرية تدور بدورة فلكية قدرها 29.53 يوماً متزامنة مع الشهر القمري.",layerTourbillon:"التوربيون الطائر ثلاثي المحاور (Tri-Axial Tourbillon)",layerTourbillonDesc:"قفص كروي خفيف الوزن يدور على 3 محاور لإلغاء تأثير الجاذبية الأرضية بالكامل على عجلة التوازن.",layerBridges:"جسور الحركة المزخرفة (Côtes de Genève Bridges)",layerBridgesDesc:"جسور مزينة بخطوط جنيف اليدوية وشطف حواف زوايا الذهب، مثبتة بحجارة ياقوتية خالية من الاحتكاك.",layerGears:"سلسلة التروس الحسابية (Precision Gear Train)",layerGearsDesc:"تروس نحاسية مسننة بحسابات ميكانيكية دقيقة تنقل العزم من خزان الطاقة إلى ميزان الساعة بنسبة 1:60.",layerEscapement:"الميزان السويسري والزنبرك الشعري (Escapement & Hairspring)",layerEscapementDesc:"نبضات منتظمة بمعدل 8 تكات في الثانية (28,800 ذبذبة/ساعة) بفضل سبيكة النيفاروكس المقاومة للمغناطيسية.",layerMainplate:"الصفيحة الرئيسية المحببة (Perlage Mainplate)",layerMainplateDesc:"قاعدة العيار المشغولة بتقنية الدوائر اللؤلؤية المتراكبة لتوزيع زيوت التشحيم وحماية الأجزاء.",layerCaseback:"ظهر العلبة الاستعراضي الشفاف (Exhibition Caseback)",layerCasebackDesc:"حلقة فولاذية محفورة برقم الإصدار المعتمد للمصمم والمهندس أ. طارق ابوعشي وشهادة الكرونومتر.",chronoTitle:"كرونوغراف الدقة المتناهية مع العودة اللحظية (Flyback)",chronoStart:"تشغيل العداد",chronoStop:"إيقاف مؤقت",chronoReset:"تصفير",chronoFlyback:"قفزة العودة المباشرة (Flyback)",chronoLap:"تسجيل دورة",chronoRunning:"الكرونوغراف يعمل بنبضات ميكانيكية حية",chronoStopped:"الكرونوغراف متوقف",coscTitle:"محاكي فحص الاعتماد السويسري (COSC Chronometer Lab)",coscSubtitle:"المعيار الصارم للهيئة السويسرية لاختبارات الكرونومتر (ISO 3159)",coscPosition:"الوضعية الاختبارية للعيار:",posDialUp:"الميناء لأعلى (Dial Up - CH)",posDialDown:"الميناء لأسفل (Dial Down - FH)",posCrownUp:"التاج لأعلى (Crown Up - 12H)",posCrownDown:"التاج لأسفل (Crown Down - 6H)",posCrownLeft:"التاج لليسار (Crown Left - 9H)",coscTemperature:"درجة الحرارة الاختبارية:",tempAlpine:"٨ درجات مئوية (البرودة الألبية)",tempRoom:"٢٣ درجة مئوية (المختبر القياسي)",tempBody:"٣٨ درجة مئوية (حرارة معصم الإنسان)",coscCurrentRate:"معدل الانحراف اليومي اللحظي",coscRateUnit:"ثانية / يوم",coscStatus:"حالة المطابقة للمعايير السويسرية",coscPass:"مطابق لمعيار الكرونومتر السويسري (-٤ إلى +٦ ث/يوم)",coscFail:"خارج حدود الاعتماد الرسمي",coscRun15DayTest:"تشغيل فحص الـ 15 يوماً المعتمد",coscTestingInProgress:"جاري محاكاة بروتوكول الاختبار عبر 5 وضعيات و3 حرارات...",coscExportCert:"إصدار وتوثيق شهادة الكرونومتر الرسمية",coscCertificateTitle:"شهادة اعتماد الكرونومتر الرسمية السويسرية",coscCertSerial:"الرقم التسلسلي للقطعة الفريدة",coscCertCaliber:"العيار الميكانيكي المعتمد",coscCertDate:"تاريخ الفحص والمصادقة",coscCertMeanRate:"متوسط الانحراف اليومي (M)",coscCertMeanVariation:"متوسط التباين في الوضعيات (V)",coscCertMaxVariation:"أقصى تباين في يومين متتاليين (Vmax)",coscCertThermalCoefficient:"المعامل الحراري للانحراف (C)",coscOfficialSeal:"الختم الرسمي للمرصد الميكانيكي",coscPrintCert:"طباعة وحفظ الشهادة الرسمية (PDF)",coscCloseModal:"إغلاق نافذة التوثيق",specsTitle:"دفتر الشروط والمواصفات الميكانيكية للعيار",specDiameter:"قطر العلبة: 42.5 ملم | سُمك العيار: 11.8 ملم",specThickness:"الزجاج: بلورة زفيرية مقببة مزدوجة مع معالجة AR داخلية وخارجية",specFrequency:"التردد: 4 هرتز (28,800 ذبذبة بالساعة) لدقة لا تضاهى",specBalance:"عجلة التوازن: غلوسيدور بـ 4 براغي ضبط دقيقة من الذهب الأبيض",specHairspring:"الزنبرك الشعري: منحنى بريجيه الفلكي من سبيكة السيليكون المقاومة للحقول الكهرومغناطيسية",specTourbillon:"التوربيون: ثلاثي المحاور بوزن 0.38 غرام فقط من التيتانيوم المؤكسد",specComponents:"مجموع الأجزاء الميكانيكية: 348 قطعة مجمعة يدوياً",specJewels:"الأحجار الوظيفية: 38 ياقوتة حمراء اصطناعية داخل شاتون ذهبي",specWaterResistance:"مقاومة الضغط والماء: 50 متراً (5 بار)",specFinishing:"التشطيبات الحرفية الراقية:",specFinishingDesc:"شطف يدوي بزاوية 45 درجة (Anglage)، وخطوط جنيف المتوازية (Côtes de Genève)، والتنعيم اللؤلؤي (Perlage)، وحفر شعار المرصد بالليزر الفائق.",footerRights:"جميع الحقوق محفوظة للمبتكر وكبير مهندسي النظم المعمارية أ. طارق ابوعشي © 2026",footerCraftsmanship:"صُممت وطُوّرت المنظومة البرمجية الحركية كتحفة فلكية تقنية تجمع بين فن الساعات السويسرية العليا ومحاكاة الفيزياء ثلاثية الأبعاد."},en:{brandTitle:"CHRONOS",brandSubtitle:"Celestial 3D Kinetic Horology & Tourbillon Observatory",creatorTag:"Creator & Lead Systems Architect",architectName:"Tareq Abuashi",movementCaliber:"Calibre CH-915 Celestial Grand Complication",jewelsCount:"38 Synthetic Corundum Jewels",frequency:"28,800 vph (4 Hz)",powerReserve:"72-Hour Power Reserve",navObservatory:"Kinetic Observatory",navMovement:"Calibre Engine",navExploded:"Exploded View",navChronograph:"Chronograph",navCosc:"COSC Chronometer Lab",navSpecifications:"Technical Specs",explodeSliderLabel:"Explode Mechanical Assemblies along Spatial Z-Axis",explodeBtn:"Explode Full Calibre",assembleBtn:"Assemble Movement",resetCameraBtn:"Reset Viewport",toggleWireframe:"Toggle Wireframe",autoRotate:"Panoramic Orbit",soundToggle:"Mechanical Escapement Tick",soundVolume:"Acoustic Resonance Volume",customizerTitle:"Haute Horlogerie Materials & Finishes",caseMaterial:"Precious Case Alloy",matPlatinum:"Pure 950 Platinum",matRoseGold:"18K 5N Rose Gold",matTitanium:"Aerospace Grade 5 Titanium",matCarbon:"Forged Carbon Composite",dialPattern:"Guilloché Dial Artistry",patternClousDeParis:"Clous de Paris (Hobnail)",patternSunburst:"Nebula Sunburst Brushed",patternSkeleton:"Fully Openworked Skeleton",patternNavyGuilloche:"Royal Navy Geneva Waves",screwsColor:"Screw Thermal Treatment",screwBlued:"Flame-Blued Royal Steel",screwPolished:"Black-Polished Mirror Platinum",screwGold:"Hand-Beveled 18K Yellow Gold",layerInspectorTitle:"Mechanical Sub-Assembly Architecture",layerCrystal:"Domed Sapphire Crystal",layerCrystalDesc:"Pure 9 Mohs scratchproof Swiss sapphire with double anti-reflective coating and micro-Fresnel edge refraction.",layerHands:"Thermal Blued Breguet Hands",layerHandsDesc:"Featherweight open-tipped blued steel hands with poise counterweights to eradicate inertia lag.",layerDial:"Guilloché Astronomical Dial",layerDialDesc:"Engine-turned geometrical guilloché with grand aperture framing the multi-axis tourbillon and starry moon disk.",layerMoonPhase:"Spherical 3D Lunar Moon Phase",layerMoonPhaseDesc:"Photorealistic 3D cratered lunar sphere accurately tracking the 29.53-day synodic lunar progression.",layerTourbillon:"Tri-Axial Flying Tourbillon Cage",layerTourbillonDesc:"Ultralight titanium cage continuously revolving across three orthogonal axes, neutralizing gravitational delta.",layerBridges:"Côtes de Genève Decorated Bridges",layerBridgesDesc:"Parallel wave graining with hand-anglage beveled flanks, gold chatons, and friction-free ruby bearings.",layerGears:"Mathematically Calculated Gear Train",layerGearsDesc:"Cycloidal brass gear wheels stepping kinetic torque from mainspring barrel to escape wheel at exact 1:60 ratio.",layerEscapement:"Swiss Lever Escapement & Balance",layerEscapementDesc:"Pulsing at 8 ticks per second (28,800 vph) anchored by an anti-magnetic silicon hairspring.",layerMainplate:"Circular Grained Perlage Mainplate",layerMainplateDesc:"Engineered solid foundation with overlapping circular graining for lubricant retention and structural rigidity.",layerCaseback:"Sapphire Exhibition Caseback",layerCasebackDesc:"Engraved steel bezel framing the movement with Creator & Lead Systems Architect Tareq Abuashi certification hallmark.",chronoTitle:"High-Precision Flyback Chronograph",chronoStart:"Start Chrono",chronoStop:"Pause",chronoReset:"Reset",chronoFlyback:"Instant Flyback Jump",chronoLap:"Record Split Lap",chronoRunning:"Chronograph active with authentic mechanical pulsation",chronoStopped:"Chronograph idle",coscTitle:"Official Swiss Chronometer Testing Laboratory (COSC)",coscSubtitle:"ISO 3159 Rigorous Testing Standard for Precision Mechanical Timepieces",coscPosition:"Test Position Orientation:",posDialUp:"Dial Up (CH)",posDialDown:"Dial Down (FH)",posCrownUp:"Crown Up (12H)",posCrownDown:"Crown Down (6H)",posCrownLeft:"Crown Left (9H)",coscTemperature:"Test Chamber Temperature:",tempAlpine:"8°C (Alpine Winter Cold)",tempRoom:"23°C (Standard Laboratory Ambient)",tempBody:"38°C (Simulated Human Body Heat)",coscCurrentRate:"Current Daily Rate Deviation",coscRateUnit:"seconds / day",coscStatus:"Swiss Chronometer Compliance",coscPass:"Complies with Swiss COSC Standard (-4 to +6 s/d)",coscFail:"Outside Official Tolerances",coscRun15DayTest:"Execute Official 15-Day COSC Protocol",coscTestingInProgress:"Simulating 15-day cycle across 5 positions and 3 temperatures...",coscExportCert:"Issue Verifiable COSC Certificate",coscCertificateTitle:"Official Swiss Chronometer Certificate of Precision",coscCertSerial:"Individual Certified Serial No.",coscCertCaliber:"Certified Calibre Designation",coscCertDate:"Certification & Verification Date",coscCertMeanRate:"Mean Daily Rate (M)",coscCertMeanVariation:"Mean Variation in Rates (V)",coscCertMaxVariation:"Max Rate Variation (Vmax)",coscCertThermalCoefficient:"Thermal Coefficient (C)",coscOfficialSeal:"Official Mechanical Observatory Seal",coscPrintCert:"Print Official Certificate (PDF)",coscCloseModal:"Close Verification",specsTitle:"Technical Specification Dossier",specDiameter:"Case Diameter: 42.5 mm | Movement Thickness: 11.8 mm",specThickness:"Crystal: Double-domed scratchproof sapphire with internal & external AR coatings",specFrequency:"Frequency: 4 Hz (28,800 vibrations per hour) for exceptional stability",specBalance:"Balance Wheel: Variable-inertia Glucydur with 4 micro-metric 18K white gold screws",specHairspring:"Hairspring: Silicon Breguet overcoil with thermal-expansion compensation",specTourbillon:"Tourbillon: 3-Axis carriage weighing only 0.38 grams crafted in anodized titanium",specComponents:"Total Mechanical Components: 348 individually hand-finished parts",specJewels:"Functional Jewels: 38 synthetic corundum rubies set in screwed gold chatons",specWaterResistance:"Dynamic Water Resistance: 50 meters (5 ATM / 5 Bar)",specFinishing:"Haute Horlogerie Hand Finishes:",specFinishingDesc:"45-degree hand anglage, mirror black polish, circular graining perlage, Côtes de Genève linear striping, and ultra-precision laser serial hallmark.",footerRights:"All Rights Reserved. Created & Engineered by Lead Systems Architect Tareq Abuashi © 2026",footerCraftsmanship:"Designed as an elite kinetic horology masterpiece bridging Swiss grand complication tradition with real-time 3D physics simulation."}};class GM{constructor(){Le(this,"watchEngine");Le(this,"audioEngine");Le(this,"coscSim");Le(this,"currentLang","ar");Le(this,"currentTheme","dark");Le(this,"chronoTimerId",null);const e=document.getElementById("webgl-container");if(!e)throw new Error("WebGL container not found");this.watchEngine=new FM(e),this.audioEngine=new BM,this.coscSim=new kM,this.initEventListeners(),this.applyTranslations(),this.renderLayerInspector(),this.renderTechnicalSpecs(),this.updateCOSCLiveRate();const t=()=>{this.audioEngine.startEscapementAudio(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t)}t(){return HM[this.currentLang]}initEventListeners(){var m,y,T,x,S,w,A,v,E,D,I;const e=document.getElementById("btn-toggle-lang");e==null||e.addEventListener("click",()=>{this.currentLang=this.currentLang==="ar"?"en":"ar",document.documentElement.lang=this.currentLang,document.documentElement.dir=this.currentLang==="ar"?"rtl":"ltr";const N=document.getElementById("label-lang");N&&(N.textContent=this.currentLang==="ar"?"EN":"عربي"),this.applyTranslations(),this.renderLayerInspector(),this.renderTechnicalSpecs()});const t=document.getElementById("btn-toggle-theme");t==null||t.addEventListener("click",()=>{this.currentTheme=this.currentTheme==="dark"?"light":"dark",document.documentElement.setAttribute("data-theme",this.currentTheme)});const n=document.getElementById("btn-toggle-sound"),i=document.getElementById("icon-sound-on"),s=document.getElementById("icon-sound-off");n==null||n.addEventListener("click",()=>{const N=this.audioEngine.toggleMute();i&&s&&(i.style.display=N?"none":"block",s.style.display=N?"block":"none")});const a=document.getElementById("input-sound-volume");a==null||a.addEventListener("input",N=>{const O=parseFloat(N.target.value);this.audioEngine.setVolume(O)}),document.querySelectorAll("[data-case]").forEach(N=>{N.addEventListener("click",O=>{document.querySelectorAll("[data-case]").forEach(Y=>Y.classList.remove("active"));const L=O.currentTarget;L.classList.add("active");const B=L.getAttribute("data-case");this.watchEngine.updateCaseMaterial(B),this.audioEngine.setMaterialTimbre(B)})}),document.querySelectorAll("[data-dial]").forEach(N=>{N.addEventListener("click",O=>{document.querySelectorAll("[data-dial]").forEach(Y=>Y.classList.remove("active"));const L=O.currentTarget;L.classList.add("active");const B=L.getAttribute("data-dial");this.watchEngine.updateDialPattern(B)})}),document.querySelectorAll("[data-screw]").forEach(N=>{N.addEventListener("click",O=>{document.querySelectorAll("[data-screw]").forEach(Y=>Y.classList.remove("active"));const L=O.currentTarget;L.classList.add("active");const B=L.getAttribute("data-screw");this.watchEngine.updateScrewFinish(B)})});const o=document.getElementById("input-explode-range"),l=document.getElementById("explode-pct-display");o==null||o.addEventListener("input",N=>{const O=parseFloat(N.target.value);this.watchEngine.setExplodedRatio(O,!1),l&&(l.textContent=`${Math.round(O*100)}%`)}),(m=document.getElementById("btn-explode-all"))==null||m.addEventListener("click",()=>{this.watchEngine.setExplodedRatio(1,!0),o&&(o.value="1.0"),l&&(l.textContent="100%")}),(y=document.getElementById("btn-assemble-all"))==null||y.addEventListener("click",()=>{this.watchEngine.setExplodedRatio(0,!0),o&&(o.value="0"),l&&(l.textContent="0%")}),(T=document.getElementById("btn-reset-camera"))==null||T.addEventListener("click",()=>{this.watchEngine.resetCamera()}),(x=document.getElementById("btn-toggle-wireframe"))==null||x.addEventListener("click",N=>{const O=this.watchEngine.toggleWireframe();N.currentTarget.classList.toggle("active",O)}),(S=document.getElementById("btn-toggle-rotate"))==null||S.addEventListener("click",N=>{const O=this.watchEngine.toggleAutoRotate();N.currentTarget.classList.toggle("active",O)});const c=document.getElementById("btn-chrono-toggle"),h=document.getElementById("btn-chrono-flyback"),d=document.getElementById("text-chrono-status");c==null||c.addEventListener("click",()=>{this.audioEngine.playChronoClick(!0),this.watchEngine.chronoRunning?(this.watchEngine.stopChronograph(),c.textContent=this.t().chronoStart,c.classList.replace("btn-chrono-stop","btn-chrono-start"),d&&(d.textContent=this.t().chronoStopped),this.chronoTimerId!==null&&cancelAnimationFrame(this.chronoTimerId)):(this.watchEngine.startChronograph(),c.textContent=this.t().chronoStop,c.classList.replace("btn-chrono-start","btn-chrono-stop"),d&&(d.textContent=this.t().chronoRunning),this.startChronoDisplayLoop())}),h==null||h.addEventListener("click",()=>{this.audioEngine.playFlybackHammer(),this.watchEngine.flybackChronograph(),this.watchEngine.chronoRunning||(c.textContent=this.t().chronoStop,c.classList.replace("btn-chrono-start","btn-chrono-stop"),d&&(d.textContent=this.t().chronoRunning),this.startChronoDisplayLoop())});const u=document.getElementById("modal-cosc");(w=document.getElementById("btn-open-cosc"))==null||w.addEventListener("click",()=>{u==null||u.classList.add("active"),this.updateCOSCLiveRate()}),(A=document.getElementById("btn-close-cosc"))==null||A.addEventListener("click",()=>{u==null||u.classList.remove("active")});const f=document.getElementById("select-cosc-pos"),_=document.getElementById("select-cosc-temp");f==null||f.addEventListener("change",N=>{const O=N.target.value;this.coscSim.setPosition(O),this.updateCOSCLiveRate()}),_==null||_.addEventListener("change",N=>{const O=parseInt(N.target.value);this.coscSim.setTemperature(O),this.updateCOSCLiveRate()});const g=document.getElementById("btn-run-15day");g==null||g.addEventListener("click",async()=>{g.setAttribute("disabled","true"),g.innerHTML=`<span>⏳</span><span>${this.t().coscTestingInProgress}</span>`,await this.coscSim.runFull15DayTest((N,O)=>{const L=document.getElementById("cosc-live-rate-display");L&&(L.textContent=`${O.dailyRate>0?"+":""}${O.dailyRate} s/d (Day ${N} - ${O.position})`)}),this.updateCOSCMetricsUI(),g.removeAttribute("disabled"),g.innerHTML=`<span>⚡</span><span>${this.t().coscRun15DayTest}</span>`}),(v=document.getElementById("btn-print-certificate"))==null||v.addEventListener("click",()=>{window.print()});const p=document.getElementById("modal-specs");(E=document.getElementById("btn-open-specs"))==null||E.addEventListener("click",()=>{p==null||p.classList.add("active")}),(D=document.getElementById("btn-close-specs"))==null||D.addEventListener("click",()=>{p==null||p.classList.remove("active")}),(I=document.getElementById("btn-nav-observatory"))==null||I.addEventListener("click",()=>{this.watchEngine.resetCamera()})}startChronoDisplayLoop(){const e=()=>{if(this.watchEngine.chronoRunning){const t=this.watchEngine.chronoElapsed,n=Math.floor(t/60),i=Math.floor(t%60),s=Math.floor(t*100%100),a=String(n).padStart(2,"0"),o=String(i).padStart(2,"0"),l=String(s).padStart(2,"0"),c=document.getElementById("chrono-time-display");c&&(c.textContent=`${a}:${o}.${l}`),this.chronoTimerId=requestAnimationFrame(e)}};this.chronoTimerId=requestAnimationFrame(e)}updateCOSCLiveRate(){const e=this.coscSim.calculateCurrentRate(),t=document.getElementById("cosc-live-rate-display"),n=document.getElementById("cosc-compliance-status");t&&(t.textContent=`${e>0?"+":""}${e} s/d`),n&&(e>=-4&&e<=6?(n.textContent=`✓ ${this.t().coscPass}`,n.style.color="#34d399"):(n.textContent=`✕ ${this.t().coscFail}`,n.style.color="#f87171"))}updateCOSCMetricsUI(){const e=this.coscSim.getMetrics(),t=document.getElementById("stat-m-rate"),n=document.getElementById("stat-v-rate"),i=document.getElementById("stat-vmax-rate"),s=document.getElementById("stat-c-rate"),a=document.getElementById("cert-serial-no");t&&(t.textContent=`${e.meanDailyRate>0?"+":""}${e.meanDailyRate}`),n&&(n.textContent=`${e.meanVariation}`),i&&(i.textContent=`${e.maxVariation}`),s&&(s.textContent=`${e.thermalCoeff}`),a&&(a.textContent=this.coscSim.getSerialNumber())}applyTranslations(){const e=this.t(),t=(n,i)=>{const s=document.getElementById(n);s&&(s.textContent=i)};t("text-brand-title",e.brandTitle),t("text-brand-subtitle",e.brandSubtitle),t("text-architect-tag",e.architectName),t("text-nav-observatory",e.navObservatory),t("text-nav-cosc",e.navCosc),t("text-nav-specs",e.navSpecifications),t("text-customizer-title",e.customizerTitle),t("text-case-material",e.caseMaterial),t("btn-mat-plat",e.matPlatinum),t("btn-mat-rose",e.matRoseGold),t("btn-mat-ti",e.matTitanium),t("btn-mat-carb",e.matCarbon),t("text-dial-pattern",e.dialPattern),t("btn-dial-clous",e.patternClousDeParis),t("btn-dial-sun",e.patternSunburst),t("btn-dial-navy",e.patternNavyGuilloche),t("btn-dial-skel",e.patternSkeleton),t("text-screws-color",e.screwsColor),t("btn-screw-blue",e.screwBlued),t("btn-screw-pol",e.screwPolished),t("btn-screw-gold",e.screwGold),t("text-sound-volume",e.soundVolume),t("text-chrono-title",e.chronoTitle),t("btn-chrono-flyback",e.chronoFlyback),t("text-layer-inspector-title",e.layerInspectorTitle),t("text-explode-label",e.explodeSliderLabel),t("text-btn-explode",e.explodeBtn),t("text-btn-assemble",e.assembleBtn),t("text-btn-reset-cam",e.resetCameraBtn),t("text-btn-wireframe",e.toggleWireframe),t("text-btn-rotate",e.autoRotate),t("text-cosc-title",e.coscTitle),t("text-cosc-subtitle",e.coscSubtitle),t("text-cosc-current-rate",e.coscCurrentRate),t("text-run-15day",e.coscRun15DayTest),t("text-print-cert",e.coscPrintCert),t("cert-title",e.coscCertificateTitle),t("text-close-cosc",e.coscCloseModal),t("text-specs-title",e.specsTitle),t("label-m-rate",e.coscCertMeanRate),t("label-v-rate",e.coscCertMeanVariation),t("label-vmax-rate",e.coscCertMaxVariation),t("label-c-rate",e.coscCertThermalCoefficient)}renderLayerInspector(){const e=this.t(),t=document.getElementById("layers-list-container");if(!t)return;const n=[{name:e.layerCrystal,desc:e.layerCrystalDesc,ratio:.9},{name:e.layerHands,desc:e.layerHandsDesc,ratio:.65},{name:e.layerDial,desc:e.layerDialDesc,ratio:.45},{name:e.layerMoonPhase,desc:e.layerMoonPhaseDesc,ratio:.35},{name:e.layerTourbillon,desc:e.layerTourbillonDesc,ratio:.2},{name:e.layerBridges,desc:e.layerBridgesDesc,ratio:.5},{name:e.layerGears,desc:e.layerGearsDesc,ratio:.7},{name:e.layerMainplate,desc:e.layerMainplateDesc,ratio:.8},{name:e.layerCaseback,desc:e.layerCasebackDesc,ratio:1}];t.innerHTML=n.map(i=>`
      <div class="layer-item-card" data-layer-ratio="${i.ratio}">
        <div class="layer-item-header">
          <span>${i.name}</span>
          <span style="color: var(--gold-primary); font-size: 0.75rem;">Explore</span>
        </div>
        <p class="layer-item-desc">${i.desc}</p>
      </div>
    `).join(""),t.querySelectorAll(".layer-item-card").forEach(i=>{i.addEventListener("click",s=>{const a=parseFloat(s.currentTarget.getAttribute("data-layer-ratio")||"0.5");this.watchEngine.setExplodedRatio(a,!0);const o=document.getElementById("input-explode-range");o&&(o.value=String(a));const l=document.getElementById("explode-pct-display");l&&(l.textContent=`${Math.round(a*100)}%`)})})}renderTechnicalSpecs(){const e=this.t(),t=document.getElementById("specs-list-container");if(!t)return;const n=[{icon:"📐",title:e.specDiameter},{icon:"💎",title:e.specThickness},{icon:"⚡",title:e.specFrequency},{icon:"⚖️",title:e.specBalance},{icon:"🌀",title:e.specHairspring},{icon:"🪐",title:e.specTourbillon},{icon:"🧩",title:e.specComponents},{icon:"🔴",title:e.specJewels},{icon:"🌊",title:e.specWaterResistance},{icon:"✨",title:`${e.specFinishing} ${e.specFinishingDesc}`}];t.innerHTML=n.map(i=>`
      <div class="glass-panel" style="padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.75rem; background: rgba(15, 23, 42, 0.45);">
        <span style="font-size: 1.25rem;">${i.icon}</span>
        <span style="font-size: 0.85rem; color: var(--text-main);">${i.title}</span>
      </div>
    `).join("")}}window.addEventListener("DOMContentLoaded",()=>{new GM});
