(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(27)},21:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(13),r=t.n(c),o=t(6),s=t(4);t(21);function i(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),style:{backgroundColor:"#3e96e3 !important",boxShadow:"0 2px 8px 0 rgb(0 0 0)"}},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link active",to:"/about"},"About Us"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.handleDarkMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label light",htmlFor:"flexSwitchCheckDefault"},n.a.createElement("b",null,"Enable Dark Mode")))))))}i.defaultProps={title:"set title",about:"set about"};var m=function(e){var a=Object(l.useState)("Enter your text"),t=Object(o.a)(a,2),c=t[0],r=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h2",null,e.heading),n.a.createElement("div",{className:"my-3"},n.a.createElement("textarea",{className:"form-control my-3",value:c,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"rgb(20, 81, 131)":"white",color:"dark"===e.mode?"white":"#042743"},id:"mybox",rows:"8"}),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary my-1",onClick:function(){var a=c.toUpperCase();r(a),e.showAlert("Converted to Uppercase","success")}},"Convert to Uppercase"),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary mx-3 my-1",onClick:function(){var a=c.toLowerCase();r(a),e.showAlert("Converted to Lowercase","success")}},"Convert to Lowercase"),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary",onClick:function(){r(""),e.showAlert("Text Cleared","success")}},"Clear Text"),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary mx-3 my-1",onClick:function(){navigator.clipboard.writeText(c),e.showAlert("Text Copied to Clipboard","success")}},"Copy Text"),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary",onClick:function(){var a=c.split(/[  ]+/);r(a.join(" ")),e.showAlert("Extra Spaces Removed","success")}},"Remove Extra Spaces")),n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h2",null,"Your Text Summary"),n.a.createElement("p",null,n.a.createElement("b",null,c.split(/\s/).filter(function(e){return 0!==e.length}).length)," words, ",n.a.createElement("b",null,c.length)," characters"),n.a.createElement("p",null,n.a.createElement("b",null,.08*c.split(" ").filter(function(e){return 0!==e.length}).length)," Minutes Read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,c.length>0?c:"Nothing to Preview"))))};var d=function(e){return n.a.createElement("div",{style:{height:"50px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.message))};function u(e){var a={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(20 81 131)":"white"};return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"}},"About us"),n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("strong",null,"Analyze your Text"))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"TextUtils is a utility that helps to manipulate the text in which you want. It can help the user to analyze the text in very easiest way."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("strong",null,"Free To use"))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"TextUtils is free to use and can be easilty accessed on the browser. Any text can be analyzed and functions can also be used without paying any cost."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("strong",null,"Broswer Compatible"))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"TextUtils is much Compatible with browser as it is a React Application built React Developer Tools. User can easily access the pages and can use it in a very efficient way.")))))}var b=t(1);var p=function(){var e=Object(l.useState)("light"),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)(null),p=Object(o.a)(r,2),h=p[0],E=p[1],g=function(e,a){E({message:e,type:a}),setTimeout(function(){E(null)},1500)};return n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(i,{title:"TextUtils",about:"About",mode:t,handleDarkMode:function(){"light"===t?(c("dark"),document.body.style.backgroundColor="#042743",g("Dark mode enabled","success"),document.title="TextUtils | Dark Mode"):(c("light"),document.body.style.backgroundColor="white",g("Light mode enabled","success"),document.title="TextUtils | Light Mode")}}),n.a.createElement(d,{alert:h}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/about"},n.a.createElement(u,{mode:t})),n.a.createElement(b.a,{exact:!0,path:"/"},n.a.createElement(m,{heading:"Try TextUtils - Word Counter, Character Counter, Remove extra spaces",mode:t,showAlert:g}))))))};t(26);r.a.render(n.a.createElement(p,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.29f635b8.chunk.js.map