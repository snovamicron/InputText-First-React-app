(this["webpackJsonptut-app-react"]=this["webpackJsonptut-app-react"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(5),s=n.n(r),l=n(4),i=n(2),o=n(0),d=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:e.type,className:e.classProps,style:e.style,onClick:e.btnFunc,children:e.title})})},b=function(e){var t=e.heading,n=e.randerText,a=e.Mode,r=e.colorMode,s=e.bgMode,l=c.a.useState(n),b=Object(i.a)(l,2),u=b[0],h=b[1],j=c.a.useState(""),p=Object(i.a)(j,2),m=p[0],x=p[1],g=function(){return u.split(" ").filter((function(e){return e}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:t}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"inputText",className:"form-label text-".concat("light"===a?"warning":"dark"," bg-").concat("light"===a?"dark":"light"," px-2 py-1 rounded-3"),children:"Example textarea"}),Object(o.jsx)("textarea",{style:{fontFamily:m,color:s(a),backgroundColor:r(a)},className:"form-control  pt-3",id:"inputText",rows:"10",value:u,onChange:function(e){h(e.target.value)}})]}),Object(o.jsxs)("div",{className:"d-flex p-2",children:[Object(o.jsx)(d,{title:"Caps on",btnFunc:function(){h(u.toUpperCase())},classProps:"btn btn-danger m-1 rounded-pill"}),Object(o.jsx)(d,{title:"Caps off",btnFunc:function(){h(u.toLowerCase())},classProps:"btn btn-success m-1 rounded-pill"}),Object(o.jsx)(d,{title:"Change Font",btnFunc:function(){alert("make sure that the font is installed in your device");var e=prompt("Enter the font name");x(e)},classProps:"btn btn-warning m-1 rounded-pill"}),Object(o.jsx)(d,{title:"Copy",type:"button",btnFunc:function(){navigator.clipboard.writeText(u)},classProps:"btn btn-primary m-1 rounded-pill"})]}),Object(o.jsxs)("samp",{children:["Number of Words are ",g().length]}),Object(o.jsx)("br",{}),Object(o.jsxs)("samp",{children:["Number of characters(with spaces) are ",u.length]}),Object(o.jsx)("br",{}),Object(o.jsxs)("samp",{children:["Number of characters(without spaces) are ",g().length?g().reduce((function(e,t){return e+t})).length:0]}),Object(o.jsx)("br",{})]})},u=function(e){var t=e.home,n=e.Mode,a=e.webTitle,c=e.about;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-".concat("dark"===n?"secondary":"dark"),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsxs)("a",{className:"navbar-brand",href:"/#",children:[a," "]}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)("a",{className:"nav-link active","aria-current":"page",href:"#/",children:[t," "]})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:c})})]})})]})})})},h=function(){var e=c.a.useState(localStorage.getItem("mode")?localStorage.getItem("mode"):"light"),t=Object(i.a)(e,2),n=t[0],a=t[1],r=function(e){switch(e){case"dark":case"NightPurp":case"NightTeal":default:return"inline";case"light":return"none"}},s=c.a.useState(r(n)),d=Object(i.a)(s,2),h=d[0],j=d[1];localStorage.setItem("mode",n);var p="#212529",m="#f8f9fa",x="#0a0121",g="#001917",O="#1d000c",f="#212529",N="#f8f9fa",v="#7038f0",k="#03dac5",y="#f2307d",w=function(e){switch(e){case"dark":return p;case"light":return m;case"NightPurp":return x;case"NightTeal":return g;default:return O}},C=function(e){switch(e){case"dark":return N;case"light":return f;case"NightPurp":return v;case"NightTeal":return k;default:return y}},T={webTitle:"Basic React Tutorial",home:"Home",about:"About us",Mode:n},F={heading:"Enter the text to analyse",randerText:"Enter your text here",Mode:n,colorMode:C,bgMode:w};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"w-100 min-vh-100 position-relative",style:{backgroundColor:w(n),color:C(n)},children:[Object(o.jsx)("div",{className:"position-absolute",style:{top:15,right:2,zIndex:1e7},children:Object(o.jsx)("div",{className:"form-check form-switch",onClick:function(){a("light"===n?"dark":"light"),j("inline"===r(n)?"none":"inline")},children:Object(o.jsx)("input",{className:"form-check-input ",type:"checkbox",role:"switch"})})}),Object(o.jsx)("div",{onClick:function(){a("dark")},className:"position-absolute d-".concat(h),style:{top:15,right:341,zIndex:1e7},children:Object(o.jsx)("button",{type:"button",className:"btn btn-light rounded-pill p-1 bg-dark text-info",children:"Basic"})}),Object(o.jsx)("div",{className:"position-absolute d-".concat(h),style:{top:15,right:250,zIndex:1e7},children:Object(o.jsx)("button",{onClick:function(){a("NightPurp")},type:"button",className:"btn btn-light rounded-pill p-1 ",style:{backgroundColor:x,color:v},children:"NightPurp"})}),Object(o.jsx)("div",{className:"position-absolute d-".concat(h),style:{top:15,right:160,zIndex:1e7},children:Object(o.jsx)("button",{onClick:function(){a("NightTeal")},type:"button",className:"btn btn-light rounded-pill p-1 ",style:{backgroundColor:g,color:k},children:"NightTeal"})}),Object(o.jsx)("div",{className:"position-absolute d-".concat(h),style:{top:15,right:70,zIndex:1e7},children:Object(o.jsx)("button",{onClick:function(){a("NightOwl")},type:"button",className:"btn btn-light rounded-pill p-1 ",style:{backgroundColor:O,color:y},children:"NightOwl"})}),Object(o.jsx)(u,Object(l.a)({},T)),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(b,Object(l.a)({},F))})]})})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b9d39cf3.chunk.js.map