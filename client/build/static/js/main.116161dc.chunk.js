(this["webpackJsonpreport-demo"]=this["webpackJsonpreport-demo"]||[]).push([[0],{270:function(e,t,r){},409:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(37),o=r.n(a),s=(r(270),r(10)),i=r(168),l=r(58),u=r(259),d=r(6),j=r.n(d),b=r(30),f=r(14),p=r(5),O=r(20),h=r(157),x=r(50),v=r.n(x),m=r(1),g=function(e){var t=e.data,r=void 0===t?[]:t,n=e.loading,c=e.columns,a=void 0===c?[]:c,o=e.filterPlaceholder,s=e.onFilter,i=e.maxheight,l=e.showFooter,u=void 0!==l&&l,d=e.onRowSelect,j=Object(h.useTable)({columns:a,data:r,stateReducer:function(e,t){return"toggleRowSelected"===t.type&&(e.selectedRowIds=Object(O.a)({},t.id,!t.isSelected)),e}},h.useRowSelect),b=j.getTableProps,f=j.getTableBodyProps,x=j.headerGroups,g=j.footerGroups,S=j.rows,w=j.prepareRow,y=(j.selectedFlatRows,v()((function(e){s(e)}),500));return Object(m.jsxs)(m.Fragment,{children:[s&&Object(m.jsx)("div",{className:"table-filter-container",children:Object(m.jsx)("input",{className:"table-filter-input",onChange:function(e){return y(e.target.value)},placeholder:o,autoFocus:!0})}),Object(m.jsx)("div",{className:"table-container",maxheight:i,children:Object(m.jsxs)("table",Object(p.a)(Object(p.a)({},b()),{},{children:[Object(m.jsx)("thead",{children:x.map((function(e){return Object(m.jsx)("tr",Object(p.a)(Object(p.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(m.jsx)("th",Object(p.a)(Object(p.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(m.jsx)("tbody",Object(p.a)(Object(p.a)({},f()),{},{children:S.map((function(e){return w(e),Object(m.jsx)("tr",Object(p.a)(Object(p.a)(Object(p.a)({},e.getRowProps({onClick:d?function(){e.toggleRowSelected(),d()}:null})),e.getToggleRowSelectedProps({})),{},{children:e.cells.map((function(t,r){return Object(m.jsx)("td",Object(p.a)(Object(p.a)({title:t.value},t.getCellProps()),{},{style:{background:e.isSelected?"lightgreen":"white"},children:t.render("Cell")}))}))}))}))})),u&&Object(m.jsx)("tfoot",{children:g.map((function(e){return Object(m.jsx)("tr",Object(p.a)(Object(p.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(m.jsx)("td",Object(p.a)(Object(p.a)({},e.getFooterProps()),{},{children:e.render("Footer")}))}))}))}))})]}))}),n&&Object(m.jsx)("div",{className:"loading-container",data:r.length?1:0,children:"Cargando..."})]})},S=[{Header:"Producto",accessor:"product"},{Header:"Cantidad",accessor:"quantity",Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.quantity}),0);return Number(t).toFixed(2)}},{Header:"Bruto",accessor:"rawProfit",Cell:function(e){var t=e.value;return t?"$"+t.toLocaleString():""},Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.rawProfit}),0);return"$"+Number(t.toFixed(2)).toLocaleString()}},{Header:"Utilidad",accessor:"netProfit",Cell:function(e){var t=e.value;return t?"$"+t.toLocaleString():""},Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.netProfit}),0);return"$"+Number(t.toFixed(2)).toLocaleString()}},{Header:"Promedio",accessor:"averageProfitPercent",Cell:function(e){return e.value+"%"}}],w=function(e){var t=e.data,r=Object(n.useMemo)((function(){return S}));return Object(m.jsx)(g,{data:t,columns:r,showFooter:!0})},y=function(e){var t=e.data,r=void 0===t?[]:t,c=e.onFilter,a=Object(n.useState)("rawProfit"),o=Object(s.a)(a,2),i=o[0],l=o[1],u=Object(n.useState)([]),d=Object(s.a)(u,2),j=d[0],f=d[1];return Object(n.useEffect)((function(){var e=r.sort((function(e,t){return t[i]-e[i]}));f(Object(b.a)(e))}),[i,r]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"card-header",children:[Object(m.jsx)("h3",{children:"Ventas"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{style:{marginRight:"5px"},children:"Ordenar:"}),Object(m.jsxs)("select",{onChange:function(e){return l(e.target.value)},value:i,children:[Object(m.jsx)("option",{value:"quantity",children:"Cantidad"}),Object(m.jsx)("option",{value:"rawProfit",children:"Bruto"}),Object(m.jsx)("option",{value:"netProfit",children:"Utilidad"}),Object(m.jsx)("option",{value:"averageProfitPercent",children:"Promedio"})]})]})]}),Object(m.jsx)("div",{className:"card-body",children:j.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{className:"input-filter",placeholder:"Buscar...",type:"search",onChange:function(e){return c(e.target.value)}}),Object(m.jsx)("div",{className:"table-container",children:Object(m.jsx)(w,{data:j})})]})})]})},C=r(123),N=function(e){var t=e.chartData,r=void 0===t?[]:t;return console.log(r),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h3",{children:"Gr\xe1fico de categor\xedas"})}),Object(m.jsx)("div",{className:"card-body",children:r.length>0&&Object(m.jsx)(C.a,{data:r,margin:{top:30,right:20,bottom:20,left:20},innerRadius:.5,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,arcLabel:function(e){return"".concat(e.value," (").concat(e.data.netProfit,")")},borderWidth:1,arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]},tooltip:function(e){var t=e.datum;return Object(m.jsxs)("div",{className:"tooltip-container",children:[Object(m.jsx)("span",{className:"small-square",style:{background:t.color}}),Object(m.jsx)("strong",{children:t.label}),Object(m.jsx)("label",{children:"Bruto: "}),Object(m.jsxs)("span",{children:["$",Number(t.value).toLocaleString()]}),Object(m.jsx)("label",{children:"Utilidad: "}),Object(m.jsxs)("span",{children:["$",Number(t.data.netProfit).toLocaleString()]})]})}})})]})},k=r(39),L=function(e){var t=e.onSubmit,r=Object(n.useState)({from:k.DateTime.now().toISODate(),to:k.DateTime.now().toISODate()}),c=Object(s.a)(r,2),a=c[0],o=c[1];return Object(m.jsx)("div",{id:"date-range-wrapper",children:Object(m.jsxs)("div",{id:"date-range-container",children:[Object(m.jsx)("label",{children:"Desde:"}),Object(m.jsx)("input",{type:"date",value:a.from,onChange:function(e){return o(Object(p.a)(Object(p.a)({},a),{},{from:e.target.value}))}}),Object(m.jsx)("label",{children:"Hasta:"}),Object(m.jsx)("input",{type:"date",value:a.to,onChange:function(e){return o(Object(p.a)(Object(p.a)({},a),{},{to:e.target.value}))}}),Object(m.jsx)("input",{type:"submit",onClick:function(e){return t(e,a)}})]})})},_=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.from,n=t.to,e.next=3,fetch("".concat("/api/invoices","/sales?from=").concat(r,"&to=").concat(n));case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,console.log("From fetchInvoiceReport: ",a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(n.useState)({filtered_invoices_report:[],invoices_report:[],group_sales_chart:[]}),t=Object(s.a)(e,2),r=t[0],c=t[1],a=v()((function(e){var t=r.invoices_report.filter((function(t){return t.product.toLowerCase().includes(e.toLowerCase())}));c(Object(p.a)(Object(p.a)({},r),{},{filtered_invoices_report:t}))}),500),o=function(){var e=Object(f.a)(j.a.mark((function e(t,n){var a,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,_(n);case 3:a=e.sent,o=a.group_sales_chart_data.reduce((function(e,t){return[].concat(Object(b.a)(e),[{id:t.categoria,label:t.categoria,value:t.rawProfit,netProfit:t.netProfit}])}),[]),c(Object(p.a)(Object(p.a)({},r),{},{invoices_report:a.sales_report,group_sales_chart:o}));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(m.jsxs)(l.a,{fluid:!0,className:"bg-dark px-5 pt-3 pb-5",children:[Object(m.jsx)("div",{className:"",children:Object(m.jsx)(L,{onSubmit:o})}),Object(m.jsxs)("div",{className:"d-flex flex-column flex-xl-row content-center gap-3",children:[Object(m.jsx)("div",{className:"col-12 col-xl-6",children:Object(m.jsx)(y,{data:r.filtered_invoices_report.length>0?r.filtered_invoices_report:r.invoices_report,onFilter:a})}),Object(m.jsx)("div",{className:"col-12 col-xl-6",children:Object(m.jsx)(N,{chartData:r.group_sales_chart})})]})]})},T=[{Header:"Cliente",accessor:"client"},{Header:"Total",accessor:"total_USD",Cell:function(e){return"$"+e.value.toLocaleString()}}],D=function(e){var t=e.data,r=Object(n.useMemo)((function(){return T}));return Object(m.jsx)(g,{data:t,columns:r})},I=function(e){var t=e.data,r=void 0===t?[]:t,n=e.onFilter;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h3",{children:"Mejores clientes"})}),Object(m.jsx)("div",{className:"card-body",children:r.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{className:"input-filter",placeholder:"Buscar...",type:"search",onChange:function(e){return n(e.target.value,"client","client_report")}}),Object(m.jsx)(D,{data:r})]})})]})},R=r(258),F=r(251),E=r.n(F),A=function(e){var t=e.placeholder,r=e.loadOptions,n=e.defaultOptions,c=void 0===n||n,a=e.cacheOptions,o=void 0===a||a,s=e.onSelect;return Object(m.jsx)(R.a,{loadOptions:E()((function(e,t){return r(e,t)}),700),cacheOptions:o,defaultOptions:c,placeholder:t,onChange:s,loadingMessage:function(){return"Cargando..."},isClearable:!0})},H="/api/products",B=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filter,n=r?"?filter=".concat(r):"",e.next=4,fetch(H+n);case 4:return c=e.sent,e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H,"/cost-fluctuation/").concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(f.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H,"/cost/group"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(f.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H,"/group"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H,"/price-list/").concat(t));case 2:return r=e.sent,n=r.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t=e.onSelect,r=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B({filter:t});case 2:if(!((r=e.sent)&&r.length>0)){e.next=6;break}return n=r.map((function(e){var t=e.Descripcion;return{key:e.id,label:t,value:e}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(A,{loadOptions:r,defaultOptions:!1,placeholder:"Buscar producto...",onSelect:function(e,r){var n=r.action;"select-option"===n?t(e.value,n):"clear"===n&&t(null,n)}})},q=[{Header:"Cliente",accessor:"client"},{Header:"Cantidad",accessor:"quantity_total"},{Header:"Total",accessor:"total_USD",Cell:function(e){var t=e.value;return t?"$"+t.toLocaleString():""}},{Header:"Utilidad",accessor:"utilidad",Cell:function(e){var t=e.value;return t?"$"+t.toLocaleString():0}}],W=function(e){var t=e.data,r=Object(n.useMemo)((function(){return q}));return Object(m.jsx)(g,{data:t,columns:r})},J="/api/clients",K=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filter,n=r?"?filter=".concat(r):"",e.next=4,fetch("".concat(J).concat(n));case 4:return c=e.sent,a=c.json(),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J,"/best/?from=").concat(t.from,"&to=").concat(t.to));case 2:return r=e.sent,n=r.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(f.a)(j.a.mark((function e(t,r){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J,"/best/product/").concat(t,"?from=").concat(r.from,"&to=").concat(r.to));case 2:return n=e.sent,c=n.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Z=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J,"/average/month/").concat(t));case 2:return r=e.sent,n=r.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(e){var t=e.dateRange,r=Object(n.useState)(null),c=Object(s.a)(r,2),a=c[0],o=c[1],i=Object(n.useState)([]),l=Object(s.a)(i,2),u=l[0],d=l[1];return Object(n.useEffect)((function(){if(a&&t.from&&t.to){var e=function(){var e=Object(f.a)(j.a.mark((function e(){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(a.IdProducto,t);case 2:r=e.sent,d(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else a||d([])}),[a,t]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"card-header",children:[Object(m.jsx)("h3",{children:"Cliente por producto"}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"5px"},children:[Object(m.jsx)("label",{children:"Desde: "}),Object(m.jsxs)("strong",{children:[k.DateTime.fromISO(t.from).toLocaleString()," "]}),Object(m.jsx)("label",{children:"Hasta: "}),Object(m.jsxs)("strong",{children:[k.DateTime.fromISO(t.to).toLocaleString()," "]})]})]}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("div",{style:{display:"flex",flex:"1",justifyContent:"space-between"},children:Object(m.jsx)("div",{style:{width:"100%"},children:Object(m.jsx)(G,{onSelect:o})})}),u.length>0&&Object(m.jsx)(W,{data:u})]})]})},X=function(e){var t=e.onSelect,r=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K({filter:t});case 2:if(!((r=e.sent)&&r.length>0)){e.next=6;break}return n=r.map((function(e){return{key:e.IdCliente,label:e.name,value:e}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(A,{loadOptions:r,defaultOptions:!1,placeholder:"Buscar cliente...",onSelect:function(e,r){var n=r.action;"select-option"===n?t&&t(e.value,n):"clear"===n&&t&&t(null,n)}})},ee=r(122),te=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),o=Object(s.a)(a,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){if(r){var e=function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(r.IdCliente);case 2:t=e.sent,l([t]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else l([])}),[r]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h3",{children:"Promedio mensual"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(X,{onSelect:c}),i&&Object(m.jsx)(ee.a,{data:i,margin:{top:20,right:30,bottom:80,left:40},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},axisTop:null,axisRight:null,pointSize:10,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,useMesh:!0})]})]})},re=function(){var e=Object(n.useState)({filtered_best_clients:[],best_clients:[],group_sales_chart:[]}),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)({from:k.DateTime.now().toISODate(),to:k.DateTime.now().toISODate()}),o=Object(s.a)(a,2),i=o[0],u=o[1],d=v()((function(e){var t=r.best_clients.filter((function(t){return t.client.toLowerCase().includes(e.toLowerCase())}));c(Object(p.a)(Object(p.a)({},r),{},{filtered_best_clients:t}))}),500),b=function(){var e=Object(f.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,V(n);case 3:a=e.sent,u(n),c(Object(p.a)(Object(p.a)({},r),{},{best_clients:a}));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(m.jsxs)(l.a,{fluid:!0,className:"px-5 pt-3 pb-5",children:[Object(m.jsx)("div",{className:"",children:Object(m.jsx)(L,{onSubmit:b})}),Object(m.jsxs)("div",{className:"d-flex flex-column flex-xl-row content-center gap-3",children:[Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(I,{data:r.filtered_best_clients.length>0?r.filtered_best_clients:r.best_clients,onFilter:d})}),Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(Q,{dateRange:i})}),Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(te,{})})]})]})},ne=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),o=Object(s.a)(a,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){if(r){var e=function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(r.IdProducto);case 2:t=e.sent,l([t]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else r||l([])}),[r]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h2",{children:"Promedio mensual costo"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(G,{onSelect:c}),Object(m.jsx)(ee.a,{data:i,margin:{top:20,right:30,bottom:80,left:40},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},axisTop:null,axisRight:null,pointSize:10,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,useMesh:!0})]})]})},ce=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filter,n=r?"?filter=".concat(r):"",e.next=4,fetch("/api/groups"+n);case 4:return c=e.sent,e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(e){var t=e.onSelect,r=function(){var e=Object(f.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce({filter:t});case 2:if(!((r=e.sent)&&r.length>0)){e.next=6;break}return n=r.map((function(e){return{key:e.groupId,label:e.name,value:e}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{style:{width:"100%"},children:Object(m.jsx)(A,{loadOptions:r,placeholder:"Buscar categor\xeda...",onSelect:function(e,r){var n=r.action;"select-option"===n?t(e.value,n):"clear"===n&&t(null,n)}})})},oe=[{Header:"Producto",accessor:"product"},{Header:"Precio",accessor:"price"},{Header:"Inventario",accessor:"stock"}],se=function(e){var t=e.data,r=Object(n.useMemo)((function(){return oe}));return Object(m.jsx)(g,{data:t,columns:r})},ie=function(e){var t=e.data,r=void 0===t?[]:t,n=e.group,c=void 0===n?"":n;return Object(m.jsxs)("table",{id:"price-list-table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Categor\xeda"}),Object(m.jsx)("th",{children:"Producto"}),Object(m.jsx)("th",{children:"Precio (USD)"}),Object(m.jsx)("th",{children:"DISPONIBLE"})]})}),Object(m.jsx)("tbody",{children:r.map((function(e){if(e.stock>0)return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:c}),Object(m.jsx)("td",{children:e.product}),Object(m.jsx)("td",{children:e.price}),Object(m.jsx)("td",{children:"EN STOCK"})]},e.productId)}))})]})},le=r(255),ue=r(155),de=(r(404),new ue.default("p","pt","a4")),je="LISTA-DE-PRECIOS-".concat(k.DateTime.fromISO((new Date).toISOString()).toLocaleString().replaceAll("/","-"),".pdf");de.setProperties({title:je});var be=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),o=Object(s.a)(a,2),i=o[0],l=o[1],u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(n.useState)(t),c=Object(s.a)(r,2),a=c[0],o=c[1],i=v()((function(e,t,r){r?u(e,t,r):l(e,t)}),500),l=function(t,r){var n=e.filter((function(e){return e[r].toLowerCase().includes(t.toLowerCase())}));return o(n),n},u=function(t,r,n){console.log("nestedKLey",n);var c=e[n].filter((function(e){return e[r].toLowerCase().includes(t.toLowerCase())}));o(Object(p.a)(Object(p.a)({},a),{},Object(O.a)({},n,c)))};return{filter:l,filteredData:a,setFilteredData:o,onFilterDebounced:i}}(i),d=u.filteredData,h=u.setFilteredData,x=u.onFilterDebounced,g=Object(n.useRef)(null),S=Object(n.useState)(!1),w=Object(s.a)(S,2),y=w[0],C=w[1];return Object(n.useEffect)((function(){if(r){var e=function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(r.groupId);case 2:t=e.sent,h([]),g.current.value="",l(Object(b.a)(t));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else r||l([])}),[r]),Object(n.useEffect)((function(){if(y){var e=function(){var e=Object(f.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:t=e.sent,r=document.createElement("div"),de.setFontSize(16),de.text("ALIMENTOS DM MARKET, C.A.",300,25,{align:"center"}),de.setFontSize(6),de.text("CALLE ILUSTRES PROCERES LOCAL NRO S/N SECTOR CENTRO ALTAGRACIA DE ORITUCO DE ORITUCO ZONA POSTAL 2320.",300,35,{align:"center"}),de.setFontSize(8),de.text("R.I.F.: J-41270446-0",300,45,{align:"center"}),de.text("Tel\xe9fono:",300,55,{align:"center"}),de.setFontSize(9),de.text("LISTA DE PRECIOS AL ".concat(k.DateTime.fromISO((new Date).toISOString()).toLocaleString()),300,70,{align:"center"}),Object.keys(t).map((function(e,n){var c=t[e];r.innerHTML=Object(le.renderToStaticMarkup)(Object(m.jsx)(ie,{data:c,group:e})),de.autoTable({html:r.firstChild,styles:{cellPadding:2},didParseCell:function(e){"body"===e.section&&e.cell.raw&&"TH"===e.cell.raw.nodeName&&(e.cell.styles.fillColor="gray",e.cell.styles.color="white",e.cell.styles.cellWidth="wrap")},margin:{top:80}}),de.addPage()})),de.save(je),C(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[y]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"card-header",children:[Object(m.jsx)("h2",{children:"Lista de precio por categor\xeda"}),Object(m.jsx)("button",{onClick:function(){return C(!0)},children:"Imprimir"})]}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:"40%"},children:[Object(m.jsx)(ae,{onSelect:c}),Object(m.jsx)("input",{ref:g,className:"input-filter",placeholder:"Buscar...",type:"search",onChange:function(e){x(e.target.value,"product")}})]}),Object(m.jsx)(se,{data:d.length>0?d:i})]})]})},fe=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(f.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:(t=e.sent)&&t.length&&(r=t.reduce((function(e,t){return[].concat(Object(b.a)(e),[{id:t.group_name,label:t.product,value:t.total_cost}])}),[]),console.log(t,r),c(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h3",{children:"Inversi\xf3n por categor\xeda"})}),Object(m.jsx)("div",{className:"card-body",children:r.length>0&&Object(m.jsx)(C.a,{data:r,margin:{top:30,right:20,bottom:20,left:20},innerRadius:.5,padAngle:.7,cornerRadius:3,valueFormat:function(e){return e.toLocaleString()},activeOuterRadiusOffset:8,borderWidth:1,arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]}})})]})},pe=function(){var e=Object(n.useState)({filtered_best_clients:[],best_clients:[],group_sales_chart:[]}),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)({from:k.DateTime.now().toISODate(),to:k.DateTime.now().toISODate()}),o=Object(s.a)(a,2);o[0],o[1],v()((function(e){var t=r.best_clients.filter((function(t){return t.client.toLowerCase().includes(e.toLowerCase())}));c(Object(p.a)(Object(p.a)({},r),{},{filtered_best_clients:t}))}),500);return Object(m.jsxs)(l.a,{fluid:!0,className:"px-5 pt-3 pb-5",children:[Object(m.jsx)("div",{className:""}),Object(m.jsxs)("div",{className:"d-flex flex-column flex-xl-row content-center gap-3",children:[Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(ne,{})}),Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(be,{})}),Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(fe,{})})]})]})},Oe=r(98),he=r(28);var xe=function(){var e=Object(n.useState)("ventas"),t=Object(s.a)(e,2),r=t[0],c=t[1];return Object(m.jsx)("div",{className:"App bg-dark",children:Object(m.jsx)(l.a,{fluid:!0,id:"main",className:"m-0 p-0 vh-100",children:Object(m.jsxs)(Oe.a,{children:[Object(m.jsx)(i.a,{bg:"dark",variant:"dark",className:"border-bottom",children:Object(m.jsxs)(l.a,{fluid:!0,children:[Object(m.jsx)(i.a.Brand,{children:"SISTEMA DE REPORTES"}),Object(m.jsxs)(u.a,{className:"me-auto",onClick:function(e){"A"===e.target.tagName&&c(e.target.href)},children:[Object(m.jsx)(Oe.b,{to:"/ventas",className:"text-decoration-none text-secondary nav-link ".concat(r.includes("ventas")?"active":""),children:"Ventas"}),Object(m.jsx)(Oe.b,{to:"/clientes",className:"text-decoration-none text-secondary nav-link ".concat(r.includes("clientes")?"active":""),children:"Clientes"}),Object(m.jsx)(Oe.b,{to:"/productos",className:"text-decoration-none text-secondary nav-link ".concat(r.includes("productos")?"active":""),children:"Productos"})]})]})}),Object(m.jsxs)(he.c,{children:[Object(m.jsx)(he.a,{path:"/ventas",component:P}),Object(m.jsx)(he.a,{path:"/clientes",component:re}),Object(m.jsx)(he.a,{path:"/productos",component:pe})]})]})})})};r(408);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(xe,{})}),document.getElementById("root"))}},[[409,1,2]]]);
//# sourceMappingURL=main.116161dc.chunk.js.map