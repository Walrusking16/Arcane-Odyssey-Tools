import{A as b,s as p}from"./scheduler.b0ee29d8.js";const t=[];function g(o,a=b){let n;const i=new Set;function r(e){if(p(o,e)&&(o=e,n)){const c=!t.length;for(const s of i)s[1](),t.push(s,o);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function u(e){r(e(o))}function _(e,c=b){const s=[e,c];return i.add(s),i.size===1&&(n=a(r,u)||b),e(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_1o8pu1l)==null?void 0:f.base)??"/Arcane-Odyssey-Tools";var l;const q=((l=globalThis.__sveltekit_1o8pu1l)==null?void 0:l.assets)??h;export{q as a,h as b,g as w};
