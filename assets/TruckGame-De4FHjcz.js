var iu=Object.defineProperty;var su=(n,t,e)=>t in n?iu(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var tt=(n,t,e)=>su(n,typeof t!="symbol"?t+"":t,e);import{C as ln,O as Ji,l as ru,G as ou,Q as au,a as cu,P as xc,K as lu,g as vc}from"./index-WbbW-Ovh.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oa="170",hu=0,Mc=1,uu=2,ih=1,fu=2,Hn=3,ri=0,nn=1,Ye=2,ii=0,Yi=1,yc=2,Sc=3,wc=4,du=5,vi=100,pu=101,mu=102,gu=103,_u=104,xu=200,vu=201,Mu=202,yu=203,qo=204,Yo=205,Su=206,wu=207,Eu=208,bu=209,Tu=210,Au=211,Ru=212,Cu=213,Pu=214,Zo=0,Ko=1,$o=2,ji=3,Jo=4,jo=5,Qo=6,ta=7,qr=0,Lu=1,Du=2,si=0,Iu=1,Uu=2,Nu=3,Fu=4,ku=5,Ou=6,zu=7,sh=300,Qi=301,ts=302,ea=303,na=304,Yr=306,ia=1e3,yi=1001,sa=1002,Tn=1003,Bu=1004,js=1005,gn=1006,jr=1007,Si=1008,qn=1009,rh=1010,oh=1011,Is=1012,za=1013,wi=1014,Gn=1015,Os=1016,Ba=1017,Ha=1018,es=1020,ah=35902,ch=1021,lh=1022,bn=1023,hh=1024,uh=1025,Zi=1026,ns=1027,fh=1028,Va=1029,dh=1030,Ga=1031,Wa=1033,Lr=33776,Dr=33777,Ir=33778,Ur=33779,ra=35840,oa=35841,aa=35842,ca=35843,la=36196,ha=37492,ua=37496,fa=37808,da=37809,pa=37810,ma=37811,ga=37812,_a=37813,xa=37814,va=37815,Ma=37816,ya=37817,Sa=37818,wa=37819,Ea=37820,ba=37821,Nr=36492,Ta=36494,Aa=36495,ph=36283,Ra=36284,Ca=36285,Pa=36286,Hu=3200,Vu=3201,Xa=0,Gu=1,ni="",hn="srgb",Ti="srgb-linear",Zr="linear",fe="srgb",Ri=7680,Ec=519,Wu=512,Xu=513,qu=514,mh=515,Yu=516,Zu=517,Ku=518,$u=519,bc=35044,Tc="300 es",Wn=2e3,Or=2001;class rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,La=180/Math.PI;function os(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function Oe(n,t,e){return Math.max(t,Math.min(e,n))}function Ju(n,t){return(n%t+t)%t}function to(n,t,e){return(1-e)*n+e*t}function ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,s,r,o,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],x=s[1],y=s[4],v=s[7],I=s[2],A=s[5],C=s[8];return r[0]=o*g+a*x+c*I,r[3]=o*m+a*y+c*A,r[6]=o*p+a*v+c*C,r[1]=l*g+u*x+h*I,r[4]=l*m+u*y+h*A,r[7]=l*p+u*v+h*C,r[2]=f*g+d*x+_*I,r[5]=f*m+d*y+_*A,r[8]=f*p+d*v+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,_=e*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(s*l-u*i)*g,t[2]=(a*i-s*o)*g,t[3]=f*g,t[4]=(u*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=d*g,t[7]=(i*c-l*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new Wt;function gh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ju(){const n=zr("canvas");return n.style.display="block",n}const Ac={};function As(n){n in Ac||(Ac[n]=!0,console.warn(n))}function Qu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function tf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ef(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(n.r=Xn(n.r),n.g=Xn(n.g),n.b=Xn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(n.r=Ki(n.r),n.g=Ki(n.g),n.b=Ki(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ni?Zr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Rc=[.64,.33,.3,.6,.15,.06],Cc=[.2126,.7152,.0722],Pc=[.3127,.329],Lc=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Ti]:{primaries:Rc,whitePoint:Pc,transfer:Zr,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:Cc,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:Rc,whitePoint:Pc,transfer:fe,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:Cc,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}});let Ci;class nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=zr("canvas")),Ci.width=t.width,Ci.height=t.height;const i=Ci.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sf=0;class _h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(no(s[o].image)):r.push(no(s[o]))}else r=no(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function no(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rf=0;class Ke extends rs{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,i=yi,s=yi,r=gn,o=Si,a=bn,c=qn,l=Ke.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=os(),this.name="",this.source=new _h(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=sh;Ke.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(d+1)/2,I=(p+1)/2,A=(u+f)/4,C=(h+g)/4,D=(_+m)/4;return y>v&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=C/i):v>I?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=D/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=C/r,s=D/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-g)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends rs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ke(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _h(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends of{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class xh extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||c!==f||l!==d||u!==_){let m=1-a;const p=c*f+l*d+u*_+h*g,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),A=Math.atan2(I,p*x);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}const v=a*x;if(c=c*m+f*v,l=l*m+d*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+u*h+c*d-l*f,t[e+1]=c*_+u*f+l*h-a*d,t[e+2]=l*_+u*d+a*f-c*h,t[e+3]=u*_-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new R,Ic=new zs;class Bs{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),tr.subVectors(this.max,ms),Pi.subVectors(t.a,ms),Li.subVectors(t.b,ms),Di.subVectors(t.c,ms),Kn.subVectors(Li,Pi),$n.subVectors(Di,Li),li.subVectors(Pi,Di);let e=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-li.z,li.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,li.z,0,-li.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-li.y,li.x,0];return!so(e,Pi,Li,Di,tr)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Pi,Li,Di,tr))?!1:(er.crossVectors(Kn,$n),e=[er.x,er.y,er.z],so(e,Pi,Li,Di,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new R,new R,new R,new R,new R,new R,new R,new R],Mn=new R,Qs=new Bs,Pi=new R,Li=new R,Di=new R,Kn=new R,$n=new R,li=new R,ms=new R,tr=new R,er=new R,hi=new R;function so(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hi.fromArray(n,r);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const cf=new Bs,gs=new R,ro=new R;class as{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):cf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(gs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(ro)),this.expandByPoint(gs.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new R,oo=new R,nr=new R,Jn=new R,ao=new R,ir=new R,co=new R;class qa{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){oo.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(oo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(nr),a=Jn.dot(this.direction),c=-Jn.dot(nr),l=Jn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(oo).addScaledVector(nr,f),d}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const i=Fn.dot(this.direction),s=Fn.dot(Fn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,s,r){ao.subVectors(e,t),ir.subVectors(i,t),co.crossVectors(ao,ir);let o=this.direction.dot(co),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,t);const c=a*this.direction.dot(ir.crossVectors(Jn,ir));if(c<0)return null;const l=a*this.direction.dot(ao.cross(Jn));if(l<0||c+l>o)return null;const u=-a*Jn.dot(co);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,i,s,r,o,a,c,l,u,h,f,d,_,g,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,f,d,_,g,m)}set(t,e,i,s,r,o,a,c,l,u,h,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,_=l*u,g=l*h;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,_=l*u,g=l*h;e[0]=f-g*a,e[4]=-o*h,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=c*u,e[4]=_*l-d,e[8]=f*l+g,e[1]=c*h,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lf,t,hf)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),jn.crossVectors(i,an),jn.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),jn.crossVectors(i,an)),jn.normalize(),sr.crossVectors(an,jn),s[0]=jn.x,s[4]=sr.x,s[8]=an.x,s[1]=jn.y,s[5]=sr.y,s[9]=an.y,s[2]=jn.z,s[6]=sr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],x=i[3],y=i[7],v=i[11],I=i[15],A=s[0],C=s[4],D=s[8],b=s[12],w=s[1],L=s[5],V=s[9],B=s[13],W=s[2],j=s[6],X=s[10],nt=s[14],q=s[3],ct=s[7],at=s[11],wt=s[15];return r[0]=o*A+a*w+c*W+l*q,r[4]=o*C+a*L+c*j+l*ct,r[8]=o*D+a*V+c*X+l*at,r[12]=o*b+a*B+c*nt+l*wt,r[1]=u*A+h*w+f*W+d*q,r[5]=u*C+h*L+f*j+d*ct,r[9]=u*D+h*V+f*X+d*at,r[13]=u*b+h*B+f*nt+d*wt,r[2]=_*A+g*w+m*W+p*q,r[6]=_*C+g*L+m*j+p*ct,r[10]=_*D+g*V+m*X+p*at,r[14]=_*b+g*B+m*nt+p*wt,r[3]=x*A+y*w+v*W+I*q,r[7]=x*C+y*L+v*j+I*ct,r[11]=x*D+y*V+v*X+I*at,r[15]=x*b+y*B+v*nt+I*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*d-i*c*d)+g*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],x=h*m*l-g*f*l+g*c*d-a*m*d-h*c*p+a*f*p,y=_*f*l-u*m*l-_*c*d+o*m*d+u*c*p-o*f*p,v=u*g*l-_*h*l+_*a*d-o*g*d-u*a*p+o*h*p,I=_*h*c-u*g*c-_*a*f+o*g*f+u*a*m-o*h*m,A=e*x+i*y+s*v+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=x*C,t[1]=(g*f*r-h*m*r-g*s*d+i*m*d+h*s*p-i*f*p)*C,t[2]=(a*m*r-g*c*r+g*s*l-i*m*l-a*s*p+i*c*p)*C,t[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*d-i*c*d)*C,t[4]=y*C,t[5]=(u*m*r-_*f*r+_*s*d-e*m*d-u*s*p+e*f*p)*C,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*p-e*c*p)*C,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*C,t[8]=v*C,t[9]=(_*h*r-u*g*r-_*i*d+e*g*d+u*i*p-e*h*p)*C,t[10]=(o*g*r-_*a*r+_*i*l-e*g*l-o*i*p+e*a*p)*C,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*d-e*a*d)*C,t[12]=I*C,t[13]=(u*g*s-_*h*s+_*i*f-e*g*f-u*i*m+e*h*m)*C,t[14]=(_*a*s-o*g*s-_*i*c+e*g*c+o*i*m-e*a*m)*C,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*f+e*a*f)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,_=r*h,g=o*u,m=o*h,p=a*h,x=c*l,y=c*u,v=c*h,I=i.x,A=i.y,C=i.z;return s[0]=(1-(g+p))*I,s[1]=(d+v)*I,s[2]=(_-y)*I,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(f+p))*A,s[6]=(m+x)*A,s[7]=0,s[8]=(_+y)*C,s[9]=(m-x)*C,s[10]=(1-(f+g))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ii.set(s[0],s[1],s[2]).length();const o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const l=1/r,u=1/o,h=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Wn){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,_;if(a===Wn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Or)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Wn){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*l,d=(i+s)*u;let _,g;if(a===Wn)_=(o+r)*h,g=-2*h;else if(a===Or)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ii=new R,yn=new ge,lf=new R(0,0,0),hf=new R(1,1,1),jn=new R,sr=new R,an=new R,Uc=new ge,Nc=new zs;class _n{constructor(t=0,e=0,i=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uf=0;const Fc=new R,Ui=new zs,kn=new ge,rr=new R,_s=new R,ff=new R,df=new zs,kc=new R(1,0,0),Oc=new R(0,1,0),zc=new R(0,0,1),Bc={type:"added"},pf={type:"removed"},Ni={type:"childadded",child:null},lo={type:"childremoved",child:null};class Pe extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new R,e=new _n,i=new zs,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Wt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(kc,t)}rotateY(t){return this.rotateOnAxis(Oc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,e){return Fc.copy(t).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kc,t)}translateY(t){return this.translateOnAxis(Oc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?rr.copy(t):rr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(_s,rr,this.up):kn.lookAt(rr,_s,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(kn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pf),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new R(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new R,On=new R,ho=new R,zn=new R,Fi=new R,ki=new R,Hc=new R,uo=new R,fo=new R,po=new R,mo=new ue,go=new ue,_o=new ue;class En{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Sn.subVectors(t,e),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Sn.subVectors(s,e),On.subVectors(i,e),ho.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(On),c=Sn.dot(ho),l=On.dot(On),u=On.dot(ho),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,i),_o.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(mo,r.x),o.addScaledVector(go,r.y),o.addScaledVector(_o,r.z),o}static isFrontFacing(t,e,i,s){return Sn.subVectors(i,e),On.subVectors(t,e),Sn.cross(On).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Sn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Fi.subVectors(s,i),ki.subVectors(r,i),uo.subVectors(t,i);const c=Fi.dot(uo),l=ki.dot(uo);if(c<=0&&l<=0)return e.copy(i);fo.subVectors(t,s);const u=Fi.dot(fo),h=ki.dot(fo);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Fi,o);po.subVectors(t,r);const d=Fi.dot(po),_=ki.dot(po);if(_>=0&&d<=_)return e.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(ki,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Hc.subVectors(r,s),a=(h-u)/(h-u+(d-_)),e.copy(s).addScaledVector(Hc,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(i).addScaledVector(Fi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},or={h:0,s:0,l:0};function xo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=Ju(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=xo(o,r,t+1/3),this.g=xo(o,r,t),this.b=xo(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const i=Mh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return ne.fromWorkingColorSpace(He.copy(this),t),Math.round(Oe(He.r*255,0,255))*65536+Math.round(Oe(He.g*255,0,255))*256+Math.round(Oe(He.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=hn){ne.fromWorkingColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(or);const i=to(Qn.h,or.h,e),s=to(Qn.s,or.s,e),r=to(Qn.l,or.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Bt;Bt.NAMES=Mh;let mf=0;class ai extends rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=os(),this.name="",this.blending=Yi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qo&&(i.blendSrc=this.blendSrc),this.blendDst!==Yo&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fn extends ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new R,ar=new ot;class Ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}}class yh extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Sh extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let gf=0;const mn=new ge,vo=new Pe,Oi=new R,cn=new Bs,xs=new Bs,Ue=new R;class Le extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gh(t)?Sh:yh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return vo.lookAt(t),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(cn.min,xs.min),cn.expandByPoint(Ue),Ue.addVectors(cn.max,xs.max),cn.expandByPoint(Ue)):(cn.expandByPoint(xs.min),cn.expandByPoint(xs.max))}cn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ue.fromBufferAttribute(a,l),c&&(Oi.fromBufferAttribute(t,l),Ue.add(Oi)),s=Math.max(s,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new R,c[D]=new R;const l=new R,u=new R,h=new R,f=new ot,d=new ot,_=new ot,g=new R,m=new R;function p(D,b,w){l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,w),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,b),_.fromBufferAttribute(r,w),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),a[D].add(g),a[b].add(g),a[w].add(g),c[D].add(m),c[b].add(m),c[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let D=0,b=x.length;D<b;++D){const w=x[D],L=w.start,V=w.count;for(let B=L,W=L+V;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new R,v=new R,I=new R,A=new R;function C(D){I.fromBufferAttribute(s,D),A.copy(I);const b=a[D];y.copy(b),y.sub(I.multiplyScalar(I.dot(b))).normalize(),v.crossVectors(A,b);const L=v.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,b=x.length;D<b;++D){const w=x[D],L=w.start,V=w.count;for(let B=L,W=L+V;B<W;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,h=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new Ze(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new ge,ui=new qa,cr=new as,Gc=new R,lr=new R,hr=new R,ur=new R,Mo=new R,fr=new R,Wc=new R,dr=new R;class gt extends Pe{constructor(t=new Le,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){fr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Mo.fromBufferAttribute(h,t),o?fr.addScaledVector(Mo,u):fr.addScaledVector(Mo.sub(e),u))}e.add(fr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere),cr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(cr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(cr,Gc)===null||ui.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(Vc.copy(r).invert(),ui.copy(t.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,I=y;v<I;v+=3){const A=a.getX(v),C=a.getX(v+1),D=a.getX(v+2);s=pr(this,p,t,i,l,u,h,A,C,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=pr(this,o,t,i,l,u,h,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,I=y;v<I;v+=3){const A=v,C=v+1,D=v+2;s=pr(this,p,t,i,l,u,h,A,C,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const x=m,y=m+1,v=m+2;s=pr(this,o,t,i,l,u,h,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _f(n,t,e,i,s,r,o,a){let c;if(t.side===nn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ri,a),c===null)return null;dr.copy(a),dr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(dr);return l<e.near||l>e.far?null:{distance:l,point:dr.clone(),object:n}}function pr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,lr),n.getVertexPosition(c,hr),n.getVertexPosition(l,ur);const u=_f(n,t,e,i,lr,hr,ur,Wc);if(u){const h=new R;En.getBarycoord(Wc,lr,hr,ur,h),s&&(u.uv=En.getInterpolatedAttribute(s,a,c,l,h,new ot)),r&&(u.uv1=En.getInterpolatedAttribute(r,a,c,l,h,new ot)),o&&(u.normal=En.getInterpolatedAttribute(o,a,c,l,h,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};En.getNormal(lr,hr,ur,f.normal),u.face=f,u.barycoord=h}return u}class Ee extends Le{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(h,2));function _(g,m,p,x,y,v,I,A,C,D,b){const w=v/C,L=I/D,V=v/2,B=I/2,W=A/2,j=C+1,X=D+1;let nt=0,q=0;const ct=new R;for(let at=0;at<X;at++){const wt=at*L-B;for(let Ht=0;Ht<j;Ht++){const oe=Ht*w-V;ct[g]=oe*x,ct[m]=wt*y,ct[p]=W,l.push(ct.x,ct.y,ct.z),ct[g]=0,ct[m]=0,ct[p]=A>0?1:-1,u.push(ct.x,ct.y,ct.z),h.push(Ht/C),h.push(1-at/D),nt+=1}}for(let at=0;at<D;at++)for(let wt=0;wt<C;wt++){const Ht=f+wt+j*at,oe=f+wt+j*(at+1),U=f+(wt+1)+j*(at+1),Z=f+(wt+1)+j*at;c.push(Ht,oe,Z),c.push(oe,U,Z),q+=6}a.addGroup(d,q,b),d+=q,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Xe(n){const t={};for(let e=0;e<n.length;e++){const i=is(n[e]);for(const s in i)t[s]=i[s]}return t}function xf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const vf={clone:is,merge:Xe};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Eh extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new R,Xc=new ot,qc=new ot;class un extends Eh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=La*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,qc),e.subVectors(qc,Xc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Bi=1;class Sf extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(zi,Bi,t,e);s.layers=this.layers,this.add(s);const r=new un(zi,Bi,t,e);r.layers=this.layers,this.add(r);const o=new un(zi,Bi,t,e);o.layers=this.layers,this.add(o);const a=new un(zi,Bi,t,e);a.layers=this.layers,this.add(a);const c=new un(zi,Bi,t,e);c.layers=this.layers,this.add(c);const l=new un(zi,Bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Or)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class bh extends Ke{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wf extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:ii});r.uniforms.tEquirect.value=e;const o=new gt(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=gn),new Sf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const yo=new R,Ef=new R,bf=new Wt;class gi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=yo.subVectors(i,e).cross(Ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(yo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||bf.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new as,mr=new R;class Ya{constructor(t=new gi,e=new gi,i=new gi,s=new gi,r=new gi,o=new gi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],_=s[9],g=s[10],m=s[11],p=s[12],x=s[13],y=s[14],v=s[15];if(i[0].setComponents(c-r,f-l,m-d,v-p).normalize(),i[1].setComponents(c+r,f+l,m+d,v+p).normalize(),i[2].setComponents(c+o,f+u,m+_,v+x).normalize(),i[3].setComponents(c-o,f-u,m-_,v-x).normalize(),i[4].setComponents(c-a,f-h,m-g,v-y).normalize(),e===Wn)i[5].setComponents(c+a,f+h,m+g,v+y).normalize();else if(e===Or)i[5].setComponents(a,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(mr.x=s.normal.x>0?t.max.x:t.min.x,mr.y=s.normal.y>0?t.max.y:t.min.y,mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Th(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Tf(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class rn extends Le{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const x=p*f-o;for(let y=0;y<l;y++){const v=y*h-r;_.push(v,-x,0),g.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const y=x+l*p,v=x+l*(p+1),I=x+1+l*(p+1),A=x+1+l*p;d.push(y,v,A),d.push(v,I,A)}this.setIndex(d),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(g,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
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
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
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
#endif`,vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
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
#endif`,bd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
}`,Td=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fd=`#if defined( USE_POINTS_UV )
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
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
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
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`#include <common>
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
}`,Ip=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Up=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#define LAMBERT
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
}`,Gp=`#define LAMBERT
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zp=`#define PHONG
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
}`,Kp=`#define PHONG
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
}`,$p=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,jp=`#define TOON
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
}`,Qp=`#define TOON
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
}`,t0=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Af,alphahash_pars_fragment:Rf,alphamap_fragment:Cf,alphamap_pars_fragment:Pf,alphatest_fragment:Lf,alphatest_pars_fragment:Df,aomap_fragment:If,aomap_pars_fragment:Uf,batching_pars_vertex:Nf,batching_vertex:Ff,begin_vertex:kf,beginnormal_vertex:Of,bsdfs:zf,iridescence_fragment:Bf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:Zf,color_vertex:Kf,common:$f,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:td,emissivemap_fragment:ed,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:sd,envmap_fragment:rd,envmap_common_pars_fragment:od,envmap_pars_fragment:ad,envmap_pars_vertex:cd,envmap_physical_pars_fragment:vd,envmap_vertex:ld,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:fd,fog_pars_fragment:dd,gradientmap_pars_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:gd,lights_lambert_pars_fragment:_d,lights_pars_begin:xd,lights_toon_fragment:Md,lights_toon_pars_fragment:yd,lights_phong_fragment:Sd,lights_phong_pars_fragment:wd,lights_physical_fragment:Ed,lights_physical_pars_fragment:bd,lights_fragment_begin:Td,lights_fragment_maps:Ad,lights_fragment_end:Rd,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Dd,map_fragment:Id,map_pars_fragment:Ud,map_particle_fragment:Nd,map_particle_pars_fragment:Fd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Od,morphinstance_vertex:zd,morphcolor_vertex:Bd,morphnormal_vertex:Hd,morphtarget_pars_vertex:Vd,morphtarget_vertex:Gd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:Zd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Qd,opaque_fragment:tp,packing:ep,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:op,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:lp,shadowmap_vertex:hp,shadowmask_pars_fragment:up,skinbase_vertex:fp,skinning_pars_vertex:dp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:_p,tonemapping_fragment:xp,tonemapping_pars_fragment:vp,transmission_fragment:Mp,transmission_pars_fragment:yp,uv_pars_fragment:Sp,uv_pars_vertex:wp,uv_vertex:Ep,worldpos_vertex:bp,background_vert:Tp,background_frag:Ap,backgroundCube_vert:Rp,backgroundCube_frag:Cp,cube_vert:Pp,cube_frag:Lp,depth_vert:Dp,depth_frag:Ip,distanceRGBA_vert:Up,distanceRGBA_frag:Np,equirect_vert:Fp,equirect_frag:kp,linedashed_vert:Op,linedashed_frag:zp,meshbasic_vert:Bp,meshbasic_frag:Hp,meshlambert_vert:Vp,meshlambert_frag:Gp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:qp,meshnormal_frag:Yp,meshphong_vert:Zp,meshphong_frag:Kp,meshphysical_vert:$p,meshphysical_frag:Jp,meshtoon_vert:jp,meshtoon_frag:Qp,points_vert:t0,points_frag:e0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},lt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Ln={basic:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Xe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Xe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Xe([lt.points,lt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Xe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Xe([lt.common,lt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Xe([lt.sprite,lt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Xe([lt.common,lt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Xe([lt.lights,lt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Ln.physical={uniforms:Xe([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const gr={r:0,b:0,g:0},di=new _n,o0=new ge;function a0(n,t,e,i,s,r,o){const a=new Bt(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function g(x){let y=!1;const v=_(x);v===null?p(a,c):v&&v.isColor&&(p(v,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const v=_(y);v&&(v.isCubeTexture||v.mapping===Yr)?(u===void 0&&(u=new gt(new Ee(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:is(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),di.copy(y.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(di)),u.material.toneMapped=ne.getTransfer(v.colorSpace)!==fe,(h!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new gt(new rn(2,2),new An({name:"BackgroundMaterial",uniforms:is(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(gr,wh(n)),i.buffers.color.setClear(gr.r,gr.g,gr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:g,addToRenderList:m}}function c0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(w,L,V,B,W){let j=!1;const X=h(B,V,L);r!==X&&(r=X,l(r.object)),j=d(w,B,V,W),j&&_(w,B,V,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(w,L,V,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function h(w,L,V){const B=V.wireframe===!0;let W=i[w.id];W===void 0&&(W={},i[w.id]=W);let j=W[L.id];j===void 0&&(j={},W[L.id]=j);let X=j[B];return X===void 0&&(X=f(c()),j[B]=X),X}function f(w){const L=[],V=[],B=[];for(let W=0;W<e;W++)L[W]=0,V[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:B,object:w,attributes:{},index:null}}function d(w,L,V,B){const W=r.attributes,j=L.attributes;let X=0;const nt=V.getAttributes();for(const q in nt)if(nt[q].location>=0){const at=W[q];let wt=j[q];if(wt===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(wt=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(wt=w.instanceColor)),at===void 0||at.attribute!==wt||wt&&at.data!==wt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function _(w,L,V,B){const W={},j=L.attributes;let X=0;const nt=V.getAttributes();for(const q in nt)if(nt[q].location>=0){let at=j[q];at===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(at=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(at=w.instanceColor));const wt={};wt.attribute=at,at&&at.data&&(wt.data=at.data),W[q]=wt,X++}r.attributes=W,r.attributesNum=X,r.index=B}function g(){const w=r.newAttributes;for(let L=0,V=w.length;L<V;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const V=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;V[w]=1,B[w]===0&&(n.enableVertexAttribArray(w),B[w]=1),W[w]!==L&&(n.vertexAttribDivisor(w,L),W[w]=L)}function x(){const w=r.newAttributes,L=r.enabledAttributes;for(let V=0,B=L.length;V<B;V++)L[V]!==w[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function y(w,L,V,B,W,j,X){X===!0?n.vertexAttribIPointer(w,L,V,W,j):n.vertexAttribPointer(w,L,V,B,W,j)}function v(w,L,V,B){g();const W=B.attributes,j=V.getAttributes(),X=L.defaultAttributeValues;for(const nt in j){const q=j[nt];if(q.location>=0){let ct=W[nt];if(ct===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor)),ct!==void 0){const at=ct.normalized,wt=ct.itemSize,Ht=t.get(ct);if(Ht===void 0)continue;const oe=Ht.buffer,U=Ht.type,Z=Ht.bytesPerElement,it=U===n.INT||U===n.UNSIGNED_INT||ct.gpuType===za;if(ct.isInterleavedBufferAttribute){const et=ct.data,Rt=et.stride,kt=ct.offset;if(et.isInstancedInterleavedBuffer){for(let Kt=0;Kt<q.locationSize;Kt++)p(q.location+Kt,et.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Kt=0;Kt<q.locationSize;Kt++)m(q.location+Kt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Kt=0;Kt<q.locationSize;Kt++)y(q.location+Kt,wt/q.locationSize,U,at,Rt*Z,(kt+wt/q.locationSize*Kt)*Z,it)}else{if(ct.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)p(q.location+et,ct.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let et=0;et<q.locationSize;et++)m(q.location+et);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let et=0;et<q.locationSize;et++)y(q.location+et,wt/q.locationSize,U,at,wt*Z,wt/q.locationSize*et*Z,it)}}else if(X!==void 0){const at=X[nt];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(q.location,at);break;case 3:n.vertexAttrib3fv(q.location,at);break;case 4:n.vertexAttrib4fv(q.location,at);break;default:n.vertexAttrib1fv(q.location,at)}}}}x()}function I(){D();for(const w in i){const L=i[w];for(const V in L){const B=L[V];for(const W in B)u(B[W].object),delete B[W];delete L[V]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const V in L){const B=L[V];for(const W in B)u(B[W].object),delete B[W];delete L[V]}delete i[w.id]}function C(w){for(const L in i){const V=i[L];if(V[w.id]===void 0)continue;const B=V[w.id];for(const W in B)u(B[W].object),delete B[W];delete V[w.id]}}function D(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function l0(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function h0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==bn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==qn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Gn&&!D)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:I,maxSamples:A}}function u0(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new gi,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const x=r?0:i,y=x*4;let v=p.clippingState||null;c.value=v,v=u(_,f,y,d);for(let I=0;I!==y;++I)v[I]=e[I];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==g;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function f0(n){let t=new WeakMap;function e(o,a){return a===ea?o.mapping=Qi:a===na&&(o.mapping=ts),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ea||a===na)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new wf(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Za extends Eh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vi=4,Yc=[.125,.215,.35,.446,.526,.582],Mi=20,So=new Za,Zc=new Bt;let wo=null,Eo=0,bo=0,To=!1;const _i=(1+Math.sqrt(5))/2,Hi=1/_i,Kc=[new R(-_i,Hi,0),new R(_i,Hi,0),new R(-Hi,0,_i),new R(Hi,0,_i),new R(0,_i,-Hi),new R(0,_i,Hi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class $c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){wo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,Eo,bo),this._renderer.xr.enabled=To,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Os,format:bn,colorSpace:Ti,depthBuffer:!1},s=Jc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(r)),this._blurMaterial=p0(r,t,e)}return s}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,So)}_sceneToCubeUV(t,e,i,s){const a=new un(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zc),u.toneMapping=si,u.autoClear=!1;const d=new fn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new gt(new Ee,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Zc),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;_r(s,x*y,p>2?y:0,y,y),u.setRenderTarget(s),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;_r(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,So)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kc[(s-r-1)%Kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new gt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let x=0;for(let C=0;C<Mi;++C){const D=C/g,b=Math.exp(-D*D/2);p.push(b),C===0?x+=b:C<m&&(x+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const v=this._sizeLods[s],I=3*v*(s>y-Vi?s-y+Vi:0),A=4*(this._cubeSize-v);_r(e,I,A,3*v,2*v),c.setRenderTarget(e),c.render(h,So)}}function d0(n){const t=[],e=[],i=[];let s=n;const r=n-Vi+1+Yc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Vi?c=Yc[o-n+Vi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*d),y=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,D=A>2?0:-1,b=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];x.set(b,g*_*A),y.set(f,m*_*A);const w=[A,A,A,A,A,A];v.set(w,p*_*A)}const I=new Le;I.setAttribute("position",new Ze(x,g)),I.setAttribute("uv",new Ze(y,m)),I.setAttribute("faceIndex",new Ze(v,p)),t.push(I),s>Vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jc(n,t,e){const i=new oi(n,t,e);return i.texture.mapping=Yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function p0(n,t,e){const i=new Float32Array(Mi),s=new R(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function jc(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Qc(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}function m0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ea||c===na,u=c===Qi||c===ts;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new $c(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new $c(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function g0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&As("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _0(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let y=0,v=x.length;y<v;y+=3){const I=x[y+0],A=x[y+1],C=x[y+2];f.push(I,A,A,C,C,I)}}else if(_!==void 0){const x=_.array;g=_.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const I=y+0,A=y+1,C=y+2;f.push(I,A,A,C,C,I)}}else return;const m=new(gh(f)?Sh:yh)(f,1);m.version=g;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function x0(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function h(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=d[x]*g[x];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function v0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function M0(n,t,e){const i=new WeakMap,s=new ue;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let b=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let v=a.attributes.position.count*y,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*I*4*h),C=new xh(A,v,I,h);C.type=Gn,C.needsUpdate=!0;const D=y*4;for(let w=0;w<h;w++){const L=m[w],V=p[w],B=x[w],W=v*I*4*w;for(let j=0;j<L.count;j++){const X=j*D;d===!0&&(s.fromBufferAttribute(L,j),A[W+X+0]=s.x,A[W+X+1]=s.y,A[W+X+2]=s.z,A[W+X+3]=0),_===!0&&(s.fromBufferAttribute(V,j),A[W+X+4]=s.x,A[W+X+5]=s.y,A[W+X+6]=s.z,A[W+X+7]=0),g===!0&&(s.fromBufferAttribute(B,j),A[W+X+8]=s.x,A[W+X+9]=s.y,A[W+X+10]=s.z,A[W+X+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new ot(v,I)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];const _=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function y0(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class $a extends Ke{constructor(t,e,i,s,r,o,a,c,l,u=Zi){if(u!==Zi&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zi&&(i=wi),i===void 0&&u===ns&&(i=es),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ah=new Ke,tl=new $a(1,1),Rh=new xh,Ch=new af,Ph=new bh,el=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function cs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=el[s];if(r===void 0&&(r=new Float32Array(s),el[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Kr(n,t){let e=nl[t];e===void 0&&(e=new Int32Array(t),nl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function S0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function w0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function E0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function b0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function T0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;rl.set(i),n.uniformMatrix2fv(this.addr,!1,rl),Ie(e,i)}}function A0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;sl.set(i),n.uniformMatrix3fv(this.addr,!1,sl),Ie(e,i)}}function R0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;il.set(i),n.uniformMatrix4fv(this.addr,!1,il),Ie(e,i)}}function C0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function P0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function L0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function D0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function I0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function U0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function N0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function F0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function k0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tl.compareFunction=mh,r=tl):r=Ah,e.setTexture2D(t||r,s)}function O0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ch,s)}function z0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ph,s)}function B0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Rh,s)}function H0(n){switch(n){case 5126:return S0;case 35664:return w0;case 35665:return E0;case 35666:return b0;case 35674:return T0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return D0;case 5125:return I0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return B0}}function V0(n,t){n.uniform1fv(this.addr,t)}function G0(n,t){const e=cs(t,this.size,2);n.uniform2fv(this.addr,e)}function W0(n,t){const e=cs(t,this.size,3);n.uniform3fv(this.addr,e)}function X0(n,t){const e=cs(t,this.size,4);n.uniform4fv(this.addr,e)}function q0(n,t){const e=cs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Y0(n,t){const e=cs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Z0(n,t){const e=cs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function K0(n,t){n.uniform1iv(this.addr,t)}function $0(n,t){n.uniform2iv(this.addr,t)}function J0(n,t){n.uniform3iv(this.addr,t)}function j0(n,t){n.uniform4iv(this.addr,t)}function Q0(n,t){n.uniform1uiv(this.addr,t)}function tm(n,t){n.uniform2uiv(this.addr,t)}function em(n,t){n.uniform3uiv(this.addr,t)}function nm(n,t){n.uniform4uiv(this.addr,t)}function im(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ah,r[o])}function sm(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ch,r[o])}function rm(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ph,r[o])}function om(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Rh,r[o])}function am(n){switch(n){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return Z0;case 5124:case 35670:return K0;case 35667:case 35671:return $0;case 35668:case 35672:return J0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return om}}class cm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=H0(e.type)}}class lm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=am(e.type)}}class hm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function ol(n,t){n.seq.push(t),n.map[t.id]=t}function um(n,t,e){const i=n.name,s=i.length;for(Ao.lastIndex=0;;){const r=Ao.exec(i),o=Ao.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ol(e,l===void 0?new cm(a,n,t):new lm(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new hm(a),ol(e,h)),e=h}}}class Fr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);um(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function al(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const fm=37297;let dm=0;function pm(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const cl=new Wt;function mm(n){ne._getMatrix(cl,ne.workingColorSpace,n);const t=`mat3( ${cl.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case Zr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ll(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+pm(n.getShaderSource(t),o)}else return s}function gm(n,t){const e=mm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _m(n,t){let e;switch(t){case Iu:e="Linear";break;case Uu:e="Reinhard";break;case Nu:e="Cineon";break;case Fu:e="ACESFilmic";break;case Ou:e="AgX";break;case zu:e="Neutral";break;case ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xr=new R;function xm(){ne.getLuminanceCoefficients(xr);const n=xr.x.toFixed(4),t=xr.y.toFixed(4),e=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Mm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ym(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Rs(n){return n!==""}function hl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ul(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(n){return n.replace(Sm,Em)}const wm=new Map;function Em(n,t){let e=qt[t];if(e===void 0){const i=wm.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Da(e)}const bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(n){return n.replace(bm,Tm)}function Tm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dl(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Am(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function Pm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qr:t="ENVMAP_BLENDING_MULTIPLY";break;case Lu:t="ENVMAP_BLENDING_MIX";break;case Du:t="ENVMAP_BLENDING_ADD";break}return t}function Lm(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Dm(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Am(e),l=Rm(e),u=Cm(e),h=Pm(e),f=Lm(e),d=vm(e),_=Mm(r),g=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?qt.tonemapping_pars_fragment:"",e.toneMapping!==si?_m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,gm("linearToOutputTexel",e.outputColorSpace),xm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Da(o),o=hl(o,e),o=ul(o,e),a=Da(a),a=hl(a,e),a=ul(a,e),o=fl(o),a=fl(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,v=x+p+a,I=al(s,s.VERTEX_SHADER,y),A=al(s,s.FRAGMENT_SHADER,v);s.attachShader(g,I),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(L){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(A).trim();let j=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,I,A);else{const nt=ll(s,I,"vertex"),q=ll(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+nt+`
`+q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||W==="")&&(X=!1);X&&(L.diagnostics={runnable:j,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(I),s.deleteShader(A),D=new Fr(s,g),b=ym(s,g)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,fm)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=A,this}let Im=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Nm(t),e.set(t,i)),i}}class Nm{constructor(t){this.id=Im++,this.code=t,this.usedTimes=0}}function Fm(n,t,e,i,s,r,o){const a=new vh,c=new Um,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,w,L,V,B){const W=V.fog,j=B.geometry,X=b.isMeshStandardMaterial?V.environment:null,nt=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),q=nt&&nt.mapping===Yr?nt.image.height:null,ct=_[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const at=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,wt=at!==void 0?at.length:0;let Ht=0;j.morphAttributes.position!==void 0&&(Ht=1),j.morphAttributes.normal!==void 0&&(Ht=2),j.morphAttributes.color!==void 0&&(Ht=3);let oe,U,Z,it;if(ct){const he=Ln[ct];oe=he.vertexShader,U=he.fragmentShader}else oe=b.vertexShader,U=b.fragmentShader,c.update(b),Z=c.getVertexShaderID(b),it=c.getFragmentShaderID(b);const et=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),kt=B.isInstancedMesh===!0,Kt=B.isBatchedMesh===!0,Me=!!b.map,te=!!b.matcap,be=!!nt,O=!!b.aoMap,dn=!!b.lightMap,$t=!!b.bumpMap,Jt=!!b.normalMap,Pt=!!b.displacementMap,_e=!!b.emissiveMap,Ct=!!b.metalnessMap,T=!!b.roughnessMap,S=b.anisotropy>0,z=b.clearcoat>0,$=b.dispersion>0,Q=b.iridescence>0,K=b.sheen>0,Et=b.transmission>0,ut=S&&!!b.anisotropyMap,_t=z&&!!b.clearcoatMap,ee=z&&!!b.clearcoatNormalMap,st=z&&!!b.clearcoatRoughnessMap,xt=Q&&!!b.iridescenceMap,Lt=Q&&!!b.iridescenceThicknessMap,Ut=K&&!!b.sheenColorMap,vt=K&&!!b.sheenRoughnessMap,jt=!!b.specularMap,Xt=!!b.specularColorMap,pe=!!b.specularIntensityMap,N=Et&&!!b.transmissionMap,ht=Et&&!!b.thicknessMap,Y=!!b.gradientMap,J=!!b.alphaMap,mt=b.alphaTest>0,dt=!!b.alphaHash,Vt=!!b.extensions;let Se=si;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Se=n.toneMapping);const ze={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:oe,fragmentShader:U,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Kt,batchingColor:Kt&&B._colorsTexture!==null,instancing:kt,instancingColor:kt&&B.instanceColor!==null,instancingMorph:kt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ti,alphaToCoverage:!!b.alphaToCoverage,map:Me,matcap:te,envMap:be,envMapMode:be&&nt.mapping,envMapCubeUVHeight:q,aoMap:O,lightMap:dn,bumpMap:$t,normalMap:Jt,displacementMap:f&&Pt,emissiveMap:_e,normalMapObjectSpace:Jt&&b.normalMapType===Gu,normalMapTangentSpace:Jt&&b.normalMapType===Xa,metalnessMap:Ct,roughnessMap:T,anisotropy:S,anisotropyMap:ut,clearcoat:z,clearcoatMap:_t,clearcoatNormalMap:ee,clearcoatRoughnessMap:st,dispersion:$,iridescence:Q,iridescenceMap:xt,iridescenceThicknessMap:Lt,sheen:K,sheenColorMap:Ut,sheenRoughnessMap:vt,specularMap:jt,specularColorMap:Xt,specularIntensityMap:pe,transmission:Et,transmissionMap:N,thicknessMap:ht,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Yi&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:mt,alphaHash:dt,combine:b.combine,mapUv:Me&&g(b.map.channel),aoMapUv:O&&g(b.aoMap.channel),lightMapUv:dn&&g(b.lightMap.channel),bumpMapUv:$t&&g(b.bumpMap.channel),normalMapUv:Jt&&g(b.normalMap.channel),displacementMapUv:Pt&&g(b.displacementMap.channel),emissiveMapUv:_e&&g(b.emissiveMap.channel),metalnessMapUv:Ct&&g(b.metalnessMap.channel),roughnessMapUv:T&&g(b.roughnessMap.channel),anisotropyMapUv:ut&&g(b.anisotropyMap.channel),clearcoatMapUv:_t&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(b.sheenRoughnessMap.channel),specularMapUv:jt&&g(b.specularMap.channel),specularColorMapUv:Xt&&g(b.specularColorMap.channel),specularIntensityMapUv:pe&&g(b.specularIntensityMap.channel),transmissionMapUv:N&&g(b.transmissionMap.channel),thicknessMapUv:ht&&g(b.thicknessMap.channel),alphaMapUv:J&&g(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Jt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(Me||J),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Rt,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:Me&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===fe,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&ne.getTransfer(b.emissiveMap.colorSpace)===fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ye,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Vt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&b.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)w.push(L),w.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(w,b),y(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function x(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const w=_[b.type];let L;if(w){const V=Ln[w];L=vf.clone(V.uniforms)}else L=b.uniforms;return L}function I(b,w){let L;for(let V=0,B=u.length;V<B;V++){const W=u[V];if(W.cacheKey===w){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Dm(n,w,b,r),u.push(L)),L}function A(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),b.destroy()}}function C(b){c.remove(b)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:D}}function km(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Om(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function pl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ml(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,_,g,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||Om),i.length>1&&i.sort(f||pl),s.length>1&&s.sort(f||pl)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function zm(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new ml,n.set(i,[o])):s>=r.length?(o=new ml,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Bm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Bt};break;case"SpotLight":e={position:new R,direction:new R,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function Hm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Vm=0;function Gm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Wm(n){const t=new Bm,e=Hm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);const s=new R,r=new ge,o=new ge;function a(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,x=0,y=0,v=0,I=0,A=0,C=0;l.sort(Gm);for(let b=0,w=l.length;b<w;b++){const L=l[b],V=L.color,B=L.intensity,W=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=V.r*B,h+=V.g*B,f+=V.b*B;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],B);C++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const nt=L.shadow,q=e.get(L);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=L.shadow.matrix,x++}i.directional[d]=X,d++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(V).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[g]=X;const nt=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,nt.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[g]=nt.matrix,L.castShadow){const q=e.get(L);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=j,v++}g++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(V).multiplyScalar(B),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const nt=L.shadow,q=e.get(L);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=L.shadow.matrix,y++}i.point[_]=X,_++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(B),X.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==d||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==x||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==I||D.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,D.directionalLength=d,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=x,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=I,D.numLightProbes=C,i.version=Vm++)}function c(l,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:i}}function gl(n){const t=new Wm(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Xm(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gl(n),t.set(s,[a])):r>=o.length?(a=new gl(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class qm extends ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ym extends ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Km=`uniform sampler2D shadow_pass;
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
}`;function $m(n,t,e){let i=new Ya;const s=new ot,r=new ot,o=new ue,a=new qm({depthPacking:Vu}),c=new Ym,l={},u=e.maxTextureSize,h={[ri]:nn,[nn]:ri,[Ye]:Ye},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Zm,fragmentShader:Km}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Le;_.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new gt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let p=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),w=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ii),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==Hn&&this.type===Hn,W=p===Hn&&this.type!==Hn;for(let j=0,X=A.length;j<X;j++){const nt=A[j],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ct=q.getFrameExtents();if(s.multiply(ct),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ct.x),s.x=r.x*ct.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ct.y),s.y=r.y*ct.y,q.mapSize.y=r.y)),q.map===null||B===!0||W===!0){const wt=this.type!==Hn?{minFilter:Tn,magFilter:Tn}:{};q.map!==null&&q.map.dispose(),q.map=new oi(s.x,s.y,wt),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const at=q.getViewportCount();for(let wt=0;wt<at;wt++){const Ht=q.getViewport(wt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),V.viewport(o),q.updateMatrices(nt,wt),i=q.getFrustum(),v(C,D,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===Hn&&x(q,D),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,w,L)};function x(A,C){const D=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new oi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,D,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,D,d,g,null)}function y(A,C,D,b){let w=null;const L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=D.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=w.uuid,B=C.uuid;let W=l[V];W===void 0&&(W={},l[V]=W);let j=W[B];j===void 0&&(j=w.clone(),W[B]=j,C.addEventListener("dispose",I)),w=j}if(w.visible=C.visible,w.wireframe=C.wireframe,b===Hn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:h[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=n.properties.get(w);V.light=D}return w}function v(A,C,D,b,w){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Hn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const B=t.update(A),W=A.material;if(Array.isArray(W)){const j=B.groups;for(let X=0,nt=j.length;X<nt;X++){const q=j[X],ct=W[q.materialIndex];if(ct&&ct.visible){const at=y(A,ct,b,w);A.onBeforeShadow(n,A,C,D,B,at,q),n.renderBufferDirect(D,null,B,at,A,q),A.onAfterShadow(n,A,C,D,B,at,q)}}}else if(W.visible){const j=y(A,W,b,w);A.onBeforeShadow(n,A,C,D,B,j,null),n.renderBufferDirect(D,null,B,j,A,null),A.onAfterShadow(n,A,C,D,B,j,null)}}const V=A.children;for(let B=0,W=V.length;B<W;B++)v(V[B],C,D,b,w)}function I(A){A.target.removeEventListener("dispose",I);for(const D in l){const b=l[D],w=A.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const Jm={[Zo]:Ko,[$o]:Qo,[Jo]:ta,[ji]:jo,[Ko]:Zo,[Qo]:$o,[ta]:Jo,[jo]:ji};function jm(n,t){function e(){let N=!1;const ht=new ue;let Y=null;const J=new ue(0,0,0,0);return{setMask:function(mt){Y!==mt&&!N&&(n.colorMask(mt,mt,mt,mt),Y=mt)},setLocked:function(mt){N=mt},setClear:function(mt,dt,Vt,Se,ze){ze===!0&&(mt*=Se,dt*=Se,Vt*=Se),ht.set(mt,dt,Vt,Se),J.equals(ht)===!1&&(n.clearColor(mt,dt,Vt,Se),J.copy(ht))},reset:function(){N=!1,Y=null,J.set(-1,0,0,0)}}}function i(){let N=!1,ht=!1,Y=null,J=null,mt=null;return{setReversed:function(dt){if(ht!==dt){const Vt=t.get("EXT_clip_control");ht?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Se=mt;mt=null,this.setClear(Se)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?et(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(dt){Y!==dt&&!N&&(n.depthMask(dt),Y=dt)},setFunc:function(dt){if(ht&&(dt=Jm[dt]),J!==dt){switch(dt){case Zo:n.depthFunc(n.NEVER);break;case Ko:n.depthFunc(n.ALWAYS);break;case $o:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case Jo:n.depthFunc(n.EQUAL);break;case jo:n.depthFunc(n.GEQUAL);break;case Qo:n.depthFunc(n.GREATER);break;case ta:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=dt}},setLocked:function(dt){N=dt},setClear:function(dt){mt!==dt&&(ht&&(dt=1-dt),n.clearDepth(dt),mt=dt)},reset:function(){N=!1,Y=null,J=null,mt=null,ht=!1}}}function s(){let N=!1,ht=null,Y=null,J=null,mt=null,dt=null,Vt=null,Se=null,ze=null;return{setTest:function(he){N||(he?et(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(he){ht!==he&&!N&&(n.stencilMask(he),ht=he)},setFunc:function(he,xn,In){(Y!==he||J!==xn||mt!==In)&&(n.stencilFunc(he,xn,In),Y=he,J=xn,mt=In)},setOp:function(he,xn,In){(dt!==he||Vt!==xn||Se!==In)&&(n.stencilOp(he,xn,In),dt=he,Vt=xn,Se=In)},setLocked:function(he){N=he},setClear:function(he){ze!==he&&(n.clearStencil(he),ze=he)},reset:function(){N=!1,ht=null,Y=null,J=null,mt=null,dt=null,Vt=null,Se=null,ze=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,x=null,y=null,v=null,I=null,A=null,C=new Bt(0,0,0),D=0,b=!1,w=null,L=null,V=null,B=null,W=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,nt=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=nt>=2);let ct=null,at={};const wt=n.getParameter(n.SCISSOR_BOX),Ht=n.getParameter(n.VIEWPORT),oe=new ue().fromArray(wt),U=new ue().fromArray(Ht);function Z(N,ht,Y,J){const mt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(N,dt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<Y;Vt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(ht+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return dt}const it={};it[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(n.DEPTH_TEST),o.setFunc(ji),$t(!1),Jt(Mc),et(n.CULL_FACE),O(ii);function et(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Rt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function kt(N,ht){return h[N]!==ht?(n.bindFramebuffer(N,ht),h[N]=ht,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ht),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function Kt(N,ht){let Y=d,J=!1;if(N){Y=f.get(ht),Y===void 0&&(Y=[],f.set(ht,Y));const mt=N.textures;if(Y.length!==mt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Vt=mt.length;dt<Vt;dt++)Y[dt]=n.COLOR_ATTACHMENT0+dt;Y.length=mt.length,J=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,J=!0);J&&n.drawBuffers(Y)}function Me(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const te={[vi]:n.FUNC_ADD,[pu]:n.FUNC_SUBTRACT,[mu]:n.FUNC_REVERSE_SUBTRACT};te[gu]=n.MIN,te[_u]=n.MAX;const be={[xu]:n.ZERO,[vu]:n.ONE,[Mu]:n.SRC_COLOR,[qo]:n.SRC_ALPHA,[Tu]:n.SRC_ALPHA_SATURATE,[Eu]:n.DST_COLOR,[Su]:n.DST_ALPHA,[yu]:n.ONE_MINUS_SRC_COLOR,[Yo]:n.ONE_MINUS_SRC_ALPHA,[bu]:n.ONE_MINUS_DST_COLOR,[wu]:n.ONE_MINUS_DST_ALPHA,[Au]:n.CONSTANT_COLOR,[Ru]:n.ONE_MINUS_CONSTANT_COLOR,[Cu]:n.CONSTANT_ALPHA,[Pu]:n.ONE_MINUS_CONSTANT_ALPHA};function O(N,ht,Y,J,mt,dt,Vt,Se,ze,he){if(N===ii){g===!0&&(Rt(n.BLEND),g=!1);return}if(g===!1&&(et(n.BLEND),g=!0),N!==du){if(N!==m||he!==b){if((p!==vi||v!==vi)&&(n.blendEquation(n.FUNC_ADD),p=vi,v=vi),he)switch(N){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,y=null,I=null,A=null,C.set(0,0,0),D=0,m=N,b=he}return}mt=mt||ht,dt=dt||Y,Vt=Vt||J,(ht!==p||mt!==v)&&(n.blendEquationSeparate(te[ht],te[mt]),p=ht,v=mt),(Y!==x||J!==y||dt!==I||Vt!==A)&&(n.blendFuncSeparate(be[Y],be[J],be[dt],be[Vt]),x=Y,y=J,I=dt,A=Vt),(Se.equals(C)===!1||ze!==D)&&(n.blendColor(Se.r,Se.g,Se.b,ze),C.copy(Se),D=ze),m=N,b=!1}function dn(N,ht){N.side===Ye?Rt(n.CULL_FACE):et(n.CULL_FACE);let Y=N.side===nn;ht&&(Y=!Y),$t(Y),N.blending===Yi&&N.transparent===!1?O(ii):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),_e(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function $t(N){w!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),w=N)}function Jt(N){N!==hu?(et(n.CULL_FACE),N!==L&&(N===Mc?n.cullFace(n.BACK):N===uu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),L=N}function Pt(N){N!==V&&(X&&n.lineWidth(N),V=N)}function _e(N,ht,Y){N?(et(n.POLYGON_OFFSET_FILL),(B!==ht||W!==Y)&&(n.polygonOffset(ht,Y),B=ht,W=Y)):Rt(n.POLYGON_OFFSET_FILL)}function Ct(N){N?et(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function T(N){N===void 0&&(N=n.TEXTURE0+j-1),ct!==N&&(n.activeTexture(N),ct=N)}function S(N,ht,Y){Y===void 0&&(ct===null?Y=n.TEXTURE0+j-1:Y=ct);let J=at[Y];J===void 0&&(J={type:void 0,texture:void 0},at[Y]=J),(J.type!==N||J.texture!==ht)&&(ct!==Y&&(n.activeTexture(Y),ct=Y),n.bindTexture(N,ht||it[N]),J.type=N,J.texture=ht)}function z(){const N=at[ct];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){oe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function vt(N){U.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),U.copy(N))}function jt(N,ht){let Y=l.get(ht);Y===void 0&&(Y=new WeakMap,l.set(ht,Y));let J=Y.get(N);J===void 0&&(J=n.getUniformBlockIndex(ht,N.name),Y.set(N,J))}function Xt(N,ht){const J=l.get(ht).get(N);c.get(ht)!==J&&(n.uniformBlockBinding(ht,J,N.__bindingPointIndex),c.set(ht,J))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ct=null,at={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,x=null,y=null,v=null,I=null,A=null,C=new Bt(0,0,0),D=0,b=!1,w=null,L=null,V=null,B=null,W=null,oe.set(0,0,n.canvas.width,n.canvas.height),U.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:Rt,bindFramebuffer:kt,drawBuffers:Kt,useProgram:Me,setBlending:O,setMaterial:dn,setFlipSided:$t,setCullFace:Jt,setLineWidth:Pt,setPolygonOffset:_e,setScissorTest:Ct,activeTexture:T,bindTexture:S,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:xt,texImage3D:Lt,updateUBOMapping:jt,uniformBlockBinding:Xt,texStorage2D:ee,texStorage3D:st,texSubImage2D:K,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Ut,viewport:vt,reset:pe}}function _l(n,t,e,i){const s=Qm(i);switch(e){case ch:return n*t;case hh:return n*t;case uh:return n*t*2;case fh:return n*t/s.components*s.byteLength;case Va:return n*t/s.components*s.byteLength;case dh:return n*t*2/s.components*s.byteLength;case Ga:return n*t*2/s.components*s.byteLength;case lh:return n*t*3/s.components*s.byteLength;case bn:return n*t*4/s.components*s.byteLength;case Wa:return n*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Ur:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oa:case ca:return Math.max(n,16)*Math.max(t,8)/4;case ra:case aa:return Math.max(n,8)*Math.max(t,8)/2;case la:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ma:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ga:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _a:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case va:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case wa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ba:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Nr:case Ta:case Aa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ph:case Ra:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ca:case Pa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qm(n){switch(n){case qn:case rh:return{byteLength:1,components:1};case Is:case oh:case Os:return{byteLength:2,components:1};case Ba:case Ha:return{byteLength:2,components:4};case wi:case za:case Gn:return{byteLength:4,components:1};case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function tg(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,S){return d?new OffscreenCanvas(T,S):zr("canvas")}function g(T,S,z){let $=1;const Q=Ct(T);if((Q.width>z||Q.height>z)&&($=z/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor($*Q.width),Et=Math.floor($*Q.height);h===void 0&&(h=_(K,Et));const ut=S?_(K,Et):h;return ut.width=K,ut.height=Et,ut.getContext("2d").drawImage(T,0,0,K,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Et+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,S,z,$,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=S;if(S===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),S===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),S===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),S===n.RGBA){const Et=Q?Zr:ne.getTransfer($);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=Et===fe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(T,S){let z;return T?S===null||S===wi||S===es?z=n.DEPTH24_STENCIL8:S===Gn?z=n.DEPTH32F_STENCIL8:S===Is&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wi||S===es?z=n.DEPTH_COMPONENT24:S===Gn?z=n.DEPTH_COMPONENT32F:S===Is&&(z=n.DEPTH_COMPONENT16),z}function I(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Tn&&T.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function A(T){const S=T.target;S.removeEventListener("dispose",A),D(S),S.isVideoTexture&&u.delete(S)}function C(T){const S=T.target;S.removeEventListener("dispose",C),w(S)}function D(T){const S=i.get(T);if(S.__webglInit===void 0)return;const z=T.source,$=f.get(z);if($){const Q=$[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(T),Object.keys($).length===0&&f.delete(z)}i.remove(T)}function b(T){const S=i.get(T);n.deleteTexture(S.__webglTexture);const z=T.source,$=f.get(z);delete $[S.__cacheKey],o.memory.textures--}function w(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Q=0;Q<S.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=T.textures;for(let $=0,Q=z.length;$<Q;$++){const K=i.get(z[$]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(z[$])}i.remove(T)}let L=0;function V(){L=0}function B(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function W(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function j(T,S){const z=i.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(z,T,S);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function X(T,S){const z=i.get(T);if(T.version>0&&z.__version!==T.version){U(z,T,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function nt(T,S){const z=i.get(T);if(T.version>0&&z.__version!==T.version){U(z,T,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function q(T,S){const z=i.get(T);if(T.version>0&&z.__version!==T.version){Z(z,T,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const ct={[ia]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[sa]:n.MIRRORED_REPEAT},at={[Tn]:n.NEAREST,[Bu]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[jr]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},wt={[Wu]:n.NEVER,[$u]:n.ALWAYS,[Xu]:n.LESS,[mh]:n.LEQUAL,[qu]:n.EQUAL,[Ku]:n.GEQUAL,[Yu]:n.GREATER,[Zu]:n.NOTEQUAL};function Ht(T,S){if(S.type===Gn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===gn||S.magFilter===jr||S.magFilter===js||S.magFilter===Si||S.minFilter===gn||S.minFilter===jr||S.minFilter===js||S.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ct[S.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ct[S.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ct[S.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,at[S.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,wt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tn||S.minFilter!==js&&S.minFilter!==Si||S.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function oe(T,S){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",A));const $=S.source;let Q=f.get($);Q===void 0&&(Q={},f.set($,Q));const K=W(S);if(K!==T.__cacheKey){Q[K]===void 0&&(Q[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[K].usedTimes++;const Et=Q[T.__cacheKey];Et!==void 0&&(Q[T.__cacheKey].usedTimes--,Et.usedTimes===0&&b(S)),T.__cacheKey=K,T.__webglTexture=Q[K].texture}return z}function U(T,S,z){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);const Q=oe(T,S),K=S.source;e.bindTexture($,T.__webglTexture,n.TEXTURE0+z);const Et=i.get(K);if(K.version!==Et.__version||Q===!0){e.activeTexture(n.TEXTURE0+z);const ut=ne.getPrimaries(ne.workingColorSpace),_t=S.colorSpace===ni?null:ne.getPrimaries(S.colorSpace),ee=S.colorSpace===ni||ut===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let st=g(S.image,!1,s.maxTextureSize);st=_e(S,st);const xt=r.convert(S.format,S.colorSpace),Lt=r.convert(S.type);let Ut=y(S.internalFormat,xt,Lt,S.colorSpace,S.isVideoTexture);Ht($,S);let vt;const jt=S.mipmaps,Xt=S.isVideoTexture!==!0,pe=Et.__version===void 0||Q===!0,N=K.dataReady,ht=I(S,st);if(S.isDepthTexture)Ut=v(S.format===ns,S.type),pe&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Lt,null));else if(S.isDataTexture)if(jt.length>0){Xt&&pe&&e.texStorage2D(n.TEXTURE_2D,ht,Ut,jt[0].width,jt[0].height);for(let Y=0,J=jt.length;Y<J;Y++)vt=jt[Y],Xt?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,vt.width,vt.height,xt,Lt,vt.data):e.texImage2D(n.TEXTURE_2D,Y,Ut,vt.width,vt.height,0,xt,Lt,vt.data);S.generateMipmaps=!1}else Xt?(pe&&e.texStorage2D(n.TEXTURE_2D,ht,Ut,st.width,st.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,xt,Lt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Lt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,Ut,jt[0].width,jt[0].height,st.depth);for(let Y=0,J=jt.length;Y<J;Y++)if(vt=jt[Y],S.format!==bn)if(xt!==null)if(Xt){if(N)if(S.layerUpdates.size>0){const mt=_l(vt.width,vt.height,S.format,S.type);for(const dt of S.layerUpdates){const Vt=vt.data.subarray(dt*mt/vt.data.BYTES_PER_ELEMENT,(dt+1)*mt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,dt,vt.width,vt.height,1,xt,Vt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,st.depth,xt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ut,vt.width,vt.height,st.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,st.depth,xt,Lt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ut,vt.width,vt.height,st.depth,0,xt,Lt,vt.data)}else{Xt&&pe&&e.texStorage2D(n.TEXTURE_2D,ht,Ut,jt[0].width,jt[0].height);for(let Y=0,J=jt.length;Y<J;Y++)vt=jt[Y],S.format!==bn?xt!==null?Xt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,Ut,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,vt.width,vt.height,xt,Lt,vt.data):e.texImage2D(n.TEXTURE_2D,Y,Ut,vt.width,vt.height,0,xt,Lt,vt.data)}else if(S.isDataArrayTexture)if(Xt){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,Ut,st.width,st.height,st.depth),N)if(S.layerUpdates.size>0){const Y=_l(st.width,st.height,S.format,S.type);for(const J of S.layerUpdates){const mt=st.data.subarray(J*Y/st.data.BYTES_PER_ELEMENT,(J+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,st.width,st.height,1,xt,Lt,mt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Lt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,xt,Lt,st.data);else if(S.isData3DTexture)Xt?(pe&&e.texStorage3D(n.TEXTURE_3D,ht,Ut,st.width,st.height,st.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Lt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,xt,Lt,st.data);else if(S.isFramebufferTexture){if(pe)if(Xt)e.texStorage2D(n.TEXTURE_2D,ht,Ut,st.width,st.height);else{let Y=st.width,J=st.height;for(let mt=0;mt<ht;mt++)e.texImage2D(n.TEXTURE_2D,mt,Ut,Y,J,0,xt,Lt,null),Y>>=1,J>>=1}}else if(jt.length>0){if(Xt&&pe){const Y=Ct(jt[0]);e.texStorage2D(n.TEXTURE_2D,ht,Ut,Y.width,Y.height)}for(let Y=0,J=jt.length;Y<J;Y++)vt=jt[Y],Xt?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,xt,Lt,vt):e.texImage2D(n.TEXTURE_2D,Y,Ut,xt,Lt,vt);S.generateMipmaps=!1}else if(Xt){if(pe){const Y=Ct(st);e.texStorage2D(n.TEXTURE_2D,ht,Ut,Y.width,Y.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Lt,st)}else e.texImage2D(n.TEXTURE_2D,0,Ut,xt,Lt,st);m(S)&&p($),Et.__version=K.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Z(T,S,z){if(S.image.length!==6)return;const $=oe(T,S),Q=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const K=i.get(Q);if(Q.version!==K.__version||$===!0){e.activeTexture(n.TEXTURE0+z);const Et=ne.getPrimaries(ne.workingColorSpace),ut=S.colorSpace===ni?null:ne.getPrimaries(S.colorSpace),_t=S.colorSpace===ni||Et===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const ee=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let J=0;J<6;J++)!ee&&!st?xt[J]=g(S.image[J],!0,s.maxCubemapSize):xt[J]=st?S.image[J].image:S.image[J],xt[J]=_e(S,xt[J]);const Lt=xt[0],Ut=r.convert(S.format,S.colorSpace),vt=r.convert(S.type),jt=y(S.internalFormat,Ut,vt,S.colorSpace),Xt=S.isVideoTexture!==!0,pe=K.__version===void 0||$===!0,N=Q.dataReady;let ht=I(S,Lt);Ht(n.TEXTURE_CUBE_MAP,S);let Y;if(ee){Xt&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,jt,Lt.width,Lt.height);for(let J=0;J<6;J++){Y=xt[J].mipmaps;for(let mt=0;mt<Y.length;mt++){const dt=Y[mt];S.format!==bn?Ut!==null?Xt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,dt.width,dt.height,Ut,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,jt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,dt.width,dt.height,Ut,vt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,jt,dt.width,dt.height,0,Ut,vt,dt.data)}}}else{if(Y=S.mipmaps,Xt&&pe){Y.length>0&&ht++;const J=Ct(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,jt,J.width,J.height)}for(let J=0;J<6;J++)if(st){Xt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xt[J].width,xt[J].height,Ut,vt,xt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,xt[J].width,xt[J].height,0,Ut,vt,xt[J].data);for(let mt=0;mt<Y.length;mt++){const Vt=Y[mt].image[J].image;Xt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Vt.width,Vt.height,Ut,vt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,jt,Vt.width,Vt.height,0,Ut,vt,Vt.data)}}else{Xt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ut,vt,xt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,Ut,vt,xt[J]);for(let mt=0;mt<Y.length;mt++){const dt=Y[mt];Xt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Ut,vt,dt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,jt,Ut,vt,dt.image[J])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function it(T,S,z,$,Q,K){const Et=r.convert(z.format,z.colorSpace),ut=r.convert(z.type),_t=y(z.internalFormat,Et,ut,z.colorSpace),ee=i.get(S),st=i.get(z);if(st.__renderTarget=S,!ee.__hasExternalTextures){const xt=Math.max(1,S.width>>K),Lt=Math.max(1,S.height>>K);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,_t,xt,Lt,S.depth,0,Et,ut,null):e.texImage2D(Q,K,_t,xt,Lt,0,Et,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Jt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,st.__webglTexture,0,$t(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,st.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function et(T,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),S.depthBuffer){const $=S.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=v(S.stencilBuffer,Q),Et=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=$t(S);Jt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,K,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,K,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,K,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,T)}else{const $=S.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],Et=r.convert(K.format,K.colorSpace),ut=r.convert(K.type),_t=y(K.internalFormat,Et,ut,K.colorSpace),ee=$t(S);z&&Jt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,_t,S.width,S.height):Jt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,_t,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,_t,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const Q=$.__webglTexture,K=$t(S);if(S.depthTexture.format===Zi)Jt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===ns)Jt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function kt(T){const S=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=$}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Rt(S.__webglFramebuffer,T)}else if(z){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),et(S.__webglDepthbuffer[$],T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),et(S.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(T,S,z){const $=i.get(T);S!==void 0&&it($.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&kt(T)}function Me(T){const S=T.texture,z=i.get(T),$=i.get(S);T.addEventListener("dispose",C);const Q=T.textures,K=T.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let _t=0;_t<S.mipmaps.length;_t++)z.__webglFramebuffer[ut][_t]=n.createFramebuffer()}else z.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)z.__webglFramebuffer[ut]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Et)for(let ut=0,_t=Q.length;ut<_t;ut++){const ee=i.get(Q[ut]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Jt(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){const _t=Q[ut];z.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);const ee=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),xt=y(_t.internalFormat,ee,st,_t.colorSpace,T.isXRRenderTarget===!0),Lt=$t(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,xt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),et(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)it(z.__webglFramebuffer[ut][_t],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else it(z.__webglFramebuffer[ut],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,_t=Q.length;ut<_t;ut++){const ee=Q[ut],st=i.get(ee);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Ht(n.TEXTURE_2D,ee),it(z.__webglFramebuffer,T,ee,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(ee)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,$.__webglTexture),Ht(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)it(z.__webglFramebuffer[_t],T,S,n.COLOR_ATTACHMENT0,ut,_t);else it(z.__webglFramebuffer,T,S,n.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}T.depthBuffer&&kt(T)}function te(T){const S=T.textures;for(let z=0,$=S.length;z<$;z++){const Q=S[z];if(m(Q)){const K=x(T),Et=i.get(Q).__webglTexture;e.bindTexture(K,Et),p(K),e.unbindTexture()}}}const be=[],O=[];function dn(T){if(T.samples>0){if(Jt(T)===!1){const S=T.textures,z=T.width,$=T.height;let Q=n.COLOR_BUFFER_BIT;const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(T),ut=S.length>1;if(ut)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const ee=i.get(S[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,z,$,0,0,z,$,Q,n.NEAREST),c===!0&&(be.length=0,O.length=0,be.push(n.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(be.push(K),O.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const ee=i.get(S[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,ee,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function $t(T){return Math.min(s.maxSamples,T.samples)}function Jt(T){const S=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pt(T){const S=o.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function _e(T,S){const z=T.colorSpace,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Ti&&z!==ni&&(ne.getTransfer(z)===fe?($!==bn||Q!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=nt,this.setTextureCube=q,this.rebindTextures=Kt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Jt}function eg(n,t){function e(i,s=ni){let r;const o=ne.getTransfer(s);if(i===qn)return n.UNSIGNED_BYTE;if(i===Ba)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ah)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rh)return n.BYTE;if(i===oh)return n.SHORT;if(i===Is)return n.UNSIGNED_SHORT;if(i===za)return n.INT;if(i===wi)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===Os)return n.HALF_FLOAT;if(i===ch)return n.ALPHA;if(i===lh)return n.RGB;if(i===bn)return n.RGBA;if(i===hh)return n.LUMINANCE;if(i===uh)return n.LUMINANCE_ALPHA;if(i===Zi)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===fh)return n.RED;if(i===Va)return n.RED_INTEGER;if(i===dh)return n.RG;if(i===Ga)return n.RG_INTEGER;if(i===Wa)return n.RGBA_INTEGER;if(i===Lr||i===Dr||i===Ir||i===Ur)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ra||i===oa||i===aa||i===ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===la||i===ha||i===ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===la||i===ha)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ua)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fa||i===da||i===pa||i===ma||i===ga||i===_a||i===xa||i===va||i===Ma||i===ya||i===Sa||i===wa||i===Ea||i===ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===da)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ma)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ga)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_a)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===va)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ma)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ya)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ea)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ba)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nr||i===Ta||i===Aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Nr)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ph||i===Ra||i===Ca||i===Pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Nr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class ng extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ig={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new At;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class og{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new An({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ag extends rs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const g=new og,m=e.getContextAttributes();let p=null,x=null;const y=[],v=[],I=new ot;let A=null;const C=new un;C.viewport=new ue;const D=new un;D.viewport=new ue;const b=[C,D],w=new ng;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Z=y[U];return Z===void 0&&(Z=new Ro,y[U]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(U){let Z=y[U];return Z===void 0&&(Z=new Ro,y[U]=Z),Z.getGripSpace()},this.getHand=function(U){let Z=y[U];return Z===void 0&&(Z=new Ro,y[U]=Z),Z.getHandSpace()};function B(U){const Z=v.indexOf(U.inputSource);if(Z===-1)return;const it=y[Z];it!==void 0&&(it.update(U.inputSource,U.frame,l||o),it.dispatchEvent({type:U.type,data:U.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let U=0;U<y.length;U++){const Z=v[U];Z!==null&&(v[U]=null,y[U].disconnect(Z))}L=null,V=null,g.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,x=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new oi(d.framebufferWidth,d.framebufferHeight,{format:bn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,it=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?ns:Zi,it=m.stencil?es:wi);const Rt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new oi(f.textureWidth,f.textureHeight,{format:bn,type:qn,depthTexture:new $a(f.textureWidth,f.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(U){for(let Z=0;Z<U.removed.length;Z++){const it=U.removed[Z],et=v.indexOf(it);et>=0&&(v[et]=null,y[et].disconnect(it))}for(let Z=0;Z<U.added.length;Z++){const it=U.added[Z];let et=v.indexOf(it);if(et===-1){for(let kt=0;kt<y.length;kt++)if(kt>=v.length){v.push(it),et=kt;break}else if(v[kt]===null){v[kt]=it,et=kt;break}if(et===-1)break}const Rt=y[et];Rt&&Rt.connect(it)}}const X=new R,nt=new R;function q(U,Z,it){X.setFromMatrixPosition(Z.matrixWorld),nt.setFromMatrixPosition(it.matrixWorld);const et=X.distanceTo(nt),Rt=Z.projectionMatrix.elements,kt=it.projectionMatrix.elements,Kt=Rt[14]/(Rt[10]-1),Me=Rt[14]/(Rt[10]+1),te=(Rt[9]+1)/Rt[5],be=(Rt[9]-1)/Rt[5],O=(Rt[8]-1)/Rt[0],dn=(kt[8]+1)/kt[0],$t=Kt*O,Jt=Kt*dn,Pt=et/(-O+dn),_e=Pt*-O;if(Z.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(_e),U.translateZ(Pt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Rt[10]===-1)U.projectionMatrix.copy(Z.projectionMatrix),U.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ct=Kt+Pt,T=Me+Pt,S=$t-_e,z=Jt+(et-_e),$=te*Me/T*Ct,Q=be*Me/T*Ct;U.projectionMatrix.makePerspective(S,z,$,Q,Ct,T),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function ct(U,Z){Z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let Z=U.near,it=U.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(it=g.depthFar)),w.near=D.near=C.near=Z,w.far=D.far=C.far=it,(L!==w.near||V!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,V=w.far),C.layers.mask=U.layers.mask|2,D.layers.mask=U.layers.mask|4,w.layers.mask=C.layers.mask|D.layers.mask;const et=U.parent,Rt=w.cameras;ct(w,et);for(let kt=0;kt<Rt.length;kt++)ct(Rt[kt],et);Rt.length===2?q(w,C,D):w.projectionMatrix.copy(C.projectionMatrix),at(U,w,et)};function at(U,Z,it){it===null?U.matrix.copy(Z.matrixWorld):(U.matrix.copy(it.matrixWorld),U.matrix.invert(),U.matrix.multiply(Z.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Z.projectionMatrix),U.projectionMatrixInverse.copy(Z.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=La*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(U){c=U,f!==null&&(f.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let wt=null;function Ht(U,Z){if(u=Z.getViewerPose(l||o),_=Z,u!==null){const it=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let et=!1;it.length!==w.cameras.length&&(w.cameras.length=0,et=!0);for(let kt=0;kt<it.length;kt++){const Kt=it[kt];let Me=null;if(d!==null)Me=d.getViewport(Kt);else{const be=h.getViewSubImage(f,Kt);Me=be.viewport,kt===0&&(t.setRenderTargetTextures(x,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(x))}let te=b[kt];te===void 0&&(te=new un,te.layers.enable(kt),te.viewport=new ue,b[kt]=te),te.matrix.fromArray(Kt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Kt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Me.x,Me.y,Me.width,Me.height),kt===0&&(w.matrix.copy(te.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),et===!0&&w.cameras.push(te)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const kt=h.getDepthInformation(it[0]);kt&&kt.isValid&&kt.texture&&g.init(t,kt,s.renderState)}}for(let it=0;it<y.length;it++){const et=v[it],Rt=y[it];et!==null&&Rt!==void 0&&Rt.update(et,Z,l||o)}wt&&wt(U,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const oe=new Th;oe.setAnimationLoop(Ht),this.setAnimationLoop=function(U){wt=U},this.dispose=function(){}}}const pi=new _n,cg=new ge;function lg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,pi.copy(v),pi.x*=-1,pi.y*=-1,pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(pi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hg(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const v=y.program;i.uniformBlockBinding(x,v)}function l(x,y){let v=s[x.id];v===void 0&&(_(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",m));const I=y.program;i.updateUBOMapping(x,I);const A=t.render.frame;r[x.id]!==A&&(f(x),r[x.id]=A)}function u(x){const y=h();x.__bindingPointIndex=y;const v=n.createBuffer(),I=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=s[x.id],v=x.uniforms,I=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,C=v.length;A<C;A++){const D=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,w=D.length;b<w;b++){const L=D[b];if(d(L,A,b,I)===!0){const V=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let j=0;j<B.length;j++){const X=B[j],nt=g(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,V+W,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,W),W+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,y,v,I){const A=x.value,C=y+"_"+v;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{const D=I[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return I[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function _(x){const y=x.uniforms;let v=0;const I=16;for(let C=0,D=y.length;C<D;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,L=b.length;w<L;w++){const V=b[w],B=Array.isArray(V.value)?V.value:[V.value];for(let W=0,j=B.length;W<j;W++){const X=B[W],nt=g(X),q=v%I,ct=q%nt.boundary,at=q+ct;v+=ct,at!==0&&I-at<nt.storage&&(v+=I-at),V.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=nt.storage}}}const A=v%I;return A>0&&(v+=I-A),x.__size=v,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class ug{constructor(t={}){const{canvas:e=ju(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let I=!1,A=0,C=0,D=null,b=-1,w=null;const L=new ue,V=new ue;let B=null;const W=new Bt(0);let j=0,X=e.width,nt=e.height,q=1,ct=null,at=null;const wt=new ue(0,0,X,nt),Ht=new ue(0,0,X,nt);let oe=!1;const U=new Ya;let Z=!1,it=!1;const et=new ge,Rt=new ge,kt=new R,Kt=new ue,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function be(){return D===null?q:1}let O=i;function dn(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oa}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),O===null){const F="webgl2";if(O=dn(F,E),O===null)throw dn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $t,Jt,Pt,_e,Ct,T,S,z,$,Q,K,Et,ut,_t,ee,st,xt,Lt,Ut,vt,jt,Xt,pe,N;function ht(){$t=new g0(O),$t.init(),Xt=new eg(O,$t),Jt=new h0(O,$t,t,Xt),Pt=new jm(O,$t),Jt.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),_e=new v0(O),Ct=new km,T=new tg(O,$t,Pt,Ct,Jt,Xt,_e),S=new f0(v),z=new m0(v),$=new Tf(O),pe=new c0(O,$),Q=new _0(O,$,_e,pe),K=new y0(O,Q,$,_e),Ut=new M0(O,Jt,T),st=new u0(Ct),Et=new Fm(v,S,z,$t,Jt,pe,st),ut=new lg(v,Ct),_t=new zm,ee=new Xm($t),Lt=new a0(v,S,z,Pt,K,d,c),xt=new $m(v,K,Jt),N=new hg(O,_e,Jt,Pt),vt=new l0(O,$t,_e),jt=new x0(O,$t,_e),_e.programs=Et.programs,v.capabilities=Jt,v.extensions=$t,v.properties=Ct,v.renderLists=_t,v.shadowMap=xt,v.state=Pt,v.info=_e}ht();const Y=new ag(v,O);this.xr=Y,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(X,nt,!1))},this.getSize=function(E){return E.set(X,nt)},this.setSize=function(E,F,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,nt=F,e.width=Math.floor(E*q),e.height=Math.floor(F*q),H===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(X*q,nt*q).floor()},this.setDrawingBufferSize=function(E,F,H){X=E,nt=F,q=H,e.width=Math.floor(E*H),e.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,F,H,G){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,F,H,G),Pt.viewport(L.copy(wt).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Ht)},this.setScissor=function(E,F,H,G){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,F,H,G),Pt.scissor(V.copy(Ht).multiplyScalar(q).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){Pt.setScissorTest(oe=E)},this.setOpaqueSort=function(E){ct=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,F=!0,H=!0){let G=0;if(E){let k=!1;if(D!==null){const rt=D.texture.format;k=rt===Wa||rt===Ga||rt===Va}if(k){const rt=D.texture.type,pt=rt===qn||rt===wi||rt===Is||rt===es||rt===Ba||rt===Ha,Mt=Lt.getClearColor(),yt=Lt.getClearAlpha(),Nt=Mt.r,Gt=Mt.g,St=Mt.b;pt?(_[0]=Nt,_[1]=Gt,_[2]=St,_[3]=yt,O.clearBufferuiv(O.COLOR,0,_)):(g[0]=Nt,g[1]=Gt,g[2]=St,g[3]=yt,O.clearBufferiv(O.COLOR,0,g))}else G|=O.COLOR_BUFFER_BIT}F&&(G|=O.DEPTH_BUFFER_BIT),H&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),ee.dispose(),Ct.dispose(),S.dispose(),z.dispose(),K.dispose(),pe.dispose(),N.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",hc),Y.removeEventListener("sessionend",uc),ci.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=_e.autoReset,F=xt.enabled,H=xt.autoUpdate,G=xt.needsUpdate,k=xt.type;ht(),_e.autoReset=E,xt.enabled=F,xt.autoUpdate=H,xt.needsUpdate=G,xt.type=k}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Vt(E){const F=E.target;F.removeEventListener("dispose",Vt),Se(F)}function Se(E){ze(E),Ct.remove(E)}function ze(E){const F=Ct.get(E).programs;F!==void 0&&(F.forEach(function(H){Et.releaseProgram(H)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,G,k,rt){F===null&&(F=Me);const pt=k.isMesh&&k.matrixWorld.determinant()<0,Mt=tu(E,F,H,G,k);Pt.setMaterial(G,pt);let yt=H.index,Nt=1;if(G.wireframe===!0){if(yt=Q.getWireframeAttribute(H),yt===void 0)return;Nt=2}const Gt=H.drawRange,St=H.attributes.position;let se=Gt.start*Nt,me=(Gt.start+Gt.count)*Nt;rt!==null&&(se=Math.max(se,rt.start*Nt),me=Math.min(me,(rt.start+rt.count)*Nt)),yt!==null?(se=Math.max(se,0),me=Math.min(me,yt.count)):St!=null&&(se=Math.max(se,0),me=Math.min(me,St.count));const xe=me-se;if(xe<0||xe===1/0)return;pe.setup(k,G,Mt,H,yt);let Je,ae=vt;if(yt!==null&&(Je=$.get(yt),ae=jt,ae.setIndex(Je)),k.isMesh)G.wireframe===!0?(Pt.setLineWidth(G.wireframeLinewidth*be()),ae.setMode(O.LINES)):ae.setMode(O.TRIANGLES);else if(k.isLine){let bt=G.linewidth;bt===void 0&&(bt=1),Pt.setLineWidth(bt*be()),k.isLineSegments?ae.setMode(O.LINES):k.isLineLoop?ae.setMode(O.LINE_LOOP):ae.setMode(O.LINE_STRIP)}else k.isPoints?ae.setMode(O.POINTS):k.isSprite&&ae.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ae.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const bt=k._multiDrawStarts,Un=k._multiDrawCounts,ce=k._multiDrawCount,vn=yt?$.get(yt).bytesPerElement:1,Ai=Ct.get(G).currentProgram.getUniforms();for(let on=0;on<ce;on++)Ai.setValue(O,"_gl_DrawID",on),ae.render(bt[on]/vn,Un[on])}else if(k.isInstancedMesh)ae.renderInstances(se,xe,k.count);else if(H.isInstancedBufferGeometry){const bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Un=Math.min(H.instanceCount,bt);ae.renderInstances(se,xe,Un)}else ae.render(se,xe)};function he(E,F,H){E.transparent===!0&&E.side===Ye&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,Js(E,F,H),E.side=ri,E.needsUpdate=!0,Js(E,F,H),E.side=Ye):Js(E,F,H)}this.compile=function(E,F,H=null){H===null&&(H=E),p=ee.get(H),p.init(F),y.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==H&&E.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const G=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const rt=k.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const Mt=rt[pt];he(Mt,H,k),G.add(Mt)}else he(rt,H,k),G.add(rt)}),y.pop(),p=null,G},this.compileAsync=function(E,F,H=null){const G=this.compile(E,F,H);return new Promise(k=>{function rt(){if(G.forEach(function(pt){Ct.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){k(E);return}setTimeout(rt,10)}$t.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let xn=null;function In(E){xn&&xn(E)}function hc(){ci.stop()}function uc(){ci.start()}const ci=new Th;ci.setAnimationLoop(In),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(E){xn=E,Y.setAnimationLoop(E),E===null?ci.stop():ci.start()},Y.addEventListener("sessionstart",hc),Y.addEventListener("sessionend",uc),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,D),p=ee.get(E,y.length),p.init(F),y.push(p),Rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),U.setFromProjectionMatrix(Rt),it=this.localClippingEnabled,Z=st.init(this.clippingPlanes,it),m=_t.get(E,x.length),m.init(),x.push(m),Y.enabled===!0&&Y.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Jr(rt,F,-1/0,v.sortObjects)}Jr(E,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ct,at),te=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,te&&Lt.addToRenderList(m,E),this.info.render.frame++,Z===!0&&st.beginShadows();const H=p.state.shadowsArray;xt.render(H,E,F),Z===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,k=m.transmissive;if(p.setupLights(),F.isArrayCamera){const rt=F.cameras;if(k.length>0)for(let pt=0,Mt=rt.length;pt<Mt;pt++){const yt=rt[pt];dc(G,k,E,yt)}te&&Lt.render(E);for(let pt=0,Mt=rt.length;pt<Mt;pt++){const yt=rt[pt];fc(m,E,yt,yt.viewport)}}else k.length>0&&dc(G,k,E,F),te&&Lt.render(E),fc(m,E,F);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(v,E,F),pe.resetDefaultState(),b=-1,w=null,y.pop(),y.length>0?(p=y[y.length-1],Z===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Jr(E,F,H,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||U.intersectsSprite(E)){G&&Kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Rt);const pt=K.update(E),Mt=E.material;Mt.visible&&m.push(E,pt,Mt,H,Kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||U.intersectsObject(E))){const pt=K.update(E),Mt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Kt.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Kt.copy(pt.boundingSphere.center)),Kt.applyMatrix4(E.matrixWorld).applyMatrix4(Rt)),Array.isArray(Mt)){const yt=pt.groups;for(let Nt=0,Gt=yt.length;Nt<Gt;Nt++){const St=yt[Nt],se=Mt[St.materialIndex];se&&se.visible&&m.push(E,pt,se,H,Kt.z,St)}}else Mt.visible&&m.push(E,pt,Mt,H,Kt.z,null)}}const rt=E.children;for(let pt=0,Mt=rt.length;pt<Mt;pt++)Jr(rt[pt],F,H,G)}function fc(E,F,H,G){const k=E.opaque,rt=E.transmissive,pt=E.transparent;p.setupLightsView(H),Z===!0&&st.setGlobalState(v.clippingPlanes,H),G&&Pt.viewport(L.copy(G)),k.length>0&&$s(k,F,H),rt.length>0&&$s(rt,F,H),pt.length>0&&$s(pt,F,H),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function dc(E,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new oi(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Os:qn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const rt=p.state.transmissionRenderTarget[G.id],pt=G.viewport||L;rt.setSize(pt.z,pt.w);const Mt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(W),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),te&&Lt.render(H);const yt=v.toneMapping;v.toneMapping=si;const Nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Z===!0&&st.setGlobalState(v.clippingPlanes,G),$s(E,H,G),T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let St=0,se=F.length;St<se;St++){const me=F[St],xe=me.object,Je=me.geometry,ae=me.material,bt=me.group;if(ae.side===Ye&&xe.layers.test(G.layers)){const Un=ae.side;ae.side=nn,ae.needsUpdate=!0,pc(xe,H,G,Je,ae,bt),ae.side=Un,ae.needsUpdate=!0,Gt=!0}}Gt===!0&&(T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt))}v.setRenderTarget(Mt),v.setClearColor(W,j),Nt!==void 0&&(G.viewport=Nt),v.toneMapping=yt}function $s(E,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,rt=E.length;k<rt;k++){const pt=E[k],Mt=pt.object,yt=pt.geometry,Nt=G===null?pt.material:G,Gt=pt.group;Mt.layers.test(H.layers)&&pc(Mt,F,H,yt,Nt,Gt)}}function pc(E,F,H,G,k,rt){E.onBeforeRender(v,F,H,G,k,rt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,F,H,G,E,rt),k.transparent===!0&&k.side===Ye&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,v.renderBufferDirect(H,F,G,k,E,rt),k.side=ri,k.needsUpdate=!0,v.renderBufferDirect(H,F,G,k,E,rt),k.side=Ye):v.renderBufferDirect(H,F,G,k,E,rt),E.onAfterRender(v,F,H,G,k,rt)}function Js(E,F,H){F.isScene!==!0&&(F=Me);const G=Ct.get(E),k=p.state.lights,rt=p.state.shadowsArray,pt=k.state.version,Mt=Et.getParameters(E,k.state,rt,F,H),yt=Et.getProgramCacheKey(Mt);let Nt=G.programs;G.environment=E.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Vt),Nt=new Map,G.programs=Nt);let Gt=Nt.get(yt);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===pt)return gc(E,Mt),Gt}else Mt.uniforms=Et.getUniforms(E),E.onBeforeCompile(Mt,v),Gt=Et.acquireProgram(Mt,yt),Nt.set(yt,Gt),G.uniforms=Mt.uniforms;const St=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=st.uniform),gc(E,Mt),G.needsLights=nu(E),G.lightsStateVersion=pt,G.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.directionalShadowMap.value=k.state.directionalShadowMap,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotShadowMap.value=k.state.spotShadowMap,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMap.value=k.state.pointShadowMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Gt,G.uniformsList=null,Gt}function mc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Fr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function gc(E,F){const H=Ct.get(E);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function tu(E,F,H,G,k){F.isScene!==!0&&(F=Me),T.resetTextureUnits();const rt=F.fog,pt=G.isMeshStandardMaterial?F.environment:null,Mt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ti,yt=(G.isMeshStandardMaterial?z:S).get(G.envMap||pt),Nt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!H.morphAttributes.position,se=!!H.morphAttributes.normal,me=!!H.morphAttributes.color;let xe=si;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xe=v.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=Je!==void 0?Je.length:0,bt=Ct.get(G),Un=p.state.lights;if(Z===!0&&(it===!0||E!==w)){const pn=E===w&&G.id===b;st.setState(G,E,pn)}let ce=!1;G.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Un.state.version||bt.outputColorSpace!==Mt||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==yt||G.fog===!0&&bt.fog!==rt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==st.numPlanes||bt.numIntersection!==st.numIntersection)||bt.vertexAlphas!==Nt||bt.vertexTangents!==Gt||bt.morphTargets!==St||bt.morphNormals!==se||bt.morphColors!==me||bt.toneMapping!==xe||bt.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,bt.__version=G.version);let vn=bt.currentProgram;ce===!0&&(vn=Js(G,F,k));let Ai=!1,on=!1,fs=!1;const ve=vn.getUniforms(),Rn=bt.uniforms;if(Pt.useProgram(vn.program)&&(Ai=!0,on=!0,fs=!0),G.id!==b&&(b=G.id,on=!0),Ai||w!==E){Pt.buffers.depth.getReversed()?(et.copy(E.projectionMatrix),tf(et),ef(et),ve.setValue(O,"projectionMatrix",et)):ve.setValue(O,"projectionMatrix",E.projectionMatrix),ve.setValue(O,"viewMatrix",E.matrixWorldInverse);const Yn=ve.map.cameraPosition;Yn!==void 0&&Yn.setValue(O,kt.setFromMatrixPosition(E.matrixWorld)),Jt.logarithmicDepthBuffer&&ve.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,on=!0,fs=!0)}if(k.isSkinnedMesh){ve.setOptional(O,k,"bindMatrix"),ve.setOptional(O,k,"bindMatrixInverse");const pn=k.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ve.setValue(O,"boneTexture",pn.boneTexture,T))}k.isBatchedMesh&&(ve.setOptional(O,k,"batchingTexture"),ve.setValue(O,"batchingTexture",k._matricesTexture,T),ve.setOptional(O,k,"batchingIdTexture"),ve.setValue(O,"batchingIdTexture",k._indirectTexture,T),ve.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(O,"batchingColorTexture",k._colorsTexture,T));const ds=H.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Ut.update(k,H,vn),(on||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,ve.setValue(O,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Rn.envMap.value=yt,Rn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Rn.envMapIntensity.value=F.environmentIntensity),on&&(ve.setValue(O,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&eu(Rn,fs),rt&&G.fog===!0&&ut.refreshFogUniforms(Rn,rt),ut.refreshMaterialUniforms(Rn,G,q,nt,p.state.transmissionRenderTarget[E.id]),Fr.upload(O,mc(bt),Rn,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fr.upload(O,mc(bt),Rn,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(O,"center",k.center),ve.setValue(O,"modelViewMatrix",k.modelViewMatrix),ve.setValue(O,"normalMatrix",k.normalMatrix),ve.setValue(O,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const pn=G.uniformsGroups;for(let Yn=0,Zn=pn.length;Yn<Zn;Yn++){const _c=pn[Yn];N.update(_c,vn),N.bind(_c,vn)}}return vn}function eu(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function nu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,F,H){Ct.get(E.texture).__webglTexture=F,Ct.get(E.depthTexture).__webglTexture=H;const G=Ct.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const H=Ct.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,H=0){D=E,A=F,C=H;let G=!0,k=null,rt=!1,pt=!1;if(E){const yt=Ct.get(E);if(yt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(O.FRAMEBUFFER,null),G=!1;else if(yt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(yt.__hasExternalTextures)T.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Ct.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(pt=!0);const Gt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?k=Gt[F][H]:k=Gt[F],rt=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?k=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?k=Gt[H]:k=Gt,L.copy(E.viewport),V.copy(E.scissor),B=E.scissorTest}else L.copy(wt).multiplyScalar(q).floor(),V.copy(Ht).multiplyScalar(q).floor(),B=oe;if(Pt.bindFramebuffer(O.FRAMEBUFFER,k)&&G&&Pt.drawBuffers(E,k),Pt.viewport(L),Pt.scissor(V),Pt.setScissorTest(B),rt){const yt=Ct.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,H)}else if(pt){const yt=Ct.get(E.texture),Nt=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.__webglTexture,H||0,Nt)}b=-1},this.readRenderTargetPixels=function(E,F,H,G,k,rt,pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){Pt.bindFramebuffer(O.FRAMEBUFFER,Mt);try{const yt=E.texture,Nt=yt.format,Gt=yt.type;if(!Jt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&H>=0&&H<=E.height-k&&O.readPixels(F,H,G,k,Xt.convert(Nt),Xt.convert(Gt),rt)}finally{const yt=D!==null?Ct.get(D).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(E,F,H,G,k,rt,pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){const yt=E.texture,Nt=yt.format,Gt=yt.type;if(!Jt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-G&&H>=0&&H<=E.height-k){Pt.bindFramebuffer(O.FRAMEBUFFER,Mt);const St=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.bufferData(O.PIXEL_PACK_BUFFER,rt.byteLength,O.STREAM_READ),O.readPixels(F,H,G,k,Xt.convert(Nt),Xt.convert(Gt),0);const se=D!==null?Ct.get(D).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,se);const me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Qu(O,me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,rt),O.deleteBuffer(St),O.deleteSync(me),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,H=0){E.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-H),k=Math.floor(E.image.width*G),rt=Math.floor(E.image.height*G),pt=F!==null?F.x:0,Mt=F!==null?F.y:0;T.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,pt,Mt,k,rt),Pt.unbindTexture()},this.copyTextureToTexture=function(E,F,H=null,G=null,k=0){E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],F=arguments[2],k=arguments[3]||0,H=null);let rt,pt,Mt,yt,Nt,Gt,St,se,me;const xe=E.isCompressedTexture?E.mipmaps[k]:E.image;H!==null?(rt=H.max.x-H.min.x,pt=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,yt=H.min.x,Nt=H.min.y,Gt=H.isBox3?H.min.z:0):(rt=xe.width,pt=xe.height,Mt=xe.depth||1,yt=0,Nt=0,Gt=0),G!==null?(St=G.x,se=G.y,me=G.z):(St=0,se=0,me=0);const Je=Xt.convert(F.format),ae=Xt.convert(F.type);let bt;F.isData3DTexture?(T.setTexture3D(F,0),bt=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),bt=O.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),bt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const Un=O.getParameter(O.UNPACK_ROW_LENGTH),ce=O.getParameter(O.UNPACK_IMAGE_HEIGHT),vn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ai=O.getParameter(O.UNPACK_SKIP_ROWS),on=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,xe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,yt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Gt);const fs=E.isDataArrayTexture||E.isData3DTexture,ve=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Rn=Ct.get(E),ds=Ct.get(F),pn=Ct.get(Rn.__renderTarget),Yn=Ct.get(ds.__renderTarget);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,pn.__webglFramebuffer),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Zn=0;Zn<Mt;Zn++)fs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,k,Gt+Zn),E.isDepthTexture?(ve&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(F).__webglTexture,k,me+Zn),O.blitFramebuffer(yt,Nt,rt,pt,St,se,rt,pt,O.DEPTH_BUFFER_BIT,O.NEAREST)):ve?O.copyTexSubImage3D(bt,k,St,se,me+Zn,yt,Nt,rt,pt):O.copyTexSubImage2D(bt,k,St,se,me+Zn,yt,Nt,rt,pt);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(bt,k,St,se,me,rt,pt,Mt,Je,ae,xe.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(bt,k,St,se,me,rt,pt,Mt,Je,xe.data):O.texSubImage3D(bt,k,St,se,me,rt,pt,Mt,Je,ae,xe):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,St,se,rt,pt,Je,ae,xe.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,St,se,xe.width,xe.height,Je,xe.data):O.texSubImage2D(O.TEXTURE_2D,k,St,se,rt,pt,Je,ae,xe);O.pixelStorei(O.UNPACK_ROW_LENGTH,Un),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce),O.pixelStorei(O.UNPACK_SKIP_PIXELS,vn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ai),O.pixelStorei(O.UNPACK_SKIP_IMAGES,on),k===0&&F.generateMipmaps&&O.generateMipmap(bt),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,H=null,G=null,k=0){return E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],F=arguments[3],k=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,H,G,k)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,Pt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Ja{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=i}clone(){return new Ja(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lh extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fg extends ai{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Br=new R,Hr=new R,xl=new ge,vs=new qa,vr=new as,Co=new R,vl=new R;class dg extends Pe{constructor(t=new Le,e=new fg){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Br.fromBufferAttribute(e,s-1),Hr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Br.distanceTo(Hr);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(s),vr.radius+=r,t.ray.intersectsSphere(vr)===!1)return;xl.copy(s).invert(),vs.copy(t.ray).applyMatrix4(xl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=u.getX(g),x=u.getX(g+1),y=Mr(this,t,vs,c,p,x);y&&e.push(y)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=Mr(this,t,vs,c,g,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=Mr(this,t,vs,c,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=Mr(this,t,vs,c,_-1,d);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mr(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(Br.fromBufferAttribute(o,s),Hr.fromBufferAttribute(o,r),e.distanceSqToSegment(Br,Hr,Co,vl)>i)return;Co.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Co);if(!(c<t.near||c>t.far))return{distance:c,point:vl.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Ml=new R,yl=new R;class Sl extends dg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ml.fromBufferAttribute(e,s),yl.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ml.distanceTo(yl);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pg extends ai{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wl=new ge,Ia=new qa,yr=new as,Sr=new R;class El extends Pe{constructor(t=new Le,e=new pg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;wl.copy(s).invert(),Ia.copy(t.ray).applyMatrix4(wl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=l.getX(_);Sr.fromBufferAttribute(h,m),bl(Sr,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)Sr.fromBufferAttribute(h,_),bl(Sr,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bl(n,t,e,i,s,r,o){const a=Ia.distanceSqToPoint(n);if(a<e){const c=new R;Ia.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ls extends Ke{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ot:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new R,s=[],r=[],o=[],a=new R,c=new ge;for(let d=0;d<=t;d++){const _=d/t;s[d]=this.getTangentAt(_,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ja extends Dn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mg extends ja{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qa(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const wr=new R,Po=new Qa,Lo=new Qa,Do=new Qa;class gg extends Dn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new R){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(wr.subVectors(s[0],s[1]).add(s[0]),l=wr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=wr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Po.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,_,g,m),Lo.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,_,g,m),Do.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Lo.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Do.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Po.calc(c),Lo.calc(c),Do.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tl(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function _g(n,t){const e=1-n;return e*e*t}function xg(n,t){return 2*(1-n)*n*t}function vg(n,t){return n*n*t}function Cs(n,t,e,i){return _g(n,t)+xg(n,e)+vg(n,i)}function Mg(n,t){const e=1-n;return e*e*e*t}function yg(n,t){const e=1-n;return 3*e*e*n*t}function Sg(n,t){return 3*(1-n)*n*n*t}function wg(n,t){return n*n*n*t}function Ps(n,t,e,i,s){return Mg(n,t)+yg(n,e)+Sg(n,i)+wg(n,s)}class Dh extends Dn{constructor(t=new ot,e=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eg extends Dn{constructor(t=new R,e=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new R){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y),Ps(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ih extends Dn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bg extends Dn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends Dn{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tg extends Dn{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y),Cs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Tl(a,c.x,l.x,u.x,h.x),Tl(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var Al=Object.freeze({__proto__:null,ArcCurve:mg,CatmullRomCurve3:gg,CubicBezierCurve:Dh,CubicBezierCurve3:Eg,EllipseCurve:ja,LineCurve:Ih,LineCurve3:bg,QuadraticBezierCurve:Uh,QuadraticBezierCurve3:Tg,SplineCurve:Nh});class Ag extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Al[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Al[s.type]().fromJSON(s))}return this}}class Rl extends Ag{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ih(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Uh(this.currentPoint.clone(),new ot(t,e),new ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Dh(this.currentPoint.clone(),new ot(t,e),new ot(i,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Nh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new ja(t,e,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tc extends Le{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new R,f=new ot,d=new R,_=new R,g=new R;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),c.push(d.x,d.y,d.z),g.copy(_)}for(let x=0;x<=e;x++){const y=i+x*u*s,v=Math.sin(y),I=Math.cos(y);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*v,h.y=t[A].y,h.z=t[A].x*I,o.push(h.x,h.y,h.z),f.x=x/e,f.y=A/(t.length-1),a.push(f.x,f.y);const C=c[3*A+0]*v,D=c[3*A+1],b=c[3*A+0]*I;l.push(C,D,b)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const v=y+x*t.length,I=v,A=v+t.length,C=v+t.length+1,D=v+1;r.push(I,A,D),r.push(C,D,A)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tc(t.points,t.segments,t.phiStart,t.phiLength)}}class hs extends Le{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,u=new ot;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ft extends Le{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const g=[],m=i/2;let p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(d,2));function x(){const v=new R,I=new R;let A=0;const C=(e-t)/i;for(let D=0;D<=r;D++){const b=[],w=D/r,L=w*(e-t)+t;for(let V=0;V<=s;V++){const B=V/s,W=B*c+a,j=Math.sin(W),X=Math.cos(W);I.x=L*j,I.y=-w*i+m,I.z=L*X,h.push(I.x,I.y,I.z),v.set(j,C,X).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-w),b.push(_++)}g.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){const w=g[b][D],L=g[b+1][D],V=g[b+1][D+1],B=g[b][D+1];(t>0||b!==0)&&(u.push(w,L,B),A+=3),(e>0||b!==r-1)&&(u.push(L,V,B),A+=3)}l.addGroup(p,A,0),p+=A}function y(v){const I=_,A=new ot,C=new R;let D=0;const b=v===!0?t:e,w=v===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),_++;const L=_;for(let V=0;V<=s;V++){const W=V/s*c+a,j=Math.cos(W),X=Math.sin(W);C.x=b*X,C.y=m*w,C.z=b*j,h.push(C.x,C.y,C.z),f.push(0,w,0),A.x=j*.5+.5,A.y=X*.5*w+.5,d.push(A.x,A.y),_++}for(let V=0;V<s;V++){const B=I+V,W=L+V;v===!0?u.push(W,W+1,B):u.push(W+1,W,B),D+=3}l.addGroup(p,D,v===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ft(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $e extends ft{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new $e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hs extends Le{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new R,v=new R,I=new R;for(let A=0;A<e.length;A+=3)d(e[A+0],y),d(e[A+1],v),d(e[A+2],I),c(y,v,I,x)}function c(x,y,v,I){const A=I+1,C=[];for(let D=0;D<=A;D++){C[D]=[];const b=x.clone().lerp(v,D/A),w=y.clone().lerp(v,D/A),L=A-D;for(let V=0;V<=L;V++)V===0&&D===A?C[D][V]=b:C[D][V]=b.clone().lerp(w,V/L)}for(let D=0;D<A;D++)for(let b=0;b<2*(A-D)-1;b++){const w=Math.floor(b/2);b%2===0?(f(C[D][w+1]),f(C[D+1][w]),f(C[D][w])):(f(C[D][w+1]),f(C[D+1][w+1]),f(C[D+1][w]))}}function l(x){const y=new R;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const x=new R;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,I=p(x)/Math.PI+.5;o.push(v,1-I)}_(),h()}function h(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],I=o[x+4],A=Math.max(y,v,I),C=Math.min(y,v,I);A>.9&&C<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),I<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function _(){const x=new R,y=new R,v=new R,I=new R,A=new ot,C=new ot,D=new ot;for(let b=0,w=0;b<r.length;b+=9,w+=6){x.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),A.set(o[w+0],o[w+1]),C.set(o[w+2],o[w+3]),D.set(o[w+4],o[w+5]),I.copy(x).add(y).add(v).divideScalar(3);const L=m(I);g(A,w+0,x,L),g(C,w+2,y,L),g(D,w+4,v,L)}}function g(x,y,v,I){I<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=I/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.vertices,t.indices,t.radius,t.details)}}class Vs extends Hs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vs(t.radius,t.detail)}}class Fh extends Rl{constructor(t){super(t),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Rl().fromJSON(s))}return this}}const Rg={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=kh(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(i&&(r=Ig(n,t,r,e)),n.length>80*e){a=l=n[0],c=u=n[1];for(let _=e;_<s;_+=e)h=n[_],f=n[_+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Us(r,o,e,a,c,d,0),o}};function kh(n,t,e,i,s){let r,o;if(s===Wg(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Cl(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Cl(r,n[r],n[r+1],o);return o&&$r(o,o.next)&&(Fs(o),o=o.next),o}function Ei(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&($r(e,e.next)||ye(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Us(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Og(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Pg(n,i,s,r):Cg(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Fs(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Lg(Ei(n),t,e),Us(n,t,e,i,s,r,2)):o===2&&Dg(n,t,e,i,s,r):Us(Ei(n),t,e,i,s,r,1);break}}}function Cg(n){const t=n.prev,e=n,i=n.next;if(ye(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Gi(s,a,r,c,o,l,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Pg(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ye(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,_=u<h?u<f?u:f:h<f?h:f,g=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=Ua(d,_,t,e,i),x=Ua(g,m,t,e,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&Gi(a,u,c,h,l,f,y.x,y.y)&&ye(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&Gi(a,u,c,h,l,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&Gi(a,u,c,h,l,f,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&Gi(a,u,c,h,l,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Lg(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!$r(s,r)&&Oh(s,i,i.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Fs(i),Fs(i.next),i=n=r),i=i.next}while(i!==n);return Ei(i)}function Dg(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hg(o,a)){let c=zh(o,a);o=Ei(o,o.next),c=Ei(c,c.next),Us(o,t,e,i,s,r,0),Us(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ig(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=kh(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Bg(l));for(s.sort(Ug),r=0;r<s.length;r++)e=Ng(s[r],e);return e}function Ug(n,t){return n.x-t.x}function Ng(n,t){const e=Fg(n,t);if(!e)return t;const i=zh(e,n);return Ei(i,i.next),Ei(e,e.next)}function Fg(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Gi(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ns(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&kg(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function kg(n,t){return ye(n.prev,n,t.prev)<0&&ye(t.next,n,n.next)<0}function Og(n,t,e,i){let s=n;do s.z===0&&(s.z=Ua(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,zg(s)}function zg(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function Ua(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Bg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Gi(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Hg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Vg(n,t)&&(Ns(n,t)&&Ns(t,n)&&Gg(n,t)&&(ye(n.prev,n,t.prev)||ye(n,t.prev,t))||$r(n,t)&&ye(n.prev,n,n.next)>0&&ye(t.prev,t,t.next)>0)}function ye(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function $r(n,t){return n.x===t.x&&n.y===t.y}function Oh(n,t,e,i){const s=br(ye(n,t,e)),r=br(ye(n,t,i)),o=br(ye(e,i,n)),a=br(ye(e,i,t));return!!(s!==r&&o!==a||s===0&&Er(n,e,t)||r===0&&Er(n,i,t)||o===0&&Er(e,n,i)||a===0&&Er(e,t,i))}function Er(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function br(n){return n>0?1:n<0?-1:0}function Vg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Oh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ns(n,t){return ye(n.prev,n,n.next)<0?ye(n,t,n.next)>=0&&ye(n,n.prev,t)>=0:ye(n,t,n.prev)<0||ye(n,n.next,t)<0}function Gg(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function zh(n,t){const e=new Na(n.i,n.x,n.y),i=new Na(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Cl(n,t,e,i){const s=new Na(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Na(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wg(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ls{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Ls.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Pl(t),Ll(i,t);let o=t.length;e.forEach(Pl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ll(i,e[c]);const a=Rg.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Pl(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ll(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ae extends Hs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ae(t.radius,t.detail)}}class ec extends Hs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ec(t.radius,t.detail)}}class nc extends Le{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new R,_=new ot;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,u.push(_.x,_.y)}h+=f}for(let g=0;g<s;g++){const m=g*(i+1);for(let p=0;p<i;p++){const x=p+m,y=x,v=x+i+1,I=x+i+2,A=x+1;a.push(y,v,A),a.push(v,I,A)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ic extends Le{constructor(t=new Fh([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const _=f.holes;Ls.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const x=_[m];Ls.isClockWise(x)===!0&&(_[m]=x.reverse())}const g=Ls.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const x=_[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){const x=d[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=g.length;m<p;m++){const x=g[m],y=x[0]+h,v=x[1]+h,I=x[2]+h;i.push(y,v,I),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Xg(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new ic(i,t.curveSegments)}}function Xg(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class ke extends Le{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new R,f=new R,d=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){const x=[],y=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&c===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){const A=I/e;h.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(A+v,1-y),x.push(l++)}u.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){const y=u[p][x+1],v=u[p][x],I=u[p+1][x],A=u[p+1][x+1];(p!==0||o>0)&&d.push(y,v,A),(p!==i-1||c<Math.PI)&&d.push(v,I,A)}this.setIndex(d),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(g,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ge extends Le{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new R,h=new R,f=new R;for(let d=0;d<=i;d++)for(let _=0;_<=s;_++){const g=_/s*r,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(g),h.y=(t+e*Math.cos(m))*Math.sin(g),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(_/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=s;_++){const g=(s+1)*d+_-1,m=(s+1)*(d-1)+_-1,p=(s+1)*(d-1)+_,x=(s+1)*d+_;o.push(g,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bh extends ai{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Bt(16777215),this.specular=new Bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kr extends ai{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sc extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Io=new ge,Dl=new R,Il=new R;class Hh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dl),Il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Il),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ul=new ge,Ms=new R,Uo=new R;class qg extends Hh{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ms.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ms),Uo.copy(i.position),Uo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Uo),i.updateMatrixWorld(),s.makeTranslation(-Ms.x,-Ms.y,-Ms.z),Ul.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul)}}class Vh extends sc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new qg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Yg extends Hh{constructor(){super(new Za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nl extends sc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Yg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zg extends sc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oa);const Wi={paper:"#f4ead5",paperShade:"#e6d6b6",white:"#fffaf0",ink:"#25304f",inkSoft:"#4a5878",red:"#e4573d",redDark:"#a83b2a",pink:"#f3a59a",teal:"#2b9c8e",tealDark:"#1c6b63",tealLight:"#9ad6c8",mustard:"#f2b234",mustardDark:"#c58a1f",peach:"#f8c7a4",lilac:"#c9b3d9",grass:"#79b25d",grassDark:"#4f8a49",concrete:"#9fa1ab",wood:"#c27b4b",woodDark:"#8a5134",skin1:"#f6cfae",skin2:"#d9a07a",skin3:"#9a6446"};function Vn(n){return Xi(Wi[n])}function Xi(n){const t=parseInt(n.slice(1),16);return new Bt((t>>16&255)/255,(t>>8&255)/255,(t&255)/255)}const de={enterX:0,exitX:900,frontX:600,gap:100,maxWaiting:3,speed:55};function Fl(n){return de.frontX-n*de.gap}class Kg{constructor(){tt(this,"line",[]);tt(this,"leaving",[])}canJoin(){const t=this.line[this.line.length-1];return this.line.length<de.maxWaiting&&(!t||t.x-de.enterX>=de.gap)}join(t){if(!this.canJoin())return null;const e={orderId:t,x:de.enterX,state:"walking",waited:0};return this.line.push(e),e}front(){const t=this.line[0];return t&&t.state==="waiting"&&t.x===Fl(0)?t:null}serveFront(){const t=this.front();return t?(this.line.shift(),t.state="leaving",t.walkOff="on",this.leaving.push(t),t):null}giveUp(t){const e=this.line.indexOf(t);e<0||(this.line.splice(e,1),t.state="leaving",t.walkOff="back",this.leaving.push(t))}release(t){const e=this.leaving.indexOf(t);e>=0&&this.leaving.splice(e,1)}walkOn(t,e){const i={orderId:t,x:e,state:"leaving",waited:0,walkOff:"on"};return this.leaving.push(i),i}update(t){const e=de.speed*t;this.line.forEach((s,r)=>{const o=Fl(r),a=this.line[r-1],c=a?Math.min(o,a.x-de.gap):o;s.x<c&&(s.x=Math.min(c,s.x+e)),s.state=s.x>=c?"waiting":"walking"});const i=[];for(const s of[...this.leaving]){const r=s.walkOff==="back";s.x=r?Math.max(de.enterX,s.x-e):Math.min(de.exitX,s.x+e),(r?s.x<=de.enterX:s.x>=de.exitX)&&(this.leaving.splice(this.leaving.indexOf(s),1),i.push(s))}return i}}const Fe=(n,t,e,i,s,r)=>({min:{x:Math.min(n,i),y:Math.min(t,s),z:Math.min(e,r)},max:{x:Math.max(n,i),y:Math.max(t,s),z:Math.max(e,r)}}),sn={length:6,depth:2.4,height:2.4},Pn=sn.length/2,Qt=sn.depth/2,Ve=1.6,$g=2.2,Jg=1.7,P=-.35,Dt={window:Fe(-1.5,1.05,-Qt-.05,1.5,2.05,-Qt+.05),frontCounter:Fe(-1.8,0,-Qt,1.8,1,-Qt+.45),tablet:Fe(.7,1,-Qt+.12,1.06,1.26,-Qt+.3),tipJar:Fe(-1.3,1,-Qt+.15,-1.12,1.22,-Qt+.33),fridge:Fe(-Pn,0,-Qt+.05,-Pn+.75,2,-.65),stockShelves:Fe(-Pn,0,.55,-Pn+.55,2,Qt),cabOpening:Fe(-Pn-.08,0,-.5,-Pn,2,.5),backCounter:Fe(-1.6,0,Qt-.45,1.8,.95,Qt),coffeeMachine:Fe(-1.25,.95,Qt-.4,-.6,1.5,Qt-.05),menuBoard:Fe(-.1,1.35,Qt-.05,1,2.1,Qt),recipeShelf:Fe(1.15,1.42,Qt-.3,1.75,1.78,Qt),door:Fe(Pn-.05,0,-.5,Pn,2.1,.5),guideBook:Fe(.2,.95,Qt-.4,.62,1.22,Qt-.06),radio:Fe(-.5,.95,Qt-.3,-.1,1.2,Qt-.08),phone:Fe(1.15,.95,Qt-.34,1.5,1.1,Qt-.1),calendar:Fe(2.05,1.35,Qt-.05,2.6,2.05,Qt),badgeBoard:Fe(1.85,1.3,-Qt,2.75,2,-Qt+.05)},le={x:-.92,y:1.9,z:Qt-.02,r:.16},Tr={minX:-Pn+.95,maxX:Pn-.4,minZ:-Qt+.7,maxZ:Qt-.7},No={x:0,z:.1,yaw:0},jg=[{id:"tablet",box:Dt.tablet},{id:"fridge",box:Dt.fridge},{id:"stock-shelves",box:Dt.stockShelves},{id:"menu-board",box:Dt.menuBoard},{id:"recipe-shelf",box:Dt.recipeShelf},{id:"back-door",box:Dt.door},{id:"guide-book",box:Dt.guideBook},{id:"radio",box:Dt.radio},{id:"phone",box:Dt.phone},{id:"calendar",box:Dt.calendar},{id:"badge-board",box:Dt.badgeBoard}],Qg=[{id:"tablet",tables:["sales","menu_items"],object:"tablet",box:Dt.tablet},{id:"fridge",tables:["inventory"],object:"fridge",box:Dt.fridge},{id:"shelves",tables:["suppliers"],object:"stock-shelves",box:Dt.stockShelves},{id:"menu-board",tables:["menu_items"],object:"menu-board",box:Dt.menuBoard},{id:"recipes",tables:["recipes","menu_items"],object:"recipe-shelf",box:Dt.recipeShelf}];function t_(n){return{x:(n.min.x+n.max.x)/2,y:Math.min(n.max.y+.15,sn.height-.1),z:(n.min.z+n.max.z)/2}}function e_(n,t){return{x:Math.min(Tr.maxX,Math.max(Tr.minX,n)),z:Math.min(Tr.maxZ,Math.max(Tr.minZ,t))}}function kl(n,t){const e=Math.cos(t);return{x:-Math.sin(n)*e,y:Math.sin(t),z:-Math.cos(n)*e}}function Fo(n,t,e,i,s=!1){const r=(e.forward?1:0)-(e.back?1:0),o=(e.right?1:0)-(e.left?1:0),a=Math.hypot(r,o);if(a===0)return n;const c=$g*(s?2:1)*i/a,l=-Math.sin(t),u=-Math.cos(t),h=Math.cos(t),f=-Math.sin(t),d=n.x+(l*r+h*o)*c,_=n.z+(u*r+f*o)*c;return s?{x:d,z:_}:e_(d,_)}function Gh(n,t,e){let i=0,s=1/0;for(const r of["x","y","z"]){const o=n[r],a=t[r];if(Math.abs(a)<1e-9){if(o<e.min[r]||o>e.max[r])return null;continue}let c=(e.min[r]-o)/a,l=(e.max[r]-o)/a;if(c>l&&([c,l]=[l,c]),i=Math.max(i,c),s=Math.min(s,l),i>s)return null}return i}function n_(n,t){let e=null;for(const{id:i,box:s}of jg){const r=Gh(n,t,s);r!==null&&r<=Jg&&(!e||r<e.t)&&(e={id:i,t:r})}return(e==null?void 0:e.id)??null}function i_(n,t){const e=t.x-n.x,i=t.y-n.y,s=t.z-n.z;return{yaw:Math.atan2(-e,-s),pitch:Math.atan2(i,Math.hypot(e,s))}}const Bn=n=>({x:(n.min.x+n.max.x)/2,y:(n.min.y+n.max.y)/2,z:(n.min.z+n.max.z)/2}),Wh=[{object:"tablet",eye:{x:.2,y:Ve,z:.15},target:Bn(Dt.tablet)},{object:"fridge",eye:{x:-1,y:Ve,z:-.35},target:{x:-2.7,y:1.1,z:-.9}},{object:"stock-shelves",eye:{x:-1,y:Ve,z:.25},target:{x:-2.7,y:1.1,z:.9}},{object:"recipe-shelf",eye:{x:1.2,y:Ve,z:-.25},target:Bn(Dt.recipeShelf)},{object:"menu-board",eye:{x:.45,y:Ve,z:-.35},target:Bn(Dt.menuBoard)},{object:"back-door",eye:{x:.4,y:Ve,z:0},target:Bn(Dt.door)},{object:"guide-book",eye:{x:.4,y:Ve,z:-.05},target:Bn(Dt.guideBook)},{object:"radio",eye:{x:-.25,y:Ve,z:-.1},target:Bn(Dt.radio)},{object:"phone",eye:{x:1.3,y:Ve,z:-.1},target:Bn(Dt.phone)},{object:"calendar",eye:{x:2.3,y:Ve,z:-.1},target:Bn(Dt.calendar)},{object:"badge-board",eye:{x:2.3,y:Ve,z:.1},target:Bn(Dt.badgeBoard)}],ko=[{x:.3,z:-Qt-.6},{x:.5,z:-Qt-1.65},{x:.7,z:-Qt-2.7}],ys=(n,t)=>{const e=n.length,i=t.length;return[...n.map((s,r)=>({at:de.enterX+r/e*(de.frontX-2*de.gap-de.enterX),...s})),{at:de.frontX-2*de.gap,...ko[2]},{at:de.frontX-de.gap,...ko[1]},{at:de.frontX,...ko[0]},...t.map((s,r)=>({at:de.frontX+(r+1)/i*(de.exitX-de.frontX),...s}))]},rc={park:ys([{x:-11,z:-8}],[{x:4,z:-2.6},{x:9,z:-3.5}]),skatepark:ys([{x:13,z:-6.5}],[{x:-3,z:-2.7},{x:-9,z:-4.5}]),school:ys([{x:-.8,z:-23.5},{x:.6,z:-9}],[{x:4,z:-2.6},{x:8,z:-3.2}]),harbour:ys([{x:-13,z:-7}],[{x:4.5,z:-2.6},{x:11,z:-3}]),square:ys([{x:13,z:-5.2}],[{x:-3,z:-2.4},{x:-9,z:-2.6}])};function Oo(n,t="park"){const e=rc[t],i=Math.min(e[e.length-1].at,Math.max(e[0].at,n));for(let r=1;r<e.length;r++){const o=e[r-1],a=e[r];if(i<=a.at){const c=(i-o.at)/(a.at-o.at),l=Math.atan2(-(a.x-o.x),-(a.z-o.z));return{x:o.x+(a.x-o.x)*c,z:o.z+(a.z-o.z)*c,yaw:l}}}const s=e[e.length-1];return{x:s.x,z:s.z,yaw:0}}const s_=Math.PI,r_={bench:1,picnicTable:1.3,lamp:.3,tree:1.3,bush:.7,bin:.35,quarterPipe:2,funBox:1.7,rail:1.5,pillar:.8,hoop:.8,bikeRack:1.1,flagPole:.3,bollard:.3,crates:1,barrel:.45,stall:1.7,fountain:2.4,planter:.7,aFrame:.5,bistroSet:1},Gs={park:[{kind:"bench",x:-5.2,z:-3.2,yaw:.4},{kind:"bench",x:5.6,z:-8.8,yaw:-.5},{kind:"bench",x:8.5,z:-14,yaw:-.2},{kind:"picnicTable",x:3.9,z:-6.2},{kind:"picnicTable",x:-5.5,z:-12},{kind:"picnicTable",x:7,z:-11},{kind:"lamp",x:-3.6,z:-3.6},{kind:"lamp",x:2.4,z:-4.4},{kind:"lamp",x:6.5,z:-7},{kind:"tree",x:-8.5,z:-1.5,size:1.2},{kind:"tree",x:9.5,z:-7.5,size:1.1},{kind:"tree",x:-2,z:-16,size:1.3},{kind:"aFrame",x:-1.6,z:-3.2,yaw:.4},{kind:"bistroSet",x:7,z:-5.5,yaw:-.5},{kind:"bistroSet",x:1,z:-6,yaw:.5}],skatepark:[{kind:"quarterPipe",x:1.5,z:-12,yaw:0},{kind:"quarterPipe",x:-6,z:-16,yaw:.3},{kind:"funBox",x:6.5,z:-10},{kind:"rail",x:3.2,z:-7.2,yaw:.2},{kind:"pillar",x:-11,z:-13},{kind:"pillar",x:11,z:-13},{kind:"pillar",x:-4,z:-21},{kind:"pillar",x:5,z:-21},{kind:"bench",x:-6,z:-7.5,yaw:.4},{kind:"bin",x:-2.2,z:-6.5},{kind:"lamp",x:-1.5,z:-9},{kind:"lamp",x:-9.5,z:-7.5},{kind:"aFrame",x:-1.3,z:-3.8,yaw:.3},{kind:"bistroSet",x:-4,z:-5,yaw:0},{kind:"bistroSet",x:-8,z:-6.5,yaw:1.57}],school:[{kind:"hoop",x:4,z:-14,yaw:Math.PI},{kind:"hoop",x:4,z:-8.4,yaw:0},{kind:"bikeRack",x:-5.6,z:-3.4,yaw:.5},{kind:"bikeRack",x:9.5,z:-5.5,yaw:-1.2},{kind:"flagPole",x:-3,z:-17},{kind:"bench",x:8.8,z:-9.5,yaw:-1.3},{kind:"tree",x:-7.5,z:-6.5,size:1.1},{kind:"tree",x:-9,z:-14,size:1.3},{kind:"tree",x:11,z:-15,size:1.2},{kind:"bin",x:2.6,z:-4.4},{kind:"aFrame",x:-1.3,z:-3.8,yaw:.4},{kind:"bistroSet",x:4.5,z:-5,yaw:-.5},{kind:"bistroSet",x:7,z:-8,yaw:-.5}],harbour:[{kind:"bollard",x:-6,z:-14},{kind:"bollard",x:-1,z:-14},{kind:"bollard",x:4,z:-14},{kind:"bollard",x:9,z:-14},{kind:"crates",x:5,z:-8.5,yaw:.3},{kind:"crates",x:-6.5,z:-1.8,yaw:-.4},{kind:"barrel",x:6.8,z:-9.8},{kind:"barrel",x:3.3,z:-10.4},{kind:"bench",x:.5,z:-9.5,yaw:0},{kind:"lamp",x:2.4,z:-4.4},{kind:"lamp",x:-3.6,z:-11},{kind:"lamp",x:8,z:-6.5},{kind:"aFrame",x:-1.6,z:-2.9,yaw:.5},{kind:"bistroSet",x:4,z:-5.5,yaw:0},{kind:"bistroSet",x:6.5,z:-6,yaw:-.5}],square:[{kind:"fountain",x:4.5,z:-11},{kind:"stall",x:-6,z:-15,yaw:.2},{kind:"stall",x:9.5,z:-7.5,yaw:-.9},{kind:"stall",x:-.5,z:-17,yaw:0},{kind:"planter",x:-6.5,z:-6},{kind:"planter",x:3,z:-7.2},{kind:"bench",x:8.5,z:-14,yaw:-.4},{kind:"lamp",x:-3.8,z:-4.4},{kind:"lamp",x:6.5,z:-6.5},{kind:"tree",x:-10,z:-8,size:1.1},{kind:"aFrame",x:-1.3,z:-3.8,yaw:.3},{kind:"bistroSet",x:-2,z:-6.5,yaw:-.5},{kind:"bistroSet",x:-8,z:-4.5,yaw:.5}]};function o_(n){return r_[n.kind]*(n.size??1)}const a_={bench:[-.4,.4].map(n=>({x:n,z:0,yaw:0,height:.48,from:{x:n,z:-.75}})),picnicTable:[...[-.35,.35].map(n=>({x:n,z:-.72,yaw:Math.PI,height:.46,from:{x:n,z:-1.35},cup:{x:n,y:.78,z:-.25}})),...[-.35,.35].map(n=>({x:n,z:.72,yaw:0,height:.46,from:{x:n,z:1.35},cup:{x:n,y:.78,z:.25}}))],bistroSet:[{x:-.62,z:0,yaw:-Math.PI/2,height:.48,from:{x:-1.15,z:0},cup:{x:-.2,y:.74,z:0}},{x:.62,z:0,yaw:Math.PI/2,height:.48,from:{x:1.15,z:0},cup:{x:.2,y:.74,z:0}}]};function zo(n,t,e){const i=n.yaw??0,s=Math.cos(i),r=Math.sin(i);return{x:n.x+t*s+e*r,z:n.z-t*r+e*s}}function c_(n){const t=[];return Gs[n].forEach((e,i)=>{(a_[e.kind]??[]).forEach((s,r)=>{const o=zo(e,s.x,s.z),a=s.cup?{...zo(e,s.cup.x,s.cup.z),y:s.cup.y}:void 0;t.push({id:`${i}.${r}`,...o,yaw:s.yaw+(e.yaw??0),height:s.height,from:zo(e,s.from.x,s.from.z),cup:a,prop:i})})}),t}function Xh(n){const e=rc[n].find(i=>i.at>de.frontX);return{x:e.x,z:e.z,at:e.at}}function l_(n){return rc[n].filter(t=>t.at>=de.frontX-2*de.gap&&t.at<=de.frontX)}function Vr(n,t,e){const i=e.x-t.x,s=e.z-t.z,r=i*i+s*s,o=r===0?0:Math.max(0,Math.min(1,((n.x-t.x)*i+(n.z-t.z)*s)/r));return Math.hypot(n.x-(t.x+i*o),n.z-(t.z+s*o))}function h_(n,t,e,i){let s=1/0;for(let r=0;r<=20;r++){const o=r/20;s=Math.min(s,Vr({x:n.x+(t.x-n.x)*o,z:n.z+(t.z-n.z)*o},e,i)),s=Math.min(s,Vr({x:e.x+(i.x-e.x)*o,z:e.z+(i.z-e.z)*o},n,t))}return s}const u_=n=>n.x>-5.2&&n.x<3.5&&n.z>-1.45&&n.z<1.45,Ol=.3,f_=.7,d_=.45;function Fa(n,t){const e=Xh(t);return[{x:e.x,z:e.z},n.from,{x:n.x,z:n.z}]}function p_(n,t){const[e,i,s]=Fa(n,t),r=Gs[t];for(let a=0;a<r.length;a++){const c=r[a],l=o_(c)*.8+Ol,u=a===n.prop?d_+Ol:l;if(Vr(c,e,i)<u)return`walks through the ${c.kind} at ${c.x}, ${c.z}`;if(a!==n.prop&&Vr(c,i,s)<l)return`sits into the ${c.kind} at ${c.x}, ${c.z}`}const o=l_(t);for(let a=1;a<o.length;a++)if(h_(e,i,o[a-1],o[a])<f_)return"walks through the line";for(let a=0;a<=20;a++){const c=a/20;if(u_({x:e.x+(i.x-e.x)*c,z:e.z+(i.z-e.z)*c}))return"walks through the truck"}return null}function m_(n){return c_(n).filter(t=>p_(t,n)===null)}const Bo=.6,g_=1.3,Ho={min:18,max:40};function qh(n,t){let e=t;for(let s=1;s<n.length;s++){const r=n[s-1],o=n[s],a=Math.hypot(o.x-r.x,o.z-r.z),c=Math.atan2(-(o.x-r.x),-(o.z-r.z));if(e<=a||s===n.length-1){const l=a===0?1:Math.min(1,e/a);return{x:r.x+(o.x-r.x)*l,z:r.z+(o.z-r.z)*l,yaw:c,done:s===n.length-1&&e>=a}}e-=a}return{...n[n.length-1],yaw:0,done:!0}}class zl{constructor(t){tt(this,"diners",[]);tt(this,"seats");this.place=t,this.seats=m_(t)}freeSeats(){return this.seats.filter(t=>!this.diners.some(e=>e.seat.id===t.id))}tryToSit(t,e,i=!0){if(!i||e>=Bo)return null;const s=this.freeSeats();if(s.length===0)return null;const r=s[Math.floor(e/Bo*s.length)%s.length],o={orderId:t,seat:r,state:"toSeat",path:Fa(r,this.place),walked:0,sitLeft:Ho.min+e/Bo*(Ho.max-Ho.min)};return this.diners.push(o),o}update(t,e){const i=[];for(const s of[...this.diners]){if(s.state==="sitting"){s.sitLeft-=e,s.sitLeft<=0&&(s.state="leaving",s.path=[...Fa(s.seat,this.place)].reverse(),s.walked=0);continue}s.walked+=g_*t,qh(s.path,s.walked).done&&(s.state==="toSeat"?s.state="sitting":(this.diners.splice(this.diners.indexOf(s),1),i.push(s)))}return i}}const re=(n,t,e)=>({x:n,y:t,z:e}),Ds=[{name:"truck",from:re(-2.5,1.6,-9),to:re(2.5,1.9,-8.4),lookFrom:re(-.8,1.5,0),lookTo:re(.3,1.5,0),seconds:7},{name:"awning",from:re(2.9,2.6,-3.5),to:re(1.7,2.75,-3.2),lookFrom:re(-.6,2.2,-1.4),lookTo:re(-.9,2.4,-1.4),seconds:6},{name:"inside",from:re(1.9,1.55,-.55),to:re(.9,1.5,-.6),lookFrom:re(-.9,1.25,1),lookTo:re(-1.2,1.25,1),seconds:6},{name:"place",from:re(-7,9,-15),to:re(5,10.5,-17),lookFrom:re(0,0,-4),lookTo:re(0,0,-3),seconds:8},{name:"cab",from:re(-8.6,.45,-2.4),to:re(-7.6,.55,-1.4),lookFrom:re(-4,1.1,-.4),lookTo:re(-3.6,1.1,0),seconds:6},{name:"roof",from:re(3.6,4.3,-3.6),to:re(.6,4,-3.8),lookFrom:re(-.6,3,0),lookTo:re(-1.6,3,0),seconds:6},{name:"manager",from:re(.5,1.55,-.45),to:re(1.5,1.6,-.3),lookFrom:re(3.4,1.5,.05),lookTo:re(3.4,1.5,.05),seconds:6},{name:"seats",from:re(6,3.6,-11),to:re(4,3.3,-10.5),lookFrom:re(.5,.8,-4.5),lookTo:re(0,.9,-4),seconds:7}];function __(n){let t=0;for(const e of Ds){if(e.name===n)return{start:t,seconds:e.seconds};t+=e.seconds}return null}const Vo=Ds.reduce((n,t)=>n+t.seconds,0),Bl=.6,x_=n=>n*n*(3-2*n),Hl=(n,t,e)=>({x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e,z:n.z+(t.z-n.z)*e});function v_(n){let t=(n%Vo+Vo)%Vo;for(const i of Ds){if(t<i.seconds){const s=x_(t/i.seconds),r=Math.min(t,i.seconds-t);return{shot:i.name,at:Hl(i.from,i.to,s),look:Hl(i.lookFrom,i.lookTo,s),dark:r<Bl?1-r/Bl:0}}t-=i.seconds}const e=Ds[Ds.length-1];return{shot:e.name,at:e.to,look:e.lookTo,dark:1}}const xi={paint:"red",awning:"teal",machine:1,plants:0,till:1,board:2};let Yh=xi;const M_=n=>{const t=(e,i)=>e&&e in Wi?e:i;Yh={paint:t(n==null?void 0:n.paint,xi.paint),awning:t(n==null?void 0:n.awning,xi.awning),machine:(n==null?void 0:n.machine)??xi.machine,plants:(n==null?void 0:n.plants)??xi.plants,till:(n==null?void 0:n.till)??xi.till,board:(n==null?void 0:n.board)??xi.board}},bi=()=>Yh,Gr=12,y_=.7;function Ws(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Go(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function S_(n,t=!1){const e=Ws(n);if(!t&&e()>y_)return[];const i=[],s=t?2:1+Math.floor(e()*2);let r=Ji+15;for(let o=0;o<s&&r<ln-40;o++){const a=o===0&&t?Ji-Gr:r+Math.floor(e()*120),c=(o===0&&t?90:40)+Math.floor(e()*70),l=Math.min(ln+Gr,a+c);i.push({start:a,end:l,strength:o===0&&t?.95:.45+e()*.55}),r=l+30}return i}function w_(n,t){let e=0;for(const i of n){const s=Math.min(1,Math.max(0,(t-i.start)/Gr)),r=Math.min(1,Math.max(0,(i.end-t)/Gr));e=Math.max(e,Math.min(s,r)*i.strength)}return e}const wn=(n,t)=>t[Math.floor(n()*t.length)],E_=["skin1","skin2","skin3"],b_=["ink","woodDark","wood","mustardDark","redDark","inkSoft"],Vl=["red","teal","mustard","pink","lilac","tealLight","peach","grass"],Gl=["ink","inkSoft","tealDark","woodDark","redDark","grassDark","wood"],T_=["white","paper","paperShade","peach","tealLight","pink"],A_={student:{hair:["short","spiky","curly","ponytail","long","beanie","bun"],tops:["hoodie","tee","jacket"],lowers:["trousers","shorts","skirt"],extras:["backpack","headphones","brows","blush"]},office:{hair:["short","bun","long","bald","ponytail"],tops:["jacket","sweater"],lowers:["trousers","skirt"],extras:["lanyard","bag","brows","moustache"]},runner:{hair:["cap","short","ponytail","spiky","bald"],tops:["tee","hoodie"],lowers:["shorts","trousers"],extras:["headphones","necklace","brows"]},grandpa:{hair:["sides","bald","short"],tops:["sweater","jacket"],lowers:["trousers"],extras:["moustache","beard","scarf","bag"],old:!0},painter:{hair:["bun","curly","long","beanie","short"],tops:["tee","sweater","jacket"],lowers:["trousers","skirt","shorts"],extras:["paint","scarf","blush","bag"]}},Wl=.12,R_=.12;function C_(n){const t=Ws(n^1540483477)();return t<Wl?"cartoon":t<Wl+R_?"brick":"person"}function P_(n,t){const e=Ws(t),i=A_[n],s=wn(e,i.hair),r=wn(e,i.tops),o=e(),a=o<.55?"plain":o<.72?i.old?"glasses":"wide":o<.86?"glasses":o<.94?"sleepy":"sunglasses",c=i.extras.filter(()=>e()<.45),l=r==="jacket"&&e()<.5?wn(e,Gl):wn(e,Vl);return{height:i.old?.94+e()*.06:.9+e()*.18,width:.88+e()*.32,skin:wn(e,E_),hair:i.old?e()<.7?"white":"paperShade":wn(e,b_),hairStyle:s,hat:wn(e,Vl),eyes:a,top:r,outer:l,inner:wn(e,T_),lower:wn(e,i.lowers),legs:wn(e,e()<.6?Gl:["paperShade","wood","tealDark","lilac"]),shoes:wn(e,["ink","white","red","woodDark","teal"]),extras:c}}function Ft(n,t,e,i,s,r){const o=new gt(t,typeof e=="string"?Zt(e):e);return o.position.set(i,s,r),n.add(o),o}function mi(n,t,e,i=6){return new ft(n,t,e,i).translate(0,-e/2,0)}const Wr=n=>n,Te=1.6,qi=.21;function Cn(n,t,e=0){const i=(t-Te)/1.07;return-Math.sqrt(Math.max(0,qi*qi-n*n-i*i))*.98-e}const Ss=(n,t,e)=>(n.rotation.order="YXZ",n.rotation.y=Math.atan2(-t,-Cn(t,e)),n);function L_(n,t){Ft(n,new ft(.06,.07,.1,6),t.skin,0,1.4,0),Ft(n,new ke(qi,10,8),t.skin,0,Te,0).scale.set(1,1.07,.98);const e=Te+.02,i=.072,s=c=>t.extras.includes(c),r=t.hair==="white"?"paperShade":t.hair;for(const c of[-1,1]){const l=c*i;if(t.eyes==="sunglasses"){const u=Ft(n,new ft(.06,.06,.016,8),"ink",l,e,Cn(l,e,.012));Ss(u,l,e).rotation.x=Math.PI/2,u.scale.set(1.15,1,.85)}else if(t.eyes==="sleepy"){const u=Ft(n,new Ee(.05,.01,.01),"ink",l,e,Cn(l,e,.002));Ss(u,l,e)}else{const u=t.eyes==="wide"?.027:.02;if(Ft(n,new ke(u,6,5),"ink",l,e,Cn(l,e,-.004)).scale.set(1,1.35,.5),t.eyes==="wide"&&Ft(n,new ke(.008,4,3),"white",l+.008,e+.012,Cn(l+.008,e+.012,.006)),t.eyes==="glasses"){const f=Ft(n,new Ge(.045,.007,4,10),"ink",l,e,Cn(l,e,.012));Ss(f,l,e)}}if(s("brows")&&t.eyes!=="sunglasses"){const u=e+.055,h=Ft(n,new Ee(.055,.012,.012),r,l,u,Cn(l,u,.001));Ss(h,l,u).rotation.z=c*-.12}if(s("blush")){const u=c*.11,h=e-.055,f=Ft(n,new hs(.022,8),"pink",u,h,Cn(u,h,.002));Ss(f,u,h).rotation.y+=Math.PI}}if((t.eyes==="sunglasses"||t.eyes==="glasses")&&Ft(n,new Ee(.04,.008,.008),"ink",0,e+.01,Cn(0,e,.012)),s("moustache")){const c=Te-.065;Ft(n,new Ee(.1,.022,.02),t.hair,0,c,Cn(0,c,.004))}s("beard")&&Ft(n,new Ae(.13,0),t.hair,0,Te-.12,-.07).scale.set(1.15,.75,.85);const o=(c,l=1.06,u=.025)=>{const h=Ft(n,new ke(qi,9,4,0,Math.PI*2,0,Math.PI/2),c,0,Te+u,.012);return h.scale.set(l,l*1.05,l),h},a=()=>Ft(n,new Ae(.09,0),t.hair,0,Te+.155,-.12).scale.set(1.75,.5,.8);switch(t.hairStyle){case"cap":{o(t.hat,1.1);const c=M(n,t.hat,[-.14,-.012,-.16,.14,.012,0]);c.position.set(0,Te+.07,-qi-.05),c.rotation.x=-.12,Ft(n,new ke(.02,4,3),t.hat,0,Te+qi*1.15,.01);break}case"beanie":o(t.hat,1.12,.04).scale.y=1.35,Ft(n,new ft(.235,.235,.07,9),t.hat,0,Te+.07,.01),Ft(n,new Ae(.05,0),"white",0,Te+.33,.01);break;case"sides":for(const c of[-1,1])Ft(n,new Ae(.075,0),t.hair,c*.19,Te+.01,.03).scale.set(.6,1,1.3);Ft(n,new Ae(.09,0),t.hair,0,Te,.17).scale.set(1.8,.8,.6);break;case"bald":break;case"spiky":o(t.hair,1.04);for(let c=0;c<7;c++){const l=c/7*Math.PI*2;Ft(n,new $e(.05,.14,4),t.hair,Math.sin(l)*.1,Te+.2,Math.cos(l)*.1+.02).rotation.set(Math.cos(l)*.5,0,-Math.sin(l)*.5)}break;case"curly":for(let c=0;c<11;c++){const l=c/11*Math.PI*2;Ft(n,new Ae(.09,0),t.hair,Math.sin(l)*.17,Te+.1+c%2*.06,Math.cos(l)*.15+.03)}Ft(n,new Ae(.15,0),t.hair,0,Te+.18,.02);break;case"ponytail":o(t.hair),a(),Ft(n,new $e(.07,.35,5),t.hair,0,Te-.02,.26).rotation.x=-.5;break;case"long":o(t.hair),a(),Ft(n,new Ee(.36,.42,.12),t.hair,0,Te-.12,.15);break;case"bun":o(t.hair),a(),Ft(n,new Ae(.08,0),t.hair,0,Te+.17,.15);break;default:o(t.hair),a()}if(s("headphones")){const c=Ft(n,new Ge(.22,.015,4,10,Math.PI),"ink",0,Te+.02,.01);c.rotation.y=Math.PI/2;for(const l of[-1,1])Ft(n,new ft(.06,.06,.05,8),"red",l*.22,Te,.01).rotation.z=Math.PI/2}}function D_(n,t){const e=t.lower!=="trousers",i=Wr([-.1,.1].map(c=>{const l=new At;return l.position.set(c,.86,0),n.add(l),t.lower==="shorts"?(Ft(l,mi(.095,.085,.3),t.legs,0,0,0),Ft(l,mi(.06,.055,.5),t.skin,0,-.29,0)):e?Ft(l,mi(.06,.055,.78),t.skin,0,0,0):Ft(l,mi(.085,.07,.78),t.legs,0,0,0),M(l,t.shoes,[-.07,-.86,-.17,.07,-.76,.07]),l}));t.lower==="skirt"&&Ft(n,new ft(.18,.3,.42,7),t.legs,0,.7,0).scale.set(1,1,.8);const s=new gt(new ft(.26,.21,.56,7),Zt(t.outer));s.position.set(0,1.1,0),s.scale.set(t.width,1,.68),s.rotation.y=Math.PI/7,n.add(s);const r=t.width;if(t.top==="jacket"){M(n,t.inner,[-.075,.86,-.155,.075,1.36,-.13]);for(const c of[-1,1]){const l=M(n,t.outer,[-.035,-.17,-.012,.035,.17,.012]);l.position.set(c*.1,1.2,-.155),l.rotation.z=c*.25}}else if(t.top==="hoodie"){Ft(n,new Ge(.13,.06,5,8),t.outer,0,1.38,.04).rotation.x=Math.PI/2-.3,M(n,t.outer,[-.13,.92,-.165,.13,1.06,-.15]);for(const c of[-1,1])M(n,t.inner,[c*.05-.008,1.16,-.168,c*.05+.008,1.34,-.16])}else t.top==="sweater"?(Ft(n,new ft(.215*r,.215*r,.07,7),t.inner,0,.86,0).scale.set(1,1,.72),M(n,t.inner,[-.22*r,1.16,-.16,.22*r,1.21,-.14])):Ft(n,new ft(.1,.12,.04,8),t.inner,0,1.37,0).scale.set(1,1,.8);Ft(n,new ft(.2*r,.21*r,.06,7),t.legs,0,.86,0).scale.set(1,1,.7);const o=t.top==="tee",a=Wr([-1,1].map(c=>{const l=new At;return l.position.set(c*(.27*r+.03),1.32,0),n.add(l),Ft(l,new Ae(.1,0),t.outer,0,0,0),o?(Ft(l,mi(.095,.09,.2),t.outer,0,0,0),Ft(l,mi(.06,.055,.34),t.skin,0,-.18,0)):Ft(l,mi(.092,.075,.5),t.outer,0,0,0).rotation.z=c*.06,Ft(l,new Vs(.062,0),t.skin,c*.03,-.56,0).scale.set(.9,1.1,.9),l}));return{legs:i,arms:a}}function I_(n,t,e){for(const i of t.extras)if(i==="lanyard")M(n,"red",[-.07,1,-.17,.07,1.1,-.16]),M(n,"white",[-.05,.96,-.175,.05,1.04,-.17]);else if(i==="necklace"){for(const s of[-1,1]){const r=M(n,"white",[-.006,-.08,-.004,.006,.08,.004]);r.position.set(s*.035,1.28,-.16),r.rotation.z=s*.35}Ft(n,new ec(.02,0),"mustard",0,1.2,-.17)}else if(i==="backpack"){const s=t.outer==="red"?"teal":"red";M(n,s,[-.17,.9,.13,.17,1.32,.32]),M(n,s==="red"?"redDark":"tealDark",[-.12,.95,.32,.12,1.12,.36]);for(const r of[-1,1])M(n,s,[r*.13-.025,.95,-.17,r*.13+.025,1.34,-.15])}else if(i==="scarf")Ft(n,new Ge(.11,.05,5,8),"red",0,1.37,0).rotation.x=Math.PI/2,M(n,"red",[.04,1.05,-.2,.12,1.36,-.15]);else if(i==="bag")M(e[1],"woodDark",[-.09,-.85,-.12,.09,-.6,.12]),M(e[1],"ink",[-.01,-.6,-.06,.01,-.52,.06]);else if(i==="paint")for(const[s,r,o]of[[.12,1.1,"red"],[-.14,.95,"mustard"],[.05,.9,"teal"]])M(n,o,[s,r,-.175,s+.05,r+.04,-.17])}function Zh(n){const t=new At,{legs:e,arms:i}=D_(t,n);return L_(t,n),I_(t,n,i),t.scale.setScalar(n.height),t.position.y=P,{root:t,legs:e,arms:i}}const us="#1b1f33";function U_(n,t,e){const i=t?[440,430]:[430,440];n.fillStyle=us,n.fillRect(98,360,22,i[0]-360),n.fillRect(140,360,22,i[1]-360),n.beginPath(),n.ellipse(130,270,95,110,0,0,Math.PI*2),n.fillStyle=e[0],n.fill(),n.stroke(),n.beginPath(),n.moveTo(130,162),n.quadraticCurveTo(150,110,185,115),n.quadraticCurveTo(160,150,130,162),n.fillStyle=e[1],n.fill(),n.stroke(),Xs(n,130,250,1.1)}function N_(n,t,e){const i=t?18:-18;n.lineCap="round",n.lineWidth=14,n.strokeStyle=us;for(const[s,r]of[[112,1],[148,-1]])n.beginPath(),n.moveTo(s,330),n.quadraticCurveTo(s+i*r,390,s-i*r*.5,450),n.stroke();n.lineWidth=12;for(const s of[-1,1])n.beginPath(),n.moveTo(130+s*55,230),n.quadraticCurveTo(130+s*95,270+i*s,130+s*80,320),n.stroke();n.lineWidth=6,$i(n,70,210,120,130,30,e[0]),n.beginPath(),n.arc(130,150,62,0,Math.PI*2),n.fillStyle=e[2],n.fill(),n.stroke(),Xs(n,130,155,1),n.beginPath(),n.ellipse(130,100,90,18,0,0,Math.PI*2),n.fillStyle=e[1],n.fill(),n.stroke(),n.beginPath(),n.arc(130,98,48,Math.PI,0),n.fill(),n.stroke()}function F_(n,t,e){n.beginPath(),n.moveTo(45,400),n.lineTo(45,200),n.bezierCurveTo(45,60,215,60,215,200),n.lineTo(215,400);for(let i=0;i<5;i++)n.quadraticCurveTo(215-i*34-17,380+(i%2?0:30),215-(i+1)*34,400);n.closePath(),n.fillStyle=e[2],n.fill(),n.stroke();for(const[i,s]of[[90,t],[170,1-t]])$i(n,i-30,410-s*10,60,32,14,e[0]);Xs(n,130,200,1.2)}function k_(n,t,e){n.fillStyle=us,n.fillRect(95,360,24,t?85:75),n.fillRect(141,360,24,t?75:85),$i(n,60,220,140,150,14,e[0]),$i(n,90,260,80,50,8,e[1]),$i(n,70,100,120,110,20,e[2]),n.beginPath(),n.moveTo(130,100),n.lineTo(130,60),n.stroke(),n.beginPath(),n.arc(130,55,12,0,Math.PI*2),n.fillStyle=e[1],n.fill(),n.stroke(),Xs(n,130,155,1)}function O_(n,t,e){n.fillStyle=us,n.fillRect(100,350,22,t?95:85),n.fillRect(138,350,22,t?85:95),$i(n,65,210,130,150,40,e[0]);for(const i of[-1,1])n.beginPath(),n.moveTo(130+i*30,110),n.lineTo(130+i*62,55),n.lineTo(130+i*70,125),n.closePath(),n.fillStyle=e[2],n.fill(),n.stroke();n.beginPath(),n.ellipse(130,160,75,65,0,0,Math.PI*2),n.fillStyle=e[2],n.fill(),n.stroke(),Xs(n,130,160,1),n.lineWidth=3;for(const i of[-1,1])for(const s of[-6,6])n.beginPath(),n.moveTo(130+i*30,180+s),n.lineTo(130+i*70,176+s*2),n.stroke();n.lineWidth=6}function Xs(n,t,e,i){for(const s of[-1,1])n.beginPath(),n.ellipse(t+s*24*i,e-8*i,9*i,12*i,0,0,Math.PI*2),n.fillStyle=us,n.fill(),n.beginPath(),n.arc(t+s*24*i+3*i,e-12*i,3*i,0,Math.PI*2),n.fillStyle="#ffffff",n.fill();n.beginPath(),n.arc(t,e+12*i,16*i,.15*Math.PI,.85*Math.PI),n.stroke()}function $i(n,t,e,i,s,r,o){n.beginPath(),n.roundRect(t,e,i,s,r),n.fillStyle=o,n.fill(),n.stroke()}const Xl=[n=>({draw:(t,e)=>U_(t,e,ws(n)),colours:[]}),n=>({draw:(t,e)=>N_(t,e,ws(n)),colours:[]}),n=>({draw:(t,e)=>F_(t,e,ws(n)),colours:[]}),n=>({draw:(t,e)=>k_(t,e,ws(n)),colours:[]}),n=>({draw:(t,e)=>O_(t,e,ws(n)),colours:[]})];function ws(n){const t=["#ff8a5b","#7ed6c4","#ffd25a","#f59ac1","#9fb7ff","#b4e07a","#c7a6ff","#ffffff","#fbe2c8"],e=n(),i=s=>t[Math.floor((e*997+s*131)%1*t.length)%t.length];return[i(1),i(2),i(3)]}function z_(n){const t=Ws(n),e=Xl[Math.floor(t()*Xl.length)],i=t(),s=[0,1].map(u=>{const h=document.createElement("canvas");h.width=260,h.height=460;const f=h.getContext("2d");return f.lineWidth=6,f.lineJoin="round",f.strokeStyle=us,e(()=>i).draw(f,u),new ls(h)}),r=new fn({map:s[0],transparent:!0,alphaTest:.5,side:Ye}),o=1.75,a=new gt(new rn(o*260/460,o),r);a.position.y=o/2-.02;const c=new At;c.add(a),c.position.y=P;const l=()=>new Pe;return{root:c,legs:[l(),l()],arms:[l(),l()],card:{mesh:a,frames:s}}}const ql=new Map;function Wo(n){let t=ql.get(n);return t||ql.set(n,t=new Bh({color:Xi(n),shininess:70,specular:3355443,flatShading:!1})),t}const Yl=[{torso:"#f2f2f2",legs:"#f2f2f2",arms:"#f2f2f2",hands:"#dddddd",hat:"helmet",emblem:"#e4573d"},{torso:"#9aa3ad",legs:"#5b6470",arms:"#9aa3ad",hat:"knight",emblem:"#f2b234"},{torso:"#ffffff",legs:"#30364a",arms:"#ffffff",hat:"chef"},{torso:"#7a3b2e",legs:"#2b2f45",arms:"#f4ead5",hat:"pirate",emblem:"#f2b234"},{torso:"#2b9c8e",legs:"#1c6b63",arms:"#2b9c8e",hands:"#f2b234",mask:"#f2b234",cape:"#e4573d",emblem:"#f2b234"},{torso:"#b9c2cf",legs:"#7b8594",arms:"#b9c2cf",head:"#b9c2cf",hat:"antenna",emblem:"#2b9c8e"},{torso:"#e4573d",legs:"#25304f",arms:"#e4573d",hat:"hair",hairColour:"#3b2416"},{torso:"#4f8a49",legs:"#c27b4b",arms:"#4f8a49",hat:"cap"},{torso:"#2f6fd1",legs:"#25304f",arms:"#2f6fd1",hat:"hair",hairColour:"#f2b234"}];function B_(n,t=!1){const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d");n&&(i.fillStyle=n,i.beginPath(),i.roundRect(6,30,116,34,16),i.fill()),i.fillStyle=n?"#ffffff":"#1b1f33";for(const r of[44,84])i.beginPath(),i.ellipse(r,47,n?9:6,n?6:9,0,0,Math.PI*2),i.fill();return i.strokeStyle="#1b1f33",i.lineWidth=5,i.lineCap="round",i.beginPath(),t?(i.arc(64,72,20,.1*Math.PI,.9*Math.PI),i.closePath(),i.fillStyle="#1b1f33",i.fill()):i.arc(64,70,18,.18*Math.PI,.82*Math.PI),i.stroke(),new ls(e)}function H_(n,t,e,i){const s=new Ee(n,t,e),r=s.attributes.position;for(let o=0;o<r.count;o++)r.getY(o)>0&&r.setX(o,r.getX(o)*i);return s.computeVertexNormals(),s}function V_(n){const t=Ws(n),e=Yl[Math.floor(t()*Yl.length)],i=e.head??"#ffd23f",s=new At,r=(h,f,d,_,g,m)=>{const p=new gt(f,Wo(d));return p.position.set(_,g,m),h.add(p),p},o=Wr([-.105,.105].map(h=>{const f=new At;return f.position.set(h,.62,0),s.add(f),r(f,new Ee(.2,.52,.22),e.legs,0,-.3,.01),r(f,new Ee(.2,.1,.3),e.legs,0,-.57,-.03),f}));r(s,new Ee(.44,.1,.22),e.legs,0,.66,.01);const a=.5;if(r(s,H_(.46,a,.22,.72),e.torso,0,.71+a/2,.01),e.emblem){const h=r(s,new hs(.065,16),e.emblem,0,1,-.101);h.rotation.y=Math.PI}if(e.cape){const h=r(s,new rn(.42,.85),e.cape,0,.82,.135);h.material=Wo(e.cape).clone(),h.material.side=Ye,h.rotation.x=.1}const c=Wr([-1,1].map(h=>{const f=new At;f.position.set(h*.215,1.14,.01),s.add(f),r(f,new ke(.07,12,8),e.arms,0,0,0),r(f,new ft(.065,.06,.26,12),e.arms,0,-.13,0);const d=new At;return d.position.set(0,-.25,0),d.rotation.x=-.55,f.add(d),r(d,new ke(.06,10,8),e.arms,0,0,0),r(d,new ft(.06,.058,.2,12),e.arms,0,-.1,0),r(d,new ft(.03,.03,.05,10),e.hands??i,0,-.22,0),r(d,new Ge(.05,.026,10,16,Math.PI*1.45),e.hands??i,0,-.28,0).rotation.set(0,Math.PI/2,Math.PI*.27+Math.PI/2),f.rotation.z=h*.26,f}));c.forEach(h=>h.rotation.x=-.15),r(s,new ft(.075,.075,.05,14),i,0,1.24,.01);const l=[new ot(0,0),new ot(.125,0),new ot(.148,.025),new ot(.15,.06),new ot(.15,.2),new ot(.148,.235),new ot(.125,.26),new ot(0,.26)];r(s,new tc(l,24),i,0,1.265,.01),r(s,new ft(.075,.075,.06,16),i,0,1.555,.01);const u=new gt(new ft(.152,.152,.2,16,1,!0,Math.PI-.95,1.9),new fn({map:B_(e.mask,t()<.4),transparent:!0}));if(u.position.set(0,1.395,.01),s.add(u),e.hat==="helmet"){const h=new gt(new ke(.23,20,14),new Bh({color:13627135,transparent:!0,opacity:.22,shininess:140,depthWrite:!1}));h.position.set(0,1.4,.01),s.add(h);const f=r(s,new Ge(.2,.035,10,24),"#f2f2f2",0,1.24,.01);f.rotation.x=Math.PI/2,r(s,new Ee(.3,.32,.12),"#f2f2f2",0,.98,.17)}else if(e.hat==="knight"){const h=new gt(new ft(.17,.17,.3,20,1,!0,Math.PI*.75,Math.PI*1.5),Wo("#9aa3ad").clone());h.material.side=Ye,h.position.set(0,1.4,.01),s.add(h);const f=r(s,new ke(.17,20,10,0,Math.PI*2,0,Math.PI/2),"#9aa3ad",0,1.55,.01);f.scale.y=.6,r(s,new Ee(.03,.16,.26),"#e4573d",0,1.7,.03)}else if(e.hat==="chef"){r(s,new ft(.16,.16,.08,20),"#ffffff",0,1.56,.01);const h=r(s,new ke(.2,16,10),"#ffffff",0,1.7,.01);h.scale.y=.75}else if(e.hat==="pirate"){const h=r(s,new ft(.1,.24,.13,3),"#25304f",0,1.6,.01);h.rotation.y=Math.PI/2}else if(e.hat==="antenna")r(s,new ft(.012,.012,.18,6),"#7b8594",.08,1.66,.01),r(s,new ke(.03,10,8),"#e4573d",.08,1.76,.01);else if(e.hat==="cap"){const h=r(s,new ke(.16,20,10,0,Math.PI*2,0,Math.PI/2),e.torso,0,1.5,.01);h.scale.y=.7,r(s,new Ee(.22,.02,.14),e.torso,0,1.52,-.15)}else if(e.hat==="hair"){const h=r(s,new ke(.162,20,12,0,Math.PI*2,0,Math.PI*.62),e.hairColour??"#6f3820",0,1.47,.02);h.scale.y=.85}return s.position.y=P,{root:s,legs:o,arms:c}}function Kh(n,t=1){const e=C_(t);if(e==="cartoon"&&typeof document<"u")return z_(t);const i=e==="brick"?V_(t):Zh(P_(n,t));return i.hipY=i.legs[0].position.y*i.root.scale.y,i}function G_(){const n={height:1.02,width:1.05,skin:"skin2",hair:"inkSoft",hairStyle:"short",hat:"ink",eyes:"glasses",top:"jacket",outer:"ink",inner:"white",lower:"trousers",legs:"ink",shoes:"inkSoft",extras:["brows"]},{root:t,arms:e}=Zh(n);t.position.y=0,M(t,"red",[-.025,.98,-.165,.025,1.34,-.158]),M(t,"redDark",[-.035,1.3,-.168,.035,1.36,-.16]),e[1].rotation.x=-1.1;const i=M(e[1],"tealDark",[-.13,-.02,-.2,.13,0,0]);return i.position.set(-.1,-.52,-.05),i.rotation.x=1.1,t}const Zl=new Map;function Zt(n){let t=Zl.get(n);return t||Zl.set(n,t=new kr({color:Vn(n),flatShading:!0})),t}function M(n,t,e){const[i,s,r,o,a,c]=Array.isArray(e)?e:[e.min.x,e.min.y,e.min.z,e.max.x,e.max.y,e.max.z],l=new gt(new Ee(Math.abs(o-i),Math.abs(a-s),Math.abs(c-r)),Zt(t));return l.position.set((i+o)/2,(s+a)/2,(r+c)/2),n.add(l),l}const Yt=sn.length/2,zt=sn.depth/2,qe=sn.height,en=.08;function W_(n,t){const e=bi().machine;if(M(n,e===0?"woodDark":e===1?"red":"white",[t.min.x,t.min.y,t.min.z,t.max.x,t.max.y-.08,t.max.z]),M(n,e===2?"tealLight":"paperShade",[t.min.x+.04,t.max.y-.08,t.min.z+.04,t.max.x-.04,t.max.y,t.max.z-.04]),e===0)M(n,"redDark",[t.min.x+.05,t.min.y+.3,t.min.z-.012,t.min.x+.2,t.min.y+.4,t.min.z]),M(n,"inkSoft",[t.max.x-.2,t.max.y-.3,t.min.z-.01,t.max.x-.05,t.max.y-.2,t.min.z]);else{const s=new gt(new ft(.06,.06,.02,12),Zt(e===2?"mustard":"white"));s.rotation.x=Math.PI/2,s.position.set((t.min.x+t.max.x)/2,t.max.y-.2,t.min.z-.005),n.add(s)}e===2&&(M(n,"tealLight",[t.min.x+.12,t.max.y-.3,t.min.z-.012,t.max.x-.12,t.max.y-.26,t.min.z]),M(n,"inkSoft",[t.max.x-.03,t.min.y+.1,t.min.z+.1,t.max.x+.02,t.max.y-.2,t.min.z+.14]));for(const s of[t.min.x+.15,t.max.x-.15])M(n,"ink",[s-.05,t.min.y+.16,t.min.z-.06,s+.05,t.min.y+.22,t.min.z]),M(n,"white",[s-.04,t.min.y,t.min.z-.05,s+.04,t.min.y+.08,t.min.z+.03])}function X_(n){const t=bi().plants;if(t===0)return;const e=t===1?[[.9,zt-.25]]:[[.9,zt-.25],[1.5,zt-.25]];for(const[i,s]of e)M(n,"redDark",[i-.09,.95,s-.09,i+.09,1.1,s+.09]),M(n,"grass",[i-.07,1.1,s-.07,i+.07,1.2,s+.07]),M(n,"grassDark",[i-.04,1.2,s-.04,i+.04,1.26,s+.04]),M(n,"grass",[i-.12,1.12,s-.02,i-.07,1.16,s+.02]),M(n,"grass",[i+.07,1.12,s-.02,i+.12,1.16,s+.02])}function q_(n){const t=bi().till,e=Dt.tablet,i=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2;if(t===0){const o=new At;M(o,"woodDark",[-.16,-.12,-.01,.16,.12,.01]),M(o,"paper",[-.14,-.1,.01,.14,.1,.018]);for(let a=0;a<4;a++)M(o,"inkSoft",[-.11,.06-a*.045,.018,.02+a%2*.07,.068-a*.045,.021]);M(o,"red",[.06,-.09,.018,.12,-.07,.021]),o.position.set(i,e.min.y+.1,s),o.rotation.x=-1,n.add(o),M(n,"paperShade",[i+.18,e.min.y,s-.1,i+.3,e.min.y+.012,s+.02]);return}if(t===2){M(n,"ink",[i-.12,e.min.y,s-.05,i+.12,e.min.y+.03,s+.07]),M(n,"inkSoft",[i-.03,e.min.y+.03,s-.01,i+.03,e.min.y+.2,s+.02]);const o=new At;M(o,"ink",[-.27,-.16,-.015,.27,.16,.015]),M(o,"tealDark",[-.25,-.14,.015,.25,.14,.02]),M(o,"mustard",[-.22,.07,.02,-.04,.095,.022]);for(let a=0;a<3;a++)M(o,"tealLight",[-.22,.03-a*.045,.02,.12-a*.05,.048-a*.045,.022]);M(o,"pink",[.14,-.12,.02,.22,.04,.022]),o.position.set(i,e.min.y+.36,s+.02),o.rotation.x=-.12,n.add(o),M(n,"inkSoft",[i-.2,e.min.y,s+.14,i+.2,e.min.y+.025,s+.24]),M(n,"paperShade",[i-.18,e.min.y+.025,s+.15,i+.18,e.min.y+.03,s+.23]);return}M(n,"ink",[e.min.x+.15,e.min.y,e.min.z+.06,e.max.x-.15,e.min.y+.08,e.max.z-.06]);const r=new At;M(r,"ink",[-.18,-.12,-.012,.18,.12,.012]),M(r,"tealDark",[-.16,-.1,.012,.16,.1,.016]),M(r,"mustard",[-.13,.05,.016,-.02,.065,.018]),M(r,"tealLight",[-.13,.02,.016,.1,.03,.018]),M(r,"tealLight",[-.13,-.01,.016,.06,0,.018]),r.position.set(i,e.min.y+.14,s),r.rotation.x=-.5,n.add(r)}function Y_(n){const t=bi().board,e=Dt.menuBoard;M(n,t===3?"white":"woodDark",[e.min.x-.04,e.min.y-.04,e.min.z-.01,e.max.x+.04,e.max.y+.04,e.max.z]),M(n,t===0?"paperShade":t===3?"inkSoft":"ink",[e.min.x,e.min.y,e.min.z-.02,e.max.x,e.max.y,e.max.z-.005]);const r=e.min.z-.03,o=e.min.z-.02;if(t===0){for(let a=0;a<4;a++)M(n,"inkSoft",[e.min.x+.08,e.max.y-.2-a*.13,r,e.min.x+.3+a%3*.14,e.max.y-.17-a*.13,o]);M(n,"wood",[e.min.x+.45,e.min.y+.15,r,e.min.x+.7,e.min.y+.3,o]),M(n,"woodDark",[e.max.x-.12,e.max.y-.12,r,e.max.x,e.max.y,o]);return}if(t===1){for(let a=0;a<5;a++)M(n,"paper",[e.min.x+.08,e.max.y-.2-a*.12,r,e.min.x+.45+a%3*.12,e.max.y-.17-a*.12,o]);return}M(n,t===3?"tealLight":"mustard",[e.min.x+.2,e.max.y-.14,r,e.max.x-.2,e.max.y-.1,o]);for(let a=0;a<5;a++){const c=e.max.y-.24-a*.1;M(n,t===3?"tealLight":"paper",[e.min.x+.08,c,r,e.min.x+.45+a%3*.12,c+.03,o]),M(n,a%2?"pink":t===3?"mustard":"tealLight",[e.max.x-.22,c,r,e.max.x-.08,c+.03,o])}t===3&&M(n,"tealLight",[e.min.x+.02,e.min.y+.02,r,e.max.x-.02,e.min.y+.05,o])}function Z_(n){const t=-Yt-en-1.15;M(n,"woodDark",[t+.04,-.09,-zt+.02,-Yt,0,zt-.02]),M(n,"inkSoft",[t+.2,0,0,t+.6,.012,.6]),M(n,"inkSoft",[t+.04,.78,-zt+.04,t+.3,1.02,zt-.04]),M(n,"ink",[t+.3,.98,-zt+.04,t+.34,1.02,zt-.04]),M(n,"woodDark",[t+.3,.8,-.9,t+.32,.95,-.2]),M(n,"tealLight",[t+.3,.88,.1,t+.32,.96,.3]);for(const s of[.56,.68])M(n,"mustard",[t+.3,.88,s-.05,t+.32,.93,s+.05]);M(n,"red",[t+.3,.86,.75,t+.32,.92,.8]);const e=new gt(new Ge(.17,.022,6,18),Zt("ink"));e.position.set(t+.5,.98,.4),e.rotation.y=Math.PI/2,e.rotation.x=.35,n.add(e),M(n,"inkSoft",[t+.34,.9,.38,t+.5,.94,.42]),M(n,"mustard",[t+.495,.95,.37,t+.51,1.01,.43]);for(const s of[.4,-.4])M(n,"redDark",[t+.72,.38,s-.22,t+1.05,.5,s+.22]),M(n,"red",[t+1.02,.5,s-.22,t+1.09,1.2,s+.22]),M(n,"redDark",[t+.99,1,s-.12,t+1.07,1.3,s+.12]),M(n,"inkSoft",[t+.8,0,s-.04,t+.95,.38,s+.04]);M(n,"ink",[t+.55,0,-.02,t+.65,.4,.02]),M(n,"mustard",[t+.54,.4,-.04,t+.66,.46,.04]),M(n,"ink",[t+.12,1.88,-.1,t+.16,1.94,.1]),M(n,"pink",[t+.12,1.66,0,t+.17,1.8,.06]),M(n,"white",[t+.85,.5,-.45,t+.93,.62,-.37]);const i=new Vh(16773328,.9,3.2);i.position.set(t+.7,1.9,0),n.add(i)}function K_(n){M(n,"teal",[-1.1,.002,-.55,1.1,.008,.55]),M(n,"paper",[-1,.008,-.45,1,.012,.45]);for(const s of[-1.2,1.2]){M(n,"inkSoft",[s-.02,qe-.2,-.02,s+.02,qe,.02]);const r=new gt(new ft(.08,.17,.12,10),Zt("mustard"));r.position.set(s,qe-.24,0),n.add(r),M(n,"paper",[s-.07,qe-.31,-.07,s+.07,qe-.29,.07])}M(n,"inkSoft",[-2,1.72,zt-.05,-1.4,1.74,zt-.03]);const t=[[-1.92,"wood",.3],[-1.78,"inkSoft",.34],[-1.64,"redDark",.26],[-1.5,"teal",.3]];for(const[s,r,o]of t)M(n,r,[s-.02,1.72-o,zt-.06,s+.02,1.72,zt-.04]);const e=new gt(new ft(.07,.07,.4,10),Zt("red"));e.position.set(Yt-.12,.75,.8),n.add(e),M(n,"ink",[Yt-.16,.95,.77,Yt-.08,1,.83]),M(n,"tealLight",[Yt-.3,0,-.95,Yt-.1,.25,-.75]),M(n,"wood",[Yt-.21,.25,-.86,Yt-.19,1.3,-.84]),M(n,"paperShade",[Yt-.27,1.2,-.9,Yt-.13,1.3,-.8]);const i=Dt.backCounter;for(const[s,r]of[[-.9,"wood"],[.2,"woodDark"],[1.3,"wood"]])M(n,r,[s,0,i.min.z-.02,s+.5,.32,i.min.z+.38]),M(n,"mustard",[s+.05,.32,i.min.z+.05,s+.45,.4,i.min.z+.35])}function $_(){const n=new At,t=Dt.window;M(n,"wood",[-Yt,-.1,-zt,Yt,0,zt]);for(let U=-Yt+.413;U<Yt-.1;U+=.4)M(n,"woodDark",[U,0,-zt,U+.02,.003,zt]);M(n,"inkSoft",[-Yt,qe,-zt,Yt,qe+.1,zt]);for(let U=-2;U<=2;U+=2)M(n,"mustard",[U-.3,qe-.04,-.1,U+.3,qe,.1]);M(n,"paper",[-Yt,0,-zt-en,t.min.x,qe,-zt]),M(n,"paper",[t.max.x,0,-zt-en,Yt,qe,-zt]),M(n,"paper",[t.min.x,t.max.y,-zt-en,t.max.x,qe,-zt]),M(n,"teal",[t.min.x,0,-zt-en,t.max.x,t.min.y,-zt]),M(n,"ink",[t.min.x-.05,t.max.y-.01,-zt-.02,t.max.x+.05,t.max.y+.12,-zt+.02]),M(n,"ink",[t.min.x-.05,t.min.y,-zt-.02,t.min.x+.01,t.max.y,-zt+.02]),M(n,"ink",[t.max.x-.01,t.min.y,-zt-.02,t.max.x+.05,t.max.y,-zt+.02]);const e=Dt.door;for(const[U,Z,it,et]of[[-Yt,zt,Yt,zt+en],[-Yt-en,-zt,-Yt,Dt.cabOpening.min.z],[-Yt-en,Dt.cabOpening.max.z,-Yt,zt],[Yt,-zt,Yt+en,e.min.z],[Yt,e.max.z,Yt+en,zt]])M(n,"paper",[U,.9,Z,it,qe,et]),M(n,"teal",[U,0,Z,it,.9,et]);M(n,"paper",[Yt,e.max.y,e.min.z,Yt+en,qe,e.max.z]);const i=Dt.cabOpening;M(n,"paper",[-Yt-en,i.max.y,i.min.z,-Yt,qe,i.max.z]),M(n,"woodDark",[-Yt-en-.02,i.max.y-.06,i.min.z-.04,-Yt+.02,i.max.y,i.max.z+.04]),Z_(n),K_(n),M(n,"inkSoft",[Yt+en,-.08,-.55,Yt+.75,0,.55]);const s=Dt.frontCounter;M(n,"wood",[s.min.x,0,s.min.z,s.max.x,s.max.y-.04,s.max.z]),M(n,"white",[s.min.x-.02,s.max.y-.04,s.min.z-.05,s.max.x+.02,s.max.y,s.max.z+.03]);for(let U=s.min.x+.1;U<s.max.x-.5;U+=.6)M(n,"woodDark",[U,.12,s.max.z,U+.5,.8,s.max.z+.01]);q_(n);const r=Dt.tipJar,o=new gt(new ft(.08,.08,.2,10),Zt("tealLight"));o.position.set((r.min.x+r.max.x)/2,1.1,(r.min.z+r.max.z)/2),n.add(o),M(n,"mustard",[o.position.x-.06,1,o.position.z-.06,o.position.x+.06,1.08,o.position.z+.06]),M(n,"red",[-.55,1,-zt+.15,-.4,1.12,-zt+.3]);const a=new gt(new Ae(.11,0),Zt("grassDark"));a.position.set(-.475,1.2,-zt+.225),n.add(a);const c=Dt.fridge;M(n,"tealLight",c),M(n,"white",[c.max.x,.15,c.min.z+.05,c.max.x+.01,1.85,c.max.z-.05]);const l=["white","mustard","pink","red","teal","white"];for(let U=0;U<4;U++){const Z=.3+U*.4;M(n,"inkSoft",[c.max.x+.01,Z-.02,c.min.z+.08,c.max.x+.05,Z,c.max.z-.08]);for(let it=0;it<3;it++){const et=c.min.z+.12+it*.1;M(n,l[(it+U)%l.length],[c.max.x+.01,Z,et,c.max.x+.07,Z+.22+it%2*.04,et+.07])}}M(n,"mustard",[c.max.x+.01,1,c.max.z-.06,c.max.x+.05,1.5,c.max.z-.03]);const u=Dt.stockShelves;for(let U=0;U<3;U++){const Z=.35+U*.6;M(n,"woodDark",[u.min.x,Z-.04,u.min.z,u.max.x,Z,u.max.z]);for(let it=0;it<2;it++){const et=u.min.z+.08+it*.36;if((it+U)%3===2){const Rt=new gt(new Vs(.16,0),Zt("wood"));Rt.scale.set(1.1,1.3,1),Rt.position.set(u.min.x+.28,Z+.18,et+.15),n.add(Rt)}else M(n,"mustard",[u.min.x+.08,Z,et,u.max.x-.04,Z+.3+it%2*.08,et+.3])}}const h=Dt.backCounter;M(n,"wood",[h.min.x,0,h.min.z,h.max.x,h.max.y-.04,h.max.z]),M(n,"white",[h.min.x-.02,h.max.y-.04,h.min.z-.03,h.max.x+.02,h.max.y,h.max.z]);const f=Dt.coffeeMachine;W_(n,f),X_(n),Y_(n);const d=Dt.recipeShelf;M(n,"woodDark",[d.min.x-.05,d.min.y-.04,d.min.z,d.max.x+.05,d.min.y,d.max.z]);const _=["red","teal","mustard","red","inkSoft","teal"];for(let U=0;U<6;U++){const Z=d.min.x+.02+U*.095;M(n,_[U],[Z,d.min.y,d.min.z+.04,Z+.08,d.max.y-U%3*.03,d.max.z-.02])}const g=new gt(new ft(le.r,le.r,.03,16),Zt("white"));g.rotation.x=Math.PI/2,g.position.set(le.x,le.y,le.z-.02),n.add(g);const m=(U,Z)=>{const it=new Ee(.016,U,.01).translate(0,U/2,0),et=new gt(it,Zt(Z));return et.position.set(le.x,le.y,le.z-.045),n.add(et),et},p=new gt(new Ge(le.r,.014,4,24),Zt("ink"));p.position.set(le.x,le.y,le.z-.036),n.add(p);for(let U=0;U<12;U++){const Z=U/12*Math.PI*2,it=U%3===0,et=new gt(new ft(it?.014:.008,it?.014:.008,.006,8),Zt(it?"red":"ink"));et.rotation.x=Math.PI/2,et.position.set(le.x-Math.sin(Z)*le.r*.8,le.y+Math.cos(Z)*le.r*.8,le.z-.038),n.add(et)}const x=new gt(new ft(.014,.014,.01,8),Zt("ink"));x.rotation.x=Math.PI/2,x.position.set(le.x,le.y,le.z-.052),n.add(x);const y=m(.08,"ink"),v=m(.12,"red");n.userData.setClock=U=>{y.rotation.z=U/60%12/12*Math.PI*2,v.rotation.z=U%60/60*Math.PI*2},n.userData.setClock(600);const I=Dt.door,A=new At;A.position.set(I.min.x,0,I.min.z);const C=U=>[U[0]-I.min.x,U[1],U[2]-I.min.z,U[3]-I.min.x,U[4],U[5]-I.min.z];M(A,"inkSoft",C([I.min.x-.02,I.min.y,I.min.z,I.max.x,I.max.y,I.max.z])),M(A,"peach",C([I.min.x-.03,1.3,-.25,I.min.x-.02,1.8,.25])),M(A,"mustard",C([I.min.x-.03,1.05,-.3,I.min.x-.02,1.15,.3])),M(A,"mustard",C([I.min.x-.08,.95,.32,I.min.x-.02,1,.42])),n.add(A),n.userData.setDoor=(U,Z)=>{const it=Z===void 0?0:Math.sin(Z*40)*.025*(Z%1.6<.45?1:0);A.rotation.y=U*1.35+it};const D=Dt.guideBook,b=(D.min.x+D.max.x)/2,w=D.min.z+.17,L=new At;L.position.set(b,D.min.y,w),L.rotation.y=.15,M(L,"red",[-.17,0,-.12,.17,.02,.12]);for(const U of[-1,1]){const Z=M(L,"white",[-.15,0,-.11,0,.012,.11]);Z.position.set(U*.078,.026,0),Z.rotation.z=U*-.12;for(let it=0;it<4;it++){const et=M(L,"inkSoft",[-.11,0,-.002,-.03,.004,.006]);et.position.set(U*.078,.036,-.07+it*.04),et.rotation.z=U*-.12}}n.add(L),n.add(J_(b,D.max.y-.06,D.max.z-.02));const V=Dt.phone,B=new At;B.position.set((V.min.x+V.max.x)/2,V.min.y,(V.min.z+V.max.z)/2),B.rotation.y=-.2,M(B,"red",[-.15,0,-.11,.15,.06,.11]),M(B,"ink",[-.17,.06,-.04,.17,.095,.04]);for(const U of[-.17,.17])M(B,"ink",[U-.03,.06,-.05,U+.03,.12,.05]);for(let U=0;U<3;U++)for(let Z=0;Z<3;Z++)M(B,"paper",[-.07+Z*.05,.06,-.09+U*.045,-.04+Z*.05,.068,-.056+U*.045]);n.add(B);const W=Dt.calendar,j=new At;j.position.set((W.min.x+W.max.x)/2,(W.min.y+W.max.y)/2,W.min.z-.01),M(j,"white",[-.26,-.34,-.012,.26,.34,.004]),M(j,"red",[-.25,.2,-.016,.25,.33,.002]);for(let U=0;U<4;U++)for(let Z=0;Z<5;Z++)M(j,"inkSoft",[-.2+Z*.082,-.27+U*.1,-.016,-.14+Z*.082,-.2+U*.1,-.012]);n.add(j);const X=Dt.badgeBoard,nt=new At;nt.position.set((X.min.x+X.max.x)/2,(X.min.y+X.max.y)/2,X.max.z+.01),M(nt,"woodDark",[-.45,-.35,-.02,.45,.35,.02]),M(nt,"wood",[-.41,-.31,.015,.41,.31,.03]);const q=[[-.25,.1,"red"],[0,.12,"teal"],[.25,.08,"red"],[-.12,-.12,"teal"],[.15,-.14,"white"]];for(const[U,Z,it]of q)M(nt,it,[U-.08,Z-.08,.03,U+.08,Z+.08,.045]);n.add(nt);const ct=Dt.radio,at=new At;at.position.set((ct.min.x+ct.max.x)/2,ct.min.y,(ct.min.z+ct.max.z)/2),at.rotation.y=.12,M(at,"teal",[-.19,.025,-.08,.19,.2,.08]),M(at,"tealDark",[-.2,0,-.09,.2,.025,.09]);const wt=new gt(new ft(.065,.065,.01,10),Zt("inkSoft"));wt.rotation.x=Math.PI/2,wt.position.set(-.08,.1,-.082),at.add(wt);for(let U=-2;U<=2;U++)M(at,"ink",[-.13,.1+U*.02-.004,-.09,-.03,.1+U*.02+.004,-.086]);M(at,"paper",[.02,.11,-.085,.16,.16,-.08]),M(at,"red",[.07,.11,-.087,.08,.16,-.084]);const Ht=new gt(new ft(.025,.025,.02,8),Zt("mustard"));Ht.rotation.x=Math.PI/2,Ht.position.set(.09,.06,-.085),at.add(Ht);for(const U of[-.14,.14])M(at,"ink",[U-.01,.2,-.01,U+.01,.26,.01]);M(at,"ink",[-.14,.25,-.01,.14,.27,.01]);const oe=M(at,"inkSoft",[-.004,0,-.004,.004,.32,.004]);return oe.position.set(.16,.2,.04),oe.rotation.z=-.5,n.add(at),M(n,"teal",[Yt-.02,.9,-.95,Yt-.01,1.6,-.65]),n}function J_(n,t,e){const i=new At;i.position.set(n,t,e);const s=document.createElement("canvas");s.width=256,s.height=96;const r=s.getContext("2d");r&&(r.fillStyle="#f2b234",r.fillRect(0,0,256,96),r.fillStyle="#25304f",r.font="bold 44px system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("GUIDE ?",128,50));const o=new ls(s),a=new gt(new rn(.26,.1),new fn({map:o}));return a.rotation.set(-.25,Math.PI,0),i.add(a),M(i,"woodDark",[-.01,-.12,.01,.01,-.04,.03]),i}function It(n,t,e,i,s,r){const o=new gt(t,typeof e=="string"?Zt(e):e);return o.position.set(i,s,r),n.add(o),o}function ks(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Kl={mustard:Vn("mustard"),red:Vn("red")},Xr=new Bt("#e9e2cf"),ss={mustard:new fn({color:Xr.clone()}),red:new fn({color:Xr.clone()})};function qs(n,t,e=1){const i=ks(Math.floor(e*9301+t*49297)),s=["teal","tealDark","grass","grassDark"],r=s[Math.floor(i()*s.length)],o=(1.1+i()*.8)*t,a=i();if(It(n,new ft(.1*t,.16*t,o,6),"woodDark",0,o/2,0),a<.25)for(let c=0;c<3;c++){const l=It(n,new $e((1.1-c*.28)*t,1.2*t,7),r==="grass"?"tealDark":r,0,o+(.3+c*.65)*t,0);l.rotation.y=i()*Math.PI}else if(a<.6){const c=2+Math.floor(i()*2);for(let l=0;l<c;l++){const u=l/c*Math.PI*2+i();It(n,new Ae((.65+i()*.35)*t,0),r,Math.cos(u)*.45*t,o+(.45+i()*.5)*t,Math.sin(u)*.45*t).rotation.set(i(),i(),i())}}else{const c=It(n,new Ae((.9+i()*.45)*t,0),r,0,o+.55*t,0);c.scale.set(1,.8+i()*.5,1),c.rotation.y=i()*Math.PI}n.rotation.z=(i()-.5)*.08}function oc(n,t,e="ink"){for(let i=1;i<t.length;i++){const s=t[i-1],r=t[i],o=s.distanceTo(r),a=new gt(new ft(.012,.012,o,4),Zt(e));a.position.copy(s).add(r).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new R(0,1,0),r.clone().sub(s).normalize()),n.add(a)}}function ac(n,t,e,i=14){return Array.from({length:i+1},(s,r)=>{const o=r/i,a=new R().lerpVectors(n,t,o);return a.y-=Math.sin(o*Math.PI)*e,a})}function Ys(n,t){It(n,new Ae(.6*t,0),"grassDark",0,.45*t,0).scale.set(1.1,.75,1)}function cc(n){M(n,"wood",[-.8,.42,-.22,.8,.48,.22]),M(n,"wood",[-.8,.55,.18,.8,.85,.24]),M(n,"ink",[-.7,0,-.2,-.64,.42,.2]),M(n,"ink",[.64,0,-.2,.7,.42,.2])}function j_(n){M(n,"wood",[-.9,.72,-.4,.9,.78,.4]),M(n,"woodDark",[-.9,.42,-.85,.9,.46,-.6]),M(n,"woodDark",[-.9,.42,.6,.9,.46,.85]),M(n,"ink",[-.7,0,-.06,-.62,.72,.06]),M(n,"ink",[.62,0,-.06,.7,.72,.06]);for(const t of[-.7,.62]){for(const e of[-.77,.69])M(n,"ink",[t,0,e,t+.08,.42,e+.08]);M(n,"inkSoft",[t+.01,.16,-.76,t+.07,.22,.76])}M(n,"ink",[-.02,.78,-.02,.02,2.1,.02]),It(n,new $e(1.2,.5,8),"red",0,2.1,0),It(n,new $e(.5,.22,8),"white",0,2.28,0)}function lc(n){M(n,"ink",[-.05,0,-.05,.05,3.2,.05]),It(n,new ke(.2,8,6),ss.mustard,0,3.3,0)}function Q_(n){It(n,new ft(.25,.22,.8,8),"teal",0,.4,0),It(n,new ft(.27,.27,.06,8),"tealDark",0,.82,0)}function tx(n){for(let s=0;s<7;s++){const r=s/7*(Math.PI/2),o=(s+1)/7*(Math.PI/2),a=-Math.sin(r)*1.4,c=1.4-Math.cos(r)*1.4,l=-Math.sin(o)*1.4,u=1.4-Math.cos(o)*1.4,h=Math.hypot(l-a,u-c)+.02,f=new gt(new Ee(3.2,.08,h),Zt(s%2?"concrete":"tealLight"));f.position.set(0,(c+u)/2,(a+l)/2),f.rotation.x=-Math.atan2(u-c,a-l),n.add(f)}for(const s of[-3.2/2,3.2/2-.08])for(let r=0;r<4;r++)M(n,"concrete",[s,0,-1.4+r*.25,s+.08,1.4-r*.38,-1.4+(r+1)*.25]);M(n,"concrete",[-3.2/2,0,-1.4-1.4,3.2/2,1.4,-1.4]),M(n,"red",[-3.2/2-.01,.3,-1.4-1.2,-3.2/2,1,-1.4-.3]),It(n,new ft(.045,.045,3.2,6),"inkSoft",0,1.4+.03,-1.4).rotation.z=Math.PI/2;for(const s of[-3.2/2+.05,3.2/2-.05])M(n,"ink",[s-.03,1.4,-1.4-1.4,s+.03,1.4+1,-1.4-1.34]);M(n,"ink",[-3.2/2,1.4+.95,-1.4-1.4,3.2/2,1.4+1,-1.4-1.34])}function ex(n){M(n,"pink",[-1,0,-.6,1,.5,.6]);for(const t of[-1,1]){const e=new gt(new Ee(1,.06,1.2),Zt("lilac"));e.position.set(t*1.45,.25,0),e.rotation.z=t*-.47,n.add(e)}M(n,"mustard",[-1,.5,-.62,1,.52,-.58]),It(n,new ft(.03,.03,2,6),"inkSoft",0,.54,0).rotation.z=Math.PI/2}function nx(n){for(const t of[-1.1,1.1])M(n,"ink",[t-.04,0,-.04,t+.04,.45,.04]);It(n,new ft(.035,.035,2.6,8),"mustard",0,.47,0).rotation.z=Math.PI/2}function $h(n,t){It(n,new ft(.55,.6,7,10),"concrete",0,3.5,0);const e=["red","mustard","teal","pink","lilac"];for(let i=0;i<3;i++){const s=It(n,new ft(.62,.62,.25+t()*.4,10,1,!0,t()*6,1.5+t()*2),e[Math.floor(t()*e.length)],0,.6+i*.7+t()*.3,0);s.material.side=Ye}}function ix(n){M(n,"inkSoft",[-.07,0,.55,.07,3,.69]),M(n,"inkSoft",[-.05,2.9,.1,.05,3,.6]),M(n,"white",[-.9,2.6,.06,.9,3.6,.12]),M(n,"red",[-.3,2.75,.05,.3,3.15,.06]);const t=new gt(new Ge(.23,.025,4,12),Zt("red"));t.rotation.x=Math.PI/2,t.position.set(0,3.05,-.25),n.add(t),M(n,"red",[-.03,3.03,-.06,.03,3.07,.06]);const e=new gt(new ft(.23,.15,.4,10,2,!0),new fn({color:16775920,wireframe:!0}));e.position.set(0,2.85,-.25),n.add(e)}function $l(n,t,e){for(const s of[-.5,.5]){const r=new gt(new Ge(.32,.035,4,12),Zt("ink"));r.rotation.y=Math.PI/2,r.position.set(t,.34,s),n.add(r)}const i=new gt(new Ee(.05,.05,1),Zt(e));i.position.set(t,.62,0),n.add(i),M(n,e,[t-.025,.34,.1,t+.025,.65,.15]),M(n,"ink",[t-.06,.66,.08,t+.06,.7,.28]),M(n,"inkSoft",[t-.25,.82,-.45,t+.25,.85,-.42]),M(n,e,[t-.02,.6,-.445,t+.02,.84,-.425])}function sx(n){for(const t of[-.6,0,.6]){const e=new gt(new Ge(.35,.03,4,10,Math.PI),Zt("inkSoft"));e.rotation.y=Math.PI/2,e.position.set(t,0,0),n.add(e)}$l(n,-.3,"red"),$l(n,.3,"teal")}function rx(n){It(n,new ft(.05,.06,7,6),"white",0,3.5,0),M(n,"red",[.05,6.1,-.01,1.35,6.5,.01]),M(n,"white",[.05,5.7,-.01,1.35,6.1,.01])}function ox(n){It(n,new ft(.18,.22,.55,8),"ink",0,.28,0),It(n,new ft(.26,.26,.08,8),"ink",0,.58,0)}function Jh(n){M(n,"wood",[-.75,0,-.4,.05,.8,.4]),M(n,"woodDark",[.1,0,-.35,.8,.7,.35]),M(n,"wood",[-.5,.8,-.3,.2,1.4,.3]);for(const t of[.25,.55])M(n,"woodDark",[-.76,t,-.41,.06,t+.05,.41])}function ax(n,t){It(n,new ft(.32,.32,.9,10),t,0,.45,0);for(const e of[.15,.75])It(n,new ft(.335,.335,.06,10),"ink",0,e,0)}function jh(n,t,e){M(n,"wood",[-1.2,0,-.5,1.2,.9,.5]);const i=["red","mustard","grass","pink","peach"];for(let s=0;s<8;s++)It(n,new Ae(.12,0),i[Math.floor(e()*i.length)],-1+s%4*.6+e()*.1,1,-.25+Math.floor(s/4)*.45);for(const s of[-1.2,1.15])for(const r of[-.55,.5])M(n,"ink",[s,0,r,s+.05,2.1,r+.05]);for(let s=0;s<6;s++){const r=M(n,s%2?"white":t,[-1.35+s*.45,0,-.75,-.9+s*.45,.04,.75]);r.position.y=2.15,r.rotation.x=-.15}}function cx(n){It(n,new ft(2.1,2.2,.5,16),"concrete",0,.25,0),It(n,new ft(1.9,1.9,.05,16),"tealLight",0,.46,0),It(n,new ft(.3,.4,1.4,8),"concrete",0,.9,0),It(n,new ft(.9,.6,.25,12),"concrete",0,1.6,0),It(n,new ft(.75,.75,.04,12),"tealLight",0,1.72,0);const t=It(n,new $e(.22,1,6),"white",0,2.2,0);return e=>{t.scale.y=.85+Math.sin(e*3)*.15}}function Qh(n){M(n,"woodDark",[-.5,0,-.5,.5,.5,.5]),It(n,new Ae(.5,0),"grass",0,.75,0).scale.set(1,.8,1);for(const[t,e,i]of[[-.2,-.3,"red"],[.25,-.25,"mustard"],[0,-.4,"pink"]])It(n,new Ae(.09,0),i,t,.98,e)}function lx(){const n=document.createElement("canvas");n.width=256,n.height=384;const t=n.getContext("2d");return t.fillStyle="#25304f",t.fillRect(0,0,256,384),t.fillStyle="#e4573d",t.fillRect(20,20,216,70),t.fillStyle="#fffaf0",t.font="bold 54px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("OPEN",128,57),t.font="bold 30px system-ui, sans-serif",t.fillStyle="#f2b234",t.fillText("— MENU —",128,122),t.font="24px system-ui, sans-serif",t.fillStyle="#fffaf0",t.textAlign="left",[["Espresso","2.50"],["Latte","4.00"],["Green Tea","2.75"],["Croissant","3.25"],["Apple Pie","4.75"]].forEach(([e,i],s)=>{t.textAlign="left",t.fillText(e,24,168+s*38),t.textAlign="right",t.fillText("$"+i,234,168+s*38)}),t.font="italic 20px system-ui, sans-serif",t.fillStyle="#9ad6c8",t.textAlign="center",t.fillText("ask at the window →",128,360),new ls(n)}let Jl=null;function hx(n){Jl??(Jl=new fn({map:lx()}));const t=.22;for(const e of[-1,1]){const i=new At;i.position.set(0,0,e*(Math.sin(t)*1.05+.03)),i.rotation.x=e*-t,M(i,"wood",[-.32,0,-.025,.32,1.05,.025]);const s=new gt(new rn(.54,.86),Jl);s.position.set(0,.54,e*.03),s.rotation.y=e>0?0:Math.PI,i.add(s),n.add(i)}M(n,"woodDark",[-.33,1,-.07,.33,1.06,.07])}function ux(n){const t=(e,i,s,r,o)=>It(n,new ft(e,e,i,10),s,r,o,0);t(.36,.04,"white",0,.7),t(.37,.012,"red",0,.676),t(.03,.66,"ink",0,.34),t(.22,.02,"ink",0,.01);for(const e of[-.62,.62])t(.17,.05,"mustard",e,.455),t(.025,.43,"ink",e,.215),t(.13,.015,"ink",e,.008)}function fx(n,t,e){const i=new At;i.position.set(t.x,P,t.z),i.rotation.y=t.yaw??0,n.add(i);const s=t.size??1;switch(t.kind){case"tree":qs(i,s,t.x*13+t.z*7);break;case"bush":Ys(i,s);break;case"bench":cc(i);break;case"picnicTable":j_(i);break;case"lamp":lc(i);break;case"bin":Q_(i);break;case"quarterPipe":tx(i);break;case"funBox":ex(i);break;case"rail":nx(i);break;case"pillar":$h(i,e);break;case"hoop":ix(i);break;case"bikeRack":sx(i);break;case"flagPole":rx(i);break;case"bollard":ox(i);break;case"crates":Jh(i);break;case"barrel":ax(i,e()<.5?"red":"teal");break;case"stall":jh(i,["red","teal","mustard"][Math.floor(e()*3)],e);break;case"fountain":return cx(i);case"planter":Qh(i);break;case"aFrame":hx(i);break;case"bistroSet":ux(i);break}return null}function Zs(n,t,e=-40,i=160){const s=new gt(new rn(i,i),Zt(t));return s.rotation.x=-Math.PI/2,s.position.set(0,P,e),n.add(s),s}function Ne(n,t,e,i,s,r,o=.006){M(n,t,[e,P+o-.003,i,s,P+o,r])}function Ks(n,t=-58,e=["lilac","inkSoft"]){for(let i=0,s=-70;s<70;i++){const r=3+i*7%5,o=6+i*11%14;M(n,i%2?e[0]:e[1],[s,P,t-i%3*3,s+r,P+o,t+3-i%3*3]),s+=r+.6}}function ka(n,t,e,i,s,r){for(let o=e;o<i;){const a=5+Math.floor(s()*4),c=2+Math.floor(s()*3),l=c*3,u=r[Math.floor(s()*r.length)];M(n,u,[o,P,t-6,o+a-.2,P+l,t]),M(n,"inkSoft",[o-.1,P+l,t-6.1,o+a-.1,P+l+.25,t+.1]);for(let h=0;h<c;h++)for(let f=o+.8;f<o+a-1;f+=1.5)M(n,h===0&&f<o+2?"woodDark":"tealLight",[f,P+h*3+(h===0&&f<o+2?0:1),t,f+.8,P+h*3+2.2,t+.05]);o+=a}}function dx(n,t,e){const i=(a,c,l,u)=>{const h=new At;h.rotation.y=Math.PI,ka(h,-a,-l,-c,e,u),n.add(h)},s=(a,c,l=-40,u=40,h=[.9,1.3])=>{for(let f=l;f<=u;f+=2.6+e()*3){const d=new At;d.position.set(f,P,a+e()*(c-a)),qs(d,h[0]+e()*h[1],f*3+a),n.add(d)}},r=(a,c,l)=>{for(let u=c;u<=l;u+=1.6+e()*1.2){const h=new At;h.position.set(u,P,a+e()*.6),Ys(h,.7+e()*.5),n.add(h)}},o=(a,c)=>{const l=new At;l.rotation.y=Math.PI,Ks(l,-a,c),n.add(l)};if(t==="park"){Ne(n,"paperShade",-45,6.5,45,8.3,.005);for(let a=-24;a<=24;a+=8){const c=new At;c.position.set(a,P,9),lc(c),n.add(c)}r(10.5,-30,30),s(13,20,-44,44,[1,1.2]),s(22,30,-50,50,[1.2,1.2]),o(60)}else if(t==="skatepark"){M(n,"concrete",[-40,P,9,40,P+3,9.6]),M(n,"inkSoft",[-40.1,P+3,8.9,40.1,P+3.2,9.7]);const a=["red","mustard","teal","pink","lilac","tealLight"];for(let c=0,l=-36;l<36;c++,l+=2.2+e()*2.5){const u=1.2+e()*2,h=P+.4+e()*1.2,f=.004+c%3*.004;M(n,a[Math.floor(e()*a.length)],[l,h,9-f,l+u,h+.6+e()*.9,9-f+.002])}M(n,"concrete",[-60,P+4.5,18,60,P+5.4,23]),M(n,"red",[-60,P+5.4,18,60,P+5.9,18.3]);for(let c=-50;c<=50;c+=12)M(n,"inkSoft",[c-.6,P,19.9,c+.6,P+4.5,21.1]);i(30,-60,60,["inkSoft","concrete","lilac"]),o(62)}else if(t==="school"){for(let a=-40;a<40;a+=2.4)M(n,"ink",[a,P,7.9,a+.08,P+1.2,8]);M(n,"ink",[-40,P+1.05,7.92,40,P+1.12,7.98]),M(n,"ink",[-40,P+.4,7.92,40,P+.47,7.98]),s(10,13,-40,40,[.9,1]),Ne(n,"inkSoft",-60,14.5,60,20.5,.004),i(27,-60,60,["peach","pink","mustard","tealLight","white"]),o(62)}else if(t==="harbour"){M(n,"concrete",[-70,P-.6,26,70,P+.4,34]);const a=["red","teal","mustard","tealDark","redDark","lilac"];for(let l=-50;l<50;l+=3.2){const u=1+Math.floor(e()*3);for(let h=0;h<u;h++)M(n,a[Math.floor(e()*a.length)],[l,P+.4+h*1.3,27+h%2*.05,l+3,P+1.7+h*1.3,29.5])}for(const l of[-22,18])M(n,"red",[l-.3,P+.4,30,l+.3,P+12,30.6]),M(n,"red",[l-.3,P+.4,33,l+.3,P+12,33.6]),M(n,"red",[l-.35,P+11,22,l+.35,P+11.8,36]);const c=new At;M(c,"white",[-6,0,-1.5,6,1.6,1.5]),M(c,"red",[-6.02,0,-1.52,6.02,.5,1.52]),M(c,"white",[-3,1.6,-1.2,3,2.8,1.2]),M(c,"tealLight",[-2.8,2,-1.21,2.8,2.5,1.21]),M(c,"mustard",[-.4,2.8,-.4,.4,3.8,.4]),c.position.set(-8,P-.6,22),n.add(c),i(42,-70,70,["concrete","inkSoft","tealLight"]),o(66)}else{Ne(n,"concrete",-44,6,44,14,.006),s(8,9,-40,40,[.8,.6]);for(let a=-30;a<=30;a+=10){const c=new At;c.position.set(a+3,P,11),c.rotation.y=Math.PI,cc(c),n.add(c)}i(20,-60,60,["peach","mustard","pink","lilac","tealLight"]),o(64)}}function px(n,t){Zs(n,"grass");for(let s=-6;s>-40;s-=4){const r=new gt(new rn(140,2),Zt("grassDark"));r.rotation.x=-Math.PI/2,r.position.set(0,P+.005,s),n.add(r)}const e=Gs.park.filter(s=>s.kind==="lamp").map(s=>new R(s.x,P+3.3,s.z));mx(n,e);const i=ks(7);for(let s=-44;s<=44;s+=3+i()*3){const r=new At;r.position.set(s,P,-21-i()*9),qs(r,1+i()*1.1,s),n.add(r)}for(let s=-30;s<=30;s+=4+i()*4){const r=new At;r.position.set(s,P,-18-i()*2),Ys(r,.8+i()*.7),n.add(r)}Ks(n)}function mx(n,t){for(let e=1;e<t.length;e++){const i=t[e-1],s=t[e];oc(n,ac(i,s,.6));for(let r=1;r<12;r++){const o=r/12,a=new gt(new ke(.06,6,4),r%2?ss.mustard:ss.red);a.position.lerpVectors(i,s,o),a.position.y-=Math.sin(o*Math.PI)*.6,n.add(a)}}}function gx(n,t,e){Zs(n,"grassDark"),Ne(n,"concrete",-30,-26,30,6,.004),Ne(n,"inkSoft",-30,-23,30,-13.5,.008);for(let u=0;u<10;u++)for(let h=0;h<5;h++)(u+h)%2===0&&Ne(n,"inkSoft",-14+u*3,-12+h*3,-11+u*3,-9+h*3,.006);const i=(u,h)=>{It(n,new $e(.2,.55,8),"red",u,P+.3,h),M(n,"white",[u-.14,P+.25,h-.14,u+.14,P+.33,h+.14]).scale.set(.85,1,.85),M(n,"red",[u-.25,P,h-.25,u+.25,P+.04,h+.25])};for(const[u,h]of[[9.5,-9.8],[11,-10.6],[12.4,-9.6],[-11,-10.5]])i(u,h);M(n,"tealDark",[10,P,-22.5,16,P+2.6,-20]);for(let u=0;u<9;u++)M(n,"teal",[10.2+u*.66,P+.1,-20.01,10.45+u*.66,P+2.5,-19.98]);for(const[u,[h,f,d,_,g]]of[[10.6,.5,2.2,1,"mustard"],[12.4,1.1,1.8,.9,"pink"],[14.1,.4,1.4,1.45,"red"]].entries())M(n,g,[h,P+f,-19.97+u*.006,h+d,P+f+_,-19.95+u*.006]);M(n,"red",[-14.5,P,-20.5,-13.4,P+2,-19.8]),M(n,"tealLight",[-14.3,P+.8,-19.81,-13.6,P+1.8,-19.79]),M(n,"ink",[-14.3,P+.25,-19.81,-13.6,P+.55,-19.79]),M(n,"wood",[-12.5,P,-20.5,-9.5,P+.5,-19]),M(n,"woodDark",[-12.5,P+.5,-20.5,-9.5,P+.54,-19]),M(n,"ink",[-11.4,P+.54,-19.9,-10.4,P+1,-19.6]);for(const u of[-11.15,-10.65]){const h=It(n,new ft(.15,.15,.02,10),"mustard",u,P+.77,-19.59);h.rotation.x=Math.PI/2}for(const u of[-12,13,16]){const h=new At;h.position.set(u,P,-3.2),cc(h),h.rotation.y=u<0?.4:-.3,n.add(h)}for(const[u,h]of[[-12.5,-6.5],[14.5,-5]]){const f=new At;f.position.set(u,P,h),Qh(f),n.add(f)}const s=["red","mustard","teal","pink","white"];for(let u=0;u<4;u++){const h=new R(-24+u*12,P+2.2,-25.55),f=new R(-12+u*12,P+2.2,-25.55);oc(n,ac(h,f,.5));for(let d=1;d<16;d++){const _=d/16,g=new gt(new $e(.12,.26,3),Zt(s[(d+u)%s.length]));g.position.lerpVectors(h,f,_),g.position.y-=Math.sin(_*Math.PI)*.5+.14,g.rotation.x=Math.PI,n.add(g)}}const r=P+7;M(n,"concrete",[-90,r,-22,90,r+.9,-12]),M(n,"paperShade",[-89.5,r-.3,-21.5,89.5,r,-12.5]),M(n,"inkSoft",[-90,r+.9,-12.2,90,r+1.6,-12]),M(n,"mustard",[-89.8,r+.5,-12.02,89.8,r+.6,-11.98]);for(const u of[-30,-20,20,30]){const h=new At;h.position.set(u,P,-13),$h(h,e),n.add(h)}const o=[],a=["red","mustard","teal","white","lilac"];for(let u=0;u<6;u++){const h=new At,f=a[u%a.length];M(h,f,[-1.1,0,-.5,1.1,.6,.5]),M(h,"tealLight",[-.6,.6,-.45,.5,1,.45]),M(h,f,[-.55,.98,-.47,.45,1.05,.47]),h.position.y=r+.9,n.add(h);const d=u%2;o.push({root:h,speed:(d?-1:1)*(11+e()*6),lane:d,offset:e()*180})}t.push(u=>{for(const h of o){const f=((h.offset+u*h.speed)%180+180)%180-90;h.root.position.set(f,r+.9,h.lane?-15:-18.5),h.root.rotation.y=h.speed>0?0:Math.PI}});for(let u=-24;u<=24;u+=2.5)M(n,"inkSoft",[u-.04,P,-25.6,u+.04,P+2.2,-25.5]);for(const u of[.1,1.1,2.15])M(n,"inkSoft",[-24,P+u,-25.6,24,P+u+.05,-25.55]);M(n,"concrete",[-18,P,-27,18,P+3.2,-26.6]);const c=["red","mustard","teal","pink","lilac","tealDark"];for(let u=0;u<14;u++){const h=-17+u*2.5+e(),f=.3+e()*1.6;M(n,c[Math.floor(e()*c.length)],[h,P+f,-26.61,h+1+e()*1.5,P+f+.4+e()*.8,-26.58])}Ks(n,-60);const l=[{z:-18.6,from:-2,to:10,speed:.35,kind:"runner",seed:101,deck:"red"},{z:-21.4,from:-16,to:6,speed:.27,kind:"student",seed:202,deck:"teal"},{z:-16.8,from:10,to:20,speed:.42,kind:"painter",seed:303,deck:"mustard"}];for(const u of l){const h=Kh(u.kind,u.seed),f=new At;M(f,u.deck,[-.12,.08,-.45,.12,.11,.45]);for(const _ of[-.3,.3])M(f,"ink",[-.13,0,_-.05,.13,.08,_+.05]);h.root.add(f),h.root.children.forEach(_=>_!==f&&(_.position.y+=.11)),n.add(h.root);const d=u.seed;t.push(_=>{const g=(Math.sin(_*u.speed+d)+1)/2;h.root.position.set(u.from+g*(u.to-u.from),P,u.z),h.root.rotation.y=Math.cos(_*u.speed+d)>0?-Math.PI/2:Math.PI/2,h.arms[0].rotation.z=.9,h.arms[1].rotation.z=-.9})}}function _x(n,t,e){Zs(n,"grass"),Ne(n,"inkSoft",-14,-20,16,2,.004),Ne(n,"teal",0,-16,8,-6.5,.008);for(const[r,o,a,c]of[[0,-16,8,-15.9],[0,-6.6,8,-6.5],[0,-16,.1,-6.5],[7.9,-16,8,-6.5],[0,-11.3,8,-11.2]])Ne(n,"white",r,o,a,c,.012);const i=It(n,new Ae(.13,1),"mustardDark",4,P+.13,-12.8);t.push(r=>{i.position.y=P+.13+Math.abs(Math.sin(r*3.2))*1.1});for(let r=-14;r<=16;r+=2)(r<-2||r>1)&&M(n,"tealDark",[r-.04,P,-20.1,r+.04,P+1.8,-20]);for(const r of[-2.2,1.2])M(n,"mustard",[r-.08,P,-20.14,r+.08,P+2.1,-19.96]);M(n,"tealDark",[-14,P+1.75,-20.1,-2.3,P+1.82,-20]),M(n,"tealDark",[1.3,P+1.75,-20.1,16,P+1.82,-20]),M(n,"peach",[-26,P,-32,26,P+8,-24]),M(n,"red",[-26.5,P+8,-32.5,26.5,P+8.6,-23.5]),M(n,"white",[-26.02,P+3.9,-24.02,26.02,P+4.1,-23.95]);for(let r=0;r<2;r++)for(let o=-24;o<24;o+=3)r===0&&Math.abs(o)<2||(M(n,"white",[o-.1,P+1.1+r*4-.1,-24.02,o+1.9,P+3+r*4+.1,-23.98]),M(n,"tealLight",[o,P+1.1+r*4,-24.04,o+1.8,P+3+r*4,-23.97]));M(n,"woodDark",[-1.4,P,-24.05,1.4,P+2.6,-23.96]),M(n,"peach",[-3,P+8,-25,3,P+11,-24]),M(n,"red",[-3.3,P+11,-25.3,3.3,P+11.4,-23.7]);const s=It(n,new ft(1,1,.1,16),"white",0,P+9.5,-23.95);s.rotation.x=Math.PI/2,M(n,"ink",[-.04,P+9.5,-23.88,.04,P+10.2,-23.86]),M(n,"ink",[-.04,P+9.46,-23.88,.5,P+9.54,-23.86]);for(const r of[-24,-20.5,-17,19,22.5,26,30]){const o=new At;o.position.set(r+e(),P,-21.5+e()*2),qs(o,.9+e()*.8,r*3.1),n.add(o)}for(let r=-13;r<=15;r+=2.5+e()*2){if(r>-3.5&&r<2.5)continue;const o=new At;o.position.set(r,P,-20.6),Ys(o,.6+e()*.5),n.add(o)}Ks(n,-62)}function xx(n,t,e){const i=P-.6;Zs(n,"teal",-40,260).position.y=i,M(n,"wood",[-30,i,-14.2,30,P,8]);for(let g=-30;g<30;g+=.9)M(n,"woodDark",[g,P,-14.2,g+.04,P+.004,8]);M(n,"woodDark",[-30,P-1.2,-14.5,30,P+.12,-14.2]);for(let g=-29;g<30;g+=3)It(n,new ft(.2,.2,2.5,6),"woodDark",g,P-1.2,-14.5);const s=[];for(let g=0;g<14;g++){const m=M(n,"tealLight",[-1.5,P+.01,-.05,1.5,P+.02,.05]);m.position.set(-40+e()*80,i+.01,-18-e()*30),s.push(m)}const r=[],o=(g,m,p,x)=>{const y=new At;M(y,p,[-2,-.4,-.8,2,.5,.8]),M(y,"white",[-2.05,.3,-.82,2.05,.47,.82]);const v=new gt(new $e(.8,1.2,4),Zt(p));if(v.rotation.z=-Math.PI/2,v.rotation.x=Math.PI/4,v.position.set(2.55,.05,0),y.add(v),x){M(y,"ink",[-.05,.5,-.05,.05,5,.05]);const I=new Fh([new ot(0,0),new ot(0,4.2),new ot(2.4,0)]),A=new gt(new ic(I),Zt("white"));A.material.side=Ye,A.position.set(.1,.7,0),y.add(A)}else M(y,"white",[-1.2,.5,-.6,.2,1.5,.6]),M(y,"tealLight",[-1.21,1,-.5,.21,1.3,.5]),M(y,"red",[-1.3,1.5,-.7,.3,1.6,.7]);y.position.set(g,i,m),y.rotation.y=e()*.6-.3,n.add(y),r.push({root:y,phase:e()*6})};o(-7,-19,"red",!1),o(8,-22,"teal",!0),o(-18,-30,"mustard",!1);for(const[g,m,p]of[[0,0,3.2],[2.2,1.4,1.8],[-2,1.8,1.5]])It(n,new Vs(p,0),"concrete",-32+g,i+p*.35,-52+m).scale.y=.55;It(n,new ft(1.2,1.8,2,8),"concrete",-32,P+1,-52);for(let g=0;g<5;g++)It(n,new ft(1.2-g*.08,1.28-g*.08,2.4,10),g%2?"red":"white",-32,P+3.2+g*2.4,-52);It(n,new ft(.7,.7,1.2,8),ss.mustard,-32,P+15.6,-52),It(n,new $e(1,1,8),"red",-32,P+16.7,-52);const a={x1:16,x2:90,z1:-64,z2:-38},c=P+.5;M(n,"concrete",[a.x1,i-.5,a.z1,a.x2,c,a.z2]),M(n,"mustard",[a.x1,c,a.z2-.3,a.x2,c+.02,a.z2-.2]);for(let g=a.x1+1;g<a.x2;g+=4)M(n,"ink",[g,c-.6,a.z2,g+.5,c-.1,a.z2+.15]);const l=["red","teal","mustard","tealDark","redDark","lilac","white"],u=(g,m,p,x,y=!0)=>{const v=y?6:3;M(n,x,[g,m,p,g+v,m+1.25,p+1.25]);for(let I=.3;I<v-.1;I+=.4)M(n,"ink",[g+I,m+.1,p-.01,g+I+.05,m+1.15,p])};for(let g=0;g<4;g++)for(let m=0;m<8;m++){const p=2+Math.floor(e()*3);for(let x=0;x<p;x++)u(a.x1+6+m*6.6,c+x*1.27,a.z1+3+g*3.2,l[Math.floor(e()*l.length)])}for(const g of[28,52]){for(const m of[0,9])M(n,"mustard",[g,c,a.z2-10+m,g+.6,c+18,a.z2-9.4+m]),M(n,"mustard",[g+6,c,a.z2-10+m,g+6.6,c+18,a.z2-9.4+m]);M(n,"mustard",[g,c+18,a.z2-10,g+6.6,c+19,a.z2+9]),M(n,"mustardDark",[g+.05,c+8,a.z2-9.95,g+6.55,c+8.6,a.z2-.45]),M(n,"white",[g+1.5,c+16.5,a.z2-2,g+5,c+18,a.z2+1]),M(n,"ink",[g+3.2,c+12,a.z2+5,g+3.3,c+18,a.z2+5.1]),u(g+.3,c+10.7,a.z2+4.4,"red")}const h=new At;M(h,"ink",[0,-1.5,-4.5,56,3.2,4.5]),M(h,"red",[-.02,-1.5,-4.52,56.02,.2,4.52]);const f=new gt(new ft(4.5,4.5,4.7,3,1,!1,0,Math.PI),Zt("ink"));f.rotation.y=Math.PI/2,f.position.set(56,.85,0),f.scale.set(1,1,.8),h.add(f),M(h,"white",[1,3.2,-4,8,11,4]);for(let g=0;g<4;g++)M(h,"tealLight",[.98,4.2+g*1.7,-3.5,1,5.2+g*1.7,3.5]);M(h,"red",[3,11,-1,6,14,1]);for(let g=0;g<7;g++)for(let m=0;m<6;m++){const p=1+Math.floor(e()*3);for(let x=0;x<p;x++){const y=l[Math.floor(e()*l.length)];M(h,y,[10+g*6.3,3.2+x*1.27,-4+m*1.33,16+g*6.3,4.45+x*1.27,-2.75+m*1.33])}}h.position.set(a.x1+6,i,a.z2+6),n.add(h),t.push(g=>{h.position.y=i+Math.sin(g*.5)*.06}),M(n,"tealDark",[-29,P,-8,-17,P+5,3]),M(n,"white",[-29.3,P+5,-8.3,-16.7,P+5.4,3.3]),M(n,"inkSoft",[-17.01,P,-6,-16.98,P+3.8,-1]);for(let g=.4;g<3.8;g+=.5)M(n,"ink",[-16.99,P+g,-5.95,-16.97,P+g+.05,-1.05]);M(n,"white",[-17.01,P+4.1,0,-16.98,P+4.7,2.5]),M(n,"woodDark",[-14,P,-10.5,-13.85,P+1.6,-10.35]),It(n,new Ge(.32,.09,6,14),"red",-13.92,P+1.2,-10.25),It(n,new Ge(.4,.12,6,14),"wood",-15.5,P+.12,-2).rotation.x=Math.PI/2;const d=new At;d.position.set(16,P,-3),d.rotation.y=-.4,jh(d,"teal",e),n.add(d),M(n,"white",[20,P,-10,26,P+3.4,-5]),M(n,"red",[19.8,P+3.4,-10.2,26.2,P+3.8,-4.8]),M(n,"tealLight",[21,P+1.4,-5.01,23,P+2.6,-4.98]),M(n,"woodDark",[23.8,P,-5.01,25,P+2.3,-4.98]);for(const[g,m]of[[13.5,-7.5],[14.6,-8.3],[18.6,1.5]]){const p=new At;p.position.set(g,P,m),p.rotation.y=e(),Jh(p),n.add(p)}for(const g of[-26,-20,16,22,28]){const m=new At;m.position.set(g,P,-13.6),lc(m),n.add(m)}for(const[g,m,p]of[[-60,22,10],[-20,16,7],[60,26,12]])It(n,new $e(m,p,7),"grassDark",g,P+p/2,-95);const _=[];for(let g=0;g<5;g++){const m=new At;for(const p of[-1,1]){const x=M(m,"white",[0,-.02,-.12,.45,.02,.12]);x.rotation.y=p<0?Math.PI:0,x.rotation.z=p*.35}n.add(m),_.push(m)}t.push(g=>{for(const m of r)m.root.position.y=i+Math.sin(g*1.2+m.phase)*.12,m.root.rotation.z=Math.sin(g*.9+m.phase)*.04;s.forEach((m,p)=>{m.position.x+=Math.sin(g*.4+p)*.004}),_.forEach((m,p)=>{const x=g*(.25+p*.04)+p*1.3;m.position.set(Math.cos(x)*(8+p*2)-2,P+8+p*.8+Math.sin(g*2+p)*.3,-22+Math.sin(x)*6),m.rotation.y=-x,m.children.forEach((y,v)=>y.rotation.z=(v?1:-1)*(.2+Math.sin(g*6+p)*.35))})})}function vx(n,t,e){Zs(n,"grass"),Ne(n,"inkSoft",-45,-2.1,45,9,.004),Ne(n,"white",-45,-2,45,-1.92,.007);for(let f=-44;f<44;f+=4)Ne(n,"white",f,4.1,f+2,4.22,.007);Ne(n,"paperShade",-45,-2.35,45,-2.1,.03),Ne(n,"concrete",-26,-23.9,26,-2.35,.006);for(let f=0;f<=17;f++)Ne(n,"paperShade",-25.5+f*3,-23.9,-25.38+f*3,-2.35,.009);for(let f=0;f<=7;f++)Ne(n,"paperShade",-26,-23.4+f*3,26,-23.28+f*3,.009);const i=(f,d,_,g)=>{Ne(n,"paperShade",f-.15,d-.15,_+.15,g+.15,.06),Ne(n,"grass",f,d,_,g,.075)};i(-22,-22,-8.5,-9.5),i(8.5,-22,22,-13.5),i(-2.5,-22,2.5,-19);const s=new gt(new nc(2.3,3.4,28),Zt("grass"));s.rotation.x=-Math.PI/2,s.position.set(4.5,P+.05,-11),n.add(s);const r=ks(55);for(const[f,d,_]of[[-21.5,-9,-9.9],[9,21.5,-13.9]])for(let g=f;g<=d;g+=1.3){const m=new At;m.position.set(g,P+.07,_),Ys(m,.75+r()*.2),n.add(m)}for(const[f,d]of[[-19,-17],[-14,-20],[-11,-14],[12,-18],[17,-20.5],[20,-16]]){const _=new At;_.position.set(f,P+.07,d),qs(_,.9+r()*.6,f*5+d),n.add(_)}const o=["red","mustard","pink","white","lilac"];for(let f=0;f<70;f++){const d=f%2===0,_=d?-21+r()*11:9.5+r()*11.5,g=d?-21.5+r()*3.5:-21.5+r()*3;It(n,new Ae(.1+r()*.06,0),o[f%o.length],_,P+.17,g)}for(let f=0;f<24;f++){const d=f/24*Math.PI*2;It(n,new Ae(.11,0),o[f%o.length],4.5+Math.cos(d)*2.85,P+.15,-11+Math.sin(d)*2.85)}const a=Gs.square.filter(f=>f.kind==="lamp").map(f=>new R(f.x,P+3.2,f.z)),c=["red","mustard","teal","pink","white"],l=[new R(-14,P+6.2,-24),...a,new R(14,P+6.2,-24)],u=[];for(let f=1;f<l.length;f++)u.push([l[f-1],l[f]]);u.push([a[0],new R(-4,P+8,-24)],[a[a.length-1],new R(4,P+8,-24)]);for(const[f,d]of u){const _=.4+f.distanceTo(d)*.05;oc(n,ac(f,d,_,16));const g=Math.max(6,Math.round(f.distanceTo(d)/.7));for(let m=1;m<g;m++){const p=m/g,x=new gt(new $e(.14,.3,3),Zt(c[m%c.length]));x.position.lerpVectors(f,d,p),x.position.y-=Math.sin(p*Math.PI)*_+.15,x.rotation.x=Math.PI,x.rotation.y=Math.atan2(d.x-f.x,d.z-f.z),n.add(x)}}ka(n,-24,-40,-5,e,["peach","mustard","pink","lilac","tealLight"]),ka(n,-24,6,42,e,["peach","mustard","pink","lilac","tealLight"]),M(n,"wood",[-4,P,-30,4,P+16,-24]),M(n,"redDark",[-4.4,P+16,-30.4,4.4,P+16.6,-23.6]),It(n,new $e(4.2,4,4),"red",0,P+18.6,-27).rotation.y=Math.PI/4;const h=It(n,new ft(1.8,1.8,.1,20),"white",0,P+12.5,-23.95);h.rotation.x=Math.PI/2,M(n,"ink",[-.06,P+12.5,-23.88,.06,P+13.8,-23.86]),M(n,"ink",[-.06,P+12.44,-23.88,1,P+12.56,-23.86]),M(n,"woodDark",[-1.5,P,-24.05,1.5,P+3.5,-23.96]),Ks(n,-64)}function Mx(n){const t=new At,e=ks(n.length*7919+n.charCodeAt(0)),i=[];n==="park"?px(t):n==="skatepark"?gx(t,i,e):n==="school"?_x(t,i,e):n==="harbour"?xx(t,i,e):vx(t,i,e),dx(t,n,ks(n.length*104729+17));for(const o of Gs[n]){const a=fx(t,o,e);a&&i.push(a)}const s=new fn({color:Vn("mustard"),fog:!1}),r=new gt(new hs(6,24),s);return t.add(r),t.userData.setSky=o=>{const c=o.elevation*Math.PI/180;r.position.set(o.across*70,P+Math.sin(c)*90,-90*Math.cos(c)),r.lookAt(0,P+1,0),r.visible=o.elevation>-6||o.lamps>.95,o.lamps>.95&&r.position.set(-30,P+35,-80),s.color.set(o.disc),ss.mustard.color.copy(Xr).lerp(Kl.mustard,o.lamps),ss.red.color.copy(Xr).lerp(Kl.red,o.lamps)},t.userData.update=(o,a)=>{for(const c of i)c(o,a)},t}const ei={x:140,y:51,w:1492,h:784},Qe=sn.length/2,Ot=sn.depth/2,we=sn.height,Ce=.08,Tt=.03,We={bottom:P+.32,top:.62},Es={bottom:.66,top:.71};function yx(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t;const s=i.getContext("2d");e(s,n,t);const r=new ls(i);return r.anisotropy=4,r}function Sx(){const n=document.createElement("canvas");n.width=1024,n.height=Math.round(1024*ei.h/ei.w);const t=new ls(n);if(t.anisotropy=8,t.colorSpace=hn,typeof Image>"u")return t;const e=new Image;return e.onload=()=>{var i;(i=n.getContext("2d"))==null||i.drawImage(e,ei.x,ei.y,ei.w,ei.h,0,0,n.width,n.height),t.needsUpdate=!0},e.src=ru,t}function jl(n,t,e){const s=P+.4,r=Math.sign(e),o=(c,l,u)=>{const h=new gt(c,Zt(l));h.rotation.x=Math.PI/2,h.position.set(t,s,e+r*u),n.add(h)};o(new ft(.4,.4,.26,16),"ink",0),o(new ft(.24,.24,.02,14),"white",.135),o(new ft(.17,.17,.025,12),"red",.145),o(new ft(.06,.06,.03,8),"white",.16);const a=new gt(new Ge(.4+.06,.05,4,12,Math.PI),Zt("inkSoft"));a.position.set(t,s,e+r*.02),n.add(a)}function bs(n,t,e,i,s,r,o){const a=new gt(new ft(i,i,e,8),Zt("white"));t==="x"?a.rotation.z=Math.PI/2:a.rotation.x=Math.PI/2,a.position.set(s,r,o),n.add(a)}function wx(){const n=new At,t=Dt.window,e=Dt.door,i=-Ot-Ce,s=Ot+Ce,r=Qe+Ce;M(n,"white",[-Qe-Ce,0,i-Tt,t.min.x-.05,we,i]),M(n,"white",[t.max.x+.05,0,i-Tt,r,we,i]),M(n,"white",[t.min.x-.05,t.max.y+.12,i-Tt,t.max.x+.05,we,i]),M(n,"white",[t.min.x-.05,0,i-Tt,t.max.x+.05,t.min.y-.04,i]),M(n,"white",[-Qe-Ce,0,s,r,we,s+Tt]),M(n,"white",[r,0,-Ot-Ce,r+Tt,we,e.min.z]),M(n,"white",[r,0,e.max.z,r+Tt,we,Ot+Ce]),M(n,"white",[r,e.max.y,e.min.z,r+Tt,we,e.max.z]);const o=.006;M(n,"white",[-Qe-Ce-o,We.bottom,i-Tt-o,r+Tt+o,.02,i-.002]),M(n,"white",[-Qe-Ce-o,We.bottom,s+.002,r+Tt+o,.02,s+Tt+o]),M(n,"white",[r+.002,We.bottom,i-.002,r+Tt+o,.02,s+.002]);const a=(m,p,x,y)=>{M(n,m,[-Qe-Ce-y,p,i-Tt-y,r+Tt+y,x,i-Tt-y+.004]),M(n,m,[-Qe-Ce-y,p,s+Tt+y-.004,r+Tt+y,x,s+Tt+y]),M(n,m,[r+Tt+y-.004,p,i-Tt-y+.004,r+Tt+y,x,e.min.z]),M(n,m,[r+Tt+y-.004,p,e.max.z,r+Tt+y,x,s+Tt+y-.004])};a(bi().paint,We.bottom,We.top,.01),a("mustard",Es.bottom,Es.top,.01),M(n,"white",[-Qe-Ce-.04,we+.1,i-Tt-.04,r+Tt+.04,we+.2,s+Tt+.04]),bs(n,"x",2*Qe+2*Ce+Tt+.08,.1,(r+Tt-Qe-Ce)/2,we+.15,i-Tt-.05),bs(n,"x",2*Qe+2*Ce+Tt+.08,.1,(r+Tt-Qe-Ce)/2,we+.15,s+Tt+.05),bs(n,"z",s-i+2*Tt+.1,.1,r+Tt+.05,we+.15,0),M(n,"paperShade",[1.9,we+.2,-.3,2.5,we+.32,.3]),M(n,"wood",[t.min.x-.14,t.min.y-.1,i-Tt-.3,t.max.x+.14,t.min.y-.03,i-Tt]);for(const m of[t.min.x-.12,t.max.x+.08])M(n,"inkSoft",[m,t.min.y,i-Tt-.03,m+.04,t.max.y+.12,i-Tt]);if(M(n,"inkSoft",[t.min.x-.12,t.max.y+.08,i-Tt-.03,t.max.x+.12,t.max.y+.12,i-Tt]),bx(n,t.min.x-.25,t.max.x+.25,t.max.y+.22,i-Tt),bi().plants===2){const m=t.min.y-.03;M(n,"woodDark",[t.min.x+.05,m,i-Tt-.26,t.min.x+.65,m+.12,i-Tt-.06]),M(n,"grass",[t.min.x+.07,m+.12,i-Tt-.24,t.min.x+.63,m+.17,i-Tt-.08]),[["red",.15],["mustard",.3],["pink",.45],["white",.57]].forEach(([p,x],y)=>M(n,p,[t.min.x+x-.035,m+.17,i-Tt-.19-y%2*.02,t.min.x+x+.035,m+.25,i-Tt-.13-y%2*.02]))}const c=-Qe-Ce,l=c-1.15,u=we-.12;M(n,"white",[l,We.bottom,-Ot-.02,c,u,-Ot+.04]),M(n,"white",[l,We.bottom,Ot-.04,c,u,Ot+.02]),M(n,"white",[l,We.bottom,-Ot-.02,l+.04,1.03,Ot+.02]),M(n,"white",[l,2.07,-Ot-.02,l+.04,u,Ot+.02]),M(n,"white",[l,u-.06,-Ot-.02,c,u,Ot+.02]),M(n,"white",[l,We.bottom,-Ot-.02,c,-.1,Ot+.02]),M(n,"white",[l-.04,u,-Ot-.06,c+.02,u+.1,Ot+.06]),bs(n,"z",2*Ot+.12,.09,l-.02,u+.06,0);const h=l-.3;M(n,"white",[h,We.bottom,-Ot+.06,l+.02,.95,Ot-.06]),bs(n,"z",2*Ot-.12,.06,h+.04,.93,0);for(const m of[-.5,.5]){const p=M(n,"tealLight",[-.02,-.5,-.43,.02,.5,.43]);p.position.set(l-.04,1.55,m),p.rotation.z=-.08}M(n,"inkSoft",[l-.07,1.03,-.05,l-.01,2.07,.05]),M(n,"red",[h-.02,We.bottom+.05,-Ot+.1,h,.88,Ot-.1]);for(let m=.4;m<.74;m+=.08)M(n,"redDark",[h-.035,m,-.45,h-.02,m+.035,.45]);for(const m of[-.82,.82]){const p=new gt(new ft(.15,.15,.05,14),Zt("white"));p.rotation.z=Math.PI/2,p.position.set(h-.035,.6,m),n.add(p);const x=new gt(new ft(.1,.1,.06,14),Zt("paper"));x.rotation.z=Math.PI/2,x.position.set(h-.045,.6,m),n.add(x),M(n,"mustard",[h-.04,.32,m-.08,h-.02,.38,m+.08])}M(n,"inkSoft",[h-.14,P+.22,-Ot,h+.02,P+.4,Ot]),M(n,"white",[h-.155,P+.25,-.25,h-.14,P+.37,.25]);for(const m of[-1,1]){const p=m*(Ot+.02),x=m*(Ot+.03),[y,v]=m<0?[x,p]:[p,x];M(n,"red",[l,We.bottom,y,c,We.top,v]),M(n,"mustard",[l,Es.bottom,y,c,Es.top,v]),M(n,"tealLight",[l+.12,1.2,m<0?x-.002:p,c-.1,2.05,m<0?p:x+.002]),M(n,"inkSoft",[c-.06,Es.top,m<0?x-.004:p,c-.03,2.1,m<0?p:x+.004]),M(n,"ink",[c-.3,1.05,m<0?x-.012:p,c-.16,1.09,m<0?p:x+.012]),M(n,"ink",[l-.08,1.45,m*(Ot+.08),l-.02,1.5,m*(Ot+.2)]),M(n,"ink",[l-.1,1.5,m*(Ot+.16)-.05,l-.02,1.78,m*(Ot+.16)+.05]),M(n,"mustard",[l+.05,u+.1,m*(Ot-.12)-.04,l+.15,u+.14,m*(Ot-.12)+.04])}M(n,"red",[h-.004,We.bottom,-Ot+.06,h+0,We.bottom+.05,Ot-.06]),M(n,"inkSoft",[r+Tt+.01,P+.22,-Ot,r+.2,P+.4,-.6]),M(n,"inkSoft",[r+Tt+.01,P+.22,.6,r+.2,P+.4,Ot]);for(const m of[-Ot+.15,Ot-.25])M(n,"red",[r+Tt,.8,m,r+Tt+.02,1.1,m+.1]);for(const m of[-Ot-Ce-.14,Ot+Ce+.14])jl(n,c-.6,m),jl(n,Qe-.9,m);const f=(m,p)=>yx(256,112,(x,y,v)=>{x.fillStyle=p,x.beginPath(),x.roundRect(4,4,y-8,v-8,20),x.fill(),x.fillStyle="#fffaf0",x.font="bold 60px system-ui, sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText(m,y/2,v/2+2)}),d=f("OPEN","#2b9c8e"),_=f("CLOSED","#e4573d"),g=new gt(new rn(.5,.22),new fn({map:d,transparent:!0}));g.position.set(t.max.x+.5,t.max.y-.3,i-Tt-.012),g.rotation.y=Math.PI,n.add(g);for(const m of[-.18,.18])M(n,"ink",[t.max.x+.5+m-.005,t.max.y-.19,i-Tt-.015,t.max.x+.5+m+.005,t.max.y+0,i-Tt-.01]);return n.userData.setOpen=m=>{g.material.map=m?d:_},Ex(n),n.userData.steam=[],n}function Ex(n){const e=3.1*ei.h/ei.w,i=.14,s=3.1+2*i,r=e+2*i,o=-.4,a=we+.85,c=a+r,l=(a+c)/2;M(n,"white",[o-s/2,a,-.05,o+s/2,c,.05]);const u=.07;M(n,"red",[o-s/2-u,c-u,-.075,o+s/2+u,c+u,.075]),M(n,"red",[o-s/2-u,a-u,-.075,o+s/2+u,a+u,.075]),M(n,"red",[o-s/2-u,a-u,-.075,o-s/2+u,c+u,.075]),M(n,"red",[o+s/2-u,a-u,-.075,o+s/2+u,c+u,.075]);const h=Sx(),f=new rn(3.1,e);for(const d of[-1,1]){const _=new gt(f,new fn({map:h,transparent:!0,alphaTest:.5}));_.position.set(o,l,d*.058),_.rotation.y=d<0?Math.PI:0,n.add(_)}for(const d of[o-s*.3,o+s*.3]){M(n,"ink",[d-.06,we+.26,-.04,d+.06,a+.4,.04]),M(n,"inkSoft",[d-.14,we+.26,-.12,d+.14,we+.36,.12]);for(const _ of[-1,1]){const g=M(n,"ink",[-.025,-.35,-.025,.025,.35,.025]);g.position.set(d,we+.55,_*.2),g.rotation.x=_*.55}}M(n,"inkSoft",[o-s/2+.2,we+.2,-.28,o+s/2-.2,we+.26,.28])}function bx(n,t,e,i,s){const o=(e-t)/9,a=.95,c=.32,l=i-Math.sin(c)*a,u=s-Math.cos(c)*a,h=new At;h.position.set(0,i,s),h.rotation.x=-c,n.add(h);for(let f=0;f<9;f++){const d=t+f*o,_=f%2?"white":bi().awning;M(h,_,[d,0,-a,d+o,.04,0]);const g=new gt(new hs(o/2,8,Math.PI,Math.PI),Zt(_));g.material.side=Ye,g.position.set(d+o/2,l+.005,u-.004-.002*(f%2)),n.add(g)}}const Ar=5e3,Rr=900,tn={minX:-22,maxX:22,minZ:-26,maxZ:8,top:14},Tx=`
  attribute vec3 seed;
  attribute float tip;
  uniform float time;
  uniform float amount;
  uniform vec3 area;
  uniform vec4 truck;
  varying float vAlpha;
  void main() {
    float fall = mod(seed.y + time * (11.0 + seed.z * 4.0), area.z);
    vec3 p = vec3(seed.x, ${P.toFixed(2)} + area.z - fall, position.z);
    // A little wind: the streak leans, and its tip trails up-wind.
    p.x += fall * 0.06;
    p.y += tip * (0.35 + seed.z * 0.25);
    p.x -= tip * 0.03;
    bool inside = p.x > truck.x && p.x < truck.y && p.z > truck.z && p.z < truck.w && p.y > -0.5;
    bool hidden = seed.z > amount || inside;
    vAlpha = hidden ? 0.0 : (0.35 + 0.4 * (1.0 - tip));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    if (hidden) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  }
`,Ax=`
  uniform vec3 colour;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(colour, vAlpha);
  }
`,Rx=`
  attribute vec2 seed;
  uniform float time;
  uniform float amount;
  uniform float pixelRatio;
  uniform vec4 truck;
  varying float vLife;
  void main() {
    float life = fract(time * (1.6 + seed.y) + seed.x * 7.0);
    vLife = life;
    vec3 p = position;
    bool inside = p.x > truck.x && p.x < truck.y && p.z > truck.z && p.z < truck.w;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.0 + life * 7.0) * pixelRatio * (8.0 / max(1.0, -mv.z));
    if (seed.y > amount || inside) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  }
`,Cx=`
  uniform vec3 colour;
  varying float vLife;
  void main() {
    vec2 d = gl_PointCoord - 0.5;
    float r = length(d * vec2(1.0, 2.2));
    float ring = smoothstep(0.5, 0.38, r) * smoothstep(0.2, 0.36, r);
    gl_FragColor = vec4(colour, ring * (1.0 - vLife) * 0.5);
  }
`;class Px{constructor(){tt(this,"group",new At);tt(this,"streakMaterial");tt(this,"splashMaterial");const t={x:sn.length/2+.15,z:sn.depth/2+.15},e=new ue(-3.15,t.x,-1.3499999999999999,t.z),i=new Float32Array(Ar*2*3),s=new Float32Array(Ar*2*3),r=new Float32Array(Ar*2);for(let f=0;f<Ar;f++){const d=tn.minX+Math.random()*(tn.maxX-tn.minX),_=tn.minZ+Math.random()*(tn.maxZ-tn.minZ),g=Math.random()*tn.top,m=Math.random();for(let p=0;p<2;p++){const x=f*2+p;i.set([d,0,_],x*3),s.set([d,g,m],x*3),r[x]=p}}const o=new Le;o.setAttribute("position",new Ze(i,3)),o.setAttribute("seed",new Ze(s,3)),o.setAttribute("tip",new Ze(r,1)),o.boundingSphere=new as(new R(0,6,-9),60),this.streakMaterial=new An({vertexShader:Tx,fragmentShader:Ax,uniforms:{time:{value:0},amount:{value:0},area:{value:new R(0,0,tn.top)},truck:{value:e},colour:{value:new Bt(.5,.6,.78)}},transparent:!0,depthWrite:!1});const a=new Sl(o,this.streakMaterial);a.frustumCulled=!1,this.group.add(a);const c=new Float32Array(Rr*3),l=new Float32Array(Rr*2);for(let f=0;f<Rr;f++){const d=f<Rr*.6,_=d?-10+Math.random()*20:tn.minX+Math.random()*(tn.maxX-tn.minX),g=d?-12+Math.random()*10:tn.minZ+Math.random()*(tn.maxZ-tn.minZ);c.set([_,P+.05,g],f*3),l.set([Math.random(),Math.random()],f*2)}const u=new Le;u.setAttribute("position",new Ze(c,3)),u.setAttribute("seed",new Ze(l,2)),this.splashMaterial=new An({vertexShader:Rx,fragmentShader:Cx,uniforms:{time:{value:0},amount:{value:0},pixelRatio:{value:1},truck:{value:e},colour:{value:new Bt(.62,.72,.88)}},transparent:!0,depthWrite:!1});const h=new El(u,this.splashMaterial);h.frustumCulled=!1,this.group.add(h)}update(t,e,i){for(const s of[this.streakMaterial,this.splashMaterial])s.uniforms.time.value=t,s.uniforms.amount.value=e;this.splashMaterial.uniforms.pixelRatio.value=i,this.group.visible=e>.001}dispose(){this.group.traverse(t=>{(t instanceof Sl||t instanceof El)&&t.geometry.dispose()}),this.streakMaterial.dispose(),this.splashMaterial.dispose()}}const Lx=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Dx=`
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 resolution;
  uniform float pixelRatio;
  uniform float cameraNear;
  uniform float cameraFar;
  uniform vec3 outlineInk;
  uniform float lens;
  uniform vec3 lensPaper;
  uniform vec3 lensLight;
  uniform vec3 lensDark;
  varying vec2 vUv;

  float viewDepth(vec2 uv) {
    float d = texture2D(tDepth, uv).x;
    return (cameraNear * cameraFar) / ((cameraFar - cameraNear) * d - cameraFar) * -1.0;
  }

  /** 0–1: how strongly this pixel is on the near side of a depth jump. */
  float edge(vec2 uv) {
    vec2 step = pixelRatio / resolution;
    float d = viewDepth(uv);
    float r = viewDepth(uv + vec2(step.x, 0.0));
    float u = viewDepth(uv + vec2(0.0, step.y));
    float l = viewDepth(uv - vec2(step.x, 0.0));
    float b = viewDepth(uv - vec2(0.0, step.y));
    float jump = max(max(r - d, u - d), max(l - d, b - d));
    if (d > cameraFar * 0.9) return 0.0;
    // Relative to distance, so far things get fewer, fainter lines.
    return smoothstep(0.06 * d, 0.12 * d, jump) * (1.0 - smoothstep(12.0, 40.0, d));
  }

  /** The Data Lens look: a teal blueprint on paper, with a grid in the light parts. */
  vec3 blueprint(vec2 px, vec3 c, float e) {
    float l = dot(c, vec3(0.3, 0.59, 0.11));
    float gridSize = 18.0 * pixelRatio;
    bool grid = mod(px.x, gridSize) < pixelRatio || mod(px.y, gridSize) < pixelRatio;
    vec3 base = l > 0.7 ? lensPaper : (l > 0.42 ? mix(lensPaper, lensLight, 0.7) : lensLight);
    if (grid && l > 0.42) base = mix(base, lensLight, 0.8);
    return mix(base, lensDark, e);
  }

  void main() {
    vec3 c = texture2D(tColor, vUv).rgb;
    float e = edge(vUv);
    vec3 world = mix(c, outlineInk, e * 0.55);
    if (lens <= 0.0) { gl_FragColor = vec4(world, 1.0); return; }
    vec3 data = blueprint(vUv * resolution, c, e);
    gl_FragColor = vec4(mix(world, data, smoothstep(0.0, 1.0, lens)), 1.0);
  }
`;class Ix{constructor(){tt(this,"target");tt(this,"material");tt(this,"quad");tt(this,"scene",new Lh);tt(this,"camera",new Za(-1,1,1,-1,0,1));this.target=new oi(1,1,{minFilter:gn,magFilter:gn,depthTexture:new $a(1,1)}),this.material=new An({vertexShader:Lx,fragmentShader:Dx,uniforms:{tColor:{value:this.target.texture},tDepth:{value:this.target.depthTexture},resolution:{value:new ot(1,1)},pixelRatio:{value:1},cameraNear:{value:.05},cameraFar:{value:100},outlineInk:{value:Xi(Wi.ink)},lens:{value:0},lensPaper:{value:Xi(Wi.paper)},lensLight:{value:Xi(Wi.tealLight)},lensDark:{value:Xi(Wi.tealDark)}},depthTest:!1,depthWrite:!1}),this.quad=new gt(new rn(2,2),this.material),this.scene.add(this.quad)}setSize(t,e,i){this.target.setSize(t,e),this.material.uniforms.resolution.value.set(t,e),this.material.uniforms.pixelRatio.value=i}setLens(t){this.material.uniforms.lens.value=Math.min(1,Math.max(0,t))}render(t,e,i){this.material.uniforms.cameraNear.value=i.near,this.material.uniforms.cameraFar.value=i.far,t.setRenderTarget(this.target),t.render(e,i),t.setRenderTarget(null),t.render(this.scene,this.camera)}dispose(){this.target.dispose(),this.material.dispose(),this.quad.geometry.dispose()}}const Cr=[{at:0,sky:"#cfe6ea",sunColour:"#fff1d6",sunLight:.38,ambient:.78,elevation:22,across:-.8,disc:"#fff3c4",lamps:0},{at:.35,sky:"#a8d8ec",sunColour:"#ffffff",sunLight:.45,ambient:.85,elevation:58,across:-.2,disc:"#fff6d8",lamps:0},{at:.62,sky:"#f4d9a6",sunColour:"#ffe2b0",sunLight:.42,ambient:.76,elevation:32,across:.25,disc:"#ffd36b",lamps:0},{at:.82,sky:"#f19a78",sunColour:"#ff9f70",sunLight:.32,ambient:.6,elevation:7,across:.55,disc:"#f2703f",lamps:.5},{at:.92,sky:"#7b5f8f",sunColour:"#c48aa8",sunLight:.16,ambient:.45,elevation:-4,across:.7,disc:"#f2703f",lamps:.9},{at:1,sky:"#2b3354",sunColour:"#9fb0ff",sunLight:.12,ambient:.36,elevation:-10,across:.8,disc:"#e8ecff",lamps:1}];function Ux(n){return Math.min(1,Math.max(0,(n-Ji)/(ln-Ji)))}const Ql=n=>[1,3,5].map(t=>parseInt(n.slice(t,t+2),16)),Nx=n=>`#${n.map(t=>Math.round(t).toString(16).padStart(2,"0")).join("")}`,Xo=(n,t,e)=>Nx(Ql(n).map((i,s)=>i+(Ql(t)[s]-i)*e)),Ts=(n,t,e)=>n+(t-n)*e;function Fx(n){const t=Ux(n);let e=0;for(;e<Cr.length-2&&Cr[e+1].at<=t;)e++;const i=Cr[e],s=Cr[e+1],r=Math.min(1,Math.max(0,(t-i.at)/(s.at-i.at)));return{sky:Xo(i.sky,s.sky,r),sunColour:Xo(i.sunColour,s.sunColour,r),sunLight:Ts(i.sunLight,s.sunLight,r),ambient:Ts(i.ambient,s.ambient,r),elevation:Ts(i.elevation,s.elevation,r),across:Ts(i.across,s.across,r),disc:Xo(i.disc,s.disc,r),lamps:Ts(i.lamps,s.lamps,r)}}const kx={min:{x:le.x-le.r,y:le.y-le.r,z:le.z-.06},max:{x:le.x+le.r,y:le.y+le.r,z:le.z+.02}},Ox=(n,t,e,i)=>{const s=Gh(n,t,e);return s!==null&&s<=i},zx=new Bt(.5,.55,.62),Bx=2,Hx=.0024,Vx=.005,th=70,Gx=50,Wx=42,Pr=1.25,Xx=.45,qx=6;function eh(n){const t=Wh.find(e=>e.object===n);return t?{...t.eye,...i_(t.eye,t.target)}:null}const nh=(n,t)=>((t-n+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;class Kx{constructor(t,e,i){tt(this,"renderer");tt(this,"scene",new Lh);tt(this,"camera",new un(th,16/9,.05,120));tt(this,"veil",new gt(new rn(4,4),new fn({color:"#1a2036",transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1})));tt(this,"filmOffset",0);tt(this,"look",new Ix);tt(this,"ambient",new Zg(16777215,.8*Math.PI));tt(this,"sun",new Nl(16777215,.4*Math.PI));tt(this,"inside",new Vh(16767392,0,7,1.2));tt(this,"setSky",()=>{});tt(this,"updatePlace",()=>{});tt(this,"rain",new Px);tt(this,"showers",[]);tt(this,"rainAmount",0);tt(this,"lastWeather",-1);tt(this,"time",0);tt(this,"flash",0);tt(this,"flashLight",0);tt(this,"nextThunder",20);tt(this,"lastStep",0);tt(this,"devSpeed",1);tt(this,"devRain",null);tt(this,"devSpawn",!1);tt(this,"noclip",!1);tt(this,"ghost",!1);tt(this,"ghostY",Ve);tt(this,"flying",{up:!1,down:!1});tt(this,"statsOn",!1);tt(this,"panelOpen",!1);tt(this,"lookingAtClock",!1);tt(this,"showcase",!1);tt(this,"filmPin",null);tt(this,"place","park");tt(this,"steam",[]);tt(this,"setOpenSign",()=>{});tt(this,"signOpen",!0);tt(this,"statsClock",0);tt(this,"frames",0);tt(this,"lastSkyMinute",-1);tt(this,"observer");tt(this,"offs",[]);tt(this,"frame",0);tt(this,"last",0);tt(this,"destroyed",!1);tt(this,"yaw",No.yaw);tt(this,"pitch",-.12);tt(this,"at",{x:No.x,z:No.z});tt(this,"keys",{forward:!1,back:!1,left:!1,right:!1});tt(this,"dragging",!1);tt(this,"paused",!1);tt(this,"filmManager",!1);tt(this,"aimed",null);tt(this,"touch",!1);tt(this,"queue",new Kg);tt(this,"customers",new Map);tt(this,"dineIn",new zl("park"));tt(this,"diners",new Map);tt(this,"decided",new WeakSet);tt(this,"nextOrder",0);tt(this,"frontOrderId",null);tt(this,"clock",Ji);tt(this,"lastClockMinute",-1);tt(this,"lastPatience","");tt(this,"closed",!1);tt(this,"setWallClock",()=>{});tt(this,"setDoor",()=>{});tt(this,"manager");tt(this,"managerDone",!1);tt(this,"knocking",!1);tt(this,"doorTarget",0);tt(this,"doorAmount",0);tt(this,"lastAnchor","");tt(this,"walkClock",0);tt(this,"lensOn",!1);tt(this,"lockUnavailable",typeof document<"u"&&!("requestPointerLock"in HTMLElement.prototype));tt(this,"freeLook",!1);tt(this,"lensAmount",0);tt(this,"lastCards","");tt(this,"tourView",null);tt(this,"tourTarget",null);tt(this,"tourReturning",!1);tt(this,"allOrders");tt(this,"orders");tt(this,"loop",t=>{if(this.destroyed)return;const e=Math.min((t-this.last)/1e3,.1);this.last=t,this.step(e),this.frame=requestAnimationFrame(this.loop)});this.parent=t,this.bridge=e,M_(i.look),this.managerDone=i.managerDone??!1,this.allOrders=i.orders,this.orders=i.orders.filter(c=>!i.handled.includes(c.id)),this.clock=Math.max(Ji,i.clock),this.showers=S_(Go(i.orders.map(c=>c.id).join("|")),i.forceRain),this.renderer=new ug({antialias:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ti,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,Bx)),this.renderer.domElement.className="truck-canvas",this.renderer.info.autoReset=!1,t.appendChild(this.renderer.domElement),this.scene.background=Vn("peach"),this.scene.fog=new Ja(Vn("lilac"),18,80),this.scene.add(this.ambient,this.sun),this.veil.position.z=-.1,this.veil.renderOrder=999,this.veil.frustumCulled=!1,this.camera.add(this.veil),this.scene.add(this.camera);const s=new Nl(16777215,.15*Math.PI);s.position.set(3,4,8),this.scene.add(s),this.inside.position.set(0,sn.height-.15,0),this.scene.add(this.inside);const r=$_();this.setWallClock=r.userData.setClock,this.setWallClock(this.clock),this.setDoor=r.userData.setDoor,this.manager=G_(),this.manager.position.set(sn.length/2+.42,0,.05),this.manager.rotation.y=Math.PI/2,this.manager.visible=!1,this.place=i.place??"park",this.dineIn=new zl(this.place);const o=Mx(this.place);this.setSky=o.userData.setSky,this.updatePlace=o.userData.update;const a=wx();this.steam=a.userData.steam??[],this.setOpenSign=a.userData.setOpen??(()=>{}),this.scene.add(r,a,o,this.manager,this.rain.group),this.applySky(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.resize(),this.bindInput(),this.offs.push(e.on("serve",()=>this.queue.serveFront()),e.on("pause",c=>this.setPaused(c)),e.on("lens",c=>{this.lensOn=c}),e.on("door",c=>this.doorTarget=c?1:0),e.on("tour",c=>this.setTour(c)),e.on("snapshotRequest",()=>this.bridge.emit("snapshots",this.snapshots())),e.on("lock",()=>this.lockMouse()),e.on("touch",c=>{this.touch=c,c&&this.bridge.emit("locked",!0)}),e.on("touchMove",({x:c,y:l})=>{this.keys={forward:l<-.3,back:l>.3,left:c<-.3,right:c>.3}}),e.on("touchLook",({dx:c,dy:l})=>{if(this.paused||this.panelOpen)return;const u=Vx*vc();this.yaw-=c*u,this.pitch=Math.max(-Pr,Math.min(Pr,this.pitch-l*u))}),e.on("touchUse",()=>this.use()),e.on("dev",c=>this.devCommand(c)),e.on("showcase",c=>this.showcase=c),e.on("filmShot",c=>{const l=c?__(c):null;this.filmPin=l?{...l,since:this.time}:null}),e.on("managerDone",()=>{this.managerDone=!0,this.knocking=!1})),this.paused=e.last("pause")??!1,this.lensOn=e.last("lens")??!1,this.touch=e.last("touch")??!1,this.loop(performance.now())}setFilmOffset(t,e=!1){if(t===this.filmOffset&&!e)return;this.filmOffset=t;const i=Math.max(1,this.parent.clientWidth),s=Math.max(1,this.parent.clientHeight);t===0?this.camera.clearViewOffset():this.camera.setViewOffset(i,s,-t*i,0,i,s)}resize(){const t=Math.max(1,this.parent.clientWidth),e=Math.max(1,this.parent.clientHeight);this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.setFilmOffset(this.filmOffset,!0),this.camera.updateProjectionMatrix();const i=this.renderer.getPixelRatio();this.look.setSize(Math.round(t*i),Math.round(e*i),i)}bindInput(){const t=this.renderer.domElement,e={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},i=h=>f=>{if(this.paused||this.panelOpen)return;h&&f.code!=="Escape"&&!this.lockUnavailable&&document.pointerLockElement!==t&&this.lockMouse();const d=e[f.code];d?(this.keys[d]=h,f.preventDefault()):this.ghost&&(f.code==="Space"||f.code==="ShiftLeft"||f.code==="ShiftRight")?(this.flying[f.code==="Space"?"up":"down"]=h,f.preventDefault()):h&&f.code==="KeyE"&&!this.ghost?this.use():h&&f.code==="KeyL"&&!f.repeat&&this.bridge.emit("lensKey",!0)},s=i(!0),r=i(!1);window.addEventListener("keydown",s),window.addEventListener("keyup",r);const o=h=>{if(this.paused||this.panelOpen)return;const f=this.lockUnavailable&&h.target===t||this.freeLook;if(document.pointerLockElement===t||this.dragging||f){const d=Hx*vc();this.yaw-=h.movementX*d,this.pitch=Math.max(-Pr,Math.min(Pr,this.pitch-h.movementY*d))}},a=h=>{if(!(this.touch||this.paused||this.panelOpen)){if(document.pointerLockElement===t){this.use();return}if(h.preventDefault(),!this.lockUnavailable){this.lockMouse();return}this.dragging=!0,this.use()}},c=()=>this.dragging=!1,l=()=>{const h=document.pointerLockElement===t;if(h&&this.setFreeLook(!1),h&&this.paused){document.exitPointerLock();return}this.bridge.emit("locked",h)},u=()=>{this.lockUnavailable||this.lockRefused()};document.addEventListener("pointerlockerror",u),t.addEventListener("mousedown",a),window.addEventListener("mouseup",c),window.addEventListener("mousemove",o),document.addEventListener("pointerlockchange",l),this.offs.push(()=>{window.removeEventListener("keydown",s),window.removeEventListener("keyup",r),t.removeEventListener("mousedown",a),window.removeEventListener("mouseup",c),window.removeEventListener("mousemove",o),document.removeEventListener("pointerlockchange",l),document.removeEventListener("pointerlockerror",u)})}lockMouse(){var e,i;if(this.touch){this.bridge.emit("locked",!0);return}if(this.lockUnavailable||document.pointerLockElement===this.renderer.domElement)return;const t=s=>{const r=s instanceof Error||s instanceof DOMException?s.name:"";r==="WrongDocumentError"||r==="NotSupportedError"?this.lockUnavailable=!0:this.lockRefused()};try{const s=(i=(e=this.renderer.domElement).requestPointerLock)==null?void 0:i.call(e);s instanceof Promise&&s.catch(t)}catch(s){t(s)}}lockRefused(){!this.paused&&!this.panelOpen&&!this.destroyed&&this.setFreeLook(!0),this.bridge.emit("lockFailed",!0)}setFreeLook(t){this.freeLook=t,this.renderer.domElement.classList.toggle("truck-canvas-free-look",t)}setPaused(t){const e=this.paused&&!t;this.paused=t,e&&this.lockMouse(),this.keys={forward:!1,back:!1,left:!1,right:!1},this.dragging=!1,t&&this.setFreeLook(!1),t&&document.pointerLockElement&&document.exitPointerLock()}use(){!this.paused&&this.aimed&&this.bridge.emit("use",this.aimed)}devCommand(t){switch(t.cmd){case"clock":{this.clock=Math.min(ln,Math.max(this.clock,t.minutes)),this.lastSkyMinute=-1,this.lastClockMinute=Math.floor(this.clock),this.setWallClock(this.clock),this.bridge.emit("clock",Math.floor(this.clock));break}case"speed":this.devSpeed=Math.max(0,t.factor);break;case"rain":this.devRain=t.amount;break;case"spawn":this.devSpawn=!0;break;case"knock":!this.managerDone&&!this.knocking&&(this.knocking=!0,this.bridge.emit("knock",!0));break;case"ghost":this.ghost=t.on,this.noclip=t.on,this.ghostY=Ve,this.flying={up:!1,down:!1},t.on||(this.at=Fo(this.at,this.yaw,{forward:!1,back:!1,left:!1,right:!1},0));break;case"noclip":this.noclip=t.on||this.ghost,t.on||(this.at=Fo(this.at,this.yaw,{forward:!1,back:!1,left:!1,right:!1},0));break;case"stats":this.statsOn=t.on;break;case"panel":this.panelOpen=t.open,this.keys={forward:!1,back:!1,left:!1,right:!1},t.open?(this.setFreeLook(!1),document.pointerLockElement&&document.exitPointerLock()):this.lockMouse();break}}devStats(t){if(!this.statsOn||(this.frames++,this.statsClock+=t,this.statsClock<.5))return;const e=this.renderer.info;this.bridge.emit("devStats",{fps:Math.round(this.frames/this.statsClock),drawCalls:e.render.calls,triangles:e.render.triangles,geometries:e.memory.geometries,textures:e.memory.textures,clock:this.clock,speed:this.devSpeed,rain:this.rainAmount,rainForced:this.devRain!==null,queue:this.queue.line.length,ordersLeft:this.orders.length-this.nextOrder,knocking:this.knocking,managerDone:this.managerDone,noclip:this.noclip,ghost:this.ghost,position:{x:Math.round(this.at.x*10)/10,z:Math.round(this.at.z*10)/10}}),this.frames=0,this.statsClock=0}applySky(){var o,a;const t=Math.floor(this.clock);if(t===this.lastSkyMinute)return;this.lastSkyMinute=t;const e=Fx(this.clock);this.scene.background.set(e.sky),(o=this.scene.fog)==null||o.color.set(e.sky);const i=this.rainAmount;this.scene.background.lerp(zx,i*.6),(a=this.scene.fog)==null||a.color.copy(this.scene.background);const s=this.scene.fog;s.near=18-i*10,s.far=80-i*35,this.ambient.intensity=(e.ambient*(1-i*.2)+this.flashLight*.9)*Math.PI,this.sun.color.set(e.sunColour),this.sun.intensity=e.sunLight*(1-i*.6)*Math.PI;const r=Math.max(e.elevation,5)*Math.PI/180;this.sun.position.set(e.across*10,Math.sin(r)*10,-Math.cos(r)*10),this.inside.intensity=Math.max(e.lamps,i*.5)*1.6*Math.PI,this.setSky(e)}updateWeather(t){this.time+=t;const e=this.devRain??w_(this.showers,this.clock);this.rainAmount+=(e-this.rainAmount)*Math.min(1,t*.8),(Math.abs(this.rainAmount-this.lastWeather)>.02||e===0&&this.rainAmount<.005&&this.lastWeather!==0)&&(e===0&&this.rainAmount<.005&&(this.rainAmount=0),this.lastWeather=this.rainAmount,this.lastSkyMinute=-1,this.bridge.emit("weather",this.rainAmount)),this.rain.update(this.time,this.rainAmount,this.renderer.getPixelRatio()),this.updatePlace(this.time,this.rainAmount),!this.paused&&this.rainAmount>.65&&(this.nextThunder-=t,this.nextThunder<=0&&(this.flash=1,this.nextThunder=18+Math.random()*30,this.bridge.emit("thunder",!0))),this.flash>0&&(this.flash=Math.max(0,this.flash-t*2.5),this.flashLight=this.flash*(Math.sin(this.flash*30)>-.3?1:.3),this.lastSkyMinute=-1)}cameraPose(){const t=new _n().setFromQuaternion(this.camera.quaternion,"YXZ");return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z,yaw:t.y,pitch:t.x}}playerPose(){return{x:this.at.x,y:Ve,z:this.at.z,yaw:this.yaw,pitch:this.pitch}}setTour(t){const e=t?eh(t):null,i=e?{...e,pitch:e.pitch-.06}:null;i?(this.tourView??(this.tourView=this.showcase?this.cameraPose():this.playerPose()),this.tourTarget=i,this.tourReturning=!1):this.tourView&&this.showcase?(this.tourView=null,this.tourTarget=null,this.tourReturning=!1):this.tourView&&(this.tourTarget=this.playerPose(),this.tourReturning=!0)}updateTour(t){if(!this.tourView||!this.tourTarget)return;const e=1-Math.exp(-t*4.5),i=this.tourView,s=this.tourTarget;i.x+=(s.x-i.x)*e,i.y+=(s.y-i.y)*e,i.z+=(s.z-i.z)*e,i.yaw+=nh(i.yaw,s.yaw)*e,i.pitch+=(s.pitch-i.pitch)*e;const r=Math.hypot(s.x-i.x,s.z-i.z)<.01&&Math.abs(nh(i.yaw,s.yaw))<.01;this.tourReturning&&r&&(this.tourView=null,this.tourTarget=null,this.tourReturning=!1)}snapshots(){const t={},e=this.renderer.domElement,i=document.createElement("canvas");i.width=320,i.height=200;const s=i.getContext("2d");if(!s)return t;const r=this.lensAmount;this.look.setLens(0);const o=this.manager.visible;this.manager.visible=!1;const a=this.camera.fov;this.camera.fov=Wx,this.camera.updateProjectionMatrix();for(const c of Wh){const l=eh(c.object);this.camera.position.set(l.x,l.y,l.z),this.camera.rotation.set(l.pitch,l.yaw,0,"YXZ"),this.camera.updateMatrixWorld(),this.look.render(this.renderer,this.scene,this.camera);const u=Math.min(e.width,e.height*i.width/i.height),h=u*i.height/i.width;s.drawImage(e,(e.width-u)/2,(e.height-h)/2,u,h,0,0,i.width,i.height),t[c.object]=i.toDataURL("image/jpeg",.85)}return this.look.setLens(r),this.manager.visible=o,this.camera.fov=a,this.camera.updateProjectionMatrix(),t}step(t){const e=this.paused?0:t;if(this.at=Fo(this.at,this.yaw,this.keys,e,this.noclip),this.ghost){const d=(this.flying.up?1:0)-(this.flying.down?1:0);this.ghostY=Math.max(.3,Math.min(40,this.ghostY+d*4*e))}this.devStats(t);const i=Object.values(this.keys).some(Boolean)&&e>0;this.walkClock+=e;const s=i?Math.sin(this.walkClock*9)*.025:0,r=Math.floor(this.walkClock*9/Math.PI);i&&r!==this.lastStep&&this.bridge.emit("step",!0),this.lastStep=r,this.updateTour(t);const o=this.tourView&&!this.tourReturning?Gx:th;Math.abs(this.camera.fov-o)>.05&&(this.camera.fov+=(o-this.camera.fov)*(1-Math.exp(-t*4.5)),this.camera.updateProjectionMatrix()),this.steam.forEach((d,_)=>{const g=(this.time*.35+_/3)%1;d.position.y=sn.height+1.6+g*.9,d.scale.setScalar(.7+g*.6)});const a=this.showcase&&!this.tourView;if(this.setFilmOffset(a&&this.parent.clientWidth>=800?.17:0),this.veil.material.opacity=0,this.filmManager=!1,a){const d=this.filmPin,_=v_(d?d.start+(this.time-d.since)%d.seconds:this.time);this.filmManager=_.shot==="manager",this.camera.position.set(_.at.x,_.at.y,_.at.z),this.camera.lookAt(_.look.x,_.look.y,_.look.z),this.veil.material.opacity=_.dark*.92}else this.tourView?(this.camera.position.set(this.tourView.x,this.tourView.y,this.tourView.z),this.camera.rotation.set(this.tourView.pitch,this.tourView.yaw,0,"YXZ")):(this.camera.position.set(this.at.x,this.ghost?this.ghostY:Ve+s,this.at.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ"));const c={x:this.at.x,y:Ve,z:this.at.z},l=this.paused||this.ghost?null:n_(c,kl(this.yaw,this.pitch));l!==this.aimed&&(this.aimed=l,this.bridge.emit("hover",l));const u=!this.paused&&!this.ghost&&!this.tourView&&Ox(c,kl(this.yaw,this.pitch),kx,5);u!==this.lookingAtClock&&(this.lookingAtClock=u,this.bridge.emit("lookClock",u)),this.updateCustomers(e);const h=t/Xx;this.lensAmount=Math.min(1,Math.max(0,this.lensAmount+(this.lensOn?h:-h))),this.look.setLens(this.lensAmount),this.doorAmount=Math.min(1,Math.max(0,this.doorAmount+(this.doorTarget||this.filmManager?1:-1)*t*2.2)),this.setDoor(this.doorAmount,this.knocking&&this.doorAmount===0?this.walkClock:void 0),this.manager.visible=(this.knocking||this.filmManager)&&this.doorAmount>.02;const f=this.clock<ln;f!==this.signOpen&&(this.signOpen=f,this.setOpenSign(f)),this.updateWeather(t),this.applySky(),this.renderer.info.reset(),this.look.render(this.renderer,this.scene,this.camera),this.emitAnchor(),this.emitLensCards()}updateClock(t){if(t<=0||this.clock>=ln)return 0;const e=this.queue.line.length===0,i=Math.min(ln-this.clock,t*ou*(e?au:1)*this.devSpeed);this.clock+=i;const s=Math.floor(this.clock);return s!==this.lastClockMinute&&(this.lastClockMinute=s,this.setWallClock(this.clock),this.bridge.emit("clock",s)),i}updateDiners(t,e){const i=Xh(this.place);for(const s of[...this.queue.leaving]){if(s.walkOff!=="on"||s.x<i.at||this.decided.has(s))continue;this.decided.add(s);const r=this.customers.get(s),o=Go(`${s.orderId}:eat-in`)%1e3/1e3,a=!!(r!=null&&r.hipY)&&this.clock<ln-30,c=r?this.dineIn.tryToSit(s.orderId,o,a):null;!c||!r||(this.queue.release(s),this.customers.delete(s),this.diners.set(c,{model:r,cup:null}))}for(const s of this.dineIn.update(t,e)){const r=this.diners.get(s);if(this.diners.delete(s),!r)continue;r.cup&&this.scene.remove(r.cup),this.resetPose(r.model);const o=this.queue.walkOn(s.orderId,i.at);this.decided.add(o),this.customers.set(o,r.model)}for(const[s,r]of this.diners){const{model:o}=r;if(s.state==="sitting"){const u=s.seat,h=o.hipY??.86,f=u.height+.03;o.root.position.set(u.x,P+f-h,u.z);const d=Math.atan2(Math.sin(u.yaw-o.root.rotation.y),Math.cos(u.yaw-o.root.rotation.y));o.root.rotation.y+=d*Math.min(1,t*10);const _=Math.max(1,Math.acos(Math.min(1,f/h)));o.legs[0].rotation.x=_,o.legs[1].rotation.x=_;const g=Math.max(0,Math.sin(this.walkClock*.9+u.x*3)-.85)/.15;o.arms[0].rotation.x=.55+g*1.1,o.arms[1].rotation.x=.4,!r.cup&&u.cup&&(r.cup=this.takeawayCup(),r.cup.position.set(u.cup.x,P+u.cup.y,u.cup.z),this.scene.add(r.cup));continue}const a=qh(s.path,s.walked);o.root.position.set(a.x,P,a.z);const c=Math.atan2(Math.sin(a.yaw-o.root.rotation.y),Math.cos(a.yaw-o.root.rotation.y));o.root.rotation.y+=c*Math.min(1,t*8);const l=Math.sin(this.walkClock*8+a.x)*.55;o.legs[0].rotation.x=l,o.legs[1].rotation.x=-l,o.arms[0].rotation.x=-l*.8,o.arms[1].rotation.x=l*.8,r.cup&&s.state==="leaving"&&(this.scene.remove(r.cup),r.cup=null)}}resetPose(t){t.root.position.y=P;for(const e of[...t.legs,...t.arms])e.rotation.x=0}takeawayCup(){const t=new At,e=new gt(new ft(.04,.032,.11,8),new kr({color:Vn("white"),flatShading:!0}));e.position.y=.055;const i=new gt(new ft(.0395,.035,.035,8),new kr({color:Vn("red"),flatShading:!0}));i.position.y=.05,i.scale.setScalar(1.03);const s=new gt(new ft(.043,.043,.015,8),new kr({color:Vn("ink"),flatShading:!0}));return s.position.y=.117,t.add(e,i,s),t}updateCustomers(t){const e=this.updateClock(t),i=this.orders[this.nextOrder],s=this.devSpawn||this.clock>=cu(this.allOrders.indexOf(i));if(i&&this.clock<ln&&s&&this.queue.canJoin()&&t>0){this.devSpawn=!1;const h=this.orders[this.nextOrder++],f=this.queue.join(h.id);if(f){this.bridge.emit("arrive",!0);const d=Kh(h.look,Go(h.id));this.scene.add(d.root),this.customers.set(f,d)}}for(const h of[...this.queue.line])this.ghost||(h.waited+=e,h.waited>=xc&&(this.queue.giveUp(h),this.bridge.emit("gaveUp",h.orderId)));for(const h of this.queue.update(t)){const f=this.customers.get(h);f&&this.scene.remove(f.root),this.customers.delete(h)}this.updateDiners(t,e);for(const[h,f]of this.customers){const d=Oo(h.x,this.place),_=h.state!=="waiting";f.root.position.set(d.x,P,d.z);const g=_?d.yaw:s_,m=Math.atan2(Math.sin(g-f.root.rotation.y),Math.cos(g-f.root.rotation.y));f.root.rotation.y+=m*Math.min(1,t*8);const p=_?Math.sin(this.walkClock*8+d.x)*.55:0;if(f.legs[0].rotation.x=p,f.legs[1].rotation.x=-p,f.arms[0].rotation.x=-p*.8,f.arms[1].rotation.x=p*.8,f.card){const x=Math.atan2(this.camera.position.x-d.x,this.camera.position.z-d.z);f.card.mesh.rotation.y=x-f.root.rotation.y;const y=_&&Math.sin(this.walkClock*8+d.x)>0?1:0,v=f.card.mesh.material;v.map!==f.card.frames[y]&&(v.map=f.card.frames[y],v.needsUpdate=!0),f.card.mesh.position.y=.855+(_?Math.abs(Math.sin(this.walkClock*8+d.x))*.05:0)}}this.ghost&&this.queue.front()&&this.queue.serveFront();const r=this.queue.front(),o=(r==null?void 0:r.orderId)??null;o!==this.frontOrderId&&(this.frontOrderId=o,this.bridge.emit("front",r?{orderId:r.orderId}:null));const a=r?{orderId:r.orderId,left:Math.max(0,1-r.waited/xc)}:null,c=a?`${a.orderId}:${a.left.toFixed(2)}`:"";c!==this.lastPatience&&(this.lastPatience=c,this.bridge.emit("patience",a));const u=(this.clock>=ln||this.nextOrder>=this.orders.length)&&this.queue.line.length===0;!this.ghost&&!this.managerDone&&!this.knocking&&this.clock<ln&&(this.clock>=lu||u)&&(this.knocking=!0,this.bridge.emit("knock",!0)),this.clock>=ln&&this.knocking&&this.doorTarget===0&&(this.knocking=!1),!this.closed&&u&&(this.managerDone||this.clock>=ln)&&(this.closed=!0,this.bridge.emit("closed",!0))}emitAnchor(){const t=this.queue.front();let e=null;if(t){const s=Oo(t.x,this.place),r=new R(s.x,P+1.95,s.z).project(this.camera);r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1&&(e={x:(r.x+1)/2,y:(1-r.y)/2})}const i=e?`${e.x.toFixed(3)},${e.y.toFixed(3)}`:"";i!==this.lastAnchor&&(this.lastAnchor=i,this.bridge.emit("anchor",e))}emitLensCards(){const t=[];if(this.lensAmount>.5){const i=(r,o,a,c)=>{const l=c.distanceTo(this.camera.position),u=c.clone().project(this.camera);l<=qx&&u.z<1&&Math.abs(u.x)<1&&Math.abs(u.y)<1&&t.push({id:r,tables:o,object:a,x:(u.x+1)/2,y:(1-u.y)/2,distance:l})};for(const r of Qg){const o=t_(r.box);i(r.id,r.tables,r.object,new R(o.x,o.y,o.z))}const s=this.queue.front();if(s){const r=Oo(s.x,this.place);i("customer",["customers"],"tablet",new R(r.x-.55,P+1.6,r.z))}}const e=t.map(i=>`${i.id}:${i.x.toFixed(3)},${i.y.toFixed(3)}`).join("|");e!==this.lastCards&&(this.lastCards=e,this.bridge.emit("lensCards",t))}destroy(){this.destroyed=!0,cancelAnimationFrame(this.frame),this.observer.disconnect(),this.offs.forEach(t=>t()),document.pointerLockElement&&document.exitPointerLock(),this.look.dispose(),this.rain.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}export{Kx as TruckGame};
