var Qh=Object.defineProperty;var tu=(n,t,e)=>t in n?Qh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var tt=(n,t,e)=>tu(n,typeof t!="symbol"?t+"":t,e);import{C as rn,O as Zi,l as eu,G as nu,Q as iu,a as su,P as mc,K as ru}from"./index-BXlyr04v.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="170",ou=0,gc=1,au=2,eh=1,cu=2,zn=3,si=0,Je=1,Ve=2,ni=0,Wi=1,_c=2,xc=3,vc=4,lu=5,_i=100,hu=101,uu=102,fu=103,du=104,pu=200,mu=201,gu=202,_u=203,Go=204,Wo=205,xu=206,vu=207,Mu=208,yu=209,Su=210,wu=211,Eu=212,bu=213,Tu=214,Xo=0,qo=1,Yo=2,Ki=3,Zo=4,Ko=5,$o=6,Jo=7,Gr=0,Au=1,Ru=2,ii=0,Cu=1,Pu=2,Lu=3,Du=4,Iu=5,Uu=6,Nu=7,nh=300,$i=301,Ji=302,jo=303,Qo=304,Wr=306,ta=1e3,vi=1001,ea=1002,En=1003,Fu=1004,Ks=1005,pn=1006,Kr=1007,Mi=1008,Wn=1009,ih=1010,sh=1011,Ps=1012,Fa=1013,yi=1014,Hn=1015,Ns=1016,Oa=1017,ka=1018,ji=1020,rh=35902,oh=1021,ah=1022,wn=1023,ch=1024,lh=1025,Xi=1026,Qi=1027,hh=1028,za=1029,uh=1030,Ba=1031,Ha=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,na=35840,ia=35841,sa=35842,ra=35843,oa=36196,aa=37492,ca=37496,la=37808,ha=37809,ua=37810,fa=37811,da=37812,pa=37813,ma=37814,ga=37815,_a=37816,xa=37817,va=37818,Ma=37819,ya=37820,Sa=37821,Lr=36492,wa=36494,Ea=36495,fh=36283,ba=36284,Ta=36285,Aa=36286,Ou=3200,ku=3201,Va=0,zu=1,ei="",on="srgb",wi="srgb-linear",Xr="linear",ue="srgb",bi=7680,Mc=519,Bu=512,Hu=513,Vu=514,dh=515,Gu=516,Wu=517,Xu=518,qu=519,yc=35044,Sc="300 es",Vn=2e3,Nr=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,Ra=180/Math.PI;function is(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Oe(n,t,e){return Math.max(t,Math.min(e,n))}function Yu(n,t){return(n%t+t)%t}function Jr(n,t,e){return(1-e)*n+e*t}function us(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,s,r,o,a,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],v=s[1],M=s[4],x=s[7],U=s[2],A=s[5],P=s[8];return r[0]=o*g+a*v+c*U,r[3]=o*m+a*M+c*A,r[6]=o*p+a*x+c*P,r[1]=l*g+u*v+h*U,r[4]=l*m+u*M+h*A,r[7]=l*p+u*x+h*P,r[2]=f*g+d*v+_*U,r[5]=f*m+d*M+_*A,r[8]=f*p+d*x+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,_=e*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(s*l-u*i)*g,t[2]=(a*i-s*o)*g,t[3]=f*g,t[4]=(u*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=d*g,t[7]=(i*c-l*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jr.makeScale(t,e)),this}rotate(t){return this.premultiply(jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jr=new Vt;function ph(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zu(){const n=Fr("canvas");return n.style.display="block",n}const wc={};function Es(n){n in wc||(wc[n]=!0,console.warn(n))}function Ku(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function $u(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ju(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(n.r=Gn(n.r),n.g=Gn(n.g),n.b=Gn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(n.r=qi(n.r),n.g=qi(n.g),n.b=qi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ei?Xr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ec=[.64,.33,.3,.6,.15,.06],bc=[.2126,.7152,.0722],Tc=[.3127,.329],Ac=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[wi]:{primaries:Ec,whitePoint:Tc,transfer:Xr,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:bc,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:Ec,whitePoint:Tc,transfer:ue,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:bc,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});let Ti;class ju{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Fr("canvas")),Ti.width=t.width,Ti.height=t.height;const i=Ti.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gn(e[i]/255)*255):e[i]=Gn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qu=0;class mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qr(s[o].image)):r.push(Qr(s[o]))}else r=Qr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Qr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tf=0;class We extends ns{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=vi,s=vi,r=pn,o=Mi,a=wn,c=Wn,l=We.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=is(),this.name="",this.source=new mh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=nh;We.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,i=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(d+1)/2,U=(p+1)/2,A=(u+f)/4,P=(h+g)/4,C=(_+m)/4;return M>x&&M>U?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=P/i):x>U?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=C/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=P/r,s=C/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-g)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ef extends ns{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new We(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends ef{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class gh extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nf extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||c!==f||l!==d||u!==_){let m=1-a;const p=c*f+l*d+u*_+h*g,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const U=Math.sqrt(M),A=Math.atan2(U,p*v);m=Math.sin(m*A)/U,a=Math.sin(a*A)/U}const x=a*v;if(c=c*m+f*x,l=l*m+d*x,u=u*m+_*x,h=h*m+g*x,m===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=U,l*=U,u*=U,h*=U}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+u*h+c*d-l*f,t[e+1]=c*_+u*f+l*h-a*d,t[e+2]=l*_+u*d+a*f-c*h,t[e+3]=u*_-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new R,Cc=new Fs;class Os{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(t.matrixWorld),this.union($s)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Js.subVectors(this.max,fs),Ai.subVectors(t.a,fs),Ri.subVectors(t.b,fs),Ci.subVectors(t.c,fs),Yn.subVectors(Ri,Ai),Zn.subVectors(Ci,Ri),ci.subVectors(Ai,Ci);let e=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-ci.z,ci.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,ci.z,0,-ci.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-ci.y,ci.x,0];return!eo(e,Ai,Ri,Ci,Js)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,Ai,Ri,Ci,Js))?!1:(js.crossVectors(Yn,Zn),e=[js.x,js.y,js.z],eo(e,Ai,Ri,Ci,Js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new R,new R,new R,new R,new R,new R,new R,new R],xn=new R,$s=new Os,Ai=new R,Ri=new R,Ci=new R,Yn=new R,Zn=new R,ci=new R,fs=new R,Js=new R,js=new R,li=new R;function eo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){li.fromArray(n,r);const a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),c=t.dot(li),l=e.dot(li),u=i.dot(li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const sf=new Os,ds=new R,no=new R;class ss{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):sf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ds,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(no)),this.expandByPoint(ds.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new R,io=new R,Qs=new R,Kn=new R,so=new R,tr=new R,ro=new R;class Ga{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){io.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(io);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Qs),a=Kn.dot(this.direction),c=-Kn.dot(Qs),l=Kn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(io).addScaledVector(Qs,f),d}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const i=Un.dot(this.direction),s=Un.dot(Un)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,i,s,r){so.subVectors(e,t),tr.subVectors(i,t),ro.crossVectors(so,tr);let o=this.direction.dot(ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const c=a*this.direction.dot(tr.crossVectors(Kn,tr));if(c<0)return null;const l=a*this.direction.dot(so.cross(Kn));if(l<0||c+l>o)return null;const u=-a*Kn.dot(ro);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,i,s,r,o,a,c,l,u,h,f,d,_,g,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,f,d,_,g,m)}set(t,e,i,s,r,o,a,c,l,u,h,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,_=l*u,g=l*h;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,_=l*u,g=l*h;e[0]=f-g*a,e[4]=-o*h,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=c*u,e[4]=_*l-d,e[8]=f*l+g,e[1]=c*h,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rf,t,of)}lookAt(t,e,i){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),$n.crossVectors(i,en),$n.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),$n.crossVectors(i,en)),$n.normalize(),er.crossVectors(en,$n),s[0]=$n.x,s[4]=er.x,s[8]=en.x,s[1]=$n.y,s[5]=er.y,s[9]=en.y,s[2]=$n.z,s[6]=er.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],v=i[3],M=i[7],x=i[11],U=i[15],A=s[0],P=s[4],C=s[8],E=s[12],S=s[1],D=s[5],G=s[9],z=s[13],X=s[2],j=s[6],W=s[10],et=s[14],q=s[3],ct=s[7],B=s[11],nt=s[15];return r[0]=o*A+a*S+c*X+l*q,r[4]=o*P+a*D+c*j+l*ct,r[8]=o*C+a*G+c*W+l*B,r[12]=o*E+a*z+c*et+l*nt,r[1]=u*A+h*S+f*X+d*q,r[5]=u*P+h*D+f*j+d*ct,r[9]=u*C+h*G+f*W+d*B,r[13]=u*E+h*z+f*et+d*nt,r[2]=_*A+g*S+m*X+p*q,r[6]=_*P+g*D+m*j+p*ct,r[10]=_*C+g*G+m*W+p*B,r[14]=_*E+g*z+m*et+p*nt,r[3]=v*A+M*S+x*X+U*q,r[7]=v*P+M*D+x*j+U*ct,r[11]=v*C+M*G+x*W+U*B,r[15]=v*E+M*z+x*et+U*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*d-i*c*d)+g*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],v=h*m*l-g*f*l+g*c*d-a*m*d-h*c*p+a*f*p,M=_*f*l-u*m*l-_*c*d+o*m*d+u*c*p-o*f*p,x=u*g*l-_*h*l+_*a*d-o*g*d-u*a*p+o*h*p,U=_*h*c-u*g*c-_*a*f+o*g*f+u*a*m-o*h*m,A=e*v+i*M+s*x+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=v*P,t[1]=(g*f*r-h*m*r-g*s*d+i*m*d+h*s*p-i*f*p)*P,t[2]=(a*m*r-g*c*r+g*s*l-i*m*l-a*s*p+i*c*p)*P,t[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*d-i*c*d)*P,t[4]=M*P,t[5]=(u*m*r-_*f*r+_*s*d-e*m*d-u*s*p+e*f*p)*P,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*p-e*c*p)*P,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*P,t[8]=x*P,t[9]=(_*h*r-u*g*r-_*i*d+e*g*d+u*i*p-e*h*p)*P,t[10]=(o*g*r-_*a*r+_*i*l-e*g*l-o*i*p+e*a*p)*P,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*d-e*a*d)*P,t[12]=U*P,t[13]=(u*g*s-_*h*s+_*i*f-e*g*f-u*i*m+e*h*m)*P,t[14]=(_*a*s-o*g*s-_*i*c+e*g*c+o*i*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*f+e*a*f)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,_=r*h,g=o*u,m=o*h,p=a*h,v=c*l,M=c*u,x=c*h,U=i.x,A=i.y,P=i.z;return s[0]=(1-(g+p))*U,s[1]=(d+x)*U,s[2]=(_-M)*U,s[3]=0,s[4]=(d-x)*A,s[5]=(1-(f+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(_+M)*P,s[9]=(m-v)*P,s[10]=(1-(f+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const o=Pi.set(s[4],s[5],s[6]).length(),a=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const l=1/r,u=1/o,h=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Vn){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,_;if(a===Vn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Nr)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Vn){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*l,d=(i+s)*u;let _,g;if(a===Vn)_=(o+r)*h,g=-2*h;else if(a===Nr)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Pi=new R,vn=new me,rf=new R(0,0,0),of=new R(1,1,1),$n=new R,er=new R,en=new R,Pc=new me,Lc=new Fs;class mn{constructor(t=0,e=0,i=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let af=0;const Dc=new R,Li=new Fs,Nn=new me,nr=new R,ps=new R,cf=new R,lf=new Fs,Ic=new R(1,0,0),Uc=new R(0,1,0),Nc=new R(0,0,1),Fc={type:"added"},hf={type:"removed"},Di={type:"childadded",child:null},oo={type:"childremoved",child:null};class Pe extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new R,e=new mn,i=new Fs,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Vt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Uc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Uc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?nr.copy(t):nr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ps,nr,this.up):Nn.lookAt(nr,ps,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Nn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fc),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fc),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new R(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new R,Fn=new R,ao=new R,On=new R,Ii=new R,Ui=new R,Oc=new R,co=new R,lo=new R,ho=new R,uo=new ce,fo=new ce,po=new ce;class Sn{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Mn.subVectors(s,e),Fn.subVectors(i,e),ao.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot(Fn),c=Mn.dot(ao),l=Fn.dot(Fn),u=Fn.dot(ao),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(o,On.y),c.addScaledVector(a,On.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return uo.setScalar(0),fo.setScalar(0),po.setScalar(0),uo.fromBufferAttribute(t,e),fo.fromBufferAttribute(t,i),po.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(uo,r.x),o.addScaledVector(fo,r.y),o.addScaledVector(po,r.z),o}static isFrontFacing(t,e,i,s){return Mn.subVectors(i,e),Fn.subVectors(t,e),Mn.cross(Fn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Mn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ii.subVectors(s,i),Ui.subVectors(r,i),co.subVectors(t,i);const c=Ii.dot(co),l=Ui.dot(co);if(c<=0&&l<=0)return e.copy(i);lo.subVectors(t,s);const u=Ii.dot(lo),h=Ui.dot(lo);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Ii,o);ho.subVectors(t,r);const d=Ii.dot(ho),_=Ui.dot(ho);if(_>=0&&d<=_)return e.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Ui,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Oc.subVectors(r,s),a=(h-u)/(h-u+(d-_)),e.copy(s).addScaledVector(Oc,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(i).addScaledVector(Ii,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function mo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=Yu(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=mo(o,r,t+1/3),this.g=mo(o,r,t),this.b=mo(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=on){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const i=xh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Qt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Oe(Be.r*255,0,255))*65536+Math.round(Oe(Be.g*255,0,255))*256+Math.round(Oe(Be.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Be.copy(this),e);const i=Be.r,s=Be.g,r=Be.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=on){Qt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,i=Be.g,s=Be.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(ir);const i=Jr(Jn.h,ir.h,e),s=Jr(Jn.s,ir.s,e),r=Jr(Jn.l,ir.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new zt;zt.NAMES=xh;let uf=0;class oi extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=is(),this.name="",this.blending=Wi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Go&&(i.blendSrc=this.blendSrc),this.blendDst!==Wo&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cn extends oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new R,sr=new ot;class Ge{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=us(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class vh extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Mh extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class te extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ff=0;const un=new me,go=new Pe,Ni=new R,nn=new Os,ms=new Os,Ue=new R;class Le extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ph(t)?Mh:vh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,i){return un.makeTranslation(t,e,i),this.applyMatrix4(un),this}scale(t,e,i){return un.makeScale(t,e,i),this.applyMatrix4(un),this}lookAt(t){return go.lookAt(t),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(nn.min,ms.min),nn.expandByPoint(Ue),Ue.addVectors(nn.max,ms.max),nn.expandByPoint(Ue)):(nn.expandByPoint(ms.min),nn.expandByPoint(ms.max))}nn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ue.fromBufferAttribute(a,l),c&&(Ni.fromBufferAttribute(t,l),Ue.add(Ni)),s=Math.max(s,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new R,c[C]=new R;const l=new R,u=new R,h=new R,f=new ot,d=new ot,_=new ot,g=new R,m=new R;function p(C,E,S){l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,E),_.fromBufferAttribute(r,S),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),a[C].add(g),a[E].add(g),a[S].add(g),c[C].add(m),c[E].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,E=v.length;C<E;++C){const S=v[C],D=S.start,G=S.count;for(let z=D,X=D+G;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new R,x=new R,U=new R,A=new R;function P(C){U.fromBufferAttribute(s,C),A.copy(U);const E=a[C];M.copy(E),M.sub(U.multiplyScalar(U.dot(E))).normalize(),x.crossVectors(A,E);const D=x.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,D)}for(let C=0,E=v.length;C<E;++C){const S=v[C],D=S.start,G=S.count;for(let z=D,X=D+G;z<X;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,h=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new Ge(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new me,hi=new Ga,rr=new ss,zc=new R,or=new R,ar=new R,cr=new R,_o=new R,lr=new R,Bc=new R,hr=new R;class Mt extends Pe{constructor(t=new Le,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(_o.fromBufferAttribute(h,t),o?lr.addScaledVector(_o,u):lr.addScaledVector(_o.sub(e),u))}e.add(lr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(rr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(rr,zc)===null||hi.origin.distanceToSquared(zc)>(t.far-t.near)**2))&&(kc.copy(r).invert(),hi.copy(t.ray).applyMatrix4(kc),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,U=M;x<U;x+=3){const A=a.getX(x),P=a.getX(x+1),C=a.getX(x+2);s=ur(this,p,t,i,l,u,h,A,P,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=ur(this,o,t,i,l,u,h,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,U=M;x<U;x+=3){const A=x,P=x+1,C=x+2;s=ur(this,p,t,i,l,u,h,A,P,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const v=m,M=m+1,x=m+2;s=ur(this,o,t,i,l,u,h,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function df(n,t,e,i,s,r,o,a){let c;if(t.side===Je?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===si,a),c===null)return null;hr.copy(a),hr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(hr);return l<e.near||l>e.far?null:{distance:l,point:hr.clone(),object:n}}function ur(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,or),n.getVertexPosition(c,ar),n.getVertexPosition(l,cr);const u=df(n,t,e,i,or,ar,cr,Bc);if(u){const h=new R;Sn.getBarycoord(Bc,or,ar,cr,h),s&&(u.uv=Sn.getInterpolatedAttribute(s,a,c,l,h,new ot)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,a,c,l,h,new ot)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,c,l,h,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};Sn.getNormal(or,ar,cr,f.normal),u.face=f,u.barycoord=h}return u}class Ee extends Le{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(h,2));function _(g,m,p,v,M,x,U,A,P,C,E){const S=x/P,D=U/C,G=x/2,z=U/2,X=A/2,j=P+1,W=C+1;let et=0,q=0;const ct=new R;for(let B=0;B<W;B++){const nt=B*D-z;for(let gt=0;gt<j;gt++){const Lt=gt*S-G;ct[g]=Lt*v,ct[m]=nt*M,ct[p]=X,l.push(ct.x,ct.y,ct.z),ct[g]=0,ct[m]=0,ct[p]=A>0?1:-1,u.push(ct.x,ct.y,ct.z),h.push(gt/P),h.push(1-B/C),et+=1}}for(let B=0;B<C;B++)for(let nt=0;nt<P;nt++){const gt=f+nt+j*B,Lt=f+nt+j*(B+1),Z=f+(nt+1)+j*(B+1),rt=f+(nt+1)+j*B;c.push(gt,Lt,rt),c.push(Lt,Z,rt),q+=6}a.addGroup(d,q,E),d+=q,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ts(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=ts(n[e]);for(const s in i)t[s]=i[s]}return t}function pf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function yh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const mf={clone:ts,merge:He};var gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Sh extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new R,Hc=new ot,Vc=new ot;class an extends Sh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Hc,Vc),e.subVectors(Vc,Hc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class xf extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Fi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new an(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const o=new an(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const a=new an(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const c=new an(Fi,Oi,t,e);c.layers=this.layers,this.add(c);const l=new an(Fi,Oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class wh extends We{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:$i,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vf extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new wh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:ni});r.uniforms.tEquirect.value=e;const o=new Mt(s,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=pn),new xf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const xo=new R,Mf=new R,yf=new Vt;class mi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=xo.subVectors(i,e).cross(Mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(xo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yf.getNormalMatrix(t),s=this.coplanarPoint(xo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new ss,fr=new R;class Wa{constructor(t=new mi,e=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],_=s[9],g=s[10],m=s[11],p=s[12],v=s[13],M=s[14],x=s[15];if(i[0].setComponents(c-r,f-l,m-d,x-p).normalize(),i[1].setComponents(c+r,f+l,m+d,x+p).normalize(),i[2].setComponents(c+o,f+u,m+_,x+v).normalize(),i[3].setComponents(c-o,f-u,m-_,x-v).normalize(),i[4].setComponents(c-a,f-h,m-g,x-M).normalize(),e===Vn)i[5].setComponents(c+a,f+h,m+g,x+M).normalize();else if(e===Nr)i[5].setComponents(a,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Sf(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Qe extends Le{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let M=0;M<l;M++){const x=M*h-r;_.push(x,-v,0),g.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+l*p,x=v+l*(p+1),U=v+1+l*(p+1),A=v+1+l*p;d.push(M,x,A),d.push(x,U,A)}this.setIndex(d),this.setAttribute("position",new te(_,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
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
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cf=`#ifdef USE_AOMAP
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
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf=`#ifdef USE_BATCHING
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
#endif`,Df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
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
#endif`,Of=`#ifdef USE_BUMPMAP
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qf=`#define PI 3.141592653589793
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
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
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
}`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
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
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Md=`PhysicalMaterial material;
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
#endif`,yd=`struct PhysicalMaterial {
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
}`,Sd=`
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dd=`#if defined( USE_POINTS_UV )
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
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
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
#endif`,zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
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
#endif`,qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ap=`float getShadowMask() {
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
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#ifdef USE_TRANSMISSION
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`#include <common>
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
}`,Cp=`#if DEPTH_PACKING == 3200
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
}`,Pp=`#define DISTANCE
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
}`,Lp=`#define DISTANCE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`uniform float scale;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,Op=`uniform vec3 diffuse;
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
}`,kp=`#define LAMBERT
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
}`,zp=`#define LAMBERT
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
}`,Bp=`#define MATCAP
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
}`,Hp=`#define MATCAP
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
}`,Vp=`#define NORMAL
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
}`,Gp=`#define NORMAL
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
}`,Wp=`#define PHONG
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
}`,Xp=`#define PHONG
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
}`,qp=`#define STANDARD
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
}`,Yp=`#define STANDARD
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
}`,Zp=`#define TOON
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
}`,Kp=`#define TOON
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
}`,$p=`uniform float size;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Qp=`uniform vec3 color;
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
}`,t0=`uniform float rotation;
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
}`,e0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:wf,alphahash_pars_fragment:Ef,alphamap_fragment:bf,alphamap_pars_fragment:Tf,alphatest_fragment:Af,alphatest_pars_fragment:Rf,aomap_fragment:Cf,aomap_pars_fragment:Pf,batching_pars_vertex:Lf,batching_vertex:Df,begin_vertex:If,beginnormal_vertex:Uf,bsdfs:Nf,iridescence_fragment:Ff,bumpmap_pars_fragment:Of,clipping_planes_fragment:kf,clipping_planes_pars_fragment:zf,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:Hf,color_fragment:Vf,color_pars_fragment:Gf,color_pars_vertex:Wf,color_vertex:Xf,common:qf,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Kf,displacementmap_vertex:$f,emissivemap_fragment:Jf,emissivemap_pars_fragment:jf,colorspace_fragment:Qf,colorspace_pars_fragment:td,envmap_fragment:ed,envmap_common_pars_fragment:nd,envmap_pars_fragment:id,envmap_pars_vertex:sd,envmap_physical_pars_fragment:md,envmap_vertex:rd,fog_vertex:od,fog_pars_vertex:ad,fog_fragment:cd,fog_pars_fragment:ld,gradientmap_pars_fragment:hd,lightmap_pars_fragment:ud,lights_lambert_fragment:fd,lights_lambert_pars_fragment:dd,lights_pars_begin:pd,lights_toon_fragment:gd,lights_toon_pars_fragment:_d,lights_phong_fragment:xd,lights_phong_pars_fragment:vd,lights_physical_fragment:Md,lights_physical_pars_fragment:yd,lights_fragment_begin:Sd,lights_fragment_maps:wd,lights_fragment_end:Ed,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:Rd,map_fragment:Cd,map_pars_fragment:Pd,map_particle_fragment:Ld,map_particle_pars_fragment:Dd,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Ud,morphinstance_vertex:Nd,morphcolor_vertex:Fd,morphnormal_vertex:Od,morphtarget_pars_vertex:kd,morphtarget_vertex:zd,normal_fragment_begin:Bd,normal_fragment_maps:Hd,normal_pars_fragment:Vd,normal_pars_vertex:Gd,normal_vertex:Wd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:qd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:Kd,opaque_fragment:$d,packing:Jd,premultiplied_alpha_fragment:jd,project_vertex:Qd,dithering_fragment:tp,dithering_pars_fragment:ep,roughnessmap_fragment:np,roughnessmap_pars_fragment:ip,shadowmap_pars_fragment:sp,shadowmap_pars_vertex:rp,shadowmap_vertex:op,shadowmask_pars_fragment:ap,skinbase_vertex:cp,skinning_pars_vertex:lp,skinning_vertex:hp,skinnormal_vertex:up,specularmap_fragment:fp,specularmap_pars_fragment:dp,tonemapping_fragment:pp,tonemapping_pars_fragment:mp,transmission_fragment:gp,transmission_pars_fragment:_p,uv_pars_fragment:xp,uv_pars_vertex:vp,uv_vertex:Mp,worldpos_vertex:yp,background_vert:Sp,background_frag:wp,backgroundCube_vert:Ep,backgroundCube_frag:bp,cube_vert:Tp,cube_frag:Ap,depth_vert:Rp,depth_frag:Cp,distanceRGBA_vert:Pp,distanceRGBA_frag:Lp,equirect_vert:Dp,equirect_frag:Ip,linedashed_vert:Up,linedashed_frag:Np,meshbasic_vert:Fp,meshbasic_frag:Op,meshlambert_vert:kp,meshlambert_frag:zp,meshmatcap_vert:Bp,meshmatcap_frag:Hp,meshnormal_vert:Vp,meshnormal_frag:Gp,meshphong_vert:Wp,meshphong_frag:Xp,meshphysical_vert:qp,meshphysical_frag:Yp,meshtoon_vert:Zp,meshtoon_frag:Kp,points_vert:$p,points_frag:Jp,shadow_vert:jp,shadow_frag:Qp,sprite_vert:t0,sprite_frag:e0},at={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Cn={basic:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:He([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:He([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:He([at.points,at.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:He([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:He([at.common,at.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:He([at.sprite,at.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:He([at.common,at.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:He([at.lights,at.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Cn.physical={uniforms:He([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const dr={r:0,b:0,g:0},fi=new mn,n0=new me;function i0(n,t,e,i,s,r,o){const a=new zt(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function _(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function g(v){let M=!1;const x=_(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,M){const x=_(M);x&&(x.isCubeTexture||x.mapping===Wr)?(u===void 0&&(u=new Mt(new Ee(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:ts(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),fi.copy(M.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(fi)),u.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ue,(h!==x||f!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Mt(new Qe(2,2),new bn({name:"BackgroundMaterial",uniforms:ts(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(dr,yh(n)),i.buffers.color.setClear(dr.r,dr.g,dr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:g,addToRenderList:m}}function s0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,D,G,z,X){let j=!1;const W=h(z,G,D);r!==W&&(r=W,l(r.object)),j=d(S,z,G,X),j&&_(S,z,G,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(S,D,G,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,D,G){const z=G.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let j=X[D.id];j===void 0&&(j={},X[D.id]=j);let W=j[z];return W===void 0&&(W=f(c()),j[z]=W),W}function f(S){const D=[],G=[],z=[];for(let X=0;X<e;X++)D[X]=0,G[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,D,G,z){const X=r.attributes,j=D.attributes;let W=0;const et=G.getAttributes();for(const q in et)if(et[q].location>=0){const B=X[q];let nt=j[q];if(nt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor)),B===void 0||B.attribute!==nt||nt&&B.data!==nt.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function _(S,D,G,z){const X={},j=D.attributes;let W=0;const et=G.getAttributes();for(const q in et)if(et[q].location>=0){let B=j[q];B===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(B=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(B=S.instanceColor));const nt={};nt.attribute=B,B&&B.data&&(nt.data=B.data),X[q]=nt,W++}r.attributes=X,r.attributesNum=W,r.index=z}function g(){const S=r.newAttributes;for(let D=0,G=S.length;D<G;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const G=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;G[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),X[S]!==D&&(n.vertexAttribDivisor(S,D),X[S]=D)}function v(){const S=r.newAttributes,D=r.enabledAttributes;for(let G=0,z=D.length;G<z;G++)D[G]!==S[G]&&(n.disableVertexAttribArray(G),D[G]=0)}function M(S,D,G,z,X,j,W){W===!0?n.vertexAttribIPointer(S,D,G,X,j):n.vertexAttribPointer(S,D,G,z,X,j)}function x(S,D,G,z){g();const X=z.attributes,j=G.getAttributes(),W=D.defaultAttributeValues;for(const et in j){const q=j[et];if(q.location>=0){let ct=X[et];if(ct===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),ct!==void 0){const B=ct.normalized,nt=ct.itemSize,gt=t.get(ct);if(gt===void 0)continue;const Lt=gt.buffer,Z=gt.type,rt=gt.bytesPerElement,Et=Z===n.INT||Z===n.UNSIGNED_INT||ct.gpuType===Fa;if(ct.isInterleavedBufferAttribute){const ht=ct.data,It=ht.stride,kt=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let Xt=0;Xt<q.locationSize;Xt++)p(q.location+Xt,ht.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Xt=0;Xt<q.locationSize;Xt++)m(q.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let Xt=0;Xt<q.locationSize;Xt++)M(q.location+Xt,nt/q.locationSize,Z,B,It*rt,(kt+nt/q.locationSize*Xt)*rt,Et)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<q.locationSize;ht++)p(q.location+ht,ct.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<q.locationSize;ht++)m(q.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let ht=0;ht<q.locationSize;ht++)M(q.location+ht,nt/q.locationSize,Z,B,nt*rt,nt/q.locationSize*ht*rt,Et)}}else if(W!==void 0){const B=W[et];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(q.location,B);break;case 3:n.vertexAttrib3fv(q.location,B);break;case 4:n.vertexAttrib4fv(q.location,B);break;default:n.vertexAttrib1fv(q.location,B)}}}}v()}function U(){C();for(const S in i){const D=i[S];for(const G in D){const z=D[G];for(const X in z)u(z[X].object),delete z[X];delete D[G]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const G in D){const z=D[G];for(const X in z)u(z[X].object),delete z[X];delete D[G]}delete i[S.id]}function P(S){for(const D in i){const G=i[D];if(G[S.id]===void 0)continue;const z=G[S.id];for(const X in z)u(z[X].object),delete z[X];delete G[S.id]}}function C(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function r0(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function o0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==wn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const C=P===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Wn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Hn&&!C)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:U,maxSamples:A}}function a0(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new mi,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const v=r?0:i,M=v*4;let x=p.clippingState||null;c.value=x,x=u(_,f,M,d);for(let U=0;U!==M;++U)x[U]=e[U];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==g;++M,x+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function c0(n){let t=new WeakMap;function e(o,a){return a===jo?o.mapping=$i:a===Qo&&(o.mapping=Ji),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jo||a===Qo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vf(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Xa extends Sh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,Gc=[.125,.215,.35,.446,.526,.582],xi=20,vo=new Xa,Wc=new zt;let Mo=null,yo=0,So=0,wo=!1;const gi=(1+Math.sqrt(5))/2,ki=1/gi,Xc=[new R(-gi,ki,0),new R(gi,ki,0),new R(-ki,0,gi),new R(ki,0,gi),new R(0,gi,-ki),new R(0,gi,ki),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class qc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,yo,So),this._renderer.xr.enabled=wo,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ns,format:wn,colorSpace:wi,depthBuffer:!1},s=Yc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(r)),this._blurMaterial=h0(r,t,e)}return s}_compileMaterial(t){const e=new Mt(this._lodPlanes[0],t);this._renderer.compile(e,vo)}_sceneToCubeUV(t,e,i,s){const a=new an(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Wc),u.toneMapping=ii,u.autoClear=!1;const d=new cn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),_=new Mt(new Ee,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Wc),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;pr(s,v*M,p>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===$i||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;pr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,vo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xc[(s-r-1)%Xc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let v=0;for(let P=0;P<xi;++P){const C=P/g,E=Math.exp(-C*C/2);p.push(E),P===0?v+=E:P<m&&(v+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const x=this._sizeLods[s],U=3*x*(s>M-Bi?s-M+Bi:0),A=4*(this._cubeSize-x);pr(e,U,A,3*x,2*x),c.setRenderTarget(e),c.render(h,vo)}}function l0(n){const t=[],e=[],i=[];let s=n;const r=n-Bi+1+Gc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Bi?c=Gc[o-n+Bi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*d),M=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let A=0;A<d;A++){const P=A%3*2/3-1,C=A>2?0:-1,E=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];v.set(E,g*_*A),M.set(f,m*_*A);const S=[A,A,A,A,A,A];x.set(S,p*_*A)}const U=new Le;U.setAttribute("position",new Ge(v,g)),U.setAttribute("uv",new Ge(M,m)),U.setAttribute("faceIndex",new Ge(x,p)),t.push(U),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yc(n,t,e){const i=new ri(n,t,e);return i.texture.mapping=Wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function h0(n,t,e){const i=new Float32Array(xi),s=new R(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qa(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Zc(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Kc(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function qa(){return`

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
	`}function u0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===jo||c===Qo,u=c===$i||c===Ji;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new qc(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new qc(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function f0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Es("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function d0(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const v=d.array;g=d.version;for(let M=0,x=v.length;M<x;M+=3){const U=v[M+0],A=v[M+1],P=v[M+2];f.push(U,A,A,P,P,U)}}else if(_!==void 0){const v=_.array;g=_.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const U=M+0,A=M+1,P=M+2;f.push(U,A,A,P,P,U)}}else return;const m=new(ph(f)?Mh:vh)(f,1);m.version=g;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function p0(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function h(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=d[v]*g[v];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function m0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function g0(n,t,e){const i=new WeakMap,s=new ce;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let x=a.attributes.position.count*M,U=1;x>t.maxTextureSize&&(U=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const A=new Float32Array(x*U*4*h),P=new gh(A,x,U,h);P.type=Hn,P.needsUpdate=!0;const C=M*4;for(let S=0;S<h;S++){const D=m[S],G=p[S],z=v[S],X=x*U*4*S;for(let j=0;j<D.count;j++){const W=j*C;d===!0&&(s.fromBufferAttribute(D,j),A[X+W+0]=s.x,A[X+W+1]=s.y,A[X+W+2]=s.z,A[X+W+3]=0),_===!0&&(s.fromBufferAttribute(G,j),A[X+W+4]=s.x,A[X+W+5]=s.y,A[X+W+6]=s.z,A[X+W+7]=0),g===!0&&(s.fromBufferAttribute(z,j),A[X+W+8]=s.x,A[X+W+9]=s.y,A[X+W+10]=s.z,A[X+W+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new ot(x,U)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];const _=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function _0(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Ya extends We{constructor(t,e,i,s,r,o,a,c,l,u=Xi){if(u!==Xi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xi&&(i=yi),i===void 0&&u===Qi&&(i=ji),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:En,this.minFilter=c!==void 0?c:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bh=new We,$c=new Ya(1,1),Th=new gh,Ah=new nf,Rh=new wh,Jc=[],jc=[],Qc=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function rs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Jc[s];if(r===void 0&&(r=new Float32Array(s),Jc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qr(n,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function x0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function v0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function M0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function S0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;el.set(i),n.uniformMatrix2fv(this.addr,!1,el),Ie(e,i)}}function w0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;tl.set(i),n.uniformMatrix3fv(this.addr,!1,tl),Ie(e,i)}}function E0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),Ie(e,i)}}function b0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function T0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function A0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function R0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function C0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function P0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function L0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function D0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function I0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=dh,r=$c):r=bh,e.setTexture2D(t||r,s)}function U0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ah,s)}function N0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rh,s)}function F0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Th,s)}function O0(n){switch(n){case 5126:return x0;case 35664:return v0;case 35665:return M0;case 35666:return y0;case 35674:return S0;case 35675:return w0;case 35676:return E0;case 5124:case 35670:return b0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}function k0(n,t){n.uniform1fv(this.addr,t)}function z0(n,t){const e=rs(t,this.size,2);n.uniform2fv(this.addr,e)}function B0(n,t){const e=rs(t,this.size,3);n.uniform3fv(this.addr,e)}function H0(n,t){const e=rs(t,this.size,4);n.uniform4fv(this.addr,e)}function V0(n,t){const e=rs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function G0(n,t){const e=rs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function W0(n,t){const e=rs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function X0(n,t){n.uniform1iv(this.addr,t)}function q0(n,t){n.uniform2iv(this.addr,t)}function Y0(n,t){n.uniform3iv(this.addr,t)}function Z0(n,t){n.uniform4iv(this.addr,t)}function K0(n,t){n.uniform1uiv(this.addr,t)}function $0(n,t){n.uniform2uiv(this.addr,t)}function J0(n,t){n.uniform3uiv(this.addr,t)}function j0(n,t){n.uniform4uiv(this.addr,t)}function Q0(n,t,e){const i=this.cache,s=t.length,r=qr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bh,r[o])}function tm(n,t,e){const i=this.cache,s=t.length,r=qr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ah,r[o])}function em(n,t,e){const i=this.cache,s=t.length,r=qr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Rh,r[o])}function nm(n,t,e){const i=this.cache,s=t.length,r=qr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Th,r[o])}function im(n){switch(n){case 5126:return k0;case 35664:return z0;case 35665:return B0;case 35666:return H0;case 35674:return V0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return Z0;case 5125:return K0;case 36294:return $0;case 36295:return J0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return nm}}class sm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=O0(e.type)}}class rm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=im(e.type)}}class om{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function nl(n,t){n.seq.push(t),n.map[t.id]=t}function am(n,t,e){const i=n.name,s=i.length;for(Eo.lastIndex=0;;){const r=Eo.exec(i),o=Eo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){nl(e,l===void 0?new sm(a,n,t):new rm(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new om(a),nl(e,h)),e=h}}}class Dr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);am(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function il(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const cm=37297;let lm=0;function hm(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const sl=new Vt;function um(n){Qt._getMatrix(sl,Qt.workingColorSpace,n);const t=`mat3( ${sl.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Xr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function rl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hm(n.getShaderSource(t),o)}else return s}function fm(n,t){const e=um(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dm(n,t){let e;switch(t){case Cu:e="Linear";break;case Pu:e="Reinhard";break;case Lu:e="Cineon";break;case Du:e="ACESFilmic";break;case Uu:e="AgX";break;case Nu:e="Neutral";break;case Iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mr=new R;function pm(){Qt.getLuminanceCoefficients(mr);const n=mr.x.toFixed(4),t=mr.y.toFixed(4),e=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function gm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _m(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function bs(n){return n!==""}function ol(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function al(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(n){return n.replace(xm,Mm)}const vm=new Map;function Mm(n,t){let e=Wt[t];if(e===void 0){const i=vm.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ca(e)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(n){return n.replace(ym,Sm)}function Sm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ll(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function wm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Em(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $i:case Ji:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function Tm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gr:t="ENVMAP_BLENDING_MULTIPLY";break;case Au:t="ENVMAP_BLENDING_MIX";break;case Ru:t="ENVMAP_BLENDING_ADD";break}return t}function Am(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Rm(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=wm(e),l=Em(e),u=bm(e),h=Tm(e),f=Am(e),d=mm(e),_=gm(r),g=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ii?dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,fm("linearToOutputTexel",e.outputColorSpace),pm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=Ca(o),o=ol(o,e),o=al(o,e),a=Ca(a),a=ol(a,e),a=al(a,e),o=cl(o),a=cl(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,x=v+p+a,U=il(s,s.VERTEX_SHADER,M),A=il(s,s.FRAGMENT_SHADER,x);s.attachShader(g,U),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(D){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(g).trim(),z=s.getShaderInfoLog(U).trim(),X=s.getShaderInfoLog(A).trim();let j=!0,W=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,U,A);else{const et=rl(s,U,"vertex"),q=rl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+et+`
`+q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||X==="")&&(W=!1);W&&(D.diagnostics={runnable:j,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(U),s.deleteShader(A),C=new Dr(s,g),E=_m(s,g)}let C;this.getUniforms=function(){return C===void 0&&P(this),C};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,cm)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=A,this}let Cm=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Lm(t),e.set(t,i)),i}}class Lm{constructor(t){this.id=Cm++,this.code=t,this.usedTimes=0}}function Dm(n,t,e,i,s,r,o){const a=new _h,c=new Pm,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,G,z){const X=G.fog,j=z.geometry,W=E.isMeshStandardMaterial?G.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),q=et&&et.mapping===Wr?et.image.height:null,ct=_[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const B=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,nt=B!==void 0?B.length:0;let gt=0;j.morphAttributes.position!==void 0&&(gt=1),j.morphAttributes.normal!==void 0&&(gt=2),j.morphAttributes.color!==void 0&&(gt=3);let Lt,Z,rt,Et;if(ct){const oe=Cn[ct];Lt=oe.vertexShader,Z=oe.fragmentShader}else Lt=E.vertexShader,Z=E.fragmentShader,c.update(E),rt=c.getVertexShaderID(E),Et=c.getFragmentShaderID(E);const ht=n.getRenderTarget(),It=n.state.buffers.depth.getReversed(),kt=z.isInstancedMesh===!0,Xt=z.isBatchedMesh===!0,ve=!!E.map,Jt=!!E.matcap,be=!!et,O=!!E.aoMap,ln=!!E.lightMap,Zt=!!E.bumpMap,Kt=!!E.normalMap,Ct=!!E.displacementMap,ge=!!E.emissiveMap,At=!!E.metalnessMap,T=!!E.roughnessMap,y=E.anisotropy>0,k=E.clearcoat>0,$=E.dispersion>0,Q=E.iridescence>0,K=E.sheen>0,bt=E.transmission>0,ut=y&&!!E.anisotropyMap,_t=k&&!!E.clearcoatMap,jt=k&&!!E.clearcoatNormalMap,it=k&&!!E.clearcoatRoughnessMap,xt=Q&&!!E.iridescenceMap,Dt=Q&&!!E.iridescenceThicknessMap,Nt=K&&!!E.sheenColorMap,vt=K&&!!E.sheenRoughnessMap,$t=!!E.specularMap,Gt=!!E.specularColorMap,de=!!E.specularIntensityMap,I=bt&&!!E.transmissionMap,lt=bt&&!!E.thicknessMap,Y=!!E.gradientMap,J=!!E.alphaMap,pt=E.alphaTest>0,ft=!!E.alphaHash,Bt=!!E.extensions;let ye=ii;E.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ye=n.toneMapping);const ke={shaderID:ct,shaderType:E.type,shaderName:E.name,vertexShader:Lt,fragmentShader:Z,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:Et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Xt,batchingColor:Xt&&z._colorsTexture!==null,instancing:kt,instancingColor:kt&&z.instanceColor!==null,instancingMorph:kt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:wi,alphaToCoverage:!!E.alphaToCoverage,map:ve,matcap:Jt,envMap:be,envMapMode:be&&et.mapping,envMapCubeUVHeight:q,aoMap:O,lightMap:ln,bumpMap:Zt,normalMap:Kt,displacementMap:f&&Ct,emissiveMap:ge,normalMapObjectSpace:Kt&&E.normalMapType===zu,normalMapTangentSpace:Kt&&E.normalMapType===Va,metalnessMap:At,roughnessMap:T,anisotropy:y,anisotropyMap:ut,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:$,iridescence:Q,iridescenceMap:xt,iridescenceThicknessMap:Dt,sheen:K,sheenColorMap:Nt,sheenRoughnessMap:vt,specularMap:$t,specularColorMap:Gt,specularIntensityMap:de,transmission:bt,transmissionMap:I,thicknessMap:lt,gradientMap:Y,opaque:E.transparent===!1&&E.blending===Wi&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:ft,combine:E.combine,mapUv:ve&&g(E.map.channel),aoMapUv:O&&g(E.aoMap.channel),lightMapUv:ln&&g(E.lightMap.channel),bumpMapUv:Zt&&g(E.bumpMap.channel),normalMapUv:Kt&&g(E.normalMap.channel),displacementMapUv:Ct&&g(E.displacementMap.channel),emissiveMapUv:ge&&g(E.emissiveMap.channel),metalnessMapUv:At&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:ut&&g(E.anisotropyMap.channel),clearcoatMapUv:_t&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:jt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(E.sheenRoughnessMap.channel),specularMapUv:$t&&g(E.specularMap.channel),specularColorMapUv:Gt&&g(E.specularColorMap.channel),specularIntensityMapUv:de&&g(E.specularIntensityMap.channel),transmissionMapUv:I&&g(E.transmissionMap.channel),thicknessMapUv:lt&&g(E.thicknessMap.channel),alphaMapUv:J&&g(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Kt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(ve||J),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:It,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:ve&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:ge&&E.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ve,flipSided:E.side===Je,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Bt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&E.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(v(S,E),M(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=_[E.type];let D;if(S){const G=Cn[S];D=mf.clone(G.uniforms)}else D=E.uniforms;return D}function U(E,S){let D;for(let G=0,z=u.length;G<z;G++){const X=u[G];if(X.cacheKey===S){D=X,++D.usedTimes;break}}return D===void 0&&(D=new Rm(n,S,E,r),u.push(D)),D}function A(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function P(E){c.remove(E)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:C}}function Im(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Um(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ul(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,_,g,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||Um),i.length>1&&i.sort(f||hl),s.length>1&&s.sort(f||hl)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Nm(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new ul,n.set(i,[o])):s>=r.length?(o=new ul,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Fm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function Om(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let km=0;function zm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Bm(n){const t=new Fm,e=Om(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);const s=new R,r=new me,o=new me;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,v=0,M=0,x=0,U=0,A=0,P=0;l.sort(zm);for(let E=0,S=l.length;E<S;E++){const D=l[E],G=D.color,z=D.intensity,X=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=G.r*z,h+=G.g*z,f+=G.b*z;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],z);P++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,q=e.get(D);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=D.shadow.matrix,v++}i.directional[d]=W,d++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(G).multiplyScalar(z),W.distance=X,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[g]=W;const et=D.shadow;if(D.map&&(i.spotLightMap[U]=D.map,U++,et.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[g]=et.matrix,D.castShadow){const q=e.get(D);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=j,x++}g++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(G).multiplyScalar(z),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const et=D.shadow,q=e.get(D);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,q.shadowCameraNear=et.camera.near,q.shadowCameraFar=et.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=D.shadow.matrix,M++}i.point[_]=W,_++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(z),W.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==x||C.numSpotMaps!==U||C.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+U-A,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=x,C.numSpotMaps=U,C.numLightProbes=P,i.version=km++)}function c(l,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:i}}function fl(n){const t=new Bm(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Hm(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new fl(n),t.set(s,[a])):r>=o.length?(a=new fl(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Vm extends oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gm extends oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
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
}`;function qm(n,t,e){let i=new Wa;const s=new ot,r=new ot,o=new ce,a=new Vm({depthPacking:ku}),c=new Gm,l={},u=e.maxTextureSize,h={[si]:Je,[Je]:si,[Ve]:Ve},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Wm,fragmentShader:Xm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Le;_.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let p=this.type;this.render=function(A,P,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ni),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=p!==zn&&this.type===zn,X=p===zn&&this.type!==zn;for(let j=0,W=A.length;j<W;j++){const et=A[j],q=et.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ct=q.getFrameExtents();if(s.multiply(ct),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ct.x),s.x=r.x*ct.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ct.y),s.y=r.y*ct.y,q.mapSize.y=r.y)),q.map===null||z===!0||X===!0){const nt=this.type!==zn?{minFilter:En,magFilter:En}:{};q.map!==null&&q.map.dispose(),q.map=new ri(s.x,s.y,nt),q.map.texture.name=et.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const B=q.getViewportCount();for(let nt=0;nt<B;nt++){const gt=q.getViewport(nt);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),G.viewport(o),q.updateMatrices(et,nt),i=q.getFrustum(),x(P,C,q.camera,et,this.type)}q.isPointLightShadow!==!0&&this.type===zn&&v(q,C),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,D)};function v(A,P){const C=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ri(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,C,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,C,d,g,null)}function M(A,P,C,E){let S=null;const D=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const G=S.uuid,z=P.uuid;let X=l[G];X===void 0&&(X={},l[G]=X);let j=X[z];j===void 0&&(j=S.clone(),X[z]=j,P.addEventListener("dispose",U)),S=j}if(S.visible=P.visible,S.wireframe=P.wireframe,E===zn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=n.properties.get(S);G.light=C}return S}function x(A,P,C,E,S){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===zn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=t.update(A),X=A.material;if(Array.isArray(X)){const j=z.groups;for(let W=0,et=j.length;W<et;W++){const q=j[W],ct=X[q.materialIndex];if(ct&&ct.visible){const B=M(A,ct,E,S);A.onBeforeShadow(n,A,P,C,z,B,q),n.renderBufferDirect(C,null,z,B,A,q),A.onAfterShadow(n,A,P,C,z,B,q)}}}else if(X.visible){const j=M(A,X,E,S);A.onBeforeShadow(n,A,P,C,z,j,null),n.renderBufferDirect(C,null,z,j,A,null),A.onAfterShadow(n,A,P,C,z,j,null)}}const G=A.children;for(let z=0,X=G.length;z<X;z++)x(G[z],P,C,E,S)}function U(A){A.target.removeEventListener("dispose",U);for(const C in l){const E=l[C],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Ym={[Xo]:qo,[Yo]:$o,[Zo]:Jo,[Ki]:Ko,[qo]:Xo,[$o]:Yo,[Jo]:Zo,[Ko]:Ki};function Zm(n,t){function e(){let I=!1;const lt=new ce;let Y=null;const J=new ce(0,0,0,0);return{setMask:function(pt){Y!==pt&&!I&&(n.colorMask(pt,pt,pt,pt),Y=pt)},setLocked:function(pt){I=pt},setClear:function(pt,ft,Bt,ye,ke){ke===!0&&(pt*=ye,ft*=ye,Bt*=ye),lt.set(pt,ft,Bt,ye),J.equals(lt)===!1&&(n.clearColor(pt,ft,Bt,ye),J.copy(lt))},reset:function(){I=!1,Y=null,J.set(-1,0,0,0)}}}function i(){let I=!1,lt=!1,Y=null,J=null,pt=null;return{setReversed:function(ft){if(lt!==ft){const Bt=t.get("EXT_clip_control");lt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const ye=pt;pt=null,this.setClear(ye)}lt=ft},getReversed:function(){return lt},setTest:function(ft){ft?ht(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!I&&(n.depthMask(ft),Y=ft)},setFunc:function(ft){if(lt&&(ft=Ym[ft]),J!==ft){switch(ft){case Xo:n.depthFunc(n.NEVER);break;case qo:n.depthFunc(n.ALWAYS);break;case Yo:n.depthFunc(n.LESS);break;case Ki:n.depthFunc(n.LEQUAL);break;case Zo:n.depthFunc(n.EQUAL);break;case Ko:n.depthFunc(n.GEQUAL);break;case $o:n.depthFunc(n.GREATER);break;case Jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ft}},setLocked:function(ft){I=ft},setClear:function(ft){pt!==ft&&(lt&&(ft=1-ft),n.clearDepth(ft),pt=ft)},reset:function(){I=!1,Y=null,J=null,pt=null,lt=!1}}}function s(){let I=!1,lt=null,Y=null,J=null,pt=null,ft=null,Bt=null,ye=null,ke=null;return{setTest:function(oe){I||(oe?ht(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function(oe){lt!==oe&&!I&&(n.stencilMask(oe),lt=oe)},setFunc:function(oe,gn,Ln){(Y!==oe||J!==gn||pt!==Ln)&&(n.stencilFunc(oe,gn,Ln),Y=oe,J=gn,pt=Ln)},setOp:function(oe,gn,Ln){(ft!==oe||Bt!==gn||ye!==Ln)&&(n.stencilOp(oe,gn,Ln),ft=oe,Bt=gn,ye=Ln)},setLocked:function(oe){I=oe},setClear:function(oe){ke!==oe&&(n.clearStencil(oe),ke=oe)},reset:function(){I=!1,lt=null,Y=null,J=null,pt=null,ft=null,Bt=null,ye=null,ke=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,v=null,M=null,x=null,U=null,A=null,P=new zt(0,0,0),C=0,E=!1,S=null,D=null,G=null,z=null,X=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,et=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=et>=2);let ct=null,B={};const nt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Lt=new ce().fromArray(nt),Z=new ce().fromArray(gt);function rt(I,lt,Y,J){const pt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(I,ft),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<Y;Bt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(lt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return ft}const Et={};Et[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc(Ki),Zt(!1),Kt(gc),ht(n.CULL_FACE),O(ni);function ht(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function It(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function kt(I,lt){return h[I]!==lt?(n.bindFramebuffer(I,lt),h[I]=lt,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=lt),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function Xt(I,lt){let Y=d,J=!1;if(I){Y=f.get(lt),Y===void 0&&(Y=[],f.set(lt,Y));const pt=I.textures;if(Y.length!==pt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Bt=pt.length;ft<Bt;ft++)Y[ft]=n.COLOR_ATTACHMENT0+ft;Y.length=pt.length,J=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,J=!0);J&&n.drawBuffers(Y)}function ve(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const Jt={[_i]:n.FUNC_ADD,[hu]:n.FUNC_SUBTRACT,[uu]:n.FUNC_REVERSE_SUBTRACT};Jt[fu]=n.MIN,Jt[du]=n.MAX;const be={[pu]:n.ZERO,[mu]:n.ONE,[gu]:n.SRC_COLOR,[Go]:n.SRC_ALPHA,[Su]:n.SRC_ALPHA_SATURATE,[Mu]:n.DST_COLOR,[xu]:n.DST_ALPHA,[_u]:n.ONE_MINUS_SRC_COLOR,[Wo]:n.ONE_MINUS_SRC_ALPHA,[yu]:n.ONE_MINUS_DST_COLOR,[vu]:n.ONE_MINUS_DST_ALPHA,[wu]:n.CONSTANT_COLOR,[Eu]:n.ONE_MINUS_CONSTANT_COLOR,[bu]:n.CONSTANT_ALPHA,[Tu]:n.ONE_MINUS_CONSTANT_ALPHA};function O(I,lt,Y,J,pt,ft,Bt,ye,ke,oe){if(I===ni){g===!0&&(It(n.BLEND),g=!1);return}if(g===!1&&(ht(n.BLEND),g=!0),I!==lu){if(I!==m||oe!==E){if((p!==_i||x!==_i)&&(n.blendEquation(n.FUNC_ADD),p=_i,x=_i),oe)switch(I){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,M=null,U=null,A=null,P.set(0,0,0),C=0,m=I,E=oe}return}pt=pt||lt,ft=ft||Y,Bt=Bt||J,(lt!==p||pt!==x)&&(n.blendEquationSeparate(Jt[lt],Jt[pt]),p=lt,x=pt),(Y!==v||J!==M||ft!==U||Bt!==A)&&(n.blendFuncSeparate(be[Y],be[J],be[ft],be[Bt]),v=Y,M=J,U=ft,A=Bt),(ye.equals(P)===!1||ke!==C)&&(n.blendColor(ye.r,ye.g,ye.b,ke),P.copy(ye),C=ke),m=I,E=!1}function ln(I,lt){I.side===Ve?It(n.CULL_FACE):ht(n.CULL_FACE);let Y=I.side===Je;lt&&(Y=!Y),Zt(Y),I.blending===Wi&&I.transparent===!1?O(ni):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function Kt(I){I!==ou?(ht(n.CULL_FACE),I!==D&&(I===gc?n.cullFace(n.BACK):I===au?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),D=I}function Ct(I){I!==G&&(W&&n.lineWidth(I),G=I)}function ge(I,lt,Y){I?(ht(n.POLYGON_OFFSET_FILL),(z!==lt||X!==Y)&&(n.polygonOffset(lt,Y),z=lt,X=Y)):It(n.POLYGON_OFFSET_FILL)}function At(I){I?ht(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function T(I){I===void 0&&(I=n.TEXTURE0+j-1),ct!==I&&(n.activeTexture(I),ct=I)}function y(I,lt,Y){Y===void 0&&(ct===null?Y=n.TEXTURE0+j-1:Y=ct);let J=B[Y];J===void 0&&(J={type:void 0,texture:void 0},B[Y]=J),(J.type!==I||J.texture!==lt)&&(ct!==Y&&(n.activeTexture(Y),ct=Y),n.bindTexture(I,lt||Et[I]),J.type=I,J.texture=lt)}function k(){const I=B[ct];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(I){Lt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Lt.copy(I))}function vt(I){Z.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function $t(I,lt){let Y=l.get(lt);Y===void 0&&(Y=new WeakMap,l.set(lt,Y));let J=Y.get(I);J===void 0&&(J=n.getUniformBlockIndex(lt,I.name),Y.set(I,J))}function Gt(I,lt){const J=l.get(lt).get(I);c.get(lt)!==J&&(n.uniformBlockBinding(lt,J,I.__bindingPointIndex),c.set(lt,J))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ct=null,B={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,v=null,M=null,x=null,U=null,A=null,P=new zt(0,0,0),C=0,E=!1,S=null,D=null,G=null,z=null,X=null,Lt.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:It,bindFramebuffer:kt,drawBuffers:Xt,useProgram:ve,setBlending:O,setMaterial:ln,setFlipSided:Zt,setCullFace:Kt,setLineWidth:Ct,setPolygonOffset:ge,setScissorTest:At,activeTexture:T,bindTexture:y,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:xt,texImage3D:Dt,updateUBOMapping:$t,uniformBlockBinding:Gt,texStorage2D:jt,texStorage3D:it,texSubImage2D:K,texSubImage3D:bt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Nt,viewport:vt,reset:de}}function dl(n,t,e,i){const s=Km(i);switch(e){case oh:return n*t;case ch:return n*t;case lh:return n*t*2;case hh:return n*t/s.components*s.byteLength;case za:return n*t/s.components*s.byteLength;case uh:return n*t*2/s.components*s.byteLength;case Ba:return n*t*2/s.components*s.byteLength;case ah:return n*t*3/s.components*s.byteLength;case wn:return n*t*4/s.components*s.byteLength;case Ha:return n*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ia:case ra:return Math.max(n,16)*Math.max(t,8)/4;case na:case sa:return Math.max(n,8)*Math.max(t,8)/2;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ua:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case da:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case pa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ma:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ga:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case va:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ya:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Lr:case wa:case Ea:return Math.ceil(n/4)*Math.ceil(t/4)*16;case fh:case ba:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ta:case Aa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Km(n){switch(n){case Wn:case ih:return{byteLength:1,components:1};case Ps:case sh:case Ns:return{byteLength:2,components:1};case Oa:case ka:return{byteLength:2,components:4};case yi:case Fa:case Hn:return{byteLength:4,components:1};case rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function $m(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,y){return d?new OffscreenCanvas(T,y):Fr("canvas")}function g(T,y,k){let $=1;const Q=At(T);if((Q.width>k||Q.height>k)&&($=k/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor($*Q.width),bt=Math.floor($*Q.height);h===void 0&&(h=_(K,bt));const ut=y?_(K,bt):h;return ut.width=K,ut.height=bt,ut.getContext("2d").drawImage(T,0,0,K,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+bt+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,y,k,$,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=y;if(y===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),y===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),y===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),y===n.RGBA){const bt=Q?Xr:Qt.getTransfer($);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=bt===ue?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(T,y){let k;return T?y===null||y===yi||y===ji?k=n.DEPTH24_STENCIL8:y===Hn?k=n.DEPTH32F_STENCIL8:y===Ps&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===yi||y===ji?k=n.DEPTH_COMPONENT24:y===Hn?k=n.DEPTH_COMPONENT32F:y===Ps&&(k=n.DEPTH_COMPONENT16),k}function U(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==En&&T.minFilter!==pn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&u.delete(y)}function P(T){const y=T.target;y.removeEventListener("dispose",P),S(y)}function C(T){const y=i.get(T);if(y.__webglInit===void 0)return;const k=T.source,$=f.get(k);if($){const Q=$[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(T),Object.keys($).length===0&&f.delete(k)}i.remove(T)}function E(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const k=T.source,$=f.get(k);delete $[y.__cacheKey],o.memory.textures--}function S(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let Q=0;Q<y.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)n.deleteFramebuffer(y.__webglFramebuffer[$]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=T.textures;for(let $=0,Q=k.length;$<Q;$++){const K=i.get(k[$]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(T)}let D=0;function G(){D=0}function z(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function X(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function j(T,y){const k=i.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,T,y);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function W(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){Z(k,T,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function et(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){Z(k,T,y);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function q(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){rt(k,T,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}const ct={[ta]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[ea]:n.MIRRORED_REPEAT},B={[En]:n.NEAREST,[Fu]:n.NEAREST_MIPMAP_NEAREST,[Ks]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[Kr]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},nt={[Bu]:n.NEVER,[qu]:n.ALWAYS,[Hu]:n.LESS,[dh]:n.LEQUAL,[Vu]:n.EQUAL,[Xu]:n.GEQUAL,[Gu]:n.GREATER,[Wu]:n.NOTEQUAL};function gt(T,y){if(y.type===Hn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===pn||y.magFilter===Kr||y.magFilter===Ks||y.magFilter===Mi||y.minFilter===pn||y.minFilter===Kr||y.minFilter===Ks||y.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ct[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ct[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ct[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,B[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,B[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==Ks&&y.minFilter!==Mi||y.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Lt(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const $=y.source;let Q=f.get($);Q===void 0&&(Q={},f.set($,Q));const K=X(y);if(K!==T.__cacheKey){Q[K]===void 0&&(Q[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[K].usedTimes++;const bt=Q[T.__cacheKey];bt!==void 0&&(Q[T.__cacheKey].usedTimes--,bt.usedTimes===0&&E(y)),T.__cacheKey=K,T.__webglTexture=Q[K].texture}return k}function Z(T,y,k){let $=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=n.TEXTURE_3D);const Q=Lt(T,y),K=y.source;e.bindTexture($,T.__webglTexture,n.TEXTURE0+k);const bt=i.get(K);if(K.version!==bt.__version||Q===!0){e.activeTexture(n.TEXTURE0+k);const ut=Qt.getPrimaries(Qt.workingColorSpace),_t=y.colorSpace===ei?null:Qt.getPrimaries(y.colorSpace),jt=y.colorSpace===ei||ut===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=g(y.image,!1,s.maxTextureSize);it=ge(y,it);const xt=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type);let Nt=M(y.internalFormat,xt,Dt,y.colorSpace,y.isVideoTexture);gt($,y);let vt;const $t=y.mipmaps,Gt=y.isVideoTexture!==!0,de=bt.__version===void 0||Q===!0,I=K.dataReady,lt=U(y,it);if(y.isDepthTexture)Nt=x(y.format===Qi,y.type),de&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,Nt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Nt,it.width,it.height,0,xt,Dt,null));else if(y.isDataTexture)if($t.length>0){Gt&&de&&e.texStorage2D(n.TEXTURE_2D,lt,Nt,$t[0].width,$t[0].height);for(let Y=0,J=$t.length;Y<J;Y++)vt=$t[Y],Gt?I&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,vt.width,vt.height,xt,Dt,vt.data):e.texImage2D(n.TEXTURE_2D,Y,Nt,vt.width,vt.height,0,xt,Dt,vt.data);y.generateMipmaps=!1}else Gt?(de&&e.texStorage2D(n.TEXTURE_2D,lt,Nt,it.width,it.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,xt,Dt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,it.width,it.height,0,xt,Dt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Gt&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Nt,$t[0].width,$t[0].height,it.depth);for(let Y=0,J=$t.length;Y<J;Y++)if(vt=$t[Y],y.format!==wn)if(xt!==null)if(Gt){if(I)if(y.layerUpdates.size>0){const pt=dl(vt.width,vt.height,y.format,y.type);for(const ft of y.layerUpdates){const Bt=vt.data.subarray(ft*pt/vt.data.BYTES_PER_ELEMENT,(ft+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,ft,vt.width,vt.height,1,xt,Bt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,it.depth,xt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Nt,vt.width,vt.height,it.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,it.depth,xt,Dt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,Nt,vt.width,vt.height,it.depth,0,xt,Dt,vt.data)}else{Gt&&de&&e.texStorage2D(n.TEXTURE_2D,lt,Nt,$t[0].width,$t[0].height);for(let Y=0,J=$t.length;Y<J;Y++)vt=$t[Y],y.format!==wn?xt!==null?Gt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,Nt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?I&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,vt.width,vt.height,xt,Dt,vt.data):e.texImage2D(n.TEXTURE_2D,Y,Nt,vt.width,vt.height,0,xt,Dt,vt.data)}else if(y.isDataArrayTexture)if(Gt){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Nt,it.width,it.height,it.depth),I)if(y.layerUpdates.size>0){const Y=dl(it.width,it.height,y.format,y.type);for(const J of y.layerUpdates){const pt=it.data.subarray(J*Y/it.data.BYTES_PER_ELEMENT,(J+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,xt,Dt,pt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,xt,Dt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,it.width,it.height,it.depth,0,xt,Dt,it.data);else if(y.isData3DTexture)Gt?(de&&e.texStorage3D(n.TEXTURE_3D,lt,Nt,it.width,it.height,it.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,xt,Dt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,it.width,it.height,it.depth,0,xt,Dt,it.data);else if(y.isFramebufferTexture){if(de)if(Gt)e.texStorage2D(n.TEXTURE_2D,lt,Nt,it.width,it.height);else{let Y=it.width,J=it.height;for(let pt=0;pt<lt;pt++)e.texImage2D(n.TEXTURE_2D,pt,Nt,Y,J,0,xt,Dt,null),Y>>=1,J>>=1}}else if($t.length>0){if(Gt&&de){const Y=At($t[0]);e.texStorage2D(n.TEXTURE_2D,lt,Nt,Y.width,Y.height)}for(let Y=0,J=$t.length;Y<J;Y++)vt=$t[Y],Gt?I&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,xt,Dt,vt):e.texImage2D(n.TEXTURE_2D,Y,Nt,xt,Dt,vt);y.generateMipmaps=!1}else if(Gt){if(de){const Y=At(it);e.texStorage2D(n.TEXTURE_2D,lt,Nt,Y.width,Y.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Dt,it)}else e.texImage2D(n.TEXTURE_2D,0,Nt,xt,Dt,it);m(y)&&p($),bt.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function rt(T,y,k){if(y.image.length!==6)return;const $=Lt(T,y),Q=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);const K=i.get(Q);if(Q.version!==K.__version||$===!0){e.activeTexture(n.TEXTURE0+k);const bt=Qt.getPrimaries(Qt.workingColorSpace),ut=y.colorSpace===ei?null:Qt.getPrimaries(y.colorSpace),_t=y.colorSpace===ei||bt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const jt=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,xt=[];for(let J=0;J<6;J++)!jt&&!it?xt[J]=g(y.image[J],!0,s.maxCubemapSize):xt[J]=it?y.image[J].image:y.image[J],xt[J]=ge(y,xt[J]);const Dt=xt[0],Nt=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),$t=M(y.internalFormat,Nt,vt,y.colorSpace),Gt=y.isVideoTexture!==!0,de=K.__version===void 0||$===!0,I=Q.dataReady;let lt=U(y,Dt);gt(n.TEXTURE_CUBE_MAP,y);let Y;if(jt){Gt&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,$t,Dt.width,Dt.height);for(let J=0;J<6;J++){Y=xt[J].mipmaps;for(let pt=0;pt<Y.length;pt++){const ft=Y[pt];y.format!==wn?Nt!==null?Gt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,$t,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,ft.width,ft.height,Nt,vt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,$t,ft.width,ft.height,0,Nt,vt,ft.data)}}}else{if(Y=y.mipmaps,Gt&&de){Y.length>0&&lt++;const J=At(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,$t,J.width,J.height)}for(let J=0;J<6;J++)if(it){Gt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xt[J].width,xt[J].height,Nt,vt,xt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$t,xt[J].width,xt[J].height,0,Nt,vt,xt[J].data);for(let pt=0;pt<Y.length;pt++){const Bt=Y[pt].image[J].image;Gt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Bt.width,Bt.height,Nt,vt,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,$t,Bt.width,Bt.height,0,Nt,vt,Bt.data)}}else{Gt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Nt,vt,xt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$t,Nt,vt,xt[J]);for(let pt=0;pt<Y.length;pt++){const ft=Y[pt];Gt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Nt,vt,ft.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,$t,Nt,vt,ft.image[J])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),K.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Et(T,y,k,$,Q,K){const bt=r.convert(k.format,k.colorSpace),ut=r.convert(k.type),_t=M(k.internalFormat,bt,ut,k.colorSpace),jt=i.get(y),it=i.get(k);if(it.__renderTarget=y,!jt.__hasExternalTextures){const xt=Math.max(1,y.width>>K),Dt=Math.max(1,y.height>>K);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,_t,xt,Dt,y.depth,0,bt,ut,null):e.texImage2D(Q,K,_t,xt,Dt,0,bt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Kt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,it.__webglTexture,0,Zt(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,it.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(T,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){const $=y.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=x(y.stencilBuffer,Q),bt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=Zt(y);Kt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,K,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,T)}else{const $=y.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],bt=r.convert(K.format,K.colorSpace),ut=r.convert(K.type),_t=M(K.internalFormat,bt,ut,K.colorSpace),jt=Zt(y);k&&Kt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,_t,y.width,y.height):Kt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,_t,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,_t,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const Q=$.__webglTexture,K=Zt(y);if(y.depthTexture.format===Xi)Kt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Qi)Kt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function kt(T){const y=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=$}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");It(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=n.createRenderbuffer(),ht(y.__webglDepthbuffer[$],T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ht(y.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(T,y,k){const $=i.get(T);y!==void 0&&Et($.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&kt(T)}function ve(T){const y=T.texture,k=i.get(T),$=i.get(y);T.addEventListener("dispose",P);const Q=T.textures,K=T.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=y.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let _t=0;_t<y.mipmaps.length;_t++)k.__webglFramebuffer[ut][_t]=n.createFramebuffer()}else k.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)k.__webglFramebuffer[ut]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(bt)for(let ut=0,_t=Q.length;ut<_t;ut++){const jt=i.get(Q[ut]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Kt(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){const _t=Q[ut];k.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);const jt=r.convert(_t.format,_t.colorSpace),it=r.convert(_t.type),xt=M(_t.internalFormat,jt,it,_t.colorSpace,T.isXRRenderTarget===!0),Dt=Zt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,xt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),gt(n.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Et(k.__webglFramebuffer[ut][_t],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Et(k.__webglFramebuffer[ut],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(y)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ut=0,_t=Q.length;ut<_t;ut++){const jt=Q[ut],it=i.get(jt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),gt(n.TEXTURE_2D,jt),Et(k.__webglFramebuffer,T,jt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,$.__webglTexture),gt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Et(k.__webglFramebuffer[_t],T,y,n.COLOR_ATTACHMENT0,ut,_t);else Et(k.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,ut,0);m(y)&&p(ut),e.unbindTexture()}T.depthBuffer&&kt(T)}function Jt(T){const y=T.textures;for(let k=0,$=y.length;k<$;k++){const Q=y[k];if(m(Q)){const K=v(T),bt=i.get(Q).__webglTexture;e.bindTexture(K,bt),p(K),e.unbindTexture()}}}const be=[],O=[];function ln(T){if(T.samples>0){if(Kt(T)===!1){const y=T.textures,k=T.width,$=T.height;let Q=n.COLOR_BUFFER_BIT;const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(T),ut=y.length>1;if(ut)for(let _t=0;_t<y.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const jt=i.get(y[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,Q,n.NEAREST),c===!0&&(be.length=0,O.length=0,be.push(n.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(be.push(K),O.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<y.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const jt=i.get(y[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Zt(T){return Math.min(s.maxSamples,T.samples)}function Kt(T){const y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ct(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function ge(T,y){const k=T.colorSpace,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==wi&&k!==ei&&(Qt.getTransfer(k)===ue?($!==wn||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function At(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=et,this.setTextureCube=q,this.rebindTextures=Xt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Kt}function Jm(n,t){function e(i,s=ei){let r;const o=Qt.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===Oa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ka)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ih)return n.BYTE;if(i===sh)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===Fa)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===Ns)return n.HALF_FLOAT;if(i===oh)return n.ALPHA;if(i===ah)return n.RGB;if(i===wn)return n.RGBA;if(i===ch)return n.LUMINANCE;if(i===lh)return n.LUMINANCE_ALPHA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===za)return n.RED_INTEGER;if(i===uh)return n.RG;if(i===Ba)return n.RG_INTEGER;if(i===Ha)return n.RGBA_INTEGER;if(i===Ar||i===Rr||i===Cr||i===Pr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===na||i===ia||i===sa||i===ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oa||i===aa||i===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oa||i===aa)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===la||i===ha||i===ua||i===fa||i===da||i===pa||i===ma||i===ga||i===_a||i===xa||i===va||i===Ma||i===ya||i===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===la)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ha)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ua)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===da)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ma)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ga)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_a)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===va)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ma)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ya)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lr||i===wa||i===Ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Lr)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fh||i===ba||i===Ta||i===Aa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ji?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class jm extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pt extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qm={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
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

}`;class ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new bn({vertexShader:tg,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mt(new Qe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ig extends ns{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const g=new ng,m=e.getContextAttributes();let p=null,v=null;const M=[],x=[],U=new ot;let A=null;const P=new an;P.viewport=new ce;const C=new an;C.viewport=new ce;const E=[P,C],S=new jm;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=M[Z];return rt===void 0&&(rt=new bo,M[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=M[Z];return rt===void 0&&(rt=new bo,M[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=M[Z];return rt===void 0&&(rt=new bo,M[Z]=rt),rt.getHandSpace()};function z(Z){const rt=x.indexOf(Z.inputSource);if(rt===-1)return;const Et=M[rt];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,l||o),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let Z=0;Z<M.length;Z++){const rt=x[Z];rt!==null&&(x[Z]=null,M[Z].disconnect(rt))}D=null,G=null,g.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,v=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ri(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Et=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Qi:Xi,Et=m.stencil?ji:yi);const It={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ri(f.textureWidth,f.textureHeight,{format:wn,type:Wn,depthTexture:new Ya(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Z){for(let rt=0;rt<Z.removed.length;rt++){const Et=Z.removed[rt],ht=x.indexOf(Et);ht>=0&&(x[ht]=null,M[ht].disconnect(Et))}for(let rt=0;rt<Z.added.length;rt++){const Et=Z.added[rt];let ht=x.indexOf(Et);if(ht===-1){for(let kt=0;kt<M.length;kt++)if(kt>=x.length){x.push(Et),ht=kt;break}else if(x[kt]===null){x[kt]=Et,ht=kt;break}if(ht===-1)break}const It=M[ht];It&&It.connect(Et)}}const W=new R,et=new R;function q(Z,rt,Et){W.setFromMatrixPosition(rt.matrixWorld),et.setFromMatrixPosition(Et.matrixWorld);const ht=W.distanceTo(et),It=rt.projectionMatrix.elements,kt=Et.projectionMatrix.elements,Xt=It[14]/(It[10]-1),ve=It[14]/(It[10]+1),Jt=(It[9]+1)/It[5],be=(It[9]-1)/It[5],O=(It[8]-1)/It[0],ln=(kt[8]+1)/kt[0],Zt=Xt*O,Kt=Xt*ln,Ct=ht/(-O+ln),ge=Ct*-O;if(rt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ge),Z.translateZ(Ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),It[10]===-1)Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const At=Xt+Ct,T=ve+Ct,y=Zt-ge,k=Kt+(ht-ge),$=Jt*ve/T*At,Q=be*ve/T*At;Z.projectionMatrix.makePerspective(y,k,$,Q,At,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ct(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let rt=Z.near,Et=Z.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(Et=g.depthFar)),S.near=C.near=P.near=rt,S.far=C.far=P.far=Et,(D!==S.near||G!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,G=S.far),P.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,S.layers.mask=P.layers.mask|C.layers.mask;const ht=Z.parent,It=S.cameras;ct(S,ht);for(let kt=0;kt<It.length;kt++)ct(It[kt],ht);It.length===2?q(S,P,C):S.projectionMatrix.copy(P.projectionMatrix),B(Z,S,ht)};function B(Z,rt,Et){Et===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ra*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let nt=null;function gt(Z,rt){if(u=rt.getViewerPose(l||o),_=rt,u!==null){const Et=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ht=!1;Et.length!==S.cameras.length&&(S.cameras.length=0,ht=!0);for(let kt=0;kt<Et.length;kt++){const Xt=Et[kt];let ve=null;if(d!==null)ve=d.getViewport(Xt);else{const be=h.getViewSubImage(f,Xt);ve=be.viewport,kt===0&&(t.setRenderTargetTextures(v,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(v))}let Jt=E[kt];Jt===void 0&&(Jt=new an,Jt.layers.enable(kt),Jt.viewport=new ce,E[kt]=Jt),Jt.matrix.fromArray(Xt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Xt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ve.x,ve.y,ve.width,ve.height),kt===0&&(S.matrix.copy(Jt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ht===!0&&S.cameras.push(Jt)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const kt=h.getDepthInformation(Et[0]);kt&&kt.isValid&&kt.texture&&g.init(t,kt,s.renderState)}}for(let Et=0;Et<M.length;Et++){const ht=x[Et],It=M[Et];ht!==null&&It!==void 0&&It.update(ht,rt,l||o)}nt&&nt(Z,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),_=null}const Lt=new Eh;Lt.setAnimationLoop(gt),this.setAnimationLoop=function(Z){nt=Z},this.dispose=function(){}}}const di=new mn,sg=new me;function rg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,yh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,di.copy(x),di.x*=-1,di.y*=-1,di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(sg.makeRotationFromEuler(di)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function og(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const x=M.program;i.uniformBlockBinding(v,x)}function l(v,M){let x=s[v.id];x===void 0&&(_(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const U=M.program;i.updateUBOMapping(v,U);const A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function u(v){const M=h();v.__bindingPointIndex=M;const x=n.createBuffer(),U=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,U,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],x=v.uniforms,U=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,P=x.length;A<P;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=C.length;E<S;E++){const D=C[E];if(d(D,A,E,U)===!0){const G=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let j=0;j<z.length;j++){const W=z[j],et=g(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,G+X,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,X),X+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,M,x,U){const A=v.value,P=M+"_"+x;if(U[P]===void 0)return typeof A=="number"||typeof A=="boolean"?U[P]=A:U[P]=A.clone(),!0;{const C=U[P];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return U[P]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(v){const M=v.uniforms;let x=0;const U=16;for(let P=0,C=M.length;P<C;P++){const E=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,D=E.length;S<D;S++){const G=E[S],z=Array.isArray(G.value)?G.value:[G.value];for(let X=0,j=z.length;X<j;X++){const W=z[X],et=g(W),q=x%U,ct=q%et.boundary,B=q+ct;x+=ct,B!==0&&U-B<et.storage&&(x+=U-B),G.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=et.storage}}}const A=x%U;return A>0&&(x+=U-A),v.__size=x,v.__cache={},this}function g(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class ag{constructor(t={}){const{canvas:e=Zu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=ii,this.toneMappingExposure=1;const x=this;let U=!1,A=0,P=0,C=null,E=-1,S=null;const D=new ce,G=new ce;let z=null;const X=new zt(0);let j=0,W=e.width,et=e.height,q=1,ct=null,B=null;const nt=new ce(0,0,W,et),gt=new ce(0,0,W,et);let Lt=!1;const Z=new Wa;let rt=!1,Et=!1;const ht=new me,It=new me,kt=new R,Xt=new ce,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function be(){return C===null?q:1}let O=i;function ln(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Na}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),O===null){const N="webgl2";if(O=ln(N,w),O===null)throw ln(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Zt,Kt,Ct,ge,At,T,y,k,$,Q,K,bt,ut,_t,jt,it,xt,Dt,Nt,vt,$t,Gt,de,I;function lt(){Zt=new f0(O),Zt.init(),Gt=new Jm(O,Zt),Kt=new o0(O,Zt,t,Gt),Ct=new Zm(O,Zt),Kt.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),ge=new m0(O),At=new Im,T=new $m(O,Zt,Ct,At,Kt,Gt,ge),y=new c0(x),k=new u0(x),$=new Sf(O),de=new s0(O,$),Q=new d0(O,$,ge,de),K=new _0(O,Q,$,ge),Nt=new g0(O,Kt,T),it=new a0(At),bt=new Dm(x,y,k,Zt,Kt,de,it),ut=new rg(x,At),_t=new Nm,jt=new Hm(Zt),Dt=new i0(x,y,k,Ct,K,d,c),xt=new qm(x,K,Kt),I=new og(O,ge,Kt,Ct),vt=new r0(O,Zt,ge),$t=new p0(O,Zt,ge),ge.programs=bt.programs,x.capabilities=Kt,x.extensions=Zt,x.properties=At,x.renderLists=_t,x.shadowMap=xt,x.state=Ct,x.info=ge}lt();const Y=new ig(x,O);this.xr=Y,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(W,et,!1))},this.getSize=function(w){return w.set(W,et)},this.setSize=function(w,N,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,et=N,e.width=Math.floor(w*q),e.height=Math.floor(N*q),H===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(W*q,et*q).floor()},this.setDrawingBufferSize=function(w,N,H){W=w,et=N,q=H,e.width=Math.floor(w*H),e.height=Math.floor(N*H),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,N,H,V){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,N,H,V),Ct.viewport(D.copy(nt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(gt)},this.setScissor=function(w,N,H,V){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,N,H,V),Ct.scissor(G.copy(gt).multiplyScalar(q).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(w){Ct.setScissorTest(Lt=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,N=!0,H=!0){let V=0;if(w){let F=!1;if(C!==null){const st=C.texture.format;F=st===Ha||st===Ba||st===za}if(F){const st=C.texture.type,dt=st===Wn||st===yi||st===Ps||st===ji||st===Oa||st===ka,yt=Dt.getClearColor(),St=Dt.getClearAlpha(),Ft=yt.r,Ht=yt.g,wt=yt.b;dt?(_[0]=Ft,_[1]=Ht,_[2]=wt,_[3]=St,O.clearBufferuiv(O.COLOR,0,_)):(g[0]=Ft,g[1]=Ht,g[2]=wt,g[3]=St,O.clearBufferiv(O.COLOR,0,g))}else V|=O.COLOR_BUFFER_BIT}N&&(V|=O.DEPTH_BUFFER_BIT),H&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),jt.dispose(),At.dispose(),y.dispose(),k.dispose(),K.dispose(),de.dispose(),I.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ac),Y.removeEventListener("sessionend",cc),ai.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const w=ge.autoReset,N=xt.enabled,H=xt.autoUpdate,V=xt.needsUpdate,F=xt.type;lt(),ge.autoReset=w,xt.enabled=N,xt.autoUpdate=H,xt.needsUpdate=V,xt.type=F}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Bt(w){const N=w.target;N.removeEventListener("dispose",Bt),ye(N)}function ye(w){ke(w),At.remove(w)}function ke(w){const N=At.get(w).programs;N!==void 0&&(N.forEach(function(H){bt.releaseProgram(H)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,H,V,F,st){N===null&&(N=ve);const dt=F.isMesh&&F.matrixWorld.determinant()<0,yt=$h(w,N,H,V,F);Ct.setMaterial(V,dt);let St=H.index,Ft=1;if(V.wireframe===!0){if(St=Q.getWireframeAttribute(H),St===void 0)return;Ft=2}const Ht=H.drawRange,wt=H.attributes.position;let ee=Ht.start*Ft,pe=(Ht.start+Ht.count)*Ft;st!==null&&(ee=Math.max(ee,st.start*Ft),pe=Math.min(pe,(st.start+st.count)*Ft)),St!==null?(ee=Math.max(ee,0),pe=Math.min(pe,St.count)):wt!=null&&(ee=Math.max(ee,0),pe=Math.min(pe,wt.count));const _e=pe-ee;if(_e<0||_e===1/0)return;de.setup(F,V,yt,H,St);let Ye,ie=vt;if(St!==null&&(Ye=$.get(St),ie=$t,ie.setIndex(Ye)),F.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*be()),ie.setMode(O.LINES)):ie.setMode(O.TRIANGLES);else if(F.isLine){let Tt=V.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*be()),F.isLineSegments?ie.setMode(O.LINES):F.isLineLoop?ie.setMode(O.LINE_LOOP):ie.setMode(O.LINE_STRIP)}else F.isPoints?ie.setMode(O.POINTS):F.isSprite&&ie.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ie.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))ie.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Tt=F._multiDrawStarts,Dn=F._multiDrawCounts,se=F._multiDrawCount,_n=St?$.get(St).bytesPerElement:1,Ei=At.get(V).currentProgram.getUniforms();for(let tn=0;tn<se;tn++)Ei.setValue(O,"_gl_DrawID",tn),ie.render(Tt[tn]/_n,Dn[tn])}else if(F.isInstancedMesh)ie.renderInstances(ee,_e,F.count);else if(H.isInstancedBufferGeometry){const Tt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Dn=Math.min(H.instanceCount,Tt);ie.renderInstances(ee,_e,Dn)}else ie.render(ee,_e)};function oe(w,N,H){w.transparent===!0&&w.side===Ve&&w.forceSinglePass===!1?(w.side=Je,w.needsUpdate=!0,Zs(w,N,H),w.side=si,w.needsUpdate=!0,Zs(w,N,H),w.side=Ve):Zs(w,N,H)}this.compile=function(w,N,H=null){H===null&&(H=w),p=jt.get(H),p.init(N),M.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==H&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const st=F.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const yt=st[dt];oe(yt,H,F),V.add(yt)}else oe(st,H,F),V.add(st)}),M.pop(),p=null,V},this.compileAsync=function(w,N,H=null){const V=this.compile(w,N,H);return new Promise(F=>{function st(){if(V.forEach(function(dt){At.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){F(w);return}setTimeout(st,10)}Zt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let gn=null;function Ln(w){gn&&gn(w)}function ac(){ai.stop()}function cc(){ai.start()}const ai=new Eh;ai.setAnimationLoop(Ln),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(w){gn=w,Y.setAnimationLoop(w),w===null?ai.stop():ai.start()},Y.addEventListener("sessionstart",ac),Y.addEventListener("sessionend",cc),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,C),p=jt.get(w,M.length),p.init(N),M.push(p),It.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(It),Et=this.localClippingEnabled,rt=it.init(this.clippingPlanes,Et),m=_t.get(w,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Zr(st,N,-1/0,x.sortObjects)}Zr(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ct,B),Jt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Jt&&Dt.addToRenderList(m,w),this.info.render.frame++,rt===!0&&it.beginShadows();const H=p.state.shadowsArray;xt.render(H,w,N),rt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const st=N.cameras;if(F.length>0)for(let dt=0,yt=st.length;dt<yt;dt++){const St=st[dt];hc(V,F,w,St)}Jt&&Dt.render(w);for(let dt=0,yt=st.length;dt<yt;dt++){const St=st[dt];lc(m,w,St,St.viewport)}}else F.length>0&&hc(V,F,w,N),Jt&&Dt.render(w),lc(m,w,N);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,N),de.resetDefaultState(),E=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],rt===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Zr(w,N,H,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){V&&Xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);const dt=K.update(w),yt=w.material;yt.visible&&m.push(w,dt,yt,H,Xt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const dt=K.update(w),yt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xt.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Xt.copy(dt.boundingSphere.center)),Xt.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(yt)){const St=dt.groups;for(let Ft=0,Ht=St.length;Ft<Ht;Ft++){const wt=St[Ft],ee=yt[wt.materialIndex];ee&&ee.visible&&m.push(w,dt,ee,H,Xt.z,wt)}}else yt.visible&&m.push(w,dt,yt,H,Xt.z,null)}}const st=w.children;for(let dt=0,yt=st.length;dt<yt;dt++)Zr(st[dt],N,H,V)}function lc(w,N,H,V){const F=w.opaque,st=w.transmissive,dt=w.transparent;p.setupLightsView(H),rt===!0&&it.setGlobalState(x.clippingPlanes,H),V&&Ct.viewport(D.copy(V)),F.length>0&&Ys(F,N,H),st.length>0&&Ys(st,N,H),dt.length>0&&Ys(dt,N,H),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function hc(w,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ri(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?Ns:Wn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const st=p.state.transmissionRenderTarget[V.id],dt=V.viewport||D;st.setSize(dt.z,dt.w);const yt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(X),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Jt&&Dt.render(H);const St=x.toneMapping;x.toneMapping=ii;const Ft=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),rt===!0&&it.setGlobalState(x.clippingPlanes,V),Ys(w,H,V),T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let wt=0,ee=N.length;wt<ee;wt++){const pe=N[wt],_e=pe.object,Ye=pe.geometry,ie=pe.material,Tt=pe.group;if(ie.side===Ve&&_e.layers.test(V.layers)){const Dn=ie.side;ie.side=Je,ie.needsUpdate=!0,uc(_e,H,V,Ye,ie,Tt),ie.side=Dn,ie.needsUpdate=!0,Ht=!0}}Ht===!0&&(T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st))}x.setRenderTarget(yt),x.setClearColor(X,j),Ft!==void 0&&(V.viewport=Ft),x.toneMapping=St}function Ys(w,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,st=w.length;F<st;F++){const dt=w[F],yt=dt.object,St=dt.geometry,Ft=V===null?dt.material:V,Ht=dt.group;yt.layers.test(H.layers)&&uc(yt,N,H,St,Ft,Ht)}}function uc(w,N,H,V,F,st){w.onBeforeRender(x,N,H,V,F,st),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,N,H,V,w,st),F.transparent===!0&&F.side===Ve&&F.forceSinglePass===!1?(F.side=Je,F.needsUpdate=!0,x.renderBufferDirect(H,N,V,F,w,st),F.side=si,F.needsUpdate=!0,x.renderBufferDirect(H,N,V,F,w,st),F.side=Ve):x.renderBufferDirect(H,N,V,F,w,st),w.onAfterRender(x,N,H,V,F,st)}function Zs(w,N,H){N.isScene!==!0&&(N=ve);const V=At.get(w),F=p.state.lights,st=p.state.shadowsArray,dt=F.state.version,yt=bt.getParameters(w,F.state,st,N,H),St=bt.getProgramCacheKey(yt);let Ft=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?k:y).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ft===void 0&&(w.addEventListener("dispose",Bt),Ft=new Map,V.programs=Ft);let Ht=Ft.get(St);if(Ht!==void 0){if(V.currentProgram===Ht&&V.lightsStateVersion===dt)return dc(w,yt),Ht}else yt.uniforms=bt.getUniforms(w),w.onBeforeCompile(yt,x),Ht=bt.acquireProgram(yt,St),Ft.set(St,Ht),V.uniforms=yt.uniforms;const wt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=it.uniform),dc(w,yt),V.needsLights=jh(w),V.lightsStateVersion=dt,V.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ht,V.uniformsList=null,Ht}function fc(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Dr.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function dc(w,N){const H=At.get(w);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function $h(w,N,H,V,F){N.isScene!==!0&&(N=ve),T.resetTextureUnits();const st=N.fog,dt=V.isMeshStandardMaterial?N.environment:null,yt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:wi,St=(V.isMeshStandardMaterial?k:y).get(V.envMap||dt),Ft=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,pe=!!H.morphAttributes.color;let _e=ii;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=x.toneMapping);const Ye=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=Ye!==void 0?Ye.length:0,Tt=At.get(V),Dn=p.state.lights;if(rt===!0&&(Et===!0||w!==S)){const hn=w===S&&V.id===E;it.setState(V,w,hn)}let se=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Dn.state.version||Tt.outputColorSpace!==yt||F.isBatchedMesh&&Tt.batching===!1||!F.isBatchedMesh&&Tt.batching===!0||F.isBatchedMesh&&Tt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Tt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Tt.instancing===!1||!F.isInstancedMesh&&Tt.instancing===!0||F.isSkinnedMesh&&Tt.skinning===!1||!F.isSkinnedMesh&&Tt.skinning===!0||F.isInstancedMesh&&Tt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Tt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Tt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Tt.instancingMorph===!1&&F.morphTexture!==null||Tt.envMap!==St||V.fog===!0&&Tt.fog!==st||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==it.numPlanes||Tt.numIntersection!==it.numIntersection)||Tt.vertexAlphas!==Ft||Tt.vertexTangents!==Ht||Tt.morphTargets!==wt||Tt.morphNormals!==ee||Tt.morphColors!==pe||Tt.toneMapping!==_e||Tt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Tt.__version=V.version);let _n=Tt.currentProgram;se===!0&&(_n=Zs(V,N,F));let Ei=!1,tn=!1,ls=!1;const xe=_n.getUniforms(),Tn=Tt.uniforms;if(Ct.useProgram(_n.program)&&(Ei=!0,tn=!0,ls=!0),V.id!==E&&(E=V.id,tn=!0),Ei||S!==w){Ct.buffers.depth.getReversed()?(ht.copy(w.projectionMatrix),$u(ht),Ju(ht),xe.setValue(O,"projectionMatrix",ht)):xe.setValue(O,"projectionMatrix",w.projectionMatrix),xe.setValue(O,"viewMatrix",w.matrixWorldInverse);const Xn=xe.map.cameraPosition;Xn!==void 0&&Xn.setValue(O,kt.setFromMatrixPosition(w.matrixWorld)),Kt.logarithmicDepthBuffer&&xe.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,tn=!0,ls=!0)}if(F.isSkinnedMesh){xe.setOptional(O,F,"bindMatrix"),xe.setOptional(O,F,"bindMatrixInverse");const hn=F.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),xe.setValue(O,"boneTexture",hn.boneTexture,T))}F.isBatchedMesh&&(xe.setOptional(O,F,"batchingTexture"),xe.setValue(O,"batchingTexture",F._matricesTexture,T),xe.setOptional(O,F,"batchingIdTexture"),xe.setValue(O,"batchingIdTexture",F._indirectTexture,T),xe.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&xe.setValue(O,"batchingColorTexture",F._colorsTexture,T));const hs=H.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Nt.update(F,H,_n),(tn||Tt.receiveShadow!==F.receiveShadow)&&(Tt.receiveShadow=F.receiveShadow,xe.setValue(O,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Tn.envMap.value=St,Tn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Tn.envMapIntensity.value=N.environmentIntensity),tn&&(xe.setValue(O,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&Jh(Tn,ls),st&&V.fog===!0&&ut.refreshFogUniforms(Tn,st),ut.refreshMaterialUniforms(Tn,V,q,et,p.state.transmissionRenderTarget[w.id]),Dr.upload(O,fc(Tt),Tn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Dr.upload(O,fc(Tt),Tn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(O,"center",F.center),xe.setValue(O,"modelViewMatrix",F.modelViewMatrix),xe.setValue(O,"normalMatrix",F.normalMatrix),xe.setValue(O,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const hn=V.uniformsGroups;for(let Xn=0,qn=hn.length;Xn<qn;Xn++){const pc=hn[Xn];I.update(pc,_n),I.bind(pc,_n)}}return _n}function Jh(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function jh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,N,H){At.get(w.texture).__webglTexture=N,At.get(w.depthTexture).__webglTexture=H;const V=At.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const H=At.get(w);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,H=0){C=w,A=N,P=H;let V=!0,F=null,st=!1,dt=!1;if(w){const St=At.get(w);if(St.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(O.FRAMEBUFFER,null),V=!1;else if(St.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(St.__hasExternalTextures)T.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const wt=w.depthTexture;if(St.__boundDepthTexture!==wt){if(wt!==null&&At.has(wt)&&(w.width!==wt.image.width||w.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Ft=w.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(dt=!0);const Ht=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[N])?F=Ht[N][H]:F=Ht[N],st=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?F=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?F=Ht[H]:F=Ht,D.copy(w.viewport),G.copy(w.scissor),z=w.scissorTest}else D.copy(nt).multiplyScalar(q).floor(),G.copy(gt).multiplyScalar(q).floor(),z=Lt;if(Ct.bindFramebuffer(O.FRAMEBUFFER,F)&&V&&Ct.drawBuffers(w,F),Ct.viewport(D),Ct.scissor(G),Ct.setScissorTest(z),st){const St=At.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,St.__webglTexture,H)}else if(dt){const St=At.get(w.texture),Ft=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,H||0,Ft)}E=-1},this.readRenderTargetPixels=function(w,N,H,V,F,st,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){Ct.bindFramebuffer(O.FRAMEBUFFER,yt);try{const St=w.texture,Ft=St.format,Ht=St.type;if(!Kt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&H>=0&&H<=w.height-F&&O.readPixels(N,H,V,F,Gt.convert(Ft),Gt.convert(Ht),st)}finally{const St=C!==null?At.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(O.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(w,N,H,V,F,st,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){const St=w.texture,Ft=St.format,Ht=St.type;if(!Kt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&H>=0&&H<=w.height-F){Ct.bindFramebuffer(O.FRAMEBUFFER,yt);const wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.bufferData(O.PIXEL_PACK_BUFFER,st.byteLength,O.STREAM_READ),O.readPixels(N,H,V,F,Gt.convert(Ft),Gt.convert(Ht),0);const ee=C!==null?At.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(O.FRAMEBUFFER,ee);const pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ku(O,pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,st),O.deleteBuffer(wt),O.deleteSync(pe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,H=0){w.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),F=Math.floor(w.image.width*V),st=Math.floor(w.image.height*V),dt=N!==null?N.x:0,yt=N!==null?N.y:0;T.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,dt,yt,F,st),Ct.unbindTexture()},this.copyTextureToTexture=function(w,N,H=null,V=null,F=0){w.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let st,dt,yt,St,Ft,Ht,wt,ee,pe;const _e=w.isCompressedTexture?w.mipmaps[F]:w.image;H!==null?(st=H.max.x-H.min.x,dt=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Ft=H.min.y,Ht=H.isBox3?H.min.z:0):(st=_e.width,dt=_e.height,yt=_e.depth||1,St=0,Ft=0,Ht=0),V!==null?(wt=V.x,ee=V.y,pe=V.z):(wt=0,ee=0,pe=0);const Ye=Gt.convert(N.format),ie=Gt.convert(N.type);let Tt;N.isData3DTexture?(T.setTexture3D(N,0),Tt=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Tt=O.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Tt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const Dn=O.getParameter(O.UNPACK_ROW_LENGTH),se=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_n=O.getParameter(O.UNPACK_SKIP_PIXELS),Ei=O.getParameter(O.UNPACK_SKIP_ROWS),tn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,_e.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_e.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,St),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ft),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ht);const ls=w.isDataArrayTexture||w.isData3DTexture,xe=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Tn=At.get(w),hs=At.get(N),hn=At.get(Tn.__renderTarget),Xn=At.get(hs.__renderTarget);Ct.bindFramebuffer(O.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let qn=0;qn<yt;qn++)ls&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.get(w).__webglTexture,F,Ht+qn),w.isDepthTexture?(xe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.get(N).__webglTexture,F,pe+qn),O.blitFramebuffer(St,Ft,st,dt,wt,ee,st,dt,O.DEPTH_BUFFER_BIT,O.NEAREST)):xe?O.copyTexSubImage3D(Tt,F,wt,ee,pe+qn,St,Ft,st,dt):O.copyTexSubImage2D(Tt,F,wt,ee,pe+qn,St,Ft,st,dt);Ct.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xe?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Tt,F,wt,ee,pe,st,dt,yt,Ye,ie,_e.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Tt,F,wt,ee,pe,st,dt,yt,Ye,_e.data):O.texSubImage3D(Tt,F,wt,ee,pe,st,dt,yt,Ye,ie,_e):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,wt,ee,st,dt,Ye,ie,_e.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,wt,ee,_e.width,_e.height,Ye,_e.data):O.texSubImage2D(O.TEXTURE_2D,F,wt,ee,st,dt,Ye,ie,_e);O.pixelStorei(O.UNPACK_ROW_LENGTH,Dn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_n),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ei),O.pixelStorei(O.UNPACK_SKIP_IMAGES,tn),F===0&&N.generateMipmaps&&O.generateMipmap(Tt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(w,N,H=null,V=null,F=0){return w.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,H,V,F)},this.initRenderTarget=function(w){At.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Ct.unbindTexture()},this.resetState=function(){A=0,P=0,C=null,Ct.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Za{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=i}clone(){return new Za(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ch extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class cg extends oi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Or=new R,kr=new R,pl=new me,gs=new Ga,gr=new ss,To=new R,ml=new R;class lg extends Pe{constructor(t=new Le,e=new cg){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Or.fromBufferAttribute(e,s-1),kr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Or.distanceTo(kr);t.setAttribute("lineDistance",new te(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;pl.copy(s).invert(),gs.copy(t.ray).applyMatrix4(pl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=u.getX(g),v=u.getX(g+1),M=_r(this,t,gs,c,p,v);M&&e.push(M)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=_r(this,t,gs,c,g,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=_r(this,t,gs,c,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=_r(this,t,gs,c,_-1,d);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _r(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(Or.fromBufferAttribute(o,s),kr.fromBufferAttribute(o,r),e.distanceSqToSegment(Or,kr,To,ml)>i)return;To.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(To);if(!(c<t.near||c>t.far))return{distance:c,point:ml.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const gl=new R,_l=new R;class xl extends lg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)gl.fromBufferAttribute(e,s),_l.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gl.distanceTo(_l);t.setAttribute("lineDistance",new te(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hg extends oi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vl=new me,Pa=new Ga,xr=new ss,vr=new R;class Ml extends Pe{constructor(t=new Le,e=new hg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;vl.copy(s).invert(),Pa.copy(t.ray).applyMatrix4(vl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=l.getX(_);vr.fromBufferAttribute(h,m),yl(vr,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)vr.fromBufferAttribute(h,_),yl(vr,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yl(n,t,e,i,s,r,o){const a=Pa.distanceSqToPoint(n);if(a<e){const c=new R;Pa.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class os extends We{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ot:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new R,s=[],r=[],o=[],a=new R,c=new me;for(let d=0;d<=t;d++){const _=d/t;s[d]=this.getTangentAt(_,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ka extends Pn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ug extends Ka{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $a(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Mr=new R,Ao=new $a,Ro=new $a,Co=new $a;class fg extends Pn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new R){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Mr.subVectors(s[0],s[1]).add(s[0]),l=Mr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Mr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Ao.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,_,g,m),Ro.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,_,g,m),Co.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ro.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Co.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Ao.calc(c),Ro.calc(c),Co.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sl(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function dg(n,t){const e=1-n;return e*e*t}function pg(n,t){return 2*(1-n)*n*t}function mg(n,t){return n*n*t}function As(n,t,e,i){return dg(n,t)+pg(n,e)+mg(n,i)}function gg(n,t){const e=1-n;return e*e*e*t}function _g(n,t){const e=1-n;return 3*e*e*n*t}function xg(n,t){return 3*(1-n)*n*n*t}function vg(n,t){return n*n*n*t}function Rs(n,t,e,i,s){return gg(n,t)+_g(n,e)+xg(n,i)+vg(n,s)}class Ph extends Pn{constructor(t=new ot,e=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Rs(t,s.x,r.x,o.x,a.x),Rs(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mg extends Pn{constructor(t=new R,e=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new R){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Rs(t,s.x,r.x,o.x,a.x),Rs(t,s.y,r.y,o.y,a.y),Rs(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lh extends Pn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yg extends Pn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dh extends Pn{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sg extends Pn{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y),As(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ih extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Sl(a,c.x,l.x,u.x,h.x),Sl(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var wl=Object.freeze({__proto__:null,ArcCurve:ug,CatmullRomCurve3:fg,CubicBezierCurve:Ph,CubicBezierCurve3:Mg,EllipseCurve:Ka,LineCurve:Lh,LineCurve3:yg,QuadraticBezierCurve:Dh,QuadraticBezierCurve3:Sg,SplineCurve:Ih});class wg extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new wl[s.type]().fromJSON(s))}return this}}class El extends wg{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Lh(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Dh(this.currentPoint.clone(),new ot(t,e),new ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Ph(this.currentPoint.clone(),new ot(t,e),new ot(i,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ih(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new Ka(t,e,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ja extends Le{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new R,f=new ot,d=new R,_=new R,g=new R;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),c.push(d.x,d.y,d.z),g.copy(_)}for(let v=0;v<=e;v++){const M=i+v*u*s,x=Math.sin(M),U=Math.cos(M);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*x,h.y=t[A].y,h.z=t[A].x*U,o.push(h.x,h.y,h.z),f.x=v/e,f.y=A/(t.length-1),a.push(f.x,f.y);const P=c[3*A+0]*x,C=c[3*A+1],E=c[3*A+0]*U;l.push(P,C,E)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const x=M+v*t.length,U=x,A=x+t.length,P=x+t.length+1,C=x+1;r.push(U,A,C),r.push(P,C,A)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.points,t.segments,t.phiStart,t.phiLength)}}class as extends Le{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,u=new ot;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class mt extends Le{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const g=[],m=i/2;let p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function v(){const x=new R,U=new R;let A=0;const P=(e-t)/i;for(let C=0;C<=r;C++){const E=[],S=C/r,D=S*(e-t)+t;for(let G=0;G<=s;G++){const z=G/s,X=z*c+a,j=Math.sin(X),W=Math.cos(X);U.x=D*j,U.y=-S*i+m,U.z=D*W,h.push(U.x,U.y,U.z),x.set(j,P,W).normalize(),f.push(x.x,x.y,x.z),d.push(z,1-S),E.push(_++)}g.push(E)}for(let C=0;C<s;C++)for(let E=0;E<r;E++){const S=g[E][C],D=g[E+1][C],G=g[E+1][C+1],z=g[E][C+1];(t>0||E!==0)&&(u.push(S,D,z),A+=3),(e>0||E!==r-1)&&(u.push(D,G,z),A+=3)}l.addGroup(p,A,0),p+=A}function M(x){const U=_,A=new ot,P=new R;let C=0;const E=x===!0?t:e,S=x===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),_++;const D=_;for(let G=0;G<=s;G++){const X=G/s*c+a,j=Math.cos(X),W=Math.sin(X);P.x=E*W,P.y=m*S,P.z=E*j,h.push(P.x,P.y,P.z),f.push(0,S,0),A.x=j*.5+.5,A.y=W*.5*S+.5,d.push(A.x,A.y),_++}for(let G=0;G<s;G++){const z=U+G,X=D+G;x===!0?u.push(X,X+1,z):u.push(X+1,X,z),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xe extends mt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Xe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ks extends Le{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new R,x=new R,U=new R;for(let A=0;A<e.length;A+=3)d(e[A+0],M),d(e[A+1],x),d(e[A+2],U),c(M,x,U,v)}function c(v,M,x,U){const A=U+1,P=[];for(let C=0;C<=A;C++){P[C]=[];const E=v.clone().lerp(x,C/A),S=M.clone().lerp(x,C/A),D=A-C;for(let G=0;G<=D;G++)G===0&&C===A?P[C][G]=E:P[C][G]=E.clone().lerp(S,G/D)}for(let C=0;C<A;C++)for(let E=0;E<2*(A-C)-1;E++){const S=Math.floor(E/2);E%2===0?(f(P[C][S+1]),f(P[C+1][S]),f(P[C][S])):(f(P[C][S+1]),f(P[C+1][S+1]),f(P[C+1][S]))}}function l(v){const M=new R;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(v),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const v=new R;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const x=m(v)/2/Math.PI+.5,U=p(v)/Math.PI+.5;o.push(x,1-U)}_(),h()}function h(){for(let v=0;v<o.length;v+=6){const M=o[v+0],x=o[v+2],U=o[v+4],A=Math.max(M,x,U),P=Math.min(M,x,U);A>.9&&P<.1&&(M<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),U<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function _(){const v=new R,M=new R,x=new R,U=new R,A=new ot,P=new ot,C=new ot;for(let E=0,S=0;E<r.length;E+=9,S+=6){v.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),A.set(o[S+0],o[S+1]),P.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),U.copy(v).add(M).add(x).divideScalar(3);const D=m(U);g(A,S+0,v,D),g(P,S+2,M,D),g(C,S+4,x,D)}}function g(v,M,x,U){U<0&&v.x===1&&(o[M]=v.x-1),x.x===0&&x.z===0&&(o[M]=U/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.vertices,t.indices,t.radius,t.details)}}class zs extends ks{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zs(t.radius,t.detail)}}class Uh extends El{constructor(t){super(t),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new El().fromJSON(s))}return this}}const Eg={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Nh(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(i&&(r=Cg(n,t,r,e)),n.length>80*e){a=l=n[0],c=u=n[1];for(let _=e;_<s;_+=e)h=n[_],f=n[_+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Ls(r,o,e,a,c,d,0),o}};function Nh(n,t,e,i,s){let r,o;if(s===Bg(n,t,e,i)>0)for(r=t;r<e;r+=i)o=bl(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=bl(r,n[r],n[r+1],o);return o&&Yr(o,o.next)&&(Is(o),o=o.next),o}function Si(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Yr(e,e.next)||Me(e.prev,e,e.next)===0)){if(Is(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ls(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Ug(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Tg(n,i,s,r):bg(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Is(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Ag(Si(n),t,e),Ls(n,t,e,i,s,r,2)):o===2&&Rg(n,t,e,i,s,r):Ls(Si(n),t,e,i,s,r,1);break}}}function bg(n){const t=n.prev,e=n,i=n.next;if(Me(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Hi(s,a,r,c,o,l,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Tg(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Me(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,_=u<h?u<f?u:f:h<f?h:f,g=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=La(d,_,t,e,i),v=La(g,m,t,e,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=p&&x&&x.z<=v;){if(M.x>=d&&M.x<=g&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&Hi(a,u,c,h,l,f,M.x,M.y)&&Me(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=g&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&Hi(a,u,c,h,l,f,x.x,x.y)&&Me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=g&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&Hi(a,u,c,h,l,f,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&Hi(a,u,c,h,l,f,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ag(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Yr(s,r)&&Fh(s,i,i.next,r)&&Ds(s,r)&&Ds(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Is(i),Is(i.next),i=n=r),i=i.next}while(i!==n);return Si(i)}function Rg(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Og(o,a)){let c=Oh(o,a);o=Si(o,o.next),c=Si(c,c.next),Ls(o,t,e,i,s,r,0),Ls(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Cg(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Nh(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Fg(l));for(s.sort(Pg),r=0;r<s.length;r++)e=Lg(s[r],e);return e}function Pg(n,t){return n.x-t.x}function Lg(n,t){const e=Dg(n,t);if(!e)return t;const i=Oh(e,n);return Si(i,i.next),Si(e,e.next)}function Dg(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Hi(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ds(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Ig(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Ig(n,t){return Me(n.prev,n,t.prev)<0&&Me(t.next,n,n.next)<0}function Ug(n,t,e,i){let s=n;do s.z===0&&(s.z=La(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ng(s)}function Ng(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function La(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Fg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Hi(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Og(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!kg(n,t)&&(Ds(n,t)&&Ds(t,n)&&zg(n,t)&&(Me(n.prev,n,t.prev)||Me(n,t.prev,t))||Yr(n,t)&&Me(n.prev,n,n.next)>0&&Me(t.prev,t,t.next)>0)}function Me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Yr(n,t){return n.x===t.x&&n.y===t.y}function Fh(n,t,e,i){const s=Sr(Me(n,t,e)),r=Sr(Me(n,t,i)),o=Sr(Me(e,i,n)),a=Sr(Me(e,i,t));return!!(s!==r&&o!==a||s===0&&yr(n,e,t)||r===0&&yr(n,i,t)||o===0&&yr(e,n,i)||a===0&&yr(e,t,i))}function yr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Sr(n){return n>0?1:n<0?-1:0}function kg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Fh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ds(n,t){return Me(n.prev,n,n.next)<0?Me(n,t,n.next)>=0&&Me(n,n.prev,t)>=0:Me(n,t,n.prev)<0||Me(n,n.next,t)<0}function zg(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Oh(n,t){const e=new Da(n.i,n.x,n.y),i=new Da(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function bl(n,t,e,i){const s=new Da(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Is(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Da(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bg(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Cs{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Cs.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Tl(t),Al(i,t);let o=t.length;e.forEach(Tl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Al(i,e[c]);const a=Eg.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Tl(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Al(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ae extends ks{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ae(t.radius,t.detail)}}class ja extends ks{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ja(t.radius,t.detail)}}class Qa extends Le{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new R,_=new ot;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,u.push(_.x,_.y)}h+=f}for(let g=0;g<s;g++){const m=g*(i+1);for(let p=0;p<i;p++){const v=p+m,M=v,x=v+i+1,U=v+i+2,A=v+1;a.push(M,x,A),a.push(x,U,A)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tc extends Le{constructor(t=new Uh([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const _=f.holes;Cs.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const v=_[m];Cs.isClockWise(v)===!0&&(_[m]=v.reverse())}const g=Cs.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const v=_[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=g.length;m<p;m++){const v=g[m],M=v[0]+h,x=v[1]+h,U=v[2]+h;i.push(M,x,U),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Hg(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new tc(i,t.curveSegments)}}function Hg(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Fe extends Le{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new R,f=new R,d=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){const v=[],M=p/i;let x=0;p===0&&o===0?x=.5/e:p===i&&c===Math.PI&&(x=-.5/e);for(let U=0;U<=e;U++){const A=U/e;h.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(A+x,1-M),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const M=u[p][v+1],x=u[p][v],U=u[p+1][v],A=u[p+1][v+1];(p!==0||o>0)&&d.push(M,x,A),(p!==i-1||c<Math.PI)&&d.push(x,U,A)}this.setIndex(d),this.setAttribute("position",new te(_,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qe extends Le{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new R,h=new R,f=new R;for(let d=0;d<=i;d++)for(let _=0;_<=s;_++){const g=_/s*r,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(g),h.y=(t+e*Math.cos(m))*Math.sin(g),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(_/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=s;_++){const g=(s+1)*d+_-1,m=(s+1)*(d-1)+_-1,p=(s+1)*(d-1)+_,v=(s+1)*d+_;o.push(g,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kh extends oi{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new zt(16777215),this.specular=new zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ir extends oi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ec extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Po=new me,Rl=new R,Cl=new R;class zh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rl),Cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cl),e.updateMatrixWorld(),Po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pl=new me,_s=new R,Lo=new R;class Vg extends zh{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),i.position.copy(_s),Lo.copy(i.position),Lo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Lo),i.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),Pl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl)}}class Gg extends ec{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Vg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wg extends zh{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ll extends ec{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Wg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xg extends ec{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);const Ts={paper:"#f4ead5",paperShade:"#e6d6b6",white:"#fffaf0",ink:"#25304f",inkSoft:"#4a5878",red:"#e4573d",redDark:"#a83b2a",pink:"#f3a59a",teal:"#2b9c8e",tealDark:"#1c6b63",tealLight:"#9ad6c8",mustard:"#f2b234",mustardDark:"#c58a1f",peach:"#f8c7a4",lilac:"#c9b3d9",grass:"#79b25d",grassDark:"#4f8a49",concrete:"#9fa1ab",wood:"#c27b4b",woodDark:"#8a5134",skin1:"#f6cfae",skin2:"#d9a07a",skin3:"#9a6446"};function Bn(n){return Vi(Ts[n])}function Vi(n){const t=parseInt(n.slice(1),16);return new zt((t>>16&255)/255,(t>>8&255)/255,(t&255)/255)}const fe={enterX:0,exitX:900,frontX:600,gap:100,maxWaiting:3,speed:55};function Dl(n){return fe.frontX-n*fe.gap}class qg{constructor(){tt(this,"line",[]);tt(this,"leaving",[])}canJoin(){const t=this.line[this.line.length-1];return this.line.length<fe.maxWaiting&&(!t||t.x-fe.enterX>=fe.gap)}join(t){if(!this.canJoin())return null;const e={orderId:t,x:fe.enterX,state:"walking",waited:0};return this.line.push(e),e}front(){const t=this.line[0];return t&&t.state==="waiting"&&t.x===Dl(0)?t:null}serveFront(){const t=this.front();return t?(this.line.shift(),t.state="leaving",t.walkOff="on",this.leaving.push(t),t):null}giveUp(t){const e=this.line.indexOf(t);e<0||(this.line.splice(e,1),t.state="leaving",t.walkOff="back",this.leaving.push(t))}release(t){const e=this.leaving.indexOf(t);e>=0&&this.leaving.splice(e,1)}walkOn(t,e){const i={orderId:t,x:e,state:"leaving",waited:0,walkOff:"on"};return this.leaving.push(i),i}update(t){const e=fe.speed*t;this.line.forEach((s,r)=>{const o=Dl(r),a=this.line[r-1],c=a?Math.min(o,a.x-fe.gap):o;s.x<c&&(s.x=Math.min(c,s.x+e)),s.state=s.x>=c?"waiting":"walking"});const i=[];for(const s of[...this.leaving]){const r=s.walkOff==="back";s.x=r?Math.max(fe.enterX,s.x-e):Math.min(fe.exitX,s.x+e),(r?s.x<=fe.enterX:s.x>=fe.exitX)&&(this.leaving.splice(this.leaving.indexOf(s),1),i.push(s))}return i}}const sn=(n,t,e,i,s,r)=>({min:{x:Math.min(n,i),y:Math.min(t,s),z:Math.min(e,r)},max:{x:Math.max(n,i),y:Math.max(t,s),z:Math.max(e,r)}}),je={length:6,depth:2.4,height:2.4},Qn=je.length/2,he=je.depth/2,dn=1.6,Yg=2.2,Zg=1.7,L=-.35,Yt={window:sn(-1.5,1.05,-he-.05,1.5,2.05,-he+.05),frontCounter:sn(-1.8,0,-he,1.8,1,-he+.45),tablet:sn(.7,1,-he+.12,1.06,1.26,-he+.3),tipJar:sn(-1.3,1,-he+.15,-1.12,1.22,-he+.33),fridge:sn(-Qn,0,-he+.05,-Qn+.75,2,-.2),stockShelves:sn(-Qn,0,.05,-Qn+.55,2,he),backCounter:sn(-1.6,0,he-.45,1.8,.95,he),coffeeMachine:sn(-1.25,.95,he-.4,-.6,1.5,he-.05),menuBoard:sn(-.1,1.35,he-.05,1,2.1,he),recipeShelf:sn(1.15,1.42,he-.3,1.75,1.78,he),door:sn(Qn-.05,0,-.5,Qn,2.1,.5),guideBook:sn(.2,.95,he-.4,.62,1.22,he-.06),radio:sn(-.5,.95,he-.3,-.1,1.2,he-.08)},re={x:-.92,y:1.9,z:he-.02,r:.16},wr={minX:-Qn+.95,maxX:Qn-.4,minZ:-he+.7,maxZ:he-.7},Do={x:0,z:.1,yaw:0},Kg=[{id:"tablet",box:Yt.tablet},{id:"fridge",box:Yt.fridge},{id:"fridge",box:Yt.stockShelves},{id:"menu-board",box:Yt.menuBoard},{id:"recipe-shelf",box:Yt.recipeShelf},{id:"back-door",box:Yt.door},{id:"guide-book",box:Yt.guideBook},{id:"radio",box:Yt.radio}],$g=[{id:"tablet",tables:["sales","menu_items"],object:"tablet",box:Yt.tablet},{id:"fridge",tables:["inventory"],object:"fridge",box:Yt.fridge},{id:"shelves",tables:["suppliers"],object:"fridge",box:Yt.stockShelves},{id:"menu-board",tables:["menu_items"],object:"menu-board",box:Yt.menuBoard},{id:"recipes",tables:["recipes","menu_items"],object:"recipe-shelf",box:Yt.recipeShelf}];function Jg(n){return{x:(n.min.x+n.max.x)/2,y:Math.min(n.max.y+.15,je.height-.1),z:(n.min.z+n.max.z)/2}}function jg(n,t){return{x:Math.min(wr.maxX,Math.max(wr.minX,n)),z:Math.min(wr.maxZ,Math.max(wr.minZ,t))}}function Il(n,t){const e=Math.cos(t);return{x:-Math.sin(n)*e,y:Math.sin(t),z:-Math.cos(n)*e}}function Io(n,t,e,i,s=!1){const r=(e.forward?1:0)-(e.back?1:0),o=(e.right?1:0)-(e.left?1:0),a=Math.hypot(r,o);if(a===0)return n;const c=Yg*(s?2:1)*i/a,l=-Math.sin(t),u=-Math.cos(t),h=Math.cos(t),f=-Math.sin(t),d=n.x+(l*r+h*o)*c,_=n.z+(u*r+f*o)*c;return s?{x:d,z:_}:jg(d,_)}function Bh(n,t,e){let i=0,s=1/0;for(const r of["x","y","z"]){const o=n[r],a=t[r];if(Math.abs(a)<1e-9){if(o<e.min[r]||o>e.max[r])return null;continue}let c=(e.min[r]-o)/a,l=(e.max[r]-o)/a;if(c>l&&([c,l]=[l,c]),i=Math.max(i,c),s=Math.min(s,l),i>s)return null}return i}function Qg(n,t){let e=null;for(const{id:i,box:s}of Kg){const r=Bh(n,t,s);r!==null&&r<=Zg&&(!e||r<e.t)&&(e={id:i,t:r})}return(e==null?void 0:e.id)??null}function t_(n,t){const e=t.x-n.x,i=t.y-n.y,s=t.z-n.z;return{yaw:Math.atan2(-e,-s),pitch:Math.atan2(i,Math.hypot(e,s))}}const zi=n=>({x:(n.min.x+n.max.x)/2,y:(n.min.y+n.max.y)/2,z:(n.min.z+n.max.z)/2}),Hh=[{object:"tablet",eye:{x:.2,y:dn,z:.15},target:zi(Yt.tablet)},{object:"fridge",eye:{x:.9,y:dn,z:.3},target:{x:-2.5,y:1.05,z:-.45}},{object:"recipe-shelf",eye:{x:1.2,y:dn,z:-.25},target:zi(Yt.recipeShelf)},{object:"menu-board",eye:{x:.45,y:dn,z:-.35},target:zi(Yt.menuBoard)},{object:"back-door",eye:{x:.4,y:dn,z:0},target:zi(Yt.door)},{object:"guide-book",eye:{x:.4,y:dn,z:-.05},target:zi(Yt.guideBook)},{object:"radio",eye:{x:-.25,y:dn,z:-.1},target:zi(Yt.radio)}],Uo=[{x:.3,z:-he-.6},{x:.5,z:-he-1.65},{x:.7,z:-he-2.7}],xs=(n,t)=>{const e=n.length,i=t.length;return[...n.map((s,r)=>({at:fe.enterX+r/e*(fe.frontX-2*fe.gap-fe.enterX),...s})),{at:fe.frontX-2*fe.gap,...Uo[2]},{at:fe.frontX-fe.gap,...Uo[1]},{at:fe.frontX,...Uo[0]},...t.map((s,r)=>({at:fe.frontX+(r+1)/i*(fe.exitX-fe.frontX),...s}))]},nc={park:xs([{x:-11,z:-8}],[{x:4,z:-2.6},{x:9,z:-3.5}]),skatepark:xs([{x:13,z:-6.5}],[{x:-3,z:-2.7},{x:-9,z:-4.5}]),school:xs([{x:-.8,z:-23.5},{x:.6,z:-9}],[{x:4,z:-2.6},{x:8,z:-3.2}]),harbour:xs([{x:-13,z:-7}],[{x:4.5,z:-2.6},{x:11,z:-3}]),square:xs([{x:13,z:-5.2}],[{x:-3,z:-2.4},{x:-9,z:-2.6}])};function No(n,t="park"){const e=nc[t],i=Math.min(e[e.length-1].at,Math.max(e[0].at,n));for(let r=1;r<e.length;r++){const o=e[r-1],a=e[r];if(i<=a.at){const c=(i-o.at)/(a.at-o.at),l=Math.atan2(-(a.x-o.x),-(a.z-o.z));return{x:o.x+(a.x-o.x)*c,z:o.z+(a.z-o.z)*c,yaw:l}}}const s=e[e.length-1];return{x:s.x,z:s.z,yaw:0}}const e_=Math.PI,n_={bench:1,picnicTable:1.3,lamp:.3,tree:1.3,bush:.7,bin:.35,quarterPipe:2,funBox:1.7,rail:1.5,pillar:.8,hoop:.8,bikeRack:1.1,flagPole:.3,bollard:.3,crates:1,barrel:.45,stall:1.7,fountain:2.4,planter:.7,aFrame:.5,bistroSet:1},Bs={park:[{kind:"bench",x:-5.2,z:-3.2,yaw:.4},{kind:"bench",x:5.6,z:-8.8,yaw:-.5},{kind:"bench",x:8.5,z:-14,yaw:-.2},{kind:"picnicTable",x:3.9,z:-6.2},{kind:"picnicTable",x:-5.5,z:-12},{kind:"picnicTable",x:7,z:-11},{kind:"lamp",x:-3.6,z:-3.6},{kind:"lamp",x:2.4,z:-4.4},{kind:"lamp",x:6.5,z:-7},{kind:"tree",x:-8.5,z:-1.5,size:1.2},{kind:"tree",x:9.5,z:-7.5,size:1.1},{kind:"tree",x:-2,z:-16,size:1.3},{kind:"aFrame",x:-1.6,z:-3.2,yaw:.4},{kind:"bistroSet",x:7,z:-5.5,yaw:-.5},{kind:"bistroSet",x:1,z:-6,yaw:.5}],skatepark:[{kind:"quarterPipe",x:1.5,z:-12,yaw:0},{kind:"quarterPipe",x:-6,z:-16,yaw:.3},{kind:"funBox",x:6.5,z:-10},{kind:"rail",x:3.2,z:-7.2,yaw:.2},{kind:"pillar",x:-11,z:-13},{kind:"pillar",x:11,z:-13},{kind:"pillar",x:-4,z:-21},{kind:"pillar",x:5,z:-21},{kind:"bench",x:-6,z:-7.5,yaw:.4},{kind:"bin",x:-2.2,z:-6.5},{kind:"lamp",x:-1.5,z:-9},{kind:"lamp",x:-9.5,z:-7.5},{kind:"aFrame",x:-1.3,z:-3.8,yaw:.3},{kind:"bistroSet",x:-4,z:-5,yaw:0},{kind:"bistroSet",x:-8,z:-6.5,yaw:1.57}],school:[{kind:"hoop",x:4,z:-14,yaw:Math.PI},{kind:"hoop",x:4,z:-8.4,yaw:0},{kind:"bikeRack",x:-5.6,z:-3.4,yaw:.5},{kind:"bikeRack",x:9.5,z:-5.5,yaw:-1.2},{kind:"flagPole",x:-3,z:-17},{kind:"bench",x:8.8,z:-9.5,yaw:-1.3},{kind:"tree",x:-7.5,z:-6.5,size:1.1},{kind:"tree",x:-9,z:-14,size:1.3},{kind:"tree",x:11,z:-15,size:1.2},{kind:"bin",x:2.6,z:-4.4},{kind:"aFrame",x:-1.3,z:-3.8,yaw:.4},{kind:"bistroSet",x:4.5,z:-5,yaw:-.5},{kind:"bistroSet",x:7,z:-8,yaw:-.5}],harbour:[{kind:"bollard",x:-6,z:-14},{kind:"bollard",x:-1,z:-14},{kind:"bollard",x:4,z:-14},{kind:"bollard",x:9,z:-14},{kind:"crates",x:5,z:-8.5,yaw:.3},{kind:"crates",x:-6.5,z:-1.8,yaw:-.4},{kind:"barrel",x:6.8,z:-9.8},{kind:"barrel",x:3.3,z:-10.4},{kind:"bench",x:.5,z:-9.5,yaw:0},{kind:"lamp",x:2.4,z:-4.4},{kind:"lamp",x:-3.6,z:-11},{kind:"lamp",x:8,z:-6.5},{kind:"aFrame",x:-1.6,z:-2.9,yaw:.5},{kind:"bistroSet",x:4,z:-5.5,yaw:0},{kind:"bistroSet",x:6.5,z:-6,yaw:-.5}],square:[{kind:"fountain",x:4.5,z:-11},{kind:"stall",x:-6,z:-15,yaw:.2},{kind:"stall",x:9.5,z:-7.5,yaw:-.9},{kind:"stall",x:-.5,z:-17,yaw:0},{kind:"planter",x:-6.5,z:-6},{kind:"planter",x:3,z:-7.2},{kind:"bench",x:8.5,z:-14,yaw:-.4},{kind:"lamp",x:-3.8,z:-4.4},{kind:"lamp",x:6.5,z:-6.5},{kind:"tree",x:-10,z:-8,size:1.1},{kind:"aFrame",x:-1.3,z:-3.8,yaw:.3},{kind:"bistroSet",x:-2,z:-6.5,yaw:-.5},{kind:"bistroSet",x:-8,z:-4.5,yaw:.5}]};function i_(n){return n_[n.kind]*(n.size??1)}const s_={bench:[-.4,.4].map(n=>({x:n,z:0,yaw:0,height:.48,from:{x:n,z:-.75}})),picnicTable:[...[-.35,.35].map(n=>({x:n,z:-.72,yaw:Math.PI,height:.46,from:{x:n,z:-1.35},cup:{x:n,y:.78,z:-.25}})),...[-.35,.35].map(n=>({x:n,z:.72,yaw:0,height:.46,from:{x:n,z:1.35},cup:{x:n,y:.78,z:.25}}))],bistroSet:[{x:-.62,z:0,yaw:-Math.PI/2,height:.48,from:{x:-1.15,z:0},cup:{x:-.2,y:.74,z:0}},{x:.62,z:0,yaw:Math.PI/2,height:.48,from:{x:1.15,z:0},cup:{x:.2,y:.74,z:0}}]};function Fo(n,t,e){const i=n.yaw??0,s=Math.cos(i),r=Math.sin(i);return{x:n.x+t*s+e*r,z:n.z-t*r+e*s}}function r_(n){const t=[];return Bs[n].forEach((e,i)=>{(s_[e.kind]??[]).forEach((s,r)=>{const o=Fo(e,s.x,s.z),a=s.cup?{...Fo(e,s.cup.x,s.cup.z),y:s.cup.y}:void 0;t.push({id:`${i}.${r}`,...o,yaw:s.yaw+(e.yaw??0),height:s.height,from:Fo(e,s.from.x,s.from.z),cup:a,prop:i})})}),t}function Vh(n){const e=nc[n].find(i=>i.at>fe.frontX);return{x:e.x,z:e.z,at:e.at}}function o_(n){return nc[n].filter(t=>t.at>=fe.frontX-2*fe.gap&&t.at<=fe.frontX)}function zr(n,t,e){const i=e.x-t.x,s=e.z-t.z,r=i*i+s*s,o=r===0?0:Math.max(0,Math.min(1,((n.x-t.x)*i+(n.z-t.z)*s)/r));return Math.hypot(n.x-(t.x+i*o),n.z-(t.z+s*o))}function a_(n,t,e,i){let s=1/0;for(let r=0;r<=20;r++){const o=r/20;s=Math.min(s,zr({x:n.x+(t.x-n.x)*o,z:n.z+(t.z-n.z)*o},e,i)),s=Math.min(s,zr({x:e.x+(i.x-e.x)*o,z:e.z+(i.z-e.z)*o},n,t))}return s}const c_=n=>n.x>-5.2&&n.x<3.5&&n.z>-1.45&&n.z<1.45,Ul=.3,l_=.7,h_=.45;function Ia(n,t){const e=Vh(t);return[{x:e.x,z:e.z},n.from,{x:n.x,z:n.z}]}function u_(n,t){const[e,i,s]=Ia(n,t),r=Bs[t];for(let a=0;a<r.length;a++){const c=r[a],l=i_(c)*.8+Ul,u=a===n.prop?h_+Ul:l;if(zr(c,e,i)<u)return`walks through the ${c.kind} at ${c.x}, ${c.z}`;if(a!==n.prop&&zr(c,i,s)<l)return`sits into the ${c.kind} at ${c.x}, ${c.z}`}const o=o_(t);for(let a=1;a<o.length;a++)if(a_(e,i,o[a-1],o[a])<l_)return"walks through the line";for(let a=0;a<=20;a++){const c=a/20;if(c_({x:e.x+(i.x-e.x)*c,z:e.z+(i.z-e.z)*c}))return"walks through the truck"}return null}function f_(n){return r_(n).filter(t=>u_(t,n)===null)}const Oo=.6,d_=1.3,ko={min:18,max:40};function Gh(n,t){let e=t;for(let s=1;s<n.length;s++){const r=n[s-1],o=n[s],a=Math.hypot(o.x-r.x,o.z-r.z),c=Math.atan2(-(o.x-r.x),-(o.z-r.z));if(e<=a||s===n.length-1){const l=a===0?1:Math.min(1,e/a);return{x:r.x+(o.x-r.x)*l,z:r.z+(o.z-r.z)*l,yaw:c,done:s===n.length-1&&e>=a}}e-=a}return{...n[n.length-1],yaw:0,done:!0}}class Nl{constructor(t){tt(this,"diners",[]);tt(this,"seats");this.place=t,this.seats=f_(t)}freeSeats(){return this.seats.filter(t=>!this.diners.some(e=>e.seat.id===t.id))}tryToSit(t,e,i=!0){if(!i||e>=Oo)return null;const s=this.freeSeats();if(s.length===0)return null;const r=s[Math.floor(e/Oo*s.length)%s.length],o={orderId:t,seat:r,state:"toSeat",path:Ia(r,this.place),walked:0,sitLeft:ko.min+e/Oo*(ko.max-ko.min)};return this.diners.push(o),o}update(t,e){const i=[];for(const s of[...this.diners]){if(s.state==="sitting"){s.sitLeft-=e,s.sitLeft<=0&&(s.state="leaving",s.path=[...Ia(s.seat,this.place)].reverse(),s.walked=0);continue}s.walked+=d_*t,Gh(s.path,s.walked).done&&(s.state==="toSeat"?s.state="sitting":(this.diners.splice(this.diners.indexOf(s),1),i.push(s)))}return i}}const le=(n,t,e)=>({x:n,y:t,z:e}),Ur=[{name:"truck",from:le(-2.5,1.6,-9),to:le(2.5,1.9,-8.4),lookFrom:le(-.8,1.5,0),lookTo:le(.3,1.5,0),seconds:7},{name:"awning",from:le(2.9,2.6,-3.5),to:le(1.7,2.75,-3.2),lookFrom:le(-.6,2.2,-1.4),lookTo:le(-.9,2.4,-1.4),seconds:6},{name:"inside",from:le(1.9,1.55,-.55),to:le(.9,1.5,-.6),lookFrom:le(-.9,1.25,1),lookTo:le(-1.2,1.25,1),seconds:6},{name:"place",from:le(-7,9,-15),to:le(5,10.5,-17),lookFrom:le(0,0,-4),lookTo:le(0,0,-3),seconds:8},{name:"cab",from:le(-8.6,.45,-2.4),to:le(-7.6,.55,-1.4),lookFrom:le(-4,1.1,-.4),lookTo:le(-3.6,1.1,0),seconds:6},{name:"roof",from:le(3.6,4.3,-3.6),to:le(.6,4,-3.8),lookFrom:le(-.6,3,0),lookTo:le(-1.6,3,0),seconds:6},{name:"seats",from:le(6,3.6,-11),to:le(4,3.3,-10.5),lookFrom:le(.5,.8,-4.5),lookTo:le(0,.9,-4),seconds:7}],zo=Ur.reduce((n,t)=>n+t.seconds,0),Fl=.6,p_=n=>n*n*(3-2*n),Ol=(n,t,e)=>({x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e,z:n.z+(t.z-n.z)*e});function m_(n){let t=(n%zo+zo)%zo;for(const i of Ur){if(t<i.seconds){const s=p_(t/i.seconds),r=Math.min(t,i.seconds-t);return{shot:i.name,at:Ol(i.from,i.to,s),look:Ol(i.lookFrom,i.lookTo,s),dark:r<Fl?1-r/Fl:0}}t-=i.seconds}const e=Ur[Ur.length-1];return{shot:e.name,at:e.to,look:e.lookTo,dark:1}}const Br=12,g_=.7;function Hs(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Bo(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function __(n,t=!1){const e=Hs(n);if(!t&&e()>g_)return[];const i=[],s=t?2:1+Math.floor(e()*2);let r=Zi+15;for(let o=0;o<s&&r<rn-40;o++){const a=o===0&&t?Zi-Br:r+Math.floor(e()*120),c=(o===0&&t?90:40)+Math.floor(e()*70),l=Math.min(rn+Br,a+c);i.push({start:a,end:l,strength:o===0&&t?.95:.45+e()*.55}),r=l+30}return i}function x_(n,t){let e=0;for(const i of n){const s=Math.min(1,Math.max(0,(t-i.start)/Br)),r=Math.min(1,Math.max(0,(i.end-t)/Br));e=Math.max(e,Math.min(s,r)*i.strength)}return e}const yn=(n,t)=>t[Math.floor(n()*t.length)],v_=["skin1","skin2","skin3"],M_=["ink","woodDark","wood","mustardDark","redDark","inkSoft"],kl=["red","teal","mustard","pink","lilac","tealLight","peach","grass"],zl=["ink","inkSoft","tealDark","woodDark","redDark","grassDark","wood"],y_=["white","paper","paperShade","peach","tealLight","pink"],S_={student:{hair:["short","spiky","curly","ponytail","long","beanie","bun"],tops:["hoodie","tee","jacket"],lowers:["trousers","shorts","skirt"],extras:["backpack","headphones","brows","blush"]},office:{hair:["short","bun","long","bald","ponytail"],tops:["jacket","sweater"],lowers:["trousers","skirt"],extras:["lanyard","bag","brows","moustache"]},runner:{hair:["cap","short","ponytail","spiky","bald"],tops:["tee","hoodie"],lowers:["shorts","trousers"],extras:["headphones","necklace","brows"]},grandpa:{hair:["sides","bald","short"],tops:["sweater","jacket"],lowers:["trousers"],extras:["moustache","beard","scarf","bag"],old:!0},painter:{hair:["bun","curly","long","beanie","short"],tops:["tee","sweater","jacket"],lowers:["trousers","skirt","shorts"],extras:["paint","scarf","blush","bag"]}},Bl=.12,w_=.12;function E_(n){const t=Hs(n^1540483477)();return t<Bl?"cartoon":t<Bl+w_?"brick":"person"}function b_(n,t){const e=Hs(t),i=S_[n],s=yn(e,i.hair),r=yn(e,i.tops),o=e(),a=o<.55?"plain":o<.72?i.old?"glasses":"wide":o<.86?"glasses":o<.94?"sleepy":"sunglasses",c=i.extras.filter(()=>e()<.45),l=r==="jacket"&&e()<.5?yn(e,zl):yn(e,kl);return{height:i.old?.94+e()*.06:.9+e()*.18,width:.88+e()*.32,skin:yn(e,v_),hair:i.old?e()<.7?"white":"paperShade":yn(e,M_),hairStyle:s,hat:yn(e,kl),eyes:a,top:r,outer:l,inner:yn(e,y_),lower:yn(e,i.lowers),legs:yn(e,e()<.6?zl:["paperShade","wood","tealDark","lilac"]),shoes:yn(e,["ink","white","red","woodDark","teal"]),extras:c}}function Ot(n,t,e,i,s,r){const o=new Mt(t,typeof e=="string"?qt(e):e);return o.position.set(i,s,r),n.add(o),o}function pi(n,t,e,i=6){return new mt(n,t,e,i).translate(0,-e/2,0)}const Hr=n=>n,Te=1.6,Gi=.21;function Rn(n,t,e=0){const i=(t-Te)/1.07;return-Math.sqrt(Math.max(0,Gi*Gi-n*n-i*i))*.98-e}const vs=(n,t,e)=>(n.rotation.order="YXZ",n.rotation.y=Math.atan2(-t,-Rn(t,e)),n);function T_(n,t){Ot(n,new mt(.06,.07,.1,6),t.skin,0,1.4,0),Ot(n,new Fe(Gi,10,8),t.skin,0,Te,0).scale.set(1,1.07,.98);const e=Te+.02,i=.072,s=c=>t.extras.includes(c),r=t.hair==="white"?"paperShade":t.hair;for(const c of[-1,1]){const l=c*i;if(t.eyes==="sunglasses"){const u=Ot(n,new mt(.06,.06,.016,8),"ink",l,e,Rn(l,e,.012));vs(u,l,e).rotation.x=Math.PI/2,u.scale.set(1.15,1,.85)}else if(t.eyes==="sleepy"){const u=Ot(n,new Ee(.05,.01,.01),"ink",l,e,Rn(l,e,.002));vs(u,l,e)}else{const u=t.eyes==="wide"?.027:.02;if(Ot(n,new Fe(u,6,5),"ink",l,e,Rn(l,e,-.004)).scale.set(1,1.35,.5),t.eyes==="wide"&&Ot(n,new Fe(.008,4,3),"white",l+.008,e+.012,Rn(l+.008,e+.012,.006)),t.eyes==="glasses"){const f=Ot(n,new qe(.045,.007,4,10),"ink",l,e,Rn(l,e,.012));vs(f,l,e)}}if(s("brows")&&t.eyes!=="sunglasses"){const u=e+.055,h=Ot(n,new Ee(.055,.012,.012),r,l,u,Rn(l,u,.001));vs(h,l,u).rotation.z=c*-.12}if(s("blush")){const u=c*.11,h=e-.055,f=Ot(n,new as(.022,8),"pink",u,h,Rn(u,h,.002));vs(f,u,h).rotation.y+=Math.PI}}if((t.eyes==="sunglasses"||t.eyes==="glasses")&&Ot(n,new Ee(.04,.008,.008),"ink",0,e+.01,Rn(0,e,.012)),s("moustache")){const c=Te-.065;Ot(n,new Ee(.1,.022,.02),t.hair,0,c,Rn(0,c,.004))}s("beard")&&Ot(n,new Ae(.13,0),t.hair,0,Te-.12,-.07).scale.set(1.15,.75,.85);const o=(c,l=1.06,u=.025)=>{const h=Ot(n,new Fe(Gi,9,4,0,Math.PI*2,0,Math.PI/2),c,0,Te+u,.012);return h.scale.set(l,l*1.05,l),h},a=()=>Ot(n,new Ae(.09,0),t.hair,0,Te+.155,-.12).scale.set(1.75,.5,.8);switch(t.hairStyle){case"cap":{o(t.hat,1.1);const c=b(n,t.hat,[-.14,-.012,-.16,.14,.012,0]);c.position.set(0,Te+.07,-Gi-.05),c.rotation.x=-.12,Ot(n,new Fe(.02,4,3),t.hat,0,Te+Gi*1.15,.01);break}case"beanie":o(t.hat,1.12,.04).scale.y=1.35,Ot(n,new mt(.235,.235,.07,9),t.hat,0,Te+.07,.01),Ot(n,new Ae(.05,0),"white",0,Te+.33,.01);break;case"sides":for(const c of[-1,1])Ot(n,new Ae(.075,0),t.hair,c*.19,Te+.01,.03).scale.set(.6,1,1.3);Ot(n,new Ae(.09,0),t.hair,0,Te,.17).scale.set(1.8,.8,.6);break;case"bald":break;case"spiky":o(t.hair,1.04);for(let c=0;c<7;c++){const l=c/7*Math.PI*2;Ot(n,new Xe(.05,.14,4),t.hair,Math.sin(l)*.1,Te+.2,Math.cos(l)*.1+.02).rotation.set(Math.cos(l)*.5,0,-Math.sin(l)*.5)}break;case"curly":for(let c=0;c<11;c++){const l=c/11*Math.PI*2;Ot(n,new Ae(.09,0),t.hair,Math.sin(l)*.17,Te+.1+c%2*.06,Math.cos(l)*.15+.03)}Ot(n,new Ae(.15,0),t.hair,0,Te+.18,.02);break;case"ponytail":o(t.hair),a(),Ot(n,new Xe(.07,.35,5),t.hair,0,Te-.02,.26).rotation.x=-.5;break;case"long":o(t.hair),a(),Ot(n,new Ee(.36,.42,.12),t.hair,0,Te-.12,.15);break;case"bun":o(t.hair),a(),Ot(n,new Ae(.08,0),t.hair,0,Te+.17,.15);break;default:o(t.hair),a()}if(s("headphones")){const c=Ot(n,new qe(.22,.015,4,10,Math.PI),"ink",0,Te+.02,.01);c.rotation.y=Math.PI/2;for(const l of[-1,1])Ot(n,new mt(.06,.06,.05,8),"red",l*.22,Te,.01).rotation.z=Math.PI/2}}function A_(n,t){const e=t.lower!=="trousers",i=Hr([-.1,.1].map(c=>{const l=new Pt;return l.position.set(c,.86,0),n.add(l),t.lower==="shorts"?(Ot(l,pi(.095,.085,.3),t.legs,0,0,0),Ot(l,pi(.06,.055,.5),t.skin,0,-.29,0)):e?Ot(l,pi(.06,.055,.78),t.skin,0,0,0):Ot(l,pi(.085,.07,.78),t.legs,0,0,0),b(l,t.shoes,[-.07,-.86,-.17,.07,-.76,.07]),l}));t.lower==="skirt"&&Ot(n,new mt(.18,.3,.42,7),t.legs,0,.7,0).scale.set(1,1,.8);const s=new Mt(new mt(.26,.21,.56,7),qt(t.outer));s.position.set(0,1.1,0),s.scale.set(t.width,1,.68),s.rotation.y=Math.PI/7,n.add(s);const r=t.width;if(t.top==="jacket"){b(n,t.inner,[-.075,.86,-.155,.075,1.36,-.13]);for(const c of[-1,1]){const l=b(n,t.outer,[-.035,-.17,-.012,.035,.17,.012]);l.position.set(c*.1,1.2,-.155),l.rotation.z=c*.25}}else if(t.top==="hoodie"){Ot(n,new qe(.13,.06,5,8),t.outer,0,1.38,.04).rotation.x=Math.PI/2-.3,b(n,t.outer,[-.13,.92,-.165,.13,1.06,-.15]);for(const c of[-1,1])b(n,t.inner,[c*.05-.008,1.16,-.168,c*.05+.008,1.34,-.16])}else t.top==="sweater"?(Ot(n,new mt(.215*r,.215*r,.07,7),t.inner,0,.86,0).scale.set(1,1,.72),b(n,t.inner,[-.22*r,1.16,-.16,.22*r,1.21,-.14])):Ot(n,new mt(.1,.12,.04,8),t.inner,0,1.37,0).scale.set(1,1,.8);Ot(n,new mt(.2*r,.21*r,.06,7),t.legs,0,.86,0).scale.set(1,1,.7);const o=t.top==="tee",a=Hr([-1,1].map(c=>{const l=new Pt;return l.position.set(c*(.27*r+.03),1.32,0),n.add(l),Ot(l,new Ae(.1,0),t.outer,0,0,0),o?(Ot(l,pi(.095,.09,.2),t.outer,0,0,0),Ot(l,pi(.06,.055,.34),t.skin,0,-.18,0)):Ot(l,pi(.092,.075,.5),t.outer,0,0,0).rotation.z=c*.06,Ot(l,new zs(.062,0),t.skin,c*.03,-.56,0).scale.set(.9,1.1,.9),l}));return{legs:i,arms:a}}function R_(n,t,e){for(const i of t.extras)if(i==="lanyard")b(n,"red",[-.07,1,-.17,.07,1.1,-.16]),b(n,"white",[-.05,.96,-.175,.05,1.04,-.17]);else if(i==="necklace"){for(const s of[-1,1]){const r=b(n,"white",[-.006,-.08,-.004,.006,.08,.004]);r.position.set(s*.035,1.28,-.16),r.rotation.z=s*.35}Ot(n,new ja(.02,0),"mustard",0,1.2,-.17)}else if(i==="backpack"){const s=t.outer==="red"?"teal":"red";b(n,s,[-.17,.9,.13,.17,1.32,.32]),b(n,s==="red"?"redDark":"tealDark",[-.12,.95,.32,.12,1.12,.36]);for(const r of[-1,1])b(n,s,[r*.13-.025,.95,-.17,r*.13+.025,1.34,-.15])}else if(i==="scarf")Ot(n,new qe(.11,.05,5,8),"red",0,1.37,0).rotation.x=Math.PI/2,b(n,"red",[.04,1.05,-.2,.12,1.36,-.15]);else if(i==="bag")b(e[1],"woodDark",[-.09,-.85,-.12,.09,-.6,.12]),b(e[1],"ink",[-.01,-.6,-.06,.01,-.52,.06]);else if(i==="paint")for(const[s,r,o]of[[.12,1.1,"red"],[-.14,.95,"mustard"],[.05,.9,"teal"]])b(n,o,[s,r,-.175,s+.05,r+.04,-.17])}function Wh(n){const t=new Pt,{legs:e,arms:i}=A_(t,n);return T_(t,n),R_(t,n,i),t.scale.setScalar(n.height),t.position.y=L,{root:t,legs:e,arms:i}}const cs="#1b1f33";function C_(n,t,e){const i=t?[440,430]:[430,440];n.fillStyle=cs,n.fillRect(98,360,22,i[0]-360),n.fillRect(140,360,22,i[1]-360),n.beginPath(),n.ellipse(130,270,95,110,0,0,Math.PI*2),n.fillStyle=e[0],n.fill(),n.stroke(),n.beginPath(),n.moveTo(130,162),n.quadraticCurveTo(150,110,185,115),n.quadraticCurveTo(160,150,130,162),n.fillStyle=e[1],n.fill(),n.stroke(),Vs(n,130,250,1.1)}function P_(n,t,e){const i=t?18:-18;n.lineCap="round",n.lineWidth=14,n.strokeStyle=cs;for(const[s,r]of[[112,1],[148,-1]])n.beginPath(),n.moveTo(s,330),n.quadraticCurveTo(s+i*r,390,s-i*r*.5,450),n.stroke();n.lineWidth=12;for(const s of[-1,1])n.beginPath(),n.moveTo(130+s*55,230),n.quadraticCurveTo(130+s*95,270+i*s,130+s*80,320),n.stroke();n.lineWidth=6,Yi(n,70,210,120,130,30,e[0]),n.beginPath(),n.arc(130,150,62,0,Math.PI*2),n.fillStyle=e[2],n.fill(),n.stroke(),Vs(n,130,155,1),n.beginPath(),n.ellipse(130,100,90,18,0,0,Math.PI*2),n.fillStyle=e[1],n.fill(),n.stroke(),n.beginPath(),n.arc(130,98,48,Math.PI,0),n.fill(),n.stroke()}function L_(n,t,e){n.beginPath(),n.moveTo(45,400),n.lineTo(45,200),n.bezierCurveTo(45,60,215,60,215,200),n.lineTo(215,400);for(let i=0;i<5;i++)n.quadraticCurveTo(215-i*34-17,380+(i%2?0:30),215-(i+1)*34,400);n.closePath(),n.fillStyle=e[2],n.fill(),n.stroke();for(const[i,s]of[[90,t],[170,1-t]])Yi(n,i-30,410-s*10,60,32,14,e[0]);Vs(n,130,200,1.2)}function D_(n,t,e){n.fillStyle=cs,n.fillRect(95,360,24,t?85:75),n.fillRect(141,360,24,t?75:85),Yi(n,60,220,140,150,14,e[0]),Yi(n,90,260,80,50,8,e[1]),Yi(n,70,100,120,110,20,e[2]),n.beginPath(),n.moveTo(130,100),n.lineTo(130,60),n.stroke(),n.beginPath(),n.arc(130,55,12,0,Math.PI*2),n.fillStyle=e[1],n.fill(),n.stroke(),Vs(n,130,155,1)}function I_(n,t,e){n.fillStyle=cs,n.fillRect(100,350,22,t?95:85),n.fillRect(138,350,22,t?85:95),Yi(n,65,210,130,150,40,e[0]);for(const i of[-1,1])n.beginPath(),n.moveTo(130+i*30,110),n.lineTo(130+i*62,55),n.lineTo(130+i*70,125),n.closePath(),n.fillStyle=e[2],n.fill(),n.stroke();n.beginPath(),n.ellipse(130,160,75,65,0,0,Math.PI*2),n.fillStyle=e[2],n.fill(),n.stroke(),Vs(n,130,160,1),n.lineWidth=3;for(const i of[-1,1])for(const s of[-6,6])n.beginPath(),n.moveTo(130+i*30,180+s),n.lineTo(130+i*70,176+s*2),n.stroke();n.lineWidth=6}function Vs(n,t,e,i){for(const s of[-1,1])n.beginPath(),n.ellipse(t+s*24*i,e-8*i,9*i,12*i,0,0,Math.PI*2),n.fillStyle=cs,n.fill(),n.beginPath(),n.arc(t+s*24*i+3*i,e-12*i,3*i,0,Math.PI*2),n.fillStyle="#ffffff",n.fill();n.beginPath(),n.arc(t,e+12*i,16*i,.15*Math.PI,.85*Math.PI),n.stroke()}function Yi(n,t,e,i,s,r,o){n.beginPath(),n.roundRect(t,e,i,s,r),n.fillStyle=o,n.fill(),n.stroke()}const Hl=[n=>({draw:(t,e)=>C_(t,e,Ms(n)),colours:[]}),n=>({draw:(t,e)=>P_(t,e,Ms(n)),colours:[]}),n=>({draw:(t,e)=>L_(t,e,Ms(n)),colours:[]}),n=>({draw:(t,e)=>D_(t,e,Ms(n)),colours:[]}),n=>({draw:(t,e)=>I_(t,e,Ms(n)),colours:[]})];function Ms(n){const t=["#ff8a5b","#7ed6c4","#ffd25a","#f59ac1","#9fb7ff","#b4e07a","#c7a6ff","#ffffff","#fbe2c8"],e=n(),i=s=>t[Math.floor((e*997+s*131)%1*t.length)%t.length];return[i(1),i(2),i(3)]}function U_(n){const t=Hs(n),e=Hl[Math.floor(t()*Hl.length)],i=t(),s=[0,1].map(u=>{const h=document.createElement("canvas");h.width=260,h.height=460;const f=h.getContext("2d");return f.lineWidth=6,f.lineJoin="round",f.strokeStyle=cs,e(()=>i).draw(f,u),new os(h)}),r=new cn({map:s[0],transparent:!0,alphaTest:.5,side:Ve}),o=1.75,a=new Mt(new Qe(o*260/460,o),r);a.position.y=o/2-.02;const c=new Pt;c.add(a),c.position.y=L;const l=()=>new Pe;return{root:c,legs:[l(),l()],arms:[l(),l()],card:{mesh:a,frames:s}}}const Vl=new Map;function Ho(n){let t=Vl.get(n);return t||Vl.set(n,t=new kh({color:Vi(n),shininess:70,specular:3355443,flatShading:!1})),t}const Gl=[{torso:"#f2f2f2",legs:"#f2f2f2",arms:"#f2f2f2",hands:"#dddddd",hat:"helmet",emblem:"#e4573d"},{torso:"#9aa3ad",legs:"#5b6470",arms:"#9aa3ad",hat:"knight",emblem:"#f2b234"},{torso:"#ffffff",legs:"#30364a",arms:"#ffffff",hat:"chef"},{torso:"#7a3b2e",legs:"#2b2f45",arms:"#f4ead5",hat:"pirate",emblem:"#f2b234"},{torso:"#2b9c8e",legs:"#1c6b63",arms:"#2b9c8e",hands:"#f2b234",mask:"#f2b234",cape:"#e4573d",emblem:"#f2b234"},{torso:"#b9c2cf",legs:"#7b8594",arms:"#b9c2cf",head:"#b9c2cf",hat:"antenna",emblem:"#2b9c8e"},{torso:"#e4573d",legs:"#25304f",arms:"#e4573d",hat:"hair",hairColour:"#3b2416"},{torso:"#4f8a49",legs:"#c27b4b",arms:"#4f8a49",hat:"cap"},{torso:"#2f6fd1",legs:"#25304f",arms:"#2f6fd1",hat:"hair",hairColour:"#f2b234"}];function N_(n,t=!1){const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d");n&&(i.fillStyle=n,i.beginPath(),i.roundRect(6,30,116,34,16),i.fill()),i.fillStyle=n?"#ffffff":"#1b1f33";for(const r of[44,84])i.beginPath(),i.ellipse(r,47,n?9:6,n?6:9,0,0,Math.PI*2),i.fill();return i.strokeStyle="#1b1f33",i.lineWidth=5,i.lineCap="round",i.beginPath(),t?(i.arc(64,72,20,.1*Math.PI,.9*Math.PI),i.closePath(),i.fillStyle="#1b1f33",i.fill()):i.arc(64,70,18,.18*Math.PI,.82*Math.PI),i.stroke(),new os(e)}function F_(n,t,e,i){const s=new Ee(n,t,e),r=s.attributes.position;for(let o=0;o<r.count;o++)r.getY(o)>0&&r.setX(o,r.getX(o)*i);return s.computeVertexNormals(),s}function O_(n){const t=Hs(n),e=Gl[Math.floor(t()*Gl.length)],i=e.head??"#ffd23f",s=new Pt,r=(h,f,d,_,g,m)=>{const p=new Mt(f,Ho(d));return p.position.set(_,g,m),h.add(p),p},o=Hr([-.105,.105].map(h=>{const f=new Pt;return f.position.set(h,.62,0),s.add(f),r(f,new Ee(.2,.52,.22),e.legs,0,-.3,.01),r(f,new Ee(.2,.1,.3),e.legs,0,-.57,-.03),f}));r(s,new Ee(.44,.1,.22),e.legs,0,.66,.01);const a=.5;if(r(s,F_(.46,a,.22,.72),e.torso,0,.71+a/2,.01),e.emblem){const h=r(s,new as(.065,16),e.emblem,0,1,-.101);h.rotation.y=Math.PI}if(e.cape){const h=r(s,new Qe(.42,.85),e.cape,0,.82,.135);h.material=Ho(e.cape).clone(),h.material.side=Ve,h.rotation.x=.1}const c=Hr([-1,1].map(h=>{const f=new Pt;f.position.set(h*.215,1.14,.01),s.add(f),r(f,new Fe(.07,12,8),e.arms,0,0,0),r(f,new mt(.065,.06,.26,12),e.arms,0,-.13,0);const d=new Pt;return d.position.set(0,-.25,0),d.rotation.x=-.55,f.add(d),r(d,new Fe(.06,10,8),e.arms,0,0,0),r(d,new mt(.06,.058,.2,12),e.arms,0,-.1,0),r(d,new mt(.03,.03,.05,10),e.hands??i,0,-.22,0),r(d,new qe(.05,.026,10,16,Math.PI*1.45),e.hands??i,0,-.28,0).rotation.set(0,Math.PI/2,Math.PI*.27+Math.PI/2),f.rotation.z=h*.26,f}));c.forEach(h=>h.rotation.x=-.15),r(s,new mt(.075,.075,.05,14),i,0,1.24,.01);const l=[new ot(0,0),new ot(.125,0),new ot(.148,.025),new ot(.15,.06),new ot(.15,.2),new ot(.148,.235),new ot(.125,.26),new ot(0,.26)];r(s,new Ja(l,24),i,0,1.265,.01),r(s,new mt(.075,.075,.06,16),i,0,1.555,.01);const u=new Mt(new mt(.152,.152,.2,16,1,!0,Math.PI-.95,1.9),new cn({map:N_(e.mask,t()<.4),transparent:!0}));if(u.position.set(0,1.395,.01),s.add(u),e.hat==="helmet"){const h=new Mt(new Fe(.23,20,14),new kh({color:13627135,transparent:!0,opacity:.22,shininess:140,depthWrite:!1}));h.position.set(0,1.4,.01),s.add(h);const f=r(s,new qe(.2,.035,10,24),"#f2f2f2",0,1.24,.01);f.rotation.x=Math.PI/2,r(s,new Ee(.3,.32,.12),"#f2f2f2",0,.98,.17)}else if(e.hat==="knight"){const h=new Mt(new mt(.17,.17,.3,20,1,!0,Math.PI*.75,Math.PI*1.5),Ho("#9aa3ad").clone());h.material.side=Ve,h.position.set(0,1.4,.01),s.add(h);const f=r(s,new Fe(.17,20,10,0,Math.PI*2,0,Math.PI/2),"#9aa3ad",0,1.55,.01);f.scale.y=.6,r(s,new Ee(.03,.16,.26),"#e4573d",0,1.7,.03)}else if(e.hat==="chef"){r(s,new mt(.16,.16,.08,20),"#ffffff",0,1.56,.01);const h=r(s,new Fe(.2,16,10),"#ffffff",0,1.7,.01);h.scale.y=.75}else if(e.hat==="pirate"){const h=r(s,new mt(.1,.24,.13,3),"#25304f",0,1.6,.01);h.rotation.y=Math.PI/2}else if(e.hat==="antenna")r(s,new mt(.012,.012,.18,6),"#7b8594",.08,1.66,.01),r(s,new Fe(.03,10,8),"#e4573d",.08,1.76,.01);else if(e.hat==="cap"){const h=r(s,new Fe(.16,20,10,0,Math.PI*2,0,Math.PI/2),e.torso,0,1.5,.01);h.scale.y=.7,r(s,new Ee(.22,.02,.14),e.torso,0,1.52,-.15)}else if(e.hat==="hair"){const h=r(s,new Fe(.162,20,12,0,Math.PI*2,0,Math.PI*.62),e.hairColour??"#6f3820",0,1.47,.02);h.scale.y=.85}return s.position.y=L,{root:s,legs:o,arms:c}}function Xh(n,t=1){const e=E_(t);if(e==="cartoon"&&typeof document<"u")return U_(t);const i=e==="brick"?O_(t):Wh(b_(n,t));return i.hipY=i.legs[0].position.y*i.root.scale.y,i}function k_(){const n={height:1.02,width:1.05,skin:"skin2",hair:"inkSoft",hairStyle:"short",hat:"ink",eyes:"glasses",top:"jacket",outer:"ink",inner:"white",lower:"trousers",legs:"ink",shoes:"inkSoft",extras:["brows"]},{root:t,arms:e}=Wh(n);t.position.y=0,b(t,"red",[-.025,.98,-.165,.025,1.34,-.158]),b(t,"redDark",[-.035,1.3,-.168,.035,1.36,-.16]),e[1].rotation.x=-1.1;const i=b(e[1],"tealDark",[-.13,-.02,-.2,.13,0,0]);return i.position.set(-.1,-.52,-.05),i.rotation.x=1.1,t}const Wl=new Map;function qt(n){let t=Wl.get(n);return t||Wl.set(n,t=new Ir({color:Bn(n),flatShading:!0})),t}function b(n,t,e){const[i,s,r,o,a,c]=Array.isArray(e)?e:[e.min.x,e.min.y,e.min.z,e.max.x,e.max.y,e.max.z],l=new Mt(new Ee(Math.abs(o-i),Math.abs(a-s),Math.abs(c-r)),qt(t));return l.position.set((i+o)/2,(s+a)/2,(r+c)/2),n.add(l),l}const Se=je.length/2,ae=je.depth/2,kn=je.height,An=.08;function z_(){const n=new Pt,t=Yt.window;b(n,"wood",[-Se,-.1,-ae,Se,0,ae]);for(let B=-Se+.413;B<Se-.1;B+=.4)b(n,"woodDark",[B,0,-ae,B+.02,.003,ae]);b(n,"inkSoft",[-Se,kn,-ae,Se,kn+.1,ae]);for(let B=-2;B<=2;B+=2)b(n,"mustard",[B-.3,kn-.04,-.1,B+.3,kn,.1]);b(n,"paper",[-Se,0,-ae-An,t.min.x,kn,-ae]),b(n,"paper",[t.max.x,0,-ae-An,Se,kn,-ae]),b(n,"paper",[t.min.x,t.max.y,-ae-An,t.max.x,kn,-ae]),b(n,"teal",[t.min.x,0,-ae-An,t.max.x,t.min.y,-ae]),b(n,"ink",[t.min.x-.05,t.max.y-.01,-ae-.02,t.max.x+.05,t.max.y+.12,-ae+.02]),b(n,"ink",[t.min.x-.05,t.min.y,-ae-.02,t.min.x+.01,t.max.y,-ae+.02]),b(n,"ink",[t.max.x-.01,t.min.y,-ae-.02,t.max.x+.05,t.max.y,-ae+.02]);const e=Yt.door;for(const[B,nt,gt,Lt]of[[-Se,ae,Se,ae+An],[-Se-An,-ae,-Se,ae],[Se,-ae,Se+An,e.min.z],[Se,e.max.z,Se+An,ae]])b(n,"paper",[B,.9,nt,gt,kn,Lt]),b(n,"teal",[B,0,nt,gt,.9,Lt]);b(n,"paper",[Se,e.max.y,e.min.z,Se+An,kn,e.max.z]),b(n,"inkSoft",[Se+An,-.08,-.55,Se+.75,0,.55]);const i=Yt.frontCounter;b(n,"wood",[i.min.x,0,i.min.z,i.max.x,i.max.y-.04,i.max.z]),b(n,"white",[i.min.x-.02,i.max.y-.04,i.min.z-.05,i.max.x+.02,i.max.y,i.max.z+.03]);for(let B=i.min.x+.1;B<i.max.x-.5;B+=.6)b(n,"woodDark",[B,.12,i.max.z,B+.5,.8,i.max.z+.01]);const s=Yt.tablet;b(n,"ink",[s.min.x+.15,s.min.y,s.min.z+.06,s.max.x-.15,s.min.y+.08,s.max.z-.06]);const r=new Pt;b(r,"ink",[-.18,-.12,-.012,.18,.12,.012]),b(r,"tealDark",[-.16,-.1,.012,.16,.1,.016]),b(r,"mustard",[-.13,.05,.016,-.02,.065,.018]),b(r,"tealLight",[-.13,.02,.016,.1,.03,.018]),b(r,"tealLight",[-.13,-.01,.016,.06,0,.018]),r.position.set((s.min.x+s.max.x)/2,s.min.y+.14,(s.min.z+s.max.z)/2),r.rotation.x=-.5,n.add(r);const o=Yt.tipJar,a=new Mt(new mt(.08,.08,.2,10),qt("tealLight"));a.position.set((o.min.x+o.max.x)/2,1.1,(o.min.z+o.max.z)/2),n.add(a),b(n,"mustard",[a.position.x-.06,1,a.position.z-.06,a.position.x+.06,1.08,a.position.z+.06]),b(n,"red",[-.55,1,-ae+.15,-.4,1.12,-ae+.3]);const c=new Mt(new Ae(.11,0),qt("grassDark"));c.position.set(-.475,1.2,-ae+.225),n.add(c);const l=Yt.fridge;b(n,"tealLight",l),b(n,"white",[l.max.x,.15,l.min.z+.05,l.max.x+.01,1.85,l.max.z-.05]);const u=["white","mustard","pink","red","teal","white"];for(let B=0;B<4;B++){const nt=.3+B*.4;b(n,"inkSoft",[l.max.x+.01,nt-.02,l.min.z+.08,l.max.x+.05,nt,l.max.z-.08]);for(let gt=0;gt<6;gt++){const Lt=l.min.z+.14+gt*.1;b(n,u[(gt+B)%u.length],[l.max.x+.01,nt,Lt,l.max.x+.07,nt+.22+gt%2*.04,Lt+.07])}}b(n,"mustard",[l.max.x+.01,1,l.max.z-.06,l.max.x+.05,1.5,l.max.z-.03]);const h=Yt.stockShelves;for(let B=0;B<3;B++){const nt=.35+B*.6;b(n,"woodDark",[h.min.x,nt-.04,h.min.z,h.max.x,nt,h.max.z]);for(let gt=0;gt<3;gt++){const Lt=h.min.z+.08+gt*.36;if((gt+B)%3===2){const Z=new Mt(new zs(.16,0),qt("wood"));Z.scale.set(1.1,1.3,1),Z.position.set(h.min.x+.28,nt+.18,Lt+.15),n.add(Z)}else b(n,"mustard",[h.min.x+.08,nt,Lt,h.max.x-.04,nt+.3+gt%2*.08,Lt+.3])}}const f=Yt.backCounter;b(n,"wood",[f.min.x,0,f.min.z,f.max.x,f.max.y-.04,f.max.z]),b(n,"white",[f.min.x-.02,f.max.y-.04,f.min.z-.03,f.max.x+.02,f.max.y,f.max.z]);const d=Yt.coffeeMachine;b(n,"red",[d.min.x,d.min.y,d.min.z,d.max.x,d.max.y-.08,d.max.z]),b(n,"paperShade",[d.min.x+.04,d.max.y-.08,d.min.z+.04,d.max.x-.04,d.max.y,d.max.z-.04]);const _=new Mt(new mt(.06,.06,.02,12),qt("white"));_.rotation.x=Math.PI/2,_.position.set((d.min.x+d.max.x)/2,d.max.y-.2,d.min.z-.005),n.add(_);for(const B of[d.min.x+.15,d.max.x-.15])b(n,"ink",[B-.05,d.min.y+.16,d.min.z-.06,B+.05,d.min.y+.22,d.min.z]),b(n,"white",[B-.04,d.min.y,d.min.z-.05,B+.04,d.min.y+.08,d.min.z+.03]);const g=Yt.menuBoard;b(n,"woodDark",[g.min.x-.04,g.min.y-.04,g.min.z-.01,g.max.x+.04,g.max.y+.04,g.max.z]),b(n,"ink",[g.min.x,g.min.y,g.min.z-.02,g.max.x,g.max.y,g.max.z-.005]),b(n,"mustard",[g.min.x+.2,g.max.y-.14,g.min.z-.03,g.max.x-.2,g.max.y-.1,g.min.z-.02]);for(let B=0;B<5;B++){const nt=g.max.y-.24-B*.1;b(n,"paper",[g.min.x+.08,nt,g.min.z-.03,g.min.x+.45+B%3*.12,nt+.03,g.min.z-.02]),b(n,B%2?"pink":"tealLight",[g.max.x-.22,nt,g.min.z-.03,g.max.x-.08,nt+.03,g.min.z-.02])}const m=Yt.recipeShelf;b(n,"woodDark",[m.min.x-.05,m.min.y-.04,m.min.z,m.max.x+.05,m.min.y,m.max.z]);const p=["red","teal","mustard","red","inkSoft","teal"];for(let B=0;B<6;B++){const nt=m.min.x+.02+B*.095;b(n,p[B],[nt,m.min.y,m.min.z+.04,nt+.08,m.max.y-B%3*.03,m.max.z-.02])}const v=new Mt(new mt(re.r,re.r,.03,16),qt("white"));v.rotation.x=Math.PI/2,v.position.set(re.x,re.y,re.z-.02),n.add(v);const M=(B,nt)=>{const gt=new Ee(.016,B,.01).translate(0,B/2,0),Lt=new Mt(gt,qt(nt));return Lt.position.set(re.x,re.y,re.z-.045),n.add(Lt),Lt},x=new Mt(new qe(re.r,.014,4,24),qt("ink"));x.position.set(re.x,re.y,re.z-.036),n.add(x);for(let B=0;B<12;B++){const nt=B/12*Math.PI*2,gt=B%3===0,Lt=new Mt(new mt(gt?.014:.008,gt?.014:.008,.006,8),qt(gt?"red":"ink"));Lt.rotation.x=Math.PI/2,Lt.position.set(re.x-Math.sin(nt)*re.r*.8,re.y+Math.cos(nt)*re.r*.8,re.z-.038),n.add(Lt)}const U=new Mt(new mt(.014,.014,.01,8),qt("ink"));U.rotation.x=Math.PI/2,U.position.set(re.x,re.y,re.z-.052),n.add(U);const A=M(.08,"ink"),P=M(.12,"red");n.userData.setClock=B=>{A.rotation.z=B/60%12/12*Math.PI*2,P.rotation.z=B%60/60*Math.PI*2},n.userData.setClock(600);const C=Yt.door,E=new Pt;E.position.set(C.min.x,0,C.min.z);const S=B=>[B[0]-C.min.x,B[1],B[2]-C.min.z,B[3]-C.min.x,B[4],B[5]-C.min.z];b(E,"inkSoft",S([C.min.x-.02,C.min.y,C.min.z,C.max.x,C.max.y,C.max.z])),b(E,"peach",S([C.min.x-.03,1.3,-.25,C.min.x-.02,1.8,.25])),b(E,"mustard",S([C.min.x-.03,1.05,-.3,C.min.x-.02,1.15,.3])),b(E,"mustard",S([C.min.x-.08,.95,.32,C.min.x-.02,1,.42])),n.add(E),n.userData.setDoor=(B,nt)=>{const gt=nt===void 0?0:Math.sin(nt*40)*.025*(nt%1.6<.45?1:0);E.rotation.y=B*1.35+gt};const D=Yt.guideBook,G=(D.min.x+D.max.x)/2,z=D.min.z+.17,X=new Pt;X.position.set(G,D.min.y,z),X.rotation.y=.15,b(X,"red",[-.17,0,-.12,.17,.02,.12]);for(const B of[-1,1]){const nt=b(X,"white",[-.15,0,-.11,0,.012,.11]);nt.position.set(B*.078,.026,0),nt.rotation.z=B*-.12;for(let gt=0;gt<4;gt++){const Lt=b(X,"inkSoft",[-.11,0,-.002,-.03,.004,.006]);Lt.position.set(B*.078,.036,-.07+gt*.04),Lt.rotation.z=B*-.12}}n.add(X),n.add(B_(G,D.max.y-.06,D.max.z-.02));const j=Yt.radio,W=new Pt;W.position.set((j.min.x+j.max.x)/2,j.min.y,(j.min.z+j.max.z)/2),W.rotation.y=.12,b(W,"teal",[-.19,.025,-.08,.19,.2,.08]),b(W,"tealDark",[-.2,0,-.09,.2,.025,.09]);const et=new Mt(new mt(.065,.065,.01,10),qt("inkSoft"));et.rotation.x=Math.PI/2,et.position.set(-.08,.1,-.082),W.add(et);for(let B=-2;B<=2;B++)b(W,"ink",[-.13,.1+B*.02-.004,-.09,-.03,.1+B*.02+.004,-.086]);b(W,"paper",[.02,.11,-.085,.16,.16,-.08]),b(W,"red",[.07,.11,-.087,.08,.16,-.084]);const q=new Mt(new mt(.025,.025,.02,8),qt("mustard"));q.rotation.x=Math.PI/2,q.position.set(.09,.06,-.085),W.add(q);for(const B of[-.14,.14])b(W,"ink",[B-.01,.2,-.01,B+.01,.26,.01]);b(W,"ink",[-.14,.25,-.01,.14,.27,.01]);const ct=b(W,"inkSoft",[-.004,0,-.004,.004,.32,.004]);return ct.position.set(.16,.2,.04),ct.rotation.z=-.5,n.add(W),b(n,"teal",[Se-.02,.9,-.95,Se-.01,1.6,-.65]),n}function B_(n,t,e){const i=new Pt;i.position.set(n,t,e);const s=document.createElement("canvas");s.width=256,s.height=96;const r=s.getContext("2d");r&&(r.fillStyle="#f2b234",r.fillRect(0,0,256,96),r.fillStyle="#25304f",r.font="bold 44px system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("GUIDE ?",128,50));const o=new os(s),a=new Mt(new Qe(.26,.1),new cn({map:o}));return a.rotation.set(-.25,Math.PI,0),i.add(a),b(i,"woodDark",[-.01,-.12,.01,.01,-.04,.03]),i}function Ut(n,t,e,i,s,r){const o=new Mt(t,typeof e=="string"?qt(e):e);return o.position.set(i,s,r),n.add(o),o}function Us(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Xl={mustard:Bn("mustard"),red:Bn("red")},Vr=new zt("#e9e2cf"),es={mustard:new cn({color:Vr.clone()}),red:new cn({color:Vr.clone()})};function Gs(n,t,e=1){const i=Us(Math.floor(e*9301+t*49297)),s=["teal","tealDark","grass","grassDark"],r=s[Math.floor(i()*s.length)],o=(1.1+i()*.8)*t,a=i();if(Ut(n,new mt(.1*t,.16*t,o,6),"woodDark",0,o/2,0),a<.25)for(let c=0;c<3;c++){const l=Ut(n,new Xe((1.1-c*.28)*t,1.2*t,7),r==="grass"?"tealDark":r,0,o+(.3+c*.65)*t,0);l.rotation.y=i()*Math.PI}else if(a<.6){const c=2+Math.floor(i()*2);for(let l=0;l<c;l++){const u=l/c*Math.PI*2+i();Ut(n,new Ae((.65+i()*.35)*t,0),r,Math.cos(u)*.45*t,o+(.45+i()*.5)*t,Math.sin(u)*.45*t).rotation.set(i(),i(),i())}}else{const c=Ut(n,new Ae((.9+i()*.45)*t,0),r,0,o+.55*t,0);c.scale.set(1,.8+i()*.5,1),c.rotation.y=i()*Math.PI}n.rotation.z=(i()-.5)*.08}function ic(n,t,e="ink"){for(let i=1;i<t.length;i++){const s=t[i-1],r=t[i],o=s.distanceTo(r),a=new Mt(new mt(.012,.012,o,4),qt(e));a.position.copy(s).add(r).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new R(0,1,0),r.clone().sub(s).normalize()),n.add(a)}}function sc(n,t,e,i=14){return Array.from({length:i+1},(s,r)=>{const o=r/i,a=new R().lerpVectors(n,t,o);return a.y-=Math.sin(o*Math.PI)*e,a})}function Ws(n,t){Ut(n,new Ae(.6*t,0),"grassDark",0,.45*t,0).scale.set(1.1,.75,1)}function rc(n){b(n,"wood",[-.8,.42,-.22,.8,.48,.22]),b(n,"wood",[-.8,.55,.18,.8,.85,.24]),b(n,"ink",[-.7,0,-.2,-.64,.42,.2]),b(n,"ink",[.64,0,-.2,.7,.42,.2])}function H_(n){b(n,"wood",[-.9,.72,-.4,.9,.78,.4]),b(n,"woodDark",[-.9,.42,-.85,.9,.46,-.6]),b(n,"woodDark",[-.9,.42,.6,.9,.46,.85]),b(n,"ink",[-.7,0,-.06,-.62,.72,.06]),b(n,"ink",[.62,0,-.06,.7,.72,.06]);for(const t of[-.7,.62]){for(const e of[-.77,.69])b(n,"ink",[t,0,e,t+.08,.42,e+.08]);b(n,"inkSoft",[t+.01,.16,-.76,t+.07,.22,.76])}b(n,"ink",[-.02,.78,-.02,.02,2.1,.02]),Ut(n,new Xe(1.2,.5,8),"red",0,2.1,0),Ut(n,new Xe(.5,.22,8),"white",0,2.28,0)}function oc(n){b(n,"ink",[-.05,0,-.05,.05,3.2,.05]),Ut(n,new Fe(.2,8,6),es.mustard,0,3.3,0)}function V_(n){Ut(n,new mt(.25,.22,.8,8),"teal",0,.4,0),Ut(n,new mt(.27,.27,.06,8),"tealDark",0,.82,0)}function G_(n){for(let s=0;s<7;s++){const r=s/7*(Math.PI/2),o=(s+1)/7*(Math.PI/2),a=-Math.sin(r)*1.4,c=1.4-Math.cos(r)*1.4,l=-Math.sin(o)*1.4,u=1.4-Math.cos(o)*1.4,h=Math.hypot(l-a,u-c)+.02,f=new Mt(new Ee(3.2,.08,h),qt(s%2?"concrete":"tealLight"));f.position.set(0,(c+u)/2,(a+l)/2),f.rotation.x=-Math.atan2(u-c,a-l),n.add(f)}for(const s of[-3.2/2,3.2/2-.08])for(let r=0;r<4;r++)b(n,"concrete",[s,0,-1.4+r*.25,s+.08,1.4-r*.38,-1.4+(r+1)*.25]);b(n,"concrete",[-3.2/2,0,-1.4-1.4,3.2/2,1.4,-1.4]),b(n,"red",[-3.2/2-.01,.3,-1.4-1.2,-3.2/2,1,-1.4-.3]),Ut(n,new mt(.045,.045,3.2,6),"inkSoft",0,1.4+.03,-1.4).rotation.z=Math.PI/2;for(const s of[-3.2/2+.05,3.2/2-.05])b(n,"ink",[s-.03,1.4,-1.4-1.4,s+.03,1.4+1,-1.4-1.34]);b(n,"ink",[-3.2/2,1.4+.95,-1.4-1.4,3.2/2,1.4+1,-1.4-1.34])}function W_(n){b(n,"pink",[-1,0,-.6,1,.5,.6]);for(const t of[-1,1]){const e=new Mt(new Ee(1,.06,1.2),qt("lilac"));e.position.set(t*1.45,.25,0),e.rotation.z=t*-.47,n.add(e)}b(n,"mustard",[-1,.5,-.62,1,.52,-.58]),Ut(n,new mt(.03,.03,2,6),"inkSoft",0,.54,0).rotation.z=Math.PI/2}function X_(n){for(const t of[-1.1,1.1])b(n,"ink",[t-.04,0,-.04,t+.04,.45,.04]);Ut(n,new mt(.035,.035,2.6,8),"mustard",0,.47,0).rotation.z=Math.PI/2}function qh(n,t){Ut(n,new mt(.55,.6,7,10),"concrete",0,3.5,0);const e=["red","mustard","teal","pink","lilac"];for(let i=0;i<3;i++){const s=Ut(n,new mt(.62,.62,.25+t()*.4,10,1,!0,t()*6,1.5+t()*2),e[Math.floor(t()*e.length)],0,.6+i*.7+t()*.3,0);s.material.side=Ve}}function q_(n){b(n,"inkSoft",[-.07,0,.55,.07,3,.69]),b(n,"inkSoft",[-.05,2.9,.1,.05,3,.6]),b(n,"white",[-.9,2.6,.06,.9,3.6,.12]),b(n,"red",[-.3,2.75,.05,.3,3.15,.06]);const t=new Mt(new qe(.23,.025,4,12),qt("red"));t.rotation.x=Math.PI/2,t.position.set(0,3.05,-.25),n.add(t),b(n,"red",[-.03,3.03,-.06,.03,3.07,.06]);const e=new Mt(new mt(.23,.15,.4,10,2,!0),new cn({color:16775920,wireframe:!0}));e.position.set(0,2.85,-.25),n.add(e)}function ql(n,t,e){for(const s of[-.5,.5]){const r=new Mt(new qe(.32,.035,4,12),qt("ink"));r.rotation.y=Math.PI/2,r.position.set(t,.34,s),n.add(r)}const i=new Mt(new Ee(.05,.05,1),qt(e));i.position.set(t,.62,0),n.add(i),b(n,e,[t-.025,.34,.1,t+.025,.65,.15]),b(n,"ink",[t-.06,.66,.08,t+.06,.7,.28]),b(n,"inkSoft",[t-.25,.82,-.45,t+.25,.85,-.42]),b(n,e,[t-.02,.6,-.445,t+.02,.84,-.425])}function Y_(n){for(const t of[-.6,0,.6]){const e=new Mt(new qe(.35,.03,4,10,Math.PI),qt("inkSoft"));e.rotation.y=Math.PI/2,e.position.set(t,0,0),n.add(e)}ql(n,-.3,"red"),ql(n,.3,"teal")}function Z_(n){Ut(n,new mt(.05,.06,7,6),"white",0,3.5,0),b(n,"red",[.05,6.1,-.01,1.35,6.5,.01]),b(n,"white",[.05,5.7,-.01,1.35,6.1,.01])}function K_(n){Ut(n,new mt(.18,.22,.55,8),"ink",0,.28,0),Ut(n,new mt(.26,.26,.08,8),"ink",0,.58,0)}function Yh(n){b(n,"wood",[-.75,0,-.4,.05,.8,.4]),b(n,"woodDark",[.1,0,-.35,.8,.7,.35]),b(n,"wood",[-.5,.8,-.3,.2,1.4,.3]);for(const t of[.25,.55])b(n,"woodDark",[-.76,t,-.41,.06,t+.05,.41])}function $_(n,t){Ut(n,new mt(.32,.32,.9,10),t,0,.45,0);for(const e of[.15,.75])Ut(n,new mt(.335,.335,.06,10),"ink",0,e,0)}function Zh(n,t,e){b(n,"wood",[-1.2,0,-.5,1.2,.9,.5]);const i=["red","mustard","grass","pink","peach"];for(let s=0;s<8;s++)Ut(n,new Ae(.12,0),i[Math.floor(e()*i.length)],-1+s%4*.6+e()*.1,1,-.25+Math.floor(s/4)*.45);for(const s of[-1.2,1.15])for(const r of[-.55,.5])b(n,"ink",[s,0,r,s+.05,2.1,r+.05]);for(let s=0;s<6;s++){const r=b(n,s%2?"white":t,[-1.35+s*.45,0,-.75,-.9+s*.45,.04,.75]);r.position.y=2.15,r.rotation.x=-.15}}function J_(n){Ut(n,new mt(2.1,2.2,.5,16),"concrete",0,.25,0),Ut(n,new mt(1.9,1.9,.05,16),"tealLight",0,.46,0),Ut(n,new mt(.3,.4,1.4,8),"concrete",0,.9,0),Ut(n,new mt(.9,.6,.25,12),"concrete",0,1.6,0),Ut(n,new mt(.75,.75,.04,12),"tealLight",0,1.72,0);const t=Ut(n,new Xe(.22,1,6),"white",0,2.2,0);return e=>{t.scale.y=.85+Math.sin(e*3)*.15}}function Kh(n){b(n,"woodDark",[-.5,0,-.5,.5,.5,.5]),Ut(n,new Ae(.5,0),"grass",0,.75,0).scale.set(1,.8,1);for(const[t,e,i]of[[-.2,-.3,"red"],[.25,-.25,"mustard"],[0,-.4,"pink"]])Ut(n,new Ae(.09,0),i,t,.98,e)}function j_(){const n=document.createElement("canvas");n.width=256,n.height=384;const t=n.getContext("2d");return t.fillStyle="#25304f",t.fillRect(0,0,256,384),t.fillStyle="#e4573d",t.fillRect(20,20,216,70),t.fillStyle="#fffaf0",t.font="bold 54px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("OPEN",128,57),t.font="bold 30px system-ui, sans-serif",t.fillStyle="#f2b234",t.fillText("— MENU —",128,122),t.font="24px system-ui, sans-serif",t.fillStyle="#fffaf0",t.textAlign="left",[["Espresso","2.50"],["Latte","4.00"],["Green Tea","2.75"],["Croissant","3.25"],["Apple Pie","4.75"]].forEach(([e,i],s)=>{t.textAlign="left",t.fillText(e,24,168+s*38),t.textAlign="right",t.fillText("$"+i,234,168+s*38)}),t.font="italic 20px system-ui, sans-serif",t.fillStyle="#9ad6c8",t.textAlign="center",t.fillText("ask at the window →",128,360),new os(n)}let Yl=null;function Q_(n){Yl??(Yl=new cn({map:j_()}));const t=.22;for(const e of[-1,1]){const i=new Pt;i.position.set(0,0,e*(Math.sin(t)*1.05+.03)),i.rotation.x=e*-t,b(i,"wood",[-.32,0,-.025,.32,1.05,.025]);const s=new Mt(new Qe(.54,.86),Yl);s.position.set(0,.54,e*.03),s.rotation.y=e>0?0:Math.PI,i.add(s),n.add(i)}b(n,"woodDark",[-.33,1,-.07,.33,1.06,.07])}function tx(n){const t=(e,i,s,r,o)=>Ut(n,new mt(e,e,i,10),s,r,o,0);t(.36,.04,"white",0,.7),t(.37,.012,"red",0,.676),t(.03,.66,"ink",0,.34),t(.22,.02,"ink",0,.01);for(const e of[-.62,.62])t(.17,.05,"mustard",e,.455),t(.025,.43,"ink",e,.215),t(.13,.015,"ink",e,.008)}function ex(n,t,e){const i=new Pt;i.position.set(t.x,L,t.z),i.rotation.y=t.yaw??0,n.add(i);const s=t.size??1;switch(t.kind){case"tree":Gs(i,s,t.x*13+t.z*7);break;case"bush":Ws(i,s);break;case"bench":rc(i);break;case"picnicTable":H_(i);break;case"lamp":oc(i);break;case"bin":V_(i);break;case"quarterPipe":G_(i);break;case"funBox":W_(i);break;case"rail":X_(i);break;case"pillar":qh(i,e);break;case"hoop":q_(i);break;case"bikeRack":Y_(i);break;case"flagPole":Z_(i);break;case"bollard":K_(i);break;case"crates":Yh(i);break;case"barrel":$_(i,e()<.5?"red":"teal");break;case"stall":Zh(i,["red","teal","mustard"][Math.floor(e()*3)],e);break;case"fountain":return J_(i);case"planter":Kh(i);break;case"aFrame":Q_(i);break;case"bistroSet":tx(i);break}return null}function Xs(n,t,e=-40,i=160){const s=new Mt(new Qe(i,i),qt(t));return s.rotation.x=-Math.PI/2,s.position.set(0,L,e),n.add(s),s}function Ne(n,t,e,i,s,r,o=.006){b(n,t,[e,L+o-.003,i,s,L+o,r])}function qs(n,t=-58,e=["lilac","inkSoft"]){for(let i=0,s=-70;s<70;i++){const r=3+i*7%5,o=6+i*11%14;b(n,i%2?e[0]:e[1],[s,L,t-i%3*3,s+r,L+o,t+3-i%3*3]),s+=r+.6}}function Ua(n,t,e,i,s,r){for(let o=e;o<i;){const a=5+Math.floor(s()*4),c=2+Math.floor(s()*3),l=c*3,u=r[Math.floor(s()*r.length)];b(n,u,[o,L,t-6,o+a-.2,L+l,t]),b(n,"inkSoft",[o-.1,L+l,t-6.1,o+a-.1,L+l+.25,t+.1]);for(let h=0;h<c;h++)for(let f=o+.8;f<o+a-1;f+=1.5)b(n,h===0&&f<o+2?"woodDark":"tealLight",[f,L+h*3+(h===0&&f<o+2?0:1),t,f+.8,L+h*3+2.2,t+.05]);o+=a}}function nx(n,t,e){const i=(a,c,l,u)=>{const h=new Pt;h.rotation.y=Math.PI,Ua(h,-a,-l,-c,e,u),n.add(h)},s=(a,c,l=-40,u=40,h=[.9,1.3])=>{for(let f=l;f<=u;f+=2.6+e()*3){const d=new Pt;d.position.set(f,L,a+e()*(c-a)),Gs(d,h[0]+e()*h[1],f*3+a),n.add(d)}},r=(a,c,l)=>{for(let u=c;u<=l;u+=1.6+e()*1.2){const h=new Pt;h.position.set(u,L,a+e()*.6),Ws(h,.7+e()*.5),n.add(h)}},o=(a,c)=>{const l=new Pt;l.rotation.y=Math.PI,qs(l,-a,c),n.add(l)};if(t==="park"){Ne(n,"paperShade",-45,6.5,45,8.3,.005);for(let a=-24;a<=24;a+=8){const c=new Pt;c.position.set(a,L,9),oc(c),n.add(c)}r(10.5,-30,30),s(13,20,-44,44,[1,1.2]),s(22,30,-50,50,[1.2,1.2]),o(60)}else if(t==="skatepark"){b(n,"concrete",[-40,L,9,40,L+3,9.6]),b(n,"inkSoft",[-40.1,L+3,8.9,40.1,L+3.2,9.7]);const a=["red","mustard","teal","pink","lilac","tealLight"];for(let c=0,l=-36;l<36;c++,l+=2.2+e()*2.5){const u=1.2+e()*2,h=L+.4+e()*1.2,f=.004+c%3*.004;b(n,a[Math.floor(e()*a.length)],[l,h,9-f,l+u,h+.6+e()*.9,9-f+.002])}b(n,"concrete",[-60,L+4.5,18,60,L+5.4,23]),b(n,"red",[-60,L+5.4,18,60,L+5.9,18.3]);for(let c=-50;c<=50;c+=12)b(n,"inkSoft",[c-.6,L,19.9,c+.6,L+4.5,21.1]);i(30,-60,60,["inkSoft","concrete","lilac"]),o(62)}else if(t==="school"){for(let a=-40;a<40;a+=2.4)b(n,"ink",[a,L,7.9,a+.08,L+1.2,8]);b(n,"ink",[-40,L+1.05,7.92,40,L+1.12,7.98]),b(n,"ink",[-40,L+.4,7.92,40,L+.47,7.98]),s(10,13,-40,40,[.9,1]),Ne(n,"inkSoft",-60,14.5,60,20.5,.004),i(27,-60,60,["peach","pink","mustard","tealLight","white"]),o(62)}else if(t==="harbour"){b(n,"concrete",[-70,L-.6,26,70,L+.4,34]);const a=["red","teal","mustard","tealDark","redDark","lilac"];for(let l=-50;l<50;l+=3.2){const u=1+Math.floor(e()*3);for(let h=0;h<u;h++)b(n,a[Math.floor(e()*a.length)],[l,L+.4+h*1.3,27+h%2*.05,l+3,L+1.7+h*1.3,29.5])}for(const l of[-22,18])b(n,"red",[l-.3,L+.4,30,l+.3,L+12,30.6]),b(n,"red",[l-.3,L+.4,33,l+.3,L+12,33.6]),b(n,"red",[l-.35,L+11,22,l+.35,L+11.8,36]);const c=new Pt;b(c,"white",[-6,0,-1.5,6,1.6,1.5]),b(c,"red",[-6.02,0,-1.52,6.02,.5,1.52]),b(c,"white",[-3,1.6,-1.2,3,2.8,1.2]),b(c,"tealLight",[-2.8,2,-1.21,2.8,2.5,1.21]),b(c,"mustard",[-.4,2.8,-.4,.4,3.8,.4]),c.position.set(-8,L-.6,22),n.add(c),i(42,-70,70,["concrete","inkSoft","tealLight"]),o(66)}else{Ne(n,"concrete",-44,6,44,14,.006),s(8,9,-40,40,[.8,.6]);for(let a=-30;a<=30;a+=10){const c=new Pt;c.position.set(a+3,L,11),c.rotation.y=Math.PI,rc(c),n.add(c)}i(20,-60,60,["peach","mustard","pink","lilac","tealLight"]),o(64)}}function ix(n,t){Xs(n,"grass");for(let s=-6;s>-40;s-=4){const r=new Mt(new Qe(140,2),qt("grassDark"));r.rotation.x=-Math.PI/2,r.position.set(0,L+.005,s),n.add(r)}const e=Bs.park.filter(s=>s.kind==="lamp").map(s=>new R(s.x,L+3.3,s.z));sx(n,e);const i=Us(7);for(let s=-44;s<=44;s+=3+i()*3){const r=new Pt;r.position.set(s,L,-21-i()*9),Gs(r,1+i()*1.1,s),n.add(r)}for(let s=-30;s<=30;s+=4+i()*4){const r=new Pt;r.position.set(s,L,-18-i()*2),Ws(r,.8+i()*.7),n.add(r)}qs(n)}function sx(n,t){for(let e=1;e<t.length;e++){const i=t[e-1],s=t[e];ic(n,sc(i,s,.6));for(let r=1;r<12;r++){const o=r/12,a=new Mt(new Fe(.06,6,4),r%2?es.mustard:es.red);a.position.lerpVectors(i,s,o),a.position.y-=Math.sin(o*Math.PI)*.6,n.add(a)}}}function rx(n,t,e){Xs(n,"grassDark"),Ne(n,"concrete",-30,-26,30,6,.004),Ne(n,"inkSoft",-30,-23,30,-13.5,.008);for(let u=0;u<10;u++)for(let h=0;h<5;h++)(u+h)%2===0&&Ne(n,"inkSoft",-14+u*3,-12+h*3,-11+u*3,-9+h*3,.006);const i=(u,h)=>{Ut(n,new Xe(.2,.55,8),"red",u,L+.3,h),b(n,"white",[u-.14,L+.25,h-.14,u+.14,L+.33,h+.14]).scale.set(.85,1,.85),b(n,"red",[u-.25,L,h-.25,u+.25,L+.04,h+.25])};for(const[u,h]of[[9.5,-9.8],[11,-10.6],[12.4,-9.6],[-11,-10.5]])i(u,h);b(n,"tealDark",[10,L,-22.5,16,L+2.6,-20]);for(let u=0;u<9;u++)b(n,"teal",[10.2+u*.66,L+.1,-20.01,10.45+u*.66,L+2.5,-19.98]);for(const[u,[h,f,d,_,g]]of[[10.6,.5,2.2,1,"mustard"],[12.4,1.1,1.8,.9,"pink"],[14.1,.4,1.4,1.45,"red"]].entries())b(n,g,[h,L+f,-19.97+u*.006,h+d,L+f+_,-19.95+u*.006]);b(n,"red",[-14.5,L,-20.5,-13.4,L+2,-19.8]),b(n,"tealLight",[-14.3,L+.8,-19.81,-13.6,L+1.8,-19.79]),b(n,"ink",[-14.3,L+.25,-19.81,-13.6,L+.55,-19.79]),b(n,"wood",[-12.5,L,-20.5,-9.5,L+.5,-19]),b(n,"woodDark",[-12.5,L+.5,-20.5,-9.5,L+.54,-19]),b(n,"ink",[-11.4,L+.54,-19.9,-10.4,L+1,-19.6]);for(const u of[-11.15,-10.65]){const h=Ut(n,new mt(.15,.15,.02,10),"mustard",u,L+.77,-19.59);h.rotation.x=Math.PI/2}for(const u of[-12,13,16]){const h=new Pt;h.position.set(u,L,-3.2),rc(h),h.rotation.y=u<0?.4:-.3,n.add(h)}for(const[u,h]of[[-12.5,-6.5],[14.5,-5]]){const f=new Pt;f.position.set(u,L,h),Kh(f),n.add(f)}const s=["red","mustard","teal","pink","white"];for(let u=0;u<4;u++){const h=new R(-24+u*12,L+2.2,-25.55),f=new R(-12+u*12,L+2.2,-25.55);ic(n,sc(h,f,.5));for(let d=1;d<16;d++){const _=d/16,g=new Mt(new Xe(.12,.26,3),qt(s[(d+u)%s.length]));g.position.lerpVectors(h,f,_),g.position.y-=Math.sin(_*Math.PI)*.5+.14,g.rotation.x=Math.PI,n.add(g)}}const r=L+7;b(n,"concrete",[-90,r,-22,90,r+.9,-12]),b(n,"paperShade",[-89.5,r-.3,-21.5,89.5,r,-12.5]),b(n,"inkSoft",[-90,r+.9,-12.2,90,r+1.6,-12]),b(n,"mustard",[-89.8,r+.5,-12.02,89.8,r+.6,-11.98]);for(const u of[-30,-20,20,30]){const h=new Pt;h.position.set(u,L,-13),qh(h,e),n.add(h)}const o=[],a=["red","mustard","teal","white","lilac"];for(let u=0;u<6;u++){const h=new Pt,f=a[u%a.length];b(h,f,[-1.1,0,-.5,1.1,.6,.5]),b(h,"tealLight",[-.6,.6,-.45,.5,1,.45]),b(h,f,[-.55,.98,-.47,.45,1.05,.47]),h.position.y=r+.9,n.add(h);const d=u%2;o.push({root:h,speed:(d?-1:1)*(11+e()*6),lane:d,offset:e()*180})}t.push(u=>{for(const h of o){const f=((h.offset+u*h.speed)%180+180)%180-90;h.root.position.set(f,r+.9,h.lane?-15:-18.5),h.root.rotation.y=h.speed>0?0:Math.PI}});for(let u=-24;u<=24;u+=2.5)b(n,"inkSoft",[u-.04,L,-25.6,u+.04,L+2.2,-25.5]);for(const u of[.1,1.1,2.15])b(n,"inkSoft",[-24,L+u,-25.6,24,L+u+.05,-25.55]);b(n,"concrete",[-18,L,-27,18,L+3.2,-26.6]);const c=["red","mustard","teal","pink","lilac","tealDark"];for(let u=0;u<14;u++){const h=-17+u*2.5+e(),f=.3+e()*1.6;b(n,c[Math.floor(e()*c.length)],[h,L+f,-26.61,h+1+e()*1.5,L+f+.4+e()*.8,-26.58])}qs(n,-60);const l=[{z:-18.6,from:-2,to:10,speed:.35,kind:"runner",seed:101,deck:"red"},{z:-21.4,from:-16,to:6,speed:.27,kind:"student",seed:202,deck:"teal"},{z:-16.8,from:10,to:20,speed:.42,kind:"painter",seed:303,deck:"mustard"}];for(const u of l){const h=Xh(u.kind,u.seed),f=new Pt;b(f,u.deck,[-.12,.08,-.45,.12,.11,.45]);for(const _ of[-.3,.3])b(f,"ink",[-.13,0,_-.05,.13,.08,_+.05]);h.root.add(f),h.root.children.forEach(_=>_!==f&&(_.position.y+=.11)),n.add(h.root);const d=u.seed;t.push(_=>{const g=(Math.sin(_*u.speed+d)+1)/2;h.root.position.set(u.from+g*(u.to-u.from),L,u.z),h.root.rotation.y=Math.cos(_*u.speed+d)>0?-Math.PI/2:Math.PI/2,h.arms[0].rotation.z=.9,h.arms[1].rotation.z=-.9})}}function ox(n,t,e){Xs(n,"grass"),Ne(n,"inkSoft",-14,-20,16,2,.004),Ne(n,"teal",0,-16,8,-6.5,.008);for(const[r,o,a,c]of[[0,-16,8,-15.9],[0,-6.6,8,-6.5],[0,-16,.1,-6.5],[7.9,-16,8,-6.5],[0,-11.3,8,-11.2]])Ne(n,"white",r,o,a,c,.012);const i=Ut(n,new Ae(.13,1),"mustardDark",4,L+.13,-12.8);t.push(r=>{i.position.y=L+.13+Math.abs(Math.sin(r*3.2))*1.1});for(let r=-14;r<=16;r+=2)(r<-2||r>1)&&b(n,"tealDark",[r-.04,L,-20.1,r+.04,L+1.8,-20]);for(const r of[-2.2,1.2])b(n,"mustard",[r-.08,L,-20.14,r+.08,L+2.1,-19.96]);b(n,"tealDark",[-14,L+1.75,-20.1,-2.3,L+1.82,-20]),b(n,"tealDark",[1.3,L+1.75,-20.1,16,L+1.82,-20]),b(n,"peach",[-26,L,-32,26,L+8,-24]),b(n,"red",[-26.5,L+8,-32.5,26.5,L+8.6,-23.5]),b(n,"white",[-26.02,L+3.9,-24.02,26.02,L+4.1,-23.95]);for(let r=0;r<2;r++)for(let o=-24;o<24;o+=3)r===0&&Math.abs(o)<2||(b(n,"white",[o-.1,L+1.1+r*4-.1,-24.02,o+1.9,L+3+r*4+.1,-23.98]),b(n,"tealLight",[o,L+1.1+r*4,-24.04,o+1.8,L+3+r*4,-23.97]));b(n,"woodDark",[-1.4,L,-24.05,1.4,L+2.6,-23.96]),b(n,"peach",[-3,L+8,-25,3,L+11,-24]),b(n,"red",[-3.3,L+11,-25.3,3.3,L+11.4,-23.7]);const s=Ut(n,new mt(1,1,.1,16),"white",0,L+9.5,-23.95);s.rotation.x=Math.PI/2,b(n,"ink",[-.04,L+9.5,-23.88,.04,L+10.2,-23.86]),b(n,"ink",[-.04,L+9.46,-23.88,.5,L+9.54,-23.86]);for(const r of[-24,-20.5,-17,19,22.5,26,30]){const o=new Pt;o.position.set(r+e(),L,-21.5+e()*2),Gs(o,.9+e()*.8,r*3.1),n.add(o)}for(let r=-13;r<=15;r+=2.5+e()*2){if(r>-3.5&&r<2.5)continue;const o=new Pt;o.position.set(r,L,-20.6),Ws(o,.6+e()*.5),n.add(o)}qs(n,-62)}function ax(n,t,e){const i=L-.6;Xs(n,"teal",-40,260).position.y=i,b(n,"wood",[-30,i,-14.2,30,L,8]);for(let g=-30;g<30;g+=.9)b(n,"woodDark",[g,L,-14.2,g+.04,L+.004,8]);b(n,"woodDark",[-30,L-1.2,-14.5,30,L+.12,-14.2]);for(let g=-29;g<30;g+=3)Ut(n,new mt(.2,.2,2.5,6),"woodDark",g,L-1.2,-14.5);const s=[];for(let g=0;g<14;g++){const m=b(n,"tealLight",[-1.5,L+.01,-.05,1.5,L+.02,.05]);m.position.set(-40+e()*80,i+.01,-18-e()*30),s.push(m)}const r=[],o=(g,m,p,v)=>{const M=new Pt;b(M,p,[-2,-.4,-.8,2,.5,.8]),b(M,"white",[-2.05,.3,-.82,2.05,.47,.82]);const x=new Mt(new Xe(.8,1.2,4),qt(p));if(x.rotation.z=-Math.PI/2,x.rotation.x=Math.PI/4,x.position.set(2.55,.05,0),M.add(x),v){b(M,"ink",[-.05,.5,-.05,.05,5,.05]);const U=new Uh([new ot(0,0),new ot(0,4.2),new ot(2.4,0)]),A=new Mt(new tc(U),qt("white"));A.material.side=Ve,A.position.set(.1,.7,0),M.add(A)}else b(M,"white",[-1.2,.5,-.6,.2,1.5,.6]),b(M,"tealLight",[-1.21,1,-.5,.21,1.3,.5]),b(M,"red",[-1.3,1.5,-.7,.3,1.6,.7]);M.position.set(g,i,m),M.rotation.y=e()*.6-.3,n.add(M),r.push({root:M,phase:e()*6})};o(-7,-19,"red",!1),o(8,-22,"teal",!0),o(-18,-30,"mustard",!1);for(const[g,m,p]of[[0,0,3.2],[2.2,1.4,1.8],[-2,1.8,1.5]])Ut(n,new zs(p,0),"concrete",-32+g,i+p*.35,-52+m).scale.y=.55;Ut(n,new mt(1.2,1.8,2,8),"concrete",-32,L+1,-52);for(let g=0;g<5;g++)Ut(n,new mt(1.2-g*.08,1.28-g*.08,2.4,10),g%2?"red":"white",-32,L+3.2+g*2.4,-52);Ut(n,new mt(.7,.7,1.2,8),es.mustard,-32,L+15.6,-52),Ut(n,new Xe(1,1,8),"red",-32,L+16.7,-52);const a={x1:16,x2:90,z1:-64,z2:-38},c=L+.5;b(n,"concrete",[a.x1,i-.5,a.z1,a.x2,c,a.z2]),b(n,"mustard",[a.x1,c,a.z2-.3,a.x2,c+.02,a.z2-.2]);for(let g=a.x1+1;g<a.x2;g+=4)b(n,"ink",[g,c-.6,a.z2,g+.5,c-.1,a.z2+.15]);const l=["red","teal","mustard","tealDark","redDark","lilac","white"],u=(g,m,p,v,M=!0)=>{const x=M?6:3;b(n,v,[g,m,p,g+x,m+1.25,p+1.25]);for(let U=.3;U<x-.1;U+=.4)b(n,"ink",[g+U,m+.1,p-.01,g+U+.05,m+1.15,p])};for(let g=0;g<4;g++)for(let m=0;m<8;m++){const p=2+Math.floor(e()*3);for(let v=0;v<p;v++)u(a.x1+6+m*6.6,c+v*1.27,a.z1+3+g*3.2,l[Math.floor(e()*l.length)])}for(const g of[28,52]){for(const m of[0,9])b(n,"mustard",[g,c,a.z2-10+m,g+.6,c+18,a.z2-9.4+m]),b(n,"mustard",[g+6,c,a.z2-10+m,g+6.6,c+18,a.z2-9.4+m]);b(n,"mustard",[g,c+18,a.z2-10,g+6.6,c+19,a.z2+9]),b(n,"mustardDark",[g+.05,c+8,a.z2-9.95,g+6.55,c+8.6,a.z2-.45]),b(n,"white",[g+1.5,c+16.5,a.z2-2,g+5,c+18,a.z2+1]),b(n,"ink",[g+3.2,c+12,a.z2+5,g+3.3,c+18,a.z2+5.1]),u(g+.3,c+10.7,a.z2+4.4,"red")}const h=new Pt;b(h,"ink",[0,-1.5,-4.5,56,3.2,4.5]),b(h,"red",[-.02,-1.5,-4.52,56.02,.2,4.52]);const f=new Mt(new mt(4.5,4.5,4.7,3,1,!1,0,Math.PI),qt("ink"));f.rotation.y=Math.PI/2,f.position.set(56,.85,0),f.scale.set(1,1,.8),h.add(f),b(h,"white",[1,3.2,-4,8,11,4]);for(let g=0;g<4;g++)b(h,"tealLight",[.98,4.2+g*1.7,-3.5,1,5.2+g*1.7,3.5]);b(h,"red",[3,11,-1,6,14,1]);for(let g=0;g<7;g++)for(let m=0;m<6;m++){const p=1+Math.floor(e()*3);for(let v=0;v<p;v++){const M=l[Math.floor(e()*l.length)];b(h,M,[10+g*6.3,3.2+v*1.27,-4+m*1.33,16+g*6.3,4.45+v*1.27,-2.75+m*1.33])}}h.position.set(a.x1+6,i,a.z2+6),n.add(h),t.push(g=>{h.position.y=i+Math.sin(g*.5)*.06}),b(n,"tealDark",[-29,L,-8,-17,L+5,3]),b(n,"white",[-29.3,L+5,-8.3,-16.7,L+5.4,3.3]),b(n,"inkSoft",[-17.01,L,-6,-16.98,L+3.8,-1]);for(let g=.4;g<3.8;g+=.5)b(n,"ink",[-16.99,L+g,-5.95,-16.97,L+g+.05,-1.05]);b(n,"white",[-17.01,L+4.1,0,-16.98,L+4.7,2.5]),b(n,"woodDark",[-14,L,-10.5,-13.85,L+1.6,-10.35]),Ut(n,new qe(.32,.09,6,14),"red",-13.92,L+1.2,-10.25),Ut(n,new qe(.4,.12,6,14),"wood",-15.5,L+.12,-2).rotation.x=Math.PI/2;const d=new Pt;d.position.set(16,L,-3),d.rotation.y=-.4,Zh(d,"teal",e),n.add(d),b(n,"white",[20,L,-10,26,L+3.4,-5]),b(n,"red",[19.8,L+3.4,-10.2,26.2,L+3.8,-4.8]),b(n,"tealLight",[21,L+1.4,-5.01,23,L+2.6,-4.98]),b(n,"woodDark",[23.8,L,-5.01,25,L+2.3,-4.98]);for(const[g,m]of[[13.5,-7.5],[14.6,-8.3],[18.6,1.5]]){const p=new Pt;p.position.set(g,L,m),p.rotation.y=e(),Yh(p),n.add(p)}for(const g of[-26,-20,16,22,28]){const m=new Pt;m.position.set(g,L,-13.6),oc(m),n.add(m)}for(const[g,m,p]of[[-60,22,10],[-20,16,7],[60,26,12]])Ut(n,new Xe(m,p,7),"grassDark",g,L+p/2,-95);const _=[];for(let g=0;g<5;g++){const m=new Pt;for(const p of[-1,1]){const v=b(m,"white",[0,-.02,-.12,.45,.02,.12]);v.rotation.y=p<0?Math.PI:0,v.rotation.z=p*.35}n.add(m),_.push(m)}t.push(g=>{for(const m of r)m.root.position.y=i+Math.sin(g*1.2+m.phase)*.12,m.root.rotation.z=Math.sin(g*.9+m.phase)*.04;s.forEach((m,p)=>{m.position.x+=Math.sin(g*.4+p)*.004}),_.forEach((m,p)=>{const v=g*(.25+p*.04)+p*1.3;m.position.set(Math.cos(v)*(8+p*2)-2,L+8+p*.8+Math.sin(g*2+p)*.3,-22+Math.sin(v)*6),m.rotation.y=-v,m.children.forEach((M,x)=>M.rotation.z=(x?1:-1)*(.2+Math.sin(g*6+p)*.35))})})}function cx(n,t,e){Xs(n,"grass"),Ne(n,"inkSoft",-45,-2.1,45,9,.004),Ne(n,"white",-45,-2,45,-1.92,.007);for(let f=-44;f<44;f+=4)Ne(n,"white",f,4.1,f+2,4.22,.007);Ne(n,"paperShade",-45,-2.35,45,-2.1,.03),Ne(n,"concrete",-26,-23.9,26,-2.35,.006);for(let f=0;f<=17;f++)Ne(n,"paperShade",-25.5+f*3,-23.9,-25.38+f*3,-2.35,.009);for(let f=0;f<=7;f++)Ne(n,"paperShade",-26,-23.4+f*3,26,-23.28+f*3,.009);const i=(f,d,_,g)=>{Ne(n,"paperShade",f-.15,d-.15,_+.15,g+.15,.06),Ne(n,"grass",f,d,_,g,.075)};i(-22,-22,-8.5,-9.5),i(8.5,-22,22,-13.5),i(-2.5,-22,2.5,-19);const s=new Mt(new Qa(2.3,3.4,28),qt("grass"));s.rotation.x=-Math.PI/2,s.position.set(4.5,L+.05,-11),n.add(s);const r=Us(55);for(const[f,d,_]of[[-21.5,-9,-9.9],[9,21.5,-13.9]])for(let g=f;g<=d;g+=1.3){const m=new Pt;m.position.set(g,L+.07,_),Ws(m,.75+r()*.2),n.add(m)}for(const[f,d]of[[-19,-17],[-14,-20],[-11,-14],[12,-18],[17,-20.5],[20,-16]]){const _=new Pt;_.position.set(f,L+.07,d),Gs(_,.9+r()*.6,f*5+d),n.add(_)}const o=["red","mustard","pink","white","lilac"];for(let f=0;f<70;f++){const d=f%2===0,_=d?-21+r()*11:9.5+r()*11.5,g=d?-21.5+r()*3.5:-21.5+r()*3;Ut(n,new Ae(.1+r()*.06,0),o[f%o.length],_,L+.17,g)}for(let f=0;f<24;f++){const d=f/24*Math.PI*2;Ut(n,new Ae(.11,0),o[f%o.length],4.5+Math.cos(d)*2.85,L+.15,-11+Math.sin(d)*2.85)}const a=Bs.square.filter(f=>f.kind==="lamp").map(f=>new R(f.x,L+3.2,f.z)),c=["red","mustard","teal","pink","white"],l=[new R(-14,L+6.2,-24),...a,new R(14,L+6.2,-24)],u=[];for(let f=1;f<l.length;f++)u.push([l[f-1],l[f]]);u.push([a[0],new R(-4,L+8,-24)],[a[a.length-1],new R(4,L+8,-24)]);for(const[f,d]of u){const _=.4+f.distanceTo(d)*.05;ic(n,sc(f,d,_,16));const g=Math.max(6,Math.round(f.distanceTo(d)/.7));for(let m=1;m<g;m++){const p=m/g,v=new Mt(new Xe(.14,.3,3),qt(c[m%c.length]));v.position.lerpVectors(f,d,p),v.position.y-=Math.sin(p*Math.PI)*_+.15,v.rotation.x=Math.PI,v.rotation.y=Math.atan2(d.x-f.x,d.z-f.z),n.add(v)}}Ua(n,-24,-40,-5,e,["peach","mustard","pink","lilac","tealLight"]),Ua(n,-24,6,42,e,["peach","mustard","pink","lilac","tealLight"]),b(n,"wood",[-4,L,-30,4,L+16,-24]),b(n,"redDark",[-4.4,L+16,-30.4,4.4,L+16.6,-23.6]),Ut(n,new Xe(4.2,4,4),"red",0,L+18.6,-27).rotation.y=Math.PI/4;const h=Ut(n,new mt(1.8,1.8,.1,20),"white",0,L+12.5,-23.95);h.rotation.x=Math.PI/2,b(n,"ink",[-.06,L+12.5,-23.88,.06,L+13.8,-23.86]),b(n,"ink",[-.06,L+12.44,-23.88,1,L+12.56,-23.86]),b(n,"woodDark",[-1.5,L,-24.05,1.5,L+3.5,-23.96]),qs(n,-64)}function lx(n){const t=new Pt,e=Us(n.length*7919+n.charCodeAt(0)),i=[];n==="park"?ix(t):n==="skatepark"?rx(t,i,e):n==="school"?ox(t,i,e):n==="harbour"?ax(t,i,e):cx(t,i,e),nx(t,n,Us(n.length*104729+17));for(const o of Bs[n]){const a=ex(t,o,e);a&&i.push(a)}const s=new cn({color:Bn("mustard"),fog:!1}),r=new Mt(new as(6,24),s);return t.add(r),t.userData.setSky=o=>{const c=o.elevation*Math.PI/180;r.position.set(o.across*70,L+Math.sin(c)*90,-90*Math.cos(c)),r.lookAt(0,L+1,0),r.visible=o.elevation>-6||o.lamps>.95,o.lamps>.95&&r.position.set(-30,L+35,-80),s.color.set(o.disc),es.mustard.color.copy(Vr).lerp(Xl.mustard,o.lamps),es.red.color.copy(Vr).lerp(Xl.red,o.lamps)},t.userData.update=(o,a)=>{for(const c of i)c(o,a)},t}const ti={x:140,y:51,w:1492,h:784},Ke=je.length/2,ne=je.depth/2,we=je.height,Ce=.08,Rt=.03,fn={bottom:L+.32,top:.62},ys={bottom:.66,top:.71};function hx(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t;const s=i.getContext("2d");e(s,n,t);const r=new os(i);return r.anisotropy=4,r}function ux(){const n=document.createElement("canvas");n.width=1024,n.height=Math.round(1024*ti.h/ti.w);const t=new os(n);if(t.anisotropy=8,t.colorSpace=on,typeof Image>"u")return t;const e=new Image;return e.onload=()=>{var i;(i=n.getContext("2d"))==null||i.drawImage(e,ti.x,ti.y,ti.w,ti.h,0,0,n.width,n.height),t.needsUpdate=!0},e.src=eu,t}function Zl(n,t,e){const s=L+.4,r=Math.sign(e),o=(c,l,u)=>{const h=new Mt(c,qt(l));h.rotation.x=Math.PI/2,h.position.set(t,s,e+r*u),n.add(h)};o(new mt(.4,.4,.26,16),"ink",0),o(new mt(.24,.24,.02,14),"white",.135),o(new mt(.17,.17,.025,12),"red",.145),o(new mt(.06,.06,.03,8),"white",.16);const a=new Mt(new qe(.4+.06,.05,4,12,Math.PI),qt("inkSoft"));a.position.set(t,s,e+r*.02),n.add(a)}function Ss(n,t,e,i,s,r,o){const a=new Mt(new mt(i,i,e,8),qt("white"));t==="x"?a.rotation.z=Math.PI/2:a.rotation.x=Math.PI/2,a.position.set(s,r,o),n.add(a)}function fx(){const n=new Pt,t=Yt.window,e=Yt.door,i=-ne-Ce,s=ne+Ce,r=Ke+Ce;b(n,"white",[-Ke-Ce,0,i-Rt,t.min.x-.05,we,i]),b(n,"white",[t.max.x+.05,0,i-Rt,r,we,i]),b(n,"white",[t.min.x-.05,t.max.y+.12,i-Rt,t.max.x+.05,we,i]),b(n,"white",[t.min.x-.05,0,i-Rt,t.max.x+.05,t.min.y-.04,i]),b(n,"white",[-Ke-Ce,0,s,r,we,s+Rt]),b(n,"white",[r,0,-ne-Ce,r+Rt,we,e.min.z]),b(n,"white",[r,0,e.max.z,r+Rt,we,ne+Ce]),b(n,"white",[r,e.max.y,e.min.z,r+Rt,we,e.max.z]);const o=.006;b(n,"white",[-Ke-Ce-o,fn.bottom,i-Rt-o,r+Rt+o,.02,i-.002]),b(n,"white",[-Ke-Ce-o,fn.bottom,s+.002,r+Rt+o,.02,s+Rt+o]),b(n,"white",[r+.002,fn.bottom,i-.002,r+Rt+o,.02,s+.002]);const a=(m,p,v,M)=>{b(n,m,[-Ke-Ce-M,p,i-Rt-M,r+Rt+M,v,i-Rt-M+.004]),b(n,m,[-Ke-Ce-M,p,s+Rt+M-.004,r+Rt+M,v,s+Rt+M]),b(n,m,[r+Rt+M-.004,p,i-Rt-M+.004,r+Rt+M,v,e.min.z]),b(n,m,[r+Rt+M-.004,p,e.max.z,r+Rt+M,v,s+Rt+M-.004])};a("red",fn.bottom,fn.top,.01),a("mustard",ys.bottom,ys.top,.01),b(n,"white",[-Ke-Ce-.04,we+.1,i-Rt-.04,r+Rt+.04,we+.2,s+Rt+.04]),Ss(n,"x",2*Ke+2*Ce+Rt+.08,.1,(r+Rt-Ke-Ce)/2,we+.15,i-Rt-.05),Ss(n,"x",2*Ke+2*Ce+Rt+.08,.1,(r+Rt-Ke-Ce)/2,we+.15,s+Rt+.05),Ss(n,"z",s-i+2*Rt+.1,.1,r+Rt+.05,we+.15,0),b(n,"paperShade",[1.9,we+.2,-.3,2.5,we+.32,.3]),b(n,"wood",[t.min.x-.14,t.min.y-.1,i-Rt-.3,t.max.x+.14,t.min.y-.03,i-Rt]);for(const m of[t.min.x-.12,t.max.x+.08])b(n,"inkSoft",[m,t.min.y,i-Rt-.03,m+.04,t.max.y+.12,i-Rt]);b(n,"inkSoft",[t.min.x-.12,t.max.y+.08,i-Rt-.03,t.max.x+.12,t.max.y+.12,i-Rt]),px(n,t.min.x-.25,t.max.x+.25,t.max.y+.22,i-Rt);const c=-Ke-Ce,l=c-1.15,u=we-.12;b(n,"white",[l,fn.bottom,-ne-.02,c,u,ne+.02]),b(n,"white",[l-.04,u,-ne-.06,c+.02,u+.1,ne+.06]),Ss(n,"z",2*ne+.12,.09,l-.02,u+.06,0);const h=l-.3;b(n,"white",[h,fn.bottom,-ne+.06,l+.02,.95,ne-.06]),Ss(n,"z",2*ne-.12,.06,h+.04,.93,0);for(const m of[-.5,.5]){const p=b(n,"tealLight",[-.02,-.5,-.43,.02,.5,.43]);p.position.set(l-.04,1.55,m),p.rotation.z=-.08}b(n,"inkSoft",[l-.07,1.03,-.05,l-.01,2.07,.05]),b(n,"red",[h-.02,fn.bottom+.05,-ne+.1,h,.88,ne-.1]);for(let m=.4;m<.74;m+=.08)b(n,"redDark",[h-.035,m,-.45,h-.02,m+.035,.45]);for(const m of[-.82,.82]){const p=new Mt(new mt(.15,.15,.05,14),qt("white"));p.rotation.z=Math.PI/2,p.position.set(h-.035,.6,m),n.add(p);const v=new Mt(new mt(.1,.1,.06,14),qt("paper"));v.rotation.z=Math.PI/2,v.position.set(h-.045,.6,m),n.add(v),b(n,"mustard",[h-.04,.32,m-.08,h-.02,.38,m+.08])}b(n,"inkSoft",[h-.14,L+.22,-ne,h+.02,L+.4,ne]),b(n,"white",[h-.155,L+.25,-.25,h-.14,L+.37,.25]);for(const m of[-1,1]){const p=m*(ne+.02),v=m*(ne+.03),[M,x]=m<0?[v,p]:[p,v];b(n,"red",[l,fn.bottom,M,c,fn.top,x]),b(n,"mustard",[l,ys.bottom,M,c,ys.top,x]),b(n,"tealLight",[l+.12,1.2,m<0?v-.002:p,c-.1,2.05,m<0?p:v+.002]),b(n,"inkSoft",[c-.06,ys.top,m<0?v-.004:p,c-.03,2.1,m<0?p:v+.004]),b(n,"ink",[c-.3,1.05,m<0?v-.012:p,c-.16,1.09,m<0?p:v+.012]),b(n,"ink",[l-.08,1.45,m*(ne+.08),l-.02,1.5,m*(ne+.2)]),b(n,"ink",[l-.1,1.5,m*(ne+.16)-.05,l-.02,1.78,m*(ne+.16)+.05]),b(n,"mustard",[l+.05,u+.1,m*(ne-.12)-.04,l+.15,u+.14,m*(ne-.12)+.04])}b(n,"red",[h-.004,fn.bottom,-ne+.06,h+0,fn.bottom+.05,ne-.06]),b(n,"inkSoft",[r+Rt+.01,L+.22,-ne,r+.2,L+.4,-.6]),b(n,"inkSoft",[r+Rt+.01,L+.22,.6,r+.2,L+.4,ne]);for(const m of[-ne+.15,ne-.25])b(n,"red",[r+Rt,.8,m,r+Rt+.02,1.1,m+.1]);for(const m of[-ne-Ce-.14,ne+Ce+.14])Zl(n,c-.6,m),Zl(n,Ke-.9,m);const f=(m,p)=>hx(256,112,(v,M,x)=>{v.fillStyle=p,v.beginPath(),v.roundRect(4,4,M-8,x-8,20),v.fill(),v.fillStyle="#fffaf0",v.font="bold 60px system-ui, sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillText(m,M/2,x/2+2)}),d=f("OPEN","#2b9c8e"),_=f("CLOSED","#e4573d"),g=new Mt(new Qe(.5,.22),new cn({map:d,transparent:!0}));g.position.set(t.max.x+.5,t.max.y-.3,i-Rt-.012),g.rotation.y=Math.PI,n.add(g);for(const m of[-.18,.18])b(n,"ink",[t.max.x+.5+m-.005,t.max.y-.19,i-Rt-.015,t.max.x+.5+m+.005,t.max.y+0,i-Rt-.01]);return n.userData.setOpen=m=>{g.material.map=m?d:_},dx(n),n.userData.steam=[],n}function dx(n){const e=3.1*ti.h/ti.w,i=.14,s=3.1+2*i,r=e+2*i,o=-.4,a=we+.85,c=a+r,l=(a+c)/2;b(n,"white",[o-s/2,a,-.05,o+s/2,c,.05]);const u=.07;b(n,"red",[o-s/2-u,c-u,-.075,o+s/2+u,c+u,.075]),b(n,"red",[o-s/2-u,a-u,-.075,o+s/2+u,a+u,.075]),b(n,"red",[o-s/2-u,a-u,-.075,o-s/2+u,c+u,.075]),b(n,"red",[o+s/2-u,a-u,-.075,o+s/2+u,c+u,.075]);const h=ux(),f=new Qe(3.1,e);for(const d of[-1,1]){const _=new Mt(f,new cn({map:h,transparent:!0,alphaTest:.5}));_.position.set(o,l,d*.058),_.rotation.y=d<0?Math.PI:0,n.add(_)}for(const d of[o-s*.3,o+s*.3]){b(n,"ink",[d-.06,we+.26,-.04,d+.06,a+.4,.04]),b(n,"inkSoft",[d-.14,we+.26,-.12,d+.14,we+.36,.12]);for(const _ of[-1,1]){const g=b(n,"ink",[-.025,-.35,-.025,.025,.35,.025]);g.position.set(d,we+.55,_*.2),g.rotation.x=_*.55}}b(n,"inkSoft",[o-s/2+.2,we+.2,-.28,o+s/2-.2,we+.26,.28])}function px(n,t,e,i,s){const o=(e-t)/9,a=.95,c=.32,l=i-Math.sin(c)*a,u=s-Math.cos(c)*a,h=new Pt;h.position.set(0,i,s),h.rotation.x=-c,n.add(h);for(let f=0;f<9;f++){const d=t+f*o,_=f%2?"white":"teal";b(h,_,[d,0,-a,d+o,.04,0]);const g=new Mt(new as(o/2,8,Math.PI,Math.PI),qt(_));g.material.side=Ve,g.position.set(d+o/2,l+.005,u-.004-.002*(f%2)),n.add(g)}}const Er=5e3,br=900,$e={minX:-22,maxX:22,minZ:-26,maxZ:8,top:14},mx=`
  attribute vec3 seed;
  attribute float tip;
  uniform float time;
  uniform float amount;
  uniform vec3 area;
  uniform vec4 truck;
  varying float vAlpha;
  void main() {
    float fall = mod(seed.y + time * (11.0 + seed.z * 4.0), area.z);
    vec3 p = vec3(seed.x, ${L.toFixed(2)} + area.z - fall, position.z);
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
`,gx=`
  uniform vec3 colour;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(colour, vAlpha);
  }
`,_x=`
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
`,xx=`
  uniform vec3 colour;
  varying float vLife;
  void main() {
    vec2 d = gl_PointCoord - 0.5;
    float r = length(d * vec2(1.0, 2.2));
    float ring = smoothstep(0.5, 0.38, r) * smoothstep(0.2, 0.36, r);
    gl_FragColor = vec4(colour, ring * (1.0 - vLife) * 0.5);
  }
`;class vx{constructor(){tt(this,"group",new Pt);tt(this,"streakMaterial");tt(this,"splashMaterial");const t={x:je.length/2+.15,z:je.depth/2+.15},e=new ce(-3.15,t.x,-1.3499999999999999,t.z),i=new Float32Array(Er*2*3),s=new Float32Array(Er*2*3),r=new Float32Array(Er*2);for(let f=0;f<Er;f++){const d=$e.minX+Math.random()*($e.maxX-$e.minX),_=$e.minZ+Math.random()*($e.maxZ-$e.minZ),g=Math.random()*$e.top,m=Math.random();for(let p=0;p<2;p++){const v=f*2+p;i.set([d,0,_],v*3),s.set([d,g,m],v*3),r[v]=p}}const o=new Le;o.setAttribute("position",new Ge(i,3)),o.setAttribute("seed",new Ge(s,3)),o.setAttribute("tip",new Ge(r,1)),o.boundingSphere=new ss(new R(0,6,-9),60),this.streakMaterial=new bn({vertexShader:mx,fragmentShader:gx,uniforms:{time:{value:0},amount:{value:0},area:{value:new R(0,0,$e.top)},truck:{value:e},colour:{value:new zt(.5,.6,.78)}},transparent:!0,depthWrite:!1});const a=new xl(o,this.streakMaterial);a.frustumCulled=!1,this.group.add(a);const c=new Float32Array(br*3),l=new Float32Array(br*2);for(let f=0;f<br;f++){const d=f<br*.6,_=d?-10+Math.random()*20:$e.minX+Math.random()*($e.maxX-$e.minX),g=d?-12+Math.random()*10:$e.minZ+Math.random()*($e.maxZ-$e.minZ);c.set([_,L+.05,g],f*3),l.set([Math.random(),Math.random()],f*2)}const u=new Le;u.setAttribute("position",new Ge(c,3)),u.setAttribute("seed",new Ge(l,2)),this.splashMaterial=new bn({vertexShader:_x,fragmentShader:xx,uniforms:{time:{value:0},amount:{value:0},pixelRatio:{value:1},truck:{value:e},colour:{value:new zt(.62,.72,.88)}},transparent:!0,depthWrite:!1});const h=new Ml(u,this.splashMaterial);h.frustumCulled=!1,this.group.add(h)}update(t,e,i){for(const s of[this.streakMaterial,this.splashMaterial])s.uniforms.time.value=t,s.uniforms.amount.value=e;this.splashMaterial.uniforms.pixelRatio.value=i,this.group.visible=e>.001}dispose(){this.group.traverse(t=>{(t instanceof xl||t instanceof Ml)&&t.geometry.dispose()}),this.streakMaterial.dispose(),this.splashMaterial.dispose()}}const Mx=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,yx=`
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
`;class Sx{constructor(){tt(this,"target");tt(this,"material");tt(this,"quad");tt(this,"scene",new Ch);tt(this,"camera",new Xa(-1,1,1,-1,0,1));this.target=new ri(1,1,{minFilter:pn,magFilter:pn,depthTexture:new Ya(1,1)}),this.material=new bn({vertexShader:Mx,fragmentShader:yx,uniforms:{tColor:{value:this.target.texture},tDepth:{value:this.target.depthTexture},resolution:{value:new ot(1,1)},pixelRatio:{value:1},cameraNear:{value:.05},cameraFar:{value:100},outlineInk:{value:Vi(Ts.ink)},lens:{value:0},lensPaper:{value:Vi(Ts.paper)},lensLight:{value:Vi(Ts.tealLight)},lensDark:{value:Vi(Ts.tealDark)}},depthTest:!1,depthWrite:!1}),this.quad=new Mt(new Qe(2,2),this.material),this.scene.add(this.quad)}setSize(t,e,i){this.target.setSize(t,e),this.material.uniforms.resolution.value.set(t,e),this.material.uniforms.pixelRatio.value=i}setLens(t){this.material.uniforms.lens.value=Math.min(1,Math.max(0,t))}render(t,e,i){this.material.uniforms.cameraNear.value=i.near,this.material.uniforms.cameraFar.value=i.far,t.setRenderTarget(this.target),t.render(e,i),t.setRenderTarget(null),t.render(this.scene,this.camera)}dispose(){this.target.dispose(),this.material.dispose(),this.quad.geometry.dispose()}}const Tr=[{at:0,sky:"#cfe6ea",sunColour:"#fff1d6",sunLight:.38,ambient:.78,elevation:22,across:-.8,disc:"#fff3c4",lamps:0},{at:.35,sky:"#a8d8ec",sunColour:"#ffffff",sunLight:.45,ambient:.85,elevation:58,across:-.2,disc:"#fff6d8",lamps:0},{at:.62,sky:"#f4d9a6",sunColour:"#ffe2b0",sunLight:.42,ambient:.76,elevation:32,across:.25,disc:"#ffd36b",lamps:0},{at:.82,sky:"#f19a78",sunColour:"#ff9f70",sunLight:.32,ambient:.6,elevation:7,across:.55,disc:"#f2703f",lamps:.5},{at:.92,sky:"#7b5f8f",sunColour:"#c48aa8",sunLight:.16,ambient:.45,elevation:-4,across:.7,disc:"#f2703f",lamps:.9},{at:1,sky:"#2b3354",sunColour:"#9fb0ff",sunLight:.12,ambient:.36,elevation:-10,across:.8,disc:"#e8ecff",lamps:1}];function wx(n){return Math.min(1,Math.max(0,(n-Zi)/(rn-Zi)))}const Kl=n=>[1,3,5].map(t=>parseInt(n.slice(t,t+2),16)),Ex=n=>`#${n.map(t=>Math.round(t).toString(16).padStart(2,"0")).join("")}`,Vo=(n,t,e)=>Ex(Kl(n).map((i,s)=>i+(Kl(t)[s]-i)*e)),ws=(n,t,e)=>n+(t-n)*e;function bx(n){const t=wx(n);let e=0;for(;e<Tr.length-2&&Tr[e+1].at<=t;)e++;const i=Tr[e],s=Tr[e+1],r=Math.min(1,Math.max(0,(t-i.at)/(s.at-i.at)));return{sky:Vo(i.sky,s.sky,r),sunColour:Vo(i.sunColour,s.sunColour,r),sunLight:ws(i.sunLight,s.sunLight,r),ambient:ws(i.ambient,s.ambient,r),elevation:ws(i.elevation,s.elevation,r),across:ws(i.across,s.across,r),disc:Vo(i.disc,s.disc,r),lamps:ws(i.lamps,s.lamps,r)}}const Tx={min:{x:re.x-re.r,y:re.y-re.r,z:re.z-.06},max:{x:re.x+re.r,y:re.y+re.r,z:re.z+.02}},Ax=(n,t,e,i)=>{const s=Bh(n,t,e);return s!==null&&s<=i},Rx=new zt(.5,.55,.62),Cx=2,$l=.0024,Jl=70,Px=50,Lx=42,jl=1.25,Dx=.45,Ix=6;function Ql(n){const t=Hh.find(e=>e.object===n);return t?{...t.eye,...t_(t.eye,t.target)}:null}const th=(n,t)=>((t-n+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;class Fx{constructor(t,e,i){tt(this,"renderer");tt(this,"scene",new Ch);tt(this,"camera",new an(Jl,16/9,.05,120));tt(this,"veil",new Mt(new Qe(4,4),new cn({color:"#1a2036",transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1})));tt(this,"filmOffset",0);tt(this,"look",new Sx);tt(this,"ambient",new Xg(16777215,.8*Math.PI));tt(this,"sun",new Ll(16777215,.4*Math.PI));tt(this,"inside",new Gg(16767392,0,7,1.2));tt(this,"setSky",()=>{});tt(this,"updatePlace",()=>{});tt(this,"rain",new vx);tt(this,"showers",[]);tt(this,"rainAmount",0);tt(this,"lastWeather",-1);tt(this,"time",0);tt(this,"flash",0);tt(this,"flashLight",0);tt(this,"nextThunder",20);tt(this,"lastStep",0);tt(this,"devSpeed",1);tt(this,"devRain",null);tt(this,"devSpawn",!1);tt(this,"noclip",!1);tt(this,"ghost",!1);tt(this,"ghostY",dn);tt(this,"flying",{up:!1,down:!1});tt(this,"statsOn",!1);tt(this,"panelOpen",!1);tt(this,"lookingAtClock",!1);tt(this,"showcase",!1);tt(this,"place","park");tt(this,"steam",[]);tt(this,"setOpenSign",()=>{});tt(this,"signOpen",!0);tt(this,"statsClock",0);tt(this,"frames",0);tt(this,"lastSkyMinute",-1);tt(this,"observer");tt(this,"offs",[]);tt(this,"frame",0);tt(this,"last",0);tt(this,"destroyed",!1);tt(this,"yaw",Do.yaw);tt(this,"pitch",-.12);tt(this,"at",{x:Do.x,z:Do.z});tt(this,"keys",{forward:!1,back:!1,left:!1,right:!1});tt(this,"dragging",!1);tt(this,"paused",!1);tt(this,"aimed",null);tt(this,"queue",new qg);tt(this,"customers",new Map);tt(this,"dineIn",new Nl("park"));tt(this,"diners",new Map);tt(this,"decided",new WeakSet);tt(this,"nextOrder",0);tt(this,"frontOrderId",null);tt(this,"clock",Zi);tt(this,"lastClockMinute",-1);tt(this,"lastPatience","");tt(this,"closed",!1);tt(this,"setWallClock",()=>{});tt(this,"setDoor",()=>{});tt(this,"manager");tt(this,"managerDone",!1);tt(this,"knocking",!1);tt(this,"doorTarget",0);tt(this,"doorAmount",0);tt(this,"lastAnchor","");tt(this,"walkClock",0);tt(this,"lensOn",!1);tt(this,"lockUnavailable",typeof document<"u"&&!("requestPointerLock"in HTMLElement.prototype));tt(this,"freeLook",!1);tt(this,"lensAmount",0);tt(this,"lastCards","");tt(this,"tourView",null);tt(this,"tourTarget",null);tt(this,"tourReturning",!1);tt(this,"allOrders");tt(this,"orders");tt(this,"loop",t=>{if(this.destroyed)return;const e=Math.min((t-this.last)/1e3,.1);this.last=t,this.step(e),this.frame=requestAnimationFrame(this.loop)});this.parent=t,this.bridge=e,this.managerDone=i.managerDone??!1,this.allOrders=i.orders,this.orders=i.orders.filter(c=>!i.handled.includes(c.id)),this.clock=Math.max(Zi,i.clock),this.showers=__(Bo(i.orders.map(c=>c.id).join("|")),i.forceRain),this.renderer=new ag({antialias:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=wi,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,Cx)),this.renderer.domElement.className="truck-canvas",this.renderer.info.autoReset=!1,t.appendChild(this.renderer.domElement),this.scene.background=Bn("peach"),this.scene.fog=new Za(Bn("lilac"),18,80),this.scene.add(this.ambient,this.sun),this.veil.position.z=-.1,this.veil.renderOrder=999,this.veil.frustumCulled=!1,this.camera.add(this.veil),this.scene.add(this.camera);const s=new Ll(16777215,.15*Math.PI);s.position.set(3,4,8),this.scene.add(s),this.inside.position.set(0,je.height-.15,0),this.scene.add(this.inside);const r=z_();this.setWallClock=r.userData.setClock,this.setWallClock(this.clock),this.setDoor=r.userData.setDoor,this.manager=k_(),this.manager.position.set(je.length/2+.42,0,.05),this.manager.rotation.y=Math.PI/2,this.manager.visible=!1,this.place=i.place??"park",this.dineIn=new Nl(this.place);const o=lx(this.place);this.setSky=o.userData.setSky,this.updatePlace=o.userData.update;const a=fx();this.steam=a.userData.steam??[],this.setOpenSign=a.userData.setOpen??(()=>{}),this.scene.add(r,a,o,this.manager,this.rain.group),this.applySky(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.resize(),this.bindInput(),this.offs.push(e.on("serve",()=>this.queue.serveFront()),e.on("pause",c=>this.setPaused(c)),e.on("lens",c=>{this.lensOn=c}),e.on("door",c=>this.doorTarget=c?1:0),e.on("tour",c=>this.setTour(c)),e.on("snapshotRequest",()=>this.bridge.emit("snapshots",this.snapshots())),e.on("lock",()=>this.lockMouse()),e.on("dev",c=>this.devCommand(c)),e.on("showcase",c=>this.showcase=c),e.on("managerDone",()=>{this.managerDone=!0,this.knocking=!1})),this.paused=e.last("pause")??!1,this.lensOn=e.last("lens")??!1,this.loop(performance.now())}setFilmOffset(t,e=!1){if(t===this.filmOffset&&!e)return;this.filmOffset=t;const i=Math.max(1,this.parent.clientWidth),s=Math.max(1,this.parent.clientHeight);t===0?this.camera.clearViewOffset():this.camera.setViewOffset(i,s,-t*i,0,i,s)}resize(){const t=Math.max(1,this.parent.clientWidth),e=Math.max(1,this.parent.clientHeight);this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.setFilmOffset(this.filmOffset,!0),this.camera.updateProjectionMatrix();const i=this.renderer.getPixelRatio();this.look.setSize(Math.round(t*i),Math.round(e*i),i)}bindInput(){const t=this.renderer.domElement,e={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},i=h=>f=>{if(this.paused||this.panelOpen)return;h&&f.code!=="Escape"&&!this.lockUnavailable&&document.pointerLockElement!==t&&this.lockMouse();const d=e[f.code];d?(this.keys[d]=h,f.preventDefault()):this.ghost&&(f.code==="Space"||f.code==="ShiftLeft"||f.code==="ShiftRight")?(this.flying[f.code==="Space"?"up":"down"]=h,f.preventDefault()):h&&f.code==="KeyE"&&!this.ghost?this.use():h&&f.code==="KeyL"&&!f.repeat&&this.bridge.emit("lensKey",!0)},s=i(!0),r=i(!1);window.addEventListener("keydown",s),window.addEventListener("keyup",r);const o=h=>{if(this.paused||this.panelOpen)return;const f=this.lockUnavailable&&h.target===t||this.freeLook;(document.pointerLockElement===t||this.dragging||f)&&(this.yaw-=h.movementX*$l,this.pitch=Math.max(-jl,Math.min(jl,this.pitch-h.movementY*$l)))},a=h=>{if(!(this.paused||this.panelOpen)){if(document.pointerLockElement===t){this.use();return}if(h.preventDefault(),!this.lockUnavailable){this.lockMouse();return}this.dragging=!0,this.use()}},c=()=>this.dragging=!1,l=()=>{const h=document.pointerLockElement===t;if(h&&this.setFreeLook(!1),h&&this.paused){document.exitPointerLock();return}this.bridge.emit("locked",h)},u=()=>{this.lockUnavailable||this.lockRefused()};document.addEventListener("pointerlockerror",u),t.addEventListener("mousedown",a),window.addEventListener("mouseup",c),window.addEventListener("mousemove",o),document.addEventListener("pointerlockchange",l),this.offs.push(()=>{window.removeEventListener("keydown",s),window.removeEventListener("keyup",r),t.removeEventListener("mousedown",a),window.removeEventListener("mouseup",c),window.removeEventListener("mousemove",o),document.removeEventListener("pointerlockchange",l),document.removeEventListener("pointerlockerror",u)})}lockMouse(){var e,i;if(this.lockUnavailable||document.pointerLockElement===this.renderer.domElement)return;const t=s=>{const r=s instanceof Error||s instanceof DOMException?s.name:"";r==="WrongDocumentError"||r==="NotSupportedError"?this.lockUnavailable=!0:this.lockRefused()};try{const s=(i=(e=this.renderer.domElement).requestPointerLock)==null?void 0:i.call(e);s instanceof Promise&&s.catch(t)}catch(s){t(s)}}lockRefused(){!this.paused&&!this.panelOpen&&!this.destroyed&&this.setFreeLook(!0),this.bridge.emit("lockFailed",!0)}setFreeLook(t){this.freeLook=t,this.renderer.domElement.classList.toggle("truck-canvas-free-look",t)}setPaused(t){const e=this.paused&&!t;this.paused=t,e&&this.lockMouse(),this.keys={forward:!1,back:!1,left:!1,right:!1},this.dragging=!1,t&&this.setFreeLook(!1),t&&document.pointerLockElement&&document.exitPointerLock()}use(){!this.paused&&this.aimed&&this.bridge.emit("use",this.aimed)}devCommand(t){switch(t.cmd){case"clock":{this.clock=Math.min(rn,Math.max(this.clock,t.minutes)),this.lastSkyMinute=-1,this.lastClockMinute=Math.floor(this.clock),this.setWallClock(this.clock),this.bridge.emit("clock",Math.floor(this.clock));break}case"speed":this.devSpeed=Math.max(0,t.factor);break;case"rain":this.devRain=t.amount;break;case"spawn":this.devSpawn=!0;break;case"knock":!this.managerDone&&!this.knocking&&(this.knocking=!0,this.bridge.emit("knock",!0));break;case"ghost":this.ghost=t.on,this.noclip=t.on,this.ghostY=dn,this.flying={up:!1,down:!1},t.on||(this.at=Io(this.at,this.yaw,{forward:!1,back:!1,left:!1,right:!1},0));break;case"noclip":this.noclip=t.on||this.ghost,t.on||(this.at=Io(this.at,this.yaw,{forward:!1,back:!1,left:!1,right:!1},0));break;case"stats":this.statsOn=t.on;break;case"panel":this.panelOpen=t.open,this.keys={forward:!1,back:!1,left:!1,right:!1},t.open?(this.setFreeLook(!1),document.pointerLockElement&&document.exitPointerLock()):this.lockMouse();break}}devStats(t){if(!this.statsOn||(this.frames++,this.statsClock+=t,this.statsClock<.5))return;const e=this.renderer.info;this.bridge.emit("devStats",{fps:Math.round(this.frames/this.statsClock),drawCalls:e.render.calls,triangles:e.render.triangles,geometries:e.memory.geometries,textures:e.memory.textures,clock:this.clock,speed:this.devSpeed,rain:this.rainAmount,rainForced:this.devRain!==null,queue:this.queue.line.length,ordersLeft:this.orders.length-this.nextOrder,knocking:this.knocking,managerDone:this.managerDone,noclip:this.noclip,ghost:this.ghost,position:{x:Math.round(this.at.x*10)/10,z:Math.round(this.at.z*10)/10}}),this.frames=0,this.statsClock=0}applySky(){var o,a;const t=Math.floor(this.clock);if(t===this.lastSkyMinute)return;this.lastSkyMinute=t;const e=bx(this.clock);this.scene.background.set(e.sky),(o=this.scene.fog)==null||o.color.set(e.sky);const i=this.rainAmount;this.scene.background.lerp(Rx,i*.6),(a=this.scene.fog)==null||a.color.copy(this.scene.background);const s=this.scene.fog;s.near=18-i*10,s.far=80-i*35,this.ambient.intensity=(e.ambient*(1-i*.2)+this.flashLight*.9)*Math.PI,this.sun.color.set(e.sunColour),this.sun.intensity=e.sunLight*(1-i*.6)*Math.PI;const r=Math.max(e.elevation,5)*Math.PI/180;this.sun.position.set(e.across*10,Math.sin(r)*10,-Math.cos(r)*10),this.inside.intensity=Math.max(e.lamps,i*.5)*1.6*Math.PI,this.setSky(e)}updateWeather(t){this.time+=t;const e=this.devRain??x_(this.showers,this.clock);this.rainAmount+=(e-this.rainAmount)*Math.min(1,t*.8),(Math.abs(this.rainAmount-this.lastWeather)>.02||e===0&&this.rainAmount<.005&&this.lastWeather!==0)&&(e===0&&this.rainAmount<.005&&(this.rainAmount=0),this.lastWeather=this.rainAmount,this.lastSkyMinute=-1,this.bridge.emit("weather",this.rainAmount)),this.rain.update(this.time,this.rainAmount,this.renderer.getPixelRatio()),this.updatePlace(this.time,this.rainAmount),!this.paused&&this.rainAmount>.65&&(this.nextThunder-=t,this.nextThunder<=0&&(this.flash=1,this.nextThunder=18+Math.random()*30,this.bridge.emit("thunder",!0))),this.flash>0&&(this.flash=Math.max(0,this.flash-t*2.5),this.flashLight=this.flash*(Math.sin(this.flash*30)>-.3?1:.3),this.lastSkyMinute=-1)}cameraPose(){const t=new mn().setFromQuaternion(this.camera.quaternion,"YXZ");return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z,yaw:t.y,pitch:t.x}}playerPose(){return{x:this.at.x,y:dn,z:this.at.z,yaw:this.yaw,pitch:this.pitch}}setTour(t){const e=t?Ql(t):null,i=e?{...e,pitch:e.pitch-.06}:null;i?(this.tourView??(this.tourView=this.showcase?this.cameraPose():this.playerPose()),this.tourTarget=i,this.tourReturning=!1):this.tourView&&this.showcase?(this.tourView=null,this.tourTarget=null,this.tourReturning=!1):this.tourView&&(this.tourTarget=this.playerPose(),this.tourReturning=!0)}updateTour(t){if(!this.tourView||!this.tourTarget)return;const e=1-Math.exp(-t*4.5),i=this.tourView,s=this.tourTarget;i.x+=(s.x-i.x)*e,i.y+=(s.y-i.y)*e,i.z+=(s.z-i.z)*e,i.yaw+=th(i.yaw,s.yaw)*e,i.pitch+=(s.pitch-i.pitch)*e;const r=Math.hypot(s.x-i.x,s.z-i.z)<.01&&Math.abs(th(i.yaw,s.yaw))<.01;this.tourReturning&&r&&(this.tourView=null,this.tourTarget=null,this.tourReturning=!1)}snapshots(){const t={},e=this.renderer.domElement,i=document.createElement("canvas");i.width=320,i.height=200;const s=i.getContext("2d");if(!s)return t;const r=this.lensAmount;this.look.setLens(0);const o=this.manager.visible;this.manager.visible=!1;const a=this.camera.fov;this.camera.fov=Lx,this.camera.updateProjectionMatrix();for(const c of Hh){const l=Ql(c.object);this.camera.position.set(l.x,l.y,l.z),this.camera.rotation.set(l.pitch,l.yaw,0,"YXZ"),this.camera.updateMatrixWorld(),this.look.render(this.renderer,this.scene,this.camera);const u=Math.min(e.width,e.height*i.width/i.height),h=u*i.height/i.width;s.drawImage(e,(e.width-u)/2,(e.height-h)/2,u,h,0,0,i.width,i.height),t[c.object]=i.toDataURL("image/jpeg",.85)}return this.look.setLens(r),this.manager.visible=o,this.camera.fov=a,this.camera.updateProjectionMatrix(),t}step(t){const e=this.paused?0:t;if(this.at=Io(this.at,this.yaw,this.keys,e,this.noclip),this.ghost){const d=(this.flying.up?1:0)-(this.flying.down?1:0);this.ghostY=Math.max(.3,Math.min(40,this.ghostY+d*4*e))}this.devStats(t);const i=Object.values(this.keys).some(Boolean)&&e>0;this.walkClock+=e;const s=i?Math.sin(this.walkClock*9)*.025:0,r=Math.floor(this.walkClock*9/Math.PI);i&&r!==this.lastStep&&this.bridge.emit("step",!0),this.lastStep=r,this.updateTour(t);const o=this.tourView&&!this.tourReturning?Px:Jl;Math.abs(this.camera.fov-o)>.05&&(this.camera.fov+=(o-this.camera.fov)*(1-Math.exp(-t*4.5)),this.camera.updateProjectionMatrix()),this.steam.forEach((d,_)=>{const g=(this.time*.35+_/3)%1;d.position.y=je.height+1.6+g*.9,d.scale.setScalar(.7+g*.6)});const a=this.showcase&&!this.tourView;if(this.setFilmOffset(a&&this.parent.clientWidth>=800?.17:0),this.veil.material.opacity=0,a){const d=m_(this.time);this.camera.position.set(d.at.x,d.at.y,d.at.z),this.camera.lookAt(d.look.x,d.look.y,d.look.z),this.veil.material.opacity=d.dark*.92}else this.tourView?(this.camera.position.set(this.tourView.x,this.tourView.y,this.tourView.z),this.camera.rotation.set(this.tourView.pitch,this.tourView.yaw,0,"YXZ")):(this.camera.position.set(this.at.x,this.ghost?this.ghostY:dn+s,this.at.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ"));const c={x:this.at.x,y:dn,z:this.at.z},l=this.paused||this.ghost?null:Qg(c,Il(this.yaw,this.pitch));l!==this.aimed&&(this.aimed=l,this.bridge.emit("hover",l));const u=!this.paused&&!this.ghost&&!this.tourView&&Ax(c,Il(this.yaw,this.pitch),Tx,5);u!==this.lookingAtClock&&(this.lookingAtClock=u,this.bridge.emit("lookClock",u)),this.updateCustomers(e);const h=t/Dx;this.lensAmount=Math.min(1,Math.max(0,this.lensAmount+(this.lensOn?h:-h))),this.look.setLens(this.lensAmount),this.doorAmount=Math.min(1,Math.max(0,this.doorAmount+(this.doorTarget?1:-1)*t*2.2)),this.setDoor(this.doorAmount,this.knocking&&this.doorAmount===0?this.walkClock:void 0),this.manager.visible=this.knocking&&this.doorAmount>.02;const f=this.clock<rn;f!==this.signOpen&&(this.signOpen=f,this.setOpenSign(f)),this.updateWeather(t),this.applySky(),this.renderer.info.reset(),this.look.render(this.renderer,this.scene,this.camera),this.emitAnchor(),this.emitLensCards()}updateClock(t){if(t<=0||this.clock>=rn)return 0;const e=this.queue.line.length===0,i=Math.min(rn-this.clock,t*nu*(e?iu:1)*this.devSpeed);this.clock+=i;const s=Math.floor(this.clock);return s!==this.lastClockMinute&&(this.lastClockMinute=s,this.setWallClock(this.clock),this.bridge.emit("clock",s)),i}updateDiners(t,e){const i=Vh(this.place);for(const s of[...this.queue.leaving]){if(s.walkOff!=="on"||s.x<i.at||this.decided.has(s))continue;this.decided.add(s);const r=this.customers.get(s),o=Bo(`${s.orderId}:eat-in`)%1e3/1e3,a=!!(r!=null&&r.hipY)&&this.clock<rn-30,c=r?this.dineIn.tryToSit(s.orderId,o,a):null;!c||!r||(this.queue.release(s),this.customers.delete(s),this.diners.set(c,{model:r,cup:null}))}for(const s of this.dineIn.update(t,e)){const r=this.diners.get(s);if(this.diners.delete(s),!r)continue;r.cup&&this.scene.remove(r.cup),this.resetPose(r.model);const o=this.queue.walkOn(s.orderId,i.at);this.decided.add(o),this.customers.set(o,r.model)}for(const[s,r]of this.diners){const{model:o}=r;if(s.state==="sitting"){const u=s.seat,h=o.hipY??.86,f=u.height+.03;o.root.position.set(u.x,L+f-h,u.z);const d=Math.atan2(Math.sin(u.yaw-o.root.rotation.y),Math.cos(u.yaw-o.root.rotation.y));o.root.rotation.y+=d*Math.min(1,t*10);const _=Math.max(1,Math.acos(Math.min(1,f/h)));o.legs[0].rotation.x=_,o.legs[1].rotation.x=_;const g=Math.max(0,Math.sin(this.walkClock*.9+u.x*3)-.85)/.15;o.arms[0].rotation.x=.55+g*1.1,o.arms[1].rotation.x=.4,!r.cup&&u.cup&&(r.cup=this.takeawayCup(),r.cup.position.set(u.cup.x,L+u.cup.y,u.cup.z),this.scene.add(r.cup));continue}const a=Gh(s.path,s.walked);o.root.position.set(a.x,L,a.z);const c=Math.atan2(Math.sin(a.yaw-o.root.rotation.y),Math.cos(a.yaw-o.root.rotation.y));o.root.rotation.y+=c*Math.min(1,t*8);const l=Math.sin(this.walkClock*8+a.x)*.55;o.legs[0].rotation.x=l,o.legs[1].rotation.x=-l,o.arms[0].rotation.x=-l*.8,o.arms[1].rotation.x=l*.8,r.cup&&s.state==="leaving"&&(this.scene.remove(r.cup),r.cup=null)}}resetPose(t){t.root.position.y=L;for(const e of[...t.legs,...t.arms])e.rotation.x=0}takeawayCup(){const t=new Pt,e=new Mt(new mt(.04,.032,.11,8),new Ir({color:Bn("white"),flatShading:!0}));e.position.y=.055;const i=new Mt(new mt(.0395,.035,.035,8),new Ir({color:Bn("red"),flatShading:!0}));i.position.y=.05,i.scale.setScalar(1.03);const s=new Mt(new mt(.043,.043,.015,8),new Ir({color:Bn("ink"),flatShading:!0}));return s.position.y=.117,t.add(e,i,s),t}updateCustomers(t){const e=this.updateClock(t),i=this.orders[this.nextOrder],s=this.devSpawn||this.clock>=su(this.allOrders.indexOf(i));if(i&&this.clock<rn&&s&&this.queue.canJoin()&&t>0){this.devSpawn=!1;const h=this.orders[this.nextOrder++],f=this.queue.join(h.id);if(f){this.bridge.emit("arrive",!0);const d=Xh(h.look,Bo(h.id));this.scene.add(d.root),this.customers.set(f,d)}}for(const h of[...this.queue.line])this.ghost||(h.waited+=e,h.waited>=mc&&(this.queue.giveUp(h),this.bridge.emit("gaveUp",h.orderId)));for(const h of this.queue.update(t)){const f=this.customers.get(h);f&&this.scene.remove(f.root),this.customers.delete(h)}this.updateDiners(t,e);for(const[h,f]of this.customers){const d=No(h.x,this.place),_=h.state!=="waiting";f.root.position.set(d.x,L,d.z);const g=_?d.yaw:e_,m=Math.atan2(Math.sin(g-f.root.rotation.y),Math.cos(g-f.root.rotation.y));f.root.rotation.y+=m*Math.min(1,t*8);const p=_?Math.sin(this.walkClock*8+d.x)*.55:0;if(f.legs[0].rotation.x=p,f.legs[1].rotation.x=-p,f.arms[0].rotation.x=-p*.8,f.arms[1].rotation.x=p*.8,f.card){const v=Math.atan2(this.camera.position.x-d.x,this.camera.position.z-d.z);f.card.mesh.rotation.y=v-f.root.rotation.y;const M=_&&Math.sin(this.walkClock*8+d.x)>0?1:0,x=f.card.mesh.material;x.map!==f.card.frames[M]&&(x.map=f.card.frames[M],x.needsUpdate=!0),f.card.mesh.position.y=.855+(_?Math.abs(Math.sin(this.walkClock*8+d.x))*.05:0)}}this.ghost&&this.queue.front()&&this.queue.serveFront();const r=this.queue.front(),o=(r==null?void 0:r.orderId)??null;o!==this.frontOrderId&&(this.frontOrderId=o,this.bridge.emit("front",r?{orderId:r.orderId}:null));const a=r?{orderId:r.orderId,left:Math.max(0,1-r.waited/mc)}:null,c=a?`${a.orderId}:${a.left.toFixed(2)}`:"";c!==this.lastPatience&&(this.lastPatience=c,this.bridge.emit("patience",a));const u=(this.clock>=rn||this.nextOrder>=this.orders.length)&&this.queue.line.length===0;!this.ghost&&!this.managerDone&&!this.knocking&&this.clock<rn&&(this.clock>=ru||u)&&(this.knocking=!0,this.bridge.emit("knock",!0)),this.clock>=rn&&this.knocking&&this.doorTarget===0&&(this.knocking=!1),!this.closed&&u&&(this.managerDone||this.clock>=rn)&&(this.closed=!0,this.bridge.emit("closed",!0))}emitAnchor(){const t=this.queue.front();let e=null;if(t){const s=No(t.x,this.place),r=new R(s.x,L+1.95,s.z).project(this.camera);r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1&&(e={x:(r.x+1)/2,y:(1-r.y)/2})}const i=e?`${e.x.toFixed(3)},${e.y.toFixed(3)}`:"";i!==this.lastAnchor&&(this.lastAnchor=i,this.bridge.emit("anchor",e))}emitLensCards(){const t=[];if(this.lensAmount>.5){const i=(r,o,a,c)=>{const l=c.distanceTo(this.camera.position),u=c.clone().project(this.camera);l<=Ix&&u.z<1&&Math.abs(u.x)<1&&Math.abs(u.y)<1&&t.push({id:r,tables:o,object:a,x:(u.x+1)/2,y:(1-u.y)/2,distance:l})};for(const r of $g){const o=Jg(r.box);i(r.id,r.tables,r.object,new R(o.x,o.y,o.z))}const s=this.queue.front();if(s){const r=No(s.x,this.place);i("customer",["customers"],"tablet",new R(r.x-.55,L+1.6,r.z))}}const e=t.map(i=>`${i.id}:${i.x.toFixed(3)},${i.y.toFixed(3)}`).join("|");e!==this.lastCards&&(this.lastCards=e,this.bridge.emit("lensCards",t))}destroy(){this.destroyed=!0,cancelAnimationFrame(this.frame),this.observer.disconnect(),this.offs.forEach(t=>t()),document.pointerLockElement&&document.exitPointerLock(),this.look.dispose(),this.rain.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}export{Fx as TruckGame};
