(this["webpackJsonpsorting-animator"]=this["webpackJsonpsorting-animator"]||[]).push([[0],{12:function(n,t,e){},13:function(n,t,e){},14:function(n,t,e){},16:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e.n(r),c=e(7),o=e.n(c),a=(e(12),e(13),e(3)),u=e(5);e(14);function s(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2?arguments[2]:void 0,r=n.length;if(0==r)return[[],t];if(1==r)return[n,t];var i=Math.floor(r/2),c=n.slice(0,i),o=n.slice(i,r);return h(s(c,t,e),s(o,t+i,e),e)}function h(n,t,e){for(var r=[],i=n[1],c=n[0],o=t[0],a=t[1],u=0,s=0,h=0;s<c.length||h<o.length;)e.push({type:"colorChange",indices:[s+i,h+a]}),e.push({type:"colorChange",indices:[s+i,h+a]}),h===o.length||c[s]<o[h]?(r.push(c[s]),e.push({type:"heightChange",indices:[u+i],newHeights:[c[s]]}),s++):(r.push(o[h]),e.push({type:"heightChange",indices:[u+i],newHeights:[o[h]]}),h++),u++;return[r,i]}function f(n,t,e){for(var r=Object(a.a)(n),i=0;i<r.length;i++)for(var c=0;c<r.length-i-1;c++){if(e.push({type:"colorChange",indices:[c,c+1]}),r[c]>r[c+1]){e.push({type:"heightChange",indices:[c,c+1],newHeights:[r[c+1],r[c]]});var o=r[c];r[c]=r[c+1],r[c+1]=o}e.push({type:"colorChange",indices:[c,c+1]})}return r}var l=e(0),g="turquoise";function d(){var n=i.a.useState([]),t=Object(u.a)(n,2),e=t[0],r=t[1],c=i.a.useState([]),o=Object(u.a)(c,2),h=o[0],d=o[1];function v(n){var t=[];n(e,0,t);console.log(t);for(var r=0;r<t.length;r++){var i=t[r];"colorChange"==i.type?function(){var n=Object(u.a)(i.indices,2),t=n[0],e=n[1];setTimeout((function(){var n;n=[t,e],d((function(t){var e=Object(a.a)(t);return n.forEach((function(n){e[n]==g?e[n]="red":e[n]=g})),e}))}),100*r)}():function(){var n=i.indices,t=i.newHeights;setTimeout((function(){n.forEach((function(n,e){j(n,t[e])}))}),100*r)}()}}function j(n,t){r((function(e){var r=Object(a.a)(e);return r[n]=t,r}))}return i.a.useEffect((function(){var n=Array.from(Array(20)).map((function(n){return t=1,e=100,Math.floor(Math.random()*(e-t+1)+t);var t,e}));r(n);var t=Array.from(Array(20)).map((function(n){return g}));d(t)}),[]),Object(l.jsxs)("div",{className:"main-container",children:[Object(l.jsx)("h1",{children:"Sorting Animator"}),Object(l.jsx)("div",{className:"array-container",children:e.map((function(n,t){return Object(l.jsx)("div",{className:"array-bar",style:{backgroundColor:h[t],height:"".concat(4*n,"px")}},t)}))}),Object(l.jsxs)("div",{className:"button-container",children:[Object(l.jsx)("button",{onClick:function(){return v(s)},children:"Merge Sort"}),Object(l.jsx)("button",{onClick:function(){return v(f)},children:"Bubble Sort"})]})]})}var v=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(d,{})})},j=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),r(n),i(n),c(n),o(n)}))};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.31f5b0d2.chunk.js.map