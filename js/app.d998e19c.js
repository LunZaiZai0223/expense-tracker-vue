(function(){var t={6366:function(){},576:function(t,e,a){"use strict";var o=a(8935),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main",[a("the-header"),a("section",{staticClass:"content"},[a("button-list"),a("router-view")],1)],1)])},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("h1",[t._v("My Expense Tracker")]),a("div",[a("div",{staticClass:"user-info"},[a("div",{staticClass:"user-avatar"}),a("div",[a("h3",[t._v("Lun")]),a("span",{staticClass:"record-counter"},[t._v("Current Items: "+t._s(t.getItemsQty))])])]),a("div",{staticClass:"expense-result"},[a("span",{staticClass:"expense-result-title"},[t._v("In Total")]),a("h2",{staticClass:"expense-result-content",class:{"color-txt-paid":t.totalCalculator<0,"color-txt-saved":t.totalCalculator>0}},[t._v(" $ "+t._s(t.totalCalculator)+" ")]),a("div",{staticClass:"expense-result-count"},[a("h4",{staticClass:"color-txt-paid"},[a("span",{staticClass:"material-icons"},[t._v(" paid ")]),t._v("- "+t._s(t.expendCalculator)+" ")]),a("h4",{staticClass:"color-txt-saved"},[a("span",{staticClass:"material-icons"},[t._v(" savings ")]),t._v(" + "+t._s(t.incomeCalculator)+" ")])])])])])},r=[],l={data(){return{}},computed:{totalCalculator(){return this.$store.getters.totalCalculator},incomeCalculator(){return this.$store.getters.incomeCalculator},expendCalculator(){return this.$store.getters.expendCalculator},getItemsQty(){return this.$store.getters.getItemsQty}}},c=l,u=a(1001),d=(0,u.Z)(c,i,r,!1,null,"f66dca8a",null),m=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("ul",t._l(t.buttonItems,(function(e){return a("button-item",{key:e.title},[a("router-link",{staticClass:"wrapper",attrs:{to:{path:e.pathName}}},[a("span",{staticClass:"material-icons nav-more-icon"},[t._v(" more_horiz ")]),a("div",{staticClass:"nav-line",style:{backgroundColor:e.color}}),a("p",{staticClass:"l-mt-1"},[t._v(t._s(e.title))])])],1)})),1)])},v=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[t._t("default")],2)},h=[],g={},_=(0,u.Z)(g,f,h,!1,null,"73dbc530",null),C=_.exports,y={components:{"button-item":C},data(){return{buttonItems:[{title:"Add Items",color:"#679CF4",pathName:"add-item"},{title:"Check Categories",color:"#E0B0B4",pathName:"check-categories"},{title:"Check Items",color:"#77EADB",pathName:"check-item"},{title:"Check Diagram",color:"#E4CCFA",pathName:"check-diagram"}]}},methods:{handleClick(){console.log("hit"),this.$router.push("hello")}}},b=y,I=(0,u.Z)(b,p,v,!1,null,"4d302c23",null),x=I.exports,k={components:{"the-header":m,"button-list":x},created(){this.$store.dispatch("fetchData")},mounted(){console.log("mounted"),console.log(this.$store.state.dataBase)}},$=k,w=(0,u.Z)($,n,s,!1,null,null,null),E=w.exports,M=a(2809),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h1",[t._v("Add Item")]),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput.date,expression:"userInput.date"}],attrs:{type:"date"},domProps:{value:t.userInput.date},on:{input:function(e){e.target.composing||t.$set(t.userInput,"date",e.target.value)}}})]),a("div",{staticClass:"input-group"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput.content,expression:"userInput.content"}],attrs:{type:"text",id:"content",placeholder:"Item Content..."},domProps:{value:t.userInput.content},on:{input:function(e){e.target.composing||t.$set(t.userInput,"content",e.target.value)}}})]),a("div",{staticClass:"input-group"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput.amount,expression:"userInput.amount"}],attrs:{type:"number",min:"0",id:"price",placeholder:"Item Price..."},domProps:{value:t.userInput.amount},on:{input:function(e){e.target.composing||t.$set(t.userInput,"amount",e.target.value)}}})]),a("div",{staticClass:"radio-wrapper"},[a("h3",[t._v("Select Category:")]),t._l(t.getCategories,(function(e){return a("div",{key:e,staticClass:"radio-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput.category,expression:"userInput.category"}],attrs:{type:"radio",name:"category",id:e},domProps:{value:e,checked:t._q(t.userInput.category,e)},on:{change:function(a){return t.$set(t.userInput,"category",e)}}}),a("label",{attrs:{for:e}},[t._v(t._s(e.toUpperCase()))])])}))],2),a("button",{on:{click:t.createItem}},[t._v("Complete")])])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"content"}},[a("span",{staticClass:"material-icons adding-icon"},[t._v(" category ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"price"}},[a("span",{staticClass:"material-icons adding-icon"},[t._v(" paid ")])])}],D={data(){return{userInput:{content:"",category:"income",date:"",amount:0,id:Math.floor(Date.now()/1e3),type:"income"}}},computed:{getCategories(){const t=this.$store.state.icons;return Object.keys(t)}},methods:{createItem(){"income"!==this.userInput.category&&(this.userInput.type="expend"),console.log(this.userInput),console.log(typeof this.userInput.amount),this.userInput.amount=parseInt(this.userInput.amount),this.$store.commit("addNewItem",this.userInput)}}},Z=D,P=(0,u.Z)(Z,F,B,!1,null,"2d833f5a",null),O=P.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.isModalActive?a("base-modal",{on:{closeModal:function(e){t.closeModal(),t.endModalEdit()}},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"modal-icon-wrapper"},[a("span",{staticClass:"material-icons modal-icon"},[t._v(t._s(t.getIcons[t.modalData.category]))])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"modal-input-wrapper"},[a("input",{ref:"inputContent",attrs:{type:"text",readonly:!t.isModalEditing},domProps:{value:t.modalData.content}})]),a("div",{staticClass:"modal-input-wrapper"},[a("input",{ref:"inputDate",attrs:{type:"date",readonly:!t.isModalEditing},domProps:{value:t.modalData.date}})]),a("div",{staticClass:"modal-input-wrapper"},[a("input",{ref:"inputAmount",class:{"color-txt-saved":"income"===t.modalData.category,"color-txt-paid":"income"!==t.modalData.category},staticStyle:{"font-style":"italic"},attrs:{type:"number",readonly:!t.isModalEditing},domProps:{value:t.modalData.amount}})])]},proxy:!0},{key:"footer",fn:function(){return[a("div",{staticClass:"modal-button-wrapper"},[t.isModalEditing?t._e():a("div",{staticClass:"modal-default-wrapper"},[a("button",{staticClass:"modal-button-edit",on:{click:function(e){return t.startModalEdit()}}},[t._v(" Edit ")]),a("button",{staticClass:"modal-button-danger",on:{click:function(e){return t.deleteItem(t.modalData)}}},[t._v(" Delete ")]),a("button",{staticClass:"modal-button-info",on:{click:t.closeModal}},[t._v("Back")])]),t.isModalEditing?a("div",{staticClass:"modal-edit-wrapper"},[a("button",{staticClass:"modal-button-normal",on:{click:function(e){t.endModalEdit(),t.saveUpdatedItem(t.modalData)}}},[t._v(" Save ")]),a("button",{staticClass:"modal-button-info",on:{click:t.endModalEdit}},[t._v(" Back ")])]):t._e()])]},proxy:!0}],null,!1,2917779956)}):t._e(),a("h1",[t._v("Check Items")]),a("filter-item-form",{attrs:{isFilter:t.isFilter},on:{startFilter:t.startFilter,endFilter:t.endFilter}}),!1===t.isFilter?a("ul",t._l(t.getList,(function(e){var o=e.id,n=e.content,s=e.category,i=e.amount,r=e.date;return a("base-item-card",{key:o},[a("div",{staticClass:"icon-wrapper",on:{click:function(e){return t.openModal(o)}}},[a("span",{staticClass:"material-icons icon"},[t._v(t._s(t.getIcons[s]))])]),a("div",{staticClass:"content-wrapper"},[a("p",[t._v(t._s(n))]),a("p",[t._v(t._s(r))]),a("p",{staticClass:"content-amount",class:{"color-txt-paid":"income"!==s,"color-txt-saved":"income"===s}},[t._v(" $ "+t._s(i)+" ")])])])})),1):t._e(),t.isFilter?a("ul",[a("p",[t._v("現在在 filter 中")]),0===t.filterList.length?a("p",{staticClass:"no-result"},[t._v("No Result")]):t._e(),t._l(t.filterList,(function(e){var o=e.id,n=e.content,s=e.category,i=e.amount,r=e.date;return a("base-item-card",{key:o},[a("div",{staticClass:"icon-wrapper",on:{click:function(e){return t.openModal(o)}}},[a("span",{staticClass:"material-icons icon"},[t._v(t._s(t.getIcons[s]))])]),a("div",{staticClass:"content-wrapper"},[a("p",[t._v(t._s(n))]),a("p",[t._v(t._s(r))]),a("p",{staticClass:"content-amount",class:{"color-txt-paid":"income"!==s,"color-txt-saved":"income"===s}},[t._v(" $ "+t._s(i)+" ")])])])}))],2):t._e()],1)},j=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"wrapper"},[t._t("default")],2)])},A=[],T={},S=(0,u.Z)(T,N,A,!1,null,"af276fd6",null),Q=S.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{ref:"dateForm",on:{submit:function(t){t.preventDefault()}}},[a("div",[a("input",{ref:"dateInput",attrs:{type:"date"}})]),a("button",{attrs:{type:"submit"},on:{click:function(e){return t.handleFilterClick(t.$refs.dateInput.value)}}},[t._v(" Filter ")])]),a("div",{staticClass:"reset"},[a("span",{on:{click:t.resetForm}},[t._v(" Reset Filter ")])])])},R=[],q={props:["isFilter"],methods:{handleFilterClick(t){console.log("clicked the filter button"),this.$emit("startFilter",t)},resetForm(){this.$refs.dateForm.reset(),this.$emit("endFilter")}},mounted(){console.log(this.isFilter)}},z=q,G=(0,u.Z)(z,U,R,!1,null,"eada4b38",null),H=G.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("section",{staticClass:"modal-background"},[a("div",{staticClass:"modal"},[a("div",{staticClass:"close-modal-button",on:{click:t.closeModal}},[t._v("✖")]),a("header",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" This is default slot header. ")]}))],2),a("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" This is default slot body. ")]}))],2),a("footer",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t._v(" This is default slot footer. ")]}))],2)])])])},K=[],V={emits:["closeModal"],methods:{closeModal(){this.$emit("closeModal")}}},W=V,X=(0,u.Z)(W,J,K,!1,null,"3763e4e0",null),Y=X.exports;const tt=(t,e)=>t.filter((t=>t.id===e));var et={components:{"base-item-card":Q,"filter-item-form":H,"base-modal":Y},emits:["startFilter","endFilter"],data(){return{isFilter:!1,filterList:[],isModalActive:!1,isModalEditing:!1,modalData:[]}},computed:{getList(){const{expend:t,income:e}=this.$store.state.dataBase,a=t.items,o=e.items,n=a.concat(o);return n},getIcons(){return this.$store.state.icons}},methods:{startFilter(t){if(console.log("in parent component start filter"),!t)return void console.log("no date input");this.isFilter=!0;const e=this.getList;this.filterList=e.filter((e=>e.date===t))},endFilter(){console.log("in parent component end filter"),this.isFilter=!1,this.filterList=[]},closeModal(){console.log("hit close model"),this.isModalActive=!1},openModal(t){console.log("hit open modal"),this.isModalActive=!0;const[e]=tt(this.getList,t);this.modalData=e,console.log(e)},startModalEdit(){this.isModalEditing=!0},endModalEdit(){this.isModalEditing=!1},deleteItem(t){console.log("hit delete in component");const e=this.filterList.filter((e=>e.id!==t.id));this.filterList=e,this.isModalActive=!1,this.$store.commit("deleteItem",t),console.log("end of component delete")},saveUpdatedItem(t){console.log("save update");const e=this.$refs.inputContent.value,a=this.$refs.inputDate.value,o=this.$refs.inputAmount.value;this.$store.commit("updateItem",{modalData:t,newInput:{amount:parseInt(o),content:e,date:a,category:t.category,id:t.id}});const[n]=tt(this.getList,t.id);this.modalData=n}}},at=et,ot=(0,u.Z)(at,L,j,!1,null,"4055e0e0",null),nt=ot.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h1",[t._v("Check Diagram")])])}],rt=a(6366),lt=a.n(rt),ct=lt(),ut=(0,u.Z)(ct,st,it,!1,null,null,null),dt=ut.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h1",[t._v("Check Categories")]),a("ul",t._l(t.getCategoryPair,(function(e,o){return a("base-category-card",{key:o},[a("div",{staticClass:"icon-wrapper"},[a("span",{staticClass:"material-icons icon"},[t._v(" "+t._s(t.getIcons[o])+" ")])]),a("div",[a("p",[t._v(t._s(o.toUpperCase()))]),a("p",{staticClass:"amount"},[t._v("$ "+t._s(e))])])])})),1)])},pt=[],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"card"},[t._t("default")],2)])},ft=[],ht={},gt=(0,u.Z)(ht,vt,ft,!1,null,"1b142d7e",null),_t=gt.exports,Ct={components:{"base-category-card":_t},computed:{getCategoryPair(){return console.log(this.$store.getters.getCategoryPair),this.$store.getters.getCategoryPair},getIcons(){return this.$store.state.icons}}},yt=Ct,bt=(0,u.Z)(yt,mt,pt,!1,null,"100b3aec",null),It=bt.exports;o.Z.use(M.Z);const xt=[{path:"/add-item",name:"add-item",component:O},{path:"/check-item",name:"check-item",component:nt},{path:"/check-diagram",name:"check-diagram",component:dt},{path:"/check-categories",name:"check-categories",component:It}],kt=new M.Z({mode:"history",base:"/expense-tracker-vue/",routes:xt});var $t=kt,wt=a(4665);const Et=t=>{const e=t.map((t=>{const{type:e,content:a}=t;return"expend"===e&&"我是記帳內容"===a?(t.category="other",t):"expend"===e?(t.category="food",t):"income"===e?(t.category="income",t):void 0}));return e.reverse()},Mt=(t,e)=>t.dataBase[e].items.reduce(((t,e)=>(t[e.category]?t[e.category]+=e.amount:t[e.category]=e.amount,t)),{}),Ft=(t,e)=>{t.items.unshift(e)},Bt=t=>{const e=t.items.reduce(((t,e)=>t+e.amount),0);t.total=e},Dt=(t,e)=>t.dataBase[e],Zt=t=>"income"===t?"income":"expend";o.Z.use(wt.ZP);var Pt=new wt.ZP.Store({state:{dataBase:{expend:{categories:[],total:0,items:[]},income:{categories:[],total:0,items:[]}},icons:{medicine:"healing",shopping:"shopping_cart",food:"restaurant",other:"dynamic_feed",living:"living",income:"savings"}},getters:{totalCalculator(t){return t.dataBase.income.total-t.dataBase.expend.total},incomeCalculator(t){return console.log("incomeCalculator"),t.dataBase.income.items.reduce(((t,e)=>(t+=e.amount,t)),0)},expendCalculator(t){return t.dataBase.expend.items.reduce(((t,e)=>(t+=e.amount,t)),0)},getItemsQty(t){return t.dataBase.expend.items.length+t.dataBase.income.items.length},getCategoryPair(t){console.log("hit getCategoryPair");const e=t.dataBase.expend.items.concat(t.dataBase.income.items);console.log(e);const a=Mt(t,"expend"),o=Mt(t,"income");console.log(a),console.log(o),console.log(Object.assign({},a,o));const n=Object.assign({},a,o);return console.log(n),n}},mutations:{initDataBaseData(t,e){console.log("only test"),e.forEach((e=>{const{amount:a,category:o,content:n,date:s,id:i,type:r}=e;console.log(a,o,n,s,i,r),-1===t.dataBase[r].categories.indexOf(o)&&t.dataBase[r].categories.push(o);const l={id:i,content:n,category:o,amount:a,date:s};t.dataBase[r].items.push(l),t.dataBase[r].total=t.dataBase[r].items.reduce(((t,e)=>t+e.amount),0)})),console.log(t.dataBase)},addNewItem(t,e){const{type:a}=e;console.log(a);const o=t.dataBase[a];console.log(o),Ft(o,e),console.log(t.dataBase[a]),Bt(o)},deleteItem(t,e){console.log("hit delete in store");const{id:a,category:o}=e,n=Zt(o),s=Dt(t,n),i=s.items.filter((t=>t.id!==a));s.items=i,Bt(s)},updateItem(t,{modalData:e,newInput:a}){console.log("hit update in vuex");const{category:o,id:n}=e,s=Zt(o),i=Dt(t,s);i.items.filter(((t,e,o)=>{if(t.id===n)return o.splice(e,1,a),t})),Bt(i)}},actions:{fetchData(t){console.log("hello"),fetch("https://my-json-server.typicode.com/maxhyun/jsonDB/posts").then((t=>t.json())).then((e=>{console.log("got here?");const a=Et(e);t.commit("initDataBaseData",a)}))}},modules:{}});o.Z.config.productionTip=!1,new o.Z({router:$t,store:Pt,render:t=>t(E)}).$mount("#app")}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,s){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],s=t[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(r=!1,s<i&&(i=s));if(r){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,s,i=o[0],r=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var u=l(a)}for(e&&e(o);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},o=self["webpackChunkexpense_tracker_vue"]=self["webpackChunkexpense_tracker_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(576)}));o=a.O(o)})();
//# sourceMappingURL=app.d998e19c.js.map