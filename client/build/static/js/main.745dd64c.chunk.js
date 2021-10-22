(this["webpackJsonpreport-demo"]=this["webpackJsonpreport-demo"]||[]).push([[0],{233:function(e,t,r){},369:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(48),o=r.n(a),i=(r(233),r(26)),s=r(9),l=r.n(s),u=r(16),d=r(20),j=r(11),b=r(59),p=r(126),f=r(90),O=r.n(f),h=r(1),v=function(e){var t=e.data,r=void 0===t?[]:t,n=e.loading,c=e.columns,a=void 0===c?[]:c,o=e.filterPlaceholder,i=e.onFilter,s=e.maxheight,l=e.showFooter,d=void 0!==l&&l,j=e.onRowSelect,f=Object(p.useTable)({columns:a,data:r,stateReducer:function(e,t){return"toggleRowSelected"===t.type&&(e.selectedRowIds=Object(b.a)({},t.id,!t.isSelected)),e}},p.useRowSelect),v=f.getTableProps,x=f.getTableBodyProps,g=f.headerGroups,m=f.footerGroups,w=f.rows,y=f.prepareRow,S=(f.selectedFlatRows,O()((function(e){i(e)}),500));return Object(h.jsxs)(h.Fragment,{children:[i&&Object(h.jsx)("div",{className:"table-filter-container",children:Object(h.jsx)("input",{className:"table-filter-input",onChange:function(e){return S(e.target.value)},placeholder:o,autoFocus:!0})}),Object(h.jsx)("div",{className:"table-container",maxheight:s,children:Object(h.jsxs)("table",Object(u.a)(Object(u.a)({},v()),{},{children:[Object(h.jsx)("thead",{children:g.map((function(e){return Object(h.jsx)("tr",Object(u.a)(Object(u.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsx)("th",Object(u.a)(Object(u.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(h.jsx)("tbody",Object(u.a)(Object(u.a)({},x()),{},{children:w.map((function(e){return y(e),Object(h.jsx)("tr",Object(u.a)(Object(u.a)(Object(u.a)({},e.getRowProps({onClick:j?function(){e.toggleRowSelected(),j()}:null})),e.getToggleRowSelectedProps({})),{},{children:e.cells.map((function(t,r){return Object(h.jsx)("td",Object(u.a)(Object(u.a)({title:t.value},t.getCellProps()),{},{style:{background:e.isSelected?"lightgreen":"white"},children:t.render("Cell")}))}))}))}))})),d&&Object(h.jsx)("tfoot",{children:m.map((function(e){return Object(h.jsx)("tr",Object(u.a)(Object(u.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsx)("td",Object(u.a)(Object(u.a)({},e.getFooterProps()),{},{children:e.render("Footer")}))}))}))}))})]}))}),n&&Object(h.jsx)("div",{className:"loading-container",data:r.length?1:0,children:"Cargando..."})]})},x=[{Header:"Producto",accessor:"product"},{Header:"Cantidad",accessor:"quantity"},{Header:"Bruto",accessor:"rawProfit",Cell:function(e){var t=e.value;return t?"$"+t.toLocaleString():""},Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.rawProfit}),0);return"$"+Number(t.toFixed(2)).toLocaleString()}},{Header:"Utilidad",accessor:"netProfit",Cell:function(e){var t=e.value;return t?"$"+t.toLocaleString():""},Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.netProfit}),0);return"$"+Number(t.toFixed(2)).toLocaleString()}},{Header:"Promedio",accessor:"averageProfitPercent",Cell:function(e){return e.value+"%"}}],g=function(e){var t=e.data,r=Object(n.useMemo)((function(){return x}));return Object(h.jsx)(v,{data:t,columns:r,showFooter:!0})},m=[{Header:"Cliente",accessor:"client"},{Header:"Total",accessor:"total_USD",Cell:function(e){return"$"+e.value.toLocaleString()}}],w=function(e){var t=e.data,r=Object(n.useMemo)((function(){return m}));return Object(h.jsx)(v,{data:t,columns:r})},y=r(136),S=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.from,n=t.to,e.next=3,fetch("".concat("/api/reports/invoice","?from=").concat(r,"&to=").concat(n));case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,console.log("From fetchInvoiceReport: ",a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=r(137),k=function(e){var t=e.data,r=void 0===t?[]:t,c=e.onFilter,a=Object(n.useState)("rawProfit"),o=Object(j.a)(a,2),s=o[0],l=o[1],u=Object(n.useState)([]),d=Object(j.a)(u,2),b=d[0],p=d[1];return Object(n.useEffect)((function(){var e=r.sort((function(e,t){return t[s]-e[s]}));p(Object(i.a)(e))}),[s,r]),Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"card-header",children:[Object(h.jsx)("h2",{children:"Ventas"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Ordenar: "}),Object(h.jsxs)("select",{onChange:function(e){return l(e.target.value)},value:s,children:[Object(h.jsx)("option",{value:"quantity",children:"Cantidad"}),Object(h.jsx)("option",{value:"rawProfit",children:"Bruto"}),Object(h.jsx)("option",{value:"netProfit",children:"Utilidad"}),Object(h.jsx)("option",{value:"averageProfitPercent",children:"Promedio"})]})]})]}),Object(h.jsx)("div",{className:"card-body",children:b.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",{className:"input-filter",placeholder:"Buscar...",type:"search",onChange:function(e){return c(e.target.value,"product","sale_report")}}),Object(h.jsx)(g,{data:b})]})})]})},C=function(e){var t=e.data,r=void 0===t?[]:t,n=e.onFilter;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("h2",{children:"Clientes"})}),Object(h.jsx)("div",{className:"card-body",children:r.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",{className:"input-filter",placeholder:"Buscar...",type:"search",onChange:function(e){return n(e.target.value,"client","client_report")}}),Object(h.jsx)(w,{data:r})]})})]})},N=r(222),L=r(218),P=r.n(L),F=function(e){var t=e.placeholder,r=e.loadOptions,n=e.defaultOptions,c=void 0===n||n,a=e.cacheOptions,o=void 0===a||a,i=e.onSelect;return Object(h.jsx)(N.a,{loadOptions:P()((function(e,t){return r(e,t)}),700),cacheOptions:o,defaultOptions:c,placeholder:t,onChange:i,loadingMessage:function(){return"Cargando..."},isClearable:!0})},R="/api/products",D=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filter,n=r?"?filter=".concat(r):"",e.next=4,fetch(R+n);case 4:return c=e.sent,e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R,"/price-list/").concat(t));case 2:return r=e.sent,n=r.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/api/reports/products","/cost-fluctuation/").concat(t));case 2:return r=e.sent,n=r.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){var t=e.onSelect,r=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({filter:t});case 2:if(!((r=e.sent)&&r.length>0)){e.next=6;break}return n=r.map((function(e){var t=e.Descripcion;return{key:e.id,label:t,value:e}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(F,{loadOptions:r,defaultOptions:!1,placeholder:"Buscar producto...",onSelect:function(e,r){var n=r.action;"select-option"===n?t(e.value,n):"clear"===n&&t(null,n)}})},I=r(223),A=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),o=Object(j.a)(a,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){if(r){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(r.idProducto);case 2:t=e.sent,console.log(t),s([t]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else r||s([])}),[r]),Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("h2",{children:"Promedio mensual costo"})}),Object(h.jsx)("div",{className:"card-body"}),Object(h.jsx)(B,{onSelect:c}),Object(h.jsx)("div",{style:{height:"300px"},children:Object(h.jsx)(I.a,{data:i,margin:{top:50,right:50,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},axisTop:null,axisRight:null,pointSize:10,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,useMesh:!0})})]})},$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(n.useState)(t),c=Object(j.a)(r,2),a=c[0],o=c[1],i=O()((function(e,t,r){r?l(e,t,r):s(e,t)}),500),s=function(t,r){var n=e.filter((function(e){return e[r].toLowerCase().includes(t.toLowerCase())}));o(n)},l=function(t,r,n){console.log("nestedKLey",n);var c=e[n].filter((function(e){return e[r].toLowerCase().includes(t.toLowerCase())}));o(Object(u.a)(Object(u.a)({},a),{},Object(b.a)({},n,c)))};return{filteredData:a,setFilteredData:o,onFilterDebounced:i}},G=function(e){var t=e.data,r=void 0===t?[]:t,n=e.onFilter,c=void 0===n?function(){}:n;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("h2",{children:"Nuevos clientes"})}),Object(h.jsx)("div",{className:"card-body",children:r.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",{className:"input-filter",placeholder:"Buscar...",type:"search",onChange:function(e){return c(e.target.value,"client_report","client")}}),Object(h.jsx)(w,{data:r})]})})]})},M=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filter,n=r?"?filter=".concat(r):"",e.next=4,fetch("/api/groups"+n);case 4:return c=e.sent,e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.onSelect,r=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M({filter:t});case 2:if(!((r=e.sent)&&r.length>0)){e.next=6;break}return n=r.map((function(e){return{key:e.groupId,label:e.name,value:e}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{style:{width:"100%"},children:Object(h.jsx)(F,{loadOptions:r,placeholder:"Buscar categor\xeda...",onSelect:function(e,r){var n=r.action;"select-option"===n?t(e.value,n):"clear"===n&&t(null,n)}})})},U=[{Header:"Producto",accessor:"product"},{Header:"Precio",accessor:"price"},{Header:"Inventario",accessor:"stock"}],q=function(e){var t=e.data,r=Object(n.useMemo)((function(){return U}));return Object(h.jsx)(v,{data:t,columns:r})},W=function(e){e.onFilter;var t=Object(n.useState)(null),r=Object(j.a)(t,2),c=r[0],a=r[1],o=Object(n.useState)([]),i=Object(j.a)(o,2),s=i[0],u=i[1],b=$(s),p=b.filteredData,f=b.onFilterDebounced;return Object(n.useEffect)((function(){if(c){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(c.groupId);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else c||u([])}),[c]),Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("h2",{children:"Lista de precio por categor\xeda"})}),Object(h.jsx)("div",{className:"card-body"}),Object(h.jsxs)("div",{style:{height:"300px"},children:[Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:"40%"},children:[Object(h.jsx)(E,{onSelect:a}),Object(h.jsx)("input",{className:"input-filter",placeholder:"Buscar...",type:"search",onChange:function(e){return f(e.target.value,"product")}})]}),Object(h.jsx)(q,{data:p.length>0?p:s})]})]})};var J=function(){var e=Object(n.useState)({from:y.DateTime.now().toISODate(),to:y.DateTime.now().toISODate()}),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)({sale_report:[],categories_report:[],client_report:[],new_clients_report:[]}),o=Object(j.a)(a,2),s=o[0],b=o[1],p=Object(n.useState)({sale_report:[],categories_report:[],client_report:[],buy_price_fluctuation:[],new_clients_report:[]}),f=Object(j.a)(p,2),O=f[0],v=f[1],x=$(s,{sale_report:[],categories_report:[],client_report:[],new_clients_report:[]}),g=x.filteredData,m=x.onFilterDebounced,w=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,S(r);case 3:n=e.sent,b(Object(u.a)({},n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=s.categories_report.reduce((function(e,t){return[].concat(Object(i.a)(e),[{id:t.categoria,label:t.categoria,value:t.rawProfit,netProfit:t.netProfit}])}),[]),t=s.client_report.reduce((function(e,t){return[].concat(Object(i.a)(e),[{id:t.client,label:t.client,value:t.total_USD}])}),[]);v(Object(u.a)(Object(u.a)({},O),{},{categories_report:e,client_report:t}))}),[s]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{id:"date-range-wrapper",children:Object(h.jsxs)("div",{id:"date-range-container",children:[Object(h.jsx)("label",{children:"Desde:"}),Object(h.jsx)("input",{type:"date",value:r.from,onChange:function(e){return c(Object(u.a)(Object(u.a)({},r),{},{from:e.target.value}))}}),Object(h.jsx)("label",{children:"Hasta:"}),Object(h.jsx)("input",{type:"date",value:r.to,onChange:function(e){return c(Object(u.a)(Object(u.a)({},r),{},{to:e.target.value}))}}),Object(h.jsx)("input",{type:"submit",onClick:w})]})}),Object(h.jsxs)("main",{id:"main",children:[Object(h.jsxs)("div",{id:"left-content",children:[Object(h.jsx)(k,{data:g.sale_report.length?g.sale_report:s.sale_report,onFilter:m}),Object(h.jsx)(C,{data:g.client_report.length?g.client_report:s.client_report,onFilter:function(e,t){return m(e,t)}}),Object(h.jsx)(A,{}),Object(h.jsx)(G,{data:g.new_clients_report.length?g.new_clients_report:s.new_clients_report,onFilter:m}),Object(h.jsx)(W,{})]}),Object(h.jsxs)("div",{id:"right-content",children:[Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("h2",{children:"Gr\xe1fico de categor\xedas"})}),Object(h.jsx)("div",{className:"card-body",children:O.categories_report.length>0&&Object(h.jsx)("div",{style:{height:"300px"},children:Object(h.jsx)(_.a,{data:O.categories_report,margin:{top:30,right:20,bottom:20,left:20},innerRadius:.5,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,arcLabel:function(e){return"".concat(e.value," (").concat(e.data.netProfit,")")},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]},tooltip:function(e){var t=e.datum;return Object(h.jsxs)("div",{className:"tooltip-container",children:[Object(h.jsx)("span",{className:"small-square",style:{background:t.color}}),Object(h.jsx)("strong",{children:t.label}),Object(h.jsx)("label",{children:"Bruto: "}),Object(h.jsxs)("span",{children:["$",Number(t.value).toLocaleString()]}),Object(h.jsx)("label",{children:"Utilidad: "}),Object(h.jsxs)("span",{children:["$",Number(t.data.netProfit).toLocaleString()]})]})}})})})]}),Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("h2",{children:"Gr\xe1fico de clientes"})}),Object(h.jsx)("div",{className:"card-body",children:O.client_report.length>0&&Object(h.jsx)("div",{style:{height:"300px"},children:Object(h.jsx)(_.a,{data:O.client_report,margin:{top:30,right:20,bottom:20,left:20},innerRadius:.5,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]}})})})]})]})]})]})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}},[[369,1,2]]]);
//# sourceMappingURL=main.745dd64c.chunk.js.map