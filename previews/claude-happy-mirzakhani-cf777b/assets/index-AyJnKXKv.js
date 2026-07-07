var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,ee=1027,O=1028,k=1029,te=1030,ne=1031,A=1033,re=33776,ie=33777,j=33778,ae=33779,oe=35840,se=35841,ce=35842,le=35843,ue=36196,de=37492,M=37496,fe=37488,pe=37489,me=37490,he=37491,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,Ce=37815,we=37816,Te=37817,Ee=37818,De=37819,Oe=37820,ke=37821,Ae=36492,je=36494,Me=36495,Ne=36283,Pe=36284,Fe=36285,N=36286,Ie=2300,Le=2301,Re=2302,P=2303,ze=2400,F=2401,Be=2402,Ve=3200,He=`srgb`,Ue=`srgb-linear`,We=`linear`,Ge=`srgb`,Ke=7680,qe=35044,Je=35048,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rt(...e){let t=e.join(` `);t in et||(et[t]=!0,I(...e))}function it(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var at={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},st=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(st[e&255]+st[e>>8&255]+st[e>>16&255]+st[e>>24&255]+`-`+st[t&255]+st[t>>8&255]+`-`+st[t>>16&15|64]+st[t>>24&255]+`-`+st[n&63|128]+st[n>>8&255]+`-`+st[n>>16&255]+st[n>>24&255]+st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]).toLowerCase()}function R(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n){return(1-n)*e+n*t}function pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(R(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_t.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_t.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gt.copy(this).projectOnVector(e),this.sub(gt)}reflect(e){return this.sub(gt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gt=new B,_t=new ht,V=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return rt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(vt.makeScale(e,t)),this}rotate(e){return rt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(vt.makeRotation(-e)),this}translate(e,t){return rt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(vt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vt=new V,yt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xt(){let e={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ct(e.r),e.g=Ct(e.g),e.b=Ct(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=wt(e.r),e.g=wt(e.g),e.b=wt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?We:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return rt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return rt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ue]:{primaries:t,whitePoint:r,transfer:We,toXYZ:yt,fromXYZ:bt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:yt,fromXYZ:bt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),e}var St=xt();function Ct(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function wt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Tt,Et=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tt===void 0&&(Tt=Qe(`canvas`)),Tt.width=e.width,Tt.height=e.height;let t=Tt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Tt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ct(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ct(t[e]/255)*255):t[e]=Ct(t[e]);return{data:t,width:e.width,height:e.height}}else return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Dt=0,Ot=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dt++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(kt(r[t].image)):e.push(kt(r[t]))}else e=kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Et.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var At=0,jt=new B,Mt=class e extends ot{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:At++}),this.uuid=ut(),this.name=``,this.source=new Ot(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jt).x}get height(){return this.source.getSize(jt).y}get depth(){return this.source.getSize(jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){I(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null,Mt.DEFAULT_MAPPING=300,Mt.DEFAULT_ANISOTROPY=1;var Nt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this.w=R(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this.w=R(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pt=class extends ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let r=new Mt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ot(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ft=class extends Pt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},It=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Lt=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/zt.setFromMatrixColumn(e,0).length(),i=1/zt.setFromMatrixColumn(e,1).length(),a=1/zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vt,e,Ht)}lookAt(e,t,n){let r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Ut.crossVectors(n,Gt),Ut.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Ut.crossVectors(n,Gt)),Ut.normalize(),Wt.crossVectors(Gt,Ut),r[0]=Ut.x,r[4]=Wt.x,r[8]=Gt.x,r[1]=Ut.y,r[5]=Wt.y,r[9]=Gt.y,r[2]=Ut.z,r[6]=Wt.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],te=r[10],ne=r[14],A=r[3],re=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*O+c*A,i[4]=a*S+o*E+s*k+c*re,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*ee+s*ne+c*j,i[1]=l*x+u*T+d*O+f*A,i[5]=l*S+u*E+d*k+f*re,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*ee+d*ne+f*j,i[2]=p*x+m*T+h*O+g*A,i[6]=p*S+m*E+h*k+g*re,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*ee+h*ne+g*j,i[3]=_*x+v*T+y*O+b*A,i[7]=_*S+v*E+y*k+b*re,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*ee+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=zt.set(r[0],r[1],r[2]).length(),o=zt.set(r[4],r[5],r[6]).length(),s=zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Bt.copy(this);let c=1/a,l=1/o,u=1/s;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=l,Bt.elements[5]*=l,Bt.elements[6]*=l,Bt.elements[8]*=u,Bt.elements[9]*=u,Bt.elements[10]*=u,t.setFromRotationMatrix(Bt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zt=new B,Bt=new Rt,Vt=new B(0,0,0),Ht=new B(1,1,1),Ut=new B,Wt=new B,Gt=new B,Kt=new Rt,qt=new ht,Jt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(R(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-R(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(R(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-R(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(R(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-R(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qt.setFromEuler(this),this.setFromQuaternion(qt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jt.DEFAULT_ORDER=`XYZ`;var Yt=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Xt=0,Zt=new B,Qt=new ht,$t=new Rt,en=new B,tn=new B,nn=new B,rn=new ht,an=new B(1,0,0),on=new B(0,1,0),sn=new B(0,0,1),cn={type:`added`},ln={type:`removed`},un={type:`childadded`,child:null},dn={type:`childremoved`,child:null},fn=class e extends ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Jt,r=new ht,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new V}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qt.setFromAxisAngle(e,t),this.quaternion.multiply(Qt),this}rotateOnWorldAxis(e,t){return Qt.setFromAxisAngle(e,t),this.quaternion.premultiply(Qt),this}rotateX(e){return this.rotateOnAxis(an,e)}rotateY(e){return this.rotateOnAxis(on,e)}rotateZ(e){return this.rotateOnAxis(sn,e)}translateOnAxis(e,t){return Zt.copy(e).applyQuaternion(this.quaternion),this.position.add(Zt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(an,e)}translateY(e){return this.translateOnAxis(on,e)}translateZ(e){return this.translateOnAxis(sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?en.copy(e):en.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(tn,en,this.up):$t.lookAt(en,tn,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),Qt.setFromRotationMatrix($t),this.quaternion.premultiply(Qt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cn),un.child=e,this.dispatchEvent(un),un.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ln),dn.child=e,this.dispatchEvent(dn),dn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cn),un.child=e,this.dispatchEvent(un),un.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tn,e,nn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tn,rn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};fn.DEFAULT_UP=new B(0,1,0),fn.DEFAULT_MATRIX_AUTO_UPDATE=!0,fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var H=class extends fn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},pn={type:`move`},mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new H,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new H,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new H,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new H;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},_n={h:0,s:0,l:0};function vn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=dt(e,1),t=R(t,0,1),n=R(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=vn(i,r,e+1/3),this.g=vn(i,r,e),this.b=vn(i,r,e-1/3)}return St.colorSpaceToWorking(this,r),this}setStyle(e,t=He){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=hn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ct(e.r),this.g=Ct(e.g),this.b=Ct(e.b),this}copyLinearToSRGB(e){return this.r=wt(e.r),this.g=wt(e.g),this.b=wt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return St.workingToColorSpace(yn.copy(this),e),Math.round(R(yn.r*255,0,255))*65536+Math.round(R(yn.g*255,0,255))*256+Math.round(R(yn.b*255,0,255))}getHexString(e=He){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(yn.copy(this),t);let n=yn.r,r=yn.g,i=yn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=He){St.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,r=yn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(_n);let n=ft(gn.h,_n.h,t),r=ft(gn.s,_n.s,t),i=ft(gn.l,_n.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new U;U.NAMES=hn;var bn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new U(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xn=class extends fn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sn=new B,Cn=new B,wn=new B,Tn=new B,En=new B,Dn=new B,On=new B,kn=new B,An=new B,jn=new B,Mn=new Nt,Nn=new Nt,Pn=new Nt,Fn=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Sn.subVectors(r,t),Cn.subVectors(n,t),wn.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(Cn),s=Sn.dot(wn),c=Cn.dot(Cn),l=Cn.dot(wn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Tn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Tn.x),s.addScaledVector(a,Tn.y),s.addScaledVector(o,Tn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Mn.setScalar(0),Nn.setScalar(0),Pn.setScalar(0),Mn.fromBufferAttribute(e,t),Nn.fromBufferAttribute(e,n),Pn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Mn,i.x),a.addScaledVector(Nn,i.y),a.addScaledVector(Pn,i.z),a}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),Cn.subVectors(e,t),Sn.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),Sn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;En.subVectors(r,n),Dn.subVectors(i,n),kn.subVectors(e,n);let s=En.dot(kn),c=Dn.dot(kn);if(s<=0&&c<=0)return t.copy(n);An.subVectors(e,r);let l=En.dot(An),u=Dn.dot(An);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(En,a);jn.subVectors(e,i);let f=En.dot(jn),p=Dn.dot(jn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Dn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return On.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(On,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(En,a).addScaledVector(Dn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},In=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Rn):Rn.fromBufferAttribute(r,t),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),zn.copy(e.boundingBox)),zn.applyMatrix4(e.matrixWorld),this.union(zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kn),qn.subVectors(this.max,Kn),Bn.subVectors(e.a,Kn),Vn.subVectors(e.b,Kn),Hn.subVectors(e.c,Kn),Un.subVectors(Vn,Bn),Wn.subVectors(Hn,Vn),Gn.subVectors(Bn,Hn);let t=[0,-Un.z,Un.y,0,-Wn.z,Wn.y,0,-Gn.z,Gn.y,Un.z,0,-Un.x,Wn.z,0,-Wn.x,Gn.z,0,-Gn.x,-Un.y,Un.x,0,-Wn.y,Wn.x,0,-Gn.y,Gn.x,0];return!Xn(t,Bn,Vn,Hn,qn)||(t=[1,0,0,0,1,0,0,0,1],!Xn(t,Bn,Vn,Hn,qn))?!1:(Jn.crossVectors(Un,Wn),t=[Jn.x,Jn.y,Jn.z],Xn(t,Bn,Vn,Hn,qn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new B,new B,new B,new B,new B,new B,new B,new B],Rn=new B,zn=new In,Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new B,Yn=new B;function Xn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Yn.fromArray(e,a);let o=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),s=t.dot(Yn),c=n.dot(Yn),l=r.dot(Yn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Zn=new B,Qn=new z,$n=0,er=class extends ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$n++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=qe,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix3(e),this.setXY(t,Qn.x,Qn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix3(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pt(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pt(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pt(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},tr=class extends er{constructor(e,t,n){super(new Uint16Array(e),t,n)}},nr=class extends er{constructor(e,t,n){super(new Uint32Array(e),t,n)}},rr=class extends er{constructor(e,t,n){super(new Float32Array(e),t,n)}},ir=new In,ar=new B,or=new B,sr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ir.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ar,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(or)),this.expandByPoint(ar.copy(e.center).sub(or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cr=0,lr=new Rt,ur=new fn,dr=new B,fr=new In,pr=new In,mr=new B,hr=class e extends ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cr++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xe(e)?nr:tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return lr.makeRotationFromQuaternion(e),this.applyMatrix4(lr),this}rotateX(e){return lr.makeRotationX(e),this.applyMatrix4(lr),this}rotateY(e){return lr.makeRotationY(e),this.applyMatrix4(lr),this}rotateZ(e){return lr.makeRotationZ(e),this.applyMatrix4(lr),this}translate(e,t,n){return lr.makeTranslation(e,t,n),this.applyMatrix4(lr),this}scale(e,t,n){return lr.makeScale(e,t,n),this.applyMatrix4(lr),this}lookAt(e){return ur.lookAt(e),ur.updateMatrix(),this.applyMatrix4(ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new rr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fr.setFromBufferAttribute(n),this.morphTargetsRelative?(mr.addVectors(this.boundingBox.min,fr.min),this.boundingBox.expandByPoint(mr),mr.addVectors(this.boundingBox.max,fr.max),this.boundingBox.expandByPoint(mr)):(this.boundingBox.expandByPoint(fr.min),this.boundingBox.expandByPoint(fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(fr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];pr.setFromBufferAttribute(n),this.morphTargetsRelative?(mr.addVectors(fr.min,pr.min),fr.expandByPoint(mr),mr.addVectors(fr.max,pr.max),fr.expandByPoint(mr)):(fr.expandByPoint(pr.min),fr.expandByPoint(pr.max))}fr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)mr.fromBufferAttribute(a,t),o&&(dr.fromBufferAttribute(e,t),mr.add(dr)),r=Math.max(r,n.distanceToSquared(mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new er(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new er(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mr.fromBufferAttribute(e,t),mr.normalize(),e.setXYZ(t,mr.x,mr.y,mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new er(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=qe,this.updateRanges=[],this.version=0,this.uuid=ut()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_r=new B,vr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix4(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyNormalMatrix(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.transformDirection(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){tt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new er(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yr=0,br=class extends ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yr++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ke,this.stencilZFail=Ke,this.stencilZPass=Ke,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){I(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},xr=class extends br{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,Cr=new B,wr=new B,Tr=new B,Er=new z,Dr=new z,Or=new Rt,kr=new B,Ar=new B,jr=new B,Mr=new z,Nr=new z,Pr=new z,Fr=class extends fn{constructor(e=new xr){if(super(),this.isSprite=!0,this.type=`Sprite`,Sr===void 0){Sr=new hr;let e=new gr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute(`position`,new vr(e,3,0,!1)),Sr.setAttribute(`uv`,new vr(e,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new z(.5,.5),this.count=1}raycast(e,t){e.camera===null&&L(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),wr.setFromMatrixScale(this.matrixWorld),Or.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Tr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ir(kr.set(-.5,-.5,0),Tr,a,wr,r,i),Ir(Ar.set(.5,-.5,0),Tr,a,wr,r,i),Ir(jr.set(.5,.5,0),Tr,a,wr,r,i),Mr.set(0,0),Nr.set(1,0),Pr.set(1,1);let o=e.ray.intersectTriangle(kr,Ar,jr,!1,Cr);if(o===null&&(Ir(Ar.set(-.5,.5,0),Tr,a,wr,r,i),Nr.set(0,1),o=e.ray.intersectTriangle(kr,jr,Ar,!1,Cr),o===null))return;let s=e.ray.origin.distanceTo(Cr);s<e.near||s>e.far||t.push({distance:s,point:Cr.clone(),uv:Fn.getInterpolation(Cr,kr,Ar,jr,Mr,Nr,Pr,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ir(e,t,n,r,i,a){Er.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Dr.copy(Er):(Dr.x=a*Er.x-i*Er.y,Dr.y=i*Er.x+a*Er.y),e.copy(t),e.x+=Dr.x,e.y+=Dr.y,e.applyMatrix4(Or)}var Lr=new B,Rr=new B,zr=new B,Br=new B,Vr=new B,Hr=new B,Ur=new B,Wr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rr.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Rr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Br.dot(this.direction),s=-Br.dot(zr),c=Br.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rr).addScaledVector(zr,d),f}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);let n=Lr.dot(this.direction),r=Lr.dot(Lr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,n,r,i){Vr.subVectors(t,e),Hr.subVectors(n,e),Ur.crossVectors(Vr,Hr);let a=this.direction.dot(Ur),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Br.subVectors(this.origin,e);let s=o*this.direction.dot(Hr.crossVectors(Br,Hr));if(s<0)return null;let c=o*this.direction.dot(Vr.cross(Br));if(c<0||s+c>a)return null;let l=-o*Br.dot(Ur);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gr=class extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kr=new Rt,qr=new Wr,Jr=new sr,Yr=new B,Xr=new B,Zr=new B,Qr=new B,$r=new B,ei=new B,ti=new B,ni=new B,W=class extends fn{constructor(e=new hr,t=new Gr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ei.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&($r.fromBufferAttribute(s,e),a?ei.addScaledVector($r,r):ei.addScaledVector($r.sub(t),r))}t.add(ei)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),qr.copy(e.ray).recast(e.near),!(Jr.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Jr,Yr)===null||qr.origin.distanceToSquared(Yr)>(e.far-e.near)**2))&&(Kr.copy(i).invert(),qr.copy(e.ray).applyMatrix4(Kr),!(n.boundingBox!==null&&qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ii(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ii(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ii(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ii(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ni.copy(s),ni.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ni);return l<n.near||l>n.far?null:{distance:l,point:ni.clone(),object:e}}function ii(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Xr),e.getVertexPosition(c,Zr),e.getVertexPosition(l,Qr);let u=ri(e,t,n,r,Xr,Zr,Qr,ti);if(u){let e=new B;Fn.getBarycoord(ti,Xr,Zr,Qr,e),i&&(u.uv=Fn.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=Fn.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=Fn.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};Fn.getNormal(Xr,Zr,Qr,t.normal),u.face=t,u.barycoord=e}return u}var ai=class extends Mt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oi=class extends er{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},si=new Rt,ci=new Rt,li=[],ui=new In,di=new Rt,fi=new W,pi=new sr,mi=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,di)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),ui.copy(e.boundingBox).applyMatrix4(si),this.boundingBox.union(ui)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),pi.copy(e.boundingSphere).applyMatrix4(si),this.boundingSphere.union(pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fi.geometry=this.geometry,fi.material=this.material,fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pi.copy(this.boundingSphere),pi.applyMatrix4(n),e.ray.intersectsSphere(pi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,si),ci.multiplyMatrices(n,si),fi.matrixWorld=ci,fi.raycast(e,li);for(let e=0,n=li.length;e<n;e++){let n=li[e];n.instanceId=i,n.object=this,t.push(n)}li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(r*this.count),r,this.count,O,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hi=new B,gi=new B,_i=new V,vi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hi.subVectors(n,t).cross(gi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(hi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_i.getNormalMatrix(e),r=this.coplanarPoint(hi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new sr,bi=new z(.5,.5),xi=new B,Si=class{constructor(e=new vi,t=new vi,n=new vi,r=new vi,i=new vi,a=new vi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476+bi.distanceTo(e.center),yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xi.x=r.normal.x>0?e.max.x:e.min.x,xi.y=r.normal.y>0?e.max.y:e.min.y,xi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ci=class extends Mt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wi=class extends Mt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ti=class extends Mt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ot(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ei=class extends Ti{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Di=class extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oi=class e extends hr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new rr(c,3)),this.setAttribute(`normal`,new rr(l,3)),this.setAttribute(`uv`,new rr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ki=class e extends hr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new rr(a,3)),this.setAttribute(`normal`,new rr(o,3)),this.setAttribute(`uv`,new rr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ai=class e extends hr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new rr(u,3)),this.setAttribute(`normal`,new rr(d,3)),this.setAttribute(`uv`,new rr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ji=class e extends Ai{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mi=class e extends hr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new rr(p,3)),this.setAttribute(`normal`,new rr(m,3)),this.setAttribute(`uv`,new rr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ni=class e extends hr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new B,p=new z;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new rr(s,3)),this.setAttribute(`normal`,new rr(c,3)),this.setAttribute(`uv`,new rr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Pi=class e extends hr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new rr(p,3)),this.setAttribute(`normal`,new rr(m,3)),this.setAttribute(`uv`,new rr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Fi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Li(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Li(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Ii(e){let t={};for(let n=0;n<e.length;n++){let r=Fi(e[n]);for(let e in r)t[e]=r[e]}return t}function Li(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ri(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function zi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:St.workingColorSpace}var Bi={clone:Fi,merge:Ii},Vi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ui=class extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vi,this.fragmentShader=Hi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Ri(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Nt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Rt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wi=class extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},G=class extends br{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gi=class extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ve,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ki=class extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Ji=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Yi=class extends Ji{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case F:i=e,o=2*t-n;break;case Be:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case F:a=e,s=2*n-t;break;case Be:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Xi=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Zi=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qi=class extends Ji{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},$i=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=qi(t,this.TimeBufferType),this.values=qi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qi(e.times,Array),values:qi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ie:t=this.InterpolantFactoryMethodDiscrete;break;case Le:t=this.InterpolantFactoryMethodLinear;break;case Re:t=this.InterpolantFactoryMethodSmooth;break;case P:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ie;case this.InterpolantFactoryMethodLinear:return Le;case this.InterpolantFactoryMethodSmooth:return Re;case this.InterpolantFactoryMethodBezier:return P}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Re,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};$i.prototype.ValueTypeName=``,$i.prototype.TimeBufferType=Float32Array,$i.prototype.ValueBufferType=Float32Array,$i.prototype.DefaultInterpolation=Le;var ea=class extends $i{constructor(e,t,n){super(e,t,n)}};ea.prototype.ValueTypeName=`bool`,ea.prototype.ValueBufferType=Array,ea.prototype.DefaultInterpolation=Ie,ea.prototype.InterpolantFactoryMethodLinear=void 0,ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}};ta.prototype.ValueTypeName=`color`;var na=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}};na.prototype.ValueTypeName=`number`;var ra=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ht.slerpFlat(i,0,a,c-o,a,c,s);return i}},ia=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}};ia.prototype.ValueTypeName=`quaternion`,ia.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends $i{constructor(e,t,n){super(e,t,n)}};aa.prototype.ValueTypeName=`string`,aa.prototype.ValueBufferType=Array,aa.prototype.DefaultInterpolation=Ie,aa.prototype.InterpolantFactoryMethodLinear=void 0,aa.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}};oa.prototype.ValueTypeName=`vector`;var sa=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ca=class{constructor(e){this.manager=e===void 0?sa:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ca.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var la=class extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ua=class extends la{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},da=new Rt,fa=new B,pa=new B,ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fa.setFromMatrixPosition(e.matrixWorld),t.position.copy(fa),pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pa),t.updateMatrixWorld(),da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ha=new B,ga=new ht,_a=new B,va=class extends fn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ha,ga,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ga,_a.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ha,ga,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ga,_a.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ya=new B,ba=new z,xa=new z,Sa=class extends va{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ya.x,ya.y).multiplyScalar(-e/ya.z),ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ya.x,ya.y).multiplyScalar(-e/ya.z)}getViewSize(e,t){return this.getViewBounds(e,ba,xa),t.subVectors(xa,ba)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ca=class extends ma{constructor(){super(new Sa(90,1,.5,500)),this.isPointLightShadow=!0}},wa=class extends la{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ca}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ta=class extends va{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ea=class extends ma{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Da=class extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Ea}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Oa=class extends la{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},ka=-90,Aa=1,ja=class extends fn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Sa(ka,Aa,e,t);r.layers=this.layers,this.add(r);let i=new Sa(ka,Aa,e,t);i.layers=this.layers,this.add(i);let a=new Sa(ka,Aa,e,t);a.layers=this.layers,this.add(a);let o=new Sa(ka,Aa,e,t);o.layers=this.layers,this.add(o);let s=new Sa(ka,Aa,e,t);s.layers=this.layers,this.add(s);let c=new Sa(ka,Aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ma=class extends Sa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Na=`\\[\\]\\.:\\/`,Pa=RegExp(`[\\[\\]\\.:\\/]`,`g`),Fa=`[^\\[\\]\\.:\\/]`,Ia=`[^`+Na.replace(`\\.`,``)+`]`,La=`((?:WC+[\\/:])*)`.replace(`WC`,Fa),Ra=`(WCOD+)?`.replace(`WCOD`,Ia),za=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Fa),Ba=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Fa),Va=RegExp(`^`+La+Ra+za+Ba+`$`),Ha=[`material`,`materials`,`bones`,`map`],Ua=class{constructor(e,t,n){let r=n||Wa.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wa=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Pa,``)}static parseTrackName(e){let t=Va.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ha.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wa.Composite=Ua,Wa.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Wa.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Wa.prototype.GetterByBindingType=[Wa.prototype._getValue_direct,Wa.prototype._getValue_array,Wa.prototype._getValue_arrayElement,Wa.prototype._getValue_toArray],Wa.prototype.SetterByBindingTypeAndVersioning=[[Wa.prototype._setValue_direct,Wa.prototype._setValue_direct_setNeedsUpdate,Wa.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wa.prototype._setValue_array,Wa.prototype._setValue_array_setNeedsUpdate,Wa.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wa.prototype._setValue_arrayElement,Wa.prototype._setValue_arrayElement_setNeedsUpdate,Wa.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wa.prototype._setValue_fromArray,Wa.prototype._setValue_fromArray_setNeedsUpdate,Wa.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ga=new Rt,Ka=class{constructor(e,t,n=0,r=1/0){this.ray=new Wr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Yt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):L(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ga.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ga),this}intersectObject(e,t=!0,n=[]){return Ja(e,this,n,t),n.sort(qa),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ja(e[r],this,n,t);return n.sort(qa),n}};function qa(e,t){return e.distance-t.distance}function Ja(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ja(r[e],t,n,!0)}}var Ya=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,I(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Xa(e,t,n,r){let i=Za(r);switch(n){case w:return e*t;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case A:return e*t*4/i.components*i.byteLength;case re:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case j:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ke:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ae:case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fe:case N:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Za(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Qa(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function $a(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},q={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},eo={basic:{uniforms:Ii([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:Ii([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:Ii([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:Ii([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:Ii([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new U(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:Ii([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:Ii([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:Ii([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:Ii([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:Ii([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:Ii([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:Ii([q.common,q.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:Ii([q.lights,q.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};eo.physical={uniforms:Ii([eo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var to={r:0,b:0,g:0},no=new Rt,ro=new V;ro.set(-1,0,0,0,1,0,0,0,1);function io(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new Oi(1,1,1),new Ui({name:`BackgroundCubeMaterial`,uniforms:Fi(eo.backgroundCube.uniforms),vertexShader:eo.backgroundCube.vertexShader,fragmentShader:eo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(no.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ro),l.material.toneMapped=St.getTransfer(i.colorSpace)!==Ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new Mi(2,2),new Ui({name:`BackgroundMaterial`,uniforms:Fi(eo.background.uniforms),vertexShader:eo.background.vertexShader,fragmentShader:eo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=St.getTransfer(i.colorSpace)!==Ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(to,zi(e)),n.buffers.color.setClear(to.r,to.g,to.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ao(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function oo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function so(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function co(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vi,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var lo=4,uo=[.125,.215,.35,.446,.526,.582],fo=20,po=256,mo=new Ta,ho=new U,go=null,_o=0,vo=0,yo=!1,bo=new B,xo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=bo}=i;go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,vo),this._renderer.xr.enabled=yo,e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:Ue,depthBuffer:!1},r=Co(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=So(r)),this._blurMaterial=Eo(r,e,t),this._ggxMaterial=To(r,e,t)}return r}_compileMaterial(e){let t=new W(new hr,e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,r,i){let a=new Sa(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ho),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Oi,new Gr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ho),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;wo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;wo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-lo?n-d+lo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,wo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,mo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,wo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,mo)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&L(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*fo-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):fo;m>fo&&I(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fo}`);let h=[],g=0;for(let e=0;e<fo;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];wo(t,3*v*(r>_-lo?r-_+lo:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,mo)}};function So(e){let t=[],n=[],r=[],i=e,a=e-lo+1+uo.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-lo?s=uo[o-e+lo-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new hr;h.setAttribute(`position`,new er(f,3)),h.setAttribute(`uv`,new er(p,2)),h.setAttribute(`faceIndex`,new er(m,1)),r.push(new W(h,null)),i>lo&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Co(e,t,n){let r=new Ft(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function wo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function To(e,t,n){return new Ui({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:po,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Eo(e,t,n){let r=new Float32Array(fo),i=new B(0,1,0);return new Ui({name:`SphericalGaussianBlur`,defines:{n:fo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ko(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Do(){return new Ui({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Oo(){return new Ui({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ko(){return`

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
	`}var Ao=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ci(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Oi(5,5,5),i=new Ui({name:`CubemapFromEquirect`,uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new ja(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function jo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Ao(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new xo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new xo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Mo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&rt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function No(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?nr:tr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Po(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Io(e,t,n){let r=new WeakMap,i=new Nt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new It(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Lo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ro={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function zo(e,t,n,r,i,a){let o=new Ft(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new Ti(t,n):void 0}),s=new Ft(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new hr;c.setAttribute(`position`,new rr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new rr([0,2,0,0,2,0],2));let l=new Wi({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new W(c,l),d=new Ta(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,y=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},St.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Ro[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Bo=new Mt,Vo=new Ti(1,1),Ho=new It,Uo=new Lt,Wo=new Ci,Go=[],Ko=[],qo=new Float32Array(16),Jo=new Float32Array(9),Yo=new Float32Array(4);function Xo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Go[i];if(a===void 0&&(a=new Float32Array(i),Go[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Zo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Qo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function $o(e,t){let n=Ko[t];n===void 0&&(n=new Int32Array(t),Ko[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function es(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zo(n,t))return;e.uniform2fv(this.addr,t),Qo(n,t)}}function ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Zo(n,t))return;e.uniform3fv(this.addr,t),Qo(n,t)}}function rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zo(n,t))return;e.uniform4fv(this.addr,t),Qo(n,t)}}function is(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qo(n,t)}else{if(Zo(n,r))return;Yo.set(r),e.uniformMatrix2fv(this.addr,!1,Yo),Qo(n,r)}}function as(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qo(n,t)}else{if(Zo(n,r))return;Jo.set(r),e.uniformMatrix3fv(this.addr,!1,Jo),Qo(n,r)}}function os(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qo(n,t)}else{if(Zo(n,r))return;qo.set(r),e.uniformMatrix4fv(this.addr,!1,qo),Qo(n,r)}}function ss(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zo(n,t))return;e.uniform2iv(this.addr,t),Qo(n,t)}}function ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zo(n,t))return;e.uniform3iv(this.addr,t),Qo(n,t)}}function us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zo(n,t))return;e.uniform4iv(this.addr,t),Qo(n,t)}}function ds(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zo(n,t))return;e.uniform2uiv(this.addr,t),Qo(n,t)}}function ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zo(n,t))return;e.uniform3uiv(this.addr,t),Qo(n,t)}}function ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zo(n,t))return;e.uniform4uiv(this.addr,t),Qo(n,t)}}function hs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Vo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Vo):a=Bo,n.setTexture2D(t||a,i)}function gs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Uo,i)}function _s(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Wo,i)}function vs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ho,i)}function ys(e){switch(e){case 5126:return es;case 35664:return ts;case 35665:return ns;case 35666:return rs;case 35674:return is;case 35675:return as;case 35676:return os;case 5124:case 35670:return ss;case 35667:case 35671:return cs;case 35668:case 35672:return ls;case 35669:case 35673:return us;case 5125:return ds;case 36294:return fs;case 36295:return ps;case 36296:return ms;case 35678:case 36198:case 36298:case 36306:case 35682:return hs;case 35679:case 36299:case 36307:return gs;case 35680:case 36300:case 36308:case 36293:return _s;case 36289:case 36303:case 36311:case 36292:return vs}}function bs(e,t){e.uniform1fv(this.addr,t)}function xs(e,t){let n=Xo(t,this.size,2);e.uniform2fv(this.addr,n)}function Ss(e,t){let n=Xo(t,this.size,3);e.uniform3fv(this.addr,n)}function Cs(e,t){let n=Xo(t,this.size,4);e.uniform4fv(this.addr,n)}function ws(e,t){let n=Xo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ts(e,t){let n=Xo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Es(e,t){let n=Xo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ds(e,t){e.uniform1iv(this.addr,t)}function Os(e,t){e.uniform2iv(this.addr,t)}function ks(e,t){e.uniform3iv(this.addr,t)}function As(e,t){e.uniform4iv(this.addr,t)}function js(e,t){e.uniform1uiv(this.addr,t)}function Ms(e,t){e.uniform2uiv(this.addr,t)}function Ns(e,t){e.uniform3uiv(this.addr,t)}function Ps(e,t){e.uniform4uiv(this.addr,t)}function Fs(e,t,n){let r=this.cache,i=t.length,a=$o(n,i);Zo(r,a)||(e.uniform1iv(this.addr,a),Qo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Vo:Bo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Is(e,t,n){let r=this.cache,i=t.length,a=$o(n,i);Zo(r,a)||(e.uniform1iv(this.addr,a),Qo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Uo,a[e])}function Ls(e,t,n){let r=this.cache,i=t.length,a=$o(n,i);Zo(r,a)||(e.uniform1iv(this.addr,a),Qo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Wo,a[e])}function Rs(e,t,n){let r=this.cache,i=t.length,a=$o(n,i);Zo(r,a)||(e.uniform1iv(this.addr,a),Qo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ho,a[e])}function zs(e){switch(e){case 5126:return bs;case 35664:return xs;case 35665:return Ss;case 35666:return Cs;case 35674:return ws;case 35675:return Ts;case 35676:return Es;case 5124:case 35670:return Ds;case 35667:case 35671:return Os;case 35668:case 35672:return ks;case 35669:case 35673:return As;case 5125:return js;case 36294:return Ms;case 36295:return Ns;case 36296:return Ps;case 35678:case 36198:case 36298:case 36306:case 35682:return Fs;case 35679:case 36299:case 36307:return Is;case 35680:case 36300:case 36308:case 36293:return Ls;case 36289:case 36303:case 36311:case 36292:return Rs}}var Bs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ys(t.type)}},Vs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zs(t.type)}},Hs=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Us=/(\w+)(\])?(\[|\.)?/g;function Ws(e,t){e.seq.push(t),e.map[t.id]=t}function Gs(e,t,n){let r=e.name,i=r.length;for(Us.lastIndex=0;;){let a=Us.exec(r),o=Us.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ws(n,l===void 0?new Bs(s,e,t):new Vs(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Hs(s),Ws(n,e)),n=e}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Gs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function qs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Js=37297,Ys=0;function Xs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Zs=new V;function Qs(e){St._getMatrix(Zs,St.workingColorSpace,e);let t=`mat3( ${Zs.elements.map(e=>e.toFixed(4))} )`;switch(St.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function $s(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Xs(e.getShaderSource(t),r)}else return i}function ec(e,t){let n=Qs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var tc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function nc(e,t){let n=tc[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var rc=new B;function ic(){return St.getLuminanceCoefficients(rc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${rc.x.toFixed(4)}, ${rc.y.toFixed(4)}, ${rc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ac(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(cc).join(`
`)}function oc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function sc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function cc(e){return e!==``}function lc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dc=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(e){return e.replace(dc,mc)}var pc=new Map;function mc(e,t){let n=K[t];if(n===void 0){let e=pc.get(t);if(e!==void 0)n=K[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return fc(n)}var hc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(e){return e.replace(hc,_c)}function _c(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function vc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var yc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function bc(e){return yc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var xc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Sc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:xc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Cc={302:`ENVMAP_MODE_REFRACTION`};function wc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Cc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Tc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ec(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Tc[e.combine]||`ENVMAP_BLENDING_NONE`}function Dc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Oc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=bc(n),l=Sc(n),u=wc(n),d=Ec(n),f=Dc(n),p=ac(n),m=oc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(cc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(cc).join(`
`),_.length>0&&(_+=`
`)):(g=[vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(cc).join(`
`),_=[vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:nc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,ec(`linearToOutputTexel`,n.outputColorSpace),ic(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(cc).join(`
`)),o=fc(o),o=lc(o,n),o=uc(o,n),s=fc(s),s=lc(s,n),s=uc(s,n),o=gc(o),s=gc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=qs(i,i.VERTEX_SHADER,y),S=qs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=$s(i,x,`vertex`),n=$s(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ks(i,h),T=sc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Js)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ys++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var kc=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jc(e),t.set(e,n)),n}},jc=class{constructor(e){this.id=kc++,this.code=e,this.usedTimes=0}};function Mc(e){return e===1030||e===37490||e===36285}function Nc(e,t,n,r,i,a){let o=new Yt,s=new Ac,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=eo[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),A=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=pe&&!!i.anisotropyMap,be=me&&!!i.clearcoatMap,xe=me&&!!i.clearcoatNormalMap,Se=me&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,Fe=!!i.alphaHash,N=!!i.extensions,Ie=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:A,instancingColor:A&&h.instanceColor!==null,instancingMorph:A&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Mc(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:ye,clearcoat:me,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:Fe,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&St.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&St.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:N&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(N&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=eo[t];n=Bi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Oc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Pc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Fc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ic(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Lc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Fc),r.length>1&&r.sort(t||Ic),i.length>1&&i.sort(t||Ic),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Rc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Lc,e.set(t,[i])):n>=r.length?(i=new Lc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function zc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new B,color:new U};break;case`SpotLight`:n={position:new B,direction:new B,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function Bc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Vc=0;function Hc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Uc(e){let t=new zc,n=Bc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new Rt,o=new Rt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Hc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Vc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Wc(e){let t=new Uc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Gc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Wc(e),t.set(n,[a])):r>=i.length?(a=new Wc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Kc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qc=`uniform sampler2D shadow_pass;
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
}`,Jc=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Yc=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Xc=new Rt,Zc=new B,Qc=new B;function $c(e,t,n){let r=new Si,i=new z,o=new z,s=new Nt,l=new Gi,u=new Ki,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Kc,fragmentShader:qc}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new hr;y.setAttribute(`position`,new er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new W(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Ft(i.x,i.y,{format:te,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ti(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new Ao(i.x),p.map.depthTexture=new Ei(i.x,g)):(p.map=new Ft(i.x,i.y),p.map.depthTexture=new Ti(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Zc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Zc),Qc.copy(e.position),Qc.add(Jc[t]),e.up.copy(Yc[t]),e.lookAt(Qc),e.updateMatrixWorld(),n.makeTranslation(-Zc.x,-Zc.y,-Zc.z),Xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Xc,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ft(i.x,i.y,{format:te,type:v})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function el(e,t){function n(){let t=!1,n=new Nt,r=null,i=new Nt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),A=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),A=re>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Nt().fromArray(oe),le=new Nt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Se(t){t!==O&&(A&&e.lineWidth(t),O=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Ve}}function tl(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Qe(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?We:St.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ae(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,n){let r=f.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Se(r,t,n);return}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function pe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Se(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){Ce(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let he={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ge={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,A));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=be(r.start,n.width,4),c=be(t.start,n.width,4);r.start<=i+1&&s===c&&be(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Se(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ye(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=St.getPrimaries(St.workingColorSpace),r=n.colorSpace===``?null:St.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Ie(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=k(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ve(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ne(n,t);if(n.isDepthTexture)u=te(n.format===ee,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&xe(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023)if(c!==null)if(g){if(v)if(n.layerUpdates.size>0){let t=Xa(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0);else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data)}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}else if(n.isDataArrayTexture)if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v)if(n.layerUpdates.size>0){let r=Xa(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_)if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Le(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Le(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&D(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ce(t,n,r){if(n.image.length!==6)return;let i=ye(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=St.getPrimaries(St.workingColorSpace),s=n.colorSpace===``?null:St.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Ie(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ne(n,h);ve(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Le(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&D(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function we(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Pe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,A)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else M(n.depthTexture,0);let o=a.__webglTexture,s=Pe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer)if(r)for(let e=0;e<6;e++)Ee(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(n.__webglFramebuffer[0],t,0):Ee(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Te(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){let i=f.get(t);n!==void 0&&we(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&De(t)}function ke(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,re);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Fe(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)we(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&D(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ve(s,i),we(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&D(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ve(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else we(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&D(a),d.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),D(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(je.push(o),Me.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(St.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function nl(e,t){function n(n,r=``){let i,a=St.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var rl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,il=`
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

}`,al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Di(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ui({vertexShader:rl,fragmentShader:il,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ol=class extends ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new al,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new z,O=null,k=new Sa;k.viewport=new Nt;let te=new Sa;te.viewport=new Nt;let ne=[k,te],A=new Ma,re=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new mn,C[e]=t),t.getHandSpace()};function j(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}re=null,ie=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?ee:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ft(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new Ti(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ft(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let se=new B,ce=new B;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=te.near=k.near=t,A.far=te.far=k.far=n,(re!==A.near||ie!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),re=A.near,ie=A.far),A.layers.mask=e.layers.mask|6,k.layers.mask=A.layers.mask&-5,te.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,k,te):A.projectionMatrix.copy(k.projectionMatrix),de(e,A,i)};function de(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let M=null;function fe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new Sa,o.layers.enable(n),o.viewport=new Nt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Di,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}M&&M(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let pe=new Qa;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){M=e},this.dispose=function(){}}},sl=new Rt,cl=new V;cl.set(-1,0,0,0,1,0,0,0,1);function ll(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,zi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(sl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(cl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ul(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var dl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fl=null;function pl(){return fl===null&&(fl=new ai(dl,16,16,te,v),fl.name=`DFG_LUT`,fl.minFilter=c,fl.magFilter=c,fl.wrapS=r,fl.wrapT=r,fl.generateMipmaps=!1,fl.needsUpdate=!0),fl}var ml=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([A,ne,k]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D=new B,ee=null,O=null,te=[],re=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=He;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Nt,he=new Nt,ge=null,_e=new U(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Nt(0,0,ye,be),Te=new Nt(0,0,ye,be),Ee=!1,De=new Si,Oe=!1,ke=!1,Ae=new Rt,je=new B,Me=new Nt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,R,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw L(`WebGLRenderer: `+e.message),e}let Le,Re,P,ze,F,Be,Ve,Ue,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,nt,rt,at,ot,st,ct;function lt(){Le=new Mo(N),Le.init(),ot=new nl(N,Le),Re=new so(N,Le,e,ot),P=new el(N,Le),Re.reversedDepthBuffer&&p&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new Fo(N),F=new Pc,Be=new tl(N,Le,P,F,Re,ot,ze),Ve=new jo(j),Ue=new $a(N),st=new ao(N,Ue),We=new No(N,Ue,ze,st),Ge=new Lo(N,We,Ue,st,ze),nt=new Io(N,Re,Be),Ze=new co(F),Ke=new Nc(j,Ve,Le,Re,st,Ze),qe=new ll(j,F),Je=new Rc,Xe=new Gc(Le),et=new io(j,Ve,P,Ge,_,s),Qe=new $c(j,Ge,Re),ct=new ul(N,ze,Re,P),rt=new oo(N,Le,ze),at=new Po(N,Le,ze),ze.programs=Ke.programs,j.capabilities=Re,j.extensions=Le,j.properties=F,j.renderLists=Je,j.shadowMap=Qe,j.state=P,j.info=ze}lt(),S!==1009&&(ie=new zo(S,t.width,t.height,o,r,i));let ut=new ol(j,N);this.xr=ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){if(ut.isPresenting){I(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,R,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),et.dispose(),Je.dispose(),Xe.dispose(),F.dispose(),Ve.dispose(),Ge.dispose(),st.dispose(),ct.dispose(),Ke.dispose(),ut.dispose(),ut.removeEventListener(`sessionstart`,V),ut.removeEventListener(`sessionend`,vt),yt.stop()};function R(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),ae=!0}function dt(){tt(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;lt(),ze.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function ft(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){z(e),F.remove(e)}function z(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh)if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,n),e.side=0,e.needsUpdate=!0,Et(e,t,n),e.side=2):Et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),O=Xe.get(n),O.init(t),re.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ht(a,n,e),r.add(a)}else ht(t,n,e),r.add(t)}),O=re.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){F.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function _t(e){gt&&gt(e)}function V(){yt.stop()}function vt(){yt.start()}let yt=new Qa;yt.setAnimationLoop(_t),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){gt=e,ut.setAnimationLoop(e),e===null?yt.stop():yt.start()},ut.addEventListener(`sessionstart`,V),ut.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=ut.enabled===!0&&ut.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(t),t=ut.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),O=Xe.get(e,re.length),O.init(t),O.state.textureUnits=Be.getTextureUnits(),re.push(O),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,Ye,t.reversedDepth),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),ee=Je.get(e,te.length),ee.init(),te.push(ee),ut.enabled===!0&&ut.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,j.sortObjects)}bt(e,t,0,j.sortObjects),ee.finish(),j.sortObjects===!0&&ee.sort(Se,Ce,t.reversedDepth),Pe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Pe&&et.addToRenderList(ee,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ze.beginShadows();let i=O.state.shadowsArray;if(Qe.render(i,e,t),Oe===!0&&Ze.endShadows(),(r&&ie.hasRenderPass())===!1){let n=ee.opaque,r=ee.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Pe&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(ee,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Pe&&et.render(e),xt(ee,e,t)}M!==null&&de===0&&(Be.updateMultisampleRenderTarget(M),Be.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),st.resetDefaultState(),fe=-1,pe=null,re.pop(),re.length>0?(O=re[re.length-1],Be.setTextureUnits(O.state.textureUnits),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,te.pop(),ee=te.length>0?te[te.length-1]:null,oe!==null&&oe.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||De.intersectsSprite(e)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let t=Ge.update(e),i=e.material;i.visible&&ee.push(e,t,i,n,Me.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||De.intersectsObject(e))){let t=Ge.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Me.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&ee.push(e,t,s,n,Me.z,o)}}else i.visible&&ee.push(e,t,i,n,Me.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new Ft(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&et.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,r),wt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ke.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),Ot(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ks.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:St.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=O.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Et(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=kt(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,Be),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,Be),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,Be));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&nt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=pl()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&qe.refreshFogUniforms(E,a),qe.refreshMaterialUniforms(E,r,xe,be,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Ks.upload(N,Dt(v),E,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ks.upload(N,Dt(v),E,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ct.update(n,x),ct.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}else if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(c)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Re.textureTypeReadable(l)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Re.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0);let f=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,f);let p=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await it(N,p,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.deleteBuffer(d),N.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}},hl=1.15;function gl(e){e.outputColorSpace=He,e.toneMapping=4,e.toneMappingExposure=hl}var _l=new B;function vl(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;_l.copy(t),_l[r]=0,_l.normalize();let l=.5*o/(o+s),u=1-_l.angleTo(e)/c;return Math.sign(_l[n])===1?u*l:s/(o+s)+l+l*(1-u)}var yl=class e extends Oi{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new B,c=new B,l=new B(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new B,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=vl(m,c,`z`,`y`,i,n),f[a+1]=1-vl(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-vl(m,c,`z`,`y`,i,n),f[a+1]=1-vl(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-vl(m,c,`x`,`z`,i,e),f[a+1]=vl(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-vl(m,c,`x`,`z`,i,e),f[a+1]=1-vl(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-vl(m,c,`x`,`y`,i,e),f[a+1]=1-vl(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=vl(m,c,`x`,`y`,i,e),f[a+1]=1-vl(m,c,`y`,`x`,i,t);break}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},bl=.07,xl=new yl(1,1,1,1,bl);function Sl(e=1,t=1,n=1,r=bl){let i=[e/2,t/2,n/2],a=Math.min(r,i[0],i[1],i[2]),o=[],s=[],c=new Map,l=(e,t,n,r)=>{let l=`${e},${t},${n},${r}`,u=c.get(l);if(u===void 0){u=o.length/3;let d=[e,t,n];for(let e=0;e<3;e++)o.push(d[e]*(e===r?i[e]:i[e]-a));let f=[0,0,0];f[r]=d[r],s.push(...f),c.set(l,u)}return u},u=[],d=(e,t,n,r)=>u.push(e,t,n,e,n,r);for(let e=0;e<3;e++){let t=(e+1)%3,n=(e+2)%3;for(let r of[1,-1]){let i=(i,a)=>{let o=[0,0,0];return o[e]=r,o[t]=i,o[n]=a,l(o[0],o[1],o[2],e)};d(i(-1,-1),i(1,-1),i(1,1),i(-1,1))}}for(let e=0;e<3;e++)for(let t=e+1;t<3;t++){let n=3-e-t;for(let r of[1,-1])for(let i of[1,-1]){let a=a=>{let o=[0,0,0];return o[e]=r,o[t]=i,o[n]=a,o},o=a(-1),s=a(1);d(l(...o,e),l(...s,e),l(...s,t),l(...o,t))}}for(let e of[1,-1])for(let t of[1,-1])for(let n of[1,-1])u.push(l(e,t,n,0),l(e,t,n,1),l(e,t,n,2));let f=new B,p=new B,m=new B;for(let e=0;e<u.length;e+=3){let[t,n,r]=[u[e],u[e+1],u[e+2]];f.fromArray(o,t*3),p.fromArray(o,n*3).sub(f),m.fromArray(o,r*3).sub(f),p.cross(m),f.set(s[t*3]+s[n*3]+s[r*3],s[t*3+1]+s[n*3+1]+s[r*3+1],s[t*3+2]+s[n*3+2]+s[r*3+2]),p.dot(f)<0&&(u[e+1]=r,u[e+2]=n)}let h=new hr;return h.setAttribute(`position`,new er(new Float32Array(o),3)),h.setAttribute(`normal`,new er(new Float32Array(s),3)),h.setIndex(u),h}var Cl=Sl(),wl=()=>Sl(),Tl=[{top:[9425759,8636500],dirt:[10254152,9399103],plat:[16238920,15381806],hill:7323490,hill2:9426058,sky:8900331,fog:11132403,skyTop:4891622,skyBot:11461880,hemiSky:16772815,hemiGround:6460572,sunTint:16768166,sun:16772254,cloud:16777215},{top:[15316067,14195784],dirt:[11892527,10906153],plat:[9067054,8146727],hill:14263388,hill2:15649676,sky:9426152,fog:15916734,skyTop:7322079,skyBot:16767904,hemiSky:16771264,hemiGround:10127008,sunTint:16766100,sun:16765562,cloud:16774109},{top:[16054524,15134455],dirt:[12111584,11190998],plat:[10470632,9615581],hill:13623536,hill2:15266554,sky:11061480,fog:14412279,skyTop:8368866,skyBot:15135484,hemiSky:16707804,hemiGround:9415638,sunTint:16772300,sun:16774872,cloud:16777215},{top:[8747176,8022934],dirt:[6184556,5526623],plat:[10448852,9593799],hill:4536926,hill2:5786229,sky:2366771,fog:3352906,skyTop:854554,skyBot:4535651,hemiSky:9209544,hemiGround:3029606,sunTint:12174591,sun:15265023,cloud:6971528,night:!0},{top:[10215546,9361518],dirt:[10254152,9399103],plat:[16766282,16107838],hill:8703333,hill2:12445951,sky:7324671,fog:12182271,skyTop:3117030,skyBot:12576511,hemiSky:16773328,hemiGround:6989e3,sunTint:16769710,sun:16773288,cloud:16777215}],El=new U,Dl={},Ol=(e,t,n,r)=>(El.setHex(e).getHSL(Dl),El.setHSL(Dl.h,Math.min(1,Dl.s*t+n),Dl.l*r),El.getHex()),kl=e=>Ol(e,1.3,.04,.96),Al=e=>Ol(e,1.45,.05,.88);for(let e of Tl){for(let t of[`top`,`dirt`,`plat`])e[t]=e[t].map(kl);for(let t of[`hill`,`hill2`,`sun`,`cloud`])e[t]=kl(e[t]);for(let t of[`sky`,`fog`,`skyTop`,`skyBot`])e[t]=Al(e[t])}function jl(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ml({seed:e,wordCount:t,theme:n,secret:r=!1,hasKey:i=!1}){let a=jl(e),o=[],s=[],c=[],l=[],u=[],d=0,f=null,p=()=>o.length,m=e=>{for(let t=0;t<e;t++)o.push(d)},h=(e,t,n,r=1.4)=>{for(let i=0;i<n;i++)c.push({x:e+i*r,y:t})},g=(e,t,n)=>{for(let r=0;r<5;r++){let i=r/4;c.push({x:e+i*t,y:n+Math.sin(i*Math.PI)*1.2})}};m(8),h(4,d+.8,3);let _=i?t>>1:-1,v=r?t>>1:-1,y=e%2;for(let e=0;e<t;e++){let t=14+(a()*5|0)+(r?4:0),n=p(),i=0;for(;i<t;){let e=Math.min(t-i,5+(a()*6|0));if(m(e),i+=e,i<t){let e=[1,1,2,-1,-2,0][a()*6|0];d=Math.max(0,Math.min(4,d+e))}a()<(r?.6:.35)&&h(p()-e+1,d+.8,Math.min(4,e-1))}if(a()<(r?.95:.75)&&t>11){let e=3+(a()*2|0),r=[];for(let i=n+3;i<=n+t-e-3;i++){let t=!0;for(let n=i-1;n<=i+e;n++)if(o[n]!==o[i]){t=!1;break}t&&r.push(i)}if(r.length){let t=r[a()*r.length|0],n=o[t]+(a()<.35?2:3);s.push({x0:t,x1:t+e-1,y:n}),g(t-.5,e,n+1.1)}}if(l.length<6&&a()<.55&&t>10){let e=p()-7;l.push({x0:e,x1:e+4})}if(e===_){let e=p()+3;m(8),s.push({x0:e,x1:e+1,y:d+3}),f={x:e+.5,y:d+4.2}}if(e===v){let e=p();m(16),s.push({x0:e+3,x1:e+6,y:d+3}),s.push({x0:e+9,x1:e+12,y:d+3});for(let t=e+2;t<=e+13;t+=1.5)c.push({x:t,y:d+1}),c.push({x:t,y:d+2}),c.push({x:t,y:d+4.2})}let b=(e+y)%2==0?`blocks`:`doors`;if(b===`blocks`)u.push({type:b,x:p(),groundY:d}),m(36);else{let e=p();u.push({type:b,x:e,wallX:e+12,groundY:d}),s.push({x0:e+6,x1:e+11,y:d+2,thin:!0}),s.push({x0:e+9,x1:e+11,y:d+4,thin:!0}),m(19)}}let b=p()+5;m(28);let x=p()+5;m(12);let S=u.filter(e=>e.type===`doors`).map(e=>({a:e.x-6,b:e.wallX+6})),C=e=>S.every(t=>e.x1<t.a||e.x0>t.b),w=[];for(let e of l){let t=e;for(let e of S)if(!(t.x1<e.a||t.x0>e.b)){let n=t.x1-t.x0;t={x0:e.a-1-n,x1:e.a-1}}let n=Math.max(0,Math.min(p()-1,Math.round((t.x0+t.x1)/2))),r=o[n],i=n,a=n;for(;i>t.x0&&o[i-1]===r;)i--;for(;a<t.x1&&o[a+1]===r;)a++;t={x0:i,x1:a},t.x1-t.x0>=2&&t.x0>12&&C(t)&&w.every(e=>t.x1<e.x0-2||t.x0>e.x1+2)&&w.push(t)}return{groundY:o,platforms:s,coins:c,critters:w,events:u,key:f,starX:b,flagX:x,length:p(),theme:n,secret:r}}function Nl({seed:e,wordCount:t,theme:n}){let r=jl(e),i=[],a=[],o=[],s=0,c=()=>i.length,l=e=>{for(let t=0;t<e;t++)i.push(s)};l(14);for(let e=0;e<t;e++){e>0&&(s=Math.max(0,Math.min(2,s+[0,1,-1][r()*3|0])));let t=5+(r()*3|0);if(l(t),r()<.7)for(let e=0;e<4;e++)a.push({x:c()-t+1+e*1.3,y:s+.8});o.push({type:`blocks`,x:c(),groundY:s}),l(36)}let u=c()+4;l(8);let d=c()+5;return l(12),{groundY:i,platforms:[],coins:a,critters:[],events:o,key:null,starX:u,flagX:d,length:c(),theme:n,secret:!1,boss:!0}}var Pl=24e3,Fl=260,Il=6,Ll=xl;function Rl(e){let t=(e|0)*374761393+668265263;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var zl=[(e,t,n,r)=>{let i=r||Math.random,a=(i()-.5)*.1,o=i();o<.45?(e(t,n+.5,-3.5,.3,1,.3,16111480),e(t+.18,n+1.3,-3.5,.3,.8,.3,15716202),e(t-.1,n+2,-3.5,.3,.7,.3,16111480),e(t,n+2.8,-3.5,1.9,1,1.9,9063213,0,a),e(t+.6,n+3.4,-3.2,1,.8,1,9655087,0,a+.03),e(t-.55,n+3.5,-3.7,1.1,.9,1.1,8340263,0,a),e(t,n+4,-3.5,.9,.5,.9,13779498,0,a,0,!1),e(t+.2,n+4.3,-3.4,.3,.15,.3,16773836)):o<.75?(e(t,n+1.1,-3.5,1.2,2.2,1.2,15777888,0,a),e(t+.62,n+1.1,-3.5,.08,2.2,.9,14855501),e(t-.62,n+1.1,-3.5,.08,2.2,.9,14855501),e(t,n+2.22,-3.5,.7,.14,.7,10250798)):(e(t,n+.5,-3.3,1.3,1,1.3,4169274,0,a),e(t+.4,n+.95,-3.2,.5,.5,.5,14826286),e(t-.45,n+.7,-3.1,.45,.45,.45,15684419)),i()<.6&&(e(t+.9+i()*.6,n+.06,-3-i(),.2,.1,.2,16773836),e(t-1-i()*.5,n+.06,-3.4,.2,.1,.2,16246968))},(e,t,n,r)=>{let i=2+(r()*2|0);for(let r=0;r<i;r++)e(t+(r&1?.12:-.08),n+.3+r*.55,-3.5,2,.5,2,r&1?14523466:13601852);let a=n+.3+(i-1)*.55;e(t,a+.45,-3.5,.7,.35,.7,16769898),e(t+1,a-.2,-3.45,.16,.8,.16,9062938),r()<.6&&(e(t+2,n+.45,-4,.8,.9,.8,14826286),e(t+2,n+1,-4,.5,.25,.5,4169274)),r()<.5&&e(t-1.6,n+.12,-3.2,1.2,.18,.9,9062938)},(e,t,n)=>{e(t,n+.5,-3.5,1,1,1,16777215),e(t,n+1.35,-3.5,.75,.75,.75,16054524),e(t,n+1.98,-3.5,.55,.55,.55,16777215),e(t+1.8,n+.6,-4.2,.3,1.2,.3,8015658),e(t+1.8,n+1.5,-4.2,1.5,.7,1.5,3833173),e(t+1.8,n+2.15,-4.2,1,.6,1,4489052),e(t+1.8,n+2.7,-4.2,.6,.5,.6,14675708)},(e,t,n,r)=>{let i=[8319231,13663999,16747224];for(let a=0;a<3;a++){let o=i[r()*i.length|0];e(t+(a-1)*.7,n+.8+r()*.6,-3.5,.4,1.4+r()*1.2,.4,o,o)}e(t,n+.15,-3.5,1.6,.5,1.6,5526623)},(e,t,n,r)=>{let i=n+2.2+r()*1.5,a=(r()-.5)*.08;e(t,i,-4,1.4,.5,1.4,9361518,0,a),e(t,i-.5,-4,1,.6,1,10254152),e(t,i+.55,-4,.7,.6,.7,4169274,0,a),e(t+.45,i+.45,-3.7,.45,.4,.45,5027141,0,a+.04)}],Bl=class{constructor(e){this.scene=e,this.data=null,this.blocks=new mi(Cl,new G,Pl),this.blocks.frustumCulled=!1,this.blocks.count=0,e.add(this.blocks),this.coinMesh=new mi(Sl(.55,.55,.12,.04),new G({color:16766282,emissive:6704384}),Fl),this.coinMesh.frustumCulled=!1,this.coinMesh.count=0,e.add(this.coinMesh),this.coinStates=[],this.coinSpin=0,this.dummy=new fn,this.color=new U,this.flagGroup=new H;let t=new W(Ll,new G({color:14277081}));t.scale.set(.18,8,.18),t.position.y=4;let n=new W(Ll,new G({color:16766282,emissive:6704384}));n.scale.setScalar(.5),n.position.y=8.2;let r=new W(Ll,new G({color:9263659}));r.scale.set(1.4,.6,1.4),r.position.y=.3,this.flag=new W(Ll,new G({color:5036388})),this.flag.scale.set(1.4,.9,.1),this.flag.position.set(-.85,7.4,0),this.flagGroup.add(t,n,r,this.flag),e.add(this.flagGroup),this.sky=new H;let i=document.createElement(`canvas`);i.width=2,i.height=128,this.skyCtx=i.getContext(`2d`),this.skyTex=new wi(i),this.skyTex.colorSpace=He;let a=new W(new Pi(85,20,14),new Gr({map:this.skyTex,side:1,fog:!1,depthWrite:!1}));a.renderOrder=-1,this.sky.add(a),this.sunMat=new Gr({color:16772254,fog:!1}),this.sunGroup=new H;{let e=new W(Ll,this.sunMat);e.scale.set(3.4,3.4,.6),this.sunGroup.add(e);for(let[e,t]of[[2.1,0],[-2.1,0],[0,2.1],[0,-2.1]]){let n=new W(Ll,this.sunMat);n.scale.set(e?.9:2.2,e?2.2:.9,.55),n.position.set(e,t,0),this.sunGroup.add(n)}}this.sunGroup.position.set(20,18,-60),this.sky.add(this.sunGroup);let o=new Gr({color:15265023,fog:!1});this.moonGroup=new H;{let e=new W(Ll,o);e.scale.set(2.8,2.8,.6);let t=new W(Ll,o);t.scale.set(1.2,1.2,.65),t.position.set(-1.6,1.4,0),this.moonGroup.add(e,t)}this.moonGroup.position.set(-16,19,-58),this.sky.add(this.moonGroup),this.starField=new mi(Cl,new Gr({color:14674175,fog:!1}),48),this.starField.frustumCulled=!1;{let e=jl(9001),t=new fn;for(let n=0;n<48;n++)t.position.set(e()*150-75,8+e()*36,-52-e()*16),t.scale.setScalar(.16+e()*.22),t.updateMatrix(),this.starField.setMatrixAt(n,t.matrix);this.starField.instanceMatrix.needsUpdate=!0}this.sky.add(this.starField),e.add(this.sky),this.parallax=[];let s=(t,n,r,i,a)=>{let o=new G,s=new mi(Cl,o,120);s.frustumCulled=!1;let c=jl(r),l=new fn,u=new U,d=0,f=(e,t,n,r,i,a)=>{l.position.set(e,t,0),l.scale.set(n,r,i),l.updateMatrix(),s.setMatrixAt(d,l.matrix),s.setColorAt(d,u.setScalar(a)),d++},p=[];for(let e=0;e<4;e++)p.push({x:e*22+c()*8,w:8+c()*6,h:i+c()*1.8});for(let e=0;e<2;e++)for(let t of p){let n=e*90+t.x,r=-2;for(let e=0;e<4;e++){let i=(t.h+2.5)/4;f(n+(c()-.5)*1.5,r+i/2,t.w*(1-e*.22),i+.02,2.5-e*.1,.9+(e&1)*.1),r+=i}if(f(n,r+.5,t.w*.28,1,2.1,1),a){let e=1+(c()*3|0);for(let i=0;i<e;i++){let e=n+(c()-.5)*t.w*.5;f(e,r+.35,.25,.7,.5,.55),f(e,r+1.05,.9,.9,.9,.7)}}}s.count=d,s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.position.z=t,e.add(s),this.parallax.push({mesh:s,mat:o,factor:n})};s(-13,.32,51,1.2,!0),s(-19,.16,87,2.6,!0),s(-25,.07,133,4,!1),this.clouds=[],this.cloudMats=[];for(let t=0;t<Il;t++){let t=new H,n=new G({color:16777215,transparent:!0,opacity:1,emissive:16777215,emissiveIntensity:.55});n.userData.o=.75+Math.random()*.25,this.cloudMats.push(n);let r=Math.random()<.4,i=r?4:2+(Math.random()*2|0),a=r?1.7:1.3;for(let e=0;e<i;e++){let o=new W(Ll,n),s=(r?2:1.4)+Math.random()*1.5;o.scale.set(s,.7+Math.random()*.6,1.2+Math.random()),o.position.set((e-(i-1)/2)*a,Math.random()*.6,(Math.random()-.5)*1.5),t.add(o)}let o=new W(Ll,n);o.scale.set(i*a+.8,.5,1.9),o.position.y=-.35,t.add(o),t.scale.setScalar(.8+Math.random()*.5),t.userData.drift=.25+Math.random()*.55,e.add(t),this.clouds.push(t)}}build(e){this.data=e;let t=Tl[e.theme];this.scene.background=new U(t.skyTop),this.scene.fog=new bn(t.fog,30,80);let n=e=>`#`+e.toString(16).padStart(6,`0`),r=this.skyCtx.createLinearGradient(0,0,0,128);r.addColorStop(0,n(t.skyTop)),r.addColorStop(.52,n(t.skyBot)),r.addColorStop(.72,n(t.fog)),r.addColorStop(1,n(t.fog)),this.skyCtx.fillStyle=r,this.skyCtx.fillRect(0,0,2,128),this.skyTex.needsUpdate=!0,this.sunGroup.visible=!t.night,this.moonGroup.visible=!!t.night,this.starField.visible=!!t.night,this.sunMat.color.setHex(t.sun);let i=this.scene.userData.hemiLight;i&&(i.color.setHex(t.hemiSky),i.groundColor.setHex(t.hemiGround),i.intensity=t.night?.85:1.05);let a=this.scene.userData.sunLight;a&&(a.color.setHex(t.sunTint),a.intensity=t.night?1.2:1.55),this.parallax[0].mat.color.setHex(t.hill).multiplyScalar(.78),this.parallax[1].mat.color.setHex(t.hill2).lerp(new U(t.sky),.3),this.parallax[2].mat.color.setHex(t.hill2).lerp(new U(t.sky),.6);for(let e of this.cloudMats)e.color.setHex(t.cloud),e.emissive.setHex(t.cloud),e.emissiveIntensity=t.night?.2:.55,e.opacity=e.userData.o*(t.night?.55:1);let o=jl((e.theme+1)*7919),s=0,c=new Set,l=(e,t,n)=>e+`,`+t+`,`+n,u=[],d=(e,t,n,r,i,a,o,d=0,f=0,p=0,m)=>{if(!(s>=Pl)){if(this.dummy.position.set(e,t,n),this.dummy.scale.set(r,i,a),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),this.blocks.setMatrixAt(s,this.dummy.matrix),this.color.setHex(o),d&&this.color.offsetHSL(0,.1,.08),(f||p)&&this.color.offsetHSL(p,0,f),this.blocks.setColorAt(s,this.color),m===void 0?r>=.9&&r<=1.1&&a>=.9&&a<=1.1&&i>=.4&&n>-6&&n<2:m){let r=Math.round(e),i=Math.floor(t),a=Math.round(n);c.add(l(r,i,a)),u.push({n:s,cx:r,cy:i,cz:a})}s++}},f=e.length;for(let n=0;n<f;n++){let r=e.groundY[n],i=Rl(n*31+5);for(let e=-1;e<=1;e++){let a=(Rl(n*7+e*13)-.5)*.1,o=(Rl(n*13+e*29+3)-.5)*.024,s=a+(i<.05?.06:i>.96?-.05:0);d(n,r-.225,e,1,.45,1,t.top[n+e&1],0,s,o),d(n,r-.725,e,1,.55,1,t.dirt[n+e+1&1],0,a-.05,o*.6);for(let i=1;i<4;i++){let a=(Rl(n*7+e*13+i*101)-.5)*.1;d(n,r-.5-i,e,1,1,1,t.dirt[n+e+i&1],0,a,o*.6)}}d(n,r-.55,1.03,1,.16,1.02,t.top[1],0,-.1);for(let e=-5;e<=-2;e++){let i=(Rl(n*11+e*17)-.5)*.09,a=(Rl(n*19+e*23+7)-.5)*.024;d(n,r-.5,e,1,1.001,1,t.top[n+e&1],0,i+e*.012,a)}}for(let n of e.platforms){let e=n.thin?.35:1;for(let r=n.x0;r<=n.x1;r++)for(let i=0;i<=1;i++){let a=(Rl(r*5+i*3+n.y*41)-.5)*.06;d(r,n.y-e/2,i-.5,1,e,1,t.plat[r+i&1],0,a)}}let p=(e,t,n,r,i)=>{let a=-1.5;for(let s=0;s<3;s++){let c=(n+3)/3;d(e+(o()-.5)*1.2,a+c/2,r,t*(1-s*.24),c+.02,4-s*.3,i,0,s&1?.04:-.02),a+=c}d(e,a+.5,r,t*.3,1,3.2,i,0,.06)};for(let e=-10;e<f+20;e+=24+(o()*14|0)){let n=9+o()*7;p(e,n*.8,1+o()*1.5,-12,t.hill),p(e+10+o()*8,n,2+o()*2,-19,t.hill2)}let m=zl[e.theme];for(let t=4;t<f-4;t+=10+(o()*9|0)){let n=e.groundY[Math.min(t,f-1)];m(d,t+o()*3,n,o)}let h=[16739179,16766282,16747224,8308991,16774896],g=(e,t,n,r)=>{for(let i=0;i<3;i++)d(e+(i-1)*.14,t+.14+o()*.1,n,.09,.3+o()*.22,.09,r,0,(o()-.5)*.12)},_=(e,t,n,r)=>{d(e,t+.11,n,.28+o()*.12,.22,.28,r,0,(o()-.5)*.1)},v=(t,n)=>{let r=-.9-o()*.5,i=o(),a=e.theme;a===0?i<.35?g(t,n,r,16111480):i<.6?_(t,n,r,14826286):i<.85?_(t,n,r,9063213):d(t,n+.14,r,.26,.26,.26,16766282,0,(o()-.5)*.1):a===1?i<.35?_(t,n,r,4860954):i<.6?d(t,n+.12,r,.3,.22,.3,16769898,0,(o()-.5)*.08):i<.85?(d(t,n+.16,r,.24,.3,.24,14826286),d(t,n+.36,r,.14,.1,.14,4169274)):d(t,n+.13,r,.22,.24,.22,16777215,1):a===2?i<.4?d(t,n+.22,r,.18,.44,.18,12576511,1):i<.7?_(t,n,r,10467532):g(t,n,r,14675708):a===3?i<.55?(d(t,n+.15,r,.14,.3,.14,13616360),d(t,n+.38,r,.42,.18,.42,i<.3?8319231:13663999,1)):_(t,n,r,6974072):i<.42?g(t,n,r,6078286):i<.72?(d(t,n+.18,r,.08,.36,.08,4169274),d(t,n+.42,r,.24,.22,.24,h[o()*h.length|0])):i<.9?_(t,n,r,10133670):(d(t,n+.15,r,.16,.3,.16,15919320),d(t,n+.38,r,.44,.2,.44,14703178))};for(let t=3;t<f-3;t+=3+(o()*5|0))v(t+o()-.5,e.groundY[t]);for(let e of u){let t;if(c.has(l(e.cx,e.cy+1,e.cz)))t=.8;else{let n=0;c.has(l(e.cx+1,e.cy+1,e.cz))&&n++,c.has(l(e.cx-1,e.cy+1,e.cz))&&n++,c.has(l(e.cx,e.cy+1,e.cz+1))&&n++,c.has(l(e.cx,e.cy+1,e.cz-1))&&n++,t=n?1-n*.06:1.05}this.blocks.getColorAt(e.n,this.color),this.blocks.setColorAt(e.n,this.color.multiplyScalar(t))}this.blocks.count=s,this.blocks.instanceMatrix.needsUpdate=!0,this.blocks.instanceColor&&(this.blocks.instanceColor.needsUpdate=!0),this.coinStates=e.coins.slice(0,Fl).map(e=>({x:e.x,y:e.y,taken:!1})),this.coinMesh.count=this.coinStates.length,this.updateCoinMatrices();let y=e.groundY[Math.min(e.flagX|0,f-1)];this.flagGroup.position.set(e.flagX,y,0),this.flag.position.y=7.4;for(let e of this.clouds)e.position.set(Math.random()*60-10,8+Math.random()*4,-7-Math.random()*5)}updateCoinMatrices(){for(let e=0;e<this.coinStates.length;e++){let t=this.coinStates[e];this.dummy.position.set(t.x,t.taken?-50:t.y+Math.sin(this.coinSpin*2+t.x)*.1,0),this.dummy.rotation.set(0,this.coinSpin+t.x*.5,0),this.dummy.scale.setScalar(t.taken?.001:1),this.dummy.updateMatrix(),this.coinMesh.setMatrixAt(e,this.dummy.matrix)}this.coinMesh.instanceMatrix.needsUpdate=!0}collectCoins(e,t){let n=[];for(let r of this.coinStates)r.taken||Math.abs(r.x-e)>.9||r.y>t-.4&&r.y<t+2.1&&(r.taken=!0,n.push(new B(r.x,r.y,0)));return n}update(e,t){this.coinSpin+=e*3,this.updateCoinMatrices(),this.sky.position.x=t;for(let e of this.parallax){let n=t*(1-e.factor);e.mesh.position.x=t*e.factor+Math.floor((n-45)/90)*90}for(let n of this.clouds)n.position.x+=n.userData.drift*e,n.position.x<t-45&&(n.position.x+=90),n.position.x>t+45&&(n.position.x-=90)}groundTopAt(e){if(!this.data)return 0;let t=Math.max(0,Math.min(this.data.length-1,Math.round(e)));return this.data.groundY[t]}floorAt(e,t){let n=-1/0;for(let r of[-.25,.25]){let i=this.groundTopAt(e+r);i<=t+.3&&i>n&&(n=i)}if(this.data)for(let r of this.data.platforms)e>=r.x0-.8&&e<=r.x1+.8&&r.y<=t+.3&&r.y>n&&(n=r.y);return n===-1/0&&(n=this.groundTopAt(e)),n}},Vl={words:{a:`w-a.mp3`,and:`w-and.mp3`,away:`w-away.mp3`,big:`w-big.mp3`,blue:`w-blue.mp3`,can:`w-can.mp3`,come:`w-come.mp3`,down:`w-down.mp3`,find:`w-find.mp3`,for:`w-for.mp3`,funny:`w-funny.mp3`,go:`w-go.mp3`,help:`w-help.mp3`,here:`w-here.mp3`,i:`w-i.mp3`,in:`w-in.mp3`,is:`w-is.mp3`,it:`w-it.mp3`,jump:`w-jump.mp3`,little:`w-little.mp3`,look:`w-look.mp3`,make:`w-make.mp3`,me:`w-me.mp3`,my:`w-my.mp3`,not:`w-not.mp3`,one:`w-one.mp3`,play:`w-play.mp3`,red:`w-red.mp3`,run:`w-run.mp3`,said:`w-said.mp3`,see:`w-see.mp3`,the:`w-the.mp3`,three:`w-three.mp3`,to:`w-to.mp3`,two:`w-two.mp3`,up:`w-up.mp3`,we:`w-we.mp3`,where:`w-where.mp3`,yellow:`w-yellow.mp3`,you:`w-you.mp3`,all:`w-all.mp3`,am:`w-am.mp3`,are:`w-are.mp3`,at:`w-at.mp3`,ate:`w-ate.mp3`,be:`w-be.mp3`,black:`w-black.mp3`,brown:`w-brown.mp3`,but:`w-but.mp3`,came:`w-came.mp3`,did:`w-did.mp3`,do:`w-do.mp3`,eat:`w-eat.mp3`,four:`w-four.mp3`,get:`w-get.mp3`,good:`w-good.mp3`,have:`w-have.mp3`,he:`w-he.mp3`,into:`w-into.mp3`,like:`w-like.mp3`,must:`w-must.mp3`,new:`w-new.mp3`,no:`w-no.mp3`,now:`w-now.mp3`,on:`w-on.mp3`,our:`w-our.mp3`,out:`w-out.mp3`,please:`w-please.mp3`,pretty:`w-pretty.mp3`,ran:`w-ran.mp3`,ride:`w-ride.mp3`,saw:`w-saw.mp3`,say:`w-say.mp3`,she:`w-she.mp3`,so:`w-so.mp3`,soon:`w-soon.mp3`,that:`w-that.mp3`,there:`w-there.mp3`,they:`w-they.mp3`,this:`w-this.mp3`,too:`w-too.mp3`,under:`w-under.mp3`,want:`w-want.mp3`,was:`w-was.mp3`,well:`w-well.mp3`,went:`w-went.mp3`,what:`w-what.mp3`,white:`w-white.mp3`,who:`w-who.mp3`,will:`w-will.mp3`,with:`w-with.mp3`,yes:`w-yes.mp3`,after:`w-after.mp3`,again:`w-again.mp3`,an:`w-an.mp3`,any:`w-any.mp3`,as:`w-as.mp3`,ask:`w-ask.mp3`,by:`w-by.mp3`,could:`w-could.mp3`,every:`w-every.mp3`,fly:`w-fly.mp3`,from:`w-from.mp3`,give:`w-give.mp3`,going:`w-going.mp3`,had:`w-had.mp3`,has:`w-has.mp3`,her:`w-her.mp3`,him:`w-him.mp3`,his:`w-his.mp3`,how:`w-how.mp3`,just:`w-just.mp3`,know:`w-know.mp3`,let:`w-let.mp3`,live:`w-live.mp3`,may:`w-may.mp3`,of:`w-of.mp3`,old:`w-old.mp3`,once:`w-once.mp3`,open:`w-open.mp3`,over:`w-over.mp3`,put:`w-put.mp3`,round:`w-round.mp3`,some:`w-some.mp3`,stop:`w-stop.mp3`,take:`w-take.mp3`,thank:`w-thank.mp3`,them:`w-them.mp3`,then:`w-then.mp3`,think:`w-think.mp3`,walk:`w-walk.mp3`,were:`w-were.mp3`,when:`w-when.mp3`,always:`w-always.mp3`,around:`w-around.mp3`,because:`w-because.mp3`,been:`w-been.mp3`,before:`w-before.mp3`,best:`w-best.mp3`,both:`w-both.mp3`,buy:`w-buy.mp3`,call:`w-call.mp3`,cold:`w-cold.mp3`,does:`w-does.mp3`,"don't":`w-dont.mp3`,fast:`w-fast.mp3`,first:`w-first.mp3`,five:`w-five.mp3`,found:`w-found.mp3`,gave:`w-gave.mp3`,goes:`w-goes.mp3`,green:`w-green.mp3`,its:`w-its.mp3`,made:`w-made.mp3`,many:`w-many.mp3`,off:`w-off.mp3`,or:`w-or.mp3`,pull:`w-pull.mp3`,read:`w-read.mp3`,right:`w-right.mp3`,sing:`w-sing.mp3`,sit:`w-sit.mp3`,sleep:`w-sleep.mp3`,tell:`w-tell.mp3`,their:`w-their.mp3`,these:`w-these.mp3`,those:`w-those.mp3`,upon:`w-upon.mp3`,us:`w-us.mp3`,use:`w-use.mp3`,very:`w-very.mp3`,wash:`w-wash.mp3`,which:`w-which.mp3`,why:`w-why.mp3`,wish:`w-wish.mp3`,work:`w-work.mp3`,would:`w-would.mp3`,write:`w-write.mp3`,your:`w-your.mp3`,about:`w-about.mp3`,better:`w-better.mp3`,bring:`w-bring.mp3`,carry:`w-carry.mp3`,clean:`w-clean.mp3`,cut:`w-cut.mp3`,done:`w-done.mp3`,draw:`w-draw.mp3`,drink:`w-drink.mp3`,eight:`w-eight.mp3`,fall:`w-fall.mp3`,far:`w-far.mp3`,full:`w-full.mp3`,got:`w-got.mp3`,grow:`w-grow.mp3`,hold:`w-hold.mp3`,hot:`w-hot.mp3`,hurt:`w-hurt.mp3`,if:`w-if.mp3`,keep:`w-keep.mp3`,kind:`w-kind.mp3`,laugh:`w-laugh.mp3`,light:`w-light.mp3`,long:`w-long.mp3`,much:`w-much.mp3`,myself:`w-myself.mp3`,never:`w-never.mp3`,only:`w-only.mp3`,own:`w-own.mp3`,pick:`w-pick.mp3`,seven:`w-seven.mp3`,shall:`w-shall.mp3`,show:`w-show.mp3`,six:`w-six.mp3`,small:`w-small.mp3`,start:`w-start.mp3`,ten:`w-ten.mp3`,today:`w-today.mp3`,together:`w-together.mp3`,try:`w-try.mp3`,warm:`w-warm.mp3`},phrases:{"find the word:":`p-find-the-word.mp3`,"bonk the block with the word:":`p-bonk-the-block-with-the-word.mp3`,"jump through the door with the word:":`p-jump-through-the-door-with-the-word.mp3`,"star time! jump under the star with the word:":`p-star-time-jump-under-the-star-with-the-word.mp3`,"almost! the word is:":`p-almost-the-word-is.mp3`,"nice try! the word is:":`p-nice-try-the-word-is.mp3`,"try again!":`p-try-again.mp3`,"great job!":`p-great-job.mp3`,"you got it!":`p-you-got-it.mp3`,"awesome!":`p-awesome.mp3`,"super reading!":`p-super-reading.mp3`,"way to go!":`p-way-to-go.mp3`,"you did it!":`p-you-did-it.mp3`,"fantastic!":`p-fantastic.mp3`,"that was great reading!":`p-that-was-great-reading.mp3`,"high five!":`p-high-five.mp3`,"woohoo! you read it!":`p-woohoo-you-read-it.mp3`,"wow! first try! super reading!":`p-wow-first-try-super-reading.mp3`,"first try! you are amazing!":`p-first-try-you-are-amazing.mp3`,"boom! first try!":`p-boom-first-try.mp3`,"first try! super star reader!":`p-first-try-super-star-reader.mp3`,"you read it right away! wow!":`p-you-read-it-right-away-wow.mp3`,"you are on fire! so many in a row!":`p-you-are-on-fire-so-many-in-a-row.mp3`,"wow! you keep getting them right!":`p-wow-you-keep-getting-them-right.mp3`,"what a streak! super reader!":`p-what-a-streak-super-reader.mp3`,"amazing! you got them all right in a row!":`p-amazing-you-got-them-all-right-in-a-row.mp3`,"unstoppable! what a reading streak!":`p-unstoppable-what-a-reading-streak.mp3`,"you got it! great trying!":`p-you-got-it-great-trying.mp3`,"yes! you figured it out!":`p-yes-you-figured-it-out.mp3`,"you did it! never give up!":`p-you-did-it-never-give-up.mp3`,"there it is! way to stick with it!":`p-there-it-is-way-to-stick-with-it.mp3`,"you got it this time! way to keep trying!":`p-you-got-it-this-time-way-to-keep-trying.mp3`,"bonus round! read the word out loud. hold the microphone and say it!":`p-bonus-round-read-the-word-out-loud-hold-the-microphone-and-say-it.mp3`,"bonus time! hold the microphone and say the word out loud!":`p-bonus-time-hold-the-microphone-and-say-the-word-out-loud.mp3`,"wow, a bonus round! hold the microphone and read the word!":`p-wow-a-bonus-round-hold-the-microphone-and-read-the-word.mp3`,"special bonus! read the word with your voice. hold the microphone!":`p-special-bonus-read-the-word-with-your-voice-hold-the-microphone.mp3`,"you found a secret key!":`p-you-found-a-secret-key.mp3`,"a secret key! amazing!":`p-a-secret-key-amazing.mp3`,"wow! a hidden key! you are a great explorer!":`p-wow-a-hidden-key-you-are-a-great-explorer.mp3`,"you found the key! it opens something special!":`p-you-found-the-key-it-opens-something-special.mp3`,"a secret path appeared!":`p-a-secret-path-appeared.mp3`,"look! a secret path!":`p-look-a-secret-path.mp3`,"wow! you opened a secret path!":`p-wow-you-opened-a-secret-path.mp3`,"level complete! amazing!":`p-level-complete-amazing.mp3`,"you finished the level! great reading!":`p-you-finished-the-level-great-reading.mp3`,"level done! you are awesome!":`p-level-done-you-are-awesome.mp3`,"hooray! level complete!":`p-hooray-level-complete.mp3`,"you did it! on to the next adventure!":`p-you-did-it-on-to-the-next-adventure.mp3`,"what a run! level complete!":`p-what-a-run-level-complete.mp3`,"three stars! perfect run!":`p-three-stars-perfect-run.mp3`,"wow! all three stars!":`p-wow-all-three-stars.mp3`,"three shiny stars! incredible reading!":`p-three-shiny-stars-incredible-reading.mp3`,"you unlocked a whole new world! let us go explore!":`p-you-unlocked-a-whole-new-world-let-us-go-explore.mp3`,"a brand new world is open! amazing reading!":`p-a-brand-new-world-is-open-amazing-reading.mp3`,"new world unlocked! you are a super reader!":`p-new-world-unlocked-you-are-a-super-reader.mp3`,"welcome home!":`p-welcome-home.mp3`,"home sweet home!":`p-home-sweet-home.mp3`,"here is your house! looking good!":`p-here-is-your-house-looking-good.mp3`,"welcome back to your house!":`p-welcome-back-to-your-house.mp3`,"it looks great in your house!":`p-it-looks-great-in-your-house.mp3`,"what a great pick!":`p-what-a-great-pick.mp3`,"your house is getting so cool!":`p-your-house-is-getting-so-cool.mp3`,"enjoy it!":`p-enjoy-it.mp3`,"great choice!":`p-great-choice.mp3`,"do you want it? tap yes or no!":`p-do-you-want-it-tap-yes-or-no.mp3`,"should we buy it? tap yes or no!":`p-should-we-buy-it-tap-yes-or-no.mp3`,"want to take it home? tap yes or no!":`p-want-to-take-it-home-tap-yes-or-no.mp3`,"okay! maybe next time!":`p-okay-maybe-next-time.mp3`,"no problem! it will be here later!":`p-no-problem-it-will-be-here-later.mp3`,"okay! keep saving your coins!":`p-okay-keep-saving-your-coins.mp3`,"you need more coins! play levels to earn more.":`p-you-need-more-coins-play-levels-to-earn-more.mp3`,"not enough coins yet! run some levels to earn more!":`p-not-enough-coins-yet-run-some-levels-to-earn-more.mp3`,"you need more gems! try the microphone bonus round to earn gems!":`p-you-need-more-gems-try-the-microphone-bonus-round-to-earn-gems.mp3`,"not enough gems yet! read out loud in the bonus round to earn gems!":`p-not-enough-gems-yet-read-out-loud-in-the-bonus-round-to-earn-gems.mp3`,"if you forget your word, tap the blue speaker button to hear it again!":`p-if-you-forget-your-word-tap-the-blue-speaker-button-to-hear-it-again.mp3`,"all levels unlocked!":`p-all-levels-unlocked.mp3`,"you beat the castle! time for your trophy!":`p-you-beat-the-castle-time-for-your-trophy.mp3`,"a new trophy for your shelf!":`p-a-new-trophy-for-your-shelf.mp3`,"beat the castle boss to win that prize!":`p-beat-the-castle-boss-to-win-that-prize.mp3`,"something new at your house!":`p-something-new-at-your-house.mp3`,"you did it! you beat every single world!":`p-you-did-it-you-beat-every-single-world.mp3`,"look! five shiny trophies for five worlds!":`p-look-five-shiny-trophies-for-five-worlds.mp3`,"you're a sight word hero!":`p-youre-a-sight-word-hero.mp3`,"hero!":`p-hero.mp3`,"the meatball monster wants to hear you read!":`p-the-meatball-monster-wants-to-hear-you-read.mp3`,"you did it! the meatball monster is amazed by your reading! here comes your crown!":`p-you-did-it-the-meatball-monster-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the meatball monster with your super reading! take your crown!":`p-wow-you-beat-the-meatball-monster-with-your-super-reading-take-your-crown.mp3`,"the meatball monster gives up! you are the reading champion! here comes your crown!":`p-the-meatball-monster-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"the syrup serpent wants to hear you read!":`p-the-syrup-serpent-wants-to-hear-you-read.mp3`,"you did it! the syrup serpent is amazed by your reading! here comes your crown!":`p-you-did-it-the-syrup-serpent-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the syrup serpent with your super reading! take your crown!":`p-wow-you-beat-the-syrup-serpent-with-your-super-reading-take-your-crown.mp3`,"the syrup serpent gives up! you are the reading champion! here comes your crown!":`p-the-syrup-serpent-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"the frost yeti wants to hear you read!":`p-the-frost-yeti-wants-to-hear-you-read.mp3`,"you did it! the frost yeti is amazed by your reading! here comes your crown!":`p-you-did-it-the-frost-yeti-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the frost yeti with your super reading! take your crown!":`p-wow-you-beat-the-frost-yeti-with-your-super-reading-take-your-crown.mp3`,"the frost yeti gives up! you are the reading champion! here comes your crown!":`p-the-frost-yeti-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"the crystal golem wants to hear you read!":`p-the-crystal-golem-wants-to-hear-you-read.mp3`,"you did it! the crystal golem is amazed by your reading! here comes your crown!":`p-you-did-it-the-crystal-golem-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the crystal golem with your super reading! take your crown!":`p-wow-you-beat-the-crystal-golem-with-your-super-reading-take-your-crown.mp3`,"the crystal golem gives up! you are the reading champion! here comes your crown!":`p-the-crystal-golem-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"the cloud dragon wants to hear you read!":`p-the-cloud-dragon-wants-to-hear-you-read.mp3`,"you did it! the cloud dragon is amazed by your reading! here comes your crown!":`p-you-did-it-the-cloud-dragon-is-amazed-by-your-reading-here-comes-your-crown.mp3`,"wow! you beat the cloud dragon with your super reading! take your crown!":`p-wow-you-beat-the-cloud-dragon-with-your-super-reading-take-your-crown.mp3`,"the cloud dragon gives up! you are the reading champion! here comes your crown!":`p-the-cloud-dragon-gives-up-you-are-the-reading-champion-here-comes-your-crown.mp3`,"you won the meatball monster statue! what a prize!":`p-you-won-the-meatball-monster-statue-what-a-prize.mp3`,"you won the syrup serpent statue! what a prize!":`p-you-won-the-syrup-serpent-statue-what-a-prize.mp3`,"you won the yeti snowman! what a prize!":`p-you-won-the-yeti-snowman-what-a-prize.mp3`,"you won the crystal lamp! what a prize!":`p-you-won-the-crystal-lamp-what-a-prize.mp3`,"you won the dragon kite! what a prize!":`p-you-won-the-dragon-kite-what-a-prize.mp3`,"cozy rug!":`p-cozy-rug.mp3`,"you got the cozy rug!":`p-you-got-the-cozy-rug.mp3`,"you already have the cozy rug!":`p-you-already-have-the-cozy-rug.mp3`,"comfy chair!":`p-comfy-chair.mp3`,"you got the comfy chair!":`p-you-got-the-comfy-chair.mp3`,"you already have the comfy chair!":`p-you-already-have-the-comfy-chair.mp3`,"table!":`p-table.mp3`,"you got the table!":`p-you-got-the-table.mp3`,"you already have the table!":`p-you-already-have-the-table.mp3`,"big kid bed!":`p-big-kid-bed.mp3`,"you got the big kid bed!":`p-you-got-the-big-kid-bed.mp3`,"you already have the big kid bed!":`p-you-already-have-the-big-kid-bed.mp3`,"lamp!":`p-lamp.mp3`,"you got the lamp!":`p-you-got-the-lamp.mp3`,"you already have the lamp!":`p-you-already-have-the-lamp.mp3`,"bookshelf!":`p-bookshelf.mp3`,"you got the bookshelf!":`p-you-got-the-bookshelf.mp3`,"you already have the bookshelf!":`p-you-already-have-the-bookshelf.mp3`,"toy box!":`p-toy-box.mp3`,"you got the toy box!":`p-you-got-the-toy-box.mp3`,"you already have the toy box!":`p-you-already-have-the-toy-box.mp3`,"flower bed!":`p-flower-bed.mp3`,"you got the flower bed!":`p-you-got-the-flower-bed.mp3`,"you already have the flower bed!":`p-you-already-have-the-flower-bed.mp3`,"mailbox!":`p-mailbox.mp3`,"you got the mailbox!":`p-you-got-the-mailbox.mp3`,"you already have the mailbox!":`p-you-already-have-the-mailbox.mp3`,"shady tree!":`p-shady-tree.mp3`,"you got the shady tree!":`p-you-got-the-shady-tree.mp3`,"you already have the shady tree!":`p-you-already-have-the-shady-tree.mp3`,"swing set!":`p-swing-set.mp3`,"you got the swing set!":`p-you-got-the-swing-set.mp3`,"you already have the swing set!":`p-you-already-have-the-swing-set.mp3`,"trampoline!":`p-trampoline.mp3`,"you got the trampoline!":`p-you-got-the-trampoline.mp3`,"you already have the trampoline!":`p-you-already-have-the-trampoline.mp3`,"pet cat!":`p-pet-cat.mp3`,"you got the pet cat!":`p-you-got-the-pet-cat.mp3`,"you already have the pet cat!":`p-you-already-have-the-pet-cat.mp3`,"pet dog!":`p-pet-dog.mp3`,"you got the pet dog!":`p-you-got-the-pet-dog.mp3`,"you already have the pet dog!":`p-you-already-have-the-pet-dog.mp3`,"fish tank!":`p-fish-tank.mp3`,"you got the fish tank!":`p-you-got-the-fish-tank.mp3`,"you already have the fish tank!":`p-you-already-have-the-fish-tank.mp3`,"telescope!":`p-telescope.mp3`,"you got the telescope!":`p-you-got-the-telescope.mp3`,"you already have the telescope!":`p-you-already-have-the-telescope.mp3`,"robot buddy!":`p-robot-buddy.mp3`,"you got the robot buddy!":`p-you-got-the-robot-buddy.mp3`,"you already have the robot buddy!":`p-you-already-have-the-robot-buddy.mp3`,"rocket ship!":`p-rocket-ship.mp3`,"you got the rocket ship!":`p-you-got-the-rocket-ship.mp3`,"you already have the rocket ship!":`p-you-already-have-the-rocket-ship.mp3`,"meatball monster statue!":`p-meatball-monster-statue.mp3`,"you got the meatball monster statue!":`p-you-got-the-meatball-monster-statue.mp3`,"you already have the meatball monster statue!":`p-you-already-have-the-meatball-monster-statue.mp3`,"syrup serpent statue!":`p-syrup-serpent-statue.mp3`,"you got the syrup serpent statue!":`p-you-got-the-syrup-serpent-statue.mp3`,"you already have the syrup serpent statue!":`p-you-already-have-the-syrup-serpent-statue.mp3`,"yeti snowman!":`p-yeti-snowman.mp3`,"you got the yeti snowman!":`p-you-got-the-yeti-snowman.mp3`,"you already have the yeti snowman!":`p-you-already-have-the-yeti-snowman.mp3`,"crystal lamp!":`p-crystal-lamp.mp3`,"you got the crystal lamp!":`p-you-got-the-crystal-lamp.mp3`,"you already have the crystal lamp!":`p-you-already-have-the-crystal-lamp.mp3`,"dragon kite!":`p-dragon-kite.mp3`,"you got the dragon kite!":`p-you-got-the-dragon-kite.mp3`,"you already have the dragon kite!":`p-you-already-have-the-dragon-kite.mp3`,"pasta plains 1":`p-pasta-plains-1.mp3`,"pasta plains 2":`p-pasta-plains-2.mp3`,"pasta plains 3":`p-pasta-plains-3.mp3`,"pasta plains 4":`p-pasta-plains-4.mp3`,"pasta plains 5":`p-pasta-plains-5.mp3`,"pasta plains 6":`p-pasta-plains-6.mp3`,"pasta plains 7":`p-pasta-plains-7.mp3`,"pasta plains 8":`p-pasta-plains-8.mp3`,"pasta plains secret":`p-pasta-plains-secret.mp3`,"pasta plains castle":`p-pasta-plains-castle.mp3`,"waffle desert 1":`p-waffle-desert-1.mp3`,"waffle desert 2":`p-waffle-desert-2.mp3`,"waffle desert 3":`p-waffle-desert-3.mp3`,"waffle desert 4":`p-waffle-desert-4.mp3`,"waffle desert 5":`p-waffle-desert-5.mp3`,"waffle desert 6":`p-waffle-desert-6.mp3`,"waffle desert 7":`p-waffle-desert-7.mp3`,"waffle desert 8":`p-waffle-desert-8.mp3`,"waffle desert 9":`p-waffle-desert-9.mp3`,"waffle desert 10":`p-waffle-desert-10.mp3`,"waffle desert secret":`p-waffle-desert-secret.mp3`,"waffle desert castle":`p-waffle-desert-castle.mp3`,"snowy peaks 1":`p-snowy-peaks-1.mp3`,"snowy peaks 2":`p-snowy-peaks-2.mp3`,"snowy peaks 3":`p-snowy-peaks-3.mp3`,"snowy peaks 4":`p-snowy-peaks-4.mp3`,"snowy peaks 5":`p-snowy-peaks-5.mp3`,"snowy peaks 6":`p-snowy-peaks-6.mp3`,"snowy peaks 7":`p-snowy-peaks-7.mp3`,"snowy peaks 8":`p-snowy-peaks-8.mp3`,"snowy peaks secret":`p-snowy-peaks-secret.mp3`,"snowy peaks castle":`p-snowy-peaks-castle.mp3`,"crystal caves 1":`p-crystal-caves-1.mp3`,"crystal caves 2":`p-crystal-caves-2.mp3`,"crystal caves 3":`p-crystal-caves-3.mp3`,"crystal caves 4":`p-crystal-caves-4.mp3`,"crystal caves 5":`p-crystal-caves-5.mp3`,"crystal caves 6":`p-crystal-caves-6.mp3`,"crystal caves 7":`p-crystal-caves-7.mp3`,"crystal caves 8":`p-crystal-caves-8.mp3`,"crystal caves 9":`p-crystal-caves-9.mp3`,"crystal caves secret":`p-crystal-caves-secret.mp3`,"crystal caves castle":`p-crystal-caves-castle.mp3`,"sky islands 1":`p-sky-islands-1.mp3`,"sky islands 2":`p-sky-islands-2.mp3`,"sky islands 3":`p-sky-islands-3.mp3`,"sky islands 4":`p-sky-islands-4.mp3`,"sky islands 5":`p-sky-islands-5.mp3`,"sky islands 6":`p-sky-islands-6.mp3`,"sky islands 7":`p-sky-islands-7.mp3`,"sky islands 8":`p-sky-islands-8.mp3`,"sky islands secret":`p-sky-islands-secret.mp3`,"sky islands castle":`p-sky-islands-castle.mp3`,"play!":`p-play.mp3`,settings:`p-settings.mp3`,close:`p-close.mp3`,sound:`p-sound.mp3`,music:`p-music.mp3`,"mic round":`p-mic-round.mp3`,back:`p-back.mp3`,"here we go!":`p-here-we-go.mp3`,pause:`p-pause.mp3`,resume:`p-resume.mp3`,map:`p-map.mp3`,"play again!":`p-play-again.mp3`,"next level!":`p-next-level.mp3`,skip:`p-skip.mp3`,"shop!":`p-shop.mp3`,"make your character!":`p-make-your-character.mp3`,"looking good!":`p-looking-good.mp3`,"let's go!":`p-lets-go.mp3`,"goodbye!":`p-goodbye.mp3`,"switch player!":`p-switch-player.mp3`,"who's playing?":`p-whos-playing.mp3`,"new player! what is your name?":`p-new-player-what-is-your-name.mp3`,"delete this player? all their progress will be lost.":`p-delete-this-player-all-their-progress-will-be-lost.mp3`,"player 1":`p-player-1.mp3`,"player 2":`p-player-2.mp3`,"player 3":`p-player-3.mp3`,"player 4":`p-player-4.mp3`,"player 5":`p-player-5.mp3`,"player 6":`p-player-6.mp3`}},Hl={music:{title:`music-title.mp3`,map:`music-map.mp3`,level:`music-level.mp3`,boss:`music-boss.mp3`,house:`music-house.mp3`,victory:`music-victory.mp3`},sfx:{coin:`sfx-coin.mp3`,gem:`sfx-gem.mp3`,correct:`sfx-correct.mp3`,wrong:`sfx-wrong.mp3`,jump:`sfx-jump.mp3`,land:`sfx-land.mp3`,bonk:`sfx-bonk.mp3`,stomp:`sfx-stomp.mp3`,boing:`sfx-boing.mp3`,dooropen:`sfx-dooropen.mp3`,keyjingle:`sfx-keyjingle.mp3`,roar:`sfx-roar.mp3`,giggle:`sfx-giggle.mp3`,armorpop:`sfx-armorpop.mp3`,stargrab:`sfx-stargrab.mp3`,pop:`sfx-pop.mp3`,plink:`sfx-plink.mp3`,click:`sfx-click.mp3`,pause:`sfx-pause.mp3`,resume:`sfx-resume.mp3`,levelstart:`sfx-levelstart.mp3`,star:`sfx-star.mp3`}},Ul={prePrimer:`a.and.away.big.blue.can.come.down.find.for.funny.go.help.here.I.in.is.it.jump.little.look.make.me.my.not.one.play.red.run.said.see.the.three.to.two.up.we.where.yellow.you`.split(`.`),primer:`all.am.are.at.ate.be.black.brown.but.came.did.do.eat.four.get.good.have.he.into.like.must.new.no.now.on.our.out.please.pretty.ran.ride.saw.say.she.so.soon.that.there.they.this.too.under.want.was.well.went.what.white.who.will.with.yes`.split(`.`),first:`after.again.an.any.as.ask.by.could.every.fly.from.give.going.had.has.her.him.his.how.just.know.let.live.may.of.old.once.open.over.put.round.some.stop.take.thank.them.then.think.walk.were.when`.split(`.`),second:`always.around.because.been.before.best.both.buy.call.cold.does.don't.fast.first.five.found.gave.goes.green.its.made.many.off.or.pull.read.right.sing.sit.sleep.tell.their.these.those.upon.us.use.very.wash.which.why.wish.work.would.write.your`.split(`.`),third:`about.better.bring.carry.clean.cut.done.draw.drink.eight.fall.far.full.got.grow.hold.hot.hurt.if.keep.kind.laugh.light.long.much.myself.never.only.own.pick.seven.shall.show.six.small.start.ten.today.together.try.warm`.split(`.`)};function Wl(e,t=5){let n=Math.max(1,Math.round(e.length/t)),r=[],i=0;for(let t=0;t<n;t++){let a=Math.ceil((e.length-i)/(n-t));r.push(e.slice(i,i+a)),i+=a}return r}var Gl=[{name:`Pasta Plains`,emoji:`🍝`,tier:`prePrimer`},{name:`Waffle Desert`,emoji:`🧇`,tier:`primer`},{name:`Snowy Peaks`,emoji:`❄️`,tier:`first`},{name:`Crystal Caves`,emoji:`💎`,tier:`second`},{name:`Sky Islands`,emoji:`☁️`,tier:`third`}].map(e=>({...e,levels:Wl(Ul[e.tier])}));function Kl(e,t){return Gl[e].levels[t]}function ql(e){return!!e&&e.firstTryCorrect>=3}var Jl=Object.keys(Ul);function Yl(e){let t=Jl[Jl.indexOf(Gl[e].tier)+1];return t?Ul[t]:null}function Xl(e){let t=e.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Zl(e,t,n={}){let{promotionPool:r=null,rng:i=Math.random}=n,a=Xl(e),o=[],s=[],c=[];for(let e of a){let n=t?t(e):null;ql(n)?c.push(e):n&&n.missed>0?o.push(e):s.push(e)}let l=(r||[]).filter(n=>!e.includes(n)&&!ql(t?t(n):null)),u=[],d=[];for(let e of c)l.length&&i()>=.25?d.push(l.shift()):u.push(e);return o.concat(Xl(s.concat(d)),u)}function Ql(e,t){let n=new Set(e),r=e.slice();for(let e of t)n.has(e)||(n.add(e),r.push(e));return r}function $l(e,t){let n=Ul[Gl[e].tier],r=Yl(e);return r&&t.some(e=>!n.includes(e)&&r.includes(e))?n.concat(r):n}function eu(e,t,n){let r=new Set([e.toLowerCase()]),i=t.filter(e=>!r.has(e.toLowerCase()));if(i.length<2&&n)for(let e of n)!r.has(e.toLowerCase())&&!i.includes(e)&&i.push(e);return i=Xl(i),i.sort((t,n)=>Math.abs(t.length-e.length)-Math.abs(n.length-e.length)),Xl(i.slice(0,4)).slice(0,2)}function tu(e,t){let n=Ul[Gl[e].tier],r=n.map(e=>{let n=t?t(e):null;return{w:e,ratio:n&&n.seen>0?n.firstTryCorrect/n.seen:2,r:Math.random()}});r.sort((e,t)=>e.ratio-t.ratio||e.r-t.r);let i=r.filter(e=>e.ratio<=1).slice(0,10).map(e=>e.w),a=Xl(n.filter(e=>!i.includes(e)));for(;i.length<10&&a.length;)i.push(a.pop());return i}function nu(e,t){return tu(e,t).slice(0,5)}var ru=[`Great job!`,`You got it!`,`Awesome!`,`Super reading!`],iu=`Wow! First try! Super reading!`,au={correct:[...ru,`Way to go!`,`You did it!`,`Fantastic!`,`That was great reading!`,`High five!`,`Woohoo! You read it!`],firstTry:[iu,`First try! You are amazing!`,`Boom! First try!`,`First try! Super star reader!`,`You read it right away! Wow!`],streak:[`You are on fire! So many in a row!`,`Wow! You keep getting them right!`,`What a streak! Super reader!`,`Amazing! You got them all right in a row!`,`Unstoppable! What a reading streak!`],recover:[`You got it! Great trying!`,`Yes! You figured it out!`,`You did it! Never give up!`,`There it is! Way to stick with it!`,`You got it this time! Way to keep trying!`],bonus:[`Bonus round! Read the word out loud. Hold the microphone and say it!`,`Bonus time! Hold the microphone and say the word out loud!`,`Wow, a bonus round! Hold the microphone and read the word!`,`Special bonus! Read the word with your voice. Hold the microphone!`],secretKey:[`You found a secret key!`,`A secret key! Amazing!`,`Wow! A hidden key! You are a great explorer!`,`You found the key! It opens something special!`],secretPath:[`A secret path appeared!`,`Look! A secret path!`,`Wow! You opened a secret path!`],levelComplete:[`Level complete! Amazing!`,`You finished the level! Great reading!`,`Level done! You are awesome!`,`Hooray! Level complete!`,`You did it! On to the next adventure!`,`What a run! Level complete!`],threeStars:[`Three stars! Perfect run!`,`Wow! All three stars!`,`Three shiny stars! Incredible reading!`],worldUnlock:[`You unlocked a whole new world! Let us go explore!`,`A brand new world is open! Amazing reading!`,`New world unlocked! You are a super reader!`],home:[`Welcome home!`,`Home sweet home!`,`Here is your house! Looking good!`,`Welcome back to your house!`],purchase:[`It looks great in your house!`,`What a great pick!`,`Your house is getting so cool!`,`Enjoy it!`,`Great choice!`],shopConfirm:[`Do you want it? Tap yes or no!`,`Should we buy it? Tap yes or no!`,`Want to take it home? Tap yes or no!`],shopNo:[`Okay! Maybe next time!`,`No problem! It will be here later!`,`Okay! Keep saving your coins!`],needCoins:[`You need more coins! Play levels to earn more.`,`Not enough coins yet! Run some levels to earn more!`],needGems:[`You need more gems! Try the microphone bonus round to earn gems!`,`Not enough gems yet! Read out loud in the bonus round to earn gems!`]},ou=e=>[`You did it! The ${e} is amazed by your reading! Here comes your crown!`,`Wow! You beat the ${e} with your super reading! Take your crown!`,`The ${e} gives up! You are the reading champion! Here comes your crown!`],su=t({audioGraph:()=>mu,isMuted:()=>_u,loadAudioBuffer:()=>xu,setMuted:()=>gu,sfxArmorPop:()=>Lu,sfxBoing:()=>Mu,sfxBonk:()=>Au,sfxClick:()=>Ru,sfxCoin:()=>Cu,sfxCorrect:()=>wu,sfxDoorOpen:()=>Nu,sfxFireworks:()=>Ou,sfxGem:()=>Bu,sfxGiggle:()=>Iu,sfxJump:()=>Eu,sfxKeyJingle:()=>Pu,sfxLand:()=>zu,sfxLevelStart:()=>Vu,sfxPause:()=>Hu,sfxPlink:()=>ku,sfxPop:()=>Du,sfxResume:()=>Uu,sfxRoar:()=>Fu,sfxStar:()=>Wu,sfxStarGrab:()=>Gu,sfxStomp:()=>ju,sfxWrong:()=>Tu,speak:()=>_d,speakLine:()=>gd,speakVariant:()=>hd,unlockAudio:()=>hu}),cu=null,lu=null,uu=!1,du=!1,fu=null;function pu(){if(!cu){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;cu=new e,lu=cu.createGain(),lu.gain.value=.5,lu.connect(cu.destination)}return cu}function mu(){let e=pu();return e?{ctx:e,master:lu}:null}function hu(){if(du)return;du=!0;let e=pu();if(e&&e.state===`suspended`&&e.resume(),e)for(let e of Object.values(Hl.sfx))xu(`audio/${e}`).catch(()=>{});try{if(`speechSynthesis`in window){let e=new SpeechSynthesisUtterance(` `);e.volume=0,speechSynthesis.speak(e)}}catch{}}function gu(e){uu=e,lu&&(lu.gain.value=e?0:.5),e&&dd()}function _u(){return uu}function J({type:e=`sine`,from:t=440,to:n=null,dur:r=.15,at:i=0,vol:a=.5}){let o=pu();if(!o||uu)return;let s=o.currentTime+i,c=o.createOscillator(),l=o.createGain();c.type=e,c.frequency.setValueAtTime(t,s),n!==null&&c.frequency.exponentialRampToValueAtTime(Math.max(1,n),s+r),l.gain.setValueAtTime(a,s),l.gain.exponentialRampToValueAtTime(.001,s+r),c.connect(l).connect(lu),c.start(s),c.stop(s+r+.02)}var vu=null;function yu(e){if(!vu){vu=e.createBuffer(1,e.sampleRate*.5,e.sampleRate);let t=vu.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}return vu}var bu=new Map;function xu(e){if(!bu.has(e)){let t=fetch(e).then(e=>{if(!e.ok)throw Error(`audio fetch ${e.status}`);return e.arrayBuffer()}).then(e=>cu.decodeAudioData(e)).then(ld);t.catch(()=>bu.delete(e)),bu.set(e,t)}return bu.get(e)}function Su(e,{rate:t=1,vol:n=1,at:r=0}={}){let i=Hl.sfx[e];if(!i)return!1;let a=pu();return a?(uu||xu(`audio/${i}`).then(({buf:e,offset:i,dur:o})=>{let s=a.currentTime+r,c=a.createBufferSource();c.buffer=e,c.playbackRate.value=t;let l=a.createGain();l.gain.value=n,c.connect(l).connect(lu),c.start(s,i,o/t+.05)},()=>{delete Hl.sfx[e]}),!0):!1}function Cu(){Su(`coin`)||(J({type:`square`,from:988,dur:.07,vol:.25}),J({type:`square`,from:1319,dur:.18,at:.07,vol:.25}))}function wu(){Su(`correct`)||[523.25,659.25,783.99,1046.5].forEach((e,t)=>{J({type:`triangle`,from:e,dur:.22,at:t*.09,vol:.4}),J({type:`sine`,from:e*2,dur:.18,at:t*.09,vol:.12})})}function Tu(){Su(`wrong`)||J({type:`sine`,from:220,to:110,dur:.3,vol:.4})}function Eu(){if(Su(`jump`,{rate:.95+Math.random()*.1}))return;let e=pu();if(!e||uu)return;let t=e.currentTime,n=e.createBufferSource();n.buffer=yu(e);let r=e.createBiquadFilter();r.type=`bandpass`,r.Q.value=4,r.frequency.setValueAtTime(400,t),r.frequency.exponentialRampToValueAtTime(2400,t+.25);let i=e.createGain();i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.001,t+.28),n.connect(r).connect(i).connect(lu),n.start(t),n.stop(t+.3)}function Du(){Su(`pop`,{rate:.85+Math.random()*.3})||J({type:`square`,from:200+Math.random()*500,to:60,dur:.12,vol:.3})}function Ou(){for(let e=0;e<6;e++)setTimeout(Du,e*180+Math.random()*100)}function ku(e=0){if(Su(`plink`,{rate:2**(e%16/12)}))return;let t=587*2**(e%16/12);J({type:`triangle`,from:t,dur:.12,vol:.25}),J({type:`sine`,from:t*2,dur:.09,vol:.08})}function Au(){Su(`bonk`)||J({type:`square`,from:150,to:70,dur:.14,vol:.35})}function ju(){Su(`stomp`)||(J({type:`square`,from:320,to:60,dur:.16,vol:.35}),J({type:`sine`,from:90,dur:.1,at:.02,vol:.3}))}function Mu(){Su(`boing`)||(J({type:`sine`,from:180,to:720,dur:.28,vol:.35}),J({type:`sine`,from:195,to:750,dur:.28,at:.03,vol:.18}))}function Nu(){Su(`dooropen`)||(J({type:`sawtooth`,from:110,to:330,dur:.35,vol:.16}),J({type:`triangle`,from:523,dur:.18,at:.28,vol:.3}),J({type:`triangle`,from:784,dur:.24,at:.38,vol:.3}))}function Pu(){Su(`keyjingle`)||[1047,1319,1568,2093,1568,2093].forEach((e,t)=>{J({type:`triangle`,from:e,dur:.14,at:t*.08,vol:.3})})}function Fu(){Su(`roar`)||(J({type:`sawtooth`,from:300,to:90,dur:.7,vol:.3}),J({type:`square`,from:150,to:60,dur:.5,at:.15,vol:.18}),J({type:`sawtooth`,from:500,to:200,dur:.4,at:.05,vol:.12}))}function Iu(){Su(`giggle`)||[880,1100,880,1320].forEach((e,t)=>{J({type:`triangle`,from:e,to:e*1.2,dur:.09,at:t*.09,vol:.22})})}function Lu(){Su(`armorpop`)||(J({type:`square`,from:180,to:60,dur:.12,vol:.35}),J({type:`triangle`,from:784,dur:.15,at:.08,vol:.3}),J({type:`triangle`,from:1047,dur:.2,at:.16,vol:.3}))}function Ru(){Su(`click`,{vol:.5})||J({type:`triangle`,from:660,to:880,dur:.06,vol:.12})}function zu(){Su(`land`)||J({type:`sine`,from:140,to:70,dur:.12,vol:.25})}function Bu(){Su(`gem`)||(J({type:`sine`,from:1319,dur:.1,vol:.25}),J({type:`sine`,from:1760,dur:.12,at:.08,vol:.25}),J({type:`sine`,from:2637,dur:.22,at:.16,vol:.2}))}function Vu(){Su(`levelstart`)||(J({type:`square`,from:392,dur:.12,vol:.2}),J({type:`square`,from:523,dur:.12,at:.16,vol:.2}),J({type:`square`,from:659,to:784,dur:.3,at:.32,vol:.25}))}function Hu(){Su(`pause`)||J({type:`triangle`,from:587,to:392,dur:.16,vol:.25})}function Uu(){Su(`resume`)||J({type:`triangle`,from:392,to:587,dur:.16,vol:.25})}function Wu(e=0){if(Su(`star`,{rate:[1,1.26,1.68][e%3]}))return;let t=[784,988,1319][e%3];J({type:`triangle`,from:t,dur:.3,vol:.35}),J({type:`sine`,from:t*2,dur:.24,at:.03,vol:.15})}function Gu(){Su(`stargrab`)||(J({type:`sine`,from:600,to:1800,dur:.3,vol:.35}),J({type:`triangle`,from:1200,dur:.2,at:.14,vol:.25}))}var Ku=.12,qu=.8,Ju=1.6,Yu=.2,Xu=.35,Zu=new Map,Qu=0,$u=[],ed=null,td=!1,nd=e=>e.trim().toLowerCase().replace(/\s+/g,` `);function rd(e,t=``){try{window.dispatchEvent(new CustomEvent(`wr-speech`,{detail:{speaking:e,text:t}}))}catch{}}var id=[];function ad(e){try{window.dispatchEvent(new CustomEvent(`wr-word`,{detail:{active:e}}))}catch{}}function od(e,t,n){let r=e.currentTime;id.push(setTimeout(()=>ad(!0),Math.max(0,(t-r-.08)*1e3)),setTimeout(()=>ad(!1),(t-r+n+.1)*1e3))}function sd(){for(let e of id)clearTimeout(e);id=[],ad(!1)}function cd(e){let t=nd(e);if(Vl.phrases[t])return[{file:Vl.phrases[t],word:!1}];let n=t.indexOf(`: `);if(n===-1)return Vl.words[t]?[{file:Vl.words[t],word:!0}]:null;let r=Vl.phrases[t.slice(0,n+1)];if(!r)return null;let i=t.slice(n+2),a=null;i.endsWith(` try again!`)&&(a=Vl.phrases[`try again!`],i=i.slice(0,-11));let o=Vl.words[i.replace(/[.!?]+$/,``).trim()];if(!o)return null;let s=[{file:r,word:!1},{file:o,word:!0}];return a&&s.push({file:a,word:!1}),s}function ld(e){let t=e.getChannelData(0),n=.004,r=0,i=t.length-1;for(;r<i&&Math.abs(t[r])<n;)r++;for(;i>r&&Math.abs(t[i])<n;)i--;let a=Math.round(e.sampleRate*.04);return r=Math.max(0,r-a),i=Math.min(t.length-1,i+a),{buf:e,offset:r/e.sampleRate,dur:(i-r)/e.sampleRate}}function ud(e){if(!Zu.has(e)){let t=fetch(`tts/${e}`).then(e=>{if(!e.ok)throw Error(`tts fetch ${e.status}`);return e.arrayBuffer()}).then(e=>cu.decodeAudioData(e)).then(ld);t.catch(()=>Zu.delete(e)),Zu.set(e,t)}return Zu.get(e)}function dd(){Qu++;for(let e of $u)try{e.onended=null,e.stop()}catch{}if($u=[],sd(),`speechSynthesis`in window&&speechSynthesis.cancel(),ed){td=!0;try{ed()}finally{td=!1}}}function fd(e,t,n){if(!(`speechSynthesis`in window)){setTimeout(n,100);return}try{let r=new SpeechSynthesisUtterance(e);fu&&(r.voice=fu),r.lang=`en-US`,r.rate=t,r.pitch=1.05,r.onend=n,r.onerror=n,setTimeout(n,1e3+e.length*130),speechSynthesis.speak(r)}catch{n()}}function pd(){if(!(`speechSynthesis`in window))return;let e=speechSynthesis.getVoices();e.length&&(fu=e.find(e=>e.lang===`en-US`&&/samantha|alex|google us/i.test(e.name))||e.find(e=>e.lang===`en-US`)||e.find(e=>e.lang&&e.lang.startsWith(`en`))||null)}typeof window<`u`&&`speechSynthesis`in window&&(pd(),speechSynthesis.addEventListener(`voiceschanged`,pd));var md=new Map;function hd(e,t,n={}){let r=t;if(r.length>1){let t=md.get(e);t&&(r=r.filter(e=>e!==t))}let i=r[Math.random()*r.length|0];return md.set(e,i),_d(i,n),i}function gd(e,t={}){return hd(e,au[e],t)}function _d(e,{rate:t=1,onend:n=null,echoWord:r=!1}={}){if(td)return;if(dd(),uu){n&&setTimeout(n,100);return}let i=!1,a=()=>{i||(i=!0,ed===a&&(ed=null),rd(!1),n&&n())};ed=a,rd(!0,e);let o=cd(e),s=o&&pu();if(!s){fd(e,t,a);return}let c=Qu;Promise.all(o.map(e=>ud(e.file))).then(e=>{if(c!==Qu)return;let t=s.currentTime+.03;$u=[],e.forEach(({buf:e,offset:n,dur:i},a)=>{let c=o[a].word&&r?2:1;for(let r=0;r<c;r++){let c=s.createBufferSource();if(c.buffer=e,o[a].word){c.playbackRate.value=qu;let e=s.createGain();e.gain.value=Ju,c.connect(e).connect(lu),t+=r===0?Yu:Xu;let a=i/qu;od(s,t,a),c.start(t,n,i),t+=a+Yu}else c.connect(lu),c.start(t,n,i),t+=i;t+=Ku,$u.push(c)}}),$u[$u.length-1].onended=a,setTimeout(a,(t-s.currentTime)*1e3+500)},()=>{c===Qu&&fd(e,t,a)})}var vd=t({MAX_PROFILES:()=>6,activeProfileId:()=>kd,activeProfileName:()=>Ad,addCoins:()=>Wd,addGems:()=>Gd,addPlaySeconds:()=>qd,beatBoss:()=>mf,buyHouseItem:()=>sf,clearHouseNews:()=>df,completeLevel:()=>hf,createProfile:()=>Md,deleteProfile:()=>Pd,devUnlockAll:()=>bf,foundKey:()=>nf,get:()=>Rd,getSecretStars:()=>$d,getStars:()=>Zd,grantHouseItem:()=>cf,hasHouseNews:()=>ff,hasKey:()=>tf,houseItemCount:()=>lf,isBossBeaten:()=>pf,isGameCompleted:()=>Yd,isLevelUnlocked:()=>gf,isMastered:()=>Ud,isSecretUnlocked:()=>rf,isWorldUnlocked:()=>_f,keyAnchorLevel:()=>af,listProfiles:()=>Od,load:()=>Id,markGameCompleted:()=>Xd,markHouseNews:()=>uf,markRepeatTipSeen:()=>Sf,ownsHouseItem:()=>of,peekProfile:()=>jd,recordWordMiss:()=>Hd,recordWordResult:()=>Vd,renameProfile:()=>Fd,reset:()=>vf,save:()=>Ld,selectProfile:()=>Nd,setCharacterPart:()=>xf,setDevUnlocked:()=>yf,setMic:()=>Tf,setMusic:()=>wf,setSecretStars:()=>ef,setSound:()=>Cf,setStars:()=>Qd,totals:()=>Jd,wordStats:()=>zd}),yd=`superKidsSightWords.v1`,bd=[`wordRunner.v3`,`wordRunner.v2`,`wordRunner.v1`],xd=`superKidsSightWords.profiles.v1`,Sd=()=>({coins:0,gems:0,sound:!0,music:!0,mic:!0,devUnlocked:!1,words:{},stars:{},unlocked:{world:0,level:0},keys:{},secretUnlocked:{},secretStars:{},character:{skin:0,hair:0,style:0,shirt:0,pants:0,outfit:0},bossBeaten:{},house:{owned:{},unseen:{},seenCoins:0,seenGems:0},seenRepeatTip:!1,stats:{playSeconds:0,wordsRead:0,coinsEarned:0},gameCompleted:!1}),Y=Sd(),Cd=null,wd=e=>`${yd}:${e}`,Td=()=>Math.random().toString(36).slice(2,8);function Ed(){try{localStorage.setItem(xd,JSON.stringify(Cd))}catch{}}function Dd(){if(Cd)return;try{let e=localStorage.getItem(xd);if(e){let t=JSON.parse(e);if(t&&Array.isArray(t.list)&&t.list.length){Cd=t,Cd.list.some(e=>e.id===Cd.active)||(Cd.active=Cd.list[0].id,Ed());return}}}catch{}let e=Td();Cd={active:e,list:[{id:e,name:``}]};try{let t=localStorage.getItem(yd);if(!t){let e=bd.map(e=>localStorage.getItem(e)).find(Boolean);if(e){let n={...Sd(),...JSON.parse(e)};for(let e=0;e<n.unlocked.world;e++)n.bossBeaten[e]=!0;t=JSON.stringify(n)}}t&&localStorage.setItem(wd(e),t);for(let e of[yd,...bd])localStorage.removeItem(e)}catch{}Ed()}function Od(){return Dd(),Cd.list.map(e=>({...e}))}function kd(){return Dd(),Cd.active}function Ad(){Dd();let e=Cd.list.find(e=>e.id===Cd.active);return e&&e.name||``}function jd(e){try{let t=localStorage.getItem(wd(e));if(t)return{...Sd(),...JSON.parse(t)}}catch{}return Sd()}function Md(e=``){if(Dd(),Cd.list.length>=6)return null;let t=Td();return Cd.list.push({id:t,name:e||``}),Cd.active=t,Y=Sd(),Ld(),Ed(),t}function Nd(e){return Dd(),Cd.list.some(t=>t.id===e)?(Cd.active=e,Ed(),Id()):Y}function Pd(e){if(Dd(),!Cd.list.some(t=>t.id===e))return;try{localStorage.removeItem(wd(e))}catch{}if(Cd.list.length<=1){Y=Sd(),Ld();return}let t=Cd.active===e;Cd.list=Cd.list.filter(t=>t.id!==e),t&&(Cd.active=Cd.list[0].id),Ed(),t&&Id()}function Fd(e,t){Dd();let n=Cd.list.find(t=>t.id===e);n&&(n.name=t||``,Ed())}function Id(){Dd();try{let e=localStorage.getItem(wd(Cd.active));Y=e?{...Sd(),...JSON.parse(e)}:Sd()}catch{Y=Sd()}return Y}function Ld(){Dd();try{localStorage.setItem(wd(Cd.active),JSON.stringify(Y))}catch{}}function Rd(){return Y}function zd(e){return Y.words[e.toLowerCase()]||null}function Bd(e){let t=e.toLowerCase();return Y.words[t]||(Y.words[t]={seen:0,correct:0,firstTryCorrect:0,missed:0}),Y.words[t]}function Vd(e,t){let n=Bd(e);n.seen++,n.correct++,t?n.firstTryCorrect++:n.missed++,Kd().wordsRead++,Ld()}function Hd(e){let t=Bd(e);t.seen++,t.missed++,Ld()}function Ud(e){return ql(zd(e))}function Wd(e){return Y.coins=Math.max(0,Y.coins+e),e>0&&(Kd().coinsEarned+=e),Ld(),Y.coins}function Gd(e){return Y.gems=Math.max(0,Y.gems+e),Ld(),Y.gems}function Kd(){return Y.stats={...Sd().stats,...Y.stats||{}},Y.stats}function qd(e){Kd().playSeconds+=e,Ld()}function Jd(){let e=Kd(),t=0,n=0;for(let e of Object.values(Y.stars))e>0&&n++,t+=e;let r=0;for(let e of Object.values(Y.secretStars))e>0&&(r++,t+=e);let i=0,a=0,o=0;for(let e of Object.values(Y.words))i+=e.correct,a+=e.firstTryCorrect,o+=e.seen;return{levelsCompleted:n,totalStars:t,secretsFound:r,wordsRead:Math.max(e.wordsRead,i),accuracy:o?Math.round(a/o*100):100,coinsEarned:Math.max(e.coinsEarned,Y.coins),playSeconds:e.playSeconds}}function Yd(){return!!Y.gameCompleted}function Xd(){Y.gameCompleted=!0,Ld()}function Zd(e,t){return Y.stars[`${e}-${t}`]||0}function Qd(e,t,n){let r=`${e}-${t}`;Y.stars[r]=Math.max(Y.stars[r]||0,n),Ld()}function $d(e){return Y.secretStars[e]||0}function ef(e,t){Y.secretStars[e]=Math.max(Y.secretStars[e]||0,t),Ld()}function tf(e,t){return!!Y.keys[`${e}-${t}`]}function nf(e,t){Y.keys[`${e}-${t}`]=!0,Y.secretUnlocked[e]=!0,Ld()}function rf(e){return Y.devUnlocked||!!Y.secretUnlocked[e]}function af(e){for(let t of Object.keys(Y.keys)){let[n,r]=t.split(`-`).map(Number);if(n===e)return r}return null}function of(e){return!!(Y.house&&Y.house.owned&&Y.house.owned[e])}function sf(e,t,n){if(of(e))return!1;if(n===`gems`){if(Y.gems<t)return!1;Y.gems-=t}else{if(Y.coins<t)return!1;Y.coins-=t}return Y.house||={owned:{}},Y.house.owned[e]=!0,Ld(),!0}function cf(e){Y.house||={owned:{}},Y.house.owned[e]=!0,Ld()}function lf(){return Y.house?Object.keys(Y.house.owned||{}).length:0}function uf(e){Y.house||={owned:{}},Y.house.unseen||(Y.house.unseen={}),Y.house.unseen[e]=!0,Ld()}function df(){Y.house||={owned:{}},Y.house.unseen={},Y.house.seenCoins=Y.coins,Y.house.seenGems=Y.gems,Ld()}function ff(e=[]){let t=Y.house||{};if(t.unseen&&Object.keys(t.unseen).length)return!0;let n=t.seenCoins||0,r=t.seenGems||0;return e.some(e=>{if(e.earned!==void 0||of(e.id))return!1;let t=e.currency===`gems`?Y.gems:Y.coins,i=e.currency===`gems`?r:n;return t>=e.cost&&i<e.cost})}function pf(e){return!!Y.bossBeaten[e]}function mf(e){Y.bossBeaten[e]=!0,Ld()}function hf(e,t,n){let r=Y.unlocked;e===r.world&&t===r.level&&(t+1<=n[e]?r.level++:e+1<n.length&&(r.world++,r.level=0)),Ld()}function gf(e,t){if(Y.devUnlocked)return!0;let n=Y.unlocked;return e<n.world||e===n.world&&t<=n.level}function _f(e){return Y.devUnlocked||e<=Y.unlocked.world}function vf(){Dd();try{for(let e of[wd(Cd.active),yd,...bd])localStorage.removeItem(e)}catch{}Y=Sd()}function yf(e){Y.devUnlocked=!!e,Ld()}function bf(e=5){Y.devUnlocked=!0;for(let t=0;t<e;t++)Y.bossBeaten[t]=!0;Ld()}function xf(e,t){Y.character={...Sd().character,...Y.character,[e]:t},Ld()}function Sf(){Y.seenRepeatTip=!0,Ld()}function Cf(e){Y.sound=e,Ld()}function wf(e){Y.music=e,Ld()}function Tf(e){Y.mic=e,Ld()}var Ef={skin:{label:`Skin`,colors:[16764830,15841673,13010498,9262372,5912613],names:[`Peach`,`Tan`,`Golden`,`Brown`,`Deep brown`]},hair:{label:`Hair`,colors:[5913886,1776411,15649116,13193006,3829720,14178992],names:[`Brown`,`Black`,`Blonde`,`Red`,`Blue`,`Pink`]},shirt:{label:`Shirt`,colors:[2718207,15022389,4431943,16498733,9315498,16740419],names:[`Blue`,`Red`,`Green`,`Yellow`,`Purple`,`Orange`]},pants:{label:`Pants`,colors:[3622735,1988272,7162945,3046706,12720219],names:[`Gray`,`Blue`,`Brown`,`Green`,`Pink`]}},Df={label:`Hair style`,names:[`Short`,`Spiky`,`Long`,`Buzz`,`Bald`],icons:[`🙂`,`🦔`,`👧`,`🧢`,`🥚`]},Of={label:`Outfit`,names:[`Shirt and pants`,`Dress`,`Overalls`],icons:[`👕`,`👗`,`👖`]};function kf(e){let t=t=>{let n=Ef[t];return n.colors[e[t]]??n.colors[0]};return{skin:t(`skin`),hair:t(`hair`),shirt:t(`shirt`),pants:t(`pants`),style:Df.names[e.style]?e.style:0,outfit:Of.names[e.outfit]?e.outfit:0}}var Af=1.7,jf=-24,Mf=-15,Nf=10.2,Pf=1,Ff=9.4,If=.12,Lf=.15,Rf=e=>`#${e.toString(16).padStart(6,`0`)}`;function zf(e,t,n,r=!1){let i=document.createElement(`canvas`);i.width=64,i.height=64;let o=i.getContext(`2d`);o.fillStyle=Rf(e),o.fillRect(0,0,64,64),n&&(o.fillStyle=Rf(t),o.fillRect(0,0,64,14)),o.fillStyle=`#222`,r?(o.fillRect(15,30,10,3),o.fillRect(39,30,10,3)):(o.fillRect(16,26,8,8),o.fillRect(40,26,8,8)),o.fillStyle=`rgba(255, 110, 110, 0.4)`,o.fillRect(9,38,10,5),o.fillRect(45,38,10,5),o.strokeStyle=`#a34d2a`,o.lineWidth=4,o.beginPath(),o.arc(32,42,10,.2*Math.PI,.8*Math.PI),o.stroke();let s=new wi(i);return s.magFilter=a,s.colorSpace=He,s}var Bf=e=>e<=2;function Vf(e,t){let n=new H;if(e>=3)return n;let r=xl,i=new W(r,t);if(i.scale.set(.53,.34,.56),i.position.set(-.025,1.44,0),n.add(i),e===1)for(let e=-1;e<=1;e++){let i=new W(r,t);i.scale.set(.12,.16,.12),i.position.set(e*.05,1.68,e*.14),n.add(i)}else if(e===2){let e=new W(r,t);e.scale.set(.14,.6,.48),e.position.set(-.26,1.3,0),n.add(e)}return n}function Hf(e,t,n){let r=new H,i=xl;if(e===1){let e=new W(i,t);e.scale.set(.56,.32,.44),e.position.y=.42,r.add(e)}else if(e===2){let e=new W(i,n);e.scale.set(.54,.36,.34),e.position.y=.66,r.add(e);for(let e of[-.26,.26])for(let t of[-.1,.1]){let a=new W(i,n);a.scale.set(.05,.3,.08),a.position.set(e,.97,t),r.add(a)}}return r}function Uf(){return kf(Rd().character)}function Wf(e,t){let n=e.userData.parts,[r,i,a,o]=n.mats;r.color.setHex(t.skin),i.color.setHex(t.hair),a.color.setHex(t.shirt),o.color.setHex(t.pants),n.faceTexOpen&&n.faceTexOpen.dispose(),n.faceTexBlink&&n.faceTexBlink.dispose(),n.faceTexOpen=zf(t.skin,t.hair,Bf(t.style)),n.faceTexBlink=zf(t.skin,t.hair,Bf(t.style),!0),n.face.map=n.faceTexOpen,n.face.needsUpdate=!0,n.head.material=[r,r,t.style===4?r:i,r,n.face,r],e.remove(n.hairExtra),n.hairExtra=Vf(t.style,i),e.add(n.hairExtra);let s=t.outfit===1?r:o;n.legL.children[0].material=s,n.legR.children[0].material=s,e.remove(n.outfitExtra),n.outfitExtra=Hf(t.outfit,a,o),e.add(n.outfitExtra)}function Gf(e=1,t=null){t||=Uf();let n=new H,r=xl,i=new G({color:t.skin}),a=new G({color:t.hair}),o=new G({color:t.shirt}),s=new G({color:t.pants}),c=zf(t.skin,t.hair,Bf(t.style)),l=zf(t.skin,t.hair,Bf(t.style),!0),u=new G({map:c}),d=new W(r,[i,i,t.style===4?i:a,i,u,i]);d.rotation.y=Math.PI/2,d.scale.set(.5,.5,.5),d.position.y=1.35;let f=new W(r,o);f.scale.set(.5,.6,.3),f.position.y=.8;let p=(e,t,n)=>{let i=new H,a=new W(r,e);return a.scale.set(t,n,t),a.position.y=-n/2,i.add(a),i},m=p(o,.16,.5);m.position.set(0,1.08,-.34);let h=p(o,.16,.5);h.position.set(0,1.08,.34);let g=t.outfit===1?i:s,_=p(g,.18,.5);_.position.set(0,.5,-.14);let v=p(g,.18,.5);v.position.set(0,.5,.14);let y=Vf(t.style,a),b=Hf(t.outfit,o,s);return n.add(d,f,m,h,_,v,y,b),n.scale.setScalar(e),n.userData.parts={head:d,body:f,armL:m,armR:h,legL:_,legR:v,face:u,faceTexOpen:c,faceTexBlink:l,hairExtra:y,outfitExtra:b,mats:[i,a,o,s]},n}var Kf=new Oi(1,1,1),qf=class{constructor(e,t=12){this.puffs=[];for(let n=0;n<t;n++){let t=new W(Kf,new Gr({color:14209732,transparent:!0,opacity:0,depthWrite:!1}));t.visible=!1,e.add(t),this.puffs.push({m:t,life:0,maxLife:1,vx:0,vy:0,grow:1})}this.idx=0}spawn(e,t,{vx:n=0,vy:r=1.2,size:i=.14,life:a=.35}={}){let o=this.puffs[this.idx];this.idx=(this.idx+1)%this.puffs.length,o.m.visible=!0,o.m.position.set(e,t+.06,.15),o.m.scale.setScalar(i),o.m.rotation.z=Math.random()*Math.PI,o.vx=n,o.vy=r,o.grow=1.6+Math.random(),o.life=o.maxLife=a}burst(e,t,n){let r=n>2.5?5:3;for(let n=0;n<r;n++)this.spawn(e+(Math.random()-.5)*.5,t,{vx:(n%2?1:-1)*(.8+Math.random()*1.2),vy:.8+Math.random()*1.2,size:.12+Math.random()*.1,life:.3+Math.random()*.15})}update(e){for(let t of this.puffs)if(t.m.visible){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.position.x+=t.vx*e,t.m.position.y+=t.vy*e,t.vy=Math.max(0,t.vy-4*e),t.m.scale.multiplyScalar(1+t.grow*e),t.m.material.opacity=.5*(t.life/t.maxLife)}}},Jf=class{constructor(e){this.group=Gf(1),e.add(this.group),this.parts=this.group.userData.parts;let t=new ki(.5,16);t.rotateX(-Math.PI/2),this.shadow=new W(t,new Gr({color:0,transparent:!0,opacity:.3,depthWrite:!1})),e.add(this.shadow),this.dust=new qf(e),this.reset(0,0)}reset(e,t){this.x=e,this.y=t,this.vy=0,this.grounded=!0,this.buffer=0,this.coyote=0,this.airJumps=Pf,this.fallPeak=t,this.stumbleT=0,this.squashT=0,this.walkPhase=0,this.idleT=Math.random()*5,this.lean=0,this.blinkT=2+Math.random()*3,this.blinkHold=0,this.runDustT=0,this.parts.face.map=this.parts.faceTexOpen,this.parts.face.needsUpdate=!0,this.faceYaw=-Math.PI/2,this.group.position.set(e,t,0),this.group.rotation.set(0,this.faceYaw,0),this.group.scale.setScalar(1);for(let e of this.parts.mats)e.emissive.setHex(0)}jump(){this.buffer=Lf}bounce(e){this.vy=e,this.grounded=!1,this.fallPeak=this.y}stumble(){this.stumbleT=.6;for(let e of this.parts.mats)e.emissive.setHex(11149858)}get isAirborne(){return!this.grounded}update(e,t,n,r){if(t!==0){let r=t>0?1:-1,i=this.x+t*e;n.groundTopAt(i+.7/2*r)<=this.y+.25&&(this.x=i)}if(this.buffer-=e,this.coyote-=e,this.grounded&&(this.coyote=If),this.buffer>0&&(this.grounded||this.coyote>0)?(this.vy=Nf,this.grounded=!1,this.buffer=0,this.coyote=0,this.airJumps=Pf,this.fallPeak=this.y,Eu()):this.buffer>0&&this.airJumps>0&&(this.vy=Ff,this.buffer=0,--this.airJumps,this.fallPeak=this.y,this.dust.burst(this.x,this.y,1.5),Eu()),this.grounded){let e=n.floorAt(this.x,this.y+.05);e<this.y-.02?(this.grounded=!1,this.vy=0,this.fallPeak=this.y):this.y=e}else{let t=this.vy>0?Mf:jf,i=this.y;if(this.vy+=t*e,this.y+=this.vy*e,this.fallPeak=Math.max(this.fallPeak,this.y),this.vy<=0){let e=n.floorAt(this.x,i+.05);e!==null&&this.y<=e&&(this.y=e,this.vy=0,this.grounded=!0,this.squashT=.16,this.dust.burst(this.x,this.y,this.fallPeak-e),r&&r.onLand&&r.onLand(this.fallPeak-e))}}let i=this.parts,a=this.grounded&&Math.abs(t)>.2;if(this.blinkHold>0?(this.blinkHold-=e,this.blinkHold<=0&&(i.face.map=i.faceTexOpen,i.face.needsUpdate=!0,this.blinkT=2+Math.random()*3)):(this.blinkT-=e,this.blinkT<=0&&(this.blinkHold=.13,i.face.map=i.faceTexBlink,i.face.needsUpdate=!0)),this.grounded){this.walkPhase+=e*Math.max(Math.abs(t),.001)*2.7;let n=a?Math.sin(this.walkPhase):0,r=a?Math.cos(this.walkPhase):0;if(a)i.armL.rotation.z=n*1.15,i.armR.rotation.z=-n*1.15,i.armL.rotation.x=.14+Math.max(0,n)*.12,i.armR.rotation.x=-.14-Math.max(0,-n)*.12,i.legL.rotation.z=-n*1,i.legR.rotation.z=n*1,this.runDustT-=e,this.runDustT<=0&&(this.runDustT=.28+Math.random()*.2,this.dust.spawn(this.x-Math.sign(t)*.3,this.y,{vx:-Math.sign(t)*(.6+Math.random()*.6),vy:.5+Math.random()*.5,size:.09+Math.random()*.05,life:.3}));else{this.idleT+=e;let t=Math.sin(this.idleT*2.3);i.armL.rotation.z=t*.06,i.armR.rotation.z=-t*.06,i.armL.rotation.x=.05,i.armR.rotation.x=-.05,i.legL.rotation.z=0,i.legR.rotation.z=0,i.body.scale.y=.6+t*.012,i.head.position.y=1.35+t*.012}i.legL.position.y=.5+Math.max(0,-r)*.12,i.legR.position.y=.5+Math.max(0,r)*.12}else{let e=Math.max(-.25,Math.min(.25,this.vy*.02));i.armL.rotation.z=2.4+e,i.armR.rotation.z=2.4-e,i.armL.rotation.x=.25,i.armR.rotation.x=-.25,i.legL.rotation.z=-.5-e*.5,i.legR.rotation.z=.3+e*.5,i.legL.position.y=.5,i.legR.position.y=.5}(a||!this.grounded)&&(i.body.scale.y=.6,i.head.position.y=1.35);let o=a?Math.abs(Math.cos(this.walkPhase))*.06:this.grounded?Math.max(0,Math.sin(this.idleT*2.3))*.015:0,s=Math.abs(t)>.2?-Math.PI/2+Math.sign(t)*(Math.PI/2-.61):-Math.PI/2;this.faceYaw+=(s-this.faceYaw)*Math.min(1,e*5),this.group.rotation.y=this.faceYaw;let c=a?-Math.sign(t)*.09:0;this.lean+=(c-this.lean)*Math.min(1,e*8);let l=1;this.grounded?this.squashT>0&&(this.squashT-=e,l=.82+.18*(1-Math.max(0,this.squashT)/.16)):l=1+Math.min(.14,Math.abs(this.vy)*.011);let u=1+(1-l)*.7;if(this.group.scale.set(u,l,u),this.group.position.set(this.x,this.y+o,0),this.group.rotation.z=this.lean,this.stumbleT>0&&(this.stumbleT-=e,this.group.rotation.z=this.lean+Math.sin(this.stumbleT*10)*.25*(Math.max(0,this.stumbleT)/.6),this.stumbleT<=0))for(let e of this.parts.mats)e.emissive.setHex(0);this.dust.update(e);let d=n.floorAt(this.x,this.y+.05);this.shadow.position.set(this.x,d+.02,0);let f=this.y-d,p=Math.max(.4,1-f*.12);this.shadow.scale.set(p,1,p),this.shadow.material.opacity=.3*Math.max(.3,1-f*.1)}},Yf=xl;function Xf(e,t,n=`normal`){let r=e.getContext(`2d`),i=e.width,a=e.height;r.fillStyle=n===`gray`?`#b9b9b9`:`#ffffff`,r.fillRect(0,0,i,a),r.lineWidth=10;let o=n===`check`||n===`reveal`;r.strokeStyle=o?`#2f9e42`:`#000000`,r.strokeRect(6,6,i-12,a-12),r.fillStyle=o?`#2f9e42`:n===`gray`?`#7c7c7c`:`#000000`;let s=n===`check`?`✓`:t,c=n===`check`?a*.8:a*.62,l=e=>`bold ${e}px 'Arial Rounded MT Bold', 'Comic Sans MS', Arial, sans-serif`;for(r.font=l(c);r.measureText(s).width>i-44&&c>24;)c-=6,r.font=l(c);r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(s,i/2,a/2+4)}function Zf(e,t){let n=document.createElement(`canvas`);n.width=288,n.height=144;let r=new wi(n);r.colorSpace=He,r.anisotropy=4;let i=new W(new Mi(e,t),new Gr({map:r,side:2}));return i.userData.canvas=n,i.userData.tex=r,i}function Qf(e,t,n){Xf(e.userData.canvas,t,n),e.userData.tex.needsUpdate=!0}function $f(e){e.traverse(e=>{e.geometry&&e.geometry!==Yf&&e.geometry.dispose(),e.material&&!Array.isArray(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),e.parent&&e.parent.remove(e)}var ep=1.5,tp=.7,np=3,rp=class{constructor(e,t,{x:n,word:r,distractors:i}){this.type=`blocks`,this.word=r,this.x=n,this.done=!1,this.attempts=0,this.respawns=0,this.level=t,this.explodeT=-1,this.lockT=0,this.swapPending=!1,this.group=new H,e.add(this.group),this.blocks=[];let a=new G({color:16757504,emissive:4008960});for(let e=0;e<3;e++){let e=new H,t=new W(Yf,a.clone());t.scale.setScalar(1.4);let n=Zf(2.1,1.05);n.position.z=.78,e.add(t,n),this.group.add(e),this.blocks.push({g:e,cube:t,sign:n,word:``,dead:!1,bounceT:0,shakeT:0,spinT:0,baseY:0})}this.pool=[r,...i],this.place(n+6)}place(e){let t=Xl(this.pool);for(let n=0;n<3;n++){let r=this.blocks[n],i=e+n*5;r.baseY=this.level.groundTopAt(i)+3.1,r.g.position.set(i,r.baseY,0),r.word=t[n],r.dead=!1,r.bounceT=0,r.shakeT=0,r.spinT=0,r.g.rotation.set(0,0,0),r.cube.material.color.setHex(16757504),Qf(r.sign,r.word,`normal`)}this.firstX=e,this.lastX=e+10,this.lockT=0,this.swapPending=!1}reshuffleWords(){let e=this.blocks.map(e=>e.word),t=Xl(this.pool);for(let n=0;n<8&&t.every((t,n)=>t===e[n]);n++)t=Xl(this.pool);for(let e=0;e<3;e++){let n=this.blocks[e];n.word=t[e],Qf(n.sign,n.word,`normal`)}}update(e,t,n){let r=performance.now()/1e3;this.lockT>0&&(this.lockT-=e);for(let t of this.blocks){let n=t.baseY+Math.sin(r*2+t.g.position.x)*.08;if(t.bounceT>0&&(t.bounceT-=e,n+=Math.sin((1-t.bounceT/.3)*Math.PI)*.55),t.shakeT>0&&(t.shakeT-=e,t.g.position.x+=Math.sin(t.shakeT*50)*.05),t.spinT>0){t.spinT-=e;let n=1-Math.max(0,t.spinT)/tp;t.g.rotation.y=(1-(1-n)**2)*Math.PI*2,this.swapPending&&n>=.5&&(this.swapPending=!1,this.reshuffleWords()),t.spinT<=0&&(t.g.rotation.y=0)}else this.lockT>0?t.g.rotation.z=Math.sin(this.lockT*14)*.09*Math.min(1,this.lockT):t.g.rotation.z!==0&&(t.g.rotation.z=0);t.g.position.y=n}if(this.explodeT>0&&(this.explodeT-=e,this.explodeT<=0&&this.explode(n)),!this.done){if(this.lockT<=0&&t.vy>0){let r=t.y+Af,i=r-t.vy*e;for(let e of this.blocks){if(e.dead)continue;let a=e.baseY-.7;if(i<=a+.1&&r>=a-.1&&Math.abs(t.x-e.g.position.x)<1.05){t.vy=-1.5,e.word===this.word?this.resolveCorrect(e,n):this.resolveWrong(e,n);return}}}t.x>this.lastX+2.2&&(this.respawns<1?(this.respawns++,this.place(this.lastX+7)):(this.place(this.firstX),n.bounceBack(this.firstX-4)),n.speakWord())}}resolveCorrect(e,t){this.done=!0,this.lockT=0,this.swapPending=!1,e.bounceT=.3,Qf(e.sign,``,`check`),wu();let n=e.g.position.clone();t.effects.confetti(n);for(let e=0;e<3;e++)t.effects.sparkle(new B(n.x+(e-1)*.5,n.y+1,0));let r=this.attempts===0;t.effects.floatText(new B(n.x,n.y+1.6,0),r?`+4`:`+3`),t.addCoins(r?4:3),r&&t.praiseFirstTry?t.praiseFirstTry():t.praise(),t.onCorrect(r),this.explodeT=2.2}explode(e){Du();for(let t of this.blocks)t.g.visible&&(e.effects.confetti(t.g.position.clone()),t.g.visible=!1)}resolveWrong(e,t){if(this.attempts++,e.shakeT=.4,Au(),t.stumble(),t.onWrong&&t.onWrong(),this.attempts>=np){this.resolveFail(t);return}_d(`Almost! The word is: ${this.word}. Try again!`,{rate:.9}),this.lockT=ep,this.swapPending=!0;for(let e of this.blocks)e.spinT=tp}resolveFail(e){this.done=!0,this.lockT=0,this.swapPending=!1;for(let e of this.blocks)e.word===this.word?(e.bounceT=.3,Qf(e.sign,e.word,`reveal`)):(e.cube.material.color.setHex(9079434),Qf(e.sign,e.word,`gray`));e.onFail&&e.onFail(),this.explodeT=2.6}clampX(){return 1/0}debugResolve(e,t){let n=this.blocks.find(t=>!t.dead&&(e?t.word===this.word:t.word!==this.word));n&&(e?this.resolveCorrect(n,t):this.resolveWrong(n,t))}passedX(){return this.explodeT>0?1/0:this.lastX+4}dispose(){$f(this.group)}},ip=[0,2,4],ap=class{constructor(e,t,{x:n,wallX:r,groundY:i,word:a,distractors:o}){this.type=`doors`,this.word=a,this.x=n,this.wallX=r,this.groundY=i,this.done=!1,this.opened=-1,this.attempts=0,this.cooldown=0,this.group=new H,this.group.position.set(r,i,0),e.add(this.group);let s=new G({color:9263659}),c=new G({color:11104059});for(let e of[-1,1])for(let t=0;t<7;t++){let n=new W(Yf,t+e&1?s:c);n.position.set(0,t+.5,e),this.group.add(n)}for(let e=-1;e<=1;e++){let t=new W(Yf,c);t.position.set(0,6.75,e),t.scale.set(1.3,.5,1),this.group.add(t)}let l=Xl([a,...o]);this.doors=ip.map((e,t)=>{let n=new H;n.position.set(0,e,-.7);let r=new W(Yf,new G({color:11893052}));r.scale.set(.7,1.9,1.4),r.position.set(0,.95,.7);let i=new W(Yf,new G({color:16766282}));i.scale.setScalar(.2),i.position.set(-.44,.95,1.1),n.add(r,i),this.group.add(n);let a=Zf(1.9,.95);return a.position.set(-2.3,e+1.15,1.3),Qf(a,l[t],`normal`),this.group.add(a),{hinge:n,sign:a,word:l[t],tier:e,dead:!1,shakeT:0,openT:-1}})}update(e,t,n){this.cooldown-=e;for(let t of this.doors)t.shakeT>0&&(t.shakeT-=e,t.hinge.rotation.y=Math.sin(t.shakeT*40)*.08,t.shakeT<=0&&(t.hinge.rotation.y=0)),t.openT>=0&&t.openT<1&&(t.openT=Math.min(1,t.openT+e*2.2),t.hinge.rotation.y=-(1-(1-t.openT)**3)*1.9);if(!this.done){if(this.opened===-1&&this.cooldown<=0&&t.grounded&&t.x>this.wallX-1.35){let e=t.y-this.groundY,r=ip.findIndex(t=>Math.abs(e-t)<.7);r>=0&&this.resolveTier(r,n)}this.opened!==-1&&t.x>this.wallX+2&&(this.done=!0)}}resolveTier(e,t){let n=this.doors[e];if(n.word===this.word){this.opened=e,n.openT=0,Nu(),t.effects.confetti(new B(this.wallX,this.groundY+n.tier+1.5,.5)),t.effects.floatText(new B(this.wallX,this.groundY+n.tier+2.6,0),`+3`),t.addCoins(3);let r=this.attempts===0;r&&t.praiseFirstTry?t.praiseFirstTry():t.praise(),t.onCorrect(r)}else this.attempts++,n.dead=!0,n.shakeT=.4,Qf(n.sign,n.word,`gray`),Tu(),t.onWrong&&t.onWrong(),this.cooldown=1.4,t.bounceBack(this.wallX-8),_d(`Almost! The word is: ${this.word}. Try again!`,{rate:.9})}clampX(){return this.opened===-1?this.wallX-.85:1/0}debugResolve(e,t){if(this.opened!==-1)return;let n=this.doors.findIndex(t=>!t.dead&&(e?t.word===this.word:t.word!==this.word));n>=0&&this.resolveTier(n,t)}passedX(){return this.wallX+4}dispose(){$f(this.group)}};function op(){let e=new H,t=new G({color:16766282,emissive:7820544}),n=new W(Yf,t);n.scale.setScalar(.7);let r=new W(Yf,t);return r.scale.setScalar(.7),r.rotation.z=Math.PI/4,e.add(n,r),e}var sp=class{constructor(e,t,{x:n,reviews:r,onGem:i,onDone:a}){this.type=`stars`,this.level=t,this.x=n,this.reviews=r,this.onGem=i,this.onDone=a,this.idx=0,this.done=!1,this.warned=!1,this.pending=0,this.group=new H,e.add(this.group),this.stars=[0,1].map(()=>{let e=new H,t=op(),n=Zf(1.8,.9);return n.position.y=-1.15,e.add(t,n),this.group.add(e),{holder:e,star:t,sign:n,word:``,taken:!1}}),r.length?this.present(n+5):this.finish()}get word(){let e=this.reviews[this.idx];return e?e.word:``}present(e){let t=this.reviews[this.idx],n=Xl([t.word,t.distractor]);for(let t=0;t<2;t++){let r=this.stars[t],i=e+t*6;r.baseY=this.level.groundTopAt(i)+3.1,r.holder.position.set(i,r.baseY,0),r.holder.visible=!0,r.word=n[t],r.taken=!1,Qf(r.sign,r.word,`normal`)}this.lastX=e+6,this.warned=!1}update(e,t,n){let r=performance.now()/1e3;for(let t of this.stars)t.star.rotation.y+=e*2,t.baseY!==void 0&&(t.holder.position.y=t.baseY+Math.sin(r*3+t.holder.position.x)*.12);if(!this.done){if(this.pending>0){this.pending-=e,this.pending<=0&&(this.present(t.x+5),n.speakWord());return}for(let e of this.stars){if(e.taken||!e.holder.visible)continue;let r=Math.abs(t.x-e.holder.position.x),i=e.holder.position.y;if(r<.8&&t.vy>.5&&t.y+1.7>i-.7&&t.y<i+.5){e.taken=!0,e.word===this.word?this.grabCorrect(e,n):this.grabWrong(e,n);return}}t.x>this.lastX+2.2&&(this.warned?this.advance(n):(this.warned=!0,this.present(t.x+5),n.speakWord()))}}grabCorrect(e,t){Gu(),t.effects.confetti(e.holder.position.clone()),t.effects.floatText(new B(e.holder.position.x,e.holder.position.y+1.2,0),`+1`),this.onGem(),!this.warned&&t.praiseFirstTry?t.praiseFirstTry():t.praise();for(let e of this.stars)e.holder.visible=!1;this.advance(t,!0)}grabWrong(e,t){e.holder.visible=!1,Tu(),t.onWrong&&t.onWrong(),this.warned?this.advance(t):(this.warned=!0,_d(`Almost! The word is: ${this.word}.`,{rate:.9}))}advance(e,t=!1){this.idx++;for(let e of this.stars)e.holder.visible=!1;this.idx>=this.reviews.length?this.finish():this.pending=t?.7:.25}finish(){this.done=!0;for(let e of this.stars)e.holder.visible=!1;this.onDone&&this.onDone()}clampX(){return 1/0}debugResolve(e,t){let n=this.stars.find(t=>!t.taken&&(e?t.word===this.word:t.word!==this.word));n&&(n.taken=!0,e?this.grabCorrect(n,t):this.grabWrong(n,t))}dispose(){$f(this.group)}},cp=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],lp=new Map;function up(e){if(!lp.has(e)){let t=fetch(e).then(t=>{if(!t.ok)throw Error(`vox model ${e}: HTTP ${t.status}`);return t.json()}).then(e=>({name:e.name,parts:e.parts.map(t=>({name:t.name,tintable:!!t.tintable,offset:t.offset,geometry:dp(t,t.origin,e.voxelSize)}))}));t.catch(()=>lp.delete(e)),lp.set(e,t)}return lp.get(e)}function dp(e,t,n){let r=e.positions.length/3,i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*3);for(let s=0;s<r;s++)for(let r=0;r<3;r++)i[s*3+r]=(e.positions[s*3+r]+t[r])*n,a[s*3+r]=cp[e.normals[s]][r],o[s*3+r]=e.colors[s*3+r]/255;let s=new hr;return s.setAttribute(`position`,new er(i,3)),s.setAttribute(`normal`,new er(a,3)),s.setAttribute(`color`,new er(o,3)),s.setIndex(e.indices),s}function fp(e,{materials:t={}}={}){let n=new H,r={};for(let i of e.parts){let e=t[i.name]||new G({vertexColors:!0});e.vertexColors=!0;let a=new W(i.geometry,e);a.name=i.name,a.position.fromArray(i.offset),n.add(a),r[i.name]=a}return{group:n,parts:r}}var pp=xl,mp=10.5,hp=[{name:`Meatball Monster`,color:9063213},{name:`Syrup Serpent`,color:9062938},{name:`Frost Yeti`,color:15660799},{name:`Crystal Golem`,color:10448852},{name:`Cloud Dragon`,color:12575999}];function gp(e){let t=new H,n=[],r=[],i=5,a=null,o=null,s=(e,r,i=null)=>(a={pupils:[],brows:[]},up(`./models/${e}.json`).then(e=>{let{group:o,parts:s}=fp(e);t.add(o),n.push(...r.map(e=>s[e])),s.browL.visible=s.browR.visible=!1,a.pupils.push(s.pupilL,s.pupilR),a.brows.push(s.browL,s.browR),i&&i(s)}).catch(e=>console.error(`boss model failed to load:`,e)));return e===0?(o=s(`boss-meatball`,[`armL`,`armR`]),r=[[-1.04,1.55,.85],[-.52,1.55,.88],[0,1.55,.9],[.52,1.55,.88],[1.04,1.55,.85]],i=5):e===1?(o=s(`boss-serpent`,[`head`],e=>{for(let t of[e.pupilL,e.pupilR,e.browL,e.browR])e.head.add(t),t.position.sub(e.head.position)}),r=[[0,.7,1.05],[.25,1.55,.85],[-.2,2.55,.75],[.15,3.55,.68],[0,4.6,.85]],i=5.2):e===2?(o=s(`boss-yeti`,[`armL`,`armR`]),r=[[-1,1.5,1],[-.5,1.5,1.02],[0,1.5,1.05],[.5,1.5,1.02],[1,1.5,1]],i=5.1):e===3?(o=s(`boss-golem`,[`armL`,`armR`],e=>{e.shards.material.emissive.setHex(4928104)}),r=[[-.96,1.45,.8],[-.48,1.45,.83],[0,1.45,.86],[.48,1.45,.83],[.96,1.45,.8]],i=5.2):(o=s(`boss-dragon`,[`wingL`,`wingR`]),r=[[-.76,2,.75],[-.38,2,.78],[0,2,.8],[.38,2,.78],[.76,2,.75]],i=5.2),t.rotation.y=-.42,{group:t,arms:n,armor:r,top:i,face:a,ready:o}}function _p(){let e=new H,t=new G({color:16766282,emissive:7820544}),n=new W(pp,t);n.scale.set(.85,.3,.85),e.add(n);for(let n of[-.3,0,.3]){let r=new W(pp,t);r.scale.set(.18,.32,.18),r.position.set(n,.3,0),e.add(r)}let r=new W(pp,new G({color:15684432,emissive:5574929}));return r.scale.setScalar(.2),r.position.set(0,0,.44),e.add(r),e}var vp=class{constructor(e,t,n,r){this.scene=e,this.effects=n,this.level=r,this.def=hp[t],this.hp=5,this.state=`enter`,this.t=0,this.throwCool=2.5,this.stepPhase=0;let i=gp(t);this.group=i.group,this.arms=i.arms,this.top=i.top,this.face=i.face,this.blinkT=1.5+Math.random()*2.5,this.blinkHold=0,this.flashT=0,e.add(this.group),this.armor=i.armor.map(([e,t,n])=>{let r=new W(pp,new G({color:16766282,emissive:6704384}));return r.scale.setScalar(.5),r.position.set(e,t,n),this.group.add(r),{m:r,popT:-1,vx:0,vy:0}});let a=()=>{this.flashMats=[];let e=new Set;this.group.traverse(t=>{t.isMesh&&!e.has(t.material)&&(e.add(t.material),this.flashMats.push({mat:t.material,base:t.material.emissive.getHex()}))})};a(),i.ready?.then(a),this.projectiles=[0,1].map(()=>{let t=new W(pp,new G({color:this.def.color,emissive:3351040}));return t.scale.setScalar(.8),t.visible=!1,e.add(t),{m:t,on:!1,mode:`held`,t:0,x:0,y:0,x0:0,y0:0,x1:0,dur:1.35}}),this.crown=_p(),this.crown.visible=!1,e.add(this.crown),this.coinTimer=0}enterAt(e){this.holdX=e,this.x=e+8}settle(){(this.state===`enter`||this.state===`roar`)&&(this.x=this.holdX,this.state=`idle`,this.t=0)}clearHeld(){for(let e of this.projectiles)e.on&&e.mode===`held`&&(e.on=!1,e.m.visible=!1)}hit(){this.hp--;let e=this.armor[this.hp];if(e){e.popT=0,e.vx=-3-Math.random()*2,e.vy=7,e.m.scale.setScalar(.7);let t=new B;e.m.getWorldPosition(t),this.effects.confetti(t),this.effects.sparkle(t)}Lu(),this.clearHeld(),this.flashT=.15;for(let e of this.face.brows)e.visible=!0;this.state=`hurt`,this.t=0}taunt(){this.state!==`idle`&&this.state!==`dizzy`||(this.clearHeld(),Iu(),this.state=`taunt`,this.t=0)}startDefeat(e,t){this.clearHeld();for(let e of this.projectiles)e.on=!1,e.m.visible=!1;this.state=`defeat`,this.t=0,this.coinTimer=0,Ou(),this.effects.fireworks(new B(this.x,3,0)),e.addCoins(10),this.effects.floatText(new B(this.x,this.top+1,0),`+10`)}updateProjectiles(e,t,n){for(let r of this.projectiles)if(r.on){if(r.mode===`held`)r.x=this.x,r.y=this.group.position.y+this.top+.9,r.m.scale.setScalar(.6+Math.abs(Math.sin(r.t*14))*.35),r.t+=e;else if(r.mode===`fly`){r.t+=e;let t=Math.min(1,r.t/r.dur);r.x=r.x0+(r.x1-r.x0)*t;let n=this.level.groundTopAt(r.x1)+.4;r.y=r.y0+(n-r.y0)*t+Math.sin(t*Math.PI)*3.4,r.m.rotation.z-=e*7,t>=1&&(r.mode=`roll`,r.t=0,ju(),this.effects.sparkle(new B(r.x,r.y,0)))}else if(r.t+=e,r.x-=e*2.4,r.y=this.level.groundTopAt(r.x)+.4,r.m.rotation.z+=e*6,r.t>2.4||r.x<t.x-2.5){r.on=!1,r.m.visible=!1,this.effects.sparkle(new B(r.x,r.y,0));continue}r.mode!==`held`&&Math.abs(r.x-t.x)<.75&&t.y<r.y+.6&&t.y+1.7>r.y-.6&&(r.on=!1,r.m.visible=!1,this.effects.sparkle(new B(r.x,r.y,0)),n.stumble()),r.m.position.set(r.x,r.y,0)}}update(e,t,n,{battle:r=!1,challengeActive:i=!1,minX:a=0}={}){this.t+=e;let o=this.group;for(let t of this.armor)t.popT<0||(t.popT+=e,t.vy-=20*e,t.m.position.x+=t.vx*e,t.m.position.y+=t.vy*e,t.m.rotation.z+=e*9,t.m.scale.setScalar(t.popT<.55?.7:Math.max(.01,.7*(1-(t.popT-.55)/.35))),t.popT>.9&&(t.m.visible=!1,t.popT=-1));for(let e=0;e<this.hp;e++){let t=this.armor[e];t&&t.popT<0&&(t.m.material.emissiveIntensity=.85+Math.sin(this.t*3.2+e*1.3)*.35)}if(this.blinkHold>0){if(this.blinkHold-=e,this.blinkHold<=0){for(let e of this.face.pupils)e.scale.y=e.scale.x;this.blinkT=1.5+Math.random()*2.5}}else if(this.blinkT-=e,this.blinkT<=0){this.blinkHold=.12;for(let e of this.face.pupils)e.scale.y=e.scale.x*.15}if(this.flashT>0)if(this.flashT-=e,this.flashT>0)for(let e of this.flashMats)e.mat.emissive.setHex(10066329);else for(let e of this.flashMats)e.mat.emissive.setHex(e.base);this.updateProjectiles(e,t,n);let s=0,c=0,l=1,u=1,d=[0,0];if(this.state===`enter`){this.x=Math.max(this.holdX,this.x-e*5),s=Math.abs(Math.sin(this.t*9))*.35;let t=Math.floor(this.t*9/Math.PI);t!==this.stepPhase&&(this.stepPhase=t,ju()),this.x<=this.holdX&&(this.state=`roar`,this.t=0,Fu())}else if(this.state===`roar`){let e=Math.min(1,this.t/1);l=1+Math.sin(e*Math.PI)*.16,d[0]=Math.sin(e*Math.PI)*2.2,d[1]=-Math.sin(e*Math.PI)*2.2,c=Math.sin(this.t*24)*.04*(1-e),e>=1&&(this.state=`idle`,this.t=0)}else if(this.state===`idle`||this.state===`dizzy`){let n=Math.max(this.x,t.x+mp,a),o=Math.min(e*6,n-this.x);if(this.x+=o,s=o>.01?Math.abs(Math.sin(this.t*8))*.25:.12+Math.sin(this.t*2.2)*.12,u=1+Math.sin(this.t*2.2)*.012,c=Math.sin(this.t*(this.state===`dizzy`?3:1.7))*(this.state===`dizzy`?.14:.05),d[0]=Math.sin(this.t*2)*.18,d[1]=-Math.sin(this.t*2)*.18,this.throwCool-=e,r&&!i&&this.state===`idle`&&this.throwCool<=0){let e=this.projectiles.find(e=>!e.on);e&&(e.on=!0,e.mode=`held`,e.t=0,e.m.visible=!0,e.m.rotation.z=0,this.state=`windup`,this.t=0)}}else if(this.state===`windup`){let e=Math.min(1,this.t/.8);if(d[0]=e*2.4,s=Math.sin(this.t*2.2)*.1,e>=1){let e=this.projectiles.find(e=>e.on&&e.mode===`held`);e&&(e.mode=`fly`,e.t=0,e.x0=this.x,e.y0=this.group.position.y+this.top+.9,e.x1=Math.min(t.x+4.5,this.x-3),e.m.scale.setScalar(.8)),this.throwCool=3.4,this.state=`idle`,this.t=0}}else if(this.state===`hurt`){let e=Math.min(1,this.t/1);if(c=-Math.sin(e*Math.PI)*.4,s=-Math.sin(e*Math.PI)*.25,u=1-Math.sin(Math.min(1,e*2)*Math.PI)*.16+Math.sin(this.t*18)*.03*(1-e),d[0]=Math.sin(e*Math.PI)*1.4,d[1]=-Math.sin(e*Math.PI)*1.4,e>=1){for(let e of this.face.brows)e.visible=!1;this.state=this.hp>0?`idle`:`dizzy`,this.t=0}}else if(this.state===`taunt`){let e=Math.min(1,this.t/.9);o.rotation.y=-.42+Math.sin(this.t*14)*.3*(1-e),l=1-Math.sin(e*Math.PI)*.12,e>=1&&(o.rotation.y=-.42,this.state=this.hp>0?`idle`:`dizzy`,this.t=0)}else if(this.state===`defeat`){let t=Math.min(1,this.t/2.4);c=Math.sin(this.t*8)*.2*t,s=-t*t*2.4,l=1-t*.4,this.coinTimer-=e,this.coinTimer<=0&&(this.coinTimer=.18,this.effects.confetti(new B(this.x+(Math.random()-.5)*2,this.top*(1-t)+1,0)),Cu()),t>=1&&(o.visible=!1,this.state=`crownDrop`,this.t=0,this.crown.visible=!0,this.crown.position.set(this.x,this.top+1,0))}else if(this.state===`crownDrop`){let n=Math.min(1,this.t/.9),r=1-(1-n)**3,i=t.x,a=t.y+Af+.25;this.crown.position.x+=(i-this.crown.position.x)*r,this.crown.position.y=this.crown.position.y+(a-this.crown.position.y)*r+Math.sin(n*Math.PI)*.6*e,this.crown.rotation.y+=e*4,n>=1&&(this.state=`gone`,this.effects.sparkle(this.crown.position.clone()),Cu())}else this.crown.position.set(t.x,t.y+Af+.25,0),this.crown.rotation.y+=e*1.5;if(o.visible){let e=this.level.groundTopAt(this.x);o.position.set(this.x,e+s,0),o.rotation.z=c;let t=l*(1+(1-u)*.6);o.scale.set(t,l*u,t),this.arms.forEach((e,t)=>{e.rotation.z=(t===0?1:-1)*d[t]})}}dispose(){$f(this.group),$f(this.crown);for(let e of this.projectiles)e.m.material.dispose(),this.scene.remove(e.m)}},yp=36,bp=8,xp=8,Sp=5,Cp=4,wp=[16732754,16766784,6942894,4244735,14696699,16755520],Tp=[16766784,16770431,16774064,16777215,16755520],Ep=new Oi(1,1,1),Dp=new fn,Op=class{constructor(e){this.material=new Gr({transparent:!0,opacity:1,depthWrite:!1}),this.mesh=new mi(Ep,this.material,yp),this.mesh.instanceMatrix.setUsage(Je),this.mesh.visible=!1,this.mesh.frustumCulled=!1,this.data=new Float32Array(yp*11),this.count=0,this.life=0,this.maxLife=1,this.gravity=-9,e.add(this.mesh)}fire(e,{speed:t=6,up:n=5,life:r=1.1,gravity:i=-9,count:a=yp,size:o=.2,palette:s=wp}={}){this.count=Math.min(a,yp);let c=new U;for(let r=0;r<this.count;r++){let i=r*11;this.data[i]=e.x,this.data[i+1]=e.y,this.data[i+2]=e.z;let a=Math.random()*Math.PI*2,l=Math.random()*t;this.data[i+3]=Math.cos(a)*l,this.data[i+4]=Math.random()*n+1,this.data[i+5]=Math.sin(a)*l,this.data[i+6]=Math.random()*Math.PI,this.data[i+7]=Math.random()*Math.PI,this.data[i+8]=(Math.random()-.5)*16,this.data[i+9]=(Math.random()-.5)*16,this.data[i+10]=o*(.5+Math.random()),c.setHex(s[Math.random()*s.length|0]),this.mesh.setColorAt(r,c)}this.mesh.count=this.count,this.mesh.instanceColor.needsUpdate=!0,this.life=r,this.maxLife=r,this.gravity=i,this.material.opacity=1,this.mesh.visible=!0,this.write()}write(){let e=this.life/this.maxLife,t=Math.min(1,e*3);for(let e=0;e<this.count;e++){let n=e*11;Dp.position.set(this.data[n],this.data[n+1],this.data[n+2]),Dp.rotation.set(this.data[n+6],0,this.data[n+7]),Dp.scale.setScalar(this.data[n+10]*t),Dp.updateMatrix(),this.mesh.setMatrixAt(e,Dp.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}update(e){if(this.mesh.visible){if(this.life-=e,this.life<=0){this.mesh.visible=!1;return}for(let t=0;t<this.count;t++){let n=t*11;this.data[n+4]+=this.gravity*e,this.data[n]+=this.data[n+3]*e,this.data[n+1]+=this.data[n+4]*e,this.data[n+2]+=this.data[n+5]*e,this.data[n+6]+=this.data[n+8]*e,this.data[n+7]+=this.data[n+9]*e}this.write(),this.material.opacity=Math.min(1,this.life/this.maxLife*2)}}};function kp(e){let t=document.createElement(`canvas`);t.width=128,t.height=64;let n=t.getContext(`2d`);n.font=`bold 44px Arial Rounded MT Bold, Arial, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineWidth=8,n.strokeStyle=`#2c3e75`,n.strokeText(e,64,32),n.fillStyle=`#ffd93d`,n.fillText(e,64,32);let r=new wi(t);return r.colorSpace=He,r}function Ap(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);t.translate(32,32),t.fillStyle=`#fff6c8`,t.strokeStyle=`#ffd93d`,t.lineWidth=3,t.beginPath();for(let e=0;e<10;e++){let n=e%2?11:28,r=e/10*Math.PI*2-Math.PI/2;t[e?`lineTo`:`moveTo`](Math.cos(r)*n,Math.sin(r)*n)}t.closePath(),t.fill(),t.stroke();let n=new wi(e);return n.colorSpace=He,n}var jp=class{constructor(e){this.scene=e,this.bursts=[];for(let t=0;t<bp;t++)this.bursts.push(new Op(e));this.burstIdx=0,this.textures=new Map,this.sprites=[];for(let t=0;t<xp;t++){let t=new Fr(new xr({transparent:!0,depthWrite:!1}));t.scale.set(1.4,.7,1),t.visible=!1,t.userData.life=0,e.add(t),this.sprites.push(t)}let t=new Ni(.42,.55,24);this.rings=[];for(let n=0;n<Sp;n++){let n=new W(t,new Gr({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:2}));n.visible=!1,e.add(n),this.rings.push({m:n,life:0,maxLife:1,grow:4})}this.ringIdx=0,this.starTex=Ap(),this.stars=[];for(let t=0;t<Cp;t++){let t=new Fr(new xr({map:this.starTex,transparent:!0,depthWrite:!1}));t.visible=!1,e.add(t),this.stars.push({spr:t,life:0,maxLife:1})}this.starIdx=0,this.pendingFireworks=[]}nextBurst(){let e=this.bursts[this.burstIdx];return this.burstIdx=(this.burstIdx+1)%this.bursts.length,e}ringPulse(e,t=16777215,n=1){let r=this.rings[this.ringIdx];this.ringIdx=(this.ringIdx+1)%this.rings.length,r.m.material.color.setHex(t),r.m.position.copy(e),r.m.position.z+=.3,r.m.scale.setScalar(.5*n),r.grow=4.5*n,r.life=r.maxLife=.45,r.m.visible=!0}starPop(e,t=1){let n=this.stars[this.starIdx];this.starIdx=(this.starIdx+1)%this.stars.length,n.spr.position.copy(e),n.spr.position.z+=.35,n.spr.material.rotation=Math.random()*Math.PI,n.spr.scale.setScalar(.3*t),n.spr.userData.grow=3.6*t,n.life=n.maxLife=.4,n.spr.visible=!0}confetti(e){this.nextBurst().fire(e,{speed:5,up:7,life:1.4,gravity:-10}),this.starPop(e,1.2),this.ringPulse(e,16774064,1.2)}sparkle(e){this.nextBurst().fire(e,{speed:2.5,up:3.5,life:.6,gravity:-4,count:16,size:.13,palette:Tp}),this.ringPulse(e,16770431,.7)}fireworks(e){for(let t=0;t<6;t++)this.pendingFireworks.push({t:t*.35,pos:new B(e.x+(Math.random()-.5)*10,e.y+4+Math.random()*4,e.z-6-Math.random()*8)})}floatText(e,t){this.textures.has(t)||this.textures.set(t,kp(t));let n=this.sprites.find(e=>!e.visible)||this.sprites[0];n.material.map=this.textures.get(t),n.material.opacity=1,n.position.copy(e),n.userData.life=.9,n.scale.set(.3,.15,1),n.visible=!0}update(e){for(let t of this.bursts)t.update(e);for(let t of this.sprites){if(!t.visible)continue;if(t.userData.life-=e,t.userData.life<=0){t.visible=!1;continue}let n=.9-t.userData.life,r=Math.min(1,n/.16),i=r+Math.sin(r*Math.PI)*.22;t.scale.set(1.4*i,.7*i,1),t.position.y+=1.6*e,t.material.opacity=Math.min(1,t.userData.life*2)}for(let t of this.rings){if(!t.m.visible)continue;if(t.life-=e,t.life<=0){t.m.visible=!1;continue}let n=t.m.scale.x+t.grow*e;t.m.scale.setScalar(n),t.m.material.opacity=.65*(t.life/t.maxLife)}for(let t of this.stars){if(!t.spr.visible)continue;if(t.life-=e,t.life<=0){t.spr.visible=!1;continue}let n=t.spr.scale.x+t.spr.userData.grow*e;t.spr.scale.setScalar(n),t.spr.material.rotation+=e*2.5,t.spr.material.opacity=Math.min(1,t.life/t.maxLife*1.6)}if(this.pendingFireworks.length){for(let t of this.pendingFireworks)t.t-=e;let t=this.pendingFireworks.filter(e=>e.t<=0);if(t.length){this.pendingFireworks=this.pendingFireworks.filter(e=>e.t>0);for(let e of t)this.nextBurst().fire(e.pos,{speed:6,up:3,life:1.6,gravity:-5,size:.26})}}}},Mp={ArrowLeft:-1,KeyA:-1,ArrowRight:1,KeyD:1};function Np(e,t){let n=!1,r=!1,i=new Set,a={"-1":!1,1:!1},o=()=>{for(let e of[-1,1]){let n=[...i].some(t=>Mp[t]===e);n!==a[e]&&(a[e]=n,t.onMove&&t.onMove(e,n))}},s=e=>{e.target&&e.target.closest&&e.target.closest(`button`)||(e.preventDefault(),!n&&!r&&t.onJump(),n=!0)},c=()=>{n=!1},l=e=>{if(e.code in Mp){e.preventDefault(),i.add(e.code),o();return}e.code!==`Space`&&e.code!==`ArrowUp`&&e.code!==`KeyW`||(e.preventDefault(),!(e.repeat||r)&&(n||t.onJump(),r=!0))},u=e=>{if(e.code in Mp){i.delete(e.code),o();return}e.code!==`Space`&&e.code!==`ArrowUp`&&e.code!==`KeyW`||(r=!1)};return window.PointerEvent?(e.addEventListener(`pointerdown`,s),window.addEventListener(`pointerup`,c),window.addEventListener(`pointercancel`,c)):(e.addEventListener(`touchstart`,s,{passive:!1}),window.addEventListener(`touchend`,c),window.addEventListener(`touchcancel`,c),e.addEventListener(`mousedown`,s),window.addEventListener(`mouseup`,c)),window.addEventListener(`keydown`,l),window.addEventListener(`keyup`,u),{destroy(){e.removeEventListener(`pointerdown`,s),window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),e.removeEventListener(`touchstart`,s),window.removeEventListener(`touchend`,c),window.removeEventListener(`touchcancel`,c),e.removeEventListener(`mousedown`,s),window.removeEventListener(`mouseup`,c),window.removeEventListener(`keydown`,l),window.removeEventListener(`keyup`,u)}}}var Pp=4.5,Fp=2.5,Ip=3.4,Lp=1.9,Rp=6,zp=[16744272,12216520,5099745,10463450,16758605],Bp=xl,Vp=[`critter`,`critter-snail`,`critter-beetle`];function Hp(){let e=new H,t=new G({color:16744272,vertexColors:!0});e.userData.mat=t;let n=new Map;return e.userData.setVariant=r=>{let i=r%Vp.length;e.userData.variant=i,up(`./models/${Vp[i]}.json`).then(r=>{if(e.userData.variant===i){if(!n.has(i)){let a=fp(r,{materials:{body:t}}).group;n.set(i,a),e.add(a)}for(let[e,t]of n)t.visible=e===i}}).catch(e=>console.error(`critter model failed to load:`,e))},e.userData.setVariant(0),e}function Up(){let e=new H,t=new G({color:16766282,emissive:7820544});for(let[n,r,i,a]of[[0,.35,.5,.12],[0,-.35,.5,.12],[-.25,0,.12,.6],[.25,0,.12,.6]]){let o=new W(Bp,t);o.scale.set(i,a,.12),o.position.set(n,r+.5,0),e.add(o)}let n=new W(Bp,t);n.scale.set(.12,.7,.12),n.position.y=-.3;let r=new W(Bp,t);return r.scale.set(.3,.12,.12),r.position.set(.15,-.55,0),e.add(n,r),e}var Wp=class{constructor(e,t){this.cb=t,this.renderer=e,this.scene=new xn,this.camera=new Sa(50,window.innerWidth/window.innerHeight,.1,120),this.camera.position.set(3,4.2,14),this.lookTarget=new B(4,3,0);let n=new ua(16772815,6460572,1.05),r=new Da(16768166,1.55);r.position.set(4,10,6),this.scene.add(n,r),this.scene.userData.hemiLight=n,this.scene.userData.sunLight=r,this.level=new Bl(this.scene),this.player=new Jf(this.scene),this.effects=new jp(this.scene),this.critters=[];for(let e=0;e<6;e++){let e=Hp();e.visible=!1,this.scene.add(e),this.critters.push({g:e,x:0,dir:1,x0:0,x1:0,state:`off`,squashT:0})}this.keyMesh=Up(),this.keyMesh.visible=!1,this.scene.add(this.keyMesh),this.input=Np(e.domElement,{onJump:()=>{!this.running||this.paused||(this.phase===`bossIntro`?this.endIntro():this.player.jump())},onMove:(e,t)=>this.setMove(`key`,e,t)}),this.bossFight=null,this.running=!1,this.paused=!1,this.speed=0,this.elapsed=0,this.events=[],this.activeEv=null,this.stars=null,this.choice=!1,this.moveHeld={},this.shownControls=null,this.api={effects:this.effects,level:this.level,praise:()=>{this.firstTryStreak=0,gd(`recover`)},praiseFirstTry:()=>{this.firstTryStreak++,gd(this.firstTryStreak>=3?`streak`:`firstTry`)},addCoins:e=>this.addCoins(e),bounceBack:e=>this.bounceBack(e),speakWord:()=>this.repeatWord(),onCorrect:e=>this.onEventCorrect(e),onFail:()=>this.onEventFail(),onWrong:()=>{this.repeatTimer=Rp,this.autoRepeats=0,this.bossFight&&this.bossFight.taunt()},stumble:()=>{Tu(),this.player.stumble(),this.stumbleMul=.4,this.addCoins(-1)}}}startRun(e,t,{secret:n=!1,boss:r=!1}={}){this.worldIdx=e,this.levelIdx=t,this.secret=n,this.isBoss=r,this.levelWords=r?nu(e,zd):n?tu(e,zd):Kl(e,t),this.queue=Zl(this.levelWords,zd,{promotionPool:r||n?null:Yl(e)}),this.tierList=$l(e,this.queue),this.distractorPool=Ql(this.levelWords,this.queue),this.results=[],this.firstTryStreak=0,this.runCoins=0,this.runGems=0,this.keyFound=!1;let i=e*97+t*13+(n?7:1),a=!n&&!r&&(e+t)%2==0;this.data=r?Nl({seed:i,wordCount:this.queue.length,theme:e}):Ml({seed:i,wordCount:this.queue.length,theme:e,secret:n,hasKey:a}),this.level.build(this.data),this.clearEvents(),this.events=this.data.events,this.eventIdx=0,this.activeEv=null,this.spoken=!1,this.stars=null,this.phase=r?`bossIntro`:`run`,this.introT=0,this.introSpoke=!1,this.repeatTimer=0,this.autoRepeats=0,this.repeatTipT=0,this.bounce=null,this.stumbleMul=1,this.flagT=0,this.doneTimer=0;for(let t=0;t<this.critters.length;t++){let n=this.critters[t],r=this.data.critters[t];r?(n.state=`pace`,n.x0=r.x0,n.x1=r.x1,n.x=(r.x0+r.x1)/2,n.dir=1,n.squashT=0,n.g.visible=!0,n.g.scale.setScalar(1),n.g.userData.mat.color.setHex(zp[e]),n.g.userData.setVariant(e)):(n.state=`off`,n.g.visible=!1)}this.data.key?(this.keyMesh.visible=!0,this.keyMesh.position.set(this.data.key.x,this.data.key.y,0)):this.keyMesh.visible=!1,this.player.reset(2,this.data.groundY[2]),this.speed=0,this.setChoice(!1),this.moveHeld={},this.camera.position.set(this.player.x+3,4.2,14),r&&(this.bossFight=new vp(this.scene,e,this.effects,this.level),this.bossFight.enterAt(this.player.x+12)),this.cb.onDotsInit(this.queue.length),this.cb.onCoins(0),this.cb.onKey(!1),this.running=!0,this.paused=!1,this.syncControls()}stopRun(){this.running=!1,this.clearEvents(),this.setChoice(!1),this.syncControls()}setMove(e,t,n){this.moveHeld[(t<0?`L`:`R`)+e]=n}get moveDir(){let e=this.moveHeld;return(e.Rkey||e.Rbtn?1:0)-(e.Lkey||e.Lbtn?1:0)}setChoice(e){this.choice!==e&&(this.choice=e,this.syncControls())}get boostAllowed(){return this.bossFight?this.bossFight.state===`defeat`||this.bossFight.state===`crownDrop`||this.bossFight.state===`gone`:!0}get controlsMode(){return this.running?this.choice?`choice`:(this.phase===`run`||this.phase===`stars`||this.phase===`flagrun`)&&this.boostAllowed?`boost`:null:null}syncControls(){let e=this.controlsMode;e!==this.shownControls&&(this.shownControls=e,this.cb.onControls&&this.cb.onControls(e))}choiceZone(){let e=this.activeEv;if(e&&!e.done)return e.type===`blocks`?{engage:e.firstX-4.5,min:e.firstX-6,max:e.lastX+1.5}:{engage:e.wallX-8,min:e.wallX-10,max:1/0};if(this.stars&&!this.stars.done&&this.stars.reviews.length&&this.stars.pending<=0){let e=this.stars.stars.filter(e=>e.holder.visible&&!e.taken);if(e.length){let t=e.map(e=>e.holder.position.x);return{engage:Math.min(...t)-4,min:Math.min(...t)-5.5,max:Math.max(...t)+1.5}}}return null}clearEvents(){this.activeEv&&this.activeEv.dispose(),this.activeEv=null,this.stars&&this.stars.dispose(),this.stars=null,this.bossFight&&=(this.bossFight.dispose(),null)}pause(){this.paused=!0}resume(){this.paused=!1}currentWord(){return this.stars&&!this.stars.done?this.stars.word:this.activeEv&&!this.activeEv.done?this.activeEv.word:this.queue?this.queue[this.eventIdx]:null}get currentEvent(){return this.stars&&!this.stars.done?{type:`stars`,word:this.stars.word}:this.activeEv&&!this.activeEv.done?{type:this.activeEv.type,word:this.activeEv.word}:null}repeatWord(){let e=this.currentWord();this.running&&e&&_d(`Find the word: ${e}`,{rate:.85,echoWord:Math.random()<.4})}get boss(){return this.bossFight?{hp:this.bossFight.hp,phase:this.bossFight.state}:null}debugResolve(e=!0){if(this.running){if(this.phase===`bossIntro`&&this.endIntro(),this.stars&&!this.stars.done){this.stars.debugResolve(e,this.api);return}!this.activeEv&&this.eventIdx<this.events.length&&this.spawnEvent(),this.activeEv&&!this.activeEv.done&&this.activeEv.debugResolve(e,this.api)}}spawnEvent(){let e=this.events[this.eventIdx],t=this.queue[this.eventIdx],n=eu(t,this.distractorPool,this.tierList),r={...e,word:t,distractors:n};this.activeEv=e.type===`blocks`?new rp(this.scene,this.level,r):new ap(this.scene,this.level,r),this.spoken=!1}speakIntro(){let e=this.activeEv.word;_d(this.activeEv.type===`blocks`?`Bonk the block with the word: ${e}!`:`Jump through the door with the word: ${e}!`,{rate:.9,echoWord:Math.random()<.4}),this.repeatTimer=Rp,this.autoRepeats=0,Rd().seenRepeatTip||(Sf(),this.repeatTipT=3.2)}onEventCorrect(e){let t=this.activeEv?this.activeEv.word:this.stars&&this.stars.word;this.results.push({word:t,firstTry:e}),Vd(t,e),this.cb.onDot(this.results.length-1,e?`green`:`yellow`),this.bossFight&&this.bossFight.hit()}onEventFail(){this.firstTryStreak=0;let e=this.activeEv?this.activeEv.word:this.stars&&this.stars.word;this.results.push({word:e,firstTry:!1,failed:!0}),Hd(e),this.cb.onDot(this.results.length-1,`red`),this.bossFight&&this.bossFight.hit()}endIntro(){this.phase===`bossIntro`&&(this.phase=`run`,this.bossFight.settle())}startStars(){let e=this.results.filter(e=>!e.firstTry).map(e=>e.word),t=Xl(this.results.map(e=>e.word)),n=e.slice(0,2);for(let e of t){if(n.length>=2)break;n.includes(e)||n.push(e)}let r=n.map(e=>({word:e,distractor:eu(e,this.distractorPool,this.tierList)[0]||`...`}));this.phase=`stars`,this.stars=new sp(this.scene,this.level,{x:this.data.starX,reviews:r,onGem:()=>{this.runGems+=1,Gd(1)},onDone:()=>{this.phase=`flagrun`}}),r.length&&(_d(`Star time! Jump under the star with the word: ${r[0].word}!`,{rate:.9,echoWord:Math.random()<.4}),this.repeatTimer=Rp,this.autoRepeats=0)}addCoins(e){this.runCoins=Math.max(0,this.runCoins+e),Wd(e),this.cb.onCoins(this.runCoins)}bounceBack(e){Mu(),this.bounce={from:this.player.x,to:Math.max(2,e),t:0}}updateBounce(e){let t=this.bounce;t.t+=e/.45;let n=Math.min(1,t.t),r=1-(1-n)**3;this.player.x=t.from+(t.to-t.from)*r;let i=this.level.floorAt(this.player.x,this.player.y+1.5);this.player.y=i+Math.sin(n*Math.PI)*.9,this.player.group.position.set(this.player.x,this.player.y,0),n>=1&&(this.player.y=i,this.player.vy=0,this.player.grounded=!0,this.bounce=null)}updateCritters(e){let t=this.player;for(let n of this.critters){if(n.state===`off`)continue;if(n.state===`squash`){n.squashT-=e,n.g.scale.set(1.3,Math.max(.1,n.squashT/.4),1.3),n.squashT<=0&&(n.state=`off`,n.g.visible=!1);continue}if(n.state===`bonked`){n.squashT-=e,n.x+=n.dir*6*e;let t=Math.max(0,n.squashT/.5),r=Math.max(this.level.groundTopAt(n.x-.45),this.level.groundTopAt(n.x+.45));n.g.position.set(n.x,r+(1-t)*1.2*Math.sin(t*Math.PI),0),n.g.rotation.z+=n.dir*-10*e,n.g.scale.setScalar(Math.max(.05,t)),n.squashT<=0&&(n.state=`off`,n.g.visible=!1);continue}n.x+=n.dir*1.1*e,n.x<n.x0&&(n.x=n.x0,n.dir=1),n.x>n.x1&&(n.x=n.x1,n.dir=-1);let r=Math.max(this.level.groundTopAt(n.x-.45),this.level.groundTopAt(n.x+.45));if(n.g.position.set(n.x,r+Math.abs(Math.sin(this.elapsed*8+n.x))*.08,0),n.g.rotation.y=n.dir>0?.25:-.25,n.g.rotation.z=Math.sin(this.elapsed*8+n.x)*.08,n.state!==`pace`||!n.g.children.length||Math.abs(t.x-n.x)>.8)continue;let i=n.g.position.y;t.vy<-1&&t.y>i+.3&&t.y<i+1.1?(n.state=`squash`,n.squashT=.4,ju(),this.effects.sparkle(n.g.position.clone()),this.effects.floatText(new B(n.x,i+1.4,0),`+2`),this.addCoins(2),t.bounce(7.5)):t.y<i+.8&&t.grounded&&(Tu(),t.stumble(),this.stumbleMul=.4,this.addCoins(-1),n.state=`bonked`,n.squashT=.5,n.dir=t.x<n.x?1:-1,this.effects.sparkle(n.g.position.clone()))}}updateKey(){if(!this.keyMesh.visible||this.keyFound)return;this.keyMesh.rotation.y+=.03,this.keyMesh.position.y=this.data.key.y+Math.sin(this.elapsed*2.5)*.15;let e=this.player;Math.abs(e.x-this.data.key.x)<.9&&e.y+1.7>this.data.key.y-.6&&e.y<this.data.key.y+.8&&(this.keyFound=!0,this.keyMesh.visible=!1,Pu(),this.effects.confetti(this.keyMesh.position.clone()),this.effects.sparkle(this.keyMesh.position.clone()),gd(`secretKey`),this.cb.onKey(!0))}tick(e){this.elapsed+=e,this.running&&!this.paused&&this.updateRun(e),this.updateCamera(e)}updateRun(e){let t=this.player,n=this.choiceZone();this.choice&&!n?this.setChoice(!1):!this.choice&&n&&t.x>=n.engage&&(this.speed=0,ku(2),this.setChoice(!0));let r=Pp;if(this.phase===`stars`&&(r=Fp),(this.phase===`flag`||this.phase===`done`||this.choice)&&(r=0),(this.phase===`bossIntro`||this.phase===`bossDefeat`)&&(r=0),!this.choice&&r>0&&this.moveDir>0&&this.boostAllowed&&(r*=Lp),this.stumbleMul=Math.min(1,this.stumbleMul+e*1.2),r*=this.stumbleMul,this.speed+=(r-this.speed)*Math.min(1,e*4),this.bounce)this.updateBounce(e);else if(this.phase!==`flag`&&this.phase!==`done`){let r=this.choice?this.moveDir*Ip:this.speed;if(t.update(e,r,this.level,{onLand:e=>{e>6&&(this.effects.sparkle(new B(t.x,t.y+.2,0)),zu())}}),this.choice&&n&&(t.x=Math.min(Math.max(t.x,n.min),n.max)),this.activeEv&&!this.activeEv.done){let e=this.activeEv.clampX();t.x>e&&(t.x=e)}}for(let e of this.level.collectCoins(t.x,t.y))Cu(),this.addCoins(1),this.effects.sparkle(e),this.effects.floatText(e,`+1`);if(this.choice||this.updateCritters(e),this.updateKey(),this.level.update(e,t.x),this.effects.update(e),this.bossFight){let n=this.activeEv&&!this.activeEv.done?this.activeEv:null;this.bossFight.update(e,t,this.api,{battle:this.phase===`run`,challengeActive:!!n,minX:n&&n.lastX?n.lastX+5:0})}if(this.phase===`bossIntro`)this.introT+=e,!this.introSpoke&&this.introT>1.4&&(this.introSpoke=!0,_d(`The ${hp[this.worldIdx].name} wants to hear you read!`,{rate:1})),this.introT>5.5&&this.endIntro();else if(this.phase===`run`)this.activeEv?(!this.spoken&&t.x>this.activeEv.x-2&&(this.spoken=!0,this.speakIntro()),this.activeEv.update(e,t,this.api),this.activeEv.done&&t.x>this.activeEv.passedX()&&(this.activeEv.dispose(),this.activeEv=null,this.eventIdx++)):this.eventIdx<this.events.length?t.x>this.events[this.eventIdx].x-14&&this.spawnEvent():this.isBoss?(this.phase=`bossDefeat`,this.bossFight.startDefeat(this.api,t),hd(`bossWin`,ou(hp[this.worldIdx].name))):t.x>this.data.starX-10&&this.startStars();else if(this.phase===`stars`)this.stars.update(e,t,this.api);else if(this.phase===`bossDefeat`)this.bossFight.state===`gone`&&(this.phase=`flagrun`);else if(this.phase===`flagrun`)t.x>=this.data.flagX-.4&&(this.phase=`flag`,this.flagT=0,t.x=this.data.flagX-.45,Ou(),gd(`levelComplete`),this.effects.fireworks(new B(t.x,3,0)));else if(this.phase===`flag`){this.flagT+=e;let n=this.level.groundTopAt(this.data.flagX),r=Math.min(1,this.flagT/1.1);t.y=Math.max(n,t.y-e*6),t.group.position.set(t.x,t.y,0),this.level.flag.position.y=7.4-r*6.2,r>=1&&(this.phase=`done`,this.doneTimer=2.4)}else this.phase===`done`&&(this.doneTimer-=e,this.doneTimer<=0&&this.finishRun());(this.stars&&!this.stars.done&&this.stars.reviews.length&&this.stars||this.activeEv&&!this.activeEv.done&&this.spoken&&this.activeEv)&&(this.repeatTimer-=e,this.repeatTimer<=0&&this.autoRepeats<2&&(this.autoRepeats++,this.repeatTimer=Rp,this.repeatWord(),this.cb.onAutoRepeat&&this.cb.onAutoRepeat())),this.repeatTipT>0&&(this.repeatTipT-=e,this.repeatTipT<=0&&this.cb.onRepeatTip&&this.cb.onRepeatTip()),this.syncControls()}finishRun(){this.running=!1,this.syncControls(),this.clearEvents(),this.cb.onRunComplete({results:this.results,coins:this.runCoins,gems:this.runGems,keyFound:this.keyFound})}updateCamera(e){let t=this.player,n=1-Math.exp(-e*4),r=1-Math.exp(-e*3),i=t.x+3.2,a=Math.max(4.2,t.y*.6+3.4);this.camera.position.x+=(i-this.camera.position.x)*n,this.camera.position.y+=(a-this.camera.position.y)*r,this.camera.position.z=14,this.lookTarget.set(this.camera.position.x+.8,this.camera.position.y-1.6,0),this.camera.lookAt(this.lookTarget)}},Gp=9,Kp=26;function qp(){let e=jl(1234),t=[],n=[];Gl.forEach((e,r)=>{let i=e.levels.length,a=r%2==0;for(let e=0;e<=i;e++){let n=e/i,o=a?n:1-n;t.push({world:r,level:e,boss:e===i,isWorldFinal:e===i,x:-26/2+o*Kp,z:r*Gp+Math.sin(n*Math.PI*2+r)*1.4})}n.push({world:r,x:a?19:-26/2-6,z:r*Gp-4.5})});let r=[null];for(let n=1;n<t.length;n++){let i=t[n-1],a=t[n],o=[{x:i.x,z:i.z}];if(i.world!==a.world){let e=i.x+(i.x>0?3.5:-3.5);o.push({x:e,z:i.z+Gp*.5})}o.push({x:a.x,z:a.z}),r.push(Yp(o,e,i.world===a.world))}return{nodes:t,secretNodes:n,segments:r,bounds:{minX:-26/2-8,maxX:21,minZ:-5,maxZ:(Gl.length-1)*Gp+7}}}function Jp(e,t){let n=t.x>=e.x?1:-1,r=t.z+.5;return Yp([{x:e.x,z:e.z},{x:e.x+n*.6,z:r+.7},{x:t.x-n*3.2,z:r},{x:t.x,z:t.z}],jl(99),!1)}function Yp(e,t,n){let r=[];for(let i=0;i<e.length-1;i++){let a=e[i],o=e[i+1],s=Math.hypot(o.x-a.x,o.z-a.z),c=Math.max(2,Math.round(s)),l=-(o.z-a.z)/(s||1),u=(o.x-a.x)/(s||1);for(let e=i===0?0:1;e<=c;e++){let i=e/c,s=n?Math.sin(i*Math.PI*2+t()*6)*.5:0;r.push({x:a.x+(o.x-a.x)*i+l*s,z:a.z+(o.z-a.z)*i+u*s})}}return r.slice(1,-1)}var Xp=[{id:`rug`,name:`Cozy Rug`,emoji:`🟥`,cost:25,currency:`coins`},{id:`chair`,name:`Comfy Chair`,emoji:`🪑`,cost:35,currency:`coins`},{id:`table`,name:`Table`,emoji:`🍽️`,cost:45,currency:`coins`},{id:`bed`,name:`Big Kid Bed`,emoji:`🛏️`,cost:60,currency:`coins`},{id:`lamp`,name:`Lamp`,emoji:`💡`,cost:50,currency:`coins`},{id:`bookshelf`,name:`Bookshelf`,emoji:`📚`,cost:80,currency:`coins`},{id:`toybox`,name:`Toy Box`,emoji:`🧸`,cost:90,currency:`coins`},{id:`flowers`,name:`Flower Bed`,emoji:`🌷`,cost:40,currency:`coins`},{id:`mailbox`,name:`Mailbox`,emoji:`📬`,cost:55,currency:`coins`},{id:`tree`,name:`Shady Tree`,emoji:`🌳`,cost:75,currency:`coins`},{id:`swing`,name:`Swing Set`,emoji:`🛝`,cost:120,currency:`coins`},{id:`trampoline`,name:`Trampoline`,emoji:`🤸`,cost:150,currency:`coins`},{id:`cat`,name:`Pet Cat`,emoji:`🐱`,cost:20,currency:`gems`},{id:`dog`,name:`Pet Dog`,emoji:`🐶`,cost:30,currency:`gems`},{id:`aquarium`,name:`Fish Tank`,emoji:`🐠`,cost:40,currency:`gems`},{id:`telescope`,name:`Telescope`,emoji:`🔭`,cost:55,currency:`gems`},{id:`robot`,name:`Robot Buddy`,emoji:`🤖`,cost:70,currency:`gems`},{id:`rocket`,name:`Rocket Ship`,emoji:`🚀`,cost:100,currency:`gems`},{id:`golemstatue`,name:`Meatball Monster Statue`,emoji:`🍝`,earned:0},{id:`serpentstatue`,name:`Syrup Serpent Statue`,emoji:`🧇`,earned:1},{id:`yetisnowman`,name:`Yeti Snowman`,emoji:`⛄`,earned:2},{id:`crystallamp`,name:`Crystal Lamp`,emoji:`💎`,earned:3},{id:`dragonkite`,name:`Dragon Kite`,emoji:`🪁`,earned:4}];function Zp(e){return Xp.find(t=>t.id===e)||null}function Qp(e){return Xp.find(t=>t.earned===e)||null}var X=xl;function $p(e,t,n=0){let r=Math.sin(e*127.1+t*311.7+n*74.7)*43758.5453;return r-Math.floor(r)}var em=wl();{let e=em.attributes.normal,t=new Float32Array(e.count*3),n=(e,t)=>t>.5?[1,1,1]:t<-.5?[.4,.34,.3]:Math.abs(e)>.5?[.72,.58,.46]:[.8,.65,.51];for(let r=0;r<e.count;r++)t.set(n(e.getX(r),e.getY(r)),r*3);em.setAttribute(`color`,new er(t,3))}var tm=new Oi(1,1,1),nm=new B(0,18,21),rm=700,im=320,am=3e3,om=900,sm=80,cm=.45,lm=9,um=[16739201,16767293,16752627,7649791],dm=.56,fm={x:-17.5,z:-2.5};function pm(e,t,n,r){return n?`${Gl[e].name} Secret`:r?`${Gl[e].name} Castle`:`${Gl[e].name} ${t+1}`}var mm=class{constructor(e,t){this.cb=t,this.renderer=e,this.active=!1,this.scene=new xn,this.scene.background=new U(8702448),this.scene.fog=new bn(8702448,34,72),this.camera=new Sa(45,window.innerWidth/window.innerHeight,.1,200);let n=new ua(16772824,7183546,1.1),r=new Da(16769968,1.45);r.position.set(6,14,8),this.scene.add(n,r),this.effects=new jp(this.scene),this.data=qp(),this.buildCorridors(),this.buildTerrain(),this.buildWater(),this.buildProps(),this.buildCritters(),this.buildSigns(),this.buildSkyClouds(),this.buildTiles(),this.buildNodes(),this.buildHouse(),this.lockState=Gl.map((e,t)=>({unlocked:_f(t),t:1})),this.applyLockTints(),this.token=Gf(1.125),this.token.rotation.y=-Math.PI/2;let i=new Oi(1,1,1);this.tokenHit=new W(i,new Gr({visible:!1})),this.tokenHit.scale.set(2,2.6,2),this.tokenHit.position.y=1,this.token.add(this.tokenHit);let a=new G({color:16766282,emissive:6704384});this.editIcon=new H;let o=new W(i,a);o.scale.setScalar(.34),o.position.y=.4;let s=new W(i,a);s.scale.set(.42,.44,.24);let c=new W(i,a);c.scale.set(.13,.36,.13),c.position.set(-.31,.02,0);let l=c.clone();l.position.x=.31,this.editIcon.add(o,s,c,l),this.editIcon.position.y=2.7,this.token.add(this.editIcon),this.editHit=new W(i,new Gr({visible:!1})),this.editHit.scale.setScalar(1.7),this.editHit.position.y=2.7,this.token.add(this.editHit),this.scene.add(this.token),this.tokenNav=0,this.walk=null,this.focus=new B,this.panIdle=99,this.revealQueue=[],this.reveal=null,this.navList=[],this.attachInput()}buildCorridors(){let{nodes:e,secretNodes:t,segments:n}=this.data;this.keepCells=new Set,this.flatCells=new Set;let r=(e,t,n,r)=>{for(let i=Math.round(t-r);i<=Math.round(t+r);i++)for(let a=Math.round(n-r);a<=Math.round(n+r);a++)(i-t)**2+(a-n)**2<=r*r&&e.add(i+`,`+a)},i=(e,t,n,i)=>{let a=Math.max(1,Math.ceil(Math.hypot(n.x-t.x,n.z-t.z)*2));for(let o=0;o<=a;o++){let s=o/a;r(e,t.x+(n.x-t.x)*s,t.z+(n.z-t.z)*s,i)}};for(let t=1;t<e.length;t++){let n=e[t-1].world!==e[t].world;i(this.keepCells,e[t-1],e[t],n?1.3:2)}for(let e=1;e<n.length;e++)for(let t of n[e])r(this.keepCells,t.x,t.z,1.7);r(this.keepCells,fm.x,fm.z,2.6),i(this.keepCells,fm,e[0],2.6),r(this.keepCells,fm.x+2.3,fm.z+3.7,2.2);for(let e of this.keepCells)this.flatCells.add(e);t.forEach((t,n)=>{let a=e.filter(e=>e.world===n);i(this.flatCells,a[a.length-1],t,1.6);let o=e.find(e=>e.world===n+1);o&&i(this.flatCells,t,o,1.3);for(let e of a)if(e.level===1||(n+e.level)%2==0){let n={x:e.x,z:t.z+.5};i(this.flatCells,e,n,1.6),i(this.flatCells,n,t,1.6)}r(this.flatCells,t.x,t.z,2.2)})}buildWater(){let e=this.data.bounds,t=(e.minX+e.maxX)/2,n=(e.minZ+e.maxZ)/2,r=new W(X,new G({color:4424908}));r.scale.set(e.maxX-e.minX+60,1,e.maxZ-e.minZ+44),r.position.set(t,-1.35,n),this.scene.add(r);let i=new U(4424908),a=new U(6280914),o=(e,t)=>{for(let n=1;n<=5;n++)for(let r=-n;r<=n;r++)for(let i=-n;i<=n;i++)if(Math.max(Math.abs(r),Math.abs(i))===n&&this.groundH.has(e+r+`,`+(t+i)))return n;return 6};this.waterTiles=[];for(let t=Math.floor(e.minX)-30;t<=Math.ceil(e.maxX)+30;t+=2)for(let n=Math.floor(e.minZ)-22;n<=Math.ceil(e.maxZ)+22;n+=2){if(this.groundH.has(t+`,`+n)&&this.groundH.has(t+1+`,`+n)&&this.groundH.has(t+`,`+(n+1))&&this.groundH.has(t+1+`,`+(n+1)))continue;let e=o(t,n),r=a.clone().lerp(i,Math.min(1,(e-1)/4.5));r.offsetHSL(0,0,($p(t,n,5)-.5)*.05),this.waterTiles.push({x:t+.5,z:n+.5,color:r,phase:$p(t,n,6)*Math.PI*2,amp:e<3?.09:.05})}let s=tm.clone(),c=new Float32Array(this.waterTiles.length*2);this.waterTiles.forEach((e,t)=>{c[t*2]=e.phase,c[t*2+1]=e.amp}),s.setAttribute(`waterPhaseAmp`,new oi(c,2));let l=new G;l.onBeforeCompile=e=>{e.uniforms.uTime=this.waterTime={value:0},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec2 waterPhaseAmp;
uniform float uTime;`).replace(`#include <color_vertex>`,`#include <color_vertex>
          float waterK = 1.0 + sin(uTime * 1.3 + waterPhaseAmp.x
            + instanceMatrix[3][0] * 0.35 + instanceMatrix[3][2] * 0.21) * waterPhaseAmp.y;
          vColor.rgb *= waterK;`)},this.waterMesh=new mi(s,l,this.waterTiles.length),this.waterMesh.frustumCulled=!1,this.waterDummy=new fn,this.waterTiles.forEach((e,t)=>{this.waterDummy.position.set(e.x,-.8,e.z),this.waterDummy.scale.set(2,.1,2),this.waterDummy.updateMatrix(),this.waterMesh.setMatrixAt(t,this.waterDummy.matrix),this.waterMesh.setColorAt(t,e.color)}),this.waterMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.waterMesh),this.foam=[];let u=new Set;for(let e of this.groundH.keys()){let[t,n]=e.split(`,`).map(Number);for(let[e,r]of[[1,0],[-1,0],[0,1],[0,-1]]){let i=t+e,a=n+r,o=i+`,`+a;this.groundH.has(o)||u.has(o)||(u.add(o),!(this.foam.length>=640)&&this.foam.push({x:i+($p(i,a,7)-.5)*.5,z:a+($p(i,a,8)-.5)*.5,phase:$p(i,a,9)*Math.PI*2,s:.12+$p(i,a,10)*.16}))}}this.foamMesh=new mi(tm,new G({color:16055295,transparent:!0,opacity:.85}),this.foam.length),this.foamMesh.instanceMatrix.setUsage(Je),this.foamMesh.frustumCulled=!1,this.lastFoamT=-1,this.scene.add(this.foamMesh),this.glints=[];let d=jl(6161),f=0;for(;this.glints.length<36&&f++<300;){let t=e.minX-10+d()*(e.maxX-e.minX+20),n=e.minZ-6+d()*(e.maxZ-e.minZ+12);this.groundH.has(Math.round(t)+`,`+Math.round(n))||this.glints.push({x:t,z:n,phase:d()*Math.PI*2,speed:.5+d()*.8})}this.glintMesh=new mi(tm,new Gr({color:16777215}),this.glints.length),this.glintMesh.instanceMatrix.setUsage(Je),this.glintMesh.frustumCulled=!1,this.scene.add(this.glintMesh)}updateWater(e){if(this.waterTime&&(this.waterTime.value=e),e-this.lastFoamT<.05)return;this.lastFoamT=e;let t=this.waterDummy;for(let n=0;n<this.foam.length;n++){let r=this.foam[n],i=Math.sin(e*1.6+r.phase);t.position.set(r.x,-.62+i*.05,r.z);let a=r.s*(1+i*.18);t.scale.set(a,.08,a),t.rotation.set(0,r.phase,0),t.updateMatrix(),this.foamMesh.setMatrixAt(n,t.matrix)}this.foamMesh.instanceMatrix.needsUpdate=!0;for(let n=0;n<this.glints.length;n++){let r=this.glints[n],i=Math.max(0,Math.sin(e*r.speed+r.phase)),a=1e-4+i*i*i*.3;t.position.set(r.x,-.58,r.z),t.scale.set(a,.06,a),t.rotation.set(0,e*.5+r.phase,0),t.updateMatrix(),this.glintMesh.setMatrixAt(n,t.matrix)}this.glintMesh.instanceMatrix.needsUpdate=!0}buildTerrain(){this.groundMesh=new mi(em,new G({vertexColors:!0}),am),this.groundMesh.frustumCulled=!1,this.scene.add(this.groundMesh),this.groundMeta=[],this.groundH=new Map;let e=new fn,t=new Set,n=(n,r,i,a,o)=>{let s=n+`,`+r;if(t.has(s)||this.groundMeta.length>=am)return;t.add(s),this.groundH.set(s,i);let c=1.3+i;e.position.set(n,i-c/2,r),e.scale.set(1,c,1),e.updateMatrix(),this.groundMesh.setMatrixAt(this.groundMeta.length,e.matrix);let l=new U(a);i>0&&l.offsetHSL(0,0,i*.035),l.offsetHSL(($p(n,r,1)-.5)*.024,($p(n,r,2)-.5)*.1,($p(n,r,3)-.5)*.09),this.groundMeta.push({region:o,color:l,cx:n,cz:r,tier:i})};Gl.forEach((e,t)=>{let r=Tl[t],i=t*lm,a=jl(t*53+11);for(let e=-21;e<=21;e++)for(let o=-5;o<=5;o++){let s=i+o,c=e+`,`+s,l=this.flatCells.has(c),u=Math.abs(e),d=Math.abs(o),f=u<=19&&d<=3;if(!f){let e=a();u<=20&&d<=3?f=e<.55:u===21&&d<=3?f=e<.15:u<=19&&d===4&&(f=e<.22)}if(this.keepCells.has(c)&&(f=!0),!f||t===4&&!l&&Math.sin(e*.9+2)*Math.sin(s*.8)<-.45)continue;let p=0;if(!l){let n=Math.sin(e*.55+t*2)+Math.sin(s*.75+e*.21);p=n>1.1?1:n>.35?.5:0}n(e,s,p,r.top[e+s&1],t)}let o=this.data.secretNodes[t],s=Math.round(o.x),c=Math.round(o.z);for(let e=-2;e<=2;e++)for(let i=-2;i<=2;i++)Math.abs(e)===2&&Math.abs(i)===2||n(s+e,c+i,0,r.top[e+i&1],t);if(t<Gl.length-1){let e=t%2==0?1:-1;for(let r=12;r<=16;r++)for(let o=4;o<=5;o++)(r===12||r===16)&&a()<.4||n(e*r,i+o,0,r+o&1?15259292:14469518,t+1)}}),this.islands=[{x:-27,z:4,palm:!0},{x:27,z:13,palm:!1},{x:-26,z:22,palm:!1},{x:26,z:31,palm:!0}];let r=jl(4242);for(let e of this.islands)for(let t=-1;t<=1;t++)for(let i=-1;i<=1;i++)Math.abs(t)+Math.abs(i)===2&&r()<.5||n(e.x+t,e.z+i,0,t+i&1?15651982:15059326,-1);let i=new U(15521695);for(let e of this.groundMeta)e.tier>0||(!this.groundH.has(e.cx+1+`,`+e.cz)||!this.groundH.has(e.cx-1+`,`+e.cz)||!this.groundH.has(e.cx+`,`+(e.cz+1))||!this.groundH.has(e.cx+`,`+(e.cz-1)))&&e.color.lerp(i,.5+$p(e.cx,e.cz,4)*.25);for(let e of this.groundMeta){let t=0;for(let[n,r]of[[1,0],[-1,0],[0,1],[0,-1]]){let i=this.groundH.get(e.cx+n+`,`+(e.cz+r));i!==void 0&&i>e.tier&&t++}e.color.multiplyScalar(t?Math.max(.76,1-t*.08):1.03)}this.groundMesh.count=this.groundMeta.length,this.groundMesh.instanceMatrix.needsUpdate=!0}buildProps(){this.decorMesh=new mi(Cl,new G,om),this.decorMesh.frustumCulled=!1,this.scene.add(this.decorMesh),this.decorMeta=[],this.glowMesh=new mi(Cl,new G({emissive:2763349}),sm),this.glowMesh.frustumCulled=!1,this.scene.add(this.glowMesh),this.glowMeta=[];let e=new fn,t=(t,n,r)=>i=>(a,o,s,c,l,u,d,f=0,p=0)=>{n.length>=r||(e.position.set(a,o,s),e.scale.set(c,l,u),e.rotation.set(0,f,p),e.updateMatrix(),t.setMatrixAt(n.length,e.matrix),n.push({region:i,color:new U(d)}))},n=t(this.decorMesh,this.decorMeta,om),r=t(this.glowMesh,this.glowMeta,sm),i=(e,t,n,r,i,a)=>{e(t,n+.6,r,.35,1.2,.35,8015658),e(t,n+1.65,r,1.5,1.1,1.5,i),e(t,n+2.45,r,.9,.7,.9,a)},a=(e,t,n,r,i)=>{e(t,n+.22,r,.08,.45,.08,4169274),e(t,n+.5,r,.22,.22,.22,um[i&3])},o=(e,t,n,r)=>{e(t,n+.9,r,.28,1.8,.28,9263659),e(t,n+1.85,r,1.9,.22,.5,4169274,0,.5),e(t,n+1.85,r,1.9,.22,.5,5027141,0,-.6),e(t,n+2,r,.5,.22,1.9,4169274)},s=(e,t,n,r,i)=>{e(t,n+.3,r,1.1,.7,.9,i,.4),e(t+.4,n+.55,r+.2,.6,.5,.55,i,.9)},c=(e,t,n)=>{let r=[],i=0;for(;r.length<t&&i++<250;){let t=Math.round(-19+n()*38),i=Math.round(e*lm-3+n()*6),a=t+`,`+i;!this.groundH.has(a)||this.flatCells.has(a)||r.some(e=>Math.abs(e.x-t)<2&&Math.abs(e.z-i)<2)||r.push({x:t,z:i,y:this.groundH.get(a)})}return r},l=[(e,t,n,r)=>{r<5?(e(t.x,t.y+.6,t.z,.3,1.2,.3,16111480),e(t.x,t.y+1.6,t.z,1.4,1,1.4,9063213),e(t.x,t.y+2.3,t.z,.8,.4,.8,13779498)):r===5?(e(t.x,t.y+.04,t.z,2.6,.1,1.9,13779498),e(t.x+1.5,t.y+.15,t.z+.8,.5,.3,.5,16773836)):r&1?(e(t.x,t.y+.22,t.z,.08,.45,.08,4169274),e(t.x,t.y+.52,t.z,.26,.26,.26,14826286)):(e(t.x-.16,t.y+.16,t.z,.26,.3,.2,15777888,0,.5),e(t.x+.16,t.y+.16,t.z,.26,.3,.2,15777888,0,-.5),e(t.x,t.y+.16,t.z,.12,.2,.22,14855501))},(e,t,n,r)=>{r<5?(e(t.x,t.y+.25,t.z,1.5,.45,1.5,13601852,n()*.4),e(t.x+.1,t.y+.65,t.z,1.4,.4,1.4,14523466),e(t.x,t.y+1,t.z,.5,.28,.5,16769898)):r<10?(e(t.x,t.y+.25,t.z,2.6,.6,1.8,14723152,n()*.6),e(t.x+.5,t.y+.55,t.z+.2,1.2,.25,.9,9062938)):r===10?(e(t.x,t.y+.55,t.z,1.1,1.1,1.1,14826286),e(t.x,t.y+1.2,t.z,.7,.3,.7,4169274),e(t.x+.2,t.y+1.45,t.z,.14,.3,.14,4169274)):s(e,t.x,t.y,t.z,5911840)},(e,t,n,r)=>{r<5?(e(t.x,t.y+.55,t.z,.32,1.1,.32,7031338),e(t.x,t.y+1.55,t.z,1.4,1,1.4,3046735),e(t.x,t.y+2.25,t.z,1.5,.4,1.5,16054524)):r===5?(e(t.x,t.y+.45,t.z,.9,.9,.9,16777215),e(t.x,t.y+1.2,t.z,.65,.65,.65,16054524),e(t.x,t.y+1.75,t.z,.45,.45,.45,16777215),e(t.x,t.y+1.75,t.z+.3,.1,.1,.25,16747586)):r<10?e(t.x,t.y+.03,t.z,1.9,.08,1.5,13625599,n()):s(e,t.x,t.y,t.z,11190998)},(e,t,n,r,i)=>{if(r<3)e(t.x-.9,t.y+.8,t.z,.6,1.6,.6,5526623),e(t.x+.9,t.y+.8,t.z,.6,1.6,.6,6184556),e(t.x,t.y+1.75,t.z,2.6,.55,.7,5526623);else if(r<9){let a=[8319231,13663999,16747224];for(let e=0;e<3;e++)i(t.x+(e-1)*.5,t.y+.7+n()*.4,t.z,.32,1.2+n()*.9,.32,a[(r+e)%3],0,(e-1)*.28);e(t.x,t.y+.12,t.z,1.5,.35,1.5,4868696)}else e(t.x,t.y+.25,t.z,.18,.5,.18,14209216),e(t.x,t.y+.58,t.z,.6,.28,.6,15684432)},(e,t,n,r)=>{r<4?i(e,t.x,t.y,t.z,4169274,9361518):a(e,t.x,t.y,t.z,r)}],u=[14,14,13,13,10];Gl.forEach((e,t)=>{let i=jl(t*131+17),a=n(t),o=r(t);c(t,u[t],i).forEach((e,n)=>l[t](a,e,i,n,o))});{let e=n(4),t=4*lm;[16732754,16750592,16767293,6942894,4244735,7964363,12216520].forEach((n,r)=>{let i=4.6-r*.32;for(let r=0;r<=10;r++){let a=r/10*Math.PI;e(-9+Math.cos(a)*i,.4+Math.sin(a)*i*.85,t-3.4,.34,.34,.3,n)}});let r=jl(777);for(let n=0;n<5;n++){let n=-16+r()*32,i=t-3+r()*6;e(n,-1.7,i,2.4+r()*1.5,.7,1.6+r(),16777215),e(n+1.2,-1.5,i+.4,1.5,.6,1.2,15923455)}}let d=n(-1);for(let e of this.islands){e.palm?o(d,e.x,0,e.z):s(d,e.x,0,e.z,10263690);for(let t=0;t<3;t++){let n=$p(e.x,e.z,20+t)*Math.PI*2,r=e.x+Math.cos(n)*1.1,i=e.z+Math.sin(n)*1.1;t===2?d(r,.07,i,.32,.1,.32,16752627,n):d(r,.08,i,.22,.12,.3,16643558,n)}}let f=jl(31337);for(let e=0;e<42;e++){let e=-34+f()*68,t=-8+f()*56,n=.9+f()*.6,r=f()*.4-.2;this.groundH.has(Math.round(e)+`,`+Math.round(t))||d(e,-.72,t,n,.06,.16,15398655,r)}this.decorMesh.count=this.decorMeta.length,this.glowMesh.count=this.glowMeta.length,this.decorMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0}buildCritters(){let e=()=>{let e=new H,t=new W(X,new G({color:16774064}));t.scale.set(.62,.34,.4),t.position.y=.05;let n=new W(X,new G({color:16769126}));n.scale.setScalar(.26),n.position.set(.3,.33,0);let r=new W(X,new G({color:16747586}));return r.scale.set(.16,.08,.12),r.position.set(.47,.3,0),e.add(t,n,r),e};this.ducks=[];for(let t of[{x:-24.5,z:2.5,r:1.4},{x:24,z:21,r:1.1}]){if(this.groundH.has(Math.round(t.x)+`,`+Math.round(t.z)))continue;let n=e();this.scene.add(n),this.ducks.push({mesh:n,...t,phase:t.x*.7})}this.fish=new H;let t=new W(X,new G({color:16747586}));t.scale.set(.5,.26,.16);let n=new W(X,new G({color:16766282}));n.scale.set(.16,.22,.1),n.position.x=-.32,this.fish.add(t,n),this.fish.visible=!1,this.fishHome={x:-24,z:30},this.scene.add(this.fish)}updateCritters(e){for(let t of this.ducks){let n=e*.35+t.phase;t.mesh.position.set(t.x+Math.cos(n)*t.r,-.52+Math.sin(e*1.7+t.phase)*.05,t.z+Math.sin(n)*t.r),t.mesh.rotation.y=-n,t.mesh.rotation.z=Math.sin(e*2.2+t.phase)*.06}let t=(e*.22+.3)%1;if(t<.28){let e=t/.28;this.fish.visible=!0,this.fish.position.set(this.fishHome.x+e*2.4-1.2,-.7+Math.sin(e*Math.PI)*1.3,this.fishHome.z),this.fish.rotation.z=(.5-e)*1.8}else this.fish.visible=!1}buildSigns(){let e=[`01110`,`10001`,`00001`,`00110`,`00100`,`00000`,`00100`];this.signMesh=new mi(Cl,new G({color:16769126,emissive:5915136}),100),this.signMesh.frustumCulled=!1,this.scene.add(this.signMesh),this.signMeta=[];let t=new fn;Gl.forEach((n,r)=>{if(r===0)return;let i=.5;e.forEach((n,a)=>{for(let o=0;o<5;o++)n[o]===`1`&&(t.position.set((o-2)*i,2.6+(e.length-1-a)*i,r*lm-2.2),t.scale.setScalar(i*.92),t.rotation.set(0,0,0),t.updateMatrix(),this.signMeta.push({region:r,matrix:t.matrix.clone()}))})}),this.signMesh.count=this.signMeta.length}buildSkyClouds(){this.mapClouds=[];let e=new G({color:16777215,emissive:16777215,emissiveIntensity:.5,transparent:!0,opacity:.92}),t=new G({color:14280436,emissive:14280436,emissiveIntensity:.35,transparent:!0,opacity:.92}),n=jl(909);for(let r=0;r<5;r++){let r=new H,i=4+Math.floor(n()*3);for(let t=0;t<i;t++){let a=new W(X,e),o=1-Math.abs(t-(i-1)/2)/i;a.scale.set(1.3+n()*1.6,.7+o*1.1+n()*.4,1.2+n()*1.1),a.position.set((t-(i-1)/2)*1.2+(n()-.5)*.5,a.scale.y*.35+n()*.2,(n()-.5)*1.6),r.add(a)}let a=new W(X,t);a.scale.set(i*1.2+.8,.45,2.4),a.position.y=-.15,r.add(a),r.scale.setScalar(.6+n()*.2),r.position.set(-30+n()*60,12+n()*3,n()*38),r.userData.drift=.4+n()*.5,this.scene.add(r),this.mapClouds.push(r)}}buildTiles(){this.tileMesh=new mi(Cl,new G({color:15980692}),rm),this.tileMesh.frustumCulled=!1,this.scene.add(this.tileMesh),this.tiles=[],this.segTiles=[null];for(let e=1;e<this.data.segments.length;e++){let t=this.data.segments[e];this.segTiles.push({start:this.tiles.length,count:t.length});for(let e of t)this.tiles.push({x:e.x,z:e.z,shown:!1,pop:0})}this.secretTileMesh=new mi(Cl,new G({color:13073904,emissive:2887493}),im),this.secretTileMesh.frustumCulled=!1,this.scene.add(this.secretTileMesh),this.secretTiles=[],this.secretSegs={}}ensureSecretTiles(e){if(this.secretSegs[e])return this.secretSegs[e];let t=af(e),n=Jp(this.data.nodes.find(n=>n.world===e&&n.level===(t===null?1:t))||this.data.nodes.find(t=>t.world===e),this.data.secretNodes[e]),r={start:this.secretTiles.length,count:n.length};for(let e of n)this.secretTiles.push({x:e.x,z:e.z,shown:!1,pop:0});return this.secretSegs[e]=r,r}buildNodes(){let e=()=>{let e=new H,t=new G({color:16766282,emissive:6704384});for(let n=0;n<3;n++){let r=new W(X,t);r.scale.setScalar(.26);let i=(n-1)*.6;r.position.set(Math.sin(i)*1.15,.62,-Math.cos(i)*1.15),r.rotation.z=Math.PI/4,e.add(r)}return e},t=(t,n)=>{let r=new H;r.position.set(t.x,0,t.z);let i=new W(X,new G({color:16774095}));i.scale.set(1.7,.25,1.7),i.position.y=.13;let a=new G({color:15022389}),o=new W(X,a);o.scale.set(1.15,.3,1.15),o.position.y=.4;let s=new W(X,new G({color:16773494,emissive:5587968}));s.scale.set(2.2,.12,2.2),s.position.y=.05,s.visible=!1;let c=new W(X,new G({color:16771496,emissive:2760720}));c.scale.set(2.02,.1,2.02),c.position.y=.03;let l=e();r.add(i,o,s,c,l);let u=null;if(n){u=new H;let e=new G({color:13073904,emissive:4856432}),t=new G({color:14922751,emissive:3609436});[[0,.9,0,.34,1.5,0],[-.42,.7,.18,.26,1,-.3],[.44,.65,-.12,.24,.9,.34],[.1,.5,.4,.18,.6,.12]].forEach(([n,r,i,a,o,s],c)=>{let l=new W(X,c%2?t:e);l.scale.set(a,o,a),l.position.set(n,r,i),l.rotation.set(0,c*.7,s),u.add(l)}),r.add(u)}let d=null,f=null,p=null;if(!n&&t.isWorldFinal){let e=new H,n=new G({color:13220002}),i=new G({color:13915991}),a=new W(X,n);a.scale.set(1.7,1.2,1.5),a.position.y=.6;let o=new W(X,n);o.scale.set(1,.8,.9),o.position.y=1.5,e.add(a,o);for(let[t,r]of[[-.8,-.7],[.8,-.7],[-.8,.7],[.8,.7]]){let a=new W(X,n);a.scale.set(.45,1.9,.45),a.position.set(t,.95,r);let o=new W(X,i);o.scale.set(.6,.4,.6),o.position.set(t,2.05,r),e.add(a,o)}let s=new W(X,new G({color:14737632}));s.scale.set(.06,.9,.06),s.position.set(0,2.3,0),d=new W(X,new G({color:16766282})),d.scale.set(.5,.3,.05),d.position.set(.28,2.55,0);let c=new G({color:16766282,emissive:6704384});f=new H;let l=new W(X,c);l.scale.set(.6,.22,.6),f.add(l);for(let e of[-.2,0,.2]){let t=new W(X,c);t.scale.set(.13,.24,.13),t.position.set(e,.22,0),f.add(t)}f.position.set(0,2,0),p=new H;let u=new W(X,new G({color:hp[t.world].color}));u.scale.set(.95,.8,.85),p.add(u);let m=new G({color:16777215}),h=new G({color:2236962});for(let e of[-.22,.22]){let t=new W(X,m);t.scale.setScalar(.22),t.position.set(e,.08,.44);let n=new W(X,h);n.scale.setScalar(.1),n.position.set(e,.06,.55),p.add(t,n)}let g=new W(X,h);g.scale.set(.32,.08,.06),g.position.set(0,-.22,.44),p.add(g),p.position.set(0,3.3,0),e.add(s,d,f,p),e.position.set(0,0,-1.7),r.add(e)}let m=new W(X,new Gr({visible:!1}));return m.scale.set(3,3,3),m.position.y=1,r.add(m),this.scene.add(r),{group:r,dot:o,dotMat:a,ring:s,stars:l,crystals:u,hit:m,castleFlag:d,crown:f,bossHead:p,baseY:0}};this.nodeViews=this.data.nodes.map(e=>t(e,!1)),this.secretViews=this.data.secretNodes.map(e=>t(e,!0))}buildHouse(){let e=new H;e.position.set(fm.x,0,fm.z);let t=new G({color:15983296}),n=new G({color:13915991}),r=new W(X,t);r.scale.set(2.6,1.5,2.2),r.position.y=.75;let i=new W(X,n);i.scale.set(1.7,.18,2.6),i.rotation.z=.62,i.position.set(-.68,1.95,0);let a=i.clone();a.rotation.z=-.62,a.position.x=.68;let o=new W(X,n);o.scale.set(.35,.3,2.65),o.position.y=2.42;let s=new W(X,new G({color:10251087}));s.scale.set(.4,.9,.4),s.position.set(.8,2.35,-.55);let c=new W(X,new G({color:9067067}));c.scale.set(.6,.95,.1),c.position.set(-.55,.48,1.11);let l=new W(X,new G({color:16766282}));l.scale.setScalar(.1),l.position.set(-.35,.5,1.18);let u=new W(X,new G({color:11461631,emissive:1718858}));u.scale.set(.7,.6,.1),u.position.set(.65,1,1.11),e.add(r,i,a,o,s,c,l,u);let d=this.data.nodes[0],f=new G({color:15980692}),p=fm.x-d.x,m=fm.z-d.z,h=Math.hypot(p,m),g=Math.round(h);for(let e=1;e<g;e++){let t=e/g,n=Math.sin(t*Math.PI*2)*.35,r=new W(X,f),i=.64+$p(e,3,11)*.16;r.scale.set(i,.18,i),r.rotation.y=($p(e,5,12)-.5)*.5,r.position.set(d.x+p*t-m/h*n,.09,d.z+m*t+p/h*n),this.scene.add(r)}let _=new G({color:16766282,emissive:6704384});this.houseIcon=new H;let v=new W(X,_);v.scale.set(.62,.42,.62);let y=new W(X,_);y.scale.set(.52,.12,.7),y.rotation.z=.78,y.position.set(-.18,.36,0);let b=y.clone();b.rotation.z=-.78,b.position.x=.18;let x=new W(X,new G({color:9067067}));x.scale.set(.2,.26,.08),x.position.set(0,-.08,.3),this.houseIcon.add(v,y,b,x),this.houseIcon.scale.setScalar(1.35),this.houseIcon.position.set(0,4.3,0),e.add(this.houseIcon);let S=new G({color:15022389,emissive:6689041});this.houseBadge=new H;let C=new W(X,S);C.scale.set(.4,.95,.4),C.position.y=.85;let w=new W(X,S);w.scale.set(.42,.34,.42),this.houseBadge.add(C,w),this.houseBadge.position.set(1.7,4.6,.4),this.houseBadge.visible=!1,e.add(this.houseBadge),this.houseHit=new W(X,new Gr({visible:!1})),this.houseHit.scale.set(4,4,4),this.houseHit.position.y=1.5,e.add(this.houseHit),this.houseSmokeT=0,this.houseChimney=s,this.houseGroup=e,this.scene.add(e)}refreshLocks(){Gl.forEach((e,t)=>{let n=this.lockState[t],r=_f(t);if(r&&!n.unlocked){n.unlocked=!0,n.t=0;let e=new B(0,1.5,t*lm);this.effects.confetti(e),this.effects.sparkle(e)}else!r&&n.unlocked&&(n.unlocked=!1,n.t=1)}),this.applyLockTints()}lockFactor(e){if(e<0)return 1;let t=this.lockState[e];return t.unlocked?cm+(1-cm)*Math.min(1,t.t):cm}applyLockTints(){let e=new U,t=(t,n)=>{for(let r=0;r<n.length;r++)e.copy(n[r].color).multiplyScalar(this.lockFactor(n[r].region)),t.setColorAt(r,e);t.instanceColor&&(t.instanceColor.needsUpdate=!0)};t(this.groundMesh,this.groundMeta),t(this.decorMesh,this.decorMeta),t(this.glowMesh,this.glowMeta);let n=new Rt().makeScale(1e-4,1e-4,1e-4);this.signMeta.forEach((e,t)=>{this.signMesh.setMatrixAt(t,this.lockState[e.region].unlocked?n:e.matrix)}),this.signMesh.instanceMatrix.needsUpdate=!0}heightAt(e,t){return this.groundH.get(Math.round(e)+`,`+Math.round(t))||0}refresh(){let e=Rd().unlocked;this.navList=[],this.data.nodes.forEach((t,n)=>{let r=this.nodeViews[n],i=gf(t.world,t.level);r.group.visible=i;let a=Zd(t.world,t.level),o=t.world===e.world&&t.level===e.level;if(r.dotMat.color.setHex(a>0?4431943:15022389),r.dotMat.emissive.setHex(o?6693410:0),r.ring.visible=o,r.isCurrent=o,r.stars.children.forEach((e,t)=>{e.visible=t<a}),t.boss&&r.bossHead){let e=pf(t.world);r.bossHead.visible=!e,r.castleFlag.visible=e,r.crown.visible=e}if(tf(t.world,t.level)&&!r.keyIcon&&(r.keyIcon=Up(),r.keyIcon.scale.setScalar(.36),r.keyIcon.position.set(1.25,1,.35),r.group.add(r.keyIcon)),n>0){let e=i,t=this.segTiles[n];for(let n=0;n<t.count;n++)this.tiles[t.start+n].shown=e}if(i&&this.navList.push({world:t.world,level:t.level,secret:!1,boss:!!t.boss,x:t.x,z:t.z,i:n}),i&&t.isWorldFinal&&rf(t.world)){let e=this.data.secretNodes[t.world];this.navList.push({world:t.world,level:-1,secret:!0,x:e.x,z:e.z,i:-1})}}),this.data.secretNodes.forEach((e,t)=>{let n=this.secretViews[t],r=rf(t);n.group.visible=r,n.dotMat.color.setHex(11225020),n.dotMat.emissive.setHex(2887493);let i=$d(t);if(n.stars.children.forEach((e,t)=>{e.visible=t<i}),r){let n=this.ensureSecretTiles(t);for(let e=0;e<n.count;e++)this.secretTiles[n.start+e].shown=!0;if(!this.navList.some(e=>e.secret&&e.world===t)){let n=this.navList.map(e=>e.world).lastIndexOf(t);this.navList.splice(n+1,0,{world:t,level:-1,secret:!0,x:e.x,z:e.z,i:-1})}}}),this.tokenNav=Math.min(this.tokenNav,this.navList.length-1),this.houseBadge.visible=ff(Xp),this.refreshLocks(),this.updateTiles()}updateTiles(){let e=new fn,t=(t,n)=>{n.forEach((n,r)=>{let i=n.shown?n.pop>0?1+Math.sin(n.pop*Math.PI)*.4:1:1e-4,a=.64+$p(n.x,n.z,11)*.16;e.position.set(n.x,n.shown&&n.pop>0?.1+n.pop*.3:.09,n.z),e.rotation.y=($p(n.x,n.z,12)-.5)*.5,e.scale.set(a*i,.18,a*i),e.updateMatrix(),t.setMatrixAt(r,e.matrix)}),t.count=n.length,t.instanceMatrix.needsUpdate=!0};t(this.tileMesh,this.tiles),t(this.secretTileMesh,this.secretTiles)}navInfo(e){return{world:e.world,level:e.level,secret:e.secret,boss:!!e.boss,name:pm(e.world,e.level,e.secret,e.boss),stars:e.secret?$d(e.world):Zd(e.world,e.level),completed:(e.secret?$d(e.world):Zd(e.world,e.level))>0}}currentNav(){return this.navList[this.tokenNav]}setTokenTo(e,t,n=!1){let r=this.navList.findIndex(r=>r.world===e&&(n?r.secret:r.level===t&&!r.secret));r>=0&&(this.tokenNav=r);let i=this.navList[this.tokenNav];i&&this.token.position.set(i.x,dm,i.z),this.token.rotation.y=-Math.PI/2}attachInput(){let e=this.renderer.domElement;this.raycaster=new Ka;let t=null,n=!1,r=e=>{this.active&&(e.target&&e.target.closest&&e.target.closest(`button`)||(t={x:e.clientX,y:e.clientY},n=!1))},i=e=>{if(!this.active||!t)return;let r=e.clientX-t.x,i=e.clientY-t.y;if(!n&&Math.hypot(r,i)>10&&(n=!0),n){let n=.028,a=this.data.bounds;this.focus.x=Math.max(a.minX,Math.min(a.maxX,this.focus.x-r*n)),this.focus.z=Math.max(a.minZ,Math.min(a.maxZ,this.focus.z-i*n)),t={x:e.clientX,y:e.clientY},this.panIdle=0}},a=e=>{if(!this.active||!t)return;let r=n;t=null,n=!1,!r&&this.tap(e.clientX,e.clientY)};window.PointerEvent?(e.addEventListener(`pointerdown`,r),window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)):(e.addEventListener(`mousedown`,r),window.addEventListener(`mousemove`,i),window.addEventListener(`mouseup`,a),e.addEventListener(`touchstart`,e=>r(e.changedTouches[0]),{passive:!0}),window.addEventListener(`touchmove`,e=>i(e.changedTouches[0]),{passive:!0}),window.addEventListener(`touchend`,e=>a(e.changedTouches[0]))),window.addEventListener(`keydown`,e=>{if(this.active)if(e.code===`ArrowLeft`||e.code===`ArrowRight`){e.preventDefault();let t=e.code===`ArrowLeft`?-1:1,n=this.tokenNav+t;n>=0&&n<this.navList.length&&!this.walk&&!this.reveal&&this.walkTo(n)}else e.code===`Enter`&&(e.preventDefault(),this.cb.onEnterKey())})}tap(e,t){if(this.reveal)return;let n=new z(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);if(this.raycaster.setFromCamera(n,this.camera),this.raycaster.intersectObject(this.editHit,!1).length){this.cb.onEditTapped();return}if(this.raycaster.intersectObject(this.tokenHit,!1).length){this.cb.onEnterKey();return}if(this.raycaster.intersectObject(this.houseHit,!1).length){this.cb.onHouseTapped();return}let r=[];this.navList.forEach((e,t)=>{let n=e.secret?this.secretViews[e.world]:this.nodeViews[e.i],i=this.raycaster.intersectObject(n.hit,!1);i.length&&r.push({idx:t,dist:i[0].distance})}),r.length&&(r.sort((e,t)=>e.dist-t.dist),this.walkTo(r[0].idx))}walkTo(e){if(e===this.tokenNav){this.cb.onNodeSelected(this.navInfo(this.navList[e]));return}this.cb.onDismiss();let t=e>this.tokenNav?1:-1,n=[];for(let r=this.tokenNav;;r+=t){let t=this.navList[r];if(n.push({x:t.x,z:t.z}),r===e)break}let r=[0];for(let e=1;e<n.length;e++)r.push(r[e-1]+Math.hypot(n[e].x-n[e-1].x,n[e].z-n[e-1].z));let i=r[r.length-1];this.walk={points:n,cum:r,dist:i,seg:0,h:this.heightAt(n[0].x,n[0].z),t:0,dur:Math.min(2,.3+i*.09),target:e},this.panIdle=99}queueReveal(e){this.revealQueue.push(e)}startReveal(e){let t,n,r;if(e.kind===`secret`)t=this.ensureSecretTiles(e.world),r=this.secretTiles,n=this.secretViews[e.world];else{let i=this.data.nodes.findIndex(t=>t.world===e.world&&t.level===e.level);if(i<=0)return;t=this.segTiles[i],r=this.tiles,n=this.nodeViews[i]}for(let e=0;e<t.count;e++)r[t.start+e].shown=!1,r[t.start+e].pop=0;n.group.visible=!1,this.reveal={seg:t,tiles:r,view:n,k:0,timer:.35,tileDelay:Math.min(.11,1.5/Math.max(1,t.count)),nodeT:-1,secret:e.kind===`secret`,newWorld:e.kind===`node`&&e.level===0}}updateReveal(e){let t=this.reveal;for(let n=0;n<t.seg.count;n++){let r=t.tiles[t.seg.start+n];r.pop>0&&(r.pop=Math.max(0,r.pop-e*3))}if(t.nodeT>=0){t.nodeT+=e;let n=Math.min(1,t.nodeT/.55),r=6*(1-n)*(1-n)-Math.sin(n*Math.PI)*0;t.view.group.position.y=r,n>=1&&!t.landed&&(t.landed=!0,t.view.group.position.y=0,Mu(),this.effects.confetti(new B(t.view.group.position.x,1.5,t.view.group.position.z)),t.secret?(this.effects.sparkle(new B(t.view.group.position.x,1.5,t.view.group.position.z)),gd(`secretPath`)):t.newWorld&&gd(`worldUnlock`)),t.nodeT>1.3&&(this.reveal=null,this.refresh()),this.updateTiles();return}if(t.timer-=e,t.timer<=0)if(t.k<t.seg.count){let e=t.tiles[t.seg.start+t.k];e.shown=!0,e.pop=1,ku(t.k),this.focus.x+=(e.x-this.focus.x)*.35,this.focus.z+=(e.z-this.focus.z)*.35,this.panIdle=0,t.k++,t.timer=t.tileDelay}else t.nodeT=0,t.view.group.visible=!0,t.view.group.position.y=6;this.updateTiles()}enter(){this.active=!0,this.refresh(),this.revealQueue.length&&!this.reveal&&(this.startReveal(this.revealQueue.shift()),this.updateTiles());let e=this.currentNav();e&&this.token.position.set(e.x,dm,e.z),this.focus.set(this.token.position.x,0,this.token.position.z),this.camera.position.copy(this.focus).add(nm),this.camera.lookAt(this.focus),this.panIdle=99}exit(){this.active=!1}animateStars(e,t){let n=this.token.position.x-e.group.position.x,r=this.token.position.z-e.group.position.z;e.stars.visible=n*n+r*r>1.2,e.stars.children.forEach((e,n)=>{e.rotation.y=t*1.6+n*2.1,e.position.y=.62+Math.sin(t*2.4+n*2.1)*.07})}tick(e){let t=performance.now()/1e3,n=!1;if(this.lockState.forEach((t,r)=>{t.unlocked&&t.t<1&&(t.t=Math.min(1,t.t+e),n=!0,Math.random()<e*8&&this.effects.sparkle(new B(-16+Math.random()*32,1.6,r*lm-3+Math.random()*6)))}),n&&this.applyLockTints(),this.houseIcon.rotation.y=t*1.2,this.houseIcon.position.y=4.3+Math.sin(t*2)*.15,this.houseBadge.visible&&(this.houseBadge.position.y=4.6+Math.abs(Math.sin(t*3))*.5,this.houseBadge.scale.setScalar(1+Math.sin(t*6)*.1)),this.editIcon.rotation.y=t*1.2-this.token.rotation.y,this.editIcon.position.y=2.7+Math.sin(t*2+1)*.12,this.houseSmokeT-=e,this.houseSmokeT<=0){this.houseSmokeT=2.2+Math.random();let e=this.houseGroup.position;this.effects.sparkle(new B(e.x+.8,3.1,e.z-.55))}let r=this.data.bounds;for(let t of this.mapClouds)t.position.x+=t.userData.drift*e,t.position.x>r.maxX+26&&(t.position.x=r.minX-26);if(this.updateWater(t),this.updateCritters(t),this.nodeViews.forEach((e,n)=>{if(!e.group.visible)return;let r=1.15+Math.sin(t*3+e.group.position.x)*.09,i=e.isCurrent?1.15+Math.sin(t*5)*.14:r;if(e.dot.scale.set(i,.3,i),e.isCurrent){let n=2.2+Math.sin(t*3)*.3;e.ring.scale.set(n,.12,n),e.dot.position.y=.4+Math.max(0,Math.sin(t*3))*.16}else e.dot.position.y=.4;this.animateStars(e,t),e.keyIcon&&(e.keyIcon.rotation.y=t*1.4,e.keyIcon.position.y=1+Math.sin(t*2+n)*.08),e.bossHead&&e.bossHead.visible&&(e.bossHead.rotation.y=Math.sin(t*1.3+n)*.5,e.bossHead.position.y=3.3+Math.sin(t*2.1+n)*.12)}),this.secretViews.forEach((n,r)=>{if(!n.group.visible)return;let i=1.15+Math.sin(t*4+r)*.12;n.dot.scale.set(i,.3,i),n.crystals&&(n.crystals.rotation.y=t*.4),this.animateStars(n,t),Math.random()<e*.8&&this.effects.sparkle(new B(n.group.position.x+(Math.random()-.5),1.2,n.group.position.z))}),!this.reveal&&this.revealQueue.length&&!this.walk&&this.startReveal(this.revealQueue.shift()),this.reveal&&this.updateReveal(e),this.walk){let t=this.walk;t.t+=e/t.dur;let n=Math.min(1,t.t)*t.dist;for(;t.seg<t.points.length-2&&t.cum[t.seg+1]<n;)t.seg++;let r=t.points[t.seg],i=t.points[t.seg+1],a=t.cum[t.seg+1]-t.cum[t.seg],o=a>0?(n-t.cum[t.seg])/a:1,s=r.x+(i.x-r.x)*o,c=r.z+(i.z-r.z)*o,l=Math.atan2(r.z-i.z,i.x-r.x)-this.token.rotation.y;l=Math.atan2(Math.sin(l),Math.cos(l)),this.token.rotation.y+=l*(1-Math.exp(-e*12)),t.h+=(this.heightAt(s,c)-t.h)*(1-Math.exp(-e*10)),this.token.position.set(s,dm+t.h+Math.abs(Math.sin(t.t*22))*.18,c);let u=this.token.userData.parts,d=Math.sin(t.t*30);if(u.legL.rotation.z=-d*.8,u.legR.rotation.z=d*.8,u.armL.rotation.z=d*.8,u.armR.rotation.z=-d*.8,t.t>=1){this.tokenNav=t.target;let e=this.navList[t.target];this.token.position.set(e.x,dm,e.z),u.legL.rotation.z=u.legR.rotation.z=0,u.armL.rotation.z=u.armR.rotation.z=0,this.walk=null,this.cb.onNodeSelected(this.navInfo(e))}}else if(!this.reveal){this.token.position.y=dm+Math.abs(Math.sin(t*2))*.05;let n=-Math.PI/2-this.token.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.token.rotation.y+=n*(1-Math.exp(-e*8))}if(this.panIdle+=e,this.panIdle>4||this.walk){let t=1-Math.exp(-e*3);this.focus.x+=(this.token.position.x-this.focus.x)*t,this.focus.z+=(this.token.position.z-this.focus.z)*t}this.camera.position.set(this.focus.x+nm.x,nm.y,this.focus.z+nm.z),this.camera.lookAt(this.focus.x,0,this.focus.z),this.effects.update(e)}},hm=Tl[0],gm=new Oi(1,1,1),_m=e=>`#`+e.toString(16).padStart(6,`0`);function vm(e,t){let n=e=>{let n=document.createElement(`canvas`);n.width=128,n.height=128;let r=n.getContext(`2d`);return r.fillStyle=_m(t),r.fillRect(0,0,128,128),r.fillStyle=`rgba(255,255,255,0.85)`,r.fillRect(12,12,104,104),e&&(r.fillStyle=`#2c3e75`,r.font=`bold 64px sans-serif`,r.font=`bold ${Math.min(52,Math.floor(6016/r.measureText(e).width))}px sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,64,68)),new G({map:new wi(n)})},r=n(e),i=n(``);return new W(gm,[i,i,i,i,r,r])}var ym=class{constructor(){this.scene=new xn,this.scene.background=new U(hm.skyTop),this.scene.fog=new bn(hm.fog,18,46),this.camera=new Sa(38,window.innerWidth/window.innerHeight,.1,60),this.camera.position.set(1.1,2,6.6),this.camera.lookAt(1.1,1.05,0),this.scene.add(new Oa(15003127,.8));let e=new Da(16772300,1);e.position.set(3,5,4),this.scene.add(e);{let e=document.createElement(`canvas`);e.width=2,e.height=128;let t=e.getContext(`2d`),n=t.createLinearGradient(0,0,0,128);n.addColorStop(0,_m(hm.skyTop)),n.addColorStop(.52,_m(hm.skyBot)),n.addColorStop(.72,_m(hm.fog)),n.addColorStop(1,_m(hm.fog)),t.fillStyle=n,t.fillRect(0,0,2,128);let r=new W(new Pi(45,20,14),new Gr({map:new wi(e),side:1,fog:!1,depthWrite:!1}));r.renderOrder=-1,this.scene.add(r)}{let e=new Gr({color:hm.sun,fog:!1}),t=new H,n=new W(gm,e);n.scale.set(3.4,3.4,.6),t.add(n);for(let[n,r]of[[2.1,0],[-2.1,0],[0,2.1],[0,-2.1]]){let i=new W(gm,e);i.scale.set(n?.9:2.2,n?2.2:.9,.55),i.position.set(n,r,0),t.add(i)}t.position.set(-3.2,5.6,-26),this.scene.add(t)}this.clouds=[];{let e=jl(4242);for(let t=0;t<6;t++){let n=new H,r=new G({color:hm.cloud,transparent:!0,opacity:.75+e()*.25,emissive:hm.cloud,emissiveIntensity:.55}),i=2+(e()*3|0);for(let t=0;t<i;t++){let a=new W(gm,r),o=1.4+e()*1.5;a.scale.set(o,.7+e()*.6,1.2+e()),a.position.set((t-(i-1)/2)*1.4,e()*.6,(e()-.5)*1.5),n.add(a)}let a=new W(gm,r);a.scale.set(i*1.4+.8,.5,1.9),a.position.y=-.35,n.add(a),n.scale.setScalar(.7+e()*.5),n.position.set(-26+t*9+e()*4,3+e()*2.5,-16-e()*12),n.userData.drift=.25+e()*.45,this.scene.add(n),this.clouds.push(n)}}{let e=new mi(gm,new G,1400);e.frustumCulled=!1;let t=new fn,n=new U,r=jl(1337),i=0,a=(r,a,o,s,c,l,u,d=0)=>{t.position.set(r,a,o),t.scale.set(s,c,l),t.updateMatrix(),e.setMatrixAt(i,t.matrix),n.setHex(u),d&&n.offsetHSL(0,0,d),e.setColorAt(i,n),i++};for(let e=-20;e<=20;e++)for(let t=-18;t<=4;t++){let n=r(),i=(n-.5)*.045+(n>.97?.05:0)-(t+18)*.003;a(e,-.47,t,1,.5,1,hm.top[0],i)}let o=(e,t,n,i,o,s)=>{let c=-.6;for(let s=0;s<3;s++){let l=(n+2)/3;a(e+(r()-.5)*1.2,c+l/2,i,t*(1-s*.24),l+.02,3.5-s*.3,o,s&1?.04:-.02),c+=l}if(a(e,c+.5,i,t*.3,1,2.8,o,.06),s){let n=1+(r()*3|0);for(let o=0;o<n;o++){let n=e+(r()-.5)*t*.5;a(n,c+1.15,i,.25,.7,.4,7162410),a(n,c+1.9,i,.95,.95,.95,4169274,(r()-.5)*.1)}}};a(1,-.52,-28,66,.5,22,hm.top[1],-.02);for(let e=-24;e<=28;e+=12+(r()*6|0))o(e,8+r()*5,.8+r()*1.2,-24,hm.hill,!0),o(e+5+r()*5,10+r()*6,1.8+r()*1.6,-32,hm.hill2,!1);((e,t,n)=>{a(e,.28,t,.3,1,.3,16111480),a(e+.18,1.08,t,.3,.8,.3,15716202),a(e-.1,1.78,t,.3,.7,.3,16111480),a(e,2.5799999999999996,t,1.9,1,1.9,9063213,n),a(e+.6,3.1799999999999997,t+.3,1,.8,1,9655087,n+.03),a(e-.55,3.28,t-.2,1.1,.9,1.1,8340263,n),a(e,3.78,t,.9,.5,.9,13779498,n),a(e+.2,4.08,t+.1,.3,.15,.3,16773836)})(-5.5,-11,.03),a(-8,.88,-16,1.2,2.2,1.2,15777888,.02),a(-8,2,-16,.7,.14,.7,10250798);let s=(e,t)=>{a(e,.28,t,1.3,1,1.3,4169274,(r()-.5)*.08),a(e+.4,.73,t+.1,.5,.5,.5,14826286),a(e-.45,.48,t+.2,.45,.45,.45,15684419)};s(4.8,-5.5),s(-3.2,-10),s(-7.5,-17);for(let e=0;e<8;e++)a(-5+r()*12,-.17,-12+r()*10,.2,.1,.2,e&1?16773836:16246968);{let e=1.7,t=-5.5,n=-23.5,r=13220002;a(t,.5,n,1.7*e,1.2*e,1.5*e,r),a(t,2.03,n,1*e,.8*e,.9*e,r,.03);for(let[i,o]of[[-.8,-.7],[.8,-.7],[-.8,.7],[.8,.7]])a(t+i*e,1.095,n+o*e,.45*e,1.9*e,.45*e,r,-.02),a(t+i*e,2.9649999999999994,n+o*e,.6*e,.4*e,.6*e,13915991)}e.count=i,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),this.scene.add(e)}for(let[e,t,n,r,i,a]of[[`the`,16767293,-2.2,-3,.6,.35],[`and`,16739179,-3.5,-5,.55,-.5],[`see`,7077816,2.4,-3.5,.55,.25],[`play`,7649791,-2.6,-8,.5,-.3]]){let o=vm(e,t);o.scale.setScalar(i),o.position.set(n,-.22+i/2,r),o.rotation.y=a,this.scene.add(o)}{let{group:e,armor:t}=gp(0);for(let[n,r,i]of t){let t=new W(gm,new G({color:16766282,emissive:6704384}));t.scale.setScalar(.5),t.position.set(n,r,i),e.add(t)}e.scale.setScalar(.6),e.position.set(-.2,-.22,-22),this.scene.add(e)}this.coins=[];{let e=new Ai(.3,.3,.09,12),t=new G({color:16766282,emissive:6704384});for(let[n,r,i]of[[-4,2.6,-5],[-2,3.2,-7],[.4,2.9,-6]]){let a=new W(e,t);a.rotation.x=Math.PI/2,a.position.set(n,r,i),a.userData.baseY=r,this.scene.add(a),this.coins.push(a)}}let t=new W(new Ai(1,1.15,.22,32),new G({color:7200621}));t.position.y=-.11,this.scene.add(t),this.kid=Gf(1),this.scene.add(this.kid),this.t=0}setLook(e){Wf(this.kid,e)}tick(e){this.t+=e,this.kid.rotation.y=this.t*.9,this.kid.position.y=Math.sin(this.t*2.2)*.03;let t=this.kid.userData.parts,n=Math.sin(this.t*2.2)*.15;t.armL.rotation.z=n,t.armR.rotation.z=-n;for(let t of this.clouds)t.position.x+=t.userData.drift*e,t.position.x>26&&(t.position.x=-26);for(let e=0;e<this.coins.length;e++){let t=this.coins[e];t.rotation.z=this.t*1.6+e*2.1,t.position.y=t.userData.baseY+Math.sin(this.t*1.4+e*2)*.12}}},bm=xl,xm=new Ai(.5,.5,1,10),Sm=new ji(.5,1,10),Cm=new Pi(.5,10,8),wm=.3,Tm=0,Em={minX:-5.75,maxX:5.75,minZ:-6.35,maxZ:1.35},Dm={minX:-4.9,maxX:4.9,minZ:-5.4,maxZ:.6},Om={minX:-12.4,maxX:12.4,minZ:-8.4,maxZ:12.4},km=2.6,Am=3.6,jm=(e,t,n)=>t>e.minX&&t<e.maxX&&n>e.minZ&&n<e.maxZ,Mm=[16766282,16761395,16769154,16103746,16767854];function Z(e,t=0){return new G({color:e,emissive:t})}function Q(e,t,n,r,i,a,o,s=0){let c=new W(bm,e);return c.position.set(t,n,r),c.scale.set(i,a,o),c.rotation.y=s,c}var Nm=class{constructor(e){this.renderer=e,this.active=!1,this.scene=new xn,this.scene.background=new U(7980272),this.camera=new Sa(45,window.innerWidth/window.innerHeight,.1,200);let t=new ua(16774109,8295344,1.05),n=new Da(16768942,1.45);n.position.set(8,14,10);let r=new wa(16764810,.85,16,1.6);r.position.set(0,3.4,-2.5),this.scene.add(t,n,r),this.effects=new jp(this.scene),this.built={},this.trophies={},this.anims=[],this.itemPos={rug:[1.8,wm,-2.2],chair:[4,wm,-3.2],table:[2.6,wm,-3.4],bed:[-3.4,wm,-4.6],lamp:[-1.5,wm,-5.2],bookshelf:[3.9,wm,-5.3],toybox:[-4,wm,-1.6],aquarium:[4.2,wm,-.8],telescope:[-4.2,wm,.2],robot:[.6,wm,-.8],flowers:[-3,Tm,3.2],mailbox:[2.4,Tm,7.2],tree:[7.2,Tm,4],swing:[-7.2,Tm,3.4],trampoline:[6.4,Tm,8],cat:[1.6,Tm,2.2],dog:[-1.6,Tm,4.4],rocket:[-7.8,Tm,8.2],golemstatue:[5.4,Tm,5.2],serpentstatue:[-4.8,Tm,6.6],yetisnowman:[9.2,Tm,6],crystallamp:[1.4,wm,-5],dragonkite:[10.2,Tm,10.4],herotrophy:[3.6,Tm,3]},this.buildIsland(),this.buildHouse(),this.buildTrophyShelf(),this.buildClouds(),this.kid=Gf(.85),this.kidHome=new B(.6,Tm,3.4),this.kid.position.copy(this.kidHome),this.kid.rotation.y=-Math.PI/4,this.scene.add(this.kid),this.walkPath=null,this.kidY=Tm,this.attachInput(),this.camBase=new B(10.5,10.5,16.5),this.camLook=new B(-.5,1.2,.5),this.camera.position.copy(this.camBase),this.camera.lookAt(this.camLook)}buildIsland(){let e=Q(Z(7127626),0,-.4,2,26,.8,22),t=Q(Z(9268037),0,-1.55,2,25,1.5,21),n=Q(Z(7820591),0,-2.7,2,22,.9,18);this.scene.add(e,t,n),this.grassMesh=e;let r=Z(8114520);for(let e=-2;e<=2;e++)this.scene.add(Q(r,e*5.2,.01,2,2.6,.02,22));let i=Z(6535235),a=Z(7982423);for(let[e,t,n,r,o]of[[-8.2,-1.5,2.6,2,0],[4.5,6.5,3,2.2,1],[-3.5,8.8,2.2,1.8,0],[9,4,2.4,2,1],[-10.5,.5,2,1.6,1],[1.5,10.6,2.8,1.8,0]])this.scene.add(Q(o?a:i,e,.018,t,n,.02,r,e*.1));let o=Z(14274488);for(let e=0;e<7;e++)this.scene.add(Q(o,.5+Math.sin(e*1.7)*.35,.02,1.6+e*1.55,1.2,.06,1,Math.sin(e)*.2));let s=Z(5154372);this.scene.add(Q(s,-6.5,.35,-3.5,1.4,.9,1.2),Q(s,7.5,.35,-2.5,1.2,.8,1.3),Q(s,-9.5,.3,5.5,1.1,.7,1.1));let c=Z(10263690);this.scene.add(Q(c,9.8,.22,1.5,.9,.55,.7,.5))}buildHouse(){let e=Z(16179896),t=Z(15520932),n=new H,r=Q(Z(14393695),0,.15,-2.5,11.2,.3,7.4);n.add(r),this.floorMesh=r;let i=Z(13801551),a=Z(13078087);for(let e=0;e<8;e++)n.add(Q(e%2?i:a,-4.9+e*1.4,.305,-2.5,1.32,.014,7.3));n.add(Q(Z(16772536,3353104),-2.6,.318,-4.3,1.7,.012,2,.15)),n.add(Q(Z(6926560),0,.322,.2,1.6,.02,.9)),n.add(Q(e,0,1.8,-5.9,11.2,3,.35)),n.add(Q(t,-5.4,1.8,-2.5,.35,3,7.2)),n.add(Q(t,5.4,1.8,-2.5,.35,3,7.2)),n.add(Q(Z(15785134),1.8,2.3,-5.71,2.2,1.3,.06)),n.add(Q(Z(16443586),-4.3,1.3,-5.71,1.5,1.1,.06));let o=Z(13607787);n.add(Q(o,0,.48,-5.7,11,.36,.08)),n.add(Q(o,-5.2,.48,-2.5,.08,.36,6.9)),n.add(Q(o,5.2,.48,-2.5,.08,.36,6.9)),n.add(Q(e,-4.4,1.8,.9,2.3,3,.3)),n.add(Q(e,4.4,1.8,.9,2.3,3,.3)),n.add(Q(e,0,3,.9,11.2,.6,.3)),n.add(Q(Z(16777215),-2.6,2,-5.72,1.5,1.3,.1)),n.add(Q(Z(11066613,1714746),-2.6,2,-5.66,1.2,1,.1));let s=Z(14834506),c=Q(s,-3.1,4.35,-2.5,6.9,.35,8.4);c.rotation.z=.42;let l=Q(s,3.1,4.35,-2.5,6.9,.35,8.4);l.rotation.z=-.42,n.add(c,l),n.add(Q(Z(13191739),0,5.72,-2.5,.8,.42,8.5)),n.add(Q(Z(11559242),3.4,5.4,-4.2,.85,1.7,.85)),n.add(Q(Z(15261906),3.4,6.3,-4.2,1.05,.25,1.05)),n.add(Q(t,-.6,1,-4.6,.25,1.4,2.4)),this.scene.add(n)}buildTrophyShelf(){let e=new H;e.position.set(.8,2.55,-5.55),e.add(Q(Z(10119999),0,0,0,4.6,.16,.7)),e.add(Q(Z(8739379),-2,-.35,.15,.14,.55,.35)),e.add(Q(Z(8739379),2,-.35,.15,.14,.55,.35)),this.scene.add(e),this.shelf=e}buildClouds(){this.clouds=[];let e=Z(16777215),t=[[-18,8,-8,.5],[14,10,-12,.4],[-12,12,14,.6],[18,9,8,.35],[0,13,-16,.45]],n=Z(14280436);for(let[r,i,a,o]of t){let t=new H;for(let n=0;n<3;n++){let r=new W(bm,e);r.scale.set(2.2+n*.8,.9,1.6+n%2),r.position.set(n*1.6-1.6,n%2*.4,(n-1)*.7),t.add(r)}let s=new W(bm,n);s.scale.set(5.4,.4,2.6),s.position.y=-.5,t.add(s),t.position.set(r,i,a),t.userData.drift=o,this.scene.add(t),this.clouds.push(t)}}makeRug(){let e=new H;return e.add(Q(Z(14834523),0,.03,0,3.2,.06,2.2)),e.add(Q(Z(15913120),0,.065,0,2.4,.02,1.5)),e}makeChair(){let e=new H,t=Z(9263659);e.add(Q(Z(6000089),0,.5,0,.75,.14,.75)),e.add(Q(Z(6000089),0,.95,-.32,.75,.85,.12));for(let[n,r]of[[-.28,-.28],[.28,-.28],[-.28,.28],[.28,.28]])e.add(Q(t,n,.22,r,.1,.45,.1));return e.rotation.y=-.7,e}makeTable(){let e=new H,t=Z(11104570);e.add(Q(t,0,.78,0,1.6,.12,1.1));for(let[t,n]of[[-.65,-.4],[.65,-.4],[-.65,.4],[.65,.4]])e.add(Q(Z(9263659),t,.36,n,.12,.72,.12));return e.add(Q(Z(16777215),-.3,.87,0,.45,.05,.45)),e.add(Q(Z(16747586),.4,.94,.15,.2,.24,.2)),e}makeBed(){let e=new H;return e.add(Q(Z(9263659),0,.3,0,2.5,.5,1.4)),e.add(Q(Z(9263659),-1.2,.75,0,.14,1.1,1.4)),e.add(Q(Z(8308963),.25,.66,0,1.9,.24,1.3)),e.add(Q(Z(16777215),-.85,.68,0,.6,.22,.9)),e.add(Q(Z(16766282),.5,.82,.25,.4,.1,.4)),e}makeLamp(){let e=new H;e.add(Q(Z(5592422),0,.06,0,.5,.12,.5));let t=new W(xm,Z(5592422));t.scale.set(.12,1.5,.12),t.position.y=.85;let n=new W(Sm,Z(16769154,5587968));return n.scale.set(.85,.6,.85),n.position.y=1.8,e.add(t,n),e}makeBookshelf(){let e=new H;e.add(Q(Z(10119999),0,1,0,1.6,2,.5));let t=[14834523,6000089,6934634,16766282,12089305];for(let n=0;n<3;n++){e.add(Q(Z(8015658),0,.45+n*.6,.05,1.44,.06,.44));for(let r=0;r<4;r++)e.add(Q(Z(t[(n*2+r)%5]),-.5+r*.34,.72+n*.6,.1,.22,.42,.3))}return e}makeToybox(){let e=new H;e.add(Q(Z(6926560),0,.4,0,1.4,.8,.9)),e.add(Q(Z(4886724),0,.86,0,1.5,.16,1)),e.children[1].rotation.x=-.25;let t=new W(Cm,Z(14834523));return t.scale.setScalar(.35),t.position.set(.9,.18,.5),e.add(t,Q(Z(16766282),-.15,.99,0,.3,.3,.3,.6)),e}makeFlowers(){let e=new H;e.add(Q(Z(8016432),0,.09,0,2.4,.18,1.3));let t=[16739201,16767293,16752627,7649791,16747586];for(let n=0;n<5;n++){let r=-.9+n*.45;e.add(Q(Z(4169274),r,.4,0,.07,.5,.07));let i=new W(Cm,Z(t[n]));i.scale.setScalar(.3),i.position.set(r,.7,0),e.add(i)}return e}makeMailbox(){let e=new H;e.add(Q(Z(9263659),0,.55,0,.12,1.1,.12));let t=Z(6000089);e.add(Q(t,0,1.2,0,.55,.4,.85));let n=new W(xm,t);return n.scale.set(.55,.85,.4),n.rotation.x=Math.PI/2,n.position.y=1.4,e.add(n),e.add(Q(Z(14834523),.32,1.5,.25,.06,.34,.1)),e.rotation.y=.5,e}makeTree(){let e=new H,t=new W(xm,Z(8015658));t.scale.set(.55,1.8,.55),t.position.y=.9,e.add(t),e.add(Q(Z(4169274),0,2.4,0,2.6,1.6,2.6)),e.add(Q(Z(5027141),0,3.4,0,1.7,1,1.7));let n=new W(Cm,Z(14834523));return n.scale.setScalar(.24),n.position.set(.9,1.9,.9),e.add(n),e}makeSwing(e){let t=new H,n=Z(13208139),r=Q(n,-1.3,1.1,-.5,.15,2.3,.15);r.rotation.x=.28;let i=Q(n,-1.3,1.1,.5,.15,2.3,.15);i.rotation.x=-.28;let a=Q(n,1.3,1.1,-.5,.15,2.3,.15);a.rotation.x=.28;let o=Q(n,1.3,1.1,.5,.15,2.3,.15);o.rotation.x=-.28,t.add(r,i,a,o),t.add(Q(n,0,2.2,0,3,.16,.16));let s=new H;return s.position.set(0,2.2,0),s.add(Q(Z(12237498),-.35,-.65,0,.05,1.3,.05)),s.add(Q(Z(12237498),.35,-.65,0,.05,1.3,.05)),s.add(Q(Z(14834523),0,-1.3,0,.9,.1,.45)),t.add(s),e.push(e=>{s.rotation.x=Math.sin(e*1.4)*.28}),t.rotation.y=.9,t}makeTrampoline(){let e=new H,t=new W(xm,Z(2964053));t.scale.set(2.4,.18,2.4),t.position.y=.66,e.add(t);let n=new W(xm,Z(6934634));n.scale.set(2.7,.12,2.7),n.position.y=.78,e.add(n);for(let t=0;t<4;t++){let n=t*Math.PI/2+Math.PI/4;e.add(Q(Z(8947865),Math.cos(n)*1.1,.33,Math.sin(n)*1.1,.1,.66,.1))}return e}makeCat(e){let t=new H,n=Z(15769675);t.add(Q(n,0,.32,0,.85,.42,.45));let r=Q(n,.45,.62,0,.42,.4,.4);t.add(r),t.add(Q(n,.32,.9,-.12,.12,.18,.08)),t.add(Q(n,.32,.9,.12,.12,.18,.08));let i=Z(2236962);t.add(Q(i,.66,.66,-.1,.05,.07,.07)),t.add(Q(i,.66,.66,.1,.05,.07,.07));let a=Q(n,-.48,.55,0,.1,.55,.1);return a.rotation.z=.4,t.add(a),e.push(e=>{a.rotation.z=.4+Math.sin(e*3)*.25,r.position.y=.62+Math.sin(e*1.8)*.02}),t.rotation.y=2.2,t}makeDog(e){let t=new H,n=Z(11104570),r=Q(n,0,.4,0,1.05,.5,.55);t.add(r);let i=Q(n,.6,.78,0,.5,.45,.45);t.add(i),t.add(Q(Z(8015658),.5,1.05,-.2,.12,.28,.1)),t.add(Q(Z(8015658),.5,1.05,.2,.12,.28,.1)),t.add(Q(Z(2236962),.87,.72,0,.1,.1,.14));for(let[e,r]of[[-.35,-.18],[-.35,.18],[.35,-.18],[.35,.18]])t.add(Q(n,e,.12,r,.14,.25,.14));let a=Q(n,-.6,.62,0,.09,.45,.09);return a.rotation.z=-.6,t.add(a),e.push(e=>{a.rotation.x=Math.sin(e*9)*.5,t.position.y=Tm+Math.abs(Math.sin(e*2.2))*.06}),t.rotation.y=-2,t}makeAquarium(e){let t=new H;t.add(Q(Z(9263659),0,.35,0,1.3,.7,.7)),t.add(Q(Z(8308963,666170),0,1.05,0,1.2,.7,.6)),t.add(Q(Z(2964053),0,1.44,0,1.3,.08,.7)),t.add(Q(Z(15651982),0,.74,0,1.1,.08,.5));let n=Q(Z(16747586),0,1.05,0,.22,.14,.08),r=Q(Z(16766282),-.15,1.05,0,.1,.12,.04);return t.add(n,r),e.push(e=>{let t=e*1.2;n.position.set(Math.cos(t)*.35,1.05+Math.sin(e*2.6)*.08,Math.sin(t)*.14),n.rotation.y=-t+Math.PI/2,r.position.copy(n.position),r.rotation.y=n.rotation.y,r.translateX(-.16)}),t}makeTelescope(){let e=new H,t=Z(5592422);for(let n=0;n<3;n++){let r=Q(t,0,.55,0,.08,1.1,.08);r.rotation.z=.35,r.rotation.y=n*(Math.PI*2/3),r.rotateOnAxis(new B(0,0,1),0),r.position.set(Math.sin(n*2.1)*.3,.55,Math.cos(n*2.1)*.3),e.add(r)}let n=new W(xm,Z(6000089));n.scale.set(.3,1.2,.3),n.position.y=1.25,n.rotation.z=.9,n.rotation.y=-.5,e.add(n);let r=new W(xm,Z(16766282,5587968));return r.scale.set(.34,.1,.34),r.position.set(.48,1.62,-.25),r.rotation.copy(n.rotation),e.add(r),e}makeRobot(e){let t=new H,n=Z(10466504);t.add(Q(n,0,.5,0,.6,.7,.45)),t.add(Q(Z(14834523),0,.55,.24,.2,.2,.05));let r=new H;return r.position.y=1.05,r.add(Q(n,0,0,0,.45,.4,.4)),r.add(Q(Z(6942894,1722922),-.1,.02,.21,.1,.1,.04)),r.add(Q(Z(6942894,1722922),.1,.02,.21,.1,.1,.04)),r.add(Q(Z(16766282),0,.32,0,.05,.24,.05)),t.add(r),t.add(Q(n,-.42,.55,0,.14,.5,.14)),t.add(Q(n,.42,.55,0,.14,.5,.14)),t.add(Q(Z(7043722),-.16,.08,0,.2,.16,.3)),t.add(Q(Z(7043722),.16,.08,0,.2,.16,.3)),e.push(e=>{r.rotation.y=e*.6}),t.rotation.y=.8,t}makeRocket(e){let t=new H,n=new W(xm,Z(15261906));n.scale.set(1,2.2,1),n.position.y=1.6;let r=new W(Sm,Z(14834523));r.scale.set(1,.9,1),r.position.y=3.15,t.add(n,r),t.add(Q(Z(8308963,666170),0,2.1,.48,.4,.4,.12));for(let e=0;e<3;e++){let n=Q(Z(14834523),0,.55,0,.14,1,.7),r=e*(Math.PI*2/3);n.position.set(Math.sin(r)*.55,.55,Math.cos(r)*.55),n.rotation.y=r,t.add(n)}let i=this.itemPos.rocket;return e.push((e,t)=>{Math.random()<t*.7&&this.effects.sparkle(new B(i[0],.4,i[2]))}),t}makeGolemStatue(){let e=new H;e.add(Q(Z(10263690),0,.15,0,1.1,.3,1.1));let t=Z(9063213);e.add(Q(t,0,.75,0,.7,.9,.5)),e.add(Q(Z(12597547),0,1.16,0,.76,.14,.56)),e.add(Q(Z(10246710),0,1.45,0,.5,.45,.45));let n=Z(2236962);return e.add(Q(n,-.12,1.5,.21,.09,.09,.06)),e.add(Q(n,.12,1.5,.21,.09,.09,.06)),e.add(Q(t,-.5,.85,0,.22,.6,.22)),e.add(Q(t,.5,.85,0,.22,.6,.22)),e.add(Q(Z(16113331),.08,1.76,0,.18,.16,.18)),e.add(Q(Z(16113331),-.1,1.82,.06,.24,.1,.14)),e.add(Q(Z(15158332),.14,1.88,.08,.1,.1,.1)),e.rotation.y=.6,e}makeSerpentStatue(){let e=new H,t=Z(9062938);e.add(Q(Z(13208123),0,.12,0,1.6,.24,1.3)),e.add(Q(t,-.35,.35,0,.7,.35,.4)),e.add(Q(t,.15,.55,0,.5,.4,.4)),e.add(Q(t,.35,1,0,.4,.7,.38));let n=Q(t,.35,1.55,.05,.55,.4,.44);e.add(n),e.add(Q(Z(16769154),.35,1.81,.05,.24,.12,.24));let r=Z(2236962);return e.add(Q(r,.22,1.62,.28,.08,.08,.05)),e.add(Q(r,.48,1.62,.28,.08,.08,.05)),e.add(Q(Z(14834523),.35,1.42,.3,.08,.14,.06)),e.rotation.y=2.4,e}makeYetiSnowman(e){let t=new H,n=Z(15660799),r=new W(Cm,n);r.scale.set(1.3,1.1,1.3),r.position.y=.5;let i=new W(Cm,n);i.scale.setScalar(.95),i.position.y=1.35;let a=new W(Cm,n);a.scale.setScalar(.65),a.position.y=2.05,t.add(r,i,a),t.add(Q(Z(6000089),0,1.68,0,.75,.16,.7)),t.add(Q(Z(6000089),.25,1.4,.3,.16,.45,.1));let o=Z(2236962);t.add(Q(o,-.12,2.12,.28,.08,.08,.05)),t.add(Q(o,.12,2.12,.28,.08,.08,.05));let s=new W(Sm,Z(16747586));s.scale.set(.14,.4,.14),s.rotation.x=Math.PI/2,s.position.set(0,2,.45),t.add(s);let c=Q(Z(8015658),-.75,1.5,0,.6,.08,.08,0);c.rotation.z=.5;let l=Q(Z(8015658),.75,1.5,0,.6,.08,.08,0);return l.rotation.z=-.5,t.add(c,l),e.push(e=>{l.rotation.z=-.5+Math.sin(e*2.4)*.2}),t}makeCrystalLamp(e){let t=new H;t.add(Q(Z(5916210),0,.1,0,.9,.2,.9));let n=[],r=[[0,1,0,0,.34,0],[-.24,.6,.14,.35,.2,0],[.26,.55,-.1,-.3,.18,.2],[.1,.45,.24,.2,.14,-.25]];for(let[e,i,a,o,s,c]of r){let r=new W(Sm,Z(10448852,3809888));r.scale.set(s,i,s),r.position.set(e,i/2+.2,a),r.rotation.set(c,0,o),t.add(r),n.push(r)}return e.push(e=>{let t=1+Math.sin(e*2.2)*.06;n.forEach((e,n)=>{e.scale.x=e.scale.z=r[n][4]*t})}),t}makeDragonKite(e){let t=new H;t.add(Q(Z(9263659),0,.25,0,.14,.5,.14));let n=new H,r=Q(Z(12575999,2241092),0,0,0,1.1,1.1,.08,0);r.rotation.z=Math.PI/4,n.add(r),n.add(Q(Z(6000089),0,.1,.06,.34,.3,.06)),n.add(Q(Z(2236962),-.07,.14,.1,.06,.06,.04)),n.add(Q(Z(2236962),.07,.14,.1,.06,.06,.04));let i=[];for(let e=0;e<3;e++){let t=Q(Z([14834523,16766282,6934634][e]),0,-.95-e*.35,0,.3,.12,.05);n.add(t),i.push(t)}n.position.set(.5,3.2,.3),t.add(n);let a=Q(Z(16777215),0,0,0,.03,1,.03);t.add(a);let o=new B(0,.5,0);return e.push(e=>{n.position.x=.5+Math.sin(e*.9)*.5,n.position.y=3.2+Math.sin(e*1.3)*.35,n.rotation.z=Math.sin(e*1.1)*.18,i.forEach((t,n)=>{t.position.x=Math.sin(e*2.2-n*.9)*.18});let t=n.position.clone().add(o).multiplyScalar(.5);a.position.copy(t);let r=n.position.clone().sub(o);a.scale.y=r.length(),a.rotation.z=Math.atan2(-r.x,r.y)}),t}makeHeroTrophy(e){let t=new H,n=Z(16766282,7033344);t.add(Q(Z(12041929),0,.3,0,1.1,.6,1.1)),t.add(Q(Z(10134189),0,.66,0,.85,.12,.85)),t.add(Q(n,0,.82,0,.6,.2,.6));let r=new W(xm,n);r.scale.set(.18,.35,.18),r.position.y=1.08;let i=new W(xm,n);i.scale.set(.62,.55,.62),i.position.y=1.5,t.add(r,i),t.add(Q(n,-.42,1.55,0,.12,.36,.12)),t.add(Q(n,.42,1.55,0,.12,.36,.12));let a=Q(n,0,2.05,0,.5,.5,.12);a.rotation.z=Math.PI/4,t.add(a,Q(n,0,2.05,0,.5,.5,.12));let o=this.itemPos.herotrophy;return e.push((e,t)=>{Math.random()<t*.5&&this.effects.sparkle(new B(o[0],1.8,o[2]))}),t}makeTrophy(e){let t=new H,n=Z(Mm[e%Mm.length],4864e3);t.add(Q(n,0,.05,0,.3,.1,.3));let r=new W(xm,n);r.scale.set(.09,.16,.09),r.position.y=.17;let i=new W(xm,n);return i.scale.set(.3,.28,.3),i.position.y=.4,t.add(r,i),t.add(Q(n,-.2,.42,0,.07,.18,.07)),t.add(Q(n,.2,.42,0,.07,.18,.07)),t}buildItem(e){let t={rug:()=>this.makeRug(),chair:()=>this.makeChair(),table:()=>this.makeTable(),bed:()=>this.makeBed(),lamp:()=>this.makeLamp(),bookshelf:()=>this.makeBookshelf(),toybox:()=>this.makeToybox(),flowers:()=>this.makeFlowers(),mailbox:()=>this.makeMailbox(),tree:()=>this.makeTree(),swing:()=>this.makeSwing(this.anims),trampoline:()=>this.makeTrampoline(),cat:()=>this.makeCat(this.anims),dog:()=>this.makeDog(this.anims),aquarium:()=>this.makeAquarium(this.anims),telescope:()=>this.makeTelescope(),robot:()=>this.makeRobot(this.anims),rocket:()=>this.makeRocket(this.anims),golemstatue:()=>this.makeGolemStatue(),serpentstatue:()=>this.makeSerpentStatue(),yetisnowman:()=>this.makeYetiSnowman(this.anims),crystallamp:()=>this.makeCrystalLamp(this.anims),dragonkite:()=>this.makeDragonKite(this.anims),herotrophy:()=>this.makeHeroTrophy(this.anims)}[e];if(!t)return null;let n=t(),r=this.itemPos[e];return r&&(n.position.x+=r[0],n.position.y+=r[1],n.position.z+=r[2]),n}refresh(){let e=(Rd().house||{}).owned||{};for(let t of Object.keys(e)){if(!e[t]||this.built[t]||this.ceremony&&this.ceremony.decorId===t)continue;let n=this.buildItem(t);n&&(this.built[t]=n,this.scene.add(n))}for(let e=0;e<5;e++){if(this.ceremony&&this.ceremony.world===e||!pf(e)||this.trophies[e])continue;let t=this.makeTrophy(e);t.position.set(-1.8+e*.9,.08,0),this.shelf.add(t),this.trophies[e]=t}}celebrate(e){let t=this.itemPos[e];if(!t)return;let n=new B(t[0],t[1]+1.2,t[2]);this.effects.confetti(n),this.effects.sparkle(n)}beginCeremony(e,t,n=null){if(this.ceremony={world:e,decorId:t,onDone:n,t:0,stage:`fall`},this.enter(),!this.trophies[e]){let t=this.makeTrophy(e);t.position.set(-1.8+e*.9,1.7,0),this.shelf.add(t),this.trophies[e]=t}this.ceremony.trophy=this.trophies[e],this.ceremonyCam={pos:new B(2,3.4,.4),look:new B(.8,2.45,-5.55)},_d(`You beat the castle! Time for your trophy!`,{rate:1})}updateCeremony(e){let t=this.ceremony;if(t.t+=e,t.stage===`fall`){let e=Math.max(0,Math.min(1,(t.t-1.2)/.8));if(t.trophy.position.y=1.7-1.6199999999999999*e*e,e>=1){t.stage=`landed`,t.t=0;let e=new B;t.trophy.getWorldPosition(e),this.effects.confetti(e),this.effects.sparkle(e),Ou(),_d(`A new trophy for your shelf!`,{rate:1})}}else if(t.stage===`landed`){if(t.trophy.rotation.y+=e*3,t.t>2.4){t.trophy.rotation.y=0,t.t=0;let e=t.decorId&&Zp(t.decorId);if(e){if(t.stage=`decor`,!this.built[t.decorId]){let e=this.buildItem(t.decorId);e&&(this.built[t.decorId]=e,this.scene.add(e))}this.celebrate(t.decorId),wu(),_d(`You won the ${e.name}! What a prize!`,{rate:1});let n=this.itemPos[t.decorId];this.ceremonyCam={pos:new B(n[0]+3.2,n[1]+3.4,n[2]+5.2),look:new B(n[0],n[1]+1,n[2])}}else t.stage=`end`}}else t.stage===`decor`?t.t>3.2&&(t.stage=`end`):this.endCeremony()}endCeremony(){let e=this.ceremony;e&&(this.ceremony=null,this.ceremonyCam=null,e.trophy.position.y=.08,e.trophy.rotation.y=0,e.onDone&&e.onDone())}attachInput(){let e=this.renderer.domElement;this.raycaster=new Ka;let t=null,n=e=>{this.active&&(e.target&&e.target.closest&&e.target.closest(`button`)||(t={x:e.clientX,y:e.clientY}))},r=e=>{if(!this.active||!t)return;let n=Math.hypot(e.clientX-t.x,e.clientY-t.y);t=null,!(n>10)&&this.tap(e.clientX,e.clientY)};window.PointerEvent?(e.addEventListener(`pointerdown`,n),window.addEventListener(`pointerup`,r)):(e.addEventListener(`mousedown`,n),window.addEventListener(`mouseup`,r),e.addEventListener(`touchstart`,e=>n(e.changedTouches[0]),{passive:!0}),window.addEventListener(`touchend`,e=>r(e.changedTouches[0])))}tap(e,t){let n=new z(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);this.raycaster.setFromCamera(n,this.camera);let r=this.raycaster.intersectObjects([this.floorMesh,this.grassMesh],!1);if(!r.length)return;let i=r[0].point,a=this.clampTarget({x:i.x,z:i.z}),o=this.routeTo(a);if(!o)return;let s=[0];for(let e=1;e<o.length;e++)s.push(s[e-1]+Math.hypot(o[e].x-o[e-1].x,o[e].z-o[e-1].z));let c=s[s.length-1];c<.15||(this.walkPath={pts:o,cum:s,dist:c,s:0,seg:0},this.effects.sparkle(new B(a.x,this.groundY(a)+.3,a.z)))}clampTarget(e){let t=jm(Em,e.x,e.z)?Dm:Om;return{x:Math.max(t.minX,Math.min(t.maxX,e.x)),z:Math.max(t.minZ,Math.min(t.maxZ,e.z))}}groundY(e){return jm(Em,e.x,e.z)?wm:Tm}crossesHouse(e,t){let n=Math.ceil(Math.hypot(t.x-e.x,t.z-e.z)/.4);for(let r=1;r<n;r++){let i=r/n;if(jm(Em,e.x+(t.x-e.x)*i,e.z+(t.z-e.z)*i))return!0}return!1}outdoorLeg(e,t){if(!this.crossesHouse(e,t))return[t];let n=[e,{x:Em.minX-1.1,z:Em.maxZ+1},{x:Em.maxX+1.1,z:Em.maxZ+1},{x:Em.minX-1.1,z:Em.minZ-1},{x:Em.maxX+1.1,z:Em.minZ-1},t],r=n.length,i=Array(r).fill(1/0),a=Array(r).fill(-1),o=Array(r).fill(!1);for(i[0]=0;;){let e=-1;for(let t=0;t<r;t++)!o[t]&&(e<0||i[t]<i[e])&&(e=t);if(e<0||i[e]===1/0||e===r-1)break;o[e]=!0;for(let t=1;t<r;t++){if(o[t]||this.crossesHouse(n[e],n[t]))continue;let r=i[e]+Math.hypot(n[t].x-n[e].x,n[t].z-n[e].z);r<i[t]&&(i[t]=r,a[t]=e)}}if(a[r-1]<0)return[t];let s=[];for(let e=r-1;e>0;e=a[e])s.unshift(n[e]);return s}routeTo(e){let t={x:this.kid.position.x,z:this.kid.position.z},n=jm(Em,t.x,t.z),r=jm(Em,e.x,e.z),i=[t];if(n!==r){let r=Math.max(-2.6,Math.min(km,(n?t:e).x)),a={x:r,z:.4},o={x:r,z:2};n?i.push(a,o,...this.outdoorLeg(o,e)):i.push(...this.outdoorLeg(t,o),a,e)}else if(!n)i.push(...this.outdoorLeg(t,e));else{if((t.x+.6)*(e.x+.6)<0){let n=(-.6-t.x)/(e.x-t.x);t.z+(e.z-t.z)*n<-3.2&&i.push({x:-.6,z:-2.7})}i.push(e)}return i[i.length-1]!==e&&i.push(e),i}updateWalk(e){let t=this.walkPath,n=this.kid.userData.parts;for(t.s=Math.min(t.dist,t.s+e*Am);t.seg<t.pts.length-2&&t.cum[t.seg+1]<t.s;)t.seg++;let r=t.pts[t.seg],i=t.pts[t.seg+1],a=t.cum[t.seg+1]-t.cum[t.seg],o=a>0?(t.s-t.cum[t.seg])/a:1,s=r.x+(i.x-r.x)*o,c=r.z+(i.z-r.z)*o,l=Math.atan2(r.z-i.z,i.x-r.x)-this.kid.rotation.y;l=Math.atan2(Math.sin(l),Math.cos(l)),this.kid.rotation.y+=l*(1-Math.exp(-e*12)),this.kidY+=(this.groundY({x:s,z:c})-this.kidY)*(1-Math.exp(-e*10));let u=t.s*6;this.kid.position.set(s,this.kidY+Math.abs(Math.sin(u))*.06,c);let d=Math.sin(u);if(n.legL.rotation.z=-d*.7,n.legR.rotation.z=d*.7,n.armL.rotation.z=d*.7,n.armR.rotation.z=-d*.7,t.s>=t.dist){let e=t.pts[t.pts.length-1];this.kidY=this.groundY(e),this.kid.position.set(e.x,this.kidY,e.z),n.legL.rotation.z=n.legR.rotation.z=0,n.armL.rotation.z=n.armR.rotation.z=0,this.walkPath=null}}enter(){this.active=!0,this.refresh(),Wf(this.kid,Uf()),this.walkPath=null,this.kidY=Tm,this.kid.position.copy(this.kidHome),this.kid.rotation.y=-Math.PI/4,this.camera.position.copy(this.camBase),this.camera.lookAt(this.camLook)}exit(){this.endCeremony(),this.active=!1}tick(e){if(!this.active)return;let t=performance.now()/1e3;for(let t of this.clouds)t.position.x+=t.userData.drift*e,t.position.x>26&&(t.position.x=-26);for(let n of this.anims)n(t,e);if(this.walkPath)this.updateWalk(e);else{this.kid.position.y=this.kidY+Math.abs(Math.sin(t*2))*.04;let n=-Math.PI/4-this.kid.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.kid.rotation.y+=n*(1-Math.exp(-e*8))}if(this.ceremony&&this.updateCeremony(e),this.ceremonyCam){let t=1-Math.exp(-e*3);this.camera.position.lerp(this.ceremonyCam.pos,t),this.camLerpLook=(this.camLerpLook||this.camLook.clone()).lerp(this.ceremonyCam.look,t),this.camera.lookAt(this.camLerpLook)}else this.camLerpLook=null,this.camera.position.set(this.camBase.x+Math.sin(t*.12)*.7,this.camBase.y+Math.sin(t*.09)*.3,this.camBase.z+Math.cos(t*.12)*.7),this.camera.lookAt(this.camLook);this.effects.update(e)}},Pm=e=>document.getElementById(e),Fm=.28,Im=1.6,Lm=1.2,Rm=class{constructor(){this.scene=new xn,this.scene.background=new U(Al(8900331)),this.scene.fog=new bn(Al(8900331),30,80),this.camera=new Sa(50,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,4,12),this.camera.lookAt(0,1.5,0),this.scene.add(new Oa(14674421,.8));let e=new Da(16771524,1.7);e.position.set(6,12,8),this.scene.add(e),this.ground=new W(new ki(50,40),new G({color:kl(8308816)})),this.ground.rotation.x=-Math.PI/2,this.scene.add(this.ground),this.effects=new jp(this.scene),this.stage=new H,this.scene.add(this.stage),this.actors=new Map,this.playing=!1,this.script=[],this.idx=-1,this.blocking=null,this.background=[],this.onDone=null,this.t=0,Pm(`screen-cutscene`).addEventListener(`pointerdown`,()=>this.tapAdvance());let t=Pm(`btn-cutscene-skip`);t.addEventListener(`pointerdown`,e=>e.stopPropagation()),t.addEventListener(`click`,e=>{e.stopPropagation(),_d(`Skip`,{rate:1}),this.finish()})}play(e,t){this.stopAll(),this.script=e,this.onDone=t,this.idx=-1,this.playing=!0,this.t=0,Um(null),Wm(null),this.advance()}finish(){if(!this.playing)return;this.playing=!1,this.stopAll();let e=this.onDone;this.onDone=null,e&&e()}stopAll(){`speechSynthesis`in window&&speechSynthesis.cancel(),this.blocking=null,this.background=[],Um(null),Wm(null);for(let e of this.actors.values())this.stage.remove(e.group);this.actors.clear()}advance(){for(;this.playing;){if(this.idx++,this.idx>=this.script.length){this.finish();return}let e=this.startStep(this.script[this.idx]);if(e){if(this.script[this.idx].async){this.background.push(e);continue}this.blocking=e;return}}}tapAdvance(){if(!this.playing||!this.blocking)return;let e=this.blocking;this.blocking=null,e.fastForward&&e.fastForward(),this.advance()}tick(e){if(this.playing){this.t+=e,this.effects.update(e);for(let t of this.actors.values())!t.walking&&!t.static&&(t.group.position.y=t.baseY+Math.sin(this.t*2.2+t.bobSeed)*.04),this.updateWalk(t,e);this.background=this.background.filter(t=>!t.update(e)),this.blocking&&this.blocking.update(e)&&(this.blocking=null,this.advance())}}startStep(e){return e.setting?this.doSetting(e.setting):e.spawn?this.doSpawn(e.spawn):e.walk?this.doWalk(e.walk):e.cam?this.doCam(e.cam):e.say?this.doSay(e.say):e.showWord?this.doShowWord(e.showWord):e.emote?this.doEmote(e.emote):e.sfx?this.doSfx(e.sfx):e.fx?this.doFx(e.fx):e.wait==null?(console.warn(`cutscene: unknown step`,e),null):this.doWait(e.wait)}doSetting({sky:e=8900331,ground:t=8308816}){return this.scene.background.setHex(Al(e)),this.scene.fog.color.setHex(Al(e)),this.ground.material.color.setHex(kl(t)),null}doSpawn({id:e,kind:t=`kid`,at:n=[0,0],face:r=0,scale:i=1,world:a=0}){let o;if(t===`kid`)o=Gf(i,Uf());else if(t===`boss`)o=gp(a).group,o.scale.setScalar(i);else if(t===`house`)o=Bm(),o.scale.setScalar(i);else if(t===`trophy`)o=Hm(a),o.scale.setScalar(i);else return console.warn(`cutscene: unknown actor kind`,t),null;return o.position.set(n[0],0,n[1]),o.rotation.y=r,this.stage.add(o),this.actors.set(e,{group:o,kind:t,static:t===`house`,baseY:0,bobSeed:Math.random()*6,walking:null,walkPhase:0}),null}doWalk({id:e,to:t,speed:n=2.2}){let r=this.actors.get(e);if(!r)return null;let i=new B(t[0],0,t[1]),a=i.clone().sub(r.group.position).setY(0);if(a.lengthSq()>.001){let e=r.kind===`kid`?Math.atan2(-a.z,a.x):Math.atan2(a.x,a.z);r.group.rotation.y=e}return r.walking={target:i,speed:n},{update:()=>!r.walking,fastForward:()=>{r.group.position.copy(i),r.group.position.y=r.baseY,this.settleLimbs(r),r.walking=null}}}updateWalk(e,t){if(!e.walking)return;let{target:n,speed:r}=e.walking,i=e.group.position,a=n.clone().sub(i).setY(0),o=a.length(),s=r*t;if(o<=s){i.set(n.x,e.baseY,n.z),this.settleLimbs(e),e.walking=null;return}if(a.normalize().multiplyScalar(s),i.add(a),e.walkPhase+=t*r*3.4,i.y=e.baseY+Math.abs(Math.sin(e.walkPhase))*.06,e.kind===`kid`){let t=e.group.userData.parts,n=Math.sin(e.walkPhase);t.legL.rotation.z=n*.55,t.legR.rotation.z=-n*.55,t.armL.rotation.z=-n*.4,t.armR.rotation.z=n*.4}}settleLimbs(e){if(e.kind!==`kid`)return;let t=e.group.userData.parts;for(let e of[t.legL,t.legR,t.armL,t.armR])e.rotation.z=0}doCam({to:e,lookAt:t=[0,1.5,0],dur:n=1.5}){let r=this.camera.position.clone(),i=new B(...e),a=new B(...t),o=this.camLook?this.camLook.clone():a.clone(),s=0,c=e=>{let t=e*e*(3-2*e);this.camera.position.lerpVectors(r,i,t),this.camLook=o.clone().lerp(a,t),this.camera.lookAt(this.camLook)};return{update:e=>{s+=e;let t=Math.min(s/n,1);return c(t),t>=1},fastForward:()=>c(1)}}doSay({who:e=null,text:t,highlight:n=[]}){Um(t,n);let r=e?this.actors.get(e):null,i=!1,a=0;return _d(t,{rate:.95,onend:()=>{i=!0}}),{update:e=>{a+=e,r&&!r.walking&&(r.group.position.y=r.baseY+Math.abs(Math.sin(a*9))*(i?0:.05));let t=i&&a>=Lm;return t&&Um(null),t},fastForward:()=>{`speechSynthesis`in window&&speechSynthesis.cancel(),Um(null)}}}doShowWord({word:e,say:t=null}){let n=Wm(e),r=0,i=0,a=null,o=e.length*Fm;return{update:s=>{for(r+=s;i<n.length&&r>=(i+1)*Fm;)n[i].classList.add(`cs-in`),ku(i),i++;i===n.length&&a===null&&(a=r,_d(t||e,{rate:.9}));let c=r>=o+Im;return c&&Wm(null),c},fastForward:()=>{for(let e of n)e.classList.add(`cs-in`);_d(t||e,{rate:.9}),setTimeout(()=>Wm(null),900)}}}doEmote({id:e,kind:t=`jump`}){let n=this.actors.get(e);if(!n)return null;let r=0,i=t===`shake`?.6:.7;return t===`jump`&&Eu(),{update:e=>{r+=e;let a=Math.min(r/i,1);if(t===`jump`){if(n.group.position.y=n.baseY+Math.sin(a*Math.PI)*1.1,n.kind===`kid`){let e=n.group.userData.parts;e.armL.rotation.z=e.armR.rotation.z=Math.sin(a*Math.PI)*2.6}}else t===`shake`?n.group.rotation.z=Math.sin(a*Math.PI*6)*.09*(1-a):t===`wave`&&n.kind===`kid`&&(n.group.userData.parts.armR.rotation.z=Math.PI*.9+Math.sin(r*10)*.35*(1-a));return a>=1?(n.group.position.y=n.baseY,n.group.rotation.z=0,this.settleLimbs(n),!0):!1},fastForward:()=>{n.group.position.y=n.baseY,n.group.rotation.z=0,this.settleLimbs(n)}}}doSfx(e){let t=su[e];return typeof t==`function`?t():console.warn(`cutscene: unknown sfx`,e),null}doFx({kind:e=`confetti`,at:t=[0,2,0]}){let n=new B(...t);return e===`confetti`?this.effects.confetti(n):e===`sparkle`?this.effects.sparkle(n):e===`fireworks`&&this.effects.fireworks(n),null}doWait(e){let t=0;return{update:n=>(t+=n)>=e,fastForward:()=>{}}}},zm=(e,t,n,r,i,a,o)=>{let s=new W(xl,new G({color:e}));return s.position.set(t,n,r),s.scale.set(i,a,o),s};function Bm(){let e=new H;e.add(zm(16246468,0,1.6,0,5.4,3.2,4.6)),e.add(zm(10119999,0,1,2.32,1.3,2,.12)),e.add(zm(16769154,.45,1.15,2.4,.16,.16,.08));for(let t of[-1.7,1.7])e.add(zm(11066613,t,2,2.32,1,.9,.1)),e.add(zm(16777215,t,1.5,2.36,1.2,.14,.08));let t=zm(14834506,-1.5,3.85,0,3.6,.3,5.2);t.rotation.z=.45;let n=zm(14834506,1.5,3.85,0,3.6,.3,5.2);return n.rotation.z=-.45,e.add(t,n),e.add(zm(13191739,0,4.55,0,.7,.35,5.3)),e.add(zm(11559242,1.7,4.4,-1.2,.7,1.4,.7)),e.add(zm(15261906,1.7,5.15,-1.2,.9,.2,.9)),e}var Vm=[16766282,16761395,16769154,16103746,16767854];function Hm(e=0){let t=new H,n=Vm[e%Vm.length],r=new G({color:n,emissive:4864e3}),i=new Ai(.5,.5,1,10);t.add(zm(10119999,0,.15,0,.7,.3,.7));let a=new W(new Oi(.45,.12,.45),r);a.position.y=.36;let o=new W(i,r);o.scale.set(.12,.24,.12),o.position.y=.53;let s=new W(i,r);s.scale.set(.42,.4,.42),s.position.y=.85,t.add(a,o,s);for(let e of[-.28,.28]){let n=new W(new Oi(.1,.26,.1),r);n.position.set(e,.88,0),t.add(n)}return t}function Um(e,t=[]){let n=Pm(`cs-caption`);if(!e){n.classList.add(`hidden`),n.innerHTML=``;return}let r=new Set(t.map(e=>e.toLowerCase()));n.innerHTML=e.split(/(\s+)/).map(e=>{let t=e.toLowerCase().replace(/[^a-z']/g,``);return r.has(t)?`<span class="cs-hl">${e}</span>`:e}).join(``),n.classList.remove(`hidden`)}function Wm(e){let t=Pm(`cs-word`);if(!e)return t.classList.add(`hidden`),t.innerHTML=``,[];t.innerHTML=``;let n=[];for(let r of e){let e=document.createElement(`span`);e.className=`cs-letter`,e.textContent=r,t.appendChild(e),n.push(e)}return t.classList.remove(`hidden`),n}var Gm={demo:[{setting:{sky:16767392,ground:14660702}},{spawn:{id:`kid`,kind:`kid`,at:[-6,0],face:0}},{spawn:{id:`serpent`,kind:`boss`,world:1,at:[5,-1],scale:.9}},{cam:{to:[-6,3,10],lookAt:[-5,1.5,0],dur:.01}},{walk:{id:`kid`,to:[-2,0]},async:!0},{cam:{to:[0,3.5,11],lookAt:[0,1.5,0],dur:2.2}},{sfx:`sfxRoar`},{emote:{id:`serpent`,kind:`shake`}},{say:{who:`serpent`,text:`This word is mine! I will hide it away!`,highlight:[`away`]}},{cam:{to:[2,2.5,7],lookAt:[3,2.5,0],dur:1}},{showWord:{word:`away`}},{sfx:`sfxGiggle`},{walk:{id:`serpent`,to:[14,-1],speed:5},async:!0},{say:{who:`kid`,text:`Hey! Come back! I can read that word!`,highlight:[`come`,`back`]}},{cam:{to:[-1,3,8],lookAt:[-2,1.5,0],dur:1}},{emote:{id:`kid`,kind:`jump`}},{fx:{kind:`sparkle`,at:[-2,2,0]}},{say:{who:`kid`,text:`Let's go get it!`}}],finale:[{setting:{sky:16763274,ground:8308816}},{spawn:{id:`house`,kind:`house`,at:[7,-3]}},...[0,1,2,3,4].map(e=>({spawn:{id:`trophy${e}`,kind:`trophy`,world:e,at:[3.6+e*1.4,-.2]}})),{spawn:{id:`kid`,kind:`kid`,at:[-11,1]}},{cam:{to:[-11,3,9],lookAt:[-10,1.5,1],dur:.01}},{say:{who:`kid`,text:`You did it! You beat every single world!`,highlight:[`you`,`did`,`every`]},async:!0},{walk:{id:`kid`,to:[.5,1],speed:2.6},async:!0},{cam:{to:[1,4.5,12],lookAt:[3,2,-1],dur:3.2}},{sfx:`sfxFireworks`},{fx:{kind:`fireworks`,at:[7,6,-3]}},{fx:{kind:`fireworks`,at:[1,7,-2]}},{cam:{to:[6,2.8,6.5],lookAt:[6.5,1,0],dur:1.6},async:!0},{say:{text:`Look! Five shiny trophies for five worlds!`,highlight:[`look`,`five`]}},{sfx:`sfxKeyJingle`},{fx:{kind:`sparkle`,at:[6.5,1.5,0]}},{wait:.5},{cam:{to:[0,3,9],lookAt:[.5,1.8,1],dur:1.2}},{emote:{id:`kid`,kind:`jump`}},{fx:{kind:`confetti`,at:[.5,2.5,1]}},{showWord:{word:`hero`,say:`Hero!`}},{say:{who:`kid`,text:`You're a sight word hero!`,highlight:[`you`]}},{emote:{id:`kid`,kind:`wave`},async:!0},{sfx:`sfxFireworks`},{fx:{kind:`fireworks`,at:[4,7,-2]}},{fx:{kind:`confetti`,at:[7,5,-1]}},{wait:1.6}]},Km={title:{x:82,y:16},map:{x:88,y:18},char:{x:24,y:22},house:{x:14,y:34},pause:{x:66,y:28},complete:{x:69,y:20},bonus:{x:15,y:36},game:{x:90,y:30}},qm=16769213,Jm=16767293,Ym=16752627,Xm=2899573,Zm=16767293,Qm=15267839,$m=e=>`#${e.toString(16).padStart(6,`0`)}`;function eh(e){let t=document.createElement(`canvas`);t.width=64,t.height=64;let n=t.getContext(`2d`);n.fillStyle=$m(qm),n.fillRect(0,0,64,64),n.fillStyle=$m(Jm),n.fillRect(0,0,64,14),n.fillStyle=`#222`,n.fillRect(16,26,8,8),n.fillRect(40,26,8,8),e?(n.fillStyle=`#7a3b3b`,n.beginPath(),n.ellipse(32,45,6,8,0,0,Math.PI*2),n.fill()):(n.strokeStyle=`#a34d2a`,n.lineWidth=4,n.beginPath(),n.arc(32,42,10,.2*Math.PI,.8*Math.PI),n.stroke());let r=new wi(t);return r.magFilter=a,r.colorSpace=He,r}function th(){let e=new H,t=xl,n=new G({color:qm}),r=new G({color:Jm}),i=new G({color:Ym}),a=new G({color:Xm}),o=new G({color:Zm,emissive:6705664}),s=new G({color:Qm,transparent:!0,opacity:.8,depthWrite:!1,side:2}),c=eh(!1),l=eh(!0),u=new G({map:c}),d=new W(t,[n,n,r,n,u,n]);d.scale.set(.5,.5,.5),d.position.y=1.35;let f=new W(t,r);f.scale.set(.56,.3,.53),f.position.set(0,1.46,-.025);let p=new W(t,r);p.scale.set(.22,.22,.22),p.position.set(0,1.52,-.28);let m=new W(t,i);m.scale.set(.42,.5,.28),m.position.y=.85;let h=new W(t,i);h.scale.set(.58,.3,.4),h.position.y=.52;let g=(e,n,r)=>{let i=new H,a=new W(t,e);return a.scale.set(n,r,n),a.position.y=-r/2,i.add(a),i},_=g(n,.14,.36);_.position.set(-.12,.4,0);let v=g(n,.14,.36);v.position.set(.12,.4,0);for(let e of[_,v]){let n=new W(t,a);n.scale.set(.16,.1,.2),n.position.set(0,-.38,.03),e.add(n)}let y=g(n,.13,.42);y.position.set(-.28,1.05,0),y.rotation.z=-.25;let b=g(n,.13,.42);b.position.set(.28,1.05,0),b.rotation.z=2.4;let x=new H,S=new W(t,a);S.scale.set(.05,.4,.05),S.position.y=.12;let C=new H;for(let e of[0,Math.PI/4]){let n=new W(t,o);n.scale.set(.2,.2,.07),n.rotation.z=e,C.add(n)}C.position.y=.36,x.add(S,C),x.position.y=-.42,x.rotation.z=Math.PI,b.add(x);let w=e=>{let n=new H;n.position.set(e*.06,1.15,-.18);let r=new W(t,s);r.scale.set(.7,.42,.04),r.position.set(e*.48,.26,0),r.rotation.z=e*.5;let i=new W(t,s);return i.scale.set(.46,.26,.04),i.position.set(e*.36,-.12,0),i.rotation.z=e*-.2,n.add(r,i),n},T=w(-1),E=w(1);return e.add(d,f,p,m,h,_,v,y,b,T,E),e.position.y=-.85,e.rotation.y=-.3,{group:e,head:d,wingL:T,wingR:E,star:C,face:u,faceClosed:c,faceOpen:l,legL:_,legR:v}}var nh=null,rh=50,ih=!1,ah=null,oh=null;function sh(){if(nh)return;nh=document.createElement(`div`),nh.id=`fairy`,nh.innerHTML=`
    <div class="fairy-bob">
      <span class="fairy-spark s1" style="--dx: -34px; --dy: -30px;">✨</span>
      <span class="fairy-spark s2" style="--dx: 30px; --dy: -38px;">✨</span>
      <span class="fairy-spark s3" style="--dx: -6px; --dy: 34px;">⭐</span>
    </div>`,document.body.appendChild(nh);let e=new ml({alpha:!0,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(96,96),gl(e),nh.querySelector(`.fairy-bob`).prepend(e.domElement);let t=new xn,n=new Sa(38,1,.1,20);n.position.set(0,.15,3.4),n.lookAt(0,0,0),t.add(new Oa(16777215,.85));let r=new Da(16777215,1.6);r.position.set(2,4,5),t.add(r);let i=th();t.add(i.group);let a=0,o=!1,s=0,c=r=>{if(r-s<32.333333333333336)return;let c=s?Math.min((r-s)/1e3,.1):1/30;s=r,a+=c;let l=Math.sin(a*(ih?38:11))*.3+.25;i.wingL.rotation.y=-l,i.wingR.rotation.y=l,i.group.rotation.y=-.3+Math.sin(a*.7)*.18,i.star.rotation.z+=c*(ih?9:1.2);let u=ih&&Math.sin(a*16)>0;u!==o&&(o=u,i.face.map=u?i.faceOpen:i.faceClosed,i.face.needsUpdate=!0),i.legL.rotation.x=Math.sin(a*2.1)*.18,i.legR.rotation.x=Math.sin(a*2.1+1.4)*.18,e.render(t,n)},l=!1;ah=()=>{l||(l=!0,s=0,e.setAnimationLoop(c))},oh=()=>{l&&(l=!1,e.setAnimationLoop(null))},ah(),window.addEventListener(`wr-speech`,e=>{ih=!!e.detail.speaking,nh.classList.toggle(`speaking`,ih)})}function ch(e){if(!nh)return;let t=Km[e];if(nh.classList.toggle(`hidden`,!t),!t){oh();return}ah(),t.x!==rh&&nh.classList.toggle(`face-left`,t.x<rh),rh=t.x,nh.style.left=`${t.x}%`,nh.style.top=`${t.y}%`}var lh=200;function uh(e){let t=new ml({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setSize(lh,lh),gl(t);let n=new xn;n.add(new Oa(15003127,.8));let r=new Da(16772300,1);r.position.set(2,4,3),n.add(r);let i=new Sa(35,1,.1,20);i.position.set(0,1.35,3.4),i.lookAt(0,.8,0);let a=Gf(1);a.rotation.y=-Math.PI/2+.45,n.add(a);let o=e.map(e=>(Wf(a,e),t.render(n,i),t.domElement.toDataURL(`image/png`))),s=a.userData.parts;s.face.map&&s.face.map.dispose();for(let e of[...s.mats,s.face])e.dispose();return a.traverse(e=>e.geometry&&e.geometry!==xl&&e.geometry.dispose()),t.dispose(),t.forceContextLoss(),o}var $=e=>document.getElementById(e),dh=[`title`,`players`,`map`,`pause`,`complete`,`gamecomplete`,`bonus`,`char`,`house`,`cutscene`];function fh(e){sh(),ph($(`btn-play`),`Play!`,()=>e.onPlay()),ph($(`btn-character`),`Make your character!`,()=>e.onCharacter()),ph($(`btn-char-back`),`Back`,()=>e.onCharacterDone()),ph($(`btn-char-done`),`Looking good!`,()=>e.onCharacterDone()),ph($(`btn-settings`),`Settings`,()=>$(`settings-panel`).classList.toggle(`hidden`)),ph($(`btn-settings-close`),`Close`,()=>$(`settings-panel`).classList.add(`hidden`)),ph($(`btn-toggle-sound`),`Sound`,()=>e.onToggleSound()),ph($(`btn-toggle-music`),`Music`,()=>e.onToggleMusic()),ph($(`btn-toggle-mic`),`Mic round`,()=>e.onToggleMic()),ph($(`btn-toggle-unlock`),`All levels`,()=>e.onToggleUnlock()),ph($(`btn-switch-player`),`Switch player!`,()=>e.onSwitchPlayer()),ph($(`btn-players-back`),`Back`,()=>e.onPlayersBack()),ph($(`btn-new-player-ok`),`Let's go!`,()=>Eh(!0)),ph($(`btn-new-player-skip`),`Let's go!`,()=>Eh(!1)),ph($(`btn-delete-no`),`No`,()=>Dh()),ph($(`btn-delete-yes`),`Goodbye!`,()=>Oh()),ph($(`btn-map-back`),`Back`,()=>e.onMapBack()),ph($(`btn-banner-play`),`Here we go!`,()=>e.onBannerPlay()),ph($(`btn-pause`),`Pause`,()=>e.onPause()),ph($(`btn-resume`),`Resume`,()=>e.onResume()),ph($(`btn-pause-map`),`Map`,()=>e.onPauseMap()),$(`btn-repeat-word`).addEventListener(`click`,()=>{Ih(!1),e.onRepeatWord()}),ph($(`btn-next-level`),`Next level!`,()=>e.onNextLevel()),ph($(`btn-complete-map`),`Map`,()=>e.onCompleteMap()),ph($(`btn-final-map`),`Map`,()=>e.onCompleteMap()),ph($(`btn-final-house`),null,()=>e.onHouse(`complete`)),ph($(`btn-bonus-skip`),`Skip`,()=>e.onBonusSkip()),ph($(`btn-title-house`),null,()=>e.onHouse(`title`)),ph($(`btn-complete-house`),null,()=>e.onHouse(`complete`)),ph($(`btn-house-back`),`Back`,()=>e.onHouseBack()),ph($(`btn-house-shop`),`Shop!`,()=>Jh(!0)),ph($(`btn-shop-close`),`Close`,()=>Jh(!1)),ph($(`btn-ceremony-map`),`Map`,()=>e.onCeremonyDone()),Gh=e.onBuyItem,mh($(`btn-mic`),e.onMicDown,e.onMicUp),mh($(`btn-move-left`),()=>e.onMoveDown(-1),()=>e.onMoveUp(-1)),mh($(`btn-move-right`),()=>e.onMoveDown(1),()=>e.onMoveUp(1)),mh($(`btn-move-jump`),e.onJumpDown,e.onJumpUp);let t=0;$(`version-tag`).addEventListener(`click`,()=>{t++,t>=5&&(t=0,e.onDevUnlock())})}function ph(e,t,n){e.addEventListener(`click`,()=>{Ru(),t&&_d(t,{rate:1}),n()})}function mh(e,t,n){let r=e=>{e.preventDefault(),t()},i=e=>{e.preventDefault(),n()};e.addEventListener(`touchstart`,r,{passive:!1}),e.addEventListener(`touchend`,i,{passive:!1}),e.addEventListener(`touchcancel`,i,{passive:!1}),e.addEventListener(`mousedown`,r),e.addEventListener(`mouseup`,i),e.addEventListener(`mouseleave`,i)}function hh(e){for(let t of dh)$(`screen-${t}`).classList.toggle(`hidden`,t!==e);e!==`map`&&yh(),ch(e||`game`)}function gh(e){$(`hud`).classList.toggle(`hidden`,!e)}function _h(){let e=Rd();$(`btn-toggle-sound`).textContent=e.sound?`🔊 Sound: ON`:`🔇 Sound: OFF`,$(`btn-toggle-music`).textContent=e.music?`🎵 Music: ON`:`🎵 Music: OFF`,$(`btn-toggle-mic`).textContent=e.mic?`🎤 Mic Round: ON`:`🎤 Mic Round: OFF`,$(`btn-toggle-unlock`).textContent=e.devUnlocked?`🔓 All Levels: ON`:`🔒 All Levels: OFF`}function vh({name:e,stars:t,completed:n,secret:r,boss:i}){$(`banner-name`).textContent=r?`✨ ${e} ✨`:i?`👑 ${e} 👑`:e,$(`banner-stars`).textContent=t>0?`⭐`.repeat(t):`· · ·`,$(`btn-banner-play`).textContent=n?`🔁 PLAY`:`▶️ PLAY`,$(`level-banner`).classList.remove(`hidden`)}function yh(){$(`level-banner`).classList.add(`hidden`)}function bh(){return!$(`level-banner`).classList.contains(`hidden`)}function xh(e){let t=$(`player-nameplate`);t.textContent=e,t.classList.toggle(`hidden`,!e)}var Sh=null,Ch=null;function wh(e){Sh=e,Th(),hh(`players`)}function Th(){$(`new-player-panel`).classList.add(`hidden`),Dh();let e=$(`players-list`);e.innerHTML=``;let t=Od(),n=t.map(e=>jd(e.id)),r=uh(n.map(e=>kf(e.character)));if(t.forEach((i,a)=>{let o=i.name||`Player ${a+1}`,s=document.createElement(`div`);s.className=`player-card`+(i.id===kd()?` active`:``);let c=document.createElement(`img`);c.className=`player-thumb`,c.src=r[a],c.alt=``;let l=document.createElement(`span`);l.className=`player-name`,l.textContent=o;let u=document.createElement(`span`);if(u.className=`player-progress`,u.textContent=`🗺️ World ${n[a].unlocked.world+1}`,s.append(c,l,u),s.addEventListener(`click`,()=>{_d(o,{rate:1}),Sh.onSelect(i.id)}),t.length>1){let e=document.createElement(`button`);e.className=`player-delete`,e.textContent=`✕`,e.addEventListener(`click`,e=>{e.stopPropagation(),_d(`Delete this player? All their progress will be lost.`,{rate:1}),Ch=i.id,$(`confirm-delete-panel`).classList.remove(`hidden`)}),s.appendChild(e)}e.appendChild(s)}),t.length<6){let t=document.createElement(`div`);t.className=`player-card new-player`,t.innerHTML=`<span class="player-plus">➕</span>
      <span class="player-name">New Player</span>
      <span class="player-progress">&nbsp;</span>`,t.addEventListener(`click`,()=>{_d(`New player! What is your name?`,{rate:1}),$(`new-player-name`).value=``,$(`new-player-panel`).classList.remove(`hidden`),$(`new-player-name`).focus()}),e.appendChild(t)}}function Eh(e){if($(`new-player-panel`).classList.contains(`hidden`))return;$(`new-player-panel`).classList.add(`hidden`);let t=e?$(`new-player-name`).value.trim():``;Sh.onCreate(t)}function Dh(){Ch=null,$(`confirm-delete-panel`).classList.add(`hidden`)}function Oh(){if(!Ch)return;let e=Ch;Dh(),Sh.onDelete(e),Th()}function kh(e){let t=$(`char-rows`);t.innerHTML=``;let n=Rd().character,r=(e,n)=>{let r=document.createElement(`div`);r.className=`char-row`;let i=document.createElement(`div`);i.className=`char-label`,i.textContent=e,r.appendChild(i);let a=document.createElement(`div`);a.className=`char-options`;for(let e of n)a.appendChild(e);r.appendChild(a),t.appendChild(r)},i=(t,n,r)=>{_d(r,{rate:1}),e(t,n),kh(e)};for(let[e,t]of Object.entries(Ef))r(t.label,t.colors.map((r,a)=>{let o=document.createElement(`button`);return o.className=`swatch`+(a===n[e]?` selected`:``),o.style.background=`#${r.toString(16).padStart(6,`0`)}`,o.addEventListener(`click`,()=>i(e,a,t.names[a])),o}));let a=(e,t,n)=>r(t.label,t.names.map((r,a)=>{let o=document.createElement(`button`);return o.className=`swatch style-swatch`+(a===n?` selected`:``),o.textContent=t.icons[a],o.title=r,o.addEventListener(`click`,()=>i(e,a,r)),o}));a(`style`,Df,n.style),a(`outfit`,Of,n.outfit)}function Ah(e){$(`coin-count`).textContent=e}function jh(e){$(`hud-key`).classList.toggle(`hidden`,!e)}function Mh(e){let t=$(`move-controls`);t.classList.toggle(`hidden`,!e),t.classList.toggle(`boost-only`,e===`boost`)}var Nh=null;function Ph(){let e=$(`btn-repeat-word`);e.classList.remove(`flash`),e.offsetWidth,e.classList.add(`flash`),clearTimeout(Nh),Nh=setTimeout(()=>e.classList.remove(`flash`),1700)}var Fh=null;function Ih(e){$(`repeat-tip`).classList.toggle(`hidden`,!e),clearTimeout(Fh),e&&(Fh=setTimeout(()=>Ih(!1),8e3))}function Lh(e){let t=$(`progress-dots`);t.innerHTML=``;for(let n=0;n<e;n++){let e=document.createElement(`div`);e.className=`dot`,t.appendChild(e)}}function Rh(e,t){let n=$(`progress-dots`).children[e];n&&(n.className=`dot ${t}`)}function zh({stars:e,coins:t,gems:n,hasNext:r}){hh(`complete`),$(`complete-coins`).textContent=t,$(`complete-gems`).textContent=n,$(`btn-next-level`).classList.toggle(`hidden`,!r);let i=$(`star-row`).querySelectorAll(`.star`);i.forEach(e=>e.classList.remove(`earned`));for(let t=0;t<e;t++)setTimeout(()=>{i[t].classList.add(`earned`),Wu(t)},500+t*450)}function Bh(e){let t=Math.round(e/60);return t<1?`Just started!`:t<60?`${t}m`:`${Math.floor(t/60)}h ${t%60}m`}function Vh(e,{firstTime:t=!0}={}){hh(`gamecomplete`),$(`gc-levels`).textContent=e.levelsCompleted,$(`gc-stars`).textContent=e.totalStars,$(`gc-words`).textContent=e.wordsRead,$(`gc-accuracy`).textContent=`${e.accuracy}%`,$(`gc-secrets`).textContent=e.secretsFound,$(`gc-coins`).textContent=e.coinsEarned,$(`gc-time`).textContent=Bh(e.playSeconds),$(`gc-reward`).classList.toggle(`hidden`,!t),$(`gc-stats`).querySelectorAll(`.gc-row`).forEach((e,t)=>{e.classList.remove(`gc-in`),setTimeout(()=>e.classList.add(`gc-in`),400+t*350)})}function Hh(e){$(`bonus-word`).textContent=e,$(`bonus-feedback`).textContent=``}function Uh(e){$(`bonus-feedback`).textContent=e}function Wh(e){$(`btn-mic`).classList.toggle(`listening`,e)}var Gh=null,Kh=null,qh=null;function Jh(e){$(`shop-panel`).classList.toggle(`hidden`,!e),Yh(),e&&eg()}function Yh(){qh=null,$(`shop-confirm`).classList.add(`hidden`)}function Xh(e){qh=e,$(`shop-confirm-emoji`).textContent=e.emoji,$(`shop-confirm-name`).textContent=e.name;let t=$(`shop-confirm-words`);t.innerHTML=``;let n=Math.random()<.5?[`yes`,`no`]:[`no`,`yes`];for(let e of n){let n=document.createElement(`button`);n.className=`shop-word-btn`,n.textContent=e,n.addEventListener(`click`,()=>{if(!qh)return;let t=qh;Yh(),Ru(),e===`yes`?_d(`yes`,{onend:()=>Gh&&Gh(t)}):_d(`no`,{onend:()=>gd(`shopNo`)})}),t.appendChild(n)}$(`shop-confirm`).classList.remove(`hidden`),_d(`${e.name}!`,{rate:1,onend:()=>{qh===e&&gd(`shopConfirm`)}})}function Zh(){hh(`house`),Jh(!1),$h(),$(`btn-house-back`).classList.remove(`hidden`),$(`btn-house-shop`).classList.remove(`hidden`),$(`ceremony-panel`).classList.add(`hidden`)}function Qh(){hh(`house`),Jh(!1),$h(),$(`btn-house-back`).classList.add(`hidden`),$(`btn-house-shop`).classList.add(`hidden`),$(`ceremony-panel`).classList.remove(`hidden`)}function $h(){let e=Rd();$(`house-coins`).textContent=e.coins,$(`house-gems`).textContent=e.gems}function eg(){$h();let e=Rd(),t=$(`shop-list`);t.innerHTML=``;for(let n of Xp){let r=of(n.id),i=n.earned!==void 0,a=n.currency===`gems`?e.gems:e.coins,o=document.createElement(`button`);o.className=`shop-item`+(r?` owned`:i||a<n.cost?` cant-afford`:``);let s=n.currency===`gems`?`💎`:`🪙`,c=r?`✅ Got it!`:i?`🏰 Castle prize!`:`${s} ${n.cost}`;o.innerHTML=`<span class="shop-emoji">${n.emoji}</span>
      <span class="shop-info"><span>${n.name}</span>
      <span class="shop-cost">${c}</span></span>`,o.addEventListener(`click`,()=>{Ru(),r?(Yh(),_d(`You already have the ${n.name}!`,{rate:1})):i?(Yh(),Gh&&Gh(n)):Xh(n)}),t.appendChild(o)}}function tg(e){let t=$(`house-toast`);t.textContent=e,t.classList.remove(`hidden`),clearTimeout(Kh),Kh=setTimeout(()=>t.classList.add(`hidden`),1800)}var ng=window.webkitSpeechRecognition||window.SpeechRecognition||null,rg=null,ig=!1;function ag(e,t){if(!ng||ig)return!1;try{return rg=new ng,rg.lang=`en-US`,rg.interimResults=!0,rg.maxAlternatives=5,rg.continuous=!1,rg.onresult=t=>{let n=[];for(let e=0;e<t.results.length;e++){let r=t.results[e];for(let e=0;e<r.length;e++){let t=(r[e].transcript||``).toLowerCase().replace(/[^a-z'\s]/g,``);for(let e of t.split(/\s+/))e&&n.push(e)}}n.length&&e&&e(n)},rg.onerror=()=>og(t),rg.onend=()=>og(t),rg.start(),ig=!0,!0}catch{return og(t),!1}}function og(e){ig&&(ig=!1,rg=null,e&&e())}function sg(){if(rg)try{rg.stop()}catch{}ig=!1}var cg=t({play:()=>Wg,setDimmed:()=>Kg,setMusicEnabled:()=>Gg}),lg={c:0,d:2,e:4,f:5,g:7,a:9,b:11};function ug(e){let t=/^([a-g])([#b]?)(\d)$/.exec(e.toLowerCase());if(!t)return 440;let n=lg[t[1]]+(t[2]===`#`?1:t[2]===`b`?-1:0);return 440*2**((12*(Number(t[3])+1)+n-69)/12)}var dg=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],fg=[1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0],pg={title:{bpm:104,melVol:.1,bassVol:.14,hatVol:.02,mel:[[`C5`,`-`,`E5`,`-`,`G5`,`-`,`E5`,`-`,`A5`,`-`,`G5`,`-`,`E5`,`-`,`D5`,`-`],[`F5`,`-`,`E5`,`-`,`D5`,`-`,`C5`,`-`,`D5`,`-`,`-`,`-`,null,null,null,null],[`C5`,`-`,`E5`,`-`,`G5`,`-`,`E5`,`-`,`A5`,`-`,`B5`,`-`,`C6`,`-`,`G5`,`-`],[`F5`,`-`,`E5`,`-`,`D5`,`-`,`E5`,`-`,`C5`,`-`,`-`,`-`,null,null,null,null]],bass:[[`C3`,null,null,null,`G3`,null,null,null,`A3`,null,null,null,`E3`,null,null,null],[`F3`,null,null,null,`C3`,null,null,null,`G3`,null,null,null,`G2`,null,null,null],[`C3`,null,null,null,`G3`,null,null,null,`A3`,null,null,null,`E3`,null,null,null],[`F3`,null,null,null,`G3`,null,null,null,`C3`,null,null,null,`C3`,null,null,null]],hat:[dg,dg,dg,dg]},map:{bpm:116,melVol:.09,bassVol:.14,hatVol:.025,mel:[[`F4`,null,`A4`,null,`C5`,`-`,`A4`,null,`D5`,`-`,`C5`,`-`,`A4`,`-`,`F4`,null],[`G4`,null,`Bb4`,null,`D5`,`-`,`Bb4`,null,`C5`,`-`,`-`,`-`,null,null,null,null],[`F4`,null,`A4`,null,`C5`,`-`,`A4`,null,`D5`,`-`,`E5`,`-`,`F5`,`-`,`C5`,null],[`Bb4`,null,`A4`,null,`G4`,`-`,`A4`,null,`F4`,`-`,`-`,`-`,null,null,null,null]],bass:[[`F2`,null,`F3`,null,`F2`,null,`F3`,null,`Bb2`,null,`Bb3`,null,`Bb2`,null,`Bb3`,null],[`C3`,null,`C4`,null,`C3`,null,`C4`,null,`F2`,null,`F3`,null,`F2`,null,`F3`,null],[`F2`,null,`F3`,null,`F2`,null,`F3`,null,`Bb2`,null,`Bb3`,null,`Bb2`,null,`Bb3`,null],[`C3`,null,`C4`,null,`C3`,null,`C4`,null,`F2`,null,`F3`,null,`F2`,null,null,null]],hat:[fg,fg,fg,fg]},level:{bpm:126,melVol:.085,bassVol:.15,hatVol:.03,mel:[[`C5`,null,`D5`,null,`E5`,`-`,`G5`,null,`E5`,`-`,`D5`,null,`C5`,`-`,null,null],[`A4`,null,`C5`,null,`D5`,`-`,`E5`,null,`D5`,`-`,`C5`,null,`A4`,`-`,null,null],[`C5`,null,`D5`,null,`E5`,`-`,`G5`,null,`A5`,`-`,`G5`,null,`E5`,`-`,null,null],[`G5`,`-`,`E5`,`-`,`D5`,`-`,`C5`,`-`,`D5`,`-`,`-`,`-`,null,null,null,null]],bass:[[`C3`,null,`C3`,null,`G2`,null,`C3`,null,`A2`,null,`A2`,null,`E2`,null,`A2`,null],[`F2`,null,`F2`,null,`C3`,null,`F2`,null,`G2`,null,`G2`,null,`G2`,null,`B2`,null],[`C3`,null,`C3`,null,`G2`,null,`C3`,null,`A2`,null,`A2`,null,`E2`,null,`A2`,null],[`F2`,null,`F2`,null,`G2`,null,`G2`,null,`C3`,null,`G2`,null,`C3`,null,null,null]],hat:[fg,fg,fg,fg]},boss:{bpm:138,melVol:.09,bassVol:.16,hatVol:.03,mel:[[`A4`,null,`A4`,null,`C5`,`-`,`B4`,null,`A4`,null,`E5`,`-`,`-`,`-`,null,null],[`F5`,null,`E5`,null,`D5`,`-`,`C5`,null,`B4`,`-`,`-`,`-`,null,null,null,null],[`A4`,null,`A4`,null,`C5`,`-`,`B4`,null,`A4`,null,`A5`,`-`,`-`,`-`,null,null],[`G5`,null,`F5`,null,`E5`,`-`,`D5`,null,`A4`,`-`,`-`,`-`,null,null,null,null]],bass:[[`A2`,null,`A2`,`A2`,null,`A2`,null,null,`A2`,null,`A2`,`A2`,null,`G2`,null,null],[`F2`,null,`F2`,`F2`,null,`F2`,null,null,`E2`,null,`E2`,`E2`,null,`E2`,null,null],[`A2`,null,`A2`,`A2`,null,`A2`,null,null,`A2`,null,`A2`,`A2`,null,`G2`,null,null],[`D2`,null,`D2`,`D2`,null,`F2`,null,null,`E2`,null,`E2`,null,`A2`,null,null,null]],hat:[fg,fg,fg,fg]},house:{bpm:88,melVol:.09,bassVol:.13,hatVol:0,mel:[[`G4`,`-`,`B4`,`-`,`D5`,`-`,`-`,`-`,`C5`,`-`,`B4`,`-`,`A4`,`-`,`-`,`-`],[`B4`,`-`,`A4`,`-`,`G4`,`-`,`-`,`-`,`A4`,`-`,`-`,`-`,null,null,null,null],[`G4`,`-`,`B4`,`-`,`D5`,`-`,`-`,`-`,`E5`,`-`,`D5`,`-`,`B4`,`-`,`-`,`-`],[`C5`,`-`,`B4`,`-`,`A4`,`-`,`-`,`-`,`G4`,`-`,`-`,`-`,null,null,null,null]],bass:[[`G2`,null,null,null,`D3`,null,null,null,`E3`,null,null,null,`D3`,null,null,null],[`C3`,null,null,null,`D3`,null,null,null,`G2`,null,null,null,null,null,null,null],[`G2`,null,null,null,`D3`,null,null,null,`C3`,null,null,null,`D3`,null,null,null],[`C3`,null,null,null,`D3`,null,null,null,`G2`,null,null,null,null,null,null,null]],hat:[dg,dg,dg,dg]},victory:{bpm:112,melVol:.09,bassVol:.13,hatVol:.02,mel:[[`C5`,`-`,`C5`,null,`G5`,`-`,`-`,`-`,`E5`,`-`,`F5`,`-`,`G5`,`-`,`-`,`-`],[`A5`,`-`,`G5`,`-`,`F5`,`-`,`E5`,`-`,`C5`,`-`,`-`,`-`,null,null,null,null]],bass:[[`C3`,null,null,null,`C3`,null,`G2`,null,`A2`,null,null,null,`F2`,null,`G2`,null],[`F2`,null,null,null,`G2`,null,null,null,`C3`,null,null,null,`C3`,null,null,null]],hat:[dg,dg]}},mg=.18,hg=70,gg=.6,_g=null,vg=!0,yg=!1,bg=!1,xg=!1,Sg=null,Cg=null,wg=0,Tg=0,Eg=0,Dg=null,Og=null;function kg(){return!vg||bg?0:gg*(yg?.22:1)*(xg?.35:1)}function Ag(){if(!_g)return;let e=mu();e&&_g.gain.setTargetAtTime(kg(),e.ctx.currentTime,bg?.04:.15)}function jg(){let e=mu();return e?(_g||(_g=e.ctx.createGain(),_g.gain.value=kg(),_g.connect(e.master)),e.ctx):null}function Mg(e){if(!Og){Og=e.createBuffer(1,e.sampleRate*.1|0,e.sampleRate);let t=Og.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}return Og}function Ng(e,t,n,r,i,a){let o=e.createOscillator(),s=e.createGain();o.type=t,o.frequency.value=n,s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(a,r+.01),s.gain.setValueAtTime(a,r+i*.7),s.gain.exponentialRampToValueAtTime(1e-4,r+i),o.connect(s).connect(_g),o.start(r),o.stop(r+i+.02)}function Pg(e,t,n){let r=e.createBufferSource();r.buffer=Mg(e);let i=e.createBiquadFilter();i.type=`highpass`,i.frequency.value=6e3;let a=e.createGain();a.gain.setValueAtTime(n,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.04),r.connect(i).connect(a).connect(_g),r.start(t),r.stop(t+.06)}function Fg(e,t){let n=1;for(;t+n<e.length&&e[t+n]===`-`;)n++;return n}function Ig(e,t,n){let r=Cg.mel[Tg%Cg.mel.length],i=Cg.bass[Tg%Cg.bass.length],a=Cg.hat[Tg%Cg.hat.length],o=r[wg];o&&o!==`-`&&Ng(e,`square`,ug(o),t,n*Fg(r,wg)*.9,Cg.melVol);let s=i[wg];s&&s!==`-`&&Ng(e,`triangle`,ug(s),t,n*Fg(i,wg)*.85,Cg.bassVol),Cg.hatVol&&a[wg]&&Pg(e,t,Cg.hatVol),wg++,wg>=16&&(wg=0,Tg=(Tg+1)%Cg.mel.length)}function Lg(){let e=jg();if(!e||e.state!==`running`||!Cg)return;let t=60/Cg.bpm/4;for(Eg<e.currentTime&&(Eg=e.currentTime+.05);Eg<e.currentTime+mg;)Ig(e,Eg,t),Eg+=t}var Rg=null,zg=null,Bg=0;function Vg(){if(Bg++,!Rg)return;let e=Rg,t=zg;Rg=null,zg=null;let n=mu();if(!n)return;let r=n.ctx.currentTime;t.gain.setTargetAtTime(1e-4,r,.1);try{e.stop(r+.5)}catch{}}function Hg({buf:e,offset:t,dur:n}){let r=jg();if(!r)return;let i=r.currentTime;zg=r.createGain(),zg.gain.setValueAtTime(1e-4,i),zg.gain.setTargetAtTime(1,i,.2),Rg=r.createBufferSource(),Rg.buffer=e,Rg.loop=!0,Rg.loopStart=t,Rg.loopEnd=t+n,Rg.connect(zg).connect(_g),Rg.start(i,t)}function Ug(e){Cg=pg[e],wg=0,Tg=0,Eg=0,Cg&&!Dg&&(Dg=setInterval(Lg,hg))}function Wg(e){if(e===Sg||(Sg=e,Vg(),Cg=null,Dg&&=(clearInterval(Dg),null),!e))return;let t=Hl.music[e];if(t&&jg()){let n=Bg;xu(`audio/${t}`).then(t=>{n!==Bg||Sg!==e||Hg(t)},()=>{delete Hl.music[e],n===Bg&&Sg===e&&Ug(e)})}else Ug(e)}function Gg(e){vg=e,Ag()}function Kg(e){xg=e,Ag()}typeof window<`u`&&(window.addEventListener(`wr-speech`,e=>{yg=!!(e.detail&&e.detail.speaking),yg||(bg=!1),Ag()}),window.addEventListener(`wr-word`,e=>{bg=!!(e.detail&&e.detail.active),Ag()}));var qg=new URLSearchParams(location.search);qg.has(`reset`)&&vf(),Id(),qg.has(`unlock`)&&bf(Gl.length),gu(!Rd().sound),Gg(Rd().music);var Jg=Gl.map(e=>e.levels.length),Yg={world:0,level:0,secret:!1},Xg=null,Zg=null,Qg=null,$g=`map`,e_=`title`,t_=()=>hu();window.addEventListener(`pointerdown`,t_,{once:!0}),window.addEventListener(`touchstart`,t_,{once:!0});var n_=document.getElementById(`game-container`),r_=new ml({antialias:!0});r_.setPixelRatio(Math.min(window.devicePixelRatio,2)),r_.setSize(window.innerWidth,window.innerHeight),gl(r_),n_.appendChild(r_.domElement);var i_=new Wp(r_,{onCoins:e=>Ah(e),onDotsInit:e=>Lh(e),onDot:(e,t)=>Rh(e,t),onKey:e=>jh(e),onControls:e=>Mh(e),onAutoRepeat:()=>Ph(),onRepeatTip:()=>{Ih(!0),_d(`If you forget your word, tap the blue speaker button to hear it again!`,{rate:.95})},onRunComplete:e=>k_(e)}),a_=new mm(r_,{onNodeSelected:e=>{Xg=e,_d(e.name,{rate:1}),vh(e)},onDismiss:()=>{Xg=null,yh()},onEnterKey:()=>{Xg&&bh()?E_():a_.walkTo(a_.tokenNav)},onHouseTapped:()=>{x_(`map`)},onEditTapped:()=>{_d(`Make your character!`,{rate:1}),y_(`map`)}}),o_=new ym,s_=new Nm(r_),c_=new Rm;window.__wr={game:i_,store:vd,map:a_,charScene:o_,house:s_,cutscene:c_,music:cg,audio:{audioGraph:mu,unlockAudio:hu}};var l_=0;function u_(){l_<1||(qd(Math.round(l_)),l_=0)}var d_=new Ya;r_.setAnimationLoop(()=>{let e=Math.min(d_.getDelta(),.05);$g===`game`?(i_.running&&!i_.paused&&(l_+=e,l_>=15&&u_()),i_.tick(e),r_.render(i_.scene,i_.camera)):$g===`char`?(o_.tick(e),r_.render(o_.scene,o_.camera)):$g===`house`?(s_.tick(e),r_.render(s_.scene,s_.camera)):$g===`cutscene`?(c_.tick(e),r_.render(c_.scene,c_.camera)):(a_.tick(e),r_.render(a_.scene,a_.camera))});function f_(){for(let e of[i_.camera,a_.camera,o_.camera,s_.camera,c_.camera])e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix();r_.setSize(window.innerWidth,window.innerHeight)}window.addEventListener(`resize`,f_),window.addEventListener(`orientationchange`,f_);function p_(){$g=`map`,Wg(`map`),Kg(!1),a_.enter(),gh(!1),hh(`map`)}function m_(e,t){$g===`map`&&a_.exit(),$g=`cutscene`,Wg(null),gh(!1),hh(`cutscene`),c_.play(e,t)}function h_(){$g===`map`&&a_.exit(),$g=`char`,Wg(`title`),o_.setLook(Uf()),xh(Ad()),hh(`title`)}function g_(){let e=Rd();gu(!e.sound),Gg(e.music);let t=Uf();Wf(i_.player.group,t),Wf(a_.token,t),o_.setLook(t),a_.refresh(),a_.setTokenTo(e.unlocked.world,e.unlocked.level),s_.refresh(),Ah(e.coins),_h(),xh(Ad()),Yg={world:0,level:0,secret:!1},Xg=null,Zg=null}function __(){$g===`map`&&a_.exit(),$g=`char`,_d(`Who's playing?`,{rate:1}),wh({onSelect:e=>{e!==kd()&&(Nd(e),g_()),h_()},onCreate:e=>{Md(e)&&(g_(),y_(`title`))},onDelete:e=>{let t=e===kd();Pd(e),t&&g_()}})}var v_=`title`;function y_(e=`title`){v_=e,$g===`map`&&a_.exit(),$g=`char`,o_.setLook(Uf()),kh((e,t)=>{xf(e,t),o_.setLook(Uf())}),hh(`char`)}function b_(){let e=Uf();if(Wf(i_.player.group,e),Wf(a_.token,e),v_===`map`){p_();return}h_()}function x_(e){e_=e,$g===`map`&&a_.exit(),$g=`house`,Wg(`house`),s_.enter(),df(),M_=!1,gh(!1),Zh(),gd(`home`)}function S_(e){e_=`complete`,$g=`house`,Wg(`victory`);let t=Qp(e);t&&cf(t.id),s_.beginCeremony(e,t&&t.id),gh(!1),Qh()}function C_(){s_.exit(),e_===`complete`?N_():e_===`map`?p_():h_()}function w_(e){if(e.earned!==void 0&&!of(e.id)){tg(`🏰 Castle prize!`),_d(`Beat the castle boss to win that prize!`,{rate:1});return}if(of(e.id)){_d(`You already have the ${e.name}!`,{rate:1});return}if(!sf(e.id,e.cost,e.currency)){tg(`🪙 Keep playing!`),gd(e.currency===`gems`?`needGems`:`needCoins`);return}s_.refresh(),s_.celebrate(e.id),wu(),eg(),tg(`${e.emoji} ${e.name}!`),_d(`You got the ${e.name}!`,{rate:1,onend:()=>gd(`purchase`)})}function T_(e,t,n=!1){let r=!n&&t===Jg[e];Yg={world:e,level:t,secret:n,boss:r},Zg=null,a_.exit(),$g=`game`,Wg(r?`boss`:`level`),Kg(!1),Vu(),i_.startRun(e,t,{secret:n,boss:r}),hh(null),gh(!0)}function E_(){if(!Xg)return;let e=Xg;Xg=null,yh(),T_(e.world,e.secret?0:e.level,e.secret)}function D_(e,t){return t+1<=Jg[e]?{world:e,level:t+1}:e+1<Gl.length?{world:e+1,level:0}:null}function O_(e){let t=e.length||1,n=e.filter(e=>e.firstTry).length;return n===t?3:n/t>=.7?2:1}function k_(e){Zg=e,gh(!1),u_();let t=O_(e.results);Zg.stars=t;let n=!1;if(Yg.secret)ef(Yg.world,t);else{let r=Zd(Yg.world,Yg.level)===0;if(Qd(Yg.world,Yg.level,t),hf(Yg.world,Yg.level,Jg),Yg.boss&&(n=!pf(Yg.world),mf(Yg.world)),r){let e=D_(Yg.world,Yg.level);e&&gf(e.world,e.level)&&a_.queueReveal({kind:`node`,world:e.world,level:e.level})}e.keyFound&&!tf(Yg.world,Yg.level)&&(nf(Yg.world,Yg.level),a_.queueReveal({kind:`secret`,world:Yg.world}))}if(Yg.boss&&Yg.world===Gl.length-1){if(n){let e=Qp(Yg.world);e&&cf(e.id)}A_();return}n?S_(Yg.world):j_()}function A_(){let e=!Yd();e&&(Xd(),cf(`herotrophy`),s_.refresh()),m_(Gm.finale,()=>{Vh(Jd(),{firstTime:e}),_d(`You're a sight word hero!`,{rate:1})})}function j_(){Wg(`victory`);let e=Yg.secret?null:D_(Yg.world,Yg.level);if(zh({stars:Zg.stars,coins:Zg.coins,gems:Zg.gems,hasNext:!!e&&gf(e.world,e.level)}),Zg.stars===3){let e=Zg;setTimeout(()=>{Zg===e&&$g===`game`&&gd(`threeStars`)},2600)}}var M_=!1;function N_(){p_(),a_.setTokenTo(Yg.world,Yg.level,Yg.secret),!M_&&ff(Xp)&&(M_=!0,_d(`Something new at your house!`,{rate:1}))}function P_(){Qg.matched=!1,Qg.heard=[],Qg.advancing=!1,Hh(Qg.words[Qg.idx])}function F_(){!Qg||Qg.advancing||(Qg.advancing=!0,sg(),Wh(!1),setTimeout(()=>{Qg&&(Qg.idx++,Qg.idx>=Qg.words.length?I_():P_())},1400))}function I_(){Qg=null,sg(),Wh(!1),j_()}function L_(e){return(e||``).toLowerCase().replace(/[^a-z']/g,``)}function R_(){if(!Qg||Qg.advancing)return;let e=L_(Qg.words[Qg.idx]);ag(t=>{!Qg||Qg.matched||(Qg.heard.push(...t),t.some(t=>L_(t)===e)&&(Qg.matched=!0,Qg.heard=[],Zg.gems+=5,Gd(5),Bu(),Uh(`⭐ +5 💎`),gd(`correct`),F_()))},()=>{Wh(!1),!(!Qg||Qg.matched||Qg.advancing)&&Qg.heard.length&&(Uh(`💛 Nice try!`),_d(`Nice try! The word is: ${Qg.words[Qg.idx]}`,{rate:.9}),F_())})&&Wh(!0)}function z_(){sg(),Wh(!1)}if(fh({onPlay:()=>{p_(),a_.walkTo(a_.tokenNav)},onCharacter:()=>y_(),onCharacterDone:()=>b_(),onSwitchPlayer:()=>__(),onPlayersBack:()=>h_(),onToggleSound:()=>{let e=!Rd().sound;Cf(e),gu(!e),_h(),e&&Cu()},onToggleMusic:()=>{let e=!Rd().music;wf(e),Gg(e),_h()},onToggleMic:()=>{Tf(!Rd().mic),_h()},onToggleUnlock:()=>{let e=!Rd().devUnlocked;yf(e),_h(),_d(e?`All levels unlocked!`:`Levels locked again.`,{rate:1}),a_.refresh()},onMapBack:()=>h_(),onBannerPlay:()=>E_(),onPause:()=>{i_.pause(),Hu(),Kg(!0),hh(`pause`)},onResume:()=>{hh(null),Uu(),Kg(!1),i_.resume()},onPauseMap:()=>{u_(),i_.stopRun(),p_()},onRepeatWord:()=>i_.repeatWord(),onNextLevel:()=>{let e=D_(Yg.world,Yg.level);e&&T_(e.world,e.level)},onCompleteMap:()=>N_(),onBonusSkip:()=>{Qg&&(Qg.advancing=!0,sg(),Qg.idx=Qg.words.length,I_())},onMicDown:R_,onMicUp:z_,onHouse:e=>x_(e),onHouseBack:()=>C_(),onCeremonyDone:()=>C_(),onBuyItem:e=>w_(e),onMoveDown:e=>i_.setMove(`btn`,e,!0),onMoveUp:e=>i_.setMove(`btn`,e,!1),onJumpDown:()=>i_.running&&!i_.paused&&i_.player.jump(),onJumpUp:()=>{},onDevUnlock:()=>{bf(Gl.length),_d(`All levels unlocked!`,{rate:1}),a_.refresh()}}),_h(),a_.enter(),a_.exit(),h_(),qg.has(`cutscene`)&&m_(Gm[qg.get(`cutscene`)]||Gm.demo,()=>h_()),qg.has(`goto`)){let[e,t]=(qg.get(`goto`)||`0,0`).split(`,`);T_(Math.max(0,Math.min(Gl.length-1,parseInt(e,10)||0)),t===`s`?0:Math.max(0,parseInt(t,10)||0),t===`s`)}document.addEventListener(`visibilitychange`,()=>{document.hidden&&i_.running&&!i_.paused&&(i_.pause(),Kg(!0),hh(`pause`))});