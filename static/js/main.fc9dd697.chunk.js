(this["webpackJsonprock-paper-scissors-lizard-spock-ui"]=this["webpackJsonprock-paper-scissors-lizard-spock-ui"]||[]).push([[0],{23:function(e,n,t){e.exports=t.p+"static/media/rock.ff826bd1.png"},24:function(e,n,t){e.exports=t.p+"static/media/paper.7c607c3d.png"},25:function(e,n,t){e.exports=t.p+"static/media/scissors.73c012ea.jpg"},26:function(e,n,t){e.exports=t.p+"static/media/lizard.2a42d61e.jpg"},27:function(e,n,t){e.exports=t.p+"static/media/spock.524f1a73.png"},29:function(e,n,t){e.exports=t(53)},53:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(19),o=t.n(c),l=t(5),u=t.n(l),i=t(4),s=t(6),p=t.n(s),d=Object(r.createContext)([]),m=function(e){var n=e.children,t=Object(r.useState)("https://codechallenge.boohma.com"),c=Object(i.a)(t,2),o=c[0],l={setUrl:c[1],url:o};return a.a.createElement(d.Provider,{value:l},n)},f=d,v=Object(r.createContext)({computerMove:null,onMoveSelected:function(){},playerMove:null}),h=function(e){var n=e.children,t=Object(r.useState)(),c=Object(i.a)(t,2),o=c[0],l=c[1],s=Object(r.useState)(),d=Object(i.a)(s,2),m=d[0],h=d[1],b=Object(r.useState)([]),x=Object(i.a)(b,2),g=x[0],E=x[1],j=Object(r.useContext)(f).url,w={computerMove:o,onMoveSelected:function(e){var n,t,r,a;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return h(e),l(null),c.next=4,u.a.awrap(p.a.post("".concat(j,"/play"),{player:e},{headers:{"Content-Type":"application/json"}}));case 4:n=c.sent,t=n.data,r=t.computer,a=t.results,g.push(a),g.length>10?E(g.slice(1)):E(g),l(r);case 9:case"end":return c.stop()}}))},playerMove:m,results:g};return a.a.createElement(v.Provider,{value:w},n)},b=v,x=Object(r.createContext)([]),g=function(e){var n=e.children,t=Object(r.useState)([]),c=Object(i.a)(t,2),o=c[0],l=c[1],s=Object(r.useContext)(f).url;Object(r.useEffect)((function(){!function(){var e;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(p.a.get("".concat(s,"/choices")));case 2:e=n.sent,l(e.data);case 4:case"end":return n.stop()}}))}()}),[]);var d={moves:o};return a.a.createElement(x.Provider,{value:d},n)},E=x,j=t(1),w=t(2),k=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Credits"),"Pictures taken from",a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{alt:"Lizard",href:"https://www.istockphoto.com/vector/friendly-green-iguana-in-flat-style-vector-gm862153016-142888289"},"Lizard")),a.a.createElement("li",null,a.a.createElement("a",{alt:"Spock",href:"https://www.pinclipart.com/pindetail/ohwhox_star-trek-spock-fallout-star-trek-spock-fallout/"},"Spock"))))};function O(){var e=Object(j.a)(["\n    color: darkgoldenrod;\n    font-weight: bold;\n"]);return O=function(){return e},e}function y(){var e=Object(j.a)(["\n    text-align: center;\n"]);return y=function(){return e},e}var S=w.a.div(y()),C=w.a.em(O()),M=function(){var e=Object(r.useContext)(b).results,n=e.filter((function(e){return"win"===e})).length,t=e.filter((function(e){return"tie"===e})).length,c=e.filter((function(e){return"lose"===e})).length,o=e.length>0&&e[e.length-1]||null;return a.a.createElement(S,null,a.a.createElement("h2",null,o&&"You ".concat(o,"!")),a.a.createElement("p",null,a.a.createElement(C,null,"".concat(n," wins, ").concat(t," ties, ").concat(c," losses"))),a.a.createElement("p",null,"(10 most recent rounds)"))},z=t(23),P=t.n(z),U=t(24),B=t.n(U),F=t(25),L=t.n(F),W=t(26),I=t.n(W),J=t(27),N=t.n(J);function R(){var e=Object(j.a)(["\n    border-radius: 50px;\n    box-shadow: ",";\n    height: 10vh;\n    margin: 10px;\n    width: 10vh;\n\n    ","\n"]);return R=function(){return e},e}var Y=w.a.img(R(),(function(e){return e.isSelected?"darkgoldenrod 0px 0px 10px 1px":""}),(function(e){return e.isClickable?"\n        :hover {\n            box-shadow: darkgreen 0px 0px 10px 1px;\n            cursor: pointer;\n        }\n    ":""})),A={lizard:I.a,paper:B.a,rock:P.a,scissors:L.a,spock:N.a},D=function(e){var n=e.onSelect,t=e.selected;return Object(r.useContext)(E).moves.map((function(e){var r=e.id,c=e.name;return a.a.createElement(Y,{src:A[c],key:r,isSelected:t===r,isClickable:!!n,onClick:n?function(){return n(r)}:function(){}})}))};function G(){var e=Object(j.a)(["\n\n"]);return G=function(){return e},e}var H=w.a.div(G()),T=function(){var e=Object(r.useContext)(b),n=e.computerMove,t=e.onMoveSelected,c=e.playerMove;return a.a.createElement(H,null,a.a.createElement("div",null,a.a.createElement("h2",null,"Your move"),a.a.createElement(D,{selected:c,onSelect:t})),a.a.createElement("div",null,a.a.createElement("h2",null,"Computer's move"),a.a.createElement(D,{selected:n})))};function $(){var e=Object(j.a)(["\n    color: red;\n"]);return $=function(){return e},e}function _(){var e=Object(j.a)(["\n    border: 1px solid lightgray;\n    border-radius: 3px;\n    display: flex;\n    flex-direction: column;\n    max-width: 500px;\n    padding: 0;\n\n    @media only screen and (min-width: 300px) {\n        flex-direction: row;\n    }\n"]);return _=function(){return e},e}function q(){var e=Object(j.a)(["\n    ","\n    background-color: lightgray;\n    box-shadow: none;\n    border: none;\n    color: white;\n    flex-grow: 0;\n    font-weight: bold;\n    width: 75px;\n"]);return q=function(){return e},e}function K(){var e=Object(j.a)(["\n    ","\n    border: none;\n    flex-grow: 1;\n"]);return K=function(){return e},e}var Q=w.a.input(K(),"\n    padding: 10px;\n"),V=w.a.button(q(),"\n    padding: 10px;\n"),X=w.a.div(_()),Z=w.a.p($()),ee=function(){var e=Object(r.useContext)(f),n=e.setUrl,t=e.url,c=Object(r.useState)(t),o=Object(i.a)(c,2),l=o[0],u=o[1],s=l&&l.endsWith("/");return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Game service url"),a.a.createElement(X,null,a.a.createElement(Q,{value:l,onChange:function(e){return u(e.target.value)}}),a.a.createElement(V,{onClick:function(){return n(l)}},"Save")),s&&a.a.createElement(Z,null,"Please delete trailing slash from url"))};function ne(){var e=Object(j.a)(["\n    text-align: center;\n"]);return ne=function(){return e},e}function te(){var e=Object(j.a)(["\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  padding: 20px;\n"]);return te=function(){return e},e}var re=w.a.div(te()),ae=w.a.div(ne()),ce=function(){return a.a.createElement(re,null,a.a.createElement(ae,null,a.a.createElement("h1",null,"Rock Paper Scissors Lizard Spock!"),a.a.createElement("p",null,"Select your move, and see if you can beat the computer! (you probably can)")),a.a.createElement(T,null),a.a.createElement(M,null),a.a.createElement(ee,null),a.a.createElement(k,null))};var oe=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null,a.a.createElement(g,null,a.a.createElement(h,null,a.a.createElement(ce,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.fc9dd697.chunk.js.map