(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Dtc0:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),o=(a("0mN4"),a("8W6m")),i=a("9eSz"),l=a.n(i),c=a("p3AD"),m=function(){var t=o.data,e=t.site.siteMetadata,a=e.author,n=e.social;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},r.a.createElement(l.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,"嗨！我是",r.a.createElement("strong",null,a),"，是一位大前端爱好者。如果您感兴趣，可以访问我的"," ",r.a.createElement("a",{href:"https://github.com/"+n.github},"GitHub")))},s=(a("91GP"),a("Wbzz")),u=function(t){var e,a=t.location,n=t.title,o=t.children;return e="/"===a.pathname?r.a.createElement("h1",{style:Object.assign({},Object(c.b)(1),{marginBottom:Object(c.a)(1.5),marginTop:0})},r.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},r.a.createElement("header",null,e),r.a.createElement("main",null,o),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Kim"," "))},d=a("EH9Q"),p=a("TJpk"),f=a.n(p),g=function(t){var e=t.description,a=t.lang,n=t.meta,o=t.title,i=d.data.site,l=e||i.siteMetadata.description;return r.a.createElement(f.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s ",meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(n)})};g.defaultProps={lang:"en",meta:[],description:""};var h=g,E=function(t){return t.posts.map((function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return console.log(e.frontmatter,e.fields),r.a.createElement("div",{key:e.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(c.a)(.25),fontSize:"20px"}},r.a.createElement(s.Link,{style:{boxShadow:"none",color:"rgb(211,54,105)"},to:e.fields.slug},a)),r.a.createElement("small",null,e.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},b=function(t){var e=t.update,a=t.posts,n=function(t){return function(){var n=a.filter((function(e){return e.node.frontmatter.category===t}));e(n)}};return a.map((function(t){var e=t.node,a=e.frontmatter.category||"null";return r.a.createElement("div",{key:e.fields.slug,style:{display:"flex"}},r.a.createElement("a",{href:"",onClick:n(a)},a))}))};a.d(e,"pageQuery",(function(){return y}));e.default=function(t){var e=t.data,a=t.location,o=e.site.siteMetadata.title,i=e.allMarkdownRemark.edges,l=Object(n.useState)(i),c=l[0],s=l[1];return r.a.createElement(u,{location:a,title:o},r.a.createElement(h,{title:o}),r.a.createElement(m,null),r.a.createElement(b,{update:s,posts:i}),r.a.createElement(E,{posts:c}))};var y="2329358695"}}]);