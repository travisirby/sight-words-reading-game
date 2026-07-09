var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,ee=1027,O=1028,te=1029,ne=1030,re=1031,k=1033,ie=33776,ae=33777,A=33778,oe=33779,se=35840,ce=35841,le=35842,ue=35843,de=36196,fe=37492,pe=37496,me=37488,he=37489,ge=37490,_e=37491,ve=37808,ye=37809,be=37810,xe=37811,Se=37812,Ce=37813,we=37814,Te=37815,Ee=37816,De=37817,Oe=37818,ke=37819,Ae=37820,je=37821,Me=36492,Ne=36494,Pe=36495,Fe=36283,Ie=36284,Le=36285,j=36286,Re=2300,ze=2301,Be=2302,M=2303,Ve=2400,N=2401,He=2402,Ue=3200,We=`srgb`,Ge=`srgb-linear`,Ke=`linear`,qe=`srgb`,Je=7680,Ye=35044,Xe=35048,Ze=2e3;function Qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function $e(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function et(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function tt(){let e=et(`canvas`);return e.style.display=`block`,e}var nt={};function rt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function it(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function P(...e){e=it(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function F(...e){e=it(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function at(...e){let t=e.join(` `);t in nt||(nt[t]=!0,P(...e))}function ot(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var st={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ct=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},lt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ut=1234567,dt=Math.PI/180,ft=180/Math.PI;function pt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(lt[e&255]+lt[e>>8&255]+lt[e>>16&255]+lt[e>>24&255]+`-`+lt[t&255]+lt[t>>8&255]+`-`+lt[t>>16&15|64]+lt[t>>24&255]+`-`+lt[n&63|128]+lt[n>>8&255]+`-`+lt[n>>16&255]+lt[n>>24&255]+lt[r&255]+lt[r>>8&255]+lt[r>>16&255]+lt[r>>24&255]).toLowerCase()}function mt(e,t,n){return Math.max(t,Math.min(n,e))}function ht(e,t){return(e%t+t)%t}function gt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function _t(e,t,n){return e===t?0:(n-e)/(t-e)}function vt(e,t,n){return(1-n)*e+n*t}function yt(e,t,n,r){return vt(e,t,1-Math.exp(-n*r))}function bt(e,t=1){return t-Math.abs(ht(e,t*2)-t)}function xt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function St(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ct(e,t){return e+Math.floor(Math.random()*(t-e+1))}function wt(e,t){return e+Math.random()*(t-e)}function Tt(e){return e*(.5-Math.random())}function Et(e){e!==void 0&&(ut=e);let t=ut+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dt(e){return e*dt}function Ot(e){return e*ft}function kt(e){return(e&e-1)==0&&e!==0}function At(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function jt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Mt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:P(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Ft={DEG2RAD:dt,RAD2DEG:ft,generateUUID:pt,clamp:mt,euclideanModulo:ht,mapLinear:gt,inverseLerp:_t,lerp:vt,damp:yt,pingpong:bt,smoothstep:xt,smootherstep:St,randInt:Ct,randFloat:wt,randFloatSpread:Tt,seededRandom:Et,degToRad:Dt,radToDeg:Ot,isPowerOfTwo:kt,ceilPowerOfTwo:At,floorPowerOfTwo:jt,setQuaternionFromProperEuler:Mt,normalize:Pt,denormalize:Nt},I=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},It=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:P(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lt.copy(this).projectOnVector(e),this.sub(Lt)}reflect(e){return this.sub(Lt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lt=new L,Rt=new It,R=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return at(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(zt.makeScale(e,t)),this}rotate(e){return at(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(zt.makeRotation(-e)),this}translate(e,t){return at(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(zt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zt=new R,Bt=new R().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vt=new R().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ht(){let e={enabled:!0,workingColorSpace:Ge,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Wt(e.r),e.g=Wt(e.g),e.b=Wt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Gt(e.r),e.g=Gt(e.g),e.b=Gt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ke:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return at(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return at(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ge]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:Bt,fromXYZ:Vt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:r,transfer:qe,toXYZ:Bt,fromXYZ:Vt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),e}var Ut=Ht();function Wt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Gt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Kt,qt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kt===void 0&&(Kt=et(`canvas`)),Kt.width=e.width,Kt.height=e.height;let t=Kt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Kt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=et(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Wt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Wt(t[e]/255)*255):t[e]=Wt(t[e]);return{data:t,width:e.width,height:e.height}}else return P(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Jt=0,Yt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=pt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Xt(r[t].image)):e.push(Xt(r[t]))}else e=Xt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Xt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?qt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(P(`Texture: Unable to serialize Texture.`),{})}var Zt=0,Qt=new L,$t=class e extends ct{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=pt(),this.name=``,this.source=new Yt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new I(0,0),this.repeat=new I(1,1),this.center=new I(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qt).x}get height(){return this.source.getSize(Qt).y}get depth(){return this.source.getSize(Qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){P(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){P(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=300,$t.DEFAULT_ANISOTROPY=1;var en=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tn=class extends ct{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];let r=new $t({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Yt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},nn=class extends tn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rn=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},an=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},on=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/sn.setFromMatrixColumn(e,0).length(),i=1/sn.setFromMatrixColumn(e,1).length(),a=1/sn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ln,e,un)}lookAt(e,t,n){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),dn.crossVectors(n,pn),dn.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),dn.crossVectors(n,pn)),dn.normalize(),fn.crossVectors(pn,dn),r[0]=dn.x,r[4]=fn.x,r[8]=pn.x,r[1]=dn.y,r[5]=fn.y,r[9]=pn.y,r[2]=dn.z,r[6]=fn.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],te=r[6],ne=r[10],re=r[14],k=r[3],ie=r[7],ae=r[11],A=r[15];return i[0]=a*x+o*T+s*O+c*k,i[4]=a*S+o*E+s*te+c*ie,i[8]=a*C+o*D+s*ne+c*ae,i[12]=a*w+o*ee+s*re+c*A,i[1]=l*x+u*T+d*O+f*k,i[5]=l*S+u*E+d*te+f*ie,i[9]=l*C+u*D+d*ne+f*ae,i[13]=l*w+u*ee+d*re+f*A,i[2]=p*x+m*T+h*O+g*k,i[6]=p*S+m*E+h*te+g*ie,i[10]=p*C+m*D+h*ne+g*ae,i[14]=p*w+m*ee+h*re+g*A,i[3]=_*x+v*T+y*O+b*k,i[7]=_*S+v*E+y*te+b*ie,i[11]=_*C+v*D+y*ne+b*ae,i[15]=_*w+v*ee+y*re+b*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let te=1/O;return e[0]=(o*ee-s*D+c*E)*te,e[1]=(r*D-n*ee-i*E)*te,e[2]=(m*S-h*x+g*b)*te,e[3]=(d*x-u*S-f*b)*te,e[4]=(s*T-a*ee-c*w)*te,e[5]=(t*ee-r*T+i*w)*te,e[6]=(h*y-p*S-g*v)*te,e[7]=(l*S-d*y+f*v)*te,e[8]=(a*D-o*T+c*C)*te,e[9]=(n*T-t*D-i*C)*te,e[10]=(p*x-m*y+g*_)*te,e[11]=(u*y-l*x-f*_)*te,e[12]=(o*w-a*E-s*C)*te,e[13]=(t*E-n*w+r*C)*te,e[14]=(m*v-p*b-h*_)*te,e[15]=(l*b-u*v+d*_)*te,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=sn.set(r[0],r[1],r[2]).length(),o=sn.set(r[4],r[5],r[6]).length(),s=sn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),cn.copy(this);let c=1/a,l=1/o,u=1/s;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=l,cn.elements[5]*=l,cn.elements[6]*=l,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ze,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ze,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sn=new L,cn=new on,ln=new L(0,0,0),un=new L(1,1,1),dn=new L,fn=new L,pn=new L,mn=new on,hn=new It,gn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-mt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:P(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hn.setFromEuler(this),this.setFromQuaternion(hn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER=`XYZ`;var _n=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},vn=0,yn=new L,bn=new It,xn=new on,Sn=new L,Cn=new L,wn=new L,Tn=new It,En=new L(1,0,0),Dn=new L(0,1,0),On=new L(0,0,1),kn={type:`added`},An={type:`removed`},jn={type:`childadded`,child:null},Mn={type:`childremoved`,child:null},Nn=class e extends ct{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vn++}),this.uuid=pt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new gn,r=new It,i=new L(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new on},normalMatrix:{value:new R}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _n,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(En,e)}rotateY(e){return this.rotateOnAxis(Dn,e)}rotateZ(e){return this.rotateOnAxis(On,e)}translateOnAxis(e,t){return yn.copy(e).applyQuaternion(this.quaternion),this.position.add(yn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(En,e)}translateY(e){return this.translateOnAxis(Dn,e)}translateZ(e){return this.translateOnAxis(On,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sn.copy(e):Sn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Cn,Sn,this.up):xn.lookAt(Sn,Cn,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),bn.setFromRotationMatrix(xn),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(F(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null):F(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,e,wn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,Tn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Nn.DEFAULT_UP=new L(0,1,0),Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var z=class extends Nn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Pn={type:`move`},Fn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new z,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new z,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new z,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new z;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},In={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Rn={h:0,s:0,l:0};function zn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var B=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ut.workingColorSpace){if(e=ht(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=zn(i,r,e+1/3),this.g=zn(i,r,e),this.b=zn(i,r,e-1/3)}return Ut.colorSpaceToWorking(this,r),this}setStyle(e,t=We){function n(t){t!==void 0&&parseFloat(t)<1&&P(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:P(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);P(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=We){let n=In[e.toLowerCase()];return n===void 0?P(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wt(e.r),this.g=Wt(e.g),this.b=Wt(e.b),this}copyLinearToSRGB(e){return this.r=Gt(e.r),this.g=Gt(e.g),this.b=Gt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return Ut.workingToColorSpace(Bn.copy(this),e),Math.round(mt(Bn.r*255,0,255))*65536+Math.round(mt(Bn.g*255,0,255))*256+Math.round(mt(Bn.b*255,0,255))}getHexString(e=We){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,r=Bn.g,i=Bn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=We){Ut.workingToColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,r=Bn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Rn);let n=vt(Ln.h,Rn.h,t),r=vt(Ln.s,Rn.s,t),i=vt(Ln.l,Rn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new B;B.NAMES=In;var Vn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new B(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hn=class extends Nn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new L,Wn=new L,Gn=new L,Kn=new L,qn=new L,Jn=new L,Yn=new L,Xn=new L,Zn=new L,Qn=new L,$n=new en,er=new en,tr=new en,nr=class e{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Un.subVectors(e,t),r.cross(Un);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Un.subVectors(r,t),Wn.subVectors(n,t),Gn.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(Wn),s=Un.dot(Gn),c=Wn.dot(Wn),l=Wn.dot(Gn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Kn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Kn.x),s.addScaledVector(a,Kn.y),s.addScaledVector(o,Kn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return $n.setScalar(0),er.setScalar(0),tr.setScalar(0),$n.fromBufferAttribute(e,t),er.fromBufferAttribute(e,n),tr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($n,i.x),a.addScaledVector(er,i.y),a.addScaledVector(tr,i.z),a}static isFrontFacing(e,t,n,r){return Un.subVectors(n,t),Wn.subVectors(e,t),Un.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Un.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;qn.subVectors(r,n),Jn.subVectors(i,n),Xn.subVectors(e,n);let s=qn.dot(Xn),c=Jn.dot(Xn);if(s<=0&&c<=0)return t.copy(n);Zn.subVectors(e,r);let l=qn.dot(Zn),u=Jn.dot(Zn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(qn,a);Qn.subVectors(e,i);let f=qn.dot(Qn),p=Jn.dot(Qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Jn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Yn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Yn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(qn,a).addScaledVector(Jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ar):ar.fromBufferAttribute(r,t),ar.applyMatrix4(e.matrixWorld),this.expandByPoint(ar);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),mr.subVectors(this.max,pr),sr.subVectors(e.a,pr),cr.subVectors(e.b,pr),lr.subVectors(e.c,pr),ur.subVectors(cr,sr),dr.subVectors(lr,cr),fr.subVectors(sr,lr);let t=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-fr.z,fr.y,ur.z,0,-ur.x,dr.z,0,-dr.x,fr.z,0,-fr.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-fr.y,fr.x,0];return!_r(t,sr,cr,lr,mr)||(t=[1,0,0,0,1,0,0,0,1],!_r(t,sr,cr,lr,mr))?!1:(hr.crossVectors(ur,dr),t=[hr.x,hr.y,hr.z],_r(t,sr,cr,lr,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ir=[new L,new L,new L,new L,new L,new L,new L,new L],ar=new L,or=new rr,sr=new L,cr=new L,lr=new L,ur=new L,dr=new L,fr=new L,pr=new L,mr=new L,hr=new L,gr=new L;function _r(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){gr.fromArray(e,a);let o=i.x*Math.abs(gr.x)+i.y*Math.abs(gr.y)+i.z*Math.abs(gr.z),s=t.dot(gr),c=n.dot(gr),l=r.dot(gr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var vr=new L,yr=new I,br=0,xr=class extends ct{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:br++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ye,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix4(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyNormalMatrix(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.transformDirection(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},Sr=class extends xr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Cr=class extends xr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},wr=class extends xr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tr=new rr,Er=new L,Dr=new L,Or=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Tr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Er,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Dr)),this.expandByPoint(Er.copy(e.center).sub(Dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kr=0,Ar=new on,jr=new Nn,Mr=new L,Nr=new rr,Pr=new rr,Fr=new L,Ir=class e extends ct{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kr++}),this.uuid=pt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qe(e)?Cr:Sr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new R().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ar.makeRotationFromQuaternion(e),this.applyMatrix4(Ar),this}rotateX(e){return Ar.makeRotationX(e),this.applyMatrix4(Ar),this}rotateY(e){return Ar.makeRotationY(e),this.applyMatrix4(Ar),this}rotateZ(e){return Ar.makeRotationZ(e),this.applyMatrix4(Ar),this}translate(e,t,n){return Ar.makeTranslation(e,t,n),this.applyMatrix4(Ar),this}scale(e,t,n){return Ar.makeScale(e,t,n),this.applyMatrix4(Ar),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new wr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&P(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){F(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Nr.setFromBufferAttribute(n),this.morphTargetsRelative?(Fr.addVectors(this.boundingBox.min,Nr.min),this.boundingBox.expandByPoint(Fr),Fr.addVectors(this.boundingBox.max,Nr.max),this.boundingBox.expandByPoint(Fr)):(this.boundingBox.expandByPoint(Nr.min),this.boundingBox.expandByPoint(Nr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&F(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){F(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Nr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Pr.setFromBufferAttribute(n),this.morphTargetsRelative?(Fr.addVectors(Nr.min,Pr.min),Nr.expandByPoint(Fr),Fr.addVectors(Nr.max,Pr.max),Nr.expandByPoint(Fr)):(Nr.expandByPoint(Pr.min),Nr.expandByPoint(Pr.max))}Nr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Fr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Fr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Fr.fromBufferAttribute(a,t),o&&(Mr.fromBufferAttribute(e,t),Fr.add(Mr)),r=Math.max(r,n.distanceToSquared(Fr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&F(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){F(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new xr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new L,s[e]=new L;let c=new L,l=new L,u=new L,d=new I,f=new I,p=new I,m=new L,h=new L;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new L,y=new L,b=new L,x=new L;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new xr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new L,i=new L,a=new L,o=new L,s=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fr.fromBufferAttribute(e,t),Fr.normalize(),e.setXYZ(t,Fr.x,Fr.y,Fr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new xr(a,r,i)}if(this.index===null)return P(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ye,this.updateRanges=[],this.version=0,this.uuid=pt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rr=new L,zr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix4(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyNormalMatrix(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.transformDirection(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){rt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new xr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){rt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Br=0,Vr=class extends ct{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Br++}),this.uuid=pt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Je,this.stencilZFail=Je,this.stencilZPass=Je,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){P(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){P(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new B().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new I().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new I().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Hr=class extends Vr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new B(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ur,Wr=new L,Gr=new L,Kr=new L,qr=new I,Jr=new I,Yr=new on,Xr=new L,Zr=new L,Qr=new L,$r=new I,ei=new I,ti=new I,ni=class extends Nn{constructor(e=new Hr){if(super(),this.isSprite=!0,this.type=`Sprite`,Ur===void 0){Ur=new Ir;let e=new Lr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute(`position`,new zr(e,3,0,!1)),Ur.setAttribute(`uv`,new zr(e,2,3,!1))}this.geometry=Ur,this.material=e,this.center=new I(.5,.5),this.count=1}raycast(e,t){e.camera===null&&F(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Gr.setFromMatrixScale(this.matrixWorld),Yr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gr.multiplyScalar(-Kr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ri(Xr.set(-.5,-.5,0),Kr,a,Gr,r,i),ri(Zr.set(.5,-.5,0),Kr,a,Gr,r,i),ri(Qr.set(.5,.5,0),Kr,a,Gr,r,i),$r.set(0,0),ei.set(1,0),ti.set(1,1);let o=e.ray.intersectTriangle(Xr,Zr,Qr,!1,Wr);if(o===null&&(ri(Zr.set(-.5,.5,0),Kr,a,Gr,r,i),ei.set(0,1),o=e.ray.intersectTriangle(Xr,Qr,Zr,!1,Wr),o===null))return;let s=e.ray.origin.distanceTo(Wr);s<e.near||s>e.far||t.push({distance:s,point:Wr.clone(),uv:nr.getInterpolation(Wr,Xr,Zr,Qr,$r,ei,ti,new I),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ri(e,t,n,r,i,a){qr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Jr.copy(qr):(Jr.x=a*qr.x-i*qr.y,Jr.y=i*qr.x+a*qr.y),e.copy(t),e.x+=Jr.x,e.y+=Jr.y,e.applyMatrix4(Yr)}var ii=new L,ai=new L,oi=new L,si=new L,ci=new L,li=new L,ui=new L,di=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ai.copy(e).add(t).multiplyScalar(.5),oi.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ai);let i=e.distanceTo(t)*.5,a=-this.direction.dot(oi),o=si.dot(this.direction),s=-si.dot(oi),c=si.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ai).addScaledVector(oi,d),f}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),r=ii.dot(ii)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,r,i){ci.subVectors(t,e),li.subVectors(n,e),ui.crossVectors(ci,li);let a=this.direction.dot(ui),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);let s=o*this.direction.dot(li.crossVectors(si,li));if(s<0)return null;let c=o*this.direction.dot(ci.cross(si));if(c<0||s+c>a)return null;let l=-o*si.dot(ui);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pi=new on,mi=new di,hi=new Or,gi=new L,_i=new L,vi=new L,yi=new L,bi=new L,xi=new L,Si=new L,Ci=new L,V=class extends Nn{constructor(e=new Ir,t=new fi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){xi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(bi.fromBufferAttribute(s,e),a?xi.addScaledVector(bi,r):xi.addScaledVector(bi.sub(t),r))}t.add(xi)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hi.copy(n.boundingSphere),hi.applyMatrix4(i),mi.copy(e.ray).recast(e.near),!(hi.containsPoint(mi.origin)===!1&&(mi.intersectSphere(hi,gi)===null||mi.origin.distanceToSquared(gi)>(e.far-e.near)**2))&&(pi.copy(i).invert(),mi.copy(e.ray).applyMatrix4(pi),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ti(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ti(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ti(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ti(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function wi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ci.copy(s),Ci.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ci);return l<n.near||l>n.far?null:{distance:l,point:Ci.clone(),object:e}}function Ti(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,_i),e.getVertexPosition(c,vi),e.getVertexPosition(l,yi);let u=wi(e,t,n,r,_i,vi,yi,Si);if(u){let e=new L;nr.getBarycoord(Si,_i,vi,yi,e),i&&(u.uv=nr.getInterpolatedAttribute(i,s,c,l,e,new I)),a&&(u.uv1=nr.getInterpolatedAttribute(a,s,c,l,e,new I)),o&&(u.normal=nr.getInterpolatedAttribute(o,s,c,l,e,new L),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new L,materialIndex:0};nr.getNormal(_i,vi,yi,t.normal),u.face=t,u.barycoord=e}return u}var Ei=class extends $t{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Di=class extends xr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Oi=new on,ki=new on,Ai=[],ji=new rr,Mi=new on,Ni=new V,Pi=new Or,Fi=class extends V{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Mi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),ji.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(ji)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),Pi.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(Pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ni.geometry=this.geometry,Ni.material=this.material,Ni.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pi.copy(this.boundingSphere),Pi.applyMatrix4(n),e.ray.intersectsSphere(Pi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Oi),ki.multiplyMatrices(n,Oi),Ni.matrixWorld=ki,Ni.raycast(e,Ai);for(let e=0,n=Ai.length;e<n;e++){let n=Ai[e];n.instanceId=i,n.object=this,t.push(n)}Ai.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ei(new Float32Array(r*this.count),r,this.count,O,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ii=new L,Li=new L,Ri=new R,zi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ii.subVectors(n,t).cross(Li.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ii),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ri.getNormalMatrix(e),r=this.coplanarPoint(Ii).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new Or,Vi=new I(.5,.5),Hi=new L,Ui=class{constructor(e=new zi,t=new zi,n=new zi,r=new zi,i=new zi,a=new zi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ze,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476+Vi.distanceTo(e.center),Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Hi.x=r.normal.x>0?e.max.x:e.min.x,Hi.y=r.normal.y>0?e.max.y:e.min.y,Hi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wi=class extends $t{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gi=class extends $t{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ki=class extends $t{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},qi=class extends Ki{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ji=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yi=class e extends Ir{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new wr(c,3)),this.setAttribute(`normal`,new wr(l,3)),this.setAttribute(`uv`,new wr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new L;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Xi=class e extends Ir{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new L,l=new I;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new wr(a,3)),this.setAttribute(`normal`,new wr(o,3)),this.setAttribute(`uv`,new wr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Zi=class e extends Ir{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new wr(u,3)),this.setAttribute(`normal`,new wr(d,3)),this.setAttribute(`uv`,new wr(f,2));function _(){let a=new L,_=new L,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new I,m=new L,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qi=class e extends Zi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$i=class e extends Ir{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new wr(p,3)),this.setAttribute(`normal`,new wr(m,3)),this.setAttribute(`uv`,new wr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ea=class e extends Ir{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new L,p=new I;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new wr(s,3)),this.setAttribute(`normal`,new wr(c,3)),this.setAttribute(`uv`,new wr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ta=class e extends Ir{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new L,d=new L,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new wr(p,3)),this.setAttribute(`normal`,new wr(m,3)),this.setAttribute(`uv`,new wr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function na(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ia(i))i.isRenderTargetTexture?(P(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(ia(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function ra(e){let t={};for(let n=0;n<e.length;n++){let r=na(e[n]);for(let e in r)t[e]=r[e]}return t}function ia(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function aa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function oa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}var sa={clone:na,merge:ra},ca=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,la=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ua=class extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ca,this.fragmentShader=la,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=aa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new B().setHex(r.value);break;case`v2`:this.uniforms[n].value=new I().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new en().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new on().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},da=class extends ua{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},H=class extends Vr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fa=class extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ue,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pa=class extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ma(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var ha=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ga=class extends ha{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ve,endingEnd:Ve}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case N:i=e,o=2*t-n;break;case He:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case N:a=e,s=2*n-t;break;case He:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},_a=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},va=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ya=class extends ha{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},ba=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ya(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Re:t=this.InterpolantFactoryMethodDiscrete;break;case ze:t=this.InterpolantFactoryMethodLinear;break;case Be:t=this.InterpolantFactoryMethodSmooth;break;case M:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return P(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Re;case this.InterpolantFactoryMethodLinear:return ze;case this.InterpolantFactoryMethodSmooth:return Be;case this.InterpolantFactoryMethodBezier:return M}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(F(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(F(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){F(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){F(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&$e(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){F(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Be,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ba.prototype.ValueTypeName=``,ba.prototype.TimeBufferType=Float32Array,ba.prototype.ValueBufferType=Float32Array,ba.prototype.DefaultInterpolation=ze;var xa=class extends ba{constructor(e,t,n){super(e,t,n)}};xa.prototype.ValueTypeName=`bool`,xa.prototype.ValueBufferType=Array,xa.prototype.DefaultInterpolation=Re,xa.prototype.InterpolantFactoryMethodLinear=void 0,xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends ba{constructor(e,t,n,r){super(e,t,n,r)}};Sa.prototype.ValueTypeName=`color`;var Ca=class extends ba{constructor(e,t,n,r){super(e,t,n,r)}};Ca.prototype.ValueTypeName=`number`;var wa=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)It.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ta=class extends ba{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}};Ta.prototype.ValueTypeName=`quaternion`,Ta.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends ba{constructor(e,t,n){super(e,t,n)}};Ea.prototype.ValueTypeName=`string`,Ea.prototype.ValueBufferType=Array,Ea.prototype.DefaultInterpolation=Re,Ea.prototype.InterpolantFactoryMethodLinear=void 0,Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends ba{constructor(e,t,n,r){super(e,t,n,r)}};Da.prototype.ValueTypeName=`vector`;var Oa=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ka=class{constructor(e){this.manager=e===void 0?Oa:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ka.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Aa=class extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new B(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ja=class extends Aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ma=new on,Na=new L,Pa=new L,Fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new I(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new I(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Na.setFromMatrixPosition(e.matrixWorld),t.position.copy(Na),Pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pa),t.updateMatrixWorld(),Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ia=new L,La=new It,Ra=new L,za=class extends Nn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,La,Ra),Ra.x===1&&Ra.y===1&&Ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Ra.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ia,La,Ra),Ra.x===1&&Ra.y===1&&Ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ba=new L,Va=new I,Ha=new I,Ua=class extends za{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ft*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ft*2*Math.atan(Math.tan(dt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,t){return this.getViewBounds(e,Va,Ha),t.subVectors(Ha,Va)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wa=class extends Fa{constructor(){super(new Ua(90,1,.5,500)),this.isPointLightShadow=!0}},Ga=class extends Aa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Wa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ka=class extends za{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qa=class extends Fa{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ja=class extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new qa}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ya=class extends Aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Xa=-90,Za=1,Qa=class extends Nn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ua(Xa,Za,e,t);r.layers=this.layers,this.add(r);let i=new Ua(Xa,Za,e,t);i.layers=this.layers,this.add(i);let a=new Ua(Xa,Za,e,t);a.layers=this.layers,this.add(a);let o=new Ua(Xa,Za,e,t);o.layers=this.layers,this.add(o);let s=new Ua(Xa,Za,e,t);s.layers=this.layers,this.add(s);let c=new Ua(Xa,Za,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},$a=class extends Ua{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},eo=`\\[\\]\\.:\\/`,to=RegExp(`[\\[\\]\\.:\\/]`,`g`),no=`[^\\[\\]\\.:\\/]`,ro=`[^`+eo.replace(`\\.`,``)+`]`,io=`((?:WC+[\\/:])*)`.replace(`WC`,no),ao=`(WCOD+)?`.replace(`WCOD`,ro),oo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,no),so=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,no),co=RegExp(`^`+io+ao+oo+so+`$`),lo=[`material`,`materials`,`bones`,`map`],uo=class{constructor(e,t,n){let r=n||fo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},fo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(to,``)}static parseTrackName(e){let t=co.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);lo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){P(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){F(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){F(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){F(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){F(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){F(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;F(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fo.Composite=uo,fo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},fo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},fo.prototype.GetterByBindingType=[fo.prototype._getValue_direct,fo.prototype._getValue_array,fo.prototype._getValue_arrayElement,fo.prototype._getValue_toArray],fo.prototype.SetterByBindingTypeAndVersioning=[[fo.prototype._setValue_direct,fo.prototype._setValue_direct_setNeedsUpdate,fo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fo.prototype._setValue_array,fo.prototype._setValue_array_setNeedsUpdate,fo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fo.prototype._setValue_arrayElement,fo.prototype._setValue_arrayElement_setNeedsUpdate,fo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fo.prototype._setValue_fromArray,fo.prototype._setValue_fromArray_setNeedsUpdate,fo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var po=new on,mo=class{constructor(e,t,n=0,r=1/0){this.ray=new di(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new _n,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):F(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return po.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(po),this}intersectObject(e,t=!0,n=[]){return go(e,this,n,t),n.sort(ho),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)go(e[r],this,n,t);return n.sort(ho),n}};function ho(e,t){return e.distance-t.distance}function go(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)go(r[e],t,n,!0)}}var _o=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,P(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function vo(e,t,n,r){let i=yo(r);switch(n){case w:return e*t;case O:return e*t/i.components*i.byteLength;case te:return e*t/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case k:return e*t*4/i.components*i.byteLength;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case A:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:case ue:return Math.max(e,16)*Math.max(t,8)/4;case se:case le:return Math.max(e,8)*Math.max(t,8)/2;case de:case fe:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pe:case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case be:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ae:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case je:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Me:case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Fe:case Ie:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Le:case j:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function yo(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?P(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function bo(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function xo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var So={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},U={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},envMapRotation:{value:new R},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new I(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new I(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},Co={basic:{uniforms:ra([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.fog]),vertexShader:So.meshbasic_vert,fragmentShader:So.meshbasic_frag},lambert:{uniforms:ra([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new B(0)},envMapIntensity:{value:1}}]),vertexShader:So.meshlambert_vert,fragmentShader:So.meshlambert_frag},phong:{uniforms:ra([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:So.meshphong_vert,fragmentShader:So.meshphong_frag},standard:{uniforms:ra([U.common,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.roughnessmap,U.metalnessmap,U.fog,U.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:So.meshphysical_vert,fragmentShader:So.meshphysical_frag},toon:{uniforms:ra([U.common,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.gradientmap,U.fog,U.lights,{emissive:{value:new B(0)}}]),vertexShader:So.meshtoon_vert,fragmentShader:So.meshtoon_frag},matcap:{uniforms:ra([U.common,U.bumpmap,U.normalmap,U.displacementmap,U.fog,{matcap:{value:null}}]),vertexShader:So.meshmatcap_vert,fragmentShader:So.meshmatcap_frag},points:{uniforms:ra([U.points,U.fog]),vertexShader:So.points_vert,fragmentShader:So.points_frag},dashed:{uniforms:ra([U.common,U.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:So.linedashed_vert,fragmentShader:So.linedashed_frag},depth:{uniforms:ra([U.common,U.displacementmap]),vertexShader:So.depth_vert,fragmentShader:So.depth_frag},normal:{uniforms:ra([U.common,U.bumpmap,U.normalmap,U.displacementmap,{opacity:{value:1}}]),vertexShader:So.meshnormal_vert,fragmentShader:So.meshnormal_frag},sprite:{uniforms:ra([U.sprite,U.fog]),vertexShader:So.sprite_vert,fragmentShader:So.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:So.background_vert,fragmentShader:So.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R}},vertexShader:So.backgroundCube_vert,fragmentShader:So.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:So.cube_vert,fragmentShader:So.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:So.equirect_vert,fragmentShader:So.equirect_frag},distance:{uniforms:ra([U.common,U.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:So.distance_vert,fragmentShader:So.distance_frag},shadow:{uniforms:ra([U.lights,U.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:So.shadow_vert,fragmentShader:So.shadow_frag}};Co.physical={uniforms:ra([Co.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new I(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new I},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new I},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:So.meshphysical_vert,fragmentShader:So.meshphysical_frag};var wo={r:0,b:0,g:0},To=new on,Eo=new R;Eo.set(-1,0,0,0,1,0,0,0,1);function Do(e,t,n,r,i,a){let o=new B(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new V(new Yi(1,1,1),new ua({name:`BackgroundCubeMaterial`,uniforms:na(Co.backgroundCube.uniforms),vertexShader:Co.backgroundCube.vertexShader,fragmentShader:Co.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(To.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Eo),l.material.toneMapped=Ut.getTransfer(i.colorSpace)!==qe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new V(new $i(2,2),new ua({name:`BackgroundMaterial`,uniforms:na(Co.background.uniforms),vertexShader:Co.background.vertexShader,fragmentShader:Co.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(i.colorSpace)!==qe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(wo,oa(e)),n.buffers.color.setClear(wo.r,wo.g,wo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Oo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ko(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ao(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function jo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new zi,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Mo=4,No=[.125,.215,.35,.446,.526,.582],Po=20,Fo=256,Io=new Ka,Lo=new B,Ro=null,zo=0,Bo=0,Vo=!1,Ho=new L,Uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ho}=i;Ro=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro,zo,Bo),this._renderer.xr.enabled=Vo,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:Ge,depthBuffer:!1},r=Go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Wo(r)),this._blurMaterial=Jo(r,e,t),this._ggxMaterial=qo(r,e,t)}return r}_compileMaterial(e){let t=new V(new Ir,e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,r,i){let a=new Ua(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Lo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new V(new Yi,new fi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Lo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ko(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ko(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Io)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Mo?n-d+Mo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ko(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Io),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ko(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Io)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&F(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Po-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Po;m>Po&&P(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Po}`);let h=[],g=0;for(let e=0;e<Po;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ko(t,3*v*(r>_-Mo?r-_+Mo:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Io)}};function Wo(e){let t=[],n=[],r=[],i=e,a=e-Mo+1+No.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Mo?s=No[o-e+Mo-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ir;h.setAttribute(`position`,new xr(f,3)),h.setAttribute(`uv`,new xr(p,2)),h.setAttribute(`faceIndex`,new xr(m,1)),r.push(new V(h,null)),i>Mo&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Go(e,t,n){let r=new nn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ko(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function qo(e,t,n){return new ua({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Fo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jo(e,t,n){let r=new Float32Array(Po),i=new L(0,1,0);return new ua({name:`SphericalGaussianBlur`,defines:{n:Po,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yo(){return new ua({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xo(){return new ua({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}var Qo=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Wi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yi(5,5,5),i=new ua({name:`CubemapFromEquirect`,uniforms:na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new V(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new Qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function $o(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Qo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Uo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Uo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function es(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&at(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ts(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Cr:Sr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ns(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function rs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:F(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function is(e,t,n){let r=new WeakMap,i=new en;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new rn(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new I(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function as(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var os={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ss(e,t,n,r,i,a){let o=new nn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new Ki(t,n):void 0}),s=new nn(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new Ir;c.setAttribute(`position`,new wr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new wr([0,2,0,0,2,0],2));let l=new da({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new V(c,l),d=new Ka(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,y=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},Ut.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=os[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var cs=new $t,ls=new Ki(1,1),us=new rn,ds=new an,fs=new Wi,ps=[],ms=[],hs=new Float32Array(16),gs=new Float32Array(9),_s=new Float32Array(4);function vs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ps[i];if(a===void 0&&(a=new Float32Array(i),ps[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ys(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function bs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function xs(e,t){let n=ms[t];n===void 0&&(n=new Int32Array(t),ms[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ss(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ys(n,t))return;e.uniform2fv(this.addr,t),bs(n,t)}}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ys(n,t))return;e.uniform3fv(this.addr,t),bs(n,t)}}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ys(n,t))return;e.uniform4fv(this.addr,t),bs(n,t)}}function Es(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ys(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),bs(n,t)}else{if(ys(n,r))return;_s.set(r),e.uniformMatrix2fv(this.addr,!1,_s),bs(n,r)}}function Ds(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ys(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),bs(n,t)}else{if(ys(n,r))return;gs.set(r),e.uniformMatrix3fv(this.addr,!1,gs),bs(n,r)}}function Os(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ys(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),bs(n,t)}else{if(ys(n,r))return;hs.set(r),e.uniformMatrix4fv(this.addr,!1,hs),bs(n,r)}}function ks(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ys(n,t))return;e.uniform2iv(this.addr,t),bs(n,t)}}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ys(n,t))return;e.uniform3iv(this.addr,t),bs(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ys(n,t))return;e.uniform4iv(this.addr,t),bs(n,t)}}function Ns(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ys(n,t))return;e.uniform2uiv(this.addr,t),bs(n,t)}}function Fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ys(n,t))return;e.uniform3uiv(this.addr,t),bs(n,t)}}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ys(n,t))return;e.uniform4uiv(this.addr,t),bs(n,t)}}function Ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ls.compareFunction=n.isReversedDepthBuffer()?518:515,a=ls):a=cs,n.setTexture2D(t||a,i)}function Rs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ds,i)}function zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||fs,i)}function Bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||us,i)}function Vs(e){switch(e){case 5126:return Ss;case 35664:return Cs;case 35665:return ws;case 35666:return Ts;case 35674:return Es;case 35675:return Ds;case 35676:return Os;case 5124:case 35670:return ks;case 35667:case 35671:return As;case 35668:case 35672:return js;case 35669:case 35673:return Ms;case 5125:return Ns;case 36294:return Ps;case 36295:return Fs;case 36296:return Is;case 35678:case 36198:case 36298:case 36306:case 35682:return Ls;case 35679:case 36299:case 36307:return Rs;case 35680:case 36300:case 36308:case 36293:return zs;case 36289:case 36303:case 36311:case 36292:return Bs}}function Hs(e,t){e.uniform1fv(this.addr,t)}function Us(e,t){let n=vs(t,this.size,2);e.uniform2fv(this.addr,n)}function Ws(e,t){let n=vs(t,this.size,3);e.uniform3fv(this.addr,n)}function Gs(e,t){let n=vs(t,this.size,4);e.uniform4fv(this.addr,n)}function Ks(e,t){let n=vs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function qs(e,t){let n=vs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Js(e,t){let n=vs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ys(e,t){e.uniform1iv(this.addr,t)}function Xs(e,t){e.uniform2iv(this.addr,t)}function Zs(e,t){e.uniform3iv(this.addr,t)}function Qs(e,t){e.uniform4iv(this.addr,t)}function $s(e,t){e.uniform1uiv(this.addr,t)}function ec(e,t){e.uniform2uiv(this.addr,t)}function tc(e,t){e.uniform3uiv(this.addr,t)}function nc(e,t){e.uniform4uiv(this.addr,t)}function rc(e,t,n){let r=this.cache,i=t.length,a=xs(n,i);ys(r,a)||(e.uniform1iv(this.addr,a),bs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ls:cs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ic(e,t,n){let r=this.cache,i=t.length,a=xs(n,i);ys(r,a)||(e.uniform1iv(this.addr,a),bs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ds,a[e])}function ac(e,t,n){let r=this.cache,i=t.length,a=xs(n,i);ys(r,a)||(e.uniform1iv(this.addr,a),bs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||fs,a[e])}function oc(e,t,n){let r=this.cache,i=t.length,a=xs(n,i);ys(r,a)||(e.uniform1iv(this.addr,a),bs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||us,a[e])}function sc(e){switch(e){case 5126:return Hs;case 35664:return Us;case 35665:return Ws;case 35666:return Gs;case 35674:return Ks;case 35675:return qs;case 35676:return Js;case 5124:case 35670:return Ys;case 35667:case 35671:return Xs;case 35668:case 35672:return Zs;case 35669:case 35673:return Qs;case 5125:return $s;case 36294:return ec;case 36295:return tc;case 36296:return nc;case 35678:case 36198:case 36298:case 36306:case 35682:return rc;case 35679:case 36299:case 36307:return ic;case 35680:case 36300:case 36308:case 36293:return ac;case 36289:case 36303:case 36311:case 36292:return oc}}var cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vs(t.type)}},lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sc(t.type)}},uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},dc=/(\w+)(\])?(\[|\.)?/g;function fc(e,t){e.seq.push(t),e.map[t.id]=t}function pc(e,t,n){let r=e.name,i=r.length;for(dc.lastIndex=0;;){let a=dc.exec(r),o=dc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){fc(n,l===void 0?new cc(s,e,t):new lc(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new uc(s),fc(n,e)),n=e}}}var mc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);pc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function hc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var gc=37297,_c=0;function vc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var yc=new R;function bc(e){Ut._getMatrix(yc,Ut.workingColorSpace,e);let t=`mat3( ${yc.elements.map(e=>e.toFixed(4))} )`;switch(Ut.getTransfer(e)){case Ke:return[t,`LinearTransferOETF`];case qe:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function xc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+vc(e.getShaderSource(t),r)}else return i}function Sc(e,t){let n=bc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Cc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function wc(e,t){let n=Cc[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Tc=new L;function Ec(){return Ut.getLuminanceCoefficients(Tc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Tc.x.toFixed(4)}, ${Tc.y.toFixed(4)}, ${Tc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Dc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ac).join(`
`)}function Oc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function kc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ac(e){return e!==``}function jc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Nc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(e){return e.replace(Nc,Ic)}var Fc=new Map;function Ic(e,t){let n=So[t];if(n===void 0){let e=Fc.get(t);if(e!==void 0)n=So[e],P(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Pc(n)}var Lc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(e){return e.replace(Lc,zc)}function zc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Bc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Vc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Hc(e){return Vc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Uc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Wc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Uc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Gc={302:`ENVMAP_MODE_REFRACTION`};function Kc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Gc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var qc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Jc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:qc[e.combine]||`ENVMAP_BLENDING_NONE`}function Yc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Xc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Hc(n),l=Wc(n),u=Kc(n),d=Jc(n),f=Yc(n),p=Dc(n),m=Oc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ac).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ac).join(`
`),_.length>0&&(_+=`
`)):(g=[Bc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ac).join(`
`),_=[Bc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:So.tonemapping_pars_fragment,n.toneMapping===0?``:wc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,So.colorspace_pars_fragment,Sc(`linearToOutputTexel`,n.outputColorSpace),Ec(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ac).join(`
`)),o=Pc(o),o=jc(o,n),o=Mc(o,n),s=Pc(s),s=jc(s,n),s=Mc(s,n),o=Rc(o),s=Rc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=hc(i,i.VERTEX_SHADER,y),S=hc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=xc(i,x,`vertex`),n=xc(i,S,`fragment`);F(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new mc(i,h),T=kc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,gc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_c++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Zc=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $c(e),t.set(e,n)),n}},$c=class{constructor(e){this.id=Zc++,this.code=e,this.usedTimes=0}};function el(e){return e===1030||e===37490||e===36285}function tl(e,t,n,r,i,a){let o=new _n,s=new Qc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,te;if(C){let e=Co[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,te=t.id}let ne=e.getRenderTarget(),re=e.state.buffers.depth.getReversed(),k=h.isInstancedMesh===!0,ie=h.isBatchedMesh===!0,ae=!!i.map,A=!!i.matcap,oe=!!x,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,ue=!!i.normalMap,de=!!i.displacementMap,fe=!!i.emissiveMap,pe=!!i.metalnessMap,me=!!i.roughnessMap,he=i.anisotropy>0,ge=i.clearcoat>0,_e=i.dispersion>0,ve=i.iridescence>0,ye=i.sheen>0,be=i.transmission>0,xe=he&&!!i.anisotropyMap,Se=ge&&!!i.clearcoatMap,Ce=ge&&!!i.clearcoatNormalMap,we=ge&&!!i.clearcoatRoughnessMap,Te=ve&&!!i.iridescenceMap,Ee=ve&&!!i.iridescenceThicknessMap,De=ye&&!!i.sheenColorMap,Oe=ye&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=be&&!!i.transmissionMap,Ne=be&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,Ie=i.alphaTest>0,Le=!!i.alphaHash,j=!!i.extensions,Re=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Re=e.toneMapping);let ze={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:te,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ie,batchingColor:ie&&h._colorsTexture!==null,instancing:k,instancingColor:k&&h.instanceColor!==null,instancingMorph:k&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:A,envMap:oe,envMapMode:oe&&x.mapping,envMapCubeUVHeight:S,aoMap:se,lightMap:ce,bumpMap:le,normalMap:ue,displacementMap:de,emissiveMap:fe,normalMapObjectSpace:ue&&i.normalMapType===1,normalMapTangentSpace:ue&&i.normalMapType===0,packedNormalMap:ue&&i.normalMapType===0&&el(i.normalMap.format),metalnessMap:pe,roughnessMap:me,anisotropy:he,anisotropyMap:xe,clearcoat:ge,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,dispersion:_e,iridescence:ve,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ye,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:be,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ie,alphaHash:Le,combine:i.combine,mapUv:ae&&m(i.map.channel),aoMapUv:se&&m(i.aoMap.channel),lightMapUv:ce&&m(i.lightMap.channel),bumpMapUv:le&&m(i.bumpMap.channel),normalMapUv:ue&&m(i.normalMap.channel),displacementMapUv:de&&m(i.displacementMap.channel),emissiveMapUv:fe&&m(i.emissiveMap.channel),metalnessMapUv:pe&&m(i.metalnessMap.channel),roughnessMapUv:me&&m(i.roughnessMap.channel),anisotropyMapUv:xe&&m(i.anisotropyMap.channel),clearcoatMapUv:Se&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&m(i.sheenRoughnessMap.channel),specularMapUv:ke&&m(i.specularMap.channel),specularColorMapUv:Ae&&m(i.specularColorMap.channel),specularIntensityMapUv:je&&m(i.specularIntensityMap.channel),transmissionMapUv:Me&&m(i.transmissionMap.channel),thicknessMapUv:Ne&&m(i.thicknessMap.channel),alphaMapUv:Fe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ue||he),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ae||Fe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ue===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&Ut.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:fe&&i.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:j&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(j&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Co[t];n=sa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Xc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function nl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function rl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function il(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function al(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||rl),r.length>1&&r.sort(t||il),i.length>1&&i.sort(t||il),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ol(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new al,e.set(t,[i])):n>=r.length?(i=new al,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function sl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new L,color:new B};break;case`SpotLight`:n={position:new L,direction:new L,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=n,n}}}function cl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var ll=0;function ul(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function dl(e){let t=new sl,n=cl(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new on,o=new on;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(ul);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=U.LTC_FLOAT_1,r.rectAreaLTC2=U.LTC_FLOAT_2):(r.rectAreaLTC1=U.LTC_HALF_1,r.rectAreaLTC2=U.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=ll++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function fl(e){let t=new dl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function pl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new fl(e),t.set(n,[a])):r>=i.length?(a=new fl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ml=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hl=`uniform sampler2D shadow_pass;
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
}`,gl=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],_l=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],vl=new on,yl=new L,bl=new L;function xl(e,t,n){let r=new Ui,i=new I,o=new I,s=new en,l=new fa,u=new pa,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I},radius:{value:4}},vertexShader:ml,fragmentShader:hl}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new Ir;y.setAttribute(`position`,new xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new V(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){P(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new nn(i.x,i.y,{format:ne,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ki(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new Qo(i.x),p.map.depthTexture=new qi(i.x,g)):(p.map=new nn(i.x,i.y),p.map.depthTexture=new Ki(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),yl.setFromMatrixPosition(d.matrixWorld),e.position.copy(yl),bl.copy(e.position),bl.add(gl[t]),e.up.copy(_l[t]),e.lookAt(bl),e.updateMatrixWorld(),n.makeTranslation(-yl.x,-yl.y,-yl.z),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(vl,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new nn(i.x,i.y,{format:ne,type:v})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Sl(e,t){function n(){let t=!1,n=new en,r=null,i=new en(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?pe(e.DEPTH_TEST):me(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=st[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?pe(e.STENCIL_TEST):me(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,ee=null,O=null,te=null,ne=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),k=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),k=ie>=1);let A=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new en().fromArray(se),ue=new en().fromArray(ce);function de(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let fe={};fe[e.TEXTURE_2D]=de(e.TEXTURE_2D,e.TEXTURE_2D,1),fe[e.TEXTURE_CUBE_MAP]=de(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[e.TEXTURE_2D_ARRAY]=de(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),fe[e.TEXTURE_3D]=de(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),pe(e.DEPTH_TEST),o.setFunc(3),Se(!1),Ce(1),pe(e.CULL_FACE),be(0);function pe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function me(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function he(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ge(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function _e(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let ve={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ve[103]=e.MIN,ve[104]=e.MAX;let ye={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function be(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(me(e.BLEND),g=!1);return}if(g===!1&&(pe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:F(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:F(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:F(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:F(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ve[n],ve[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ye[r],ye[i],ye[o],ye[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function xe(t,n){t.side===2?me(e.CULL_FACE):pe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Se(r),t.blending===1&&t.transparent===!1?be(0):be(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Te(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Ce(t){t===0?me(e.CULL_FACE):(pe(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function we(t){t!==O&&(k&&e.lineWidth(t),O=t)}function Te(t,n,r){t?(pe(e.POLYGON_OFFSET_FILL),(te!==n||ne!==r)&&(te=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):me(e.POLYGON_OFFSET_FILL)}function Ee(t){t?pe(e.SCISSOR_TEST):me(e.SCISSOR_TEST)}function De(t){t===void 0&&(t=e.TEXTURE0+re-1),A!==t&&(e.activeTexture(t),A=t)}function Oe(t,n,r){r===void 0&&(r=A===null?e.TEXTURE0+re-1:A);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(A!==r&&(e.activeTexture(r),A=r),e.bindTexture(t,n||fe[t]),i.type=t,i.texture=n)}function ke(){let t=oe[A];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ae(){try{e.compressedTexImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function je(){try{e.compressedTexImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Me(){try{e.texSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ne(){try{e.texSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Fe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ie(){try{e.texStorage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Le(){try{e.texStorage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function j(){try{e.texImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Re(){try{e.texImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function ze(t){return d[t]===void 0?e.getParameter(t):d[t]}function Be(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function M(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Ve(t){ue.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))}function N(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function He(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},A=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,ee=null,O=null,te=null,ne=null,le.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:pe,disable:me,bindFramebuffer:he,drawBuffers:ge,useProgram:_e,setBlending:be,setMaterial:xe,setFlipSided:Se,setCullFace:Ce,setLineWidth:we,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:De,bindTexture:Oe,unbindTexture:ke,compressedTexImage2D:Ae,compressedTexImage3D:je,texImage2D:j,texImage3D:Re,pixelStorei:Be,getParameter:ze,updateUBOMapping:N,uniformBlockBinding:He,texStorage2D:Ie,texStorage3D:Le,texSubImage2D:Me,texSubImage3D:Ne,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Fe,scissor:M,viewport:Ve,reset:Ue}}function Cl(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new I,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):et(`canvas`)}function T(e,t,n){let r=1,i=ze(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function te(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ke:Ut.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ne(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function re(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function k(e){let t=e.target;t.removeEventListener(`dispose`,k),ae(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function ie(e){let t=e.target;t.removeEventListener(`dispose`,ie),oe(t)}function ae(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&A(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function A(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function oe(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let se=0;function ce(){se=0}function le(){return se}function ue(e){se=e}function de(){let e=se;return e>=p.maxTextures&&P(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),se+=1,e}function fe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function pe(t,n){let r=f.get(t);if(t.isVideoTexture&&j(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{we(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){we(r,t,n);return}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function he(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){we(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function ge(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){Te(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let _e={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ve={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},ye={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function be(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,_e[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,_e[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,_e[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ve[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ve[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ye[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function xe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,k));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=fe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&A(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function Se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ce(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=Se(r.start,n.width,4),c=Se(t.start,n.width,4);r.start<=i+1&&s===c&&Se(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function we(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=xe(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Ut.getPrimaries(Ut.workingColorSpace),r=n.colorSpace===``?null:Ut.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Re(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=te(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);be(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=re(n,t);if(n.isDepthTexture)u=ne(n.format===ee,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&Ce(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023)if(c!==null)if(g){if(v)if(n.layerUpdates.size>0){let t=vo(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0);else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data)}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}else if(n.isDataArrayTexture)if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v)if(n.layerUpdates.size>0){let r=vo(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_)if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=ze(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=ze(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&D(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Te(t,n,r){if(n.image.length!==6)return;let i=xe(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Ut.getPrimaries(Ut.workingColorSpace),s=n.colorSpace===``?null:Ut.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Re(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=te(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=re(n,h);be(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=ze(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&D(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ee(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=te(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Le(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Ie(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ne(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Le(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=te(a.internalFormat,o,s,a.normalized,a.colorSpace);Le(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Oe(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,k)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),be(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else pe(n.depthTexture,0);let o=a.__webglTexture,s=Ie(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Le(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Le(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ke(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer)if(r)for(let e=0;e<6;e++)Oe(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Oe(n.__webglFramebuffer[0],t,0):Oe(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),De(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),De(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,r){let i=f.get(t);n!==void 0&&Ee(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&ke(t)}function je(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,ie);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Le(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=te(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Ie(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),De(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),be(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Ee(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Ee(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&D(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),be(s,i),Ee(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&D(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),be(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Ee(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Ee(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&D(a),d.unbindTexture()}t.depthBuffer&&ke(t)}function Me(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),D(t),d.unbindTexture()}}}let Ne=[],Pe=[];function Fe(t){if(t.samples>0){if(Le(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Ne.length=0,Pe.length=0,Ne.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Ne.push(o),Pe.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Pe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ne))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ie(e){return Math.min(p.maxSamples,e.samples)}function Le(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function j(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Re(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ut.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):F(`WebGLTextures: Unsupported texture color space:`,n)),t}function ze(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=de,this.resetTextureUnits=ce,this.getTextureUnits=le,this.setTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=me,this.setTexture3D=he,this.setTextureCube=ge,this.rebindTextures=Ae,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function wl(e,t){function n(n,r=``){let i,a=Ut.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Tl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,El=`
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

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ji(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ua({vertexShader:Tl,fragmentShader:El,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ol=class extends ct{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new Dl,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new I,O=null,te=new Ua;te.viewport=new en;let ne=new Ua;ne.viewport=new en;let re=[te,ne],k=new $a,ie=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Fn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Fn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Fn,C[e]=t),t.getHandSpace()};function A(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ie=null,ae=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?ee:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new nn(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new Ki(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new nn(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new L,le=new L;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),k.near=ne.near=te.near=t,k.far=ne.far=te.far=n,(ie!==k.near||ae!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ie=k.near,ae=k.far),k.layers.mask=e.layers.mask|6,te.layers.mask=k.layers.mask&-5,ne.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;de(k,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(k,te,ne):k.projectionMatrix.copy(te.projectionMatrix),fe(e,k,i)};function fe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ft*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(e){return v[e]};let pe=null;function me(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new Ua,o.layers.enable(n),o.viewport=new en,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ji,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}pe&&pe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let he=new bo;he.setAnimationLoop(me),this.setAnimationLoop=function(e){pe=e},this.dispose=function(){}}},kl=new on,Al=new R;Al.set(-1,0,0,0,1,0,0,0,1);function jl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,oa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(kl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Al),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ml(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return F(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Nl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pl=null;function Fl(){return Pl===null&&(Pl=new Ei(Nl,16,16,ne,v),Pl.name=`DFG_LUT`,Pl.minFilter=c,Pl.magFilter=c,Pl.wrapS=r,Pl.wrapT=r,Pl.generateMipmaps=!1,Pl.needsUpdate=!0),Pl}var Il=class{constructor(e={}){let{canvas:t=tt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([k,re,te]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D=new L,ee=null,O=null,ne=[],ie=[],ae=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,oe=!1,se=null,ce=null,le=null,ue=null;this._outputColorSpace=We;let de=0,fe=0,pe=null,me=-1,he=null,ge=new en,_e=new en,ve=null,ye=new B(0),be=0,xe=t.width,Se=t.height,Ce=1,we=null,Te=null,Ee=new en(0,0,xe,Se),De=new en(0,0,xe,Se),Oe=!1,ke=new Ui,Ae=!1,je=!1,Me=new on,Ne=new L,Pe=new en,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Le(){return pe===null?Ce:1}let j=n;function Re(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,pt,!1),t.addEventListener(`webglcontextrestored`,mt,!1),t.addEventListener(`webglcontextcreationerror`,ht,!1),j===null){let t=`webgl2`;if(j=Re(t,e),j===null)throw Re(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw F(`WebGLRenderer: `+e.message),e}let ze,Be,M,Ve,N,He,Ue,Ge,Ke,qe,Je,Ye,Xe,Qe,$e,et,nt,it,at,st,ct,lt,ut;function dt(){ze=new es(j),ze.init(),ct=new wl(j,ze),Be=new Ao(j,ze,e,ct),M=new Sl(j,ze),Be.reversedDepthBuffer&&p&&M.buffers.depth.setReversed(!0),ce=j.createFramebuffer(),le=j.createFramebuffer(),ue=j.createFramebuffer(),Ve=new rs(j),N=new nl,He=new Cl(j,ze,M,N,Be,ct,Ve),Ue=new $o(A),Ge=new xo(j),lt=new Oo(j,Ge),Ke=new ts(j,Ge,Ve,lt),qe=new as(j,Ke,Ge,lt,Ve),it=new is(j,Be,He),$e=new jo(N),Je=new tl(A,Ue,ze,Be,lt,$e),Ye=new jl(A,N),Xe=new ol,Qe=new pl(ze),nt=new Do(A,Ue,M,qe,_,s),et=new xl(A,qe,Be),ut=new Ml(j,Ve,Be,M),at=new ko(j,ze,Ve),st=new ns(j,ze,Ve),Ve.programs=Je.programs,A.capabilities=Be,A.extensions=ze,A.properties=N,A.renderLists=Xe,A.shadowMap=et,A.state=M,A.info=Ve}dt(),S!==1009&&(ae=new ss(S,t.width,t.height,o,r,i));let ft=new Ol(A,j);this.xr=ft,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(e){e!==void 0&&(Ce=e,this.setSize(xe,Se,!1))},this.getSize=function(e){return e.set(xe,Se)},this.setSize=function(e,n,r=!0){if(ft.isPresenting){P(`WebGLRenderer: Can't change size while VR device is presenting.`);return}xe=e,Se=n,t.width=Math.floor(e*Ce),t.height=Math.floor(n*Ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ae!==null&&ae.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(xe*Ce,Se*Ce).floor()},this.setDrawingBufferSize=function(e,n,r){xe=e,Se=n,Ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){F(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ae.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ge)},this.getViewport=function(e){return e.copy(Ee)},this.setViewport=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),M.viewport(ge.copy(Ee).multiplyScalar(Ce).round())},this.getScissor=function(e){return e.copy(De)},this.setScissor=function(e,t,n,r){e.isVector4?De.set(e.x,e.y,e.z,e.w):De.set(e,t,n,r),M.scissor(_e.copy(De).multiplyScalar(Ce).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(e){M.setScissorTest(Oe=e)},this.setOpaqueSort=function(e){we=e},this.setTransparentSort=function(e){Te=e},this.getClearColor=function(e){return e.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(pe!==null){let t=pe.texture.format;e=C.has(t)}if(e){let e=pe.texture.type,t=w.has(e),n=nt.getClearColor(),r=nt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,j.clearBufferuiv(j.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,j.clearBufferiv(j.COLOR,0,E))}else r|=j.COLOR_BUFFER_BIT}t&&(r|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&j.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),se=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),nt.dispose(),Xe.dispose(),Qe.dispose(),N.dispose(),Ue.dispose(),qe.dispose(),lt.dispose(),ut.dispose(),Je.dispose(),ft.dispose(),ft.removeEventListener(`sessionstart`,St),ft.removeEventListener(`sessionend`,Ct),wt.stop()};function pt(e){e.preventDefault(),rt(`WebGLRenderer: Context Lost.`),oe=!0}function mt(){rt(`WebGLRenderer: Context Restored.`),oe=!1;let e=Ve.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;dt(),Ve.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function ht(e){F(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function gt(e){let t=e.target;t.removeEventListener(`dispose`,gt),_t(t)}function _t(e){vt(e),N.remove(e)}function vt(e){let t=N.get(e).programs;t!==void 0&&(t.forEach(function(e){Je.releaseProgram(e)}),e.isShaderMaterial&&Je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Fe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Pt(e,t,n,r,i);M.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ke.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;lt.setup(i,r,s,n,c);let h,g=at;if(c!==null&&(h=Ge.get(c),g=st,g.setIndex(h)),i.isMesh)r.wireframe===!0?(M.setLineWidth(r.wireframeLinewidth*Le()),g.setMode(j.LINES)):g.setMode(j.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),M.setLineWidth(e*Le()),i.isLineSegments?g.setMode(j.LINES):i.isLineLoop?g.setMode(j.LINE_LOOP):g.setMode(j.LINE_STRIP)}else i.isPoints?g.setMode(j.POINTS):i.isSprite&&g.setMode(j.TRIANGLES);if(i.isBatchedMesh)if(ze.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ge.get(c).bytesPerElement:1,o=N.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(j,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function yt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,n),e.side=0,e.needsUpdate=!0,At(e,t,n),e.side=2):At(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),O=Qe.get(n),O.init(t),ie.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];yt(a,n,e),r.add(a)}else yt(t,n,e),r.add(t)}),O=ie.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){N.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ze.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let bt=null;function xt(e){bt&&bt(e)}function St(){wt.stop()}function Ct(){wt.start()}let wt=new bo;wt.setAnimationLoop(xt),typeof self<`u`&&wt.setContext(self),this.setAnimationLoop=function(e){bt=e,ft.setAnimationLoop(e),e===null?wt.stop():wt.start()},ft.addEventListener(`sessionstart`,St),ft.addEventListener(`sessionend`,Ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){F(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(oe===!0)return;se!==null&&se.renderStart(e,t);let n=ft.enabled===!0&&ft.isPresenting===!0,r=ae!==null&&(pe===null||n)&&ae.begin(A,pe);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ae===null||ae.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(t),t=ft.getCamera()),e.isScene===!0&&e.onBeforeRender(A,e,t,pe),O=Qe.get(e,ie.length),O.init(t),O.state.textureUnits=He.getTextureUnits(),ie.push(O),Me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ke.setFromProjectionMatrix(Me,Ze,t.reversedDepth),je=this.localClippingEnabled,Ae=$e.init(this.clippingPlanes,je),ee=Xe.get(e,ne.length),ee.init(),ne.push(ee),ft.enabled===!0&&ft.isPresenting===!0){let e=A.xr.getDepthSensingMesh();e!==null&&Tt(e,t,-1/0,A.sortObjects)}Tt(e,t,0,A.sortObjects),ee.finish(),A.sortObjects===!0&&ee.sort(we,Te,t.reversedDepth),Ie=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ie&&nt.addToRenderList(ee,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&$e.beginShadows();let i=O.state.shadowsArray;if(et.render(i,e,t),Ae===!0&&$e.endShadows(),(r&&ae.hasRenderPass())===!1){let n=ee.opaque,r=ee.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}Ie&&nt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(ee,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),Ie&&nt.render(e),Et(ee,e,t)}pe!==null&&fe===0&&(He.updateMultisampleRenderTarget(pe),He.updateRenderTargetMipmap(pe)),r&&ae.end(A),e.isScene===!0&&e.onAfterRender(A,e,t),lt.resetDefaultState(),me=-1,he=null,ie.pop(),ie.length>0?(O=ie[ie.length-1],He.setTextureUnits(O.state.textureUnits),Ae===!0&&$e.setGlobalState(A.clippingPlanes,O.state.camera)):O=null,ne.pop(),ee=ne.length>0?ne[ne.length-1]:null,se!==null&&se.renderEnd()};function Tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ke.intersectsSprite(e)){r&&Pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Me);let t=qe.update(e),i=e.material;i.visible&&ee.push(e,t,i,n,Pe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ke.intersectsObject(e))){let t=qe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Pe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Pe.copy(e.boundingSphere.center)),Pe.applyMatrix4(e.matrixWorld).applyMatrix4(Me)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&ee.push(e,t,s,n,Pe.z,o)}}else i.visible&&ee.push(e,t,i,n,Pe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Tt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Ae===!0&&$e.setGlobalState(A.clippingPlanes,n),r&&M.viewport(ge.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=ze.has(`EXT_color_buffer_half_float`)||ze.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new nn(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Be.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||ge;a.setSize(o.z*A.transmissionResolutionScale,o.w*A.transmissionResolutionScale);let s=A.getRenderTarget(),c=A.getActiveCubeFace(),l=A.getActiveMipmapLevel();A.setRenderTarget(a),A.getClearColor(ye),be=A.getClearAlpha(),be<1&&A.setClearColor(16777215,.5),A.clear(),Ie&&nt.render(n);let f=A.toneMapping;A.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Ae===!0&&$e.setGlobalState(A.clippingPlanes,r),Ot(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),ze.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}A.setRenderTarget(s,c,l),A.setClearColor(ye,be),p!==void 0&&(r.viewport=p),A.toneMapping=f}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){e.onBeforeRender(A,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(A,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=2):A.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(A,t,n,r,i,a)}function At(e,t,n){t.isScene!==!0&&(t=Fe);let r=N.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Je.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,gt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=Je.getUniforms(e),se!==null&&e.isNodeMaterial&&se.build(e,n,s),e.onBeforeCompile(s,A),d=Je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=$e.uniform),Mt(e,s),r.needsLights=I(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=mc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=N.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Pt(e,t,n,r,i){t.isScene!==!0&&(t=Fe),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=pe===null?A.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ut.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(h=A.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=N.get(r),y=O.state.lights;if(Ae===!0&&(je===!0||e!==he)){let t=e===he&&r.id===me;$e.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==$e.numPlanes||v.numIntersection!==$e.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=At(r,t,i),se&&r.isNodeMaterial&&se.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(M.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==me&&(me=r.id,C=!0),v.needsLights){let e=Nt(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||he!==e){M.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(j,`projectionMatrix`,e.projectionMatrix),T.setValue(j,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(j,Ne.setFromMatrixPosition(e.matrixWorld)),Be.logarithmicDepthBuffer&&T.setValue(j,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(j,`isOrthographic`,e.isOrthographicCamera===!0),he!==e&&(he=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(j,`directionalShadowMap`,y.state.directionalShadowMap,He),y.state.spotShadowMap.length>0&&T.setValue(j,`spotShadowMap`,y.state.spotShadowMap,He),y.state.pointShadowMap.length>0&&T.setValue(j,`pointShadowMap`,y.state.pointShadowMap,He)),i.isSkinnedMesh){T.setOptional(j,i,`bindMatrix`),T.setOptional(j,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(j,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(T.setOptional(j,i,`batchingTexture`),T.setValue(j,`batchingTexture`,i._matricesTexture,He),T.setOptional(j,i,`batchingIdTexture`),T.setValue(j,`batchingIdTexture`,i._indirectTexture,He),T.setOptional(j,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(j,`batchingColorTexture`,i._colorsTexture,He));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&it.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(j,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Fl()),C){if(T.setValue(j,`toneMappingExposure`,A.toneMappingExposure),v.needsLights&&Ft(E,w),a&&r.fog===!0&&Ye.refreshFogUniforms(E,a),Ye.refreshMaterialUniforms(E,r,Ce,Se,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}mc.upload(j,jt(v),E,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(mc.upload(j,jt(v),E,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(j,`center`,i.center),T.setValue(j,`modelViewMatrix`,i.modelViewMatrix),T.setValue(j,`normalMatrix`,i.normalMatrix),T.setValue(j,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ut.update(n,x),ut.bind(n,x)}}return x}function Ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function I(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return pe},this.setRenderTargetTextures=function(e,t,n){let r=N.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),N.get(e.texture).__webglTexture=t,N.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=N.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){pe=e,de=t,fe=n;let r=null,i=!1,a=!1;if(e){let o=N.get(e);if(o.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,o.__webglFramebuffer),ge.copy(e.viewport),_e.copy(e.scissor),ve=e.scissorTest,M.viewport(ge),M.scissor(_e),M.setScissorTest(ve),me=-1;return}else if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,N.get(e.texture).__webglTexture,N.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&N.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=N.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?N.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ge.copy(e.viewport),_e.copy(e.scissor),ve=e.scissorTest}else ge.copy(Ee).multiplyScalar(Ce).floor(),_e.copy(De).multiplyScalar(Ce).floor(),ve=Oe;if(n!==0&&(r=ce),M.bindFramebuffer(j.FRAMEBUFFER,r)&&M.drawBuffers(e,r),M.viewport(ge),M.scissor(_e),M.setScissorTest(ve),i){let r=N.get(e.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=N.get(e.textures[t]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=N.get(e.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,t.__webglTexture,n)}me=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){M.bindFramebuffer(j.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+s),!Be.textureFormatReadable(c)){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Be.textureTypeReadable(l)){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&j.readPixels(t,n,r,i,ct.convert(c),ct.convert(l),a)}finally{let e=pe===null?null:N.get(pe).__webglFramebuffer;M.bindFramebuffer(j.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){M.bindFramebuffer(j.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+s),!Be.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Be.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,d),j.bufferData(j.PIXEL_PACK_BUFFER,a.byteLength,j.STREAM_READ),j.readPixels(t,n,r,i,ct.convert(l),ct.convert(u),0);let f=pe===null?null:N.get(pe).__webglFramebuffer;M.bindFramebuffer(j.FRAMEBUFFER,f);let p=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await ot(j,p,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,d),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,a),j.deleteBuffer(d),j.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),j.copyTexSubImage2D(j.TEXTURE_2D,n,0,0,o,s,i,a),M.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ct.convert(t.format),_=ct.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=j.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=j.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=j.TEXTURE_2D),M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,t.unpackAlignment);let y=M.getParameter(j.UNPACK_ROW_LENGTH),b=M.getParameter(j.UNPACK_IMAGE_HEIGHT),x=M.getParameter(j.UNPACK_SKIP_PIXELS),S=M.getParameter(j.UNPACK_SKIP_ROWS),C=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,h.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,h.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,l),M.pixelStorei(j.UNPACK_SKIP_ROWS,u),M.pixelStorei(j.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=N.get(e),r=N.get(t),h=N.get(n.__renderTarget),g=N.get(r.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,h.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(e).__webglTexture,i,d+n),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(t).__webglTexture,a,m+n)),j.blitFramebuffer(l,u,o,s,f,p,o,s,j.DEPTH_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||N.has(e)){let n=N.get(e),r=N.get(t);M.bindFramebuffer(j.READ_FRAMEBUFFER,le),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,ue);for(let e=0;e<c;e++)w?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,n.__webglTexture,i),T?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,r.__webglTexture,a),i===0?T?j.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):j.copyTexSubImage2D(v,a,f,p,l,u,o,s):j.blitFramebuffer(l,u,o,s,f,p,o,s,j.COLOR_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?j.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?j.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):j.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):j.texSubImage2D(j.TEXTURE_2D,a,f,p,o,s,g,_,h);M.pixelStorei(j.UNPACK_ROW_LENGTH,y),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,b),M.pixelStorei(j.UNPACK_SKIP_PIXELS,x),M.pixelStorei(j.UNPACK_SKIP_ROWS,S),M.pixelStorei(j.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&j.generateMipmap(v),M.unbindTexture()},this.initRenderTarget=function(e){N.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),M.unbindTexture()},this.resetState=function(){de=0,fe=0,pe=null,M.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}},Ll=1.15;function Rl(e){e.outputColorSpace=We,e.toneMapping=4,e.toneMappingExposure=Ll}var zl=new L;function Bl(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;zl.copy(t),zl[r]=0,zl.normalize();let l=.5*o/(o+s),u=1-zl.angleTo(e)/c;return Math.sign(zl[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Vl=class e extends Yi{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new L,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Bl(m,c,`z`,`y`,i,n),f[a+1]=1-Bl(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Bl(m,c,`z`,`y`,i,n),f[a+1]=1-Bl(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Bl(m,c,`x`,`z`,i,e),f[a+1]=Bl(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Bl(m,c,`x`,`z`,i,e),f[a+1]=1-Bl(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Bl(m,c,`x`,`y`,i,e),f[a+1]=1-Bl(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Bl(m,c,`x`,`y`,i,e),f[a+1]=1-Bl(m,c,`y`,`x`,i,t);break}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Hl=.07,Ul=new Vl(1,1,1,1,Hl);function Wl(e=1,t=1,n=1,r=Hl){let i=[e/2,t/2,n/2],a=Math.min(r,i[0],i[1],i[2]),o=[],s=[],c=new Map,l=(e,t,n,r)=>{let l=`${e},${t},${n},${r}`,u=c.get(l);if(u===void 0){u=o.length/3;let d=[e,t,n];for(let e=0;e<3;e++)o.push(d[e]*(e===r?i[e]:i[e]-a));let f=[0,0,0];f[r]=d[r],s.push(...f),c.set(l,u)}return u},u=[],d=(e,t,n,r)=>u.push(e,t,n,e,n,r);for(let e=0;e<3;e++){let t=(e+1)%3,n=(e+2)%3;for(let r of[1,-1]){let i=(i,a)=>{let o=[0,0,0];return o[e]=r,o[t]=i,o[n]=a,l(o[0],o[1],o[2],e)};d(i(-1,-1),i(1,-1),i(1,1),i(-1,1))}}for(let e=0;e<3;e++)for(let t=e+1;t<3;t++){let n=3-e-t;for(let r of[1,-1])for(let i of[1,-1]){let a=a=>{let o=[0,0,0];return o[e]=r,o[t]=i,o[n]=a,o},o=a(-1),s=a(1);d(l(...o,e),l(...s,e),l(...s,t),l(...o,t))}}for(let e of[1,-1])for(let t of[1,-1])for(let n of[1,-1])u.push(l(e,t,n,0),l(e,t,n,1),l(e,t,n,2));let f=new L,p=new L,m=new L;for(let e=0;e<u.length;e+=3){let[t,n,r]=[u[e],u[e+1],u[e+2]];f.fromArray(o,t*3),p.fromArray(o,n*3).sub(f),m.fromArray(o,r*3).sub(f),p.cross(m),f.set(s[t*3]+s[n*3]+s[r*3],s[t*3+1]+s[n*3+1]+s[r*3+1],s[t*3+2]+s[n*3+2]+s[r*3+2]),p.dot(f)<0&&(u[e+1]=r,u[e+2]=n)}let h=new Ir;return h.setAttribute(`position`,new xr(new Float32Array(o),3)),h.setAttribute(`normal`,new xr(new Float32Array(s),3)),h.setIndex(u),h}var Gl=Wl(),Kl=()=>Wl(),ql=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Jl=new Map;function Yl(e){if(!Jl.has(e)){let t=fetch(e).then(t=>{if(!t.ok)throw Error(`vox model ${e}: HTTP ${t.status}`);return t.json()}).then(e=>({name:e.name,parts:e.parts.map(t=>({name:t.name,tintable:!!t.tintable,offset:t.offset,geometry:Xl(t,t.origin,e.voxelSize)}))}));t.catch(()=>Jl.delete(e)),Jl.set(e,t)}return Jl.get(e)}function Xl(e,t,n){let r=e.positions.length/3,i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*3);for(let s=0;s<r;s++)for(let r=0;r<3;r++)i[s*3+r]=(e.positions[s*3+r]+t[r])*n,a[s*3+r]=ql[e.normals[s]][r],o[s*3+r]=e.colors[s*3+r]/255;let s=new Ir;return s.setAttribute(`position`,new xr(i,3)),s.setAttribute(`normal`,new xr(a,3)),s.setAttribute(`color`,new xr(o,3)),s.setIndex(e.indices),s}function Zl(e,{materials:t={}}={}){let n=new z,r={};for(let i of e.parts){let e=t[i.name]||new H({vertexColors:!0});e.vertexColors=!0;let a=new V(i.geometry,e);a.name=i.name,a.position.fromArray(i.offset),n.add(a),r[i.name]=a}return{group:n,parts:r}}var Ql=[{top:[9425759,8636500],dirt:[10254152,9399103],plat:[16238920,15381806],hill:7323490,hill2:9426058,sky:8900331,fog:11132403,skyTop:4891622,skyBot:11461880,hemiSky:16772815,hemiGround:6460572,sunTint:16768166,sun:16772254,cloud:16777215},{top:[15316067,14195784],dirt:[11892527,10906153],plat:[9067054,8146727],hill:14263388,hill2:15649676,sky:9426152,fog:15916734,skyTop:7322079,skyBot:16767904,hemiSky:16771264,hemiGround:10127008,sunTint:16766100,sun:16765562,cloud:16774109},{top:[16054524,15134455],dirt:[12111584,11190998],plat:[10470632,9615581],hill:13623536,hill2:15266554,sky:11061480,fog:14412279,skyTop:8368866,skyBot:15135484,hemiSky:16707804,hemiGround:9415638,sunTint:16772300,sun:16774872,cloud:16777215},{top:[7225433,6436943],dirt:[11031346,8273190],plat:[14267242,13213780],hill:8273190,hill2:11031346,sky:11553438,fog:13073332,skyTop:4858181,skyBot:11553438,hemiSky:16771272,hemiGround:6436943,sunTint:16762789,sun:16766627,cloud:15845609},{top:[8747176,8022934],dirt:[6184556,5526623],plat:[10448852,9593799],hill:4536926,hill2:5786229,sky:2366771,fog:3352906,skyTop:854554,skyBot:4535651,hemiSky:9209544,hemiGround:3029606,sunTint:12174591,sun:15265023,cloud:6971528,night:!0},{top:[7035486,6312020],dirt:[4536896,3945016],plat:[16747582,15760432],hill:8010286,hill2:10246714,sky:15238986,fog:15902824,skyTop:12077618,skyBot:16760938,hemiSky:16767400,hemiGround:8014396,sunTint:16756848,sun:16764794,cloud:10125432},{top:[8380600,7328938],dirt:[9073336,8218282],plat:[16766282,16758334],hill:13002948,hill2:10125024,sky:4860556,fog:9067208,skyTop:1839176,skyBot:10246868,hemiSky:14207231,hemiGround:3824268,sunTint:13621503,sun:16774872,cloud:15251696,night:!0}],$l=new B,eu={},tu=(e,t,n,r)=>($l.setHex(e).getHSL(eu),$l.setHSL(eu.h,Math.min(1,eu.s*t+n),eu.l*r),$l.getHex()),nu=e=>tu(e,1.3,.04,.96),ru=e=>tu(e,1.45,.05,.88);for(let e of Ql){for(let t of[`top`,`dirt`,`plat`])e[t]=e[t].map(nu);for(let t of[`hill`,`hill2`,`sun`,`cloud`])e[t]=nu(e[t]);for(let t of[`sky`,`fog`,`skyTop`,`skyBot`])e[t]=ru(e[t])}function iu(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function au({seed:e,wordCount:t,theme:n,secret:r=!1,hasKey:i=!1}){let a=iu(e),o=[],s=[],c=[],l=[],u=[],d=0,f=null,p=()=>o.length,m=e=>{for(let t=0;t<e;t++)o.push(d)},h=(e,t,n,r=1.4)=>{for(let i=0;i<n;i++)c.push({x:e+i*r,y:t})},g=(e,t,n)=>{for(let r=0;r<5;r++){let i=r/4;c.push({x:e+i*t,y:n+Math.sin(i*Math.PI)*1.2})}};m(8),h(4,d+.8,3);let _=i?t>>1:-1,v=r?new Set([1,Math.max(2,t-2)]):null,y=e%2;for(let e=0;e<t;e++){if(e===_){let e=p()+3;m(8),s.push({x0:e,x1:e+1,y:d+3}),f={x:e+.5,y:d+4.2}}let t=16+(a()*5|0)+(r?4:0),n=p(),i=0;for(;i<t;){let e=Math.min(t-i,5+(a()*6|0));if(m(e),i+=e,i<t){let e=[1,1,2,-1,-2,0][a()*6|0];d=Math.max(0,Math.min(4,d+e))}a()<(r?.6:.35)&&h(p()-e+1,d+.8,Math.min(4,e-1))}if(a()<(r?.95:.75)&&t>11){let e=3+(a()*2|0),r=[];for(let i=n+3;i<=n+t-e-3;i++){let t=!0;for(let n=i-1;n<=i+e;n++)if(o[n]!==o[i]){t=!1;break}t&&r.push(i)}if(r.length){let t=r[a()*r.length|0],n=o[t]+(a()<.35?2:3);s.push({x0:t,x1:t+e-1,y:n}),g(t-.5,e,n+1.1)}}if(!r&&l.length<6&&a()<.55&&t>10){let e=p()-7;l.push({x0:e,x1:e+4})}if(v&&v.has(e)){let e=p();m(16),s.push({x0:e+3,x1:e+6,y:d+3}),s.push({x0:e+9,x1:e+12,y:d+3});for(let t=e+2;t<=e+13;t+=1.5)c.push({x:t,y:d+1}),c.push({x:t,y:d+2}),c.push({x:t,y:d+4.2})}let b=(e+y)%2==0?`blocks`:`doors`;if(b===`blocks`)u.push({type:b,x:p(),groundY:d}),m(36);else{let e=p();u.push({type:b,x:e,wallX:e+12,groundY:d}),s.push({x0:e+6,x1:e+11,y:d+2,thin:!0}),s.push({x0:e+9,x1:e+11,y:d+4,thin:!0}),m(26)}}let b=p()+24;m(47);let x=p()+5;m(12);let S=u.filter(e=>e.type===`doors`).map(e=>({a:e.x-6,b:e.wallX+6})),C=e=>S.every(t=>e.x1<t.a||e.x0>t.b),w=[];for(let e of l){let t=e;for(let e of S)if(!(t.x1<e.a||t.x0>e.b)){let n=t.x1-t.x0;t={x0:e.a-1-n,x1:e.a-1}}let n=Math.max(0,Math.min(p()-1,Math.round((t.x0+t.x1)/2))),r=o[n],i=n,a=n;for(;i>t.x0&&o[i-1]===r;)i--;for(;a<t.x1&&o[a+1]===r;)a++;t={x0:i,x1:a},t.x1-t.x0>=2&&t.x0>12&&C(t)&&w.every(e=>t.x1<e.x0-2||t.x0>e.x1+2)&&w.push(t)}let T=[];if(n===5){let e=(e,t)=>{if(e<1||t+1>=o.length)return!1;for(let n=e-1;n<=t+1;n++)if(o[n]!==o[e])return!1;return!0},t=(e,t)=>u.some(n=>{let r=(n.type===`doors`?n.wallX:n.x+36)+4;return t>=n.x-4&&e<=r}),n=(e,t)=>s.some(n=>t>=n.x0-2&&e<=n.x1+2),r=(e,t)=>w.some(n=>t>=n.x0-2&&e<=n.x1+2),i=e=>f&&Math.abs(f.x-e)<5,c=16;for(;c<b-8&&T.length<6;){let s=2+(a()*2|0),l=c,u=c+s-1;e(l,u)&&!t(l,u)&&!n(l,u)&&!r(l,u)&&!i(l)?(T.push({x0:l,x1:u,y:o[l]}),c=u+12+(a()*8|0)):c+=3}}return{groundY:o,platforms:s,coins:c,critters:w,events:u,key:f,starX:b,flagX:x,length:p(),theme:n,secret:r,hazards:T}}function ou({seed:e,wordCount:t,theme:n}){let r=iu(e),i=[],a=[],o=[],s=0,c=()=>i.length,l=e=>{for(let t=0;t<e;t++)i.push(s)};l(14);for(let e=0;e<t;e++){e>0&&(s=Math.max(0,Math.min(2,s+[0,1,-1][r()*3|0])));let t=5+(r()*3|0);if(l(t),r()<.7)for(let e=0;e<4;e++)a.push({x:c()-t+1+e*1.3,y:s+.8});o.push({type:`blocks`,x:c(),groundY:s}),l(36)}let u=c()+4;l(8);let d=c()+5;return l(12),{groundY:i,platforms:[],coins:a,critters:[],events:o,key:null,starX:u,flagX:d,length:c(),theme:n,secret:!1,boss:!0}}var su=24e3,cu=260,lu=6,uu=9,du=Ul;function fu(e){let t=(e|0)*374761393+668265263;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var pu=[(e,t,n,r)=>{let i=r||Math.random,a=(i()-.5)*.1,o=i();o<.45?(e(t,n+.5,-3.5,.3,1,.3,16111480),e(t+.18,n+1.3,-3.5,.3,.8,.3,15716202),e(t-.1,n+2,-3.5,.3,.7,.3,16111480),e(t,n+2.8,-3.5,1.9,1,1.9,9063213,0,a),e(t+.6,n+3.4,-3.2,1,.8,1,9655087,0,a+.03),e(t-.55,n+3.5,-3.7,1.1,.9,1.1,8340263,0,a),e(t,n+4,-3.5,.9,.5,.9,13779498,0,a,0,!1),e(t+.2,n+4.3,-3.4,.3,.15,.3,16773836)):o<.75?(e(t,n+1.1,-3.5,1.2,2.2,1.2,15777888,0,a),e(t+.62,n+1.1,-3.5,.08,2.2,.9,14855501),e(t-.62,n+1.1,-3.5,.08,2.2,.9,14855501),e(t,n+2.22,-3.5,.7,.14,.7,10250798)):(e(t,n+.5,-3.3,1.3,1,1.3,4169274,0,a),e(t+.4,n+.95,-3.2,.5,.5,.5,14826286),e(t-.45,n+.7,-3.1,.45,.45,.45,15684419)),i()<.6&&(e(t+.9+i()*.6,n+.06,-3-i(),.2,.1,.2,16773836),e(t-1-i()*.5,n+.06,-3.4,.2,.1,.2,16246968))},(e,t,n,r)=>{let i=2+(r()*2|0);for(let r=0;r<i;r++)e(t+(r&1?.12:-.08),n+.3+r*.55,-3.5,2,.5,2,r&1?14523466:13601852);let a=n+.3+(i-1)*.55;e(t,a+.45,-3.5,.7,.35,.7,16769898),e(t+1,a-.2,-3.45,.16,.8,.16,9062938),r()<.6&&(e(t+2,n+.45,-4,.8,.9,.8,14826286),e(t+2,n+1,-4,.5,.25,.5,4169274)),r()<.5&&e(t-1.6,n+.12,-3.2,1.2,.18,.9,9062938)},(e,t,n)=>{e(t,n+.5,-3.5,1,1,1,16777215),e(t,n+1.35,-3.5,.75,.75,.75,16054524),e(t,n+1.98,-3.5,.55,.55,.55,16777215),e(t+1.8,n+.6,-4.2,.3,1.2,.3,8015658),e(t+1.8,n+1.5,-4.2,1.5,.7,1.5,3833173),e(t+1.8,n+2.15,-4.2,1,.6,1,4489052),e(t+1.8,n+2.7,-4.2,.6,.5,.6,14675708)},(e,t,n,r)=>{let i=(r()-.5)*.08,a=r();if(a<.38){let a=2+(r()*3|0),o=[8208271,10247088,8409242];for(let s=0;s<a;s++){let c=t+(s-(a-1)/2)*.8+(r()-.5)*.25,l=-3.3-r()*.7,u=.65+r()*.25,d=o[r()*o.length|0];e(c,n+.23*u,l,u,.46*u,u*.92,d,0,i),e(c-.08,n+.48*u,l,u*.78,.22*u,u*.72,10247088,0,i+.03),e(c+.02,n+.62*u,l+.02,.14*u,.08*u,u*.72,14271208,0,.02)}}else if(a<.7){for(let r=0;r<4;r++)e(t+r*.12,n+.35+r*.52,-3.7,.34,.7,.34,r&1?14248532:13065549,0,i);let r=t+.52,a=n+2.55;e(r,a,-3.7,.72,.28,1.55,4169354,0,i+.02),e(r-.55,a-.1,-3.7,1.25,.25,.46,3837824,0,i),e(r+.58,a-.28,-3.45,1.28,.24,.42,4169354,0,i+.01),e(r+.15,a-.35,-4.22,.44,.22,1.22,4892820,0,i),e(r+.08,a+.12,-3.7,.32,.24,.32,14248532,0,i)}else e(t,n+.1,-3.4,1.95,.16,1.45,12916392,1,0,0,!1,{swampPool:!0}),e(t+.22,n+.19,-3.42,.58,.11,.38,15286216,1),e(t-1.12,n+.2,-3.24,.38,.34,.38,8273190,0,i),e(t+1.18,n+.18,-3.58,.34,.3,.34,11031346,0,i-.02)},(e,t,n,r)=>{let i=[8319231,13663999,16747224];for(let a=0;a<3;a++){let o=i[r()*i.length|0];e(t+(a-1)*.7,n+.8+r()*.6,-3.5,.4,1.4+r()*1.2,.4,o,o)}e(t,n+.15,-3.5,1.6,.5,1.6,5526623)},(e,t,n,r)=>{let i=(r()-.5)*.08,a=r();if(a<.4)e(t,n+.5,-3.5,2,1,2,4864574,0,i),e(t,n+1.35,-3.5,1.4,.75,1.4,5914692,0,i+.03),e(t,n+2,-3.5,.9,.6,.9,12597547,0,i),e(t,n+2.42,-3.5,.55,.3,.55,16747582,1),e(t,n+2.6,-3.5,.26,.18,.26,16765502,1),e(t+.55,n+1.7,-3.28,.2,.5,.2,16742958,1),r()<.6&&e(t-.62,n+1,-3.35,.18,.6,.18,16747582,1);else if(a<.75){e(t,n+.5,-3.3,1.3,1,1.3,4169274,0,i);let a=[14826286,16742958,16761406],o=2+(r()*2|0);for(let i=0;i<o;i++){let s=t+(i-(o-1)/2)*.55,c=n+.85+r()*.35;e(s,c,-3.15,.35,.5,.35,a[r()*3|0]),e(s,c+.34,-3.15,.12,.16,.12,3046706)}}else e(t,n+.1,-3.4,1.8,.16,1.4,16742958,1),e(t+.2,n+.19,-3.4,.5,.12,.4,16765502,1),e(t-1.1,n+.2,-3.3,.4,.35,.4,3945016,0,i),e(t+1.15,n+.18,-3.55,.35,.3,.35,4536896,0,i)},(e,t,n,r)=>{let i=(r()-.5)*.08,a=r();if(a<.4)[14826286,16751150,16765502,5036388,4891622,11225020].forEach((r,a)=>{let o=1-a*.13;e(t,n+.4+a*.42,-3.6,2.6*o+.9,.4,.5,r,1,i)}),e(t-1.9,n+.25,-3.5,.7,.5,.7,16777215),e(t+1.9,n+.25,-3.5,.7,.5,.7,16777215);else if(a<.72){for(let r=0;r<4;r++)e(t,n+.35+r*.6,-3.5,.28,.62,.28,r&1?16777215:16747224,0,i);let r=n+2.9;e(t,r,-3.5,1.1,1.1,.5,16766282,1,i),e(t,r+.85,-3.5,.4,.6,.45,16769898,1),e(t,r-.85,-3.5,.4,.6,.45,16769898,1),e(t-.85,r,-3.5,.6,.4,.45,16769898,1),e(t+.85,r,-3.5,.6,.4,.45,16769898,1)}else{let a=[8319231,16747224,11766015,9109406],o=3+(r()*2|0);for(let s=0;s<o;s++){let c=t+(s-(o-1)/2)*.7+(r()-.5)*.3,l=.4+r()*.35;e(c,n+l*.6,-3.2-r()*.8,l,l*1.2,l,a[r()*a.length|0],1,i)}}}],mu=class{constructor(e){this.scene=e,this.data=null,this.dynamicSolids=[],this.blocks=new Fi(Gl,new H,su),this.blocks.frustumCulled=!1,this.blocks.count=0,e.add(this.blocks),this.coinMesh=new Fi(Wl(.55,.55,.12,.04),new H({color:16766282,emissive:6704384}),cu),this.coinMesh.frustumCulled=!1,this.coinMesh.count=0,e.add(this.coinMesh),this.coinStates=[],this.coinSpin=0,this.dummy=new Nn,this.color=new B,this.flagGroup=new z;let t=new V(du,new H({color:14277081}));t.scale.set(.18,8,.18),t.position.y=4;let n=new V(du,new H({color:16766282,emissive:6704384}));n.scale.setScalar(.5),n.position.y=8.2;let r=new V(du,new H({color:9263659}));r.scale.set(1.4,.6,1.4),r.position.y=.3,this.flag=new V(du,new H({color:5036388})),this.flag.scale.set(1.4,.9,.1),this.flag.position.set(-.85,7.4,0),this.flagGroup.add(t,n,r,this.flag),e.add(this.flagGroup),this.sky=new z;let i=document.createElement(`canvas`);i.width=2,i.height=128,this.skyCtx=i.getContext(`2d`),this.skyTex=new Gi(i),this.skyTex.colorSpace=We;let a=new V(new ta(85,20,14),new fi({map:this.skyTex,side:1,fog:!1,depthWrite:!1}));a.renderOrder=-1,this.sky.add(a),this.sunMat=new fi({color:16772254,fog:!1}),this.sunGroup=new z;{let e=new V(du,this.sunMat);e.scale.set(3.4,3.4,.6),this.sunGroup.add(e);for(let[e,t]of[[2.1,0],[-2.1,0],[0,2.1],[0,-2.1]]){let n=new V(du,this.sunMat);n.scale.set(e?.9:2.2,e?2.2:.9,.55),n.position.set(e,t,0),this.sunGroup.add(n)}}this.sunGroup.position.set(20,18,-60),this.sky.add(this.sunGroup);let o=new fi({color:15265023,fog:!1});this.moonGroup=new z;{let e=new V(du,o);e.scale.set(2.8,2.8,.6);let t=new V(du,o);t.scale.set(1.2,1.2,.65),t.position.set(-1.6,1.4,0),this.moonGroup.add(e,t)}this.moonGroup.position.set(-16,19,-58),this.sky.add(this.moonGroup),this.starField=new Fi(Gl,new fi({color:14674175,fog:!1}),48),this.starField.frustumCulled=!1;{let e=iu(9001),t=new Nn;for(let n=0;n<48;n++)t.position.set(e()*150-75,8+e()*36,-52-e()*16),t.scale.setScalar(.16+e()*.22),t.updateMatrix(),this.starField.setMatrixAt(n,t.matrix);this.starField.instanceMatrix.needsUpdate=!0}this.sky.add(this.starField),e.add(this.sky),this.parallax=[];let s=(t,n,r,i,a)=>{let o=new H,s=new Fi(Gl,o,120);s.frustumCulled=!1;let c=iu(r),l=new Nn,u=new B,d=0,f=(e,t,n,r,i,a)=>{l.position.set(e,t,0),l.scale.set(n,r,i),l.updateMatrix(),s.setMatrixAt(d,l.matrix),s.setColorAt(d,u.setScalar(a)),d++},p=[];for(let e=0;e<4;e++)p.push({x:e*22+c()*8,w:8+c()*6,h:i+c()*1.8});for(let e=0;e<2;e++)for(let t of p){let n=e*90+t.x,r=-2;for(let e=0;e<4;e++){let i=(t.h+2.5)/4;f(n+(c()-.5)*1.5,r+i/2,t.w*(1-e*.22),i+.02,2.5-e*.1,.9+(e&1)*.1),r+=i}if(f(n,r+.5,t.w*.28,1,2.1,1),a){let e=1+(c()*3|0);for(let i=0;i<e;i++){let e=n+(c()-.5)*t.w*.5;f(e,r+.35,.25,.7,.5,.55),f(e,r+1.05,.9,.9,.9,.7)}}}s.count=d,s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.position.z=t,e.add(s),this.parallax.push({mesh:s,mat:o,factor:n})};s(-13,.32,51,1.2,!0),s(-19,.16,87,2.6,!0),s(-25,.07,133,4,!1),this.clouds=[],this.cloudMats=[];for(let t=0;t<lu;t++){let t=new z,n=new H({color:16777215,transparent:!0,opacity:1,emissive:16777215,emissiveIntensity:.55});n.userData.o=.75+Math.random()*.25,this.cloudMats.push(n);let r=Math.random()<.4,i=r?4:2+(Math.random()*2|0),a=r?1.7:1.3;for(let e=0;e<i;e++){let o=new V(du,n),s=(r?2:1.4)+Math.random()*1.5;o.scale.set(s,.7+Math.random()*.6,1.2+Math.random()),o.position.set((e-(i-1)/2)*a,Math.random()*.6,(Math.random()-.5)*1.5),t.add(o)}let o=new V(du,n);o.scale.set(i*a+.8,.5,1.9),o.position.y=-.35,t.add(o),t.scale.setScalar(.8+Math.random()*.5),t.userData.drift=.25+Math.random()*.55,e.add(t),this.clouds.push(t)}this.voxScenery=new z,e.add(this.voxScenery),this.voxBuildId=0,this.lavaMat=new H({vertexColors:!0,emissive:16738842,emissiveIntensity:.5}),this.swampMat=new H({color:12916392,vertexColors:!0,emissive:12916392,emissiveIntensity:.5}),this.cabbageLeafMats=[10247088,8208271,9128368,7303052].map(e=>new H({color:e,vertexColors:!0})),this.lavaPulse=0,this.lavaStripMat=new H({color:16734746,emissive:16738842,emissiveIntensity:.6}),this.lavaStripGroup=new z,e.add(this.lavaStripGroup),this.lavaStrips=[];for(let e=0;e<6;e++){let e=new V(du,this.lavaStripMat);e.visible=!1,this.lavaStripGroup.add(e),this.lavaStrips.push(e)}this.monolithMats=[14826286,16742958,16761406].map(e=>new H({vertexColors:!0,color:e})),this.smokePuffs=[];for(let t=0;t<8;t++){let t=new V(du,new H({color:9075318,emissive:8022628,transparent:!0,opacity:0,depthWrite:!1}));t.visible=!1,e.add(t),this.smokePuffs.push(t)}this.swampPoolGeo=Wl(1,1,1,.04),this.swampPoolGeo.setAttribute(`color`,new xr(new Float32Array(this.swampPoolGeo.attributes.position.count*3).fill(1),3)),this.swampPoolGroup=new z,e.add(this.swampPoolGroup),this.swampPoolAnchors=[],this.swampBubbleGroup=new z,e.add(this.swampBubbleGroup),this.swampBubbles=[];let c=new ta(.5,8,6);for(let e=0;e<uu;e++){let t=new H({color:15286216,emissive:12916392,emissiveIntensity:.35,transparent:!0,opacity:0,depthWrite:!1}),n=new V(c,t);n.visible=!1,this.swampBubbleGroup.add(n),this.swampBubbles.push({mesh:n,mat:t,anchor:null,phase:e/uu,rise:2.2,wobble:0,ox:0,oz:0})}}addSwampPool(e,t,n,r,i,a){let o=new V(this.swampPoolGeo,this.swampMat);o.position.set(e,t,n),o.scale.set(r,i,a),this.swampPoolGroup.add(o),this.swampPoolAnchors.push({x:e,y:t+i*.5,z:n,sx:r,sz:a})}placeSwampBubbles(e){let t=this.swampPoolAnchors,n=iu(e);for(let e=0;e<this.swampBubbles.length;e++){let r=this.swampBubbles[e];if(!t.length){r.anchor=null,r.mesh.visible=!1,r.mat.opacity=0;continue}let i=t[e%t.length];r.anchor=i,r.phase=(e/this.swampBubbles.length+n()*.2)%1,r.rise=2.1+n()*.9,r.wobble=n()*Math.PI*2,r.ox=(n()-.5)*i.sx*.45,r.oz=(n()-.5)*i.sz*.35,r.mesh.visible=!0,r.mat.opacity=0}}build(e){this.data=e,this.dynamicSolids.length=0;let t=Ql[e.theme];this.scene.background=new B(t.skyTop),this.scene.fog=new Vn(t.fog,30,80);let n=e=>`#`+e.toString(16).padStart(6,`0`),r=this.skyCtx.createLinearGradient(0,0,0,128);r.addColorStop(0,n(t.skyTop)),r.addColorStop(.52,n(t.skyBot)),r.addColorStop(.72,n(t.fog)),r.addColorStop(1,n(t.fog)),this.skyCtx.fillStyle=r,this.skyCtx.fillRect(0,0,2,128),this.skyTex.needsUpdate=!0,this.sunGroup.visible=!t.night,this.moonGroup.visible=!!t.night,this.starField.visible=!!t.night,this.sunMat.color.setHex(t.sun);let i=this.scene.userData.hemiLight;i&&(i.color.setHex(t.hemiSky),i.groundColor.setHex(t.hemiGround),i.intensity=t.night?.85:1.05);let a=this.scene.userData.sunLight;a&&(a.color.setHex(t.sunTint),a.intensity=t.night?1.2:1.55),this.parallax[0].mat.color.setHex(t.hill).multiplyScalar(.78),this.parallax[1].mat.color.setHex(t.hill2).lerp(new B(t.sky),.3),this.parallax[2].mat.color.setHex(t.hill2).lerp(new B(t.sky),.6);for(let e of this.cloudMats)e.color.setHex(t.cloud),e.emissive.setHex(t.cloud),e.emissiveIntensity=t.night?.2:.55,e.opacity=e.userData.o*(t.night?.55:1);this.swampPoolGroup.clear(),this.swampPoolAnchors.length=0;let o=iu((e.theme+1)*7919),s=0,c=new Set,l=(e,t,n)=>e+`,`+t+`,`+n,u=[],d=(e,t,n,r,i,a,o,d=0,f=0,p=0,m,h)=>{if(h?.swampPool){this.addSwampPool(e,t,n,r,i,a);return}if(!(s>=su)){if(this.dummy.position.set(e,t,n),this.dummy.scale.set(r,i,a),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),this.blocks.setMatrixAt(s,this.dummy.matrix),this.color.setHex(o),d&&this.color.offsetHSL(0,.1,.08),(f||p)&&this.color.offsetHSL(p,0,f),this.blocks.setColorAt(s,this.color),m===void 0?r>=.9&&r<=1.1&&a>=.9&&a<=1.1&&i>=.4&&n>-6&&n<2:m){let r=Math.round(e),i=Math.floor(t),a=Math.round(n);c.add(l(r,i,a)),u.push({n:s,cx:r,cy:i,cz:a})}s++}},f=e.length;for(let n=0;n<f;n++){let r=e.groundY[n],i=fu(n*31+5);for(let e=-1;e<=1;e++){let a=(fu(n*7+e*13)-.5)*.1,o=(fu(n*13+e*29+3)-.5)*.024,s=a+(i<.05?.06:i>.96?-.05:0);d(n,r-.225,e,1,.45,1,t.top[n+e&1],0,s,o),d(n,r-.725,e,1,.55,1,t.dirt[n+e+1&1],0,a-.05,o*.6);for(let i=1;i<4;i++){let a=(fu(n*7+e*13+i*101)-.5)*.1;d(n,r-.5-i,e,1,1,1,t.dirt[n+e+i&1],0,a,o*.6)}}d(n,r-.55,1.03,1,.16,1.02,t.top[1],0,-.1);for(let e=-5;e<=-2;e++){let i=(fu(n*11+e*17)-.5)*.09,a=(fu(n*19+e*23+7)-.5)*.024;d(n,r-.5,e,1,1.001,1,t.top[n+e&1],0,i+e*.012,a)}}for(let n of e.platforms){let e=n.thin?.35:1;for(let r=n.x0;r<=n.x1;r++)for(let i=0;i<=1;i++){let a=(fu(r*5+i*3+n.y*41)-.5)*.06;d(r,n.y-e/2,i-.5,1,e,1,t.plat[r+i&1],0,a)}}let p=(e,t,n,r,i)=>{let a=-1.5;for(let s=0;s<3;s++){let c=(n+3)/3;d(e+(o()-.5)*1.2,a+c/2,r,t*(1-s*.24),c+.02,4-s*.3,i,0,s&1?.04:-.02),a+=c}d(e,a+.5,r,t*.3,1,3.2,i,0,.06)};for(let e=-10;e<f+20;e+=24+(o()*14|0)){let n=9+o()*7;p(e,n*.8,1+o()*1.5,-12,t.hill),p(e+10+o()*8,n,2+o()*2,-19,t.hill2)}let m=pu[e.theme];for(let t=4;t<f-4;t+=10+(o()*9|0)){let n=e.groundY[Math.min(t,f-1)];m(d,t+o()*3,n,o)}this.placeSwampBubbles(f*197+e.theme*53+3001);let h=(e,t,n,r)=>{for(let i=0;i<3;i++)d(e+(i-1)*.14,t+.14+o()*.1,n,.09,.3+o()*.22,.09,r,0,(o()-.5)*.12)},g=(e,t,n,r)=>{d(e,t+.11,n,.28+o()*.12,.22,.28,r,0,(o()-.5)*.1)},_=(t,n)=>{let r=-.9-o()*.5,i=o(),a=e.theme;a===0?i<.35?h(t,n,r,16111480):i<.6?g(t,n,r,14826286):i<.85?g(t,n,r,9063213):d(t,n+.14,r,.26,.26,.26,16766282,0,(o()-.5)*.1):a===1?i<.35?g(t,n,r,4860954):i<.6?d(t,n+.12,r,.3,.22,.3,16769898,0,(o()-.5)*.08):i<.85?(d(t,n+.16,r,.24,.3,.24,14826286),d(t,n+.36,r,.14,.1,.14,4169274)):d(t,n+.13,r,.22,.24,.22,16777215,1):a===2?i<.4?d(t,n+.22,r,.18,.44,.18,12576511,1):i<.7?g(t,n,r,10467532):h(t,n,r,14675708):a===3?i<.28?(d(t-.08,n+.16,r,.18,.32,.18,8208271,0,(o()-.5)*.08),d(t+.08,n+.22,r,.16,.28,.16,10247088,0,(o()-.5)*.08),d(t,n+.42,r,.08,.08,.32,14271208)):i<.52?d(t,n+.11,r,.22+o()*.12,.18,.22,15286216,1):i<.76?(d(t,n+.16,r,.12,.32,.12,14271208),d(t,n+.38,r,.36,.16,.36,14248532,0,(o()-.5)*.08)):h(t,n,r,4169354):a===4?i<.55?(d(t,n+.15,r,.14,.3,.14,13616360),d(t,n+.38,r,.42,.18,.42,i<.3?8319231:13663999,1)):g(t,n,r,6974072):a===6?i<.4?d(t,n+.2,r,.2,.4,.2,16766282,1):i<.7?g(t,n,r,i<.55?16747224:8319231):h(t,n,r,11766015):a===5&&(i<.3?d(t,n+.11,r,.26+o()*.1,.2,.26,16747582,1):i<.6?g(t,n,r,4866116):i<.85?(d(t,n+.16,r,.1,.32,.1,4169274),d(t,n+.44,r,.2,.26,.2,14826286)):(d(t,n+.14,r,.22,.28,.22,16742958,1),d(t,n+.42,r,.13,.26,.13,16765502,1)))};for(let t=3;t<f-3;t+=3+(o()*5|0))_(t+o()-.5,e.groundY[t]);for(let e of u){let t;if(c.has(l(e.cx,e.cy+1,e.cz)))t=.8;else{let n=0;c.has(l(e.cx+1,e.cy+1,e.cz))&&n++,c.has(l(e.cx-1,e.cy+1,e.cz))&&n++,c.has(l(e.cx,e.cy+1,e.cz+1))&&n++,c.has(l(e.cx,e.cy+1,e.cz-1))&&n++,t=n?1-n*.06:1.05}this.blocks.getColorAt(e.n,this.color),this.blocks.setColorAt(e.n,this.color.multiplyScalar(t))}this.blocks.count=s,this.blocks.instanceMatrix.needsUpdate=!0,this.blocks.instanceColor&&(this.blocks.instanceColor.needsUpdate=!0),this.coinStates=e.coins.slice(0,cu).map(e=>({x:e.x,y:e.y,taken:!1})),this.coinMesh.count=this.coinStates.length,this.updateCoinMatrices();let v=e.groundY[Math.min(e.flagX|0,f-1)];this.flagGroup.position.set(e.flagX,v,0),this.flag.position.y=7.4;for(let e of this.clouds)e.position.set(Math.random()*60-10,8+Math.random()*4,-7-Math.random()*5);this.voxBuildId++,this.voxScenery.clear();for(let e of this.smokePuffs)e.visible=!1;for(let t=0;t<this.lavaStrips.length;t++){let n=this.lavaStrips[t],r=e.hazards&&e.hazards[t];if(r){let e=r.x1-r.x0+1;n.position.set((r.x0+r.x1)/2,r.y+.12,.15),n.scale.set(e+.7,.36,1.7),n.visible=!0}else n.visible=!1}if(e.theme===0){let t=this.voxBuildId,n=iu(f*149+2953),r=t=>e.groundY[Math.max(0,Math.min(f-1,Math.round(t)))]??0,i=2+(n()*2|0),a=[];for(let e=0;e<i;e++){let t=(e+.5+(n()-.5)*.5)/i,o=Math.max(8,Math.min(f-10,f*t)),s=e&1;a.push({x:o,y:r(o)-.15,z:s?-9.5-n()*1.5:-5-n()*1.5,s:(s?1.35:1)+n()*.25,rot:(n()-.5)*1.2})}Yl(`./models/spaghetti-pile.json`).then(e=>{if(t===this.voxBuildId)for(let t of a){let{group:n}=Zl(e);n.position.set(t.x,t.y,t.z),n.rotation.y=t.rot,n.scale.setScalar(t.s),this.voxScenery.add(n)}}).catch(e=>console.error(`spaghetti-pile scenery failed to load:`,e))}else if(e.theme===2){let e=this.voxBuildId,t=iu(f*137+5171),n=[{x:f*(.35+t()*.3),z:-14,s:1.9+t()*.4}];(t()<.5?[.15,.82]:[.12,.5,.9]).forEach((e,r)=>n.push({x:f*e+(t()-.5)*8,z:r&1?-10.5:-7.5,s:(r&1?1.2:.95)+t()*.25})),Yl(`./models/snowcone-mountain.json`).then(t=>{if(e===this.voxBuildId)for(let e of n){let{group:n}=Zl(t);n.position.set(e.x,-.6,e.z),n.scale.setScalar(e.s),this.voxScenery.add(n)}}).catch(e=>console.error(`snowcone-mountain scenery failed to load:`,e))}else if(e.theme===3){let t=this.voxBuildId,n=iu(f*173+9337),r=t=>e.groundY[Math.max(0,Math.min(f-1,Math.round(t)))]??0,i=this.cabbageLeafMats,a=3+(n()*3|0),o=[];for(let e=0;e<a;e++){let t=(e+1)/(a+1),s=Math.max(8,Math.min(f-10,f*t+(n()-.5)*14)),c=-4-n()*7;o.push({x:s,y:r(s)-.1,z:c,s:1.05+n()*.45+(c<-8?.18:0),rot:(n()-.5)*.5,mat:i[n()*i.length|0]})}Yl(`./models/giant-cabbage.json`).then(e=>{if(t===this.voxBuildId)for(let t of o){let{group:n}=Zl(e,{materials:{leaf:t.mat}});n.position.set(t.x,t.y,t.z),n.rotation.y=t.rot,n.scale.setScalar(t.s),this.voxScenery.add(n)}}).catch(e=>console.error(`giant-cabbage scenery failed to load:`,e));let s=n()<.55?2:1,c=[];for(let e=0;e<s;e++){let t=f*(.3+e*.34)+(n()-.5)*10;c.push({x:t,y:r(t)+.06,z:-2.8-n()*.6,s:.72+n()*.18,rot:n()<.5?0:Math.PI})}Yl(`./models/critter-caterpillar.json`).then(e=>{if(t===this.voxBuildId)for(let t of c){let{group:n}=Zl(e,{materials:{glow:this.swampMat}});n.position.set(t.x,t.y,t.z),n.rotation.y=t.rot,n.scale.setScalar(t.s),this.voxScenery.add(n)}}).catch(e=>console.error(`critter-caterpillar scenery failed to load:`,e))}else if(e.theme===5){let e=this.voxBuildId,t=iu(f*131+4177),n=[{x:f*(.35+t()*.3),z:-15,s:1.9+t()*.4}];(t()<.5?[.15,.8]:[.1,.55,.9]).forEach((e,r)=>n.push({x:f*e+(t()-.5)*10,z:r&1?-10.5:-8,s:(r&1?1.15:.9)+t()*.25}));let r=0;for(let e of n)for(let n=0;n<2&&r<this.smokePuffs.length;n++,r++){let n=this.smokePuffs[r];n.visible=!0,n.userData={anchor:{x:e.x+(t()-.5),y:5.8*e.s,z:e.z},phase:t(),speed:.1+t()*.06,size:.7+e.s*.4}}let i=[],a=3+(t()<.5?0:1);for(let e=0;e<a;e++)i.push({x:f*((e+.3+t()*.5)/a),z:-5.5-t()*2,s:.6+t()*.3,mat:this.monolithMats[e%this.monolithMats.length],flip:t()<.5});let o=[],s=2+(t()<.6?0:1);for(let e=0;e<s;e++)o.push({x:f*((e+.6+t()*.35)/s),z:-4.6-t()*1.2,s:.9+t()*.35,flip:t()<.5});let c=(t,n,r)=>{Yl(`./models/${t}.json`).then(i=>{if(e===this.voxBuildId)for(let e of n){let{group:n}=Zl(i,{materials:r(e)});n.position.set(e.x,t===`pepper-volcano`?-.6:-.25,e.z),n.scale.setScalar(e.s),e.flip&&(n.rotation.y=Math.PI),this.voxScenery.add(n)}}).catch(e=>console.error(`${t} scenery failed to load:`,e))};c(`pepper-volcano`,n,()=>({lava:this.lavaMat})),c(`pepper-monolith`,i,e=>({body:e.mat})),c(`ember-tree`,o,()=>({ember:this.lavaMat}))}}updateCoinMatrices(){for(let e=0;e<this.coinStates.length;e++){let t=this.coinStates[e];this.dummy.position.set(t.x,t.taken?-50:t.y+Math.sin(this.coinSpin*2+t.x)*.1,0),this.dummy.rotation.set(0,this.coinSpin+t.x*.5,0),this.dummy.scale.setScalar(t.taken?.001:1),this.dummy.updateMatrix(),this.coinMesh.setMatrixAt(e,this.dummy.matrix)}this.coinMesh.instanceMatrix.needsUpdate=!0}collectCoins(e,t){let n=[];for(let r of this.coinStates)r.taken||Math.abs(r.x-e)>.9||r.y>t-.4&&r.y<t+2.1&&(r.taken=!0,n.push(new L(r.x,r.y,0)));return n}update(e,t){this.coinSpin+=e*3,this.updateCoinMatrices(),this.sky.position.x=t;for(let e of this.parallax){let n=t*(1-e.factor);e.mesh.position.x=t*e.factor+Math.floor((n-45)/90)*90}for(let n of this.clouds)n.position.x+=n.userData.drift*e,n.position.x<t-45&&(n.position.x+=90),n.position.x>t+45&&(n.position.x-=90);this.lavaPulse+=e;let n=.45+Math.sin(this.lavaPulse*2.4)*.15;if(this.lavaMat.emissiveIntensity=n,this.lavaStripMat.emissiveIntensity=.55+Math.sin(this.lavaPulse*3.3)*.28,this.swampMat.emissiveIntensity=n,this.data&&this.data.theme===5)for(let e of this.smokePuffs){if(!e.visible)continue;let t=e.userData,n=(this.lavaPulse*t.speed+t.phase)%1;e.position.set(t.anchor.x+n*1.6,t.anchor.y+n*3.4,t.anchor.z),e.scale.setScalar(t.size*(.55+n*.9)),e.material.opacity=Math.sin(Math.PI*n)*.45}let r=this.lavaPulse*.34;for(let e of this.swampBubbles){if(!e.anchor)continue;let t=(r+e.phase)%1,n=t>.9,i=n?(t-.9)*10:0,a=Math.min(1,t*4,(1-t)*5),o=.16+t*.2,s=.5*a;n&&(o=.44*(1-i*.65),s=.32*(1-i)),e.mesh.position.set(e.anchor.x+e.ox+Math.sin(t*6.3+e.wobble)*.16,e.anchor.y+.08+t*e.rise,e.anchor.z+e.oz+Math.sin(t*5.1+e.wobble*.7)*.08),e.mesh.scale.setScalar(Math.max(.001,o)),e.mat.opacity=Math.max(0,s)}}groundTopAt(e){if(!this.data)return 0;let t=Math.max(0,Math.min(this.data.length-1,Math.round(e)));return this.data.groundY[t]}floorAt(e,t){let n=-1/0;for(let r of[-.25,.25]){let i=this.groundTopAt(e+r);i<=t+.3&&i>n&&(n=i)}if(this.data)for(let r of this.data.platforms)e>=r.x0-.8&&e<=r.x1+.8&&r.y<=t+.3&&r.y>n&&(n=r.y);for(let r of this.dynamicSolids)e>=r.x0-.3&&e<=r.x1+.3&&r.y<=t+.3&&r.y>n&&(n=r.y);return n===-1/0&&(n=this.groundTopAt(e)),n}sideBlockedAt(e,t,n){for(let r of this.dynamicSolids)if(e>=r.x0+.1&&e<=r.x1-.1&&t+.25<r.y&&n>r.y0+.05)return!0;return!1}},hu={words:{a:`w-a.mp3`,and:`w-and.mp3`,away:`w-away.mp3`,big:`w-big.mp3`,blue:`w-blue.mp3`,can:`w-can.mp3`,come:`w-come.mp3`,down:`w-down.mp3`,find:`w-find.mp3`,for:`w-for.mp3`,funny:`w-funny.mp3`,go:`w-go.mp3`,help:`w-help.mp3`,here:`w-here.mp3`,i:`w-i.mp3`,in:`w-in.mp3`,is:`w-is.mp3`,it:`w-it.mp3`,jump:`w-jump.mp3`,little:`w-little.mp3`,look:`w-look.mp3`,make:`w-make.mp3`,me:`w-me.mp3`,my:`w-my.mp3`,not:`w-not.mp3`,one:`w-one.mp3`,play:`w-play.mp3`,red:`w-red.mp3`,run:`w-run.mp3`,said:`w-said.mp3`,see:`w-see.mp3`,the:`w-the.mp3`,three:`w-three.mp3`,to:`w-to.mp3`,two:`w-two.mp3`,up:`w-up.mp3`,we:`w-we.mp3`,where:`w-where.mp3`,yellow:`w-yellow.mp3`,you:`w-you.mp3`,all:`w-all.mp3`,am:`w-am.mp3`,are:`w-are.mp3`,at:`w-at.mp3`,ate:`w-ate.mp3`,be:`w-be.mp3`,black:`w-black.mp3`,brown:`w-brown.mp3`,but:`w-but.mp3`,came:`w-came.mp3`,did:`w-did.mp3`,do:`w-do.mp3`,eat:`w-eat.mp3`,four:`w-four.mp3`,get:`w-get.mp3`,good:`w-good.mp3`,have:`w-have.mp3`,he:`w-he.mp3`,into:`w-into.mp3`,like:`w-like.mp3`,must:`w-must.mp3`,new:`w-new.mp3`,no:`w-no.mp3`,now:`w-now.mp3`,on:`w-on.mp3`,our:`w-our.mp3`,out:`w-out.mp3`,please:`w-please.mp3`,pretty:`w-pretty.mp3`,ran:`w-ran.mp3`,ride:`w-ride.mp3`,saw:`w-saw.mp3`,say:`w-say.mp3`,she:`w-she.mp3`,so:`w-so.mp3`,soon:`w-soon.mp3`,that:`w-that.mp3`,there:`w-there.mp3`,they:`w-they.mp3`,this:`w-this.mp3`,too:`w-too.mp3`,under:`w-under.mp3`,want:`w-want.mp3`,was:`w-was.mp3`,well:`w-well.mp3`,went:`w-went.mp3`,what:`w-what.mp3`,white:`w-white.mp3`,who:`w-who.mp3`,will:`w-will.mp3`,with:`w-with.mp3`,yes:`w-yes.mp3`,after:`w-after.mp3`,again:`w-again.mp3`,an:`w-an.mp3`,any:`w-any.mp3`,as:`w-as.mp3`,ask:`w-ask.mp3`,by:`w-by.mp3`,could:`w-could.mp3`,every:`w-every.mp3`,fly:`w-fly.mp3`,from:`w-from.mp3`,give:`w-give.mp3`,going:`w-going.mp3`,had:`w-had.mp3`,has:`w-has.mp3`,her:`w-her.mp3`,him:`w-him.mp3`,his:`w-his.mp3`,how:`w-how.mp3`,just:`w-just.mp3`,know:`w-know.mp3`,let:`w-let.mp3`,live:`w-live.mp3`,may:`w-may.mp3`,of:`w-of.mp3`,old:`w-old.mp3`,once:`w-once.mp3`,open:`w-open.mp3`,over:`w-over.mp3`,put:`w-put.mp3`,round:`w-round.mp3`,some:`w-some.mp3`,stop:`w-stop.mp3`,take:`w-take.mp3`,thank:`w-thank.mp3`,them:`w-them.mp3`,then:`w-then.mp3`,think:`w-think.mp3`,walk:`w-walk.mp3`,were:`w-were.mp3`,when:`w-when.mp3`,always:`w-always.mp3`,around:`w-around.mp3`,because:`w-because.mp3`,been:`w-been.mp3`,before:`w-before.mp3`,best:`w-best.mp3`,both:`w-both.mp3`,buy:`w-buy.mp3`,call:`w-call.mp3`,cold:`w-cold.mp3`,does:`w-does.mp3`,"don't":`w-dont.mp3`,fast:`w-fast.mp3`,first:`w-first.mp3`,five:`w-five.mp3`,found:`w-found.mp3`,gave:`w-gave.mp3`,goes:`w-goes.mp3`,green:`w-green.mp3`,its:`w-its.mp3`,made:`w-made.mp3`,many:`w-many.mp3`,off:`w-off.mp3`,or:`w-or.mp3`,pull:`w-pull.mp3`,read:`w-read.mp3`,right:`w-right.mp3`,sing:`w-sing.mp3`,sit:`w-sit.mp3`,sleep:`w-sleep.mp3`,tell:`w-tell.mp3`,their:`w-their.mp3`,these:`w-these.mp3`,those:`w-those.mp3`,upon:`w-upon.mp3`,us:`w-us.mp3`,use:`w-use.mp3`,very:`w-very.mp3`,wash:`w-wash.mp3`,which:`w-which.mp3`,why:`w-why.mp3`,wish:`w-wish.mp3`,work:`w-work.mp3`,would:`w-would.mp3`,write:`w-write.mp3`,your:`w-your.mp3`,about:`w-about.mp3`,better:`w-better.mp3`,bring:`w-bring.mp3`,carry:`w-carry.mp3`,clean:`w-clean.mp3`,cut:`w-cut.mp3`,done:`w-done.mp3`,draw:`w-draw.mp3`,drink:`w-drink.mp3`,eight:`w-eight.mp3`,fall:`w-fall.mp3`,far:`w-far.mp3`,full:`w-full.mp3`,got:`w-got.mp3`,grow:`w-grow.mp3`,hold:`w-hold.mp3`,hot:`w-hot.mp3`,hurt:`w-hurt.mp3`,if:`w-if.mp3`,keep:`w-keep.mp3`,kind:`w-kind.mp3`,laugh:`w-laugh.mp3`,light:`w-light.mp3`,long:`w-long.mp3`,much:`w-much.mp3`,myself:`w-myself.mp3`,never:`w-never.mp3`,only:`w-only.mp3`,own:`w-own.mp3`,pick:`w-pick.mp3`,seven:`w-seven.mp3`,shall:`w-shall.mp3`,show:`w-show.mp3`,six:`w-six.mp3`,small:`w-small.mp3`,start:`w-start.mp3`,ten:`w-ten.mp3`,today:`w-today.mp3`,together:`w-together.mp3`,try:`w-try.mp3`,warm:`w-warm.mp3`},phrases:{"find the word:":`p-find-the-word.mp3`,"bonk the block with the word:":`p-bonk-the-block-with-the-word.mp3`,"jump through the door with the word:":`p-jump-through-the-door-with-the-word.mp3`,"star time! jump under the star with the word:":`p-star-time-jump-under-the-star-with-the-word.mp3`,"almost! the word is:":`p-almost-the-word-is.mp3`,"nice try! the word is:":`p-nice-try-the-word-is.mp3`,"try again!":`p-try-again.mp3`,"great job!":`p-great-job.mp3`,"you got it!":`p-you-got-it.mp3`,"awesome!":`p-awesome.mp3`,"super reading!":`p-super-reading.mp3`,"way to go!":`p-way-to-go.mp3`,"you did it!":`p-you-did-it.mp3`,"fantastic!":`p-fantastic.mp3`,"that was great reading!":`p-that-was-great-reading.mp3`,"high five!":`p-high-five.mp3`,"woohoo! you read it!":`p-woohoo-you-read-it.mp3`,"wow! first try! super reading!":`p-wow-first-try-super-reading.mp3`,"first try! you are amazing!":`p-first-try-you-are-amazing.mp3`,"boom! first try!":`p-boom-first-try.mp3`,"first try! super star reader!":`p-first-try-super-star-reader.mp3`,"you read it right away! wow!":`p-you-read-it-right-away-wow.mp3`,"you are on fire! so many in a row!":`p-you-are-on-fire-so-many-in-a-row.mp3`,"wow! you keep getting them right!":`p-wow-you-keep-getting-them-right.mp3`,"what a streak! super reader!":`p-what-a-streak-super-reader.mp3`,"amazing! you got them all right in a row!":`p-amazing-you-got-them-all-right-in-a-row.mp3`,"unstoppable! what a reading streak!":`p-unstoppable-what-a-reading-streak.mp3`,"you got it! great trying!":`p-you-got-it-great-trying.mp3`,"yes! you figured it out!":`p-yes-you-figured-it-out.mp3`,"you did it! never give up!":`p-you-did-it-never-give-up.mp3`,"there it is! way to stick with it!":`p-there-it-is-way-to-stick-with-it.mp3`,"you got it this time! way to keep trying!":`p-you-got-it-this-time-way-to-keep-trying.mp3`,"bonus round! read the word out loud. hold the microphone and say it!":`p-bonus-round-read-the-word-out-loud-hold-the-microphone-and-say-it.mp3`,"bonus time! hold the microphone and say the word out loud!":`p-bonus-time-hold-the-microphone-and-say-the-word-out-loud.mp3`,"wow, a bonus round! hold the microphone and read the word!":`p-wow-a-bonus-round-hold-the-microphone-and-read-the-word.mp3`,"special bonus! read the word with your voice. hold the microphone!":`p-special-bonus-read-the-word-with-your-voice-hold-the-microphone.mp3`,"you found a secret key!":`p-you-found-a-secret-key.mp3`,"a secret key! amazing!":`p-a-secret-key-amazing.mp3`,"a secret path appeared!":`p-a-secret-path-appeared.mp3`,"look! a secret path!":`p-look-a-secret-path.mp3`,"wow! you opened a secret path!":`p-wow-you-opened-a-secret-path.mp3`,"level complete! amazing!":`p-level-complete-amazing.mp3`,"you finished the level! great reading!":`p-you-finished-the-level-great-reading.mp3`,"level done! you are awesome!":`p-level-done-you-are-awesome.mp3`,"hooray! level complete!":`p-hooray-level-complete.mp3`,"you did it! on to the next adventure!":`p-you-did-it-on-to-the-next-adventure.mp3`,"what a run! level complete!":`p-what-a-run-level-complete.mp3`,"three stars! perfect run!":`p-three-stars-perfect-run.mp3`,"wow! all three stars!":`p-wow-all-three-stars.mp3`,"three shiny stars! incredible reading!":`p-three-shiny-stars-incredible-reading.mp3`,"you unlocked a whole new world! let us go explore!":`p-you-unlocked-a-whole-new-world-let-us-go-explore.mp3`,"a brand new world is open! amazing reading!":`p-a-brand-new-world-is-open-amazing-reading.mp3`,"new world unlocked! you are a super reader!":`p-new-world-unlocked-you-are-a-super-reader.mp3`,"welcome home!":`p-welcome-home.mp3`,"home sweet home!":`p-home-sweet-home.mp3`,"here is your house! looking good!":`p-here-is-your-house-looking-good.mp3`,"welcome back to your house!":`p-welcome-back-to-your-house.mp3`,"it looks great in your house!":`p-it-looks-great-in-your-house.mp3`,"what a great pick!":`p-what-a-great-pick.mp3`,"your house is getting so cool!":`p-your-house-is-getting-so-cool.mp3`,"enjoy it!":`p-enjoy-it.mp3`,"great choice!":`p-great-choice.mp3`,"do you want it? tap yes or no!":`p-do-you-want-it-tap-yes-or-no.mp3`,"should we buy it? tap yes or no!":`p-should-we-buy-it-tap-yes-or-no.mp3`,"want to take it home? tap yes or no!":`p-want-to-take-it-home-tap-yes-or-no.mp3`,"okay! maybe next time!":`p-okay-maybe-next-time.mp3`,"no problem! it will be here later!":`p-no-problem-it-will-be-here-later.mp3`,"okay! keep saving your coins!":`p-okay-keep-saving-your-coins.mp3`,"you need more coins! play levels to earn more.":`p-you-need-more-coins-play-levels-to-earn-more.mp3`,"not enough coins yet! run some levels to earn more!":`p-not-enough-coins-yet-run-some-levels-to-earn-more.mp3`,"you need more gems! try the microphone bonus round to earn gems!":`p-you-need-more-gems-try-the-microphone-bonus-round-to-earn-gems.mp3`,"not enough gems yet! read out loud in the bonus round to earn gems!":`p-not-enough-gems-yet-read-out-loud-in-the-bonus-round-to-earn-gems.mp3`,"if you forget your word, tap the blue speaker button to hear it again!":`p-if-you-forget-your-word-tap-the-blue-speaker-button-to-hear-it-again.mp3`,"all levels unlocked!":`p-all-levels-unlocked.mp3`,"you beat the castle! time for your trophy!":`p-you-beat-the-castle-time-for-your-trophy.mp3`,"a new trophy for your shelf!":`p-a-new-trophy-for-your-shelf.mp3`,"beat the castle boss to win that prize!":`p-beat-the-castle-boss-to-win-that-prize.mp3`,"something new at your house!":`p-something-new-at-your-house.mp3`,"you did it! you beat every single world!":`p-you-did-it-you-beat-every-single-world.mp3`,"look! six shiny trophies for six worlds!":`p-look-six-shiny-trophies-for-six-worlds.mp3`,"you're a sight word hero!":`p-youre-a-sight-word-hero.mp3`,"hero!":`p-hero.mp3`,"the meatball monster wants to hear you read!":`p-the-meatball-monster-wants-to-hear-you-read.mp3`,"you did it! the meatball monster is amazed by your reading! here comes your crown!":`p-you-did-it-the-meatball-monster-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the meatball monster with your super reading! take your crown!":`p-wow-you-beat-the-meatball-monster-with-your-super-reading-take-your-crown.mp3`,"the meatball monster gives up! you are the reading champion! here comes your crown!":`p-the-meatball-monster-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"the syrup serpent wants to hear you read!":`p-the-syrup-serpent-wants-to-hear-you-read.mp3`,"you did it! the syrup serpent is amazed by your reading! here comes your crown!":`p-you-did-it-the-syrup-serpent-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the syrup serpent with your super reading! take your crown!":`p-wow-you-beat-the-syrup-serpent-with-your-super-reading-take-your-crown.mp3`,"the syrup serpent gives up! you are the reading champion! here comes your crown!":`p-the-syrup-serpent-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"the frost yeti wants to hear you read!":`p-the-frost-yeti-wants-to-hear-you-read.mp3`,"you did it! the frost yeti is amazed by your reading! here comes your crown!":`p-you-did-it-the-frost-yeti-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the frost yeti with your super reading! take your crown!":`p-wow-you-beat-the-frost-yeti-with-your-super-reading-take-your-crown.mp3`,"the frost yeti gives up! you are the reading champion! here comes your crown!":`p-the-frost-yeti-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"the cabbage king wants to hear you read!":`p-the-cabbage-king-wants-to-hear-you-read.mp3`,"you did it! the cabbage king is amazed by your reading! here comes your crown!":`p-you-did-it-the-cabbage-king-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the cabbage king with your super reading! take your crown!":`p-wow-you-beat-the-cabbage-king-with-your-super-reading-take-your-crown.mp3`,"the cabbage king gives up! you are the reading champion! here comes your crown!":`p-the-cabbage-king-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"the crystal golem wants to hear you read!":`p-the-crystal-golem-wants-to-hear-you-read.mp3`,"you did it! the crystal golem is amazed by your reading! here comes your crown!":`p-you-did-it-the-crystal-golem-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the crystal golem with your super reading! take your crown!":`p-wow-you-beat-the-crystal-golem-with-your-super-reading-take-your-crown.mp3`,"the crystal golem gives up! you are the reading champion! here comes your crown!":`p-the-crystal-golem-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"the pepper dragon wants to hear you read!":`p-the-pepper-dragon-wants-to-hear-you-read.mp3`,"you did it! the pepper dragon is amazed by your reading! here comes your crown!":`p-you-did-it-the-pepper-dragon-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the pepper dragon with your super reading! take your crown!":`p-wow-you-beat-the-pepper-dragon-with-your-super-reading-take-your-crown.mp3`,"the pepper dragon gives up! you are the reading champion! here comes your crown!":`p-the-pepper-dragon-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"you won the meatball monster statue! what a prize!":`p-you-won-the-meatball-monster-statue-what-a-prize.mp3`,"you won the syrup serpent statue! what a prize!":`p-you-won-the-syrup-serpent-statue-what-a-prize.mp3`,"you won the yeti snowman! what a prize!":`p-you-won-the-yeti-snowman-what-a-prize.mp3`,"you won the cabbage crown! what a prize!":`p-you-won-the-cabbage-crown-what-a-prize.mp3`,"you won the crystal lamp! what a prize!":`p-you-won-the-crystal-lamp-what-a-prize.mp3`,"you won the pepper kite! what a prize!":`p-you-won-the-pepper-kite-what-a-prize.mp3`,"cozy rug!":`p-cozy-rug.mp3`,"you got the cozy rug!":`p-you-got-the-cozy-rug.mp3`,"you already have the cozy rug!":`p-you-already-have-the-cozy-rug.mp3`,"comfy chair!":`p-comfy-chair.mp3`,"you got the comfy chair!":`p-you-got-the-comfy-chair.mp3`,"you already have the comfy chair!":`p-you-already-have-the-comfy-chair.mp3`,"table!":`p-table.mp3`,"you got the table!":`p-you-got-the-table.mp3`,"you already have the table!":`p-you-already-have-the-table.mp3`,"big kid bed!":`p-big-kid-bed.mp3`,"you got the big kid bed!":`p-you-got-the-big-kid-bed.mp3`,"you already have the big kid bed!":`p-you-already-have-the-big-kid-bed.mp3`,"lamp!":`p-lamp.mp3`,"you got the lamp!":`p-you-got-the-lamp.mp3`,"you already have the lamp!":`p-you-already-have-the-lamp.mp3`,"bookshelf!":`p-bookshelf.mp3`,"you got the bookshelf!":`p-you-got-the-bookshelf.mp3`,"you already have the bookshelf!":`p-you-already-have-the-bookshelf.mp3`,"toy box!":`p-toy-box.mp3`,"you got the toy box!":`p-you-got-the-toy-box.mp3`,"you already have the toy box!":`p-you-already-have-the-toy-box.mp3`,"flower bed!":`p-flower-bed.mp3`,"you got the flower bed!":`p-you-got-the-flower-bed.mp3`,"you already have the flower bed!":`p-you-already-have-the-flower-bed.mp3`,"mailbox!":`p-mailbox.mp3`,"you got the mailbox!":`p-you-got-the-mailbox.mp3`,"you already have the mailbox!":`p-you-already-have-the-mailbox.mp3`,"shady tree!":`p-shady-tree.mp3`,"you got the shady tree!":`p-you-got-the-shady-tree.mp3`,"you already have the shady tree!":`p-you-already-have-the-shady-tree.mp3`,"swing set!":`p-swing-set.mp3`,"you got the swing set!":`p-you-got-the-swing-set.mp3`,"you already have the swing set!":`p-you-already-have-the-swing-set.mp3`,"trampoline!":`p-trampoline.mp3`,"you got the trampoline!":`p-you-got-the-trampoline.mp3`,"you already have the trampoline!":`p-you-already-have-the-trampoline.mp3`,"pet cat!":`p-pet-cat.mp3`,"you got the pet cat!":`p-you-got-the-pet-cat.mp3`,"you already have the pet cat!":`p-you-already-have-the-pet-cat.mp3`,"pet dog!":`p-pet-dog.mp3`,"you got the pet dog!":`p-you-got-the-pet-dog.mp3`,"you already have the pet dog!":`p-you-already-have-the-pet-dog.mp3`,"fish tank!":`p-fish-tank.mp3`,"you got the fish tank!":`p-you-got-the-fish-tank.mp3`,"you already have the fish tank!":`p-you-already-have-the-fish-tank.mp3`,"telescope!":`p-telescope.mp3`,"you got the telescope!":`p-you-got-the-telescope.mp3`,"you already have the telescope!":`p-you-already-have-the-telescope.mp3`,"robot buddy!":`p-robot-buddy.mp3`,"you got the robot buddy!":`p-you-got-the-robot-buddy.mp3`,"you already have the robot buddy!":`p-you-already-have-the-robot-buddy.mp3`,"rocket ship!":`p-rocket-ship.mp3`,"you got the rocket ship!":`p-you-got-the-rocket-ship.mp3`,"you already have the rocket ship!":`p-you-already-have-the-rocket-ship.mp3`,"meatball monster statue!":`p-meatball-monster-statue.mp3`,"you got the meatball monster statue!":`p-you-got-the-meatball-monster-statue.mp3`,"you already have the meatball monster statue!":`p-you-already-have-the-meatball-monster-statue.mp3`,"syrup serpent statue!":`p-syrup-serpent-statue.mp3`,"you got the syrup serpent statue!":`p-you-got-the-syrup-serpent-statue.mp3`,"you already have the syrup serpent statue!":`p-you-already-have-the-syrup-serpent-statue.mp3`,"yeti snowman!":`p-yeti-snowman.mp3`,"you got the yeti snowman!":`p-you-got-the-yeti-snowman.mp3`,"you already have the yeti snowman!":`p-you-already-have-the-yeti-snowman.mp3`,"cabbage crown!":`p-cabbage-crown.mp3`,"you got the cabbage crown!":`p-you-got-the-cabbage-crown.mp3`,"you already have the cabbage crown!":`p-you-already-have-the-cabbage-crown.mp3`,"crystal lamp!":`p-crystal-lamp.mp3`,"you got the crystal lamp!":`p-you-got-the-crystal-lamp.mp3`,"you already have the crystal lamp!":`p-you-already-have-the-crystal-lamp.mp3`,"pepper kite!":`p-pepper-kite.mp3`,"you got the pepper kite!":`p-you-got-the-pepper-kite.mp3`,"you already have the pepper kite!":`p-you-already-have-the-pepper-kite.mp3`,"pasta plains 1":`p-pasta-plains-1.mp3`,"pasta plains 2":`p-pasta-plains-2.mp3`,"pasta plains 3":`p-pasta-plains-3.mp3`,"pasta plains 4":`p-pasta-plains-4.mp3`,"pasta plains 5":`p-pasta-plains-5.mp3`,"pasta plains 6":`p-pasta-plains-6.mp3`,"pasta plains 7":`p-pasta-plains-7.mp3`,"pasta plains secret":`p-pasta-plains-secret.mp3`,"pasta plains castle":`p-pasta-plains-castle.mp3`,"waffle desert 1":`p-waffle-desert-1.mp3`,"waffle desert 2":`p-waffle-desert-2.mp3`,"waffle desert 3":`p-waffle-desert-3.mp3`,"waffle desert 4":`p-waffle-desert-4.mp3`,"waffle desert 5":`p-waffle-desert-5.mp3`,"waffle desert 6":`p-waffle-desert-6.mp3`,"waffle desert 7":`p-waffle-desert-7.mp3`,"waffle desert secret":`p-waffle-desert-secret.mp3`,"waffle desert castle":`p-waffle-desert-castle.mp3`,"snowcones islands 1":`p-snowcones-islands-1.mp3`,"snowcones islands 2":`p-snowcones-islands-2.mp3`,"snowcones islands 3":`p-snowcones-islands-3.mp3`,"snowcones islands 4":`p-snowcones-islands-4.mp3`,"snowcones islands 5":`p-snowcones-islands-5.mp3`,"snowcones islands 6":`p-snowcones-islands-6.mp3`,"snowcones islands 7":`p-snowcones-islands-7.mp3`,"snowcones islands secret":`p-snowcones-islands-secret.mp3`,"snowcones islands castle":`p-snowcones-islands-castle.mp3`,"purple cabbage swamp 1":`p-purple-cabbage-swamp-1.mp3`,"purple cabbage swamp 2":`p-purple-cabbage-swamp-2.mp3`,"purple cabbage swamp 3":`p-purple-cabbage-swamp-3.mp3`,"purple cabbage swamp 4":`p-purple-cabbage-swamp-4.mp3`,"purple cabbage swamp secret":`p-purple-cabbage-swamp-secret.mp3`,"purple cabbage swamp castle":`p-purple-cabbage-swamp-castle.mp3`,"crystal caves 1":`p-crystal-caves-1.mp3`,"crystal caves 2":`p-crystal-caves-2.mp3`,"crystal caves 3":`p-crystal-caves-3.mp3`,"crystal caves secret":`p-crystal-caves-secret.mp3`,"crystal caves castle":`p-crystal-caves-castle.mp3`,"pepper volcano 1":`p-pepper-volcano-1.mp3`,"pepper volcano 2":`p-pepper-volcano-2.mp3`,"pepper volcano 3":`p-pepper-volcano-3.mp3`,"pepper volcano 4":`p-pepper-volcano-4.mp3`,"pepper volcano 5":`p-pepper-volcano-5.mp3`,"pepper volcano 6":`p-pepper-volcano-6.mp3`,"pepper volcano 7":`p-pepper-volcano-7.mp3`,"pepper volcano secret":`p-pepper-volcano-secret.mp3`,"pepper volcano castle":`p-pepper-volcano-castle.mp3`,"play!":`p-play.mp3`,settings:`p-settings.mp3`,close:`p-close.mp3`,sound:`p-sound.mp3`,music:`p-music.mp3`,"mic round":`p-mic-round.mp3`,back:`p-back.mp3`,"here we go!":`p-here-we-go.mp3`,pause:`p-pause.mp3`,resume:`p-resume.mp3`,map:`p-map.mp3`,"play again!":`p-play-again.mp3`,"next level!":`p-next-level.mp3`,skip:`p-skip.mp3`,"shop!":`p-shop.mp3`,"make your character!":`p-make-your-character.mp3`,"looking good!":`p-looking-good.mp3`,"let's go!":`p-lets-go.mp3`,"goodbye!":`p-goodbye.mp3`,"switch player!":`p-switch-player.mp3`,"who's playing?":`p-whos-playing.mp3`,"new player! what is your name?":`p-new-player-what-is-your-name.mp3`,"delete this player? all their progress will be lost.":`p-delete-this-player-all-their-progress-will-be-lost.mp3`,"player 1":`p-player-1.mp3`,"player 2":`p-player-2.mp3`,"player 3":`p-player-3.mp3`,"player 4":`p-player-4.mp3`,"player 5":`p-player-5.mp3`,"player 6":`p-player-6.mp3`}},gu={music:{title:`music-title.mp3`,map:`music-map.mp3`,level:`music-level.mp3`,boss:`music-boss.mp3`,finale:`music-finale.mp3`,pasta:`music-pasta.mp3`,waffle:`music-waffle.mp3`,snow:`music-snow.mp3`,swamp:`music-swamp.mp3`,caves:`music-caves.mp3`,house:`music-house.mp3`,victory:`music-victory.mp3`},sfx:{coin:`sfx-coin.mp3`,gem:`sfx-gem.mp3`,correct:`sfx-correct.mp3`,wrong:`sfx-wrong.mp3`,jump:`sfx-jump.mp3`,land:`sfx-land.mp3`,bonk:`sfx-bonk.mp3`,stomp:`sfx-stomp.mp3`,boing:`sfx-boing.mp3`,dooropen:`sfx-dooropen.mp3`,keyjingle:`sfx-keyjingle.mp3`,roar:`sfx-roar.mp3`,giggle:`sfx-giggle.mp3`,armorpop:`sfx-armorpop.mp3`,stargrab:`sfx-stargrab.mp3`,pop:`sfx-pop.mp3`,plink:`sfx-plink.mp3`,click:`sfx-click.mp3`,pause:`sfx-pause.mp3`,resume:`sfx-resume.mp3`,levelstart:`sfx-levelstart.mp3`,star:`sfx-star.mp3`}},_u={prePrimer:`a.and.away.big.blue.can.come.down.find.for.funny.go.help.here.I.in.is.it.jump.little.look.make.me.my.not.one.play.red.run.said.see.the.three.to.two.up.we.where.yellow.you`.split(`.`),primer:`all.am.are.at.ate.be.black.brown.but.came.did.do.eat.four.get.good.have.he.into.like.must.new.no.now.on.our.out.please.pretty.ran.ride.saw.say.she.so.soon.that.there.they.this.too.under.want.was.well.went.what.white.who.will.with.yes`.split(`.`),first:`after.again.an.any.as.ask.by.could.every.fly.from.give.going.had.has.her.him.his.how.just.know.let.live.may.of.old.once.open.over.put.round.some.stop.take.thank.them.then.think.walk.were.when`.split(`.`),second:`always.around.because.been.before.best.both.buy.call.cold.does.don't.fast.first.five.found.gave.goes.green.its.made.many.off.or.pull.read.right.sing.sit.sleep.tell.their.these.those.upon.us.use.very.wash.which.why.wish.work.would.write.your`.split(`.`),third:`about.better.bring.carry.clean.cut.done.draw.drink.eight.fall.far.full.got.grow.hold.hot.hurt.if.keep.kind.laugh.light.long.much.myself.never.only.own.pick.seven.shall.show.six.small.start.ten.today.together.try.warm`.split(`.`)};function vu(e,t=5,n=7){let r=Math.min(n,Math.max(1,Math.round(e.length/t))),i=[],a=0;for(let t=0;t<r;t++){let n=Math.ceil((e.length-a)/(r-t));i.push(e.slice(a,a+n)),a+=n}return i}var yu=Object.fromEntries(Object.entries(_u).map(([e,t])=>[e,vu(t)]));function bu(e,t,n){let r=Math.floor(e.length/n),i=e.length%n,a=t*r+Math.min(t,i),o=r+ +(t<i);return e.slice(a,a+o)}function xu(e){let t=yu[e.tier];return e.part?bu(t,e.part[0],e.part[1]):t}var Su=[{name:`Pasta Plains`,emoji:`🍝`,tier:`prePrimer`},{name:`Waffle Desert`,emoji:`🧇`,tier:`primer`},{name:`Snowcones Islands`,emoji:`🍧`,tier:`first`},{name:`Purple Cabbage Swamp`,emoji:`🥬`,tier:`second`,part:[0,2]},{name:`Crystal Caves`,emoji:`💎`,tier:`second`,part:[1,2]},{name:`Pepper Volcano`,emoji:`🌶️`,tier:`third`}].map(e=>({...e,levels:xu(e)}));function Cu(e,t){return Su[e].levels[t]}function wu(e){return Su[e].levels.flat()}function Tu(e){return!!e&&e.firstTryCorrect>=3}function Eu(e){return e+1<Su.length?wu(e+1):null}function Du(e){let t=e.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Ou(e,t,n={}){let{promotionPool:r=null,rng:i=Math.random}=n,a=Du(e),o=[],s=[],c=[];for(let e of a){let n=t?t(e):null;Tu(n)?c.push(e):n&&n.missed>0?o.push(e):s.push(e)}let l=(r||[]).filter(n=>!e.includes(n)&&!Tu(t?t(n):null)),u=[],d=[];for(let e of c)l.length&&i()>=.25?d.push(l.shift()):u.push(e);return o.concat(Du(s.concat(d)),u)}function ku(e,t){let n=new Set(e),r=e.slice();for(let e of t)n.has(e)||(n.add(e),r.push(e));return r}function Au(e,t){let n=wu(e),r=Eu(e);return r&&t.some(e=>!n.includes(e)&&r.includes(e))?n.concat(r):n}function ju(e,t,n){let r=new Set([e.toLowerCase()]),i=t.filter(e=>!r.has(e.toLowerCase()));if(i.length<2&&n)for(let e of n)!r.has(e.toLowerCase())&&!i.includes(e)&&i.push(e);return i=Du(i),i.sort((t,n)=>Math.abs(t.length-e.length)-Math.abs(n.length-e.length)),Du(i.slice(0,4)).slice(0,2)}function Mu(e,t){let n=wu(e),r=n.map(e=>{let n=t?t(e):null;return{w:e,ratio:n&&n.seen>0?n.firstTryCorrect/n.seen:2,r:Math.random()}});r.sort((e,t)=>e.ratio-t.ratio||e.r-t.r);let i=r.filter(e=>e.ratio<=1).slice(0,10).map(e=>e.w),a=Du(n.filter(e=>!i.includes(e)));for(;i.length<10&&a.length;)i.push(a.pop());return i}function Nu(e,t){return Mu(e,t).slice(0,5)}var Pu=[`Great job!`,`You got it!`,`Awesome!`,`Super reading!`],Fu=`Wow! First try! Super reading!`,Iu={correct:[...Pu,`Way to go!`,`You did it!`,`Fantastic!`,`That was great reading!`,`High five!`,`Woohoo! You read it!`],firstTry:[Fu,`First try! You are amazing!`,`Boom! First try!`,`First try! Super star reader!`,`You read it right away! Wow!`],streak:[`You are on fire! So many in a row!`,`Wow! You keep getting them right!`,`What a streak! Super reader!`,`Amazing! You got them all right in a row!`,`Unstoppable! What a reading streak!`],recover:[`You got it! Great trying!`,`Yes! You figured it out!`,`You did it! Never give up!`,`There it is! Way to stick with it!`,`You got it this time! Way to keep trying!`],bonus:[`Bonus round! Read the word out loud. Hold the microphone and say it!`,`Bonus time! Hold the microphone and say the word out loud!`,`Wow, a bonus round! Hold the microphone and read the word!`,`Special bonus! Read the word with your voice. Hold the microphone!`],secretKey:[`You found a secret key!`,`A secret key! Amazing!`],secretPath:[`A secret path appeared!`,`Look! A secret path!`,`Wow! You opened a secret path!`],levelComplete:[`Level complete! Amazing!`,`You finished the level! Great reading!`,`Level done! You are awesome!`,`Hooray! Level complete!`,`You did it! On to the next adventure!`,`What a run! Level complete!`],threeStars:[`Three stars! Perfect run!`,`Wow! All three stars!`,`Three shiny stars! Incredible reading!`],worldUnlock:[`You unlocked a whole new world! Let us go explore!`,`A brand new world is open! Amazing reading!`,`New world unlocked! You are a super reader!`],home:[`Welcome home!`,`Home sweet home!`,`Here is your house! Looking good!`,`Welcome back to your house!`],purchase:[`It looks great in your house!`,`What a great pick!`,`Your house is getting so cool!`,`Enjoy it!`,`Great choice!`],shopConfirm:[`Do you want it? Tap yes or no!`,`Should we buy it? Tap yes or no!`,`Want to take it home? Tap yes or no!`],shopNo:[`Okay! Maybe next time!`,`No problem! It will be here later!`,`Okay! Keep saving your coins!`],needCoins:[`You need more coins! Play levels to earn more.`,`Not enough coins yet! Run some levels to earn more!`],needGems:[`You need more gems! Try the microphone bonus round to earn gems!`,`Not enough gems yet! Read out loud in the bonus round to earn gems!`]},Lu=e=>[`You did it! The ${e} is amazed by your reading! Here comes your crown!`,`Wow! You beat the ${e} with your super reading! Take your crown!`,`The ${e} gives up! You are the reading champion! Here comes your crown!`],Ru=t({audioGraph:()=>Gu,isMuted:()=>Ju,loadAudioBuffer:()=>$u,setMuted:()=>qu,sfxArmorPop:()=>gd,sfxBoing:()=>ud,sfxBonk:()=>cd,sfxClick:()=>_d,sfxCoin:()=>td,sfxCorrect:()=>nd,sfxDoorOpen:()=>dd,sfxFireworks:()=>od,sfxGem:()=>yd,sfxGiggle:()=>md,sfxJump:()=>id,sfxKeyJingle:()=>fd,sfxLand:()=>vd,sfxLevelStart:()=>bd,sfxPause:()=>xd,sfxPlink:()=>sd,sfxPop:()=>ad,sfxResume:()=>Sd,sfxRoar:()=>pd,sfxStar:()=>Cd,sfxStarGrab:()=>wd,sfxStomp:()=>ld,sfxTaunt:()=>hd,sfxWrong:()=>rd,speak:()=>Yd,speakLine:()=>Jd,speakVariant:()=>qd,unlockAudio:()=>Ku}),zu=null,Bu=null,Vu=!1,Hu=!1,Uu=null;function Wu(){if(!zu){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;zu=new e,Bu=zu.createGain(),Bu.gain.value=.5,Bu.connect(zu.destination)}return zu}function Gu(){let e=Wu();return e?{ctx:e,master:Bu}:null}function Ku(){if(Hu)return;Hu=!0;let e=Wu();if(e&&e.state===`suspended`&&e.resume(),e)for(let e of Object.values(gu.sfx))$u(`audio/${e}`).catch(()=>{});try{if(`speechSynthesis`in window){let e=new SpeechSynthesisUtterance(` `);e.volume=0,speechSynthesis.speak(e)}}catch{}}function qu(e){Vu=e,Bu&&(Bu.gain.value=e?0:.5),e&&Ud()}function Ju(){return Vu}function Yu({type:e=`sine`,from:t=440,to:n=null,dur:r=.15,at:i=0,vol:a=.5}){let o=Wu();if(!o||Vu)return;let s=o.currentTime+i,c=o.createOscillator(),l=o.createGain();c.type=e,c.frequency.setValueAtTime(t,s),n!==null&&c.frequency.exponentialRampToValueAtTime(Math.max(1,n),s+r),l.gain.setValueAtTime(a,s),l.gain.exponentialRampToValueAtTime(.001,s+r),c.connect(l).connect(Bu),c.start(s),c.stop(s+r+.02)}var Xu=null;function Zu(e){if(!Xu){Xu=e.createBuffer(1,e.sampleRate*.5,e.sampleRate);let t=Xu.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}return Xu}var Qu=new Map;function $u(e){if(!Qu.has(e)){let t=fetch(e).then(e=>{if(!e.ok)throw Error(`audio fetch ${e.status}`);return e.arrayBuffer()}).then(e=>zu.decodeAudioData(e)).then(Vd);t.catch(()=>Qu.delete(e)),Qu.set(e,t)}return Qu.get(e)}function ed(e,{rate:t=1,vol:n=1,at:r=0}={}){let i=gu.sfx[e];if(!i)return!1;let a=Wu();return a?(Vu||$u(`audio/${i}`).then(({buf:e,offset:i,dur:o})=>{let s=a.currentTime+r,c=a.createBufferSource();c.buffer=e,c.playbackRate.value=t;let l=a.createGain();l.gain.value=n,c.connect(l).connect(Bu),c.start(s,i,o/t+.05)},()=>{delete gu.sfx[e]}),!0):!1}function td(){ed(`coin`)||(Yu({type:`square`,from:988,dur:.07,vol:.25}),Yu({type:`square`,from:1319,dur:.18,at:.07,vol:.25}))}function nd(){ed(`correct`)||[523.25,659.25,783.99,1046.5].forEach((e,t)=>{Yu({type:`triangle`,from:e,dur:.22,at:t*.09,vol:.4}),Yu({type:`sine`,from:e*2,dur:.18,at:t*.09,vol:.12})})}function rd(){ed(`wrong`)||Yu({type:`sine`,from:220,to:110,dur:.3,vol:.4})}function id(){if(ed(`jump`,{rate:.95+Math.random()*.1}))return;let e=Wu();if(!e||Vu)return;let t=e.currentTime,n=e.createBufferSource();n.buffer=Zu(e);let r=e.createBiquadFilter();r.type=`bandpass`,r.Q.value=4,r.frequency.setValueAtTime(400,t),r.frequency.exponentialRampToValueAtTime(2400,t+.25);let i=e.createGain();i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.001,t+.28),n.connect(r).connect(i).connect(Bu),n.start(t),n.stop(t+.3)}function ad(){ed(`pop`,{rate:.85+Math.random()*.3})||Yu({type:`square`,from:200+Math.random()*500,to:60,dur:.12,vol:.3})}function od(){for(let e=0;e<6;e++)setTimeout(ad,e*180+Math.random()*100)}function sd(e=0){if(ed(`plink`,{rate:2**(e%16/12)}))return;let t=587*2**(e%16/12);Yu({type:`triangle`,from:t,dur:.12,vol:.25}),Yu({type:`sine`,from:t*2,dur:.09,vol:.08})}function cd(){ed(`bonk`)||Yu({type:`square`,from:150,to:70,dur:.14,vol:.35})}function ld(){ed(`stomp`)||(Yu({type:`square`,from:320,to:60,dur:.16,vol:.35}),Yu({type:`sine`,from:90,dur:.1,at:.02,vol:.3}))}function ud(){ed(`boing`)||(Yu({type:`sine`,from:180,to:720,dur:.28,vol:.35}),Yu({type:`sine`,from:195,to:750,dur:.28,at:.03,vol:.18}))}function dd(){ed(`dooropen`)||(Yu({type:`sawtooth`,from:110,to:330,dur:.35,vol:.16}),Yu({type:`triangle`,from:523,dur:.18,at:.28,vol:.3}),Yu({type:`triangle`,from:784,dur:.24,at:.38,vol:.3}))}function fd(){ed(`keyjingle`)||[1047,1319,1568,2093,1568,2093].forEach((e,t)=>{Yu({type:`triangle`,from:e,dur:.14,at:t*.08,vol:.3})})}function pd(){ed(`roar`)||(Yu({type:`sawtooth`,from:300,to:90,dur:.7,vol:.3}),Yu({type:`square`,from:150,to:60,dur:.5,at:.15,vol:.18}),Yu({type:`sawtooth`,from:500,to:200,dur:.4,at:.05,vol:.12}))}function md(){ed(`giggle`)||[880,1100,880,1320].forEach((e,t)=>{Yu({type:`triangle`,from:e,to:e*1.2,dur:.09,at:t*.09,vol:.22})})}function hd(){Yu({type:`triangle`,from:400,to:300,dur:.16,vol:.22}),Yu({type:`triangle`,from:300,to:210,dur:.22,at:.15,vol:.2}),Yu({type:`sine`,from:200,to:140,dur:.2,at:.15,vol:.12})}function gd(){ed(`armorpop`)||(Yu({type:`square`,from:180,to:60,dur:.12,vol:.35}),Yu({type:`triangle`,from:784,dur:.15,at:.08,vol:.3}),Yu({type:`triangle`,from:1047,dur:.2,at:.16,vol:.3}))}function _d(){ed(`click`,{vol:.5})||Yu({type:`triangle`,from:660,to:880,dur:.06,vol:.12})}function vd(){ed(`land`)||Yu({type:`sine`,from:140,to:70,dur:.12,vol:.25})}function yd(){ed(`gem`)||(Yu({type:`sine`,from:1319,dur:.1,vol:.25}),Yu({type:`sine`,from:1760,dur:.12,at:.08,vol:.25}),Yu({type:`sine`,from:2637,dur:.22,at:.16,vol:.2}))}function bd(){ed(`levelstart`)||(Yu({type:`square`,from:392,dur:.12,vol:.2}),Yu({type:`square`,from:523,dur:.12,at:.16,vol:.2}),Yu({type:`square`,from:659,to:784,dur:.3,at:.32,vol:.25}))}function xd(){ed(`pause`)||Yu({type:`triangle`,from:587,to:392,dur:.16,vol:.25})}function Sd(){ed(`resume`)||Yu({type:`triangle`,from:392,to:587,dur:.16,vol:.25})}function Cd(e=0){if(ed(`star`,{rate:[1,1.26,1.68][e%3]}))return;let t=[784,988,1319][e%3];Yu({type:`triangle`,from:t,dur:.3,vol:.35}),Yu({type:`sine`,from:t*2,dur:.24,at:.03,vol:.15})}function wd(){ed(`stargrab`)||(Yu({type:`sine`,from:600,to:1800,dur:.3,vol:.35}),Yu({type:`triangle`,from:1200,dur:.2,at:.14,vol:.25}))}var Td=.12,Ed=1.6,Dd=.2,Od=.35,kd=new Map,Ad=0,jd=[],Md=null,Nd=!1,Pd=e=>e.trim().toLowerCase().replace(/\s+/g,` `);function Fd(e,t=``){try{window.dispatchEvent(new CustomEvent(`wr-speech`,{detail:{speaking:e,text:t}}))}catch{}}var Id=[];function Ld(e){try{window.dispatchEvent(new CustomEvent(`wr-word`,{detail:{active:e}}))}catch{}}function Rd(e,t,n){let r=e.currentTime;Id.push(setTimeout(()=>Ld(!0),Math.max(0,(t-r-.08)*1e3)),setTimeout(()=>Ld(!1),(t-r+n+.1)*1e3))}function zd(){for(let e of Id)clearTimeout(e);Id=[],Ld(!1)}function Bd(e){let t=Pd(e);if(hu.phrases[t])return[{file:hu.phrases[t],word:!1}];let n=t.indexOf(`: `);if(n===-1)return hu.words[t]?[{file:hu.words[t],word:!0}]:null;let r=hu.phrases[t.slice(0,n+1)];if(!r)return null;let i=t.slice(n+2),a=null;i.endsWith(` try again!`)&&(a=hu.phrases[`try again!`],i=i.slice(0,-11));let o=hu.words[i.replace(/[.!?]+$/,``).trim()];if(!o)return null;let s=[{file:r,word:!1},{file:o,word:!0}];return a&&s.push({file:a,word:!1}),s}function Vd(e){let t=e.getChannelData(0),n=.004,r=0,i=t.length-1;for(;r<i&&Math.abs(t[r])<n;)r++;for(;i>r&&Math.abs(t[i])<n;)i--;let a=Math.round(e.sampleRate*.04);return r=Math.max(0,r-a),i=Math.min(t.length-1,i+a),{buf:e,offset:r/e.sampleRate,dur:(i-r)/e.sampleRate}}function Hd(e){if(!kd.has(e)){let t=fetch(`tts/${e}`).then(e=>{if(!e.ok)throw Error(`tts fetch ${e.status}`);return e.arrayBuffer()}).then(e=>zu.decodeAudioData(e)).then(Vd);t.catch(()=>kd.delete(e)),kd.set(e,t)}return kd.get(e)}function Ud(){Ad++;for(let e of jd)try{e.onended=null,e.stop()}catch{}if(jd=[],zd(),`speechSynthesis`in window&&speechSynthesis.cancel(),Md){Nd=!0;try{Md()}finally{Nd=!1}}}function Wd(e,t,n){if(!(`speechSynthesis`in window)){setTimeout(n,100);return}try{let r=new SpeechSynthesisUtterance(e);Uu&&(r.voice=Uu),r.lang=`en-US`,r.rate=t,r.pitch=1.05,r.onend=n,r.onerror=n,setTimeout(n,1e3+e.length*130),speechSynthesis.speak(r)}catch{n()}}function Gd(){if(!(`speechSynthesis`in window))return;let e=speechSynthesis.getVoices();e.length&&(Uu=e.find(e=>e.lang===`en-US`&&/samantha|alex|google us/i.test(e.name))||e.find(e=>e.lang===`en-US`)||e.find(e=>e.lang&&e.lang.startsWith(`en`))||null)}typeof window<`u`&&`speechSynthesis`in window&&(Gd(),speechSynthesis.addEventListener(`voiceschanged`,Gd));var Kd=new Map;function qd(e,t,n={}){let r=t;if(r.length>1){let t=Kd.get(e);t&&(r=r.filter(e=>e!==t))}let i=r[Math.random()*r.length|0];return Kd.set(e,i),Yd(i,n),i}function Jd(e,t={}){return qd(e,Iu[e],t)}function Yd(e,{rate:t=1,onend:n=null,echoWord:r=!1}={}){if(Nd)return;if(Ud(),Vu){n&&setTimeout(n,100);return}let i=!1,a=()=>{i||(i=!0,Md===a&&(Md=null),Fd(!1),n&&n())};Md=a,Fd(!0,e);let o=Bd(e),s=o&&Wu();if(!s){Wd(e,t,a);return}let c=Ad;Promise.all(o.map(e=>Hd(e.file))).then(e=>{if(c!==Ad)return;let t=s.currentTime+.03;jd=[],e.forEach(({buf:e,offset:n,dur:i},a)=>{let c=o[a].word&&r?2:1;for(let r=0;r<c;r++){let c=s.createBufferSource();if(c.buffer=e,o[a].word){let e=s.createGain();e.gain.value=Ed,c.connect(e).connect(Bu),t+=r===0?Dd:Od,Rd(s,t,i),c.start(t,n,i),t+=i+Dd}else c.connect(Bu),c.start(t,n,i),t+=i;t+=Td,jd.push(c)}}),jd[jd.length-1].onended=a,setTimeout(a,(t-s.currentTime)*1e3+500)},()=>{c===Ad&&Wd(e,t,a)})}var Xd=t({MAX_PROFILES:()=>6,activeProfileId:()=>yf,activeProfileName:()=>bf,addCoins:()=>Pf,addGems:()=>Ff,addPlaySeconds:()=>Lf,beatBoss:()=>rp,buyHouseItem:()=>Xf,clampFrontier:()=>ap,clearHouseNews:()=>ep,completeLevel:()=>ip,createProfile:()=>Sf,deleteProfile:()=>wf,devUnlockAll:()=>up,foundKey:()=>Kf,get:()=>Of,getSecretStars:()=>Uf,getStars:()=>Vf,grantHouseItem:()=>Zf,hasHouseNews:()=>tp,hasKey:()=>Gf,houseItemCount:()=>Qf,isBossBeaten:()=>np,isGameCompleted:()=>zf,isLevelUnlocked:()=>op,isMastered:()=>Nf,isSecretUnlocked:()=>qf,isWorldUnlocked:()=>sp,keyAnchorLevel:()=>Jf,listProfiles:()=>vf,load:()=>Ef,markGameCompleted:()=>Bf,markHouseNews:()=>$f,markRepeatTipSeen:()=>fp,ownsHouseItem:()=>Yf,peekProfile:()=>xf,recordWordMiss:()=>Mf,recordWordResult:()=>jf,renameProfile:()=>Tf,reset:()=>cp,save:()=>Df,selectProfile:()=>Cf,setCharacterPart:()=>dp,setDevUnlocked:()=>lp,setHouseMusic:()=>gp,setMic:()=>hp,setMusic:()=>mp,setSecretStars:()=>Wf,setSound:()=>pp,setStars:()=>Hf,totals:()=>Rf,wordStats:()=>kf}),Zd=`superKidsSightWords.v2`,Qd=`superKidsSightWords.v1`,$d=[`wordRunner.v3`,`wordRunner.v2`,`wordRunner.v1`],ef=`superKidsSightWords.profiles.v1`,tf=()=>({coins:0,gems:0,sound:!0,music:!0,mic:!0,devUnlocked:!1,words:{},stars:{},unlocked:{world:0,level:0},keys:{},secretUnlocked:{},secretStars:{},character:{skin:0,hair:0,style:0,shirt:0,pants:0,outfit:0},bossBeaten:{},house:{owned:{},unseen:{},seenCoins:0,seenGems:0},seenRepeatTip:!1,houseMusic:`house`,stats:{playSeconds:0,wordsRead:0,coinsEarned:0},gameCompleted:!1});function nf(e){return e}var W=nf(tf()),rf=null,af=e=>`${Zd}:${e}`,of=e=>`${Qd}:${e}`,sf=()=>Math.random().toString(36).slice(2,8),cf=e=>e>=3?e+1:e;function lf(e){let t={};if(!e||typeof e!=`object`)return t;for(let[n,r]of Object.entries(e)){let e=n.split(`-`),i=Number(e[0]);e.length>1&&Number.isInteger(i)&&i>=0?t[[cf(i),...e.slice(1)].join(`-`)]=r:t[n]=r}return t}function uf(e){let t=Array.isArray(e)?[]:{};if(!e||typeof e!=`object`)return t;for(let[n,r]of Object.entries(e)){let e=Number(n),i=Number.isInteger(e)&&e>=0&&String(e)===n?cf(e):n;t[i]=r}return t}function df(e){let t={...tf(),...e&&typeof e==`object`?e:{}};t.stars=lf(t.stars),t.keys=lf(t.keys),t.secretStars=uf(t.secretStars),t.secretUnlocked=uf(t.secretUnlocked),t.bossBeaten=uf(t.bossBeaten);let n={...tf().unlocked,...t.unlocked||{}},r=Number(n.world);return n.world=Number.isFinite(r)?cf(r):0,t.unlocked=n,t}function ff(e){try{let t=JSON.parse(e);return t&&typeof t==`object`?t:null}catch{return null}}function pf(e,t={}){let n=ff(e);if(!n)return null;let r={...tf(),...n};if(t.grandfatherBosses){r.unlocked={...tf().unlocked,...r.unlocked||{}},(!r.bossBeaten||typeof r.bossBeaten!=`object`)&&(r.bossBeaten={});let e=Number(r.unlocked.world)||0;for(let t=0;t<e;t++)r.bossBeaten[t]=!0}return df(r)}function mf(e){let t=af(e),n=of(e);try{if(localStorage.getItem(t)){localStorage.removeItem(n);return}let e=localStorage.getItem(n);if(e===null)return;let r=pf(e);r&&localStorage.setItem(t,JSON.stringify(r)),localStorage.removeItem(n)}catch{}}function hf(){for(let e of rf.list)mf(e.id)}function gf(){try{localStorage.setItem(ef,JSON.stringify(rf))}catch{}}function _f(){if(rf)return;try{let e=localStorage.getItem(ef);if(e){let t=JSON.parse(e);if(t&&Array.isArray(t.list)&&t.list.length){rf=t,rf.list.some(e=>e.id===rf.active)||(rf.active=rf.list[0].id,gf()),hf();return}}}catch{}let e=sf();rf={active:e,list:[{id:e,name:``}]};try{let t=localStorage.getItem(Zd);if(!t){let e=localStorage.getItem(Qd);if(e){let n=pf(e);n&&(t=JSON.stringify(n))}}if(!t){let e=$d.map(e=>localStorage.getItem(e)).find(Boolean);if(e){let n=pf(e,{grandfatherBosses:!0});n&&(t=JSON.stringify(n))}}t&&localStorage.setItem(af(e),t);for(let e of[Zd,Qd,...$d])localStorage.removeItem(e)}catch{}gf()}function vf(){return _f(),rf.list.map(e=>({...e}))}function yf(){return _f(),rf.active}function bf(){_f();let e=rf.list.find(e=>e.id===rf.active);return e&&e.name||``}function xf(e){try{let t=localStorage.getItem(af(e));if(t)return{...tf(),...JSON.parse(t)}}catch{}return tf()}function Sf(e=``){if(_f(),rf.list.length>=6)return null;let t=sf();return rf.list.push({id:t,name:e||``}),rf.active=t,W=nf(tf()),Df(),gf(),t}function Cf(e){return _f(),rf.list.some(t=>t.id===e)?(rf.active=e,gf(),Ef()):W}function wf(e){if(_f(),!rf.list.some(t=>t.id===e))return;try{localStorage.removeItem(af(e)),localStorage.removeItem(of(e))}catch{}if(rf.list.length<=1){W=nf(tf()),Df();return}let t=rf.active===e;rf.list=rf.list.filter(t=>t.id!==e),t&&(rf.active=rf.list[0].id),gf(),t&&Ef()}function Tf(e,t){_f();let n=rf.list.find(t=>t.id===e);n&&(n.name=t||``,gf())}function Ef(){_f();try{let e=localStorage.getItem(af(rf.active));W=e?{...tf(),...JSON.parse(e)}:tf()}catch{W=tf()}return nf(W)}function Df(){_f();try{localStorage.setItem(af(rf.active),JSON.stringify(W))}catch{}}function Of(){return W}function kf(e){return W.words[e.toLowerCase()]||null}function Af(e){let t=e.toLowerCase();return W.words[t]||(W.words[t]={seen:0,correct:0,firstTryCorrect:0,missed:0}),W.words[t]}function jf(e,t){let n=Af(e);n.seen++,n.correct++,t?n.firstTryCorrect++:n.missed++,If().wordsRead++,Df()}function Mf(e){let t=Af(e);t.seen++,t.missed++,Df()}function Nf(e){return Tu(kf(e))}function Pf(e){return W.coins=Math.max(0,W.coins+e),e>0&&(If().coinsEarned+=e),Df(),W.coins}function Ff(e){return W.gems=Math.max(0,W.gems+e),Df(),W.gems}function If(){return W.stats={...tf().stats,...W.stats||{}},W.stats}function Lf(e){If().playSeconds+=e,Df()}function Rf(){let e=If(),t=0,n=0;for(let e of Object.values(W.stars))e>0&&n++,t+=e;let r=0;for(let e of Object.values(W.secretStars))e>0&&(r++,t+=e);let i=0,a=0,o=0;for(let e of Object.values(W.words))i+=e.correct,a+=e.firstTryCorrect,o+=e.seen;return{levelsCompleted:n,totalStars:t,secretsFound:r,wordsRead:Math.max(e.wordsRead,i),accuracy:o?Math.round(a/o*100):100,coinsEarned:Math.max(e.coinsEarned,W.coins),playSeconds:e.playSeconds}}function zf(){return!!W.gameCompleted}function Bf(){W.gameCompleted=!0,Df()}function Vf(e,t){return W.stars[`${e}-${t}`]||0}function Hf(e,t,n){let r=`${e}-${t}`;W.stars[r]=Math.max(W.stars[r]||0,n),Df()}function Uf(e){return W.secretStars[e]||0}function Wf(e,t){W.secretStars[e]=Math.max(W.secretStars[e]||0,t),Df()}function Gf(e,t){return!!W.keys[`${e}-${t}`]}function Kf(e,t){W.keys[`${e}-${t}`]=!0,W.secretUnlocked[e]=!0,Df()}function qf(e){return W.devUnlocked||!!W.secretUnlocked[e]}function Jf(e){for(let t of Object.keys(W.keys)){let[n,r]=t.split(`-`).map(Number);if(n===e)return r}return null}function Yf(e){return!!(W.house&&W.house.owned&&W.house.owned[e])}function Xf(e,t,n){if(Yf(e))return!1;if(n===`gems`){if(W.gems<t)return!1;W.gems-=t}else{if(W.coins<t)return!1;W.coins-=t}return W.house||={owned:{}},W.house.owned[e]=!0,Df(),!0}function Zf(e){W.house||={owned:{}},W.house.owned[e]=!0,Df()}function Qf(){return W.house?Object.keys(W.house.owned||{}).length:0}function $f(e){W.house||={owned:{}},W.house.unseen||(W.house.unseen={}),W.house.unseen[e]=!0,Df()}function ep(){W.house||={owned:{}},W.house.unseen={},W.house.seenCoins=W.coins,W.house.seenGems=W.gems,Df()}function tp(e=[]){let t=W.house||{};if(t.unseen&&Object.keys(t.unseen).length)return!0;let n=t.seenCoins||0,r=t.seenGems||0;return e.some(e=>{if(e.earned!==void 0||Yf(e.id))return!1;let t=e.currency===`gems`?W.gems:W.coins,i=e.currency===`gems`?r:n;return t>=e.cost&&i<e.cost})}function np(e){return!!W.bossBeaten[e]}function rp(e){W.bossBeaten[e]=!0,Df()}function ip(e,t,n){let r=W.unlocked;e===r.world&&t===r.level&&(t+1<=n[e]?r.level++:e+1<n.length&&(r.world++,r.level=0)),Df()}function ap(e){let t=W.unlocked;t.world>=e.length?(t.world=e.length-1,t.level=e[t.world],Df()):t.level>e[t.world]&&(t.level=e[t.world],Df())}function op(e,t){if(W.devUnlocked)return!0;let n=W.unlocked;return e<n.world||e===n.world&&t<=n.level}function sp(e){return W.devUnlocked||e<=W.unlocked.world}function cp(){_f();try{for(let e of[af(rf.active),of(rf.active),Zd,Qd,...$d])localStorage.removeItem(e)}catch{}W=tf()}function lp(e){W.devUnlocked=!!e,Df()}function up(e=6){W.devUnlocked=!0;for(let t=0;t<e;t++)W.bossBeaten[t]=!0;Df()}function dp(e,t){W.character={...tf().character,...W.character,[e]:t},Df()}function fp(){W.seenRepeatTip=!0,Df()}function pp(e){W.sound=e,Df()}function mp(e){W.music=e,Df()}function hp(e){W.mic=e,Df()}function gp(e){W.houseMusic=e,Df()}var _p={skin:{label:`Skin`,colors:[16764830,15841673,13010498,9262372,5912613],names:[`Peach`,`Tan`,`Golden`,`Brown`,`Deep brown`]},hair:{label:`Hair`,colors:[5913886,1776411,15649116,13193006,3829720,14178992],names:[`Brown`,`Black`,`Blonde`,`Red`,`Blue`,`Pink`]},shirt:{label:`Shirt`,colors:[2718207,15022389,4431943,16498733,9315498,16740419],names:[`Blue`,`Red`,`Green`,`Yellow`,`Purple`,`Orange`]},pants:{label:`Pants`,colors:[3622735,1988272,7162945,3046706,12720219],names:[`Gray`,`Blue`,`Brown`,`Green`,`Pink`]}},vp={label:`Hair style`,names:[`Short`,`Spiky`,`Long`,`Buzz`,`Bald`]},yp={label:`Outfit`,names:[`Shirt and pants`,`Dress`,`Overalls`]};function bp(e){let t=t=>{let n=_p[t];return n.colors[e[t]]??n.colors[0]};return{skin:t(`skin`),hair:t(`hair`),shirt:t(`shirt`),pants:t(`pants`),style:vp.names[e.style]?e.style:0,outfit:yp.names[e.outfit]?e.outfit:0}}var xp=1.7,Sp=.7,Cp=-24,wp=-15,Tp=10.2,Ep=1,Dp=9.4,Op=.12,kp=.15,Ap=e=>`#${e.toString(16).padStart(6,`0`)}`;function jp(e,t,n,r=!1){let i=document.createElement(`canvas`);i.width=64,i.height=64;let o=i.getContext(`2d`);o.fillStyle=Ap(e),o.fillRect(0,0,64,64),n&&(o.fillStyle=Ap(t),o.fillRect(0,0,64,14)),o.fillStyle=`#222`,r?(o.fillRect(15,30,10,3),o.fillRect(39,30,10,3)):(o.fillRect(16,26,8,8),o.fillRect(40,26,8,8)),o.fillStyle=`rgba(255, 110, 110, 0.4)`,o.fillRect(9,38,10,5),o.fillRect(45,38,10,5),o.strokeStyle=`#a34d2a`,o.lineWidth=4,o.beginPath(),o.arc(32,42,10,.2*Math.PI,.8*Math.PI),o.stroke();let s=new Gi(i);return s.magFilter=a,s.colorSpace=We,s}var Mp=e=>e<=2;function Np(e,t){let n=new z;if(e>=3)return n;let r=Ul,i=new V(r,t);if(i.scale.set(.53,.34,.56),i.position.set(-.025,1.44,0),n.add(i),e===1)for(let e=-1;e<=1;e++){let i=new V(r,t);i.scale.set(.12,.16,.12),i.position.set(e*.05,1.68,e*.14),n.add(i)}else if(e===2){let e=new V(r,t);e.scale.set(.14,.6,.48),e.position.set(-.26,1.3,0),n.add(e)}return n}function Pp(e,t,n){let r=new z,i=Ul;if(e===1){let e=new V(i,t);e.scale.set(.56,.32,.44),e.position.y=.42,r.add(e)}else if(e===2){let e=new V(i,n);e.scale.set(.54,.36,.34),e.position.y=.66,r.add(e);for(let e of[-.26,.26])for(let t of[-.1,.1]){let a=new V(i,n);a.scale.set(.05,.3,.08),a.position.set(e,.97,t),r.add(a)}}return r}function Fp(){return bp(Of().character)}function Ip(e,t){let n=e.userData.parts,[r,i,a,o]=n.mats;r.color.setHex(t.skin),i.color.setHex(t.hair),a.color.setHex(t.shirt),o.color.setHex(t.pants),n.faceTexOpen&&n.faceTexOpen.dispose(),n.faceTexBlink&&n.faceTexBlink.dispose(),n.faceTexOpen=jp(t.skin,t.hair,Mp(t.style)),n.faceTexBlink=jp(t.skin,t.hair,Mp(t.style),!0),n.face.map=n.faceTexOpen,n.face.needsUpdate=!0,n.head.material=[r,r,t.style===4?r:i,r,n.face,r],e.remove(n.hairExtra),n.hairExtra=Np(t.style,i),e.add(n.hairExtra);let s=t.outfit===1?r:o;n.legL.children[0].material=s,n.legR.children[0].material=s,e.remove(n.outfitExtra),n.outfitExtra=Pp(t.outfit,a,o),e.add(n.outfitExtra)}function Lp(e=1,t=null){t||=Fp();let n=new z,r=Ul,i=new H({color:t.skin}),a=new H({color:t.hair}),o=new H({color:t.shirt}),s=new H({color:t.pants}),c=jp(t.skin,t.hair,Mp(t.style)),l=jp(t.skin,t.hair,Mp(t.style),!0),u=new H({map:c}),d=new V(r,[i,i,t.style===4?i:a,i,u,i]);d.rotation.y=Math.PI/2,d.scale.set(.5,.5,.5),d.position.y=1.35;let f=new V(r,o);f.scale.set(.5,.6,.3),f.position.y=.8;let p=(e,t,n)=>{let i=new z,a=new V(r,e);return a.scale.set(t,n,t),a.position.y=-n/2,i.add(a),i},m=p(o,.16,.5);m.position.set(0,1.08,-.34);let h=p(o,.16,.5);h.position.set(0,1.08,.34);let g=t.outfit===1?i:s,_=p(g,.18,.5);_.position.set(0,.5,-.14);let v=p(g,.18,.5);v.position.set(0,.5,.14);let y=Np(t.style,a),b=Pp(t.outfit,o,s);return n.add(d,f,m,h,_,v,y,b),n.scale.setScalar(e),n.userData.parts={head:d,body:f,armL:m,armR:h,legL:_,legR:v,face:u,faceTexOpen:c,faceTexBlink:l,hairExtra:y,outfitExtra:b,mats:[i,a,o,s]},n}var Rp=new Yi(1,1,1),zp=class{constructor(e,t=12){this.puffs=[];for(let n=0;n<t;n++){let t=new V(Rp,new fi({color:14209732,transparent:!0,opacity:0,depthWrite:!1}));t.visible=!1,e.add(t),this.puffs.push({m:t,life:0,maxLife:1,vx:0,vy:0,grow:1})}this.idx=0}spawn(e,t,{vx:n=0,vy:r=1.2,size:i=.14,life:a=.35}={}){let o=this.puffs[this.idx];this.idx=(this.idx+1)%this.puffs.length,o.m.visible=!0,o.m.position.set(e,t+.06,.15),o.m.scale.setScalar(i),o.m.rotation.z=Math.random()*Math.PI,o.vx=n,o.vy=r,o.grow=1.6+Math.random(),o.life=o.maxLife=a}burst(e,t,n){let r=n>2.5?5:3;for(let n=0;n<r;n++)this.spawn(e+(Math.random()-.5)*.5,t,{vx:(n%2?1:-1)*(.8+Math.random()*1.2),vy:.8+Math.random()*1.2,size:.12+Math.random()*.1,life:.3+Math.random()*.15})}update(e){for(let t of this.puffs)if(t.m.visible){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.position.x+=t.vx*e,t.m.position.y+=t.vy*e,t.vy=Math.max(0,t.vy-4*e),t.m.scale.multiplyScalar(1+t.grow*e),t.m.material.opacity=.5*(t.life/t.maxLife)}}},Bp=class{constructor(e){this.group=Lp(1),e.add(this.group),this.parts=this.group.userData.parts;let t=new Xi(.5,16);t.rotateX(-Math.PI/2),this.shadow=new V(t,new fi({color:0,transparent:!0,opacity:.3,depthWrite:!1})),e.add(this.shadow),this.dust=new zp(e),this.reset(0,0)}reset(e,t){this.x=e,this.y=t,this.vy=0,this.grounded=!0,this.buffer=0,this.coyote=0,this.airJumps=Ep,this.fallPeak=t,this.stumbleT=0,this.squashT=0,this.walkPhase=0,this.idleT=Math.random()*5,this.lean=0,this.blinkT=2+Math.random()*3,this.blinkHold=0,this.runDustT=0,this.parts.face.map=this.parts.faceTexOpen,this.parts.face.needsUpdate=!0,this.faceYaw=-Math.PI/2,this.group.position.set(e,t,0),this.group.rotation.set(0,this.faceYaw,0),this.group.scale.setScalar(1);for(let e of this.parts.mats)e.emissive.setHex(0)}jump(){this.buffer=kp}bounce(e){this.vy=e,this.grounded=!1,this.fallPeak=this.y}stumble(){this.stumbleT=.6;for(let e of this.parts.mats)e.emissive.setHex(11149858)}get isAirborne(){return!this.grounded}update(e,t,n,r){if(t!==0){let r=t>0?1:-1,i=this.x+t*e,a=i+Sp/2*r,o=n.groundTopAt(a),s=n.sideBlockedAt&&n.sideBlockedAt(a,this.y,this.y+1.7);o<=this.y+.25&&!s&&(this.x=i)}if(this.buffer-=e,this.coyote-=e,this.grounded&&(this.coyote=Op),this.buffer>0&&(this.grounded||this.coyote>0)?(this.vy=Tp,this.grounded=!1,this.buffer=0,this.coyote=0,this.airJumps=Ep,this.fallPeak=this.y,id()):this.buffer>0&&this.airJumps>0&&(this.vy=Dp,this.buffer=0,--this.airJumps,this.fallPeak=this.y,this.dust.burst(this.x,this.y,1.5),id()),this.grounded){let e=n.floorAt(this.x,this.y+.05);e<this.y-.02?(this.grounded=!1,this.vy=0,this.fallPeak=this.y):this.y=e}else{let t=this.vy>0?wp:Cp,i=this.y;if(this.vy+=t*e,this.y+=this.vy*e,this.fallPeak=Math.max(this.fallPeak,this.y),this.vy<=0){let e=n.floorAt(this.x,i+.05);e!==null&&this.y<=e&&(this.y=e,this.vy=0,this.grounded=!0,this.squashT=.16,this.dust.burst(this.x,this.y,this.fallPeak-e),r&&r.onLand&&r.onLand(this.fallPeak-e))}}let i=this.parts,a=this.grounded&&Math.abs(t)>.2;if(this.blinkHold>0?(this.blinkHold-=e,this.blinkHold<=0&&(i.face.map=i.faceTexOpen,i.face.needsUpdate=!0,this.blinkT=2+Math.random()*3)):(this.blinkT-=e,this.blinkT<=0&&(this.blinkHold=.13,i.face.map=i.faceTexBlink,i.face.needsUpdate=!0)),this.grounded){this.walkPhase+=e*Math.max(Math.abs(t),.001)*2.7;let n=a?Math.sin(this.walkPhase):0,r=a?Math.cos(this.walkPhase):0;if(a)i.armL.rotation.z=n*1.15,i.armR.rotation.z=-n*1.15,i.armL.rotation.x=.14+Math.max(0,n)*.12,i.armR.rotation.x=-.14-Math.max(0,-n)*.12,i.legL.rotation.z=-n*1,i.legR.rotation.z=n*1,this.runDustT-=e,this.runDustT<=0&&(this.runDustT=.28+Math.random()*.2,this.dust.spawn(this.x-Math.sign(t)*.3,this.y,{vx:-Math.sign(t)*(.6+Math.random()*.6),vy:.5+Math.random()*.5,size:.09+Math.random()*.05,life:.3}));else{this.idleT+=e;let t=Math.sin(this.idleT*2.3);i.armL.rotation.z=t*.06,i.armR.rotation.z=-t*.06,i.armL.rotation.x=.05,i.armR.rotation.x=-.05,i.legL.rotation.z=0,i.legR.rotation.z=0,i.body.scale.y=.6+t*.012,i.head.position.y=1.35+t*.012}i.legL.position.y=.5+Math.max(0,-r)*.12,i.legR.position.y=.5+Math.max(0,r)*.12}else{let e=Math.max(-.25,Math.min(.25,this.vy*.02));i.armL.rotation.z=2.4+e,i.armR.rotation.z=2.4-e,i.armL.rotation.x=.25,i.armR.rotation.x=-.25,i.legL.rotation.z=-.5-e*.5,i.legR.rotation.z=.3+e*.5,i.legL.position.y=.5,i.legR.position.y=.5}(a||!this.grounded)&&(i.body.scale.y=.6,i.head.position.y=1.35);let o=a?Math.abs(Math.cos(this.walkPhase))*.06:this.grounded?Math.max(0,Math.sin(this.idleT*2.3))*.015:0,s=Math.abs(t)>.2?-Math.PI/2+Math.sign(t)*(Math.PI/2-.61):-Math.PI/2;this.faceYaw+=(s-this.faceYaw)*Math.min(1,e*5),this.group.rotation.y=this.faceYaw;let c=a?-Math.sign(t)*.09:0;this.lean+=(c-this.lean)*Math.min(1,e*8);let l=1;this.grounded?this.squashT>0&&(this.squashT-=e,l=.82+.18*(1-Math.max(0,this.squashT)/.16)):l=1+Math.min(.14,Math.abs(this.vy)*.011);let u=1+(1-l)*.7;if(this.group.scale.set(u,l,u),this.group.position.set(this.x,this.y+o,0),this.group.rotation.z=this.lean,this.stumbleT>0&&(this.stumbleT-=e,this.group.rotation.z=this.lean+Math.sin(this.stumbleT*10)*.25*(Math.max(0,this.stumbleT)/.6),this.stumbleT<=0))for(let e of this.parts.mats)e.emissive.setHex(0);this.dust.update(e);let d=n.floorAt(this.x,this.y+.05);this.shadow.position.set(this.x,d+.02,0);let f=this.y-d,p=Math.max(.4,1-f*.12);this.shadow.scale.set(p,1,p),this.shadow.material.opacity=.3*Math.max(.3,1-f*.1)}},Vp=Ul,Hp={normal:{frame:`#7a4a22`,ink:`#2b211a`,face:[`#fffdf4`,`#f0e5cd`]},gray:{frame:`#8f8f8f`,ink:`#7c7c7c`,face:[`#e3e3e3`,`#c8c8c8`]},check:{frame:`#2f9e42`,ink:`#2f9e42`,face:[`#f5fdf2`,`#ddf0d6`]},reveal:{frame:`#2f9e42`,ink:`#2f9e42`,face:[`#f5fdf2`,`#ddf0d6`]}};function Up(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function Wp(e,t,n=`normal`){let r=e.getContext(`2d`),i=e.width,a=e.height,o=Hp[n]||Hp.normal;r.clearRect(0,0,i,a);let s=i-28,c=a-30;r.save(),r.shadowColor=`rgba(38, 24, 8, 0.3)`,r.shadowBlur=14,r.shadowOffsetY=11,Up(r,14,8,s,c,36);let l=r.createLinearGradient(0,8,0,8+c);l.addColorStop(0,o.face[0]),l.addColorStop(1,o.face[1]),r.fillStyle=l,r.fill(),r.restore(),Up(r,22,16,s-16,c-16,36-16/2),r.lineWidth=16,r.strokeStyle=o.frame,r.stroke(),Up(r,32,26,s-36,c-36,20),r.lineWidth=5,r.strokeStyle=`rgba(255, 255, 255, 0.55)`,r.stroke(),r.fillStyle=o.frame;for(let[e,t]of[[45,39],[14+s-31,39],[45,8+c-31],[14+s-31,8+c-31]])r.beginPath(),r.arc(e,t,7,0,Math.PI*2),r.fill(),r.fillStyle=`rgba(255, 255, 255, 0.45)`,r.beginPath(),r.arc(e-2,t-2,7*.35,0,Math.PI*2),r.fill(),r.fillStyle=o.frame;r.fillStyle=o.ink;let u=n===`check`?`✓`:t,d=n===`check`?a*.72:a*.56,f=e=>`bold ${e}px 'Arial Rounded MT Bold', 'Comic Sans MS', Arial, sans-serif`;for(r.font=f(d);r.measureText(u).width>s-84&&d>24;)d-=6,r.font=f(d);r.textAlign=`center`,r.textBaseline=`middle`,r.save(),r.shadowColor=`rgba(38, 24, 8, 0.18)`,r.shadowOffsetY=4,r.fillText(u,i/2,8+c/2+4),r.restore()}function Gp(e,t){let n=document.createElement(`canvas`);n.width=512,n.height=256;let r=new Gi(n);r.colorSpace=We,r.anisotropy=8;let i=new V(new $i(e,t),new fi({map:r,side:2,transparent:!0,alphaTest:.02}));return i.userData.canvas=n,i.userData.tex=r,i}function Kp(e,t,n){Wp(e.userData.canvas,t,n),e.userData.tex.needsUpdate=!0}function qp(e){e.traverse(e=>{e.geometry&&e.geometry!==Vp&&e.geometry.dispose(),e.material&&!Array.isArray(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),e.parent&&e.parent.remove(e)}var Jp=1.5,Yp=3,Xp=class{constructor(e,t,{x:n,word:r,distractors:i}){this.type=`blocks`,this.word=r,this.x=n,this.done=!1,this.attempts=0,this.respawns=0,this.level=t,this.explodeT=-1,this.lockT=0,this.group=new z,e.add(this.group),this.blocks=[];let a=new H({color:16757504,emissive:4008960});for(let e=0;e<3;e++){let e=new z,t=new V(Vp,a.clone());t.scale.setScalar(1.4);let n=Gp(2.1,1.05);n.position.z=.78,e.add(t,n),this.group.add(e),this.blocks.push({g:e,cube:t,sign:n,word:``,dead:!1,bounceT:0,shakeT:0,baseY:0})}this.solids=this.blocks.map(()=>({x0:0,x1:0,y0:1/0,y:-1/0})),t.dynamicSolids.push(...this.solids),this.pool=[r,...i],this.place(n+6)}syncSolids(){for(let e=0;e<this.blocks.length;e++){let t=this.blocks[e],n=this.solids[e];if(!t.g.visible){n.y=-1/0,n.y0=1/0;continue}n.x0=t.g.position.x-.7,n.x1=t.g.position.x+.7,n.y=t.g.position.y+.7,n.y0=t.g.position.y-.7}}place(e){let t=Du(this.pool);for(let n=0;n<3;n++){let r=this.blocks[n],i=e+n*5;r.baseY=this.level.groundTopAt(i)+3.1,r.g.position.set(i,r.baseY,0),r.word=t[n],r.dead=!1,r.bounceT=0,r.shakeT=0,r.g.rotation.set(0,0,0),r.cube.material.color.setHex(16757504),Kp(r.sign,r.word,`normal`)}this.firstX=e,this.lastX=e+10,this.lockT=0,this.syncSolids()}update(e,t,n){let r=performance.now()/1e3;this.lockT>0&&(this.lockT-=e);for(let t of this.blocks){let n=t.baseY+Math.sin(r*2+t.g.position.x)*.08;t.bounceT>0&&(t.bounceT-=e,n+=Math.sin((1-t.bounceT/.3)*Math.PI)*.55),t.shakeT>0&&(t.shakeT-=e,t.g.position.x+=Math.sin(t.shakeT*50)*.05),this.lockT>0?t.g.rotation.z=Math.sin(this.lockT*14)*.09*Math.min(1,this.lockT):t.g.rotation.z!==0&&(t.g.rotation.z=0),t.g.position.y=n}if(this.explodeT>0&&(this.explodeT-=e,this.explodeT<=0&&this.explode(n)),this.syncSolids(),!this.done){if(t.vy>0){let r=t.y+xp,i=r-t.vy*e;for(let e of this.blocks){if(e.dead)continue;let a=e.baseY-.7;if(i<=a+.1&&r>=a-.1&&Math.abs(t.x-e.g.position.x)<1.05){t.vy=-1.5,e.word===this.word?this.resolveCorrect(e,n):this.resolveWrong(e,n);return}}}t.x>this.lastX+2.2&&(this.respawns<1?(this.respawns++,this.place(this.lastX+7)):(this.place(this.firstX),n.bounceBack(this.firstX-4)),n.speakWord())}}resolveCorrect(e,t){this.done=!0,this.lockT=0,e.bounceT=.3,Kp(e.sign,``,`check`),nd();let n=e.g.position.clone();t.effects.confetti(n);for(let e=0;e<3;e++)t.effects.sparkle(new L(n.x+(e-1)*.5,n.y+1,0));let r=this.attempts===0;t.effects.floatText(new L(n.x,n.y+1.6,0),r?`+4`:`+3`),t.addCoins(r?4:3),r&&t.praiseFirstTry?t.praiseFirstTry():t.praise(),t.onCorrect(r,this.attempts),this.explodeT=2.2}explode(e){ad();for(let t of this.blocks)t.g.visible&&(e.effects.confetti(t.g.position.clone()),t.g.visible=!1)}resolveWrong(e,t){if(this.attempts++,e.shakeT=.4,cd(),t.stumble(),t.onWrong&&t.onWrong(),this.attempts>=Yp){this.resolveFail(t);return}Yd(`Almost! The word is: ${this.word}. Try again!`,{rate:.9}),t.bounceBack(this.firstX-4),this.lockT=Jp}resolveFail(e){this.done=!0,this.lockT=0;for(let e of this.blocks)e.word===this.word?(e.bounceT=.3,Kp(e.sign,e.word,`reveal`)):(e.cube.material.color.setHex(9079434),Kp(e.sign,e.word,`gray`));e.onFail&&e.onFail(),this.explodeT=2.6}clampX(){return 1/0}debugResolve(e,t){let n=this.blocks.find(t=>!t.dead&&(e?t.word===this.word:t.word!==this.word));n&&(e?this.resolveCorrect(n,t):this.resolveWrong(n,t))}passedX(){return this.explodeT>0?1/0:this.lastX+4}dispose(){let e=this.level.dynamicSolids;for(let t of this.solids){let n=e.indexOf(t);n>=0&&e.splice(n,1)}qp(this.group)}},Zp=[0,2,4],Qp=class{constructor(e,t,{x:n,wallX:r,groundY:i,word:a,distractors:o}){this.type=`doors`,this.word=a,this.x=n,this.wallX=r,this.groundY=i,this.done=!1,this.opened=-1,this.attempts=0,this.cooldown=0,this.group=new z,this.group.position.set(r,i,0),e.add(this.group);let s=new H({color:9263659}),c=new H({color:11104059});for(let e of[-1,1])for(let t=0;t<7;t++){let n=new V(Vp,t+e&1?s:c);n.position.set(0,t+.5,e),this.group.add(n)}for(let e=-1;e<=1;e++){let t=new V(Vp,c);t.position.set(0,6.75,e),t.scale.set(1.3,.5,1),this.group.add(t)}let l=Du([a,...o]);this.doors=Zp.map((e,t)=>{let n=new z;n.position.set(0,e,-.7);let r=new V(Vp,new H({color:11893052}));r.scale.set(.7,1.9,1.4),r.position.set(0,.95,.7);let i=new V(Vp,new H({color:16766282}));i.scale.setScalar(.2),i.position.set(-.44,.95,1.1),n.add(r,i),this.group.add(n);let a=Gp(1.9,.95);return a.position.set(-2.3,e+1.15,1.3),Kp(a,l[t],`normal`),this.group.add(a),{hinge:n,sign:a,word:l[t],tier:e,shakeT:0,openT:-1}})}update(e,t,n){this.cooldown-=e;for(let t of this.doors)t.shakeT>0&&(t.shakeT-=e,t.hinge.rotation.y=Math.sin(t.shakeT*40)*.08,t.shakeT<=0&&(t.hinge.rotation.y=0)),t.openT>=0&&t.openT<1&&(t.openT=Math.min(1,t.openT+e*2.2),t.hinge.rotation.y=-(1-(1-t.openT)**3)*1.9);if(!this.done&&this.opened===-1&&this.cooldown<=0&&t.grounded&&t.x>this.wallX-1.35){let e=t.y-this.groundY,r=Zp.findIndex(t=>Math.abs(e-t)<.7);r>=0&&this.resolveTier(r,n)}}resolveTier(e,t){let n=this.doors[e];if(n.word===this.word){this.done=!0,this.opened=e,n.openT=0,dd(),t.effects.confetti(new L(this.wallX,this.groundY+n.tier+1.5,.5)),t.effects.floatText(new L(this.wallX,this.groundY+n.tier+2.6,0),`+3`),t.addCoins(3);let r=this.attempts===0;r&&t.praiseFirstTry?t.praiseFirstTry():t.praise(),t.onCorrect(r,this.attempts)}else this.attempts++,n.shakeT=.4,rd(),t.onWrong&&t.onWrong(),this.cooldown=1.4,t.bounceBack(this.wallX-8),Yd(`Almost! The word is: ${this.word}. Try again!`,{rate:.9})}clampX(){return this.opened===-1?this.wallX-.85:1/0}debugResolve(e,t){if(this.opened!==-1)return;let n=this.doors.findIndex(t=>e?t.word===this.word:t.word!==this.word);n>=0&&this.resolveTier(n,t)}passedX(){return this.wallX+4}dispose(){qp(this.group)}};function $p(){let e=new z,t=new H({color:16766282,emissive:7820544}),n=new V(Vp,t);n.scale.setScalar(.7);let r=new V(Vp,t);return r.scale.setScalar(.7),r.rotation.z=Math.PI/4,e.add(n,r),e}var em=class{constructor(e,t,{x:n,reviews:r,onGem:i,onDone:a}){this.type=`stars`,this.level=t,this.x=n,this.reviews=r,this.onGem=i,this.onDone=a,this.idx=0,this.done=!1,this.warned=!1,this.pending=0,this.group=new z,e.add(this.group),this.stars=[0,1].map(()=>{let e=new z,t=$p(),n=Gp(1.8,.9);return n.position.y=-1.15,e.add(t,n),this.group.add(e),{holder:e,star:t,sign:n,word:``,taken:!1}}),r.length?this.present(n+5):this.finish()}get word(){let e=this.reviews[this.idx];return e?e.word:``}present(e){let t=this.reviews[this.idx],n=Du([t.word,t.distractor]);for(let t=0;t<2;t++){let r=this.stars[t],i=e+t*6;r.baseY=this.level.groundTopAt(i)+3.1,r.holder.position.set(i,r.baseY,0),r.holder.visible=!0,r.word=n[t],r.taken=!1,Kp(r.sign,r.word,`normal`)}this.lastX=e+6,this.warned=!1}update(e,t,n){let r=performance.now()/1e3;for(let t of this.stars)t.star.rotation.y+=e*2,t.baseY!==void 0&&(t.holder.position.y=t.baseY+Math.sin(r*3+t.holder.position.x)*.12);if(!this.done){if(this.pending>0){this.pending-=e,this.pending<=0&&(this.present(t.x+5),n.speakWord());return}for(let e of this.stars){if(e.taken||!e.holder.visible)continue;let r=Math.abs(t.x-e.holder.position.x),i=e.holder.position.y;if(r<.8&&t.vy>.5&&t.y+1.7>i-.7&&t.y<i+.5){e.taken=!0,e.word===this.word?this.grabCorrect(e,n):this.grabWrong(e,n);return}}t.x>this.lastX+2.2&&(this.warned?this.advance(n):(this.warned=!0,this.present(t.x+5),n.speakWord()))}}grabCorrect(e,t){wd(),t.effects.confetti(e.holder.position.clone()),t.effects.floatText(new L(e.holder.position.x,e.holder.position.y+1.2,0),`+1`),this.onGem(),!this.warned&&t.praiseFirstTry?t.praiseFirstTry():t.praise();for(let e of this.stars)e.holder.visible=!1;this.advance(t,!0)}grabWrong(e,t){e.holder.visible=!1,rd(),t.onWrong&&t.onWrong(),this.warned?this.advance(t):(this.warned=!0,Yd(`Almost! The word is: ${this.word}.`,{rate:.9}))}advance(e,t=!1){this.idx++;for(let e of this.stars)e.holder.visible=!1;this.idx>=this.reviews.length?this.finish():this.pending=t?.7:.25}finish(){this.done=!0;for(let e of this.stars)e.holder.visible=!1;this.onDone&&this.onDone()}clampX(){return 1/0}debugResolve(e,t){let n=this.stars.find(t=>!t.taken&&(e?t.word===this.word:t.word!==this.word));n&&(n.taken=!0,e?this.grabCorrect(n,t):this.grabWrong(n,t))}dispose(){qp(this.group)}},tm=Ul,nm=10.5,rm=[{name:`Meatball Monster`,color:9063213},{name:`Syrup Serpent`,color:9062938},{name:`Frost Yeti`,color:15660799},{name:`Cabbage King`,color:10247088},{name:`Crystal Golem`,color:10448852},{name:`Pepper Dragon`,color:16742958}];function im(e){let t=new z,n=[],r=[],i=5,a=null,o=null,s=(e,r,i=null)=>(a={pupils:[],brows:[]},Yl(`./models/${e}.json`).then(e=>{let{group:o,parts:s}=Zl(e);t.add(o),n.push(...r.map(e=>s[e])),s.browL.visible=s.browR.visible=!1,a.pupils.push(s.pupilL,s.pupilR),a.brows.push(s.browL,s.browR),i&&i(s)}).catch(e=>console.error(`boss model failed to load:`,e)));return e===0?(o=s(`boss-meatball`,[`armL`,`armR`]),r=[[-1.04,1.55,.85],[-.52,1.55,.88],[0,1.55,.9],[.52,1.55,.88],[1.04,1.55,.85]],i=5):e===1?(o=s(`boss-serpent`,[`head`],e=>{for(let t of[e.pupilL,e.pupilR,e.browL,e.browR])e.head.add(t),t.position.sub(e.head.position)}),r=[[0,.7,1.05],[.25,1.55,.85],[-.2,2.55,.75],[.15,3.55,.68],[0,4.6,.85]],i=5.2):e===2?(o=s(`boss-yeti`,[`armL`,`armR`]),r=[[-1,1.5,1],[-.5,1.5,1.02],[0,1.5,1.05],[.5,1.5,1.02],[1,1.5,1]],i=5.1):e===3?(o=s(`boss-cabbage`,[`armL`,`armR`]),r=[[-.96,1.55,1.02],[-.48,1.55,1.05],[0,1.55,1.08],[.48,1.55,1.05],[.96,1.55,1.02]],i=5.1):e===4?(o=s(`boss-golem`,[`armL`,`armR`],e=>{e.shards.material.emissive.setHex(4928104)}),r=[[-.96,1.45,.8],[-.48,1.45,.83],[0,1.45,.86],[.48,1.45,.83],[.96,1.45,.8]],i=5.2):e===5&&(o=s(`boss-dragon`,[`wingL`,`wingR`]),r=[[-.76,2,.75],[-.38,2,.78],[0,2,.8],[.38,2,.78],[.76,2,.75]],i=5.2),t.rotation.y=-.42,{group:t,arms:n,armor:r,top:i,face:a,ready:o}}function am(){let e=new z,t=new H({color:16766282,emissive:7820544}),n=new V(tm,t);n.scale.set(.85,.3,.85),e.add(n);for(let n of[-.3,0,.3]){let r=new V(tm,t);r.scale.set(.18,.32,.18),r.position.set(n,.3,0),e.add(r)}let r=new V(tm,new H({color:15684432,emissive:5574929}));return r.scale.setScalar(.2),r.position.set(0,0,.44),e.add(r),e}var om=class{constructor(e,t,n,r){this.scene=e,this.effects=n,this.level=r,this.def=rm[t],this.hp=5,this.state=`enter`,this.t=0,this.throwCool=2.5,this.stepPhase=0;let i=im(t);this.group=i.group,this.arms=i.arms,this.top=i.top,this.face=i.face,this.blinkT=1.5+Math.random()*2.5,this.blinkHold=0,this.flashT=0,e.add(this.group),this.armor=i.armor.map(([e,t,n])=>{let r=new V(tm,new H({color:16766282,emissive:6704384}));return r.scale.setScalar(.5),r.position.set(e,t,n),this.group.add(r),{m:r,popT:-1,vx:0,vy:0}});let a=()=>{this.flashMats=[];let e=new Set;this.group.traverse(t=>{t.isMesh&&!e.has(t.material)&&(e.add(t.material),this.flashMats.push({mat:t.material,base:t.material.emissive.getHex()}))})};a(),i.ready?.then(a),this.projectiles=[0,1].map(()=>{let t=new V(tm,new H({color:this.def.color,emissive:3351040}));return t.scale.setScalar(.8),t.visible=!1,e.add(t),{m:t,on:!1,mode:`held`,t:0,x:0,y:0,x0:0,y0:0,x1:0,dur:1.35}}),this.crown=am(),this.crown.visible=!1,e.add(this.crown),this.coinTimer=0}enterAt(e){this.holdX=e,this.x=e+8}settle(){(this.state===`enter`||this.state===`roar`)&&(this.x=this.holdX,this.state=`idle`,this.t=0)}clearHeld(){for(let e of this.projectiles)e.on&&e.mode===`held`&&(e.on=!1,e.m.visible=!1)}hit(){this.hp--;let e=this.armor[this.hp];if(e){e.popT=0,e.vx=-3-Math.random()*2,e.vy=7,e.m.scale.setScalar(.7);let t=new L;e.m.getWorldPosition(t),this.effects.confetti(t),this.effects.sparkle(t)}gd(),this.clearHeld(),this.flashT=.15;for(let e of this.face.brows)e.visible=!0;this.state=`hurt`,this.t=0}taunt(){this.state!==`idle`&&this.state!==`dizzy`||(this.clearHeld(),hd(),this.state=`taunt`,this.t=0)}startDefeat(e,t){this.clearHeld();for(let e of this.projectiles)e.on=!1,e.m.visible=!1;this.state=`defeat`,this.t=0,this.coinTimer=0,od(),this.effects.fireworks(new L(this.x,3,0)),e.addCoins(10),this.effects.floatText(new L(this.x,this.top+1,0),`+10`)}updateProjectiles(e,t,n){for(let r of this.projectiles)if(r.on){if(r.mode===`held`)r.x=this.x,r.y=this.group.position.y+this.top+.9,r.m.scale.setScalar(.6+Math.abs(Math.sin(r.t*14))*.35),r.t+=e;else if(r.mode===`fly`){r.t+=e;let t=Math.min(1,r.t/r.dur);r.x=r.x0+(r.x1-r.x0)*t;let n=this.level.groundTopAt(r.x1)+.4;r.y=r.y0+(n-r.y0)*t+Math.sin(t*Math.PI)*3.4,r.m.rotation.z-=e*7,t>=1&&(r.mode=`roll`,r.t=0,ld(),this.effects.sparkle(new L(r.x,r.y,0)))}else if(r.t+=e,r.x-=e*2.4,r.y=this.level.groundTopAt(r.x)+.4,r.m.rotation.z+=e*6,r.t>2.4||r.x<t.x-2.5){r.on=!1,r.m.visible=!1,this.effects.sparkle(new L(r.x,r.y,0));continue}r.mode!==`held`&&Math.abs(r.x-t.x)<.75&&t.y<r.y+.6&&t.y+1.7>r.y-.6&&(r.on=!1,r.m.visible=!1,this.effects.sparkle(new L(r.x,r.y,0)),n.hurt(new L(r.x,r.y,0))),r.m.position.set(r.x,r.y,0)}}update(e,t,n,{battle:r=!1,challengeActive:i=!1,minX:a=0}={}){this.t+=e;let o=this.group;for(let t of this.armor)t.popT<0||(t.popT+=e,t.vy-=20*e,t.m.position.x+=t.vx*e,t.m.position.y+=t.vy*e,t.m.rotation.z+=e*9,t.m.scale.setScalar(t.popT<.55?.7:Math.max(.01,.7*(1-(t.popT-.55)/.35))),t.popT>.9&&(t.m.visible=!1,t.popT=-1));for(let e=0;e<this.hp;e++){let t=this.armor[e];t&&t.popT<0&&(t.m.material.emissiveIntensity=.85+Math.sin(this.t*3.2+e*1.3)*.35)}if(this.blinkHold>0){if(this.blinkHold-=e,this.blinkHold<=0){for(let e of this.face.pupils)e.scale.y=e.scale.x;this.blinkT=1.5+Math.random()*2.5}}else if(this.blinkT-=e,this.blinkT<=0){this.blinkHold=.12;for(let e of this.face.pupils)e.scale.y=e.scale.x*.15}if(this.flashT>0)if(this.flashT-=e,this.flashT>0)for(let e of this.flashMats)e.mat.emissive.setHex(10066329);else for(let e of this.flashMats)e.mat.emissive.setHex(e.base);this.updateProjectiles(e,t,n);let s=0,c=0,l=1,u=1,d=[0,0];if(this.state===`enter`){this.x=Math.max(this.holdX,this.x-e*5),s=Math.abs(Math.sin(this.t*9))*.35;let t=Math.floor(this.t*9/Math.PI);t!==this.stepPhase&&(this.stepPhase=t,ld()),this.x<=this.holdX&&(this.state=`roar`,this.t=0,pd())}else if(this.state===`roar`){let e=Math.min(1,this.t/1);l=1+Math.sin(e*Math.PI)*.16,d[0]=Math.sin(e*Math.PI)*2.2,d[1]=-Math.sin(e*Math.PI)*2.2,c=Math.sin(this.t*24)*.04*(1-e),e>=1&&(this.state=`idle`,this.t=0)}else if(this.state===`idle`||this.state===`dizzy`){let n=Math.max(this.x,t.x+nm,a),o=Math.min(e*6,n-this.x);if(this.x+=o,s=o>.01?Math.abs(Math.sin(this.t*8))*.25:.12+Math.sin(this.t*2.2)*.12,u=1+Math.sin(this.t*2.2)*.012,c=Math.sin(this.t*(this.state===`dizzy`?3:1.7))*(this.state===`dizzy`?.14:.05),d[0]=Math.sin(this.t*2)*.18,d[1]=-Math.sin(this.t*2)*.18,this.throwCool-=e,r&&!i&&this.state===`idle`&&this.throwCool<=0){let e=this.projectiles.find(e=>!e.on);e&&(e.on=!0,e.mode=`held`,e.t=0,e.m.visible=!0,e.m.rotation.z=0,this.state=`windup`,this.t=0)}}else if(this.state===`windup`){let e=Math.min(1,this.t/.8);if(d[0]=e*2.4,s=Math.sin(this.t*2.2)*.1,e>=1){let e=this.projectiles.find(e=>e.on&&e.mode===`held`);e&&(e.mode=`fly`,e.t=0,e.x0=this.x,e.y0=this.group.position.y+this.top+.9,e.x1=Math.min(t.x+4.5,this.x-3),e.m.scale.setScalar(.8)),this.throwCool=3.4,this.state=`idle`,this.t=0}}else if(this.state===`hurt`){let e=Math.min(1,this.t/1);if(c=-Math.sin(e*Math.PI)*.4,s=-Math.sin(e*Math.PI)*.25,u=1-Math.sin(Math.min(1,e*2)*Math.PI)*.16+Math.sin(this.t*18)*.03*(1-e),d[0]=Math.sin(e*Math.PI)*1.4,d[1]=-Math.sin(e*Math.PI)*1.4,e>=1){for(let e of this.face.brows)e.visible=!1;this.state=this.hp>0?`idle`:`dizzy`,this.t=0}}else if(this.state===`taunt`){let e=Math.min(1,this.t/.9);o.rotation.y=-.42+Math.sin(this.t*14)*.3*(1-e),l=1-Math.sin(e*Math.PI)*.12,e>=1&&(o.rotation.y=-.42,this.state=this.hp>0?`idle`:`dizzy`,this.t=0)}else if(this.state===`defeat`){let t=Math.min(1,this.t/2.4);c=Math.sin(this.t*8)*.2*t,s=-t*t*2.4,l=1-t*.4,this.coinTimer-=e,this.coinTimer<=0&&(this.coinTimer=.18,this.effects.confetti(new L(this.x+(Math.random()-.5)*2,this.top*(1-t)+1,0)),td()),t>=1&&(o.visible=!1,this.state=`crownDrop`,this.t=0,this.crown.visible=!0,this.crown.position.set(this.x,this.top+1,0))}else if(this.state===`crownDrop`){let n=Math.min(1,this.t/.9),r=1-(1-n)**3,i=t.x,a=t.y+xp+.25;this.crown.position.x+=(i-this.crown.position.x)*r,this.crown.position.y=this.crown.position.y+(a-this.crown.position.y)*r+Math.sin(n*Math.PI)*.6*e,this.crown.rotation.y+=e*4,n>=1&&(this.state=`gone`,this.effects.sparkle(this.crown.position.clone()),td())}else this.crown.position.set(t.x,t.y+xp+.25,0),this.crown.rotation.y+=e*1.5;if(o.visible){let e=this.level.groundTopAt(this.x);o.position.set(this.x,e+s,0),o.rotation.z=c;let t=l*(1+(1-u)*.6);o.scale.set(t,l*u,t),this.arms.forEach((e,t)=>{e.rotation.z=(t===0?1:-1)*d[t]})}}dispose(){qp(this.group),qp(this.crown);for(let e of this.projectiles)e.m.material.dispose(),this.scene.remove(e.m)}},sm=36,cm=8,lm=8,um=5,dm=4,fm=[16732754,16766784,6942894,4244735,14696699,16755520],pm=[16766784,16770431,16774064,16777215,16755520],mm=new Yi(1,1,1),hm=new Nn,gm=class{constructor(e){this.material=new fi({transparent:!0,opacity:1,depthWrite:!1}),this.mesh=new Fi(mm,this.material,sm),this.mesh.instanceMatrix.setUsage(Xe),this.mesh.visible=!1,this.mesh.frustumCulled=!1,this.data=new Float32Array(sm*11),this.count=0,this.life=0,this.maxLife=1,this.gravity=-9,e.add(this.mesh)}fire(e,{speed:t=6,up:n=5,life:r=1.1,gravity:i=-9,count:a=sm,size:o=.2,palette:s=fm}={}){this.count=Math.min(a,sm);let c=new B;for(let r=0;r<this.count;r++){let i=r*11;this.data[i]=e.x,this.data[i+1]=e.y,this.data[i+2]=e.z;let a=Math.random()*Math.PI*2,l=Math.random()*t;this.data[i+3]=Math.cos(a)*l,this.data[i+4]=Math.random()*n+1,this.data[i+5]=Math.sin(a)*l,this.data[i+6]=Math.random()*Math.PI,this.data[i+7]=Math.random()*Math.PI,this.data[i+8]=(Math.random()-.5)*16,this.data[i+9]=(Math.random()-.5)*16,this.data[i+10]=o*(.5+Math.random()),c.setHex(s[Math.random()*s.length|0]),this.mesh.setColorAt(r,c)}this.mesh.count=this.count,this.mesh.instanceColor.needsUpdate=!0,this.life=r,this.maxLife=r,this.gravity=i,this.material.opacity=1,this.mesh.visible=!0,this.write()}write(){let e=this.life/this.maxLife,t=Math.min(1,e*3);for(let e=0;e<this.count;e++){let n=e*11;hm.position.set(this.data[n],this.data[n+1],this.data[n+2]),hm.rotation.set(this.data[n+6],0,this.data[n+7]),hm.scale.setScalar(this.data[n+10]*t),hm.updateMatrix(),this.mesh.setMatrixAt(e,hm.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}update(e){if(this.mesh.visible){if(this.life-=e,this.life<=0){this.mesh.visible=!1;return}for(let t=0;t<this.count;t++){let n=t*11;this.data[n+4]+=this.gravity*e,this.data[n]+=this.data[n+3]*e,this.data[n+1]+=this.data[n+4]*e,this.data[n+2]+=this.data[n+5]*e,this.data[n+6]+=this.data[n+8]*e,this.data[n+7]+=this.data[n+9]*e}this.write(),this.material.opacity=Math.min(1,this.life/this.maxLife*2)}}};function _m(e){let t=document.createElement(`canvas`);t.width=128,t.height=64;let n=t.getContext(`2d`);n.font=`bold 44px Arial Rounded MT Bold, Arial, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineWidth=8,n.strokeStyle=`#2c3e75`,n.strokeText(e,64,32),n.fillStyle=`#ffd93d`,n.fillText(e,64,32);let r=new Gi(t);return r.colorSpace=We,r}function vm(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);t.translate(32,32),t.fillStyle=`#fff6c8`,t.strokeStyle=`#ffd93d`,t.lineWidth=3,t.beginPath();for(let e=0;e<10;e++){let n=e%2?11:28,r=e/10*Math.PI*2-Math.PI/2;t[e?`lineTo`:`moveTo`](Math.cos(r)*n,Math.sin(r)*n)}t.closePath(),t.fill(),t.stroke();let n=new Gi(e);return n.colorSpace=We,n}var ym=class{constructor(e){this.scene=e,this.bursts=[];for(let t=0;t<cm;t++)this.bursts.push(new gm(e));this.burstIdx=0,this.textures=new Map,this.sprites=[];for(let t=0;t<lm;t++){let t=new ni(new Hr({transparent:!0,depthWrite:!1}));t.scale.set(1.4,.7,1),t.visible=!1,t.userData.life=0,e.add(t),this.sprites.push(t)}let t=new ea(.42,.55,24);this.rings=[];for(let n=0;n<um;n++){let n=new V(t,new fi({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:2}));n.visible=!1,e.add(n),this.rings.push({m:n,life:0,maxLife:1,grow:4})}this.ringIdx=0,this.starTex=vm(),this.stars=[];for(let t=0;t<dm;t++){let t=new ni(new Hr({map:this.starTex,transparent:!0,depthWrite:!1}));t.visible=!1,e.add(t),this.stars.push({spr:t,life:0,maxLife:1})}this.starIdx=0,this.pendingFireworks=[]}nextBurst(){let e=this.bursts[this.burstIdx];return this.burstIdx=(this.burstIdx+1)%this.bursts.length,e}ringPulse(e,t=16777215,n=1){let r=this.rings[this.ringIdx];this.ringIdx=(this.ringIdx+1)%this.rings.length,r.m.material.color.setHex(t),r.m.position.copy(e),r.m.position.z+=.3,r.m.scale.setScalar(.5*n),r.grow=4.5*n,r.life=r.maxLife=.45,r.m.visible=!0}starPop(e,t=1){let n=this.stars[this.starIdx];this.starIdx=(this.starIdx+1)%this.stars.length,n.spr.position.copy(e),n.spr.position.z+=.35,n.spr.material.rotation=Math.random()*Math.PI,n.spr.scale.setScalar(.3*t),n.spr.userData.grow=3.6*t,n.life=n.maxLife=.4,n.spr.visible=!0}confetti(e){this.nextBurst().fire(e,{speed:5,up:7,life:1.4,gravity:-10}),this.starPop(e,1.2),this.ringPulse(e,16774064,1.2)}coinScatter(e,t=6){this.nextBurst().fire(e,{speed:4.5,up:6,life:1.1,gravity:-13,count:Math.min(28,8+t*3),size:.18,palette:pm}),this.ringPulse(e,16767293,.9)}sparkle(e){this.nextBurst().fire(e,{speed:2.5,up:3.5,life:.6,gravity:-4,count:16,size:.13,palette:pm}),this.ringPulse(e,16770431,.7)}fireworks(e){for(let t=0;t<6;t++)this.pendingFireworks.push({t:t*.35,pos:new L(e.x+(Math.random()-.5)*10,e.y+4+Math.random()*4,e.z-6-Math.random()*8)})}floatText(e,t){this.textures.has(t)||this.textures.set(t,_m(t));let n=this.sprites.find(e=>!e.visible)||this.sprites[0];n.material.map=this.textures.get(t),n.material.opacity=1,n.position.copy(e),n.userData.life=.9,n.scale.set(.3,.15,1),n.visible=!0}update(e){for(let t of this.bursts)t.update(e);for(let t of this.sprites){if(!t.visible)continue;if(t.userData.life-=e,t.userData.life<=0){t.visible=!1;continue}let n=.9-t.userData.life,r=Math.min(1,n/.16),i=r+Math.sin(r*Math.PI)*.22;t.scale.set(1.4*i,.7*i,1),t.position.y+=1.6*e,t.material.opacity=Math.min(1,t.userData.life*2)}for(let t of this.rings){if(!t.m.visible)continue;if(t.life-=e,t.life<=0){t.m.visible=!1;continue}let n=t.m.scale.x+t.grow*e;t.m.scale.setScalar(n),t.m.material.opacity=.65*(t.life/t.maxLife)}for(let t of this.stars){if(!t.spr.visible)continue;if(t.life-=e,t.life<=0){t.spr.visible=!1;continue}let n=t.spr.scale.x+t.spr.userData.grow*e;t.spr.scale.setScalar(n),t.spr.material.rotation+=e*2.5,t.spr.material.opacity=Math.min(1,t.life/t.maxLife*1.6)}if(this.pendingFireworks.length){for(let t of this.pendingFireworks)t.t-=e;let t=this.pendingFireworks.filter(e=>e.t<=0);if(t.length){this.pendingFireworks=this.pendingFireworks.filter(e=>e.t>0);for(let e of t)this.nextBurst().fire(e.pos,{speed:6,up:3,life:1.6,gravity:-5,size:.26})}}}},bm={ArrowLeft:-1,KeyA:-1,ArrowRight:1,KeyD:1};function xm(e,t){let n=!1,r=!1,i=new Set,a={"-1":!1,1:!1},o=()=>{for(let e of[-1,1]){let n=[...i].some(t=>bm[t]===e);n!==a[e]&&(a[e]=n,t.onMove&&t.onMove(e,n))}},s=e=>{e.target&&e.target.closest&&e.target.closest(`button`)||(e.preventDefault(),!n&&!r&&t.onJump(),n=!0)},c=()=>{n=!1},l=e=>{if(e.code in bm){e.preventDefault(),i.add(e.code),o();return}e.code!==`Space`&&e.code!==`ArrowUp`&&e.code!==`KeyW`||(e.preventDefault(),!(e.repeat||r)&&(n||t.onJump(),r=!0))},u=e=>{if(e.code in bm){i.delete(e.code),o();return}e.code!==`Space`&&e.code!==`ArrowUp`&&e.code!==`KeyW`||(r=!1)};return window.PointerEvent?(e.addEventListener(`pointerdown`,s),window.addEventListener(`pointerup`,c),window.addEventListener(`pointercancel`,c)):(e.addEventListener(`touchstart`,s,{passive:!1}),window.addEventListener(`touchend`,c),window.addEventListener(`touchcancel`,c),e.addEventListener(`mousedown`,s),window.addEventListener(`mouseup`,c)),window.addEventListener(`keydown`,l),window.addEventListener(`keyup`,u),{destroy(){e.removeEventListener(`pointerdown`,s),window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),e.removeEventListener(`touchstart`,s),window.removeEventListener(`touchend`,c),window.removeEventListener(`touchcancel`,c),e.removeEventListener(`mousedown`,s),window.removeEventListener(`mouseup`,c),window.removeEventListener(`keydown`,l),window.removeEventListener(`keyup`,u)}}}var Sm=4.5,Cm=2.5,wm=3.4,Tm=1.9,Em=6,Dm=[16744272,12216520,5099745,15286216,10463450,16758605],Om=Ul,km=[`critter`,`critter-snail`,`critter-beetle`];function Am(){let e=new z,t=new H({color:16744272,vertexColors:!0});e.userData.mat=t;let n=new Map;return e.userData.setVariant=r=>{let i=r%km.length;e.userData.variant=i,Yl(`./models/${km[i]}.json`).then(r=>{if(e.userData.variant===i){if(!n.has(i)){let a=Zl(r,{materials:{body:t}}).group;n.set(i,a),e.add(a)}for(let[e,t]of n)t.visible=e===i}}).catch(e=>console.error(`critter model failed to load:`,e))},e.userData.setVariant(0),e}function jm(){let e=new z,t=new H({color:16766282,emissive:7820544});for(let[n,r,i,a]of[[0,.35,.5,.12],[0,-.35,.5,.12],[-.25,0,.12,.6],[.25,0,.12,.6]]){let o=new V(Om,t);o.scale.set(i,a,.12),o.position.set(n,r+.5,0),e.add(o)}let n=new V(Om,t);n.scale.set(.12,.7,.12),n.position.y=-.3;let r=new V(Om,t);return r.scale.set(.3,.12,.12),r.position.set(.15,-.55,0),e.add(n,r),e}var Mm=class{constructor(e,t){this.cb=t,this.renderer=e,this.scene=new Hn,this.camera=new Ua(50,window.innerWidth/window.innerHeight,.1,120),this.camera.position.set(3,4.2,14),this.lookTarget=new L(4,3,0);let n=new ja(16772815,6460572,1.05),r=new Ja(16768166,1.55);r.position.set(4,10,6),this.scene.add(n,r),this.scene.userData.hemiLight=n,this.scene.userData.sunLight=r,this.level=new mu(this.scene),this.player=new Bp(this.scene),this.effects=new ym(this.scene),this.critters=[];for(let e=0;e<6;e++){let e=Am();e.visible=!1,this.scene.add(e),this.critters.push({g:e,x:0,dir:1,x0:0,x1:0,state:`off`,squashT:0})}this.keyMesh=jm(),this.keyMesh.visible=!1,this.scene.add(this.keyMesh),this.input=xm(e.domElement,{onJump:()=>{!this.running||this.paused||(this.phase===`bossIntro`?this.endIntro():this.player.jump())},onMove:(e,t)=>this.setMove(`key`,e,t)}),this.bossFight=null,this.running=!1,this.paused=!1,this.speed=0,this.elapsed=0,this.events=[],this.activeEv=null,this.retiredEvs=[],this.stars=null,this.choice=!1,this.moveHeld={},this.shownControls=null,this.api={effects:this.effects,level:this.level,praise:()=>{this.firstTryStreak=0,Jd(`recover`)},praiseFirstTry:()=>{this.firstTryStreak++,Jd(this.firstTryStreak>=3?`streak`:`firstTry`)},addCoins:e=>this.addCoins(e),bounceBack:e=>this.bounceBack(e),speakWord:()=>this.repeatWord(),onCorrect:(e,t)=>this.onEventCorrect(e,t),onFail:()=>this.onEventFail(),onWrong:()=>{this.repeatTimer=Em,this.autoRepeats=0,this.bossFight&&this.bossFight.taunt()},stumble:()=>{rd(),this.player.stumble(),this.stumbleMul=.4,this.addCoins(-1)},hurt:e=>this.hurt(e||new L(this.player.x,this.player.y,0))}}startRun(e,t,{secret:n=!1,boss:r=!1}={}){this.worldIdx=e,this.levelIdx=t,this.secret=n,this.isBoss=r,this.levelWords=r?Nu(e,kf):n?Mu(e,kf).slice(0,6):Cu(e,t),this.queue=Ou(this.levelWords,kf,{promotionPool:r||n?null:Eu(e)}),this.tierList=Au(e,this.queue),this.distractorPool=ku(this.levelWords,this.queue),this.results=[],this.firstTryStreak=0,this.runCoins=0,this.runGems=0,this.keyFound=!1;let i=e*97+t*13+(n?7:1),a=!n&&!r&&!qf(e)&&(e+t)%2==0;this.data=r?ou({seed:i,wordCount:this.queue.length,theme:e}):au({seed:i,wordCount:this.queue.length,theme:n?6:e,secret:n,hasKey:a}),this.level.build(this.data),this.clearEvents(),this.events=this.data.events,this.eventIdx=0,this.activeEv=null,this.spoken=!1,this.announced=!1,this.stars=null,this.phase=r?`bossIntro`:`run`,this.introT=0,this.introSpoke=!1,this.repeatTimer=0,this.autoRepeats=0,this.repeatTipT=0,this.bounce=null,this.stumbleMul=1,this.lavaCool=0,this.flagT=0,this.doneTimer=0,this.trailT=0;for(let t=0;t<this.critters.length;t++){let n=this.critters[t],r=this.data.critters[t];r?(n.state=`pace`,n.x0=r.x0,n.x1=r.x1,n.x=(r.x0+r.x1)/2,n.dir=1,n.squashT=0,n.g.visible=!0,n.g.scale.setScalar(1),n.g.userData.mat.color.setHex(Dm[e]),n.g.userData.setVariant(e)):(n.state=`off`,n.g.visible=!1)}this.data.key?(this.keyMesh.visible=!0,this.keyMesh.position.set(this.data.key.x,this.data.key.y,0)):this.keyMesh.visible=!1,this.player.reset(2,this.data.groundY[2]),this.speed=0,this.setChoice(!1),this.moveHeld={},this.camera.position.set(this.player.x+3,4.2,14),r&&(this.bossFight=new om(this.scene,e,this.effects,this.level),this.bossFight.enterAt(this.player.x+12)),this.cb.onDotsInit(this.queue.length),this.cb.onCoins(0),this.cb.onKey(!1),this.running=!0,this.paused=!1,this.syncControls(),this.syncRepeatButton()}stopRun(){this.running=!1,this.clearEvents(),this.setChoice(!1),this.syncControls(),this.syncRepeatButton()}setMove(e,t,n){this.moveHeld[(t<0?`L`:`R`)+e]=n}get moveDir(){let e=this.moveHeld;return(e.Rkey||e.Rbtn?1:0)-(e.Lkey||e.Lbtn?1:0)}setChoice(e){this.choice!==e&&(this.choice=e,this.syncControls())}get boostAllowed(){return this.bossFight?this.bossFight.state===`defeat`||this.bossFight.state===`crownDrop`||this.bossFight.state===`gone`:!0}get controlsMode(){return this.running?this.choice?`choice`:(this.phase===`run`||this.phase===`stars`||this.phase===`flagrun`)&&this.boostAllowed?`boost`:null:null}syncControls(){let e=this.controlsMode;e!==this.shownControls&&(this.shownControls=e,this.cb.onControls&&this.cb.onControls(e))}get repeatAvailable(){return!this.running||!this.announced?!1:this.stars&&!this.stars.done?this.stars.reviews.length>0&&this.stars.pending<=0:!!(this.activeEv&&!this.activeEv.done&&this.spoken)}syncRepeatButton(){let e=this.repeatAvailable;e!==this.shownRepeat&&(this.shownRepeat=e,this.cb.onRepeatButton&&this.cb.onRepeatButton(e))}choiceZone(){let e=this.activeEv;if(e&&!e.done)return e.type===`blocks`?{engage:e.firstX-4.5,min:e.firstX-6,max:e.lastX+1.5}:{engage:e.wallX-8,min:e.wallX-10,max:1/0};if(this.stars&&!this.stars.done&&this.stars.reviews.length&&this.stars.pending<=0){let e=this.stars.stars.filter(e=>e.holder.visible&&!e.taken);if(e.length){let t=e.map(e=>e.holder.position.x);return{engage:Math.min(...t)-4,min:Math.min(...t)-5.5,max:Math.max(...t)+1.5}}}return null}clearEvents(){this.activeEv&&this.activeEv.dispose(),this.activeEv=null;for(let e of this.retiredEvs)e.dispose();this.retiredEvs=[],this.stars&&this.stars.dispose(),this.stars=null,this.bossFight&&=(this.bossFight.dispose(),null)}pause(){this.paused=!0}resume(){this.paused=!1}currentWord(){return this.stars&&!this.stars.done?this.stars.word:this.activeEv&&!this.activeEv.done?this.activeEv.word:this.queue?this.queue[this.eventIdx]:null}get currentEvent(){return this.stars&&!this.stars.done?{type:`stars`,word:this.stars.word}:this.activeEv&&!this.activeEv.done?{type:this.activeEv.type,word:this.activeEv.word}:null}repeatWord(){let e=this.currentWord();this.running&&e&&(Yd(`Find the word: ${e}`,{rate:.85,echoWord:Math.random()<.4,onend:()=>{this.announced=!0}}),this.repeatTimer=Em)}get boss(){return this.bossFight?{hp:this.bossFight.hp,phase:this.bossFight.state}:null}debugResolve(e=!0){if(this.running){if(this.phase===`bossIntro`&&this.endIntro(),this.stars&&!this.stars.done){this.stars.debugResolve(e,this.api);return}!this.activeEv&&this.eventIdx<this.events.length&&this.spawnEvent(),this.activeEv&&!this.activeEv.done&&this.activeEv.debugResolve(e,this.api)}}spawnEvent(){let e=this.events[this.eventIdx],t=this.queue[this.eventIdx],n=ju(t,this.distractorPool,this.tierList),r={...e,word:t,distractors:n};this.activeEv=e.type===`blocks`?new Xp(this.scene,this.level,r):new Qp(this.scene,this.level,r),this.spoken=!1,this.announced=!1}speakIntro(){let e=this.activeEv.word;Yd(this.activeEv.type===`blocks`?`Bonk the block with the word: ${e}!`:`Jump through the door with the word: ${e}!`,{rate:.9,echoWord:Math.random()<.4,onend:()=>{this.announced=!0}}),this.repeatTimer=Em,this.autoRepeats=0,Of().seenRepeatTip||(fp(),this.repeatTipT=3.2)}onEventCorrect(e,t=+!e){let n=this.activeEv?this.activeEv.word:this.stars&&this.stars.word;this.results.push({word:n,firstTry:e}),jf(n,e);let r=t>=2?`orange`:e?`green`:`yellow`;if(this.cb.onDot(this.results.length-1,r),this.bossFight&&this.bossFight.hit(),this.secret){let e=this.player;od(),this.effects.fireworks(new L(e.x+2,e.y+4,0)),this.effects.floatText(new L(e.x,e.y+2.2,0),`+3`),this.addCoins(3)}}onEventFail(){this.firstTryStreak=0;let e=this.activeEv?this.activeEv.word:this.stars&&this.stars.word;this.results.push({word:e,firstTry:!1,failed:!0}),Mf(e),this.cb.onDot(this.results.length-1,`red`),this.bossFight&&this.bossFight.hit()}endIntro(){this.phase===`bossIntro`&&(this.phase=`run`,this.bossFight.settle())}startStars(){let e=this.results.filter(e=>!e.firstTry).map(e=>e.word),t=Du(this.results.map(e=>e.word)),n=e.slice(0,2);for(let e of t){if(n.length>=2)break;n.includes(e)||n.push(e)}let r=n.map(e=>({word:e,distractor:ju(e,this.distractorPool,this.tierList)[0]||`...`}));this.phase=`stars`,this.stars=new em(this.scene,this.level,{x:this.data.starX,reviews:r,onGem:()=>{this.runGems+=1,Ff(1)},onDone:()=>{this.phase=`flagrun`}}),this.announced=!1,r.length&&(Yd(`Star time! Jump under the star with the word: ${r[0].word}!`,{rate:.9,echoWord:Math.random()<.4,onend:()=>{this.announced=!0}}),this.repeatTimer=Em,this.autoRepeats=0)}addCoins(e){this.runCoins=Math.max(0,this.runCoins+e),Pf(e),this.cb.onCoins(this.runCoins)}hurt(e,t=4){rd(),this.player.stumble(),this.stumbleMul=.4;let n=Math.min(this.runCoins,t);n>0&&(this.addCoins(-n),this.effects.coinScatter(e.clone?e.clone():e,n),this.effects.floatText(new L(e.x,e.y+1.8,0),`-${n}`))}bounceBack(e){ud(),this.bounce={from:this.player.x,to:Math.max(2,e),t:0}}updateBounce(e){let t=this.bounce;t.t+=e/.45;let n=Math.min(1,t.t),r=1-(1-n)**3;this.player.x=t.from+(t.to-t.from)*r;let i=this.level.floorAt(this.player.x,this.player.y+1.5);this.player.y=i+Math.sin(n*Math.PI)*.9,this.player.group.position.set(this.player.x,this.player.y,0),n>=1&&(this.player.y=i,this.player.vy=0,this.player.grounded=!0,this.bounce=null)}updateCritters(e){let t=this.player;for(let n of this.critters){if(n.state===`off`)continue;if(n.state===`squash`){n.squashT-=e,n.g.scale.set(1.3,Math.max(.1,n.squashT/.4),1.3),n.squashT<=0&&(n.state=`off`,n.g.visible=!1);continue}if(n.state===`bonked`){n.squashT-=e,n.x+=n.dir*6*e;let t=Math.max(0,n.squashT/.5),r=Math.max(this.level.groundTopAt(n.x-.45),this.level.groundTopAt(n.x+.45));n.g.position.set(n.x,r+(1-t)*1.2*Math.sin(t*Math.PI),0),n.g.rotation.z+=n.dir*-10*e,n.g.scale.setScalar(Math.max(.05,t)),n.squashT<=0&&(n.state=`off`,n.g.visible=!1);continue}n.x+=n.dir*1.1*e,n.x<n.x0&&(n.x=n.x0,n.dir=1),n.x>n.x1&&(n.x=n.x1,n.dir=-1);let r=Math.max(this.level.groundTopAt(n.x-.45),this.level.groundTopAt(n.x+.45));if(n.g.position.set(n.x,r+Math.abs(Math.sin(this.elapsed*8+n.x))*.08,0),n.g.rotation.y=n.dir>0?.25:-.25,n.g.rotation.z=Math.sin(this.elapsed*8+n.x)*.08,n.state!==`pace`||!n.g.children.length||Math.abs(t.x-n.x)>.8)continue;let i=n.g.position.y;t.vy<-1&&t.y>i+.3&&t.y<i+1.1?(n.state=`squash`,n.squashT=.4,ld(),this.effects.sparkle(n.g.position.clone()),this.effects.floatText(new L(n.x,i+1.4,0),`+2`),this.addCoins(2),t.bounce(7.5)):t.y<i+.8&&t.grounded&&(this.hurt(n.g.position.clone()),n.state=`bonked`,n.squashT=.5,n.dir=t.x<n.x?1:-1,this.effects.sparkle(n.g.position.clone()))}}updateKey(){if(!this.keyMesh.visible||this.keyFound)return;this.keyMesh.rotation.y+=.03,this.keyMesh.position.y=this.data.key.y+Math.sin(this.elapsed*2.5)*.15;let e=this.player;Math.abs(e.x-this.data.key.x)<.9&&e.y+1.7>this.data.key.y-.6&&e.y<this.data.key.y+.8&&(this.keyFound=!0,this.keyMesh.visible=!1,fd(),this.effects.confetti(this.keyMesh.position.clone()),this.effects.sparkle(this.keyMesh.position.clone()),Jd(`secretKey`),this.cb.onKey(!0))}tick(e){this.elapsed+=e,this.running&&!this.paused&&this.updateRun(e),this.updateCamera(e)}updateRun(e){let t=this.player,n=this.choiceZone();this.choice&&!n?this.setChoice(!1):!this.choice&&n&&t.x>=n.engage&&(this.speed=0,sd(2),this.setChoice(!0));let r=this.secret?Sm*1.2:Sm;if(this.phase===`stars`&&(r=Cm),(this.phase===`flag`||this.phase===`done`||this.choice)&&(r=0),(this.phase===`bossIntro`||this.phase===`bossDefeat`)&&(r=0),!this.choice&&r>0&&this.moveDir>0&&this.boostAllowed&&(r*=Tm),this.stumbleMul=Math.min(1,this.stumbleMul+e*1.2),r*=this.stumbleMul,this.speed+=(r-this.speed)*Math.min(1,e*4),this.bounce)this.updateBounce(e);else if(this.phase!==`flag`&&this.phase!==`done`){let r=this.choice?this.moveDir*wm:this.speed;if(t.update(e,r,this.level,{onLand:e=>{e>6&&(this.effects.sparkle(new L(t.x,t.y+.2,0)),vd())}}),this.choice&&n&&(t.x=Math.min(Math.max(t.x,n.min),n.max)),this.activeEv&&!this.activeEv.done){let e=this.activeEv.clampX();t.x>e&&(t.x=e)}}let i=this.secret?2:1;for(let e of this.level.collectCoins(t.x,t.y))td(),this.addCoins(i),this.effects.sparkle(e),this.effects.floatText(e,`+${i}`);if(this.lavaCool=Math.max(0,this.lavaCool-e),this.data&&this.data.hazards&&t.grounded&&this.lavaCool<=0){for(let e of this.data.hazards)if(t.x>=e.x0-.4&&t.x<=e.x1+.4){this.hurt(new L(t.x,e.y+.3,0),2),t.bounce(6),this.lavaCool=1.1;break}}if(this.secret&&!this.choice&&this.speed>2&&(this.trailT-=e,this.trailT<=0&&(this.trailT=.16,this.effects.sparkle(new L(t.x-.5,t.y+.3,0)))),this.choice||this.updateCritters(e),this.updateKey(),this.level.update(e,t.x),this.effects.update(e),this.bossFight){let n=this.activeEv&&!this.activeEv.done?this.activeEv:null;this.bossFight.update(e,t,this.api,{battle:this.phase===`run`,challengeActive:!!n,minX:n&&n.lastX?n.lastX+5:0})}if(this.phase===`bossIntro`)this.introT+=e,!this.introSpoke&&this.introT>1.4&&(this.introSpoke=!0,Yd(`The ${rm[this.worldIdx].name} wants to hear you read!`,{rate:1})),this.introT>5.5&&this.endIntro();else if(this.phase===`run`)this.activeEv?(!this.spoken&&t.x>this.activeEv.x-2&&(this.spoken=!0,this.speakIntro()),this.activeEv.update(e,t,this.api),this.activeEv.done&&t.x>this.activeEv.passedX()&&(this.retiredEvs.push(this.activeEv),this.activeEv=null,this.eventIdx++)):this.eventIdx<this.events.length?t.x>this.events[this.eventIdx].x-14&&this.spawnEvent():this.isBoss?(this.phase=`bossDefeat`,this.bossFight.startDefeat(this.api,t),qd(`bossWin`,Lu(rm[this.worldIdx].name))):t.x>this.data.starX-10&&this.startStars();else if(this.phase===`stars`)this.stars.update(e,t,this.api);else if(this.phase===`bossDefeat`)this.bossFight.state===`gone`&&(this.phase=`flagrun`);else if(this.phase===`flagrun`){if(t.x>=this.data.flagX-.4){this.phase=`flag`,this.flagT=0,t.x=this.data.flagX-.45,od(),Jd(`levelComplete`),this.effects.fireworks(new L(t.x,3,0));let e=this.level.groundTopAt(this.data.flagX),n=t.y-e,r=n>=5?10:n>=3?5:n>=1.5?2:0;r>0&&(this.addCoins(r),this.effects.floatText(new L(t.x,t.y+1.6,0),`+${r}`),this.effects.fireworks(new L(t.x+1.5,t.y+2,0)),n>=5&&(fd(),this.effects.confetti(new L(t.x,t.y+1,0)),this.effects.floatText(new L(t.x,t.y+2.8,0),`TOP!`)))}}else if(this.phase===`flag`){this.flagT+=e;let n=this.level.groundTopAt(this.data.flagX),r=Math.min(1,this.flagT/1.1);t.y=Math.max(n,t.y-e*6),t.group.position.set(t.x,t.y,0),this.level.flag.position.y=7.4-r*6.2,r>=1&&(this.phase=`done`,this.doneTimer=2.4)}else this.phase===`done`&&(this.doneTimer-=e,this.doneTimer<=0&&this.finishRun());if(this.retiredEvs.length){let n=this.camera,r=n.position.x-Math.tan(Ft.degToRad(n.fov/2))*n.aspect*n.position.z;Number.isFinite(r)||(r=t.x-20),this.retiredEvs=this.retiredEvs.filter(n=>(n.update(e,t,this.api),n.passedX()<r-2?(n.dispose(),!1):!0))}(this.stars&&!this.stars.done&&this.stars.reviews.length&&this.stars||this.activeEv&&!this.activeEv.done&&this.spoken&&this.activeEv)&&(this.repeatTimer-=e,this.repeatTimer<=0&&this.autoRepeats<2&&(this.autoRepeats++,this.repeatTimer=Em,this.repeatWord(),this.cb.onAutoRepeat&&this.cb.onAutoRepeat())),this.repeatTipT>0&&(this.repeatTipT-=e,this.repeatTipT<=0&&this.cb.onRepeatTip&&this.cb.onRepeatTip()),this.syncControls(),this.syncRepeatButton()}finishRun(){this.running=!1,this.syncControls(),this.syncRepeatButton(),this.clearEvents(),this.cb.onRunComplete({results:this.results,coins:this.runCoins,gems:this.runGems,keyFound:this.keyFound})}updateCamera(e){let t=this.player,n=1-Math.exp(-e*4),r=1-Math.exp(-e*3),i=t.x+3.2,a=Math.max(4.2,t.y*.6+3.4);this.camera.position.x+=(i-this.camera.position.x)*n,this.camera.position.y+=(a-this.camera.position.y)*r,this.camera.position.z=14,this.lookTarget.set(this.camera.position.x+.8,this.camera.position.y-1.6,0),this.camera.lookAt(this.lookTarget)}},Nm=9,Pm=26;function Fm(){let e=iu(1234),t=[],n=[];Su.forEach((e,r)=>{let i=e.levels.length,a=r%2==0;for(let e=0;e<=i;e++){let n=e/i,o=a?n:1-n;t.push({world:r,level:e,boss:e===i,isWorldFinal:e===i,x:-26/2+o*Pm,z:r*Nm+Math.sin(n*Math.PI*2+r)*1.4})}n.push({world:r,x:a?19:-26/2-6,z:r*Nm-4.5})});let r=[null];for(let n=1;n<t.length;n++){let i=t[n-1],a=t[n],o=[{x:i.x,z:i.z}];if(i.world!==a.world){let e=i.x+(i.x>0?3.5:-3.5);o.push({x:e,z:i.z+Nm*.5})}o.push({x:a.x,z:a.z}),r.push(Lm(o,e,i.world===a.world))}return{nodes:t,secretNodes:n,segments:r,bounds:{minX:-26/2-8,maxX:21,minZ:-5,maxZ:(Su.length-1)*Nm+7}}}function Im(e,t){let n=t.x>=e.x?1:-1,r=t.z+.5;return Lm([{x:e.x,z:e.z},{x:e.x+n*.6,z:r+.7},{x:t.x-n*3.2,z:r},{x:t.x,z:t.z}],iu(99),!1)}function Lm(e,t,n){let r=[];for(let i=0;i<e.length-1;i++){let a=e[i],o=e[i+1],s=Math.hypot(o.x-a.x,o.z-a.z),c=Math.max(2,Math.round(s)),l=-(o.z-a.z)/(s||1),u=(o.x-a.x)/(s||1);for(let e=i===0?0:1;e<=c;e++){let i=e/c,s=n?Math.sin(i*Math.PI*2+t()*6)*.5:0;r.push({x:a.x+(o.x-a.x)*i+l*s,z:a.z+(o.z-a.z)*i+u*s})}}return r.slice(1,-1)}var Rm=[{id:`rug`,name:`Cozy Rug`,emoji:`🟥`,cost:25,currency:`coins`},{id:`chair`,name:`Comfy Chair`,emoji:`🪑`,cost:35,currency:`coins`},{id:`table`,name:`Table`,emoji:`🍽️`,cost:45,currency:`coins`},{id:`bed`,name:`Big Kid Bed`,emoji:`🛏️`,cost:60,currency:`coins`},{id:`lamp`,name:`Lamp`,emoji:`💡`,cost:50,currency:`coins`},{id:`bookshelf`,name:`Bookshelf`,emoji:`📚`,cost:80,currency:`coins`},{id:`toybox`,name:`Toy Box`,emoji:`🧸`,cost:90,currency:`coins`},{id:`flowers`,name:`Flower Bed`,emoji:`🌷`,cost:40,currency:`coins`},{id:`mailbox`,name:`Mailbox`,emoji:`📬`,cost:55,currency:`coins`},{id:`tree`,name:`Shady Tree`,emoji:`🌳`,cost:75,currency:`coins`},{id:`swing`,name:`Swing Set`,emoji:`🛝`,cost:120,currency:`coins`},{id:`trampoline`,name:`Trampoline`,emoji:`🤸`,cost:150,currency:`coins`},{id:`cat`,name:`Pet Cat`,emoji:`🐱`,cost:20,currency:`gems`},{id:`dog`,name:`Pet Dog`,emoji:`🐶`,cost:30,currency:`gems`},{id:`aquarium`,name:`Fish Tank`,emoji:`🐠`,cost:40,currency:`gems`},{id:`telescope`,name:`Telescope`,emoji:`🔭`,cost:55,currency:`gems`},{id:`robot`,name:`Robot Buddy`,emoji:`🤖`,cost:70,currency:`gems`},{id:`rocket`,name:`Rocket Ship`,emoji:`🚀`,cost:100,currency:`gems`},{id:`golemstatue`,name:`Meatball Monster Statue`,emoji:`🍝`,earned:0},{id:`serpentstatue`,name:`Syrup Serpent Statue`,emoji:`🧇`,earned:1},{id:`yetisnowman`,name:`Yeti Snowman`,emoji:`⛄`,earned:2},{id:`cabbagecrown`,name:`Cabbage Crown`,emoji:`🥬`,earned:3},{id:`crystallamp`,name:`Crystal Lamp`,emoji:`💎`,earned:4},{id:`dragonkite`,name:`Pepper Kite`,emoji:`🪁`,earned:5}];function zm(e){return Rm.find(t=>t.id===e)||null}function Bm(e){return Rm.find(t=>t.earned===e)||null}var G=Ul,Vm=new ta(.5,8,6);function Hm(e,t,n=0){let r=Math.sin(e*127.1+t*311.7+n*74.7)*43758.5453;return r-Math.floor(r)}var Um=Kl();{let e=Um.attributes.normal,t=new Float32Array(e.count*3),n=(e,t)=>t>.5?[1,1,1]:t<-.5?[.4,.34,.3]:Math.abs(e)>.5?[.72,.58,.46]:[.8,.65,.51];for(let r=0;r<e.count;r++)t.set(n(e.getX(r),e.getY(r)),r*3);Um.setAttribute(`color`,new xr(t,3))}var Wm=new Yi(1,1,1),Gm=new L(0,18,21),Km=700,qm=320,Jm=3e3,Ym=900,Xm=80,Zm=80,Qm=.45,$m=9,eh=.56,th={x:-17.5,z:-2.5};function nh(e,t,n,r){return n?`${Su[e].name} Secret`:r?`${Su[e].name} Castle`:`${Su[e].name} ${t+1}`}var rh=class{constructor(e,t){this.cb=t,this.renderer=e,this.active=!1,this.scene=new Hn,this.scene.background=new B(8702448),this.scene.fog=new Vn(8702448,34,72),this.camera=new Ua(45,window.innerWidth/window.innerHeight,.1,200);let n=new ja(16772824,7183546,1.1),r=new Ja(16769968,1.45);r.position.set(6,14,8),this.scene.add(n,r),this.effects=new ym(this.scene),this.data=Fm(),this.buildCorridors(),this.buildTerrain(),this.buildWater(),this.buildProps(),this.buildCritters(),this.buildSigns(),this.buildSkyClouds(),this.buildTiles(),this.buildNodes(),this.buildHouse(),this.lockState=Su.map((e,t)=>({unlocked:sp(t),t:1})),this.applyLockTints(),this.token=Lp(1.125),this.token.rotation.y=-Math.PI/2;let i=new Yi(1,1,1);this.tokenHit=new V(i,new fi({visible:!1})),this.tokenHit.scale.set(2,2.6,2),this.tokenHit.position.y=1,this.token.add(this.tokenHit);let a=new H({color:16766282,emissive:6704384});this.editIcon=new z;let o=new V(i,a);o.scale.setScalar(.34),o.position.y=.4;let s=new V(i,a);s.scale.set(.42,.44,.24);let c=new V(i,a);c.scale.set(.13,.36,.13),c.position.set(-.31,.02,0);let l=c.clone();l.position.x=.31,this.editIcon.add(o,s,c,l),this.editIcon.position.y=2.7,this.token.add(this.editIcon),this.editHit=new V(i,new fi({visible:!1})),this.editHit.scale.setScalar(1.7),this.editHit.position.y=2.7,this.token.add(this.editHit),this.scene.add(this.token),this.tokenNav=0,this.walk=null,this.focus=new L,this.panIdle=99,this.revealQueue=[],this.reveal=null,this.navList=[],this.attachInput()}buildCorridors(){let{nodes:e,secretNodes:t,segments:n}=this.data;this.keepCells=new Set,this.flatCells=new Set;let r=(e,t,n,r)=>{for(let i=Math.round(t-r);i<=Math.round(t+r);i++)for(let a=Math.round(n-r);a<=Math.round(n+r);a++)(i-t)**2+(a-n)**2<=r*r&&e.add(i+`,`+a)},i=(e,t,n,i)=>{let a=Math.max(1,Math.ceil(Math.hypot(n.x-t.x,n.z-t.z)*2));for(let o=0;o<=a;o++){let s=o/a;r(e,t.x+(n.x-t.x)*s,t.z+(n.z-t.z)*s,i)}};for(let t=1;t<e.length;t++){let n=e[t-1].world!==e[t].world;i(this.keepCells,e[t-1],e[t],n?1.3:2)}for(let e=1;e<n.length;e++)for(let t of n[e])r(this.keepCells,t.x,t.z,1.7);r(this.keepCells,th.x,th.z,2.6),i(this.keepCells,th,e[0],2.6),r(this.keepCells,th.x+2.3,th.z+3.7,2.2);for(let e of this.keepCells)this.flatCells.add(e);t.forEach((t,n)=>{let a=e.filter(e=>e.world===n);i(this.flatCells,a[a.length-1],t,1.6);let o=e.find(e=>e.world===n+1);o&&i(this.flatCells,t,o,1.3);for(let e of a)if(e.level===1||(n+e.level)%2==0){let n={x:e.x,z:t.z+.5};i(this.flatCells,e,n,1.6),i(this.flatCells,n,t,1.6)}r(this.flatCells,t.x,t.z,2.2)})}buildWater(){let e=this.data.bounds,t=(e.minX+e.maxX)/2,n=(e.minZ+e.maxZ)/2,r=new V(G,new H({color:4424908}));r.scale.set(e.maxX-e.minX+60,1,e.maxZ-e.minZ+44),r.position.set(t,-1.35,n),this.scene.add(r);let i=new B(4424908),a=new B(6280914),o=(e,t)=>{for(let n=1;n<=5;n++)for(let r=-n;r<=n;r++)for(let i=-n;i<=n;i++)if(Math.max(Math.abs(r),Math.abs(i))===n&&this.groundH.has(e+r+`,`+(t+i)))return n;return 6};this.waterTiles=[];for(let t=Math.floor(e.minX)-30;t<=Math.ceil(e.maxX)+30;t+=2)for(let n=Math.floor(e.minZ)-22;n<=Math.ceil(e.maxZ)+22;n+=2){if(this.groundH.has(t+`,`+n)&&this.groundH.has(t+1+`,`+n)&&this.groundH.has(t+`,`+(n+1))&&this.groundH.has(t+1+`,`+(n+1)))continue;let e=o(t,n),r=a.clone().lerp(i,Math.min(1,(e-1)/4.5));r.offsetHSL(0,0,(Hm(t,n,5)-.5)*.05),this.waterTiles.push({x:t+.5,z:n+.5,color:r,phase:Hm(t,n,6)*Math.PI*2,amp:e<3?.09:.05})}let s=Wm.clone(),c=new Float32Array(this.waterTiles.length*2);this.waterTiles.forEach((e,t)=>{c[t*2]=e.phase,c[t*2+1]=e.amp}),s.setAttribute(`waterPhaseAmp`,new Di(c,2));let l=new H;l.onBeforeCompile=e=>{e.uniforms.uTime=this.waterTime={value:0},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec2 waterPhaseAmp;
uniform float uTime;`).replace(`#include <color_vertex>`,`#include <color_vertex>
          float waterK = 1.0 + sin(uTime * 1.3 + waterPhaseAmp.x
            + instanceMatrix[3][0] * 0.35 + instanceMatrix[3][2] * 0.21) * waterPhaseAmp.y;
          vColor.rgb *= waterK;`)},this.waterMesh=new Fi(s,l,this.waterTiles.length),this.waterMesh.frustumCulled=!1,this.waterDummy=new Nn,this.waterTiles.forEach((e,t)=>{this.waterDummy.position.set(e.x,-.8,e.z),this.waterDummy.scale.set(2,.1,2),this.waterDummy.updateMatrix(),this.waterMesh.setMatrixAt(t,this.waterDummy.matrix),this.waterMesh.setColorAt(t,e.color)}),this.waterMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.waterMesh),this.foam=[];let u=new Set;for(let e of this.groundH.keys()){let[t,n]=e.split(`,`).map(Number);for(let[e,r]of[[1,0],[-1,0],[0,1],[0,-1]]){let i=t+e,a=n+r,o=i+`,`+a;this.groundH.has(o)||u.has(o)||(u.add(o),!(this.foam.length>=640)&&this.foam.push({x:i+(Hm(i,a,7)-.5)*.5,z:a+(Hm(i,a,8)-.5)*.5,phase:Hm(i,a,9)*Math.PI*2,s:.12+Hm(i,a,10)*.16}))}}this.foamMesh=new Fi(Wm,new H({color:16055295,transparent:!0,opacity:.85}),this.foam.length),this.foamMesh.instanceMatrix.setUsage(Xe),this.foamMesh.frustumCulled=!1,this.lastFoamT=-1,this.scene.add(this.foamMesh),this.glints=[];let d=iu(6161),f=0;for(;this.glints.length<36&&f++<300;){let t=e.minX-10+d()*(e.maxX-e.minX+20),n=e.minZ-6+d()*(e.maxZ-e.minZ+12);this.groundH.has(Math.round(t)+`,`+Math.round(n))||this.glints.push({x:t,z:n,phase:d()*Math.PI*2,speed:.5+d()*.8})}this.glintMesh=new Fi(Wm,new fi({color:16777215}),this.glints.length),this.glintMesh.instanceMatrix.setUsage(Xe),this.glintMesh.frustumCulled=!1,this.scene.add(this.glintMesh)}updateWater(e){if(this.waterTime&&(this.waterTime.value=e),e-this.lastFoamT<.05)return;this.lastFoamT=e;let t=this.waterDummy;for(let n=0;n<this.foam.length;n++){let r=this.foam[n],i=Math.sin(e*1.6+r.phase);t.position.set(r.x,-.62+i*.05,r.z);let a=r.s*(1+i*.18);t.scale.set(a,.08,a),t.rotation.set(0,r.phase,0),t.updateMatrix(),this.foamMesh.setMatrixAt(n,t.matrix)}this.foamMesh.instanceMatrix.needsUpdate=!0;for(let n=0;n<this.glints.length;n++){let r=this.glints[n],i=Math.max(0,Math.sin(e*r.speed+r.phase)),a=1e-4+i*i*i*.3;t.position.set(r.x,-.58,r.z),t.scale.set(a,.06,a),t.rotation.set(0,e*.5+r.phase,0),t.updateMatrix(),this.glintMesh.setMatrixAt(n,t.matrix)}this.glintMesh.instanceMatrix.needsUpdate=!0}buildTerrain(){this.groundMesh=new Fi(Um,new H({vertexColors:!0}),Jm),this.groundMesh.frustumCulled=!1,this.scene.add(this.groundMesh),this.groundMeta=[],this.groundH=new Map,this.swampPools=[],this.lavaPools=[];let e=new Nn,t=new Set,n=(n,r,i,a,o)=>{let s=n+`,`+r;if(t.has(s)||this.groundMeta.length>=Jm)return;t.add(s),this.groundH.set(s,i);let c=1.3+i;e.position.set(n,i-c/2,r),e.scale.set(1,c,1),e.updateMatrix(),this.groundMesh.setMatrixAt(this.groundMeta.length,e.matrix);let l=new B(a);i>0&&l.offsetHSL(0,0,i*.035),l.offsetHSL((Hm(n,r,1)-.5)*.024,(Hm(n,r,2)-.5)*.1,(Hm(n,r,3)-.5)*.09),this.groundMeta.push({region:o,color:l,cx:n,cz:r,tier:i})};Su.forEach((e,t)=>{let r=Ql[t],i=t===3?[7225433,6436943]:r.top,a=t*$m,o=iu(t*53+11);for(let e=-21;e<=21;e++)for(let r=-5;r<=5;r++){let s=a+r,c=e+`,`+s,l=this.flatCells.has(c),u=Math.abs(e),d=Math.abs(r),f=u<=19&&d<=3;if(!f){let e=o();u<=20&&d<=3?f=e<.55:u===21&&d<=3?f=e<.15:u<=19&&d===4&&(f=e<.22)}if(this.keepCells.has(c)&&(f=!0),!f)continue;if(t===3&&!l&&Math.sin(e*.72+1.4)*Math.sin(s*.94-.6)<-.64&&Hm(e,s,23)<.68){this.swampPools.push({x:e,z:s});continue}if(t===5&&!l&&Math.sin(e*.9+2)*Math.sin(s*.8)<-.62&&Hm(e,s,7)<.72){this.lavaPools.push({x:e,z:s});continue}let p=0;if(!l){let n=Math.sin(e*.55+t*2)+Math.sin(s*.75+e*.21);p=n>1.1?1:n>.35?.5:0}n(e,s,p,i[e+s&1],t)}let s=this.data.secretNodes[t],c=Math.round(s.x),l=Math.round(s.z);for(let e=-2;e<=2;e++)for(let r=-2;r<=2;r++)Math.abs(e)===2&&Math.abs(r)===2||n(c+e,l+r,0,i[e+r&1],t);if(t<Su.length-1){let e=t%2==0?1:-1;for(let r=12;r<=16;r++)for(let i=4;i<=5;i++)(r===12||r===16)&&o()<.4||n(e*r,a+i,0,r+i&1?15259292:14469518,t+1)}}),this.islands=[{x:-27,z:4,palm:!0},{x:27,z:13,palm:!1},{x:-26,z:22,palm:!1},{x:26,z:31,palm:!0}];let r=iu(4242);for(let e of this.islands)for(let t=-1;t<=1;t++)for(let i=-1;i<=1;i++)Math.abs(t)+Math.abs(i)===2&&r()<.5||n(e.x+t,e.z+i,0,t+i&1?15651982:15059326,-1);this.swampPools=this.swampPools.filter(e=>!this.groundH.has(e.x+`,`+e.z)),this.lavaPools=this.lavaPools.filter(e=>!this.groundH.has(e.x+`,`+e.z));let i=new B(15521695),a=new B(4535600),o=new B(8273190);for(let e of this.groundMeta)e.tier>0||(!this.groundH.has(e.cx+1+`,`+e.cz)||!this.groundH.has(e.cx-1+`,`+e.cz)||!this.groundH.has(e.cx+`,`+(e.cz+1))||!this.groundH.has(e.cx+`,`+(e.cz-1)))&&e.color.lerp(e.region===5?a:e.region===3?o:i,.5+Hm(e.cx,e.cz,4)*.25);for(let e of this.groundMeta){let t=0;for(let[n,r]of[[1,0],[-1,0],[0,1],[0,-1]]){let i=this.groundH.get(e.cx+n+`,`+(e.cz+r));i!==void 0&&i>e.tier&&t++}e.color.multiplyScalar(t?Math.max(.76,1-t*.08):1.03)}this.groundMesh.count=this.groundMeta.length,this.groundMesh.instanceMatrix.needsUpdate=!0}buildProps(){this.decorMesh=new Fi(Gl,new H,Ym),this.decorMesh.frustumCulled=!1,this.scene.add(this.decorMesh),this.decorMeta=[],this.glowMesh=new Fi(Gl,new H({emissive:2763349}),Xm),this.glowMesh.frustumCulled=!1,this.scene.add(this.glowMesh),this.glowMeta=[],this.swampPoolMat=new H({color:16777215,emissive:12916392,emissiveIntensity:.5}),this.swampPoolMesh=new Fi(Wm,this.swampPoolMat,Zm),this.swampPoolMesh.frustumCulled=!1,this.scene.add(this.swampPoolMesh),this.swampPoolMeta=[],this.pulseMats=[{mat:this.swampPoolMat,region:3}],this.glowPulse=0,this.voxDecor=[],this.voxBuildId=(this.voxBuildId||0)+1;let e=this.voxBuildId,t=new Nn,n=(e,n,r)=>i=>(a,o,s,c,l,u,d,f=0,p=0)=>{n.length>=r||(t.position.set(a,o,s),t.scale.set(c,l,u),t.rotation.set(0,f,p),t.updateMatrix(),e.setMatrixAt(n.length,t.matrix),n.push({region:i,color:new B(d)}))},r=n(this.decorMesh,this.decorMeta,Ym),i=n(this.glowMesh,this.glowMeta,Xm),a=n(this.swampPoolMesh,this.swampPoolMeta,Zm),o=(e,t,n,r)=>{e(t,n+.9,r,.28,1.8,.28,9263659),e(t,n+1.85,r,1.9,.22,.5,4169274,0,.5),e(t,n+1.85,r,1.9,.22,.5,5027141,0,-.6),e(t,n+2,r,.5,.22,1.9,4169274)},s=(e,t,n,r,i)=>{e(t,n+.3,r,1.1,.7,.9,i,.4),e(t+.4,n+.55,r+.2,.6,.5,.55,i,.9)},c=(e,t,n,r,i,a)=>{let o=i()*Math.PI*2,s=a&1?8208271:10247088,c=a&1?10247088:8208271;e(t,n+.18,r,.95,.28,.55,s,o,.12),e(t,n+.2,r,.55,.3,.95,s,o+Math.PI/2,-.12),e(t,n+.44,r,.62,.45,.62,c,o),e(t,n+.68,r,.18,.09,.76,14271208,o+.2),e(t,n+.68,r,.76,.09,.18,14271208,o-.15)},l=(e,t,n,r,i)=>{for(let a=0;a<4;a++){let o=i()*Math.PI*2,s=.12+i()*.35;e(t+Math.cos(o)*s,n+.38+i()*.16,r+Math.sin(o)*s,.07,.74+i()*.32,.07,a&1?4169354:6073981,o,(i()-.5)*.28)}e(t,n+.12,r,.7,.16,.5,8273190,i()*Math.PI)},u=(e,t,n,r,i)=>{let a=(i()-.5)*.34;e(t,n+.72,r,.24,1.45,.24,14248532,i()*.2,a),e(t+Math.sin(a)*.22,n+1.55,r,.2,.9,.2,11031346,0,a*.6);let o=t+Math.sin(a)*.36,s=n+2.1;for(let t=0;t<4;t++){let n=t*Math.PI/2+i()*.28;e(o+Math.cos(n)*.55,s-.08,r+Math.sin(n)*.55,1.35,.18,.34,t&1?4169354:5616541,n,-.24-i()*.18)}},d=(e,t)=>{for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++)if(this.flatCells.has(e+n+`,`+(t+r)))return!0;return!1},f=(e,t,n)=>{let r=[],i=0;for(;r.length<t&&i++<250;){let t=Math.round(-19+n()*38),i=Math.round(e*$m-3+n()*6),a=t+`,`+i;!this.groundH.has(a)||d(t,i)||r.some(e=>Math.abs(e.x-t)<3&&Math.abs(e.z-i)<3)||r.push({x:t,z:i,y:this.groundH.get(a)})}return r},p=[(e,t,n,r)=>{r<4?(e(t.x,t.y+.6,t.z,.3,1.2,.3,16111480),e(t.x,t.y+1.6,t.z,1.4,1,1.4,9063213),e(t.x,t.y+2.3,t.z,.8,.4,.8,13779498)):r&1?(e(t.x,t.y+.22,t.z,.08,.45,.08,4169274),e(t.x,t.y+.52,t.z,.26,.26,.26,14826286)):(e(t.x-.16,t.y+.16,t.z,.26,.3,.2,15777888,0,.5),e(t.x+.16,t.y+.16,t.z,.26,.3,.2,15777888,0,-.5),e(t.x,t.y+.16,t.z,.12,.2,.22,14855501))},(e,t,n,r)=>{r<3?(e(t.x,t.y+.25,t.z,1.5,.45,1.5,13601852,n()*.4),e(t.x+.1,t.y+.65,t.z,1.4,.4,1.4,14523466),e(t.x,t.y+1,t.z,.5,.28,.5,16769898)):r<6?(e(t.x,t.y+.25,t.z,2.6,.6,1.8,14723152,n()*.6),e(t.x+.5,t.y+.55,t.z+.2,1.2,.25,.9,9062938)):r===6?(e(t.x,t.y+.55,t.z,1.1,1.1,1.1,14826286),e(t.x,t.y+1.2,t.z,.7,.3,.7,4169274),e(t.x+.2,t.y+1.45,t.z,.14,.3,.14,4169274)):s(e,t.x,t.y,t.z,5911840)},(e,t,n,r)=>{r<4?(e(t.x,t.y+.55,t.z,.32,1.1,.32,7031338),e(t.x,t.y+1.55,t.z,1.4,1,1.4,3046735),e(t.x,t.y+2.25,t.z,1.5,.4,1.5,16054524)):r===4?(e(t.x,t.y+.45,t.z,.9,.9,.9,16777215),e(t.x,t.y+1.2,t.z,.65,.65,.65,16054524),e(t.x,t.y+1.75,t.z,.45,.45,.45,16777215),e(t.x,t.y+1.75,t.z+.3,.1,.1,.25,16747586)):r<7?e(t.x,t.y+.03,t.z,1.9,.08,1.5,13625599,n()):s(e,t.x,t.y,t.z,11190998)},(e,t,n,r,i)=>{r<3?(c(e,t.x,t.y,t.z,n,r),r<2&&i(t.x+.28,t.y+.34,t.z-.18,.18,.08,.18,15286216,n()*Math.PI)):r<6?l(e,t.x,t.y,t.z,n):r<8?u(e,t.x,t.y,t.z,n):s(e,t.x,t.y,t.z,r&1?11031346:8273190)},(e,t,n,r,i)=>{if(r<2)e(t.x-.9,t.y+.8,t.z,.6,1.6,.6,5526623),e(t.x+.9,t.y+.8,t.z,.6,1.6,.6,6184556),e(t.x,t.y+1.75,t.z,2.6,.55,.7,5526623);else if(r<6){let a=[8319231,13663999,16747224];for(let e=0;e<3;e++)i(t.x+(e-1)*.5,t.y+.7+n()*.4,t.z,.32,1.2+n()*.9,.32,a[(r+e)%3],0,(e-1)*.28);e(t.x,t.y+.12,t.z,1.5,.35,1.5,4868696)}else e(t.x,t.y+.25,t.z,.18,.5,.18,14209216),e(t.x,t.y+.58,t.z,.6,.28,.6,15684432)},(e,t,n,r,i)=>{if(r<2)e(t.x,t.y+.35,t.z,1.9,.7,1.9,4864564,n()*.5),e(t.x,t.y+.95,t.z,1.3,.55,1.3,6046776),e(t.x,t.y+1.42,t.z,.8,.45,.8,3812648),i(t.x,t.y+1.7,t.z,.5,.16,.5,16751164);else if(r<6){e(t.x,t.y+.32,t.z,.95,.6,.95,4169274,n()*.6),e(t.x,t.y+.72,t.z,.6,.4,.6,5027141);let i=[14826286,16747586,16767293];for(let n=0;n<3;n++){let a=(r+n)*2.1;e(t.x+Math.cos(a)*.42,t.y+.38+(n&1)*.28,t.z+Math.sin(a)*.42,.18,.3,.18,i[(r+n)%3],a)}}else s(e,t.x,t.y,t.z,3945262),i(t.x+.15,t.y+.52,t.z+.1,.16,.12,.34,16740401,.7)}],m=[9,9,8,8,8,8];Su.forEach((e,t)=>{let n=iu(t*131+17),a=r(t),o=i(t);f(t,m[t],n).forEach((e,r)=>p[t](a,e,n,r,o))});{let t=iu(11717),n=(n,r)=>{for(let[i,a]of n){let n=this.groundH.get(i+`,`+a);if(n===void 0||this.flatCells.has(i+`,`+a))continue;let o=new z;o.position.set(i,n-.1,a),o.rotation.y=t()*Math.PI*2,o.scale.setScalar(r+t()*.08),this.scene.add(o);let s={region:0,mats:[]};this.voxDecor.push(s),Yl(`./models/spaghetti-pile.json`).then(t=>{if(e!==this.voxBuildId)return;let{group:n,parts:r}=Zl(t);o.add(n);for(let e in r)s.mats.push(r[e].material);this.applyLockTints()}).catch(e=>console.error(`spaghetti-pile model failed to load:`,e));return}};n([[-12,3],[-13,3],[-11,3]],.72),n([[10,3],[11,2],[9,3]],.5)}{let t=iu(20627),n=(n,r)=>{for(let[i,a]of n){let n=this.groundH.get(i+`,`+a);if(n===void 0||this.flatCells.has(i+`,`+a))continue;let o=new z;o.position.set(i,n-.1,a),o.rotation.y=t()*Math.PI*2,o.scale.setScalar(r+t()*.08),this.scene.add(o);let s={region:2,mats:[]};this.voxDecor.push(s),Yl(`./models/snowcone-mountain.json`).then(t=>{if(e!==this.voxBuildId)return;let{group:n,parts:r}=Zl(t);o.add(n);for(let e in r)s.mats.push(r[e].material);this.applyLockTints()}).catch(e=>console.error(`snowcone-mountain model failed to load:`,e));return}};n([[-12,21],[-13,21],[-11,21]],.6),n([[11,21],[10,21],[12,20]],.42)}{let t=a(3),n=3*$m;for(let e of this.swampPools)t(e.x,-.45,e.z,1.08,.12,1.08,Hm(e.x,e.z,31)<.5?12916392:15286216,Hm(e.x,e.z,32)*.35);this.swampBubbles=[];let r=new Set(this.swampPools.map(e=>e.x+`,`+e.z)),i=this.swampPools.map(e=>{let t=Hm(e.x,e.z,33);for(let[n,i]of[[1,0],[-1,0],[0,1],[0,-1]])r.has(e.x+n+`,`+(e.z+i))&&(t+=1);return{x:e.x,z:e.z,score:t}}).sort((e,t)=>t.score-e.score).slice(0,Math.min(2,this.swampPools.length)),o=iu(33303);i.forEach((e,t)=>{for(let n=0;n<5;n++){let r=new V(Vm,new H({color:15841258,emissive:12916392,emissiveIntensity:.35,transparent:!0,opacity:0,depthWrite:!1}));this.scene.add(r),this.swampBubbles.push({mesh:r,x:e.x+(o()-.5)*.35,z:e.z+(o()-.5)*.35,base:-.38,height:1.55+o()*.5,size:.13+o()*.08,phase:(t*.43+n/5+o()*.08)%1})}});let s=iu(36303),c=f(3,2,s);for(let[e,t]of[[-12,n-2],[11,29]]){let n=this.groundH.get(e+`,`+t);c.length>=2||n===void 0||this.flatCells.has(e+`,`+t)||c.some(n=>Math.abs(n.x-e)<2&&Math.abs(n.z-t)<2)||c.push({x:e,z:t,y:n})}let l=[8208271,10247088],u=(t,n)=>{let r=new z;r.position.set(t.x,t.y,t.z),r.rotation.y=s()*Math.PI*2,r.scale.setScalar(.74+s()*.18),this.scene.add(r);let i=new H({color:l[n%l.length],vertexColors:!0});i.userData.lockBaseColor=i.color.clone();let a={region:3,mats:[]};this.voxDecor.push(a),Yl(`./models/giant-cabbage.json`).then(t=>{if(e!==this.voxBuildId)return;let{group:n,parts:o}=Zl(t,{materials:{leaf:i}});r.add(n);for(let e in o)a.mats.push(o[e].material);this.applyLockTints()}).catch(e=>console.error(`giant-cabbage model failed to load:`,e))};c.forEach((e,t)=>u(e,t))}{let t=i(5),n=5*$m;for(let e of this.lavaPools)t(e.x,-.45,e.z,1.06,.12,1.06,Hm(e.x,e.z,9)<.5?16726804:16738850,.2+Hm(e.x,e.z,10)*.35);let r=new H({vertexColors:!0,emissive:16742942,emissiveIntensity:.5});this.pulseMats.push({mat:r,region:5});let a=(t,n,i)=>{let a=new z;a.position.set(t,this.groundH.get(t+`,`+n)??0,n),a.scale.setScalar(i),this.scene.add(a);let o={region:5,mats:[]};return this.voxDecor.push(o),Yl(`./models/pepper-volcano.json`).then(t=>{if(e!==this.voxBuildId)return;let{group:n,parts:i}=Zl(t,{materials:{lava:r}});a.add(n);for(let e in i)o.mats.push(i[e].material);this.applyLockTints()}).catch(e=>console.error(`pepper-volcano model failed to load:`,e)),a},o=a(-9,n-3,.62);a(12,n-2,.4),this.volcanoSmoke=[];for(let e=0;e<4;e++){let t=new V(G,new H({color:10130318,emissive:7235682,emissiveIntensity:.3,transparent:!0,opacity:0}));t.rotation.y=e*.7,this.scene.add(t),this.volcanoSmoke.push({mesh:t,phase:e/4,x:o.position.x,z:o.position.z,lip:o.position.y+5.8*.62-.4})}let s=iu(4747);for(let e=0;e<4;e++){let n=s()*Math.PI*2,r=Math.round(o.position.x+Math.cos(n)*(2.5+s()*2)),i=Math.round(o.position.z+Math.sin(n)*(1.5+s()*2)),a=this.groundH.get(r+`,`+i);a!==void 0&&t(r,a+.1,i,.16,.12,.16,e&1?16757575:16740401,n)}}let h=r(-1);for(let e of this.islands){e.palm?o(h,e.x,0,e.z):s(h,e.x,0,e.z,10263690);for(let t=0;t<3;t++){let n=Hm(e.x,e.z,20+t)*Math.PI*2,r=e.x+Math.cos(n)*1.1,i=e.z+Math.sin(n)*1.1;t===2?h(r,.07,i,.32,.1,.32,16752627,n):h(r,.08,i,.22,.12,.3,16643558,n)}}let g=iu(31337);for(let e=0;e<42;e++){let e=-34+g()*68,t=-8+g()*56,n=.9+g()*.6,r=g()*.4-.2;this.groundH.has(Math.round(e)+`,`+Math.round(t))||h(e,-.72,t,n,.06,.16,15398655,r)}this.decorMesh.count=this.decorMeta.length,this.glowMesh.count=this.glowMeta.length,this.swampPoolMesh.count=this.swampPoolMeta.length,this.decorMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0,this.swampPoolMesh.instanceMatrix.needsUpdate=!0}buildCritters(){let e=()=>{let e=new z,t=new V(G,new H({color:16774064}));t.scale.set(.62,.34,.4),t.position.y=.05;let n=new V(G,new H({color:16769126}));n.scale.setScalar(.26),n.position.set(.3,.33,0);let r=new V(G,new H({color:16747586}));return r.scale.set(.16,.08,.12),r.position.set(.47,.3,0),e.add(t,n,r),e};this.ducks=[];for(let t of[{x:-24.5,z:2.5,r:1.4},{x:24,z:21,r:1.1}]){if(this.groundH.has(Math.round(t.x)+`,`+Math.round(t.z)))continue;let n=e();this.scene.add(n),this.ducks.push({mesh:n,...t,phase:t.x*.7})}this.fish=new z;let t=new V(G,new H({color:16747586}));t.scale.set(.5,.26,.16);let n=new V(G,new H({color:16766282}));n.scale.set(.16,.22,.1),n.position.x=-.32,this.fish.add(t,n),this.fish.visible=!1,this.fishHome={x:-24,z:30},this.scene.add(this.fish)}updateCritters(e){for(let t of this.ducks){let n=e*.35+t.phase;t.mesh.position.set(t.x+Math.cos(n)*t.r,-.52+Math.sin(e*1.7+t.phase)*.05,t.z+Math.sin(n)*t.r),t.mesh.rotation.y=-n,t.mesh.rotation.z=Math.sin(e*2.2+t.phase)*.06}let t=(e*.22+.3)%1;if(t<.28){let e=t/.28;this.fish.visible=!0,this.fish.position.set(this.fishHome.x+e*2.4-1.2,-.7+Math.sin(e*Math.PI)*1.3,this.fishHome.z),this.fish.rotation.z=(.5-e)*1.8}else this.fish.visible=!1}buildSigns(){let e=[`01110`,`10001`,`00001`,`00110`,`00100`,`00000`,`00100`];this.signMesh=new Fi(Gl,new H({color:16769126,emissive:5915136}),100),this.signMesh.frustumCulled=!1,this.scene.add(this.signMesh),this.signMeta=[];let t=new Nn;Su.forEach((n,r)=>{if(r===0)return;let i=.5;e.forEach((n,a)=>{for(let o=0;o<5;o++)n[o]===`1`&&(t.position.set((o-2)*i,2.6+(e.length-1-a)*i,r*$m-2.2),t.scale.setScalar(i*.92),t.rotation.set(0,0,0),t.updateMatrix(),this.signMeta.push({region:r,matrix:t.matrix.clone()}))})}),this.signMesh.count=this.signMeta.length}buildSkyClouds(){this.mapClouds=[];let e=new H({color:16777215,emissive:16777215,emissiveIntensity:.5,transparent:!0,opacity:.92}),t=new H({color:14280436,emissive:14280436,emissiveIntensity:.35,transparent:!0,opacity:.92}),n=iu(909);for(let r=0;r<5;r++){let r=new z,i=4+Math.floor(n()*3);for(let t=0;t<i;t++){let a=new V(G,e),o=1-Math.abs(t-(i-1)/2)/i;a.scale.set(1.3+n()*1.6,.7+o*1.1+n()*.4,1.2+n()*1.1),a.position.set((t-(i-1)/2)*1.2+(n()-.5)*.5,a.scale.y*.35+n()*.2,(n()-.5)*1.6),r.add(a)}let a=new V(G,t);a.scale.set(i*1.2+.8,.45,2.4),a.position.y=-.15,r.add(a),r.scale.setScalar(.6+n()*.2),r.position.set(-30+n()*60,12+n()*3,n()*38),r.userData.drift=.4+n()*.5,this.scene.add(r),this.mapClouds.push(r)}}buildTiles(){this.tileMesh=new Fi(Gl,new H({color:15980692}),Km),this.tileMesh.frustumCulled=!1,this.scene.add(this.tileMesh),this.tiles=[],this.segTiles=[null];for(let e=1;e<this.data.segments.length;e++){let t=this.data.segments[e];this.segTiles.push({start:this.tiles.length,count:t.length});for(let e of t)this.tiles.push({x:e.x,z:e.z,shown:!1,pop:0})}this.secretTileMesh=new Fi(Gl,new H({color:13073904,emissive:2887493}),qm),this.secretTileMesh.frustumCulled=!1,this.scene.add(this.secretTileMesh),this.secretTiles=[],this.secretSegs={}}secretAnchorNode(e){let t=Jf(e);return this.data.nodes.find(n=>n.world===e&&n.level===(t===null?1:t))||this.data.nodes.find(t=>t.world===e)}ensureSecretTiles(e){if(this.secretSegs[e])return this.secretSegs[e];let t=Im(this.secretAnchorNode(e),this.data.secretNodes[e]),n={start:this.secretTiles.length,count:t.length};for(let e of t)this.secretTiles.push({x:e.x,z:e.z,shown:!1,pop:0});return this.secretSegs[e]=n,n}buildNodes(){let e=e=>{let t=new z,n=new H({color:16766282,emissive:6704384});for(let r=0;r<3;r++){let i=new V(G,n);i.scale.setScalar(.26);let a=(r-1)*.6;i.position.set(Math.sin(a)*1.15,.62,(e?1:-1)*Math.cos(a)*1.15),i.rotation.z=Math.PI/4,t.add(i)}return t},t=(t,n)=>{let r=!n&&t.isWorldFinal,i=new z;i.position.set(t.x,0,t.z);let a=new V(G,new H({color:16774095}));a.scale.set(1.7,.25,1.7),a.position.y=.13;let o=new H({color:15022389}),s=new V(G,o);s.scale.set(1.15,.3,1.15),s.position.y=.4,s.visible=!r;let c=new V(G,new H({color:16773494,emissive:5587968}));c.scale.set(2.2,.12,2.2),c.position.y=.05,c.visible=!1;let l=new V(G,new H({color:16771496,emissive:2760720}));l.scale.set(2.02,.1,2.02),l.position.y=.03;let u=e(r);i.add(a,s,c,l,u);let d=null;if(n){d=new z;let e=new H({color:13073904,emissive:4856432}),t=new H({color:14922751,emissive:3609436});[[0,.9,0,.34,1.5,0],[-.42,.7,.18,.26,1,-.3],[.44,.65,-.12,.24,.9,.34],[.1,.5,.4,.18,.6,.12]].forEach(([n,r,i,a,o,s],c)=>{let l=new V(G,c%2?t:e);l.scale.set(a,o,a),l.position.set(n,r,i),l.rotation.set(0,c*.7,s),d.add(l)}),i.add(d)}let f=null,p=null,m=null;if(!n&&t.isWorldFinal){let e=new z,n=new H({color:13220002}),r=new H({color:13915991}),a=new V(G,n);a.scale.set(1.7,1.2,1.5),a.position.y=.6;let o=new V(G,n);o.scale.set(1,.8,.9),o.position.y=1.5,e.add(a,o);for(let[t,i]of[[-.8,-.7],[.8,-.7],[-.8,.7],[.8,.7]]){let a=new V(G,n);a.scale.set(.45,1.9,.45),a.position.set(t,.95,i);let o=new V(G,r);o.scale.set(.6,.4,.6),o.position.set(t,2.05,i),e.add(a,o)}let s=new V(G,new H({color:14737632}));s.scale.set(.06,.9,.06),s.position.set(0,2.3,0),f=new V(G,new H({color:16766282})),f.scale.set(.5,.3,.05),f.position.set(.28,2.55,0);let c=new H({color:16766282,emissive:6704384});p=new z;let l=new V(G,c);l.scale.set(.6,.22,.6),p.add(l);for(let e of[-.2,0,.2]){let t=new V(G,c);t.scale.set(.13,.24,.13),t.position.set(e,.22,0),p.add(t)}p.position.set(0,2,0),m=new z;let u=new V(G,new H({color:rm[t.world].color}));u.scale.set(.95,.8,.85),m.add(u);let d=new H({color:16777215}),h=new H({color:2236962});for(let e of[-.22,.22]){let t=new V(G,d);t.scale.setScalar(.22),t.position.set(e,.08,.44);let n=new V(G,h);n.scale.setScalar(.1),n.position.set(e,.06,.55),m.add(t,n)}let g=new V(G,h);g.scale.set(.32,.08,.06),g.position.set(0,-.22,.44),m.add(g),m.position.set(0,3.3,0),e.add(s,f,p,m),e.position.set(0,.26,0),i.add(e)}let h=new V(G,new fi({visible:!1}));return h.scale.set(3,3,3),h.position.y=1,i.add(h),this.scene.add(i),{group:i,dot:s,dotMat:o,ring:c,stars:u,crystals:d,hit:h,castleFlag:f,crown:p,bossHead:m,baseY:0}};this.nodeViews=this.data.nodes.map(e=>t(e,!1)),this.secretViews=this.data.secretNodes.map(e=>t(e,!0))}buildHouse(){let e=new z;e.position.set(th.x,0,th.z);let t=new H({color:15983296}),n=new H({color:13915991}),r=new V(G,t);r.scale.set(2.6,1.5,2.2),r.position.y=.75;let i=new V(G,n);i.scale.set(1.7,.18,2.6),i.rotation.z=.62,i.position.set(-.68,1.95,0);let a=i.clone();a.rotation.z=-.62,a.position.x=.68;let o=new V(G,n);o.scale.set(.35,.3,2.65),o.position.y=2.42;let s=new V(G,new H({color:10251087}));s.scale.set(.4,.9,.4),s.position.set(.8,2.35,-.55);let c=new V(G,new H({color:9067067}));c.scale.set(.6,.95,.1),c.position.set(-.55,.48,1.11);let l=new V(G,new H({color:16766282}));l.scale.setScalar(.1),l.position.set(-.35,.5,1.18);let u=new V(G,new H({color:11461631,emissive:1718858}));u.scale.set(.7,.6,.1),u.position.set(.65,1,1.11),e.add(r,i,a,o,s,c,l,u);let d=this.data.nodes[0],f=new H({color:15980692}),p=th.x-d.x,m=th.z-d.z,h=Math.hypot(p,m),g=Math.round(h);for(let e=1;e<g;e++){let t=e/g,n=Math.sin(t*Math.PI*2)*.35,r=new V(G,f),i=.64+Hm(e,3,11)*.16;r.scale.set(i,.18,i),r.rotation.y=(Hm(e,5,12)-.5)*.5,r.position.set(d.x+p*t-m/h*n,.09,d.z+m*t+p/h*n),this.scene.add(r)}let _=new H({color:16766282,emissive:6704384});this.houseIcon=new z;let v=new V(G,_);v.scale.set(.62,.42,.62);let y=new V(G,_);y.scale.set(.52,.12,.7),y.rotation.z=.78,y.position.set(-.18,.36,0);let b=y.clone();b.rotation.z=-.78,b.position.x=.18;let x=new V(G,new H({color:9067067}));x.scale.set(.2,.26,.08),x.position.set(0,-.08,.3),this.houseIcon.add(v,y,b,x),this.houseIcon.scale.setScalar(1.35),this.houseIcon.position.set(0,4.3,0),e.add(this.houseIcon);let S=new H({color:15022389,emissive:6689041});this.houseBadge=new z;let C=new V(G,S);C.scale.set(.4,.95,.4),C.position.y=.85;let w=new V(G,S);w.scale.set(.42,.34,.42),this.houseBadge.add(C,w),this.houseBadge.position.set(1.7,4.6,.4),this.houseBadge.visible=!1,e.add(this.houseBadge),this.houseHit=new V(G,new fi({visible:!1})),this.houseHit.scale.set(4,4,4),this.houseHit.position.y=1.5,e.add(this.houseHit),this.houseSmokeT=0,this.houseChimney=s,this.houseGroup=e,this.scene.add(e)}refreshLocks(){Su.forEach((e,t)=>{let n=this.lockState[t],r=sp(t);if(r&&!n.unlocked){n.unlocked=!0,n.t=0;let e=new L(0,1.5,t*$m);this.effects.confetti(e),this.effects.sparkle(e)}else!r&&n.unlocked&&(n.unlocked=!1,n.t=1)}),this.applyLockTints()}lockFactor(e){if(e<0)return 1;let t=this.lockState[e];return t.unlocked?Qm+(1-Qm)*Math.min(1,t.t):Qm}applyLockTints(){let e=new B,t=(t,n)=>{for(let r=0;r<n.length;r++)e.copy(n[r].color).multiplyScalar(this.lockFactor(n[r].region)),t.setColorAt(r,e);t.instanceColor&&(t.instanceColor.needsUpdate=!0)};t(this.groundMesh,this.groundMeta),t(this.decorMesh,this.decorMeta),t(this.glowMesh,this.glowMeta),t(this.swampPoolMesh,this.swampPoolMeta);for(let e of this.voxDecor){let t=this.lockFactor(e.region);for(let n of e.mats)n.userData.lockBaseColor?n.color.copy(n.userData.lockBaseColor).multiplyScalar(t):n.color.setScalar(t)}let n=new on().makeScale(1e-4,1e-4,1e-4);this.signMeta.forEach((e,t)=>{this.signMesh.setMatrixAt(t,this.lockState[e.region].unlocked?n:e.matrix)}),this.signMesh.instanceMatrix.needsUpdate=!0}heightAt(e,t){return this.groundH.get(Math.round(e)+`,`+Math.round(t))||0}refresh(){let e=Of().unlocked;this.navList=[],this.data.nodes.forEach((t,n)=>{let r=this.nodeViews[n],i=op(t.world,t.level);r.group.visible=i;let a=Vf(t.world,t.level),o=t.world===e.world&&t.level===e.level;if(r.dotMat.color.setHex(a>0?4431943:15022389),r.dotMat.emissive.setHex(o?6693410:0),r.ring.visible=o,r.isCurrent=o,r.stars.children.forEach((e,t)=>{e.visible=t<a}),t.boss&&r.bossHead){let e=np(t.world);r.bossHead.visible=!e,r.castleFlag.visible=e,r.crown.visible=e}if(Gf(t.world,t.level)&&!r.keyIcon&&(r.keyIcon=jm(),r.keyIcon.scale.setScalar(.36),r.keyIcon.position.set(1.25,1,.35),r.group.add(r.keyIcon)),n>0){let e=i,t=this.segTiles[n];for(let n=0;n<t.count;n++)this.tiles[t.start+n].shown=e}if(i&&this.navList.push({world:t.world,level:t.level,secret:!1,boss:!!t.boss,x:t.x,z:t.boss?t.z+1.3:t.z,i:n}),i&&t.isWorldFinal&&qf(t.world)){let e=this.data.secretNodes[t.world];this.navList.push({world:t.world,level:-1,secret:!0,x:e.x,z:e.z,i:-1})}}),this.data.secretNodes.forEach((e,t)=>{let n=this.secretViews[t],r=qf(t);n.group.visible=r,n.dotMat.color.setHex(11225020),n.dotMat.emissive.setHex(2887493);let i=Uf(t);if(n.stars.children.forEach((e,t)=>{e.visible=t<i}),r){let n=this.ensureSecretTiles(t);for(let e=0;e<n.count;e++)this.secretTiles[n.start+e].shown=!0;if(!this.navList.some(e=>e.secret&&e.world===t)){let n=this.navList.map(e=>e.world).lastIndexOf(t);this.navList.splice(n+1,0,{world:t,level:-1,secret:!0,x:e.x,z:e.z,i:-1})}}}),this.tokenNav=Math.min(this.tokenNav,this.navList.length-1),this.houseBadge.visible=tp(Rm),this.refreshLocks(),this.updateTiles()}updateTiles(){let e=new Nn,t=(t,n)=>{n.forEach((n,r)=>{let i=n.shown?n.pop>0?1+Math.sin(n.pop*Math.PI)*.4:1:1e-4,a=.64+Hm(n.x,n.z,11)*.16;e.position.set(n.x,n.shown&&n.pop>0?.1+n.pop*.3:.09,n.z),e.rotation.y=(Hm(n.x,n.z,12)-.5)*.5,e.scale.set(a*i,.18,a*i),e.updateMatrix(),t.setMatrixAt(r,e.matrix)}),t.count=n.length,t.instanceMatrix.needsUpdate=!0};t(this.tileMesh,this.tiles),t(this.secretTileMesh,this.secretTiles)}navInfo(e){return{world:e.world,level:e.level,secret:e.secret,boss:!!e.boss,name:nh(e.world,e.level,e.secret,e.boss),stars:e.secret?Uf(e.world):Vf(e.world,e.level),completed:(e.secret?Uf(e.world):Vf(e.world,e.level))>0}}currentNav(){return this.navList[this.tokenNav]}setTokenTo(e,t,n=!1){let r=this.navList.findIndex(r=>r.world===e&&(n?r.secret:r.level===t&&!r.secret));r>=0&&(this.tokenNav=r);let i=this.navList[this.tokenNav];i&&this.token.position.set(i.x,eh,i.z),this.token.rotation.y=-Math.PI/2}attachInput(){let e=this.renderer.domElement;this.raycaster=new mo;let t=null,n=!1,r=e=>{this.active&&(e.target&&e.target.closest&&e.target.closest(`button`)||(t={x:e.clientX,y:e.clientY},n=!1))},i=e=>{if(!this.active||!t)return;let r=e.clientX-t.x,i=e.clientY-t.y;if(!n&&Math.hypot(r,i)>10&&(n=!0),n){let n=.028,a=this.data.bounds;this.focus.x=Math.max(a.minX,Math.min(a.maxX,this.focus.x-r*n)),this.focus.z=Math.max(a.minZ,Math.min(a.maxZ,this.focus.z-i*n)),t={x:e.clientX,y:e.clientY},this.panIdle=0}},a=e=>{if(!this.active||!t)return;let r=n;t=null,n=!1,!r&&this.tap(e.clientX,e.clientY)};window.PointerEvent?(e.addEventListener(`pointerdown`,r),window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)):(e.addEventListener(`mousedown`,r),window.addEventListener(`mousemove`,i),window.addEventListener(`mouseup`,a),e.addEventListener(`touchstart`,e=>r(e.changedTouches[0]),{passive:!0}),window.addEventListener(`touchmove`,e=>i(e.changedTouches[0]),{passive:!0}),window.addEventListener(`touchend`,e=>a(e.changedTouches[0]))),window.addEventListener(`keydown`,e=>{if(this.active)if(e.code===`ArrowLeft`||e.code===`ArrowRight`){e.preventDefault();let t=e.code===`ArrowLeft`?-1:1,n=this.tokenNav+t;n>=0&&n<this.navList.length&&!this.walk&&!this.reveal&&this.walkTo(n)}else e.code===`Enter`&&(e.preventDefault(),this.cb.onEnterKey())})}tap(e,t){if(this.reveal)return;let n=new I(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);if(this.raycaster.setFromCamera(n,this.camera),this.raycaster.intersectObject(this.editHit,!1).length){this.cb.onEditTapped();return}if(this.raycaster.intersectObject(this.tokenHit,!1).length){this.cb.onEnterKey();return}if(this.raycaster.intersectObject(this.houseHit,!1).length){this.cb.onHouseTapped();return}let r=[];this.navList.forEach((e,t)=>{let n=e.secret?this.secretViews[e.world]:this.nodeViews[e.i],i=this.raycaster.intersectObject(n.hit,!1);i.length&&r.push({idx:t,dist:i[0].distance})}),r.length&&(r.sort((e,t)=>e.dist-t.dist),this.walkTo(r[0].idx))}walkTo(e){if(e===this.tokenNav){this.cb.onNodeSelected(this.navInfo(this.navList[e]));return}this.cb.onDismiss();let t=e>this.tokenNav?1:-1,n=[],r=(e,t)=>{let r=n[n.length-1];(!r||r.x!==e||r.z!==t)&&n.push({x:e,z:t})};for(let n=this.tokenNav;;n+=t){let t=this.navList[n];if(!(t.secret&&n!==this.tokenNav&&n!==e))if(t.secret){let e=this.secretAnchorNode(t.world);n===this.tokenNav?(r(t.x,t.z),r(e.x,e.z)):(r(e.x,e.z),r(t.x,t.z))}else r(t.x,t.z);if(n===e)break}let i=[0];for(let e=1;e<n.length;e++)i.push(i[e-1]+Math.hypot(n[e].x-n[e-1].x,n[e].z-n[e-1].z));let a=i[i.length-1];this.walk={points:n,cum:i,dist:a,seg:0,h:this.heightAt(n[0].x,n[0].z),t:0,dur:Math.min(2,.3+a*.09),target:e},this.panIdle=99}queueReveal(e){this.revealQueue.push(e)}startReveal(e){let t,n,r;if(e.kind===`secret`)t=this.ensureSecretTiles(e.world),r=this.secretTiles,n=this.secretViews[e.world];else{let i=this.data.nodes.findIndex(t=>t.world===e.world&&t.level===e.level);if(i<=0)return;t=this.segTiles[i],r=this.tiles,n=this.nodeViews[i]}for(let e=0;e<t.count;e++)r[t.start+e].shown=!1,r[t.start+e].pop=0;n.group.visible=!1,this.reveal={seg:t,tiles:r,view:n,k:0,timer:.35,tileDelay:Math.min(.11,1.5/Math.max(1,t.count)),nodeT:-1,secret:e.kind===`secret`,newWorld:e.kind===`node`&&e.level===0}}updateReveal(e){let t=this.reveal;for(let n=0;n<t.seg.count;n++){let r=t.tiles[t.seg.start+n];r.pop>0&&(r.pop=Math.max(0,r.pop-e*3))}if(t.nodeT>=0){t.nodeT+=e;let n=Math.min(1,t.nodeT/.55),r=6*(1-n)*(1-n)-Math.sin(n*Math.PI)*0;t.view.group.position.y=r,n>=1&&!t.landed&&(t.landed=!0,t.view.group.position.y=0,ud(),this.effects.confetti(new L(t.view.group.position.x,1.5,t.view.group.position.z)),t.secret?(this.effects.sparkle(new L(t.view.group.position.x,1.5,t.view.group.position.z)),Jd(`secretPath`)):t.newWorld&&Jd(`worldUnlock`)),t.nodeT>1.3&&(this.reveal=null,this.refresh()),this.updateTiles();return}if(t.timer-=e,t.timer<=0)if(t.k<t.seg.count){let e=t.tiles[t.seg.start+t.k];e.shown=!0,e.pop=1,sd(t.k),this.focus.x+=(e.x-this.focus.x)*.35,this.focus.z+=(e.z-this.focus.z)*.35,this.panIdle=0,t.k++,t.timer=t.tileDelay}else t.nodeT=0,t.view.group.visible=!0,t.view.group.position.y=6;this.updateTiles()}enter(){this.active=!0,this.refresh(),this.revealQueue.length&&!this.reveal&&(this.startReveal(this.revealQueue.shift()),this.updateTiles());let e=this.currentNav();e&&this.token.position.set(e.x,eh,e.z),this.focus.set(this.token.position.x,0,this.token.position.z),this.camera.position.copy(this.focus).add(Gm),this.camera.lookAt(this.focus),this.panIdle=99}exit(){this.active=!1}animateStars(e,t){let n=this.token.position.x-e.group.position.x,r=this.token.position.z-e.group.position.z;e.stars.visible=n*n+r*r>1.2,e.stars.children.forEach((e,n)=>{e.rotation.y=t*1.6+n*2.1,e.position.y=.62+Math.sin(t*2.4+n*2.1)*.07})}tick(e){let t=performance.now()/1e3,n=!1;if(this.lockState.forEach((t,r)=>{t.unlocked&&t.t<1&&(t.t=Math.min(1,t.t+e),n=!0,Math.random()<e*8&&this.effects.sparkle(new L(-16+Math.random()*32,1.6,r*$m-3+Math.random()*6)))}),n&&this.applyLockTints(),this.houseIcon.rotation.y=t*1.2,this.houseIcon.position.y=4.3+Math.sin(t*2)*.15,this.houseBadge.visible&&(this.houseBadge.position.y=4.6+Math.abs(Math.sin(t*3))*.5,this.houseBadge.scale.setScalar(1+Math.sin(t*6)*.1)),this.editIcon.rotation.y=t*1.2-this.token.rotation.y,this.editIcon.position.y=2.7+Math.sin(t*2+1)*.12,this.houseSmokeT-=e,this.houseSmokeT<=0){this.houseSmokeT=2.2+Math.random();let e=this.houseGroup.position;this.effects.sparkle(new L(e.x+.8,3.1,e.z-.55))}let r=this.data.bounds;for(let t of this.mapClouds)t.position.x+=t.userData.drift*e,t.position.x>r.maxX+26&&(t.position.x=r.minX-26);this.glowPulse+=e;let i=.45+Math.sin(this.glowPulse*2.4)*.15;for(let e of this.pulseMats)e.mat.emissiveIntensity=i*this.lockFactor(e.region);for(let n of this.volcanoSmoke){let r=(t*.16+n.phase)%1;n.mesh.position.set(n.x+Math.sin(r*4+n.phase*9)*.3+r*.9,n.lip+r*3.4,n.z+Math.sin(r*3+n.phase*5)*.25),n.mesh.scale.setScalar(.5+r*1.1),n.mesh.material.opacity=.8*Math.sin(Math.min(1,r*1.15)*Math.PI),n.mesh.rotation.y+=e*.5}for(let n of this.swampBubbles){let r=(t*.22+n.phase)%1,i=Math.max(0,(r-.82)/.18),a=i?1+Math.sin(i*Math.PI)*.95:1;n.mesh.position.set(n.x+Math.sin(r*8+n.phase*17)*.16,n.base+r*n.height,n.z+Math.sin(r*6+n.phase*11)*.14),n.mesh.scale.setScalar(n.size*(.8+r*1.25)*a*Math.max(.12,1-i*.88)),n.mesh.material.opacity=.58*Math.min(1,r/.16)*Math.min(1,(1-r)/.2),n.mesh.rotation.y+=e*(.4+n.phase)}if(this.updateWater(t),this.updateCritters(t),this.nodeViews.forEach((e,n)=>{if(!e.group.visible)return;let r=e.isCurrent?1.15+Math.sin(t*5)*.14:1.15;if(e.dot.scale.set(r,.3,r),e.isCurrent){let n=2.2+Math.sin(t*3)*.3;e.ring.scale.set(n,.12,n),e.dot.position.y=.4+Math.max(0,Math.sin(t*3))*.16}else e.dot.position.y=.4;this.animateStars(e,t),e.keyIcon&&(e.keyIcon.rotation.y=t*1.4,e.keyIcon.position.y=1+Math.sin(t*2+n)*.08),e.bossHead&&e.bossHead.visible&&(e.bossHead.rotation.y=Math.sin(t*1.3+n)*.5,e.bossHead.position.y=3.3+Math.sin(t*2.1+n)*.12)}),this.secretViews.forEach((n,r)=>{if(!n.group.visible)return;let i=1.15+Math.sin(t*4+r)*.12;n.dot.scale.set(i,.3,i),n.crystals&&(n.crystals.rotation.y=t*.4),this.animateStars(n,t),Math.random()<e*.8&&this.effects.sparkle(new L(n.group.position.x+(Math.random()-.5),1.2,n.group.position.z))}),!this.reveal&&this.revealQueue.length&&!this.walk&&this.startReveal(this.revealQueue.shift()),this.reveal&&this.updateReveal(e),this.walk){let t=this.walk;t.t+=e/t.dur;let n=Math.min(1,t.t)*t.dist;for(;t.seg<t.points.length-2&&t.cum[t.seg+1]<n;)t.seg++;let r=t.points[t.seg],i=t.points[t.seg+1],a=t.cum[t.seg+1]-t.cum[t.seg],o=a>0?(n-t.cum[t.seg])/a:1,s=r.x+(i.x-r.x)*o,c=r.z+(i.z-r.z)*o,l=Math.atan2(r.z-i.z,i.x-r.x)-this.token.rotation.y;l=Math.atan2(Math.sin(l),Math.cos(l)),this.token.rotation.y+=l*(1-Math.exp(-e*12)),t.h+=(this.heightAt(s,c)-t.h)*(1-Math.exp(-e*10)),this.token.position.set(s,eh+t.h+Math.abs(Math.sin(t.t*22))*.18,c);let u=this.token.userData.parts,d=Math.sin(t.t*30);if(u.legL.rotation.z=-d*.8,u.legR.rotation.z=d*.8,u.armL.rotation.z=d*.8,u.armR.rotation.z=-d*.8,t.t>=1){this.tokenNav=t.target;let e=this.navList[t.target];this.token.position.set(e.x,eh,e.z),u.legL.rotation.z=u.legR.rotation.z=0,u.armL.rotation.z=u.armR.rotation.z=0,this.walk=null,this.cb.onNodeSelected(this.navInfo(e))}}else if(!this.reveal){this.token.position.y=eh+Math.abs(Math.sin(t*2))*.05;let n=-Math.PI/2-this.token.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.token.rotation.y+=n*(1-Math.exp(-e*8))}if(this.panIdle+=e,this.panIdle>4||this.walk){let t=1-Math.exp(-e*3);this.focus.x+=(this.token.position.x-this.focus.x)*t,this.focus.z+=(this.token.position.z-this.focus.z)*t}this.camera.position.set(this.focus.x+Gm.x,Gm.y,this.focus.z+Gm.z),this.camera.lookAt(this.focus.x,0,this.focus.z),this.effects.update(e)}},ih=Ql[0],ah=new Yi(1,1,1),oh=e=>`#`+e.toString(16).padStart(6,`0`);function sh(e,t){let n=(e,n)=>{let r=e.getContext(`2d`),i=.72;r.fillStyle=`rgb(${(t>>16&255)*i|0},${(t>>8&255)*i|0},${(t&255)*i|0})`,r.fillRect(0,0,128,128),r.fillStyle=`rgba(255,255,255,0.85)`,r.fillRect(20,20,88,88),n&&(r.fillStyle=`#2c3e75`,r.font=`bold 64px sans-serif`,r.font=`bold ${Math.min(52,Math.floor(6016/r.measureText(n).width))}px sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(n,64,68))},r=e=>{let t=document.createElement(`canvas`);return t.width=128,t.height=128,n(t,e),new H({map:new Gi(t)})},i=r(e),a=r(``),o=new V(ah,[a,a,a,a,i,i]);return o.userData.word=e,o.userData.setWord=e=>{o.userData.word=e,n(i.map.image,e),i.map.needsUpdate=!0},o}var ch=class{constructor(){this.scene=new Hn,this.scene.background=new B(ih.skyTop),this.scene.fog=new Vn(ih.fog,18,46),this.camera=new Ua(38,window.innerWidth/window.innerHeight,.1,60),this.camera.position.set(1.1,2,6.6),this.camera.lookAt(1.1,1.05,0),this.scene.add(new Ya(15003127,.8));let e=new Ja(16772300,1);e.position.set(3,5,4),this.scene.add(e);{let e=document.createElement(`canvas`);e.width=2,e.height=128;let t=e.getContext(`2d`),n=t.createLinearGradient(0,0,0,128);n.addColorStop(0,oh(ih.skyTop)),n.addColorStop(.52,oh(ih.skyBot)),n.addColorStop(.72,oh(ih.fog)),n.addColorStop(1,oh(ih.fog)),t.fillStyle=n,t.fillRect(0,0,2,128);let r=new V(new ta(45,20,14),new fi({map:new Gi(e),side:1,fog:!1,depthWrite:!1}));r.renderOrder=-1,this.scene.add(r)}{let e=new fi({color:ih.sun,fog:!1}),t=new z,n=new V(ah,e);n.scale.set(3.4,3.4,.6),t.add(n);for(let[n,r]of[[2.1,0],[-2.1,0],[0,2.1],[0,-2.1]]){let i=new V(ah,e);i.scale.set(n?.9:2.2,n?2.2:.9,.55),i.position.set(n,r,0),t.add(i)}t.position.set(-3.2,5.6,-26),this.scene.add(t)}this.clouds=[];{let e=iu(4242);for(let t=0;t<6;t++){let n=new z,r=new H({color:ih.cloud,transparent:!0,opacity:.75+e()*.25,emissive:ih.cloud,emissiveIntensity:.55}),i=2+(e()*3|0);for(let t=0;t<i;t++){let a=new V(ah,r),o=1.4+e()*1.5;a.scale.set(o,.7+e()*.6,1.2+e()),a.position.set((t-(i-1)/2)*1.4,e()*.6,(e()-.5)*1.5),n.add(a)}let a=new V(ah,r);a.scale.set(i*1.4+.8,.5,1.9),a.position.y=-.35,n.add(a),n.scale.setScalar(.7+e()*.5),n.position.set(-26+t*9+e()*4,3+e()*2.5,-16-e()*12),n.userData.drift=.25+e()*.45,this.scene.add(n),this.clouds.push(n)}}{let e=new Fi(ah,new H,1400);e.frustumCulled=!1;let t=new Nn,n=new B,r=iu(1337),i=0,a=(r,a,o,s,c,l,u,d=0)=>{t.position.set(r,a,o),t.scale.set(s,c,l),t.updateMatrix(),e.setMatrixAt(i,t.matrix),n.setHex(u),d&&n.offsetHSL(0,0,d),e.setColorAt(i,n),i++};for(let e=-20;e<=20;e++)for(let t=-18;t<=4;t++){let n=r(),i=(n-.5)*.045+(n>.97?.05:0)-(t+18)*.003;a(e,-.47,t,1,.5,1,ih.top[0],i)}let o=(e,t,n,i,o,s)=>{let c=-.6;for(let s=0;s<3;s++){let l=(n+2)/3;a(e+(r()-.5)*1.2,c+l/2,i,t*(1-s*.24),l+.02,3.5-s*.3,o,s&1?.04:-.02),c+=l}if(a(e,c+.5,i,t*.3,1,2.8,o,.06),s){let n=1+(r()*3|0);for(let o=0;o<n;o++){let n=e+(r()-.5)*t*.5;a(n,c+1.15,i,.25,.7,.4,7162410),a(n,c+1.9,i,.95,.95,.95,4169274,(r()-.5)*.1)}}};a(1,-.52,-28,66,.5,22,ih.top[1],-.02);for(let e=-24;e<=28;e+=12+(r()*6|0))o(e,8+r()*5,.8+r()*1.2,-24,ih.hill,!0),o(e+5+r()*5,10+r()*6,1.8+r()*1.6,-32,ih.hill2,!1);((e,t,n)=>{a(e,.28,t,.3,1,.3,16111480),a(e+.18,1.08,t,.3,.8,.3,15716202),a(e-.1,1.78,t,.3,.7,.3,16111480),a(e,2.5799999999999996,t,1.9,1,1.9,9063213,n),a(e+.6,3.1799999999999997,t+.3,1,.8,1,9655087,n+.03),a(e-.55,3.28,t-.2,1.1,.9,1.1,8340263,n),a(e,3.78,t,.9,.5,.9,13779498,n),a(e+.2,4.08,t+.1,.3,.15,.3,16773836)})(-5.5,-11,.03),a(-8,.88,-16,1.2,2.2,1.2,15777888,.02),a(-8,2,-16,.7,.14,.7,10250798);let s=(e,t)=>{a(e,.28,t,1.3,1,1.3,4169274,(r()-.5)*.08),a(e+.4,.73,t+.1,.5,.5,.5,14826286),a(e-.45,.48,t+.2,.45,.45,.45,15684419)};s(-6.8,-7),s(-3.2,-10),s(-7.5,-17);for(let e=0;e<8;e++)a(-5+r()*12,-.17,-12+r()*10,.2,.1,.2,e&1?16773836:16246968);{let e=1.7,t=-5.5,n=-23.5,r=13220002;a(t,.5,n,1.7*e,1.2*e,1.5*e,r),a(t,2.03,n,1*e,.8*e,.9*e,r,.03);for(let[i,o]of[[-.8,-.7],[.8,-.7],[-.8,.7],[.8,.7]])a(t+i*e,1.095,n+o*e,.45*e,1.9*e,.45*e,r,-.02),a(t+i*e,2.9649999999999994,n+o*e,.6*e,.4*e,.6*e,13915991)}e.count=i,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),this.scene.add(e)}this.wordBlocks=[];for(let[e,t,n,r,i,a]of[[`the`,16767293,-2.2,-3,.6,.35],[`and`,16739179,-3.5,-5,.55,-.5],[`see`,7077816,3.9,-1.4,.55,.25],[`play`,7649791,-2.6,-8,.5,-.3]]){let o=sh(e,t);o.scale.setScalar(i),o.position.set(n,-.22+i/2,r),o.rotation.y=a,this.scene.add(o),this.wordBlocks.push({mesh:o,baseRy:a})}this.blockSpin=null,this.nextBlockSpinIn=4;{let{group:e,armor:t}=im(0);for(let[n,r,i]of t){let t=new V(ah,new H({color:16766282,emissive:6704384}));t.scale.setScalar(.5),t.position.set(n,r,i),e.add(t)}e.scale.setScalar(.6),e.position.set(-.2,-.22,-22),this.scene.add(e)}this.coins=[];{let e=new Zi(.3,.3,.09,12),t=new H({color:16766282,emissive:6704384});for(let[n,r,i]of[[-4,2.6,-5],[-2,3.2,-7],[.4,2.9,-6]]){let a=new V(e,t);a.rotation.x=Math.PI/2,a.position.set(n,r,i),a.userData.baseY=r,this.scene.add(a),this.coins.push(a)}}let t=new V(new Zi(1,1.15,.22,32),new H({color:7200621}));t.position.y=-.11,this.scene.add(t),this.kid=Lp(1),this.scene.add(this.kid),this.t=0,this.antics=!1,this.rotY=0,this.act=null,this.lastAct=``,this.nextActIn=2.5}setLook(e){Ip(this.kid,e)}setAntics(e){this.antics=e,e||(this.act=null)}startAct(){let e=[`wave`,`dance`,`sit`,`hop`,`twirl`].filter(e=>e!==this.lastAct),t=e[Math.random()*e.length|0],n={wave:2.4,dance:3.4,sit:4,hop:1.6,twirl:1.4}[t];this.act={name:t,t:0,dur:n},this.lastAct=t}tick(e){this.t+=e;let t=this.kid.userData.parts,n=Math.sin(this.t*2.2)*.15,r=Math.sin(this.t*2.2)*.03,i=n,a=-n,o=0,s=0,c=0,l=0;if(this.act){let t=this.act;if(t.t+=e,t.t>=t.dur)this.act=null,this.nextActIn=2.5+Math.random()*3;else{let u=Math.atan2(-6.6,1.1)-this.rotY;u-=Math.round(u/(Math.PI*2))*Math.PI*2,this.rotY+=u*Math.min(1,e*6);let d=Math.min(t.t/.35,(t.dur-t.t)/.35,1);if(d=d*d*(3-2*d),t.name===`wave`)s=-2.5*d,a=Math.sin(t.t*9)*.3*d,i=n*(1-d);else if(t.name===`dance`){let n=Math.sin(t.t*7);o=(1.7+n*.9)*d,s=(-1.7+n*.9)*d,r+=Math.abs(n)*.1*d,c=n*.25*d,l=-n*.25*d,this.rotY+=Math.sin(t.t*3.5)*.3*d*e*6}else t.name===`sit`?(r+=-.42*d,c=1.45*d,l=1.45*d,i=.6*d,a=.6*d):t.name===`hop`?(r+=Math.abs(Math.sin(t.t/t.dur*Math.PI*2))*.32*d,o=2.4*d,s=-2.4*d):t.name===`twirl`&&(this.rotY+=e*9*d,o=1.5*d,s=-1.5*d)}}else this.rotY+=e*.9,this.antics&&(this.nextActIn-=e,this.nextActIn<=0&&this.startAct());this.kid.rotation.y=this.rotY,this.kid.position.y=r,t.armL.rotation.z=i,t.armR.rotation.z=a,t.armL.rotation.x=o,t.armR.rotation.x=s,t.legL.rotation.z=c,t.legR.rotation.z=l;let u=.7;if(this.blockSpin){let t=this.blockSpin;t.t-=e;let n=1-Math.max(0,t.t)/u;if(t.block.mesh.rotation.y=t.block.baseRy+(1-(1-n)**2)*Math.PI*2,!t.swapped&&n>=.5){t.swapped=!0;let e=new Set(this.wordBlocks.map(e=>e.mesh.userData.word)),n=_u.prePrimer.filter(t=>!e.has(t));t.block.mesh.userData.setWord(n[Math.random()*n.length|0])}t.t<=0&&(t.block.mesh.rotation.y=t.block.baseRy,this.blockSpin=null,this.nextBlockSpinIn=3.5+Math.random()*4.5)}else if(this.nextBlockSpinIn-=e,this.nextBlockSpinIn<=0){let e=this.wordBlocks[Math.random()*this.wordBlocks.length|0];this.blockSpin={block:e,t:u,swapped:!1}}for(let t of this.clouds)t.position.x+=t.userData.drift*e,t.position.x>26&&(t.position.x=-26);for(let e=0;e<this.coins.length;e++){let t=this.coins[e];t.rotation.z=this.t*1.6+e*2.1,t.position.y=t.userData.baseY+Math.sin(this.t*1.4+e*2)*.12}}},K={ink:`#2c3e75`,gold:`#f7c948`,goldMid:`#e0a82e`,goldDark:`#c9971e`,cream:`#fdf4d7`,white:`#ffffff`,sky:`#74b9ff`,skyDark:`#3f7fc4`,green:`#8fd35f`,greenDark:`#569e36`,red:`#ff6b6b`,redDark:`#c44545`,purple:`#c77df0`,purpleDark:`#8e4ec6`,gem:`#5ec8ff`,gemLite:`#b8ecff`,gemDark:`#2a7fbf`,brown:`#8d6b45`,brownDark:`#5a3d1e`,wood:`#c68642`,pink:`#ff8fab`,orange:`#ff8c3e`,snow:`#e8f4ff`,leaf:`#6cc24a`,cabbage:`#7d4aa8`};function q(e,t=32){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${t}" height="${t}" class="icon-svg" aria-hidden="true" focusable="false">${e}</svg>`}function J(e,t,n,r,i,a=2){return`<rect x="${e}" y="${t}" width="${n}" height="${r}" rx="${a}" ry="${a}" fill="${i}" stroke="${K.ink}" stroke-width="2"/>`}function Y(e,t,n,r){return`<circle cx="${e}" cy="${t}" r="${n}" fill="${r}" stroke="${K.ink}" stroke-width="2"/>`}function X(e,t){return`<polygon points="${e}" fill="${t}" stroke="${K.ink}" stroke-width="2" stroke-linejoin="round"/>`}function lh(e,t,n=K.ink){return`<path d="${e}" fill="${t}" stroke="${n}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`}function uh(e,t=5,n=K.white){let r=`stroke-linecap="round" stroke-linejoin="round" fill="none"`;return`<path d="${e}" stroke="${K.ink}" stroke-width="${t+4}" ${r}/><path d="${e}" stroke="${n}" stroke-width="${t}" ${r}/>`}var dh={coin:e=>q(Y(16,16,12,K.gold)+`<circle cx="16" cy="16" r="8.5" fill="none" stroke="${K.goldMid}" stroke-width="2.5"/>`,e),gem:e=>q(X(`16,4 26,12 22,26 10,26 6,12`,K.gem)+X(`16,4 22,12 16,14 10,12`,K.gemLite)+`<line x1="16" y1="14" x2="16" y2="26" stroke="${K.ink}" stroke-width="1.5"/><line x1="6" y1="12" x2="26" y2="12" stroke="${K.ink}" stroke-width="1.5"/>`,e),key:e=>q(Y(11,12,7,K.gold)+Y(11,12,3.2,K.cream)+J(16,10,12,4,K.gold,1)+J(24,14,4,5,K.gold,1)+J(20,14,3,4,K.gold,1),e),star:e=>q(X(`16,3 19.5,12 29,12.5 21.5,18.5 24.5,28 16,22.5 7.5,28 10.5,18.5 3,12.5 12.5,12`,K.gold),e),starEmpty:e=>q(X(`16,3 19.5,12 29,12.5 21.5,18.5 24.5,28 16,22.5 7.5,28 10.5,18.5 3,12.5 12.5,12`,K.cream),e),play:e=>q(X(`9,4 28,16 9,28`,K.white),e),pause:e=>q(J(7,5,7,22,K.white,2)+J(18,5,7,22,K.white,2),e),resume:e=>q(X(`9,4 28,16 9,28`,K.white),e),replay:e=>q(uh(`M24.5 11.5A9.5 9.5 0 1 0 26 19`,4)+X(`23.5,3 29.5,11 19.5,12.5`,K.white),e),settings:e=>q(J(13,2,6,8,K.gold,1)+J(13,22,6,8,K.gold,1)+J(2,13,8,6,K.gold,1)+J(22,13,8,6,K.gold,1)+J(4.5,4.5,7,7,K.gold,1)+J(20.5,4.5,7,7,K.gold,1)+J(4.5,20.5,7,7,K.gold,1)+J(20.5,20.5,7,7,K.gold,1)+`<circle cx="16" cy="16" r="9.5" fill="${K.gold}"/>`+Y(16,16,4.5,K.cream),e),close:e=>q(uh(`M8 8L24 24M24 8L8 24`,5),e),back:e=>q(X(`28,11.5 16,11.5 16,5 4,16 16,27 16,20.5 28,20.5`,K.white),e),forward:e=>q(X(`4,11.5 16,11.5 16,5 28,16 16,27 16,20.5 4,20.5`,K.white),e),up:e=>q(X(`11.5,28 11.5,16 5,16 16,4 27,16 20.5,16 20.5,28`,K.white),e),down:e=>q(X(`11.5,4 11.5,16 5,16 16,28 27,16 20.5,16 20.5,4`,K.white),e),sound:e=>q(J(5,11,7,10,K.sky,2)+X(`12,11 20,6 20,26 12,21`,K.sky)+`<path d="M23 11c2 2 2 8 0 10" fill="none" stroke="${K.ink}" stroke-width="2.5" stroke-linecap="round"/><path d="M26 8c3.5 3 3.5 13 0 16" fill="none" stroke="${K.ink}" stroke-width="2.5" stroke-linecap="round"/>`,e),soundOff:e=>q(J(5,11,7,10,K.red,2)+X(`12,11 20,6 20,26 12,21`,K.red)+`<line x1="24" y1="10" x2="28" y2="22" stroke="${K.ink}" stroke-width="2.5" stroke-linecap="round"/><line x1="28" y1="10" x2="24" y2="22" stroke="${K.ink}" stroke-width="2.5" stroke-linecap="round"/>`,e),ear:e=>q(uh(`M9 15c0-5.5 3-9 7.5-9s7.5 3.5 7.5 9c0 4.5-2.5 6.5-4.5 9-1.7 2.1-4.6 2.5-6.5 1`,5,`#ffcf9e`)+`<path d="M14.5 15c0-2.7 1.7-4.3 3.9-4.3" fill="none" stroke="${K.ink}" stroke-width="2.5" stroke-linecap="round"/>`,e),music:e=>q(J(18,6,5,14,K.purple,1)+Y(12,22,5,K.purple)+Y(23,18,4,K.purple)+J(12,8,11,3,K.purple,1),e),mic:e=>q(J(12,4,8,14,K.red,4)+lh(`M8 14v2a8 8 0 0 0 16 0v-2`,`none`)+`<path d="M8 14v2a8 8 0 0 0 16 0v-2" fill="none" stroke="${K.ink}" stroke-width="2.5" stroke-linecap="round"/>`+J(14,24,4,5,K.ink,1)+J(10,27,12,3,K.ink,1),e),lock:e=>q(J(8,14,16,14,K.gold,3)+lh(`M11 14V10a5 5 0 0 1 10 0v4`,`none`)+`<path d="M11 14V10a5 5 0 0 1 10 0v4" fill="none" stroke="${K.ink}" stroke-width="2.5" stroke-linecap="round"/>`+Y(16,20,2.5,K.ink),e),unlock:e=>q(J(8,14,16,14,K.green,3)+lh(`M11 14V10a5 5 0 0 1 9-2`,`none`)+`<path d="M11 14V10a5 5 0 0 1 9-2" fill="none" stroke="${K.ink}" stroke-width="2.5" stroke-linecap="round"/>`+Y(16,20,2.5,K.ink),e),map:e=>q(J(4,6,10,20,K.cream,2)+J(12,4,10,20,`#e8c96a`,2)+J(20,7,8,18,K.cream,2)+Y(10,14,2.5,K.red)+Y(17,18,2,K.greenDark)+Y(24,12,2,K.skyDark),e),house:e=>q(J(6,14,20,14,K.cream,2)+X(`4,16 16,5 28,16`,K.red)+J(13,20,6,8,K.brown,1)+J(9,17,5,4,K.sky,1),e),shop:e=>q(J(5,12,22,14,K.sky,2)+X(`5,12 10,6 22,6 27,12`,K.red)+J(13,18,6,8,K.cream,1)+Y(11,16,1.5,K.gold)+Y(21,16,1.5,K.gold),e),progress:e=>q(J(5,18,5,8,K.sky,1)+J(13,12,5,14,K.green,1)+J(21,7,5,19,K.gold,1),e),players:e=>q(Y(11,11,5,`#ffcf9e`)+J(7,17,8,8,K.sky,2)+Y(22,12,5,`#c68642`)+J(18,18,8,7,K.pink,2),e),check:e=>q(uh(`M5 17L13 25L27 8`,5.5),e),skip:e=>q(X(`4,6 16,16 4,26`,K.white)+X(`16,6 28,16 16,26`,K.white),e),plus:e=>q(lh(`M12.5 4h7v8.5H28v7h-8.5V28h-7v-8.5H4v-7h8.5z`,K.green),e),trash:e=>q(J(9,10,14,16,K.white,2)+J(7,8,18,4,K.ink,1)+J(12,5,8,4,K.ink,1)+`<line x1="13" y1="14" x2="13" y2="22" stroke="${K.ink}" stroke-width="2" stroke-linecap="round"/><line x1="19" y1="14" x2="19" y2="22" stroke="${K.ink}" stroke-width="2" stroke-linecap="round"/>`,e),no:e=>q(Y(16,16,12,K.red)+`<line x1="9" y1="9" x2="23" y2="23" stroke="${K.white}" stroke-width="3.5" stroke-linecap="round"/>`,e),trophy:e=>q(lh(`M8 8h16v4a8 8 0 0 1-16 0V8z`,K.gold)+J(6,6,4,8,K.gold,1)+J(22,6,4,8,K.gold,1)+J(13,20,6,4,K.gold,1)+J(10,24,12,4,K.goldDark,1),e),party:e=>q(X(`8,26 14,8 20,26`,K.gold)+Y(10,6,2,K.red)+Y(18,5,2,K.sky)+Y(24,10,2,K.green)+Y(22,18,2,K.purple)+Y(7,14,2,K.orange),e),crown:e=>q(X(`5,22 5,12 11,18 16,8 21,18 27,12 27,22`,K.gold)+Y(16,7,2,K.red)+Y(6,11,1.8,K.sky)+Y(26,11,1.8,K.green),e),sparkle:e=>q(X(`16,3 18,13 28,16 18,19 16,29 14,19 4,16 14,13`,K.gold)+X(`24,5 25,9 29,10 25,11 24,15 23,11 19,10 23,9`,K.cream),e),book:e=>q(J(6,5,10,22,K.red,2)+J(16,5,10,22,K.sky,2)+J(14,5,4,22,K.cream,1)+J(8,10,6,2,K.cream,1)+J(18,10,6,2,K.cream,1),e),target:e=>q(Y(16,16,12,K.red)+Y(16,16,8,K.cream)+Y(16,16,4,K.red),e),clock:e=>q(Y(16,16,12,K.cream)+`<line x1="16" y1="16" x2="16" y2="9" stroke="${K.ink}" stroke-width="2.5" stroke-linecap="round"/><line x1="16" y1="16" x2="22" y2="18" stroke="${K.ink}" stroke-width="2.5" stroke-linecap="round"/>`+Y(16,16,2,K.ink),e),strength:e=>q(J(4,13,6,6,K.ink,2)+J(22,13,6,6,K.ink,2)+J(9,14,14,4,K.gold,1)+J(13,10,6,12,`#ffcf9e`,2),e),secret:e=>q(X(`16,4 24,14 16,28 8,14`,K.purple)+X(`16,4 20,14 16,18 12,14`,`#e0b0ff`),e),castle:e=>q(J(6,12,20,16,K.cream,1)+J(5,8,5,8,K.cream,1)+J(22,8,5,8,K.cream,1)+J(13,6,6,10,K.cream,1)+J(14,20,4,8,K.brown,1)+X(`13,6 16,2 19,6`,K.red),e),hairShort:e=>q(Y(16,18,9,`#ffcf9e`)+lh(`M7 16c0-8 4-12 9-12s9 4 9 12`,K.brownDark)+J(10,8,12,5,K.brownDark,2),e),hairSpiky:e=>q(Y(16,18,9,`#ffcf9e`)+X(`8,16 10,6 13,14 16,4 19,14 22,6 24,16`,K.brownDark),e),hairLong:e=>q(J(7,16,5,12,K.brownDark,2)+J(20,16,5,12,K.brownDark,2)+Y(16,16,9,`#ffcf9e`)+lh(`M7 14c0-8 4-11 9-11s9 3 9 11`,K.brownDark),e),hairBuzz:e=>q(Y(16,18,9,`#ffcf9e`)+lh(`M8 15c1-6 4-9 8-9s7 3 8 9`,K.brownDark),e),hairBald:e=>q(Y(16,17,10,`#ffcf9e`)+Y(12,16,1.5,K.ink)+Y(20,16,1.5,K.ink)+lh(`M13 21c1.5 1.5 4.5 1.5 6 0`,`none`)+`<path d="M13 21c1.5 1.5 4.5 1.5 6 0" fill="none" stroke="${K.ink}" stroke-width="1.5" stroke-linecap="round"/>`,e),outfitShirt:e=>q(lh(`M8 10 L16 6 L24 10 L22 14 L20 12 L20 26 L12 26 L12 12 L10 14 Z`,K.sky)+J(12,14,8,10,K.brown,1),e),outfitDress:e=>q(lh(`M11 8 L21 8 L24 26 L8 26 Z`,K.pink)+J(13,6,6,5,`#ffcf9e`,2)+J(12,11,8,3,K.purple,1),e),outfitOveralls:e=>q(J(10,8,12,8,K.sky,2)+lh(`M8 14 L24 14 L22 26 L10 26 Z`,K.skyDark)+J(14,14,4,4,K.gold,1)+J(10,6,3,6,K.skyDark,1)+J(19,6,3,6,K.skyDark,1),e),worldPasta:e=>q(Y(16,18,11,K.cream)+lh(`M8 16c2 4 6 6 8 2 2 4 6 2 8-2`,`none`)+`<path d="M8 16c2 4 6 6 8 2 2 4 6 2 8-2" fill="none" stroke="${K.goldDark}" stroke-width="2.5" stroke-linecap="round"/>`+Y(12,14,2,K.red)+Y(20,15,2,K.red)+Y(16,20,2,K.leaf),e),worldWaffle:e=>q(J(6,6,20,20,K.gold,3)+`<line x1="12" y1="8" x2="12" y2="24" stroke="${K.goldDark}" stroke-width="2"/><line x1="20" y1="8" x2="20" y2="24" stroke="${K.goldDark}" stroke-width="2"/><line x1="8" y1="12" x2="24" y2="12" stroke="${K.goldDark}" stroke-width="2"/><line x1="8" y1="20" x2="24" y2="20" stroke="${K.goldDark}" stroke-width="2"/>`+J(13,4,6,4,`#c94f2e`,1),e),worldSnow:e=>q(X(`6,24 16,6 26,24`,K.snow)+X(`16,6 20,14 16,14 12,14`,K.white)+Y(10,10,2,K.sky)+Y(24,12,1.5,K.sky)+Y(18,8,1.5,K.sky),e),worldCabbage:e=>q(Y(16,16,11,K.cabbage)+Y(16,16,7,`#9b6bc4`)+Y(16,16,3.5,`#c9a0e8`)+X(`16,5 18,10 14,10`,K.leaf),e),worldCrystal:e=>q(X(`16,3 24,14 20,28 12,28 8,14`,K.gem)+X(`16,3 20,14 16,16 12,14`,K.gemLite)+`<line x1="12" y1="14" x2="20" y2="14" stroke="${K.ink}" stroke-width="1.5"/>`,e),worldPepper:e=>q(lh(`M16 6c-6 2-9 10-7 16 1 4 4 6 7 6s6-2 7-6c2-6-1-14-7-16z`,K.red)+J(14,3,4,5,K.leaf,1)+X(`14,5 10,2 14,4`,K.leaf),e),itemRug:e=>q(J(4,10,24,14,K.red,2)+J(7,13,18,8,`#ffd0d0`,1)+J(10,15,12,4,K.gold,1),e),itemChair:e=>q(J(8,8,16,6,K.wood,2)+J(8,14,16,4,K.wood,1)+J(8,18,3,8,K.brownDark,1)+J(21,18,3,8,K.brownDark,1)+J(8,4,4,6,K.wood,1),e),itemTable:e=>q(J(5,12,22,5,K.wood,2)+J(8,17,3,9,K.brownDark,1)+J(21,17,3,9,K.brownDark,1)+Y(16,10,3,K.cream)+J(12,8,8,2,K.red,1),e),itemBed:e=>q(J(4,14,24,8,K.sky,2)+J(4,10,8,6,K.cream,2)+J(14,12,12,4,K.pink,1)+J(4,22,3,5,K.brownDark,1)+J(25,22,3,5,K.brownDark,1),e),itemLamp:e=>q(J(14,18,4,8,K.ink,1)+J(10,26,12,3,K.ink,1)+X(`10,18 16,6 22,18`,K.gold)+Y(16,12,2,K.cream),e),itemBookshelf:e=>q(J(7,4,18,24,K.wood,2)+J(9,7,5,7,K.red,1)+J(15,7,4,7,K.sky,1)+J(20,7,3,7,K.green,1)+J(9,16,6,7,K.purple,1)+J(16,16,7,7,K.gold,1),e),itemToybox:e=>q(J(5,12,22,14,K.sky,2)+J(5,8,22,6,K.red,2)+Y(16,11,2,K.gold)+J(10,16,5,5,K.gold,1)+Y(22,18,3,K.pink),e),itemFlowers:e=>q(J(8,20,16,6,K.leaf,2)+Y(11,12,4,K.pink)+Y(16,8,4,K.gold)+Y(22,13,4,K.purple)+J(15,12,2,10,K.leaf,1)+J(10,14,2,8,K.leaf,1)+J(21,15,2,7,K.leaf,1),e),itemMailbox:e=>q(J(8,10,16,10,K.sky,3)+J(14,20,4,8,K.brownDark,1)+J(20,12,6,3,K.red,1)+J(10,13,8,2,K.cream,1),e),itemTree:e=>q(J(13,18,6,10,K.brown,1)+Y(16,12,9,K.leaf)+Y(11,14,5,K.greenDark)+Y(22,13,5,K.green),e),itemSwing:e=>q(J(6,4,3,24,K.brownDark,1)+J(23,4,3,24,K.brownDark,1)+J(6,4,20,3,K.brownDark,1)+`<line x1="12" y1="7" x2="12" y2="18" stroke="${K.ink}" stroke-width="2"/><line x1="20" y1="7" x2="20" y2="18" stroke="${K.ink}" stroke-width="2"/>`+J(10,18,12,3,K.gold,1),e),itemTrampoline:e=>q(J(4,18,24,6,K.sky,3)+J(7,16,18,4,K.purple,2)+J(6,24,3,4,K.ink,1)+J(23,24,3,4,K.ink,1)+X(`14,8 18,14 10,14`,K.gold),e),itemCat:e=>q(Y(16,18,8,K.gold)+X(`9,12 11,4 14,12`,K.gold)+X(`18,12 21,4 23,12`,K.gold)+Y(13,17,1.5,K.ink)+Y(19,17,1.5,K.ink)+lh(`M14 21c1 1 3 1 4 0`,`none`)+`<path d="M14 21c1 1 3 1 4 0" fill="none" stroke="${K.ink}" stroke-width="1.5" stroke-linecap="round"/>`,e),itemDog:e=>q(Y(16,17,8,K.wood)+J(6,12,5,8,K.wood,2)+J(21,12,5,8,K.wood,2)+Y(13,16,1.5,K.ink)+Y(19,16,1.5,K.ink)+Y(16,20,2,K.pink),e),itemAquarium:e=>q(J(5,8,22,18,K.gemLite,2)+J(5,24,22,4,K.brown,1)+Y(12,16,3,K.orange)+X(`15,16 20,13 20,19`,K.orange)+J(20,18,4,5,K.leaf,1),e),itemTelescope:e=>q(J(6,18,8,4,K.ink,1)+J(12,14,14,5,K.purple,2)+J(24,12,5,8,K.gold,1)+J(8,22,4,6,K.ink,1),e),itemRobot:e=>q(J(9,10,14,14,K.sky,2)+J(11,4,10,6,K.skyDark,2)+Y(13,15,2,K.red)+Y(19,15,2,K.green)+J(5,12,4,8,K.skyDark,1)+J(23,12,4,8,K.skyDark,1),e),itemRocket:e=>q(lh(`M16 3c4 6 5 14 5 20h-10c0-6 1-14 5-20z`,K.red)+Y(16,14,3,K.sky)+X(`11,23 8,29 14,25`,K.gold)+X(`21,23 24,29 18,25`,K.gold)+X(`16,23 13,29 19,29`,K.orange),e),itemGolem:e=>q(Y(16,14,10,K.wood)+Y(12,12,2,K.ink)+Y(20,12,2,K.ink)+J(11,18,10,3,K.red,1)+J(6,8,4,8,K.wood,2)+J(22,8,4,8,K.wood,2),e),itemSerpent:e=>q(lh(`M6 20c4-10 8-4 12-10 3 6 4 2 8 8`,`none`)+`<path d="M6 20c4-10 8-4 12-10 3 6 4 2 8 8" fill="none" stroke="${K.goldDark}" stroke-width="4" stroke-linecap="round"/>`+Y(24,16,4,K.gold)+Y(25,15,1.2,K.ink),e),itemYeti:e=>q(Y(16,18,9,K.snow)+Y(16,10,6,K.snow)+Y(13,9,1.5,K.ink)+Y(19,9,1.5,K.ink)+Y(16,12,1.5,K.orange)+J(8,6,4,4,K.snow,1)+J(20,6,4,4,K.snow,1),e),itemCabbageCrown:e=>q(X(`5,20 5,12 11,16 16,8 21,16 27,12 27,20`,K.cabbage)+Y(16,8,2,K.gold)+J(10,20,12,4,K.gold,1),e),itemCrystalLamp:e=>q(J(13,22,6,6,K.ink,1)+X(`16,4 24,14 20,22 12,22 8,14`,K.gem)+X(`16,4 20,14 16,16 12,14`,K.gemLite),e),itemDragonKite:e=>q(X(`8,8 24,16 8,24 12,16`,K.red)+`<line x1="12" y1="16" x2="28" y2="28" stroke="${K.ink}" stroke-width="2"/>`+J(26,26,4,4,K.gold,1)+X(`8,8 4,4 10,10`,K.leaf),e)},fh={rug:`itemRug`,chair:`itemChair`,table:`itemTable`,bed:`itemBed`,lamp:`itemLamp`,bookshelf:`itemBookshelf`,toybox:`itemToybox`,flowers:`itemFlowers`,mailbox:`itemMailbox`,tree:`itemTree`,swing:`itemSwing`,trampoline:`itemTrampoline`,cat:`itemCat`,dog:`itemDog`,aquarium:`itemAquarium`,telescope:`itemTelescope`,robot:`itemRobot`,rocket:`itemRocket`,golemstatue:`itemGolem`,serpentstatue:`itemSerpent`,yetisnowman:`itemYeti`,cabbagecrown:`itemCabbageCrown`,crystallamp:`itemCrystalLamp`,dragonkite:`itemDragonKite`},ph=[`worldPasta`,`worldWaffle`,`worldSnow`,`worldCabbage`,`worldCrystal`,`worldPepper`],mh=[`hairShort`,`hairSpiky`,`hairLong`,`hairBuzz`,`hairBald`],hh=[`outfitShirt`,`outfitDress`,`outfitOveralls`];function gh(e,t=32){let n=dh[e];return n?n(t):(console.warn(`[icons] unknown icon: ${e}`),q(J(8,8,16,16,K.cream,2),t))}function _h(e,t=32){let n=document.createElement(`span`);return n.className=`icon`,n.setAttribute(`aria-hidden`,`true`),n.innerHTML=gh(e,t),n}function vh(e){return fh[e]||`shop`}function yh(e){return ph[e]||`map`}function bh(e=document){e.querySelectorAll(`[data-icon]`).forEach(e=>{let t=e.getAttribute(`data-icon`),n=Number(e.getAttribute(`data-icon-size`)||32);e.classList.add(`icon`),e.setAttribute(`aria-hidden`,`true`),e.innerHTML=gh(t,n)})}function xh(e,t,n){let r=e.matches?.(`[data-icon]`)?e:e.querySelector?.(`[data-icon]`);if(!r)return;r.setAttribute(`data-icon`,t);let i=n||Number(r.getAttribute(`data-icon-size`)||32);r.setAttribute(`data-icon-size`,String(i)),r.innerHTML=gh(t,i)}var Sh=Ul,Ch=new Zi(.5,.5,1,10),wh=new Qi(.5,1,10),Th=new ta(.5,10,8),Eh=.3,Dh=0,Oh={minX:-5.75,maxX:5.75,minZ:-6.35,maxZ:1.35},kh={minX:-4.9,maxX:4.9,minZ:-5.4,maxZ:.6},Ah={minX:-12.4,maxX:12.4,minZ:-8.4,maxZ:12.4},jh=2.6,Mh=3.6,Nh=4.2,Ph=7.6,Fh=6.6,Ih=21,Lh=1,Rh=(e,t,n)=>t>e.minX&&t<e.maxX&&n>e.minZ&&n<e.maxZ,zh=(e,t,n)=>Math.max(t,Math.min(n,e)),Bh=1.15,Vh=.18,Hh=1.15,Uh=12,Wh=30,Gh=6,Kh=.78,qh=[16766282,16761395,16769154,14711490,16103746,16747582];function Jh(e){return(e-(Gh-1)/2)*Kh}function Z(e,t=0){return new H({color:e,emissive:t})}function Q(e,t,n,r,i,a,o,s=0){let c=new V(Sh,e);return c.position.set(t,n,r),c.scale.set(i,a,o),c.rotation.y=s,c}var Yh=class{constructor(e){this.renderer=e,this.active=!1,this.scene=new Hn,this.scene.background=new B(7980272),this.camera=new Ua(45,window.innerWidth/window.innerHeight,.1,200);let t=new ja(16774109,8295344,1.05),n=new Ja(16768942,1.45);n.position.set(8,14,10);let r=new Ga(16764810,.85,16,1.6);r.position.set(0,3.4,-2.5),this.scene.add(t,n,r),this.effects=new ym(this.scene),this.built={},this.trophies={},this.anims=[],this.itemPos={rug:[1.8,Eh,-2.2],chair:[4,Eh,-3.2],table:[2.6,Eh,-3.4],bed:[-3.4,Eh,-4.6],lamp:[-1.5,Eh,-5.2],bookshelf:[3.9,Eh,-5.3],toybox:[-4,Eh,-1.6],aquarium:[4.2,Eh,-.8],telescope:[-4.2,Eh,.2],robot:[.6,Eh,-.8],flowers:[-3,Dh,3.2],mailbox:[2.4,Dh,7.2],tree:[7.2,Dh,4],swing:[-7.2,Dh,3.4],trampoline:[6.4,Dh,8],cat:[1.6,Dh,2.2],dog:[-1.6,Dh,4.4],rocket:[-7.8,Dh,8.2],golemstatue:[5.4,Dh,5.2],serpentstatue:[-4.8,Dh,6.6],yetisnowman:[9.2,Dh,6],cabbagecrown:[-.4,Eh,-5],crystallamp:[1.4,Eh,-5],dragonkite:[10.2,Dh,10.4],herotrophy:[3.6,Dh,3]},this.buildSky(),this.buildDistantLand(),this.buildIsland(),this.buildHouse(),this.buildTrophyShelf(),this.buildClouds(),this.kid=Lp(.85),this.kidHome=new L(.6,Dh,3.4),this.kid.position.copy(this.kidHome),this.kid.rotation.y=-Math.PI/4,this.scene.add(this.kid),this.walkPath=null,this.kidY=Dh,this.stickMove={f:0,r:0},this.keyMove={f:0,r:0},this.freeWalkPhase=0,this.jumpH=0,this.jumpVel=0,this.jumpsLeft=0,this.attachInput(),this.attachControls(),this.camBase=new L(10.5,10.5,16.5),this.camLook=new L(-.5,1.2,.5),this.camFocus=this.camLook.clone();let i=this.camBase.clone().sub(this.camLook);this.camDist0=i.length(),this.camYaw0=Math.atan2(i.x,i.z),this.camPitch0=Math.asin(i.y/this.camDist0),this.camYaw=this.camYaw0,this.camPitch=this.camPitch0,this.camDist=this.camDist0,this.indoor=!1,this.savedView=null,this.camTarget=null,this.camera.position.copy(this.camBase),this.camera.lookAt(this.camLook)}orbitBy(e,t){this.camTarget=null,this.camYaw=zh(this.camYaw+e,this.camYaw0-Bh,this.camYaw0+Bh),this.camPitch=zh(this.camPitch-t,Vh,Hh)}zoomBy(e){this.camTarget=null,this.camDist=zh(this.camDist+e,Uh,Wh)}resetCam(){this.camYaw=this.camYaw0,this.camPitch=this.camPitch0,this.camDist=this.camDist0,this.camFocus.copy(this.camLook),this.indoor=!1,this.savedView=null,this.camTarget=null}buildIsland(){let e=Q(Z(7127626),0,-.4,2,26,.8,22),t=Q(Z(9268037),0,-1.55,2,25,1.5,21),n=Q(Z(7820591),0,-2.7,2,22,.9,18);this.scene.add(e,t,n),this.grassMesh=e;let r=Z(8114520);for(let e=-2;e<=2;e++)this.scene.add(Q(r,e*5.2,.01,2,2.6,.02,22));let i=Z(6535235),a=Z(7982423);for(let[e,t,n,r,o]of[[-8.2,-1.5,2.6,2,0],[4.5,6.5,3,2.2,1],[-3.5,8.8,2.2,1.8,0],[9,4,2.4,2,1],[-10.5,.5,2,1.6,1],[1.5,10.6,2.8,1.8,0]])this.scene.add(Q(o?a:i,e,.018,t,n,.02,r,e*.1));let o=Z(14274488);for(let e=0;e<7;e++)this.scene.add(Q(o,.5+Math.sin(e*1.7)*.35,.02,1.6+e*1.55,1.2,.06,1,Math.sin(e)*.2));let s=Z(5154372);this.scene.add(Q(s,-6.5,.35,-3.5,1.4,.9,1.2),Q(s,7.5,.35,-2.5,1.2,.8,1.3),Q(s,-9.5,.3,5.5,1.1,.7,1.1));let c=Z(10263690);this.scene.add(Q(c,9.8,.22,1.5,.9,.55,.7,.5))}buildHouse(){let e=Z(16179896),t=Z(15520932),n=new z,r=Q(Z(14393695),0,.15,-2.5,11.2,.3,7.4);n.add(r),this.floorMesh=r;let i=Z(13801551),a=Z(13078087);for(let e=0;e<8;e++)n.add(Q(e%2?i:a,-4.9+e*1.4,.305,-2.5,1.32,.014,7.3));n.add(Q(Z(16772536,3353104),-2.6,.318,-4.3,1.7,.012,2,.15)),n.add(Q(Z(6926560),0,.322,.2,1.6,.02,.9)),n.add(Q(e,0,1.8,-5.9,11.2,3,.35)),n.add(Q(t,-5.4,1.8,-2.5,.35,3,7.2)),n.add(Q(t,5.4,1.8,-2.5,.35,3,7.2)),n.add(Q(Z(15785134),1.8,2.3,-5.71,2.2,1.3,.06)),n.add(Q(Z(16443586),-4.3,1.3,-5.71,1.5,1.1,.06));let o=Z(13607787);n.add(Q(o,0,.48,-5.7,11,.36,.08)),n.add(Q(o,-5.2,.48,-2.5,.08,.36,6.9)),n.add(Q(o,5.2,.48,-2.5,.08,.36,6.9)),n.add(Q(e,-4.4,1.8,.9,2.3,3,.3)),n.add(Q(e,4.4,1.8,.9,2.3,3,.3)),n.add(Q(e,0,3,.9,11.2,.6,.3)),n.add(Q(Z(16777215),-2.6,2,-5.72,1.5,1.3,.1)),n.add(Q(Z(11066613,1714746),-2.6,2,-5.66,1.2,1,.1));let s=Z(14834506),c=Q(s,-3.1,4.35,-2.5,6.9,.35,8.4);c.rotation.z=.42;let l=Q(s,3.1,4.35,-2.5,6.9,.35,8.4);l.rotation.z=-.42,n.add(c,l),n.add(Q(Z(13191739),0,5.72,-2.5,.8,.42,8.5)),n.add(Q(Z(11559242),3.4,5.4,-4.2,.85,1.7,.85)),n.add(Q(Z(15261906),3.4,6.3,-4.2,1.05,.25,1.05)),n.add(Q(t,-.6,1,-4.6,.25,1.4,2.4)),this.scene.add(n)}buildTrophyShelf(){let e=new z;e.position.set(.8,2.55,-5.55),e.add(Q(Z(10119999),0,0,0,4.6,.16,.7)),e.add(Q(Z(8739379),-2,-.35,.15,.14,.55,.35)),e.add(Q(Z(8739379),2,-.35,.15,.14,.55,.35)),this.scene.add(e),this.shelf=e}buildClouds(){this.clouds=[];let e=Z(16777215),t=[[-18,8,-8,.5],[14,10,-12,.4],[-12,12,14,.6],[18,9,8,.35],[0,13,-16,.45]],n=Z(14280436);for(let[r,i,a,o]of t){let t=new z;for(let n=0;n<3;n++){let r=new V(Sh,e);r.scale.set(2.2+n*.8,.9,1.6+n%2),r.position.set(n*1.6-1.6,n%2*.4,(n-1)*.7),t.add(r)}let s=new V(Sh,n);s.scale.set(5.4,.4,2.6),s.position.y=-.5,t.add(s),t.position.set(r,i,a),t.userData.drift=o,this.scene.add(t),this.clouds.push(t)}}buildSky(){this.scene.background=new B(5941480),this.scene.fog=new Vn(14478586,55,150);let e=document.createElement(`canvas`);e.width=2,e.height=256;let t=e.getContext(`2d`),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,`#5aa8e8`),n.addColorStop(.55,`#9fd4f4`),n.addColorStop(1,`#e7f3fc`),t.fillStyle=n,t.fillRect(0,0,2,256);let r=new Gi(e),i=new V(new ta(140,24,16),new fi({map:r,side:1,fog:!1,depthWrite:!1}));i.renderOrder=-2,this.scene.add(i);let a=new z,o=new V(Th,new fi({color:16771238,transparent:!0,opacity:.35,fog:!1,depthWrite:!1}));o.scale.setScalar(26);let s=new V(Th,new fi({color:16774351,fog:!1}));s.scale.setScalar(13),a.add(o,s),a.position.set(-58,44,-78),this.scene.add(a)}buildDistantLand(){for(let e of[{r:64,y:-15,n:24,h:6,w:8,col:10272989},{r:46,y:-11,n:18,h:5,w:7,col:7646316}]){let t=Z(e.col);for(let n=0;n<e.n;n++){let r=n/e.n*Math.PI*2,i=e.r+Math.sin(n*2.3)*6,a=e.h+(Math.sin(n*1.7)*.5+.5)*e.h;this.scene.add(Q(t,Math.sin(r)*i,e.y+a/2,Math.cos(r)*i,e.w+Math.abs(Math.sin(n*1.3))*3,a,e.w+Math.abs(Math.cos(n))*3,r))}}this.scene.add(Q(Z(10275816),0,-18,0,300,.5,300))}makeRug(){let e=new z;return e.add(Q(Z(14834523),0,.03,0,3.2,.06,2.2)),e.add(Q(Z(15913120),0,.065,0,2.4,.02,1.5)),e}makeChair(){let e=new z,t=Z(9263659);e.add(Q(Z(6000089),0,.5,0,.75,.14,.75)),e.add(Q(Z(6000089),0,.95,-.32,.75,.85,.12));for(let[n,r]of[[-.28,-.28],[.28,-.28],[-.28,.28],[.28,.28]])e.add(Q(t,n,.22,r,.1,.45,.1));return e.rotation.y=-.7,e}makeTable(){let e=new z,t=Z(11104570);e.add(Q(t,0,.78,0,1.6,.12,1.1));for(let[t,n]of[[-.65,-.4],[.65,-.4],[-.65,.4],[.65,.4]])e.add(Q(Z(9263659),t,.36,n,.12,.72,.12));return e.add(Q(Z(16777215),-.3,.87,0,.45,.05,.45)),e.add(Q(Z(16747586),.4,.94,.15,.2,.24,.2)),e}makeBed(){let e=new z;return e.add(Q(Z(9263659),0,.3,0,2.5,.5,1.4)),e.add(Q(Z(9263659),-1.2,.75,0,.14,1.1,1.4)),e.add(Q(Z(8308963),.25,.66,0,1.9,.24,1.3)),e.add(Q(Z(16777215),-.85,.68,0,.6,.22,.9)),e.add(Q(Z(16766282),.5,.82,.25,.4,.1,.4)),e}makeLamp(){let e=new z;e.add(Q(Z(5592422),0,.06,0,.5,.12,.5));let t=new V(Ch,Z(5592422));t.scale.set(.12,1.5,.12),t.position.y=.85;let n=new V(wh,Z(16769154,5587968));return n.scale.set(.85,.6,.85),n.position.y=1.8,e.add(t,n),e}makeBookshelf(){let e=new z;e.add(Q(Z(10119999),0,1,0,1.6,2,.5));let t=[14834523,6000089,6934634,16766282,12089305];for(let n=0;n<3;n++){e.add(Q(Z(8015658),0,.45+n*.6,.05,1.44,.06,.44));for(let r=0;r<4;r++)e.add(Q(Z(t[(n*2+r)%5]),-.5+r*.34,.72+n*.6,.1,.22,.42,.3))}return e}makeToybox(){let e=new z;e.add(Q(Z(6926560),0,.4,0,1.4,.8,.9)),e.add(Q(Z(4886724),0,.86,0,1.5,.16,1)),e.children[1].rotation.x=-.25;let t=new V(Th,Z(14834523));return t.scale.setScalar(.35),t.position.set(.9,.18,.5),e.add(t,Q(Z(16766282),-.15,.99,0,.3,.3,.3,.6)),e}makeFlowers(){let e=new z;e.add(Q(Z(8016432),0,.09,0,2.4,.18,1.3));let t=[16739201,16767293,16752627,7649791,16747586];for(let n=0;n<5;n++){let r=-.9+n*.45;e.add(Q(Z(4169274),r,.4,0,.07,.5,.07));let i=new V(Th,Z(t[n]));i.scale.setScalar(.3),i.position.set(r,.7,0),e.add(i)}return e}makeMailbox(){let e=new z;e.add(Q(Z(9263659),0,.55,0,.12,1.1,.12));let t=Z(6000089);e.add(Q(t,0,1.2,0,.55,.4,.85));let n=new V(Ch,t);return n.scale.set(.55,.85,.4),n.rotation.x=Math.PI/2,n.position.y=1.4,e.add(n),e.add(Q(Z(14834523),.32,1.5,.25,.06,.34,.1)),e.rotation.y=.5,e}makeTree(){let e=new z,t=new V(Ch,Z(8015658));t.scale.set(.55,1.8,.55),t.position.y=.9,e.add(t),e.add(Q(Z(4169274),0,2.4,0,2.6,1.6,2.6)),e.add(Q(Z(5027141),0,3.4,0,1.7,1,1.7));let n=new V(Th,Z(14834523));return n.scale.setScalar(.24),n.position.set(.9,1.9,.9),e.add(n),e}makeSwing(e){let t=new z,n=Z(13208139),r=Q(n,-1.3,1.1,-.5,.15,2.3,.15);r.rotation.x=.28;let i=Q(n,-1.3,1.1,.5,.15,2.3,.15);i.rotation.x=-.28;let a=Q(n,1.3,1.1,-.5,.15,2.3,.15);a.rotation.x=.28;let o=Q(n,1.3,1.1,.5,.15,2.3,.15);o.rotation.x=-.28,t.add(r,i,a,o),t.add(Q(n,0,2.2,0,3,.16,.16));let s=new z;return s.position.set(0,2.2,0),s.add(Q(Z(12237498),-.35,-.65,0,.05,1.3,.05)),s.add(Q(Z(12237498),.35,-.65,0,.05,1.3,.05)),s.add(Q(Z(14834523),0,-1.3,0,.9,.1,.45)),t.add(s),e.push(e=>{s.rotation.x=Math.sin(e*1.4)*.28}),t.rotation.y=.9,t}makeTrampoline(){let e=new z,t=new V(Ch,Z(2964053));t.scale.set(2.4,.18,2.4),t.position.y=.66,e.add(t);let n=new V(Ch,Z(6934634));n.scale.set(2.7,.12,2.7),n.position.y=.78,e.add(n);for(let t=0;t<4;t++){let n=t*Math.PI/2+Math.PI/4;e.add(Q(Z(8947865),Math.cos(n)*1.1,.33,Math.sin(n)*1.1,.1,.66,.1))}return e}makeCat(e){let t=new z,n=Z(15769675);t.add(Q(n,0,.32,0,.85,.42,.45));let r=Q(n,.45,.62,0,.42,.4,.4);t.add(r),t.add(Q(n,.32,.9,-.12,.12,.18,.08)),t.add(Q(n,.32,.9,.12,.12,.18,.08));let i=Z(2236962);t.add(Q(i,.66,.66,-.1,.05,.07,.07)),t.add(Q(i,.66,.66,.1,.05,.07,.07));let a=Q(n,-.48,.55,0,.1,.55,.1);return a.rotation.z=.4,t.add(a),e.push(e=>{a.rotation.z=.4+Math.sin(e*3)*.25,r.position.y=.62+Math.sin(e*1.8)*.02}),t.rotation.y=2.2,t}makeDog(e){let t=new z,n=Z(11104570),r=Q(n,0,.4,0,1.05,.5,.55);t.add(r);let i=Q(n,.6,.78,0,.5,.45,.45);t.add(i),t.add(Q(Z(8015658),.5,1.05,-.2,.12,.28,.1)),t.add(Q(Z(8015658),.5,1.05,.2,.12,.28,.1)),t.add(Q(Z(2236962),.87,.72,0,.1,.1,.14));for(let[e,r]of[[-.35,-.18],[-.35,.18],[.35,-.18],[.35,.18]])t.add(Q(n,e,.12,r,.14,.25,.14));let a=Q(n,-.6,.62,0,.09,.45,.09);return a.rotation.z=-.6,t.add(a),e.push(e=>{a.rotation.x=Math.sin(e*9)*.5,t.position.y=Dh+Math.abs(Math.sin(e*2.2))*.06}),t.rotation.y=-2,t}makeAquarium(e){let t=new z;t.add(Q(Z(9263659),0,.35,0,1.3,.7,.7)),t.add(Q(Z(8308963,666170),0,1.05,0,1.2,.7,.6)),t.add(Q(Z(2964053),0,1.44,0,1.3,.08,.7)),t.add(Q(Z(15651982),0,.74,0,1.1,.08,.5));let n=Q(Z(16747586),0,1.05,0,.22,.14,.08),r=Q(Z(16766282),-.15,1.05,0,.1,.12,.04);return t.add(n,r),e.push(e=>{let t=e*1.2;n.position.set(Math.cos(t)*.35,1.05+Math.sin(e*2.6)*.08,Math.sin(t)*.14),n.rotation.y=-t+Math.PI/2,r.position.copy(n.position),r.rotation.y=n.rotation.y,r.translateX(-.16)}),t}makeTelescope(){let e=new z,t=Z(5592422);for(let n=0;n<3;n++){let r=Q(t,0,.55,0,.08,1.1,.08);r.rotation.z=.35,r.rotation.y=n*(Math.PI*2/3),r.rotateOnAxis(new L(0,0,1),0),r.position.set(Math.sin(n*2.1)*.3,.55,Math.cos(n*2.1)*.3),e.add(r)}let n=new V(Ch,Z(6000089));n.scale.set(.3,1.2,.3),n.position.y=1.25,n.rotation.z=.9,n.rotation.y=-.5,e.add(n);let r=new V(Ch,Z(16766282,5587968));return r.scale.set(.34,.1,.34),r.position.set(.48,1.62,-.25),r.rotation.copy(n.rotation),e.add(r),e}makeRobot(e){let t=new z,n=Z(10466504);t.add(Q(n,0,.5,0,.6,.7,.45)),t.add(Q(Z(14834523),0,.55,.24,.2,.2,.05));let r=new z;return r.position.y=1.05,r.add(Q(n,0,0,0,.45,.4,.4)),r.add(Q(Z(6942894,1722922),-.1,.02,.21,.1,.1,.04)),r.add(Q(Z(6942894,1722922),.1,.02,.21,.1,.1,.04)),r.add(Q(Z(16766282),0,.32,0,.05,.24,.05)),t.add(r),t.add(Q(n,-.42,.55,0,.14,.5,.14)),t.add(Q(n,.42,.55,0,.14,.5,.14)),t.add(Q(Z(7043722),-.16,.08,0,.2,.16,.3)),t.add(Q(Z(7043722),.16,.08,0,.2,.16,.3)),e.push(e=>{r.rotation.y=e*.6}),t.rotation.y=.8,t}makeRocket(e){let t=new z,n=new V(Ch,Z(15261906));n.scale.set(1,2.2,1),n.position.y=1.6;let r=new V(wh,Z(14834523));r.scale.set(1,.9,1),r.position.y=3.15,t.add(n,r),t.add(Q(Z(8308963,666170),0,2.1,.48,.4,.4,.12));for(let e=0;e<3;e++){let n=Q(Z(14834523),0,.55,0,.14,1,.7),r=e*(Math.PI*2/3);n.position.set(Math.sin(r)*.55,.55,Math.cos(r)*.55),n.rotation.y=r,t.add(n)}let i=this.itemPos.rocket;return e.push((e,t)=>{Math.random()<t*.7&&this.effects.sparkle(new L(i[0],.4,i[2]))}),t}makeGolemStatue(){let e=new z;e.add(Q(Z(10263690),0,.15,0,1.1,.3,1.1));let t=Z(9063213);e.add(Q(t,0,.75,0,.7,.9,.5)),e.add(Q(Z(12597547),0,1.16,0,.76,.14,.56)),e.add(Q(Z(10246710),0,1.45,0,.5,.45,.45));let n=Z(2236962);return e.add(Q(n,-.12,1.5,.21,.09,.09,.06)),e.add(Q(n,.12,1.5,.21,.09,.09,.06)),e.add(Q(t,-.5,.85,0,.22,.6,.22)),e.add(Q(t,.5,.85,0,.22,.6,.22)),e.add(Q(Z(16113331),.08,1.76,0,.18,.16,.18)),e.add(Q(Z(16113331),-.1,1.82,.06,.24,.1,.14)),e.add(Q(Z(15158332),.14,1.88,.08,.1,.1,.1)),e.rotation.y=.6,e}makeSerpentStatue(){let e=new z,t=Z(9062938);e.add(Q(Z(13208123),0,.12,0,1.6,.24,1.3)),e.add(Q(t,-.35,.35,0,.7,.35,.4)),e.add(Q(t,.15,.55,0,.5,.4,.4)),e.add(Q(t,.35,1,0,.4,.7,.38));let n=Q(t,.35,1.55,.05,.55,.4,.44);e.add(n),e.add(Q(Z(16769154),.35,1.81,.05,.24,.12,.24));let r=Z(2236962);return e.add(Q(r,.22,1.62,.28,.08,.08,.05)),e.add(Q(r,.48,1.62,.28,.08,.08,.05)),e.add(Q(Z(14834523),.35,1.42,.3,.08,.14,.06)),e.rotation.y=2.4,e}makeYetiSnowman(e){let t=new z,n=Z(15660799),r=new V(Th,n);r.scale.set(1.3,1.1,1.3),r.position.y=.5;let i=new V(Th,n);i.scale.setScalar(.95),i.position.y=1.35;let a=new V(Th,n);a.scale.setScalar(.65),a.position.y=2.05,t.add(r,i,a),t.add(Q(Z(6000089),0,1.68,0,.75,.16,.7)),t.add(Q(Z(6000089),.25,1.4,.3,.16,.45,.1));let o=Z(2236962);t.add(Q(o,-.12,2.12,.28,.08,.08,.05)),t.add(Q(o,.12,2.12,.28,.08,.08,.05));let s=new V(wh,Z(16747586));s.scale.set(.14,.4,.14),s.rotation.x=Math.PI/2,s.position.set(0,2,.45),t.add(s);let c=Q(Z(8015658),-.75,1.5,0,.6,.08,.08,0);c.rotation.z=.5;let l=Q(Z(8015658),.75,1.5,0,.6,.08,.08,0);return l.rotation.z=-.5,t.add(c,l),e.push(e=>{l.rotation.z=-.5+Math.sin(e*2.4)*.2}),t}makeCabbageCrown(){let e=new z,t=Z(14267242,5914624),n=Z(10247088,2821429),r=Z(14271208);e.add(Q(Z(5916210),0,.12,0,.9,.24,.9)),e.add(Q(Z(7225433),0,.34,0,.62,.2,.62));let i=new V(Ch,t);i.scale.set(.46,.16,.46),i.position.y=.62;let a=new V(Ch,Z(7225433));a.scale.set(.28,.18,.28),a.position.y=.66,e.add(i,a);for(let t=0;t<6;t++){let i=t*(Math.PI*2/6),a=Math.sin(i)*.36,o=Math.cos(i)*.36,s=new V(wh,n);s.scale.set(.16,.48,.16),s.position.set(a,.96,o),s.rotation.y=i,e.add(s);let c=Q(r,a,.98,o,.04,.32,.04);c.rotation.y=i,e.add(c)}return e.rotation.y=-.35,e}makeCrystalLamp(e){let t=new z;t.add(Q(Z(5916210),0,.1,0,.9,.2,.9));let n=[],r=[[0,1,0,0,.34,0],[-.24,.6,.14,.35,.2,0],[.26,.55,-.1,-.3,.18,.2],[.1,.45,.24,.2,.14,-.25]];for(let[e,i,a,o,s,c]of r){let r=new V(wh,Z(10448852,3809888));r.scale.set(s,i,s),r.position.set(e,i/2+.2,a),r.rotation.set(c,0,o),t.add(r),n.push(r)}return e.push(e=>{let t=1+Math.sin(e*2.2)*.06;n.forEach((e,n)=>{e.scale.x=e.scale.z=r[n][4]*t})}),t}makeDragonKite(e){let t=new z;t.add(Q(Z(9263659),0,.25,0,.14,.5,.14));let n=new z,r=Q(Z(14039594,3805192),0,0,0,1.1,1.1,.08,0);r.rotation.z=Math.PI/4,n.add(r),n.add(Q(Z(4169274),0,.1,.06,.34,.3,.06)),n.add(Q(Z(2236962),-.07,.14,.1,.06,.06,.04)),n.add(Q(Z(2236962),.07,.14,.1,.06,.06,.04));let i=[];for(let e=0;e<3;e++){let t=Q(Z([16751164,16757338,16742958][e]),0,-.95-e*.35,0,.3,.12,.05);n.add(t),i.push(t)}n.position.set(.5,3.2,.3),t.add(n);let a=Q(Z(16777215),0,0,0,.03,1,.03);t.add(a);let o=new L(0,.5,0);return e.push(e=>{n.position.x=.5+Math.sin(e*.9)*.5,n.position.y=3.2+Math.sin(e*1.3)*.35,n.rotation.z=Math.sin(e*1.1)*.18,i.forEach((t,n)=>{t.position.x=Math.sin(e*2.2-n*.9)*.18});let t=n.position.clone().add(o).multiplyScalar(.5);a.position.copy(t);let r=n.position.clone().sub(o);a.scale.y=r.length(),a.rotation.z=Math.atan2(-r.x,r.y)}),t}makeHeroTrophy(e){let t=new z,n=Z(16766282,7033344);t.add(Q(Z(12041929),0,.3,0,1.1,.6,1.1)),t.add(Q(Z(10134189),0,.66,0,.85,.12,.85)),t.add(Q(n,0,.82,0,.6,.2,.6));let r=new V(Ch,n);r.scale.set(.18,.35,.18),r.position.y=1.08;let i=new V(Ch,n);i.scale.set(.62,.55,.62),i.position.y=1.5,t.add(r,i),t.add(Q(n,-.42,1.55,0,.12,.36,.12)),t.add(Q(n,.42,1.55,0,.12,.36,.12));let a=Q(n,0,2.05,0,.5,.5,.12);a.rotation.z=Math.PI/4,t.add(a,Q(n,0,2.05,0,.5,.5,.12));let o=this.itemPos.herotrophy;return e.push((e,t)=>{Math.random()<t*.5&&this.effects.sparkle(new L(o[0],1.8,o[2]))}),t}makeTrophy(e){let t=new z,n=Z(qh[e%qh.length],4864e3);t.add(Q(n,0,.05,0,.3,.1,.3));let r=new V(Ch,n);r.scale.set(.09,.16,.09),r.position.y=.17;let i=new V(Ch,n);return i.scale.set(.3,.28,.3),i.position.y=.4,t.add(r,i),t.add(Q(n,-.2,.42,0,.07,.18,.07)),t.add(Q(n,.2,.42,0,.07,.18,.07)),t}buildItem(e){let t={rug:()=>this.makeRug(),chair:()=>this.makeChair(),table:()=>this.makeTable(),bed:()=>this.makeBed(),lamp:()=>this.makeLamp(),bookshelf:()=>this.makeBookshelf(),toybox:()=>this.makeToybox(),flowers:()=>this.makeFlowers(),mailbox:()=>this.makeMailbox(),tree:()=>this.makeTree(),swing:()=>this.makeSwing(this.anims),trampoline:()=>this.makeTrampoline(),cat:()=>this.makeCat(this.anims),dog:()=>this.makeDog(this.anims),aquarium:()=>this.makeAquarium(this.anims),telescope:()=>this.makeTelescope(),robot:()=>this.makeRobot(this.anims),rocket:()=>this.makeRocket(this.anims),golemstatue:()=>this.makeGolemStatue(),serpentstatue:()=>this.makeSerpentStatue(),yetisnowman:()=>this.makeYetiSnowman(this.anims),cabbagecrown:()=>this.makeCabbageCrown(),crystallamp:()=>this.makeCrystalLamp(this.anims),dragonkite:()=>this.makeDragonKite(this.anims),herotrophy:()=>this.makeHeroTrophy(this.anims)}[e];if(!t)return null;let n=t(),r=this.itemPos[e];return r&&(n.position.x+=r[0],n.position.y+=r[1],n.position.z+=r[2]),n}refresh(){let e=(Of().house||{}).owned||{};for(let t of Object.keys(e)){if(!e[t]||this.built[t]||this.ceremony&&this.ceremony.decorId===t)continue;let n=this.buildItem(t);n&&(this.built[t]=n,this.scene.add(n))}for(let e=0;e<Gh;e++){if(this.ceremony&&this.ceremony.world===e||!np(e)||this.trophies[e])continue;let t=this.makeTrophy(e);t.position.set(Jh(e),.08,0),this.shelf.add(t),this.trophies[e]=t}}celebrate(e){let t=this.itemPos[e];if(!t)return;let n=new L(t[0],t[1]+1.2,t[2]);this.effects.confetti(n),this.effects.sparkle(n)}beginCeremony(e,t,n=null){if(this.ceremony={world:e,decorId:t,onDone:n,t:0,stage:`fall`},this.enter(),!this.trophies[e]){let t=this.makeTrophy(e);t.position.set(Jh(e),1.7,0),this.shelf.add(t),this.trophies[e]=t}this.ceremony.trophy=this.trophies[e],this.ceremonyCam={pos:new L(2,3.4,.4),look:new L(.8,2.45,-5.55)},Yd(`You beat the castle! Time for your trophy!`,{rate:1})}updateCeremony(e){let t=this.ceremony;if(t.t+=e,t.stage===`fall`){let e=Math.max(0,Math.min(1,(t.t-1.2)/.8));if(t.trophy.position.y=1.7-1.6199999999999999*e*e,e>=1){t.stage=`landed`,t.t=0;let e=new L;t.trophy.getWorldPosition(e),this.effects.confetti(e),this.effects.sparkle(e),od(),Yd(`A new trophy for your shelf!`,{rate:1})}}else if(t.stage===`landed`){if(t.trophy.rotation.y+=e*3,t.t>2.4){t.trophy.rotation.y=0,t.t=0;let e=t.decorId&&zm(t.decorId);if(e){if(t.stage=`decor`,!this.built[t.decorId]){let e=this.buildItem(t.decorId);e&&(this.built[t.decorId]=e,this.scene.add(e))}this.celebrate(t.decorId),nd(),Yd(`You won the ${e.name}! What a prize!`,{rate:1});let n=this.itemPos[t.decorId];this.ceremonyCam={pos:new L(n[0]+3.2,n[1]+3.4,n[2]+5.2),look:new L(n[0],n[1]+1,n[2])}}else t.stage=`end`}}else t.stage===`decor`?t.t>3.2&&(t.stage=`end`):this.endCeremony()}endCeremony(){let e=this.ceremony;e&&(this.ceremony=null,this.ceremonyCam=null,e.trophy.position.y=.08,e.trophy.rotation.y=0,e.onDone&&e.onDone())}attachInput(){let e=this.renderer.domElement;this.raycaster=new mo,e.style.touchAction=`none`;let t=new Map,n=null,r=!1,i=0,a=e=>{if(this.active&&!(e.target&&e.target.closest&&e.target.closest(`button`))){if(t.set(e.pointerId,{x:e.clientX,y:e.clientY}),t.size===1)n={x:e.clientX,y:e.clientY},r=!1;else if(t.size===2){let[e,n]=[...t.values()];i=Math.hypot(e.x-n.x,e.y-n.y),r=!0}}},o=e=>{if(!this.active||!t.has(e.pointerId))return;let a=t.get(e.pointerId),o=a.x,s=a.y;if(a.x=e.clientX,a.y=e.clientY,t.size>=2){let[e,n]=[...t.values()],r=Math.hypot(e.x-n.x,e.y-n.y);i>0&&this.zoomBy((i-r)*.05),i=r;return}n&&(!r&&Math.hypot(e.clientX-n.x,e.clientY-n.y)>10&&(r=!0),r&&this.orbitBy((e.clientX-o)*.006,(e.clientY-s)*.006))},s=e=>{if(!this.active)return;let a=t.size===1&&!r&&n&&Math.hypot(e.clientX-n.x,e.clientY-n.y)<=10;t.delete(e.pointerId),t.size<2&&(i=0),t.size===0&&(n=null,r=!1),a&&this.tap(e.clientX,e.clientY)},c=e=>{this.active&&(e.preventDefault(),this.zoomBy(e.deltaY*.01))};if(window.PointerEvent)e.addEventListener(`pointerdown`,a),window.addEventListener(`pointermove`,o),window.addEventListener(`pointerup`,s),window.addEventListener(`pointercancel`,s),e.addEventListener(`wheel`,c,{passive:!1});else{let t=null,n=!1,r=null;e.addEventListener(`mousedown`,e=>{this.active&&(e.target&&e.target.closest&&e.target.closest(`button`)||(t={x:e.clientX,y:e.clientY},r={x:e.clientX,y:e.clientY},n=!1))}),window.addEventListener(`mousemove`,e=>{!this.active||!t||(!n&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>10&&(n=!0),n&&this.orbitBy((e.clientX-r.x)*.006,(e.clientY-r.y)*.006),r={x:e.clientX,y:e.clientY})}),window.addEventListener(`mouseup`,e=>{if(!this.active||!t)return;let r=!n&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<=10;t=null,r&&this.tap(e.clientX,e.clientY)}),e.addEventListener(`wheel`,c,{passive:!1})}}attachControls(){let e=document.getElementById(`screen-house`);if(!e)return;let t=document.createElement(`div`);t.id=`house-stick`,Object.assign(t.style,{position:`absolute`,left:`22px`,bottom:`22px`,width:`132px`,height:`132px`,borderRadius:`50%`,background:`rgba(255,255,255,0.16)`,border:`3px solid rgba(255,255,255,0.5)`,touchAction:`none`,zIndex:`25`,userSelect:`-webkit-user-select`,display:`none`});let n=document.createElement(`div`);Object.assign(n.style,{position:`absolute`,left:`50%`,top:`50%`,width:`58px`,height:`58px`,marginLeft:`-29px`,marginTop:`-29px`,borderRadius:`50%`,background:`rgba(255,255,255,0.9)`,boxShadow:`0 2px 7px rgba(0,0,0,0.3)`,pointerEvents:`none`,transform:`translate(0px, 0px)`}),t.appendChild(n);let r=document.createElement(`button`);r.id=`house-jump`,r.className=`btn btn-round`,r.setAttribute(`aria-label`,`Jump`),r.appendChild(_h(`up`,56)),Object.assign(r.style,{position:`absolute`,right:`28px`,bottom:`32px`,width:`96px`,height:`96px`,background:`#8fd35f`,zIndex:`25`,touchAction:`none`,display:`none`}),r.style.setProperty(`--side`,`#569e36`),e.append(t,r),this.controls={stick:t,knob:n,jumpBtn:r,visible:!1};let i=null,a=(e,t)=>{n.style.transform=`translate(${e}px, ${t}px)`},o=e=>{let n=t.getBoundingClientRect(),r=e.clientX-(n.left+n.width/2),i=e.clientY-(n.top+n.height/2),o=Math.hypot(r,i);o>48&&(r=r/o*48,i=i/o*48),a(r,i),this.stickMove.r=r/48,this.stickMove.f=-i/48},s=e=>{e.pointerId===i&&(i=null,this.stickMove.f=0,this.stickMove.r=0,a(0,0))};t.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),i=e.pointerId;try{t.setPointerCapture(i)}catch{}o(e)}),t.addEventListener(`pointermove`,e=>{e.pointerId===i&&o(e)}),t.addEventListener(`pointerup`,s),t.addEventListener(`pointercancel`,s),r.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),this.jump()});let c={ArrowUp:1,KeyW:1,ArrowDown:-1,KeyS:-1},l={ArrowRight:1,KeyD:1,ArrowLeft:-1,KeyA:-1},u=new Set,d=()=>{this.keyMove.f=(u.has(`KeyW`)||u.has(`ArrowUp`)?1:0)+(u.has(`KeyS`)||u.has(`ArrowDown`)?-1:0),this.keyMove.r=(u.has(`KeyD`)||u.has(`ArrowRight`)?1:0)+(u.has(`KeyA`)||u.has(`ArrowLeft`)?-1:0)};window.addEventListener(`keydown`,e=>{if(!(!this.active||this.ceremony)){if(e.code in c||e.code in l){e.preventDefault(),u.add(e.code),d();return}e.code===`Space`&&(e.preventDefault(),e.repeat||this.jump())}}),window.addEventListener(`keyup`,e=>{(e.code in c||e.code in l)&&(u.delete(e.code),d())})}setControls(e){let t=this.controls;!t||t.visible===e||(t.visible=e,t.stick.style.display=e?`block`:`none`,t.jumpBtn.style.display=e?`flex`:`none`,e||(this.stickMove.f=0,this.stickMove.r=0,t.knob.style.transform=`translate(0px, 0px)`))}jump(){!this.active||this.ceremony||(this.jumpH<=.001&&this.jumpVel<=0?(this.jumpVel=Ph,this.jumpsLeft=Lh):this.jumpsLeft>0&&(this.jumpVel=Fh,this.jumpsLeft--))}blocked(e,t){return Rh(Ah,e,t)?Rh(kh,e,t)?!1:Rh(Oh,e,t)?!(t>kh.maxZ&&t<Oh.maxZ&&Math.abs(e)<=jh):!1:!0}updateFreeWalk(e){let t=this.stickMove.f+this.keyMove.f,n=this.stickMove.r+this.keyMove.r,r=Math.hypot(t,n);r>1&&(t/=r,n/=r);let i=Math.sin(this.camYaw),a=Math.cos(this.camYaw),o=-i*t+a*n,s=-a*t-i*n,c=Nh*e,l=this.kid.position.x,u=this.kid.position.z;this.blocked(l+o*c,u)||(l+=o*c),this.blocked(l,u+s*c)||(u+=s*c),this.kidY+=(this.groundY({x:l,z:u})-this.kidY)*(1-Math.exp(-e*10)),this.freeWalkPhase+=c*6,this.kid.position.set(l,this.kidY,u);let d=Math.atan2(-s,o)-this.kid.rotation.y;d=Math.atan2(Math.sin(d),Math.cos(d)),this.kid.rotation.y+=d*(1-Math.exp(-e*12));let f=Math.sin(this.freeWalkPhase),p=this.kid.userData.parts;p.legL.rotation.z=-f*.7,p.legR.rotation.z=f*.7,p.armL.rotation.z=f*.7,p.armR.rotation.z=-f*.7}updateJump(e){if(this.jumpH<=0&&this.jumpVel<=0)return;this.jumpVel-=Ih*e,this.jumpH+=this.jumpVel*e,this.jumpH<=0&&(this.jumpH=0,this.jumpVel=0,this.jumpsLeft=0),this.kid.position.y=this.kidY+this.jumpH;let t=this.kid.userData.parts;t.legL.rotation.z=.5,t.legR.rotation.z=-.5,t.armL.rotation.z=-.4,t.armR.rotation.z=.4}tap(e,t){let n=new I(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);this.raycaster.setFromCamera(n,this.camera);let r=this.raycaster.intersectObjects([this.floorMesh,this.grassMesh],!1);if(!r.length)return;let i=r[0].point,a=this.clampTarget({x:i.x,z:i.z}),o=this.routeTo(a);if(!o)return;let s=[0];for(let e=1;e<o.length;e++)s.push(s[e-1]+Math.hypot(o[e].x-o[e-1].x,o[e].z-o[e-1].z));let c=s[s.length-1];c<.15||(this.walkPath={pts:o,cum:s,dist:c,s:0,seg:0},this.effects.sparkle(new L(a.x,this.groundY(a)+.3,a.z)))}clampTarget(e){let t=Rh(Oh,e.x,e.z)?kh:Ah;return{x:Math.max(t.minX,Math.min(t.maxX,e.x)),z:Math.max(t.minZ,Math.min(t.maxZ,e.z))}}groundY(e){return Rh(Oh,e.x,e.z)?Eh:Dh}crossesHouse(e,t){let n=Math.ceil(Math.hypot(t.x-e.x,t.z-e.z)/.4);for(let r=1;r<n;r++){let i=r/n;if(Rh(Oh,e.x+(t.x-e.x)*i,e.z+(t.z-e.z)*i))return!0}return!1}outdoorLeg(e,t){if(!this.crossesHouse(e,t))return[t];let n=[e,{x:Oh.minX-1.1,z:Oh.maxZ+1},{x:Oh.maxX+1.1,z:Oh.maxZ+1},{x:Oh.minX-1.1,z:Oh.minZ-1},{x:Oh.maxX+1.1,z:Oh.minZ-1},t],r=n.length,i=Array(r).fill(1/0),a=Array(r).fill(-1),o=Array(r).fill(!1);for(i[0]=0;;){let e=-1;for(let t=0;t<r;t++)!o[t]&&(e<0||i[t]<i[e])&&(e=t);if(e<0||i[e]===1/0||e===r-1)break;o[e]=!0;for(let t=1;t<r;t++){if(o[t]||this.crossesHouse(n[e],n[t]))continue;let r=i[e]+Math.hypot(n[t].x-n[e].x,n[t].z-n[e].z);r<i[t]&&(i[t]=r,a[t]=e)}}if(a[r-1]<0)return[t];let s=[];for(let e=r-1;e>0;e=a[e])s.unshift(n[e]);return s}routeTo(e){let t={x:this.kid.position.x,z:this.kid.position.z},n=Rh(Oh,t.x,t.z),r=Rh(Oh,e.x,e.z),i=[t];if(n!==r){let r=Math.max(-2.6,Math.min(jh,(n?t:e).x)),a={x:r,z:.4},o={x:r,z:2};n?i.push(a,o,...this.outdoorLeg(o,e)):i.push(...this.outdoorLeg(t,o),a,e)}else if(!n)i.push(...this.outdoorLeg(t,e));else{if((t.x+.6)*(e.x+.6)<0){let n=(-.6-t.x)/(e.x-t.x);t.z+(e.z-t.z)*n<-3.2&&i.push({x:-.6,z:-2.7})}i.push(e)}return i[i.length-1]!==e&&i.push(e),i}updateWalk(e){let t=this.walkPath,n=this.kid.userData.parts;for(t.s=Math.min(t.dist,t.s+e*Mh);t.seg<t.pts.length-2&&t.cum[t.seg+1]<t.s;)t.seg++;let r=t.pts[t.seg],i=t.pts[t.seg+1],a=t.cum[t.seg+1]-t.cum[t.seg],o=a>0?(t.s-t.cum[t.seg])/a:1,s=r.x+(i.x-r.x)*o,c=r.z+(i.z-r.z)*o,l=Math.atan2(r.z-i.z,i.x-r.x)-this.kid.rotation.y;l=Math.atan2(Math.sin(l),Math.cos(l)),this.kid.rotation.y+=l*(1-Math.exp(-e*12)),this.kidY+=(this.groundY({x:s,z:c})-this.kidY)*(1-Math.exp(-e*10));let u=t.s*6;this.kid.position.set(s,this.kidY+Math.abs(Math.sin(u))*.06,c);let d=Math.sin(u);if(n.legL.rotation.z=-d*.7,n.legR.rotation.z=d*.7,n.armL.rotation.z=d*.7,n.armR.rotation.z=-d*.7,t.s>=t.dist){let e=t.pts[t.pts.length-1];this.kidY=this.groundY(e),this.kid.position.set(e.x,this.kidY,e.z),n.legL.rotation.z=n.legR.rotation.z=0,n.armL.rotation.z=n.armR.rotation.z=0,this.walkPath=null}}enter(){this.active=!0,this.refresh(),Ip(this.kid,Fp()),this.walkPath=null,this.kidY=Dh,this.stickMove.f=this.stickMove.r=0,this.keyMove.f=this.keyMove.r=0,this.jumpH=this.jumpVel=0,this.jumpsLeft=0,this.kid.position.copy(this.kidHome),this.kid.rotation.y=-Math.PI/4,this.resetCam(),this.camera.position.copy(this.camBase),this.camera.lookAt(this.camLook)}exit(){this.endCeremony(),this.active=!1,this.setControls(!1)}tick(e){if(!this.active)return;let t=performance.now()/1e3;for(let t of this.clouds)t.position.x+=t.userData.drift*e,t.position.x>26&&(t.position.x=-26);for(let n of this.anims)n(t,e);this.setControls(!this.ceremony);let n=!this.ceremony&&(Math.abs(this.stickMove.f+this.keyMove.f)>.01||Math.abs(this.stickMove.r+this.keyMove.r)>.01);if(n&&(this.walkPath=null),this.walkPath)this.updateWalk(e);else if(n)this.updateFreeWalk(e);else{this.kid.position.y=this.kidY+Math.abs(Math.sin(t*2))*.04;let n=-Math.PI/4-this.kid.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.kid.rotation.y+=n*(1-Math.exp(-e*8))}if(this.updateJump(e),this.ceremony&&this.updateCeremony(e),this.ceremonyCam){let t=1-Math.exp(-e*3);this.camera.position.lerp(this.ceremonyCam.pos,t),this.camLerpLook=(this.camLerpLook||this.camLook.clone()).lerp(this.ceremonyCam.look,t),this.camera.lookAt(this.camLerpLook)}else{let n=Rh(kh,this.kid.position.x,this.kid.position.z);if(n!==this.indoor&&(this.indoor=n,n?(this.savedView={yaw:this.camYaw,pitch:this.camPitch,dist:this.camDist,focus:this.camFocus.clone()},this.camTarget={yaw:0,pitch:.28,dist:12.5,focus:new L(0,1.3,-2.8)}):(this.camTarget=this.savedView||{yaw:this.camYaw0,pitch:this.camPitch0,dist:this.camDist0,focus:this.camLook.clone()},this.savedView=null)),this.camTarget){let t=1-Math.exp(-e*3);this.camYaw+=(this.camTarget.yaw-this.camYaw)*t,this.camPitch+=(this.camTarget.pitch-this.camPitch)*t,this.camDist+=(this.camTarget.dist-this.camDist)*t,this.camFocus.lerp(this.camTarget.focus,t),Math.abs(this.camTarget.yaw-this.camYaw)<.004&&Math.abs(this.camTarget.pitch-this.camPitch)<.004&&Math.abs(this.camTarget.dist-this.camDist)<.05&&this.camFocus.distanceTo(this.camTarget.focus)<.05&&(this.camTarget=null)}this.camLerpLook=null;let r=Math.cos(this.camPitch),i=this.camDist*r;this.camera.position.set(this.camFocus.x+i*Math.sin(this.camYaw)+Math.sin(t*.12)*.5,this.camFocus.y+this.camDist*Math.sin(this.camPitch)+Math.sin(t*.09)*.25,this.camFocus.z+i*Math.cos(this.camYaw)+Math.cos(t*.12)*.5),this.camera.lookAt(this.camFocus)}this.effects.update(e)}},Xh=e=>document.getElementById(e),Zh=.28,Qh=1.6,$h=1.2,eg=class{constructor(){this.scene=new Hn,this.scene.background=new B(ru(8900331)),this.scene.fog=new Vn(ru(8900331),30,80),this.camera=new Ua(50,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,4,12),this.camera.lookAt(0,1.5,0),this.scene.add(new Ya(14674421,.8));let e=new Ja(16771524,1.7);e.position.set(6,12,8),this.scene.add(e),this.ground=new V(new Xi(50,40),new H({color:nu(8308816)})),this.ground.rotation.x=-Math.PI/2,this.scene.add(this.ground),this.effects=new ym(this.scene),this.stage=new z,this.scene.add(this.stage),this.actors=new Map,this.playing=!1,this.script=[],this.idx=-1,this.blocking=null,this.background=[],this.onDone=null,this.t=0,Xh(`screen-cutscene`).addEventListener(`pointerdown`,()=>this.tapAdvance());let t=Xh(`btn-cutscene-skip`);t.addEventListener(`pointerdown`,e=>e.stopPropagation()),t.addEventListener(`click`,e=>{e.stopPropagation(),Yd(`Skip`,{rate:1}),this.finish()})}play(e,t){this.stopAll(),this.script=e,this.onDone=t,this.idx=-1,this.playing=!0,this.t=0,ag(null),og(null),this.advance()}finish(){if(!this.playing)return;this.playing=!1,this.stopAll();let e=this.onDone;this.onDone=null,e&&e()}stopAll(){`speechSynthesis`in window&&speechSynthesis.cancel(),this.blocking=null,this.background=[],ag(null),og(null);for(let e of this.actors.values())this.stage.remove(e.group);this.actors.clear()}advance(){for(;this.playing;){if(this.idx++,this.idx>=this.script.length){this.finish();return}let e=this.startStep(this.script[this.idx]);if(e){if(this.script[this.idx].async){this.background.push(e);continue}this.blocking=e;return}}}tapAdvance(){if(!this.playing||!this.blocking)return;let e=this.blocking;this.blocking=null,e.fastForward&&e.fastForward(),this.advance()}tick(e){if(this.playing){this.t+=e,this.effects.update(e);for(let t of this.actors.values())!t.walking&&!t.static&&(t.group.position.y=t.baseY+Math.sin(this.t*2.2+t.bobSeed)*.04),this.updateWalk(t,e);this.background=this.background.filter(t=>!t.update(e)),this.blocking&&this.blocking.update(e)&&(this.blocking=null,this.advance())}}startStep(e){return e.setting?this.doSetting(e.setting):e.spawn?this.doSpawn(e.spawn):e.walk?this.doWalk(e.walk):e.cam?this.doCam(e.cam):e.say?this.doSay(e.say):e.showWord?this.doShowWord(e.showWord):e.emote?this.doEmote(e.emote):e.sfx?this.doSfx(e.sfx):e.fx?this.doFx(e.fx):e.wait==null?(console.warn(`cutscene: unknown step`,e),null):this.doWait(e.wait)}doSetting({sky:e=8900331,ground:t=8308816}){return this.scene.background.setHex(ru(e)),this.scene.fog.color.setHex(ru(e)),this.ground.material.color.setHex(nu(t)),null}doSpawn({id:e,kind:t=`kid`,at:n=[0,0],face:r=0,scale:i=1,world:a=0}){let o;if(t===`kid`)o=Lp(i,Fp());else if(t===`boss`)o=im(a).group,o.scale.setScalar(i);else if(t===`house`)o=ng(),o.scale.setScalar(i);else if(t===`trophy`)o=ig(a),o.scale.setScalar(i);else return console.warn(`cutscene: unknown actor kind`,t),null;return o.position.set(n[0],0,n[1]),o.rotation.y=r,this.stage.add(o),this.actors.set(e,{group:o,kind:t,static:t===`house`,baseY:0,bobSeed:Math.random()*6,walking:null,walkPhase:0}),null}doWalk({id:e,to:t,speed:n=2.2}){let r=this.actors.get(e);if(!r)return null;let i=new L(t[0],0,t[1]),a=i.clone().sub(r.group.position).setY(0);if(a.lengthSq()>.001){let e=r.kind===`kid`?Math.atan2(-a.z,a.x):Math.atan2(a.x,a.z);r.group.rotation.y=e}return r.walking={target:i,speed:n},{update:()=>!r.walking,fastForward:()=>{r.group.position.copy(i),r.group.position.y=r.baseY,this.settleLimbs(r),r.walking=null}}}updateWalk(e,t){if(!e.walking)return;let{target:n,speed:r}=e.walking,i=e.group.position,a=n.clone().sub(i).setY(0),o=a.length(),s=r*t;if(o<=s){i.set(n.x,e.baseY,n.z),this.settleLimbs(e),e.walking=null;return}if(a.normalize().multiplyScalar(s),i.add(a),e.walkPhase+=t*r*3.4,i.y=e.baseY+Math.abs(Math.sin(e.walkPhase))*.06,e.kind===`kid`){let t=e.group.userData.parts,n=Math.sin(e.walkPhase);t.legL.rotation.z=n*.55,t.legR.rotation.z=-n*.55,t.armL.rotation.z=-n*.4,t.armR.rotation.z=n*.4}}settleLimbs(e){if(e.kind!==`kid`)return;let t=e.group.userData.parts;for(let e of[t.legL,t.legR,t.armL,t.armR])e.rotation.z=0}doCam({to:e,lookAt:t=[0,1.5,0],dur:n=1.5}){let r=this.camera.position.clone(),i=new L(...e),a=new L(...t),o=this.camLook?this.camLook.clone():a.clone(),s=0,c=e=>{let t=e*e*(3-2*e);this.camera.position.lerpVectors(r,i,t),this.camLook=o.clone().lerp(a,t),this.camera.lookAt(this.camLook)};return{update:e=>{s+=e;let t=Math.min(s/n,1);return c(t),t>=1},fastForward:()=>c(1)}}doSay({who:e=null,text:t,highlight:n=[]}){ag(t,n);let r=e?this.actors.get(e):null,i=!1,a=0;return Yd(t,{rate:.95,onend:()=>{i=!0}}),{update:e=>{a+=e,r&&!r.walking&&(r.group.position.y=r.baseY+Math.abs(Math.sin(a*9))*(i?0:.05));let t=i&&a>=$h;return t&&ag(null),t},fastForward:()=>{`speechSynthesis`in window&&speechSynthesis.cancel(),ag(null)}}}doShowWord({word:e,say:t=null}){let n=og(e),r=0,i=0,a=null,o=e.length*Zh;return{update:s=>{for(r+=s;i<n.length&&r>=(i+1)*Zh;)n[i].classList.add(`cs-in`),sd(i),i++;i===n.length&&a===null&&(a=r,Yd(t||e,{rate:.9}));let c=r>=o+Qh;return c&&og(null),c},fastForward:()=>{for(let e of n)e.classList.add(`cs-in`);Yd(t||e,{rate:.9}),setTimeout(()=>og(null),900)}}}doEmote({id:e,kind:t=`jump`}){let n=this.actors.get(e);if(!n)return null;let r=0,i=t===`shake`?.6:.7;return t===`jump`&&id(),{update:e=>{r+=e;let a=Math.min(r/i,1);if(t===`jump`){if(n.group.position.y=n.baseY+Math.sin(a*Math.PI)*1.1,n.kind===`kid`){let e=n.group.userData.parts;e.armL.rotation.z=e.armR.rotation.z=Math.sin(a*Math.PI)*2.6}}else t===`shake`?n.group.rotation.z=Math.sin(a*Math.PI*6)*.09*(1-a):t===`wave`&&n.kind===`kid`&&(n.group.userData.parts.armR.rotation.z=Math.PI*.9+Math.sin(r*10)*.35*(1-a));return a>=1?(n.group.position.y=n.baseY,n.group.rotation.z=0,this.settleLimbs(n),!0):!1},fastForward:()=>{n.group.position.y=n.baseY,n.group.rotation.z=0,this.settleLimbs(n)}}}doSfx(e){let t=Ru[e];return typeof t==`function`?t():console.warn(`cutscene: unknown sfx`,e),null}doFx({kind:e=`confetti`,at:t=[0,2,0]}){let n=new L(...t);return e===`confetti`?this.effects.confetti(n):e===`sparkle`?this.effects.sparkle(n):e===`fireworks`&&this.effects.fireworks(n),null}doWait(e){let t=0;return{update:n=>(t+=n)>=e,fastForward:()=>{}}}},tg=(e,t,n,r,i,a,o)=>{let s=new V(Ul,new H({color:e}));return s.position.set(t,n,r),s.scale.set(i,a,o),s};function ng(){let e=new z;e.add(tg(16246468,0,1.6,0,5.4,3.2,4.6)),e.add(tg(10119999,0,1,2.32,1.3,2,.12)),e.add(tg(16769154,.45,1.15,2.4,.16,.16,.08));for(let t of[-1.7,1.7])e.add(tg(11066613,t,2,2.32,1,.9,.1)),e.add(tg(16777215,t,1.5,2.36,1.2,.14,.08));let t=tg(14834506,-1.5,3.85,0,3.6,.3,5.2);t.rotation.z=.45;let n=tg(14834506,1.5,3.85,0,3.6,.3,5.2);return n.rotation.z=-.45,e.add(t,n),e.add(tg(13191739,0,4.55,0,.7,.35,5.3)),e.add(tg(11559242,1.7,4.4,-1.2,.7,1.4,.7)),e.add(tg(15261906,1.7,5.15,-1.2,.9,.2,.9)),e}var rg=[16766282,16761395,16769154,14711490,16103746,16747582];function ig(e=0){let t=new z,n=rg[e%rg.length],r=new H({color:n,emissive:4864e3}),i=new Zi(.5,.5,1,10);t.add(tg(10119999,0,.15,0,.7,.3,.7));let a=new V(new Yi(.45,.12,.45),r);a.position.y=.36;let o=new V(i,r);o.scale.set(.12,.24,.12),o.position.y=.53;let s=new V(i,r);s.scale.set(.42,.4,.42),s.position.y=.85,t.add(a,o,s);for(let e of[-.28,.28]){let n=new V(new Yi(.1,.26,.1),r);n.position.set(e,.88,0),t.add(n)}return t}function ag(e,t=[]){let n=Xh(`cs-caption`);if(!e){n.classList.add(`hidden`),n.innerHTML=``;return}let r=new Set(t.map(e=>e.toLowerCase()));n.innerHTML=e.split(/(\s+)/).map(e=>{let t=e.toLowerCase().replace(/[^a-z']/g,``);return r.has(t)?`<span class="cs-hl">${e}</span>`:e}).join(``),n.classList.remove(`hidden`)}function og(e){let t=Xh(`cs-word`);if(!e)return t.classList.add(`hidden`),t.innerHTML=``,[];t.innerHTML=``;let n=[];for(let r of e){let e=document.createElement(`span`);e.className=`cs-letter`,e.textContent=r,t.appendChild(e),n.push(e)}return t.classList.remove(`hidden`),n}var sg={demo:[{setting:{sky:16767392,ground:14660702}},{spawn:{id:`kid`,kind:`kid`,at:[-6,0],face:0}},{spawn:{id:`serpent`,kind:`boss`,world:1,at:[5,-1],scale:.9}},{cam:{to:[-6,3,10],lookAt:[-5,1.5,0],dur:.01}},{walk:{id:`kid`,to:[-2,0]},async:!0},{cam:{to:[0,3.5,11],lookAt:[0,1.5,0],dur:2.2}},{sfx:`sfxRoar`},{emote:{id:`serpent`,kind:`shake`}},{say:{who:`serpent`,text:`This word is mine! I will hide it away!`,highlight:[`away`]}},{cam:{to:[2,2.5,7],lookAt:[3,2.5,0],dur:1}},{showWord:{word:`away`}},{sfx:`sfxGiggle`},{walk:{id:`serpent`,to:[14,-1],speed:5},async:!0},{say:{who:`kid`,text:`Hey! Come back! I can read that word!`,highlight:[`come`,`back`]}},{cam:{to:[-1,3,8],lookAt:[-2,1.5,0],dur:1}},{emote:{id:`kid`,kind:`jump`}},{fx:{kind:`sparkle`,at:[-2,2,0]}},{say:{who:`kid`,text:`Let's go get it!`}}],finale:[{setting:{sky:16763274,ground:8308816}},{spawn:{id:`house`,kind:`house`,at:[7,-3]}},...[0,1,2,3,4,5].map(e=>({spawn:{id:`trophy${e}`,kind:`trophy`,world:e,at:[2.9+e*1.4,-.2]}})),{spawn:{id:`kid`,kind:`kid`,at:[-11,1]}},{cam:{to:[-11,3,9],lookAt:[-10,1.5,1],dur:.01}},{say:{who:`kid`,text:`You did it! You beat every single world!`,highlight:[`you`,`did`,`every`]},async:!0},{walk:{id:`kid`,to:[.5,1],speed:2.6},async:!0},{cam:{to:[1,4.5,12],lookAt:[3,2,-1],dur:3.2}},{sfx:`sfxFireworks`},{fx:{kind:`fireworks`,at:[7,6,-3]}},{fx:{kind:`fireworks`,at:[1,7,-2]}},{cam:{to:[6,2.8,6.5],lookAt:[6.5,1,0],dur:1.6},async:!0},{say:{text:`Look! Six shiny trophies for six worlds!`,highlight:[`look`,`six`]}},{sfx:`sfxKeyJingle`},{fx:{kind:`sparkle`,at:[6.5,1.5,0]}},{wait:.5},{cam:{to:[0,3,9],lookAt:[.5,1.8,1],dur:1.2}},{emote:{id:`kid`,kind:`jump`}},{fx:{kind:`confetti`,at:[.5,2.5,1]}},{showWord:{word:`hero`,say:`Hero!`}},{say:{who:`kid`,text:`You're a sight word hero!`,highlight:[`you`]}},{emote:{id:`kid`,kind:`wave`},async:!0},{sfx:`sfxFireworks`},{fx:{kind:`fireworks`,at:[4,7,-2]}},{fx:{kind:`confetti`,at:[7,5,-1]}},{wait:1.6}]},cg={title:{x:82,y:16},map:{x:88,y:18},char:{x:24,y:22},house:{x:14,y:34},pause:{x:66,y:28},complete:{x:69,y:20},bonus:{x:15,y:36},game:{x:90,y:30}},lg=16769213,ug=16767293,dg=16752627,fg=2899573,pg=16767293,mg=15267839,hg=e=>`#${e.toString(16).padStart(6,`0`)}`;function gg(e){let t=document.createElement(`canvas`);t.width=64,t.height=64;let n=t.getContext(`2d`);n.fillStyle=hg(lg),n.fillRect(0,0,64,64),n.fillStyle=hg(ug),n.fillRect(0,0,64,14),n.fillStyle=`#222`,n.fillRect(16,26,8,8),n.fillRect(40,26,8,8),e?(n.fillStyle=`#7a3b3b`,n.beginPath(),n.ellipse(32,45,6,8,0,0,Math.PI*2),n.fill()):(n.strokeStyle=`#a34d2a`,n.lineWidth=4,n.beginPath(),n.arc(32,42,10,.2*Math.PI,.8*Math.PI),n.stroke());let r=new Gi(t);return r.magFilter=a,r.colorSpace=We,r}function _g(){let e=new z,t=Ul,n=new H({color:lg}),r=new H({color:ug}),i=new H({color:dg}),a=new H({color:fg}),o=new H({color:pg,emissive:6705664}),s=new H({color:mg,transparent:!0,opacity:.8,depthWrite:!1,side:2}),c=gg(!1),l=gg(!0),u=new H({map:c}),d=new V(t,[n,n,r,n,u,n]);d.scale.set(.5,.5,.5),d.position.y=1.35;let f=new V(t,r);f.scale.set(.56,.3,.53),f.position.set(0,1.46,-.025);let p=new V(t,r);p.scale.set(.22,.22,.22),p.position.set(0,1.52,-.28);let m=new V(t,i);m.scale.set(.42,.5,.28),m.position.y=.85;let h=new V(t,i);h.scale.set(.58,.3,.4),h.position.y=.52;let g=(e,n,r)=>{let i=new z,a=new V(t,e);return a.scale.set(n,r,n),a.position.y=-r/2,i.add(a),i},_=g(n,.14,.36);_.position.set(-.12,.4,0);let v=g(n,.14,.36);v.position.set(.12,.4,0);for(let e of[_,v]){let n=new V(t,a);n.scale.set(.16,.1,.2),n.position.set(0,-.38,.03),e.add(n)}let y=g(n,.13,.42);y.position.set(-.28,1.05,0),y.rotation.z=-.25;let b=g(n,.13,.42);b.position.set(.28,1.05,0),b.rotation.z=2.4;let x=new z,S=new V(t,a);S.scale.set(.05,.4,.05),S.position.y=.12;let C=new z;for(let e of[0,Math.PI/4]){let n=new V(t,o);n.scale.set(.2,.2,.07),n.rotation.z=e,C.add(n)}C.position.y=.36,x.add(S,C),x.position.y=-.42,x.rotation.z=Math.PI,b.add(x);let w=e=>{let n=new z;n.position.set(e*.06,1.15,-.18);let r=new V(t,s);r.scale.set(.7,.42,.04),r.position.set(e*.48,.26,0),r.rotation.z=e*.5;let i=new V(t,s);return i.scale.set(.46,.26,.04),i.position.set(e*.36,-.12,0),i.rotation.z=e*-.2,n.add(r,i),n},T=w(-1),E=w(1);return e.add(d,f,p,m,h,_,v,y,b,T,E),e.position.y=-.85,e.rotation.y=-.3,{group:e,head:d,wingL:T,wingR:E,star:C,face:u,faceClosed:c,faceOpen:l,legL:_,legR:v}}var vg=null,yg=50,bg=!1,xg=null,Sg=null;function Cg(){if(vg)return;vg=document.createElement(`div`),vg.id=`fairy`,vg.innerHTML=`
    <div class="fairy-bob">
      <span class="fairy-spark s1" style="--dx: -34px; --dy: -30px;" data-icon="sparkle" data-icon-size="16"></span>
      <span class="fairy-spark s2" style="--dx: 30px; --dy: -38px;" data-icon="sparkle" data-icon-size="14"></span>
      <span class="fairy-spark s3" style="--dx: -6px; --dy: 34px;" data-icon="star" data-icon-size="16"></span>
    </div>`,document.body.appendChild(vg),bh(vg);let e=new Il({alpha:!0,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(96,96),Rl(e),vg.querySelector(`.fairy-bob`).prepend(e.domElement);let t=new Hn,n=new Ua(38,1,.1,20);n.position.set(0,.15,3.4),n.lookAt(0,0,0),t.add(new Ya(16777215,.85));let r=new Ja(16777215,1.6);r.position.set(2,4,5),t.add(r);let i=_g();t.add(i.group);let a=0,o=!1,s=0,c=r=>{if(r-s<32.333333333333336)return;let c=s?Math.min((r-s)/1e3,.1):1/30;s=r,a+=c;let l=Math.sin(a*(bg?38:11))*.3+.25;i.wingL.rotation.y=-l,i.wingR.rotation.y=l,i.group.rotation.y=-.3+Math.sin(a*.7)*.18,i.star.rotation.z+=c*(bg?9:1.2);let u=bg&&Math.sin(a*16)>0;u!==o&&(o=u,i.face.map=u?i.faceOpen:i.faceClosed,i.face.needsUpdate=!0),i.legL.rotation.x=Math.sin(a*2.1)*.18,i.legR.rotation.x=Math.sin(a*2.1+1.4)*.18,e.render(t,n)},l=!1;xg=()=>{l||(l=!0,s=0,e.setAnimationLoop(c))},Sg=()=>{l&&(l=!1,e.setAnimationLoop(null))},xg(),window.addEventListener(`wr-speech`,e=>{bg=!!e.detail.speaking,vg.classList.toggle(`speaking`,bg)})}function wg(e){if(!vg)return;let t=cg[e];if(vg.classList.toggle(`hidden`,!t),!t){Sg();return}xg(),t.x!==yg&&vg.classList.toggle(`face-left`,t.x<yg),yg=t.x,vg.style.left=`${t.x}%`,vg.style.top=`${t.y}%`}var Tg=200;function Eg(e){let t=new Il({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setSize(Tg,Tg),Rl(t);let n=new Hn;n.add(new Ya(15003127,.8));let r=new Ja(16772300,1);r.position.set(2,4,3),n.add(r);let i=new Ua(35,1,.1,20);i.position.set(0,1.35,3.4),i.lookAt(0,.8,0);let a=Lp(1);a.rotation.y=-Math.PI/2+.45,n.add(a);let o=e.map(e=>(Ip(a,e),t.render(n,i),t.domElement.toDataURL(`image/png`))),s=a.userData.parts;s.face.map&&s.face.map.dispose();for(let e of[...s.mats,s.face])e.dispose();return a.traverse(e=>e.geometry&&e.geometry!==Ul&&e.geometry.dispose()),t.dispose(),t.forceContextLoss(),o}function Dg(e){return!e||!e.seen?null:e.firstTryCorrect/e.seen}function Og(e){let t=[];if(!e||typeof e!=`object`)return t;for(let[n,r]of Object.entries(e)){if(!r||!r.seen)continue;let e=Dg(r);t.push({word:n,seen:r.seen|0,correct:r.correct|0,firstTryCorrect:r.firstTryCorrect|0,missed:r.missed|0,ratio:e,accuracy:Math.round(e*100),mastered:Tu(r)})}return t}function kg(e,t){return e.ratio-t.ratio||t.missed-e.missed||t.seen-e.seen||e.word.localeCompare(t.word)}function Ag(e,t){return e.word.localeCompare(t.word)}function jg(e,t=Su){return t.map((t,n)=>{let r=wu(n),i=0,a=0;for(let t of r){let n=e&&(e[t.toLowerCase()]||e[t]);n&&n.seen>0&&(i++,Tu(n)&&a++)}return{worldIdx:n,name:t.name,emoji:t.emoji,total:r.length,seen:i,mastered:a}})}function Mg({words:e={},totals:t=null,playerName:n=``,unlocked:r=null,worlds:i=Su,practiceLimit:a=20}={}){let o=Og(e),s=o.filter(e=>e.mastered).sort(Ag),c=o.filter(e=>!e.mastered).sort(kg),l=jg(e,i);return{playerName:n||``,unlocked:r?{...r}:null,totals:t||{levelsCompleted:0,totalStars:0,secretsFound:0,wordsRead:0,accuracy:100,coinsEarned:0,playSeconds:0},seenCount:o.length,masteredCount:s.length,practiceCount:c.length,practice:c.slice(0,a),practiceOverflow:Math.max(0,c.length-a),mastered:s,byWorld:l}}function Ng({playerName:e=``,profileId:t=``,state:n,report:r}={}){return{app:`super-kids-sight-words`,version:1,exportedAt:new Date().toISOString(),playerName:e||``,profileId:t||``,progress:r||null,save:n?{coins:n.coins,gems:n.gems,words:n.words,stars:n.stars,unlocked:n.unlocked,keys:n.keys,secretUnlocked:n.secretUnlocked,secretStars:n.secretStars,bossBeaten:n.bossBeaten,stats:n.stats,gameCompleted:n.gameCompleted,character:n.character,house:n.house}:null}}function Pg(e){let t=Math.max(0,Math.round(Number(e)||0));if(t<30)return`Just started`;let n=Math.round(t/60);if(n<60)return`${n} min`;let r=Math.floor(n/60),i=n%60;return i?`${r}h ${i}m`:`${r}h`}var $=e=>document.getElementById(e),Fg=[`title`,`players`,`progress`,`map`,`pause`,`complete`,`gamecomplete`,`bonus`,`char`,`house`,`cutscene`];function Ig(e){bh(),Cg(),Lg($(`btn-play`),`Play!`,()=>e.onPlay()),Lg($(`btn-char-back`),`Back`,()=>e.onCharacterDone()),Lg($(`btn-char-done`),`Looking good!`,()=>e.onCharacterDone()),Lg($(`btn-settings`),`Settings`,()=>$(`settings-panel`).classList.toggle(`hidden`)),Lg($(`btn-settings-close`),`Close`,()=>$(`settings-panel`).classList.add(`hidden`)),Lg($(`btn-toggle-sound`),`Sound`,()=>e.onToggleSound()),Lg($(`btn-toggle-music`),`Music`,()=>e.onToggleMusic()),Lg($(`btn-toggle-mic`),`Mic round`,()=>e.onToggleMic()),Lg($(`btn-toggle-unlock`),`All levels`,()=>e.onToggleUnlock()),Lg($(`btn-switch-player`),`Switch player!`,()=>{$(`settings-panel`).classList.add(`hidden`),e.onSwitchPlayer()}),Lg($(`btn-progress`),null,()=>{$(`settings-panel`).classList.add(`hidden`),e.onProgress()}),Lg($(`btn-progress-close`),`Close`,()=>e.onProgressClose()),$(`btn-progress-export`).addEventListener(`click`,()=>{_d(),h_()}),Lg($(`btn-players-back`),`Back`,()=>e.onPlayersBack()),Lg($(`btn-new-player-ok`),`Let's go!`,()=>Zg(!0)),Lg($(`btn-new-player-skip`),`Let's go!`,()=>Zg(!1)),Lg($(`btn-delete-no`),`No`,()=>Qg()),Lg($(`btn-delete-yes`),`Goodbye!`,()=>$g()),Lg($(`btn-map-back`),`Back`,()=>e.onMapBack()),Lg($(`btn-banner-play`),`Here we go!`,()=>e.onBannerPlay()),Lg($(`btn-pause`),`Pause`,()=>e.onPause()),Lg($(`btn-resume`),`Resume`,()=>e.onResume()),Lg($(`btn-pause-map`),`Map`,()=>e.onPauseMap()),$(`btn-repeat-word`).addEventListener(`click`,()=>{c_(!1),e.onRepeatWord()}),Lg($(`btn-next-level`),`Next level!`,()=>e.onNextLevel()),Lg($(`btn-complete-map`),`Map`,()=>e.onCompleteMap()),Lg($(`btn-final-map`),`Map`,()=>e.onCompleteMap()),Lg($(`btn-final-house`),null,()=>e.onHouse(`complete`)),Lg($(`btn-bonus-skip`),`Skip`,()=>e.onBonusSkip()),Lg($(`btn-complete-house`),null,()=>e.onHouse(`complete`)),Lg($(`btn-house-back`),`Back`,()=>e.onHouseBack()),Lg($(`btn-house-shop`),`Shop!`,()=>E_(!0)),Lg($(`btn-shop-close`),`Close`,()=>E_(!1)),Lg($(`btn-house-music`),`Music!`,()=>D_(!0)),Lg($(`btn-music-close`),`Close`,()=>D_(!1)),Lg($(`btn-ceremony-map`),`Map`,()=>e.onCeremonyDone()),x_=e.onBuyItem,S_=e.onPickMusic,Rg($(`btn-mic`),e.onMicDown,e.onMicUp),Rg($(`btn-move-left`),()=>e.onMoveDown(-1),()=>e.onMoveUp(-1)),Rg($(`btn-move-right`),()=>e.onMoveDown(1),()=>e.onMoveUp(1)),Rg($(`btn-move-jump`),e.onJumpDown,e.onJumpUp);let t=0;$(`version-tag`).addEventListener(`click`,()=>{t++,t>=5&&(t=0,e.onDevUnlock())})}function Lg(e,t,n){e.addEventListener(`click`,()=>{_d(),t&&Yd(t,{rate:1}),n()})}function Rg(e,t,n){let r=e=>{e.preventDefault(),t()},i=e=>{e.preventDefault(),n()};e.addEventListener(`touchstart`,r,{passive:!1}),e.addEventListener(`touchend`,i,{passive:!1}),e.addEventListener(`touchcancel`,i,{passive:!1}),e.addEventListener(`mousedown`,r),e.addEventListener(`mouseup`,i),e.addEventListener(`mouseleave`,i)}function zg(e){for(let t of Fg)$(`screen-${t}`).classList.toggle(`hidden`,t!==e);e!==`map`&&Wg(),wg(e||`game`)}function Bg(e){$(`hud`).classList.toggle(`hidden`,!e)}function Vg(e,t){let n=$(e).querySelector(`.btn-label`);n?n.textContent=t:$(e).textContent=t}function Hg(){let e=Of();xh($(`btn-toggle-sound`),e.sound?`sound`:`soundOff`,38),Vg(`btn-toggle-sound`,e.sound?`Sound: ON`:`Sound: OFF`),xh($(`btn-toggle-music`),`music`,38),Vg(`btn-toggle-music`,e.music?`Music: ON`:`Music: OFF`),xh($(`btn-toggle-mic`),`mic`,38),Vg(`btn-toggle-mic`,e.mic?`Mic Round: ON`:`Mic Round: OFF`),xh($(`btn-toggle-unlock`),e.devUnlocked?`unlock`:`lock`,38),Vg(`btn-toggle-unlock`,e.devUnlocked?`All Levels: ON`:`All Levels: OFF`)}function Ug({name:e,stars:t,completed:n,secret:r,boss:i}){let a=$(`banner-name`);if(a.textContent=``,r||i){a.appendChild(_h(r?`sparkle`:`crown`,26));let t=document.createElement(`span`);t.textContent=e,a.appendChild(t),a.appendChild(_h(r?`sparkle`:`crown`,26))}else a.textContent=e;let o=$(`banner-stars`);o.replaceChildren();for(let e=0;e<3;e++)o.appendChild(_h(e<t?`star`:`starEmpty`,26));xh($(`btn-banner-play`),n?`replay`:`play`,44),Vg(`btn-banner-play`,`PLAY`),$(`level-banner`).classList.remove(`hidden`)}function Wg(){$(`level-banner`).classList.add(`hidden`)}function Gg(){return!$(`level-banner`).classList.contains(`hidden`)}function Kg(e){let t=$(`player-nameplate`);t.textContent=e,t.classList.toggle(`hidden`,!e)}var qg=null,Jg=null;function Yg(e){qg=e,Xg(),zg(`players`)}function Xg(){$(`new-player-panel`).classList.add(`hidden`),Qg();let e=$(`players-list`);e.innerHTML=``;let t=vf(),n=t.map(e=>xf(e.id)),r=Eg(n.map(e=>bp(e.character)));if(t.forEach((i,a)=>{let o=i.name||`Player ${a+1}`,s=document.createElement(`div`);s.className=`player-card`+(i.id===yf()?` active`:``);let c=document.createElement(`img`);c.className=`player-thumb`,c.src=r[a],c.alt=``;let l=document.createElement(`span`);l.className=`player-name`,l.textContent=o;let u=document.createElement(`span`);u.className=`player-progress`,u.appendChild(_h(`map`,18));let d=document.createElement(`span`);if(d.textContent=`World ${n[a].unlocked.world+1}`,u.appendChild(d),s.append(c,l,u),s.addEventListener(`click`,()=>{Yd(o,{rate:1}),qg.onSelect(i.id)}),t.length>1){let e=document.createElement(`button`);e.className=`player-delete`,e.setAttribute(`aria-label`,`Delete player`),e.innerHTML=gh(`close`,26),e.addEventListener(`click`,e=>{e.stopPropagation(),Yd(`Delete this player? All their progress will be lost.`,{rate:1}),Jg=i.id,$(`confirm-delete-panel`).classList.remove(`hidden`)}),s.appendChild(e)}e.appendChild(s)}),t.length<6){let t=document.createElement(`div`);t.className=`player-card new-player`;let n=document.createElement(`span`);n.className=`player-plus`,n.appendChild(_h(`plus`,64));let r=document.createElement(`span`);r.className=`player-name`,r.textContent=`New Player`;let i=document.createElement(`span`);i.className=`player-progress`,i.innerHTML=`&nbsp;`,t.append(n,r,i),t.addEventListener(`click`,()=>{Yd(`New player! What is your name?`,{rate:1}),$(`new-player-name`).value=``,$(`new-player-panel`).classList.remove(`hidden`),$(`new-player-name`).focus()}),e.appendChild(t)}}function Zg(e){if($(`new-player-panel`).classList.contains(`hidden`))return;$(`new-player-panel`).classList.add(`hidden`);let t=e?$(`new-player-name`).value.trim():``;qg.onCreate(t)}function Qg(){Jg=null,$(`confirm-delete-panel`).classList.add(`hidden`)}function $g(){if(!Jg)return;let e=Jg;Qg(),qg.onDelete(e),Xg()}function e_(e){let t=$(`char-rows`);t.innerHTML=``;let n=Of().character,r=(e,n)=>{let r=document.createElement(`div`);r.className=`char-row`;let i=document.createElement(`div`);i.className=`char-label`,i.textContent=e,r.appendChild(i);let a=document.createElement(`div`);a.className=`char-options`;for(let e of n)a.appendChild(e);r.appendChild(a),t.appendChild(r)},i=(t,n,r)=>{Yd(r,{rate:1}),e(t,n),e_(e)};for(let[e,t]of Object.entries(_p))r(t.label,t.colors.map((r,a)=>{let o=document.createElement(`button`);return o.className=`swatch`+(a===n[e]?` selected`:``),o.style.background=`#${r.toString(16).padStart(6,`0`)}`,o.addEventListener(`click`,()=>i(e,a,t.names[a])),o}));let a=(e,t,n,a)=>r(t.label,t.names.map((t,r)=>{let o=document.createElement(`button`);return o.className=`swatch style-swatch`+(r===n?` selected`:``),o.title=t,o.setAttribute(`aria-label`,t),o.appendChild(_h(a[r]||`sparkle`,36)),o.addEventListener(`click`,()=>i(e,r,t)),o}));a(`style`,vp,n.style,mh),a(`outfit`,yp,n.outfit,hh)}function t_(e){$(`coin-count`).textContent=e}function n_(e){$(`hud-key`).classList.toggle(`hidden`,!e)}function r_(e){let t=$(`move-controls`);t.classList.toggle(`hidden`,!e),t.classList.toggle(`boost-only`,e===`boost`)}function i_(e){$(`btn-repeat-word`).classList.toggle(`hidden`,!e),e||c_(!1)}var a_=null;function o_(){let e=$(`btn-repeat-word`);e.classList.remove(`flash`),e.offsetWidth,e.classList.add(`flash`),clearTimeout(a_),a_=setTimeout(()=>e.classList.remove(`flash`),1700)}var s_=null;function c_(e){$(`repeat-tip`).classList.toggle(`hidden`,!e),clearTimeout(s_),e&&(s_=setTimeout(()=>c_(!1),8e3))}function l_(e){let t=$(`progress-dots`);t.innerHTML=``;for(let n=0;n<e;n++){let e=document.createElement(`div`);e.className=`dot`,t.appendChild(e)}}function u_(e,t){let n=$(`progress-dots`).children[e];n&&(n.className=`dot ${t}`)}function d_({stars:e,coins:t,gems:n,hasNext:r}){zg(`complete`),$(`complete-coins`).textContent=t,$(`complete-gems`).textContent=n,$(`btn-next-level`).classList.toggle(`hidden`,!r);let i=$(`star-row`).querySelectorAll(`.star`);i.forEach(e=>e.classList.remove(`earned`));for(let t=0;t<e;t++)setTimeout(()=>{i[t].classList.add(`earned`),Cd(t)},500+t*450)}function f_(){let e=Of();p_(Mg({words:e.words,totals:Rf(),playerName:bf(),unlocked:e.unlocked})),zg(`progress`),$(`progress-export-toast`).classList.add(`hidden`)}function p_(e){let t=e.playerName||`Player`,n=e.unlocked?e.unlocked.world+1:1;$(`progress-player`).textContent=`${t} · World ${n}`;let r=e.totals,i=[[`clock`,`Time`,Pg(r.playSeconds)],[`map`,`Levels`,String(r.levelsCompleted)],[`star`,`Stars`,String(r.totalStars)],[`target`,`First-try`,`${r.accuracy}%`],[`book`,`Words read`,String(r.wordsRead)],[`star`,`Mastered`,`${e.masteredCount} / ${e.seenCount||0}`]],a=$(`progress-summary`);a.innerHTML=``;for(let[e,t,n]of i){let r=document.createElement(`div`);r.className=`progress-stat`;let i=document.createElement(`span`);i.className=`ps-label`,i.appendChild(_h(e,16));let o=document.createElement(`span`);o.textContent=t,i.appendChild(o);let s=document.createElement(`span`);s.className=`ps-value`,s.textContent=n,r.append(i,s),a.appendChild(r)}let o=$(`progress-worlds`);o.innerHTML=``;for(let t of e.byWorld){let e=document.createElement(`span`);e.className=`progress-world-chip`+(t.seen===0?` empty`:``),e.appendChild(_h(yh(t.worldIdx),18));let n=document.createElement(`span`);n.textContent=`${t.mastered}/${t.total}`,e.appendChild(n),e.title=`${t.name}: ${t.mastered} mastered, ${t.seen} practiced of ${t.total}`,o.appendChild(e)}m_($(`progress-practice`),e.practice,{empty:`No hard words yet — play a few levels!`,overflow:e.practiceOverflow,showMisses:!0}),m_($(`progress-mastered`),e.mastered,{empty:`Mastered words show up here after 3 first-try wins.`,showMisses:!1})}function m_(e,t,{empty:n,overflow:r=0,showMisses:i}){if(e.innerHTML=``,!t.length){let t=document.createElement(`div`);t.className=`progress-empty`,t.textContent=n,e.appendChild(t);return}for(let n of t){let t=document.createElement(`div`);t.className=`progress-word-row ${n.accuracy>=80?`good`:n.accuracy>=50?`ok`:`hard`}`;let r=document.createElement(`span`);r.className=`pw-word`,r.textContent=n.word;let a=document.createElement(`span`);a.className=`pw-meta`,a.textContent=i?`${n.firstTryCorrect}/${n.seen} first-try · ${n.missed} miss`:`${n.firstTryCorrect} first-try`;let o=document.createElement(`span`);o.className=`pw-acc`,o.textContent=`${n.accuracy}%`,t.append(r,a,o),e.appendChild(t)}if(r>0){let t=document.createElement(`div`);t.className=`progress-empty`,t.textContent=`…and ${r} more. Keep practicing!`,e.appendChild(t)}}function h_(){let e=Of(),t=Mg({words:e.words,totals:Rf(),playerName:bf(),unlocked:e.unlocked}),n=Ng({playerName:bf(),profileId:yf(),state:e,report:t}),r=JSON.stringify(n,null,2),i=new Date().toISOString().slice(0,10),a=`sight-words-progress-${(n.playerName||`player`).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)||`player`}-${i}.json`,o=!1;try{let e=new Blob([r],{type:`application/json`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=a,n.rel=`noopener`,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),2e3),o=!0}catch{}if(!o&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(r).then(()=>g_(`Copied!`)).catch(()=>{g_(`Could not export`)});return}g_(o?`Saved!`:`Could not export`)}function g_(e){let t=$(`progress-export-toast`);t.textContent=e,t.classList.remove(`hidden`),setTimeout(()=>t.classList.add(`hidden`),2200)}function __(e,{firstTime:t=!0}={}){zg(`gamecomplete`),$(`gc-levels`).textContent=e.levelsCompleted,$(`gc-stars`).textContent=e.totalStars,$(`gc-words`).textContent=e.wordsRead,$(`gc-accuracy`).textContent=`${e.accuracy}%`,$(`gc-secrets`).textContent=e.secretsFound,$(`gc-coins`).textContent=e.coinsEarned;let n=Math.round(e.playSeconds/60);$(`gc-time`).textContent=n<1?`Just started!`:n<60?`${n}m`:`${Math.floor(n/60)}h ${n%60}m`,$(`gc-reward`).classList.toggle(`hidden`,!t),$(`gc-stats`).querySelectorAll(`.gc-row`).forEach((e,t)=>{e.classList.remove(`gc-in`),setTimeout(()=>e.classList.add(`gc-in`),400+t*350)})}function v_(e){$(`bonus-word`).textContent=e,$(`bonus-feedback`).textContent=``}function y_(e){$(`bonus-feedback`).textContent=e}function b_(e){$(`btn-mic`).classList.toggle(`listening`,e)}var x_=null,S_=null,C_=null,w_=null,T_={choices:[],current:`house`};function E_(e){$(`shop-panel`).classList.toggle(`hidden`,!e),k_(),e&&($(`music-panel`).classList.add(`hidden`),P_())}function D_(e){$(`music-panel`).classList.toggle(`hidden`,!e),e&&($(`shop-panel`).classList.add(`hidden`),O_())}function O_(){let e=$(`music-list`);e.innerHTML=``;for(let t of T_.choices){let n=t.track===T_.current,r=document.createElement(`button`);r.className=`music-item`+(n?` playing`:``);let i=document.createElement(`span`);i.className=`shop-icon`,i.appendChild(_h(t.icon||`music`,40));let a=document.createElement(`span`);a.className=`music-name`,a.textContent=t.name;let o=document.createElement(`span`);o.className=`music-note`,n&&o.appendChild(_h(`music`,26)),r.append(i,a,o),r.addEventListener(`click`,()=>{_d(),T_.current=t.track,Yd(t.name,{rate:1}),S_&&S_(t.track),O_()}),e.appendChild(r)}}function k_(){w_=null,$(`shop-confirm`).classList.add(`hidden`)}function A_(e){w_=e;let t=$(`shop-confirm-emoji`);t.className=`shop-icon`,t.innerHTML=gh(vh(e.id),44),$(`shop-confirm-name`).textContent=e.name;let n=$(`shop-confirm-words`);n.innerHTML=``;let r=Math.random()<.5?[`yes`,`no`]:[`no`,`yes`];for(let e of r){let t=document.createElement(`button`);t.className=`shop-word-btn`,t.textContent=e,t.addEventListener(`click`,()=>{if(!w_)return;let t=w_;k_(),_d(),e===`yes`?Yd(`yes`,{onend:()=>x_&&x_(t)}):Yd(`no`,{onend:()=>Jd(`shopNo`)})}),n.appendChild(t)}$(`shop-confirm`).classList.remove(`hidden`),Yd(`${e.name}!`,{rate:1,onend:()=>{w_===e&&Jd(`shopConfirm`)}})}function j_(e=null){zg(`house`),E_(!1),D_(!1),e&&(T_=e),N_(),$(`btn-house-back`).classList.remove(`hidden`),$(`btn-house-shop`).classList.remove(`hidden`),$(`btn-house-music`).classList.remove(`hidden`),$(`ceremony-panel`).classList.add(`hidden`)}function M_(){zg(`house`),E_(!1),D_(!1),N_(),$(`btn-house-back`).classList.add(`hidden`),$(`btn-house-shop`).classList.add(`hidden`),$(`btn-house-music`).classList.add(`hidden`),$(`ceremony-panel`).classList.remove(`hidden`)}function N_(){let e=Of();$(`house-coins`).textContent=e.coins,$(`house-gems`).textContent=e.gems}function P_(){N_();let e=Of(),t=$(`shop-list`);t.innerHTML=``;for(let n of Rm){let r=Yf(n.id),i=n.earned!==void 0,a=n.currency===`gems`?e.gems:e.coins,o=document.createElement(`button`);o.className=`shop-item`+(r?` owned`:i||a<n.cost?` cant-afford`:``);let s=document.createElement(`span`);s.className=`shop-icon`,s.innerHTML=gh(vh(n.id),44);let c=document.createElement(`span`);c.className=`shop-info`;let l=document.createElement(`span`);l.textContent=n.name;let u=document.createElement(`span`);if(u.className=`shop-cost`,r){u.appendChild(_h(`check`,18));let e=document.createElement(`span`);e.textContent=`Got it!`,u.appendChild(e)}else if(i){u.appendChild(_h(`castle`,18));let e=document.createElement(`span`);e.textContent=`Castle prize!`,u.appendChild(e)}else{u.appendChild(_h(n.currency===`gems`?`gem`:`coin`,18));let e=document.createElement(`span`);e.textContent=String(n.cost),u.appendChild(e)}c.append(l,u),o.append(s,c),o.addEventListener(`click`,()=>{_d(),r?(k_(),Yd(`You already have the ${n.name}!`,{rate:1})):i?(k_(),x_&&x_(n)):A_(n)}),t.appendChild(o)}}function F_(e){let t=$(`house-toast`);if(t.textContent=``,e&&typeof e==`object`){t.classList.add(`toast-with-icon`),e.icon&&t.appendChild(_h(e.icon,28));let n=document.createElement(`span`);n.textContent=e.text||``,t.appendChild(n)}else t.classList.remove(`toast-with-icon`),t.textContent=e||``;t.classList.remove(`hidden`),clearTimeout(C_),C_=setTimeout(()=>t.classList.add(`hidden`),1800)}var I_=window.webkitSpeechRecognition||window.SpeechRecognition||null,L_=null,R_=!1;function z_(e,t){if(!I_||R_)return!1;try{return L_=new I_,L_.lang=`en-US`,L_.interimResults=!0,L_.maxAlternatives=5,L_.continuous=!1,L_.onresult=t=>{let n=[];for(let e=0;e<t.results.length;e++){let r=t.results[e];for(let e=0;e<r.length;e++){let t=(r[e].transcript||``).toLowerCase().replace(/[^a-z'\s]/g,``);for(let e of t.split(/\s+/))e&&n.push(e)}}n.length&&e&&e(n)},L_.onerror=()=>B_(t),L_.onend=()=>B_(t),L_.start(),R_=!0,!0}catch{return B_(t),!1}}function B_(e){R_&&(R_=!1,L_=null,e&&e())}function V_(){if(L_)try{L_.stop()}catch{}R_=!1}var H_=t({play:()=>wv,prefetch:()=>Tv,setDimmed:()=>Dv,setMusicEnabled:()=>Ev}),U_={c:0,d:2,e:4,f:5,g:7,a:9,b:11};function W_(e){let t=/^([a-g])([#b]?)(\d)$/.exec(e.toLowerCase());if(!t)return 440;let n=U_[t[1]]+(t[2]===`#`?1:t[2]===`b`?-1:0);return 440*2**((12*(Number(t[3])+1)+n-69)/12)}var G_=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],K_=[1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0],q_={title:{bpm:104,melVol:.1,bassVol:.14,hatVol:.02,mel:[[`C5`,`-`,`E5`,`-`,`G5`,`-`,`E5`,`-`,`A5`,`-`,`G5`,`-`,`E5`,`-`,`D5`,`-`],[`F5`,`-`,`E5`,`-`,`D5`,`-`,`C5`,`-`,`D5`,`-`,`-`,`-`,null,null,null,null],[`C5`,`-`,`E5`,`-`,`G5`,`-`,`E5`,`-`,`A5`,`-`,`B5`,`-`,`C6`,`-`,`G5`,`-`],[`F5`,`-`,`E5`,`-`,`D5`,`-`,`E5`,`-`,`C5`,`-`,`-`,`-`,null,null,null,null]],bass:[[`C3`,null,null,null,`G3`,null,null,null,`A3`,null,null,null,`E3`,null,null,null],[`F3`,null,null,null,`C3`,null,null,null,`G3`,null,null,null,`G2`,null,null,null],[`C3`,null,null,null,`G3`,null,null,null,`A3`,null,null,null,`E3`,null,null,null],[`F3`,null,null,null,`G3`,null,null,null,`C3`,null,null,null,`C3`,null,null,null]],hat:[G_,G_,G_,G_]},map:{bpm:116,melVol:.09,bassVol:.14,hatVol:.025,mel:[[`F4`,null,`A4`,null,`C5`,`-`,`A4`,null,`D5`,`-`,`C5`,`-`,`A4`,`-`,`F4`,null],[`G4`,null,`Bb4`,null,`D5`,`-`,`Bb4`,null,`C5`,`-`,`-`,`-`,null,null,null,null],[`F4`,null,`A4`,null,`C5`,`-`,`A4`,null,`D5`,`-`,`E5`,`-`,`F5`,`-`,`C5`,null],[`Bb4`,null,`A4`,null,`G4`,`-`,`A4`,null,`F4`,`-`,`-`,`-`,null,null,null,null]],bass:[[`F2`,null,`F3`,null,`F2`,null,`F3`,null,`Bb2`,null,`Bb3`,null,`Bb2`,null,`Bb3`,null],[`C3`,null,`C4`,null,`C3`,null,`C4`,null,`F2`,null,`F3`,null,`F2`,null,`F3`,null],[`F2`,null,`F3`,null,`F2`,null,`F3`,null,`Bb2`,null,`Bb3`,null,`Bb2`,null,`Bb3`,null],[`C3`,null,`C4`,null,`C3`,null,`C4`,null,`F2`,null,`F3`,null,`F2`,null,null,null]],hat:[K_,K_,K_,K_]},level:{bpm:126,melVol:.085,bassVol:.15,hatVol:.03,mel:[[`C5`,null,`D5`,null,`E5`,`-`,`G5`,null,`E5`,`-`,`D5`,null,`C5`,`-`,null,null],[`A4`,null,`C5`,null,`D5`,`-`,`E5`,null,`D5`,`-`,`C5`,null,`A4`,`-`,null,null],[`C5`,null,`D5`,null,`E5`,`-`,`G5`,null,`A5`,`-`,`G5`,null,`E5`,`-`,null,null],[`G5`,`-`,`E5`,`-`,`D5`,`-`,`C5`,`-`,`D5`,`-`,`-`,`-`,null,null,null,null]],bass:[[`C3`,null,`C3`,null,`G2`,null,`C3`,null,`A2`,null,`A2`,null,`E2`,null,`A2`,null],[`F2`,null,`F2`,null,`C3`,null,`F2`,null,`G2`,null,`G2`,null,`G2`,null,`B2`,null],[`C3`,null,`C3`,null,`G2`,null,`C3`,null,`A2`,null,`A2`,null,`E2`,null,`A2`,null],[`F2`,null,`F2`,null,`G2`,null,`G2`,null,`C3`,null,`G2`,null,`C3`,null,null,null]],hat:[K_,K_,K_,K_]},secret:{bpm:144,melVol:.09,bassVol:.14,hatVol:.035,mel:[[`C5`,null,`E5`,null,`G5`,null,`C6`,`-`,`B5`,null,`G5`,null,`A5`,`-`,null,null],[`F5`,null,`A5`,null,`C6`,`-`,`A5`,null,`G5`,`-`,`E5`,null,`D5`,`-`,null,null],[`C5`,null,`E5`,null,`G5`,null,`C6`,`-`,`D6`,null,`C6`,null,`B5`,`-`,null,null],[`A5`,`-`,`G5`,`-`,`F5`,`-`,`E5`,`-`,`D5`,`-`,`C5`,`-`,`-`,`-`,null,null]],bass:[[`C3`,null,`G2`,null,`C3`,null,`G2`,null,`A2`,null,`E2`,null,`A2`,null,`E2`,null],[`F2`,null,`C3`,null,`F2`,null,`C3`,null,`G2`,null,`D3`,null,`G2`,null,`B2`,null],[`C3`,null,`G2`,null,`C3`,null,`G2`,null,`F2`,null,`C3`,null,`G2`,null,`G2`,null],[`F2`,null,`F2`,null,`C3`,null,`C3`,null,`G2`,null,`G2`,null,`C3`,null,null,null]],hat:[K_,K_,K_,K_]},boss:{bpm:138,melVol:.09,bassVol:.16,hatVol:.03,mel:[[`A4`,null,`A4`,null,`C5`,`-`,`B4`,null,`A4`,null,`E5`,`-`,`-`,`-`,null,null],[`F5`,null,`E5`,null,`D5`,`-`,`C5`,null,`B4`,`-`,`-`,`-`,null,null,null,null],[`A4`,null,`A4`,null,`C5`,`-`,`B4`,null,`A4`,null,`A5`,`-`,`-`,`-`,null,null],[`G5`,null,`F5`,null,`E5`,`-`,`D5`,null,`A4`,`-`,`-`,`-`,null,null,null,null]],bass:[[`A2`,null,`A2`,`A2`,null,`A2`,null,null,`A2`,null,`A2`,`A2`,null,`G2`,null,null],[`F2`,null,`F2`,`F2`,null,`F2`,null,null,`E2`,null,`E2`,`E2`,null,`E2`,null,null],[`A2`,null,`A2`,`A2`,null,`A2`,null,null,`A2`,null,`A2`,`A2`,null,`G2`,null,null],[`D2`,null,`D2`,`D2`,null,`F2`,null,null,`E2`,null,`E2`,null,`A2`,null,null,null]],hat:[K_,K_,K_,K_]},finale:{bpm:154,melVol:.095,bassVol:.17,hatVol:.04,mel:[[`A4`,`-`,`C5`,`-`,`E5`,`-`,`A5`,`-`,`G5`,`-`,`E5`,`-`,`F5`,`-`,`E5`,`-`],[`D5`,`-`,`F5`,`-`,`A5`,`-`,`G5`,`-`,`F5`,`-`,`E5`,`-`,`D5`,`-`,`C5`,`-`],[`A4`,`-`,`C5`,`-`,`E5`,`-`,`A5`,`-`,`B5`,`-`,`C6`,`-`,`B5`,`-`,`A5`,`-`],[`G5`,`-`,`F5`,`-`,`E5`,`-`,`D5`,`-`,`E5`,`-`,`-`,`-`,`A4`,`-`,`-`,`-`]],bass:[[`A2`,`A2`,`A2`,`A2`,`A2`,`A2`,`A2`,`A2`,`F2`,`F2`,`F2`,`F2`,`F2`,`F2`,`F2`,`F2`],[`D2`,`D2`,`D2`,`D2`,`D2`,`D2`,`D2`,`D2`,`E2`,`E2`,`E2`,`E2`,`E2`,`E2`,`E2`,`E2`],[`A2`,`A2`,`A2`,`A2`,`A2`,`A2`,`A2`,`A2`,`F2`,`F2`,`F2`,`F2`,`C3`,`C3`,`C3`,`C3`],[`G2`,`G2`,`G2`,`G2`,`E2`,`E2`,`E2`,`E2`,`A2`,`A2`,`A2`,`A2`,`A2`,`A2`,`A2`,`A2`]],hat:[K_,K_,K_,K_]},pasta:{bpm:120,melVol:.09,bassVol:.14,hatVol:.03,mel:[[`G4`,null,`B4`,null,`D5`,`-`,`B4`,null,`G4`,null,`D5`,`-`,`B4`,`-`,null,null],[`C5`,null,`E5`,null,`D5`,`-`,`B4`,null,`A4`,`-`,`G4`,null,`A4`,`-`,null,null],[`G4`,null,`B4`,null,`D5`,`-`,`G5`,null,`F#5`,`-`,`E5`,null,`D5`,`-`,null,null],[`C5`,`-`,`B4`,`-`,`A4`,`-`,`D5`,`-`,`G4`,`-`,`-`,`-`,null,null,null,null]],bass:[[`G2`,null,`D3`,null,`G2`,null,`D3`,null,`C3`,null,`G3`,null,`C3`,null,`G3`,null],[`C3`,null,`G3`,null,`D3`,null,`A3`,null,`G2`,null,`D3`,null,`D3`,null,null,null],[`G2`,null,`D3`,null,`G2`,null,`D3`,null,`C3`,null,`G3`,null,`C3`,null,`G3`,null],[`A2`,null,`E3`,null,`D3`,null,`A3`,null,`G2`,null,`D3`,null,`G2`,null,null,null]],hat:[K_,K_,K_,K_]},waffle:{bpm:108,melVol:.09,bassVol:.14,hatVol:.025,mel:[[`F4`,`-`,`A4`,null,`C5`,`-`,`A4`,null,`D5`,`-`,`C5`,`-`,`A4`,`-`,null,null],[`Bb4`,`-`,`A4`,null,`G4`,`-`,`F4`,null,`G4`,`-`,`-`,`-`,null,null,null,null],[`F4`,`-`,`A4`,null,`C5`,`-`,`F5`,null,`E5`,`-`,`C5`,`-`,`A4`,`-`,null,null],[`D5`,`-`,`C5`,`-`,`Bb4`,`-`,`A4`,`-`,`F4`,`-`,`-`,`-`,null,null,null,null]],bass:[[`F2`,null,null,`C3`,null,null,`F2`,null,`Bb2`,null,null,`F3`,null,null,null,null],[`C3`,null,null,`G3`,null,null,`C3`,null,`F2`,null,null,`C3`,null,null,null,null],[`F2`,null,null,`C3`,null,null,`F2`,null,`Bb2`,null,null,`F3`,null,null,null,null],[`C3`,null,null,`G3`,null,null,`C3`,null,`F2`,null,null,null,null,null,null,null]],hat:[G_,G_,G_,G_]},snow:{bpm:112,melVol:.085,bassVol:.12,hatVol:.025,mel:[[`D5`,null,`F#5`,null,`A5`,`-`,`F#5`,null,`E5`,`-`,`D5`,null,`E5`,`-`,null,null],[`B4`,null,`D5`,null,`F#5`,`-`,`E5`,null,`D5`,`-`,`-`,`-`,null,null,null,null],[`D5`,null,`A5`,null,`F#5`,`-`,`A5`,null,`B5`,`-`,`A5`,null,`F#5`,`-`,null,null],[`G5`,`-`,`F#5`,`-`,`E5`,`-`,`D5`,`-`,`A4`,`-`,`-`,`-`,null,null,null,null]],bass:[[`D3`,null,null,null,`A2`,null,null,null,`B2`,null,null,null,`F#2`,null,null,null],[`G2`,null,null,null,`D3`,null,null,null,`A2`,null,null,null,`A2`,null,null,null],[`D3`,null,null,null,`A2`,null,null,null,`B2`,null,null,null,`F#2`,null,null,null],[`G2`,null,null,null,`A2`,null,null,null,`D3`,null,null,null,null,null,null,null]],hat:[G_,G_,G_,G_]},swamp:{bpm:100,melVol:.085,bassVol:.16,hatVol:.03,mel:[[`A4`,null,`C5`,null,`D5`,`-`,`C5`,null,`E5`,`-`,`D5`,null,`C5`,`-`,null,null],[`A4`,null,`G4`,null,`A4`,`-`,null,null,`D5`,`-`,`C5`,null,`A4`,`-`,null,null],[`E5`,null,`D5`,null,`C5`,`-`,`A4`,null,`B4`,`-`,`C5`,null,`D5`,`-`,null,null],[`C5`,`-`,`B4`,`-`,`A4`,`-`,`G4`,`-`,`A4`,`-`,`-`,`-`,null,null,null,null]],bass:[[`A2`,null,`A2`,`E3`,null,`A2`,null,null,`D3`,null,`D3`,`A3`,null,`D3`,null,null],[`A2`,null,`A2`,`E3`,null,`A2`,null,null,`G2`,null,`G2`,`D3`,null,`G2`,null,null],[`A2`,null,`A2`,`E3`,null,`A2`,null,null,`D3`,null,`D3`,`A3`,null,`D3`,null,null],[`E2`,null,`E2`,`B2`,null,`E2`,null,null,`A2`,null,`A2`,null,null,null,null,null]],hat:[K_,K_,K_,K_]},caves:{bpm:96,melVol:.09,bassVol:.13,hatVol:.02,mel:[[`E5`,`-`,null,`G5`,`-`,null,`B5`,`-`,`-`,`-`,`A5`,`-`,`G5`,`-`,null,null],[`F#5`,`-`,null,`A5`,`-`,null,`E5`,`-`,`-`,`-`,null,null,null,null,null,null],[`E5`,`-`,null,`B5`,`-`,null,`C6`,`-`,`-`,`-`,`B5`,`-`,`A5`,`-`,null,null],[`G5`,`-`,`F#5`,`-`,`E5`,`-`,`D5`,`-`,`E5`,`-`,`-`,`-`,null,null,null,null]],bass:[[`E2`,null,null,null,`B2`,null,null,null,`C3`,null,null,null,`G2`,null,null,null],[`A2`,null,null,null,`E3`,null,null,null,`B2`,null,null,null,`B2`,null,null,null],[`E2`,null,null,null,`B2`,null,null,null,`C3`,null,null,null,`G2`,null,null,null],[`A2`,null,null,null,`B2`,null,null,null,`E2`,null,null,null,null,null,null,null]],hat:[G_,G_,G_,G_]},house:{bpm:88,melVol:.09,bassVol:.13,hatVol:0,mel:[[`G4`,`-`,`B4`,`-`,`D5`,`-`,`-`,`-`,`C5`,`-`,`B4`,`-`,`A4`,`-`,`-`,`-`],[`B4`,`-`,`A4`,`-`,`G4`,`-`,`-`,`-`,`A4`,`-`,`-`,`-`,null,null,null,null],[`G4`,`-`,`B4`,`-`,`D5`,`-`,`-`,`-`,`E5`,`-`,`D5`,`-`,`B4`,`-`,`-`,`-`],[`C5`,`-`,`B4`,`-`,`A4`,`-`,`-`,`-`,`G4`,`-`,`-`,`-`,null,null,null,null]],bass:[[`G2`,null,null,null,`D3`,null,null,null,`E3`,null,null,null,`D3`,null,null,null],[`C3`,null,null,null,`D3`,null,null,null,`G2`,null,null,null,null,null,null,null],[`G2`,null,null,null,`D3`,null,null,null,`C3`,null,null,null,`D3`,null,null,null],[`C3`,null,null,null,`D3`,null,null,null,`G2`,null,null,null,null,null,null,null]],hat:[G_,G_,G_,G_]},victory:{bpm:112,melVol:.09,bassVol:.13,hatVol:.02,mel:[[`C5`,`-`,`C5`,null,`G5`,`-`,`-`,`-`,`E5`,`-`,`F5`,`-`,`G5`,`-`,`-`,`-`],[`A5`,`-`,`G5`,`-`,`F5`,`-`,`E5`,`-`,`C5`,`-`,`-`,`-`,null,null,null,null]],bass:[[`C3`,null,null,null,`C3`,null,`G2`,null,`A2`,null,null,null,`F2`,null,`G2`,null],[`F2`,null,null,null,`G2`,null,null,null,`C3`,null,null,null,`C3`,null,null,null]],hat:[G_,G_]}},J_=.18,Y_=70,X_=.6,Z_=null,Q_=!0,$_=!1,ev=!1,tv=!1,nv=null,rv=null,iv=0,av=0,ov=0,sv=null,cv=null;function lv(){return!Q_||ev?0:X_*($_?.22:1)*(tv?.35:1)}function uv(){if(!Z_)return;let e=Gu();e&&Z_.gain.setTargetAtTime(lv(),e.ctx.currentTime,ev?.04:.15)}function dv(){let e=Gu();return e?(Z_||(Z_=e.ctx.createGain(),Z_.gain.value=lv(),Z_.connect(e.master)),e.ctx):null}function fv(e){if(!cv){cv=e.createBuffer(1,e.sampleRate*.1|0,e.sampleRate);let t=cv.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}return cv}function pv(e,t,n,r,i,a){let o=e.createOscillator(),s=e.createGain();o.type=t,o.frequency.value=n,s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(a,r+.01),s.gain.setValueAtTime(a,r+i*.7),s.gain.exponentialRampToValueAtTime(1e-4,r+i),o.connect(s).connect(Z_),o.start(r),o.stop(r+i+.02)}function mv(e,t,n){let r=e.createBufferSource();r.buffer=fv(e);let i=e.createBiquadFilter();i.type=`highpass`,i.frequency.value=6e3;let a=e.createGain();a.gain.setValueAtTime(n,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.04),r.connect(i).connect(a).connect(Z_),r.start(t),r.stop(t+.06)}function hv(e,t){let n=1;for(;t+n<e.length&&e[t+n]===`-`;)n++;return n}function gv(e,t,n){let r=rv.mel[av%rv.mel.length],i=rv.bass[av%rv.bass.length],a=rv.hat[av%rv.hat.length],o=r[iv];o&&o!==`-`&&pv(e,`square`,W_(o),t,n*hv(r,iv)*.9,rv.melVol);let s=i[iv];s&&s!==`-`&&pv(e,`triangle`,W_(s),t,n*hv(i,iv)*.85,rv.bassVol),rv.hatVol&&a[iv]&&mv(e,t,rv.hatVol),iv++,iv>=16&&(iv=0,av=(av+1)%rv.mel.length)}function _v(){let e=dv();if(!e||e.state!==`running`||!rv)return;let t=60/rv.bpm/4;for(ov<e.currentTime&&(ov=e.currentTime+.05);ov<e.currentTime+J_;)gv(e,ov,t),ov+=t}var vv=null,yv=null,bv=0;function xv(){if(bv++,!vv)return;let e=vv,t=yv;vv=null,yv=null;let n=Gu();if(!n)return;let r=n.ctx.currentTime;t.gain.setTargetAtTime(1e-4,r,.1);try{e.stop(r+.5)}catch{}}function Sv({buf:e,offset:t,dur:n}){let r=dv();if(!r)return;let i=r.currentTime;yv=r.createGain(),yv.gain.setValueAtTime(1e-4,i),yv.gain.setTargetAtTime(1,i,.2),vv=r.createBufferSource(),vv.buffer=e,vv.loop=!0,vv.loopStart=t,vv.loopEnd=t+n,vv.connect(yv).connect(Z_),vv.start(i,t)}function Cv(e){rv=q_[e],iv=0,av=0,ov=0,rv&&!sv&&(sv=setInterval(_v,Y_))}function wv(e){if(e===nv||(nv=e,xv(),rv=null,sv&&=(clearInterval(sv),null),!e))return;let t=gu.music[e];if(t&&dv()){let n=bv;$u(`audio/${t}`).then(t=>{n!==bv||nv!==e||Sv(t)},()=>{delete gu.music[e],n===bv&&nv===e&&Cv(e)})}else Cv(e)}function Tv(e){let t=gu.music[e];t&&$u(`audio/${t}`).catch(()=>{})}function Ev(e){Q_=e,uv()}function Dv(e){tv=e,uv()}typeof window<`u`&&(window.addEventListener(`wr-speech`,e=>{$_=!!(e.detail&&e.detail.speaking),$_||(ev=!1),uv()}),window.addEventListener(`wr-word`,e=>{ev=!!(e.detail&&e.detail.active),uv()}));var Ov=new URLSearchParams(location.search);Ov.has(`reset`)&&cp(),Ef(),Ov.has(`unlock`)&&up(Su.length),qu(!Of().sound),Ev(Of().music);var kv=Su.map(e=>e.levels.length);ap(kv);var Av=[`pasta`,`waffle`,`snow`,`swamp`,`caves`,`finale`];function jv(e,t,n){return t?`secret`:e===Su.length-1?`finale`:n?`boss`:Av[e]||`level`}var Mv={world:0,level:0,secret:!1},Nv=null,Pv=null,Fv=null,Iv=`map`,Lv=`title`,Rv=()=>Ku();window.addEventListener(`pointerdown`,Rv,{once:!0}),window.addEventListener(`touchstart`,Rv,{once:!0});var zv=document.getElementById(`game-container`),Bv=new Il({antialias:!0});Bv.setPixelRatio(Math.min(window.devicePixelRatio,2)),Bv.setSize(window.innerWidth,window.innerHeight),Rl(Bv),zv.appendChild(Bv.domElement);var Vv=new Mm(Bv,{onCoins:e=>t_(e),onDotsInit:e=>l_(e),onDot:(e,t)=>u_(e,t),onKey:e=>n_(e),onControls:e=>r_(e),onAutoRepeat:()=>o_(),onRepeatButton:e=>i_(e),onRepeatTip:()=>{c_(!0),Yd(`If you forget your word, tap the blue ear button to hear it again!`,{rate:.95})},onRunComplete:e=>my(e)}),Hv=new rh(Bv,{onNodeSelected:e=>{Nv=e,Yd(e.name,{rate:1}),Ug(e);let t=!e.secret&&e.level===kv[e.world];Tv(jv(e.world,e.secret,t))},onDismiss:()=>{Nv=null,Wg()},onEnterKey:()=>{Nv&&Gg()?dy():Hv.walkTo(Hv.tokenNav)},onHouseTapped:()=>{oy(`map`)},onEditTapped:()=>{Yd(`Make your character!`,{rate:1}),ny(`map`)}}),Uv=new ch,Wv=new Yh(Bv),Gv=new eg;window.__wr={game:Vv,store:Xd,map:Hv,charScene:Uv,house:Wv,cutscene:Gv,music:H_,audio:{audioGraph:Gu,unlockAudio:Ku}};var Kv=0;function qv(){Kv<1||(Lf(Math.round(Kv)),Kv=0)}var Jv=new _o;Bv.setAnimationLoop(()=>{let e=Math.min(Jv.getDelta(),.05);Iv===`game`?(Vv.running&&!Vv.paused&&(Kv+=e,Kv>=15&&qv()),Vv.tick(e),Bv.render(Vv.scene,Vv.camera)):Iv===`char`?(Uv.tick(e),Bv.render(Uv.scene,Uv.camera)):Iv===`house`?(Wv.tick(e),Bv.render(Wv.scene,Wv.camera)):Iv===`cutscene`?(Gv.tick(e),Bv.render(Gv.scene,Gv.camera)):(Hv.tick(e),Bv.render(Hv.scene,Hv.camera))});function Yv(){for(let e of[Vv.camera,Hv.camera,Uv.camera,Wv.camera,Gv.camera])e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix();Bv.setSize(window.innerWidth,window.innerHeight)}window.addEventListener(`resize`,Yv),window.addEventListener(`orientationchange`,Yv);function Xv(){Iv=`map`,wv(`map`),Dv(!1),Hv.enter(),Bg(!1),zg(`map`)}function Zv(e,t){Iv===`map`&&Hv.exit(),Iv=`cutscene`,wv(null),Bg(!1),zg(`cutscene`),Gv.play(e,t)}function Qv(){Iv===`map`&&Hv.exit(),Iv=`char`,wv(`title`),Uv.setAntics(!0),Uv.setLook(Fp()),Kg(bf()),zg(`title`)}function $v(){let e=Of();qu(!e.sound),Ev(e.music);let t=Fp();Ip(Vv.player.group,t),Ip(Hv.token,t),Uv.setLook(t),Hv.refresh(),Hv.setTokenTo(e.unlocked.world,e.unlocked.level),Wv.refresh(),t_(e.coins),Hg(),Kg(bf()),Mv={world:0,level:0,secret:!1},Nv=null,Pv=null}function ey(){Iv===`map`&&Hv.exit(),Iv=`char`,Yd(`Who's playing?`,{rate:1}),Yg({onSelect:e=>{e!==yf()&&(Cf(e),$v()),Qv()},onCreate:e=>{Sf(e)&&($v(),ny(`title`))},onDelete:e=>{let t=e===yf();wf(e),t&&$v()}})}var ty=`title`;function ny(e=`title`){ty=e,Iv===`map`&&Hv.exit(),Iv=`char`,Uv.setAntics(!1),Uv.setLook(Fp()),e_((e,t)=>{dp(e,t),Uv.setLook(Fp())}),zg(`char`)}function ry(){let e=Fp();if(Ip(Vv.player.group,e),Ip(Hv.token,e),ty===`map`){Xv();return}Qv()}function iy(){let e=[{track:`house`,name:`My House`,icon:`house`},{track:`map`,name:`World Map`,icon:`map`}];return Su.forEach((t,n)=>{sp(n)&&e.push({track:Av[n],name:t.name,icon:yh(n)})}),e}function ay(){let e=Of().houseMusic;return iy().some(t=>t.track===e)?e:`house`}function oy(e){Lv=e,Iv===`map`&&Hv.exit(),Iv=`house`,wv(ay()),Wv.enter(),ep(),_y=!1,Bg(!1),j_({choices:iy(),current:ay()}),Jd(`home`)}function sy(e){Lv=`complete`,Iv=`house`,wv(`victory`);let t=Bm(e);t&&Zf(t.id),Wv.beginCeremony(e,t&&t.id),Bg(!1),M_()}function cy(){Wv.exit(),Lv===`complete`?vy():Lv===`map`?Xv():Qv()}function ly(e){if(e.earned!==void 0&&!Yf(e.id)){F_({icon:`castle`,text:`Castle prize!`}),Yd(`Beat the castle boss to win that prize!`,{rate:1});return}if(Yf(e.id)){Yd(`You already have the ${e.name}!`,{rate:1});return}if(!Xf(e.id,e.cost,e.currency)){F_({icon:e.currency===`gems`?`gem`:`coin`,text:`Keep playing!`}),Jd(e.currency===`gems`?`needGems`:`needCoins`);return}Wv.refresh(),Wv.celebrate(e.id),nd(),P_(),F_({icon:vh(e.id),text:`${e.name}!`}),Yd(`You got the ${e.name}!`,{rate:1,onend:()=>Jd(`purchase`)})}function uy(e,t,n=!1){let r=!n&&t===kv[e];Mv={world:e,level:t,secret:n,boss:r},Pv=null,Hv.exit(),Iv=`game`,wv(jv(e,n,r)),Dv(!1),bd(),Vv.startRun(e,t,{secret:n,boss:r}),zg(null),Bg(!0)}function dy(){if(!Nv)return;let e=Nv;Nv=null,Wg(),uy(e.world,e.secret?0:e.level,e.secret)}function fy(e,t){return t+1<=kv[e]?{world:e,level:t+1}:e+1<Su.length?{world:e+1,level:0}:null}function py(e){let t=e.length||1,n=e.filter(e=>e.firstTry).length;return n===t?3:n/t>=.7?2:1}function my(e){Pv=e,Bg(!1),qv();let t=py(e.results);Pv.stars=t;let n=!1;if(Mv.secret)Wf(Mv.world,t);else{let r=Vf(Mv.world,Mv.level)===0;if(Hf(Mv.world,Mv.level,t),ip(Mv.world,Mv.level,kv),Mv.boss&&(n=!np(Mv.world),rp(Mv.world)),r){let e=fy(Mv.world,Mv.level);e&&op(e.world,e.level)&&Hv.queueReveal({kind:`node`,world:e.world,level:e.level})}e.keyFound&&!qf(Mv.world)&&(Kf(Mv.world,Mv.level),Hv.queueReveal({kind:`secret`,world:Mv.world}))}if(Mv.boss&&Mv.world===Su.length-1){if(n){let e=Bm(Mv.world);e&&Zf(e.id)}hy();return}n?sy(Mv.world):gy()}function hy(){let e=!zf();e&&(Bf(),Zf(`herotrophy`),Wv.refresh()),Zv(sg.finale,()=>{__(Rf(),{firstTime:e}),Yd(`You're a sight word hero!`,{rate:1})})}function gy(){wv(`victory`);let e=Mv.secret?null:fy(Mv.world,Mv.level);if(d_({stars:Pv.stars,coins:Pv.coins,gems:Pv.gems,hasNext:!!e&&op(e.world,e.level)}),Pv.stars===3){let e=Pv;setTimeout(()=>{Pv===e&&Iv===`game`&&Jd(`threeStars`)},2600)}}var _y=!1;function vy(){Xv(),Hv.setTokenTo(Mv.world,Mv.level,Mv.secret),!_y&&tp(Rm)&&(_y=!0,Yd(`Something new at your house!`,{rate:1}))}function yy(){Fv.matched=!1,Fv.heard=[],Fv.advancing=!1,v_(Fv.words[Fv.idx])}function by(){!Fv||Fv.advancing||(Fv.advancing=!0,V_(),b_(!1),setTimeout(()=>{Fv&&(Fv.idx++,Fv.idx>=Fv.words.length?xy():yy())},1400))}function xy(){Fv=null,V_(),b_(!1),gy()}function Sy(e){return(e||``).toLowerCase().replace(/[^a-z']/g,``)}function Cy(){if(!Fv||Fv.advancing)return;let e=Sy(Fv.words[Fv.idx]);z_(t=>{!Fv||Fv.matched||(Fv.heard.push(...t),t.some(t=>Sy(t)===e)&&(Fv.matched=!0,Fv.heard=[],Pv.gems+=5,Ff(5),yd(),y_(`+5 gems!`),Jd(`correct`),by()))},()=>{b_(!1),!(!Fv||Fv.matched||Fv.advancing)&&Fv.heard.length&&(y_(`Nice try!`),Yd(`Nice try! The word is: ${Fv.words[Fv.idx]}`,{rate:.9}),by())})&&b_(!0)}function wy(){V_(),b_(!1)}if(Ig({onPlay:()=>{Xv(),Hv.walkTo(Hv.tokenNav)},onCharacterDone:()=>ry(),onSwitchPlayer:()=>ey(),onPlayersBack:()=>Qv(),onProgress:()=>f_(),onProgressClose:()=>Qv(),onToggleSound:()=>{let e=!Of().sound;pp(e),qu(!e),Hg(),e&&td()},onToggleMusic:()=>{let e=!Of().music;mp(e),Ev(e),Hg()},onToggleMic:()=>{hp(!Of().mic),Hg()},onToggleUnlock:()=>{let e=!Of().devUnlocked;lp(e),Hg(),Yd(e?`All levels unlocked!`:`Levels locked again.`,{rate:1}),Hv.refresh()},onMapBack:()=>Qv(),onBannerPlay:()=>dy(),onPause:()=>{Vv.pause(),xd(),Dv(!0),zg(`pause`)},onResume:()=>{zg(null),Sd(),Dv(!1),Vv.resume()},onPauseMap:()=>{qv(),Vv.stopRun(),Xv()},onRepeatWord:()=>Vv.repeatWord(),onNextLevel:()=>{let e=fy(Mv.world,Mv.level);e&&uy(e.world,e.level)},onCompleteMap:()=>vy(),onBonusSkip:()=>{Fv&&(Fv.advancing=!0,V_(),Fv.idx=Fv.words.length,xy())},onMicDown:Cy,onMicUp:wy,onHouse:e=>oy(e),onHouseBack:()=>cy(),onCeremonyDone:()=>cy(),onBuyItem:e=>ly(e),onPickMusic:e=>{gp(e),wv(e)},onMoveDown:e=>Vv.setMove(`btn`,e,!0),onMoveUp:e=>Vv.setMove(`btn`,e,!1),onJumpDown:()=>Vv.running&&!Vv.paused&&Vv.player.jump(),onJumpUp:()=>{},onDevUnlock:()=>{up(Su.length),Yd(`All levels unlocked!`,{rate:1}),Hv.refresh()}}),Hg(),Hv.enter(),Hv.exit(),Qv(),Ov.has(`cutscene`)&&Zv(sg[Ov.get(`cutscene`)]||sg.demo,()=>Qv()),Ov.has(`goto`)){let[e,t]=(Ov.get(`goto`)||`0,0`).split(`,`);uy(Math.max(0,Math.min(Su.length-1,parseInt(e,10)||0)),t===`s`?0:Math.max(0,parseInt(t,10)||0),t===`s`)}document.addEventListener(`visibilitychange`,()=>{document.hidden&&Vv.running&&!Vv.paused&&(Vv.pause(),Dv(!0),zg(`pause`))});