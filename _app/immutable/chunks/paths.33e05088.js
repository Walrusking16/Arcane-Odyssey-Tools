import{A as c,s as p}from"./scheduler.b0ee29d8.js";const t=[];function g(o,a=c){let n;const i=new Set;function r(e){if(p(o,e)&&(o=e,n)){const b=!t.length;for(const s of i)s[1](),t.push(s,o);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(o))}function _(e,b=c){const s=[e,b];return i.add(s),i.size===1&&(n=a(r,f)||c),e(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var l;const h=((l=globalThis.__sveltekit_pb0l8w)==null?void 0:l.base)??"/Arcane-Odyssey-Tools";var u;const w=((u=globalThis.__sveltekit_pb0l8w)==null?void 0:u.assets)??h;export{w as a,h as b,g as w};