const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/orbit-controls-component-CHnnc7YB.js","assets/index-Dv7eEj6Y.js","assets/index-BqxAH8V2.css","assets/fly-controls-component-CtRkq7uH.js","assets/FlyControls-h9gPAn2a.js","assets/first-person-controls-component-FiSmMy2i.js","assets/FirstPersonControls-UOKiI-8i.js","assets/map-controls-component-BV5zpRvk.js","assets/MapControls-p5JYgDZ0.js","assets/pointer-lock-controls-component-DVM5f7da.js","assets/PointerLockControls-BaLN3DxZ.js"])))=>i.map(i=>d[i]);
var Dt=Object.defineProperty;var zt=(p,e,t)=>e in p?Dt(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t;var T=(p,e,t)=>zt(p,typeof e!="symbol"?e+"":e,t);import{f as Ft,V as I,h as oe,T as se,Q as Qe,S as Je,i as E,aI as Ot,P as Vt,M as Wt,aJ as s,aK as ce,aL as Ut,aM as $,aN as jt,aO as He,aP as Ht,aQ as et,aR as Gt,aS as Xt,aT as $t,aU as Yt,aV as qt,aW as Be,aX as Zt,aY as Kt,aZ as Qt,a_ as tt,a$ as ut,b0 as j,b1 as ve,b2 as mt,b3 as W,b4 as Ce,b5 as V,b6 as Jt,b7 as ei,b8 as ti,b9 as ne,ba as De,bb as fe,bc as ii,bd as Ge,be as gt,bf as Te,bg as si,bh as it,bi as we,bj as ni,bk as oi,bl as ri,bm as ft,bn as ai,bo as li,bp as ci,bq as hi,br as di,bs as pi,bt as ui,bu as mi,bv as gi,bw as fi,bx as bi,by as xi,bz as vi,bA as wi,bB as yi,bC as _i,bD as Ci,bE as Ti,bF as ki,bG as st,bH as Ei,bI as Xe,bJ as Si,bK as nt,bL as Li,bM as Mi,bN as Bi,bO as Pi,bP as Ri,bQ as Ii,bR as q}from"./index-Dv7eEj6Y.js";const ot={type:"change"},$e={type:"start"},bt={type:"end"},be=new Ot,rt=new Vt,Ai=Math.cos(70*Wt.DEG2RAD),M=new I,A=2*Math.PI,C={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pe=1e-6;class Rg extends Ft{constructor(e,t=null){super(e,t),this.state=C.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oe.ROTATE,MIDDLE:oe.DOLLY,RIGHT:oe.PAN},this.touches={ONE:se.ROTATE,TWO:se.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Qe,this._lastTargetPosition=new I,this._quat=new Qe().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Je,this._sphericalDelta=new Je,this._scale=1,this._panOffset=new I,this._rotateStart=new E,this._rotateEnd=new E,this._rotateDelta=new E,this._panStart=new E,this._panEnd=new E,this._panDelta=new E,this._dollyStart=new E,this._dollyEnd=new E,this._dollyDelta=new E,this._dollyDirection=new I,this._mouse=new E,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Di.bind(this),this._onPointerDown=Ni.bind(this),this._onPointerUp=zi.bind(this),this._onContextMenu=Hi.bind(this),this._onMouseWheel=Vi.bind(this),this._onKeyDown=Wi.bind(this),this._onTouchStart=Ui.bind(this),this._onTouchMove=ji.bind(this),this._onMouseDown=Fi.bind(this),this._onMouseMove=Oi.bind(this),this._interceptControlDown=Gi.bind(this),this._interceptControlUp=Xi.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=C.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ot),this.update(),this.state=C.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;M.copy(t).sub(this.target),M.applyQuaternion(this._quat),this._spherical.setFromVector3(M),this.autoRotate&&this.state===C.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=A:i>Math.PI&&(i-=A),n<-Math.PI?n+=A:n>Math.PI&&(n-=A),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(M.setFromSpherical(this._spherical),M.applyQuaternion(this._quatInverse),t.copy(this.target).add(M),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=M.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new I(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(be.origin.copy(this.object.position),be.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(be.direction))<Ai?this.object.lookAt(this.target):(rt.setFromNormalAndCoplanarPoint(this.object.up,this.target),be.intersectPlane(rt,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Pe||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pe||this._lastTargetPosition.distanceToSquared(this.target)>Pe?(this.dispatchEvent(ot),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?A/60*this.autoRotateSpeed*e:A/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){M.setFromMatrixColumn(t,0),M.multiplyScalar(-e),this._panOffset.add(M)}_panUp(e,t){this.screenSpacePanning===!0?M.setFromMatrixColumn(t,1):(M.setFromMatrixColumn(t,0),M.crossVectors(this.object.up,M)),M.multiplyScalar(e),this._panOffset.add(M)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;M.copy(n).sub(this.target);let o=M.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,o=t-i.top,a=i.width,r=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(A*this._rotateDelta.x/t.clientHeight),this._rotateUp(A*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(A*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-A*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(A*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-A*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,o=Math.sqrt(i*i+n*n);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(n,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(A*this._rotateDelta.x/t.clientHeight),this._rotateUp(A*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,o=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new E,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ni(p){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(p.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(p)&&(this._addPointer(p),p.pointerType==="touch"?this._onTouchStart(p):this._onMouseDown(p),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Di(p){this.enabled!==!1&&(p.pointerType==="touch"?this._onTouchMove(p):this._onMouseMove(p))}function zi(p){switch(this._removePointer(p),this._pointers.length){case 0:this.domElement.releasePointerCapture(p.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bt),this.state=C.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fi(p){let e;switch(p.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(p),this.state=C.DOLLY;break;case oe.ROTATE:if(p.ctrlKey||p.metaKey||p.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(p),this.state=C.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(p),this.state=C.ROTATE}break;case oe.PAN:if(p.ctrlKey||p.metaKey||p.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(p),this.state=C.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(p),this.state=C.PAN}break;default:this.state=C.NONE}this.state!==C.NONE&&this.dispatchEvent($e)}function Oi(p){switch(this.state){case C.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(p);break;case C.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(p);break;case C.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(p);break}}function Vi(p){this.enabled===!1||this.enableZoom===!1||this.state!==C.NONE||(p.preventDefault(),this.dispatchEvent($e),this._handleMouseWheel(this._customWheelEvent(p)),this.dispatchEvent(bt))}function Wi(p){this.enabled!==!1&&this._handleKeyDown(p)}function Ui(p){switch(this._trackPointer(p),this._pointers.length){case 1:switch(this.touches.ONE){case se.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(p),this.state=C.TOUCH_ROTATE;break;case se.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(p),this.state=C.TOUCH_PAN;break;default:this.state=C.NONE}break;case 2:switch(this.touches.TWO){case se.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(p),this.state=C.TOUCH_DOLLY_PAN;break;case se.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(p),this.state=C.TOUCH_DOLLY_ROTATE;break;default:this.state=C.NONE}break;default:this.state=C.NONE}this.state!==C.NONE&&this.dispatchEvent($e)}function ji(p){switch(this._trackPointer(p),this.state){case C.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(p),this.update();break;case C.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(p),this.update();break;case C.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(p),this.update();break;case C.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(p),this.update();break;default:this.state=C.NONE}}function Hi(p){this.enabled!==!1&&p.preventDefault()}function Gi(p){p.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xi(p){p.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $i=s.BRDF_GGX,Yi=s.BRDF_Lambert,qi=s.BRDF_Sheen,Zi=s.BasicPointShadowFilter,Ki=s.BasicShadowFilter,Qi=s.Break,Ji=s.Const,es=s.Continue,ts=s.DFGLUT,is=s.D_GGX,ss=s.D_GGX_Anisotropic,ns=s.Discard,os=s.EPSILON,rs=s.EnvironmentBRDF,as=s.F_Schlick,H=s.Fn,ls=s.HALF_PI,cs=s.INFINITY,hs=s.If,ds=s.LTC_Evaluate,ps=s.LTC_Evaluate_Volume,us=s.LTC_Uv,Ye=s.Loop,ms=s.NodeAccess,gs=s.NodeShaderStage,fs=s.NodeType,bs=s.NodeUpdateType,xs=s.OnAfterObjectUpdate,vs=s.OnAfterRenderPipeline,ws=s.OnBeforeFrameUpdate,ys=s.OnBeforeMaterialUpdate,_s=s.OnBeforeObjectUpdate,Cs=s.OnBeforeRenderPipeline,Ts=s.OnFrameUpdate,xt=s.OnMaterialUpdate,ks=s.OnObjectUpdate,Es=s.PCFShadowFilter,Ss=s.PI,Ls=s.PI2,Ms=s.PointShadowFilter,Bs=s.Return,Ps=s.Schlick_to_F0,Rs=s.ShaderNode,Is=s.Stack,As=s.Switch,Ns=s.TBNViewMatrix,Ds=s.TWO_PI,zs=s.VSMShadowFilter,Fs=s.V_GGX_SmithCorrelated,Os=s.V_GGX_SmithCorrelated_Anisotropic,Vs=s.Var,Ws=s.VarIntent,Us=s.abs,js=s.acesFilmicToneMapping,Hs=s.acos,Gs=s.acosh,vt=s.add,Xs=s.addMethodChaining,$s=s.addNodeElement,Ys=s.agxToneMapping,qs=s.all,Zs=s.alphaT,Ks=s.ambientOcclusion,Qs=s.and,Js=s.anisotropy,en=s.anisotropyB,tn=s.anisotropyT,sn=s.any,ye=s.array,nn=s.asin,on=s.asinh,rn=s.assign,an=s.atan,ln=s.atanh,cn=s.atomicAdd,hn=s.atomicAnd,dn=s.atomicFunc,pn=s.atomicLoad,un=s.atomicMax,mn=s.atomicMin,gn=s.atomicOr,fn=s.atomicStore,bn=s.atomicSub,xn=s.atomicXor,vn=s.attenuationColor,wn=s.attenuationDistance,yn=s.attribute,_n=s.attributeArray,Cn=s.backgroundBlurriness,Tn=s.backgroundIntensity,kn=s.backgroundRotation,En=s.batch,Sn=s.batchColor,Ln=s.batchIndirectIndex,Mn=s.bentNormalView,Bn=s.billboarding,Pn=s.bitAnd,Rn=s.bitNot,In=s.bitOr,An=s.bitXor,Nn=s.bitangentGeometry,Dn=s.bitangentLocal,zn=s.bitangentView,Fn=s.bitangentViewFrame,On=s.bitangentWorld,Vn=s.bitcast,Wn=s.blendBurn,Un=s.blendColor,jn=s.blendDodge,Hn=s.blendOverlay,Gn=s.blendScreen,Xn=s.bool,$n=s.buffer,Yn=s.bufferAttribute,qn=s.builtin,Zn=s.builtinAOContext,Kn=s.builtinGIContext,Qn=s.builtinShadowContext,Jn=s.bumpMap,eo=s.bvec2,to=s.bvec3,io=s.bvec4,so=s.bypass,no=s.cache,oo=s.call,ro=s.cameraFar,ao=s.cameraIndex,lo=s.cameraNear,co=s.cameraNormalMatrix,ho=s.cameraPosition,po=s.cameraProjectionMatrix,uo=s.cameraProjectionMatrixInverse,mo=s.cameraViewMatrix,go=s.cameraViewport,fo=s.cameraWorldMatrix,bo=s.cbrt,xo=s.cdl,vo=s.ceil,wo=s.checker,yo=s.cineonToneMapping,_o=s.clamp,Co=s.clearcoat,To=s.clearcoatNormalView,ko=s.clearcoatRoughness,Eo=s.clipSpace,So=s.clipping,Lo=s.clippingAlpha,Mo=s.code,ze=s.color,Bo=s.colorSpaceToWorking,Po=s.colorToDirection,Ro=s.compute,Io=s.computeKernel,Ao=s.computeSkinning,wt=s.context,No=s.convert,Do=s.convertColorSpace,zo=s.convertToTexture,Fo=s.cos,Oo=s.cosh,Vo=s.countLeadingZeros,Wo=s.countOneBits,Uo=s.countTrailingZeros,jo=s.cross,Ho=s.cubeTexture,Go=s.cubeTextureBase,Xo=s.dFdx,$o=s.dFdy,Yo=s.dashSize,qo=s.debug,Zo=s.decrement,Ko=s.decrementBefore,Qo=s.defaultBuildStages,Jo=s.defaultShaderStages,er=s.defined,tr=s.degrees,ir=s.deltaTime,sr=s.densityFogFactor,nr=s.depth,or=s.depthPass,rr=s.determinant,ar=s.difference,lr=s.diffuseColor,cr=s.diffuseContribution,hr=s.directPointLight,dr=s.directionToColor,pr=s.directionToFaceDirection,ur=s.dispersion,mr=s.distance,gr=s.div,fr=s.dot,br=s.dot4I8Packed,xr=s.dot4U8Packed,vr=s.drawIndex,wr=s.dynamicBufferAttribute,yr=s.element,_r=s.emissive,Cr=s.equal,Tr=s.equirectDirection,kr=s.equirectUV,yt=s.exp,Er=s.exp2,Sr=s.exponentialHeightFogFactor,Lr=s.expression,Mr=s.faceDirection,Br=s.faceForward,Pr=s.faceforward,Z=s.float,Rr=s.floatBitsToInt,Ir=s.floatBitsToUint,Ar=s.floor,Nr=s.fog,Dr=s.fract,zr=s.frameGroup,Fr=s.frameId,Or=s.frontFacing,Vr=s.fwidth,Wr=s.gain,Ur=s.gapSize,jr=s.getConstNodeType,Hr=s.getCurrentStack,Gr=s.getDistanceAttenuation,Xr=s.getGeometryRoughness,$r=s.getNormalFromDepth,Yr=s.getParallaxCorrectNormal,qr=s.getRoughness,Zr=s.getScreenPosition,Kr=s.getScreenPositionFromClip,Qr=s.getShIrradianceAt,Jr=s.getTextureIndex,ea=s.getViewPosition,ta=s.globalId,ia=s.glsl,sa=s.glslFn,na=s.grayscale,oa=s.greaterThan,ra=s.greaterThanEqual,aa=s.hardwareClipping,la=s.hash,ca=s.highpModelNormalViewMatrix,ha=s.highpModelViewMatrix,da=s.hue,pa=s.increment,ua=s.incrementBefore,ma=s.inspect,ga=s.instance,fa=s.instanceColor,ba=s.instanceIndex,xa=s.instancedArray,va=s.instancedBufferAttribute,wa=s.instancedDynamicBufferAttribute,ya=s.instancedMesh,ue=s.int,_a=s.intBitsToFloat,Ca=s.interleavedGradientNoise,Ta=s.inverse,ka=s.inverseSqrt,Ea=s.inversesqrt,Sa=s.invocationLocalIndex,La=s.invocationSubgroupIndex,Ma=s.ior,Ba=s.iridescence,Pa=s.iridescenceIOR,Ra=s.iridescenceThickness,Ia=s.isolate,Aa=s.ivec2,Na=s.ivec3,Da=s.ivec4,za=s.js,Fa=s.label,Oa=s.length,Va=s.lengthSq,Wa=s.lessThan,Ua=s.lessThanEqual,ja=s.lightPosition,Ha=s.lightProjectionUV,Ga=s.lightShadowMatrix,Xa=s.lightTargetDirection,$a=s.lightTargetPosition,Ya=s.lightViewPosition,qa=s.lightingContext,Za=s.lights,Ka=s.linearDepth,Qa=s.linearToneMapping,Ja=s.localId,el=s.log,tl=s.log2,il=s.logarithmicDepthToViewZ,_t=s.luminance,sl=s.mat2,nl=s.mat3,ol=s.mat4,rl=s.matcapUV,al=s.materialAO,ll=s.materialAlphaTest,cl=s.materialAnisotropy,hl=s.materialAnisotropyVector,dl=s.materialAttenuationColor,pl=s.materialAttenuationDistance,ul=s.materialClearcoat,ml=s.materialClearcoatNormal,gl=s.materialClearcoatRoughness,fl=s.materialColor,bl=s.materialDispersion,xl=s.materialEmissive,vl=s.materialEnvIntensity,wl=s.materialEnvRotation,yl=s.materialIOR,_l=s.materialIridescence,Cl=s.materialIridescenceIOR,Tl=s.materialIridescenceThickness,kl=s.materialLightMap,El=s.materialLineDashOffset,Sl=s.materialLineDashSize,Ll=s.materialLineGapSize,Ml=s.materialLineScale,Bl=s.materialLineWidth,Pl=s.materialMetalness,Rl=s.materialNormal,Il=s.materialOpacity,Al=s.materialPointSize,Nl=s.materialReference,Dl=s.materialReflectivity,zl=s.materialRefractionRatio,Fl=s.materialRetroreflectivity,Ol=s.materialRotation,Vl=s.materialRoughness,Wl=s.materialSheen,Ul=s.materialSheenRoughness,jl=s.materialShininess,Hl=s.materialSpecular,Gl=s.materialSpecularColor,Xl=s.materialSpecularIntensity,$l=s.materialSpecularStrength,Yl=s.materialThickness,ql=s.materialTransmission,Zl=s.max,Kl=s.maxMipLevel,Ql=s.mediumpModelViewMatrix,Jl=s.metalness,_e=s.min,qe=s.mix,ec=s.mixElement,tc=s.mod,ic=s.modelDirection,sc=s.modelNormalMatrix,nc=s.modelPosition,oc=s.modelRadius,rc=s.modelScale,ac=s.modelViewMatrix,lc=s.modelViewPosition,cc=s.modelViewProjection,hc=s.modelWorldMatrix,dc=s.modelWorldMatrixInverse,pc=s.morphReference,uc=s.mrt,Fe=s.mul,mc=s.mx_aastep,gc=s.mx_add,fc=s.mx_atan2,bc=s.mx_cell_noise_float,xc=s.mx_cell_noise_vec3,vc=s.mx_contrast,wc=s.mx_divide,yc=s.mx_fractal_noise_float,_c=s.mx_fractal_noise_float_2d,Cc=s.mx_fractal_noise_vec2,Tc=s.mx_fractal_noise_vec3,kc=s.mx_fractal_noise_vec4,Ec=s.mx_frame,Sc=s.mx_heighttonormal,Lc=s.mx_hsvtorgb,Mc=s.mx_ifequal,Bc=s.mx_ifgreater,Pc=s.mx_ifgreatereq,Rc=s.mx_invert,Ic=s.mx_modulo,Ac=s.mx_multiply,Nc=s.mx_noise_float,Dc=s.mx_noise_vec3,zc=s.mx_noise_vec4,Fc=s.mx_place2d,Oc=s.mx_power,Vc=s.mx_ramp4,Wc=s.mx_ramplr,Uc=s.mx_ramptb,jc=s.mx_rgbtohsv,Hc=s.mx_rotate2d,Gc=s.mx_rotate3d,Xc=s.mx_safepower,$c=s.mx_separate,Yc=s.mx_smoothstep,qc=s.mx_splitlr,Zc=s.mx_splittb,Kc=s.mx_srgb_texture_to_lin_rec709,Qc=s.mx_subtract,Jc=s.mx_timer,eh=s.mx_transform_uv,th=s.mx_unifiednoise2d,ih=s.mx_unifiednoise3d,sh=s.mx_worley_noise_float,nh=s.mx_worley_noise_float_2d,oh=s.mx_worley_noise_float_3d,rh=s.mx_worley_noise_vec2,ah=s.mx_worley_noise_vec3,lh=s.mx_worley_noise_vec3_style,ch=s.negate,hh=s.negateOnBackSide,dh=s.neutralToneMapping,ph=s.nodeArray,uh=s.nodeImmutable,ke=s.nodeObject,mh=s.nodeObjectIntent,gh=s.nodeObjects,fh=s.nodeProxy,bh=s.nodeProxyConstructor,xh=s.nodeProxyIntent,vh=s.normalFlat,wh=s.normalGeometry,yh=s.normalLocal,_h=s.normalMap,Ch=s.normalView,Th=s.normalViewGeometry,kh=s.normalWorld,Eh=s.normalWorldGeometry,Sh=s.normalize,Lh=s.not,Mh=s.notEqual,Bh=s.numWorkgroups,Ph=s.objectDirection,Rh=s.objectGroup,Ih=s.objectPosition,Ah=s.objectRadius,Nh=s.objectScale,Dh=s.objectViewPosition,zh=s.objectWorldMatrix,Fh=s.oneMinus,Oh=s.or,Ct=s.orthographicDepthToViewZ,Vh=s.oscSawtooth,Wh=s.oscSine,Uh=s.oscSquare,jh=s.oscTriangle,Hh=s.output,Gh=s.outputStruct,Xh=s.overloadingFn,$h=s.overrideNode,Yh=s.overrideNodes,qh=s.pack4xI8,Zh=s.pack4xI8Clamp,Kh=s.pack4xU8,Qh=s.pack4xU8Clamp,Jh=s.packHalf2x16,ed=s.packNormalToRGB,td=s.packSnorm2x16,id=s.packSnorm4x8,sd=s.packUnorm2x16,nd=s.packUnorm4x8,od=s.parabola,rd=s.parallaxDirection,ad=s.parallaxUV,ld=s.parameter,Tt=s.pass,Ze=s.passTexture,cd=s.pcurve,kt=s.perspectiveDepthToViewZ,hd=s.pmremTexture,dd=s.pointShadow,pd=s.pointUV,ud=s.pointWidth,md=s.positionGeometry,gd=s.positionLocal,fd=s.positionPrevious,Et=s.positionView,bd=s.positionViewDirection,xd=s.positionWorld,vd=s.positionWorldDirection,wd=s.posterize,yd=s.pow,_d=s.pow2,Cd=s.pow3,Td=s.pow4,kd=s.premultiplyAlpha,Ed=s.property,Sd=s.quadBroadcast,Ld=s.quadSwapDiagonal,Md=s.quadSwapX,Bd=s.quadSwapY,Pd=s.radians,Rd=s.rand,Id=s.range,Ad=s.rangeFogFactor,Nd=s.reciprocal,Oe=s.reference,Dd=s.referenceBuffer,zd=s.reflect,Fd=s.reflectVector,Od=s.reflectView,Vd=s.reflector,Wd=s.refract,Ud=s.refractVector,jd=s.refractView,Hd=s.reinhardToneMapping,Gd=s.remap,Xd=s.remapClamp,$d=s.renderGroup,Ve=s.renderOutput,Yd=s.rendererReference,qd=s.replaceDefaultUV,Zd=s.retroreflectivity,Kd=s.rotate,Qd=s.rotateUV,Jd=s.roughness,ep=s.round,tp=s.rtt,ip=s.sRGBTransferEOTF,sp=s.sRGBTransferOETF,np=s.sample,op=s.sampler,rp=s.samplerComparison,ap=s.saturate,lp=s.saturation,cp=s.screenCoordinate,hp=s.screenDPR,dp=s.screenSize,pe=s.screenUV,pp=s.select,up=s.setCurrentStack,mp=s.setName,gp=s.shaderStages,fp=s.shadow,bp=s.shadowPositionWorld,xp=s.shapeCircle,vp=s.sharedUniformGroup,wp=s.sheen,yp=s.sheenRoughness,_p=s.shiftLeft,Cp=s.shiftRight,Tp=s.shininess,kp=s.sign,Ep=s.sin,Sp=s.sinc,Lp=s.sinh,Mp=s.skinning,St=s.smoothstep,Bp=s.smoothstepElement,Pp=s.specularColor,Rp=s.specularColorBlended,Ip=s.specularF90,Ap=s.spherizeUV,Np=s.split,Dp=s.spritesheetUV,zp=s.sqrt,Fp=s.stack,de=s.step,Op=s.stepElement,Vp=s.storage,Wp=s.storageBarrier,Up=s.storageElement,jp=s.storageTexture,Hp=s.storageTexture3D,Gp=s.struct,Xp=s.sub,$p=s.subBuild,Yp=s.subgroupAdd,qp=s.subgroupAll,Zp=s.subgroupAnd,Kp=s.subgroupAny,Qp=s.subgroupBallot,Jp=s.subgroupBroadcast,eu=s.subgroupBroadcastFirst,tu=s.subgroupElect,iu=s.subgroupExclusiveAdd,su=s.subgroupExclusiveMul,nu=s.subgroupInclusiveAdd,ou=s.subgroupInclusiveMul,ru=s.subgroupIndex,au=s.subgroupMax,lu=s.subgroupMin,cu=s.subgroupMul,hu=s.subgroupOr,du=s.subgroupShuffle,pu=s.subgroupShuffleDown,uu=s.subgroupShuffleUp,mu=s.subgroupShuffleXor,gu=s.subgroupSize,fu=s.subgroupXor,bu=s.tan,xu=s.tangentGeometry,vu=s.tangentLocal,wu=s.tangentView,yu=s.tangentViewFrame,_u=s.tangentWorld,Cu=s.tanh,N=s.texture,Tu=s.texture3D,ku=s.texture3DLevel,Eu=s.texture3DLoad,Su=s.textureBarrier,Lu=s.textureBicubic,Mu=s.textureBicubicLevel,Bu=s.textureLevel,Pu=s.textureLoad,We=s.textureSize,Ru=s.textureStore,Iu=s.thickness,Au=s.time,Nu=s.toneMapping,Du=s.toneMappingExposure,zu=s.toonOutlinePass,Fu=s.transformDirection,Ou=s.transformNormal,Vu=s.transformNormalByInverseViewMatrix,Wu=s.transformNormalByViewMatrix,Uu=s.transformNormalToView,ju=s.transformedClearcoatNormalView,Hu=s.transformedNormalView,Gu=s.transformedNormalWorld,Xu=s.transmission,$u=s.transpose,Yu=s.triNoise3D,qu=s.triplanarTexture,Zu=s.triplanarTextures,Ku=s.trunc,Qu=s.uint,Ju=s.uintBitsToFloat,P=s.uniform,Lt=s.uniformArray,em=s.uniformCubeTexture,tm=s.uniformFlow,im=s.uniformGroup,sm=s.uniformTexture,nm=s.unpack4xI8,om=s.unpack4xU8,rm=s.unpackHalf2x16,am=s.unpackNormal,lm=s.unpackRGBToNormal,cm=s.unpackSnorm2x16,hm=s.unpackSnorm4x8,dm=s.unpackUnorm2x16,pm=s.unpackUnorm4x8,um=s.unpremultiplyAlpha,mm=s.userData,Ee=s.uv,gm=s.uvec2,fm=s.uvec3,bm=s.uvec4,xm=s.varying,vm=s.varyingProperty,re=s.vec2,K=s.vec3,F=s.vec4,wm=s.vectorComponents,ym=s.velocity,_m=s.vertexColor,Cm=s.vertexIndex,Tm=s.vertexStage,km=s.vibrance,Em=s.viewZToLogarithmicDepth,Sm=s.viewZToOrthographicDepth,Lm=s.viewZToPerspectiveDepth,Mm=s.viewZToReversedOrthographicDepth,Bm=s.viewZToReversedPerspectiveDepth,Pm=s.viewport,Rm=s.viewportCoordinate,Im=s.viewportDepthTexture,Am=s.viewportLinearDepth,Nm=s.viewportMipTexture,Dm=s.viewportOpaqueMipTexture,zm=s.viewportSafeUV,Fm=s.viewportSharedTexture,Om=s.viewportSize,Vm=s.viewportTexture,Wm=s.viewportUV,Um=s.vogelDiskSample,jm=s.wgsl,Hm=s.wgslFn,Gm=s.workgroupArray,Xm=s.workgroupBarrier,$m=s.workgroupId,Ym=s.workingToColorSpace,qm=s.xor,Ig=Object.freeze(Object.defineProperty({__proto__:null,BRDF_GGX:$i,BRDF_Lambert:Yi,BRDF_Sheen:qi,BasicPointShadowFilter:Zi,BasicShadowFilter:Ki,Break:Qi,Const:Ji,Continue:es,DFGLUT:ts,D_GGX:is,D_GGX_Anisotropic:ss,Discard:ns,EPSILON:os,EnvironmentBRDF:rs,F_Schlick:as,Fn:H,HALF_PI:ls,INFINITY:cs,If:hs,LTC_Evaluate:ds,LTC_Evaluate_Volume:ps,LTC_Uv:us,Loop:Ye,NodeAccess:ms,NodeShaderStage:gs,NodeType:fs,NodeUpdateType:bs,OnAfterObjectUpdate:xs,OnAfterRenderPipeline:vs,OnBeforeFrameUpdate:ws,OnBeforeMaterialUpdate:ys,OnBeforeObjectUpdate:_s,OnBeforeRenderPipeline:Cs,OnFrameUpdate:Ts,OnMaterialUpdate:xt,OnObjectUpdate:ks,PCFShadowFilter:Es,PI:Ss,PI2:Ls,PointShadowFilter:Ms,Return:Bs,Schlick_to_F0:Ps,ShaderNode:Rs,Stack:Is,Switch:As,TBNViewMatrix:Ns,TWO_PI:Ds,VSMShadowFilter:zs,V_GGX_SmithCorrelated:Fs,V_GGX_SmithCorrelated_Anisotropic:Os,Var:Vs,VarIntent:Ws,abs:Us,acesFilmicToneMapping:js,acos:Hs,acosh:Gs,add:vt,addMethodChaining:Xs,addNodeElement:$s,agxToneMapping:Ys,all:qs,alphaT:Zs,ambientOcclusion:Ks,and:Qs,anisotropy:Js,anisotropyB:en,anisotropyT:tn,any:sn,array:ye,asin:nn,asinh:on,assign:rn,atan:an,atanh:ln,atomicAdd:cn,atomicAnd:hn,atomicFunc:dn,atomicLoad:pn,atomicMax:un,atomicMin:mn,atomicOr:gn,atomicStore:fn,atomicSub:bn,atomicXor:xn,attenuationColor:vn,attenuationDistance:wn,attribute:yn,attributeArray:_n,backgroundBlurriness:Cn,backgroundIntensity:Tn,backgroundRotation:kn,batch:En,batchColor:Sn,batchIndirectIndex:Ln,bentNormalView:Mn,billboarding:Bn,bitAnd:Pn,bitNot:Rn,bitOr:In,bitXor:An,bitangentGeometry:Nn,bitangentLocal:Dn,bitangentView:zn,bitangentViewFrame:Fn,bitangentWorld:On,bitcast:Vn,blendBurn:Wn,blendColor:Un,blendDodge:jn,blendOverlay:Hn,blendScreen:Gn,bool:Xn,buffer:$n,bufferAttribute:Yn,builtin:qn,builtinAOContext:Zn,builtinGIContext:Kn,builtinShadowContext:Qn,bumpMap:Jn,bvec2:eo,bvec3:to,bvec4:io,bypass:so,cache:no,call:oo,cameraFar:ro,cameraIndex:ao,cameraNear:lo,cameraNormalMatrix:co,cameraPosition:ho,cameraProjectionMatrix:po,cameraProjectionMatrixInverse:uo,cameraViewMatrix:mo,cameraViewport:go,cameraWorldMatrix:fo,cbrt:bo,cdl:xo,ceil:vo,checker:wo,cineonToneMapping:yo,clamp:_o,clearcoat:Co,clearcoatNormalView:To,clearcoatRoughness:ko,clipSpace:Eo,clipping:So,clippingAlpha:Lo,code:Mo,color:ze,colorSpaceToWorking:Bo,colorToDirection:Po,compute:Ro,computeKernel:Io,computeSkinning:Ao,context:wt,convert:No,convertColorSpace:Do,convertToTexture:zo,cos:Fo,cosh:Oo,countLeadingZeros:Vo,countOneBits:Wo,countTrailingZeros:Uo,cross:jo,cubeTexture:Ho,cubeTextureBase:Go,dFdx:Xo,dFdy:$o,dashSize:Yo,debug:qo,decrement:Zo,decrementBefore:Ko,defaultBuildStages:Qo,defaultShaderStages:Jo,defined:er,degrees:tr,deltaTime:ir,densityFogFactor:sr,depth:nr,depthPass:or,determinant:rr,difference:ar,diffuseColor:lr,diffuseContribution:cr,directPointLight:hr,directionToColor:dr,directionToFaceDirection:pr,dispersion:ur,distance:mr,div:gr,dot:fr,dot4I8Packed:br,dot4U8Packed:xr,drawIndex:vr,dynamicBufferAttribute:wr,element:yr,emissive:_r,equal:Cr,equirectDirection:Tr,equirectUV:kr,exp:yt,exp2:Er,exponentialHeightFogFactor:Sr,expression:Lr,faceDirection:Mr,faceForward:Br,faceforward:Pr,float:Z,floatBitsToInt:Rr,floatBitsToUint:Ir,floor:Ar,fog:Nr,fract:Dr,frameGroup:zr,frameId:Fr,frontFacing:Or,fwidth:Vr,gain:Wr,gapSize:Ur,getConstNodeType:jr,getCurrentStack:Hr,getDistanceAttenuation:Gr,getGeometryRoughness:Xr,getNormalFromDepth:$r,getParallaxCorrectNormal:Yr,getRoughness:qr,getScreenPosition:Zr,getScreenPositionFromClip:Kr,getShIrradianceAt:Qr,getTextureIndex:Jr,getViewPosition:ea,globalId:ta,glsl:ia,glslFn:sa,grayscale:na,greaterThan:oa,greaterThanEqual:ra,hardwareClipping:aa,hash:la,highpModelNormalViewMatrix:ca,highpModelViewMatrix:ha,hue:da,increment:pa,incrementBefore:ua,inspect:ma,instance:ga,instanceColor:fa,instanceIndex:ba,instancedArray:xa,instancedBufferAttribute:va,instancedDynamicBufferAttribute:wa,instancedMesh:ya,int:ue,intBitsToFloat:_a,interleavedGradientNoise:Ca,inverse:Ta,inverseSqrt:ka,inversesqrt:Ea,invocationLocalIndex:Sa,invocationSubgroupIndex:La,ior:Ma,iridescence:Ba,iridescenceIOR:Pa,iridescenceThickness:Ra,isolate:Ia,ivec2:Aa,ivec3:Na,ivec4:Da,js:za,label:Fa,length:Oa,lengthSq:Va,lessThan:Wa,lessThanEqual:Ua,lightPosition:ja,lightProjectionUV:Ha,lightShadowMatrix:Ga,lightTargetDirection:Xa,lightTargetPosition:$a,lightViewPosition:Ya,lightingContext:qa,lights:Za,linearDepth:Ka,linearToneMapping:Qa,localId:Ja,log:el,log2:tl,logarithmicDepthToViewZ:il,luminance:_t,mat2:sl,mat3:nl,mat4:ol,matcapUV:rl,materialAO:al,materialAlphaTest:ll,materialAnisotropy:cl,materialAnisotropyVector:hl,materialAttenuationColor:dl,materialAttenuationDistance:pl,materialClearcoat:ul,materialClearcoatNormal:ml,materialClearcoatRoughness:gl,materialColor:fl,materialDispersion:bl,materialEmissive:xl,materialEnvIntensity:vl,materialEnvRotation:wl,materialIOR:yl,materialIridescence:_l,materialIridescenceIOR:Cl,materialIridescenceThickness:Tl,materialLightMap:kl,materialLineDashOffset:El,materialLineDashSize:Sl,materialLineGapSize:Ll,materialLineScale:Ml,materialLineWidth:Bl,materialMetalness:Pl,materialNormal:Rl,materialOpacity:Il,materialPointSize:Al,materialReference:Nl,materialReflectivity:Dl,materialRefractionRatio:zl,materialRetroreflectivity:Fl,materialRotation:Ol,materialRoughness:Vl,materialSheen:Wl,materialSheenRoughness:Ul,materialShininess:jl,materialSpecular:Hl,materialSpecularColor:Gl,materialSpecularIntensity:Xl,materialSpecularStrength:$l,materialThickness:Yl,materialTransmission:ql,max:Zl,maxMipLevel:Kl,mediumpModelViewMatrix:Ql,metalness:Jl,min:_e,mix:qe,mixElement:ec,mod:tc,modelDirection:ic,modelNormalMatrix:sc,modelPosition:nc,modelRadius:oc,modelScale:rc,modelViewMatrix:ac,modelViewPosition:lc,modelViewProjection:cc,modelWorldMatrix:hc,modelWorldMatrixInverse:dc,morphReference:pc,mrt:uc,mul:Fe,mx_aastep:mc,mx_add:gc,mx_atan2:fc,mx_cell_noise_float:bc,mx_cell_noise_vec3:xc,mx_contrast:vc,mx_divide:wc,mx_fractal_noise_float:yc,mx_fractal_noise_float_2d:_c,mx_fractal_noise_vec2:Cc,mx_fractal_noise_vec3:Tc,mx_fractal_noise_vec4:kc,mx_frame:Ec,mx_heighttonormal:Sc,mx_hsvtorgb:Lc,mx_ifequal:Mc,mx_ifgreater:Bc,mx_ifgreatereq:Pc,mx_invert:Rc,mx_modulo:Ic,mx_multiply:Ac,mx_noise_float:Nc,mx_noise_vec3:Dc,mx_noise_vec4:zc,mx_place2d:Fc,mx_power:Oc,mx_ramp4:Vc,mx_ramplr:Wc,mx_ramptb:Uc,mx_rgbtohsv:jc,mx_rotate2d:Hc,mx_rotate3d:Gc,mx_safepower:Xc,mx_separate:$c,mx_smoothstep:Yc,mx_splitlr:qc,mx_splittb:Zc,mx_srgb_texture_to_lin_rec709:Kc,mx_subtract:Qc,mx_timer:Jc,mx_transform_uv:eh,mx_unifiednoise2d:th,mx_unifiednoise3d:ih,mx_worley_noise_float:sh,mx_worley_noise_float_2d:nh,mx_worley_noise_float_3d:oh,mx_worley_noise_vec2:rh,mx_worley_noise_vec3:ah,mx_worley_noise_vec3_style:lh,negate:ch,negateOnBackSide:hh,neutralToneMapping:dh,nodeArray:ph,nodeImmutable:uh,nodeObject:ke,nodeObjectIntent:mh,nodeObjects:gh,nodeProxy:fh,nodeProxyConstructor:bh,nodeProxyIntent:xh,normalFlat:vh,normalGeometry:wh,normalLocal:yh,normalMap:_h,normalView:Ch,normalViewGeometry:Th,normalWorld:kh,normalWorldGeometry:Eh,normalize:Sh,not:Lh,notEqual:Mh,numWorkgroups:Bh,objectDirection:Ph,objectGroup:Rh,objectPosition:Ih,objectRadius:Ah,objectScale:Nh,objectViewPosition:Dh,objectWorldMatrix:zh,oneMinus:Fh,or:Oh,orthographicDepthToViewZ:Ct,oscSawtooth:Vh,oscSine:Wh,oscSquare:Uh,oscTriangle:jh,output:Hh,outputStruct:Gh,overloadingFn:Xh,overrideNode:$h,overrideNodes:Yh,pack4xI8:qh,pack4xI8Clamp:Zh,pack4xU8:Kh,pack4xU8Clamp:Qh,packHalf2x16:Jh,packNormalToRGB:ed,packSnorm2x16:td,packSnorm4x8:id,packUnorm2x16:sd,packUnorm4x8:nd,parabola:od,parallaxDirection:rd,parallaxUV:ad,parameter:ld,pass:Tt,passTexture:Ze,pcurve:cd,perspectiveDepthToViewZ:kt,pmremTexture:hd,pointShadow:dd,pointUV:pd,pointWidth:ud,positionGeometry:md,positionLocal:gd,positionPrevious:fd,positionView:Et,positionViewDirection:bd,positionWorld:xd,positionWorldDirection:vd,posterize:wd,pow:yd,pow2:_d,pow3:Cd,pow4:Td,premultiplyAlpha:kd,property:Ed,quadBroadcast:Sd,quadSwapDiagonal:Ld,quadSwapX:Md,quadSwapY:Bd,radians:Pd,rand:Rd,range:Id,rangeFogFactor:Ad,reciprocal:Nd,reference:Oe,referenceBuffer:Dd,reflect:zd,reflectVector:Fd,reflectView:Od,reflector:Vd,refract:Wd,refractVector:Ud,refractView:jd,reinhardToneMapping:Hd,remap:Gd,remapClamp:Xd,renderGroup:$d,renderOutput:Ve,rendererReference:Yd,replaceDefaultUV:qd,retroreflectivity:Zd,rotate:Kd,rotateUV:Qd,roughness:Jd,round:ep,rtt:tp,sRGBTransferEOTF:ip,sRGBTransferOETF:sp,sample:np,sampler:op,samplerComparison:rp,saturate:ap,saturation:lp,screenCoordinate:cp,screenDPR:hp,screenSize:dp,screenUV:pe,select:pp,setCurrentStack:up,setName:mp,shaderStages:gp,shadow:fp,shadowPositionWorld:bp,shapeCircle:xp,sharedUniformGroup:vp,sheen:wp,sheenRoughness:yp,shiftLeft:_p,shiftRight:Cp,shininess:Tp,sign:kp,sin:Ep,sinc:Sp,sinh:Lp,skinning:Mp,smoothstep:St,smoothstepElement:Bp,specularColor:Pp,specularColorBlended:Rp,specularF90:Ip,spherizeUV:Ap,split:Np,spritesheetUV:Dp,sqrt:zp,stack:Fp,step:de,stepElement:Op,storage:Vp,storageBarrier:Wp,storageElement:Up,storageTexture:jp,storageTexture3D:Hp,struct:Gp,sub:Xp,subBuild:$p,subgroupAdd:Yp,subgroupAll:qp,subgroupAnd:Zp,subgroupAny:Kp,subgroupBallot:Qp,subgroupBroadcast:Jp,subgroupBroadcastFirst:eu,subgroupElect:tu,subgroupExclusiveAdd:iu,subgroupExclusiveMul:su,subgroupInclusiveAdd:nu,subgroupInclusiveMul:ou,subgroupIndex:ru,subgroupMax:au,subgroupMin:lu,subgroupMul:cu,subgroupOr:hu,subgroupShuffle:du,subgroupShuffleDown:pu,subgroupShuffleUp:uu,subgroupShuffleXor:mu,subgroupSize:gu,subgroupXor:fu,tan:bu,tangentGeometry:xu,tangentLocal:vu,tangentView:wu,tangentViewFrame:yu,tangentWorld:_u,tanh:Cu,texture:N,texture3D:Tu,texture3DLevel:ku,texture3DLoad:Eu,textureBarrier:Su,textureBicubic:Lu,textureBicubicLevel:Mu,textureLevel:Bu,textureLoad:Pu,textureSize:We,textureStore:Ru,thickness:Iu,time:Au,toneMapping:Nu,toneMappingExposure:Du,toonOutlinePass:zu,transformDirection:Fu,transformNormal:Ou,transformNormalByInverseViewMatrix:Vu,transformNormalByViewMatrix:Wu,transformNormalToView:Uu,transformedClearcoatNormalView:ju,transformedNormalView:Hu,transformedNormalWorld:Gu,transmission:Xu,transpose:$u,triNoise3D:Yu,triplanarTexture:qu,triplanarTextures:Zu,trunc:Ku,uint:Qu,uintBitsToFloat:Ju,uniform:P,uniformArray:Lt,uniformCubeTexture:em,uniformFlow:tm,uniformGroup:im,uniformTexture:sm,unpack4xI8:nm,unpack4xU8:om,unpackHalf2x16:rm,unpackNormal:am,unpackRGBToNormal:lm,unpackSnorm2x16:cm,unpackSnorm4x8:hm,unpackUnorm2x16:dm,unpackUnorm4x8:pm,unpremultiplyAlpha:um,userData:mm,uv:Ee,uvec2:gm,uvec3:fm,uvec4:bm,varying:xm,varyingProperty:vm,vec2:re,vec3:K,vec4:F,vectorComponents:wm,velocity:ym,vertexColor:_m,vertexIndex:Cm,vertexStage:Tm,vibrance:km,viewZToLogarithmicDepth:Em,viewZToOrthographicDepth:Sm,viewZToPerspectiveDepth:Lm,viewZToReversedOrthographicDepth:Mm,viewZToReversedPerspectiveDepth:Bm,viewport:Pm,viewportCoordinate:Rm,viewportDepthTexture:Im,viewportLinearDepth:Am,viewportMipTexture:Nm,viewportOpaqueMipTexture:Dm,viewportSafeUV:zm,viewportSharedTexture:Fm,viewportSize:Om,viewportTexture:Vm,viewportUV:Wm,vogelDiskSample:Um,wgsl:jm,wgslFn:Hm,workgroupArray:Gm,workgroupBarrier:Xm,workgroupId:$m,workingToColorSpace:Ym,xor:qm},Symbol.toStringTag,{value:"Module"})),Ag=[{name:"轨道控制器",uuid:"orbit-controls-component",loader:()=>ce(()=>import("./orbit-controls-component-CHnnc7YB.js"),__vite__mapDeps([0,1,2])),fields:[{name:"enabled",label:"启用",type:"boolean",value:!0},{name:"target",label:"目标位置",type:"THREE.Vector3",value:{className:"Vector3",args:[0,0,0]}},{name:"enableDamping",label:"启用阻尼",type:"boolean",value:!1},{name:"dampingFactor",label:"阻尼系数",type:"number",value:.05,min:0,max:1,step:.01,precision:2},{name:"enableZoom",label:"启用缩放",type:"boolean",value:!0},{name:"zoomSpeed",label:"缩放速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"enableRotate",label:"启用旋转",type:"boolean",value:!0},{name:"rotateSpeed",label:"旋转速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"enablePan",label:"启用平移",type:"boolean",value:!0},{name:"panSpeed",label:"平移速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"screenSpacePanning",label:"屏幕空间平移",type:"boolean",value:!0},{name:"minDistance",label:"最小距离",type:"number",value:0,min:0,step:.1,precision:1},{name:"maxDistance",label:"最大距离",type:"number",value:1/0,min:0,step:.1,precision:1},{name:"minPolarAngle",label:"最小极角",type:"number",value:0,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"maxPolarAngle",label:"最大极角",type:"number",value:Math.PI,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"minAzimuthAngle",label:"最小方位角",type:"number",value:-1/0,step:1,precision:2,unit:"degree"},{name:"maxAzimuthAngle",label:"最大方位角",type:"number",value:1/0,step:1,precision:2,unit:"degree"},{name:"autoRotate",label:"自动旋转",type:"boolean",value:!1},{name:"autoRotateSpeed",label:"自动旋转速度",type:"number",value:2,step:.1,precision:1}]},{name:"飞行控制器",uuid:"fly-controls-component",loader:()=>ce(()=>import("./fly-controls-component-CtRkq7uH.js"),__vite__mapDeps([3,1,2,4])),fields:[{name:"movementSpeed",label:"移动速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"rollSpeed",label:"翻滚速度",type:"number",value:.005,min:0,step:.001,precision:3},{name:"dragToLook",label:"拖拽视角",type:"boolean",value:!1},{name:"autoForward",label:"自动前进",type:"boolean",value:!1}]},{name:"第一人称控制器",uuid:"first-person-controls-component",loader:()=>ce(()=>import("./first-person-controls-component-FiSmMy2i.js"),__vite__mapDeps([5,1,2,6])),fields:[{name:"movementSpeed",label:"移动速度",type:"number",value:1,min:0,step:1,precision:1},{name:"lookSpeed",label:"视角速度",type:"number",value:.005,min:0,step:.001,precision:3},{name:"dampingFactor",label:"阻尼系数",type:"number",value:.1,min:0,max:1,step:.01,precision:2},{name:"lookVertical",label:"允许垂直视角",type:"boolean",value:!0},{name:"autoForward",label:"自动前进",type:"boolean",value:!1},{name:"heightSpeed",label:"高度影响速度",type:"boolean",value:!1},{name:"heightCoef",label:"高度系数",type:"number",value:1,min:0,step:.1,precision:1},{name:"heightMin",label:"最小高度",type:"number",value:0,step:.1,precision:1},{name:"heightMax",label:"最大高度",type:"number",value:1,step:.1,precision:1},{name:"constrainVertical",label:"限制垂直角度",type:"boolean",value:!1},{name:"verticalMin",label:"最小垂直角",type:"number",value:0,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"verticalMax",label:"最大垂直角",type:"number",value:0,min:0,max:180,step:1,precision:2,unit:"degree"}]},{name:"地图控制器",uuid:"map-controls-component",loader:()=>ce(()=>import("./map-controls-component-BV5zpRvk.js"),__vite__mapDeps([7,1,2,8])),fields:[{name:"enabled",label:"启用",type:"boolean",value:!0},{name:"target",label:"目标位置",type:"THREE.Vector3",value:{className:"Vector3",args:[0,0,0]}},{name:"enableDamping",label:"启用阻尼",type:"boolean",value:!1},{name:"dampingFactor",label:"阻尼系数",type:"number",value:.05,min:0,max:1,step:.01,precision:2},{name:"enableZoom",label:"启用缩放",type:"boolean",value:!0},{name:"zoomSpeed",label:"缩放速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"enableRotate",label:"启用旋转",type:"boolean",value:!0},{name:"rotateSpeed",label:"旋转速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"enablePan",label:"启用平移",type:"boolean",value:!0},{name:"panSpeed",label:"平移速度",type:"number",value:1,min:0,step:.1,precision:1},{name:"screenSpacePanning",label:"屏幕空间平移",type:"boolean",value:!1},{name:"minDistance",label:"最小距离",type:"number",value:0,min:0,step:.1,precision:1},{name:"maxDistance",label:"最大距离",type:"number",value:1/0,min:0,step:.1,precision:1},{name:"minPolarAngle",label:"最小极角",type:"number",value:0,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"maxPolarAngle",label:"最大极角",type:"number",value:180,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"minAzimuthAngle",label:"最小方位角",type:"number",value:-1/0,step:1,precision:2,unit:"degree"},{name:"maxAzimuthAngle",label:"最大方位角",type:"number",value:1/0,step:1,precision:2,unit:"degree"},{name:"autoRotate",label:"自动旋转",type:"boolean",value:!1},{name:"autoRotateSpeed",label:"自动旋转速度",type:"number",value:2,step:.1,precision:1}]},{name:"指针锁定控制器",uuid:"pointer-lock-controls-component",loader:()=>ce(()=>import("./pointer-lock-controls-component-DVM5f7da.js"),__vite__mapDeps([9,1,2,10])),fields:[{name:"minPolarAngle",label:"最小极角",type:"number",value:0,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"maxPolarAngle",label:"最大极角",type:"number",value:180,min:0,max:180,step:1,precision:2,unit:"degree"},{name:"pointerSpeed",label:"指针速度",type:"number",value:1,min:0,step:.1,precision:1}]}];class Zm{constructor(e,t){T(this,"uuid");T(this,"script");T(this,"name");this.script=e,this.name="script",this.uuid=t}dispose(){this.script=""}}const Se=class Se extends Ut{constructor(){super(...arguments);T(this,"type",$.Script)}static isFileType(t){return this.compatibles.some(i=>i.type===t)}static async loadAsync(t){const i=await jt(t);if(!i)throw new Error(`File with uuid ${t} not found`);if(!this.isFileType(i.type))throw new Error(`Unknown type ${i==null?void 0:i.type}`);let n;switch(i.type){case"js":{const o=await fetch(i.file).then(a=>a.text());n=new Zm(o,t);break}default:throw new Error(`Unkown type ${i.type}`)}return n.name=i.name,new Se(n,t)}dispose(){var t,i;(i=(t=this.source).dispose)==null||i.call(t)}};T(Se,"compatibles",Object.freeze([{type:"js",exts:"js"}]));let Ue=Se;class Ng{constructor(e){T(this,"core");this.core=e}get render(){return this.core.render}get bloomEnable(){return this.core.render.pipeline.outputNode===this.core.render.bloomOutput}set bloomEnable(e){const t=this.core.render;t.pipeline.outputNode=e?t.bloomOutput:t.sceneOutput,t.pipeline.needsUpdate=!0}get bloomStrength(){return this.core.render.bloomPass.strength.value}set bloomStrength(e){this.core.render.bloomPass.strength.value=e}get bloomRadius(){return this.core.render.bloomPass.radius.value}set bloomRadius(e){this.core.render.bloomPass.radius.value=e}get bloomThreshold(){return this.core.render.bloomPass.threshold.value}set bloomThreshold(e){this.core.render.bloomPass.threshold.value=e}}class Dg extends He{constructor(e){super(),this.context=e}async build(e){const t=await this.restoreAssets(e.assets);this.restoreAssetsValues(e.assets,t),this.prewarmAudio(t);const i=this.restoreObjects(e.objects);this.restoreObjectsValues(e.objects,i),this.restoreSceneValues(e.scene),this.restoreConfigValues(e.config)}async restoreAssets(e){const t=e.map(n=>this.restoreAsset(n)),i=await Promise.all(t);return this.emit("loadAssets",i),i}async restoreAsset(e,t){const{type:i,uuid:n,meta:o,children:a}=e;let r;switch(i){case $.Folder:{r=qt.create(void 0,n),this.emit("loadAsset",r);for(const l of a||[])await this.restoreAsset(l,r);break}case $.Material:{r=Yt.create(o.type,n),this.emit("loadAsset",r);break}case $.Geometry:{r=$t.create(o.type,n),this.emit("loadAsset",r);break}case $.Texture:{r=await Xt.loadAsync(n),this.emit("loadAsset",r);break}case $.Model:{r=await Gt.loadAsync(n),this.emit("loadAsset",r);break}case $.Script:{r=await Ue.loadAsync(n),this.emit("loadAsset",r);break}case $.Audio:{r=await et.loadAsync(n),this.emit("loadAsset",r);break}case $.Video:{r=await Ht.loadAsync(n),this.emit("loadAsset",r);break}default:throw new Error(`Unsupported asset type: ${i}`)}return t==null||t.add(r),r}restoreAssetsValues(e,t){for(let i=0;i<t.length;i++){const n=t[i],o=e[i];!n||!o||(this.restoreValues(o.meta,n.source),n.children&&o.children&&this.restoreAssetsValues(o.children,n.children))}}prewarmAudio(e){for(const t of e)t.traverse(i=>{!(i instanceof et)||i.source.loadMode!=="decompressOnLoad"||i.source.getBuffer().catch(n=>{console.warn(`Failed to prewarm audio: ${i.name}`,n)})})}restoreObjects(e){const t=e.map(i=>this.restoreObject(i)).filter(i=>i!==void 0);return this.emit("loadObjects",t),t}restoreObject(e,t){const{uuid:i,type:n,children:o=[]}=e;let a;if(n==="Model"){const r=e,l=this.context.getAsset(r.instance);if(!l){this.emit("error",`Asset with uuid ${r.instance} not found`),console.error(`Asset with uuid ${r.instance} not found`);return}a=l.create(i),this.emit("loadObject",a);for(const c in r.inserts){const h=r.inserts[c],d=Be(a,c);h.forEach(u=>this.restoreObject(u,d))}}else{a=Zt(n,i),this.emit("loadObject",a);for(const r of o)this.restoreObject(r,a)}return t==null||t.add(a),a}restoreObjectsValues(e,t){for(let i=0;i<t.length;i++){const n=t[i],o=e[i];if(o.type==="Model"){const a=o;for(const r in a.inserts){const l=Be(n,r),c=a.inserts[r];for(const h of c){const d=l.getObjectByProperty("uuid",h.uuid);d&&this.restoreObjectsValues([h],[d])}}for(const r in a.overrides){const l=Be(n,r),c=a.overrides[r];this.restoreValues(c,l),this.emit("restoreObject",l,c)}}else this.restoreValues(o,n),this.emit("restoreObject",n,o),n.children&&o.children&&this.restoreObjectsValues(o.children,n.children)}}restoreSceneValues(e){const{scene:t}=this.context;e.fogType==="linear"?t.fog=Kt:e.fogType==="exp2"?t.fog=Qt:t.fog=null,this.restoreValues(e,t),this.emit("restoreScene",e)}restoreConfigValues(e){this.restoreValues(e,this.context.config),this.emit("restoreConfig",e)}restoreValues(e,t){const i=Object.keys(e);for(const n of i){if(!Object.prototype.hasOwnProperty.call(e,n))continue;const o=e[n];if(o!==void 0)if(typeof o=="object"){const a=Object.keys(o)[0];if(a===void 0)continue;switch(a){case"$A":{const r=this.context.getAsset(o[a]);if(!r)throw new Error(`Asset with uuid ${o[a]} not found`);t[n]=r.source;break}case"$O":{const r=this.context.getObject(o[a]);if(!r)throw new Error(`Object with uuid ${o[a]} not found`);t[n]=r;break}case"$V":{t[n].fromArray(o[a]);break}case"$C":{t[n].set(o[a]);break}default:t[n]&&this.restoreValues(o,t[n])}}else t[n]=o}}}const Re=Symbol.for("d3-core.Entity");class O extends He{constructor(t){super();T(this,"object");T(this,"components");T(this,"core");T(this,"_onAdded",()=>{var i;if(!this.object.parent)return;const t=(i=O.extract(this.object.parent))==null?void 0:i.core;t&&this.object.traverse(n=>{var o;return(o=O.extract(n))==null?void 0:o.attach(t)})});T(this,"_onRemoved",()=>{this.object.traverse(t=>{var i;return(i=O.extract(t))==null?void 0:i.detach()})});this.object=t,this.components=[],this.object.addEventListener("added",this._onAdded),this.object.addEventListener("removed",this._onRemoved)}addComponent(t){return this.components.push(t),this.core&&t.attach(this.core),this.emit(tt.ComponentAdd,t),t}removeComponent(t){const i=this.components.indexOf(t);i!==-1&&(t._destroy(),this.components.splice(i,1),this.emit(tt.ComponentRemove,t))}getComponent(t){return this.components.find(i=>i.constructor.name===t)}findComponent(t){return this.components.find(t)}destroy(){this.components.forEach(t=>t._destroy()),this.components.length=0,this.core=void 0,this.object.removeEventListener("added",this._onAdded),this.object.removeEventListener("removed",this._onRemoved),this.removeAllListeners()}attach(t){if(this.core){console.warn("Entity is already attached to a core.");return}this.core=t,this.components.forEach(i=>i.attach(t))}detach(){this.core&&(this.components.forEach(t=>t.detach()),this.core=void 0)}static from(t){let i=O.extract(t);return i||(i=new O(t),Object.defineProperty(t,Re,{value:i,enumerable:!1,configurable:!0})),i}static extract(t){return t[Re]}static destroy(t){t.traverse(i=>{const n=O.extract(i);n&&(n.destroy(),delete i[Re])})}}function zg(p,e){return O.from(p).addComponent(e)}function Fg(p,e){var t;(t=O.extract(p))==null||t.removeComponent(e)}function Og(p,e){var t;return(t=O.extract(p))==null?void 0:t.getComponent(e)}function Vg(p,e){var t;return(t=O.extract(p))==null?void 0:t.findComponent(e)}const U=new Ce,Km=new E,Qm=new E(1,0),Jm=new E(0,1);let Ie;const eg=H(({input:p,threshold:e,smoothWidth:t})=>{const i=_t(p.rgb),n=St(e,e.add(t),i);return qe(F(0),p,n)});class tg extends ut{static get type(){return"BloomNode"}constructor(e,t=1,i=0,n=0){super("vec4"),this.inputNode=e,this.strength=t.isNode?t:P(t),this.radius=i.isNode?i:P(i),this.threshold=n.isNode?n:P(n),this.smoothWidth=P(.01),this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this._resolutionScale=.5,this.highPassFn=eg,this._renderTargetsHorizontal=[],this._renderTargetsVertical=[],this._nMips=5,this._renderTargetBright=new j(1,1,{depthBuffer:!1,type:ve}),this._renderTargetBright.texture.name="UnrealBloomPass.bright",this._renderTargetBright.texture.generateMipmaps=!1;for(let o=0;o<this._nMips;o++){const a=new j(1,1,{depthBuffer:!1,type:ve});a.texture.name="UnrealBloomPass.h"+o,a.texture.generateMipmaps=!1,this._renderTargetsHorizontal.push(a);const r=new j(1,1,{depthBuffer:!1,type:ve});r.texture.name="UnrealBloomPass.v"+o,r.texture.generateMipmaps=!1,this._renderTargetsVertical.push(r)}this._compositeMaterial=null,this._highPassFilterMaterial=null,this._separableBlurMaterials=[],this._textureNodeBright=N(this._renderTargetBright.texture),this._textureNodeBlur0=N(this._renderTargetsVertical[0].texture),this._textureNodeBlur1=N(this._renderTargetsVertical[1].texture),this._textureNodeBlur2=N(this._renderTargetsVertical[2].texture),this._textureNodeBlur3=N(this._renderTargetsVertical[3].texture),this._textureNodeBlur4=N(this._renderTargetsVertical[4].texture),this._textureOutput=Ze(this,this._renderTargetsHorizontal[0].texture),this.updateBeforeType=mt.FRAME}getTextureNode(){return this._textureOutput}setResolutionScale(e){return this._resolutionScale=e,this}getResolutionScale(){return this._resolutionScale}setSize(e,t){let i=Math.floor(e*this._resolutionScale),n=Math.floor(t*this._resolutionScale);this._renderTargetBright.setSize(i,n);for(let o=0;o<this._nMips;o++)this._renderTargetsHorizontal[o].setSize(i,n),this._renderTargetsVertical[o].setSize(i,n),this._separableBlurMaterials[o].invSize.value.set(1/i,1/n),i=Math.floor(i/2),n=Math.floor(n/2)}updateBefore(e){const{renderer:t}=e;Ie=W.resetRendererState(t,Ie);const i=t.getDrawingBufferSize(Km);this.setSize(i.width,i.height),t.setRenderTarget(this._renderTargetBright),U.material=this._highPassFilterMaterial,U.name="Bloom [ High Pass ]",U.render(t);let n=this._renderTargetBright;for(let o=0;o<this._nMips;o++)U.material=this._separableBlurMaterials[o],this._separableBlurMaterials[o].colorTexture.value=n.texture,this._separableBlurMaterials[o].direction.value=Qm,t.setRenderTarget(this._renderTargetsHorizontal[o]),U.name=`Bloom [ Blur Horizontal - ${o} ]`,U.render(t),this._separableBlurMaterials[o].colorTexture.value=this._renderTargetsHorizontal[o].texture,this._separableBlurMaterials[o].direction.value=Jm,t.setRenderTarget(this._renderTargetsVertical[o]),U.name=`Bloom [ Blur Vertical - ${o} ]`,U.render(t),n=this._renderTargetsVertical[o];t.setRenderTarget(this._renderTargetsHorizontal[0]),U.material=this._compositeMaterial,U.name="Bloom [ Composite ]",U.render(t),W.restoreRendererState(t,Ie)}setup(e){const t=wt(e.getSharedContext());this._highPassFilterMaterial=this._highPassFilterMaterial||new V,this._highPassFilterMaterial.contextNode=t,this._highPassFilterMaterial.fragmentNode=this.highPassFn({input:this.inputNode,threshold:this.threshold,smoothWidth:this.smoothWidth}),this._highPassFilterMaterial.name="Bloom_highPass",this._highPassFilterMaterial.needsUpdate=!0;const i=[6,10,14,18,22];for(let r=0;r<this._nMips;r++)this._separableBlurMaterials.push(this._getSeparableBlurMaterial(t,i[r]));const n=ye([1,.8,.6,.4,.2]),o=Lt(this.bloomTintColors),a=H(()=>{const r=he(n.element(0),this.radius).mul(F(o.element(0),1)).mul(this._textureNodeBlur0),l=he(n.element(1),this.radius).mul(F(o.element(1),1)).mul(this._textureNodeBlur1),c=he(n.element(2),this.radius).mul(F(o.element(2),1)).mul(this._textureNodeBlur2),h=he(n.element(3),this.radius).mul(F(o.element(3),1)).mul(this._textureNodeBlur3),d=he(n.element(4),this.radius).mul(F(o.element(4),1)).mul(this._textureNodeBlur4);return r.add(l).add(c).add(h).add(d).mul(this.strength)});return this._compositeMaterial=this._compositeMaterial||new V,this._compositeMaterial.contextNode=t,this._compositeMaterial.fragmentNode=a(),this._compositeMaterial.name="Bloom_comp",this._compositeMaterial.needsUpdate=!0,this._textureOutput}dispose(){super.dispose();for(let e=0;e<this._renderTargetsHorizontal.length;e++)this._renderTargetsHorizontal[e].dispose();for(let e=0;e<this._renderTargetsVertical.length;e++)this._renderTargetsVertical[e].dispose();this._renderTargetBright.dispose(),this._highPassFilterMaterial!==null&&this._highPassFilterMaterial.dispose(),this._compositeMaterial!==null&&this._compositeMaterial.dispose();for(let e=0;e<this._separableBlurMaterials.length;e++)this._separableBlurMaterials[e].dispose()}_getSeparableBlurMaterial(e,t){const i=[],n=t/3;for(let b=0;b<t;b++)i.push(.39894*Math.exp(-.5*b*b/(n*n))/n);const o=i[0],a=[],r=[];for(let b=1;b<t;b+=2){const y=i[b],S=b+1<t?i[b+1]:0,k=y+S;a.push((b*y+(b+1)*S)/k),r.push(k)}const l=N(null),c=ye(a),h=ye(r),d=P(new E),u=P(new E(.5,.5)),m=Ee(),g=b=>l.sample(b),f=H(()=>{const b=g(m).rgb.mul(o).toVar();return Ye({start:ue(0),end:ue(a.length),type:"int",condition:"<"},({i:y})=>{const S=h.element(y),k=u.mul(d).mul(c.element(y)),R=g(m.add(k)).rgb,L=g(m.sub(k)).rgb;b.addAssign(vt(R,L).mul(S))}),F(b,1)}),x=new V;return x.contextNode=e,x.fragmentNode=f(),x.name="Bloom_separable",x.needsUpdate=!0,x.colorTexture=l,x.direction=u,x.invSize=d,x}}const he=H(({factor:p,radius:e})=>{const t=Z(1.2).sub(p);return qe(p,t,e)},{factor:"float",radius:"float",return:"float"}),ig=(p,e,t,i)=>new tg(ke(p),e,t,i);class Mt{constructor(e,t){this.uid=e,this.cid=e.match(/^(.*):f(\d+)$/)[1],this.name=t,this.timestamp=0,this.cpu=0,this.gpu=0,this.fps=0,this.children=[],this.parent=null}}class sg extends Mt{constructor(e,t,i,n){let o=t.name;o===""&&(t.isScene?o="Scene":t.isQuadMesh&&(o="QuadMesh")),super(e,o),this.scene=t,this.camera=i,this.renderTarget=n,this.isRenderStats=!0}}class ng extends Mt{constructor(e,t){const i=t.name||(t.isComputeNode?"Compute":"Compute Group");super(e,i),this.computeNode=t,this.isComputeStats=!0}}class og extends Jt{constructor(){super(),this.currentFrame=null,this.currentContext=null,this.currentRender=null,this.currentCompute=null,this.currentNodes=null,this.lastFrame=null,this.frames=[],this.framesLib={},this.maxFrames=512,this._lastFinishTime=0,this._resolveTimestampPromise=null,this._rAFId=null,this.overdraw=!1,this._overdrawMaterial=null,this.isRendererInspector=!0}getParent(){return this.currentContext||this.getFrame()}begin(){super.begin(),this.currentFrame=this._createFrame(),this.currentContext=this.currentFrame,this.currentRender=null,this.currentCompute=null,this.currentNodes=[]}finish(){super.finish();const e=performance.now(),t=this.currentFrame;t.finishTime=e,t.deltaTime=e-(this._lastFinishTime>0?this._lastFinishTime:e),this.addFrame(t),this.fps=this._getFPS(),this.lastFrame=t,this.currentFrame=null,this.currentContext=null,this.currentRender=null,this.currentCompute=null,this.currentNodes=null,this._lastFinishTime=e,this.overdraw===!0&&this._renderOverdraw()}_renderOverdraw(){const e=this.getPrimaryPass();if(e===null)return;const t=this.getRenderer();this._overdrawMaterial===null&&(this._overdrawMaterial=new ei({colorNode:K(.25),blending:ti,depthTest:!0,depthWrite:!0}));const{scene:i,camera:n}=e,o=W.resetRendererAndSceneState(t,i);t.toneMapping=ne,t.outputColorSpace=De,i.overrideMaterial=this._overdrawMaterial,t.render(i,n),W.restoreRendererAndSceneState(t,i,o)}_getFPS(){let e=0,t=0;for(let i=this.frames.length-1;i>=0;i--){const n=this.frames[i];if(e++,t+=n.deltaTime,t>=1e3)break}return e*1e3/t}_createFrame(){return{frameId:this.nodeFrame.frameId,resolvedCompute:!1,resolvedRender:!1,deltaTime:0,startTime:performance.now(),finishTime:0,miscellaneous:0,children:[],renders:[],computes:[]}}getPrimaryPass(){const e=this.getFrame();let t=null;for(const i of e.renders)if(i.scene.isScene===!0){t=i;break}return t}getFrame(){return this.currentFrame||this.lastFrame}getFrameById(e){return this.framesLib[e]||null}updateTabs(){}resolveFrame(){}async resolveTimestamp(){return this._resolveTimestampPromise!==null?this._resolveTimestampPromise:(this._resolveTimestampPromise=new Promise(e=>{this._rAFId=requestAnimationFrame(async()=>{this._rAFId=null;const t=this.getRenderer();if(t===null){this._resolveTimestampPromise=null,e();return}if(t.backend.hasTimestamp){if(await t.resolveTimestampsAsync(fe.COMPUTE),await t.resolveTimestampsAsync(fe.RENDER),t!==this.getRenderer()){this._resolveTimestampPromise=null,e();return}const i=t.backend.getTimestampFrames(fe.COMPUTE),n=t.backend.getTimestampFrames(fe.RENDER),o=[...new Set([...i,...n])];for(const a of o){const r=this.getFrameById(a);if(r!==null){if(r.resolvedCompute===!1)if(r.computes.length>0){if(i.includes(a)){for(const l of r.computes)t.backend.hasTimestampQuery(l.uid)?l.gpu=t.backend.getTimestamp(l.uid):(l.gpu=0,l.gpuNotAvailable=!0);r.resolvedCompute=!0}}else r.resolvedCompute=!0;if(r.resolvedRender===!1)if(r.renders.length>0){if(n.includes(a)){for(const l of r.renders)t.backend.hasTimestampQuery(l.uid)?l.gpu=t.backend.getTimestamp(l.uid):(l.gpu=0,l.gpuNotAvailable=!0);r.resolvedRender=!0}}else r.resolvedRender=!0;r.resolvedCompute===!0&&r.resolvedRender===!0&&this.resolveFrame(r)}}}else for(const i of this.frames)if(!(i.resolvedCompute===!0&&i.resolvedRender===!0||this.getFrameById(i.frameId-1)===null)){if(i.resolvedCompute===!1){for(const o of i.computes)o.gpu=0,o.gpuNotAvailable=!0;i.resolvedCompute=!0}if(i.resolvedRender===!1){for(const o of i.renders)o.gpu=0,o.gpuNotAvailable=!0;i.resolvedRender=!0}i.resolvedCompute===!0&&i.resolvedRender===!0&&this.resolveFrame(i)}this._resolveTimestampPromise=null,e()})}),this._resolveTimestampPromise)}get isAvailable(){return this.getRenderer()!==null}addFrame(e){if(this.frames.length>=this.maxFrames){const t=this.frames.shift();delete this.framesLib[t.frameId]}this.frames.push(e),this.framesLib[e.frameId]=e,this.isAvailable&&(this.updateTabs(),this.resolveTimestamp())}inspect(e){if(this.enabled===!1)return;const t=this.currentNodes;t!==null?t.push(e):ii('RendererInspector: Unable to inspect node outside of frame scope. Use "renderer.setAnimationLoop()".')}beginCompute(e,t){const i=this.getFrame();if(!i)return;const n=new ng(e,t);n.timestamp=performance.now(),n.parent=this.getParent(),i.computes.push(n),n.parent.children.push(n),this.currentCompute=n,this.currentContext=n}finishCompute(){if(!this.getFrame())return;const t=this.currentCompute;t.cpu=performance.now()-t.timestamp,this.currentContext=t.parent,this.currentCompute=t.parent&&t.parent.isComputeStats?t.parent:null}beginRender(e,t,i,n){const o=this.getFrame();if(!o)return;const a=new sg(e,t,i,n);a.timestamp=performance.now(),a.parent=this.getParent(),o.renders.push(a),a.parent.children.push(a),this.currentRender=a,this.currentContext=a}finishRender(){if(!this.getFrame())return;const t=this.currentRender;t.cpu=performance.now()-t.timestamp,this.currentContext=t.parent,this.currentRender=t.parent&&t.parent.isRenderStats?t.parent:null}dispose(){this._rAFId!==null&&(cancelAnimationFrame(this._rAFId),this._rAFId=null),this._resolveTimestampPromise=null,this._overdrawMaterial!==null&&(this._overdrawMaterial.dispose(),this._overdrawMaterial=null),super.dispose()}}class rg{static init(e,t=null){const i=`
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

		.mini-panel-content .list-container.parameters .list-item-row,
		.mini-panel-content .list-container.parameters .list-header {
			grid-template-columns: minmax(0, .5fr) minmax(0, 1fr) !important;
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

	@media screen and (max-width: 340px) {

		.mini-panel-content .list-item-cell:first-child {
			display: flex;
			align-items: center;
			min-width: 0;
			overflow: hidden;
			width: 100%;
		}

		.mini-panel-content .list-item-cell:first-child .value {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			flex: 1 1 0%;
			min-width: 0;
		}

		.mini-panel-content .list-item-cell:first-child .info-icon {
			flex-shrink: 0;
		}

	}

	.mini-panel-content .custom-checkbox .checkmark {
		width: 12px;
		height: 12px;
		margin-bottom: 2px;
		will-change: transform;
	}

	.mini-panel-content .list-container.parameters .list-item-row:not(.collapsible) {
		margin-bottom: 2px;
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

	.split-screen-line::after {
		content: '';
		position: absolute;
		top: -1px;
		bottom: -1px;
		left: -5px;
		width: 11px;
		pointer-events: none;
		background-image:
			url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M-0.5 -1 L5.5 7 L11.5 -1 Z' fill='rgba(30,30,36,0.85)' stroke='%234a4a5a' stroke-width='1' stroke-linejoin='round'/%3E%3C/svg%3E"),
			url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M-0.5 8 L5.5 0 L11.5 8 Z' fill='rgba(30,30,36,0.85)' stroke='%234a4a5a' stroke-width='1' stroke-linejoin='round'/%3E%3C/svg%3E");
		background-position: top center, bottom center;
		background-repeat: no-repeat;
		opacity: 1;
		transition: opacity 0.15s ease-out;
	}

	.split-screen-line:hover::after,
	.split-screen-line:active::after,
	.split-screen-line.active::after {
		opacity: 1;
		background-image:
			url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M-0.5 -1 L5.5 7 L11.5 -1 Z' fill='%2300aaff' stroke='%2300aaff' stroke-width='1' stroke-linejoin='round'/%3E%3C/svg%3E"),
			url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M-0.5 8 L5.5 0 L11.5 8 Z' fill='%2300aaff' stroke='%2300aaff' stroke-width='1' stroke-linejoin='round'/%3E%3C/svg%3E");
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
`,n=document.createElement("style");t&&(n.nonce=t),n.textContent=i,e.appendChild(n)}}class Le{constructor(e=512){this.maxPoints=e,this.lines={},this.limit=0,this.limitIndex=0,this.domElement=document.createElement("canvas"),this.domElement.setAttribute("class","graph-canvas"),this.ctx=this.domElement.getContext("2d"),this.width=0,this.height=0,this.devicePixelRatio=window.devicePixelRatio||1}resize(e,t){this.width=e,this.height=t,this.devicePixelRatio=window.devicePixelRatio||1,this.domElement.width=e*this.devicePixelRatio,this.domElement.height=t*this.devicePixelRatio,this.draw()}addLine(e,t){this.lines[e]={color:t,resolved:null,points:[]}}addPoint(e,t){const i=this.lines[e];i&&(i.points.push(t),i.points.length>this.maxPoints&&i.points.shift(),t>this.limit&&(this.limit=t,this.limitIndex=0))}resetLimit(){this.limit=0,this.limitIndex=0}update(){const e=this.domElement.clientWidth,t=this.domElement.clientHeight;e===0||t===0||(e!==this.width||t!==this.height?this.resize(e,t):this.draw(),this.limitIndex++>this.maxPoints&&this.resetLimit())}draw(){const e=this.ctx,t=this.devicePixelRatio,i=this.width,n=this.height;if(e.clearRect(0,0,i*t,n*t),i===0||n===0)return;e.save(),e.scale(t,t);const o=i/(this.maxPoints-1);for(const a in this.lines){const r=this.lines[a];if(r.points.length===0)continue;r.resolved||(r.resolved=this._resolveColor(r.color));const l=r.resolved,c=l?l.color:"#ffffff",h=i-(r.points.length-1)*o;let d=c;if(n>0){const u=e.createLinearGradient(0,0,0,n);u.addColorStop(0,c),u.addColorStop(1,l&&l.transparent||"rgba(0,0,0,0)"),d=u}e.fillStyle=d,e.globalAlpha=.4,e.beginPath(),e.moveTo(h,n);for(let u=0;u<r.points.length;u++){const m=h+u*o,g=this.limit===0?n:n-r.points[u]/this.limit*n;e.lineTo(m,g)}e.lineTo(h+(r.points.length-1)*o,n),e.closePath(),e.fill(),e.strokeStyle=c,e.lineWidth=2,e.globalAlpha=1,e.beginPath();for(let u=0;u<r.points.length;u++){const m=h+u*o,g=this.limit===0?n:n-r.points[u]/this.limit*n;u===0?e.moveTo(m,g):e.lineTo(m,g)}e.stroke()}e.restore()}_resolveColor(e){let t=e;if(e.startsWith("var(")){const n=e.slice(4,-1).trim();if(t=getComputedStyle(this.domElement).getPropertyValue(n).trim(),!t)return null}let i="rgba(0,0,0,0)";if(t.startsWith("#"))i=t.substring(0,7)+"00";else if(t.startsWith("rgb")){const n=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)$/);n&&(i=`rgba(${n[1]}, ${n[2]}, ${n[3]}, 0)`)}return{color:t,transparent:i}}dispose(){}}class ag extends Ge{constructor(e,t={}){super(),this.inspector=e,this.nonce=t.nonce??(e==null?void 0:e.nonce)??null,this.tabs={},this.activeTabId=null,this.isResizing=!1,this.lastHeightBottom=350,this.lastWidthRight=450,this.position="bottom",this.detachedWindows=[],this.maxZIndex=1002,this.nextTabOriginalIndex=0,this.horizontalAlign="right",this.verticalAlign="top",this.setupShell(),this.setupResizing(),rg.init(this.domElement,this.nonce),this.updateWidgetPosition(),this.setupWindowResizeListener(),this.setupOrientationListener(),this.checkHeaderScroll(),this.panel.addEventListener("transitionend",i=>{i.target===this.panel&&(i.propertyName==="width"||i.propertyName==="height"||i.propertyName==="transform")&&this.checkHeaderScroll()})}getSize(){return this.panel.classList.contains("visible")===!1||this.panel.classList.contains("no-tabs")?{width:0,height:0}:this.position==="right"?{width:this.panel.offsetWidth,height:0}:{width:0,height:this.panel.offsetHeight}}get isMobile(){return this.detectMobile()}get isSmallScreen(){return window.innerWidth<=768}detectMobile(){const e=navigator.userAgent||navigator.vendor||window.opera,t=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e),i="ontouchstart"in window||navigator.maxTouchPoints>0;return t||i&&this.isSmallScreen}setupOrientationListener(){const e=()=>{if(!this.isMobile)return;const i=window.innerWidth>window.innerHeight?"right":"bottom";this.position!==i&&this.setPosition(i)};e(),window.addEventListener("orientationchange",e),window.addEventListener("resize",e)}setupWindowResizeListener(){const e=()=>{this.detachedWindows.forEach(i=>{this.constrainWindowToBounds(i.panel)})},t=()=>{if(this.panel.classList.contains("maximized"))return;const i=window.innerWidth,n=window.innerHeight;if(this.position==="bottom"){const o=this.panel.offsetHeight,a=n-50;o>a&&(this.panel.style.height=`${a}px`,this.lastHeightBottom=a)}else if(this.position==="right"){const o=this.panel.offsetWidth,a=i-50;o>a&&(this.panel.style.width=`${a}px`,this.lastWidthRight=a)}};window.addEventListener("resize",()=>{this.isSmallScreen?(this.floatingBtn.style.display="none",this.panel.classList.add("hide-position-toggle")):(this.floatingBtn.style.display="",this.panel.classList.remove("hide-position-toggle")),this.isMobile?this.panel.classList.add("is-mobile"):this.panel.classList.remove("is-mobile"),e(),t(),this.checkHeaderScroll(),this.notifyLayoutChange()})}constrainWindowToBounds(e){const t=window.innerWidth,i=window.innerHeight,n=e.offsetWidth,o=e.offsetHeight;let a=parseFloat(e.style.left)||e.offsetLeft||0,r=parseFloat(e.style.top)||e.offsetTop||0;const l=n/2,c=o/2;a+n>t+l&&(a=t+l-n),a<-l&&(a=-l),r+o>i+c&&(r=i+c-o),r<-c&&(r=-c),e.style.left=`${a}px`,e.style.top=`${r}px`}setupShell(){this.domElement=document.createElement("div"),this.domElement.classList.add("three-inspector"),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.toggleButton=document.createElement("button"),this.toggleButton.classList.add("profiler-toggle"),this.toggleButton.innerHTML=`
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
`,this.toggleButton.onclick=()=>this.togglePanel();const e=this.toggleButton.querySelector(".console-badge.error");e.style.display="none";const t=this.toggleButton.querySelector(".console-badge.warn");t.style.display="none",this.builtinTabsContainer=this.toggleButton.querySelector(".builtin-tabs-container"),this.miniPanel=document.createElement("div"),this.miniPanel.classList.add("profiler-mini-panel"),this.miniPanel.className="profiler-mini-panel",this.panel=document.createElement("div"),this.panel.classList.add("profiler-panel");const i=document.createElement("div");i.className="profiler-header",i.addEventListener("wheel",r=>{r.deltaY!==0&&(r.preventDefault(),i.scrollLeft+=r.deltaY*.25)},{passive:!1}),this.tabsContainer=document.createElement("div"),this.tabsContainer.className="profiler-tabs";const n=document.createElement("div");n.className="profiler-controls",this.floatingBtn=document.createElement("button"),this.floatingBtn.classList.add("floating-btn"),this.floatingBtn.title="Switch to Right Side",this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line></svg>',this.floatingBtn.onclick=()=>this.togglePosition(),this.isSmallScreen&&(this.floatingBtn.style.display="none",this.panel.classList.add("hide-position-toggle")),this.isMobile&&this.panel.classList.add("is-mobile"),this.maximizeBtn=document.createElement("button"),this.maximizeBtn.classList.add("maximize-btn"),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',this.maximizeBtn.onclick=()=>this.toggleMaximize();const o=document.createElement("button");o.classList.add("hide-panel-btn"),o.textContent="-",o.onclick=()=>this.togglePanel(),n.append(this.floatingBtn,this.maximizeBtn,o),i.append(this.tabsContainer,n),this.contentWrapper=document.createElement("div"),this.contentWrapper.className="profiler-content-wrapper";const a=document.createElement("div");a.className="panel-resizer",this.panel.append(a,i,this.contentWrapper),this.domElement.append(this.toggleButton,this.miniPanel,this.panel),this.panel.classList.add(`position-${this.position}`),this.position==="right"&&(this.toggleButton.classList.add("position-right"),this.miniPanel.classList.add("position-right")),this.toggleGraph=new Le(80),this.toggleGraph.addLine("fps","#4c4c6bff"),this.toggleGraph.domElement.className="profiler-toggle-graph",this.toggleButton.appendChild(this.toggleGraph.domElement)}setupResizing(){const e=this.panel.querySelector(".panel-resizer"),t=i=>{this.isResizing=!0,this.panel.classList.add("resizing"),e.setPointerCapture(i.pointerId);const n=i.clientX,o=i.clientY,a=this.panel.offsetHeight,r=this.panel.offsetWidth,l=h=>{if(!this.isResizing)return;h.preventDefault();const d=h.clientX,u=h.clientY;if(this.position==="bottom"){const m=a-(u-o);m>100&&m<window.innerHeight-50&&(this.panel.style.height=`${m}px`)}else if(this.position==="right"){const m=r-(d-n);m>200&&m<window.innerWidth-50&&(this.panel.style.width=`${m}px`)}this.dispatchEvent({type:"resize"}),this.checkHeaderScroll()},c=()=>{this.isResizing=!1,this.panel.classList.remove("resizing"),e.removeEventListener("pointermove",l),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c),this.panel.classList.contains("maximized")||(this.position==="bottom"?this.lastHeightBottom=this.panel.offsetHeight:this.position==="right"&&(this.lastWidthRight=this.panel.offsetWidth),this.saveLayout())};e.addEventListener("pointermove",l),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)};e.addEventListener("pointerdown",t)}toggleMaximize(){this.panel.classList.contains("maximized")?(this.panel.classList.remove("maximized"),this.domElement.classList.remove("maximized"),this.position==="bottom"?(this.panel.style.height=`${this.lastHeightBottom}px`,this.panel.style.width="100%"):this.position==="right"&&(this.panel.style.height="100%",this.panel.style.width=`${this.lastWidthRight}px`),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'):(this.position==="bottom"?this.lastHeightBottom=this.panel.offsetHeight:this.position==="right"&&(this.lastWidthRight=this.panel.offsetWidth),this.panel.classList.add("maximized"),this.domElement.classList.add("maximized"),this.position==="bottom"?(this.panel.style.height="100%",this.panel.style.width="100%"):this.position==="right"&&(this.panel.style.height="100%",this.panel.style.width="100%"),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>'),this.updateWidgetPosition(),this.dispatchEvent({type:"resize"})}hide(){this.miniPanel.classList.remove("visible"),this.miniPanel.querySelectorAll(".mini-panel-content").forEach(e=>{e.style.display="none"}),this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn").forEach(e=>{e.classList.remove("active")})}show(e){if(this.hide(),e.builtinButton.classList.add("active"),!e.miniContent.firstChild)for(;e.content.firstChild;)e.miniContent.appendChild(e.content.firstChild);e.miniContent.style.display="block",this.miniPanel.classList.add("visible")}addTab(e){this.tabs[e.id]=e,e.originalIndex=this.nextTabOriginalIndex++,e.allowDetach===!1&&e.button.classList.add("no-detach"),e.onVisibilityChange=()=>this.updatePanelSize(),this.setupTabDragAndDrop(e),e.builtin||this.tabsContainer.appendChild(e.button),this.contentWrapper.appendChild(e.content),e.isVisible||(e.button.style.display="none",e.content.style.display="none"),e.builtin&&this.addBuiltinTab(e),e.profiler=this,this.updatePanelSize(),this.activeTabId&&e.id===this.activeTabId&&this.setActiveTab(e.id)}addBuiltinTab(e){const t=document.createElement("button");t.className="builtin-tab-btn",e.icon?t.innerHTML=e.icon:t.textContent=e.button.textContent.charAt(0).toUpperCase(),t.title=e.button.textContent;const i=document.createElement("div");i.className="mini-panel-content",i.style.display="none",e.builtinButton=t,e.miniContent=i,this.miniPanel.appendChild(i),t.onclick=n=>{n.stopPropagation(),i.style.display!=="none"&&i.children.length>0?this.hide():this.show(e)},this.builtinTabsContainer.appendChild(t),e.builtinButton=t,e.miniContent=i,e.isVisible||(t.style.display="none",i.style.display="none",Array.from(this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(o=>o.style.display!=="none")||(this.builtinTabsContainer.style.display="none"))}removeTab(e){if(!(!e||this.tabs[e.id]===void 0)){if(delete this.tabs[e.id],e.isDetached&&e.detachedWindow){e.detachedWindow.panel&&e.detachedWindow.panel.parentNode&&e.detachedWindow.panel.parentNode.removeChild(e.detachedWindow.panel);const t=this.detachedWindows.indexOf(e.detachedWindow);t!==-1&&this.detachedWindows.splice(t,1)}if(e.builtin?(e.builtinButton&&e.builtinButton.parentNode&&e.builtinButton.parentNode.removeChild(e.builtinButton),e.miniContent&&e.miniContent.parentNode&&e.miniContent.parentNode.removeChild(e.miniContent),Array.from(this.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(i=>i.style.display!=="none")||(this.builtinTabsContainer.style.display="none")):e.button&&e.button.parentNode&&e.button.parentNode.removeChild(e.button),e.content&&e.content.parentNode&&e.content.parentNode.removeChild(e.content),this.activeTabId===e.id){this.activeTabId=null;const t=Object.values(this.tabs).filter(i=>!i.isDetached&&i.isVisible);t.length>0?this.setActiveTab(t[0].id):this.updatePanelSize()}else this.updatePanelSize();e.onVisibilityChange=null,e.profiler=null}}updatePanelSize(){if(!Object.values(this.tabs).some(t=>!t.isDetached&&t.isVisible))this.panel.classList.add("no-tabs"),this.panel.classList.contains("maximized")&&(this.panel.classList.remove("maximized"),this.domElement.classList.remove("maximized"),this.maximizeBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'),this.position==="bottom"?this.panel.style.height="32px":this.position==="right"&&(this.panel.style.width="45px");else if(this.panel.classList.remove("no-tabs"),Object.keys(this.tabs).length>0)if(this.position==="bottom"){const t=parseInt(this.panel.style.height);(t===32||t===38)&&(this.panel.style.height=`${this.lastHeightBottom}px`)}else this.position==="right"&&parseInt(this.panel.style.width)===45&&(this.panel.style.width=`${this.lastWidthRight}px`);this.dispatchEvent({type:"resize"}),this.checkHeaderScroll()}checkHeaderScroll(){const e=this.panel.querySelector(".profiler-header");e&&(e.scrollWidth>e.clientWidth+1?this.panel.classList.add("has-horizontal-scroll"):this.panel.classList.remove("has-horizontal-scroll"))}setupTabDragAndDrop(e){if(e.button.addEventListener("click",()=>{t||this.setActiveTab(e.id)}),e.allowDetach===!1){e.button.style.cursor="default";return}let t=!1,i,n,o=!1,a=null;const r=10,l=d=>{i=d.clientX,n=d.clientY,t=!1,o=!1,e.button.setPointerCapture(d.pointerId)},c=d=>{const u=d.clientX,m=d.clientY,g=Math.abs(u-i),f=Math.abs(m-n);!t&&(g>r||f>r)&&(t=!0,e.button.style.cursor="grabbing",e.button.style.opacity="0.5",e.button.style.transform="scale(1.05)",a=this.createPreviewWindow(e,u,m),a.style.opacity="0.8"),t&&a&&(o=!0,d.preventDefault(),a.style.left=`${u-200}px`,a.style.top=`${m-20}px`)},h=()=>{if(t&&o&&a){const d=parseInt(a.style.left)+200,u=parseInt(a.style.top)+20;a.parentNode&&a.parentNode.removeChild(a),this.detachTab(e,d,u)}else o||this.setActiveTab(e.id),a&&a.parentNode&&a.parentNode.removeChild(a);e.button.style.opacity="",e.button.style.transform="",e.button.style.cursor="",t=!1,o=!1,a=null,e.button.removeEventListener("pointermove",c),e.button.removeEventListener("pointerup",h),e.button.removeEventListener("pointercancel",h)};e.button.addEventListener("pointerdown",d=>{this.isMobile&&d.pointerType!=="mouse"||(l(d),e.button.addEventListener("pointermove",c),e.button.addEventListener("pointerup",h),e.button.addEventListener("pointercancel",h))}),e.button.style.cursor="grab"}createPreviewWindow(e,t,i){const n=document.createElement("div");n.className="detached-tab-panel",n.style.left=`${t-200}px`,n.style.top=`${i-20}px`,n.style.pointerEvents="none",this.maxZIndex++,n.style.setProperty("z-index",this.maxZIndex,"important");const o=document.createElement("div");o.className="detached-tab-header";const a=document.createElement("span");a.textContent=e.button.textContent.replace("⇱","").trim(),o.appendChild(a);const r=document.createElement("div");r.className="detached-header-controls";const l=document.createElement("button");l.className="detached-reattach-btn",l.innerHTML="↩",r.appendChild(l),o.appendChild(r);const c=document.createElement("div");c.className="detached-tab-content";const h=document.createElement("div");return h.className="detached-tab-resizer",n.appendChild(h),n.appendChild(o),n.appendChild(c),this.domElement.appendChild(n),n}detachTab(e,t,i){if(e.isDetached||e.allowDetach===!1)return;const o=Array.from(this.tabsContainer.children).map(c=>Object.keys(this.tabs).find(h=>this.tabs[h].button===c)).filter(c=>c!==void 0),a=o.indexOf(e.id);let r=null;if(this.activeTabId===e.id){e.setActive(!1);const c=o.filter(h=>h!==e.id&&!this.tabs[h].isDetached&&this.tabs[h].isVisible);if(c.length>0){for(let h=a-1;h>=0;h--)if(c.includes(o[h])){r=o[h];break}if(!r){for(let h=a+1;h<o.length;h++)if(c.includes(o[h])){r=o[h];break}}r||(r=c[0])}}e.button.parentNode&&e.button.parentNode.removeChild(e.button),e.content.parentNode&&e.content.parentNode.removeChild(e.content);const l=this.createDetachedWindow(e,t,i);this.detachedWindows.push(l),e.isDetached=!0,e.detachedWindow=l,r?this.setActiveTab(r):this.activeTabId===e.id&&(this.activeTabId=null),this.updatePanelSize(),this.saveLayout()}createDetachedWindow(e,t,i){const n=window.innerWidth,o=window.innerHeight,a=400,r=300;let l=t-200,c=i-20;l+a>n&&(l=n-a),l<0&&(l=0),c+r>o&&(c=o-r),c<0&&(c=0);const h=document.createElement("div");h.className="detached-tab-panel",h.style.left=`${l}px`,h.style.top=`${c}px`,e.isVisible||(h.style.display="none");const d=document.createElement("div");d.className="detached-tab-header";const u=document.createElement("span");u.textContent=e.button.textContent.replace("⇱","").trim(),d.appendChild(u);const m=document.createElement("div");m.className="detached-header-controls";const g=document.createElement("button");g.className="detached-reattach-btn",g.innerHTML="↩",g.title="Reattach to main panel",g.onclick=()=>this.reattachTab(e),m.appendChild(g),d.appendChild(m);const f=document.createElement("div");f.className="detached-tab-content",f.appendChild(e.content),e.content.style.display="block",e.content.classList.add("active");const x=document.createElement("div");x.className="detached-tab-resizer-top";const b=document.createElement("div");b.className="detached-tab-resizer-right";const y=document.createElement("div");y.className="detached-tab-resizer-bottom";const S=document.createElement("div");S.className="detached-tab-resizer-left";const k=document.createElement("div");return k.className="detached-tab-resizer",h.appendChild(x),h.appendChild(b),h.appendChild(y),h.appendChild(S),h.appendChild(k),h.appendChild(d),h.appendChild(f),this.domElement.appendChild(h),this.setupDetachedWindowDrag(h,d,e),this.setupDetachedWindowResize(h,x,b,y,S,k),h.style.setProperty("z-index",this.maxZIndex,"important"),{panel:h,tab:e}}bringWindowToFront(e){this.maxZIndex++,e.style.setProperty("z-index",this.maxZIndex,"important")}setupDetachedWindowDrag(e,t,i){let n=!1,o,a,r,l;e.addEventListener("pointerdown",()=>{this.bringWindowToFront(e)});const c=u=>{if(u.target.classList.contains("detached-reattach-btn"))return;this.bringWindowToFront(e),n=!0,t.style.cursor="grabbing",t.setPointerCapture(u.pointerId),o=u.clientX,a=u.clientY;const m=e.getBoundingClientRect();r=m.left,l=m.top},h=u=>{if(!n)return;u.preventDefault();const m=u.clientX,g=u.clientY,f=m-o,x=g-a;let b=r+f,y=l+x;const S=window.innerWidth,k=window.innerHeight,R=e.offsetWidth,L=e.offsetHeight,G=R/2,ie=L/2;b+R>S+G&&(b=S+G-R),b<-G&&(b=-G),y+L>k+ie&&(y=k+ie-L),y<-ie&&(y=-ie),e.style.left=`${b}px`,e.style.top=`${y}px`;const Y=this.panel.getBoundingClientRect();m>=Y.left&&m<=Y.right&&g>=Y.top&&g<=Y.bottom?(e.style.opacity="0.5",this.panel.style.outline="2px solid var(--accent-color)"):(e.style.opacity="",this.panel.style.outline="")},d=u=>{if(!n)return;n=!1,t.style.cursor="",e.style.opacity="",this.panel.style.outline="";const m=u.clientX,g=u.clientY;if(m!==void 0&&g!==void 0){const f=this.panel.getBoundingClientRect();m>=f.left&&m<=f.right&&g>=f.top&&g<=f.bottom&&i?this.reattachTab(i):this.saveLayout()}t.removeEventListener("pointermove",h),t.removeEventListener("pointerup",d),t.removeEventListener("pointercancel",d)};t.addEventListener("pointerdown",u=>{c(u),t.addEventListener("pointermove",h),t.addEventListener("pointerup",d),t.addEventListener("pointercancel",d)}),t.style.cursor="grab"}setupDetachedWindowResize(e,t,i,n,o,a){const c=(h,d)=>{let u=!1,m,g,f,x,b,y;const S=L=>{L.preventDefault(),L.stopPropagation(),u=!0,this.bringWindowToFront(e),h.setPointerCapture(L.pointerId),m=L.clientX,g=L.clientY,f=e.offsetWidth,x=e.offsetHeight,b=e.offsetLeft,y=e.offsetTop},k=L=>{if(!u)return;L.preventDefault();const G=L.clientX,ie=L.clientY,Y=G-m,ge=ie-g,At=window.innerWidth,Nt=window.innerHeight;if(d==="right"||d==="corner"){const z=f+Y,Q=At-b;z>=250&&z<=Q&&(e.style.width=`${z}px`)}if(d==="bottom"||d==="corner"){const z=x+ge,Q=Nt-y;z>=150&&z<=Q&&(e.style.height=`${z}px`)}if(d==="left"){const z=f-Y,Q=b+f-250;if(z>=250){const J=b+Y;J>=0&&J<=Q&&(e.style.width=`${z}px`,e.style.left=`${J}px`)}}if(d==="top"){const z=x-ge,Q=y+x-150;if(z>=150){const J=y+ge;J>=0&&J<=Q&&(e.style.height=`${z}px`,e.style.top=`${J}px`)}}this.dispatchEvent({type:"resize"})},R=()=>{u=!1,h.removeEventListener("pointermove",k),h.removeEventListener("pointerup",R),h.removeEventListener("pointercancel",R),this.saveLayout()};h.addEventListener("pointerdown",L=>{S(L),h.addEventListener("pointermove",k),h.addEventListener("pointerup",R),h.addEventListener("pointercancel",R)})};c(t,"top"),c(i,"right"),c(n,"bottom"),c(o,"left"),c(a,"corner")}reattachTab(e){if(!e.isDetached)return;if(e.detachedWindow){const a=this.detachedWindows.indexOf(e.detachedWindow);a>-1&&this.detachedWindows.splice(a,1),e.detachedWindow.panel.parentNode&&e.detachedWindow.panel.parentNode.removeChild(e.detachedWindow.panel),e.detachedWindow=null}e.isDetached=!1;const i=Object.values(this.tabs).filter(a=>a.originalIndex!==void 0&&a.isVisible).sort((a,r)=>a.originalIndex-r.originalIndex),n=Array.from(this.tabsContainer.children);let o=0;for(const a of i){if(a.id===e.id)break;!a.isDetached&&!a.builtin&&o++}o>=n.length||n.length===0?this.tabsContainer.appendChild(e.button):this.tabsContainer.insertBefore(e.button,n[o]),this.contentWrapper.appendChild(e.content),this.setActiveTab(e.id),this.updatePanelSize(),this.saveLayout()}setActiveTab(e){if(this.activeTabId&&this.tabs[this.activeTabId]&&!this.tabs[this.activeTabId].isDetached&&this.tabs[this.activeTabId].setActive(!1),this.activeTabId=e,this.tabs[e]){const t=this.tabs[e];t.isVisible||t.show(),t.setActive(!0)}this.saveLayout(),this.checkHeaderScroll()}togglePanel(){this.panel.classList.toggle("visible"),this.toggleButton.classList.toggle("panel-open"),this.miniPanel.classList.toggle("panel-open"),this.panel.classList.contains("visible")&&this.activeTabId&&this.tabs[this.activeTabId]&&this.tabs[this.activeTabId].setActive(!0),this.updateWidgetPosition(),this.dispatchEvent({type:"resize"}),this.saveLayout()}togglePosition(){const e=this.position==="bottom"?"right":"bottom";this.setPosition(e)}setPosition(e){if(this.position===e)return;this.panel.style.transition="none";const t=this.panel.classList.contains("maximized");e==="right"?(this.position="right",this.floatingBtn.classList.add("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 15h18"></path></svg>',this.floatingBtn.title="Switch to Bottom",this.panel.classList.remove("position-bottom"),this.panel.classList.add("position-right"),this.panel.style.bottom="",this.panel.style.top="0",this.panel.style.right="0",this.panel.style.left="",t?(this.panel.style.width="100%",this.panel.style.height="100%"):(this.panel.style.width=`${this.lastWidthRight}px`,this.panel.style.height="100%")):(this.position="bottom",this.floatingBtn.classList.remove("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line></svg>',this.floatingBtn.title="Switch to Right Side",this.panel.classList.remove("position-right"),this.panel.classList.add("position-bottom"),this.panel.style.top="",this.panel.style.right="",this.panel.style.bottom="0",this.panel.style.left="0",t?(this.panel.style.width="100%",this.panel.style.height="100%"):(this.panel.style.width="100%",this.panel.style.height=`${this.lastHeightBottom}px`)),this.updateWidgetPosition(),setTimeout(()=>{this.panel.style.transition=""},50),this.updatePanelSize(),this.saveLayout()}saveLayout(){if(this.isLoadingLayout)return;const e={position:this.position,lastHeightBottom:this.lastHeightBottom,lastWidthRight:this.lastWidthRight,activeTabId:this.activeTabId,detachedTabs:[],isVisible:this.panel.classList.contains("visible")};this.detachedWindows.forEach(t=>{const i=t.tab,n=t.panel,o=parseFloat(n.style.left)||n.offsetLeft||0,a=parseFloat(n.style.top)||n.offsetTop||0,r=n.offsetWidth,l=n.offsetHeight;e.detachedTabs.push({tabId:i.id,originalIndex:i.originalIndex!==void 0?i.originalIndex:0,left:o,top:a,width:r,height:l})});try{ae("layout",e)}catch(t){console.warn("Failed to save profiler layout:",t)}}loadLayout(){this.isLoadingLayout=!0;try{const e=me("layout");if(Object.keys(e).length===0)return;if(e.detachedTabs&&e.detachedTabs.length>0){const n=window.innerWidth,o=window.innerHeight;e.detachedTabs=e.detachedTabs.map(a=>{let{left:r,top:l,width:c,height:h}=a;c>n&&(c=n-100),h>o&&(h=o-100);const d=c/2,u=h/2;return r+c>n+d&&(r=n+d-c),r<-d&&(r=-d),l+h>o+u&&(l=o+u-h),l<-u&&(l=-u),{...a,left:r,top:l,width:c,height:h}})}e.position&&(this.position=e.position),e.lastHeightBottom&&(this.lastHeightBottom=e.lastHeightBottom),e.lastWidthRight&&(this.lastWidthRight=e.lastWidthRight);const t=window.innerWidth,i=window.innerHeight;this.lastHeightBottom>i-50&&(this.lastHeightBottom=i-50),this.lastWidthRight>t-50&&(this.lastWidthRight=t-50),this.position==="right"?(this.floatingBtn.classList.add("active"),this.floatingBtn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 15h18"></path></svg>',this.floatingBtn.title="Switch to Bottom",this.panel.classList.remove("position-bottom"),this.panel.classList.add("position-right"),this.toggleButton.classList.add("position-right"),this.miniPanel.classList.add("position-right"),this.panel.style.bottom="",this.panel.style.top="0",this.panel.style.right="0",this.panel.style.left="",this.panel.style.width=`${this.lastWidthRight}px`,this.panel.style.height="100%"):this.panel.style.height=`${this.lastHeightBottom}px`,e.isVisible&&(this.panel.classList.add("visible"),this.toggleButton.classList.add("panel-open")),e.activeTabId&&this.setActiveTab(e.activeTabId),e.detachedTabs&&e.detachedTabs.length>0&&(this.pendingDetachedTabs=e.detachedTabs,this.restoreDetachedTabs()),this.updatePanelSize(),this.updateWidgetPosition(),this.panel.classList.contains("visible")&&this.miniPanel.classList.add("panel-open")}catch(e){console.warn("Failed to load profiler layout:",e)}finally{this.isLoadingLayout=!1}}restoreDetachedTabs(){if(!this.pendingDetachedTabs||this.pendingDetachedTabs.length===0)return;if(this.pendingDetachedTabs.forEach(t=>{const i=this.tabs[t.tabId];if(!i||i.isDetached)return;t.originalIndex!==void 0&&(i.originalIndex=t.originalIndex),i.button.parentNode&&i.button.parentNode.removeChild(i.button),i.content.parentNode&&i.content.parentNode.removeChild(i.content);const n=this.createDetachedWindow(i,0,0);n.panel.style.left=`${t.left}px`,n.panel.style.top=`${t.top}px`,n.panel.style.width=`${t.width}px`,n.panel.style.height=`${t.height}px`,this.constrainWindowToBounds(n.panel),this.detachedWindows.push(n),i.isDetached=!0,i.detachedWindow=n}),this.pendingDetachedTabs=null,this.detachedWindows.forEach(t=>{const i=parseInt(getComputedStyle(t.panel).zIndex)||0;i>this.maxZIndex&&(this.maxZIndex=i)}),!this.activeTabId||!this.tabs[this.activeTabId]||this.tabs[this.activeTabId].isDetached||!this.tabs[this.activeTabId].isVisible){const i=Object.keys(this.tabs).filter(n=>!this.tabs[n].isDetached&&this.tabs[n].isVisible);if(i.length>0){const o=Array.from(this.tabsContainer.children).map(a=>Object.keys(this.tabs).find(r=>this.tabs[r].button===a)).filter(a=>a!==void 0&&!this.tabs[a].isDetached&&this.tabs[a].isVisible);this.setActiveTab(o[0]||i[0])}else this.activeTabId=null}this.updatePanelSize()}setHorizontalAlign(e){return this.horizontalAlign=e,this.updateWidgetPosition(),this}setVerticalAlign(e){return this.verticalAlign=e,this.updateWidgetPosition(),this}updateWidgetPosition(){const e=this.panel.classList.contains("visible"),t=this.panel.classList.contains("maximized"),i=this.position==="right";let n=this.horizontalAlign,o=this.verticalAlign;e&&(i?this.horizontalAlign==="right"&&(n="left"):t?o=this.verticalAlign==="top"?"bottom":"top":this.verticalAlign==="bottom"&&(o="top")),n==="left"?(this.toggleButton.classList.add("toggle-left"),this.miniPanel.classList.add("toggle-left")):(this.toggleButton.classList.remove("toggle-left"),this.miniPanel.classList.remove("toggle-left")),o==="bottom"?(this.toggleButton.classList.add("toggle-bottom"),this.miniPanel.classList.add("toggle-bottom")):(this.toggleButton.classList.remove("toggle-bottom"),this.miniPanel.classList.remove("toggle-bottom")),this.notifyLayoutChange()}isVertical(){return this.position==="left"||this.position==="right"||this.panel&&(this.panel.classList.contains("position-left")||this.panel.classList.contains("position-right"))}notifyLayoutChange(){const e=this.isVertical();this.dispatchEvent({type:"orientationchange",position:this.position,isVertical:e}),this.dispatchEvent({type:"layoutchange",position:this.position,isVertical:e})}dispose(){for(const e of Object.values(this.tabs))e.dispose();this.domElement.remove();for(const e of this.detachedWindows)e.panel.remove();this.toggleGraph.dispose()}}class le extends Ge{constructor(e,t={}){super(),this.id=e.toLowerCase().replace(/\s+/g,"-"),this.button=document.createElement("button"),this.button.className="tab-btn",this.button.textContent=e,this.content=document.createElement("div"),this.content.className="profiler-content",this.content.classList.add(`${this.id}-content`),this._isActive=!1,this.isVisible=!0,this.isDetached=!1,this.detachedWindow=null,this.allowDetach=t.allowDetach!==void 0?t.allowDetach:!0,this.builtin=t.builtin!==void 0?t.builtin:!1,this.icon=t.icon||null,this.builtinButton=null,this.miniContent=null,this.profiler=null,this.onVisibilityChange=null}get inspector(){return this.profiler.inspector}get isActive(){return this.isDetached&&this.isVisible?!0:this.profiler&&this.profiler.panel.classList.contains("visible")?this._isActive:!1}set isActive(e){this._isActive=e}init(){}update(){}setActive(e){this.button.classList.toggle("active",e),this.content.classList.toggle("active",e),this.isActive=e}show(){this.content.style.display="",this.button.style.display="",this.isVisible=!0,this.isDetached&&this.detachedWindow&&(this.detachedWindow.panel.style.display=""),this.onVisibilityChange&&this.onVisibilityChange(),this.showBuiltin()}hide(){this.content.style.display="none",this.button.style.display="none",this.isVisible=!1,this.isDetached&&this.detachedWindow&&(this.detachedWindow.panel.style.display="none"),this.onVisibilityChange&&this.onVisibilityChange(),this.hideBuiltin()}showBuiltin(){if(this.builtin&&(this.profiler&&this.profiler.builtinTabsContainer&&(this.profiler.builtinTabsContainer.style.display=""),this.builtinButton&&(this.builtinButton.style.display=""),this.miniContent&&this.profiler)){if(this.profiler.miniPanel.querySelectorAll(".mini-panel-content").forEach(e=>{e.style.display="none"}),this.profiler.builtinTabsContainer.querySelectorAll(".builtin-tab-btn").forEach(e=>{e.classList.remove("active")}),this.builtinButton&&this.builtinButton.classList.add("active"),!this.miniContent.firstChild)for(;this.content.firstChild;)this.miniContent.appendChild(this.content.firstChild);this.miniContent.style.display="block",this.profiler.miniPanel.classList.add("visible")}}hideBuiltin(){if(this.builtin){if(this.builtinButton&&(this.builtinButton.style.display="none"),this.miniContent&&(this.miniContent.style.display="none",this.miniContent.firstChild))for(;this.miniContent.firstChild;)this.content.appendChild(this.miniContent.firstChild);this.builtinButton&&this.builtinButton.classList.remove("active"),this.profiler&&(Array.from(this.profiler.miniPanel.querySelectorAll(".mini-panel-content")).some(i=>i.style.display!=="none")||this.profiler.miniPanel.classList.remove("visible"),Array.from(this.profiler.builtinTabsContainer.querySelectorAll(".builtin-tab-btn")).some(i=>i.style.display!=="none")||(this.profiler.builtinTabsContainer.style.display="none"))}}dispose(){}}class Me{constructor(...e){this.headers=e,this.children=[],this.domElement=document.createElement("div"),this.domElement.className="list-container",this.domElement.style.padding="5px 10px 10px 10px",this.id=`list-${Math.random().toString(36).slice(2,11)}`,this.domElement.dataset.listId=this.id;const t=document.createElement("div");t.className="list-header",this.headers.forEach(i=>{const n=document.createElement("div");n.className="list-header-cell",n.textContent=i,t.appendChild(n)}),this.domElement.appendChild(t)}setGridStyle(e){this.domElement.style.setProperty("--list-grid-template",e)}setViewMode(e){e==="grid"?this.domElement.classList.add("grid-mode"):this.domElement.classList.remove("grid-mode")}add(e){e.parent!==null&&e.parent.remove(e),e.domElement.classList.add("header-wrapper","section-start"),e.parent=this,this.children.push(e),this.domElement.appendChild(e.domElement)}remove(e){const t=this.children.indexOf(e);return t!==-1&&(this.children.splice(t,1),this.domElement.removeChild(e.domElement),e.parent=null),this}}class _{constructor(...e){this.children=[],this.isOpen=!0,this.isCollapsible=!1,this.childrenContainer=null,this.parent=null,this.domElement=document.createElement("div"),this.domElement.className="list-item-wrapper",this.itemRow=document.createElement("div"),this.itemRow.className="list-item-row",this.userData={},this.data=[],e.forEach((t,i)=>{const n=document.createElement("div");n.className="list-item-cell",this.itemRow.appendChild(n),this.setValue(i,t)}),this.domElement.appendChild(this.itemRow),this.onItemClick=this.onItemClick.bind(this)}onItemClick(e){e.target.closest("button, a, input, label")||this.toggle()}add(e,t=this.children.length){return e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.splice(t,0,e),this.itemRow.classList.add("collapsible"),this.childrenContainer||(this.childrenContainer=document.createElement("div"),this.childrenContainer.className="list-children-container",this.childrenContainer.classList.toggle("closed",!this.isOpen),this.domElement.appendChild(this.childrenContainer),this.itemRow.addEventListener("click",this.onItemClick)),this.childrenContainer.insertBefore(e.domElement,this.childrenContainer.children[t]||null),this.updateToggler(),this}remove(e){const t=this.children.indexOf(e);return t!==-1&&(this.children.splice(t,1),this.childrenContainer.removeChild(e.domElement),e.parent=null,this.children.length===0&&(this.itemRow.classList.remove("collapsible"),this.itemRow.removeEventListener("click",this.onItemClick),this.childrenContainer.remove(),this.childrenContainer=null),this.updateToggler()),this}updateToggler(){const e=this.itemRow.querySelector(".list-item-cell:first-child");let t=this.itemRow.querySelector(".item-toggler");this.children.length>0||this.isCollapsible?(t||(t=document.createElement("span"),t.className="item-toggler",e.prepend(t)),this.isOpen&&this.itemRow.classList.add("open")):t&&t.remove()}setCollapsible(e){return this.isCollapsible=e,e?(this.itemRow.classList.add("collapsible"),this.childrenContainer||(this.childrenContainer=document.createElement("div"),this.childrenContainer.className="list-children-container",this.childrenContainer.classList.toggle("closed",!this.isOpen),this.domElement.appendChild(this.childrenContainer),this.itemRow.addEventListener("click",this.onItemClick))):this.itemRow.classList.remove("collapsible"),this.updateToggler(),this}toggle(){return this.isOpen=!this.isOpen,this.itemRow.classList.toggle("open",this.isOpen),this.childrenContainer&&this.childrenContainer.classList.toggle("closed",!this.isOpen),this}close(){return this.isOpen&&this.toggle(),this}show(){return this.domElement.style.display="",this}hide(){return this.domElement.style.display="none",this}setValue(e,t){this.data[e]=t;const i=this.itemRow.children[e];if(i){const n=i.querySelector(".item-toggler");i.innerHTML="",n&&i.appendChild(n),t instanceof HTMLElement?i.appendChild(t):i.append(String(t))}return this}getValue(e){return this.data[e]}}function v(){const p=document.createElement("span");return p.className="value",p}function w(p,e){p&&p.textContent!==e&&(p.textContent=e)}function lg(p){const e=p.lastIndexOf("/");if(e===-1)return{path:"",name:p.trim()};const t=p.substring(0,e).trim(),i=p.substring(e+1).trim();return{path:t,name:i}}function cg(p){return p.replace(/([a-z0-9])([A-Z])/g,"$1 $2").trim()}function X(p,e=2){if(p===0)return"0 Bytes";const t=1024,i=e<0?0:e,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(p)/Math.log(t));return parseFloat((p/Math.pow(t,o)).toFixed(i))+" "+n[o]}function Bt(p,e){let t=p.querySelector(".info-icon");if(!t)t=document.createElement("span"),t.className="info-icon",t.textContent="i",p.appendChild(t);else{const r=t.cloneNode(!0);t.replaceWith(r),t=r}const i=()=>{const r=t.closest(".three-inspector")||document.body;let l=r.querySelector(".three-inspector-info-tooltip");l||(l=document.createElement("div"),l.className="info-tooltip three-inspector-info-tooltip",r.appendChild(l));const c=e.trim().replace(/### (.*?)(?:\r?\n|$)/g,"<h3>$1</h3>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br/>");l.innerHTML=c;const h=t.getBoundingClientRect(),d=l.getBoundingClientRect().width,u=8,m=d/2,g=Math.max(u+m,Math.min(window.innerWidth-u-m,h.left+h.width/2));l.style.left=g+"px",l.style.top=h.top-8+"px",l.style.opacity="1",l.style.visibility="visible"},n=()=>{const l=(t.closest(".three-inspector")||document.body).querySelector(".three-inspector-info-tooltip");l&&(l.style.opacity="0",l.style.visibility="hidden")};let o=!1;const a=r=>{t.contains(r.target)||(o=!1,t.classList.remove("active"),n(),document.removeEventListener("pointerdown",a))};return t.addEventListener("pointerenter",()=>{i()}),t.addEventListener("pointerleave",()=>{o||n()}),t.addEventListener("click",r=>{r.stopPropagation(),o=!o,o?(t.classList.add("active"),i(),document.addEventListener("pointerdown",a)):(t.classList.remove("active"),n(),document.removeEventListener("pointerdown",a))}),t}class hg extends le{constructor(e={}){super("Performance",e);const t=new Me("Name","CPU","GPU","Total");t.setGridStyle("minmax(200px, 2fr) 80px 80px 80px"),t.domElement.style.minWidth="600px";const i=document.createElement("div");i.className="list-scroll-wrapper",i.appendChild(t.domElement),this.content.appendChild(i);const n=document.createElement("div");n.className="graph-container";const o=new Le;o.addLine("fps","var( --color-fps )"),o.addLine("cpu","var( --color-yellow )"),o.addLine("gpu","var( --color-green )"),n.append(o.domElement),this.graphFpsCounter=v();const a=new _("Graph Stats",v(),v(),this.graphFpsCounter);t.add(a);const r=new _(n);r.itemRow.childNodes[0].style.gridColumn="1 / -1",a.add(r);const l=new _("Frame Stats",v(),v(),v());t.add(l);const c=new _("Miscellaneous & Idle",v(),v(),v());c.domElement.firstChild.style.backgroundColor="#00ff0b1a",c.domElement.firstChild.classList.add("no-hover"),l.add(c),this.notInUse=new Map,this.frameStats=l,this.graphStats=a,this.graph=o,this.miscellaneous=c,this.currentRender=null,this.currentItem=null,this.frameItems=new Map}resolveStats(e,t){const i=e.getStatsData(t.cid);let n=i.item;if(n===void 0)n=new _(v(),v(),v(),v()),t.name?t.isComputeStats===!0&&(t.name=`${t.name} [ Compute ]`):t.name=`Unnamed ${t.cid}`,n.userData.name=t.name,this.currentItem.add(n),i.item=n;else{n.userData.name=t.name,this.notInUse.has(t.cid)&&(n.domElement.firstElementChild.classList.remove("alert"),this.notInUse.delete(t.cid));const r=t.parent.children.indexOf(t);(n.parent===null||n.parent.children.indexOf(n)!==r)&&this.currentItem.add(n,r)}let o=n.userData.name;t.isComputeStats&&(o+=" [ Compute ]"),w(n.data[0],o),w(n.data[1],i.cpu.toFixed(2)),w(n.data[2],t.gpuNotAvailable===!0?"-":i.gpu.toFixed(2)),w(n.data[3],i.total.toFixed(2));const a=this.currentItem;this.currentItem=n;for(const r of t.children)this.resolveStats(e,r);this.currentItem=a,this.frameItems.set(t.cid,n)}updateGraph(e,t){const i=e.fps;if(this.graph.addPoint("fps",i),t){const n=Math.min((t.cpu||0)*i/1e3,1)*i,o=Math.min((t.gpu||0)*i/1e3,1)*i;this.graph.addPoint("cpu",n),this.graph.addPoint("gpu",o)}this.graph.update()}addNotInUse(e,t){t.domElement.firstElementChild.classList.add("alert"),this.notInUse.set(e,{item:t,time:performance.now()}),this.updateNotInUse(e)}updateNotInUse(e){const{item:t,time:i}=this.notInUse.get(e),n=performance.now(),a=5-Math.floor((n-i)/1e3);if(a>=0){const r="*".repeat(Math.max(0,a)),l=t.domElement.querySelector(".list-item-cell .value");w(l,t.userData.name+" (not in use) "+r)}else t.domElement.firstElementChild.classList.remove("alert"),t.parent.remove(t),this.notInUse.delete(e)}updateText(e,t){const i=new Map(this.frameItems);this.frameItems.clear(),this.currentItem=this.frameStats;for(const n of t.children)this.resolveStats(e,n);for(const[n,o]of i)this.frameItems.has(n)||(this.addNotInUse(n,o),i.delete(n));for(const n of this.notInUse.keys())this.updateNotInUse(n);w(this.graphFpsCounter,e.fps.toFixed()+" FPS"),w(this.frameStats.data[1],t.cpu.toFixed(2)),w(this.frameStats.data[2],e.getRenderer().backend.hasTimestamp?t.gpu.toFixed(2):"-"),w(this.frameStats.data[3],t.total.toFixed(2)),w(this.miscellaneous.data[1],t.miscellaneous.toFixed(2)),w(this.miscellaneous.data[2],"-"),w(this.miscellaneous.data[3],t.miscellaneous.toFixed(2)),this.currentItem=null}}class dg extends le{constructor(e={}){super("Memory",e);const t=new Me("Name","Count","Size");t.setGridStyle("minmax(200px, 2fr) 60px 100px"),t.domElement.style.minWidth="300px";const i=document.createElement("div");i.className="list-scroll-wrapper",i.appendChild(t.domElement),this.content.appendChild(i);const n=document.createElement("div");n.className="graph-container";const o=new Le;o.addLine("total","var( --color-yellow )"),n.append(o.domElement);const a=new _("Graph Stats","","");t.add(a);const r=new _(n);r.itemRow.childNodes[0].style.gridColumn="1 / -1",a.add(r),this.memoryStats=new _("Renderer Info","",v()),this.memoryStats.domElement.firstChild.classList.add("no-hover"),t.add(this.memoryStats),this.attributes=new _("Attributes",v(),v()),this.memoryStats.add(this.attributes),this.geometries=new _("Geometries",v(),"N/A"),this.memoryStats.add(this.geometries),this.indexAttributes=new _("Index Attributes",v(),v()),this.memoryStats.add(this.indexAttributes),this.indirectStorageAttributes=new _("Indirect Storage Attributes",v(),v()),this.memoryStats.add(this.indirectStorageAttributes),this.programs=new _("Programs",v(),v()),this.memoryStats.add(this.programs),this.readbackBuffers=new _("Readback Buffers",v(),v()),this.memoryStats.add(this.readbackBuffers),this.renderTargets=new _("Render Targets",v(),"N/A"),this.memoryStats.add(this.renderTargets),this.storageAttributes=new _("Storage Attributes",v(),v()),this.memoryStats.add(this.storageAttributes),this.textures=new _("Textures",v(),v()),this.memoryStats.add(this.textures),this.uniformBuffers=new _("Uniform Buffers",v(),v()),this.memoryStats.add(this.uniformBuffers),this.graph=o}updateGraph(e){const i=e.getRenderer().info.memory;this.graph.addPoint("total",i.total),this.graph.limit===0&&(this.graph.limit=1),this.graph.update()}updateText(e){const i=e.getRenderer().info.memory;w(this.memoryStats.data[2],X(i.total)),w(this.attributes.data[1],i.attributes.toString()),w(this.attributes.data[2],X(i.attributesSize)),w(this.geometries.data[1],i.geometries.toString()),w(this.indexAttributes.data[1],i.indexAttributes.toString()),w(this.indexAttributes.data[2],X(i.indexAttributesSize)),w(this.indirectStorageAttributes.data[1],i.indirectStorageAttributes.toString()),w(this.indirectStorageAttributes.data[2],X(i.indirectStorageAttributesSize)),w(this.programs.data[1],i.programs.toString()),w(this.programs.data[2],X(i.programsSize)),w(this.readbackBuffers.data[1],i.readbackBuffers.toString()),w(this.readbackBuffers.data[2],X(i.readbackBuffersSize)),w(this.renderTargets.data[1],i.renderTargets.toString()),w(this.storageAttributes.data[1],i.storageAttributes.toString()),w(this.storageAttributes.data[2],X(i.storageAttributesSize)),w(this.textures.data[1],i.textures.toString()),w(this.textures.data[2],X(i.texturesSize)),w(this.uniformBuffers.data[1],i.uniformBuffers.toString()),w(this.uniformBuffers.data[2],X(i.uniformBuffersSize))}}class pg extends le{constructor(e={}){super("Console",e),this.filters={info:!0,warn:!0,error:!0},this.filterText="",this.unreadErrors=0,this.unreadWarns=0,this.tabBadgeContainer=document.createElement("span"),this.tabBadgeContainer.className="tab-badge-container",this.tabErrorBadge=document.createElement("span"),this.tabErrorBadge.className="tab-badge error",this.tabErrorBadge.style.display="none",this.tabWarnBadge=document.createElement("span"),this.tabWarnBadge.className="tab-badge warn",this.tabWarnBadge.style.display="none",this.tabBadgeContainer.appendChild(this.tabErrorBadge),this.tabBadgeContainer.appendChild(this.tabWarnBadge),this.button.appendChild(this.tabBadgeContainer),this.buildHeader(),this.logContainer=document.createElement("div"),this.logContainer.classList.add("console-log"),this.content.appendChild(this.logContainer),this.lastMessage=null}buildHeader(){const e=document.createElement("div");e.className="toolbar";const t=document.createElement("input");t.type="text",t.className="console-filter-input",t.placeholder="Filter...",t.addEventListener("input",o=>{this.filterText=o.target.value.toLowerCase(),this.applyFilters()});const i=document.createElement("button");i.className="console-copy-button",i.title="Copy all",i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',i.addEventListener("click",()=>this.copyAll(i));const n=document.createElement("div");n.className="console-buttons-group",Object.keys(this.filters).forEach(o=>{const a=document.createElement("label");a.className="custom-checkbox",a.style.color=`var(--${o==="info"?"text-primary":"color-"+(o==="warn"?"yellow":"red")})`;const r=document.createElement("input");r.type="checkbox",r.checked=this.filters[o],r.dataset.type=o;const l=document.createElement("span");l.className="checkmark";const c=document.createElement("span");c.className="checkbox-text",c.textContent=o.charAt(0).toUpperCase()+o.slice(1),a.appendChild(r),a.appendChild(l),a.appendChild(c),n.appendChild(a)}),n.addEventListener("change",o=>{const a=o.target.dataset.type;a in this.filters&&(this.filters[a]=o.target.checked,this.applyFilters())}),n.appendChild(i),e.appendChild(t),e.appendChild(n),this.content.appendChild(e)}applyFilters(){this.logContainer.querySelectorAll(".log-message").forEach(t=>{const i=t.dataset.type,n=t.dataset.rawText.toLowerCase(),o=this.filters[i],a=n.includes(this.filterText);t.classList.toggle("hidden",!(o&&a))})}copyAll(e){const i=this.logContainer.ownerDocument.defaultView.getSelection(),n=i.toString(),o=n&&this.logContainer.contains(i.anchorNode);let a;if(o)a=n;else{const r=this.logContainer.querySelectorAll(".log-message:not(.hidden)");a=Array.from(r).map(l=>l.dataset.rawText).join(`
`)}navigator.clipboard.writeText(a),e.classList.add("copied"),setTimeout(()=>e.classList.remove("copied"),350)}_getIcon(e,t){let i;return t==="tip"?i="💭":t==="tsl"?i="✨":t==="webgpurenderer"?i="🎨":e==="warn"?i="⚠️":e==="error"?i="🔴":e==="info"&&(i="ℹ️"),i}_formatMessage(e,t){const i=document.createDocumentFragment(),n=t.match(/^([\w\.]+:\s)/);let o=t;if(n){const r=n[0],l=r.slice(0,-2).split("."),c=(l.length>1?l[l.length-1]:l[0])+":",h=document.createElement("span");h.className="log-prefix",h.textContent=c,i.appendChild(h),o=t.substring(r.length)}const a=o.split(/(".*?"|'.*?'|`.*?`)/g).map(r=>r.trim()).filter(Boolean);return a.forEach((r,l)=>{if(/^("|'|`)/.test(r)){const c=document.createElement("span");c.className="log-code",c.textContent=r.slice(1,-1),i.appendChild(c)}else l>0&&(r=" "+r),l<a.length-1&&(r+=" "),i.appendChild(document.createTextNode(r))}),i}setActive(e){super.setActive(e),e&&this.clearUnread()}clearUnread(){this.unreadErrors=0,this.unreadWarns=0,this.updateBadges()}updateBadges(){if(!this.profiler)return;const e=this.profiler.toggleButton.querySelector(".console-badge.error"),t=this.profiler.toggleButton.querySelector(".console-badge.warn");e&&(this.unreadErrors>0?(e.textContent=this.unreadErrors>99?"+99":this.unreadErrors,e.style.display=""):e.style.display="none"),t&&(this.unreadWarns>0?(t.textContent=this.unreadWarns>99?"+99":this.unreadWarns,t.style.display=""):t.style.display="none"),this.tabErrorBadge&&(this.unreadErrors>0?(this.tabErrorBadge.textContent=this.unreadErrors>99?"+99":this.unreadErrors,this.tabErrorBadge.style.display=""):this.tabErrorBadge.style.display="none"),this.tabWarnBadge&&(this.unreadWarns>0?(this.tabWarnBadge.textContent=this.unreadWarns>99?"+99":this.unreadWarns,this.tabWarnBadge.style.display=""):this.tabWarnBadge.style.display="none")}addMessage(e,t){if(this.lastMessage&&this.lastMessage.type===e&&this.lastMessage.text===t)this.lastMessage.count++,this.lastMessage.countBadge.textContent=this.lastMessage.count,this.lastMessage.countBadge.style.display="";else{const n=document.createElement("div");n.className=`log-message ${e}`,n.dataset.type=e,n.dataset.rawText=t;const o=document.createElement("span");o.className="log-count-badge",o.style.display="none",n.appendChild(o);let a=null;const r=t.match(/^([\w\.]+:\s)/);if(r){const u=r[0].slice(0,-2).split("."),m=(u.length>1?u[u.length-1]:u[0])+":";a=this._getIcon(e,m.split(":")[0].toLowerCase())}if(a){const d=document.createElement("span");d.className="log-icon",d.textContent=a,n.appendChild(d)}const l=document.createElement("span");l.className="log-body",l.appendChild(this._formatMessage(e,t)),n.appendChild(l);const c=this.filters[e],h=t.toLowerCase().includes(this.filterText);if(n.classList.toggle("hidden",!(c&&h)),this.logContainer.appendChild(n),this.logContainer.children.length>200){const d=this.logContainer.firstChild;this.logContainer.removeChild(d),this.lastMessage&&this.lastMessage.element===d&&(this.lastMessage=null)}this.lastMessage={type:e,text:t,count:1,element:n,countBadge:o}}this.logContainer.scrollTop=this.logContainer.scrollHeight,!this.isActive&&(e==="error"?(this.unreadErrors++,this.updateBadges()):e==="warn"&&(this.unreadWarns++,this.updateBadges()))}}class te extends Ge{constructor(){super(),this.domElement=document.createElement("div"),this.domElement.className="param-control",this._onChangeFunction=null,this._changeTimeout=null,this._debounceTime=0,this.addEventListener("change",e=>{clearTimeout(this._changeTimeout),this._changeTimeout=setTimeout(()=>{this._onChangeFunction&&this._onChangeFunction(e.value)},this._debounceTime)})}setValue(){return this.dispatchChange(),this}getValue(){return null}dispatchChange(){this.dispatchEvent({type:"change",value:this.getValue()})}onChange(e){return this._onChangeFunction=e,this}debounce(e){return this._debounceTime=e,this}show(){return this.dispatchEvent({type:"show"}),this}hide(){return this.dispatchEvent({type:"hide"}),this}}class Pt extends te{constructor({value:e=0,step:t=.1,min:i=-1/0,max:n=1/0}){super(),this.input=document.createElement("input"),this.input.type="number",this.input.value=e,this.input.step=t,this.input.min=i,this.input.max=n,this.input.addEventListener("change",this._onChangeValue.bind(this)),this.domElement.appendChild(this.input),this.addDragHandler()}_onChangeValue(){const e=parseFloat(this.input.value),t=parseFloat(this.input.min),i=parseFloat(this.input.max);e>i?this.input.value=i:e<t?this.input.value=t:isNaN(e)&&(this.input.value=t),this.dispatchChange()}addDragHandler(){let e=!1,t,i;this.input.style.touchAction="none",this.input.addEventListener("pointerdown",n=>{e=!0,t=n.clientY,i=parseFloat(this.input.value),document.body.style.cursor="ns-resize"}),document.addEventListener("pointermove",n=>{if(e){const o=t-n.clientY,a=parseFloat(this.input.step)||1,r=parseFloat(this.input.min),l=parseFloat(this.input.max);let c=a;!isNaN(l)&&isFinite(r)&&(c=(l-r)/100);const h=o*c;let d=i+h;d=Math.max(r,Math.min(d,l));const u=(String(a).split(".")[1]||[]).length;this.input.value=d.toFixed(u),this.input.dispatchEvent(new Event("input")),this.dispatchChange()}}),document.addEventListener("pointerup",()=>{e&&(e=!1,document.body.style.cursor="default")})}setValue(e){return this.input.value=e,super.setValue(e)}getValue(){return parseFloat(this.input.value)}}class ug extends te{constructor({value:e=!1}){super();const t=document.createElement("label");t.className="custom-checkbox";const i=document.createElement("input");i.type="checkbox",i.checked=e,this.checkbox=i;const n=document.createElement("span");n.className="checkmark",t.appendChild(i),t.appendChild(n),this.domElement.appendChild(t),i.addEventListener("change",()=>{this.dispatchChange()})}setValue(e){return this.checkbox.checked=e,super.setValue(e)}getValue(){return this.checkbox.checked}}class mg extends te{constructor({value:e=0,min:t=0,max:i=1,step:n=.01}){super(),this.slider=document.createElement("input"),this.slider.type="range",this.slider.min=t,this.slider.max=i,this.slider.step=n;const o=new Pt({value:e,min:t,max:i,step:n});this.numberInput=o.input,this.numberInput.style.flexBasis="80px",this.numberInput.style.flexShrink="0",this.slider.value=e,this.domElement.append(this.slider,this.numberInput),this.slider.addEventListener("input",()=>{this.numberInput.value=this.slider.value,this.dispatchChange()}),o.addEventListener("change",()=>{this.slider.value=parseFloat(this.numberInput.value),this.dispatchChange()})}setValue(e){return this.slider.value=e,this.numberInput.value=e,super.setValue(e)}getValue(){return parseFloat(this.slider.value)}step(e){return this.slider.step=e,this.numberInput.step=e,this.slider.value=parseFloat(this.numberInput.value),this}}class gg extends te{constructor({options:e=[],value:t=""}){super();const i=document.createElement("select"),n=(o,a)=>{const r=document.createElement("option");return r.value=o,r.textContent=o,a==t&&(r.selected=!0),i.appendChild(r),r};Array.isArray(e)?e.forEach(o=>n(o,o)):Object.entries(e).forEach(([o,a])=>n(o,a)),this.domElement.appendChild(i),i.addEventListener("change",()=>{this.dispatchChange()}),this.options=e,this.select=i}setValue(e){if(Array.isArray(this.options))this.select.value=e;else{const t=Object.entries(this.options).find(([,i])=>i===e);t?this.select.value=t[0]:this.select.value=e}return super.setValue(e)}getValue(){const e=this.options;return Array.isArray(e)?e[this.select.selectedIndex]:e[this.select.value]}}class fg extends te{constructor({value:e="#ffffff"}){super();const t=document.createElement("input");t.type="color",t.value=this._getColorHex(e),this.colorInput=t,this._value=e,t.addEventListener("input",()=>{const i=t.value;this._value.isColor?this._value.setHex(parseInt(i.slice(1),16)):this._value=i,this.dispatchChange()}),this.domElement.appendChild(t)}setValue(e){const t=this._getColorHex(e);return this.colorInput.value=t,this._value&&this._value.isColor?this._value.setHex(parseInt(t.slice(1),16)):this._value=e,super.setValue(e)}_getColorHex(e){return e&&e.isColor&&(e=e.getHex()),typeof e=="number"?e="#"+e.toString(16).padStart(6,"0"):typeof e=="string"&&e[0]!=="#"&&(e="#"+e),e}getValue(){let e=this._value;return typeof e=="string"&&(e=parseInt(e.slice(1),16)),e}}class bg extends te{constructor({text:e="Button",value:t=()=>{}}){super();const i=document.createElement("button");i.textContent=e,i.onclick=t,this.domElement.appendChild(i)}}class xg extends te{constructor({value:e=""}){super();const t=document.createElement("input");t.type="text",t.value=e,this.input=t,t.addEventListener("input",()=>{this.dispatchChange()}),this.domElement.appendChild(t)}setValue(e){return this.input.value=e,super.setValue(e)}getValue(){return this.input.value}}class Ke{constructor(e,t){this.parameters=e,this.paramList=new _(t),this.paramList.setCollapsible(!0),this.objects=[]}close(){return this.paramList.close(),this}name(e){return this.paramList.setValue(0,e),this}show(){return this.paramList.show(),this}hide(){return this.paramList.hide(),this}add(e,t,...i){const o=typeof e[t];let a=null;return typeof i[0]=="object"?a=this.addSelect(e,t,i[0]):o==="number"?i.length>=2?a=this.addSlider(e,t,...i):a=this.addNumber(e,t,...i):o==="boolean"?a=this.addBoolean(e,t):o==="string"?a=this.addString(e,t):o==="function"&&(a=this.addButton(e,t,...i)),a}_addInfo(e,t){e.info=i=>(Bt(t,i),e)}_addParameter(e,t,i,n){i.name=o=>(n.data[0].childNodes.length>0&&n.data[0].firstChild.nodeType===3?n.data[0].firstChild.textContent=o:n.data[0].insertBefore(document.createTextNode(o),n.data[0].firstChild),i),this._addInfo(i,n.data[0]),i.listen=()=>{const o=()=>{const a=i.getValue(),r=e[t];a!==r&&i.setValue(r),requestAnimationFrame(o)};return requestAnimationFrame(o),i},this._registerParameter(e,t,i,n)}_registerParameter(e,t,i,n){this.objects.push({object:e,key:t,editor:i,subItem:n}),i.addEventListener("show",()=>n.show()),i.addEventListener("hide",()=>n.hide())}addString(e,t){const i=e[t],n=new xg({value:i});n.addEventListener("change",({value:l})=>{e[t]=l});const o=v();o.textContent=t;const a=new _(o,n.domElement);return this.paramList.add(a),a.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,n,a),n}addFolder(e){const t=new Ke(this.parameters,e);return this.paramList.add(t.paramList),t}addBoolean(e,t){const i=e[t],n=new ug({value:i});n.addEventListener("change",({value:l})=>{e[t]=l});const o=v();o.textContent=t;const a=new _(o,n.domElement);this.paramList.add(a);const r=a.domElement.firstChild;return r.classList.add("actionable"),r.addEventListener("click",l=>{if(l.target.closest("label"))return;const c=r.querySelector('input[type="checkbox"]');c&&(c.checked=!c.checked,c.dispatchEvent(new Event("change")))}),this._addParameter(e,t,n,a),n}addSelect(e,t,i){const n=e[t],o=new gg({options:i,value:n});o.addEventListener("change",({value:c})=>{e[t]=c});const a=v();a.textContent=t;const r=new _(a,o.domElement);return this.paramList.add(r),r.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,o,r),o}addColor(e,t){const i=e[t],n=new fg({value:i});n.addEventListener("change",({value:l})=>{e[t]=l});const o=v();o.textContent=t;const a=new _(o,n.domElement);return this.paramList.add(a),a.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,n,a),n}addSlider(e,t,i=0,n=1,o=.01){const a=e[t],r=new mg({value:a,min:i,max:n,step:o});r.addEventListener("change",({value:d})=>{e[t]=d});const l=v();l.textContent=t;const c=new _(l,r.domElement);return this.paramList.add(c),c.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,r,c),r}addNumber(e,t,...i){const n=e[t],[o,a]=i,r=new Pt({value:n,min:o,max:a});r.addEventListener("change",({value:d})=>{e[t]=d});const l=v();l.textContent=t;const c=new _(l,r.domElement);return this.paramList.add(c),c.domElement.firstChild.classList.add("actionable"),this._addParameter(e,t,r,c),r}addButton(e,t){const i=e[t],n=new bg({text:t,value:i});n.addEventListener("change",({value:r})=>{e[t]=r});const o=new _(n.domElement);return o.itemRow.childNodes[0].style.gridColumn="1 / -1",this.paramList.add(o),o.domElement.firstChild.classList.add("actionable"),n.name=r=>{const l=n.domElement.childNodes[0];return l.childNodes.length>0&&l.firstChild.nodeType===3?l.firstChild.textContent=r:l.insertBefore(document.createTextNode(r),l.firstChild),n},this._addInfo(n,n.domElement.childNodes[0]),this._registerParameter(e,t,n,o),n}}class Rt extends le{constructor(e={}){super(e.name||"Parameters",e);const t=new Me("Property","Value");t.domElement.classList.add("parameters"),t.setGridStyle(".5fr 1fr"),t.domElement.style.minWidth="300px";const i=document.createElement("div");i.className="list-scroll-wrapper",i.appendChild(t.domElement),this.content.appendChild(i),this.paramList=t,this.groups=[]}createGroup(e){const t=new Ke(this,e);return this.paramList.add(t.paramList),this.groups.push(t),t}}const vg=[{name:"Color Grading",url:"../extensions/color-grading/ColorGrading.js"},{name:"TSL Graph",url:"../extensions/tsl-graph/TSLGraphEditor.js"}],at=Te.prototype.init;function It(p){p?Te.prototype.init=async function(){if(this.backend.isWebGLBackend!==!0){const e=this.backend.parameters;this.backend=new si(e)}return at.call(this)}:Te.prototype.init=at}let D=null;function je(){if(D!==null)return D;const p=me("settings");return D={forceWebGL:p.forceWebGL!==void 0?p.forceWebGL:!1,captureStackTrace:p.captureStackTrace!==void 0?p.captureStackTrace:!1,activeExtensions:p.activeExtensions!==void 0?p.activeExtensions:{},storage:p.storage!==void 0?p.storage:"url"},D.forceWebGL&&It(!0),D.captureStackTrace&&(gt.captureStackTrace=!0),D}function xe(){ae("settings",{forceWebGL:D.forceWebGL,captureStackTrace:D.captureStackTrace,activeExtensions:D.activeExtensions,storage:D.storage})}je();class wg extends Rt{constructor(){super({name:"Settings"}),this.extensions={};const e=je(),t=this.createGroup("Renderer");t.add(e,"forceWebGL").name("Force WebGL").onChange(n=>{It(n),xe(),location.reload()}),t.add(e,"captureStackTrace").name("Capture Stack Trace").onChange(n=>{gt.captureStackTrace=n,xe(),location.reload()}),this.createGroup("Render Modes").add({overdraw:!1},"overdraw").name("Overdraw").onChange(n=>{this.inspector.overdraw=n}).info("Shows how many times each pixel is shaded.")}init(){const e=this.createGroup("Extensions"),t=this.createGroup("Storage"),i=je();t.add(i,"storage",{"URL Session":"url","Keep across Origin":"origin"}).name("Save Settings").onChange(()=>{xe()}).info(`
Defines how the **Inspector** preferences and states are stored in the browser.

**URL Session**
Saves state based on the exact URL. It will reset the settings whenever the URL changes.

**Keep across Origin**
Shares the same state across any page within the current origin.`),t.add({clear:()=>{localStorage.removeItem("threejs-inspector"),location.reload()}},"clear").name("Clear Settings"),this._getExtensions().then(n=>{for(const o of n)o.active=!1,o.loaded=!1,o.tab=null,this.extensions[o.name]=o,o.ui=e.add({[o.name]:!1},o.name).onChange(async a=>{this.setActiveExtension(o.name,a),a?D.activeExtensions[o.name]={name:o.name,url:o.url}:delete D.activeExtensions[o.name],this._updateExtensionUI(o),xe()}),D.activeExtensions[o.name]!==void 0&&o.ui.setValue(!0)})}async setActiveExtension(e,t){const i=this.extensions[e],n=this.inspector;i&&(t?await this._loadExtension(n,i):await this._unloadExtension(n,i))}_updateExtensionUI(e){e.active&&D.activeExtensions[e.name]===void 0?(e.ui.checkbox.checked=!0,e.ui.domElement.style.setProperty("--accent-color","var(--color-green)")):e.ui.domElement.style.removeProperty("--accent-color")}async _unloadExtension(e,t){t.active!==!1&&(e.removeTab(t.tab),t.active=!1,t.loaded=!1,t.tab=null,this._updateExtensionUI(t),this.dispatchEvent({type:"extensionremoved",name:t.name}))}async _loadExtension(e,t){if(t.active===!0)return;t.active=!0;const n=await import(new URL(t.url,import.meta.url).href),o=Object.keys(n),a=n[o[0]],r=new a;e.addTab(r),t.loaded=!0,t.tab=r,this._updateExtensionUI(t),this.dispatchEvent({type:"extensionadded",name:t.name,tab:r})}async _getExtensions(){return vg}}const yg=new E,Ae='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><polyline points="5 8 1 12 5 16"></polyline><polyline points="19 8 23 12 19 16"></polyline></svg>',Ne='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',lt='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',_g=H(([p,e,t])=>{const i=P(0);xt(()=>{const{width:h,height:d}=e.value;i.value=h/d});const n=t.div(i),o=p.sub(.5),a=re(o.x.mul(n),o.y).add(.5),r=re(o.x,o.y.div(n)).add(.5),l=t.greaterThan(i).select(a,r),c=de(0,l.x).mul(de(l.x,1)).mul(de(0,l.y)).mul(de(l.y,1));return K(l,c)});class Cg extends le{constructor(e={}){super("Viewer",e),this.content.style.overflow="hidden",this.maximizedByFullscreenButton=!1;const t=document.createElement("div");t.className="toolbar";const i=document.createElement("button");i.className="viewer-back-btn",i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',i.title="Back",i.style.display="none",t.appendChild(i);const n=document.createElement("span");n.textContent="View:",t.appendChild(n);const o=document.createElement("select");o.className="select",o.style.width="200px";const a=document.createElement("option");a.value="list",a.textContent="List",o.appendChild(a),t.appendChild(o);const r=new Me("Viewer","Name");r.setGridStyle("150px minmax(200px, 2fr)"),r.domElement.style.minWidth="400px",this.nodeList=r,this.content.appendChild(t);const l=document.createElement("div");l.className="list-scroll-wrapper",l.style.flexGrow="1",l.style.overflowY="auto",l.style.minHeight="0",l.appendChild(r.domElement),this.content.appendChild(l);const c=document.createElement("div");c.className="full-viewer-container",c.style.touchAction="none",this.content.appendChild(c);const h=new _("User Defined");h.setCollapsible(!0),r.add(h),this.itemLibrary=new Map,this.folderLibrary=new Map,this.canvasNodes=new Map,this.currentDataList=[],this.nodes=h,this.scrollWrapper=l,this.fullViewerContainer=c,this.select=o,this.backBtn=i,this.activeFullNodeId=null,this.pendingRestoreView=!0,this.splitActive=!1,this.splitCanvasData=null,this.splitOverlay=null,this.splitLine=null,this.splitQuad=null,this.splitMaterial=null,this.splitUniforms=null,this.splitCanvas=null,this.splitCanvasTarget=null,i.addEventListener("click",()=>{this.splitActive&&this.stopSplitMode(),o.value="list",this.showListView(),this.maximizedByFullscreenButton&&(this.profiler&&this.profiler.panel.classList.contains("maximized")&&this.profiler.toggleMaximize(),this.maximizedByFullscreenButton=!1),this.saveLastView()}),o.addEventListener("change",()=>{const u=o.value;u==="list"?this.showListView():this.showNodeView(u),this.saveLastView()}),this.isDraggingThumbnail=!1,this.activeSourceCanvas=null,this.activePointerIds=new Set;const d=u=>{if(!this.isDraggingThumbnail||!this.activeSourceCanvas)return;const m=this.inspector.getRenderer();u.isForwarded||(u.stopImmediatePropagation(),u.preventDefault(),this.forwardEvent(u,this.activeSourceCanvas,m.domElement),(u.type==="pointerup"||u.type==="pointercancel")&&(this.activePointerIds.delete(u.pointerId),this.activePointerIds.size===0&&(this.isDraggingThumbnail=!1,this.activeSourceCanvas=null)))};window.addEventListener("pointermove",d,!0),window.addEventListener("pointerup",d,!0),window.addEventListener("pointercancel",d,!0)}getFolder(e){let t=this.folderLibrary.get(e);return t===void 0&&(t=new _(e),t.setCollapsible(!0),this.folderLibrary.set(e,t),this.nodeList.add(t)),t}hide(){super.hide(),this.maximizedByFullscreenButton=!1,this.isDraggingThumbnail=!1,this.activeSourceCanvas=null,this.activePointerIds.clear(),this.splitActive&&this.stopSplitMode()}addNodeItem(e){let t=this.itemLibrary.get(e.id);if(t===void 0){const i=e.name,n=e.canvasTarget.domElement,o=document.createElement("div");o.className="node-canvas-wrapper",o.style.position="relative",o.style.display="inline-block",o.style.width="140px",o.style.height="140px",o.style.touchAction="none";const a=document.createElement("button");a.className="node-canvas-detach-btn",a.title="View full size",a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>',a.onclick=c=>{c.stopPropagation(),this.splitActive&&this.stopSplitMode(),this.select.value=e.id,this.showNodeView(e.id),this.saveLastView()};const r=document.createElement("button");r.className="node-canvas-fullscreen-btn",r.title="Fullscreen view",r.innerHTML=Ne,r.onclick=c=>{c.stopPropagation(),this.splitActive&&this.splitCanvasData===e&&this.splitFullscreen?this.stopSplitMode():(this.splitFullscreen=!0,this.startSplitMode(e))};const l=document.createElement("button");l.className="node-canvas-split-btn",l.title="Interactive split screen",l.innerHTML=Ae,l.onclick=c=>{c.stopPropagation(),this.splitActive&&this.splitCanvasData===e&&!this.splitFullscreen?this.stopSplitMode():(this.splitFullscreen=!1,this.startSplitMode(e))},o.appendChild(n),o.appendChild(a),o.appendChild(r),o.appendChild(l),this.setupEventForwarding(n),e.domElement=n,e.wrapperElement=o,e.splitBtn=l,e.fullscreenBtn=r,t=new _(o,i),t.itemRow.children[1].style["justify-content"]="flex-start",this.itemLibrary.set(e.id,t)}return t}setupEventForwarding(e){e.style.touchAction="none";const t=o=>{const a=this.inspector.getRenderer();if(!a||!a.domElement)return;const r=a.domElement;this.isDraggingThumbnail=!0,this.activeSourceCanvas=e,this.activePointerIds.add(o.pointerId),this.forwardEvent(o,e,r)};e.addEventListener("pointerdown",t);const i=o=>{const a=this.inspector.getRenderer();!a||!a.domElement||(o.preventDefault(),o.stopPropagation(),this.forwardEvent(o,e,a.domElement))};e.addEventListener("wheel",i,{passive:!1});const n=o=>{const a=this.inspector.getRenderer();!a||!a.domElement||(o.stopPropagation(),o.type==="contextmenu"&&o.preventDefault(),this.forwardEvent(o,e,a.domElement))};e.addEventListener("click",n),e.addEventListener("dblclick",n),e.addEventListener("contextmenu",n)}forwardEvent(e,t,i){const n=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=(e.clientX-n.left)/n.width,r=(e.clientY-n.top)/n.height,l=o.left+a*o.width,c=o.top+r*o.height,h=l+window.scrollX,d=c+window.scrollY;let u;const m={bubbles:!0,cancelable:!0,view:window,clientX:l,clientY:c,screenX:l+window.screenX,screenY:c+window.screenY,pageX:h,pageY:d,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey,buttons:e.buttons,button:e.button};e instanceof WheelEvent?u=new WheelEvent(e.type,{...m,deltaX:e.deltaX,deltaY:e.deltaY,deltaZ:e.deltaZ,deltaMode:e.deltaMode}):window.PointerEvent&&e instanceof PointerEvent?u=new PointerEvent(e.type,{...m,pointerId:e.pointerId,width:e.width,height:e.height,pressure:e.pressure,tiltX:e.tiltX,tiltY:e.tiltY,pointerType:e.pointerType,isPrimary:e.isPrimary}):u=new MouseEvent(e.type,m),u.isForwarded=!0,i.dispatchEvent(u)}init(e){super.init(e);const t=()=>{const i=e.profiler.position,n=i==="top"||i==="bottom";this.setViewMode(n?"grid":"list")};e.profiler.addEventListener("resize",t),t()}setViewMode(e){this.nodeList&&(e==="grid"?this.nodeList.domElement.style.minWidth="0":this.nodeList.domElement.style.minWidth="400px",this.nodeList.setViewMode(e))}showListView(){if(this.activeFullNodeId){const e=Array.from(this.canvasNodes.values()).find(t=>String(t.id)===String(this.activeFullNodeId));e&&(e.wrapperElement.appendChild(e.domElement),e.domElement.style.width="",e.domElement.style.height="",e.canvasTarget.setSize(140,140),this.inspector.getRenderer().backend.delete(e.canvasTarget)),this.activeFullNodeId=null}this.scrollWrapper.style.display="",this.fullViewerContainer.style.display="none",this.backBtn.style.display="none"}showNodeView(e){this.activeFullNodeId&&String(this.activeFullNodeId)!==String(e)&&this.showListView();const t=Array.from(this.canvasNodes.values()).find(i=>String(i.id)===String(e));if(t){this.addNodeItem(t),this.activeFullNodeId=e,this.backBtn.style.display="flex",this.scrollWrapper.style.display="none",this.fullViewerContainer.style.display="flex",this.fullViewerContainer.appendChild(t.domElement),t.domElement.style.width="100%",t.domElement.style.height="100%";const i=this.fullViewerContainer.getBoundingClientRect(),n=i.width||this.content.clientWidth,o=i.height||this.content.clientHeight-38;t.canvasTarget.setSize(n,o),this.inspector.getRenderer().backend.delete(t.canvasTarget)}}get isActive(){return this.splitActive?!0:super.isActive}set isActive(e){super.isActive=e}startSplitMode(e){this.profiler&&this.profiler.panel.classList.contains("visible")&&this.profiler.togglePanel(),this.splitActive=!0,this.splitCanvasData=e,this.splitX=.5;const t=this.inspector.getRenderer(),i=t.domElement,n=i.getBoundingClientRect(),o=document.fullscreenElement||this.profiler.domElement,a=o.getBoundingClientRect(),r=n.left-a.left,l=n.top-a.top;if(this.splitCanvas||(this.splitCanvas=document.createElement("canvas"),this.splitCanvas.style.position="absolute",this.splitCanvas.style.pointerEvents="none",this.splitCanvas.style.zIndex="998",this.splitCanvasTarget=new it(this.splitCanvas),this.splitCanvasTarget.setPixelRatio(window.devicePixelRatio)),this.splitCanvas.style.left=`${r}px`,this.splitCanvas.style.top=`${l}px`,this.splitCanvas.style.width=`${n.width}px`,this.splitCanvas.style.height=`${n.height}px`,this.splitCanvasTarget.setSize(n.width,n.height),t.backend.delete(this.splitCanvasTarget),o.appendChild(this.splitCanvas),this.splitFullscreen)this.splitOverlay&&this.splitOverlay.parentElement&&this.splitOverlay.parentElement.removeChild(this.splitOverlay);else{if(!this.splitOverlay){const g=document.createElement("div");g.className="split-screen-overlay three-inspector";const f=document.createElement("div");f.className="split-screen-line",g.appendChild(f);let x=!1;const b=k=>{x=!0,f.classList.add("active"),k.preventDefault()},y=k=>{if(!x)return;const R=i.getBoundingClientRect(),L=k.clientX-R.left,G=Math.max(0,Math.min(1,L/R.width));this.splitX=G,f.style.left=`${G*100}%`,this.splitUniforms&&this.splitUniforms.splitX&&(this.splitUniforms.splitX.value=G)},S=()=>{x=!1,f.classList.remove("active")};f.addEventListener("pointerdown",b),window.addEventListener("pointermove",y),window.addEventListener("pointerup",S),this.splitOverlay=g,this.splitLine=f}this.splitOverlay.style.left=`${r}px`,this.splitOverlay.style.top=`${l}px`,this.splitOverlay.style.width=`${n.width}px`,this.splitOverlay.style.height=`${n.height}px`,this.splitLine.style.left="50%",o.appendChild(this.splitOverlay)}this.splitUniforms||(this.splitUniforms={splitX:P(.5),viewportWidth:P(n.width)}),this.splitUniforms.splitX.value=.5,this.splitUniforms.viewportWidth.value=n.width;const h=e.node.context({getUV:()=>pe}),u=Ve(F(K(h),1),ne,t.outputColorSpace).context({inspector:!0});let m;this.splitFullscreen?m=u:m=H(()=>(pe.x.lessThan(this.splitUniforms.splitX).discard(),u))(),this.splitMaterial&&this.splitMaterial.dispose(),this.splitMaterial=new V,this.splitMaterial.outputNode=m,this.splitMaterial.depthTest=!1,this.splitMaterial.depthWrite=!1,this.splitQuad?this.splitQuad.material=this.splitMaterial:this.splitQuad=new Ce(this.splitMaterial),this.updateSplitButtonsState()}stopSplitMode(){this.splitActive=!1,this.splitCanvasData=null,this.splitFullscreen=!1,this.splitOverlay&&this.splitOverlay.parentElement&&this.splitOverlay.parentElement.removeChild(this.splitOverlay),this.splitCanvas&&this.splitCanvas.parentElement&&this.splitCanvas.parentElement.removeChild(this.splitCanvas),this.updateSplitButtonsState()}updateSplitButtonsState(){this.splitActive?this.backBtn.style.display="":this.select.value==="list"?this.backBtn.style.display="none":this.backBtn.style.display="";for(const e of this.canvasNodes.values()){if(!e.splitBtn||!e.fullscreenBtn)continue;this.splitActive&&this.splitCanvasData===e?this.splitFullscreen?(e.fullscreenBtn.classList.add("active"),e.fullscreenBtn.innerHTML=lt,e.fullscreenBtn.title="Exit Fullscreen",e.splitBtn.classList.remove("active"),e.splitBtn.innerHTML=Ae,e.splitBtn.title="Interactive split screen"):(e.splitBtn.classList.add("active"),e.splitBtn.innerHTML=lt,e.splitBtn.title="Exit Split Screen",e.fullscreenBtn.classList.remove("active"),e.fullscreenBtn.innerHTML=Ne,e.fullscreenBtn.title="Fullscreen view"):(e.splitBtn.classList.remove("active"),e.splitBtn.innerHTML=Ae,e.splitBtn.title="Interactive split screen",e.fullscreenBtn.classList.remove("active"),e.fullscreenBtn.innerHTML=Ne,e.fullscreenBtn.title="Fullscreen view")}}getCanvasDataByNode(e,t){let i=this.canvasNodes.get(t);if(i===void 0){const n=document.createElement("canvas"),o=new it(n);o.setPixelRatio(window.devicePixelRatio),o.setSize(140,140);const a=t.id,{path:r,name:l}=lg(cg(t.getName()||"(unnamed)")),c=P(1),h=Z(1),d=t.context({getUV:f=>{const x=_g(pe,f,c),b=x.xy;return h.assign(x.z),b}});let u=F(K(d),1).mul(h);u=Ve(u,ne,e.outputColorSpace),u=u.context({inspector:!0});const m=new V;m.outputNode=u;const g=new Ce(m);g.name="Viewer - "+l,i={id:a,name:l,path:r,node:t,quad:g,canvasTarget:o,material:m,canvasAspect:c},this.canvasNodes.set(t,i)}return i}update(e){const t=e.getRenderer();if(this.splitActive){const c=t.domElement.getBoundingClientRect();if(c.width<=0||c.height<=0)return;const h=document.fullscreenElement||this.profiler.domElement,d=h.getBoundingClientRect(),u=c.left-d.left,m=c.top-d.top;this.splitCanvas.parentElement!==h&&h.appendChild(this.splitCanvas),this.splitOverlay&&!this.splitFullscreen&&this.splitOverlay.parentElement!==h&&h.appendChild(this.splitOverlay),this.splitCanvas.style.left=`${u}px`,this.splitCanvas.style.top=`${m}px`,this.splitCanvas.style.width=`${c.width}px`,this.splitCanvas.style.height=`${c.height}px`,this.splitOverlay&&!this.splitFullscreen&&(this.splitOverlay.style.left=`${u}px`,this.splitOverlay.style.top=`${m}px`,this.splitOverlay.style.width=`${c.width}px`,this.splitOverlay.style.height=`${c.height}px`),(this.splitCanvasTarget.width!==c.width||this.splitCanvasTarget.height!==c.height)&&(this.splitCanvasTarget.setSize(c.width,c.height),this.splitUniforms&&this.splitUniforms.viewportWidth&&(this.splitUniforms.viewportWidth.value=c.width),t.backend.delete(this.splitCanvasTarget));const g=t.getCanvasTarget(),f=t.getClearColor(new we),x=t.getClearAlpha(),b=W.resetRendererState(t);t.toneMapping=ne,t.outputColorSpace=De,t.setCanvasTarget(this.splitCanvasTarget),t.setClearColor(0,0),this.splitQuad.render(t),t.setCanvasTarget(g),t.setClearColor(f,x),W.restoreRendererState(t,b)}const i=e.getNodes();if(i.length>0){if(!t.backend.isWebGPUBackend)return;this.isVisible||this.show()}if(!this.isActive)return;const n=i.map(l=>this.getCanvasDataByNode(t,l));let o=n.length!==this.currentDataList.length;if(!o){for(let l=0;l<n.length;l++)if(n[l].id!==this.currentDataList[l].id){o=!0;break}}if(o){const l=this.select.value;for(;this.select.options.length>1;)this.select.remove(1);for(const h of n){const d=document.createElement("option");d.value=h.id,d.textContent=h.path?`${h.path} / ${h.name}`:h.name,this.select.appendChild(d)}let c=!1;if(this.pendingRestoreView){const h=me("viewerLastView");if(h!=="list"){for(let d=0;d<this.select.options.length;d++)if(this.select.options[d].textContent===h){this.select.selectedIndex=d;const u=this.select.options[d].value;this.showNodeView(u),c=!0,this.pendingRestoreView=!1;break}}else this.pendingRestoreView=!1}if(!c){let h=!1;for(let d=0;d<this.select.options.length;d++)if(this.select.options[d].value===l){this.select.selectedIndex=d,h=!0;break}h||(this.select.value="list",this.showListView())}}if(this.activeFullNodeId){const l=n.find(c=>String(c.id)===String(this.activeFullNodeId));if(l){const c=this.fullViewerContainer.getBoundingClientRect(),h=c.width||this.content.clientWidth,d=c.height||this.content.clientHeight-38;(l.canvasTarget.domElement.width!==h||l.canvasTarget.domElement.height!==d)&&(l.canvasTarget.setSize(h,d),t.backend.delete(l.canvasTarget))}}const a=[...this.currentDataList];for(const l of a)if(this.itemLibrary.has(l.id)&&n.indexOf(l)===-1){const c=this.itemLibrary.get(l.id),h=c.parent;h.remove(c),this.folderLibrary.has(h.data[0])&&h.children.length===0&&(h.parent.remove(h),this.folderLibrary.delete(h.data[0])),this.itemLibrary.delete(l.id)}const r={};for(const l of n){const c=this.addNodeItem(l),h=t.getCanvasTarget(),d=l.path;if(d){const f=this.getFolder(d);r[d]===void 0&&(r[d]=0),(f.parent===null||c.parent!==f||f.children.indexOf(c)!==r[d])&&f.add(c),r[d]++}else c.parent||this.nodes.add(c);const u=[],m=h.getDrawingBufferSize(yg);l.node.traverse(f=>{if(f.isRTTNode&&f.autoResize===!0){const x=f.width,b=f.height;f.width=m.width,f.height=m.height,f.setSize(m.width,m.height),u.push({node:f,oldWidth:x,oldHeight:b})}});const g=W.resetRendererState(t);t.toneMapping=ne,t.outputColorSpace=De,t.setCanvasTarget(l.canvasTarget),l.canvasAspect&&(l.canvasAspect.value=l.canvasTarget.domElement.width/l.canvasTarget.domElement.height),l.quad.render(t),t.setCanvasTarget(h),W.restoreRendererState(t,g);for(const f of u)f.node.width=f.oldWidth,f.node.height=f.oldHeight}this.currentDataList=n}setActive(e){super.setActive(e)}saveLastView(){if(this.select.value==="list")ae("viewerLastView","list");else{const t=this.select.options[this.select.selectedIndex];t&&ae("viewerLastView",t.textContent)}}dispose(){this.splitActive&&this.stopSplitMode(),this.splitCanvas&&(this.splitCanvas.parentElement&&this.splitCanvas.parentElement.removeChild(this.splitCanvas),this.splitCanvas=null),this.splitCanvasTarget&&(this.splitCanvasTarget.dispose(),this.splitCanvasTarget=null),this.splitMaterial&&(this.splitMaterial.dispose(),this.splitMaterial=null);for(const e of this.canvasNodes.values())e.canvasTarget.dispose(),e.material.dispose();this.canvasNodes.clear(),super.dispose()}}const ct=500,ht=60;class Tg extends le{constructor(e={}){super("Timeline",e),this.content.style.overflow="hidden",this.isRecording=!1,this.frames=[],this.baseTriangles=0,this.currentFrame=null,this.isHierarchicalView=!0,this.activeBlocks=new Map,this.domPool=[],this.originalBackend=null,this.originalMethods=new Map,this.renderer=null,this.graph=new Le(ct),this.graph.addLine("fps","var( --color-fps )"),this.graph.addLine("calls","var( --color-call )"),this.graph.addLine("triangles","var( --color-red )"),this.buildHeader(),this.buildUI(),window.addEventListener("resize",()=>{this.isActive&&!this.isRecording&&this.frames.length>0&&this.renderSlider()})}init(e){super.init(e),this.profiler.addEventListener("resize",()=>{this.isActive&&!this.isRecording&&this.frames.length>0&&this.renderSlider()})}setActive(e){super.setActive(e),e&&!this.isRecording&&this.frames.length>0&&this.renderSlider()}buildHeader(){const e=document.createElement("div");e.className="toolbar",this.recordButton=document.createElement("button"),this.recordButton.className="console-copy-button",this.recordButton.title="Record",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4" fill="currentColor"></circle></svg>',this.recordButton.style.padding="0 10px",this.recordButton.style.lineHeight="24px",this.recordButton.style.display="flex",this.recordButton.style.alignItems="center",this.recordButton.addEventListener("click",()=>this.toggleRecording());const t=document.createElement("button");t.className="console-copy-button",t.title="Clear",t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',t.style.padding="0 10px",t.style.lineHeight="24px",t.style.display="flex",t.style.alignItems="center",t.addEventListener("click",()=>this.clear()),this.viewModeSelect=document.createElement("select"),this.viewModeSelect.className="select",this.viewModeSelect.style.width="120px",this.viewModeSelect.style.marginRight="10px";const i=document.createElement("option");i.value="hierarchy",i.textContent="Hierarchy",this.viewModeSelect.appendChild(i);const n=document.createElement("option");n.value="counts",n.textContent="Count",this.viewModeSelect.appendChild(n),this.viewModeSelect.value=this.isHierarchicalView?"hierarchy":"counts",this.viewModeSelect.addEventListener("change",()=>{this.isHierarchicalView=this.viewModeSelect.value==="hierarchy",this.selectedFrameIndex!==void 0&&this.selectedFrameIndex!==-1&&this.selectFrame(this.selectedFrameIndex)}),this.recordRefreshButton=document.createElement("button"),this.recordRefreshButton.className="console-copy-button",this.recordRefreshButton.title="Refresh & Record",this.recordRefreshButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>',this.recordRefreshButton.style.padding="0 10px",this.recordRefreshButton.style.lineHeight="24px",this.recordRefreshButton.style.display="flex",this.recordRefreshButton.style.alignItems="center",this.recordRefreshButton.addEventListener("click",()=>{const r=me("timeline");r.recording=!0,ae("timeline",r),window.location.reload()}),this.exportButton=document.createElement("button"),this.exportButton.className="console-copy-button",this.exportButton.title="Export",this.exportButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',this.exportButton.style.padding="0 10px",this.exportButton.style.lineHeight="24px",this.exportButton.style.display="flex",this.exportButton.style.alignItems="center",this.exportButton.addEventListener("click",()=>this.exportData());const o=document.createElement("div");o.className="console-buttons-group",o.appendChild(this.recordButton),o.appendChild(this.recordRefreshButton),o.appendChild(this.exportButton),o.appendChild(t);const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.color="var(--text-primary)",a.style.alignSelf="center",this.frameInfo=document.createElement("span"),this.frameInfo.style.display="inline-flex",this.frameInfo.style.alignItems="center",this.frameInfo.style.marginLeft="5px",this.frameInfo.style.fontFamily="monospace",this.frameInfo.style.color="var(--text-secondary)",this.frameInfo.style.fontSize="12px",a.appendChild(this.viewModeSelect),a.appendChild(this.frameInfo),e.appendChild(a),e.appendChild(o),this.content.appendChild(e)}buildUI(){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.flex="1",e.style.minHeight="0",e.style.marginTop="10px",e.style.width="100%";const t=document.createElement("div");t.style.height="60px",t.style.minHeight="60px",t.style.borderBottom="1px solid var(--border-color)",t.style.backgroundColor="var(--background-color)",this.graphSlider=document.createElement("div"),this.graphSlider.style.height="100%",this.graphSlider.style.margin="0 10px",this.graphSlider.style.position="relative",this.graphSlider.style.cursor="crosshair",this.graphSlider.style.touchAction="none",t.appendChild(this.graphSlider),this.graph.domElement.style.width="0",this.graph.domElement.style.minWidth="100%",this.graph.domElement.style.height="100%",this.graphSlider.appendChild(this.graph.domElement),this.hoverIndicator=document.createElement("div"),this.hoverIndicator.style.position="absolute",this.hoverIndicator.style.top="0",this.hoverIndicator.style.bottom="0",this.hoverIndicator.style.width="1px",this.hoverIndicator.style.backgroundColor="rgba(255, 255, 255, 0.3)",this.hoverIndicator.style.pointerEvents="none",this.hoverIndicator.style.display="none",this.hoverIndicator.style.zIndex="9",this.hoverIndicator.style.transform="translateX(-50%)",this.graphSlider.appendChild(this.hoverIndicator),this.playhead=document.createElement("div"),this.playhead.style.position="absolute",this.playhead.style.top="0",this.playhead.style.bottom="0",this.playhead.style.width="2px",this.playhead.style.backgroundColor="var(--color-red)",this.playhead.style.boxShadow="0 0 4px rgba(255,0,0,0.5)",this.playhead.style.pointerEvents="none",this.playhead.style.display="none",this.playhead.style.zIndex="10",this.playhead.style.transform="translateX(-50%)",this.graphSlider.appendChild(this.playhead);const i=document.createElement("div");i.style.position="absolute",i.style.top="0",i.style.left="50%",i.style.transform="translate(-50%, 0)",i.style.width="0",i.style.height="0",i.style.borderLeft="6px solid transparent",i.style.borderRight="6px solid transparent",i.style.borderTop="8px solid var(--color-red)",this.playhead.appendChild(i),this.graphSlider.tabIndex=0,this.graphSlider.style.outline="none";let n=!1;const o=r=>{if(this.isRecording||this.frames.length===0)return;const l=this.graphSlider.getBoundingClientRect();let c=r.clientX-l.left;c=Math.max(0,Math.min(c,l.width)),this.fixedScreenX=c;const h=this.graph.lines.calls.points.length;if(h===0)return;const d=l.width/(this.graph.maxPoints-1),u=l.width-(h-1)*d;let m=Math.round((c-u)/d);m=Math.max(0,Math.min(m,h-1)),m>=h-2?this.isTrackingLatest=!0:this.isTrackingLatest=!1;let g=m;this.frames.length>h&&(g+=this.frames.length-h),this.playhead.style.display="block",this.selectFrame(g)};this.graphSlider.addEventListener("pointerdown",r=>{this.isRecording||(n=!0,this.isManualScrubbing=!0,this.graphSlider.focus(),o(r))}),this.graphSlider.addEventListener("pointerenter",()=>{this.frames.length>0&&!this.isRecording&&(this.hoverIndicator.style.display="block")}),this.graphSlider.addEventListener("pointerleave",()=>{this.hoverIndicator.style.display="none"}),this.graphSlider.addEventListener("pointermove",r=>{if(this.frames.length===0||this.isRecording)return;const l=this.graphSlider.getBoundingClientRect();let c=r.clientX-l.left;c=Math.max(0,Math.min(c,l.width));const h=this.graph.lines.calls.points.length;if(h>0){const d=l.width/(this.graph.maxPoints-1),u=l.width-(h-1)*d;let m=Math.round((c-u)/d);m=Math.max(0,Math.min(m,h-1));let g=u+m*d;g=Math.max(1,Math.min(g,l.width-1)),this.hoverIndicator.style.left=g+"px"}else{const d=Math.max(1,Math.min(c,l.width-1));this.hoverIndicator.style.left=d+"px"}}),this.graphSlider.addEventListener("keydown",r=>{if(this.frames.length===0||this.isRecording)return;let l=this.selectedFrameIndex;if(r.key==="ArrowLeft"?(l=Math.max(0,this.selectedFrameIndex-1),r.preventDefault()):r.key==="ArrowRight"&&(l=Math.min(this.frames.length-1,this.selectedFrameIndex+1),r.preventDefault()),l!==this.selectedFrameIndex){this.selectFrame(l);const c=this.graph.lines.calls.points.length;if(c>0){let h=l;this.frames.length>c&&(h=l-(this.frames.length-c)),h>=c-2?this.isTrackingLatest=!0:this.isTrackingLatest=!1;const d=this.graphSlider.getBoundingClientRect(),u=d.width/(this.graph.maxPoints-1),m=d.width-(c-1)*u;this.fixedScreenX=m+h*u}}}),window.addEventListener("pointermove",r=>{if(n){o(r);const l=this.graphSlider.getBoundingClientRect();let c=r.clientX-l.left;c=Math.max(0,Math.min(c,l.width));const h=this.graph.lines.calls.points.length;if(h>0){const d=l.width/(this.graph.maxPoints-1),u=l.width-(h-1)*d;let m=Math.round((c-u)/d);m=Math.max(0,Math.min(m,h-1));let g=u+m*d;g=Math.max(1,Math.min(g,l.width-1)),this.hoverIndicator.style.left=g+"px"}else{const d=Math.max(1,Math.min(c,l.width-1));this.hoverIndicator.style.left=d+"px"}}}),window.addEventListener("pointerup",()=>{n=!1,this.isManualScrubbing=!1}),e.appendChild(t);const a=document.createElement("div");a.style.flex="1",a.style.display="flex",a.style.flexDirection="column",a.style.overflow="hidden",this.timelineTrack=document.createElement("div"),this.timelineTrack.style.flex="1",this.timelineTrack.style.overflowY="auto",this.timelineTrack.style.margin="10px",this.timelineTrack.style.marginTop="8px",this.timelineTrack.style.backgroundColor="var(--background-color)",this.timelineTrack.style.position="relative",a.appendChild(this.timelineTrack),this.timelineContent=document.createElement("div"),this.timelineContent.style.position="relative",this.timelineContent.style.width="100%",this.timelineTrack.appendChild(this.timelineContent),this.timelineTrack.addEventListener("scroll",()=>{!this.isRecording&&this.frames.length>0&&this.updateVisibleBlocks()}),e.appendChild(a),this.content.appendChild(e)}setRenderer(e){this.renderer=e;const t=me("timeline");t.recording&&(t.recording=!1,ae("timeline",t),this.toggleRecording())}toggleRecording(){if(!this.renderer){console.warn("Timeline: No renderer defined.");return}this.isRecording=!this.isRecording,this.isRecording?(this.recordButton.title="Stop",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>',this.recordButton.style.color="var(--color-red)",this.startRecording()):(this.recordButton.title="Record",this.recordButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4" fill="currentColor"></circle></svg>',this.recordButton.style.color="",this.stopRecording(),this.renderSlider())}startRecording(){this.frames=[],this.currentFrame=null,this.selectedFrameIndex=-1,this.fixedScreenX=0,this.isTrackingLatest=!0,this.isManualScrubbing=!1,this.clear(),this.frameInfo.textContent="Recording...";const e=this.renderer.backend,t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)).filter(i=>i!=="constructor");for(const i of t){const n=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),i);if(n&&(n.get||n.set))continue;const o=e[i];typeof o=="function"&&typeof i=="string"&&(this.originalMethods.set(i,o),e[i]=(...a)=>{if(i.toLowerCase().includes("timestamp")||i.startsWith("get")||i.startsWith("set")||i.startsWith("has")||i.startsWith("_")||i.startsWith("needs"))return o.apply(e,a);const r=this.renderer.info.frame;if(!this.currentFrame||this.currentFrame.id!==r){if(this.currentFrame){this.currentFrame.fps=this.renderer.inspector?this.renderer.inspector.fps:0,isFinite(this.currentFrame.fps)||(this.currentFrame.fps=0);const h=this.currentFrame.triangles||0;if(h>this.baseTriangles){const u=this.baseTriangles;if(this.baseTriangles=h,u>0){const m=u/this.baseTriangles,g=this.graph.lines.triangles.points;for(let f=0;f<g.length;f++)g[f]*=m}}const d=this.baseTriangles>0?h/this.baseTriangles*ht:0;this.graph.addPoint("calls",this.currentFrame.calls.length),this.graph.addPoint("fps",this.currentFrame.fps),this.graph.addPoint("triangles",d),this.graph.update()}this.currentFrame={id:r,calls:[],fps:0,triangles:0},this.frames.push(this.currentFrame),this.frames.length>ct&&this.frames.shift()}const l={method:i,target:a[0]},c=this.getCallDetail(i,a);return c&&(l.details=c,c.triangles!==void 0&&(this.currentFrame.triangles+=c.triangles)),this.currentFrame.calls.push(l),o.apply(e,a)})}}stopRecording(){if(this.originalMethods.size>0){const e=this.renderer.backend;for(const[t,i]of this.originalMethods.entries())e[t]=i;this.originalMethods.clear(),this.currentFrame&&(this.currentFrame.fps=this.renderer.inspector?this.renderer.inspector.fps:0)}}clear(){this.frames=[],this.clearActiveBlocks(),this.timelineContent.innerHTML="",this.timelineContent.style.height="0px",this.playhead.style.display="none",this.frameInfo.textContent="",this.baseTriangles=0,this.graph.lines.calls.points=[],this.graph.lines.fps.points=[],this.graph.lines.triangles.points=[],this.graph.resetLimit(),this.graph.update()}exportData(){if(this.frames.length===0)return;const e=JSON.stringify(this.frames,null,"	"),t=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(t),n=document.createElement("a");n.href=i,n.download="threejs-timeline.json",n.click(),URL.revokeObjectURL(i)}getRenderTargetDetails(e){const t=e.textures,i=[],n=r=>{switch(r.type){case mi:case ui:return"8";case pi:case di:case ve:case hi:case ci:return"16";case li:case ai:case ft:case ri:case oi:case ni:return"32";default:return"?"}},o=r=>{switch(r.format){case ki:return"a";case Ti:case Ci:return"r";case _i:case yi:return"rg";case wi:case vi:return"rgb";case xi:return"depth";case bi:return"depth-stencil";case fi:case gi:default:return"rgba"}};for(let r=0;r<t.length;r++){const l=t[r],c=n(l),h=o(l);let d=`[${r}]`;l.name&&!(l.isDepthTexture&&l.name==="depth")&&(d+=` ${l.name}`),d+=` ${h} ${c} bpc`,i.push(d)}const a={target:e.name||"RenderTarget",[`attachments(${t.length})`]:`
`+i.join(`
`)};return e.depthTexture&&(a.depth=`${n(e.depthTexture)} bpc`),a}getCallDetail(e,t){switch(e){case"draw":{const i=t[0],n={object:i.object.name||i.object.type,material:i.material.name||i.material.type,geometry:i.geometry.name||i.geometry.type};if(i.getDrawParameters){const o=i.getDrawParameters();o&&(i.object.isMesh||i.object.isSprite)&&(n.triangles=o.vertexCount/3,i.object.count>1&&(n.instance=i.object.count,n["triangles per instance"]=n.triangles,n.triangles*=n.instance))}return n}case"beginRender":{const i=t[0],n={scene:this.renderer.inspector.currentRender.name||"unknown",camera:i.camera.name||i.camera.type};return i.renderTarget&&!i.renderTarget.isPostProcessingRenderTarget?Object.assign(n,this.getRenderTargetDetails(i.renderTarget)):n.target="CanvasTarget",n}case"beginCompute":return{compute:this.renderer.inspector.currentCompute.name||"unknown"};case"compute":{const i=t[1],n=t[2],o=t[4]||i.dispatchSize||i.count,a=i.name||i.type||"unknown";let r=0;n&&(r=n.length);let l;return o.isIndirectStorageBufferAttribute?l="indirect":Array.isArray(o)?l=o.join(", "):l=o,{node:a,bindings:r,dispatch:l}}case"updateBinding":return{group:t[0].name||"unknown"};case"clear":{const i=t[3],n={color:t[0],depth:t[1],stencil:t[2]};if(i.renderTarget&&!i.renderTarget.isPostProcessingRenderTarget){const o=this.getRenderTargetDetails(i.renderTarget);o.depth&&(o["depth texture"]=o.depth,delete o.depth),Object.assign(n,o)}else n.target="CanvasTarget";return n}case"updateViewport":{const i=t[0],{x:n,y:o,width:a,height:r}=i.viewportValue;return{x:n,y:o,width:a,height:r}}case"updateScissor":{const i=t[0],{x:n,y:o,width:a,height:r}=i.scissorValue;return{x:n,y:o,width:a,height:r}}case"createProgram":case"destroyProgram":{const i=t[0];return{stage:i.stage,name:i.name||"unknown"}}case"createRenderPipeline":{const i=t[0];return{object:i.object&&(i.object.name||i.object.type)||"unknown",material:i.material&&(i.material.name||i.material.type)||"unknown"}}case"createComputePipeline":case"destroyComputePipeline":return{name:t[0].name||"unknown"};case"createBindings":case"updateBindings":{const i=t[0];return{group:i.name||"unknown",count:i.bindings.length}}case"createUniformBuffer":case"destroyUniformBuffer":{const i=t[0],n={group:i.groupNode.name||"unknown",size:i.byteLength+" bytes"};return i.name!==n.group&&(n.name=i.name),n}case"createNodeBuilder":{const i=t[0],n={object:i.name||i.type||"unknown"};return i.material&&(n.material=i.material.name||i.material.type||"unknown"),n}case"createAttribute":case"createIndexAttribute":case"createStorageAttribute":case"destroyAttribute":case"destroyIndexAttribute":case"destroyStorageAttribute":{const i=t[0],n={};return i.name&&(n.name=i.name),i.count!==void 0&&(n.count=i.count),i.itemSize!==void 0&&(n.itemSize=i.itemSize),n}case"copyFramebufferToTexture":{const i=t[0],n=t[2];return{target:this.getTextureName(i),width:n.z,height:n.w}}case"copyTextureToTexture":{const i=t[0],n=t[1];return{source:this.getTextureName(i),destination:this.getTextureName(n)}}case"updateSampler":{const i=t[0];return{magFilter:this.getTextureFilterName(i.magFilter),minFilter:this.getTextureFilterName(i.minFilter),wrapS:this.getTextureWrapName(i.wrapS),wrapT:this.getTextureWrapName(i.wrapT),anisotropy:i.anisotropy}}case"updateTexture":case"generateMipmaps":case"createTexture":case"destroyTexture":{const i=t[0],o={texture:this.getTextureName(i)};return i.image&&(i.image.width!==void 0&&(o.width=i.image.width),i.image.height!==void 0&&(o.height=i.image.height)),o}}return null}getTextureName(e){if(e.name)return e.name;const t=["isFramebufferTexture","isDepthTexture","isDataArrayTexture","isData3DTexture","isDataTexture","isCompressedArrayTexture","isCompressedTexture","isCubeTexture","isVideoTexture","isCanvasTexture","isTexture"];for(const i of t)if(e[i])return i.replace("is","");return"Texture"}getTextureFilterName(e){return{1003:"Nearest",1004:"NearestMipmapNearest",1005:"NearestMipmapLinear",1006:"Linear",1007:"LinearMipmapNearest",1008:"LinearMipmapLinear"}[e]||e}getTextureWrapName(e){return{1e3:"Repeat",1001:"ClampToEdge",1002:"MirroredRepeat"}[e]||e}formatDetails(e){const t=[];for(const i in e)e[i]!==void 0&&t.push(`<span class="timeline-detail-key">${i}:</span> <span class="timeline-detail-value">${e[i]}</span>`);return t.length===0?"":`<span class="timeline-detail-block">{ ${t.join('<span class="timeline-detail-sep">, </span>')} }</span>`}renderSlider(){if(this.frames.length===0){this.playhead.style.display="none",this.frameInfo.textContent="";return}this.graph.lines.calls.points=[],this.graph.lines.fps.points=[],this.graph.lines.triangles.points=[],this.graph.resetLimit();let e=this.frames;e.length>this.graph.maxPoints&&(e=e.slice(-this.graph.maxPoints),this.frames=e);let t=0;for(let n=0;n<e.length;n++){const o=e[n].triangles||0;o>t&&(t=o)}for(let n=0;n<e.length;n++){const o=e[n].triangles||0,a=t>0?o/t*ht:0;this.graph.addPoint("calls",e[n].calls.length),this.graph.addPoint("fps",e[n].fps||0),this.graph.addPoint("triangles",a)}this.graph.update(),this.playhead.style.display="block";let i=0;this.selectedFrameIndex!==-1&&this.selectedFrameIndex<this.frames.length?i=this.selectedFrameIndex:this.frames.length>0&&(i=this.frames.length-1),this.selectFrame(i)}selectFrame(e){if(this.isRecording||e<0||e>=this.frames.length)return;this.selectedFrameIndex=e;const t=this.frames[e];this.renderTimelineTrack(t);const n=this.content.offsetWidth<800,o=n?"":"Frame: ",a=n?"":" FPS",r=n?"":" calls",l=n?"":" triangles",c=(g,f)=>`<span class="timeline-info-group"><span class="timeline-info-dot ${g}"></span>${f}</span>`,h=Math.max(this.baseTriangles,t.triangles||0),d=n?t.triangles||0:(t.triangles||0)+" / "+h+l;this.frameInfo.innerHTML=o+t.id+c("fps",(t.fps||0).toFixed(1)+a)+c("call",t.calls.length+r)+c("red",d);const u=this.graphSlider.getBoundingClientRect(),m=this.graph.lines.calls.points.length;if(m>0){const g=u.width/(this.graph.maxPoints-1);let f=e;this.frames.length>m&&(f=e-(this.frames.length-m));let b=u.width-(m-1)*g+f*g;b=Math.max(1,Math.min(b,u.width-1)),this.playhead.style.left=b+"px",this.playhead.style.display="block"}}createBlock(){const e=document.createElement("div");return e.style.display="flex",e.style.alignItems="center",e.style.padding="4px 8px",e.style.backgroundColor="rgba(255, 255, 255, 0.03)",e.style.fontFamily="monospace",e.style.fontSize="12px",e.style.color="var(--text-primary)",e.style.overflow="hidden",e.style.position="absolute",e.style.left="0",e.style.right="0",e.style.height="24px",e.style.boxSizing="border-box",e.arrow=document.createElement("span"),e.arrow.style.fontSize="10px",e.arrow.style.marginRight="8px",e.arrow.style.cursor="pointer",e.arrow.style.width="35px",e.arrow.style.textAlign="center",e.arrow.style.flexShrink="0",e.arrow.style.whiteSpace="nowrap",e.appendChild(e.arrow),e.titleSpan=document.createElement("span"),e.titleSpan.style.flex="1",e.titleSpan.style.minWidth="0",e.titleSpan.style.overflow="hidden",e.titleSpan.style.textOverflow="ellipsis",e.titleSpan.style.whiteSpace="nowrap",e.appendChild(e.titleSpan),e.addEventListener("click",t=>{e._groupId&&(t.stopPropagation(),this.collapsedGroups.has(e._groupId)?this.collapsedGroups.delete(e._groupId):this.collapsedGroups.add(e._groupId),this.renderTimelineTrack(this.frames[this.selectedFrameIndex]))}),e}clearActiveBlocks(){if(this.activeBlocks){for(const e of this.activeBlocks.values())e.remove(),this.domPool.push(e);this.activeBlocks.clear()}}updateVisibleBlocks(){if(!this.flatList||this.flatList.length===0){this.clearActiveBlocks();return}const e=26,t=5,i=this.timelineTrack.scrollTop,n=this.timelineTrack.clientHeight;let o=Math.floor(i/e)-t,a=Math.ceil((i+n)/e)+t;o=Math.max(0,o),a=Math.min(this.flatList.length-1,a);const r=new Map;for(const[l,c]of this.activeBlocks.entries())l<o||l>a?(c.remove(),this.domPool.push(c)):r.set(l,c);this.activeBlocks=r;for(let l=o;l<=a;l++){let c=this.activeBlocks.get(l);c||(c=this.domPool.pop()||this.createBlock(),this.timelineContent.appendChild(c),this.activeBlocks.set(l,c));const h=this.flatList[l],d=h.call;c.style.top=l*e+"px",c.style.marginLeft=h.indent*24+"px",c.style.borderLeft="4px solid "+this.getColorForMethod(d.method),c._groupId=h.groupId;const u=c.querySelector(":scope > .info-icon");u&&u.remove(),c.titleSpan.textContent="";const m=document.createElement("span");if(m.textContent=d.method,c.titleSpan.appendChild(m),d.details){let x=`### ${d.method}
`;for(const y in d.details)d.details[y]!==void 0&&(x+=`**${y}**: ${d.details[y]}
`);const b=Bt(c.titleSpan,x);b.style.flexShrink="0",b.style.marginLeft="6px",b.style.display="inline-flex",b.style.verticalAlign="middle"}const g=document.createElement("span");let f=d.formatedDetails?d.formatedDetails:"";d.count>1&&(f+=` <span class="timeline-call-count">( ${d.count} )</span>`),f&&(g.innerHTML=f,c.titleSpan.appendChild(g)),h.groupId?(c.style.cursor="pointer",c.arrow.style.display="inline-block",c.arrow.textContent=h.isCollapsed?"[ + ]":"[ - ]"):(c.style.cursor="default",c.arrow.style.display="none")}}renderTimelineTrack(e){if(this.isRecording)return;if(this.flatList=[],!e||e.calls.length===0){this.clearActiveBlocks(),this.timelineContent.innerHTML="",this.timelineContent.style.height="0px";return}if(this.collapsedGroups||(this.collapsedGroups=new Set),this.isHierarchicalView){const i=[];let n=null;for(let l=0;l<e.calls.length;l++){const c=e.calls[l],h=c.method.startsWith("begin")||c.method.startsWith("finish"),d=c.details?this.formatDetails(c.details):"";n&&n.method===c.method&&n.formatedDetails===d&&!h?n.count++:(n={method:c.method,count:1,formatedDetails:d,target:c.target,details:c.details},i.push(n))}let o=0;const a=[{isCollapsed:!1,id:"",beginCount:0}],r=new WeakMap;for(let l=0;l<i.length;l++){const c=i[l];let h=0;c.target&&typeof c.target=="object"&&(h=r.get(c.target)||0,r.set(c.target,h+1));const d=a[a.length-1];let u=null,m=!1;if(c.method.startsWith("begin")){const g=d.beginCount++;u=d.id+"/"+c.method+"-"+g,m=this.collapsedGroups.has(u)}d.isCollapsed||this.flatList.push({call:c,indent:o,groupId:u,isCollapsed:m,instanceIndex:h}),c.method.startsWith("begin")?(o++,a.push({isCollapsed:d.isCollapsed||m,id:u,beginCount:0})):c.method.startsWith("finish")&&(o=Math.max(0,o-1),a.pop())}}else{const i={};for(let o=0;o<e.calls.length;o++){const a=e.calls[o].method;a.startsWith("finish")||(i[a]=(i[a]||0)+1)}const n=Object.keys(i).map(o=>({method:o,count:i[o]}));n.sort((o,a)=>a.count-o.count);for(let o=0;o<n.length;o++){const a=n[o];this.flatList.push({call:a,indent:0,groupId:null,isCollapsed:!1,instanceIndex:0})}}const t=26;this.timelineContent.style.height=this.flatList.length*t+"px",this.updateVisibleBlocks()}getColorForMethod(e){return e.startsWith("begin")?"var(--color-green)":e.startsWith("finish")||e.startsWith("destroy")?"var(--color-red)":e.startsWith("draw")||e.startsWith("compute")||e.startsWith("create")||e.startsWith("generate")?"var(--color-yellow)":"var(--text-secondary)"}}class kg extends og{constructor(e={}){super();const{nonce:t=null}=e;this.nonce=t;const i=new ag(this,e);i.addEventListener("resize",d=>this.dispatchEvent(d)),i.addEventListener("orientationchange",d=>this.dispatchEvent(d)),i.addEventListener("layoutchange",d=>this.dispatchEvent(d));const n=new Rt({builtin:!0,icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>'});n.hide(),i.addTab(n);const o=new Cg;o.hide(),i.addTab(o);const a=new hg;i.addTab(a);const r=new dg;i.addTab(r);const l=new Tg;i.addTab(l);const c=new pg;i.addTab(c);const h=new wg;i.addTab(h),i.loadLayout(),i.activeTabId||i.setActiveTab(a.id),this.statsData=new Map,this.profiler=i,this.performance=a,this.memory=r,this.console=c,this.parameters=n,this.viewer=o,this.timeline=l,this.settings=h,this.once={},this.extensionsData=new WeakMap,this.previousConsoleFunction=null,this._domObserver=null,this.displayCycle={text:{needsUpdate:!1,duration:.25,time:0},graph:{needsUpdate:!1,duration:.02,time:0},toggleGraph:{needsUpdate:!1,duration:.02,time:0}}}get domElement(){return this.profiler.domElement}isVertical(){return this.profiler?this.profiler.isVertical():!1}onExtension(e,t){const i=n=>{n.name===e&&(t(n.tab),this.settings.removeEventListener("extensionadded",i))};return this.settings.extensions[e]&&this.settings.extensions[e].loaded?t(this.settings.extensions[e]):this.settings.addEventListener("extensionadded",i),this}hide(){this.profiler.hide()}show(){this.profiler.show()}setVisible(e){return this.domElement.style.display=e?"":"none",this}getVisible(){return this.domElement.style.display!=="none"}getSize(){return this.profiler.getSize()}setActiveTab(e){return this.profiler.setActiveTab(e.id),this}setHorizontalAlign(e){return this.profiler.setHorizontalAlign(e),this}setVerticalAlign(e){return this.profiler.setVerticalAlign(e),this}addTab(e){return this.profiler.addTab(e),this}removeTab(e){return e.dispose(),this.profiler.removeTab(e),this}setActiveExtension(e,t){return this.settings.setActiveExtension(e,t),this}resolveConsoleOnce(e,t){const i=e+t;this.once[i]!==!0&&(this.resolveConsole(e,t),this.once[i]=!0)}resolveConsole(e,t,i=null){switch(e){case"log":this.console.addMessage("info",t),console.log(t);break;case"warn":this.console.addMessage("warn",t),i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t);break;case"error":this.console.addMessage("error",t),i&&i.isStackTrace?console.error(i.getError(t)):console.error(t);break}}setRenderer(e){if(super.setRenderer(e),e!==null){const t=Ei();this.previousConsoleFunction=t,st((i,n,...o)=>{t&&t(i,n,...o),this.resolveConsole(i,n,...o)}),this.isAvailable&&((async()=>{e.hasInitialized()===!1&&await e.init(),e.backend.trackTimestamp=!0,e.hasFeature("timestamp-query")!==!0&&this.console.addMessage("error","THREE.Inspector: GPU Timestamp Queries not available.");let n=`THREE.WebGPURenderer: ${Xe} [ "`;e.backend.isWebGPUBackend?n+="WebGPU":e.backend.isWebGLBackend&&(n+="WebGL2"),n+='" ]',this.console.addMessage("info",n);const o=this.domElement;o.parentElement===null&&(e.domElement.parentElement!==null?e.domElement.parentElement.appendChild(o):(this._domObserver!==null&&this._domObserver.disconnect(),this._domObserver=new MutationObserver(()=>{e.domElement&&e.domElement.parentElement!==null&&(e.domElement.parentElement.appendChild(o),this._domObserver!==null&&(this._domObserver.disconnect(),this._domObserver=null))}),this._domObserver.observe(document.body||document.documentElement,{childList:!0,subtree:!0})))})(),this.timeline.setRenderer(e))}else this.previousConsoleFunction&&(st(this.previousConsoleFunction),this.previousConsoleFunction=void 0),this._domObserver!==null&&(this._domObserver.disconnect(),this._domObserver=null),this.profiler.dispose(),this.statsData.clear(),super.dispose();return this}createParameters(e){return this.parameters.isVisible===!1&&this.parameters.show(),this.parameters.createGroup(e)}getStatsData(e){let t=this.statsData.get(e);return t===void 0&&(t={},this.statsData.set(e,t)),t}resolveStats(e){const t=this.getStatsData(e.cid);t.initialized!==!0&&(t.cpu=e.cpu,t.gpu=e.gpu,t.stats=[],t.initialized=!0),t.stats.length>this.maxFrames&&t.stats.shift(),t.stats.push(e),t.cpu=this.getAverageDeltaTime(t,"cpu"),t.gpu=this.getAverageDeltaTime(t,"gpu"),t.total=t.cpu+t.gpu;for(const i of e.children){this.resolveStats(i);const n=this.getStatsData(i.cid);t.cpu+=n.cpu,t.gpu+=n.gpu,t.total+=n.total}}getNodes(){return this.currentNodes}getAverageDeltaTime(e,t,i=this.fps){const n=e.stats;let o=0,a=0;for(let r=n.length-1;r>=0&&a<i;r--){const c=n[r][t];c>0&&(o+=c,a++)}return a>0?o/a:0}updateTabs(){const e=Object.values(this.profiler.tabs);for(const t of e){let i=this.extensionsData.get(t);i===void 0&&(t.init(this),i={},this.extensionsData.set(t,i)),t.update(this)}}resolveFrame(e){const t=this.getFrameById(e.frameId-1);if(t){e.cpu=0,e.gpu=0,e.total=0;for(const i of e.children){this.resolveStats(i);const n=this.getStatsData(i.cid);e.cpu+=n.cpu,e.gpu+=n.gpu,e.total+=n.total}e.deltaTime=e.startTime-t.startTime,e.miscellaneous=e.deltaTime-e.total,e.miscellaneous<0&&(e.miscellaneous=0),this.updateCycle(this.displayCycle.text),this.updateCycle(this.displayCycle.graph),this.updateCycle(this.displayCycle.toggleGraph),this.displayCycle.text.needsUpdate&&(w(this.profiler.toggleButton.querySelector(".fps-counter"),this.fps.toFixed()),this.performance.updateText(this,e),this.memory.updateText(this)),this.displayCycle.toggleGraph.needsUpdate&&this.profiler.toggleGraph&&(this.profiler.toggleGraph.addPoint("fps",this.fps),this.profiler.toggleGraph.update()),this.displayCycle.graph.needsUpdate&&(this.performance.updateGraph(this,e),this.memory.updateGraph(this)),this.displayCycle.text.needsUpdate=!1,this.displayCycle.graph.needsUpdate=!1,this.displayCycle.toggleGraph.needsUpdate=!1}}updateCycle(e){e.time+=this.nodeFrame.deltaTime,e.time>=e.duration&&(e.needsUpdate=!0,e.time=0)}dispose(){super.dispose(),this.setRenderer(null)}}function me(p){const e=JSON.parse(localStorage.getItem("threejs-inspector")||"{}");return e.version!==Xe||e.settings&&e.settings.storage==="url"&&e.settings.url!==location.href?(localStorage.removeItem("threejs-inspector"),{}):e[p]||{}}function ae(p,e){const t=JSON.parse(localStorage.getItem("threejs-inspector")||"{}");e===null?delete t[p]:t[p]=e,t.settings=t.settings||{},t.settings.url=t.settings.url||location.href,t.settings.storage=t.settings.storage||"url",t.version=Xe,localStorage.setItem("threejs-inspector",JSON.stringify(t))}const B=new Ce,Eg=new E,dt=new E(1,0),pt=new E(0,1);let ee;class Sg extends ut{static get type(){return"OutlineNode"}constructor(e,t,i={}){super("vec4");const{selectedObjects:n=[],edgeThickness:o=Z(1),edgeGlow:a=Z(0),downSampleRatio:r=2}=i;this.scene=e,this.camera=t,this.selectedObjects=n,this.edgeThicknessNode=ke(o),this.edgeGlowNode=ke(a),this.downSampleRatio=r,this.updateBeforeType=mt.FRAME,this._renderTargetDepthBuffer=new j,this._renderTargetDepthBuffer.depthTexture=new Si,this._renderTargetDepthBuffer.depthTexture.type=ft,this._renderTargetMaskBuffer=new j,this._renderTargetMaskDownSampleBuffer=new j(1,1,{depthBuffer:!1}),this._renderTargetEdgeBuffer1=new j(1,1,{depthBuffer:!1}),this._renderTargetEdgeBuffer2=new j(1,1,{depthBuffer:!1}),this._renderTargetBlurBuffer1=new j(1,1,{depthBuffer:!1}),this._renderTargetBlurBuffer2=new j(1,1,{depthBuffer:!1}),this._renderTargetComposite=new j(1,1,{depthBuffer:!1}),this._cameraNear=Oe("near","float",t),this._cameraFar=Oe("far","float",t),this._blurDirection=P(new E),this._depthTextureUniform=N(this._renderTargetDepthBuffer.depthTexture),this._maskTextureUniform=N(this._renderTargetMaskBuffer.texture),this._maskTextureDownsSampleUniform=N(this._renderTargetMaskDownSampleBuffer.texture),this._edge1TextureUniform=N(this._renderTargetEdgeBuffer1.texture),this._edge2TextureUniform=N(this._renderTargetEdgeBuffer2.texture),this._blurColorTextureUniform=N(this._renderTargetEdgeBuffer1.texture),this._visibleEdgeColor=K(1,0,0),this._hiddenEdgeColor=K(0,1,0),this._depthMaterial=new V,this._depthMaterial.colorNode=ze(0,0,0),this._depthMaterial.name="OutlineNode.depth",this._depthSpriteMaterial=new nt,this._depthSpriteMaterial.colorNode=ze(0,0,0),this._depthSpriteMaterial.name="OutlineNode.depthSprite",this._prepareMaskMaterial=new V,this._prepareMaskMaterial.name="OutlineNode.prepareMask",this._prepareMaskSpriteMaterial=new nt,this._prepareMaskSpriteMaterial.name="OutlineNode.prepareMaskSprite",this._materialCopy=new V,this._materialCopy.name="OutlineNode.copy",this._edgeDetectionMaterial=new V,this._edgeDetectionMaterial.name="OutlineNode.edgeDetection",this._separableBlurMaterial=new V,this._separableBlurMaterial.name="OutlineNode.separableBlur",this._separableBlurMaterial2=new V,this._separableBlurMaterial2.name="OutlineNode.separableBlur2",this._compositeMaterial=new V,this._compositeMaterial.name="OutlineNode.composite",this._selectionCache=new Set,this._lastSelectionCount=0,this._textureNode=Ze(this,this._renderTargetComposite.texture)}get visibleEdge(){return this.r}get hiddenEdge(){return this.g}getTextureNode(){return this._textureNode}setSize(e,t){this._renderTargetDepthBuffer.setSize(e,t),this._renderTargetMaskBuffer.setSize(e,t),this._renderTargetComposite.setSize(e,t);let i=Math.round(e/this.downSampleRatio),n=Math.round(t/this.downSampleRatio);this._renderTargetMaskDownSampleBuffer.setSize(i,n),this._renderTargetEdgeBuffer1.setSize(i,n),this._renderTargetBlurBuffer1.setSize(i,n),i=Math.round(i/2),n=Math.round(n/2),this._renderTargetEdgeBuffer2.setSize(i,n),this._renderTargetBlurBuffer2.setSize(i,n)}updateBefore(e){const{renderer:t}=e,{camera:i,scene:n}=this;if(this._updateSelectionCache(),this._selectionCache.size===0){this._lastSelectionCount>0&&(ee=W.resetRendererState(t,ee),t.setRenderTarget(this._renderTargetComposite),t.setClearColor(0,0),t.clear(),W.restoreRendererState(t,ee),this._lastSelectionCount=0);return}this._lastSelectionCount=this._selectionCache.size,ee=W.resetRendererAndSceneState(t,n,ee);const o=t.getDrawingBufferSize(Eg);this.setSize(o.width,o.height),t.setClearColor(16777215,1);const a=n.name;t.setRenderTarget(this._renderTargetDepthBuffer),t.setRenderObjectFunction((r,l,c,h,d,u,m,g)=>{if(this._selectionCache.has(r)===!1){const f=r.isSprite?this._depthSpriteMaterial:this._depthMaterial;t.renderObject(r,l,c,h,f,u,m,g)}}),n.name="Outline [ Non-Selected Objects Pass ]",t.render(n,i),t.setRenderTarget(this._renderTargetMaskBuffer),t.setRenderObjectFunction((r,l,c,h,d,u,m,g)=>{if(this._selectionCache.has(r)===!0){const f=r.isSprite?this._prepareMaskSpriteMaterial:this._prepareMaskMaterial;t.renderObject(r,l,c,h,f,u,m,g)}}),n.name="Outline [ Selected Objects Pass ]",t.render(n,i),t.setRenderObjectFunction(ee.renderObjectFunction),this._selectionCache.clear(),n.name=a,B.material=this._materialCopy,B.name="Outline [ Downsample ]",t.setRenderTarget(this._renderTargetMaskDownSampleBuffer),B.render(t),B.material=this._edgeDetectionMaterial,B.name="Outline [ Edge Detection ]",t.setRenderTarget(this._renderTargetEdgeBuffer1),B.render(t),this._blurColorTextureUniform.value=this._renderTargetEdgeBuffer1.texture,this._blurDirection.value.copy(dt),B.material=this._separableBlurMaterial,B.name="Outline [ Blur Half Resolution ]",t.setRenderTarget(this._renderTargetBlurBuffer1),B.render(t),this._blurColorTextureUniform.value=this._renderTargetBlurBuffer1.texture,this._blurDirection.value.copy(pt),t.setRenderTarget(this._renderTargetEdgeBuffer1),B.render(t),this._blurColorTextureUniform.value=this._renderTargetEdgeBuffer1.texture,this._blurDirection.value.copy(dt),B.material=this._separableBlurMaterial2,B.name="Outline [ Blur Quarter Resolution ]",t.setRenderTarget(this._renderTargetBlurBuffer2),B.render(t),this._blurColorTextureUniform.value=this._renderTargetBlurBuffer2.texture,this._blurDirection.value.copy(pt),t.setRenderTarget(this._renderTargetEdgeBuffer2),B.render(t),B.material=this._compositeMaterial,B.name="Outline [ Blur Quarter Resolution ]",t.setRenderTarget(this._renderTargetComposite),B.render(t),W.restoreRendererAndSceneState(t,n,ee)}setup(){const e=()=>{const r=this._depthTextureUniform.sample(pe);let l;this.camera.isPerspectiveCamera?l=kt(r,this._cameraNear,this._cameraFar):l=Ct(r,this._cameraNear,this._cameraFar);const c=Et.z.lessThanEqual(l).select(1,0);return K(0,c,1)};this._prepareMaskMaterial.colorNode=e(),this._prepareMaskMaterial.needsUpdate=!0,this._prepareMaskSpriteMaterial.colorNode=e(),this._prepareMaskSpriteMaterial.needsUpdate=!0,this._materialCopy.fragmentNode=this._maskTextureUniform,this._materialCopy.needsUpdate=!0;const t=H(()=>{const r=We(this._maskTextureDownsSampleUniform),l=re(1).div(r).toVar(),c=F(1,0,0,1).mul(F(l,l)),h=Ee(),d=this._maskTextureDownsSampleUniform.sample(h.add(c.xy)).toVar(),u=this._maskTextureDownsSampleUniform.sample(h.sub(c.xy)).toVar(),m=this._maskTextureDownsSampleUniform.sample(h.add(c.yw)).toVar(),g=this._maskTextureDownsSampleUniform.sample(h.sub(c.yw)).toVar(),f=Fe(d.r.sub(u.r),.5),x=Fe(m.r.sub(g.r),.5),b=re(f,x).length(),y=_e(d.g,u.g),S=_e(m.g,g.g),R=_e(y,S).oneMinus().greaterThan(.001).select(this._visibleEdgeColor,this._hiddenEdgeColor);return F(R,1).mul(b)});this._edgeDetectionMaterial.fragmentNode=t(),this._edgeDetectionMaterial.needsUpdate=!0;const i=4,n=H(([r,l])=>Z(.39894).mul(yt(Z(-.5).mul(r).mul(r).div(l.mul(l))).div(l))),o=H(([r])=>{const l=We(this._maskTextureDownsSampleUniform),c=re(1).div(l).toVar(),h=Ee(),d=r.div(2).toVar(),u=n(0,d).toVar(),m=this._blurColorTextureUniform.sample(h).mul(u).toVar(),g=this._blurDirection.mul(c).mul(r).div(i).toVar(),f=g.toVar();return Ye({start:ue(1),end:ue(i),type:"int",condition:"<="},({i:x})=>{const b=r.mul(Z(x)).div(i),y=n(b,d),S=this._blurColorTextureUniform.sample(h.add(f)),k=this._blurColorTextureUniform.sample(h.sub(f));m.addAssign(S.add(k).mul(y)),u.addAssign(y.mul(2)),f.addAssign(g)}),m.div(u)});this._separableBlurMaterial.fragmentNode=o(this.edgeThicknessNode),this._separableBlurMaterial.needsUpdate=!0,this._separableBlurMaterial2.fragmentNode=o(i),this._separableBlurMaterial2.needsUpdate=!0;const a=H(()=>{const r=this._edge1TextureUniform,l=this._edge2TextureUniform,c=this._maskTextureUniform,h=r.add(l.mul(this.edgeGlowNode));return c.r.mul(h)});return this._compositeMaterial.fragmentNode=a(),this._compositeMaterial.needsUpdate=!0,this._textureNode}dispose(){super.dispose(),this.selectedObjects.length=0,this._renderTargetDepthBuffer.dispose(),this._renderTargetMaskBuffer.dispose(),this._renderTargetMaskDownSampleBuffer.dispose(),this._renderTargetEdgeBuffer1.dispose(),this._renderTargetEdgeBuffer2.dispose(),this._renderTargetBlurBuffer1.dispose(),this._renderTargetBlurBuffer2.dispose(),this._renderTargetComposite.dispose(),this._depthMaterial.dispose(),this._depthSpriteMaterial.dispose(),this._prepareMaskMaterial.dispose(),this._prepareMaskSpriteMaterial.dispose(),this._materialCopy.dispose(),this._edgeDetectionMaterial.dispose(),this._separableBlurMaterial.dispose(),this._separableBlurMaterial2.dispose(),this._compositeMaterial.dispose()}_updateSelectionCache(){for(let e=0;e<this.selectedObjects.length;e++)this.selectedObjects[e].traverse(i=>{(i.isMesh||i.isSprite)&&this._selectionCache.add(i)})}}const Lg=(p,e,t)=>new Sg(p,e,t);class Mg{constructor(){T(this,"renderer");T(this,"scene");T(this,"pipeline");T(this,"scenePass");T(this,"bloomPass");T(this,"outlinePass");T(this,"sceneOutput");T(this,"bloomOutput");T(this,"_render",()=>{this.renderer.render(this.scene,this.camera)});const e=new kg;this.renderer=new Te({antialias:!0}),this.renderer.setClearColor("#000"),this.renderer.outputColorSpace=Li,this.renderer.toneMapping=ne,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=Mi,this.renderer.inspector=e,this.renderer.setPixelRatio(window.devicePixelRatio),this.scene=new Bi,this.scene.background=new we("#212225"),this.pipeline=new Pi(this.renderer),this.scenePass=Tt(this.scene,Ri),this.outlinePass=Lg(this.scene,this.camera,{edgeGlow:P(0),edgeThickness:P(1)});const{visibleEdge:t,hiddenEdge:i}=this.outlinePass,n=P(new we("#00ff00")),o=P(new we("#00ff00").multiplyScalar(.5)),a=P(3),r=t.mul(n).add(i.mul(o)).mul(a);this.sceneOutput=r.add(this.scenePass),this.bloomPass=ig(this.sceneOutput),this.bloomOutput=this.sceneOutput.add(this.bloomPass),this.pipeline.outputNode=this.sceneOutput;const l=e.domElement.querySelector(".profiler-toggle");l.style.position="absolute"}get camera(){return this.scenePass.camera}set camera(e){this.scenePass.camera=e}mount(e){e.appendChild(this.renderer.domElement)}setOutlineSelections(e){this.outlinePass.selectedObjects=[...e]}render(){this.pipeline.render()}resize(e,t){this.renderer.setSize(e,t)}dispose(){this.outlinePass.selectedObjects=[],this.renderer.domElement.remove(),this.pipeline.dispose(),this.renderer.dispose()}toImage(){return this.render(),this.renderer.domElement.toDataURL("image/png")}}class Wg extends He{constructor(){super();T(this,"container");T(this,"render");T(this,"timer");T(this,"modules");T(this,"update",()=>{this.timer.update(),this.emit(q.Update,this),this.emit(q.RenderBefore,this),this.render.render(),this.emit(q.RenderAfter,this)});T(this,"resize",()=>{const{offsetWidth:t,offsetHeight:i}=this.container;this.render.resize(t,i),this.emit(q.Resize,this)});this.container=document.createElement("div"),this.container.className="core-3d",this.container.style.position="relative",this.container.style.height="100%",this.container.style.pointerEvents="auto",this.container.tabIndex=0,this.render=new Mg,this.timer=new Ii,this.modules=new Map,O.from(this.render.scene).attach(this)}mount(t){t.appendChild(this.container),this.render.mount(this.container),this.timer.connect(document),this.emit(q.Mount,this)}unmount(){this.timer.disconnect(),this.modules.forEach(t=>t.unmount(this)),this.modules.clear(),O.destroy(this.render.scene),this.render.dispose(),this.container.remove(),this.emit(q.Unmount,this),this.removeAllListeners()}start(){this.timer.reset(),this.render.renderer.setAnimationLoop(this.update),this.emit(q.Start,this)}stop(){this.render.renderer.setAnimationLoop(null),this.emit(q.Stop,this)}addModule(t,i){this.modules.set(t,i),i.mount(this)}getModule(t){return this.modules.get(t)}removeModule(t){const i=this.modules.get(t);i==null||i.unmount(this),this.modules.delete(t)}}export{dc as $,re as A,zp as B,Wg as C,Dg as D,O as E,H as F,an as G,Fo as H,Ag as I,Ep as J,Vg as K,Ye as L,Og as M,Fg as N,Rg as O,zo as P,Ze as Q,Ee as R,Ue as S,wt as T,N as U,kd as V,um as W,ke as X,Ds as Y,Rd as Z,xm as _,Zm as a,ho as a0,yn as a1,gd as a2,de as a3,qe as a4,ze as a5,St as a6,xd as a7,Nc as a8,Et as a9,Hs as aA,cc as aB,Fe as aC,vt as aD,Xp as aE,Dr as aF,Ar as aG,Au as aH,Us as aI,pp as aJ,Xn as aK,tc as aL,Ig as aM,Ch as aa,kh as ab,lp as ac,yc as ad,Tu as ae,ye as af,Qr as ag,Lt as ah,$d as ai,ue as aj,cp as ak,Qi as al,Pu as am,Aa as an,hr as ao,_n as ap,yd as aq,Da as ar,Bs as as,el as at,_o as au,bs as av,Gr as aw,Ho as ax,Oe as ay,Nl as az,zg as b,Ng as c,fn as d,cn as e,pn as f,P as g,K as h,ba as i,vm as j,fr as k,hs as l,Zl as m,ns as n,yt as o,Sh as p,pm as q,md as r,Vp as s,ha as t,Qu as u,F as v,po as w,_e as x,Z as y,go as z};
