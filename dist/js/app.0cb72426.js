(function(t){function e(e){for(var l,o,n=e[0],i=e[1],c=e[2],u=0,m=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],l=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(l=!1)}l&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var l={},r={app:0},s=[];function o(e){if(l[e])return l[e].exports;var a=l[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=l,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)o.d(a,l,function(e){return t[e]}.bind(null,l));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var l=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("CustomerForm")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mx-auto my-5"},[a("h1",{staticClass:"\n                text-start text-capitalise\n                display-2\n                border-bottom border-5 border-success\n              "},[t._v(" Call order form ")]),a("div",{staticClass:"my-4 px-2 px-md-5"},[a("h4",{staticClass:"mb-3"},[t._v(" Use this form to puschase calls either individually or at a quarterly or annual discount. ")]),a("div",{staticClass:"py-2"},[a("div",{staticClass:"row mb-3"},[t._m(0),a("div",{staticClass:"col-12 col-md-4 row align-items-center order-3 order-md-2 mt-3 mt-md-0"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.client,expression:"client"}],staticClass:"form-select form-select-lg",attrs:{"aria-label":"Client"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.client=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:"",value:"null",disabled:""}},[t._v("Select client")]),t._l(t.clients,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),a("div",{staticClass:"col-auto d-flex align-items-center order-1 order-md-2"},[a("Tooltip",{attrs:{title:"What company are you with?"}})],1)]),a("div",{staticClass:"row mb-3"},[t._m(1),a("div",{staticClass:"col-12 col-md-4 row align-items-center order-3 order-md-2 mt-3 mt-md-0"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.property,expression:"property"}],staticClass:"form-select form-select-lg",attrs:{"aria-label":"Property"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.property=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:"",value:"null",disabled:""}},[t._v("Select property")]),t._l(t.properties,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),a("div",{staticClass:"col-auto d-flex align-items-center order-1 order-md-2"},[a("Tooltip",{attrs:{title:"For which property would you like to purchase calls?"}})],1)])])]),a("FormBlock",{attrs:{header:"Monthly Calls"}},[a("div",{staticClass:"mb-4 fs-5"},[a("p",[t._v(" Use this section to purchase regular monthly calls at a monthly or quarterly discount. ")]),a("p",[t._v("For individual calls, got to the next section")])]),a("div",{staticClass:"mb-4 fs-5"},[a("p",[t._v("Choose the number of each type of call you'd like to purchase")]),a("div",{staticClass:"row align-items-center mb-4"},[a("div",{staticClass:"col-12 col-md-2 mb-0"},[t._v("Custom")]),a("div",{staticClass:"col-6 col-md-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.monthly.custom,expression:"monthly.custom"}],staticClass:"form-select form-select-lg",attrs:{"aria-label":"Custom"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.monthly,"custom",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",value:"null",disabled:""}},[t._v("Select")]),t._l(999,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),a("div",{staticClass:"col-6 col-md-auto"},[t._v("monthly")])]),a("div",{staticClass:"row align-items-center mb-4"},[a("div",{staticClass:"col-12 col-md-2 mb-0"},[t._v("Standart")]),a("div",{staticClass:"col-6 col-md-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.monthly.standart,expression:"monthly.standart"}],staticClass:"form-select form-select-lg",attrs:{"aria-label":"Standart"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.monthly,"standart",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",value:"null",disabled:""}},[t._v("Select")]),t._l(999,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),a("div",{staticClass:"col-6 col-md-auto"},[t._v("monthly")])]),a("div",{staticClass:"alert alert-success px-4",attrs:{role:"alert"}},[a("h4",{staticClass:"alert-heading fw-bold"},[t._v("Discount")]),a("p",[t._v("Choose the term to get a discount")]),a("div",{staticClass:"my-2"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.discount,expression:"discount"}],staticClass:"form-check-input",attrs:{type:"radio",name:"discount",id:"quarterly",value:"quarterly"},domProps:{checked:t._q(t.discount,"quarterly")},on:{change:function(e){t.discount="quarterly"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"quarterly"}},[t._v(" Quarterly 5% * ")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.discount,expression:"discount"}],staticClass:"form-check-input",attrs:{type:"radio",name:"discount",id:"annual",checked:"",value:"annual"},domProps:{checked:t._q(t.discount,"annual")},on:{change:function(e){t.discount="annual"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"annual"}},[t._v(" Annual 10% ")])])]),a("hr"),a("p",{staticClass:"mb-0"},[t._v("* - Auto-renews quarterly")])]),a("div",{staticClass:"row align-items-center mb-4"},[a("div",{staticClass:"col-12 col-md-2 mb-0"},[t._v("Starting month")]),a("div",{staticClass:"col-6 col-md-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.starting_date,expression:"starting_date"}],staticClass:"form-select form-select-lg",attrs:{"aria-label":"starting date"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.starting_date=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:"",value:"null",disabled:""}},[t._v("Select")]),t._l(t.month,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),a("div",{staticClass:"col-6 col-md-auto"},[t._v("monthly")])]),a("h4",[t._v("Months to Exclude")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.exclude,expression:"exclude"}],staticClass:"form-check-input",attrs:{type:"radio",name:"exclude",value:"all_year",id:"all_year"},domProps:{checked:t._q(t.exclude,"all_year")},on:{change:function(e){t.exclude="all_year"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"all_year"}},[t._v(" All year ")])])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-check mb-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.exclude,expression:"exclude"}],staticClass:"form-check-input",attrs:{type:"radio",name:"exclude",value:"specific_month",id:"specific_month"},domProps:{checked:t._q(t.exclude,"specific_month")},on:{change:function(e){t.exclude="specific_month"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"specific_month"}},[t._v(" Specific months ")])]),a("p",[t._v(" Enter excluded date ranges for calls "),a("Tooltip",{attrs:{title:"Helpful to avoid calls during off-season times."}})],1),a("div",{staticClass:"mb-3 row"},[a("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:"excluded_start"}},[t._v("Starting date")]),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.specific_month.start,expression:"specific_month.start"}],staticClass:"form-control",attrs:{type:"date",id:"excluded_start"},domProps:{value:t.specific_month.start},on:{input:function(e){e.target.composing||t.$set(t.specific_month,"start",e.target.value)}}})])]),a("div",{staticClass:"mb-3 row"},[a("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:"excluded_end"}},[t._v("Ending date")]),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.specific_month.end,expression:"specific_month.end"}],staticClass:"form-control",attrs:{type:"date",id:"excluded_end"},domProps:{value:t.specific_month.end},on:{input:function(e){e.target.composing||t.$set(t.specific_month,"end",e.target.value)}}})])])])])])]),a("FormBlock",{attrs:{header:"Individual Calls"}},[a("div",{staticClass:"fs-5"},[a("p",[t._v("Use this form to purchase individual calls without a discount.")]),t._l(t.calls,(function(t){return a("CallTypeForm",{key:t.type,attrs:{data:t}})}))],2)]),a("FormBlock",{attrs:{header:"Notifications"}},[a("div",{staticClass:"fs-5"},[a("p",[t._v("Who should receive shop call notifications?")]),a("p",[t._v("Enter email addresses, separated by commas")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.notification_emails,expression:"notification_emails"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Emails","aria-label":".form-control-lg example"},domProps:{value:t.notification_emails},on:{input:function(e){e.target.composing||(t.notification_emails=e.target.value)}}})]),a("FormBlock",{attrs:{header:"Order Summary"}},[a("table",{staticClass:"table table-borderless fs-5"},[a("tbody",[a("tr",[a("td",[t._v("5 Custom/mo.")]),a("td",[t._v("60/year")]),a("td",[t._v("$ x.xxx.xx")])]),a("tr",[a("td",[t._v("5 Standart/mo.")]),a("td",[t._v("60/year")]),a("td",[t._v("$ x.xxx.xx")])]),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("Annual discount (applied)")]),a("td",[t._v("$ x.xxx.xx")])]),a("tr",[a("td",{attrs:{colspan:"2"}}),a("td",[a("hr",{staticClass:"my-0"})])]),a("tr",[a("td",{staticClass:"fw-bold",attrs:{colspan:"2"}},[t._v("Total")]),a("td",[t._v("$ x.xxx.xx")])])])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-4 col-md-3 row align-items-center order-0"},[a("p",{staticClass:"fs-4 mb-0"},[t._v("Client")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-4 col-md-3 row align-items-center order-0"},[a("p",{staticClass:"fs-4 mb-0"},[t._v("Property")])])}],i=a("1da1"),c=(a("96cf"),a("bc3a")),d=a.n(c),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4",staticStyle:{"margin-bottom":"3rem"}},[a("p",{staticClass:"display-5 mb-3 bg-light text-success fw-bold p-4 border-start border-5 border-success"},[t._v(" "+t._s(t.header)+" ")]),a("div",{staticClass:"py-2 px-4"},[t._t("default")],2)])},m=[],p={props:{header:String}},v=p,f=a("2877"),h=Object(f["a"])(v,u,m,!1,null,null,null),_=h.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-1 px-md-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 row align-items-center mb-4"},[a("div",{staticClass:"col-12 col-md-4 mb-0"},[t._v("Call type")]),a("div",{staticClass:"col-12 col-md-8 col-md-auto"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.type,expression:"data.type"}],staticClass:"form-select form-select-lg",attrs:{"aria-label":"Call types"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",value:"null",disabled:""}},[t._v("Select")]),t._l(t.callTypes,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)])]),a("div",{staticClass:"col-12 col-md-6 row align-items-center mb-4"},[a("div",{staticClass:"col-6 col-md-4 mb-0"},[t._v("# of calls")]),a("div",{staticClass:"col-12 col-md-8 col-md-auto"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.count,expression:"data.count"}],staticClass:"form-select form-select-lg",attrs:{"aria-label":"Default select example"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"count",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",value:"null",disabled:""}},[t._v("Select")]),t._l(999,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)])]),a("div",{staticClass:"col-12 row align-items-center"},[a("div",{staticClass:"col-12 col-md-2"},[t._v(" Month ")]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.start_month,expression:"data.start_month"}],staticClass:"form-select form-select-lg",attrs:{"aria-label":"Start month"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"start_month",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",value:"null",disabled:""}},[t._v("Select")]),t._l(t.month,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2),a("label",{staticClass:"form-label form-label-sm text-muted",attrs:{for:"exampleFormControlInput1"}},[t._v("Select the monthly you'd like there calls to run")])])])])])])},C=[],g={callTypes:[{id:1,name:"Custom Call Domestic",price:"66"},{id:12,name:"Custom Call International",price:"69"},{id:16,name:"Custom Call With 5% Pre-Pay Discount",price:"62.70"},{id:4,name:"Four Seasons Custom",price:"59.38"},{id:10,name:"Four Seasons Custom Plus 5 Surcharge",price:"59.38"},{id:21,name:"Four Seasons Group Sales Shops",price:"100"},{id:22,name:"Four Seasons Level 2 Coaching with Foreign Language",price:"132.77"},{id:5,name:"Four Seasons Standard",price:"47.06"},{id:9,name:"Four Seasons Standard Plus 10 Surcharge",price:"47.06"},{id:11,name:"Four Seasons Standard Plus 20 Surcharge",price:"47.06"},{id:8,name:"Four Seasons Standard Plus 5 Surcharge",price:"47.06"},{id:7,name:"Four Seasons WRO Custom",price:"60.40"},{id:6,name:"Four Seasons WRO Standard",price:"49.18"},{id:3,name:"Level 2 Coaching",price:"121"},{id:20,name:"PBX Calls",price:"20"},{id:18,name:"Pre-Recorded Coaching Calls",price:"92"},{id:17,name:"Pre-Recorded Coaching Calls With 5% Pre-Pay Discount",price:"87.40"},{id:19,name:"Pre-Recorded Shop Calls",price:"56"},{id:2,name:"Standard",price:"55"},{id:14,name:"Standard Call International",price:"65"},{id:13,name:"Standard Call International Plus $5 Surcharge",price:"65"},{id:15,name:"Traditional Coaching Call",price:"99"}],clients:[{id:1,name:"KSL"},{id:2,name:"KSFFFL"}],properties:[{id:1,name:"Lorem"},{id:2,name:"Lorem Lorem"}]},b={props:{data:{type:Object,default:function(){return{type:null,count:null,start_month:null}}}},data:function(){return{callTypes:g.callTypes,month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}}},x=b,w=Object(f["a"])(x,y,C,!1,null,null,null),S=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.title,expression:"title"}],staticClass:"tooltip-icon"},[t._t("default",(function(){return[a("svg",{staticClass:"bi bi-info-circle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}})])]}))],2)},P=[],F={props:{title:String,position:{type:String,default:"left"},refs:String}},O=F,A=(a("e411"),Object(f["a"])(O,k,P,!1,null,null,null)),T=A.exports,$={components:{FormBlock:_,CallTypeForm:S,Tooltip:T},data:function(){return{callTypes:g.callTypes,clients:g.clients,properties:g.properties,month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],client:null,property:null,monthly:{custom:null,standart:null},discount:"quarterly",starting_date:null,exclude:"all_year",specific_month:{start:null,end:null},calls:[{type:null,count:null,start_month:null}],notification_emails:null}},methods:{getCallTypes:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d()({method:"GET",baseURL:"https://aspire.academweb.tech/",url:"/api/call-types",headers:{"Content-Type":"application/json",Authorization:"Bearer 6cbded2788b7a71f1920043b6df4964c0c5d167a5895c0a9fcfe8729669280fa","Access-Control-Allow-Origin":"*"}});case 3:a=e.sent,console.log("data :>> ",a),t.calltypes=a,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("error :>> ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},N=$,j=Object(f["a"])(N,o,n,!1,null,null,null),q=j.exports,E={name:"App",components:{CustomerForm:q}},M=E,R=(a("034f"),Object(f["a"])(M,r,s,!1,null,null,null)),L=R.exports,B=(a("ab8b"),a("7b17"),a("e37d")),J={defaultPlacement:"right"};l["a"].use(B["a"],J),l["a"].config.productionTip=!1;var D=new l["a"]({render:function(t){return t(L)}});D.$mount("#app")},8380:function(t,e,a){},"85ec":function(t,e,a){},e411:function(t,e,a){"use strict";a("8380")}});
//# sourceMappingURL=app.0cb72426.js.map