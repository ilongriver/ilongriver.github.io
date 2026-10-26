import{e as t,ax as r,j as e,aw as d}from"./index-Dv7eEj6Y.js";import{L as k}from"./layout-grid-KuoUiw8g.js";/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],y=t("file-text",m);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],h=t("folder",_);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],x=t("settings",p);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],j=t("sparkles",b),v="_container_19fbw_1",g="_logo_19fbw_9",f="_item_19fbw_13",w="_active_19fbw_29",N="_label_19fbw_37",z="_bottom_19fbw_40",a={container:v,logo:g,item:f,active:w,label:N,bottom:z},$=c=>{const{active:l,onClick:o}=c,i=r(),n=[{key:"projects",icon:e.jsx(h,{size:16}),label:"项目"},{key:"templates",icon:e.jsx(j,{size:16}),label:"示例"},{key:"community",icon:e.jsx(k,{size:16}),label:"广场"},{key:"documents",icon:e.jsx(y,{size:16}),label:"文档"}];return e.jsxs("div",{className:a.container,children:[e.jsxs("div",{children:[e.jsx("div",{className:a.logo,onClick:()=>i("/workspace"),children:e.jsx("img",{src:d,style:{width:"100%"}})}),n.map(s=>e.jsxs("div",{className:`${a.item} ${l===s.key?a.active:""}`,onClick:()=>o(s.key),children:[s.icon,e.jsx("span",{className:a.label,children:s.label})]},s.key))]}),e.jsx("div",{className:a.bottom,children:e.jsxs("div",{className:a.item,onClick:()=>o("settings"),children:[e.jsx(x,{size:16}),e.jsx("span",{className:a.label,children:"设置"})]})})]})};export{$ as SideBar};
