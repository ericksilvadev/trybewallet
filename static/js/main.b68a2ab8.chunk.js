(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{33:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=a(21),o=a(8),s=(a(42),a(3)),u=a(16),m=a(4),d=a(5),p=a(10),h=a(7),b=a(6),E=a(24),v=a.n(E),g=a(30),f=function(){return{type:"FETCH_API"}},O=function(){return function(){var e=Object(g.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(f),e.next=3,fetch("https://economia.awesomeapi.com.br/json/all");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t({type:"GET_CURRENCIES",payload:n});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",validEmail:!0,validPassword:!0,redirect:!1,activeBtn:!1},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.validate=n.validate.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){localStorage.expenses||(localStorage.setItem("expenses",JSON.stringify([])),localStorage.setItem("total",JSON.stringify(0)))}},{key:"validate",value:function(){var e=this.state,t=e.email,a=e.password,n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/(.+){6,25}/;return!n.test(t)&&t.length>5?(this.setState({validEmail:!1,activeBtn:!1}),!1):(this.setState({validEmail:!0}),!r.test(a)&&a.length>2?(this.setState({validPassword:!1,activeBtn:!1}),!1):(this.setState({validPassword:!0}),r.test(a)&&n.test(t)?(this.setState({validPassword:!0,activeBtn:!0}),!0):void 0))}},{key:"handleChange",value:function(e){var t=this,a=e.target,n=a.value,r=a.name;this.setState(Object(u.a)({},r,n),(function(){return t.validate()}))}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props.saveEmail,a=this.state.email;this.validate()&&(t(a),this.setState({redirect:!0}))}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.redirect,l=e.activeBtn,c=e.validEmail,i=e.validPassword;return n?r.a.createElement(s.a,{to:"/carteira"}):r.a.createElement("div",{className:"home-page"},r.a.createElement("section",{className:"info-container"},r.a.createElement("img",{src:"/images/wallet.png",alt:"wallet icon"}),r.a.createElement("p",null,"Tenha controle das suas despesas de forma r\xe1pida e pr\xe1tica")),r.a.createElement("section",{className:"login-container"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Bem vindo ao TrybeWallet!"),r.a.createElement("h2",{className:"login-title"},"Fa\xe7a login para acessar sua conta*")),r.a.createElement("form",{action:"#",className:"login-form"},r.a.createElement("div",{className:"login-inputs-container"},r.a.createElement("label",{htmlFor:"email"},"Email*",r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"email@exemplo.com",autoComplete:"off","data-testid":"email-input",className:c?"login-input":"invalid-email login-input",name:"email",value:t,onChange:this.handleChange}),!c&&r.a.createElement("p",{className:"email-error"},"Email inv\xe1lido")),r.a.createElement("label",{htmlFor:"password"},"Senha*",r.a.createElement("br",null),r.a.createElement("input",{type:"password","data-testid":"password-input",className:i?"pass-input":"invalid-pass pass-input",name:"password",value:a,onChange:this.handleChange}),!i&&r.a.createElement("p",{className:"pass-error"},"A senha deve conter no m\xednimo 6 caracteres")),r.a.createElement("button",{type:"submit",className:"login-btn",onClick:this.handleClick,disabled:!l},"Entrar"))),r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"*Todas as informa\xe7\xf5es inseridas N\xc3O s\xe3o salvas. Este \xe9 um site fict\xedcio."))))}}]),a}(r.a.Component),j=Object(o.b)(null,(function(e){return{saveEmail:function(t){return e(function(e){return{type:"SAVE_EMAIL",payload:e}}(t))}}}))(y),S=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),t=JSON.parse(localStorage.getItem("total"));return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"total"},r.a.createElement("h2",null,t<0?e.format(0):e.format(t)),r.a.createElement("p",{"data-testid":"total-field"},"Despesas totais")),r.a.createElement("div",{className:"currency-container"},r.a.createElement("p",{"data-testid":"header-currency-field"},"Moeda de convers\xe3o"),r.a.createElement("p",{className:"currency"},"BRL")))}}]),a}(r.a.Component);S.defaultProps={total:0};var N=Object(o.b)((function(e){return{email:e.user.email,total:e.wallet.total}}),null)(S),x=a(13),C=a(1),w=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onChange,a=e.value;return r.a.createElement("label",{htmlFor:"category"},"Tag",r.a.createElement("select",{name:"tag",id:"category",value:a,onChange:t,"data-testid":"tag-input"},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade")))}}]),a}(r.a.Component),k=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onChange,a=e.value;return r.a.createElement("label",{htmlFor:"payment"},"M\xe9todo de Pagamento",r.a.createElement("select",{"data-testid":"method-input",name:"method",id:"payment",value:a,onChange:t},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito")))}}]),a}(r.a.Component),F={value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"},I=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state=F,n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(u.a)({},n,a))}},{key:"handleSubmit",value:function(e){(0,this.props.getCurrencies)(),e.preventDefault();var t=JSON.parse(localStorage.getItem("expenses")),a=JSON.parse(localStorage.getItem("total")),n=this.props,r=n.currencies,l=n.addExpense,c=this.state,i=c.value*r[c.currency].ask;l(Object(C.a)(Object(C.a)({id:t.length},this.state),{},{exchangeRates:r}),a+i),this.setState(F)}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.description,n=e.currency,l=e.method,c=e.tag,i=this.props.currencies,o=Object(x.a)(Object.keys(i)).filter((function(e){return 3===e.length}));return r.a.createElement("form",{className:"expenses-form",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"value"},"Valor",r.a.createElement("input",{className:"value",type:"number",id:"value",name:"value",value:t,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"currency"},"Moeda",r.a.createElement("select",{name:"currency",id:"currency",value:n,onChange:this.handleChange},o.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement(k,{onChange:this.handleChange,value:l}),r.a.createElement(w,{onChange:this.handleChange,value:c}),r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o",r.a.createElement("textarea",{id:"description",type:"text",name:"description",value:a,onChange:this.handleChange})),r.a.createElement("button",{className:"add",type:"submit"},"Adicionar"))}}]),a}(r.a.Component),D=Object(o.b)((function(e){return{currencies:e.wallet.currencies,expenses:e.wallet.expenses,total:e.wallet.total}}),(function(e){return{getCurrencies:function(){return e(O())},addExpense:function(t,a){return e(function(e,t){return{type:"ADD_EXPENSE",payload:e,total:t}}(t,a))}}}))(I),J={value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"},T=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state=J,n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(u.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("expenses")),a=JSON.parse(localStorage.getItem("total")),n=this.props,r=n.editExpense,l=n.editId,c=this.state.value,i=t[Number(l)].exchangeRates,o=c*i.ask;r(Object(C.a)(Object(C.a)({id:l},this.state),{},{exchangeRates:i}),a+o)}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.description,n=e.currency,l=e.method,c=e.tag,i=this.props.currencies,o=Object(x.a)(Object.keys(i)).filter((function(e){return 3===e.length}));return r.a.createElement("form",{className:"expenses-form",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"value"},"Valor",r.a.createElement("input",{className:"value",type:"number",id:"value","data-testid":"value-input",name:"value",value:t,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"currency"},"Moeda",r.a.createElement("select",{name:"currency","data-testid":"currency-input",id:"currency",value:n,onChange:this.handleChange},o.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement(k,{onChange:this.handleChange,value:l}),r.a.createElement(w,{onChange:this.handleChange,value:c}),r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o",r.a.createElement("textarea",{"data-testid":"description-input",id:"description",type:"text",name:"description",value:a,onChange:this.handleChange})),r.a.createElement("button",{className:"edit",type:"submit"},"Editar"))}}]),a}(r.a.Component),R=Object(o.b)((function(e){return{currencies:e.wallet.currencies,expenses:e.wallet.expenses,total:e.wallet.total,editId:e.wallet.editId}}),(function(e){return{getCurrencies:function(){return e(O())},editExpense:function(t,a){return e(function(e,t){return{type:"EDIT_EXPENSE",payload:e,total:t}}(t,a))}}}))(T),A=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).totalValue=e.totalValue.bind(Object(p.a)(e)),e}return Object(d.a)(a,[{key:"totalValue",value:function(){return JSON.parse(localStorage.getItem("expenses")).reduce((function(e,t){return e+Number(t.value)*Number(t.exchangeRates[t.currency].ask)}),0)}},{key:"render",value:function(){var e=this,t=JSON.parse(localStorage.getItem("expenses")),a=this.props,n=a.removeExpense,l=a.toggleEdit;return r.a.createElement("tbody",{className:"table-body"},t.map((function(t){var a=t.id,c=t.description,i=t.tag,o=t.method,s=t.value,u=t.exchangeRates,m=t.currency,d=u[m].name.split("/");return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"description"},c),r.a.createElement("td",null,i),r.a.createElement("td",null,o),r.a.createElement("td",null,d[0]),r.a.createElement("td",{className:"expense"},Number(s).toFixed(2)),r.a.createElement("td",{className:"cambio"},Number(u[m].ask).toFixed(2)),r.a.createElement("td",{className:"currency"},"Real"),r.a.createElement("td",{className:"expense"},Number(s*u[m].ask).toFixed(2)),r.a.createElement("td",null,r.a.createElement("button",{id:a,type:"button","data-testid":"edit-btn",name:"edit",className:"edit fas fa-edit",onClick:function(){return l(a)}}),r.a.createElement("button",{id:a,type:"button",name:"delete",className:"fas fa-trash","data-testid":"delete-btn",onClick:function(){return n(a,e.totalValue()-Number(s*u[m].ask).toFixed(2))}})))})))}}]),a}(r.a.Component),P=["Descri\xe7\xe3o","Tag","M\xe9todo de pagamento","Moeda","Valor","C\xe2mbio utilizado","Moeda de convers\xe3o","Valor convertido","Editar/Excluir"],_=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.removeExpense,a=e.toggleEdit,n=e.expenses,l=e.editForm;return r.a.createElement("table",{className:"expenses"},r.a.createElement("thead",{className:"table-header"},r.a.createElement("tr",null,P.map((function(e,t){return r.a.createElement("th",{key:e,className:0===t?"description":""},e)})))),r.a.createElement(A,{editForm:l,removeExpense:t,toggleEdit:a,expenses:n}))}}]),a}(r.a.Component),M=Object(o.b)((function(e){return{currencies:e.wallet.currencies,expenses:e.wallet.expenses,editForm:e.wallet.editForm}}),(function(e){return{removeExpense:function(t,a){return e(function(e,t){return{type:"REMOVE_EXPENSE",id:e,value:t}}(t,a))},toggleEdit:function(t){return e(function(e){return{type:"TOGGLE_EDIT",id:e}}(t))}}}))(_),V=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getCurrencies)()}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("expenses")),t=this.props,a=t.loading,n=t.editForm;return a?r.a.createElement("p",null," CARREGANDO... "):r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(R,null),!n&&r.a.createElement(D,null),e.length>0?r.a.createElement(M,null):r.a.createElement("p",{className:"no-expenses-text"},"Voc\xea ainda n\xe3o possui nenhuma despesa"))}}]),a}(r.a.Component);V.defaultProps={loading:!0};var B=Object(o.b)((function(e){return{loading:e.wallet.isFetching,editForm:e.wallet.editForm,expenses:e.wallet.expenses}}),(function(e){return{getCurrencies:function(){return e(O())}}}))(V),L=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(B,null))}}]),a}(r.a.Component);a(45);var G=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:j}),r.a.createElement(s.b,{exact:!0,path:"/carteira",component:L}))},X=a(15),z=a(31),U=a(32),W={email:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_EMAIL":return Object(C.a)(Object(C.a)({},e),{},{email:t.payload});default:return e}},Z={currencies:[],expenses:[],isFetching:!1,error:"",total:0,editForm:!1,editId:""},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_API":return Object(C.a)(Object(C.a)({},e),{},{isFetching:!0});case"GET_CURRENCIES":return Object(C.a)(Object(C.a)({},e),{},{isFetching:!1,currencies:t.payload});case"FAILED_REQUEST":return Object(C.a)(Object(C.a)({},e),{},{isFetching:!1,error:t.payload});case"ADD_EXPENSE":var a=JSON.parse(localStorage.getItem("expenses"));return localStorage.setItem("expenses",JSON.stringify([].concat(Object(x.a)(a),[t.payload]))),localStorage.setItem("total",JSON.stringify(t.total)),Object(C.a)(Object(C.a)({},e),{},{expenses:[].concat(Object(x.a)(e.expenses),[t.payload]),total:t.total});case"REMOVE_EXPENSE":var n=JSON.parse(localStorage.getItem("expenses")),r=Object(x.a)(n).filter((function(e){return e.id!==Number(t.id)}));return localStorage.setItem("expenses",JSON.stringify(Object(x.a)(r))),localStorage.setItem("total",JSON.stringify(t.value)),Object(C.a)(Object(C.a)({},e),{},{expenses:r,total:t.value});case"TOGGLE_EDIT":return Object(C.a)(Object(C.a)({},e),{},{editForm:!0,editId:t.id});case"EDIT_EXPENSE":var l=JSON.parse(localStorage.getItem("expenses")),c=Object(C.a)(Object(C.a)({},e),{},{editForm:!1,expenses:[].concat(Object(x.a)(l.filter((function(e){return e.id!==t.payload.id}))),[Object(C.a)({},t.payload)]).sort((function(e,t){return e.id-t.id}))}),i=c.expenses.reduce((function(e,t){return e+Number(t.value)*Number(t.exchangeRates[t.currency].ask)}),0);return localStorage.setItem("expenses",JSON.stringify(Object(x.a)(c.expenses))),localStorage.setItem("total",JSON.stringify(i)),Object(C.a)(Object(C.a)(Object(C.a)({},e),e),{},{editForm:!1,expenses:[].concat(Object(x.a)(e.expenses.filter((function(e){return e.id!==t.payload.id}))),[Object(C.a)({},t.payload)]).sort((function(e,t){return e.id-t.id})),total:i});default:return e}},Q=Object(X.combineReducers)({user:H,wallet:$}),q=Object(X.createStore)(Q,Object(z.composeWithDevTools)(Object(X.applyMiddleware)(U.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(o.a,{store:q},r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.b68a2ab8.chunk.js.map