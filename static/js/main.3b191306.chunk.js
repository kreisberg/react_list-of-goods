(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n,r=s(4),c=s.n(r),a=s(5),i=s(6),o=s(9),l=s(7),u=s(8),h=s(1),d=(s(14),s(15),s(2)),b=s.n(d),p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var N=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={sortType:n.NONE,isReversed:!1},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleSortAlphabetically=function(){e.setState({sortType:n.ALPHABET})},e.handleSortByLength=function(){e.setState({sortType:n.LENGTH})},e.handleReset=function(){e.setState({sortType:n.NONE,isReversed:!1})},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.sortType,s=e.isReversed,r=function(e,t){var s=t.sortType,r=t.isReversed,c=Object(u.a)(e);switch(s){case n.ALPHABET:c.sort((function(e,t){return e.localeCompare(t)}));break;case n.LENGTH:c.sort((function(e,t){return e.length-t.length}));case n.NONE:}return r&&c.reverse(),c}(j,{sortType:t,isReversed:s});return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":t!==n.ALPHABET,pulse:t===n.ALPHABET}),onClick:this.handleSortAlphabetically,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:b()("button is-success",{"is-light":t!==n.LENGTH,pulse:t===n.LENGTH}),onClick:this.handleSortByLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:b()("button is-warning",{"is-light":!s,pulse:s}),onClick:this.handleReverse,children:"Reverse"}),t!==n.NONE||s?Object(p.jsx)("button",{type:"button",onClick:this.handleReset,className:"button is-danger",children:"Reset"}):""]}),Object(p.jsx)("div",{children:Object(p.jsx)("ul",{children:r.map((function(e){return Object(p.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})}}]),s}(h.Component);c.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3b191306.chunk.js.map