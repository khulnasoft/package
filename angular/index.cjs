"use strict";var l=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var n=Object.prototype.hasOwnProperty;var r=(t,e)=>{for(var d in e)l(t,d,{get:e[d],enumerable:!0})},a=(t,e,d,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of c(e))!n.call(t,o)&&o!==d&&l(t,o,{get:()=>e[o],enumerable:!(i=s(e,o))||i.enumerable});return t};var u=t=>a(l({},"__esModule",{value:!0}),t);var b={};r(b,{khulnasoftDevTools:()=>p});module.exports=u(b);async function p(){if(typeof document<"u"&&window.location.hostname==="localhost"){let t=document.head.querySelector("script[data-khulnasoft-dev-tools]");t||(t=document.createElement("script"),t.setAttribute("src","http://localhost:5273/~khulnasoft-dev-tools.js"),t.setAttribute("data-khulnasoft-dev-tools",""),t.setAttribute("async",""),document.head.appendChild(t))}}0&&(module.exports={khulnasoftDevTools});