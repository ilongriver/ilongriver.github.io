import{e as i,d as c,j as e,am as d,a0 as p}from"./index-LTUbu7LF.js";import m from"./index-Bd5ov-UK.js";import{C as h}from"./index-RVI3RJZN.js";import{ViewPanel as x}from"./index-Dl2evuUQ.js";import"./context-f1K8laRh.js";import"./core-DriR3CJP.js";import"./router-utils-CFXCkOId.js";import"./index-B0T0XtFt.js";import"./PlusOutlined-Bxrz7so6.js";import"./context-menu-C7KPgsoy.js";import"./editor-hooks-B5NamLtC.js";import"./useSize-XGo3OOVx.js";import"./index-0_0mFT5S.js";import"./index-Dc-B-iSM.js";import"./trash-2-BXt_1_Mo.js";import"./copy-Brnmhb72.js";/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],j=i("code-xml",y);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],k=i("workflow",b),f=[{key:"scene",label:"场景",Icon:d},{key:"code",label:"代码",Icon:j},{key:"blueprint",label:"蓝图",Icon:k}],v=c.forwardRef(({view:t,onViewChange:n},s)=>{const o=r=>({display:t===r?"block":"none",height:"100%"});return e.jsxs("div",{className:"center-panel",children:[e.jsx("div",{className:"editor-panel-header center-panel-header",children:f.map(({key:r,label:a,Icon:l})=>e.jsxs("div",{role:"tab","aria-selected":t===r,className:p("editor-panel-tab",{"editor-panel-tab-inactive":t!==r}),onClick:()=>n(r),children:[e.jsx(l,{size:14}),e.jsx("span",{children:a})]},r))}),e.jsxs("div",{className:"center-panel-body",children:[e.jsx("div",{style:o("scene"),children:e.jsx(x,{})}),e.jsx("div",{style:o("code"),children:e.jsx(h,{ref:s})}),e.jsx("div",{style:o("blueprint"),children:e.jsx(m,{})})]})]})});v.displayName="CenterPanel";export{v as CenterPanel};
