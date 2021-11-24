"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[330],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(r),m=o,f=h["".concat(u,".").concat(m)]||h[m]||s[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4766:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={layout:"posts",title:"Worker count should not impact performance",date:new Date("2021-11-24T00:00:00.000Z"),categories:["chaos_experiment","bpmn"],tags:["availability"],authors:"zell"},u="Chaos Day Summary",l={permalink:"/zeebe-chaos/2021/11/24/Worker-count-should-not-impact-performance",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-11-24-Worker-count-should-not-impact-performance/index.md",source:"@site/blog/2021-11-24-Worker-count-should-not-impact-performance/index.md",title:"Worker count should not impact performance",description:"In this chaos day we experimented with the worker count, since we saw recently that it might affect the performance (throughput) negatively if there are more workers deployed. This is related to #7955 and #8244.",date:"2021-11-24T00:00:00.000Z",formattedDate:"November 24, 2021",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:2.515,truncated:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],nextItem:{title:"Not produce duplicate Keys",permalink:"/zeebe-chaos/2021/11/11/Not-produce-duplicate-Keys"}},p={authorsImageUrls:[void 0]},s=[],h={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this chaos day we experimented with the worker count, since we saw recently that it might affect the performance (throughput) negatively if there are more workers deployed. This is related to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/issues/7955"},"#7955")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/issues/8244"},"#8244"),"."),(0,a.kt)("p",null,"We wanted to prove, that even if we have more workers deployed the throughput of the process instance execution should not have an negative impact."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TL;DR;")," We were not able to prove our hypothesis. Scaling of workers can have a negative impact on performance. Check out the ",(0,a.kt)("a",{parentName:"p",href:"#third-chaos-experiment"},"third chaos experiment"),"."))}m.isMDXComponent=!0}}]);