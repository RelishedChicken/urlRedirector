(this["webpackJsonpurl-redirect"]=this["webpackJsonpurl-redirect"]||[]).push([[0],{154:function(t,e){},156:function(t,e){},166:function(t,e){},168:function(t,e){},194:function(t,e){},196:function(t,e){},197:function(t,e){},203:function(t,e){},205:function(t,e){},223:function(t,e){},225:function(t,e){},237:function(t,e){},240:function(t,e){},288:function(t,e){},290:function(t,e){},304:function(t,e,n){"use strict";n.r(e);var r=n(4),c=n(0),a=n.n(c),u=n(143),o=n.n(u),i=n(144),s=n.n(i),l=n(32),p=n(33),h=n(35),j=n(34),b=n(75),d=n(5),f=(n(78),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Editor"}),Object(r.jsx)("form",{onSubmit:this.props.update,children:Object(r.jsxs)("label",{children:["URL:"," ",Object(r.jsx)("input",{type:"text",name:"url",value:this.props.url}),Object(r.jsx)("input",{type:"submit",value:"Update"})]})})]})}}]),n}(a.a.Component)),O=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"componentWillMount",value:function(){console.log(this.props.url),window.location=this.props.url}},{key:"render",value:function(){return Object(r.jsx)("h1",{children:"Redirecting you!"})}}]),n}(a.a.Component),v=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={url:"",redirectable:!1},t.updateUrl=function(e){e.preventDefault(),console.log(e.target[0].value),t.updateDatabase(e.target[0].value)},t}return Object(p.a)(n,[{key:"updateDatabase",value:function(t){fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/updateUrl.php?URL="+t)}},{key:"readFromDatabase",value:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/getUrls.php").then((function(t){return t.json()})).then((function(e){console.log(e[0].url_value),t.setState({url:e[0].url_value,redirectable:!0})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return this.state.redirectable?Object(r.jsx)("div",{children:Object(r.jsx)(b.a,{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{basename:"/urlRedirector/",exact:!0,path:"/",children:Object(r.jsx)(O,{url:this.state.url})}),Object(r.jsx)(d.a,{basename:"/urlRedirector/",exact:!0,path:"/edit",children:Object(r.jsx)(f,{update:this.updateUrl})})]})})}):(this.readFromDatabase(),Object(r.jsx)("h1",{children:"Loading..."}))}}]),n}(a.a.Component);o.a.render(Object(r.jsx)(v,{}),s()("#root")[0])}},[[304,1,2]]]);
//# sourceMappingURL=main.5d3ab4e5.chunk.js.map