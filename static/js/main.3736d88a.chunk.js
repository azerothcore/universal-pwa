(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,n){"use strict";n.r(t);var a=n(73),r=n(1),c=n.n(r),o=n(18),i=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(79),n(81);var s=n(72),l=n(53),u=n(196),p=n(62),h=n(67),m=n(19),d=n(20),b=n(23),f=n(21),v=n(22),E=n(28),w=n(190),O=n(191),j=n(192),g=n(197),y=n(17),k=n.n(y),x=n(27),C=n(64),P=n.n(C),S=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={content:"# Loading..."},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(x.a)(k.a.mark(function e(){var t,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/HW-Core/universal-pwa/master/README.md");case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,this.setState({content:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(P.a,{source:this.state.content}))}}]),t}(c.a.Component),U=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(b.a)(this,Object(f.a)(t).call(this))).state={posts:[]},e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(x.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"//jsonplaceholder.typicode.com/posts",e.next=3,fetch("//jsonplaceholder.typicode.com/posts");case 3:return t=e.sent,e.t0=this,e.next=7,t.json();case 7:e.t1=e.sent,e.t2={posts:e.t1},e.t0.setState.call(e.t0,e.t2);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},this.state.posts.length&&this.state.posts.slice(0,10).map(function(e,t){return c.a.createElement("p",{key:t},c.a.createElement(w.a,{to:"/blog/"+e.id+"/"},e.title))})||"Loading...")}}]),t}(c.a.Component),W=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={post:""},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(x.a)(k.a.mark(function e(){var t,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"//jsonplaceholder.typicode.com/posts/",e.next=3,fetch("//jsonplaceholder.typicode.com/posts/"+this.props.match.params.id);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({post:n.body});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",null,this.state.post))}}]),t}(c.a.Component),A=function(){return c.a.createElement("div",null,c.a.createElement("input",{type:"text"}),c.a.createElement("button",null,"POST"))},B={websiteUrl:"undefined"!==typeof window?"http://"+window.location.hostname:"http://127.0.0.1:3000",sitemapBase:"https://hw-core.github.io/universal-pwa/",basePath:"/universal-pwa/",apiUrl:"undefined"!==typeof window?"http://"+window.location.hostname+":4000":"http://127.0.0.1:4000",clientPort:"3000",prerender:{enabled:!0,port:6e4,host:"http://127.0.0.1",cache_maxpages:1e3,cache_ttl:3600},path:"graphql"},D=function(e){return c.a.createElement(g.a,{basename:B.basePath},c.a.createElement("div",null,e.children,c.a.createElement(O.a,null,c.a.createElement(j.a,{exact:!0,path:"/",component:S}),c.a.createElement(j.a,{exact:!0,path:"/blog/",component:U}),c.a.createElement(j.a,{path:"/blog/:id",component:W})),c.a.createElement(O.a,null,c.a.createElement(j.a,{path:"/app/",component:A}))))},H=n(54),M=n(29),N=n(55),L=n(11);M.b.add(N.a,N.b);var T=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).toggle=n.toggle.bind(Object(E.a)(Object(E.a)(n))),n.state={isOpen:!1},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"componentDidMount",value:function(){window.prerenderReady=!0}},{key:"render",value:function(){return c.a.createElement(D,null,c.a.createElement(L.e,{color:"light",light:!0,expand:"md"},c.a.createElement(L.f,{href:"https://github.com/HW-Core/universal-pwa"},"HW Universal PWA"),c.a.createElement(L.g,{onClick:this.toggle}),c.a.createElement(L.a,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(L.b,{navbar:!0},c.a.createElement(L.c,null,c.a.createElement(L.d,{to:"/",tag:w.a},c.a.createElement(H.a,{icon:"home"})," Home")),c.a.createElement(L.c,null,c.a.createElement(L.d,{to:"/blog/",tag:w.a},c.a.createElement(H.a,{icon:"rss-square"})," Blog")),c.a.createElement(L.c,null,c.a.createElement(L.d,{to:"/app/",tag:w.a},"Admin"))))))}}]),t}(c.a.Component),_=Object(p.a)(function(e,t){var n=t.headers,r=localStorage.getItem("AUTH_TOKEN");return{headers:Object(a.a)({},n,{authorization:r?"Bearer ".concat(r):""})}}),q=Object(h.createUploadLink)({uri:B.apiUrl+"/"+B.path}),I=new l.a({link:_.concat(q),cache:new u.a}),J=c.a.createElement("div",null,c.a.createElement(s.ApolloProvider,{client:I},c.a.createElement(T,null))),R=document.getElementById("root");R.hasChildNodes()?i.a.hydrate(J,R):i.a.render(J,R),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,n){e.exports=n(185)},81:function(e,t,n){}},[[74,2,1]]]);
//# sourceMappingURL=main.3736d88a.chunk.js.map