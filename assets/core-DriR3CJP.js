const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/accumulative-shadows-component-KxoAtkYG.js","assets/index-LTUbu7LF.js","assets/index-DNI_6rJt.css","assets/orbit-controls-component-QLUd71Qs.js","assets/fly-controls-component-BEl2YJ0a.js","assets/FlyControls-CwO4xALy.js","assets/first-person-controls-component-CDB_T4Ma.js","assets/FirstPersonControls-DvqaaZ-I.js","assets/map-controls-component-ipUIAQAX.js","assets/MapControls-Co_dtydt.js","assets/pointer-lock-controls-component-BBCCM_DD.js","assets/PointerLockControls-czVBn8Nx.js"])))=>i.map(i=>d[i]);
var Tt=Object.defineProperty;var kt=(d,e,t)=>e in d?Tt(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var C=(d,e,t)=>kt(d,typeof e!="symbol"?e+"":e,t);import{z as St,V as P,B as re,T as se,Q as Ge,S as Ye,J as T,b0 as Lt,E as Mt,x as Bt,b1 as ie,b2 as Rt,b3 as G,b4 as Pt,b5 as Ve,b6 as It,b7 as $e,b8 as zt,b9 as Nt,ba as At,bb as Dt,bc as Ot,bd as Se,be as Ft,bf as Vt,bg as Wt,bh as Xe,bi as Ne,bj as Ee,f as R,R as H,H as ge,t as A,bk as pt,bl as ut,bm as V,bn as xe,bo as Ht,N as O,bp as Le,bq as jt,q as j,p as F,i as Ae,br as mt,bs as Ut,bt as ye,bu as Gt,bv as Yt,k as ft,o as K,bw as $t,bx as Xt,by as Zt,bz as Q,bA as ne,bB as De,bC as pe,bD as qt,bE as We,bF as He,bG as we,bH as Kt,bI as Ze,bJ as be,bK as qe,bL as Qt,h as ve,bM as Jt,v as he,bN as ue,bO as ei,bP as ti,bQ as ii,bR as gt,bS as si,bT as ni,bU as ri,bV as oi,bW as ai,bX as li,bY as hi,bZ as ci,b_ as di,b$ as pi,c0 as ui,c1 as mi,c2 as fi,c3 as gi,c4 as bi,c5 as vi,c6 as xi,c7 as yi,c8 as wi,c9 as Ke,ca as Ci,cb as _i,cc as Qe,cd as Je,ce as et,cf as tt,cg as it,ch as Me,ci as Ei,cj as Ti,ck as ki,cl as Si,cm as Li,cn as Mi,co as Bi,cp as Ri,cq as Pi,cr as Ii,cs as zi,ct as $}from"./index-LTUbu7LF.js";const st={type:"change"},je={type:"start"},bt={type:"end"},me=new Lt,nt=new Mt,Ni=Math.cos(70*Bt.DEG2RAD),S=new P,I=2*Math.PI,w={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Be=1e-6;class Bs extends St{constructor(e,t=null){super(e,t),this.state=w.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:re.ROTATE,MIDDLE:re.DOLLY,RIGHT:re.PAN},this.touches={ONE:se.ROTATE,TWO:se.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ge,this._lastTargetPosition=new P,this._quat=new Ge().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ye,this._sphericalDelta=new Ye,this._scale=1,this._panOffset=new P,this._rotateStart=new T,this._rotateEnd=new T,this._rotateDelta=new T,this._panStart=new T,this._panEnd=new T,this._panDelta=new T,this._dollyStart=new T,this._dollyEnd=new T,this._dollyDelta=new T,this._dollyDirection=new P,this._mouse=new T,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Di.bind(this),this._onPointerDown=Ai.bind(this),this._onPointerUp=Oi.bind(this),this._onContextMenu=Gi.bind(this),this._onMouseWheel=Wi.bind(this),this._onKeyDown=Hi.bind(this),this._onTouchStart=ji.bind(this),this._onTouchMove=Ui.bind(this),this._onMouseDown=Fi.bind(this),this._onMouseMove=Vi.bind(this),this._interceptControlDown=Yi.bind(this),this._interceptControlUp=$i.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=w.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(st),this.update(),this.state=w.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;S.copy(t).sub(this.target),S.applyQuaternion(this._quat),this._spherical.setFromVector3(S),this.autoRotate&&this.state===w.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=I:i>Math.PI&&(i-=I),s<-Math.PI?s+=I:s>Math.PI&&(s-=I),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=o!=this._spherical.radius}if(S.setFromSpherical(this._spherical),S.applyQuaternion(this._quatInverse),t.copy(this.target).add(S),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const r=S.length();o=this._clampDistance(r*this._scale);const a=r-o;this.object.position.addScaledVector(this._dollyDirection,a),this.object.updateMatrixWorld(),n=!!a}else if(this.object.isOrthographicCamera){const r=new P(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=a!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(r),this.object.updateMatrixWorld(),o=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(me.origin.copy(this.object.position),me.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(me.direction))<Ni?this.object.lookAt(this.target):(nt.setFromNormalAndCoplanarPoint(this.object.up,this.target),me.intersectPlane(nt,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>Be||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Be||this._lastTargetPosition.distanceToSquared(this.target)>Be?(this.dispatchEvent(st),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?I/60*this.autoRotateSpeed*e:I/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){S.setFromMatrixColumn(t,0),S.multiplyScalar(-e),this._panOffset.add(S)}_panUp(e,t){this.screenSpacePanning===!0?S.setFromMatrixColumn(t,1):(S.setFromMatrixColumn(t,0),S.crossVectors(this.object.up,S)),S.multiplyScalar(e),this._panOffset.add(S)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;S.copy(s).sub(this.target);let n=S.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/i.clientHeight,this.object.matrix),this._panUp(2*t*n/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,n=t-i.top,o=i.width,r=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(n/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(I*this._rotateDelta.x/t.clientHeight),this._rotateUp(I*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,n=Math.sqrt(i*i+s*s);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateEnd.set(s,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(I*this._rotateDelta.x/t.clientHeight),this._rotateUp(I*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,n=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(o,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new T,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ai(d){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(d.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(d)&&(this._addPointer(d),d.pointerType==="touch"?this._onTouchStart(d):this._onMouseDown(d),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Di(d){this.enabled!==!1&&(d.pointerType==="touch"?this._onTouchMove(d):this._onMouseMove(d))}function Oi(d){switch(this._removePointer(d),this._pointers.length){case 0:this.domElement.releasePointerCapture(d.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bt),this.state=w.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fi(d){let e;switch(d.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(d),this.state=w.DOLLY;break;case re.ROTATE:if(d.ctrlKey||d.metaKey||d.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(d),this.state=w.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(d),this.state=w.ROTATE}break;case re.PAN:if(d.ctrlKey||d.metaKey||d.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(d),this.state=w.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(d),this.state=w.PAN}break;default:this.state=w.NONE}this.state!==w.NONE&&this.dispatchEvent(je)}function Vi(d){switch(this.state){case w.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(d);break;case w.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(d);break;case w.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(d);break}}function Wi(d){this.enabled===!1||this.enableZoom===!1||this.state!==w.NONE||(d.preventDefault(),this.dispatchEvent(je),this._handleMouseWheel(this._customWheelEvent(d)),this.dispatchEvent(bt))}function Hi(d){this.enabled!==!1&&this._handleKeyDown(d)}function ji(d){switch(this._trackPointer(d),this._pointers.length){case 1:switch(this.touches.ONE){case se.ROTATE:if(this.enableRotate===!1){this.state=w.NONE;break}this._handleTouchStartRotate(d),this.state=w.TOUCH_ROTATE;break;case se.PAN:if(this.enablePan===!1){this.state=w.NONE;break}this._handleTouchStartPan(d),this.state=w.TOUCH_PAN;break;default:this.state=w.NONE}break;case 2:switch(this.touches.TWO){case se.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(d),this.state=w.TOUCH_DOLLY_PAN;break;case se.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(d),this.state=w.TOUCH_DOLLY_ROTATE;break;default:this.state=w.NONE}break;default:this.state=w.NONE}this.state!==w.NONE&&this.dispatchEvent(je)}function Ui(d){switch(this._trackPointer(d),this.state){case w.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(d),this.update();break;case w.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(d),this.update();break;case w.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(d),this.update();break;case w.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(d),this.update();break;default:this.state=w.NONE}}function Gi(d){this.enabled!==!1&&d.preventDefault()}function Yi(d){d.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $i(d){d.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Rs=[{name:"累积阴影",uuid:"accumulative-shadows-component",loader:()=>ie(()=>import("./accumulative-shadows-component-KxoAtkYG.js"),__vite__mapDeps([0,1,2])),fields:[{name:"temporal",label:"时间累积",type:"boolean",value:!0,tip:"分摊到多帧累积；关闭后场景变化时一次性累积完成"},{name:"frames",label:"累积帧数",type:"number",value:100,min:2,step:1,precision:0},{name:"limit",label:"帧数上限",type:"number",value:1/0,min:0,step:1,precision:0},{name:"blend",label:"混合窗口",type:"number",value:20,min:2,step:1,precision:0,tip:"累积帧数为 Infinity 时的滑动平均窗口"},{name:"scale",label:"平面大小",type:"number",value:20,min:0,step:.5,precision:1},{name:"opacity",label:"不透明度",type:"number",value:1,min:0,max:1,step:.01,precision:2},{name:"alphaTest",label:"阈值",type:"number",value:.9,min:0,max:2,step:.01,precision:2,tip:"亮度低于此值的区域显示为阴影"},{name:"color",label:"阴影颜色",type:"THREE.Color",value:{className:"THREE.Color",args:["#9d4b4b"]}},{name:"combineShadows",label:"合并阴影遮罩",type:"boolean",value:!1,tip:"开启后任一光源被遮挡即全暗，阴影更深更实（旧版 drei 风格）；默认逐光源遮挡，更柔和"},{name:"colorBlend",label:"颜色混合",type:"number",value:.5,min:0,max:5,step:.1,precision:1},{name:"resolution",label:"贴图分辨率",type:"number",value:1024,min:64,max:4096,step:64,precision:0},{name:"amount",label:"光源数量",type:"number",value:8,min:1,max:32,step:1,precision:0},{name:"radius",label:"抖动半径",type:"number",value:4,min:0,step:.1,precision:1},{name:"intensity",label:"光照强度",type:"number",value:Math.PI,min:0,step:.1,precision:2},{name:"ambient",label:"环境光比例",type:"number",value:.5,min:0,max:1,step:.05,precision:2,tip:"光源取半球随机位置（模拟天光）的概率"},{name:"position",label:"光源位置",type:"THREE.Vector3",value:{className:"Vector3",args:[5,5,-10]}},{name:"size",label:"阴影范围",type:"number",value:5,min:.1,step:.5,precision:1},{name:"near",label:"阴影近裁面",type:"number",value:.5,min:.01,step:.1,precision:2},{name:"far",label:"阴影远裁面",type:"number",value:500,min:1,step:10,precision:0},{name:"bias",label:"阴影偏移",type:"number",value:.001,min:-.01,max:.01,step:1e-4,precision:4},{name:"mapSize",label:"阴影贴图尺寸",type:"number",value:512,min:64,max:4096,step:64,precision:0}]},{name:"轨道控制器",uuid:"orbit-controls-component",loader:()=>ie(()=>import("./orbit-controls-component-QLUd71Qs.js"),__vite__mapDeps([3,1,2])),fields:[{name:"enabled",label:"启用",type:"boolean",value:!0},{name:"target",label:"目标位置",type:"THREE.Vector3",value:{className:"Vector3",args:[0,0,0]}},{name:"enableDamping",label:"启用阻尼",type:"boolean",value:!1},{name:"dampingFactor",label:"阻尼系数",type:"number",value:.05,min:0,max:1,step:.01,precision:2},{name:"enableZoom",label:"启用缩放",type:"boolean",value:!0},{name:"zoomSpeed",label:"缩放速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"enableRotate",label:"启用旋转",type:"boolean",value:!0},{name:"rotateSpeed",label:"旋转速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"enablePan",label:"启用平移",type:"boolean",value:!0},{name:"panSpeed",label:"平移速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"screenSpacePanning",label:"屏幕空间平移",type:"boolean",value:!0},{name:"minDistance",label:"最小距离",type:"number",value:0,min:0,step:.1,precision:1},{name:"maxDistance",label:"最大距离",type:"number",value:1/0,min:0,step:.1,precision:1},{name:"minPolarAngle",label:"最小极角",type:"number",value:0,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"maxPolarAngle",label:"最大极角",type:"number",value:Math.PI,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"minAzimuthAngle",label:"最小方位角",type:"number",value:-1/0,step:1,precision:2,unit:"degree"},{name:"maxAzimuthAngle",label:"最大方位角",type:"number",value:1/0,step:1,precision:2,unit:"degree"},{name:"autoRotate",label:"自动旋转",type:"boolean",value:!1},{name:"autoRotateSpeed",label:"自动旋转速度",type:"number",value:2,step:.1,precision:1}]},{name:"飞行控制器",uuid:"fly-controls-component",loader:()=>ie(()=>import("./fly-controls-component-BEl2YJ0a.js"),__vite__mapDeps([4,1,2,5])),fields:[{name:"movementSpeed",label:"移动速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"rollSpeed",label:"翻滚速度",type:"number",value:.005,min:0,step:.001,precision:3},{name:"dragToLook",label:"拖拽视角",type:"boolean",value:!1},{name:"autoForward",label:"自动前进",type:"boolean",value:!1}]},{name:"第一人称控制器",uuid:"first-person-controls-component",loader:()=>ie(()=>import("./first-person-controls-component-CDB_T4Ma.js"),__vite__mapDeps([6,1,2,7])),fields:[{name:"movementSpeed",label:"移动速度",type:"number",value:1,min:0,step:1,precision:1},{name:"lookSpeed",label:"视角速度",type:"number",value:.005,min:0,step:.001,precision:3},{name:"dampingFactor",label:"阻尼系数",type:"number",value:.1,min:0,max:1,step:.01,precision:2},{name:"lookVertical",label:"允许垂直视角",type:"boolean",value:!0},{name:"autoForward",label:"自动前进",type:"boolean",value:!1},{name:"heightSpeed",label:"高度影响速度",type:"boolean",value:!1},{name:"heightCoef",label:"高度系数",type:"number",value:1,min:0,step:.1,precision:1},{name:"heightMin",label:"最小高度",type:"number",value:0,step:.1,precision:1},{name:"heightMax",label:"最大高度",type:"number",value:1,step:.1,precision:1},{name:"constrainVertical",label:"限制垂直角度",type:"boolean",value:!1},{name:"verticalMin",label:"最小垂直角",type:"number",value:0,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"verticalMax",label:"最大垂直角",type:"number",value:0,min:0,max:180,step:1,precision:2,unit:"degree"}]},{name:"地图控制器",uuid:"map-controls-component",loader:()=>ie(()=>import("./map-controls-component-ipUIAQAX.js"),__vite__mapDeps([8,1,2,9])),fields:[{name:"enabled",label:"启用",type:"boolean",value:!0},{name:"target",label:"目标位置",type:"THREE.Vector3",value:{className:"Vector3",args:[0,0,0]}},{name:"enableDamping",label:"启用阻尼",type:"boolean",value:!1},{name:"dampingFactor",label:"阻尼系数",type:"number",value:.05,min:0,max:1,step:.01,precision:2},{name:"enableZoom",label:"启用缩放",type:"boolean",value:!0},{name:"zoomSpeed",label:"缩放速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"enableRotate",label:"启用旋转",type:"boolean",value:!0},{name:"rotateSpeed",label:"旋转速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"enablePan",label:"启用平移",type:"boolean",value:!0},{name:"panSpeed",label:"平移速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"screenSpacePanning",label:"屏幕空间平移",type:"boolean",value:!1},{name:"minDistance",label:"最小距离",type:"number",value:0,min:0,step:.1,precision:1},{name:"maxDistance",label:"最大距离",type:"number",value:1/0,min:0,step:.1,precision:1},{name:"minPolarAngle",label:"最小极角",type:"number",value:0,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"maxPolarAngle",label:"最大极角",type:"number",value:180,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"minAzimuthAngle",label:"最小方位角",type:"number",value:-1/0,step:1,precision:2,unit:"degree"},{name:"maxAzimuthAngle",label:"最大方位角",type:"number",value:1/0,step:1,precision:2,unit:"degree"},{name:"autoRotate",label:"自动旋转",type:"boolean",value:!1},{name:"autoRotateSpeed",label:"自动旋转速度",type:"number",value:2,step:.1,precision:1}]},{name:"指针锁定控制器",uuid:"pointer-lock-controls-component",loader:()=>ie(()=>import("./pointer-lock-controls-component-BBCCM_DD.js"),__vite__mapDeps([10,1,2,11])),fields:[{name:"minPolarAngle",label:"最小极角",type:"number",value:0,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"maxPolarAngle",label:"最大极角",type:"number",value:180,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"pointerSpeed",label:"指针速度",type:"number",value:1,min:0,step:.1,precision:1}]}];class Xi{constructor(e,t){C(this,"uuid");C(this,"script");C(this,"name");this.script=e,this.name="script",this.uuid=t}dispose(){this.script=""}}const _e=class _e extends Rt{constructor(){super(...arguments);C(this,"type",G.Script)}static isFileType(t){return this.compatibles.some(i=>i.type===t)}static async loadAsync(t){const i=await Pt(t);if(!i)throw new Error(`File with uuid ${t} not found`);if(!this.isFileType(i.type))throw new Error(`Unknown type ${i==null?void 0:i.type}`);let s;switch(i.type){case"js":{const n=await fetch(i.file).then(o=>o.text());s=new Xi(n,t);break}default:throw new Error(`Unkown type ${i.type}`)}return s.name=i.name,new _e(s,t)}dispose(){var t,i;(i=(t=this.source).dispose)==null||i.call(t)}};C(_e,"compatibles",Object.freeze([{type:"js",exts:"js"}]));let Oe=_e;class Ps{constructor(e){C(this,"core");C(this,"_inspector",!0);this.core=e}get render(){return this.core.render}get inspector(){return this._inspector}set inspector(e){this._inspector=e,this.core.render.setInspectorVisible(e)}get bloomEnable(){return this.core.render.pipeline.outputNode===this.core.render.bloomOutput}set bloomEnable(e){const t=this.core.render;t.pipeline.outputNode=e?t.bloomOutput:t.sceneOutput,t.pipeline.needsUpdate=!0}get bloomStrength(){return this.core.render.bloomPass.strength.value}set bloomStrength(e){this.core.render.bloomPass.strength.value=e}get bloomRadius(){return this.core.render.bloomPass.radius.value}set bloomRadius(e){this.core.render.bloomPass.radius.value=e}get bloomThreshold(){return this.core.render.bloomPass.threshold.value}set bloomThreshold(e){this.core.render.bloomPass.threshold.value=e}}class Is extends Ve{constructor(e){super(),this.context=e}async build(e){const t=await this.restoreAssets(e.assets);this.restoreAssetsValues(e.assets,t),this.prewarmAudio(t);const i=this.restoreObjects(e.objects);this.restoreObjectsValues(e.objects,i),this.restoreSceneValues(e.scene),this.restoreConfigValues(e.config)}async restoreAssets(e){const t=e.map(s=>this.restoreAsset(s)),i=await Promise.all(t);return this.emit("loadAssets",i),i}async restoreAsset(e,t){const{type:i,uuid:s,meta:n,children:o}=e;let r;switch(i){case G.Folder:{r=Ot.create(void 0,s),this.emit("loadAsset",r);for(const a of o||[])await this.restoreAsset(a,r);break}case G.Material:{r=Dt.create(n.type,s),this.emit("loadAsset",r);break}case G.Geometry:{r=At.create(n.type,s),this.emit("loadAsset",r);break}case G.Texture:{r=await Nt.loadAsync(s),this.emit("loadAsset",r);break}case G.Model:{r=await zt.loadAsync(s),this.emit("loadAsset",r);break}case G.Script:{r=await Oe.loadAsync(s),this.emit("loadAsset",r);break}case G.Audio:{r=await $e.loadAsync(s),this.emit("loadAsset",r);break}case G.Video:{r=await It.loadAsync(s),this.emit("loadAsset",r);break}default:throw new Error(`Unsupported asset type: ${i}`)}return t==null||t.add(r),r}restoreAssetsValues(e,t){for(let i=0;i<t.length;i++){const s=t[i],n=e[i];!s||!n||(this.restoreValues(n.meta,s.source),s.children&&n.children&&this.restoreAssetsValues(n.children,s.children))}}prewarmAudio(e){for(const t of e)t.traverse(i=>{!(i instanceof $e)||i.source.loadMode!=="decompressOnLoad"||i.source.getBuffer().catch(s=>{console.warn(`Failed to prewarm audio: ${i.name}`,s)})})}restoreObjects(e){const t=e.map(i=>this.restoreObject(i)).filter(i=>i!==void 0);return this.emit("loadObjects",t),t}restoreObject(e,t){const{uuid:i,type:s,children:n=[]}=e;let o;if(s==="Model"){const r=e,a=this.context.getAsset(r.instance);if(!a){this.emit("error",`Asset with uuid ${r.instance} not found`),console.error(`Asset with uuid ${r.instance} not found`);return}o=a.create(i),this.emit("loadObject",o);for(const l in r.inserts){const h=r.inserts[l],c=Se(o,l);h.forEach(p=>this.restoreObject(p,c))}}else{o=Ft(s,i),this.emit("loadObject",o);for(const r of n)this.restoreObject(r,o)}return t==null||t.add(o),o}restoreObjectsValues(e,t){for(let i=0;i<t.length;i++){const s=t[i],n=e[i];if(n.type==="Model"){const o=n;for(const r in o.inserts){const a=Se(s,r),l=o.inserts[r];for(const h of l){const c=a.getObjectByProperty("uuid",h.uuid);c&&this.restoreObjectsValues([h],[c])}}for(const r in o.overrides){const a=Se(s,r),l=o.overrides[r];this.restoreValues(l,a),this.emit("restoreObject",a,l)}}else this.restoreValues(n,s),this.emit("restoreObject",s,n),s.children&&n.children&&this.restoreObjectsValues(n.children,s.children)}}restoreSceneValues(e){const{scene:t}=this.context;e.fogType==="linear"?t.fog=Vt:e.fogType==="exp2"?t.fog=Wt:t.fog=null,this.restoreValues(e,t),this.emit("restoreScene",e)}restoreConfigValues(e){this.restoreValues(e,this.context.config),this.emit("restoreConfig",e)}restoreValues(e,t){const i=Object.keys(e);for(const s of i){if(!Object.prototype.hasOwnProperty.call(e,s))continue;const n=e[s];if(n!==void 0)if(typeof n=="object"){const o=Object.keys(n)[0];if(o===void 0)continue;switch(o){case"$A":{const r=this.context.getAsset(n[o]);if(!r)throw new Error(`Asset with uuid ${n[o]} not found`);t[s]=r.source;break}case"$O":{const r=this.context.getObject(n[o]);if(!r)throw new Error(`Object with uuid ${n[o]} not found`);t[s]=r;break}case"$V":{t[s].fromArray(n[o]);break}case"$C":{t[s].set(n[o]);break}default:t[s]&&this.restoreValues(n,t[s])}}else t[s]=n}}}const Re=Symbol.for("d3-core.Entity");class D extends Ve{constructor(t){super();C(this,"object");C(this,"components");C(this,"core");C(this,"_onAdded",()=>{var i;if(!this.object.parent)return;const t=(i=D.extract(this.object.parent))==null?void 0:i.core;t&&this.object.traverse(s=>{var n;return(n=D.extract(s))==null?void 0:n.attach(t)})});C(this,"_onRemoved",()=>{this.object.traverse(t=>{var i;return(i=D.extract(t))==null?void 0:i.detach()})});this.object=t,this.components=[],this.object.addEventListener("added",this._onAdded),this.object.addEventListener("removed",this._onRemoved)}addComponent(t){return this.components.push(t),this.core&&t.attach(this.core),this.emit(Xe.ComponentAdd,t),t}removeComponent(t){const i=this.components.indexOf(t);i!==-1&&(t._destroy(),this.components.splice(i,1),this.emit(Xe.ComponentRemove,t))}getComponent(t){return this.components.find(i=>i.constructor.name===t)}findComponent(t){return this.components.find(t)}destroy(){this.components.forEach(t=>t._destroy()),this.components.length=0,this.core=void 0,this.object.removeEventListener("added",this._onAdded),this.object.removeEventListener("removed",this._onRemoved),this.removeAllListeners()}attach(t){if(this.core){console.warn("Entity is already attached to a core.");return}this.core=t,this.components.forEach(i=>i.attach(t))}detach(){this.core&&(this.components.forEach(t=>t.detach()),this.core=void 0)}static from(t){let i=D.extract(t);return i||(i=new D(t),Object.defineProperty(t,Re,{value:i,enumerable:!1,configurable:!0})),i}static extract(t){return t[Re]}static destroy(t){t.traverse(i=>{const s=D.extract(i);s&&(s.destroy(),delete i[Re])})}}function zs(d,e){return D.from(d).addComponent(e)}function Ns(d,e){var t;(t=D.extract(d))==null||t.removeComponent(e)}function As(d,e){var t;return(t=D.extract(d))==null?void 0:t.getComponent(e)}function Ds(d,e){var t;return(t=D.extract(d))==null?void 0:t.findComponent(e)}const W=new xe,Zi=new T,qi=new T(1,0),Ki=new T(0,1);let Pe;const Qi=j(({input:d,threshold:e,smoothWidth:t})=>{const i=Gt(d.rgb),s=Yt(e,e.add(t),i);return ft(F(0),d,s)});class Ji extends Ee{static get type(){return"BloomNode"}constructor(e,t=1,i=0,s=0){super("vec4"),this.inputNode=e,this.strength=t.isNode?t:R(t),this.radius=i.isNode?i:R(i),this.threshold=s.isNode?s:R(s),this.smoothWidth=R(.01),this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this._resolutionScale=.5,this.highPassFn=Qi,this._renderTargetsHorizontal=[],this._renderTargetsVertical=[],this._nMips=5,this._renderTargetBright=new H(1,1,{depthBuffer:!1,type:ge}),this._renderTargetBright.texture.name="UnrealBloomPass.bright",this._renderTargetBright.texture.generateMipmaps=!1;for(let n=0;n<this._nMips;n++){const o=new H(1,1,{depthBuffer:!1,type:ge});o.texture.name="UnrealBloomPass.h"+n,o.texture.generateMipmaps=!1,this._renderTargetsHorizontal.push(o);const r=new H(1,1,{depthBuffer:!1,type:ge});r.texture.name="UnrealBloomPass.v"+n,r.texture.generateMipmaps=!1,this._renderTargetsVertical.push(r)}this._compositeMaterial=null,this._highPassFilterMaterial=null,this._separableBlurMaterials=[],this._textureNodeBright=A(this._renderTargetBright.texture),this._textureNodeBlur0=A(this._renderTargetsVertical[0].texture),this._textureNodeBlur1=A(this._renderTargetsVertical[1].texture),this._textureNodeBlur2=A(this._renderTargetsVertical[2].texture),this._textureNodeBlur3=A(this._renderTargetsVertical[3].texture),this._textureNodeBlur4=A(this._renderTargetsVertical[4].texture),this._textureOutput=pt(this,this._renderTargetsHorizontal[0].texture),this.updateBeforeType=ut.FRAME}getTextureNode(){return this._textureOutput}setResolutionScale(e){return this._resolutionScale=e,this}getResolutionScale(){return this._resolutionScale}setSize(e,t){let i=Math.floor(e*this._resolutionScale),s=Math.floor(t*this._resolutionScale);this._renderTargetBright.setSize(i,s);for(let n=0;n<this._nMips;n++)this._renderTargetsHorizontal[n].setSize(i,s),this._renderTargetsVertical[n].setSize(i,s),this._separableBlurMaterials[n].invSize.value.set(1/i,1/s),i=Math.floor(i/2),s=Math.floor(s/2)}updateBefore(e){const{renderer:t}=e;Pe=V.resetRendererState(t,Pe);const i=t.getDrawingBufferSize(Zi);this.setSize(i.width,i.height),t.setRenderTarget(this._renderTargetBright),W.material=this._highPassFilterMaterial,W.name="Bloom [ High Pass ]",W.render(t);let s=this._renderTargetBright;for(let n=0;n<this._nMips;n++)W.material=this._separableBlurMaterials[n],this._separableBlurMaterials[n].colorTexture.value=s.texture,this._separableBlurMaterials[n].direction.value=qi,t.setRenderTarget(this._renderTargetsHorizontal[n]),W.name=`Bloom [ Blur Horizontal - ${n} ]`,W.render(t),this._separableBlurMaterials[n].colorTexture.value=this._renderTargetsHorizontal[n].texture,this._separableBlurMaterials[n].direction.value=Ki,t.setRenderTarget(this._renderTargetsVertical[n]),W.name=`Bloom [ Blur Vertical - ${n} ]`,W.render(t),s=this._renderTargetsVertical[n];t.setRenderTarget(this._renderTargetsHorizontal[0]),W.material=this._compositeMaterial,W.name="Bloom [ Composite ]",W.render(t),V.restoreRendererState(t,Pe)}setup(e){const t=Ht(e.getSharedContext());this._highPassFilterMaterial=this._highPassFilterMaterial||new O,this._highPassFilterMaterial.contextNode=t,this._highPassFilterMaterial.fragmentNode=this.highPassFn({input:this.inputNode,threshold:this.threshold,smoothWidth:this.smoothWidth}),this._highPassFilterMaterial.name="Bloom_highPass",this._highPassFilterMaterial.needsUpdate=!0;const i=[6,10,14,18,22];for(let r=0;r<this._nMips;r++)this._separableBlurMaterials.push(this._getSeparableBlurMaterial(t,i[r]));const s=Le([1,.8,.6,.4,.2]),n=jt(this.bloomTintColors),o=j(()=>{const r=le(s.element(0),this.radius).mul(F(n.element(0),1)).mul(this._textureNodeBlur0),a=le(s.element(1),this.radius).mul(F(n.element(1),1)).mul(this._textureNodeBlur1),l=le(s.element(2),this.radius).mul(F(n.element(2),1)).mul(this._textureNodeBlur2),h=le(s.element(3),this.radius).mul(F(n.element(3),1)).mul(this._textureNodeBlur3),c=le(s.element(4),this.radius).mul(F(n.element(4),1)).mul(this._textureNodeBlur4);return r.add(a).add(l).add(h).add(c).mul(this.strength)});return this._compositeMaterial=this._compositeMaterial||new O,this._compositeMaterial.contextNode=t,this._compositeMaterial.fragmentNode=o(),this._compositeMaterial.name="Bloom_comp",this._compositeMaterial.needsUpdate=!0,this._textureOutput}dispose(){super.dispose();for(let e=0;e<this._renderTargetsHorizontal.length;e++)this._renderTargetsHorizontal[e].dispose();for(let e=0;e<this._renderTargetsVertical.length;e++)this._renderTargetsVertical[e].dispose();this._renderTargetBright.dispose(),this._highPassFilterMaterial!==null&&this._highPassFilterMaterial.dispose(),this._compositeMaterial!==null&&this._compositeMaterial.dispose();for(let e=0;e<this._separableBlurMaterials.length;e++)this._separableBlurMaterials[e].dispose()}_getSeparableBlurMaterial(e,t){const i=[],s=t/3;for(let g=0;g<t;g++)i.push(.39894*Math.exp(-.5*g*g/(s*s))/s);const n=i[0],o=[],r=[];for(let g=1;g<t;g+=2){const x=i[g],E=g+1<t?i[g+1]:0,k=x+E;o.push((g*x+(g+1)*E)/k),r.push(k)}const a=A(null),l=Le(o),h=Le(r),c=R(new T),p=R(new T(.5,.5)),u=Ae(),m=g=>a.sample(g),f=j(()=>{const g=m(u).rgb.mul(n).toVar();return mt({start:ye(0),end:ye(o.length),type:"int",condition:"<"},({i:x})=>{const E=h.element(x),k=p.mul(c).mul(l.element(x)),B=m(u.add(k)).rgb,L=m(u.sub(k)).rgb;g.addAssign(Ut(B,L).mul(E))}),F(g,1)}),b=new O;return b.contextNode=e,b.fragmentNode=f(),b.name="Bloom_separable",b.needsUpdate=!0,b.colorTexture=a,b.direction=p,b.invSize=c,b}}const le=j(({factor:d,radius:e})=>{const t=K(1.2).sub(d);return ft(d,t,e)},{factor:"float",radius:"float",return:"float"}),es=(d,e,t,i)=>new Ji(Ne(d),e,t,i);class vt{constructor(e,t){this.uid=e,this.cid=e.match(/^(.*):f(\d+)$/)[1],this.name=t,this.timestamp=0,this.cpu=0,this.gpu=0,this.fps=0,this.children=[],this.parent=null}}class ts extends vt{constructor(e,t,i,s){let n=t.name;n===""&&(t.isScene?n="Scene":t.isQuadMesh&&(n="QuadMesh")),super(e,n),this.scene=t,this.camera=i,this.renderTarget=s,this.isRenderStats=!0}}class is extends vt{constructor(e,t){const i=t.name||(t.isComputeNode?"Compute":"Compute Group");super(e,i),this.computeNode=t,this.isComputeStats=!0}}function rt(d){return d.renders.length>0||d.computes.length>0}class ss extends $t{constructor(){super(),this.currentFrame=null,this.currentContext=null,this.currentRender=null,this.currentCompute=null,this.currentNodes=null,this.lastFrame=null,this.frames=[],this.framesLib={},this.maxFrames=512,this._lastFinishTime=0,this._lastRenderedFinishTime=0,this._resolveTimestampPromise=null,this._rAFId=null,this.overdraw=!1,this._overdrawMaterial=null,this._renderingOverdraw=!1,this.isRendererInspector=!0}getParent(){return this.currentContext||this.getFrame()}begin(){super.begin(),this.currentFrame=this._createFrame(),this.currentContext=this.currentFrame,this.currentRender=null,this.currentCompute=null,this.currentNodes=[]}finish(){super.finish();const e=performance.now(),t=this.currentFrame;t.finishTime=e,rt(t)?(t.deltaTime=e-(this._lastRenderedFinishTime>0?this._lastRenderedFinishTime:e),this._lastRenderedFinishTime=e):t.deltaTime=e-(this._lastFinishTime>0?this._lastFinishTime:e),this.addFrame(t),this.fps=this._getFPS(),this.lastFrame=t,this.currentFrame=null,this.currentContext=null,this.currentRender=null,this.currentCompute=null,this.currentNodes=null,this._lastFinishTime=e}_renderOverdraw(){const e=this.getPrimaryPass();if(e===null)return;const t=this.getRenderer();this._overdrawMaterial===null&&(this._overdrawMaterial=new Xt({colorNode:Q(.25),blending:Zt,depthTest:!0,depthWrite:!0}));const{scene:i,camera:s}=e,n=V.resetRendererAndSceneState(t,i);t.toneMapping=ne,t.outputColorSpace=De,i.overrideMaterial=this._overdrawMaterial,this._renderingOverdraw=!0,t.render(i,s),this._renderingOverdraw=!1,V.restoreRendererAndSceneState(t,i,n)}_getFPS(){let e=0,t=0;for(let i=this.frames.length-1;i>=0;i--){const s=this.frames[i];if(rt(s)!==!1&&(e++,t+=s.deltaTime,t>=1e3))break}return t>0?e*1e3/t:0}_createFrame(){return{frameId:this.nodeFrame.frameId,resolvedCompute:!1,resolvedRender:!1,deltaTime:0,startTime:performance.now(),finishTime:0,miscellaneous:0,children:[],renders:[],computes:[]}}getPrimaryPass(){const e=this.getFrame();let t=null;for(const i of e.renders)if(i.scene.isScene===!0){t=i;break}return t}getFrame(){return this.currentFrame||this.lastFrame}getFrameById(e){return this.framesLib[e]||null}updateTabs(){}resolveFrame(){}async resolveTimestamp(){return this._resolveTimestampPromise!==null?this._resolveTimestampPromise:(this._resolveTimestampPromise=new Promise(e=>{this._rAFId=requestAnimationFrame(async()=>{this._rAFId=null;const t=this.getRenderer();if(t===null){this._resolveTimestampPromise=null,e();return}if(t.backend.hasTimestamp){if(await t.resolveTimestampsAsync(pe.COMPUTE),await t.resolveTimestampsAsync(pe.RENDER),t!==this.getRenderer()){this._resolveTimestampPromise=null,e();return}const i=t.backend.getTimestampFrames(pe.COMPUTE),s=t.backend.getTimestampFrames(pe.RENDER),n=[...new Set([...i,...s])];for(const o of n){const r=this.getFrameById(o);if(r!==null){if(r.resolvedCompute===!1)if(r.computes.length>0){if(i.includes(o)){for(const a of r.computes)t.backend.hasTimestampQuery(a.uid)?a.gpu=t.backend.getTimestamp(a.uid):(a.gpu=0,a.gpuNotAvailable=!0);r.resolvedCompute=!0}}else r.resolvedCompute=!0;if(r.resolvedRender===!1)if(r.renders.length>0){if(s.includes(o)){for(const a of r.renders)t.backend.hasTimestampQuery(a.uid)?a.gpu=t.backend.getTimestamp(a.uid):(a.gpu=0,a.gpuNotAvailable=!0);r.resolvedRender=!0}}else r.resolvedRender=!0;r.resolvedCompute===!0&&r.resolvedRender===!0&&this.resolveFrame(r)}}}else for(const i of this.frames)if(!(i.resolvedCompute===!0&&i.resolvedRender===!0||this.getFrameById(i.frameId-1)===null)){if(i.resolvedCompute===!1){for(const n of i.computes)n.gpu=0,n.gpuNotAvailable=!0;i.resolvedCompute=!0}if(i.resolvedRender===!1){for(const n of i.renders)n.gpu=0,n.gpuNotAvailable=!0;i.resolvedRender=!0}i.resolvedCompute===!0&&i.resolvedRender===!0&&this.resolveFrame(i)}this._resolveTimestampPromise=null,e()})}),this._resolveTimestampPromise)}get isAvailable(){return this.getRenderer()!==null}addFrame(e){if(this.frames.length>=this.maxFrames){const t=this.frames.shift();delete this.framesLib[t.frameId]}this.frames.push(e),this.framesLib[e.frameId]=e,this.isAvailable&&(this.updateTabs(),this.resolveTimestamp())}inspect(e){if(this.enabled===!1)return;const t=this.currentNodes;t!==null?t.push(e):qt('RendererInspector: Unable to inspect node outside of frame scope. Use "renderer.setAnimationLoop()".')}beginCompute(e,t){const i=this.getFrame();if(!i)return;const s=new is(e,t);s.timestamp=performance.now(),s.parent=this.getParent(),i.computes.push(s),s.parent.children.push(s),this.currentCompute=s,this.currentContext=s}finishCompute(){if(!this.getFrame())return;const t=this.currentCompute;t.cpu=performance.now()-t.timestamp,this.currentContext=t.parent,this.currentCompute=t.parent&&t.parent.isComputeStats?t.parent:null}beginRender(e,t,i,s){const n=this.getFrame();if(!n)return;const o=new ts(e,t,i,s);o.timestamp=performance.now(),o.parent=this.getParent(),n.renders.push(o),o.parent.children.push(o),this.currentRender=o,this.currentContext=o}finishRender(){const e=this.getFrame();if(!e)return;const t=this.currentRender;t.cpu=performance.now()-t.timestamp,this.currentContext=t.parent,this.currentRender=t.parent&&t.parent.isRenderStats?t.parent:null,this.overdraw===!0&&this._renderingOverdraw===!1&&t.parent===e&&this.getRenderer().getRenderTarget()===null&&this._renderOverdraw()}dispose(){this._rAFId!==null&&(cancelAnimationFrame(this._rAFId),this._rAFId=null),this._resolveTimestampPromise=null,this._overdrawMaterial!==null&&(this._overdrawMaterial.dispose(),this._overdrawMaterial=null),super.dispose()}}class ns{static init(e,t=null){const i=`
@scope (.three-inspector) {

	:scope {
		--profiler-background: #1e1e24f5;
		--profiler-header-background: #2a2a33aa;
		--profiler-header: #2a2a33;
		--profiler-border: #4a4a5a;
		--text-primary: #e0e0e0;
		--text-secondary: #9a9aab;
		--color-accent: #00aaff;
		--color-green: #4caf50;
		--color-yellow: #ffc107;
		--color-red: #f44336;
		--color-fps: rgb(63, 81, 181);
		--color-call: rgba(255, 185, 34, 1);
		--font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		--font-mono: 'Courier New', Courier, monospace;

		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1000;
		overflow: hidden;
		color-scheme: dark;
	}

	:scope * {
		pointer-events: auto;
	}

	.profiler-panel, .profiler-toggle, .detached-tab-panel,
	.profiler-panel *, .profiler-toggle *, .detached-tab-panel * {
		text-transform: initial;
		line-height: normal;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-tap-highlight-color: transparent;
	}

	.profiler-toggle {
		position: absolute;
		top: 15px;
		right: 15px;
		background-color: rgba(30, 30, 36, 0.85);
		border: 1px solid #4a4a5a54;
		border-radius: 12px 6px 6px 12px;
		color: var(--text-primary);
		cursor: pointer;
		z-index: 1002;
		transition: all 0.2s ease-in-out;
		/*font-size: 14px;*/
		font-size: 15px;
		backdrop-filter: blur(8px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: stretch;
		padding: 0;
		overflow: hidden;
		font-family: var(--font-family);
	}

	.profiler-toggle-graph {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		pointer-events: none;
		background: transparent;
		border: none;
		border-radius: inherit;
		opacity: 0.5;
	}

	.profiler-toggle.toggle-left {
		right: auto;
		left: 15px;
		border-radius: 6px 12px 12px 6px;
		flex-direction: row-reverse;
	}

	.profiler-toggle.toggle-left .builtin-tabs-container {
		border-right: none;
		border-left: 1px solid #262636;
	}

	.profiler-toggle:hover {
		border-color: var(--color-accent);
	}

	.profiler-toggle.panel-open .toggle-icon {
		background-color: rgba(0, 170, 255, 0.2);
		color: var(--color-accent);
	}

	.toggle-icon {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		font-size: 20px;
		transition: background-color 0.2s;
	}

	.console-badge-container {
		position: absolute;
		top: 2px;
		right: 2px;
		display: flex;
		gap: 2px;
		pointer-events: none;
	}

	.console-badge,
	.tab-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 14px;
		height: 14px;
		padding: 0 4px;
		border-radius: 7px;
		font-size: 9px;
		font-weight: bold;
		color: #ffffff;
		line-height: 1;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(0, 0, 0, 0.2);
	}

	.tab-badge-container {
		position: absolute;
		top: 1px;
		right: 3px;
		display: flex;
		gap: 2px;
		pointer-events: none;
	}

	.console-badge.error,
	.tab-badge.error {
		background-color: var(--color-red);
	}

	.console-badge.warn,
	.tab-badge.warn {
		background-color: var(--color-yellow);
		color: #111111;
	}

	.profiler-toggle:hover .toggle-icon {
		background-color: rgba(255, 255, 255, 0.05);
	}

	.profiler-toggle.panel-open:hover .toggle-icon {
		background-color: rgba(0, 170, 255, 0.3);
	}

	.toggle-separator {
		width: 1px;
		background-color: var(--profiler-border);
	}

	.toggle-text {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: baseline;
		padding: 8px 14px;
		min-width: 80px;
		justify-content: right;
	}

	.toggle-text .fps-label {
		font-size: 0.7em;
		margin-left: 10px;
		color: #999;
	}

	.builtin-tabs-container {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: stretch;
		gap: 0;
		border-right: 1px solid #262636;
		order: -1;
	}

	.builtin-tab-btn {
		background: transparent;
		border: none;
		color: var(--text-secondary);
		cursor: pointer;
		padding: 8px 14px;
		font-family: var(--font-family);
		font-size: 13px;
		font-weight: 600;
		transition: all 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 32px;
		position: relative;
	}

	.builtin-tab-btn svg {
		width: 20px;
		height: 20px;
		stroke: currentColor;
	}

	.builtin-tab-btn:hover {
		background-color: rgba(255, 255, 255, 0.08);
		color: var(--color-accent);
	}

	.builtin-tab-btn:active {
		background-color: rgba(255, 255, 255, 0.12);
	}

	.builtin-tab-btn.active {
		background-color: rgba(0, 170, 255, 0.2);
		color: var(--color-accent);
	}

	.builtin-tab-btn.active:hover {
		background-color: rgba(0, 170, 255, 0.3);
	}

	.profiler-mini-panel {
		position: absolute;
		top: 60px;
		right: 15px;
		background-color: rgba(30, 30, 36, 0.85);
		border: 1px solid #4a4a5a54;
		border-radius: 8px;
		color: var(--text-primary);
		z-index: 9999;
		backdrop-filter: blur(8px);
		box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
		font-family: var(--font-family);
		font-size: 11px;
		width: 350px;
		max-width: calc(100vw - 30px);
		min-width: 170px;
		max-height: calc(100vh - 100px);
		overflow-y: auto;
		overflow-x: hidden;
		display: none;
		opacity: 0;
		transform: translateY(-10px) scale(0.98);
		transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
					transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.profiler-mini-panel.toggle-left {
		right: auto;
		left: 15px;
	}

	.profiler-mini-panel.visible {
		display: block;
		opacity: 1;
		transform: translateY(0) scale(1);
	}

	.profiler-toggle.toggle-bottom {
		top: auto;
		bottom: 15px;
	}

	.profiler-mini-panel.toggle-bottom {
		top: auto;
		bottom: 60px;
	}

	.profiler-mini-panel::-webkit-scrollbar {
		width: 6px;
	}

	.profiler-mini-panel::-webkit-scrollbar-track {
		background: transparent;
	}

	.profiler-mini-panel::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.15);
		border-radius: 3px;
		transition: background 0.2s;
	}

	.profiler-mini-panel::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.25);
	}

	.mini-panel-content {
		padding: 0;
		font-size: 11px;
		line-height: 1.5;
		font-family: var(--font-mono);
		letter-spacing: 0.3px;
		user-select: none;
		-webkit-user-select: none;
	}

	.mini-panel-content .profiler-content {
		display: block !important;
		background: transparent;
	}

	.mini-panel-content .list-scroll-wrapper {
		max-height: calc(100vh - 120px);
		overflow-y: auto;
		overflow-x: hidden;
		width: 100%;
	}

	.mini-panel-content .list-scroll-wrapper::-webkit-scrollbar {
		width: 4px;
	}

	.mini-panel-content .list-scroll-wrapper::-webkit-scrollbar-track {
		background: transparent;
	}

	.mini-panel-content .list-scroll-wrapper::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 2px;
	}

	.mini-panel-content .list-scroll-wrapper::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.mini-panel-content .parameters {
		background: transparent;
		border: none;
		box-shadow: none;
		padding: 4px;
	}

	@media screen and (max-width: 340px) {

		.mini-panel-content .parameters {
			min-width: 0 !important;
		}

	}

	.mini-panel-content .list-container.parameters {
		padding: 2px 6px 0px 6px !important;
	}

	.mini-panel-content .list-header {
		display: none;
		padding: 2px 4px;
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.mini-panel-content .list-item {
		border-bottom: 1px solid rgba(74, 74, 90, 0.2);
		transition: background-color 0.15s;
	}

	.mini-panel-content .list-item:last-child {
		border-bottom: none;
	}

	.mini-panel-content .list-item:hover {
		background-color: rgba(255, 255, 255, 0.04);
	}

	.mini-panel-content .list-item.actionable:hover {
		background-color: rgba(255, 255, 255, 0.06);
		cursor: pointer;
	}

	.info-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.1);
		color: var(--text-secondary);
		font-size: 10px;
		font-style: italic;
		margin-left: 6px;
		cursor: help;
		position: relative;
		vertical-align: middle;
		top: -1px;
	}

	.info-icon.active {
		background-color: var(--color-accent);
		color: white;
	}

	@media (hover: hover) {
		.info-icon:hover {
			background-color: var(--color-accent);
			color: white;
		}
	}

	.info-tooltip {
		position: fixed;
		transform: translate(-50%, -100%);
		background-color: rgba(30, 30, 36, 0.95);
		border: 1px solid var(--profiler-border);
		border-radius: 6px;
		padding: 10px 14px;
		color: var(--text-primary);
		font-size: 12px;
		width: max-content;
		max-width: 250px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.2s, visibility 0.2s;
		z-index: 999999;
		font-style: normal;
		font-family: var(--font-family);
		text-align: left;
		white-space: normal;
	}

	.info-tooltip h3 {
		margin: 0 0 6px 0;
		font-size: 13px;
		color: var(--color-accent);
	}

	.info-tooltip strong {
		font-weight: 600;
		color: white;
	}

	/* Style adjustments for lil-gui look */
	.mini-panel-content .item-row {
		padding: 3px 8px;
		min-height: 24px;
	}

	.mini-panel-content .list-item-row {
		padding: 1px 4px;
		gap: 8px;
		min-height: 21px;
		align-items: center;
	}

	.mini-panel-content input[type="checkbox"] {
		width: 12px;
		height: 12px;
	}

	.mini-panel-content input[type="range"] {
		height: 18px;
	}

	.mini-panel-content .value-number input,
	.mini-panel-content .value-slider input {
		background-color: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(74, 74, 90, 0.5);
		font-size: 10px;
	}

	.mini-panel-content .value-number input:focus,
	.mini-panel-content .value-slider input:focus {
		border-color: var(--color-accent);
	}

	.mini-panel-content .value-slider {
		gap: 6px;
	}

	/* Compact nested items */
	.mini-panel-content .list-item .list-item {
		margin-left: 8px;
	}

	.mini-panel-content .list-item .list-item .item-row,
	.mini-panel-content .list-item .list-item .list-item-row {
		padding: 2px 6px;
		min-height: 22px;
	}

	/* Compact collapsible headers */
	.mini-panel-content .collapsible .item-row,
	.mini-panel-content .list-item-row.collapsible {
		padding: 2px 8px;
		font-weight: 600;
		min-height: 16px;
		display: flex;
		align-items: center;
		line-height: 1;
	}

	.mini-panel-content .collapsible-icon {
		font-size: 10px;
		width: 14px;
		height: 14px;
	}

	.mini-panel-content .param-control input[type="range"] {
		height: 12px;
		margin-top: 1px;
		padding-top: 5px;
		user-select: none;
		-webkit-user-select: none;
		outline: none;
	}

	.mini-panel-content .param-control input[type="range"]::-webkit-slider-thumb {
		width: 14px;
		height: 14px;
		margin-top: -5px;
		user-select: none;
		-webkit-user-select: none;
	}

	.mini-panel-content .param-control input[type="range"]::-moz-range-thumb {
		width: 14px;
		height: 14px;
		user-select: none;
		-moz-user-select: none;
	}

	.mini-panel-content .list-children-container {
		padding-left: 0;
	}

	.mini-panel-content .param-control input[type="number"] {
		flex-basis: 60px !important;
	}

	.mini-panel-content .param-control {
		align-items: center;
	}

	.mini-panel-content .param-control select {
		font-size: 11px;
	}

	.mini-panel-content .list-item-wrapper {
		margin-top: 0;
		margin-bottom: 0;
	}

	.profiler-panel {
		position: absolute;
		z-index: 1001 !important;
		bottom: 0;
		left: 0;
		right: 0;
		height: 350px;
		background-color: var(--profiler-background);
		backdrop-filter: blur(8px);
		border-top: 2px solid var(--profiler-border);
		color: var(--text-primary);
		display: flex;
		flex-direction: column;
		z-index: 1000;
		/*box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.5);*/
		transform: translateY(100%);
		transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.3s ease-out, width 0.3s ease-out;
		font-family: var(--font-mono);
	}

	.profiler-panel.resizing,
	.profiler-panel.dragging {
		transition: none;
	}

	.profiler-panel.visible {
		transform: translateY(0);
	}

	.profiler-panel.maximized {
		height: 100%;
		z-index: 10000 !important;
	}

	/* Position-specific styles */
	.profiler-panel.position-top {
		bottom: auto;
		top: 0;
		border-top: none;
		border-bottom: 2px solid var(--profiler-border);
		transform: translateY(-100%);
	}

	.profiler-panel.position-top.visible {
		transform: translateY(0);
	}

	.profiler-panel.position-bottom {
		/* Default position - already defined above */
	}

	.profiler-panel.position-left {
		top: 0;
		bottom: 0;
		left: 0;
		right: auto;
		width: 350px;
		height: 100%;
		border-top: none;
		border-right: 2px solid var(--profiler-border);
		transform: translateX(-100%);
	}

	.profiler-panel.position-left.visible {
		transform: translateX(0);
	}

	.profiler-panel.position-right {
		top: 0;
		bottom: 0;
		left: auto;
		right: 0;
		width: 350px;
		height: 100%;
		border-top: none;
		border-left: 2px solid var(--profiler-border);
		transform: translateX(100%);
	}

	.profiler-panel.position-right.visible {
		transform: translateX(0);
	}

	.profiler-panel.position-floating {
		border: 2px solid var(--profiler-border);
		border-radius: 8px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
		transform: none !important;
		overflow: hidden;
	}

	.profiler-panel.position-floating.visible {
		transform: none !important;
	}

	.profiler-panel.position-floating .profiler-header {
		border-radius: 6px 6px 0 0;
	}

	.profiler-panel.position-floating .panel-resizer {
		bottom: 0;
		right: 0;
		top: auto;
		left: auto;
		width: 16px;
		height: 16px;
		cursor: nwse-resize;
		border-radius: 0 0 6px 0;
	}

	.profiler-panel.position-floating .panel-resizer::after {
		content: '';
		position: absolute;
		right: 2px;
		bottom: 2px;
		width: 10px;
		height: 10px;
		background: linear-gradient(135deg, transparent 0%, transparent 45%, var(--profiler-border) 45%, var(--profiler-border) 55%, transparent 55%);
	}


	.panel-resizer {
		position: absolute;
		top: -2px;
		left: 0;
		width: 100%;
		height: 5px;
		cursor: ns-resize;
		z-index: 1001;
		touch-action: none;
	}

	.profiler-panel.position-top .panel-resizer {
		top: auto;
		bottom: -2px;
	}

	.profiler-panel.position-left .panel-resizer {
		top: 0;
		left: auto;
		right: -2px;
		width: 5px;
		height: 100%;
		cursor: ew-resize;
	}

	.profiler-panel.position-right .panel-resizer {
		top: 0;
		left: -2px;
		right: auto;
		width: 5px;
		height: 100%;
		cursor: ew-resize;
	}

	.profiler-header {
		display: flex;
		background-color: var(--profiler-header-background);
		border-bottom: 1px solid var(--profiler-border);
		flex-shrink: 0;
		justify-content: space-between;
		align-items: stretch;

		overflow-x: auto;
		overflow-y: hidden;
		width: calc(100% - 120px);
		height: 32px;
		user-select: none;
		-webkit-user-select: none;
	}

	.profiler-panel.has-horizontal-scroll .profiler-header {
		height: 38px;
	}

	/* Adjust header width based on panel position */
	.profiler-panel.position-right .profiler-header,
	.profiler-panel.position-left .profiler-header {
		width: calc(100% - 120px);
	}

	.profiler-panel.position-bottom .profiler-header,
	.profiler-panel.position-top .profiler-header {
		width: calc(100% - 120px);
	}

	/* Adjust header width when position toggle button is hidden (mobile) */
	.profiler-panel.hide-position-toggle .profiler-header {
		width: calc(100% - 80px);
	}

	/* Adjust header width when maximized (floating position toggle button is hidden) */
	.profiler-panel.maximized .profiler-header {
		width: calc(100% - 80px);
	}

	/* ===== RULES FOR WHEN THERE ARE NO TABS ===== */

	/* Horizontal mode (bottom/top) without tabs */
	.profiler-panel.position-bottom.no-tabs:not(.maximized),
	.profiler-panel.position-top.no-tabs:not(.maximized) {
		height: 32px !important;
		min-height: 32px !important;
	}

	.profiler-panel.position-bottom.no-tabs .profiler-header,
	.profiler-panel.position-top.no-tabs .profiler-header {
		width: 100%;
		height: 32px;
		border-bottom: none;
	}

	.profiler-panel.position-bottom.no-tabs .profiler-content-wrapper,
	.profiler-panel.position-top.no-tabs .profiler-content-wrapper {
		display: none;
	}

	.profiler-panel.position-bottom.no-tabs .panel-resizer,
	.profiler-panel.position-top.no-tabs .panel-resizer {
		display: none;
	}

	/* Vertical mode (right/left) without tabs */
	.profiler-panel.position-right.no-tabs:not(.maximized),
	.profiler-panel.position-left.no-tabs:not(.maximized) {
		width: 40px !important;
		min-width: 40px !important;
	}

	/* Vertical layout for header when no tabs */
	.profiler-panel.position-right.no-tabs .profiler-header,
	.profiler-panel.position-left.no-tabs .profiler-header {
		width: 100%;
		flex-direction: column;
		height: 100%;
		border-bottom: none;
	}

	/* Vertical layout for controls when no tabs */
	.profiler-panel.position-right.no-tabs .profiler-controls,
	.profiler-panel.position-left.no-tabs .profiler-controls {
		position: static;
		flex-direction: column-reverse;
		justify-content: flex-end;
		width: 100%;
		height: 100%;
		border-bottom: none;
		border-left: none;
		background: transparent;
	}

	.profiler-panel.position-right.no-tabs .profiler-controls button,
	.profiler-panel.position-left.no-tabs .profiler-controls button {
		width: 100%;
		height: 40px;
		border-left: none;
		border-top: none;
		border-bottom: 1px solid var(--profiler-border);
	}

	.profiler-panel.position-right.no-tabs .profiler-content-wrapper,
	.profiler-panel.position-left.no-tabs .profiler-content-wrapper {
		display: none;
	}

	.profiler-panel.position-right.no-tabs .profiler-tabs,
	.profiler-panel.position-left.no-tabs .profiler-tabs {
		display: none;
		padding-left: 2px;
	}

	.profiler-panel.position-right.no-tabs .panel-resizer,
	.profiler-panel.position-left.no-tabs .panel-resizer {
		display: none;
	}

	/* Hide position toggle on mobile without tabs */
	.profiler-panel.hide-position-toggle.position-right.no-tabs:not(.maximized),
	.profiler-panel.hide-position-toggle.position-left.no-tabs:not(.maximized) {
		width: 40px !important;
		min-width: 40px !important;
	}

	/* Hide drag indicator on mobile devices */
	.profiler-panel.is-mobile .tab-btn.active::before {
		display: none;
	}

	.profiler-header::-webkit-scrollbar,
	.profiler-tabs::-webkit-scrollbar,
	.profiler-content::-webkit-scrollbar,
	.detached-tab-content::-webkit-scrollbar,
	.console-log::-webkit-scrollbar,
	.timelineTrack::-webkit-scrollbar,
	.list-scroll-wrapper::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	.profiler-header::-webkit-scrollbar-track,
	.profiler-tabs::-webkit-scrollbar-track,
	.profiler-content::-webkit-scrollbar-track,
	.detached-tab-content::-webkit-scrollbar-track,
	.console-log::-webkit-scrollbar-track,
	.timelineTrack::-webkit-scrollbar-track,
	.list-scroll-wrapper::-webkit-scrollbar-track {
		background: transparent;
	}

	.profiler-header::-webkit-scrollbar-thumb,
	.profiler-tabs::-webkit-scrollbar-thumb,
	.profiler-content::-webkit-scrollbar-thumb,
	.detached-tab-content::-webkit-scrollbar-thumb,
	.console-log::-webkit-scrollbar-thumb,
	.timelineTrack::-webkit-scrollbar-thumb,
	.list-scroll-wrapper::-webkit-scrollbar-thumb {
		background-color: rgba(255, 255, 255, 0.15);
		border-radius: 2px;
	}

	.profiler-header::-webkit-scrollbar-thumb:hover,
	.profiler-tabs::-webkit-scrollbar-thumb:hover,
	.profiler-content::-webkit-scrollbar-thumb:hover,
	.detached-tab-content::-webkit-scrollbar-thumb:hover,
	.console-log::-webkit-scrollbar-thumb:hover,
	.timelineTrack::-webkit-scrollbar-thumb:hover,
	.list-scroll-wrapper::-webkit-scrollbar-thumb:hover {
		background-color: rgba(255, 255, 255, 0.3);
	}

	.profiler-header::-webkit-scrollbar-corner,
	.profiler-tabs::-webkit-scrollbar-corner,
	.profiler-content::-webkit-scrollbar-corner,
	.detached-tab-content::-webkit-scrollbar-corner,
	.console-log::-webkit-scrollbar-corner,
	.timelineTrack::-webkit-scrollbar-corner,
	.list-scroll-wrapper::-webkit-scrollbar-corner {
		background: transparent;
	}

	.profiler-header,
	.profiler-tabs,
	.profiler-content,
	.detached-tab-content,
	.console-log,
	.timelineTrack,
	.list-scroll-wrapper {
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
	}

	.profiler-panel.dragging .profiler-header {
		cursor: grabbing !important;
	}

	.profiler-panel.dragging {
		opacity: 0.8;
	}

	.profiler-tabs {
		display: flex;
		cursor: grab;
		position: relative;
		margin-left: 2px;
	}

	.profiler-tabs:active {
		cursor: grabbing;
	}


	.profiler-controls {
		display: flex;
		position: absolute;
		right: 0;
		top: 0;
		height: 32px;
		background: var(--profiler-header-background);
		border-bottom: 1px solid var(--profiler-border);
	}

	.profiler-panel.has-horizontal-scroll .profiler-controls {
		height: 38px;
	}

	.tab-btn {
		position: relative;
		background: transparent;
		border: none;
		/*border-right: 1px solid var(--profiler-border);*/
		color: var(--text-secondary);
		padding: 0 15px 2px 15px;
		height: 100%;
		box-sizing: border-box;
		cursor: default;
		display: flex;
		align-items: center;
		font-family: var(--font-family);
		font-weight: 600;
		font-size: 13px;
		user-select: none;
		transition: opacity 0.2s, transform 0.2s;
		touch-action: pan-x;
		white-space: nowrap;
	}

	.tab-btn.active {
		border-bottom: 2px solid var(--color-accent);
		color: white;
	}

	.tab-btn.active::before {
		content: '';
		position: absolute;
		left: 2px;
		top: 50%;
		transform: translateY(-50%);
		width: 8px;
		height: 14px;
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='3' r='1' fill='%234a4a5a'/%3E%3Ccircle cx='2' cy='7' r='1' fill='%234a4a5a'/%3E%3Ccircle cx='2' cy='11' r='1' fill='%234a4a5a'/%3E%3Ccircle cx='6' cy='3' r='1' fill='%234a4a5a'/%3E%3Ccircle cx='6' cy='7' r='1' fill='%234a4a5a'/%3E%3Ccircle cx='6' cy='11' r='1' fill='%234a4a5a'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: center;
		opacity: 0.6;
	}

	.tab-btn.no-detach.active::before {
		display: none;
	}

	.floating-btn,
	.maximize-btn,
	.hide-panel-btn {
		background: transparent;
		border: none;
		border-left: 1px solid var(--profiler-border);
		color: var(--text-secondary);
		width: 40px;
		height: 100%;
		cursor: pointer;
		transition: all 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	/* Disable transitions in vertical mode to avoid broken animations */
	.profiler-panel.position-right .floating-btn,
	.profiler-panel.position-right .maximize-btn,
	.profiler-panel.position-right .hide-panel-btn,
	.profiler-panel.position-left .floating-btn,
	.profiler-panel.position-left .maximize-btn,
	.profiler-panel.position-left .hide-panel-btn {
		transition: background-color 0.2s, color 0.2s;
	}

	.floating-btn:hover,
	.maximize-btn:hover,
	.hide-panel-btn:hover {
		background-color: rgba(255, 255, 255, 0.1);
		color: var(--text-primary);
	}

	/* Hide maximize button when there are no tabs */
	.profiler-panel.position-right.no-tabs .maximize-btn,
	.profiler-panel.position-left.no-tabs .maximize-btn,
	.profiler-panel.position-bottom.no-tabs .maximize-btn,
	.profiler-panel.position-top.no-tabs .maximize-btn {
		display: none !important;
	}

	/* Hide floating button when maximized */
	.profiler-panel.maximized .floating-btn {
		display: none !important;
	}

	.profiler-content-wrapper {
		flex-grow: 1;
		overflow: hidden;
		position: relative;
	}

	.profiler-content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow-y: auto;
		font-size: 13px;
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.2s, visibility 0.2s;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		user-select: none;
		-webkit-user-select: none;
	}

	.profiler-content.active {
		visibility: visible;
		opacity: 1;
	}

	.profiler-content {
		overflow: auto; /* make sure scrollbars can appear */
	}


	.list-item-row {
		display: grid;
		grid-template-columns: var(--list-grid-template, none);
		align-items: center;
		padding: 4px 8px;
		border-radius: 3px;
		transition: background-color 0.2s;
		gap: 10px;
		border-bottom: none;
		user-select: none;
		-webkit-user-select: none;
	}

	.parameters .list-item-row {
		min-height: 23px;
	}

	.mini-panel-content .parameters .list-item-row {
		min-height: 21px;
	}

	.list-item-wrapper {
		margin-top: 2px;
		margin-bottom: 2px;
		user-select: none;
		-webkit-user-select: none;
	}

	.list-item-wrapper:has(> .list-item-row .graph-container) {
		margin-left: -1.5em;
	}

	.list-item-wrapper:first-child {
		/*margin-top: 0;*/
	}

	.list-item-wrapper:not(.header-wrapper):nth-child(odd) > .list-item-row {
		background-color: rgba(0,0,0,0.1);
	}

	.list-item-wrapper.header-wrapper>.list-item-row {
		color: var(--color-accent);
		background-color: rgba(0, 170, 255, 0.1);
	}

	.list-item-wrapper.header-wrapper>.list-item-row>.list-item-cell:first-child {
		font-weight: 600;
	}

	.list-item-row.collapsible,
	.list-item-row.actionable {
		cursor: pointer;
	}

	.list-item-row.collapsible {
		background-color: rgba(0, 170, 255, 0.15) !important;
		min-height: 23px;
	}

	.list-item-row.collapsible.alert,
	.list-item-row.alert {
		background-color: rgba(244, 67, 54, 0.1) !important;
	}

	@media (hover: hover) {

		.list-item-row:hover:not(.collapsible):not(.no-hover),
		.list-item-row:hover:not(.no-hover),
		.list-item-row.actionable:hover,
		.list-item-row.collapsible.actionable:hover {
			background-color: rgba(255, 255, 255, 0.05) !important;
		}

		.list-item-row.collapsible:hover {
			background-color: rgba(0, 170, 255, 0.25) !important;
		}

	}

	.list-item-cell {
		white-space: pre;
		display: flex;
		align-items: center;
		user-select: none;
		-webkit-user-select: none;
	}

	.list-item-cell:not(:first-child) {
		justify-content: flex-end;
		font-weight: 600;
	}

	.list-header {
		display: grid;
		grid-template-columns: var(--list-grid-template, none);
		align-items: center;
		padding: 4px 8px;
		font-weight: 600;
		color: var(--text-secondary);
		padding-bottom: 6px;
		border-bottom: 1px solid var(--profiler-border);
		margin-bottom: 5px;
		gap: 10px;
		user-select: none;
		-webkit-user-select: none;
	}

	.list-item-wrapper.section-start {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.list-header .list-header-cell:not(:first-child) {
		text-align: right;
	}

	.list-children-container {
		padding-left: 1.5em;
		overflow: hidden;
		transition: max-height 0.1s ease-out;
		margin-top: 2px;
	}

	.list-children-container.closed {
		max-height: 0;
		display: none !important;
	}

	.item-toggler {
		display: inline-block;
		margin-right: 0.8em;
		text-align: left;
	}

	.list-item-row.open .item-toggler::before {
		content: '-';
	}

	.list-item-row:not(.open) .item-toggler::before {
		content: '+';
	}

	.list-item-cell .value.good {
		color: var(--color-green);
	}

	.list-item-cell .value.warn {
		color: var(--color-yellow);
	}

	.list-item-cell .value.bad {
		color: var(--color-red);
	}

	.list-scroll-wrapper {
		width: max-content;
		min-width: 100%;
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}

	.list-container.parameters .list-item-row:not(.collapsible) {
	}

	.graph-container {
		width: 100%;
		box-sizing: border-box;
		padding: 8px 0;
		position: relative;
	}

	.graph-svg, .graph-canvas {
		width: 0;
		min-width: 100%;
		height: 80px;
		background-color: var(--profiler-header);
		border: 1px solid var(--profiler-border);
		border-radius: 4px;
		display: block;
	}

	.graph-path {
		stroke-width: 2;
		fill-opacity: 0.4;
	}

	.console-buttons-group {
		display: flex;
		gap: 20px;
	}

	.console-filter-input {
		background-color: var(--profiler-background);
		border: 1px solid var(--profiler-border);
		color: var(--text-primary);
		border-radius: 4px;
		padding: 4px 10px 2px 10px;
		font-family: var(--font-mono);
		flex-grow: 1;
		max-width: 300px;
		border-radius: 15px;
	}

	.console-filter-input:focus {
		outline: none;
		border-color: var(--text-secondary);
	}

	.console-copy-button {
		background: transparent;
		border: none;
		color: var(--text-secondary);
		cursor: pointer;
		padding: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		transition: color 0.2s, background-color 0.2s;
	}

	.console-copy-button:hover {
		color: var(--text-primary);
		background-color: var(--profiler-hover);
	}

	.console-copy-button.copied {
		color: var(--color-green);
	}

	.console-log {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 10px;
		overflow-y: auto;
		flex-grow: 1;
		user-select: text;
		-webkit-user-select: text;
	}

	.log-message {
		display: flex;
		align-items: flex-start;
		gap: 6px;
		padding: 3px 5px;
		border-radius: 3px;
		line-height: 1.5 !important;
	}

	.log-count-badge {
		display: inline-block;
		text-align: center;
		min-width: 14px;
		height: 14px;
		border-radius: 7px;
		padding: 0 3px;
		font-size: 9px;
		font-weight: bold;
		line-height: 14px;
		box-sizing: border-box;
		margin-top: 0;
		flex-shrink: 0;
	}

	.log-icon {
		display: inline-block;
		text-align: center;
		width: 14px;
		height: 14px;
		font-size: 11px;
		line-height: 14px;
		margin-top: 0;
		flex-shrink: 0;
	}

	.log-body {
		flex-grow: 1;
		white-space: pre-wrap;
		word-break: break-all;
	}

	.log-message.info .log-count-badge {
		background-color: rgba(255, 255, 255, 0.12);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: var(--text-secondary);
	}

	.log-message.warn .log-count-badge {
		background-color: rgba(255, 193, 7, 0.18);
		border: 1px solid rgba(255, 193, 7, 0.35);
		color: var(--color-yellow);
	}

	.log-message.error .log-count-badge {
		background-color: rgba(244, 67, 54, 0.18);
		border: 1px solid rgba(244, 67, 54, 0.35);
		color: #ff8a80;
	}

	.log-message.hidden {
		display: none;
	}

	.log-message.info {
		color: var(--text-primary);
	}

	.log-message.warn {
		color: var(--color-yellow);
	}

	.log-message.error {
		color: #f9dedc;
		background-color: rgba(244, 67, 54, 0.1);
	}

	.log-prefix {
		color: var(--text-secondary);
		margin-right: 8px;
	}

	.log-code {
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 3px;
		padding: 1px 4px;
	}

	.thumbnail-container {
		display: flex;
		align-items: center;
	}

	.thumbnail-svg {
		width: 40px;
		height: 22.5px;
		flex-shrink: 0;
		margin-right: 8px;
	}

	.param-control {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 10px;
		width: 100%;
	}

	.param-control input,
	.param-control select,
	.param-control button {
		background-color: var(--profiler-background);
		border: 1px solid var(--profiler-border);
		color: var(--text-primary);
		border-radius: 4px;
		padding: 4px 6px;
		padding-bottom: 2px;
		font-family: var(--font-mono);
		width: 100%;
		box-sizing: border-box;
		color-scheme: dark;
	}

	.param-control input:focus {
		outline: none;
		border-color: var(--color-accent);
	}

	.param-control select {
		padding-top: 3px;
		padding-bottom: 1px;
	}

	.param-control input[type="number"] {
		cursor: ns-resize;
	}

	.param-control input[type="color"] {
		padding: 2px;
	}

	.param-control button {
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.param-control button:hover {
		background-color: var(--profiler-header);
	}

	.param-control-vector {
		display: flex;
		gap: 5px;
	}

	.custom-checkbox {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		gap: 8px;
		will-change: transform;
		font-size: 12px;
	}

	.custom-checkbox input {
		display: none;
	}

	.custom-checkbox .checkmark {
		width: 14px;
		height: 14px;
		border: 1px solid var(--color-accent);
		border-radius: 3px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		transition: background-color 0.2s, border-color 0.2s;
	}

	.custom-checkbox .checkbox-text {
		font-size: 12px;
		margin-top: 1px;
		color: inherit;
	}

	.custom-checkbox .checkmark::after {
		content: '';
		width: 6px;
		height: 6px;
		background-color: var(--color-accent);
		border-radius: 1px;
		display: block;
		transform: scale(0);
		transition: transform 0.2s;
	}

	.list-container .custom-checkbox .checkmark {
		width: 13px;
		height: 13px;
	}

	.list-container .custom-checkbox .checkmark::after {
		width: 7px;
		height: 7px;
	}

	.custom-checkbox input:checked+.checkmark {
		border-color: var(--color-accent);
	}

	.custom-checkbox input:checked+.checkmark::after {
		transform: scale(1);
	}

	.param-control input[type="range"] {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 16px;
		background: var(--profiler-header);
		border-radius: 5px;
		border: 1px solid var(--profiler-border);
		outline: none;
		padding: 0px;
		padding-top: 8px;
	}

	.param-control input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 18px;
		height: 18px;
		background: var(--profiler-background);
		border: 1px solid var(--color-accent);
		border-radius: 3px;
		cursor: pointer;
		margin-top: -8px;
	}

	.param-control input[type="range"]::-moz-range-thumb {
		width: 18px;
		height: 18px;
		background: var(--profiler-background);
		border: 2px solid var(--color-accent);
		border-radius: 3px;
		cursor: pointer;
	}

	.param-control input[type="range"]::-moz-range-track {
		width: 100%;
		height: 16px;
		background: var(--profiler-header);
		border-radius: 5px;
		border: 1px solid var(--profiler-border);
	}

	/* Override .param-control styles for mini-panel-content */
	.mini-panel-content input,
	.mini-panel-content select,
	.mini-panel-content button {
		padding: 2px 4px;
		height: 21px;
		line-height: 1.4;
		padding-top: 4px;
	}

	.mini-panel-content .param-control input,
	.mini-panel-content .param-control select,
	.mini-panel-content .param-control button {
		background-color: #1e1e24c2;
		line-height: 1.0;
	}

	.mini-panel-content .param-control select {
		padding: 2px 2px;
		padding-top: 3px;
	}

	.mini-panel-content .param-control input[type="number"]::-webkit-outer-spin-button,
	.mini-panel-content .param-control input[type="number"]::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.mini-panel-content .param-control input[type="number"] {
		-moz-appearance: textfield;
	}

	.mini-panel-content .list-item-cell span {
		position: relative;
		top: 1px;
		margin-left: 2px;
	}

	.list-container.parameters .list-item-cell:first-child .value {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.list-container.parameters .list-item-cell:first-child .value:has(> .info-icon) {
		position: relative;
		padding-right: 20px;
	}

	.list-container.parameters .list-item-cell:first-child .value > .info-icon {
		position: absolute;
		top: calc(50% - 8px);
		right: 0;
	}

	.mini-panel-content .custom-checkbox .checkmark {
		width: 11px;
		height: 11px;
		margin-bottom: 2px;
		will-change: transform;
	}

	.mini-panel-content .list-container.parameters .list-item-row:not(.collapsible) {
		margin-bottom: 2px;
	}

	.mini-panel-content .list-container.parameters .list-item-wrapper:has(> .list-children-container.closed) + .list-item-wrapper {
		margin-top: 2px;
	}

	.mini-panel-content .list-container.parameters .list-children-container > .list-item-wrapper:first-child:has(> .list-item-row:not(.collapsible)) {
		margin-top: 2px;
	}

	.mini-panel-content .list-container.parameters .list-children-container > .list-item-wrapper:last-child:has(> .list-item-row:not(.collapsible)) {
		margin-bottom: 4px;
	}

	@media screen and (max-width: 450px) and (orientation: portrait) {

		.console-filter-input {
			max-width: 100px;
		}

	}

	/* Touch device optimizations */
	@media (hover: none) and (pointer: coarse) {

		.panel-resizer {
			top: -10px !important;
			height: 20px !important;
		}

		.profiler-panel.position-top .panel-resizer {
			top: auto !important;
			bottom: -10px !important;
			height: 20px !important;
		}

		.profiler-panel.position-left .panel-resizer {
			right: -10px !important;
			width: 20px !important;
			height: 100% !important;
		}

		.profiler-panel.position-right .panel-resizer {
			left: -10px !important;
			width: 20px !important;
			height: 100% !important;
		}

		.detached-tab-resizer-top,
		.detached-tab-resizer-bottom {
			height: 10px !important;
		}

		.detached-tab-resizer-left,
		.detached-tab-resizer-right {
			width: 10px !important;
		}

	}

	.drag-preview-indicator {
		position: absolute;
		background-color: rgba(0, 170, 255, 0.2);
		border: 2px dashed var(--color-accent);
		z-index: 999;
		pointer-events: none;
		transition: all 0.2s ease-out;
	}

	/* Detached Tab Windows */
	.detached-tab-panel {
		position: absolute;
		width: 500px;
		height: 400px;
		background: var(--profiler-background);
		border: 1px solid var(--profiler-border);
		border-radius: 8px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
		z-index: 1002;
		display: flex;
		flex-direction: column;
		backdrop-filter: blur(10px);
		overflow: hidden;
		opacity: 1;
		visibility: visible;
		transition: opacity 0.2s, visibility 0.2s;
		font-family: var(--font-mono);
		font-size: 13px;
	}


	.detached-tab-header {
		background: var(--profiler-header-background);
		padding: 0 3px 0 10px;
		font-family: var(--font-family);
		font-size: 13px;
		color: var(--text-primary);
		font-weight: 600;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--profiler-border);
		cursor: grab;
		user-select: none;
		height: 32px;
		flex-shrink: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		touch-action: none;
	}

	.detached-tab-header:active {
		cursor: grabbing;
	}

	.detached-header-controls {
		display: flex;
		gap: 5px;
	}

	.detached-reattach-btn {
		background: transparent;
		border: none;
		color: var(--text-secondary);
		font-family: var(--font-family);
		font-size: 18px;
		line-height: 1;
		cursor: pointer;
		padding: 4px 8px;
		border-radius: 4px;
		transition: all 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.detached-reattach-btn:hover {
		background: rgba(0, 170, 255, 0.2);
		color: var(--color-accent);
	}

	.detached-tab-content {
		flex: 1;
		overflow: hidden;
		position: relative;
		background: var(--profiler-background);
	}


	.detached-tab-content .profiler-content {
		display: flex !important;
		flex-direction: column !important;
		height: 100%;
		visibility: visible !important;
		opacity: 1 !important;
		position: relative !important;
	}

	.detached-tab-content .profiler-content > * {
		font-family: var(--font-mono);
		color: var(--text-primary);
	}

	.detached-tab-resizer {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 20px;
		height: 20px;
		cursor: nwse-resize;
		z-index: 10;
		touch-action: none;
	}

	.detached-tab-resizer::after {
		content: '';
		position: absolute;
		bottom: 2px;
		right: 2px;
		width: 12px;
		height: 12px;
		border-right: 2px solid var(--profiler-border);
		border-bottom: 2px solid var(--profiler-border);
		border-bottom-right-radius: 6px;
		opacity: 0.5;
	}

	.detached-tab-resizer:hover::after {
		opacity: 1;
		border-color: var(--color-accent);
	}

	/* Edge resizers */
	.detached-tab-resizer-top {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 5px;
		cursor: ns-resize;
		z-index: 10;
		touch-action: none;
	}

	.detached-tab-resizer-right {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 5px;
		cursor: ew-resize;
		z-index: 10;
		touch-action: none;
	}

	.detached-tab-resizer-bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 5px;
		cursor: ns-resize;
		z-index: 10;
		touch-action: none;
	}

	.detached-tab-resizer-left {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 5px;
		cursor: ew-resize;
		z-index: 10;
		touch-action: none;
	}

	/* Input number spin buttons - hide arrows */
	/* Chrome, Safari, Edge, Opera */
	.profiler-panel input[type="number"]::-webkit-outer-spin-button,
	.profiler-panel input[type="number"]::-webkit-inner-spin-button,
	.detached-tab-content input[type="number"]::-webkit-outer-spin-button,
	.detached-tab-content input[type="number"]::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	.profiler-panel input[type="number"],
	.detached-tab-content input[type="number"] {
		-moz-appearance: textfield;
	}

	.panel-action-btn {
		background: transparent;
		color: var(--text-primary);
		border: 1px solid var(--profiler-border);
		border-radius: 4px;
		padding: 6px 12px;
		cursor: pointer;
		font-family: var(--font-family);
		font-size: 12px;
		transition: background-color 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.panel-action-btn:hover {
		background-color: rgba(255, 255, 255, 0.05);
	}

	.node-canvas-wrapper {
		touch-action: none;
	}

	.node-canvas-wrapper .node-canvas-detach-btn {
		position: absolute;
		top: 5px;
		right: 5px;
		background: rgba(30, 30, 36, 0.85);
		border: 1px solid var(--profiler-border);
		color: var(--text-primary);
		border-radius: 4px;
		padding: 4px;
		cursor: pointer;
		opacity: 1;
		transition: background-color 0.2s, border-color 0.2s, color 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	.node-canvas-wrapper .node-canvas-detach-btn:hover {
		background-color: var(--color-accent);
		border-color: var(--color-accent);
		color: white;
	}

	.node-canvas-wrapper .node-canvas-fullscreen-btn {
		position: absolute;
		bottom: 5px;
		right: 5px;
		background: rgba(30, 30, 36, 0.85);
		border: 1px solid var(--profiler-border);
		color: var(--text-primary);
		border-radius: 4px;
		padding: 4px;
		cursor: pointer;
		opacity: 1;
		transition: background-color 0.2s, border-color 0.2s, color 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	.node-canvas-wrapper .node-canvas-fullscreen-btn:hover {
		background-color: var(--color-accent);
		border-color: var(--color-accent);
		color: white;
	}

	.profiler-panel.maximized .node-canvas-fullscreen-btn {
		display: none;
	}

	.toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 32px;
		padding: 4px 6px;
		border-bottom: 1px solid var(--profiler-border);
		background: var(--profiler-header-background);
		flex-shrink: 0;
		box-sizing: border-box;
		gap: 16px;
	}

	.toolbar span {
		color: var(--text-secondary);
		font-size: 12px;
		font-weight: 600;
	}

	.toolbar .custom-checkbox .checkmark {
		width: 12px;
		height: 12px;
		border-radius: 4px;
	}

	.viewer-content .toolbar {
		justify-content: flex-end;
	}

	.viewer-back-btn {
		background: transparent;
		border: none;
		color: var(--text-secondary);
		cursor: pointer;
		font-size: 16px;
		line-height: 1;
		padding: 4px 8px;
		border-radius: 4px;
		margin-right: auto;
		transition: color 0.2s, background-color 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.viewer-back-btn:hover {
		color: var(--text-primary);
		background-color: rgba(255, 255, 255, 0.05);
	}

	select {
		color-scheme: dark;
	}

	select option,
	option {
		background-color: #1e1e24;
		color: var(--text-primary);
	}

	.select {
		background: var(--profiler-background);
		border: 1px solid var(--profiler-border);
		color: var(--text-primary);
		border-radius: 4px;
		padding: 4px 16px 2px 6px;
		font-family: var(--font-mono);
		font-size: 12px;
		outline: none;
		cursor: pointer;
		color-scheme: dark;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23e0e0e0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 5px center;
		background-size: 10px;
	}

	.select:focus {
		border-color: var(--color-accent);
	}

	.full-viewer-container {
		display: none;
		flex-grow: 1;
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		touch-action: none;
	}

	.node-canvas-wrapper .node-canvas-split-btn {
		position: absolute;
		top: 5px;
		left: 5px;
		background: rgba(30, 30, 36, 0.85);
		border: 1px solid var(--profiler-border);
		color: var(--text-primary);
		border-radius: 4px;
		padding: 4px;
		cursor: pointer;
		opacity: 1;
		transition: background-color 0.2s, border-color 0.2s, color 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	.node-canvas-wrapper .node-canvas-split-btn:hover {
		background-color: var(--color-accent);
		border-color: var(--color-accent);
		color: white;
	}

	.node-canvas-wrapper .node-canvas-split-btn.active,
	.node-canvas-wrapper .node-canvas-fullscreen-btn.active {
		background-color: var(--color-accent) !important;
		border-color: var(--color-accent) !important;
		color: white !important;
	}

	.split-screen-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none !important;
		z-index: 999;
		touch-action: none;
		overflow: hidden;
	}

	.split-screen-line {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1px;
		left: 50%;
		background-color: transparent;
		/*background-color: rgba(255, 255, 255, 0.25);
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);*/
		cursor: ew-resize;
		pointer-events: auto !important;
		z-index: 10;
		touch-action: none;
		transition: background-color 0.15s ease-out;
	}

	.split-screen-line:hover,
	.split-screen-line:active,
	.split-screen-line.active {
		background-color: var(--color-accent);
	}

	.split-screen-line::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: -12px;
		width: 25px;
		background: transparent;
		cursor: ew-resize;
	}

	/* Grid Mode styles for List component */
	.list-scroll-wrapper:has(> .list-container.grid-mode) {
		width: 100% !important;
	}

	.list-container.grid-mode {
		min-width: 0 !important;
		width: 100% !important;
		box-sizing: border-box;
	}

	.list-container.grid-mode .list-header {
		display: none !important;
	}

	.list-container.grid-mode .list-children-container {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
		padding-left: 0 !important;
		margin-top: 10px;
		margin-bottom: 15px;
		width: 100%;
		box-sizing: border-box;
	}

	.list-container.grid-mode .list-children-container > .list-item-wrapper {
		display: inline-block;
		width: 160px;
		margin: 0;
	}

	.list-container.grid-mode .list-children-container > .list-item-wrapper > .list-item-row {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		/*background-color: var(--profiler-header);
		border: 1px solid var(--profiler-border);*/
		border-radius: 6px;
		padding: 8px;
		gap: 8px;
		width: 100%;
		box-sizing: border-box;
		grid-template-columns: none !important;
	}

	.list-container.grid-mode .list-children-container > .list-item-wrapper > .list-item-row > .list-item-cell:first-child {
		width: 140px;
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}

	.list-container.grid-mode .list-children-container > .list-item-wrapper > .list-item-row > .list-item-cell:not(:first-child) {
		width: 100%;
		text-align: center !important;
		font-size: 11px;
		font-weight: 500;
		color: var(--text-primary);
		white-space: normal;
		word-break: break-all;
		justify-content: center !important;
	}

	/* Timeline Info & Details */
	.timeline-detail-block {
		font-size: 11px;
		margin-left: 8px;
		color: var(--text-secondary);
		opacity: 1;
	}

	.timeline-detail-key,
	.timeline-detail-sep,
	.timeline-call-count {
		opacity: 0.5;
	}

	.timeline-detail-value {
		color: var(--text-secondary);
		opacity: 1;
	}

	.timeline-info-group {
		display: inline-flex;
		align-items: center;
		margin-left: 12px;
		flex-shrink: 0;
	}

	.timeline-info-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		margin-right: 6px;
		flex-shrink: 0;
	}

	.timeline-info-dot.fps {
		background-color: var(--color-fps);
	}

	.timeline-info-dot.call {
		background-color: var(--color-call);
	}

	.timeline-info-dot.red {
		background-color: var(--color-red);
	}

}
`,s=document.createElement("style");t&&(s.nonce=t),s.textContent=i,e.appendChild(s)}}class Te{constructor(e=512){this.maxPoints=e,this.lines={},this.limit=0,this.limitIndex=0,this.domElement=document.createElement("canvas"),this.domElement.setAttribute("class","graph-canvas"),this.ctx=this.domElement.getContext("2d"),this.width=0,this.height=0,this.devicePixelRatio=window.devicePixelRatio||1}resize(e,t){this.width=e,this.height=t,this.devicePixelRatio=window.devicePixelRatio||1,this.domElement.width=e*this.devicePixelRatio,this.domElement.height=t*this.devicePixelRatio,this.draw()}addLine(e,t){this.lines[e]={color:t,resolved:null,points:[]}}addPoint(e,t){const i=this.lines[e];i&&(i.points.push(t),i.points.length>this.maxPoints&&i.points.shift(),t>this.limit&&(this.limit=t,this.limitIndex=0))}resetLimit(){this.limit=0,this.limitIndex=0}update(){const e=this.domElement.clientWidth,t=this.domElement.clientHeight;e===0||t===0||(e!==this.width||t!==this.height?this.resize(e,t):this.draw(),this.limitIndex++>this.maxPoints&&this.resetLimit())}draw(){const e=this.ctx,t=this.devicePixelRatio,i=this.width,s=this.height;if(e.clearRect(0,0,i*t,s*t),i===0||s===0)return;e.save(),e.scale(t,t);const n=i/(this.maxPoints-1);for(const o in this.lines){const r=this.lines[o];if(r.points.length===0)continue;r.resolved||(r.resolved=this._resolveColor(r.color));const a=r.resolved,l=a?a.color:"#ffffff",h=i-(r.points.length-1)*n;let c=l;if(s>0){const p=e.createLinearGradient(0,0,0,s);p.addColorStop(0,l),p.addColorStop(1,a&&a.transparent||"rgba(0,0,0,0)"),c=p}e.fillStyle=c,e.globalAlpha=.4,e.beginPath(),e.moveTo(h,s);for(let p=0;p<r.points.length;p++){const u=h+p*n,m=this.limit===0?s:s-r.points[p]/this.limit*s;e.lineTo(u,m)}e.lineTo(h+(r.points.length-1)*n,s),e.closePath(),e.fill(),e.strokeStyle=l,e.lineWidth=2,e.globalAlpha=1,e.beginPath();for(let p=0;p<r.points.length;p++){const u=h+p*n,m=this.limit===0?s:s-r.points[p]/this.limit*s;p===0?e.moveTo(u,m):e.lineTo(u,m)}e.stroke()}e.restore()}_resolveColor(e){let t=e;if(e.startsWith("var(")){const s=e.slice(4,-1).trim();if(t=getComputedStyle(this.domElement).getPropertyValue(s).trim(),!t)return null}let i="rgba(0,0,0,0)";if(t.startsWith("#"))i=t.substring(0,7)+"00";else if(t.startsWith("rgb")){const s=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)$/);s&&(i=`rgba(${s[1]}, ${s[2]}, ${s[3]}, 0)`)}return{color:t,transparent:i}}dispose(){}}const Ce="threejs-inspector";function ce(d){if(typeof localStorage>"u")return{};const e=JSON.parse(localStorage.getItem(Ce)||"{}");return e.version!==We||e.settings&&e.settings.storage==="url"&&e.settings.url!==location.href?(localStorage.removeItem(Ce),{}):e[d]||{}}function oe(d,e){if(typeof localStorage>"u")return;const t=JSON.parse(localStorage.getItem(Ce)||"{}");e===null?delete t[d]:t[d]=e,t.settings=t.settings||{},t.settings.url=t.settings.url||location.href,t.settings.storage=t.settings.storage||"url",t.version=We,localStorage.setItem(Ce,JSON.stringify(t))}class rs extends He{constructor(e,t={}){super(),this.inspector=e,this.nonce=t.nonce??(e==null?void 0:e.nonce)??null,this.tabs={},this.activeTabId=null,this.isResizing=!1,this.lastHeightBottom=350,this.lastWidthRight=450,this.position="bottom",this.detachedWindows=[],this.maxZIndex=1002,this.nextTabOriginalIndex=0,this.horizontalAlign="right",this.verticalAlign="top",this.setupShell(),this.setupResizing(),ns.init(this.domElement,this.nonce),this.updateWidgetPosition(),this.setupWindowResizeListener(),this.setupOrientationListener(),this.checkHeaderScroll(),this.panel.addEventListener("transitionend",i=>{i.target===this.panel&&(i.propertyName==="width"||i.propertyName==="height"||i.propertyName==="transform")&&this.checkHeaderScroll()})}getSize(){return this.panel.classList.contains("visible")===!1||this.panel.classList.contains("no-tabs")?{width:0,height:0}:this.position==="right"?{width:this.panel.offsetWidth,height:0}:{width:0,height:this.panel.offsetHeight}}get isMobile(){return this.detectMobile()}get isSmallScreen(){return window.innerWidth<=768}detectMobile(){const e=navigator.userAgent||navigator.vendor||window.opera,t=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e),i="ontouchstart"in window||navigator.maxTouchPoints>0;return t||i&&this.isSmallScreen}setupOrientationListener(){const e=()=>{if(!this.isMobile)return;const i=window.innerWidth>window.innerHeight?"right":"bottom";this.position!==i&&this.setPosition(i)};e(),window.addEventListener("orientationchange",e),window.addEventListener("resize",e)}setupWindowResizeListener(){const e=()=>{this.detachedWindows.forEach(i=>{this.constrainWindowToBounds(i.panel)})},t=()=>{if(this.panel.classList.contains("maximized"))return;const i=window.innerWidth,s=window.innerHeight;if(this.position==="bottom"){const n=this.panel.offsetHeight,o=s-50;n>o&&(this.panel.style.height=`${o}px`,this.lastHeightBottom=o)}else if(this.position==="right"){const n=this.panel.offsetWidth,o=i-50;n>o&&(this.panel.style.width=`${o}px`,this.lastWidthRight=o)}};window.addEventListener("resize",()=>{this.isSmallScreen?(this.floatingBtn.style.display="none",this.panel.classList.add("hide-position-toggle")):(this.floatingBtn.style.display="",this.panel.classList.remove("hide-position-toggle")),this.isMobile?this.panel.classList.add("is-mobile"):this.panel.classList.remove("is-mobile"),e(),t(),this.checkHeaderScroll(),this.notifyLayoutChange()})}constrainWindowToBounds(e){const t=window.innerWidth,i=window.innerHeight,s=e.offsetWidth,n=e.offsetHeight;let o=parseFloat(e.style.left)||e.offsetLeft||0,r=parseFloat(e.style.top)||e.offsetTop||0;const a=s/2,l=n/2;o+s>t+a&&(o=t+a-s),o<-a&&(o=-a),r+n>i+l&&(r=i+l-n),r<-l&&(r=-l),e.style.left=`${o}px`,e.style.top=`${r}px`}setupShell(){this.domElement=document.createElement("div"),this.domElement.classList.add("three-inspector"),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.toggleButton=document.createElement("button"),this.toggleButton.classList.add("profiler-toggle"),this.toggleButton.innerHTML=`
<span class="builtin-tabs-container"></span>
<span class="toggle-text">
	<span class="fps-counter">-</span>
	<span class="fps-label">FPS</span>
</span>
<span class="toggle-icon">
	<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-ipad-horizontal-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" /><path d="M9 17h2" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>
	<span class="console-badge-container">
		<span class="console-badge error">0</span>
		<span class="console-badge warn">0</span>
	</span>
</span>
`,this.toggleButton.onclick=()=>this.togglePanel();const e=this.toggleButton.querySelector(".console-badge.error");e.style.display="none";const t=this.toggleButton.querySelector(".console-badge.warn");t.style.display="none",this.builtinTabsContainer=this.toggleButton.querySelector(".builtin-tabs-container"),this.miniPanel=document.createElement("div"),this.miniPanel.classList.add("profiler-mini-panel"),this.miniPanel.className="profiler-mini-panel",this.panel=document.createElement("div"),this.panel.classList.add("profiler-panel");const i=document.createElement("div");i.className="profiler-header",i.addEventListener("wheel",r=>{r.deltaY!==0&&(r.preventDefault(),i.scrollLeft+=r.deltaY*.25)},{passive:!1}),this.tabsContainer=document.createElement("div"),this.tabsContainer.className="profiler-tabs";const s=document.createElement("div");s.className="profiler-controls",this.floatingBtn=document.createElement("button"),this.floatingBtn.classList.add("floating-btn"),this.floatingBtn.title="Switch to Right Side",this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line></svg>',this.floatingBtn.onclick=()=>this.togglePosition(),this.isSmallScreen&&(this.floatingBtn.style.display="none",this.panel.classList.add("hide-position-toggle")),this.isMobile&&this.panel.classList.add("is-mobile"),this.maximizeBtn=document.createElement("button"),this.maximizeBtn.classList.add("maximize-btn"),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',this.maximizeBtn.onclick=()=>this.toggleMaximize();const n=document.createElement("button");n.classList.add("hide-panel-btn"),n.textContent="-",n.onclick=()=>this.togglePanel(),s.append(this.floatingBtn,this.maximizeBtn,n),i.append(this.tabsContainer,s),this.contentWrapper=document.createElement("div"),this.contentWrapper.className="profiler-content-wrapper";const o=document.createElement("div");o.className="panel-resizer",this.panel.append(o,i,this.contentWrapper),this.domElement.append(this.toggleButton,this.miniPanel,this.panel),this.panel.classList.add(`position-${this.position}`),this.position==="right"&&(this.toggleButton.classList.add("position-right"),this.miniPanel.classList.add("position-right")),this.toggleGraph=new Te(80),this.toggleGraph.addLine("fps","#4c4c6bff"),this.toggleGraph.domElement.className="profiler-toggle-graph",this.toggleButton.appendChild(this.toggleGraph.domElement)}setupResizing(){const e=this.panel.querySelector(".panel-resizer"),t=i=>{this.isResizing=!0,this.panel.classList.add("resizing"),e.setPointerCapture(i.pointerId);const s=i.clientX,n=i.clientY,o=this.panel.offsetHeight,r=this.panel.offsetWidth,a=h=>{if(!this.isResizing)return;h.preventDefault();const c=h.clientX,p=h.clientY;if(this.position==="bottom"){const u=o-(p-n);u>100&&u<window.innerHeight-50&&(this.panel.style.height=`${u}px`)}else if(this.position==="right"){const u=r-(c-s);u>200&&u<window.innerWidth-50&&(this.panel.style.width=`${u}px`)}this.dispatchEvent({type:"resize"}),this.checkHeaderScroll()},l=()=>{this.isResizing=!1,this.panel.classList.remove("resizing"),e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",l),e.removeEventListener("pointercancel",l),this.panel.classList.contains("maximized")||(this.position==="bottom"?this.lastHeightBottom=this.panel.offsetHeight:this.position==="right"&&(this.lastWidthRight=this.panel.offsetWidth),this.saveLayout())};e.addEventListener("pointermove",a),e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l)};e.addEventListener("pointerdown",t)}toggleMaximize(){this.panel.classList.contains("maximized")?(this.panel.classList.remove("maximized"),this.domElement.classList.remove("maximized"),this.position==="bottom"?(this.panel.style.height=`${this.lastHeightBottom}px`,this.panel.style.width="100%"):this.position==="right"&&(this.panel.style.height="100%",this.panel.style.width=`${this.lastWidthRight}px`),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'):(this.position==="bottom"?this.lastHeightBottom=this.panel.offsetHeight:this.position==="right"&&(this.lastWidthRight=this.panel.offsetWidth),this.panel.classList.add("maximized"),this.domElement.classList.add("maximized"),this.position==="bottom"?(this.panel.style.height="100%",this.panel.style.width="100%"):this.position==="right"&&(this.panel.style.height="100%",this.panel.style.width="100%"),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>'),this.updateWidgetPosition(),this.dispatchEvent({type:"resize"})}hide(){this.miniPanel.classList.remove("visible"),this.miniPanel.querySelectorAll(".mini-panel-content").forEach(e=>{e.style.display="none"}),this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn").forEach(e=>{e.classList.remove("active")})}show(e){if(this.hide(),e.builtinButton.classList.add("active"),!e.miniContent.firstChild)for(;e.content.firstChild;)e.miniContent.appendChild(e.content.firstChild);e.miniContent.style.display="block",this.miniPanel.classList.add("visible")}addTab(e){this.tabs[e.id]=e,e.originalIndex=this.nextTabOriginalIndex++,e.allowDetach===!1&&e.button.classList.add("no-detach"),e.onVisibilityChange=()=>this.updatePanelSize(),this.setupTabDragAndDrop(e),e.builtin||this.tabsContainer.appendChild(e.button),this.contentWrapper.appendChild(e.content),e.isVisible||(e.button.style.display="none",e.content.style.display="none"),e.builtin&&this.addBuiltinTab(e),e.profiler=this,this.updatePanelSize(),this.activeTabId&&e.id===this.activeTabId&&this.setActiveTab(e.id)}addBuiltinTab(e){const t=document.createElement("button");t.className="builtin-tab-btn",e.icon?t.innerHTML=e.icon:t.textContent=e.button.textContent.charAt(0).toUpperCase(),t.title=e.button.textContent;const i=document.createElement("div");i.className="mini-panel-content",i.style.display="none",e.builtinButton=t,e.miniContent=i,this.miniPanel.appendChild(i),t.onclick=s=>{s.stopPropagation(),i.style.display!=="none"&&i.children.length>0?this.hide():this.show(e)},this.builtinTabsContainer.appendChild(t),e.builtinButton=t,e.miniContent=i,e.isVisible||(t.style.display="none",i.style.display="none",Array.from(this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(n=>n.style.display!=="none")||(this.builtinTabsContainer.style.display="none"))}removeTab(e){if(!(!e||this.tabs[e.id]===void 0)){if(delete this.tabs[e.id],e.isDetached&&e.detachedWindow){e.detachedWindow.panel&&e.detachedWindow.panel.parentNode&&e.detachedWindow.panel.parentNode.removeChild(e.detachedWindow.panel);const t=this.detachedWindows.indexOf(e.detachedWindow);t!==-1&&this.detachedWindows.splice(t,1)}if(e.builtin?(e.builtinButton&&e.builtinButton.parentNode&&e.builtinButton.parentNode.removeChild(e.builtinButton),e.miniContent&&e.miniContent.parentNode&&e.miniContent.parentNode.removeChild(e.miniContent),Array.from(this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(i=>i.style.display!=="none")||(this.builtinTabsContainer.style.display="none")):e.button&&e.button.parentNode&&e.button.parentNode.removeChild(e.button),e.content&&e.content.parentNode&&e.content.parentNode.removeChild(e.content),this.activeTabId===e.id){this.activeTabId=null;const t=Object.values(this.tabs).filter(i=>!i.isDetached&&i.isVisible);t.length>0?this.setActiveTab(t[0].id):this.updatePanelSize()}else this.updatePanelSize();e.onVisibilityChange=null,e.profiler=null}}updatePanelSize(){if(!Object.values(this.tabs).some(t=>!t.isDetached&&t.isVisible))this.panel.classList.add("no-tabs"),this.panel.classList.contains("maximized")&&(this.panel.classList.remove("maximized"),this.domElement.classList.remove("maximized"),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'),this.position==="bottom"?this.panel.style.height="32px":this.position==="right"&&(this.panel.style.width="45px");else if(this.panel.classList.remove("no-tabs"),Object.keys(this.tabs).length>0)if(this.position==="bottom"){const t=parseInt(this.panel.style.height);(t===32||t===38)&&(this.panel.style.height=`${this.lastHeightBottom}px`)}else this.position==="right"&&parseInt(this.panel.style.width)===45&&(this.panel.style.width=`${this.lastWidthRight}px`);this.dispatchEvent({type:"resize"}),this.checkHeaderScroll()}checkHeaderScroll(){const e=this.panel.querySelector(".profiler-header");e&&(e.scrollWidth>e.clientWidth+1?this.panel.classList.add("has-horizontal-scroll"):this.panel.classList.remove("has-horizontal-scroll"))}setupTabDragAndDrop(e){if(e.button.addEventListener("click",()=>{t||this.setActiveTab(e.id)}),e.allowDetach===!1){e.button.style.cursor="default";return}let t=!1,i,s,n=!1,o=null;const r=10,a=c=>{i=c.clientX,s=c.clientY,t=!1,n=!1,e.button.setPointerCapture(c.pointerId)},l=c=>{const p=c.clientX,u=c.clientY,m=Math.abs(p-i),f=Math.abs(u-s);!t&&(m>r||f>r)&&(t=!0,e.button.style.cursor="grabbing",e.button.style.opacity="0.5",e.button.style.transform="scale(1.05)",o=this.createPreviewWindow(e,p,u),o.style.opacity="0.8"),t&&o&&(n=!0,c.preventDefault(),o.style.left=`${p-200}px`,o.style.top=`${u-20}px`)},h=()=>{if(t&&n&&o){const c=parseInt(o.style.left)+200,p=parseInt(o.style.top)+20;o.parentNode&&o.parentNode.removeChild(o),this.detachTab(e,c,p)}else n||this.setActiveTab(e.id),o&&o.parentNode&&o.parentNode.removeChild(o);e.button.style.opacity="",e.button.style.transform="",e.button.style.cursor="",t=!1,n=!1,o=null,e.button.removeEventListener("pointermove",l),e.button.removeEventListener("pointerup",h),e.button.removeEventListener("pointercancel",h)};e.button.addEventListener("pointerdown",c=>{this.isMobile&&c.pointerType!=="mouse"||(a(c),e.button.addEventListener("pointermove",l),e.button.addEventListener("pointerup",h),e.button.addEventListener("pointercancel",h))}),e.button.style.cursor="grab"}createPreviewWindow(e,t,i){const s=document.createElement("div");s.className="detached-tab-panel",s.style.left=`${t-200}px`,s.style.top=`${i-20}px`,s.style.pointerEvents="none",this.maxZIndex++,s.style.setProperty("z-index",this.maxZIndex,"important");const n=document.createElement("div");n.className="detached-tab-header";const o=document.createElement("span");o.textContent=e.button.textContent.replace("⇱","").trim(),n.appendChild(o);const r=document.createElement("div");r.className="detached-header-controls";const a=document.createElement("button");a.className="detached-reattach-btn",a.innerHTML="↩",r.appendChild(a),n.appendChild(r);const l=document.createElement("div");l.className="detached-tab-content";const h=document.createElement("div");return h.className="detached-tab-resizer",s.appendChild(h),s.appendChild(n),s.appendChild(l),this.domElement.appendChild(s),s}detachTab(e,t,i){if(e.isDetached||e.allowDetach===!1)return;const n=Array.from(this.tabsContainer.children).map(l=>Object.keys(this.tabs).find(h=>this.tabs[h].button===l)).filter(l=>l!==void 0),o=n.indexOf(e.id);let r=null;if(this.activeTabId===e.id){e.setActive(!1);const l=n.filter(h=>h!==e.id&&!this.tabs[h].isDetached&&this.tabs[h].isVisible);if(l.length>0){for(let h=o-1;h>=0;h--)if(l.includes(n[h])){r=n[h];break}if(!r){for(let h=o+1;h<n.length;h++)if(l.includes(n[h])){r=n[h];break}}r||(r=l[0])}}e.button.parentNode&&e.button.parentNode.removeChild(e.button),e.content.parentNode&&e.content.parentNode.removeChild(e.content);const a=this.createDetachedWindow(e,t,i);this.detachedWindows.push(a),e.isDetached=!0,e.detachedWindow=a,r?this.setActiveTab(r):this.activeTabId===e.id&&(this.activeTabId=null),this.updatePanelSize(),this.saveLayout()}createDetachedWindow(e,t,i){const s=window.innerWidth,n=window.innerHeight,o=400,r=300;let a=t-200,l=i-20;a+o>s&&(a=s-o),a<0&&(a=0),l+r>n&&(l=n-r),l<0&&(l=0);const h=document.createElement("div");h.className="detached-tab-panel",h.style.left=`${a}px`,h.style.top=`${l}px`,e.isVisible||(h.style.display="none");const c=document.createElement("div");c.className="detached-tab-header";const p=document.createElement("span");p.textContent=e.button.textContent.replace("⇱","").trim(),c.appendChild(p);const u=document.createElement("div");u.className="detached-header-controls";const m=document.createElement("button");m.className="detached-reattach-btn",m.innerHTML="↩",m.title="Reattach to main panel",m.onclick=()=>this.reattachTab(e),u.appendChild(m),c.appendChild(u);const f=document.createElement("div");f.className="detached-tab-content",f.appendChild(e.content),e.content.style.display="block",e.content.classList.add("active");const b=document.createElement("div");b.className="detached-tab-resizer-top";const g=document.createElement("div");g.className="detached-tab-resizer-right";const x=document.createElement("div");x.className="detached-tab-resizer-bottom";const E=document.createElement("div");E.className="detached-tab-resizer-left";const k=document.createElement("div");return k.className="detached-tab-resizer",h.appendChild(b),h.appendChild(g),h.appendChild(x),h.appendChild(E),h.appendChild(k),h.appendChild(c),h.appendChild(f),this.domElement.appendChild(h),this.setupDetachedWindowDrag(h,c,e),this.setupDetachedWindowResize(h,b,g,x,E,k),h.style.setProperty("z-index",this.maxZIndex,"important"),{panel:h,tab:e}}bringWindowToFront(e){this.maxZIndex++,e.style.setProperty("z-index",this.maxZIndex,"important")}setupDetachedWindowDrag(e,t,i){let s=!1,n,o,r,a;e.addEventListener("pointerdown",()=>{this.bringWindowToFront(e)});const l=p=>{if(p.target.classList.contains("detached-reattach-btn"))return;this.bringWindowToFront(e),s=!0,t.style.cursor="grabbing",t.setPointerCapture(p.pointerId),n=p.clientX,o=p.clientY;const u=e.getBoundingClientRect();r=u.left,a=u.top},h=p=>{if(!s)return;p.preventDefault();const u=p.clientX,m=p.clientY,f=u-n,b=m-o;let g=r+f,x=a+b;const E=window.innerWidth,k=window.innerHeight,B=e.offsetWidth,L=e.offsetHeight,ee=B/2,te=L/2;g+B>E+ee&&(g=E+ee-B),g<-ee&&(g=-ee),x+L>k+te&&(x=k+te-L),x<-te&&(x=-te),e.style.left=`${g}px`,e.style.top=`${x}px`;const Y=this.panel.getBoundingClientRect();u>=Y.left&&u<=Y.right&&m>=Y.top&&m<=Y.bottom?(e.style.opacity="0.5",this.panel.style.outline="2px solid var(--accent-color)"):(e.style.opacity="",this.panel.style.outline="")},c=p=>{if(!s)return;s=!1,t.style.cursor="",e.style.opacity="",this.panel.style.outline="";const u=p.clientX,m=p.clientY;if(u!==void 0&&m!==void 0){const f=this.panel.getBoundingClientRect();u>=f.left&&u<=f.right&&m>=f.top&&m<=f.bottom&&i?this.reattachTab(i):this.saveLayout()}t.removeEventListener("pointermove",h),t.removeEventListener("pointerup",c),t.removeEventListener("pointercancel",c)};t.addEventListener("pointerdown",p=>{l(p),t.addEventListener("pointermove",h),t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}),t.style.cursor="grab"}setupDetachedWindowResize(e,t,i,s,n,o){const l=(h,c)=>{let p=!1,u,m,f,b,g,x;const E=L=>{L.preventDefault(),L.stopPropagation(),p=!0,this.bringWindowToFront(e),h.setPointerCapture(L.pointerId),u=L.clientX,m=L.clientY,f=e.offsetWidth,b=e.offsetHeight,g=e.offsetLeft,x=e.offsetTop},k=L=>{if(!p)return;L.preventDefault();const ee=L.clientX,te=L.clientY,Y=ee-u,de=te-m,_t=window.innerWidth,Et=window.innerHeight;if(c==="right"||c==="corner"){const N=f+Y,X=_t-g;N>=250&&N<=X&&(e.style.width=`${N}px`)}if(c==="bottom"||c==="corner"){const N=b+de,X=Et-x;N>=150&&N<=X&&(e.style.height=`${N}px`)}if(c==="left"){const N=f-Y,X=g+f-250;if(N>=250){const Z=g+Y;Z>=0&&Z<=X&&(e.style.width=`${N}px`,e.style.left=`${Z}px`)}}if(c==="top"){const N=b-de,X=x+b-150;if(N>=150){const Z=x+de;Z>=0&&Z<=X&&(e.style.height=`${N}px`,e.style.top=`${Z}px`)}}this.dispatchEvent({type:"resize"})},B=()=>{p=!1,h.removeEventListener("pointermove",k),h.removeEventListener("pointerup",B),h.removeEventListener("pointercancel",B),this.saveLayout()};h.addEventListener("pointerdown",L=>{E(L),h.addEventListener("pointermove",k),h.addEventListener("pointerup",B),h.addEventListener("pointercancel",B)})};l(t,"top"),l(i,"right"),l(s,"bottom"),l(n,"left"),l(o,"corner")}reattachTab(e){if(!e.isDetached)return;if(e.detachedWindow){const o=this.detachedWindows.indexOf(e.detachedWindow);o>-1&&this.detachedWindows.splice(o,1),e.detachedWindow.panel.parentNode&&e.detachedWindow.panel.parentNode.removeChild(e.detachedWindow.panel),e.detachedWindow=null}e.isDetached=!1;const i=Object.values(this.tabs).filter(o=>o.originalIndex!==void 0&&o.isVisible).sort((o,r)=>o.originalIndex-r.originalIndex),s=Array.from(this.tabsContainer.children);let n=0;for(const o of i){if(o.id===e.id)break;!o.isDetached&&!o.builtin&&n++}n>=s.length||s.length===0?this.tabsContainer.appendChild(e.button):this.tabsContainer.insertBefore(e.button,s[n]),this.contentWrapper.appendChild(e.content),this.setActiveTab(e.id),this.updatePanelSize(),this.saveLayout()}setActiveTab(e){if(this.activeTabId&&this.tabs[this.activeTabId]&&!this.tabs[this.activeTabId].isDetached&&this.tabs[this.activeTabId].setActive(!1),this.activeTabId=e,this.tabs[e]){const t=this.tabs[e];t.isVisible||t.show(),t.setActive(!0)}this.saveLayout(),this.checkHeaderScroll()}togglePanel(){this.panel.classList.toggle("visible"),this.toggleButton.classList.toggle("panel-open"),this.miniPanel.classList.toggle("panel-open"),this.panel.classList.contains("visible")&&this.activeTabId&&this.tabs[this.activeTabId]&&this.tabs[this.activeTabId].setActive(!0),this.updateWidgetPosition(),this.dispatchEvent({type:"resize"}),this.saveLayout()}togglePosition(){const e=this.position==="bottom"?"right":"bottom";this.setPosition(e)}setPosition(e){if(this.position===e)return;this.panel.style.transition="none";const t=this.panel.classList.contains("maximized");e==="right"?(this.position="right",this.floatingBtn.classList.add("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 15h18"></path></svg>',this.floatingBtn.title="Switch to Bottom",this.panel.classList.remove("position-bottom"),this.panel.classList.add("position-right"),this.panel.style.bottom="",this.panel.style.top="0",this.panel.style.right="0",this.panel.style.left="",t?(this.panel.style.width="100%",this.panel.style.height="100%"):(this.panel.style.width=`${this.lastWidthRight}px`,this.panel.style.height="100%")):(this.position="bottom",this.floatingBtn.classList.remove("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line></svg>',this.floatingBtn.title="Switch to Right Side",this.panel.classList.remove("position-right"),this.panel.classList.add("position-bottom"),this.panel.style.top="",this.panel.style.right="",this.panel.style.bottom="0",this.panel.style.left="0",t?(this.panel.style.width="100%",this.panel.style.height="100%"):(this.panel.style.width="100%",this.panel.style.height=`${this.lastHeightBottom}px`)),this.updateWidgetPosition(),setTimeout(()=>{this.panel.style.transition=""},50),this.updatePanelSize(),this.saveLayout()}saveLayout(){if(this.isLoadingLayout)return;const e={position:this.position,lastHeightBottom:this.lastHeightBottom,lastWidthRight:this.lastWidthRight,activeTabId:this.activeTabId,detachedTabs:[],isVisible:this.panel.classList.contains("visible")};this.detachedWindows.forEach(t=>{const i=t.tab,s=t.panel,n=parseFloat(s.style.left)||s.offsetLeft||0,o=parseFloat(s.style.top)||s.offsetTop||0,r=s.offsetWidth,a=s.offsetHeight;e.detachedTabs.push({tabId:i.id,originalIndex:i.originalIndex!==void 0?i.originalIndex:0,left:n,top:o,width:r,height:a})});try{oe("layout",e)}catch(t){console.warn("Failed to save profiler layout:",t)}}loadLayout(){this.isLoadingLayout=!0;try{const e=ce("layout");if(Object.keys(e).length===0)return;if(e.detachedTabs&&e.detachedTabs.length>0){const s=window.innerWidth,n=window.innerHeight;e.detachedTabs=e.detachedTabs.map(o=>{let{left:r,top:a,width:l,height:h}=o;l>s&&(l=s-100),h>n&&(h=n-100);const c=l/2,p=h/2;return r+l>s+c&&(r=s+c-l),r<-c&&(r=-c),a+h>n+p&&(a=n+p-h),a<-p&&(a=-p),{...o,left:r,top:a,width:l,height:h}})}e.position&&(this.position=e.position),e.lastHeightBottom&&(this.lastHeightBottom=e.lastHeightBottom),e.lastWidthRight&&(this.lastWidthRight=e.lastWidthRight);const t=window.innerWidth,i=window.innerHeight;this.lastHeightBottom>i-50&&(this.lastHeightBottom=i-50),this.lastWidthRight>t-50&&(this.lastWidthRight=t-50),this.position==="right"?(this.floatingBtn.classList.add("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 15h18"></path></svg>',this.floatingBtn.title="Switch to Bottom",this.panel.classList.remove("position-bottom"),this.panel.classList.add("position-right"),this.toggleButton.classList.add("position-right"),this.miniPanel.classList.add("position-right"),this.panel.style.bottom="",this.panel.style.top="0",this.panel.style.right="0",this.panel.style.left="",this.panel.style.width=`${this.lastWidthRight}px`,this.panel.style.height="100%"):this.panel.style.height=`${this.lastHeightBottom}px`,e.isVisible&&(this.panel.classList.add("visible"),this.toggleButton.classList.add("panel-open")),e.activeTabId&&this.setActiveTab(e.activeTabId),e.detachedTabs&&e.detachedTabs.length>0&&(this.pendingDetachedTabs=e.detachedTabs,this.restoreDetachedTabs()),this.updatePanelSize(),this.updateWidgetPosition(),this.panel.classList.contains("visible")&&this.miniPanel.classList.add("panel-open")}catch(e){console.warn("Failed to load profiler layout:",e)}finally{this.isLoadingLayout=!1}}restoreDetachedTabs(){if(!this.pendingDetachedTabs||this.pendingDetachedTabs.length===0)return;if(this.pendingDetachedTabs.forEach(t=>{const i=this.tabs[t.tabId];if(!i||i.isDetached)return;t.originalIndex!==void 0&&(i.originalIndex=t.originalIndex),i.button.parentNode&&i.button.parentNode.removeChild(i.button),i.content.parentNode&&i.content.parentNode.removeChild(i.content);const s=this.createDetachedWindow(i,0,0);s.panel.style.left=`${t.left}px`,s.panel.style.top=`${t.top}px`,s.panel.style.width=`${t.width}px`,s.panel.style.height=`${t.height}px`,this.constrainWindowToBounds(s.panel),this.detachedWindows.push(s),i.isDetached=!0,i.detachedWindow=s}),this.pendingDetachedTabs=null,this.detachedWindows.forEach(t=>{const i=parseInt(getComputedStyle(t.panel).zIndex)||0;i>this.maxZIndex&&(this.maxZIndex=i)}),!this.activeTabId||!this.tabs[this.activeTabId]||this.tabs[this.activeTabId].isDetached||!this.tabs[this.activeTabId].isVisible){const i=Object.keys(this.tabs).filter(s=>!this.tabs[s].isDetached&&this.tabs[s].isVisible);if(i.length>0){const n=Array.from(this.tabsContainer.children).map(o=>Object.keys(this.tabs).find(r=>this.tabs[r].button===o)).filter(o=>o!==void 0&&!this.tabs[o].isDetached&&this.tabs[o].isVisible);this.setActiveTab(n[0]||i[0])}else this.activeTabId=null}this.updatePanelSize()}setHorizontalAlign(e){return this.horizontalAlign=e,this.updateWidgetPosition(),this}setVerticalAlign(e){return this.verticalAlign=e,this.updateWidgetPosition(),this}updateWidgetPosition(){const e=this.panel.classList.contains("visible"),t=this.panel.classList.contains("maximized"),i=this.position==="right";let s=this.horizontalAlign,n=this.verticalAlign;e&&(i?this.horizontalAlign==="right"&&(s="left"):t?n=this.verticalAlign==="top"?"bottom":"top":this.verticalAlign==="bottom"&&(n="top")),s==="left"?(this.toggleButton.classList.add("toggle-left"),this.miniPanel.classList.add("toggle-left")):(this.toggleButton.classList.remove("toggle-left"),this.miniPanel.classList.remove("toggle-left")),n==="bottom"?(this.toggleButton.classList.add("toggle-bottom"),this.miniPanel.classList.add("toggle-bottom")):(this.toggleButton.classList.remove("toggle-bottom"),this.miniPanel.classList.remove("toggle-bottom")),this.notifyLayoutChange()}isVertical(){return this.position==="left"||this.position==="right"||this.panel&&(this.panel.classList.contains("position-left")||this.panel.classList.contains("position-right"))}notifyLayoutChange(){const e=this.isVertical();this.dispatchEvent({type:"orientationchange",position:this.position,isVertical:e}),this.dispatchEvent({type:"layoutchange",position:this.position,isVertical:e})}dispose(){for(const e of Object.values(this.tabs))e.dispose();this.domElement.remove();for(const e of this.detachedWindows)e.panel.remove();this.toggleGraph.dispose()}}class ae extends He{constructor(e,t={}){super(),this.id=e.toLowerCase().replace(/\s+/g,"-"),this.button=document.createElement("button"),this.button.className="tab-btn",this.button.textContent=e,this.content=document.createElement("div"),this.content.className="profiler-content",this.content.classList.add(`${this.id}-content`),this._isActive=!1,this.isVisible=!0,this.isDetached=!1,this.detachedWindow=null,this.allowDetach=t.allowDetach!==void 0?t.allowDetach:!0,this.builtin=t.builtin!==void 0?t.builtin:!1,this.icon=t.icon||null,this.builtinButton=null,this.miniContent=null,this.profiler=null,this.onVisibilityChange=null}get inspector(){return this.profiler.inspector}get isActive(){return this.isDetached&&this.isVisible?!0:this.profiler&&this.profiler.panel.classList.contains("visible")?this._isActive:!1}set isActive(e){this._isActive=e}init(){}update(){}setActive(e){this.button.classList.toggle("active",e),this.content.classList.toggle("active",e),this.isActive=e}show(){this.content.style.display="",this.button.style.display="",this.isVisible=!0,this.isDetached&&this.detachedWindow&&(this.detachedWindow.panel.style.display=""),this.onVisibilityChange&&this.onVisibilityChange(),this.showBuiltin()}hide(){this.content.style.display="none",this.button.style.display="none",this.isVisible=!1,this.isDetached&&this.detachedWindow&&(this.detachedWindow.panel.style.display="none"),this.onVisibilityChange&&this.onVisibilityChange(),this.hideBuiltin()}showBuiltin(){if(this.builtin&&(this.profiler&&this.profiler.builtinTabsContainer&&(this.profiler.builtinTabsContainer.style.display=""),this.builtinButton&&(this.builtinButton.style.display=""),this.miniContent&&this.profiler)){if(this.profiler.miniPanel.querySelectorAll(".mini-panel-content").forEach(e=>{e.style.display="none"}),this.profiler.builtinTabsContainer.querySelectorAll(".builtin-tab-btn").forEach(e=>{e.classList.remove("active")}),this.builtinButton&&this.builtinButton.classList.add("active"),!this.miniContent.firstChild)for(;this.content.firstChild;)this.miniContent.appendChild(this.content.firstChild);this.miniContent.style.display="block",this.profiler.miniPanel.classList.add("visible")}}hideBuiltin(){if(this.builtin){if(this.builtinButton&&(this.builtinButton.style.display="none"),this.miniContent&&(this.miniContent.style.display="none",this.miniContent.firstChild))for(;this.miniContent.firstChild;)this.content.appendChild(this.miniContent.firstChild);this.builtinButton&&this.builtinButton.classList.remove("active"),this.profiler&&(Array.from(this.profiler.miniPanel.querySelectorAll(".mini-panel-content")).some(i=>i.style.display!=="none")||this.profiler.miniPanel.classList.remove("visible"),Array.from(this.profiler.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(i=>i.style.display!=="none")||(this.profiler.builtinTabsContainer.style.display="none"))}}dispose(){}}class ke{constructor(...e){this.headers=e,this.children=[],this.domElement=document.createElement("div"),this.domElement.className="list-container",this.domElement.style.padding="5px 10px 10px 10px",this.id=`list-${Math.random().toString(36).slice(2,11)}`,this.domElement.dataset.listId=this.id;const t=document.createElement("div");t.className="list-header",this.headers.forEach(i=>{const s=document.createElement("div");s.className="list-header-cell",s.textContent=i,t.appendChild(s)}),this.domElement.appendChild(t)}setGridStyle(e){this.domElement.style.setProperty("--list-grid-template",e)}setViewMode(e){e==="grid"?this.domElement.classList.add("grid-mode"):this.domElement.classList.remove("grid-mode")}add(e){e.parent!==null&&e.parent.remove(e),e.domElement.classList.add("header-wrapper","section-start"),e.parent=this,this.children.push(e),this.domElement.appendChild(e.domElement)}remove(e){const t=this.children.indexOf(e);return t!==-1&&(this.children.splice(t,1),this.domElement.removeChild(e.domElement),e.parent=null),this}}class _{constructor(...e){this.children=[],this.isOpen=!0,this.isCollapsible=!1,this.childrenContainer=null,this.parent=null,this.domElement=document.createElement("div"),this.domElement.className="list-item-wrapper",this.itemRow=document.createElement("div"),this.itemRow.className="list-item-row",this.userData={},this.data=[],e.forEach((t,i)=>{const s=document.createElement("div");s.className="list-item-cell",this.itemRow.appendChild(s),this.setValue(i,t)}),this.domElement.appendChild(this.itemRow),this.onItemClick=this.onItemClick.bind(this)}onItemClick(e){e.target.closest("button, a, input, label")||this.toggle()}add(e,t=this.children.length){return e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.splice(t,0,e),this.itemRow.classList.add("collapsible"),this.childrenContainer||(this.childrenContainer=document.createElement("div"),this.childrenContainer.className="list-children-container",this.childrenContainer.classList.toggle("closed",!this.isOpen),this.domElement.appendChild(this.childrenContainer),this.itemRow.addEventListener("click",this.onItemClick)),this.childrenContainer.insertBefore(e.domElement,this.childrenContainer.children[t]||null),this.updateToggler(),this}remove(e){const t=this.children.indexOf(e);return t!==-1&&(this.children.splice(t,1),this.childrenContainer.removeChild(e.domElement),e.parent=null,this.children.length===0&&(this.itemRow.classList.remove("collapsible"),this.itemRow.removeEventListener("click",this.onItemClick),this.childrenContainer.remove(),this.childrenContainer=null),this.updateToggler()),this}updateToggler(){const e=this.itemRow.querySelector(".list-item-cell:first-child");let t=this.itemRow.querySelector(".item-toggler");this.children.length>0||this.isCollapsible?(t||(t=document.createElement("span"),t.className="item-toggler",e.prepend(t)),this.isOpen&&this.itemRow.classList.add("open")):t&&t.remove()}setCollapsible(e){return this.isCollapsible=e,e?(this.itemRow.classList.add("collapsible"),this.childrenContainer||(this.childrenContainer=document.createElement("div"),this.childrenContainer.className="list-children-container",this.childrenContainer.classList.toggle("closed",!this.isOpen),this.domElement.appendChild(this.childrenContainer),this.itemRow.addEventListener("click",this.onItemClick))):this.itemRow.classList.remove("collapsible"),this.updateToggler(),this}toggle(){return this.isOpen=!this.isOpen,this.itemRow.classList.toggle("open",this.isOpen),this.childrenContainer&&this.childrenContainer.classList.toggle("closed",!this.isOpen),this}close(){return this.isOpen&&this.toggle(),this}show(){return this.domElement.style.display="",this}hide(){return this.domElement.style.display="none",this}setValue(e,t){this.data[e]=t;const i=this.itemRow.children[e];if(i){const s=i.querySelector(".item-toggler");i.innerHTML="",s&&i.appendChild(s),t instanceof HTMLElement?i.appendChild(t):i.append(String(t))}return this}getValue(e){return this.data[e]}}function v(){const d=document.createElement("span");return d.className="value",d}function y(d,e){d&&d.textContent!==e&&(d.textContent=e)}function os(d){const e=d.lastIndexOf("/");if(e===-1)return{path:"",name:d.trim()};const t=d.substring(0,e).trim(),i=d.substring(e+1).trim();return{path:t,name:i}}function as(d){return d.replace(/([a-z0-9])([A-Z])/g,"$1 $2").trim()}function U(d,e=2){if(d===0)return"0 Bytes";const t=1024,i=e<0?0:e,s=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(d)/Math.log(t));return parseFloat((d/Math.pow(t,n)).toFixed(i))+" "+s[n]}function xt(d,e){let t=d.querySelector(".info-icon");if(!t)t=document.createElement("span"),t.className="info-icon",t.textContent="i",d.appendChild(t);else{const r=t.cloneNode(!0);t.replaceWith(r),t=r}const i=()=>{const r=t.closest(".three-inspector")||document.body;let a=r.querySelector(".three-inspector-info-tooltip");a||(a=document.createElement("div"),a.className="info-tooltip three-inspector-info-tooltip",r.appendChild(a));const l=e.trim().replace(/### (.*?)(?:\r?\n|$)/g,"<h3>$1</h3>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br/>");a.innerHTML=l;const h=t.getBoundingClientRect(),c=a.getBoundingClientRect().width,p=8,u=c/2,m=Math.max(p+u,Math.min(window.innerWidth-p-u,h.left+h.width/2));a.style.left=m+"px",a.style.top=h.top-8+"px",a.style.opacity="1",a.style.visibility="visible"},s=()=>{const a=(t.closest(".three-inspector")||document.body).querySelector(".three-inspector-info-tooltip");a&&(a.style.opacity="0",a.style.visibility="hidden")};let n=!1;const o=r=>{t.contains(r.target)||(n=!1,t.classList.remove("active"),s(),document.removeEventListener("pointerdown",o))};return t.addEventListener("pointerenter",()=>{i()}),t.addEventListener("pointerleave",()=>{n||s()}),t.addEventListener("click",r=>{r.stopPropagation(),n=!n,n?(t.classList.add("active"),i(),document.addEventListener("pointerdown",o)):(t.classList.remove("active"),s(),document.removeEventListener("pointerdown",o))}),t}class ls extends ae{constructor(e={}){super("Performance",e);const t=new ke("Name","CPU","GPU","Total");t.setGridStyle("minmax(200px, 2fr) 80px 80px 80px"),t.domElement.style.minWidth="600px";const i=document.createElement("div");i.className="list-scroll-wrapper",i.appendChild(t.domElement),this.content.appendChild(i);const s=document.createElement("div");s.className="graph-container";const n=new Te;n.addLine("fps","var( --color-fps )"),n.addLine("cpu","var( --color-yellow )"),n.addLine("gpu","var( --color-green )"),s.append(n.domElement),this.graphFpsCounter=v();const o=new _("Graph Stats",v(),v(),this.graphFpsCounter);t.add(o);const r=new _(s);r.itemRow.childNodes[0].style.gridColumn="1 / -1",o.add(r);const a=new _("Frame Stats",v(),v(),v());t.add(a);const l=new _("Miscellaneous & Idle",v(),v(),v());l.domElement.firstChild.style.backgroundColor="#00ff0b1a",l.domElement.firstChild.classList.add("no-hover"),a.add(l),this.notInUse=new Map,this.frameStats=a,this.graphStats=o,this.graph=n,this.miscellaneous=l,this.currentRender=null,this.currentItem=null,this.frameItems=new Map}resolveStats(e,t,i=1/0){const s=e.getStatsData(t.cid);let n=s.item;if(n===void 0)n=new _(v(),v(),v(),v()),t.name?t.isComputeStats===!0&&(t.name=`${t.name} [ Compute ]`):t.name=`Unnamed ${t.cid}`,n.userData.name=t.name,this.currentItem.add(n),s.item=n;else{n.userData.name=t.name,this.notInUse.has(t.cid)&&(n.domElement.firstElementChild.classList.remove("alert"),this.notInUse.delete(t.cid));const c=t.parent.children.indexOf(t);(n.parent===null||n.parent.children.indexOf(n)!==c)&&this.currentItem.add(n,c)}let o=n.userData.name;t.isComputeStats&&(o+=" [ Compute ]");const r=t.gpuNotAvailable===!0?0:Math.min(s.gpu,i),a=s.cpu+r;y(n.data[0],o),y(n.data[1],s.cpu.toFixed(2)),y(n.data[2],t.gpuNotAvailable===!0?"-":r.toFixed(2)),y(n.data[3],a.toFixed(2));const l=this.currentItem;this.currentItem=n;const h=t.gpuNotAvailable===!0?i:r;for(const c of t.children)this.resolveStats(e,c,h);this.currentItem=l,this.frameItems.set(t.cid,n)}updateGraph(e,t){const i=e.fps;if(this.graph.addPoint("fps",i),t){const s=Math.min((t.cpu||0)*i/1e3,1)*i,n=Math.min((t.gpu||0)*i/1e3,1)*i;this.graph.addPoint("cpu",s),this.graph.addPoint("gpu",n)}this.graph.update()}addNotInUse(e,t){t.domElement.firstElementChild.classList.add("alert"),this.notInUse.set(e,{item:t,time:performance.now()}),this.updateNotInUse(e)}updateNotInUse(e){const{item:t,time:i}=this.notInUse.get(e),s=performance.now(),o=5-Math.floor((s-i)/1e3);if(o>=0){const r="*".repeat(Math.max(0,o)),a=t.domElement.querySelector(".list-item-cell .value");y(a,t.userData.name+" (not in use) "+r)}else t.domElement.firstElementChild.classList.remove("alert"),t.parent.remove(t),this.notInUse.delete(e)}updateText(e,t){const i=new Map(this.frameItems);this.frameItems.clear();const s=e.getRenderer().backend.hasTimestamp,n=s?Math.min(t.gpu,t.deltaTime):0,o=t.cpu+n;this.currentItem=this.frameStats;for(const r of t.children)this.resolveStats(e,r,n);for(const[r,a]of i)this.frameItems.has(r)||(this.addNotInUse(r,a),i.delete(r));for(const r of this.notInUse.keys())this.updateNotInUse(r);y(this.graphFpsCounter,e.fps.toFixed()+" FPS"),y(this.frameStats.data[1],t.cpu.toFixed(2)),y(this.frameStats.data[2],s?n.toFixed(2):"-"),y(this.frameStats.data[3],o.toFixed(2)),y(this.miscellaneous.data[1],t.miscellaneous.toFixed(2)),y(this.miscellaneous.data[2],"-"),y(this.miscellaneous.data[3],t.miscellaneous.toFixed(2)),this.currentItem=null}}class hs extends ae{constructor(e={}){super("Memory",e);const t=new ke("Name","Count","Size");t.setGridStyle("minmax(200px, 2fr) 60px 100px"),t.domElement.style.minWidth="300px";const i=document.createElement("div");i.className="list-scroll-wrapper",i.appendChild(t.domElement),this.content.appendChild(i);const s=document.createElement("div");s.className="graph-container";const n=new Te;n.addLine("total","var( --color-yellow )"),s.append(n.domElement);const o=new _("Graph Stats","","");t.add(o);const r=new _(s);r.itemRow.childNodes[0].style.gridColumn="1 / -1",o.add(r),this.memoryStats=new _("Renderer Info","",v()),this.memoryStats.domElement.firstChild.classList.add("no-hover"),t.add(this.memoryStats),this.attributes=new _("Attributes",v(),v()),this.memoryStats.add(this.attributes),this.geometries=new _("Geometries",v(),"N/A"),this.memoryStats.add(this.geometries),this.indexAttributes=new _("Index Attributes",v(),v()),this.memoryStats.add(this.indexAttributes),this.indirectStorageAttributes=new _("Indirect Storage Attributes",v(),v()),this.memoryStats.add(this.indirectStorageAttributes),this.programs=new _("Programs",v(),v()),this.memoryStats.add(this.programs),this.readbackBuffers=new _("Readback Buffers",v(),v()),this.memoryStats.add(this.readbackBuffers),this.renderTargets=new _("Render Targets",v(),"N/A"),this.memoryStats.add(this.renderTargets),this.storageAttributes=new _("Storage Attributes",v(),v()),this.memoryStats.add(this.storageAttributes),this.textures=new _("Textures",v(),v()),this.memoryStats.add(this.textures),this.uniformBuffers=new _("Uniform Buffers",v(),v()),this.memoryStats.add(this.uniformBuffers),this.graph=n}updateGraph(e){const i=e.getRenderer().info.memory;this.graph.addPoint("total",i.total),this.graph.limit===0&&(this.graph.limit=1),this.graph.update()}updateText(e){const i=e.getRenderer().info.memory;y(this.memoryStats.data[2],U(i.total)),y(this.attributes.data[1],i.attributes.toString()),y(this.attributes.data[2],U(i.attributesSize)),y(this.geometries.data[1],i.geometries.toString()),y(this.indexAttributes.data[1],i.indexAttributes.toString()),y(this.indexAttributes.data[2],U(i.indexAttributesSize)),y(this.indirectStorageAttributes.data[1],i.indirectStorageAttributes.toString()),y(this.indirectStorageAttributes.data[2],U(i.indirectStorageAttributesSize)),y(this.programs.data[1],i.programs.toString()),y(this.programs.data[2],U(i.programsSize)),y(this.readbackBuffers.data[1],i.readbackBuffers.toString()),y(this.readbackBuffers.data[2],U(i.readbackBuffersSize)),y(this.renderTargets.data[1],i.renderTargets.toString()),y(this.storageAttributes.data[1],i.storageAttributes.toString()),y(this.storageAttributes.data[2],U(i.storageAttributesSize)),y(this.textures.data[1],i.textures.toString()),y(this.textures.data[2],U(i.texturesSize)),y(this.uniformBuffers.data[1],i.uniformBuffers.toString()),y(this.uniformBuffers.data[2],U(i.uniformBuffersSize))}}class cs extends ae{constructor(e={}){super("Console",e),this.filters={info:!0,warn:!0,error:!0},this.filterText="",this.unreadErrors=0,this.unreadWarns=0,this.tabBadgeContainer=document.createElement("span"),this.tabBadgeContainer.className="tab-badge-container",this.tabErrorBadge=document.createElement("span"),this.tabErrorBadge.className="tab-badge error",this.tabErrorBadge.style.display="none",this.tabWarnBadge=document.createElement("span"),this.tabWarnBadge.className="tab-badge warn",this.tabWarnBadge.style.display="none",this.tabBadgeContainer.appendChild(this.tabErrorBadge),this.tabBadgeContainer.appendChild(this.tabWarnBadge),this.button.appendChild(this.tabBadgeContainer),this.buildHeader(),this.logContainer=document.createElement("div"),this.logContainer.classList.add("console-log"),this.content.appendChild(this.logContainer),this.lastMessage=null}buildHeader(){const e=document.createElement("div");e.className="toolbar";const t=document.createElement("input");t.type="text",t.className="console-filter-input",t.placeholder="Filter...",t.addEventListener("input",n=>{this.filterText=n.target.value.toLowerCase(),this.applyFilters()});const i=document.createElement("button");i.className="console-copy-button",i.title="Copy all",i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',i.addEventListener("click",()=>this.copyAll(i));const s=document.createElement("div");s.className="console-buttons-group",Object.keys(this.filters).forEach(n=>{const o=document.createElement("label");o.className="custom-checkbox",o.style.color=`var(--${n==="info"?"text-primary":"color-"+(n==="warn"?"yellow":"red")})`;const r=document.createElement("input");r.type="checkbox",r.checked=this.filters[n],r.dataset.type=n;const a=document.createElement("span");a.className="checkmark";const l=document.createElement("span");l.className="checkbox-text",l.textContent=n.charAt(0).toUpperCase()+n.slice(1),o.appendChild(r),o.appendChild(a),o.appendChild(l),s.appendChild(o)}),s.addEventListener("change",n=>{const o=n.target.dataset.type;o in this.filters&&(this.filters[o]=n.target.checked,this.applyFilters())}),s.appendChild(i),e.appendChild(t),e.appendChild(s),this.content.appendChild(e)}applyFilters(){this.logContainer.querySelectorAll(".log-message").forEach(t=>{const i=t.dataset.type,s=t.dataset.rawText.toLowerCase(),n=this.filters[i],o=s.includes(this.filterText);t.classList.toggle("hidden",!(n&&o))})}copyAll(e){const i=this.logContainer.ownerDocument.defaultView.getSelection(),s=i.toString(),n=s&&this.logContainer.contains(i.anchorNode);let o;if(n)o=s;else{const r=this.logContainer.querySelectorAll(".log-message:not(.hidden)");o=Array.from(r).map(a=>a.dataset.rawText).join(`
`)}navigator.clipboard.writeText(o),e.classList.add("copied"),setTimeout(()=>e.classList.remove("copied"),350)}_getIcon(e,t){let i;return t==="tip"?i="💭":t==="tsl"?i="✨":t==="webgpurenderer"?i="🎨":e==="warn"?i="⚠️":e==="error"?i="🔴":e==="info"&&(i="ℹ️"),i}_formatMessage(e,t){const i=document.createDocumentFragment(),s=t.match(/^([\w\.]+:\s)/);let n=t;if(s){const r=s[0],a=r.slice(0,-2).split("."),l=(a.length>1?a[a.length-1]:a[0])+":",h=document.createElement("span");h.className="log-prefix",h.textContent=l,i.appendChild(h),n=t.substring(r.length)}const o=n.split(/(".*?"|'.*?'|`.*?`)/g).map(r=>r.trim()).filter(Boolean);return o.forEach((r,a)=>{if(/^("|'|`)/.test(r)){const l=document.createElement("span");l.className="log-code",l.textContent=r.slice(1,-1),i.appendChild(l)}else a>0&&(r=" "+r),a<o.length-1&&(r+=" "),i.appendChild(document.createTextNode(r))}),i}setActive(e){super.setActive(e),e&&this.clearUnread()}clearUnread(){this.unreadErrors=0,this.unreadWarns=0,this.updateBadges()}updateBadges(){if(!this.profiler)return;const e=this.profiler.toggleButton.querySelector(".console-badge.error"),t=this.profiler.toggleButton.querySelector(".console-badge.warn");e&&(this.unreadErrors>0?(e.textContent=this.unreadErrors>99?"+99":this.unreadErrors,e.style.display=""):e.style.display="none"),t&&(this.unreadWarns>0?(t.textContent=this.unreadWarns>99?"+99":this.unreadWarns,t.style.display=""):t.style.display="none"),this.tabErrorBadge&&(this.unreadErrors>0?(this.tabErrorBadge.textContent=this.unreadErrors>99?"+99":this.unreadErrors,this.tabErrorBadge.style.display=""):this.tabErrorBadge.style.display="none"),this.tabWarnBadge&&(this.unreadWarns>0?(this.tabWarnBadge.textContent=this.unreadWarns>99?"+99":this.unreadWarns,this.tabWarnBadge.style.display=""):this.tabWarnBadge.style.display="none")}addMessage(e,t){if(this.lastMessage&&this.lastMessage.type===e&&this.lastMessage.text===t)this.lastMessage.count++,this.lastMessage.countBadge.textContent=this.lastMessage.count,this.lastMessage.countBadge.style.display="";else{const s=document.createElement("div");s.className=`log-message ${e}`,s.dataset.type=e,s.dataset.rawText=t;const n=document.createElement("span");n.className="log-count-badge",n.style.display="none",s.appendChild(n);let o=null;const r=t.match(/^([\w\.]+:\s)/);if(r){const p=r[0].slice(0,-2).split("."),u=(p.length>1?p[p.length-1]:p[0])+":";o=this._getIcon(e,u.split(":")[0].toLowerCase())}if(o){const c=document.createElement("span");c.className="log-icon",c.textContent=o,s.appendChild(c)}const a=document.createElement("span");a.className="log-body",a.appendChild(this._formatMessage(e,t)),s.appendChild(a);const l=this.filters[e],h=t.toLowerCase().includes(this.filterText);if(s.classList.toggle("hidden",!(l&&h)),this.logContainer.appendChild(s),this.logContainer.children.length>200){const c=this.logContainer.firstChild;this.logContainer.removeChild(c),this.lastMessage&&this.lastMessage.element===c&&(this.lastMessage=null)}this.lastMessage={type:e,text:t,count:1,element:s,countBadge:n}}this.logContainer.scrollTop=this.logContainer.scrollHeight,!this.isActive&&(e==="error"?(this.unreadErrors++,this.updateBadges()):e==="warn"&&(this.unreadWarns++,this.updateBadges()))}}class J extends He{constructor(){super(),this.domElement=document.createElement("div"),this.domElement.className="param-control",this._onChangeFunction=null,this._changeTimeout=null,this._debounceTime=0,this.addEventListener("change",e=>{clearTimeout(this._changeTimeout),this._changeTimeout=setTimeout(()=>{this._onChangeFunction&&this._onChangeFunction(e.value)},this._debounceTime)})}setValue(){return this.dispatchChange(),this}getValue(){return null}dispatchChange(){this.dispatchEvent({type:"change",value:this.getValue()})}onChange(e){return this._onChangeFunction=e,this}debounce(e){return this._debounceTime=e,this}show(){return this.dispatchEvent({type:"show"}),this}hide(){return this.dispatchEvent({type:"hide"}),this}}class yt extends J{constructor({value:e=0,step:t=.1,min:i=-1/0,max:s=1/0}){super(),this.input=document.createElement("input"),this.input.type="number",this.input.value=e,this.input.step=t,this.input.min=i,this.input.max=s,this.input.addEventListener("change",this._onChangeValue.bind(this)),this.domElement.appendChild(this.input),this.addDragHandler()}_onChangeValue(){const e=parseFloat(this.input.value),t=parseFloat(this.input.min),i=parseFloat(this.input.max);e>i?this.input.value=i:e<t?this.input.value=t:isNaN(e)&&(this.input.value=t),this.dispatchChange()}addDragHandler(){let t=!1,i=!1,s,n,o;this.input.style.touchAction="none",this.input.addEventListener("pointerdown",r=>{t=!0,s=r.clientX,n=r.clientY,o=parseFloat(this.input.value)}),document.addEventListener("pointermove",r=>{if(t&&(Math.abs(r.clientY-n)>2?(t=!1,i=!0,n=r.clientY,this.input.blur(),document.body.style.cursor="ns-resize"):Math.abs(r.clientX-s)>2&&(t=!1)),i){const a=n-r.clientY,l=parseFloat(this.input.step)||1,h=parseFloat(this.input.min),c=parseFloat(this.input.max);let p=l;!isNaN(c)&&isFinite(h)&&(p=(c-h)/100);const u=a*p;let m=o+u;m=Math.max(h,Math.min(m,c));const f=(String(l).split(".")[1]||[]).length;this.input.value=m.toFixed(f),this.input.dispatchEvent(new Event("input")),this.dispatchChange()}}),document.addEventListener("pointerup",()=>{t=!1,i&&(i=!1,document.body.style.cursor="default")})}setValue(e){return this.input.value=e,super.setValue(e)}getValue(){return parseFloat(this.input.value)}}class ds extends J{constructor({value:e=!1}){super();const t=document.createElement("label");t.className="custom-checkbox";const i=document.createElement("input");i.type="checkbox",i.checked=e,this.checkbox=i;const s=document.createElement("span");s.className="checkmark",t.appendChild(i),t.appendChild(s),this.domElement.appendChild(t),i.addEventListener("change",()=>{this.dispatchChange()})}setValue(e){return this.checkbox.checked=e,super.setValue(e)}getValue(){return this.checkbox.checked}}class ps extends J{constructor({value:e=0,min:t=0,max:i=1,step:s=.01}){super(),this.slider=document.createElement("input"),this.slider.type="range",this.slider.min=t,this.slider.max=i,this.slider.step=s;const n=new yt({value:e,min:t,max:i,step:s});this.numberInput=n.input,this.numberInput.style.flexBasis="80px",this.numberInput.style.flexShrink="0",this.slider.value=e,this.domElement.append(this.slider,this.numberInput),this.slider.addEventListener("input",()=>{this.numberInput.value=this.slider.value,this.dispatchChange()}),n.addEventListener("change",()=>{this.slider.value=parseFloat(this.numberInput.value),this.dispatchChange()})}setValue(e){return this.slider.value=e,this.numberInput.value=e,super.setValue(e)}getValue(){return parseFloat(this.slider.value)}step(e){return this.slider.step=e,this.numberInput.step=e,this.slider.value=parseFloat(this.numberInput.value),this}}class us extends J{constructor({options:e=[],value:t=""}){super();const i=document.createElement("select"),s=(n,o)=>{const r=document.createElement("option");return r.value=n,r.textContent=n,o==t&&(r.selected=!0),i.appendChild(r),r};Array.isArray(e)?e.forEach(n=>s(n,n)):Object.entries(e).forEach(([n,o])=>s(n,o)),this.domElement.appendChild(i),i.addEventListener("change",()=>{this.dispatchChange()}),this.options=e,this.select=i}setValue(e){if(Array.isArray(this.options))this.select.value=e;else{const t=Object.entries(this.options).find(([,i])=>i===e);t?this.select.value=t[0]:this.select.value=e}return super.setValue(e)}getValue(){const e=this.options;return Array.isArray(e)?e[this.select.selectedIndex]:e[this.select.value]}}class ms extends J{constructor({value:e="#ffffff"}){super();const t=document.createElement("input");t.type="color",t.value=this._getColorHex(e),this.colorInput=t,this._value=e,t.addEventListener("input",()=>{const i=t.value;this._value.isColor?this._value.setHex(parseInt(i.slice(1),16)):this._value=i,this.dispatchChange()}),this.domElement.appendChild(t)}setValue(e){const t=this._getColorHex(e);return this.colorInput.value=t,this._value&&this._value.isColor?this._value.setHex(parseInt(t.slice(1),16)):this._value=e,super.setValue(e)}_getColorHex(e){return e&&e.isColor&&(e=e.getHex()),typeof e=="number"?e="#"+e.toString(16).padStart(6,"0"):typeof e=="string"&&e[0]!=="#"&&(e="#"+e),e}getValue(){let e=this._value;return typeof e=="string"&&(e=parseInt(e.slice(1),16)),e}}class fs extends J{constructor({text:e="Button",value:t=()=>{}}){super();const i=document.createElement("button");i.textContent=e,i.onclick=t,this.domElement.appendChild(i)}}class gs extends J{constructor({value:e=""}){super();const t=document.createElement("input");t.type="text",t.value=e,this.input=t,t.addEventListener("input",()=>{this.dispatchChange()}),this.domElement.appendChild(t)}setValue(e){return this.input.value=e,super.setValue(e)}getValue(){return this.input.value}}class Ue{constructor(e,t){this.parameters=e,this.paramList=new _(t),this.paramList.setCollapsible(!0),this.objects=[]}close(){return this.paramList.close(),this}name(e){return this.paramList.setValue(0,e),this}show(){return this.paramList.show(),this}hide(){return this.paramList.hide(),this}add(e,t,...i){const n=typeof e[t];let o=null;return typeof i[0]=="object"?o=this.addSelect(e,t,i[0]):n==="number"?i.length>=2?o=this.addSlider(e,t,...i):o=this.addNumber(e,t,...i):n==="boolean"?o=this.addBoolean(e,t):n==="string"?o=this.addString(e,t):n==="function"&&(o=this.addButton(e,t,...i)),o}_addInfo(e,t){e.info=i=>(xt(t,i),e)}_addParameter(e,t,i,s){s.data[0].title=t,i.name=n=>(s.data[0].title=n,s.data[0].childNodes.length>0&&s.data[0].firstChild.nodeType===3?s.data[0].firstChild.textContent=n:s.data[0].insertBefore(document.createTextNode(n),s.data[0].firstChild),i),this._addInfo(i,s.data[0]),i.listen=()=>{const n=()=>{const o=i.getValue(),r=e[t];o!==r&&i.setValue(r),requestAnimationFrame(n)};return requestAnimationFrame(n),i},this._registerParameter(e,t,i,s)}_registerParameter(e,t,i,s){this.objects.push({object:e,key:t,editor:i,subItem:s}),i.addEventListener("show",()=>s.show()),i.addEventListener("hide",()=>s.hide())}addString(e,t){const i=e[t],s=new gs({value:i});s.addEventListener("change",({value:a})=>{e[t]=a});const n=v();n.textContent=t;const o=new _(n,s.domElement);return this.paramList.add(o),o.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,s,o),s}addFolder(e){const t=new Ue(this.parameters,e);return this.paramList.add(t.paramList),t}addBoolean(e,t){const i=e[t],s=new ds({value:i});s.addEventListener("change",({value:a})=>{e[t]=a});const n=v();n.textContent=t;const o=new _(n,s.domElement);this.paramList.add(o);const r=o.domElement.firstChild;return r.classList.add("actionable"),r.addEventListener("click",a=>{if(a.target.closest("label"))return;const l=r.querySelector('input[type="checkbox"]');l&&(l.checked=!l.checked,l.dispatchEvent(new Event("change")))}),this._addParameter(e,t,s,o),s}addSelect(e,t,i){const s=e[t],n=new us({options:i,value:s});n.addEventListener("change",({value:l})=>{e[t]=l});const o=v();o.textContent=t;const r=new _(o,n.domElement);return this.paramList.add(r),r.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,n,r),n}addColor(e,t){const i=e[t],s=new ms({value:i});s.addEventListener("change",({value:a})=>{e[t]=a});const n=v();n.textContent=t;const o=new _(n,s.domElement);return this.paramList.add(o),o.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,s,o),s}addSlider(e,t,i=0,s=1,n=.01){const o=e[t],r=new ps({value:o,min:i,max:s,step:n});r.addEventListener("change",({value:c})=>{e[t]=c});const a=v();a.textContent=t;const l=new _(a,r.domElement);return this.paramList.add(l),l.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,r,l),r}addNumber(e,t,...i){const s=e[t],[n,o]=i,r=new yt({value:s,min:n,max:o});r.addEventListener("change",({value:c})=>{e[t]=c});const a=v();a.textContent=t;const l=new _(a,r.domElement);return this.paramList.add(l),l.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,r,l),r}addButton(e,t){const i=e[t],s=new fs({text:t,value:i});s.addEventListener("change",({value:r})=>{e[t]=r});const n=new _(s.domElement);return n.itemRow.childNodes[0].style.gridColumn="1 / -1",this.paramList.add(n),n.domElement.firstChild.classList.add("actionable"),s.name=r=>{const a=s.domElement.childNodes[0];return a.childNodes.length>0&&a.firstChild.nodeType===3?a.firstChild.textContent=r:a.insertBefore(document.createTextNode(r),a.firstChild),s},this._addInfo(s,s.domElement.childNodes[0]),this._registerParameter(e,t,s,n),s}}class wt extends ae{constructor(e={}){super(e.name||"Parameters",e);const t=new ke("Property","Value");t.domElement.classList.add("parameters"),t.setGridStyle("minmax(0, .5fr) minmax(0, 1fr)"),t.domElement.style.minWidth="300px";const i=document.createElement("div");i.className="list-scroll-wrapper",i.appendChild(t.domElement),this.content.appendChild(i),this.paramList=t,this.groups=[]}createGroup(e){const t=new Ue(this,e);return this.paramList.add(t.paramList),this.groups.push(t),t}}const bs=[{name:"Color Grading",url:"../extensions/color-grading/ColorGrading.js"},{name:"TSL Graph",url:"../extensions/tsl-graph/TSLGraphEditor.js"}],ot=we.prototype.init;function Ct(d){d?we.prototype.init=async function(){if(this.backend.isWebGLBackend!==!0){const e=this.backend.parameters;this.backend=new Kt(e)}return ot.call(this)}:we.prototype.init=ot}let z=null;function Fe(){if(z!==null)return z;const d=ce("settings");return z={forceWebGL:d.forceWebGL!==void 0?d.forceWebGL:!1,captureStackTrace:d.captureStackTrace!==void 0?d.captureStackTrace:!1,activeExtensions:d.activeExtensions!==void 0?d.activeExtensions:{},storage:d.storage!==void 0?d.storage:"url"},z.forceWebGL&&Ct(!0),z.captureStackTrace&&(Ee.captureStackTrace=!0),z}function fe(){oe("settings",{forceWebGL:z.forceWebGL,captureStackTrace:z.captureStackTrace,activeExtensions:z.activeExtensions,storage:z.storage})}Fe();class vs extends wt{constructor(){super({name:"Settings"}),this.extensions={};const e=Fe(),t=this.createGroup("Renderer");t.add(e,"forceWebGL").name("Force WebGL").onChange(s=>{Ct(s),fe(),location.reload()}),t.add(e,"captureStackTrace").name("Capture Stack Trace").onChange(s=>{Ee.captureStackTrace=s,fe(),location.reload()}),this.createGroup("Render Modes").add({overdraw:!1},"overdraw").name("Overdraw").onChange(s=>{this.inspector.overdraw=s}).info("Shows how many times each pixel is shaded.")}init(){const e=this.createGroup("Extensions"),t=this.createGroup("Storage"),i=Fe();t.add(i,"storage",{"URL Session":"url","Keep across Origin":"origin"}).name("Save Settings").onChange(()=>{fe()}).info(`
Defines how the **Inspector** preferences and states are stored in the browser.

**URL Session**
Saves state based on the exact URL. It will reset the settings whenever the URL changes.

**Keep across Origin**
Shares the same state across any page within the current origin.`),t.add({clear:()=>{localStorage.removeItem("threejs-inspector"),location.reload()}},"clear").name("Clear Settings"),this._getExtensions().then(s=>{for(const n of s)n.active=!1,n.loaded=!1,n.tab=null,this.extensions[n.name]=n,n.ui=e.add({[n.name]:!1},n.name).onChange(async o=>{this.setActiveExtension(n.name,o),o?z.activeExtensions[n.name]={name:n.name,url:n.url}:delete z.activeExtensions[n.name],this._updateExtensionUI(n),fe()}),z.activeExtensions[n.name]!==void 0&&n.ui.setValue(!0)})}async setActiveExtension(e,t){const i=this.extensions[e],s=this.inspector;i&&(t?await this._loadExtension(s,i):await this._unloadExtension(s,i))}_updateExtensionUI(e){e.active&&z.activeExtensions[e.name]===void 0?(e.ui.checkbox.checked=!0,e.ui.domElement.style.setProperty("--accent-color","var(--color-green)")):e.ui.domElement.style.removeProperty("--accent-color")}async _unloadExtension(e,t){t.active!==!1&&(e.removeTab(t.tab),t.active=!1,t.loaded=!1,t.tab=null,this._updateExtensionUI(t),this.dispatchEvent({type:"extensionremoved",name:t.name}))}async _loadExtension(e,t){if(t.active===!0)return;t.active=!0;const s=await import(new URL(t.url,import.meta.url).href),n=Object.keys(s),o=s[n[0]],r=new o;e.addTab(r),t.loaded=!0,t.tab=r,this._updateExtensionUI(t),this.dispatchEvent({type:"extensionadded",name:t.name,tab:r})}async _getExtensions(){return bs}}const xs=new T,Ie='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><polyline points="5 8 1 12 5 16"></polyline><polyline points="19 8 23 12 19 16"></polyline></svg>',ze='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',at='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',ys=j(([d,e,t])=>{const i=R(0);Jt(()=>{const{width:h,height:c}=e.value;i.value=h/c});const s=t.div(i),n=d.sub(.5),o=he(n.x.mul(s),n.y).add(.5),r=he(n.x,n.y.div(s)).add(.5),a=t.greaterThan(i).select(o,r),l=ue(0,a.x).mul(ue(a.x,1)).mul(ue(0,a.y)).mul(ue(a.y,1));return Q(a,l)});class ws extends ae{constructor(e={}){super("Viewer",e),this.content.style.overflow="hidden",this.maximizedByFullscreenButton=!1;const t=document.createElement("div");t.className="toolbar";const i=document.createElement("button");i.className="viewer-back-btn",i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',i.title="Back",i.style.display="none",t.appendChild(i);const s=document.createElement("span");s.textContent="View:",t.appendChild(s);const n=document.createElement("select");n.className="select",n.style.width="200px";const o=document.createElement("option");o.value="list",o.textContent="List",n.appendChild(o),t.appendChild(n);const r=new ke("Viewer","Name");r.setGridStyle("150px minmax(200px, 2fr)"),r.domElement.style.minWidth="400px",this.nodeList=r,this.content.appendChild(t);const a=document.createElement("div");a.className="list-scroll-wrapper",a.style.flexGrow="1",a.style.overflowY="auto",a.style.minHeight="0",a.appendChild(r.domElement),this.content.appendChild(a);const l=document.createElement("div");l.className="full-viewer-container",l.style.touchAction="none",this.content.appendChild(l);const h=new _("User Defined");h.setCollapsible(!0),r.add(h),this.itemLibrary=new Map,this.folderLibrary=new Map,this.canvasNodes=new Map,this.currentDataList=[],this.nodes=h,this.scrollWrapper=a,this.fullViewerContainer=l,this.select=n,this.backBtn=i,this.activeFullNodeId=null,this.pendingRestoreView=!0,this.splitActive=!1,this.splitCanvasData=null,this.splitOverlay=null,this.splitLine=null,this.splitQuad=null,this.splitMaterial=null,this.splitUniforms=null,this.splitCanvas=null,this.splitCanvasTarget=null,i.addEventListener("click",()=>{this.splitActive&&this.stopSplitMode(),n.value="list",this.showListView(),this.maximizedByFullscreenButton&&(this.profiler&&this.profiler.panel.classList.contains("maximized")&&this.profiler.toggleMaximize(),this.maximizedByFullscreenButton=!1),this.saveLastView()}),n.addEventListener("change",()=>{const p=n.value;p==="list"?this.showListView():this.showNodeView(p),this.saveLastView()}),this.isDraggingThumbnail=!1,this.activeSourceCanvas=null,this.activePointerIds=new Set;const c=p=>{if(!this.isDraggingThumbnail||!this.activeSourceCanvas)return;const u=this.inspector.getRenderer();p.isForwarded||(p.stopImmediatePropagation(),p.preventDefault(),this.forwardEvent(p,this.activeSourceCanvas,u.domElement),(p.type==="pointerup"||p.type==="pointercancel")&&(this.activePointerIds.delete(p.pointerId),this.activePointerIds.size===0&&(this.isDraggingThumbnail=!1,this.activeSourceCanvas=null)))};window.addEventListener("pointermove",c,!0),window.addEventListener("pointerup",c,!0),window.addEventListener("pointercancel",c,!0)}getFolder(e){let t=this.folderLibrary.get(e);return t===void 0&&(t=new _(e),t.setCollapsible(!0),this.folderLibrary.set(e,t),this.nodeList.add(t)),t}hide(){super.hide(),this.maximizedByFullscreenButton=!1,this.isDraggingThumbnail=!1,this.activeSourceCanvas=null,this.activePointerIds.clear(),this.splitActive&&this.stopSplitMode()}addNodeItem(e){let t=this.itemLibrary.get(e.id);if(t===void 0){const i=e.name,s=e.canvasTarget.domElement,n=document.createElement("div");n.className="node-canvas-wrapper",n.style.position="relative",n.style.display="inline-block",n.style.width="140px",n.style.height="140px",n.style.touchAction="none";const o=document.createElement("button");o.className="node-canvas-detach-btn",o.title="View full size",o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>',o.onclick=l=>{l.stopPropagation(),this.splitActive&&this.stopSplitMode(),this.select.value=e.id,this.showNodeView(e.id),this.saveLastView()};const r=document.createElement("button");r.className="node-canvas-fullscreen-btn",r.title="Fullscreen view",r.innerHTML=ze,r.onclick=l=>{l.stopPropagation(),this.splitActive&&this.splitCanvasData===e&&this.splitFullscreen?this.stopSplitMode():(this.splitFullscreen=!0,this.startSplitMode(e))};const a=document.createElement("button");a.className="node-canvas-split-btn",a.title="Interactive split screen",a.innerHTML=Ie,a.onclick=l=>{l.stopPropagation(),this.splitActive&&this.splitCanvasData===e&&!this.splitFullscreen?this.stopSplitMode():(this.splitFullscreen=!1,this.startSplitMode(e))},n.appendChild(s),n.appendChild(o),n.appendChild(r),n.appendChild(a),this.setupEventForwarding(s),e.domElement=s,e.wrapperElement=n,e.splitBtn=a,e.fullscreenBtn=r,t=new _(n,i),t.itemRow.children[1].style["justify-content"]="flex-start",this.itemLibrary.set(e.id,t)}return t}setupEventForwarding(e){e.style.touchAction="none";const t=n=>{const o=this.inspector.getRenderer();if(!o||!o.domElement)return;const r=o.domElement;this.isDraggingThumbnail=!0,this.activeSourceCanvas=e,this.activePointerIds.add(n.pointerId),this.forwardEvent(n,e,r)};e.addEventListener("pointerdown",t);const i=n=>{const o=this.inspector.getRenderer();!o||!o.domElement||(n.preventDefault(),n.stopPropagation(),this.forwardEvent(n,e,o.domElement))};e.addEventListener("wheel",i,{passive:!1});const s=n=>{const o=this.inspector.getRenderer();!o||!o.domElement||(n.stopPropagation(),n.type==="contextmenu"&&n.preventDefault(),this.forwardEvent(n,e,o.domElement))};e.addEventListener("click",s),e.addEventListener("dblclick",s),e.addEventListener("contextmenu",s)}forwardEvent(e,t,i){const s=t.getBoundingClientRect(),n=i.getBoundingClientRect(),o=(e.clientX-s.left)/s.width,r=(e.clientY-s.top)/s.height,a=n.left+o*n.width,l=n.top+r*n.height,h=a+window.scrollX,c=l+window.scrollY;let p;const u={bubbles:!0,cancelable:!0,view:window,clientX:a,clientY:l,screenX:a+window.screenX,screenY:l+window.screenY,pageX:h,pageY:c,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey,buttons:e.buttons,button:e.button};e instanceof WheelEvent?p=new WheelEvent(e.type,{...u,deltaX:e.deltaX,deltaY:e.deltaY,deltaZ:e.deltaZ,deltaMode:e.deltaMode}):window.PointerEvent&&e instanceof PointerEvent?p=new PointerEvent(e.type,{...u,pointerId:e.pointerId,width:e.width,height:e.height,pressure:e.pressure,tiltX:e.tiltX,tiltY:e.tiltY,pointerType:e.pointerType,isPrimary:e.isPrimary}):p=new MouseEvent(e.type,u),p.isForwarded=!0,i.dispatchEvent(p)}init(e){super.init(e);const t=()=>{const i=e.profiler.position,s=i==="top"||i==="bottom";this.setViewMode(s?"grid":"list")};e.profiler.addEventListener("resize",t),t()}setViewMode(e){this.nodeList&&(e==="grid"?this.nodeList.domElement.style.minWidth="0":this.nodeList.domElement.style.minWidth="400px",this.nodeList.setViewMode(e))}showListView(){if(this.activeFullNodeId){const e=Array.from(this.canvasNodes.values()).find(t=>String(t.id)===String(this.activeFullNodeId));e&&(e.wrapperElement.appendChild(e.domElement),e.domElement.style.width="",e.domElement.style.height="",e.canvasTarget.setSize(140,140),this.inspector.getRenderer().backend.delete(e.canvasTarget)),this.activeFullNodeId=null}this.scrollWrapper.style.display="",this.fullViewerContainer.style.display="none",this.backBtn.style.display="none"}showNodeView(e){this.activeFullNodeId&&String(this.activeFullNodeId)!==String(e)&&this.showListView();const t=Array.from(this.canvasNodes.values()).find(i=>String(i.id)===String(e));if(t){this.addNodeItem(t),this.activeFullNodeId=e,this.backBtn.style.display="flex",this.scrollWrapper.style.display="none",this.fullViewerContainer.style.display="flex",this.fullViewerContainer.appendChild(t.domElement),t.domElement.style.width="100%",t.domElement.style.height="100%";const i=this.fullViewerContainer.getBoundingClientRect(),s=i.width||this.content.clientWidth,n=i.height||this.content.clientHeight-38;t.canvasTarget.setSize(s,n),this.inspector.getRenderer().backend.delete(t.canvasTarget)}}get isActive(){return this.splitActive?!0:super.isActive}set isActive(e){super.isActive=e}startSplitMode(e){this.profiler&&this.profiler.panel.classList.contains("visible")&&this.profiler.togglePanel(),this.splitActive=!0,this.splitCanvasData=e,this.splitX=.5;const t=this.inspector.getRenderer(),i=t.domElement,s=i.getBoundingClientRect(),n=document.fullscreenElement||this.profiler.domElement,o=n.getBoundingClientRect(),r=s.left-o.left,a=s.top-o.top;if(this.splitCanvas||(this.splitCanvas=document.createElement("canvas"),this.splitCanvas.style.position="absolute",this.splitCanvas.style.pointerEvents="none",this.splitCanvas.style.zIndex="998",this.splitCanvasTarget=new Ze(this.splitCanvas),this.splitCanvasTarget.setPixelRatio(window.devicePixelRatio)),this.splitCanvas.style.left=`${r}px`,this.splitCanvas.style.top=`${a}px`,this.splitCanvas.style.width=`${s.width}px`,this.splitCanvas.style.height=`${s.height}px`,this.splitCanvasTarget.setSize(s.width,s.height),t.backend.delete(this.splitCanvasTarget),n.appendChild(this.splitCanvas),this.splitFullscreen)this.splitOverlay&&this.splitOverlay.parentElement&&this.splitOverlay.parentElement.removeChild(this.splitOverlay);else{if(!this.splitOverlay){const p=document.createElement("div");p.className="split-screen-overlay three-inspector";const u=document.createElement("div");u.className="split-screen-line",p.appendChild(u);let m=!1;const f=x=>{m=!0,u.classList.add("active"),x.preventDefault()},b=x=>{if(!m)return;const E=i.getBoundingClientRect(),k=x.clientX-E.left,B=Math.max(0,Math.min(1,k/E.width));this.splitX=B,u.style.left=`${B*100}%`,this.splitUniforms&&this.splitUniforms.splitX&&(this.splitUniforms.splitX.value=B)},g=()=>{m=!1,u.classList.remove("active")};u.addEventListener("pointerdown",f),window.addEventListener("pointermove",b),window.addEventListener("pointerup",g),this.splitOverlay=p,this.splitLine=u}this.splitOverlay.style.left=`${r}px`,this.splitOverlay.style.top=`${a}px`,this.splitOverlay.style.width=`${s.width}px`,this.splitOverlay.style.height=`${s.height}px`,this.splitLine.style.left="50%",n.appendChild(this.splitOverlay)}this.splitUniforms||(this.splitUniforms={splitX:R(.5),viewportWidth:R(s.width)}),this.splitUniforms.splitX.value=.5,this.splitUniforms.viewportWidth.value=s.width;const l=e.inspectNode.context({getUV:()=>be}),h=qe(F(Q(l),1),ne,t.outputColorSpace);let c;this.splitFullscreen?c=h:c=j(()=>(be.x.lessThan(this.splitUniforms.splitX).discard(),h))(),this.splitMaterial&&this.splitMaterial.dispose(),this.splitMaterial=new O,this.splitMaterial.outputNode=c,this.splitMaterial.depthTest=!1,this.splitMaterial.depthWrite=!1,this.splitQuad?this.splitQuad.material=this.splitMaterial:this.splitQuad=new xe(this.splitMaterial),this.updateSplitButtonsState()}stopSplitMode(){this.splitActive=!1,this.splitCanvasData=null,this.splitFullscreen=!1,this.splitOverlay&&this.splitOverlay.parentElement&&this.splitOverlay.parentElement.removeChild(this.splitOverlay),this.splitCanvas&&this.splitCanvas.parentElement&&this.splitCanvas.parentElement.removeChild(this.splitCanvas),this.updateSplitButtonsState()}updateSplitButtonsState(){this.splitActive?this.backBtn.style.display="":this.select.value==="list"?this.backBtn.style.display="none":this.backBtn.style.display="";for(const e of this.canvasNodes.values()){if(!e.splitBtn||!e.fullscreenBtn)continue;this.splitActive&&this.splitCanvasData===e?this.splitFullscreen?(e.fullscreenBtn.classList.add("active"),e.fullscreenBtn.innerHTML=at,e.fullscreenBtn.title="Exit Fullscreen",e.splitBtn.classList.remove("active"),e.splitBtn.innerHTML=Ie,e.splitBtn.title="Interactive split screen"):(e.splitBtn.classList.add("active"),e.splitBtn.innerHTML=at,e.splitBtn.title="Exit Split Screen",e.fullscreenBtn.classList.remove("active"),e.fullscreenBtn.innerHTML=ze,e.fullscreenBtn.title="Fullscreen view"):(e.splitBtn.classList.remove("active"),e.splitBtn.innerHTML=Ie,e.splitBtn.title="Interactive split screen",e.fullscreenBtn.classList.remove("active"),e.fullscreenBtn.innerHTML=ze,e.fullscreenBtn.title="Fullscreen view")}}getCanvasDataByNode(e,t){let i=this.canvasNodes.get(t);if(i===void 0){const s=document.createElement("canvas"),n=new Ze(s);n.setPixelRatio(window.devicePixelRatio),n.setSize(140,140);const o=t.id,{path:r,name:a}=os(as(t.getName()||"(unnamed)")),l=R(1),h=K(1);let c=t.callback!==null?t.callback(t.node):t.node,p=null;c.isTextureNode!==!0&&c.isPassNode!==!0&&(p=Qt(c),p.uvNode=null,c=p);const u=c.context({getUV:g=>{const x=ys(be,g,l),E=x.xy;return h.assign(x.z),E}});let m=F(Q(u),1).mul(h);m=qe(m,ne,e.outputColorSpace);const f=new O;f.outputNode=m;const b=new xe(f);b.name="Viewer - "+a,i={id:o,name:a,path:r,node:t,inspectNode:c,rttNode:p,quad:b,canvasTarget:n,material:f,canvasAspect:l},this.canvasNodes.set(t,i)}return i}update(e){const t=e.getRenderer();if(this.splitActive){const l=t.domElement.getBoundingClientRect();if(l.width<=0||l.height<=0)return;const h=document.fullscreenElement||this.profiler.domElement,c=h.getBoundingClientRect(),p=l.left-c.left,u=l.top-c.top;this.splitCanvas.parentElement!==h&&h.appendChild(this.splitCanvas),this.splitOverlay&&!this.splitFullscreen&&this.splitOverlay.parentElement!==h&&h.appendChild(this.splitOverlay),this.splitCanvas.style.left=`${p}px`,this.splitCanvas.style.top=`${u}px`,this.splitCanvas.style.width=`${l.width}px`,this.splitCanvas.style.height=`${l.height}px`,this.splitOverlay&&!this.splitFullscreen&&(this.splitOverlay.style.left=`${p}px`,this.splitOverlay.style.top=`${u}px`,this.splitOverlay.style.width=`${l.width}px`,this.splitOverlay.style.height=`${l.height}px`),(this.splitCanvasTarget.width!==l.width||this.splitCanvasTarget.height!==l.height)&&(this.splitCanvasTarget.setSize(l.width,l.height),this.splitUniforms&&this.splitUniforms.viewportWidth&&(this.splitUniforms.viewportWidth.value=l.width),t.backend.delete(this.splitCanvasTarget));const m=t.getCanvasTarget(),f=t.getClearColor(new ve),b=t.getClearAlpha(),g=V.resetRendererState(t);t.toneMapping=ne,t.outputColorSpace=De,t.setCanvasTarget(this.splitCanvasTarget),t.setClearColor(0,0),this.splitQuad.render(t),t.setCanvasTarget(m),t.setClearColor(f,b),V.restoreRendererState(t,g)}const i=e.getNodes();if(i.length>0){if(!t.backend.isWebGPUBackend)return;this.isVisible||this.show()}if(!this.isActive)return;const s=i.map(a=>this.getCanvasDataByNode(t,a));let n=s.length!==this.currentDataList.length;if(!n){for(let a=0;a<s.length;a++)if(s[a].id!==this.currentDataList[a].id){n=!0;break}}if(n){const a=this.select.value;for(;this.select.options.length>1;)this.select.remove(1);for(const h of s){const c=document.createElement("option");c.value=h.id,c.textContent=h.path?`${h.path} / ${h.name}`:h.name,this.select.appendChild(c)}let l=!1;if(this.pendingRestoreView){const h=ce("viewerLastView");if(h!=="list"){for(let c=0;c<this.select.options.length;c++)if(this.select.options[c].textContent===h){this.select.selectedIndex=c;const p=this.select.options[c].value;this.showNodeView(p),l=!0,this.pendingRestoreView=!1;break}}else this.pendingRestoreView=!1}if(!l){let h=!1;for(let c=0;c<this.select.options.length;c++)if(this.select.options[c].value===a){this.select.selectedIndex=c,h=!0;break}h||(this.select.value="list",this.showListView())}}if(this.activeFullNodeId){const a=s.find(l=>String(l.id)===String(this.activeFullNodeId));if(a){const l=this.fullViewerContainer.getBoundingClientRect(),h=l.width||this.content.clientWidth,c=l.height||this.content.clientHeight-38;(a.canvasTarget.domElement.width!==h||a.canvasTarget.domElement.height!==c)&&(a.canvasTarget.setSize(h,c),t.backend.delete(a.canvasTarget))}}const o=[...this.currentDataList];for(const a of o)if(this.itemLibrary.has(a.id)&&s.indexOf(a)===-1){const l=this.itemLibrary.get(a.id),h=l.parent;h.remove(l),this.folderLibrary.has(h.data[0])&&h.children.length===0&&(h.parent.remove(h),this.folderLibrary.delete(h.data[0])),this.itemLibrary.delete(a.id)}const r={};for(const a of s){const l=this.addNodeItem(a),h=t.getCanvasTarget(),c=a.path;if(c){const f=this.getFolder(c);r[c]===void 0&&(r[c]=0),(f.parent===null||l.parent!==f||f.children.indexOf(l)!==r[c])&&f.add(l),r[c]++}else l.parent||this.nodes.add(l);const p=[],u=h.getDrawingBufferSize(xs);a.inspectNode.traverse(f=>{if(f.isRTTNode&&f.autoResize===!0){const b=f.width,g=f.height;f.width=u.width,f.height=u.height,f.setSize(u.width,u.height),p.push({node:f,oldWidth:b,oldHeight:g})}});const m=V.resetRendererState(t);t.toneMapping=ne,t.outputColorSpace=De,t.setCanvasTarget(a.canvasTarget),a.canvasAspect&&(a.canvasAspect.value=a.canvasTarget.domElement.width/a.canvasTarget.domElement.height),a.quad.render(t),t.setCanvasTarget(h),V.restoreRendererState(t,m);for(const f of p)f.node.width=f.oldWidth,f.node.height=f.oldHeight}this.currentDataList=s}setActive(e){super.setActive(e)}saveLastView(){if(this.select.value==="list")oe("viewerLastView","list");else{const t=this.select.options[this.select.selectedIndex];t&&oe("viewerLastView",t.textContent)}}dispose(){this.splitActive&&this.stopSplitMode(),this.splitCanvas&&(this.splitCanvas.parentElement&&this.splitCanvas.parentElement.removeChild(this.splitCanvas),this.splitCanvas=null),this.splitCanvasTarget&&(this.splitCanvasTarget.dispose(),this.splitCanvasTarget=null),this.splitMaterial&&(this.splitMaterial.dispose(),this.splitMaterial=null);for(const e of this.canvasNodes.values())e.canvasTarget.dispose(),e.material.dispose(),e.rttNode!==null&&e.rttNode.dispose();this.canvasNodes.clear(),super.dispose()}}const lt=500,ht=60;class Cs extends ae{constructor(e={}){super("Timeline",e),this.content.style.overflow="hidden",this.isRecording=!1,this.frames=[],this.baseTriangles=0,this.currentFrame=null,this.isHierarchicalView=!0,this.activeBlocks=new Map,this.domPool=[],this.originalBackend=null,this.originalMethods=new Map,this.renderer=null,this.graph=new Te(lt),this.graph.addLine("fps","var( --color-fps )"),this.graph.addLine("calls","var( --color-call )"),this.graph.addLine("triangles","var( --color-red )"),this.buildHeader(),this.buildUI(),window.addEventListener("resize",()=>{this.isActive&&!this.isRecording&&this.frames.length>0&&this.renderSlider()})}init(e){super.init(e),this.profiler.addEventListener("resize",()=>{this.isActive&&!this.isRecording&&this.frames.length>0&&this.renderSlider()})}setActive(e){super.setActive(e),e&&!this.isRecording&&this.frames.length>0&&this.renderSlider()}buildHeader(){const e=document.createElement("div");e.className="toolbar",this.recordButton=document.createElement("button"),this.recordButton.className="console-copy-button",this.recordButton.title="Record",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4" fill="currentColor"></circle></svg>',this.recordButton.style.padding="0 10px",this.recordButton.style.lineHeight="24px",this.recordButton.style.display="flex",this.recordButton.style.alignItems="center",this.recordButton.addEventListener("click",()=>this.toggleRecording());const t=document.createElement("button");t.className="console-copy-button",t.title="Clear",t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',t.style.padding="0 10px",t.style.lineHeight="24px",t.style.display="flex",t.style.alignItems="center",t.addEventListener("click",()=>this.clear()),this.viewModeSelect=document.createElement("select"),this.viewModeSelect.className="select",this.viewModeSelect.style.width="120px",this.viewModeSelect.style.marginRight="10px";const i=document.createElement("option");i.value="hierarchy",i.textContent="Hierarchy",this.viewModeSelect.appendChild(i);const s=document.createElement("option");s.value="counts",s.textContent="Count",this.viewModeSelect.appendChild(s),this.viewModeSelect.value=this.isHierarchicalView?"hierarchy":"counts",this.viewModeSelect.addEventListener("change",()=>{this.isHierarchicalView=this.viewModeSelect.value==="hierarchy",this.selectedFrameIndex!==void 0&&this.selectedFrameIndex!==-1&&this.selectFrame(this.selectedFrameIndex)}),this.recordRefreshButton=document.createElement("button"),this.recordRefreshButton.className="console-copy-button",this.recordRefreshButton.title="Refresh & Record",this.recordRefreshButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>',this.recordRefreshButton.style.padding="0 10px",this.recordRefreshButton.style.lineHeight="24px",this.recordRefreshButton.style.display="flex",this.recordRefreshButton.style.alignItems="center",this.recordRefreshButton.addEventListener("click",()=>{const r=ce("timeline");r.recording=!0,oe("timeline",r),window.location.reload()}),this.exportButton=document.createElement("button"),this.exportButton.className="console-copy-button",this.exportButton.title="Export",this.exportButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',this.exportButton.style.padding="0 10px",this.exportButton.style.lineHeight="24px",this.exportButton.style.display="flex",this.exportButton.style.alignItems="center",this.exportButton.addEventListener("click",()=>this.exportData());const n=document.createElement("div");n.className="console-buttons-group",n.appendChild(this.recordButton),n.appendChild(this.recordRefreshButton),n.appendChild(this.exportButton),n.appendChild(t);const o=document.createElement("div");o.style.display="flex",o.style.alignItems="center",o.style.color="var(--text-primary)",o.style.alignSelf="center",this.frameInfo=document.createElement("span"),this.frameInfo.style.display="inline-flex",this.frameInfo.style.alignItems="center",this.frameInfo.style.marginLeft="5px",this.frameInfo.style.fontFamily="monospace",this.frameInfo.style.color="var(--text-secondary)",this.frameInfo.style.fontSize="12px",o.appendChild(this.viewModeSelect),o.appendChild(this.frameInfo),e.appendChild(o),e.appendChild(n),this.content.appendChild(e)}buildUI(){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.flex="1",e.style.minHeight="0",e.style.marginTop="10px",e.style.width="100%";const t=document.createElement("div");t.style.height="60px",t.style.minHeight="60px",t.style.borderBottom="1px solid var(--border-color)",t.style.backgroundColor="var(--background-color)",this.graphSlider=document.createElement("div"),this.graphSlider.style.height="100%",this.graphSlider.style.margin="0 10px",this.graphSlider.style.position="relative",this.graphSlider.style.cursor="crosshair",this.graphSlider.style.touchAction="none",t.appendChild(this.graphSlider),this.graph.domElement.style.width="0",this.graph.domElement.style.minWidth="100%",this.graph.domElement.style.height="100%",this.graphSlider.appendChild(this.graph.domElement),this.hoverIndicator=document.createElement("div"),this.hoverIndicator.style.position="absolute",this.hoverIndicator.style.top="0",this.hoverIndicator.style.bottom="0",this.hoverIndicator.style.width="1px",this.hoverIndicator.style.backgroundColor="rgba(255, 255, 255, 0.3)",this.hoverIndicator.style.pointerEvents="none",this.hoverIndicator.style.display="none",this.hoverIndicator.style.zIndex="9",this.hoverIndicator.style.transform="translateX(-50%)",this.graphSlider.appendChild(this.hoverIndicator),this.playhead=document.createElement("div"),this.playhead.style.position="absolute",this.playhead.style.top="0",this.playhead.style.bottom="0",this.playhead.style.width="2px",this.playhead.style.backgroundColor="var(--color-red)",this.playhead.style.boxShadow="0 0 4px rgba(255,0,0,0.5)",this.playhead.style.pointerEvents="none",this.playhead.style.display="none",this.playhead.style.zIndex="10",this.playhead.style.transform="translateX(-50%)",this.graphSlider.appendChild(this.playhead);const i=document.createElement("div");i.style.position="absolute",i.style.top="0",i.style.left="50%",i.style.transform="translate(-50%, 0)",i.style.width="0",i.style.height="0",i.style.borderLeft="6px solid transparent",i.style.borderRight="6px solid transparent",i.style.borderTop="8px solid var(--color-red)",this.playhead.appendChild(i),this.graphSlider.tabIndex=0,this.graphSlider.style.outline="none";let s=!1;const n=r=>{if(this.isRecording||this.frames.length===0)return;const a=this.graphSlider.getBoundingClientRect();let l=r.clientX-a.left;l=Math.max(0,Math.min(l,a.width)),this.fixedScreenX=l;const h=this.graph.lines.calls.points.length;if(h===0)return;const c=a.width/(this.graph.maxPoints-1),p=a.width-(h-1)*c;let u=Math.round((l-p)/c);u=Math.max(0,Math.min(u,h-1)),u>=h-2?this.isTrackingLatest=!0:this.isTrackingLatest=!1;let m=u;this.frames.length>h&&(m+=this.frames.length-h),this.playhead.style.display="block",this.selectFrame(m)};this.graphSlider.addEventListener("pointerdown",r=>{this.isRecording||(s=!0,this.isManualScrubbing=!0,this.graphSlider.focus(),n(r))}),this.graphSlider.addEventListener("pointerenter",()=>{this.frames.length>0&&!this.isRecording&&(this.hoverIndicator.style.display="block")}),this.graphSlider.addEventListener("pointerleave",()=>{this.hoverIndicator.style.display="none"}),this.graphSlider.addEventListener("pointermove",r=>{if(this.frames.length===0||this.isRecording)return;const a=this.graphSlider.getBoundingClientRect();let l=r.clientX-a.left;l=Math.max(0,Math.min(l,a.width));const h=this.graph.lines.calls.points.length;if(h>0){const c=a.width/(this.graph.maxPoints-1),p=a.width-(h-1)*c;let u=Math.round((l-p)/c);u=Math.max(0,Math.min(u,h-1));let m=p+u*c;m=Math.max(1,Math.min(m,a.width-1)),this.hoverIndicator.style.left=m+"px"}else{const c=Math.max(1,Math.min(l,a.width-1));this.hoverIndicator.style.left=c+"px"}}),this.graphSlider.addEventListener("keydown",r=>{if(this.frames.length===0||this.isRecording)return;let a=this.selectedFrameIndex;if(r.key==="ArrowLeft"?(a=Math.max(0,this.selectedFrameIndex-1),r.preventDefault()):r.key==="ArrowRight"&&(a=Math.min(this.frames.length-1,this.selectedFrameIndex+1),r.preventDefault()),a!==this.selectedFrameIndex){this.selectFrame(a);const l=this.graph.lines.calls.points.length;if(l>0){let h=a;this.frames.length>l&&(h=a-(this.frames.length-l)),h>=l-2?this.isTrackingLatest=!0:this.isTrackingLatest=!1;const c=this.graphSlider.getBoundingClientRect(),p=c.width/(this.graph.maxPoints-1),u=c.width-(l-1)*p;this.fixedScreenX=u+h*p}}}),window.addEventListener("pointermove",r=>{if(s){n(r);const a=this.graphSlider.getBoundingClientRect();let l=r.clientX-a.left;l=Math.max(0,Math.min(l,a.width));const h=this.graph.lines.calls.points.length;if(h>0){const c=a.width/(this.graph.maxPoints-1),p=a.width-(h-1)*c;let u=Math.round((l-p)/c);u=Math.max(0,Math.min(u,h-1));let m=p+u*c;m=Math.max(1,Math.min(m,a.width-1)),this.hoverIndicator.style.left=m+"px"}else{const c=Math.max(1,Math.min(l,a.width-1));this.hoverIndicator.style.left=c+"px"}}}),window.addEventListener("pointerup",()=>{s=!1,this.isManualScrubbing=!1}),e.appendChild(t);const o=document.createElement("div");o.style.flex="1",o.style.display="flex",o.style.flexDirection="column",o.style.overflow="hidden",this.timelineTrack=document.createElement("div"),this.timelineTrack.style.flex="1",this.timelineTrack.style.overflowY="auto",this.timelineTrack.style.margin="10px",this.timelineTrack.style.marginTop="8px",this.timelineTrack.style.backgroundColor="var(--background-color)",this.timelineTrack.style.position="relative",o.appendChild(this.timelineTrack),this.timelineContent=document.createElement("div"),this.timelineContent.style.position="relative",this.timelineContent.style.width="100%",this.timelineTrack.appendChild(this.timelineContent),this.timelineTrack.addEventListener("scroll",()=>{!this.isRecording&&this.frames.length>0&&this.updateVisibleBlocks()}),e.appendChild(o),this.content.appendChild(e)}setRenderer(e){this.renderer=e;const t=ce("timeline");t.recording&&(t.recording=!1,oe("timeline",t),this.toggleRecording())}toggleRecording(){if(!this.renderer){console.warn("Timeline: No renderer defined.");return}this.isRecording=!this.isRecording,this.isRecording?(this.recordButton.title="Stop",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>',this.recordButton.style.color="var(--color-red)",this.startRecording()):(this.recordButton.title="Record",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4" fill="currentColor"></circle></svg>',this.recordButton.style.color="",this.stopRecording(),this.renderSlider())}startRecording(){this.frames=[],this.currentFrame=null,this.selectedFrameIndex=-1,this.fixedScreenX=0,this.isTrackingLatest=!0,this.isManualScrubbing=!1,this.clear(),this.frameInfo.textContent="Recording...";const e=this.renderer.backend,t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)).filter(i=>i!=="constructor");for(const i of t){const s=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),i);if(s&&(s.get||s.set))continue;const n=e[i];typeof n=="function"&&typeof i=="string"&&(this.originalMethods.set(i,n),e[i]=(...o)=>{if(i.toLowerCase().includes("timestamp")||i.startsWith("get")||i.startsWith("set")||i.startsWith("has")||i.startsWith("_")||i.startsWith("needs"))return n.apply(e,o);const r=this.renderer.info.frame;if(!this.currentFrame||this.currentFrame.id!==r){if(this.currentFrame){this.resolveIndirectTriangles(this.currentFrame),this.currentFrame.fps=this.renderer.inspector?this.renderer.inspector.fps:0,isFinite(this.currentFrame.fps)||(this.currentFrame.fps=0);const h=this.currentFrame.triangles||0;if(h>this.baseTriangles){const p=this.baseTriangles;if(this.baseTriangles=h,p>0){const u=p/this.baseTriangles,m=this.graph.lines.triangles.points;for(let f=0;f<m.length;f++)m[f]*=u}}const c=this.baseTriangles>0?h/this.baseTriangles*ht:0;this.graph.addPoint("calls",this.currentFrame.calls.length),this.graph.addPoint("fps",this.currentFrame.fps),this.graph.addPoint("triangles",c),this.graph.update()}this.currentFrame={id:r,calls:[],fps:0,triangles:0,indirectDraws:[]},this.frames.push(this.currentFrame),this.frames.length>lt&&this.frames.shift()}const a={method:i,target:o[0]},l=this.getCallDetail(i,o);if(l){if(a.details=l,l.triangles!==void 0)this.currentFrame.triangles+=l.triangles;else if(l.indirect===!0){const h=o[0];this.currentFrame.indirectDraws.push({details:l,attribute:h.getIndirect(),offset:h.getIndirectOffset()})}}return this.currentFrame.calls.push(a),n.apply(e,o)})}}stopRecording(){if(this.originalMethods.size>0){const e=this.renderer.backend;for(const[t,i]of this.originalMethods.entries())e[t]=i;this.originalMethods.clear(),this.currentFrame&&(this.resolveIndirectTriangles(this.currentFrame),this.currentFrame.fps=this.renderer.inspector?this.renderer.inspector.fps:0)}}resolveIndirectTriangles(e){const t=e.indirectDraws;if(!t||t.length===0)return;e.indirectDraws=null;const i=new Map;for(const s of t)i.has(s.attribute)===!1&&i.set(s.attribute,this.renderer.getArrayBufferAsync(s.attribute));Promise.all(t.map(s=>i.get(s.attribute))).then(s=>{for(let n=0;n<t.length;n++){const o=t[n],r=new Uint32Array(s[n]),a=Array.isArray(o.offset)?o.offset:[o.offset];let l=0;for(const h of a){const c=h/4;l+=Math.floor(r[c]/3)*r[c+1]}o.details.triangles=l,e.triangles+=l}this.isRecording===!1&&this.frames.includes(e)&&this.renderSlider()})}clear(){this.frames=[],this.clearActiveBlocks(),this.timelineContent.innerHTML="",this.timelineContent.style.height="0px",this.playhead.style.display="none",this.frameInfo.textContent="",this.baseTriangles=0,this.graph.lines.calls.points=[],this.graph.lines.fps.points=[],this.graph.lines.triangles.points=[],this.graph.resetLimit(),this.graph.update()}exportData(){if(this.frames.length===0)return;const e=JSON.stringify(this.frames,null,"	"),t=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download="threejs-timeline.json",s.click(),URL.revokeObjectURL(i)}getRenderTargetDetails(e){const t=e.textures,i=[],s=r=>{switch(r.type){case ci:case hi:return"8";case li:case ai:case ge:case oi:case ri:return"16";case ni:case si:case gt:case ii:case ti:case ei:return"32";default:return"?"}},n=r=>{switch(r.format){case wi:return"a";case yi:case xi:return"r";case vi:case bi:return"rg";case gi:case fi:return"rgb";case mi:return"depth";case ui:return"depth-stencil";case pi:case di:default:return"rgba"}};for(let r=0;r<t.length;r++){const a=t[r],l=s(a),h=n(a);let c=`[${r}]`;a.name&&!(a.isDepthTexture&&a.name==="depth")&&(c+=` ${a.name}`),c+=` ${h} ${l} bpc`,i.push(c)}const o={target:e.name||"RenderTarget",[`attachments(${t.length})`]:`
`+i.join(`
`)};return e.depthTexture&&(o.depth=`${s(e.depthTexture)} bpc`),o}getCallDetail(e,t){switch(e){case"draw":{const i=t[0],s={object:i.object.name||i.object.type,material:i.material.name||i.material.type,geometry:i.geometry.name||i.geometry.type};if(i.getDrawParameters){const n=i.getDrawParameters();n&&(i.object.isMesh||i.object.isSprite)&&(this.renderer.backend.isWebGPUBackend===!0&&i.getIndirect()!==null?s.indirect=!0:(s.triangles=n.vertexCount/3,i.object.count>1&&(s.instance=i.object.count,s["triangles per instance"]=s.triangles,s.triangles*=s.instance)))}return s}case"beginRender":{const i=t[0],s={scene:this.renderer.inspector.currentRender.name||"unknown",camera:i.camera.name||i.camera.type};return i.renderTarget&&!i.renderTarget.isPostProcessingRenderTarget?Object.assign(s,this.getRenderTargetDetails(i.renderTarget)):s.target="CanvasTarget",s}case"beginCompute":return{compute:this.renderer.inspector.currentCompute.name||"unknown"};case"compute":{const i=t[1],s=t[2],n=t[4]||i.dispatchSize||i.count,o=i.name||i.type||"unknown";let r=0;s&&(r=s.length);let a;return n.isIndirectStorageBufferAttribute?a="indirect":Array.isArray(n)?a=n.join(", "):a=n,{node:o,bindings:r,dispatch:a}}case"updateBinding":return{group:t[0].name||"unknown"};case"clear":{const i=t[3],s={color:t[0],depth:t[1],stencil:t[2]};if(i.renderTarget&&!i.renderTarget.isPostProcessingRenderTarget){const n=this.getRenderTargetDetails(i.renderTarget);n.depth&&(n["depth texture"]=n.depth,delete n.depth),Object.assign(s,n)}else s.target="CanvasTarget";return s}case"updateViewport":{const i=t[0],{x:s,y:n,width:o,height:r}=i.viewportValue;return{x:s,y:n,width:o,height:r}}case"updateScissor":{const i=t[0],{x:s,y:n,width:o,height:r}=i.scissorValue;return{x:s,y:n,width:o,height:r}}case"createProgram":case"destroyProgram":{const i=t[0];return{stage:i.stage,name:i.name||"unknown"}}case"createRenderPipeline":{const i=t[0];return{object:i.object&&(i.object.name||i.object.type)||"unknown",material:i.material&&(i.material.name||i.material.type)||"unknown"}}case"createComputePipeline":case"destroyComputePipeline":return{name:t[0].name||"unknown"};case"createBindings":case"updateBindings":{const i=t[0];return{group:i.name||"unknown",count:i.bindings.length}}case"createUniformBuffer":case"destroyUniformBuffer":{const i=t[0],s={group:i.groupNode.name||"unknown",size:i.byteLength+" bytes"};return i.name!==s.group&&(s.name=i.name),s}case"createNodeBuilder":{const i=t[0],s={object:i.name||i.type||"unknown"};return i.material&&(s.material=i.material.name||i.material.type||"unknown"),s}case"createAttribute":case"createIndexAttribute":case"createStorageAttribute":case"destroyAttribute":case"destroyIndexAttribute":case"destroyStorageAttribute":{const i=t[0],s={};return i.name&&(s.name=i.name),i.count!==void 0&&(s.count=i.count),i.itemSize!==void 0&&(s.itemSize=i.itemSize),s}case"copyFramebufferToTexture":{const i=t[0],s=t[2];return{target:this.getTextureName(i),width:s.z,height:s.w}}case"copyTextureToTexture":{const i=t[0],s=t[1];return{source:this.getTextureName(i),destination:this.getTextureName(s)}}case"updateSampler":{const i=t[0];return{magFilter:this.getTextureFilterName(i.magFilter),minFilter:this.getTextureFilterName(i.minFilter),wrapS:this.getTextureWrapName(i.wrapS),wrapT:this.getTextureWrapName(i.wrapT),anisotropy:i.anisotropy}}case"updateTexture":case"generateMipmaps":case"createTexture":case"destroyTexture":{const i=t[0],n={texture:this.getTextureName(i)};return i.image&&(i.image.width!==void 0&&(n.width=i.image.width),i.image.height!==void 0&&(n.height=i.image.height)),n}}return null}getTextureName(e){if(e.name)return e.name;const t=["isFramebufferTexture","isDepthTexture","isDataArrayTexture","isData3DTexture","isDataTexture","isCompressedArrayTexture","isCompressedTexture","isCubeTexture","isVideoTexture","isCanvasTexture","isTexture"];for(const i of t)if(e[i])return i.replace("is","");return"Texture"}getTextureFilterName(e){return{1003:"Nearest",1004:"NearestMipmapNearest",1005:"NearestMipmapLinear",1006:"Linear",1007:"LinearMipmapNearest",1008:"LinearMipmapLinear"}[e]||e}getTextureWrapName(e){return{1e3:"Repeat",1001:"ClampToEdge",1002:"MirroredRepeat"}[e]||e}formatDetails(e){const t=[];for(const i in e)e[i]!==void 0&&t.push(`<span class="timeline-detail-key">${i}:</span> <span class="timeline-detail-value">${e[i]}</span>`);return t.length===0?"":`<span class="timeline-detail-block">{ ${t.join('<span class="timeline-detail-sep">, </span>')} }</span>`}renderSlider(){if(this.frames.length===0){this.playhead.style.display="none",this.frameInfo.textContent="";return}this.graph.lines.calls.points=[],this.graph.lines.fps.points=[],this.graph.lines.triangles.points=[],this.graph.resetLimit();let e=this.frames;e.length>this.graph.maxPoints&&(e=e.slice(-this.graph.maxPoints),this.frames=e);let t=0;for(let s=0;s<e.length;s++){const n=e[s].triangles||0;n>t&&(t=n)}for(let s=0;s<e.length;s++){const n=e[s].triangles||0,o=t>0?n/t*ht:0;this.graph.addPoint("calls",e[s].calls.length),this.graph.addPoint("fps",e[s].fps||0),this.graph.addPoint("triangles",o)}this.graph.update(),this.playhead.style.display="block";let i=0;this.selectedFrameIndex!==-1&&this.selectedFrameIndex<this.frames.length?i=this.selectedFrameIndex:this.frames.length>0&&(i=this.frames.length-1),this.selectFrame(i)}selectFrame(e){if(this.isRecording||e<0||e>=this.frames.length)return;this.selectedFrameIndex=e;const t=this.frames[e];this.renderTimelineTrack(t);const s=this.content.offsetWidth<800,n=s?"":"Frame: ",o=s?"":" FPS",r=s?"":" calls",a=s?"":" triangles",l=(m,f)=>`<span class="timeline-info-group"><span class="timeline-info-dot ${m}"></span>${f}</span>`,h=Math.max(this.baseTriangles,t.triangles||0),c=s?t.triangles||0:(t.triangles||0)+" / "+h+a;this.frameInfo.innerHTML=n+t.id+l("fps",(t.fps||0).toFixed(1)+o)+l("call",t.calls.length+r)+l("red",c);const p=this.graphSlider.getBoundingClientRect(),u=this.graph.lines.calls.points.length;if(u>0){const m=p.width/(this.graph.maxPoints-1);let f=e;this.frames.length>u&&(f=e-(this.frames.length-u));let g=p.width-(u-1)*m+f*m;g=Math.max(1,Math.min(g,p.width-1)),this.playhead.style.left=g+"px",this.playhead.style.display="block"}}createBlock(){const e=document.createElement("div");return e.style.display="flex",e.style.alignItems="center",e.style.padding="4px 8px",e.style.backgroundColor="rgba(255, 255, 255, 0.03)",e.style.fontFamily="monospace",e.style.fontSize="12px",e.style.color="var(--text-primary)",e.style.overflow="hidden",e.style.position="absolute",e.style.left="0",e.style.right="0",e.style.height="24px",e.style.boxSizing="border-box",e.arrow=document.createElement("span"),e.arrow.style.fontSize="10px",e.arrow.style.marginRight="8px",e.arrow.style.cursor="pointer",e.arrow.style.width="35px",e.arrow.style.textAlign="center",e.arrow.style.flexShrink="0",e.arrow.style.whiteSpace="nowrap",e.appendChild(e.arrow),e.titleSpan=document.createElement("span"),e.titleSpan.style.flex="1",e.titleSpan.style.minWidth="0",e.titleSpan.style.overflow="hidden",e.titleSpan.style.textOverflow="ellipsis",e.titleSpan.style.whiteSpace="nowrap",e.appendChild(e.titleSpan),e.addEventListener("click",t=>{e._groupId&&(t.stopPropagation(),this.collapsedGroups.has(e._groupId)?this.collapsedGroups.delete(e._groupId):this.collapsedGroups.add(e._groupId),this.renderTimelineTrack(this.frames[this.selectedFrameIndex]))}),e}clearActiveBlocks(){if(this.activeBlocks){for(const e of this.activeBlocks.values())e.remove(),this.domPool.push(e);this.activeBlocks.clear()}}updateVisibleBlocks(){if(!this.flatList||this.flatList.length===0){this.clearActiveBlocks();return}const e=26,t=5,i=this.timelineTrack.scrollTop,s=this.timelineTrack.clientHeight;let n=Math.floor(i/e)-t,o=Math.ceil((i+s)/e)+t;n=Math.max(0,n),o=Math.min(this.flatList.length-1,o);const r=new Map;for(const[a,l]of this.activeBlocks.entries())a<n||a>o?(l.remove(),this.domPool.push(l)):r.set(a,l);this.activeBlocks=r;for(let a=n;a<=o;a++){let l=this.activeBlocks.get(a);l||(l=this.domPool.pop()||this.createBlock(),this.timelineContent.appendChild(l),this.activeBlocks.set(a,l));const h=this.flatList[a],c=h.call;l.style.top=a*e+"px",l.style.marginLeft=h.indent*24+"px",l.style.borderLeft="4px solid "+this.getColorForMethod(c.method),l._groupId=h.groupId;const p=l.querySelector(":scope > .info-icon");p&&p.remove(),l.titleSpan.textContent="";const u=document.createElement("span");if(u.textContent=c.method,l.titleSpan.appendChild(u),c.details){let b=`### ${c.method}
`;for(const x in c.details)c.details[x]!==void 0&&(b+=`**${x}**: ${c.details[x]}
`);const g=xt(l.titleSpan,b);g.style.flexShrink="0",g.style.marginLeft="6px",g.style.display="inline-flex",g.style.verticalAlign="middle"}const m=document.createElement("span");let f=c.formatedDetails?c.formatedDetails:"";c.count>1&&(f+=` <span class="timeline-call-count">( ${c.count} )</span>`),f&&(m.innerHTML=f,l.titleSpan.appendChild(m)),h.groupId?(l.style.cursor="pointer",l.arrow.style.display="inline-block",l.arrow.textContent=h.isCollapsed?"[ + ]":"[ - ]"):(l.style.cursor="default",l.arrow.style.display="none")}}renderTimelineTrack(e){if(this.isRecording)return;if(this.flatList=[],!e||e.calls.length===0){this.clearActiveBlocks(),this.timelineContent.innerHTML="",this.timelineContent.style.height="0px";return}if(this.collapsedGroups||(this.collapsedGroups=new Set),this.isHierarchicalView){const i=[];let s=null;for(let a=0;a<e.calls.length;a++){const l=e.calls[a],h=l.method.startsWith("begin")||l.method.startsWith("finish"),c=l.details?this.formatDetails(l.details):"";s&&s.method===l.method&&s.formatedDetails===c&&!h?s.count++:(s={method:l.method,count:1,formatedDetails:c,target:l.target,details:l.details},i.push(s))}let n=0;const o=[{isCollapsed:!1,id:"",beginCount:0}],r=new WeakMap;for(let a=0;a<i.length;a++){const l=i[a];let h=0;l.target&&typeof l.target=="object"&&(h=r.get(l.target)||0,r.set(l.target,h+1));const c=o[o.length-1];let p=null,u=!1;if(l.method.startsWith("begin")){const m=c.beginCount++;p=c.id+"/"+l.method+"-"+m,u=this.collapsedGroups.has(p)}c.isCollapsed||this.flatList.push({call:l,indent:n,groupId:p,isCollapsed:u,instanceIndex:h}),l.method.startsWith("begin")?(n++,o.push({isCollapsed:c.isCollapsed||u,id:p,beginCount:0})):l.method.startsWith("finish")&&(n=Math.max(0,n-1),o.pop())}}else{const i={};for(let n=0;n<e.calls.length;n++){const o=e.calls[n].method;o.startsWith("finish")||(i[o]=(i[o]||0)+1)}const s=Object.keys(i).map(n=>({method:n,count:i[n]}));s.sort((n,o)=>o.count-n.count);for(let n=0;n<s.length;n++){const o=s[n];this.flatList.push({call:o,indent:0,groupId:null,isCollapsed:!1,instanceIndex:0})}}const t=26;this.timelineContent.style.height=this.flatList.length*t+"px",this.updateVisibleBlocks()}getColorForMethod(e){return e.startsWith("begin")?"var(--color-green)":e.startsWith("finish")||e.startsWith("destroy")?"var(--color-red)":e.startsWith("draw")||e.startsWith("compute")||e.startsWith("create")||e.startsWith("generate")?"var(--color-yellow)":"var(--text-secondary)"}}class _s extends ss{constructor(e={}){super();const{nonce:t=null}=e;this.nonce=t;const i=new rs(this,e);i.addEventListener("resize",c=>this.dispatchEvent(c)),i.addEventListener("orientationchange",c=>this.dispatchEvent(c)),i.addEventListener("layoutchange",c=>this.dispatchEvent(c));const s=new wt({builtin:!0,icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>'});s.hide(),i.addTab(s);const n=new ws;n.hide(),i.addTab(n);const o=new ls;i.addTab(o);const r=new hs;i.addTab(r);const a=new Cs;i.addTab(a);const l=new cs;i.addTab(l);const h=new vs;i.addTab(h),i.loadLayout(),i.activeTabId||i.setActiveTab(o.id),this.statsData=new Map,this.profiler=i,this.performance=o,this.memory=r,this.console=l,this.parameters=s,this.viewer=n,this.timeline=a,this.settings=h,this.once={},this.extensionsData=new WeakMap,this.previousConsoleFunction=null,this._domObserver=null,this.displayCycle={text:{needsUpdate:!1,duration:.25,time:0},graph:{needsUpdate:!1,duration:.02,time:0},toggleGraph:{needsUpdate:!1,duration:.02,time:0}}}get domElement(){return this.profiler.domElement}isVertical(){return this.profiler?this.profiler.isVertical():!1}onExtension(e,t){const i=s=>{s.name===e&&(t(s.tab),this.settings.removeEventListener("extensionadded",i))};return this.settings.extensions[e]&&this.settings.extensions[e].loaded?t(this.settings.extensions[e]):this.settings.addEventListener("extensionadded",i),this}hide(){this.profiler.hide()}show(){this.profiler.show()}setVisible(e){return this.domElement.style.display=e?"":"none",this}getVisible(){return this.domElement.style.display!=="none"}getSize(){return this.profiler.getSize()}setActiveTab(e){return this.profiler.setActiveTab(e.id),this}setHorizontalAlign(e){return this.profiler.setHorizontalAlign(e),this}setVerticalAlign(e){return this.profiler.setVerticalAlign(e),this}addTab(e){return this.profiler.addTab(e),this}removeTab(e){return e.dispose(),this.profiler.removeTab(e),this}setActiveExtension(e,t){return this.settings.setActiveExtension(e,t),this}resolveConsoleOnce(e,t){const i=e+t;this.once[i]!==!0&&(this.resolveConsole(e,t),this.once[i]=!0)}resolveConsole(e,t,i=null){switch(e){case"log":this.console.addMessage("info",t),console.log(t);break;case"warn":this.console.addMessage("warn",t),i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t);break;case"error":this.console.addMessage("error",t),i&&i.isStackTrace?console.error(i.getError(t)):console.error(t);break}}setRenderer(e){if(super.setRenderer(e),e!==null){const t=Ci();this.previousConsoleFunction=t,Ke((i,s,...n)=>{t&&t(i,s,...n),this.resolveConsole(i,s,...n)}),this.isAvailable&&((async()=>{e.hasInitialized()===!1&&await e.init(),e.backend.trackTimestamp=!0,e.hasFeature("timestamp-query")!==!0&&this.console.addMessage("error","THREE.Inspector: GPU Timestamp Queries not available.");let s=`THREE.WebGPURenderer: ${We} [ "`;e.backend.isWebGPUBackend?s+="WebGPU":e.backend.isWebGLBackend&&(s+="WebGL2"),s+='" ]',this.console.addMessage("info",s);const n=this.domElement;n.parentElement===null&&(e.domElement.parentElement!==null?e.domElement.parentElement.appendChild(n):(this._domObserver!==null&&this._domObserver.disconnect(),this._domObserver=new MutationObserver(()=>{e.domElement&&e.domElement.parentElement!==null&&(e.domElement.parentElement.appendChild(n),this._domObserver!==null&&(this._domObserver.disconnect(),this._domObserver=null))}),this._domObserver.observe(document.body||document.documentElement,{childList:!0,subtree:!0})))})(),this.timeline.setRenderer(e))}else this.previousConsoleFunction&&(Ke(this.previousConsoleFunction),this.previousConsoleFunction=void 0),this._domObserver!==null&&(this._domObserver.disconnect(),this._domObserver=null),this.profiler.dispose(),this.statsData.clear(),super.dispose();return this}createParameters(e){return this.parameters.isVisible===!1&&this.parameters.show(),this.parameters.createGroup(e)}getStatsData(e){let t=this.statsData.get(e);return t===void 0&&(t={},this.statsData.set(e,t)),t}resolveStats(e){const t=this.getStatsData(e.cid);t.initialized!==!0&&(t.cpu=e.cpu,t.gpu=e.gpu,t.stats=[],t.initialized=!0),t.stats.length>this.maxFrames&&t.stats.shift(),t.stats.push(e),t.cpu=this.getAverageDeltaTime(t,"cpu"),t.gpu=this.getAverageDeltaTime(t,"gpu");for(const i of e.children){this.resolveStats(i);const s=this.getStatsData(i.cid);t.gpu+=s.gpu}t.total=t.cpu+t.gpu}getNodes(){return this.currentNodes}getAverageDeltaTime(e,t,i=this.fps){const s=e.stats;let n=0,o=0;for(let r=s.length-1;r>=0&&o<i;r--){const l=s[r][t];l>0&&(n+=l,o++)}return o>0?n/o:0}updateTabs(){const e=Object.values(this.profiler.tabs);for(const t of e){let i=this.extensionsData.get(t);i===void 0&&(t.init(this),i={},this.extensionsData.set(t,i)),t.update(this)}}resolveFrame(e){if(this.getFrameById(e.frameId-1)){e.cpu=0,e.gpu=0,e.total=0;for(const i of e.children){this.resolveStats(i);const s=this.getStatsData(i.cid);e.cpu+=s.cpu,e.gpu+=s.gpu,e.total+=s.total}e.miscellaneous=e.deltaTime-e.total,e.miscellaneous<0&&(e.miscellaneous=0),this.updateCycle(this.displayCycle.text),this.updateCycle(this.displayCycle.graph),this.updateCycle(this.displayCycle.toggleGraph),this.displayCycle.text.needsUpdate&&(y(this.profiler.toggleButton.querySelector(".fps-counter"),this.fps.toFixed()),this.performance.updateText(this,e),this.memory.updateText(this)),this.displayCycle.toggleGraph.needsUpdate&&this.profiler.toggleGraph&&(this.profiler.toggleGraph.addPoint("fps",this.fps),this.profiler.toggleGraph.update()),this.displayCycle.graph.needsUpdate&&(this.performance.updateGraph(this,e),this.memory.updateGraph(this)),this.displayCycle.text.needsUpdate=!1,this.displayCycle.graph.needsUpdate=!1,this.displayCycle.toggleGraph.needsUpdate=!1}}updateCycle(e){e.time+=this.nodeFrame.deltaTime,e.time>=e.duration&&(e.needsUpdate=!0,e.time=0)}dispose(){super.dispose(),this.setRenderer(null)}}const M=new xe,Es=new T,ct=new T(1,0),dt=new T(0,1);let q;class Ts extends Ee{static get type(){return"OutlineNode"}constructor(e,t,i={}){super("vec4");const{selectedObjects:s=[],edgeThickness:n=K(1),edgeGlow:o=K(0),downSampleRatio:r=2}=i;this.scene=e,this.camera=t,this.selectedObjects=s,this.edgeThicknessNode=Ne(n),this.edgeGlowNode=Ne(o),this.downSampleRatio=r,this.updateBeforeType=ut.FRAME,this._renderTargetDepthBuffer=new H,this._renderTargetDepthBuffer.depthTexture=new _i,this._renderTargetDepthBuffer.depthTexture.type=gt,this._renderTargetMaskBuffer=new H,this._renderTargetMaskDownSampleBuffer=new H(1,1,{depthBuffer:!1}),this._renderTargetEdgeBuffer1=new H(1,1,{depthBuffer:!1}),this._renderTargetEdgeBuffer2=new H(1,1,{depthBuffer:!1}),this._renderTargetBlurBuffer1=new H(1,1,{depthBuffer:!1}),this._renderTargetBlurBuffer2=new H(1,1,{depthBuffer:!1}),this._renderTargetComposite=new H(1,1,{depthBuffer:!1}),this._cameraNear=Qe("near","float",t),this._cameraFar=Qe("far","float",t),this._blurDirection=R(new T),this._depthTextureUniform=A(this._renderTargetDepthBuffer.depthTexture),this._maskTextureUniform=A(this._renderTargetMaskBuffer.texture),this._maskTextureDownsSampleUniform=A(this._renderTargetMaskDownSampleBuffer.texture),this._edge1TextureUniform=A(this._renderTargetEdgeBuffer1.texture),this._edge2TextureUniform=A(this._renderTargetEdgeBuffer2.texture),this._blurColorTextureUniform=A(this._renderTargetEdgeBuffer1.texture),this._visibleEdgeColor=Q(1,0,0),this._hiddenEdgeColor=Q(0,1,0),this._depthMaterial=new O,this._depthMaterial.colorNode=Je(0,0,0),this._depthMaterial.name="OutlineNode.depth",this._depthSpriteMaterial=new et,this._depthSpriteMaterial.colorNode=Je(0,0,0),this._depthSpriteMaterial.name="OutlineNode.depthSprite",this._prepareMaskMaterial=new O,this._prepareMaskMaterial.name="OutlineNode.prepareMask",this._prepareMaskSpriteMaterial=new et,this._prepareMaskSpriteMaterial.name="OutlineNode.prepareMaskSprite",this._materialCopy=new O,this._materialCopy.name="OutlineNode.copy",this._edgeDetectionMaterial=new O,this._edgeDetectionMaterial.name="OutlineNode.edgeDetection",this._separableBlurMaterial=new O,this._separableBlurMaterial.name="OutlineNode.separableBlur",this._separableBlurMaterial2=new O,this._separableBlurMaterial2.name="OutlineNode.separableBlur2",this._compositeMaterial=new O,this._compositeMaterial.name="OutlineNode.composite",this._depthMaterialCache=new Map,this._prepareMaskMaterialCache=new Map,this._onMaterialDispose=a=>{const l=a.target;l.removeEventListener("dispose",this._onMaterialDispose);for(const h of[this._depthMaterialCache,this._prepareMaskMaterialCache]){const c=h.get(l);c!==void 0&&(c.dispose(),h.delete(l))}},this._selectionCache=new Set,this._lastSelectionCount=0,this._textureNode=pt(this,this._renderTargetComposite.texture)}get visibleEdge(){return this.r}get hiddenEdge(){return this.g}getTextureNode(){return this._textureNode}setSize(e,t){this._renderTargetDepthBuffer.setSize(e,t),this._renderTargetMaskBuffer.setSize(e,t),this._renderTargetComposite.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this._renderTargetMaskDownSampleBuffer.setSize(i,s),this._renderTargetEdgeBuffer1.setSize(i,s),this._renderTargetBlurBuffer1.setSize(i,s),i=Math.round(i/2),s=Math.round(s/2),this._renderTargetEdgeBuffer2.setSize(i,s),this._renderTargetBlurBuffer2.setSize(i,s)}updateBefore(e){const{renderer:t}=e,{camera:i,scene:s}=this;if(this._updateSelectionCache(),this._selectionCache.size===0){this._lastSelectionCount>0&&(q=V.resetRendererState(t,q),t.setRenderTarget(this._renderTargetComposite),t.setClearColor(0,0),t.clear(),V.restoreRendererState(t,q),this._lastSelectionCount=0);return}this._lastSelectionCount=this._selectionCache.size,q=V.resetRendererAndSceneState(t,s,q);const n=t.getDrawingBufferSize(Es);this.setSize(n.width,n.height),t.setClearColor(16777215,1);const o=s.name;t.setRenderTarget(this._renderTargetDepthBuffer),t.setRenderObjectFunction((r,a,l,h,c,p,u,m)=>{if(this._selectionCache.has(r)===!1){const f=r.isSprite?this._depthSpriteMaterial:this._depthMaterial,b=this._getPassMaterial(this._depthMaterialCache,f,c);t.renderObject(r,a,l,h,b,p,u,m)}}),s.name="Outline [ Non-Selected Objects Pass ]",t.render(s,i),t.setRenderTarget(this._renderTargetMaskBuffer),t.setRenderObjectFunction((r,a,l,h,c,p,u,m)=>{if(this._selectionCache.has(r)===!0){const f=r.isSprite?this._prepareMaskSpriteMaterial:this._prepareMaskMaterial,b=this._getPassMaterial(this._prepareMaskMaterialCache,f,c);t.renderObject(r,a,l,h,b,p,u,m)}}),s.name="Outline [ Selected Objects Pass ]",t.render(s,i),t.setRenderObjectFunction(q.renderObjectFunction),this._selectionCache.clear(),s.name=o,M.material=this._materialCopy,M.name="Outline [ Downsample ]",t.setRenderTarget(this._renderTargetMaskDownSampleBuffer),M.render(t),M.material=this._edgeDetectionMaterial,M.name="Outline [ Edge Detection ]",t.setRenderTarget(this._renderTargetEdgeBuffer1),M.render(t),this._blurColorTextureUniform.value=this._renderTargetEdgeBuffer1.texture,this._blurDirection.value.copy(ct),M.material=this._separableBlurMaterial,M.name="Outline [ Blur Half Resolution ]",t.setRenderTarget(this._renderTargetBlurBuffer1),M.render(t),this._blurColorTextureUniform.value=this._renderTargetBlurBuffer1.texture,this._blurDirection.value.copy(dt),t.setRenderTarget(this._renderTargetEdgeBuffer1),M.render(t),this._blurColorTextureUniform.value=this._renderTargetEdgeBuffer1.texture,this._blurDirection.value.copy(ct),M.material=this._separableBlurMaterial2,M.name="Outline [ Blur Quarter Resolution ]",t.setRenderTarget(this._renderTargetBlurBuffer2),M.render(t),this._blurColorTextureUniform.value=this._renderTargetBlurBuffer2.texture,this._blurDirection.value.copy(dt),t.setRenderTarget(this._renderTargetEdgeBuffer2),M.render(t),M.material=this._compositeMaterial,M.name="Outline [ Blur Quarter Resolution ]",t.setRenderTarget(this._renderTargetComposite),M.render(t),V.restoreRendererAndSceneState(t,s,q)}setup(){const e=()=>{const r=this._depthTextureUniform.sample(be);let a;this.camera.isPerspectiveCamera?a=Ti(r,this._cameraNear,this._cameraFar):a=ki(r,this._cameraNear,this._cameraFar);const l=Si.z.lessThanEqual(a).select(1,0);return Q(0,l,1)};this._prepareMaskMaterial.colorNode=e(),this._prepareMaskMaterial.needsUpdate=!0,this._prepareMaskSpriteMaterial.colorNode=e(),this._prepareMaskSpriteMaterial.needsUpdate=!0,this._materialCopy.fragmentNode=this._maskTextureUniform,this._materialCopy.needsUpdate=!0;const t=j(()=>{const r=tt(this._maskTextureDownsSampleUniform),a=he(1).div(r).toVar(),l=F(1,0,0,1).mul(F(a,a)),h=Ae(),c=this._maskTextureDownsSampleUniform.sample(h.add(l.xy)).toVar(),p=this._maskTextureDownsSampleUniform.sample(h.sub(l.xy)).toVar(),u=this._maskTextureDownsSampleUniform.sample(h.add(l.yw)).toVar(),m=this._maskTextureDownsSampleUniform.sample(h.sub(l.yw)).toVar(),f=it(c.r.sub(p.r),.5),b=it(u.r.sub(m.r),.5),g=he(f,b).length(),x=Me(c.g,p.g),E=Me(u.g,m.g),B=Me(x,E).oneMinus().greaterThan(.001).select(this._visibleEdgeColor,this._hiddenEdgeColor);return F(B,1).mul(g)});this._edgeDetectionMaterial.fragmentNode=t(),this._edgeDetectionMaterial.needsUpdate=!0;const i=4,s=j(([r,a])=>K(.39894).mul(Ei(K(-.5).mul(r).mul(r).div(a.mul(a))).div(a))),n=j(([r])=>{const a=tt(this._maskTextureDownsSampleUniform),l=he(1).div(a).toVar(),h=Ae(),c=r.div(2).toVar(),p=s(0,c).toVar(),u=this._blurColorTextureUniform.sample(h).mul(p).toVar(),m=this._blurDirection.mul(l).mul(r).div(i).toVar(),f=m.toVar();return mt({start:ye(1),end:ye(i),type:"int",condition:"<="},({i:b})=>{const g=r.mul(K(b)).div(i),x=s(g,c),E=this._blurColorTextureUniform.sample(h.add(f)),k=this._blurColorTextureUniform.sample(h.sub(f));u.addAssign(E.add(k).mul(x)),p.addAssign(x.mul(2)),f.addAssign(m)}),u.div(p)});this._separableBlurMaterial.fragmentNode=n(this.edgeThicknessNode),this._separableBlurMaterial.needsUpdate=!0,this._separableBlurMaterial2.fragmentNode=n(i),this._separableBlurMaterial2.needsUpdate=!0;const o=j(()=>{const r=this._edge1TextureUniform,a=this._edge2TextureUniform,l=this._maskTextureUniform,h=r.add(a.mul(this.edgeGlowNode));return l.r.mul(h)});return this._compositeMaterial.fragmentNode=o(),this._compositeMaterial.needsUpdate=!0,this._textureNode}dispose(){super.dispose(),this.selectedObjects.length=0,this._renderTargetDepthBuffer.dispose(),this._renderTargetMaskBuffer.dispose(),this._renderTargetMaskDownSampleBuffer.dispose(),this._renderTargetEdgeBuffer1.dispose(),this._renderTargetEdgeBuffer2.dispose(),this._renderTargetBlurBuffer1.dispose(),this._renderTargetBlurBuffer2.dispose(),this._renderTargetComposite.dispose(),this._depthMaterial.dispose(),this._depthSpriteMaterial.dispose(),this._prepareMaskMaterial.dispose(),this._prepareMaskSpriteMaterial.dispose(),this._materialCopy.dispose(),this._edgeDetectionMaterial.dispose(),this._separableBlurMaterial.dispose(),this._separableBlurMaterial2.dispose(),this._compositeMaterial.dispose();for(const e of[this._depthMaterialCache,this._prepareMaskMaterialCache]){for(const[t,i]of e)t.removeEventListener("dispose",this._onMaterialDispose),i.dispose();e.clear()}}_updateSelectionCache(){for(let e=0;e<this.selectedObjects.length;e++)this.selectedObjects[e].traverse(i=>{(i.isMesh||i.isSprite)&&this._selectionCache.add(i)})}_getPassMaterial(e,t,i){if(!i.positionNode)return t;let s=!1,n=e.get(i);return n===void 0&&(n=t.clone(),e.set(i,n),i.addEventListener("dispose",this._onMaterialDispose),s=!0),(n.version!==i.version||s===!0)&&(n.positionNode=i.positionNode||null,n.version=i.version),n}}const ks=(d,e,t)=>new Ts(d,e,t);class Ss{constructor(e={}){C(this,"renderer");C(this,"scene");C(this,"inspector",null);C(this,"pipeline");C(this,"scenePass");C(this,"bloomPass");C(this,"outlinePass");C(this,"sceneOutput");C(this,"bloomOutput");C(this,"_render",()=>{this.renderer.render(this.scene,this.camera)});if(this.renderer=new we({antialias:!0}),this.renderer.setClearColor("#000"),this.renderer.outputColorSpace=Li,this.renderer.toneMapping=ne,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=Mi,this.renderer.setPixelRatio(window.devicePixelRatio),e.inspector){this.inspector=new _s,this.renderer.inspector=this.inspector;const a=this.inspector.domElement.querySelector(".profiler-toggle");a.style.position="absolute"}this.scene=new Bi,this.scene.background=new ve("#212225"),this.pipeline=new Ri(this.renderer),this.scenePass=Pi(this.scene,Ii),this.outlinePass=ks(this.scene,this.camera,{edgeGlow:R(0),edgeThickness:R(1)});const{visibleEdge:t,hiddenEdge:i}=this.outlinePass,s=R(new ve("#00ff00")),n=R(new ve("#00ff00").multiplyScalar(.5)),o=R(3),r=t.mul(s).add(i.mul(n)).mul(o);this.sceneOutput=r.add(this.scenePass),this.bloomPass=es(this.sceneOutput),this.bloomOutput=this.sceneOutput.add(this.bloomPass),this.pipeline.outputNode=this.sceneOutput}setInspectorVisible(e){var t;(t=this.inspector)==null||t.setVisible(e)}get camera(){return this.scenePass.camera}set camera(e){this.scenePass.camera=e}mount(e){e.appendChild(this.renderer.domElement)}setOutlineSelections(e){this.outlinePass.selectedObjects=[...e]}render(){this.pipeline.render()}resize(e,t){this.renderer.setSize(e,t)}dispose(){var e;this.outlinePass.selectedObjects=[],this.renderer.domElement.remove(),(e=this.inspector)==null||e.domElement.remove(),this.pipeline.dispose(),this.renderer.dispose()}toImage(){return this.render(),this.renderer.domElement.toDataURL("image/png")}}class Os extends Ve{constructor(t={}){super();C(this,"container");C(this,"render");C(this,"timer");C(this,"modules");C(this,"update",()=>{this.timer.update(),this.emit($.Update,this),this.emit($.RenderBefore,this),this.render.render(),this.emit($.RenderAfter,this)});C(this,"resize",()=>{const{offsetWidth:t,offsetHeight:i}=this.container;this.render.resize(t,i),this.emit($.Resize,this)});this.container=document.createElement("div"),this.container.className="core-3d",this.container.style.position="relative",this.container.style.height="100%",this.container.style.pointerEvents="auto",this.container.tabIndex=0,this.render=new Ss(t),this.timer=new zi,this.modules=new Map,D.from(this.render.scene).attach(this)}mount(t){t.appendChild(this.container),this.render.mount(this.container),this.timer.connect(document),this.emit($.Mount,this)}unmount(){this.timer.disconnect(),this.modules.forEach(t=>t.unmount(this)),this.modules.clear(),D.destroy(this.render.scene),this.render.dispose(),this.container.remove(),this.emit($.Unmount,this),this.removeAllListeners()}start(){this.timer.reset(),this.render.renderer.setAnimationLoop(this.update),this.emit($.Start,this)}stop(){this.render.renderer.setAnimationLoop(null),this.emit($.Stop,this)}addModule(t,i){this.modules.set(t,i),i.mount(this)}getModule(t){return this.modules.get(t)}removeModule(t){const i=this.modules.get(t);i==null||i.unmount(this),this.modules.delete(t)}}export{Os as C,Is as D,D as E,Rs as I,Bs as O,Ss as R,Oe as S,Xi as a,zs as b,Ps as c,Ds as f,As as g,Ns as r};
