(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),a=r.n(n),o=r("6Gk8"),l=r("Bl7J"),i=r("vrFN"),c=r("p3AD"),p=r("Wbzz"),s=function(t){return t.posts.map((function(t){var e=t.node,r=e.frontmatter.title||e.fields.slug;return a.a.createElement("div",{key:e.fields.slug},a.a.createElement("h3",{style:{marginBottom:Object(c.a)(.25),fontSize:"20px"}},a.a.createElement(p.Link,{style:{boxShadow:"none",color:"rgb(211,54,105)"},to:e.fields.slug},r)),a.a.createElement("small",null,e.frontmatter.date),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))};r.d(e,"pageQuery",(function(){return m}));var u=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return a.a.createElement(l.a,{location:this.props.location,title:e},a.a.createElement(i.a,{title:e}),a.a.createElement(o.a,null),a.a.createElement(s,{posts:r}))},n}(a.a.Component),m=(e.default=u,"2785444898")}}]);