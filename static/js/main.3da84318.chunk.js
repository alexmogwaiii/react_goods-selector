(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(3),s=a.n(c),r=a(1),d=a(4),l=a(5),i=a(7),m=a(6),u=(a(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),_=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:[],countOfGoods:0},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(r.a)(e.selectedGoods),[t]),countOfGoods:e.countOfGoods+1}}))},e.removeGood=function(t){e.setState((function(e){var a=e.selectedGoods.indexOf(t);if(-1!==a){var o=Object(r.a)(e.selectedGoods);return o.splice(a,1),{selectedGoods:o,countOfGoods:e.countOfGoods-1}}return null}))},e.clearList=function(){e.setState({selectedGoods:[],countOfGoods:0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.selectedGoods,o=t.countOfGoods;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__container"},n.a.createElement("h1",{className:"header__title"},"Selected goods:"),n.a.createElement("div",{className:"header__goods"},a.join(", ")),n.a.createElement("h2",{className:"header__count"},"Count of Goods:"," - ",o),n.a.createElement("button",{className:"header__btn",type:"button",onClick:function(){e.clearList()}},"ClearList"))),n.a.createElement("main",{className:"main"},n.a.createElement("ul",{className:"main__list"},u.map((function(t){return n.a.createElement("li",{key:t,className:a.includes(t)?"main__good-item selected":"main__good-item"},n.a.createElement("div",{className:"main__good-name"},t),n.a.createElement("button",{type:"button",className:"main__good-add main__btn",onClick:function(a){e.addGood(t,a)}},"Add"),n.a.createElement("button",{type:"button",className:"main__good-remove main__btn",onClick:function(a){e.removeGood(t,a)}},"Remove"))})))))}}]),a}(n.a.Component);s.a.render(n.a.createElement(_,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3da84318.chunk.js.map