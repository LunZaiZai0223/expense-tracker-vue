(function(){var t={6366:function(){},576:function(t,e,n){"use strict";n(6992),n(8674),n(9601),n(7727);var o=n(8935),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",[n("the-header"),n("section",{staticClass:"content"},[n("button-list"),n("router-view")],1)],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("My Expense Tracker")]),n("div",[n("div",{staticClass:"user-info"},[n("div",{staticClass:"user-avatar"}),n("div",[n("h3",[t._v("Lun")]),n("span",{staticClass:"record-counter"},[t._v("Current Items: "+t._s(t.getItemsQty))])])]),n("div",{staticClass:"expense-result"},[n("span",{staticClass:"expense-result-title"},[t._v("In Total")]),n("h2",{staticClass:"expense-result-content",class:{"color-txt-paid":t.totalCalculator<0,"color-txt-saved":t.totalCalculator>0}},[t._v(" $ "+t._s(t.totalCalculator)+" ")]),n("div",{staticClass:"expense-result-count"},[n("h4",{staticClass:"color-txt-paid"},[n("span",{staticClass:"material-icons"},[t._v(" paid ")]),t._v("- "+t._s(t.expendCalculator)+" ")]),n("h4",{staticClass:"color-txt-saved"},[n("span",{staticClass:"material-icons"},[t._v(" savings ")]),t._v(" + "+t._s(t.incomeCalculator)+" ")])])])])])},r=[],c={data:function(){return{}},computed:{totalCalculator:function(){return this.$store.getters.totalCalculator},incomeCalculator:function(){return this.$store.getters.incomeCalculator},expendCalculator:function(){return this.$store.getters.expendCalculator},getItemsQty:function(){return this.$store.getters.getItemsQty}}},l=c,u=n(1001),d=(0,u.Z)(l,s,r,!1,null,"f66dca8a",null),m=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ul",t._l(t.buttonItems,(function(e){return n("button-item",{key:e.title},[n("router-link",{staticClass:"wrapper",attrs:{to:{path:e.pathName}}},[n("span",{staticClass:"material-icons nav-more-icon"},[t._v(" more_horiz ")]),n("div",{staticClass:"nav-line",style:{backgroundColor:e.color}}),n("p",{staticClass:"l-mt-1"},[t._v(t._s(e.title))])])],1)})),1)])},f=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._t("default")],2)},h=[],g={},_=(0,u.Z)(g,v,h,!1,null,"73dbc530",null),C=_.exports,y={components:{"button-item":C},data:function(){return{buttonItems:[{title:"Add Items",color:"#679CF4",pathName:"add-item"},{title:"Check Categories",color:"#E0B0B4",pathName:"check-categories"},{title:"Check Items",color:"#77EADB",pathName:"check-item"},{title:"Check Diagram",color:"#E4CCFA",pathName:"check-diagram"}]}},methods:{handleClick:function(){console.log("hit"),this.$router.push("hello")}}},b=y,I=(0,u.Z)(b,p,f,!1,null,"4d302c23",null),x=I.exports,k={components:{"the-header":m,"button-list":x},created:function(){this.$store.dispatch("fetchData")},mounted:function(){console.log("mounted"),console.log(this.$store.state.dataBase)}},$=k,w=(0,u.Z)($,a,i,!1,null,null,null),E=w.exports,M=n(2809),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Add Item")]),n("form",{on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput.date,expression:"userInput.date"}],attrs:{type:"date"},domProps:{value:t.userInput.date},on:{input:function(e){e.target.composing||t.$set(t.userInput,"date",e.target.value)}}})]),n("div",{staticClass:"input-group"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput.content,expression:"userInput.content"}],attrs:{type:"text",id:"content",placeholder:"Item Content..."},domProps:{value:t.userInput.content},on:{input:function(e){e.target.composing||t.$set(t.userInput,"content",e.target.value)}}})]),n("div",{staticClass:"input-group"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput.amount,expression:"userInput.amount"}],attrs:{type:"number",min:"0",id:"price",placeholder:"Item Price..."},domProps:{value:t.userInput.amount},on:{input:function(e){e.target.composing||t.$set(t.userInput,"amount",e.target.value)}}})]),n("div",{staticClass:"radio-wrapper"},[n("h3",[t._v("Select Category:")]),t._l(t.getCategories,(function(e){return n("div",{key:e,staticClass:"radio-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput.category,expression:"userInput.category"}],attrs:{type:"radio",name:"category",id:e},domProps:{value:e,checked:t._q(t.userInput.category,e)},on:{change:function(n){return t.$set(t.userInput,"category",e)}}}),n("label",{attrs:{for:e}},[t._v(t._s(e.toUpperCase()))])])}))],2),n("button",{on:{click:t.createItem}},[t._v("Complete")])])])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"content"}},[n("span",{staticClass:"material-icons adding-icon"},[t._v(" category ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"price"}},[n("span",{staticClass:"material-icons adding-icon"},[t._v(" paid ")])])}],D=n(9726),Z=(n(7941),{data:function(){return{userInput:{content:"",category:"income",date:"",amount:0,id:Math.floor(Date.now()/1e3),type:"income"}}},computed:{getCategories:function(){var t=this.$store.state.icons;return Object.keys(t)}},methods:{createItem:function(){"income"!==this.userInput.category&&(this.userInput.type="expend"),console.log(this.userInput),console.log((0,D.Z)(this.userInput.amount)),this.userInput.amount=parseInt(this.userInput.amount),this.$store.commit("addNewItem",this.userInput)}}}),P=Z,O=(0,u.Z)(P,F,B,!1,null,"2d833f5a",null),L=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.isModalActive?n("base-modal",{on:{closeModal:function(e){t.closeModal(),t.endModalEdit()}},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"modal-icon-wrapper"},[n("span",{staticClass:"material-icons modal-icon"},[t._v(t._s(t.getIcons[t.modalData.category]))])])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"modal-input-wrapper"},[n("input",{ref:"inputContent",attrs:{type:"text",readonly:!t.isModalEditing},domProps:{value:t.modalData.content}})]),n("div",{staticClass:"modal-input-wrapper"},[n("input",{ref:"inputDate",attrs:{type:"date",readonly:!t.isModalEditing},domProps:{value:t.modalData.date}})]),n("div",{staticClass:"modal-input-wrapper"},[n("input",{ref:"inputAmount",class:{"color-txt-saved":"income"===t.modalData.category,"color-txt-paid":"income"!==t.modalData.category},staticStyle:{"font-style":"italic"},attrs:{type:"number",readonly:!t.isModalEditing},domProps:{value:t.modalData.amount}})])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"modal-button-wrapper"},[t.isModalEditing?t._e():n("div",{staticClass:"modal-default-wrapper"},[n("button",{staticClass:"modal-button-edit",on:{click:function(e){return t.startModalEdit()}}},[t._v(" Edit ")]),n("button",{staticClass:"modal-button-danger",on:{click:function(e){return t.deleteItem(t.modalData)}}},[t._v(" Delete ")]),n("button",{staticClass:"modal-button-info",on:{click:t.closeModal}},[t._v("Back")])]),t.isModalEditing?n("div",{staticClass:"modal-edit-wrapper"},[n("button",{staticClass:"modal-button-normal",on:{click:function(e){t.endModalEdit(),t.saveUpdatedItem(t.modalData)}}},[t._v(" Save ")]),n("button",{staticClass:"modal-button-info",on:{click:t.endModalEdit}},[t._v(" Back ")])]):t._e()])]},proxy:!0}],null,!1,2917779956)}):t._e(),n("h1",[t._v("Check Items")]),n("filter-item-form",{attrs:{isFilter:t.isFilter},on:{startFilter:t.startFilter,endFilter:t.endFilter}}),!1===t.isFilter?n("ul",t._l(t.getList,(function(e){var o=e.id,a=e.content,i=e.category,s=e.amount,r=e.date;return n("base-item-card",{key:o},[n("div",{staticClass:"icon-wrapper",on:{click:function(e){return t.openModal(o)}}},[n("span",{staticClass:"material-icons icon"},[t._v(t._s(t.getIcons[i]))])]),n("div",{staticClass:"content-wrapper"},[n("p",[t._v(t._s(a))]),n("p",[t._v(t._s(r))]),n("p",{staticClass:"content-amount",class:{"color-txt-paid":"income"!==i,"color-txt-saved":"income"===i}},[t._v(" $ "+t._s(s)+" ")])])])})),1):t._e(),t.isFilter?n("ul",[n("p",[t._v("現在在 filter 中")]),0===t.filterList.length?n("p",{staticClass:"no-result"},[t._v("No Result")]):t._e(),t._l(t.filterList,(function(e){var o=e.id,a=e.content,i=e.category,s=e.amount,r=e.date;return n("base-item-card",{key:o},[n("div",{staticClass:"icon-wrapper",on:{click:function(e){return t.openModal(o)}}},[n("span",{staticClass:"material-icons icon"},[t._v(t._s(t.getIcons[i]))])]),n("div",{staticClass:"content-wrapper"},[n("p",[t._v(t._s(a))]),n("p",[t._v(t._s(r))]),n("p",{staticClass:"content-amount",class:{"color-txt-paid":"income"!==i,"color-txt-saved":"income"===i}},[t._v(" $ "+t._s(s)+" ")])])])}))],2):t._e()],1)},N=[],A=n(3571),T=(n(7327),n(1539),n(2222),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"wrapper"},[t._t("default")],2)])}),S=[],Q={},U=(0,u.Z)(Q,T,S,!1,null,"af276fd6",null),R=U.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{ref:"dateForm",on:{submit:function(t){t.preventDefault()}}},[n("div",[n("input",{ref:"dateInput",attrs:{type:"date"}})]),n("button",{attrs:{type:"submit"},on:{click:function(e){return t.handleFilterClick(t.$refs.dateInput.value)}}},[t._v(" Filter ")])]),n("div",{staticClass:"reset"},[n("span",{on:{click:t.resetForm}},[t._v(" Reset Filter ")])])])},z=[],G={props:["isFilter"],methods:{handleFilterClick:function(t){console.log("clicked the filter button"),this.$emit("startFilter",t)},resetForm:function(){this.$refs.dateForm.reset(),this.$emit("endFilter")}},mounted:function(){console.log(this.isFilter)}},H=G,J=(0,u.Z)(H,q,z,!1,null,"eada4b38",null),K=J.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal-fade"}},[n("section",{staticClass:"modal-background"},[n("div",{staticClass:"modal"},[n("div",{staticClass:"close-modal-button",on:{click:t.closeModal}},[t._v("✖")]),n("header",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" This is default slot header. ")]}))],2),n("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" This is default slot body. ")]}))],2),n("footer",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t._v(" This is default slot footer. ")]}))],2)])])])},W=[],X={emits:["closeModal"],methods:{closeModal:function(){this.$emit("closeModal")}}},Y=X,tt=(0,u.Z)(Y,V,W,!1,null,"3763e4e0",null),et=tt.exports,nt=function(t,e){return t.filter((function(t){return t.id===e}))},ot={components:{"base-item-card":R,"filter-item-form":K,"base-modal":et},emits:["startFilter","endFilter"],data:function(){return{isFilter:!1,filterList:[],isModalActive:!1,isModalEditing:!1,modalData:[]}},computed:{getList:function(){var t=this.$store.state.dataBase,e=t.expend,n=t.income,o=e.items,a=n.items,i=o.concat(a);return i},getIcons:function(){return this.$store.state.icons}},methods:{startFilter:function(t){if(console.log("in parent component start filter"),t){this.isFilter=!0;var e=this.getList;this.filterList=e.filter((function(e){return e.date===t}))}else console.log("no date input")},endFilter:function(){console.log("in parent component end filter"),this.isFilter=!1,this.filterList=[]},closeModal:function(){console.log("hit close model"),this.isModalActive=!1},openModal:function(t){console.log("hit open modal"),this.isModalActive=!0;var e=nt(this.getList,t),n=(0,A.Z)(e,1),o=n[0];this.modalData=o,console.log(o)},startModalEdit:function(){this.isModalEditing=!0},endModalEdit:function(){this.isModalEditing=!1},deleteItem:function(t){console.log("hit delete in component");var e=this.filterList.filter((function(e){return e.id!==t.id}));this.filterList=e,this.isModalActive=!1,this.$store.commit("deleteItem",t),console.log("end of component delete")},saveUpdatedItem:function(t){console.log("save update");var e=this.$refs.inputContent.value,n=this.$refs.inputDate.value,o=this.$refs.inputAmount.value;this.$store.commit("updateItem",{modalData:t,newInput:{amount:parseInt(o),content:e,date:n,category:t.category,id:t.id}});var a=nt(this.getList,t.id),i=(0,A.Z)(a,1),s=i[0];this.modalData=s}}},at=ot,it=(0,u.Z)(at,j,N,!1,null,"4055e0e0",null),st=it.exports,rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Check Diagram")])])}],lt=n(6366),ut=n.n(lt),dt=ut(),mt=(0,u.Z)(dt,rt,ct,!1,null,null,null),pt=mt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Check Categories")]),n("ul",t._l(t.getCategoryPair,(function(e,o){return n("base-category-card",{key:o},[n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"material-icons icon"},[t._v(" "+t._s(t.getIcons[o])+" ")])]),n("div",[n("p",[t._v(t._s(o.toUpperCase()))]),n("p",{staticClass:"amount"},[t._v("$ "+t._s(e))])])])})),1)])},vt=[],ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"card"},[t._t("default")],2)])},gt=[],_t={},Ct=(0,u.Z)(_t,ht,gt,!1,null,"1b142d7e",null),yt=Ct.exports,bt={components:{"base-category-card":yt},computed:{getCategoryPair:function(){return console.log(this.$store.getters.getCategoryPair),this.$store.getters.getCategoryPair},getIcons:function(){return this.$store.state.icons}}},It=bt,xt=(0,u.Z)(It,ft,vt,!1,null,"100b3aec",null),kt=xt.exports;o.Z.use(M.Z);var $t=[{path:"/add-item",name:"add-item",component:L},{path:"/check-item",name:"check-item",component:st},{path:"/check-diagram",name:"check-diagram",component:pt},{path:"/check-categories",name:"check-categories",component:kt}],wt=new M.Z({mode:"history",base:"/expense-tracker-vue/",routes:$t}),Et=wt,Mt=(n(1249),n(4747),n(561),n(4665)),Ft=function(t){var e=t.map((function(t){var e=t.type,n=t.content;return"expend"===e&&"我是記帳內容"===n?(t.category="other",t):"expend"===e?(t.category="food",t):"income"===e?(t.category="income",t):void 0}));return e.reverse()},Bt=function(t,e){return t.dataBase[e].items.reduce((function(t,e){return t[e.category]?t[e.category]+=e.amount:t[e.category]=e.amount,t}),{})},Dt=function(t,e){t.items.unshift(e)},Zt=function(t){var e=t.items.reduce((function(t,e){return t+e.amount}),0);t.total=e},Pt=function(t,e){return t.dataBase[e]},Ot=function(t){return"income"===t?"income":"expend"};o.Z.use(Mt.ZP);var Lt=new Mt.ZP.Store({state:{dataBase:{expend:{categories:[],total:0,items:[]},income:{categories:[],total:0,items:[]}},icons:{medicine:"healing",shopping:"shopping_cart",food:"restaurant",other:"dynamic_feed",living:"living",income:"savings"}},getters:{totalCalculator:function(t){return t.dataBase.income.total-t.dataBase.expend.total},incomeCalculator:function(t){return console.log("incomeCalculator"),t.dataBase.income.items.reduce((function(t,e){return t+=e.amount,t}),0)},expendCalculator:function(t){return t.dataBase.expend.items.reduce((function(t,e){return t+=e.amount,t}),0)},getItemsQty:function(t){return t.dataBase.expend.items.length+t.dataBase.income.items.length},getCategoryPair:function(t){console.log("hit getCategoryPair");var e=t.dataBase.expend.items.concat(t.dataBase.income.items);console.log(e);var n=Bt(t,"expend"),o=Bt(t,"income");console.log(n),console.log(o),console.log(Object.assign({},n,o));var a=Object.assign({},n,o);return console.log(a),a}},mutations:{initDataBaseData:function(t,e){console.log("only test"),e.forEach((function(e){var n=e.amount,o=e.category,a=e.content,i=e.date,s=e.id,r=e.type;console.log(n,o,a,i,s,r),-1===t.dataBase[r].categories.indexOf(o)&&t.dataBase[r].categories.push(o);var c={id:s,content:a,category:o,amount:n,date:i};t.dataBase[r].items.push(c),t.dataBase[r].total=t.dataBase[r].items.reduce((function(t,e){return t+e.amount}),0)})),console.log(t.dataBase)},addNewItem:function(t,e){var n=e.type;console.log(n);var o=t.dataBase[n];console.log(o),Dt(o,e),console.log(t.dataBase[n]),Zt(o)},deleteItem:function(t,e){console.log("hit delete in store");var n=e.id,o=e.category,a=Ot(o),i=Pt(t,a),s=i.items.filter((function(t){return t.id!==n}));i.items=s,Zt(i)},updateItem:function(t,e){var n=e.modalData,o=e.newInput;console.log("hit update in vuex");var a=n.category,i=n.id,s=Ot(a),r=Pt(t,s);r.items.filter((function(t,e,n){if(t.id===i)return n.splice(e,1,o),t})),Zt(r)}},actions:{fetchData:function(t){console.log("hello"),fetch("https://my-json-server.typicode.com/maxhyun/jsonDB/posts").then((function(t){return t.json()})).then((function(e){console.log("got here?");var n=Ft(e);t.commit("initDataBaseData",n)}))}},modules:{}});o.Z.config.productionTip=!1,new o.Z({router:Et,store:Lt,render:function(t){return t(E)}}).$mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,i){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],i=t[u][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(r=!1,i<s&&(s=i));if(r){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,i,s=o[0],r=o[1],c=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var u=c(n)}for(e&&e(o);l<s.length;l++)i=s[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunkexpense_tracker_vue"]=self["webpackChunkexpense_tracker_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(576)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.8380d908.js.map