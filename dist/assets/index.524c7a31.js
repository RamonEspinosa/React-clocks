import{P as e,R as r,d as t,r as n,a as o}from"./vendor.f4de6568.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const s=({number:e,min:t,max:n,inverted:o})=>{const s=o?-1:1,a=((e,r,t=1)=>Array.from({length:(r-e)/t+1},((r,n)=>e+n*t)))(...o?[n,t,s]:[t,n,s]),c=((e,r)=>{const{length:t}=e;return 3===t?4*r:6===t?10*r:18*r})(a,s);return r.createElement("div",{className:"cool-hand",style:{transform:`translateY(${c-4*e*s}rem)`}},a.map((e=>r.createElement("span",{className:"cool-hand__position",key:e},e))))};s.defaultProps={inverted:!1},s.propTypes={number:e.number.isRequired,min:e.number.isRequired,max:e.number.isRequired,inverted:e.bool};const a=()=>r.createElement("span",{className:"cool-colon"},":");const c=({date:e})=>{const n=t(e).format("HHmmss"),o=Array.from(n);return r.createElement("div",{className:"cool-clock"},r.createElement(s,{number:o[0],min:0,max:2}),r.createElement(s,{number:o[1],min:0,max:9}),r.createElement(a,null),r.createElement(s,{number:o[2],min:0,max:5}),r.createElement(s,{number:o[3],min:0,max:9}),r.createElement(a,null),r.createElement(s,{number:o[4],min:0,max:5}),r.createElement(s,{number:o[5],min:0,max:9}))};c.propTypes={date:e.shape({}).isRequired};const m=()=>{const[e,o]=n.exports.useState(t());return((e,r=1e3)=>{const t=n.exports.useRef();n.exports.useEffect((()=>{t.current=e}),[e]),n.exports.useEffect((()=>{const e=setInterval((()=>{t.current()}),r);return()=>clearInterval(e)}),[r])})((()=>{o(t(e).add(1,"s"))})),r.createElement(c,{date:e})};o.render(r.createElement(r.StrictMode,null,r.createElement(m,null)),document.getElementById("root"));
