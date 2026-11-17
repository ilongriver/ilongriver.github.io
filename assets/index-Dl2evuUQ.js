import{e as d,d as c,j as r}from"./index-LTUbu7LF.js";import{s as b}from"./context-menu-C7KPgsoy.js";import{i as l}from"./editor-hooks-B5NamLtC.js";import{u as v}from"./useSize-XGo3OOVx.js";import{u as M}from"./context-f1K8laRh.js";import{ToolBar as g}from"./index-0_0mFT5S.js";import{T as j}from"./trash-2-BXt_1_Mo.js";import{C as E}from"./copy-Brnmhb72.js";import"./core-DriR3CJP.js";import"./router-utils-CFXCkOId.js";import"./index-B0T0XtFt.js";import"./index-Dc-B-iSM.js";/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M11 14h10",key:"1w8e9d"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344",key:"1e62lh"}],["path",{d:"m17 18 4-4-4-4",key:"z2g111"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",key:"bjbb7m"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]],w=d("clipboard-paste",z);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],S=d("compass",C);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],D=d("scissors",_),N={"editor.focus":r.jsx(S,{size:14}),"editor.copy":r.jsx(E,{size:14}),"editor.cut":r.jsx(D,{size:14}),"editor.paste":r.jsx(w,{size:14}),"editor.delete":r.jsx(j,{size:14})},H=()=>{const o=M(),n=c.useRef({x:0,y:0}),i=c.useRef(null),a=v(i);c.useEffect(()=>{o.mount(i.current)},[o]),c.useEffect(()=>{!a.width||!a.height||o.resize()},[o,a]);const u=()=>{const t=[],s=o.contribSystem.listMenu("view:context");return s.forEach((e,p)=>{p>0&&e.group!==s[p-1].group&&t.push({type:"divider"}),t.push({key:e.command,label:e.title,icon:N[e.command],danger:e.command==="editor.delete",disabled:!o.contribSystem.canExecute(e.command),onClick:()=>void o.contribSystem.executeCommand(e.command)})}),t},y=t=>{t.preventDefault()},f=t=>{t.preventDefault(),o.get("drop").dropModel(t.nativeEvent)},m=t=>{const{clientX:s,clientY:e}=t;(s-n.current.x)**2+(e-n.current.y)**2>2||o.selectionSystem.objects.length&&b(t,u())},h=t=>{const{clientX:s,clientY:e}=t;n.current.x=s,n.current.y=e},x=t=>{!l()||t.button!==2||m(t.nativeEvent)},k=t=>{t.preventDefault(),!l()&&m(t.nativeEvent)};return r.jsx("div",{ref:i,className:"view-panel",onDragOver:y,onDrop:f,onPointerDown:h,onPointerUp:x,onContextMenu:k,children:r.jsx(g,{})})};export{H as ViewPanel};
