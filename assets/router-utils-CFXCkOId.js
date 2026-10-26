const e=new Map;function f(c,n,s=!0){if(!s&&n){const i=e.get(n);if(i&&!i.closed)return i.focus(),i}const o=window.open(c,n);return s&&(o==null||o.location.reload()),n&&o&&e.set(n,o),o}export{f as o};
