(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{27:function(e,t,a){e.exports=a(52)},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(23),i=a.n(r),s=(a(32),a(2)),l=a(3),o=a(5),u=a(4),m=a(11),d=a(6),p=(a(33),a(15)),h=a(9),f=a.n(h),v=a(14);function b(){return g.apply(this,arguments)}function g(){return(g=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.mercadolibre.com/sites/MLB/categories",e.next=4,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function E(){return y.apply(this,arguments)}function y(){return(y=Object(v.a)(f.a.mark((function e(){var t,a,n,c,r,i,s,l=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"",a=l.length>1&&void 0!==l[1]?l[1]:"",e.prev=2,n=t?"category=".concat(t):"",c=a?"q=".concat(encodeURI(a)):"",r="https://api.mercadolibre.com/sites/MLB/search?".concat(n).concat(n&&c?"&":"").concat(c),console.log(r),e.next=9,fetch(r);case 9:return i=e.sent,e.next=12,i.json();case 12:return s=e.sent,e.abrupt("return",s);case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})))).apply(this,arguments)}function N(e){return k.apply(this,arguments)}function k(){return(k=Object(v.a)(f.a.mark((function e(t){var a,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://api.mercadolibre.com/items/".concat(t),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var C=a(20),j="shoppingCartItems";localStorage.getItem("query")||localStorage.setItem("query",""),localStorage.getItem("catId")||localStorage.setItem("catId",""),localStorage.getItem(j)||localStorage.setItem(j,JSON.stringify([]));var O=function(){return JSON.parse(localStorage.getItem(j))},S=function(e){var t=JSON.parse(localStorage.getItem(j)).map((function(t){return t.id===e.id?Object(C.a)(Object(C.a)({},t),e):t}));localStorage.setItem(j,JSON.stringify(t))},q=function(e){var t=e.id,a=e.title,n=e.thumbnail,c=e.availableQuantity,r=e.quantity,i=JSON.parse(localStorage.getItem(j));if(i.some((function(t){return t.id===e.id}))){var s=i.find((function(t){return t.id===e.id}));return r=r<c&&r+s.quantity<c?r+s.quantity:c,S({id:t,title:a,thumbnail:n,availableQuantity:c,quantity:r})}var l=[].concat(Object(p.a)(i),[e]);localStorage.setItem(j,JSON.stringify(l))},I=function(e){var t=JSON.parse(localStorage.getItem(j)).filter((function(t){return t.id!==e.id}));localStorage.setItem(j,JSON.stringify(t))},x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.category,a=e.handleClick,n=e.id;return c.a.createElement("button",{className:"cat-button","data-testid":"category",type:"button",id:n,onClick:a},t)}}]),a}(c.a.Component),w=(a(35),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"load-sect"},c.a.createElement("p",{className:"loading"}))}}]),a}(c.a.Component)),Q=a(7),P=(a(36),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.handleClick,n=e.className,r=t.id,i=t.title,s=t.price,l=t.thumbnail,o=t.shipping,u=t.availableQuantity,d=o.free_shipping,p={title:i,id:r,thumbnail:l,price:s,availableQuantity:u};return c.a.createElement("section",{id:r,"data-testid":"product",className:n},c.a.createElement("h2",{className:"card-title"},i),c.a.createElement("img",{className:"card-img",src:l,alt:i}),c.a.createElement("p",{className:"card-price"},"R$ ".concat(s?s.toFixed(2).replace(/\./gm,","):"Sob consulta")),d&&c.a.createElement("p",{className:"card-ship","data-testid":"free-shipping"},c.a.createElement(Q.b,null),"Frete gr\xe1tis"),c.a.createElement(m.b,{className:"card-link","data-testid":"product-detail-link",to:"/project-online-store/product/".concat(r)},"Detalhes do produto"),c.a.createElement("button",{className:"card-add-cart","data-testid":"product-add-to-cart",type:"button",id:r,onClick:function(){return a(p)}},"Adiconar produto ao carrinho"))}}]),a}(c.a.Component)),F=(a(45),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.quantity,a=e.title,n=e.glow;return c.a.createElement("header",null,c.a.createElement(m.b,{to:"/project-online-store/"},c.a.createElement(Q.f,{className:"back-icon"})),c.a.createElement("h1",{className:"header-title"},a,c.a.createElement(Q.h,null)),c.a.createElement(m.b,{to:"/project-online-store/shopping-cart","data-testid":"shopping-cart-button",className:"shop-sect"},c.a.createElement(Q.j,{className:"shopping-cart-icon ".concat(n)}),c.a.createElement("p",{className:"qtd-cart","data-testid":"shopping-cart-size"},t)))}}]),a}(c.a.Component));F.defaultProps={glow:""};var M=F,_=(a(46),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).requestCategories=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:a=t.sent,e.setState({categories:a,loading:!1});case 4:case"end":return t.stop()}}),t)}))),e.handleClick=function(t){var a=t.target.id,n=e.state.query;e.setState({loading:!0,categoryId:a,showCat:!1},(function(){return e.getProducts(a,n)}))},e.getProducts=Object(v.a)(f.a.mark((function t(){var a,n,c,r,i=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:"",t.next=4,E(a,n);case 4:c=t.sent,r=c.results.map((function(e){return{id:e.id,title:e.title,thumbnail:e.thumbnail,price:e.price,shipping:e.shipping,availableQuantity:e.available_quantity}})),e.setState({products:r,loading:!1});case 7:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){var a=t.target;return e.setState({query:a.value})},e.handleSort=function(t){var a=t.target;e.setState({sort:a.value},(function(){return e.sortProd()}))},e.sortProd=function(){var t=e.state,a=t.products,n=t.sort,c=a;"dsc"===n&&(c=a.sort((function(e,t){return t.price-e.price}))),"asc"===n&&(c=a.sort((function(e,t){return e.price-t.price}))),e.setState({products:c})},e.searchProducts=function(){var t=e.state,a=t.query,n=t.categoryId;e.getProducts(n,a)},e.onClickAddProductCart=function(t){var a=t.title,n=t.id,c=t.thumbnail,r=t.price,i=t.availableQuantity;e.setState({glow:"glow"},(function(){var t=e.state.cartItems,s={title:a,id:n,thumbnail:c,price:r,quantity:1,availableQuantity:i};q(s);e.setState({cartItems:[].concat(Object(p.a)(t),[s])},(function(){setTimeout((function(){e.setState({glow:""})}),100)}))}))},e.showCats=function(){return e.setState((function(e){return{showCat:!e.showCat}}))},e.state={query:"",categories:[],loading:!0,products:[],categoryId:"",sort:"",cartItems:[],showCat:!1,glow:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.requestCategories(),this.setState({cartItems:O(),query:localStorage.getItem("query"),categoryId:localStorage.getItem("catId")},(function(){var t=e.state,a=t.query,n=t.categoryId;(a||n)&&e.getProducts(n,a)}))}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.query,a=e.categoryId;localStorage.setItem("query",t),localStorage.setItem("catId",a)}},{key:"render",value:function(){var e=this,t=this.state,a=t.categories,n=t.loading,r=t.products,i=t.sort,s=t.cartItems,l=t.showCat,o=t.glow,u=s.reduce((function(e,t){return e+t.quantity}),0);return c.a.createElement("div",null,c.a.createElement(M,{quantity:u,title:"FrontEnd Masters",glow:o}),n&&c.a.createElement(w,null),c.a.createElement("button",{type:"button",onClick:this.showCats,className:"cat-toggle-btn"},l?"Ocultar":"Mostrar categorias"),l&&!n&&c.a.createElement("section",{className:"buttons-sect"},a.map((function(t){return c.a.createElement(x,{key:t.id,id:t.id,category:t.name,handleClick:e.handleClick})}))),c.a.createElement("section",{className:"search-sect"},c.a.createElement("input",{className:"search-input",type:"text","data-testid":"query-input",name:"query",onChange:this.handleChange,placeholder:"Escreva um termo para sua pesquisa"}),c.a.createElement("button",{className:"search-btn",type:"button","data-testid":"query-button",onClick:this.searchProducts},"Pesquisar")),0===r.length&&c.a.createElement("p",{className:"guide-p","data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria."),!n&&r.length>0&&c.a.createElement("select",{className:"search-select",name:"sort",onChange:this.handleSort,value:i},c.a.createElement("option",{value:""},"Ordenar"),c.a.createElement("option",{value:"asc"},"Menor pre\xe7o"),c.a.createElement("option",{value:"dsc"},"Maior pre\xe7o")),!n&&r.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"search-result"},"N\xfamero de resultados: ".concat(r.length)),c.a.createElement("section",{className:"cards-sect"},r.map((function(t){return c.a.createElement(P,{key:t.id,product:t,handleClick:e.onClickAddProductCart,className:s.some((function(e){return e.id===t.id}))?"prod-card selected":"prod-card"})})))))}}]),a}(n.Component)),z=(a(47),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.product,t=e.title,a=e.thumbnail,n=e.price,r=e.quantity,i=e.id,s=n*r;return c.a.createElement("section",{className:"cart-item",id:i},c.a.createElement("img",{className:"cart-item-img",src:a,alt:t}),c.a.createElement("section",{className:"cart-item-text-sect"},c.a.createElement("section",{className:"title-price-sect"},c.a.createElement("h3",{className:"cart-item-title","data-testid":"shopping-cart-product-name"},t),c.a.createElement("p",{className:"cart-item-price"},"R$ ".concat(n?n.toFixed(2).replace(/\./gm,","):n))),c.a.createElement("section",{className:"cart-item-qtd-total-sect"},c.a.createElement("p",{"data-testid":"shopping-cart-product-quantity",className:"cart-item-qtd"},"Qtd: ".concat(r)),c.a.createElement("p",{className:"cart-item-total"},"R$ ".concat(s?s.toFixed(2).replace(/\./gm,","):s)))))}}]),a}(n.Component)),J=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).removeQuantity=function(t){var a=t.id,n=t.title,c=t.price,r=t.thumbnail,i=t.availableQuantity,s=t.quantity,l={id:a,title:n,price:c,thumbnail:r,quantity:s=0===s?0:s-1,availableQuantity:i};0===s?(alert("Esse produto ser\xe1 removido do seu carrinho"),I(l)):S(l),e.setState({loading:!0},(function(){e.setState({products:O(),loading:!1})}))},e.addQuantity=function(t){var a=t.id,n=t.title,c=t.price,r=t.thumbnail,i=t.availableQuantity,s=t.quantity;S({id:a,title:n,price:c,thumbnail:r,quantity:s=s<i?s+1:i,availableQuantity:i}),e.setState({loading:!0},(function(){e.setState({products:O(),loading:!1})}))},e.deleteProd=function(t){I(t),e.setState({loading:!0},(function(){e.setState({products:O(),loading:!1})}))},e.emptyCart=function(){var t=e.state.products;e.setState({loading:!0},(function(){t.forEach((function(e){return I(e)})),e.setState({products:O(),loading:!1})}))},e.state={products:[],loading:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=O();this.setState({products:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.products,n=t.loading,r=a.reduce((function(e,t){return e+t.price*t.quantity}),0),i=r?r.toFixed(2).replace(/\./gm,","):r,s=a.reduce((function(e,t){return e+t.quantity}),0);return c.a.createElement("section",null,c.a.createElement(M,{quantity:s,title:"Carrinho"}),n&&c.a.createElement(w,null),n||0!==a.length?c.a.createElement("section",{className:"cart-items-sect"},c.a.createElement("section",{className:"cart-cards-sect"},a.map((function(t){return c.a.createElement("section",{className:"cart-item-card",key:t.id},c.a.createElement("button",{className:"delete-btn",type:"button",onClick:function(){return e.deleteProd(t)}},"X"),c.a.createElement(z,{product:t}),c.a.createElement("section",{className:"cart-qtd-btn-sect"},c.a.createElement("button",{className:"cart-less-btn",type:"button","data-testid":"product-decrease-quantity",onClick:function(){return e.removeQuantity(t)}},"-"),c.a.createElement("button",{className:"cart-more-btn",type:"button","data-testid":"product-increase-quantity",onClick:function(){return e.addQuantity(t)}},"+")))}))),c.a.createElement("section",{className:"total-btn-sect"},c.a.createElement("section",{className:"cart-total-sect"},c.a.createElement("p",{className:"cart-total"},"Valor final:"),c.a.createElement("p",null,"R$ ".concat(i))),c.a.createElement("section",{className:"btn-sect"},c.a.createElement("button",{className:"final-btn",type:"button"},c.a.createElement(m.b,{to:"/project-online-store/checkout","data-testid":"checkout-products",className:"checkout-link"},"Finalizar compra")),c.a.createElement("button",{className:"clean-btn",type:"button",onClick:this.emptyCart},"Esvaziar carrinho")))):c.a.createElement("p",{"data-testid":"shopping-cart-empty-message",className:"empty-message"},"Seu carrinho est\xe1 vazio"))}}]),a}(n.Component),R=function(e){var t="evaluation-".concat(e);return JSON.parse(localStorage.getItem(t))},B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.attributes;return c.a.createElement("ul",{className:"specs-sect"},e.map((function(e){return c.a.createElement("li",{className:"spec-li",key:e.name},c.a.createElement("p",{className:"spec-p"},c.a.createElement("span",{className:"spec-attr"},"".concat(e.name,": ")),e.value_name))})))}}]),a}(c.a.Component),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleRateChange,a=e.rate,n=e.className,r="rate-label checked";return c.a.createElement("fieldset",{className:n,onChange:t},c.a.createElement("label",{className:5===a?r:"rate-label","data-testid":"5-rating",role:"presentation",htmlFor:"five",name:"rate"},c.a.createElement("input",{className:"input-radio",type:"radio",id:"five",value:"5",checked:5===a}),"\u2605"),c.a.createElement("label",{className:a>=4?r:"rate-label","data-testid":"4-rating",role:"presentation",htmlFor:"four",name:"rate"},c.a.createElement("input",{className:"input-radio",type:"radio",id:"four",value:"4",checked:4===a}),"\u2605"),c.a.createElement("label",{className:a>=3?r:"rate-label","data-testid":"3-rating",role:"presentation",htmlFor:"three",name:"rate"},c.a.createElement("input",{className:"input-radio",type:"radio",id:"three",value:"3",checked:3===a}),"\u2605"),c.a.createElement("label",{className:a>=2?r:"rate-label","data-testid":"2-rating",role:"presentation",htmlFor:"two",name:"rate"},c.a.createElement("input",{className:"input-radio",type:"radio",id:"two",value:"2",checked:2===a}),"\u2605"),c.a.createElement("label",{className:a>=1?r:"rate-label","data-testid":"1-rating",role:"presentation",htmlFor:"one",name:"rate"},c.a.createElement("input",{className:"input-radio",type:"radio",id:"one",value:"1",checked:1===a}),"\u2605"))}}]),a}(n.Component);D.defaultProps={handleRateChange:null,className:"rating"};a(48);var U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.id,t=R(e);return c.a.createElement("section",{className:"evals-sect"},t&&t.map((function(e){var t=e.email,a=e.rate,n=e.evalue,r=e.id;return c.a.createElement("section",{className:"eval-card",key:r},c.a.createElement("section",{className:"eval-line"},c.a.createElement("p",{className:"eval-email"},t),c.a.createElement(D,{className:"rating2",rate:a})),c.a.createElement("p",{className:"dets-eval"},n))})))}}]),a}(n.Component),A=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.attributes,a=e.id,n=e.show,r=e.changeClass,i=R(a),s=i&&i.reduce((function(e,t,a,n){var c=t.rate,r=n.length-1;return a<r?e+c:(e+c)/(r+1)}),0);return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"specs-eval-sect"},c.a.createElement("h3",{className:"dets-specs ".concat("specs"===n?n:""),onClick:function(){return r("specs")},role:"presentation"},"Especifica\xe7\xf5es t\xe9cnicas"),c.a.createElement("h3",{className:"dets-eval ".concat("eval"===n?n:""),onClick:function(){return r("eval")},role:"presentation"},"Avalia\xe7\xf5es")),"specs"===n&&c.a.createElement(B,{attributes:t}),c.a.createElement("section",{className:"eval-sect"},"eval"===n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"eval-score"},s&&s.toFixed(1),c.a.createElement(D,{className:"rating3",rate:Math.floor(s)})),c.a.createElement(m.b,{className:"eval-link",to:"/project-online-store/product/".concat(a,"/evaluation-forms")},c.a.createElement("button",{type:"button",className:"eval-btn"},"Avaliar produto")),c.a.createElement(U,{id:a}))))}}]),a}(c.a.Component),$=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dateCreated,a=e.lastUpdated,n=e.condition,r=e.availableQuantity,i=e.status,s=t.split("T")[0].split("-").reverse().join("/"),l=a.split("T")[0].split("-").reverse().join("/");return c.a.createElement("section",{className:"dets-header"},c.a.createElement("section",null,c.a.createElement("p",{className:"dets-p"},"Criado em: ".concat(s)),c.a.createElement("p",{className:"dets-p"},"Ultima atualiza\xe7\xe3o: ".concat(l)),c.a.createElement("p",{className:"dets-p"},"Condi\xe7\xe3o: ".concat(n))),c.a.createElement("section",{className:"dets-head-side"},c.a.createElement("p",{className:"dets-available"},"".concat(r," und")),"active"===i&&c.a.createElement(Q.e,{className:"dets-check"})))}}]),a}(c.a.Component),L=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.pictures,a=e.picIndex,n=e.title,r=e.zoom,i=e.prevPic,s=e.nextPic,l=e.zoomImg;return c.a.createElement("section",{className:"imgDetails"},t.length>0&&c.a.createElement(Q.f,{className:"prev-pic",onClick:i}),c.a.createElement("img",{onClick:l,role:"presentation",className:"dets-active-img ".concat(r?"zoom-img":""),src:t[a]&&t[a].url,alt:"".concat(n," - foto ").concat(a+1)}),t.length>0&&c.a.createElement(Q.g,{className:"next-pic",onClick:s}))}}]),a}(c.a.Component),T=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleClick,a=e.removeQuantity,n=e.quantity,r=e.addQuantity;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"dets-add-cart-btn",type:"button","data-testid":"product-detail-add-to-cart",onClick:t},c.a.createElement(Q.j,{className:"dets-shop-cart-icon"}),"Adicionar ao Carrinho"),c.a.createElement("button",{className:"dets-cart-less-btn",type:"button","data-testid":"product-decrease-quantity",onClick:a},"-"),c.a.createElement("p",{className:"dets-und"},n),c.a.createElement("button",{className:"dets-cart-more-btn",type:"button","data-testid":"product-increase-quantity",onClick:r},"+"))}}]),a}(c.a.Component),W=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.acceptsMercadopago;return c.a.createElement("section",{className:"dets-title-sect"},c.a.createElement("h1",{className:"dets-title","data-testid":"product-detail-name"},t),a&&c.a.createElement("img",{className:"dets-merc-pago",src:"https://selectra.net.br/sites/selectra.net.br/files/styles/article_hero/public/images/mercado-pago-825x293.png?itok=rla5wE_U",alt:"Aceita MercadoPago"}))}}]),a}(n.Component),V=(a(49),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleClick=function(){var t=e.state,a=t.title,n=t.id,c=t.thumbnail,r=t.price,i=t.quantity,s=t.availableQuantity;e.setState({glow:"glow"},(function(){q({title:a,id:n,thumbnail:c,price:r,quantity:i,availableQuantity:s});setTimeout((function(){e.setState({cartItems:O(),quantity:1,glow:""})}),50)}))},e.getProduct=function(){var t=Object(v.a)(f.a.mark((function t(a){var n,c,r,i,s,l,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,c=n.available_quantity,r=n.pictures,i=n.accepts_mercadopago,s=n.shipping.free_shipping,l=n.date_created,o=n.last_updated,e.setState({id:n.id,title:n.title,thumbnail:n.thumbnail,price:n.price,availableQuantity:c,condition:n.condition,pictures:r.filter((function(e){return e.url})),acceptsMercadopago:i,freeShipping:s,attributes:n.attributes,warranty:n.warranty,status:n.status,dateCreated:l,lastUpdated:o});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.changeClass=function(t){return e.setState({show:t})},e.prevPic=function(){var t=e.state.pictures,a=e.state.picIndex;a=0===a?t.length-1:a-1,e.setState({picIndex:a})},e.nextPic=function(){var t=e.state.pictures,a=e.state.picIndex;a=a===t.length-1?0:a+1,e.setState({picIndex:a})},e.selectPhoto=function(t){var a=t.target;return e.setState({picIndex:parseFloat(a.id)})},e.zoomImg=function(){return e.setState((function(e){return{zoom:!e.zoom}}))},e.removeQuantity=function(){var t=e.state.quantity;t=0===t?0:t-1,e.setState({quantity:t})},e.addQuantity=function(){var t=e.state.availableQuantity,a=e.state.quantity;a=a<t?a+1:t,e.setState({quantity:a})},e.state={id:"",title:"",thumbnail:"",price:0,availableQuantity:0,condition:"",pictures:[],acceptsMercadopago:!1,freeShipping:!1,attributes:[],warranty:"",status:"",dateCreated:"",lastUpdated:"",quantity:1,cartItems:O(),show:"specs",picIndex:0,zoom:!1,glow:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.getProduct(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.id,n=t.title,r=t.price,i=t.pictures,s=t.zoom,l=t.acceptsMercadopago,o=t.freeShipping,u=t.attributes,m=t.warranty,d=t.cartItems,p=t.dateCreated,h=t.lastUpdated,f=t.condition,v=t.availableQuantity,b=t.status,g=t.show,E=t.picIndex,y=t.quantity,N=t.glow,k=d.reduce((function(e,t){return e+t.quantity}),0),C=r?r.toFixed(2).replace(/\./gm,","):r;return c.a.createElement("section",null,c.a.createElement(M,{quantity:k,title:"FrontEnd Masters",glow:N}),c.a.createElement("section",{className:"prod-dets-sect"},c.a.createElement("section",{className:"dets-sect"},c.a.createElement($,{dateCreated:p,lastUpdated:h,condition:f,availableQuantity:v,status:b}),c.a.createElement(W,{title:n,acceptsMercadopago:l}),c.a.createElement(L,{pictures:i,picIndex:E,title:n,zoom:s,prevPic:this.prevPic,nextPic:this.nextPic,zoomImg:this.zoomImg}),c.a.createElement("section",{className:"dets-galery"},i.map((function(t,a){return c.a.createElement("img",{width:"30",className:"dets-galery-img",id:a,key:a,src:t.url,alt:"".concat(n," - foto ").concat(a+1),onClick:e.selectPhoto,role:"presentation"})}))),c.a.createElement("section",{className:"ship-price-sect"},c.a.createElement("h3",{className:"dets-price"},"R$ ".concat(C)),o&&c.a.createElement("p",{className:"dets-ship"},c.a.createElement(Q.b,{className:"dets-ship-icon"}),"Frete Gr\xe1tis")),c.a.createElement("section",{className:"btns-sect"},c.a.createElement(T,{handleClick:this.handleClick,removeQuantity:this.removeQuantity,quantity:y,addQuantity:this.addQuantity})),c.a.createElement("p",{className:"dets-warr"},m)),c.a.createElement("section",{className:"dets-spec-eval"},c.a.createElement(A,{show:g,changeClass:this.changeClass,attributes:u,id:a}))))}}]),a}(n.Component)),G=a(17),X=a(26),H=(a(50),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.text,n=e.childComp;return c.a.createElement("label",{className:"checkout-label",htmlFor:t},c.a.createElement("input",{className:"checkout-radio",type:"radio",name:"pay-method",id:t}),a,n)}}]),a}(c.a.Component));H.defaultProps={childComp:""};var K=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,c=a.value;e.setState(Object(G.a)({},n,c))},e.handleClick=function(t){t.preventDefault(),e.state.cartItems.forEach((function(e){return I(e)})),localStorage.setItem("catId",""),localStorage.setItem("query",""),e.setState({fullName:"",email:"",cpf:"",phone:"",cep:"",address:"",cartItems:[],clicked:!0})},e.state={fullName:"",email:"",cpf:"",phone:"",cep:"",address:"",cartItems:O(),clicked:!1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.fullName,a=e.email,n=e.cpf,r=e.phone,i=e.cep,s=e.address,l=e.cartItems,o=e.clicked,u=l.reduce((function(e,t){return e+t.quantity}),0),m=l.reduce((function(e,t){return e+t.price*t.quantity}),0),p=m?m.toFixed(2).replace(/\./gm,","):m;return c.a.createElement("div",null,c.a.createElement(M,{title:"Checkout",quantity:u}),c.a.createElement("section",{className:"checkout-form-sect"},c.a.createElement("section",{className:"checkout-cart"},l.map((function(e){return c.a.createElement(z,{key:e.id,product:e})})),c.a.createElement("section",{className:"checkout-total-sect"},c.a.createElement("p",{className:"checkout-total"},"Total: R$ ".concat(p)),c.a.createElement("p",{className:"checkout-total"},"Qtd: ".concat(u)))),c.a.createElement("form",{className:"checkout-form"},c.a.createElement("fieldset",{className:"checkout-fieldset"},c.a.createElement("legend",{className:"checkout-legend"},"Informa\xe7\xf5es do Comprador"),c.a.createElement("input",{className:"checkout-input",type:"text",placeholder:"Nome completo","data-testid":"checkout-fullname",name:"fullName",value:t,onChange:this.handleChange}),c.a.createElement("input",{className:"checkout-input",type:"email",placeholder:"Email","data-testid":"checkout-email",name:"email",value:a,onChange:this.handleChange}),c.a.createElement("input",{className:"checkout-input",type:"text",placeholder:"___.___.___-__","data-testid":"checkout-cpf",name:"cpf",value:n,minLength:"11",maxLength:"11",onChange:this.handleChange}),c.a.createElement("input",{className:"checkout-input",type:"text",placeholder:"(00) 0000-0000","data-testid":"checkout-phone",name:"phone",value:r,onChange:this.handleChange}),c.a.createElement("input",{className:"checkout-input",type:"text",placeholder:"00000-000","data-testid":"checkout-cep",name:"cep",value:i,onChange:this.handleChange}),c.a.createElement("input",{className:"checkout-input",type:"text",placeholder:"Endere\xe7o","data-testid":"checkout-address",name:"address",value:s,onChange:this.handleChange})),c.a.createElement("fieldset",{className:"checkout-fieldset"},c.a.createElement("legend",{className:"checkout-legend"},"M\xe9todo de pagamento"),c.a.createElement(H,{id:"boleto",text:"Boleto",childComp:c.a.createElement(Q.a,{className:"checkout-icon"})}),c.a.createElement(H,{id:"visa",text:"Visa",childComp:c.a.createElement(Q.d,{className:"checkout-icon"})}),c.a.createElement(H,{id:"master",text:"MasterCard",childComp:c.a.createElement(Q.c,{className:"checkout-icon"})}),c.a.createElement(H,{id:"elo",text:"Elo",childComp:c.a.createElement(Q.i,{className:"checkout-icon"})}),c.a.createElement(H,{id:"american",text:"American Express",childComp:c.a.createElement(X.a,{className:"checkout-icon"})})),c.a.createElement("button",{className:"checkout-btn",type:"button",onClick:this.handleClick},"Finalizar Compra"))),o&&c.a.createElement(d.a,{to:"/project-online-store/"}))}}]),a}(n.Component),Y=(a(51),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getProduct=function(){var t=Object(v.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({title:n.title,price:n.price,picture:n.pictures.filter((function(e){return e.url}))[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.rate,c=a.email,r=a.evalue,i=a.id,s={id:Math.random(),prod:i,email:c,evalue:r,rate:n};!function(e,t){var a="evaluation-".concat(e),n=JSON.parse(localStorage.getItem(a)),c=n?[].concat(Object(p.a)(n),[t]):[t];localStorage.setItem(a,JSON.stringify(c))}(i,s),e.setState((function(e){return{rate:0,email:"",evalue:"",disabled:!0,evaluations:[].concat(Object(p.a)(e.evaluations),[s]),saved:!0}}))},e.handleChange=function(t){var a=t.target,n=a.name,c=a.value;console.log(a.name,a.value),e.setState(Object(G.a)({},n,c),(function(){return e.validationBtn()}))},e.validationBtn=function(){var t=e.state,a=t.rate,n=t.email,c=0!==a&&n;e.setState({disabled:!c})},e.handleRateChange=function(t){var a=t.target;e.setState({rate:parseFloat(a.value)},(function(){return e.validationBtn()}))},e.state={id:"",rate:0,email:"",evalue:"",disabled:!0,evaluations:[],saved:!1,title:"",price:0,picture:"",cartItems:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.getProduct(e),this.setState({id:e,cartItems:O()})}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.rate,n=e.email,r=e.evalue,i=e.disabled,s=e.saved,l=e.title,o=e.price,u=e.picture,m=e.cartItems.reduce((function(e,t){return e+t.quantity}),0);return c.a.createElement("div",null,c.a.createElement(M,{title:"FrontEnd Masters",quantity:m}),c.a.createElement("section",{className:"eval-form-sect"},c.a.createElement("section",{className:"eval-prod-sect"},c.a.createElement("img",{src:u.url,alt:l}),c.a.createElement("section",{className:"title-price-sect"},c.a.createElement("h2",null,l),c.a.createElement("p",null,"Pre\xe7o: R$ ".concat(o)))),c.a.createElement("form",{className:"eval-form"},c.a.createElement("section",{className:"eval-from-line"},c.a.createElement("input",{className:"rate-input","data-testid":"product-detail-email",id:"input-email",type:"text",name:"email",value:n,onChange:this.handleChange,placeholder:"E-mail"}),c.a.createElement(D,{className:"rating",rate:a,handleRateChange:this.handleRateChange})),c.a.createElement("textarea",{className:"rate-textarea",name:"evalue",value:r,"data-testid":"product-detail-evaluation",id:"comment",placeholder:"Insira um coment\xe1rio sobre a avalia\xe7\xe3o:",onChange:this.handleChange}),c.a.createElement("button",{className:"rate-btn","data-testid":"submit-review-btn",type:"submit",disabled:i,onClick:this.handleSubmit},"Salvar"))),s&&c.a.createElement(d.a,{to:"/project-online-store/product/".concat(t)}))}}]),a}(n.Component)),Z=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement(d.d,null,c.a.createElement(d.b,{exact:!0,path:"/project-online-store/",component:_}),c.a.createElement(d.b,{path:"/project-online-store/shopping-cart",component:J}),c.a.createElement(d.b,{path:"/project-online-store/product/:id/evaluation-forms",component:Y}),c.a.createElement(d.b,{path:"/project-online-store/product/:id",component:V}),c.a.createElement(d.b,{path:"/project-online-store/checkout",component:K})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.178f3361.chunk.js.map