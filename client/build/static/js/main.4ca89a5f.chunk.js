(this["webpackJsonpreport-demo"]=this["webpackJsonpreport-demo"]||[]).push([[0],{296:function(e,t,r){},435:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(39),s=r.n(c),o=(r(296),r(114)),i=r(51),l=r(282),u=r(25),d=r(15),j=r(4),b=r(6),f=r(7),O=r.n(f),p=r(182),h=r(68),x=r.n(h),m=r(1),v=function(e){var t=e.data,r=void 0===t?[]:t,n=e.loading,c=e.columns,s=void 0===c?[]:c,o=e.filterPlaceholder,i=e.onFilter,l=e.maxHeight,u=void 0===l?350:l,d=e.showFooter,b=void 0!==d&&d,f=e.onRowSelect,O=Object(p.useTable)({columns:s,data:r},p.useRowSelect),h=O.getTableProps,v=O.getTableBodyProps,g=O.headerGroups,S=O.footerGroups,w=O.rows,y=O.prepareRow,N=x()((function(e){i(e)}),500),C=a.a.memo((function(e){var t=e.row;return Object(m.jsx)("tr",Object(j.a)(Object(j.a)(Object(j.a)({},t.getRowProps({onClick:f?function(){t.toggleRowSelected(),f(t.isSelected?null:t.original)}:null})),t.getToggleRowSelectedProps({})),{},{children:t.cells.map((function(e,r){return Object(m.jsx)("td",Object(j.a)(Object(j.a)({title:e.value},e.getCellProps()),{},{style:{background:t.isSelected?"lightblue":"white",color:t.isSelected?"white":"black"},children:e.render("Cell")}))}))}))}),[r]);return Object(m.jsxs)("div",{children:[i&&Object(m.jsx)("div",{className:"table-filter-container",children:Object(m.jsx)("input",{className:"table-filter-input",onChange:function(e){return N(e.target.value)},placeholder:o,autoFocus:!0})}),Object(m.jsxs)("div",{className:"table-container",style:{maxHeight:u},children:[Object(m.jsxs)("table",Object(j.a)(Object(j.a)({},h()),{},{children:[Object(m.jsx)("thead",{children:g.map((function(e){return Object(m.jsx)("tr",Object(j.a)(Object(j.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(m.jsx)("th",Object(j.a)(Object(j.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(m.jsx)("tbody",Object(j.a)(Object(j.a)({},v()),{},{children:w.map((function(e){return y(e),Object(m.jsx)(C,{row:e})}))})),b&&r.length>0&&Object(m.jsx)("tfoot",{children:S.map((function(e){return Object(m.jsx)("tr",Object(j.a)(Object(j.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(m.jsx)("td",Object(j.a)(Object(j.a)({},e.getFooterProps()),{},{children:e.render("Footer")}))}))}))}))})]})),n&&Object(m.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:Object(m.jsx)("span",{className:"spinner-border spinner-border-md",role:"status","aria-hidden":"true"})})]})]})},g=[{Header:"Producto",accessor:"product"},{Header:"Cantidad",accessor:"quantity",Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.quantity}),0);return Number(t).toFixed(2)}},{Header:"Bruto",accessor:"rawProfit",Cell:function(e){var t=e.value;return t?"$"+t.toLocaleString():""},Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.rawProfit}),0);return"$"+Number(t.toFixed(2)).toLocaleString()}},{Header:"Utilidad",accessor:"netProfit",Cell:function(e){var t=e.value;return t?"$"+t.toLocaleString():""},Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.netProfit}),0);return"$"+Number(t.toFixed(2)).toLocaleString()}},{Header:"Promedio",accessor:"averageProfitPercent",Cell:function(e){return e.value+"%"}}],S=function(e){var t=e.data,r=e.loading,a=Object(n.useMemo)((function(){return g}),[]);return Object(m.jsx)(v,{data:t,columns:a,showFooter:!0,loading:r})},w=function(e){var t=e.data,r=void 0===t?[]:t,a=e.onFilter,c=e.loading,s=Object(n.useState)("rawProfit"),o=Object(b.a)(s,2),i=o[0],l=o[1],d=Object(n.useState)([]),j=Object(b.a)(d,2),f=j[0],O=j[1];return Object(n.useEffect)((function(){var e=r.sort((function(e,t){return t[i]-e[i]}));O(Object(u.a)(e))}),[i,r]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"card-header",children:[Object(m.jsx)("h3",{children:"Ventas"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{style:{marginRight:"5px"},children:"Ordenar:"}),Object(m.jsxs)("select",{onChange:function(e){return l(e.target.value)},value:i,children:[Object(m.jsx)("option",{value:"quantity",children:"Cantidad"}),Object(m.jsx)("option",{value:"rawProfit",children:"Bruto"}),Object(m.jsx)("option",{value:"netProfit",children:"Utilidad"}),Object(m.jsx)("option",{value:"averageProfitPercent",children:"Promedio"})]})]})]}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("input",{className:"input-filter",placeholder:"Buscar...",type:"search",onChange:function(e){return a(e.target.value)}}),Object(m.jsx)(S,{data:f,loading:c})]})]})},y=r(146),N=function(e){var t=e.chartData,r=void 0===t?[]:t,n=e.loading;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h3",{children:"Gr\xe1fico de categor\xedas"})}),Object(m.jsxs)("div",{className:"card-body",children:[r.length>0&&Object(m.jsx)(y.a,{data:r,margin:{top:30,right:20,bottom:20,left:20},innerRadius:.5,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,arcLabel:function(e){return"".concat(e.value," (").concat(e.data.netProfit,")")},borderWidth:1,arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]},tooltip:function(e){var t=e.datum;return Object(m.jsxs)("div",{className:"tooltip-container",children:[Object(m.jsx)("span",{className:"small-square",style:{background:t.color}}),Object(m.jsx)("strong",{children:t.label}),Object(m.jsx)("label",{children:"Bruto: "}),Object(m.jsxs)("span",{children:["$",Number(t.value).toLocaleString()]}),Object(m.jsx)("label",{children:"Utilidad: "}),Object(m.jsxs)("span",{children:["$",Number(t.data.netProfit).toLocaleString()]})]})}}),n&&Object(m.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:Object(m.jsx)("span",{className:"spinner-border spinner-border-md",role:"status","aria-hidden":"true"})})]})]})},C=r(43),k=r(476),L=function(e){var t=e.onSubmit,r=e.loading,a=e.submitDisabled,c=Object(n.useState)({from:C.DateTime.now().toISODate(),to:C.DateTime.now().toISODate()}),s=Object(b.a)(c,2),o=s[0],i=s[1];return Object(m.jsxs)("div",{className:"d-flex flex-column flex-sm-row justify-content-center mb-3 gap-2",children:[Object(m.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center gap-2 text-light",children:[Object(m.jsx)("label",{className:"d-none d-sm-flex",children:"Desde:"}),Object(m.jsx)("input",{type:"date",value:o.from,onChange:function(e){return i(Object(j.a)(Object(j.a)({},o),{},{from:e.target.value}))}}),Object(m.jsx)("label",{className:"d-none d-sm-flex",children:"Hasta:"}),Object(m.jsx)("input",{type:"date",value:o.to,onChange:function(e){return i(Object(j.a)(Object(j.a)({},o),{},{to:e.target.value}))}})]}),Object(m.jsxs)(k.a,{variant:"primary",onClick:function(e){return t(e,o)},disabled:r||a,children:[r&&Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(m.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}),!r&&Object(m.jsx)("span",{className:"mr-2",children:"Enviar"})]})]})},T=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.from,n=t.to,e.next=3,fetch("".concat("/api/invoices","/sales?from=").concat(r,"&to=").concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,console.log("From fetchInvoiceReport: ",c),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(n.useState)({filtered_invoices_report:[],invoices_report:[],group_sales_chart:[]}),t=Object(b.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),o=s[0],l=s[1],f=x()((function(e){var t=r.invoices_report.filter((function(t){return t.product.toLowerCase().includes(e.toLowerCase())}));a(Object(j.a)(Object(j.a)({},r),{},{filtered_invoices_report:t}))}),500),p=function(){var e=Object(d.a)(O.a.mark((function e(t,n){var c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(!0),e.next=4,T(n);case 4:c=e.sent,s=c.group_sales_chart_data.reduce((function(e,t){return[].concat(Object(u.a)(e),[{id:t.categoria,label:t.categoria,value:t.rawProfit,netProfit:t.netProfit}])}),[]),a(Object(j.a)(Object(j.a)({},r),{},{invoices_report:c.sales_report,group_sales_chart:s})),l(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(m.jsxs)(i.a,{fluid:!0,children:[Object(m.jsx)(L,{onSubmit:p,loading:o}),Object(m.jsxs)("div",{className:"d-flex flex-column flex-xl-row justify-content-center gap-3",children:[Object(m.jsx)("div",{className:"col-12 col-xl-6",children:Object(m.jsx)(w,{data:r.filtered_invoices_report.length>0?r.filtered_invoices_report:r.invoices_report,onFilter:f,loading:o})}),Object(m.jsx)("div",{className:"col-12 col-xl-6",children:Object(m.jsx)(N,{chartData:r.group_sales_chart,loading:o})})]})]})},D=[{Header:"Cliente",accessor:"client"},{Header:"Total",accessor:"total_USD",Cell:function(e){return"$"+e.value.toLocaleString()}}],I=function(e){var t=e.data,r=e.loading,a=Object(n.useMemo)((function(){return D}),[]);return Object(m.jsx)(v,{data:t,columns:a,loading:r})},_=function(e){var t=e.loading,r=e.data,n=void 0===r?[]:r,a=e.onFilter;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h3",{children:"Mejores clientes"})}),Object(m.jsx)("div",{className:"card-body",children:n.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{className:"input-filter",placeholder:"Buscar...",type:"search",onChange:function(e){return a(e.target.value,"client","client_report")}}),Object(m.jsx)(I,{data:n,loading:t})]})})]})},F=r(281),R=r(274),E=r.n(R),H=function(e){var t=e.placeholder,r=e.loadOptions,n=e.defaultOptions,a=void 0===n||n,c=e.cacheOptions,s=void 0===c||c,o=e.onSelect;return Object(m.jsx)(F.a,{loadOptions:E()((function(e,t){return r(e,t)}),700),cacheOptions:s,defaultOptions:a,placeholder:t,onChange:o||null,loadingMessage:function(){return"Cargando..."},isClearable:!0})},A="/api/products",B=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filter,n=r?"?filter=".concat(r):"",e.next=4,fetch(A+n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/cost-fluctuation/").concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(d.a)(O.a.mark((function e(){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/cost/group"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(O.a.mark((function e(){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/group"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/price-list/").concat(t));case 2:return r=e.sent,n=r.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t=e.onSelect,r=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B({filter:t});case 2:if(!((r=e.sent)&&r.length>0)){e.next=6;break}return n=r.map((function(e){var t=e.Descripcion;return{key:e.id,label:t,value:e}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(H,{loadOptions:r,defaultOptions:!1,placeholder:"Buscar producto...",onSelect:function(e,r){var n=r.action;"select-option"===n?t(e.value,n):"clear"===n&&t(null,n)}})},q=[{Header:"Cliente",accessor:"client"},{Header:"Cantidad",accessor:"quantity_total"},{Header:"Total",accessor:"total_USD",Cell:function(e){var t=e.value;return t?"$"+t.toLocaleString():""}},{Header:"Utilidad",accessor:"utilidad",Cell:function(e){var t=e.value;return t?"$"+t.toLocaleString():0}}],W=function(e){var t=e.data,r=e.loading,a=Object(n.useMemo)((function(){return q}),[]);return Object(m.jsx)(v,{data:t,columns:a,loading:r})},J="/api/clients",K=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filter,n=r?"?filter=".concat(r):"",e.next=4,fetch("".concat(J).concat(n));case 4:return a=e.sent,c=a.json(),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J,"/best/?from=").concat(t.from,"&to=").concat(t.to));case 2:return r=e.sent,n=r.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(d.a)(O.a.mark((function e(t,r){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J,"/best/product/").concat(t,"?from=").concat(r.from,"&to=").concat(r.to));case 2:return n=e.sent,a=n.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J,"/average/month/").concat(t));case 2:return r=e.sent,n=r.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(e){var t=e.dateRange,r=Object(n.useState)(null),a=Object(b.a)(r,2),c=a[0],s=a[1],o=Object(n.useState)([]),i=Object(b.a)(o,2),l=i[0],d=i[1],j=Object(n.useState)(!1),f=Object(b.a)(j,2),O=f[0],p=f[1];return Object(n.useEffect)((function(){c&&t.from&&t.to?(p(!0),Z(c.IdProducto,t).then((function(e){d(Object(u.a)(e)),p(!1)}))):c||d([])}),[c,t]),console.log(l),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"card-header",children:[Object(m.jsx)("h3",{children:"Cliente por producto"}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"5px"},children:[Object(m.jsx)("small",{children:"Desde: "}),Object(m.jsxs)("small",{children:[C.DateTime.fromISO(t.from).toLocaleString()," "]}),Object(m.jsx)("small",{children:"Hasta: "}),Object(m.jsxs)("small",{children:[C.DateTime.fromISO(t.to).toLocaleString()," "]})]})]}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("div",{style:{display:"flex",flex:"1",justifyContent:"space-between"},children:Object(m.jsx)("div",{style:{width:"100%"},children:Object(m.jsx)(G,{onSelect:s})})}),Object(m.jsx)(W,{data:l,loading:O})]})]})},X=function(e){var t=e.onSelect,r=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K({filter:t});case 2:if(!((r=e.sent)&&r.length>0)){e.next=6;break}return n=r.map((function(e){return{key:e.IdCliente,label:e.name,value:e}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(H,{loadOptions:r,defaultOptions:!1,placeholder:"Buscar cliente...",onSelect:function(e,r){var n=r.action;"select-option"===n?t&&t(e.value,n):"clear"===n&&t&&t(null,n)}})},ee=r(144),te=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)([]),s=Object(b.a)(c,2),o=s[0],i=s[1],l=Object(n.useState)(!1),u=Object(b.a)(l,2),d=u[0],j=u[1];return Object(n.useEffect)((function(){r?(j(!0),V(r.IdCliente).then((function(e){console.log(e),Object.keys(e).length>0&&i([e]),j(!1)}))):i([])}),[r]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h3",{children:"Promedio mensual"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(X,{onSelect:a}),o&&Object(m.jsx)(ee.a,{data:o,margin:{top:20,right:30,bottom:80,left:40},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},axisTop:null,axisRight:null,pointSize:10,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,useMesh:!0}),d&&Object(m.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:Object(m.jsx)("span",{className:"spinner-border spinner-border-md",role:"status","aria-hidden":"true"})})]})]})},re=function(){var e=Object(n.useState)({filtered_best_clients:[],best_clients:[],group_sales_chart:[]}),t=Object(b.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)({from:C.DateTime.now().toISODate(),to:C.DateTime.now().toISODate()}),s=Object(b.a)(c,2),o=s[0],l=s[1],u=Object(n.useState)(!1),f=Object(b.a)(u,2),p=f[0],h=f[1],v=x()((function(e){var t=r.best_clients.filter((function(t){return t.client.toLowerCase().includes(e.toLowerCase())}));a(Object(j.a)(Object(j.a)({},r),{},{filtered_best_clients:t}))}),500),g=function(){var e=Object(d.a)(O.a.mark((function e(t,n){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(!0),e.next=4,Y(n);case 4:c=e.sent,l(n),a(Object(j.a)(Object(j.a)({},r),{},{best_clients:c})),h(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(m.jsxs)(i.a,{fluid:!0,children:[Object(m.jsx)(L,{onSubmit:g,loading:p}),Object(m.jsxs)("div",{className:"d-flex flex-column flex-xl-row justify-content-center gap-3",children:[Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(_,{data:r.filtered_best_clients.length>0?r.filtered_best_clients:r.best_clients,onFilter:v,loading:p})}),Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(Q,{dateRange:o})}),Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(te,{})})]})]})},ne=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)([]),s=Object(b.a)(c,2),o=s[0],i=s[1],l=Object(n.useState)(!1),u=Object(b.a)(l,2),j=u[0],f=u[1];return Object(n.useEffect)((function(){if(r){var e=function(){var e=Object(d.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,M(r.IdProducto);case 3:t=e.sent,Object.keys(t).length>0&&i([t]),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else r||i([])}),[r]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h3",{children:"Promedio mensual costo"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(G,{onSelect:a}),Object(m.jsx)(ee.a,{data:o,margin:{top:20,right:30,bottom:80,left:40},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},axisTop:null,axisRight:null,axisLeft:{legend:"Precio",legendPosition:"middle",legendOffset:-30},axisBottom:{legend:"Meses",legendPosition:"middle",legendOffset:30},pointSize:10,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,useMesh:!0})]}),j&&Object(m.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:Object(m.jsx)("span",{className:"spinner-border spinner-border-md",role:"status","aria-hidden":"true"})})]})},ae=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filter,n=r?"?filter=".concat(r):"",e.next=4,fetch("/api/groups"+n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(e){var t=e.onSelect,r=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae({filter:t});case 2:if(!((r=e.sent)&&r.length>0)){e.next=6;break}return n=r.map((function(e){return{key:e.groupId,label:e.name,value:e}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{style:{width:"100%"},children:Object(m.jsx)(H,{loadOptions:r,placeholder:"Buscar categor\xeda...",onSelect:function(e,r){var n=r.action;"select-option"===n?t(e.value,n):"clear"===n&&t(null,n)}})})},se=[{Header:"Producto",accessor:"product"},{Header:"Precio",accessor:"price"},{Header:"Inventario",accessor:"stock"}],oe=function(e){var t=e.data,r=e.loading,a=Object(n.useMemo)((function(){return se}),[]);return Object(m.jsx)(v,{data:t,columns:a,loading:r})},ie=r(18),le=function(e){var t=e.data,r=void 0===t?[]:t,n=e.group,a=void 0===n?"":n;return Object(m.jsxs)("table",{id:"price-list-table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Categor\xeda"}),Object(m.jsx)("th",{children:"Producto"}),Object(m.jsx)("th",{children:"Precio (USD)"}),Object(m.jsx)("th",{children:"DISPONIBLE"})]})}),Object(m.jsx)("tbody",{children:r.map((function(e){return e.stock>0?Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:a}),Object(m.jsx)("td",{children:e.product}),Object(m.jsx)("td",{children:e.price}),Object(m.jsx)("td",{children:"EN STOCK"})]},e.productId):""}))})]})},ue=r(278),de=r(180),je=(r(430),new de.default("p","pt","a4")),be="LISTA-DE-PRECIOS-".concat(C.DateTime.fromISO((new Date).toISOString()).toLocaleString().replaceAll("/","-"),".pdf");je.setProperties({title:be});var fe=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)([]),s=Object(b.a)(c,2),o=s[0],i=s[1],l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(n.useState)(t),a=Object(b.a)(r,2),c=a[0],s=a[1],o=x()((function(e,t,r){r?l(e,t,r):i(e,t)}),500),i=function(t,r){var n=e.filter((function(e){return e[r].toLowerCase().includes(t.toLowerCase())}));return s(n),n},l=function(t,r,n){console.log("nestedKLey",n);var a=e[n].filter((function(e){return e[r].toLowerCase().includes(t.toLowerCase())}));s(Object(j.a)(Object(j.a)({},c),{},Object(ie.a)({},n,a)))};return{filter:i,filteredData:c,setFilteredData:s,onFilterDebounced:o}}(o),f=l.filteredData,p=l.setFilteredData,h=l.onFilterDebounced,v=Object(n.useRef)(null),g=Object(n.useState)(!1),S=Object(b.a)(g,2),w=S[0],y=S[1],N=Object(n.useState)(!1),L=Object(b.a)(N,2),T=L[0],P=L[1],D=Object(n.useState)(!1),I=Object(b.a)(D,2),_=I[0],F=I[1];return Object(n.useEffect)((function(){if(r){var e=function(){var e=Object(d.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,z(r.groupId);case 3:t=e.sent,p([]),v.current.value="",i(Object(u.a)(t)),F(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else r||i([])}),[r]),Object(n.useEffect)((function(){if(w){var e=function(){var e=Object(d.a)(O.a.mark((function e(){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,U();case 3:t=e.sent,r=document.createElement("div"),je.setFontSize(16),je.text("ALIMENTOS DM MARKET, C.A.",300,25,{align:"center"}),je.setFontSize(6),je.text("CALLE ILUSTRES PROCERES LOCAL NRO S/N SECTOR CENTRO ALTAGRACIA DE ORITUCO DE ORITUCO ZONA POSTAL 2320.",300,35,{align:"center"}),je.setFontSize(8),je.text("R.I.F.: J-41270446-0",300,45,{align:"center"}),je.text("Tel\xe9fono:",300,55,{align:"center"}),je.setFontSize(9),je.text("LISTA DE PRECIOS AL ".concat(C.DateTime.fromISO((new Date).toISOString()).toLocaleString()),300,70,{align:"center"}),Object.keys(t).forEach((function(e,n){var a=t[e];r.innerHTML=Object(ue.renderToStaticMarkup)(Object(m.jsx)(le,{data:a,group:e})),je.autoTable({html:r.firstChild,styles:{cellPadding:2},didParseCell:function(e){"body"===e.section&&e.cell.raw&&"TH"===e.cell.raw.nodeName&&(e.cell.styles.fillColor="gray",e.cell.styles.color="white",e.cell.styles.cellWidth="wrap")},margin:{top:80}}),je.addPage()})),je.save(be),y(!1),P(!1);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[w]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"card-header",children:[Object(m.jsx)("h3",{children:"Lista de precios por categor\xeda"}),Object(m.jsxs)(k.a,{variant:"primary",disabled:T,onClick:function(){return y(!0)},children:[T&&Object(m.jsxs)("div",{className:"d-flex gap-1 align-items-center",children:[Object(m.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(m.jsx)("span",{children:"Imprimir"}),Object(m.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}),!T&&Object(m.jsx)("span",{children:"Imprimir"})]})]}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("div",{style:{display:"flex",gap:"20%"},children:[Object(m.jsx)(ce,{onSelect:a}),Object(m.jsx)("input",{ref:v,className:"input-filter",placeholder:"Buscar...",type:"search",onChange:function(e){h(e.target.value,"product")}})]}),Object(m.jsx)(oe,{data:f.length>0?f:o,loading:_})]})]})},Oe=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),o=s[0],i=s[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(O.a.mark((function e(){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,$();case 3:(t=e.sent)&&t.length&&(r=t.reduce((function(e,t){return[].concat(Object(u.a)(e),[{id:t.group_name,label:t.product,value:t.total_cost}])}),[]),console.log(t,r),a(r)),i(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h3",{children:"Inversi\xf3n por categor\xeda"})}),Object(m.jsxs)("div",{className:"card-body",children:[r.length>0&&Object(m.jsx)(y.a,{data:r,margin:{top:30,right:20,bottom:20,left:20},innerRadius:.5,padAngle:.7,cornerRadius:3,valueFormat:function(e){return e.toLocaleString()},activeOuterRadiusOffset:8,borderWidth:1,arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]}}),o&&Object(m.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:Object(m.jsx)("span",{className:"spinner-border spinner-border-md",role:"status","aria-hidden":"true"})})]})]})},pe=function(){return Object(m.jsx)(i.a,{fluid:!0,children:Object(m.jsxs)("div",{className:"d-flex flex-column flex-xl-row justify-content-center gap-3",children:[Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(ne,{})}),Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(fe,{})}),Object(m.jsx)("div",{className:"col-12 col-xl-4",children:Object(m.jsx)(Oe,{})})]})})},he=[{Header:"ID",accessor:"invoiceId"},{Header:"Cliente",accessor:"client"},{Header:"Rif",accessor:"rif"},{Header:"Fecha",accessor:"createdAt",Cell:function(e){var t=e.value;return C.DateTime.fromISO(t,{setZone:!0}).toFormat("F")}},{Header:"Total",accessor:"invoiceTotal",Cell:function(e){var t=e.value;return t?"$"+t:""},Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.invoiceTotal}),0);return t?"$"+Number(t).toLocaleString():0}},{Header:"Comisi\xf3n",accessor:"commissionTotal",Cell:function(e){var t=e.value;return t?"$"+t:""},Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.commissionTotal}),0);return t?"$"+Number(t).toLocaleString():0}}],xe=function(e){var t=e.data,r=e.loading,a=Object(n.useMemo)((function(){return he}),[]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h2",{children:"Reporte de ventas"})}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)(v,{data:t,columns:a,loading:r,showFooter:!0,maxHeight:400})})]})})},me="/api/employees",ve=function(){var e=Object(d.a)(O.a.mark((function e(){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(me));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(me,"/commissionInfo/").concat(t)).catch((function(e){return{error:e}}));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=Object(d.a)(O.a.mark((function e(t,r){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(me,"/commissionInfo/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({commissionInfo:r})}).catch((function(e){return{error:e}}));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),we=function(){var e=Object(d.a)(O.a.mark((function e(t,r){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(me,"/sales/").concat(t,"?from=").concat(r.from,"&to=").concat(r.to)).catch((function(e){return{error:e}}));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ye=function(e){var t=e.onSelect,r=function(){var e=Object(d.a)(O.a.mark((function e(t){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve({filter:t});case 2:if(!((r=e.sent)&&r.length>0)){e.next=6;break}return n=r.map((function(e){return{key:e.id,label:e.name,value:e}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(H,{loadOptions:r,placeholder:"Buscar vendedor...",onSelect:function(e,r){var n=r.action;"select-option"===n?t&&t(e.value,n):"clear"===n&&t&&t(null,n)}})},Ne=r(477),Ce=r(478),ke=r(479),Le=function(e){var t=e.employee,r=e.show,a=e.onClose,c=Object(n.useState)({data:[],loading:!1}),s=Object(b.a)(c,2),o=s[0],i=s[1],l=Object(n.useState)({}),u=Object(b.a)(l,2),f=u[0],p=u[1],h=Object(n.useState)({loading:!1,error:!1,message:""}),x=Object(b.a)(h,2),v=x[0],g=x[1];Object(n.useEffect)((function(){i(Object(j.a)(Object(j.a)({},o),{},{loading:!0})),ge(t.id).then((function(e){i({data:e,loading:!1})}))}),[]);var S=function(){var e={};return Object.keys(f).map((function(t){f[t]&&(e[t]=Number(f[t]))})),e},w=function(){var e=Object(d.a)(O.a.mark((function e(r){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),v.loading){e.next=7;break}return g(Object(j.a)(Object(j.a)({},v),{},{loading:!0,text:""})),e.next=5,Se(t.id,S());case 5:(n=e.sent).error?g({error:!0,text:n.error.message,loading:!1}):n.success&&g({error:!1,text:"El recurso fue actualizado con \xe9xito",loading:!1});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(ke.a,{show:r,size:"lg",onHide:a,children:[Object(m.jsx)(ke.a.Header,{closeButton:!0,children:Object(m.jsx)(ke.a.Title,{children:t.name})}),Object(m.jsxs)("form",{onSubmit:w,children:[Object(m.jsx)(ke.a.Body,{children:Object(m.jsx)("div",{className:"row justify-content-center",children:o.data.error?Object(m.jsx)(Ne.a,{variant:"danger",children:o.data.error.message}):o.loading?Object(m.jsx)(Ce.a,{animation:"border"}):o.data.map((function(e){return Object(m.jsxs)("div",{className:"d-flex flex-column col-sm-4",children:[Object(m.jsx)("label",{className:"form-label",children:e.group}),Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"%"}),Object(m.jsx)("input",{type:"number",min:0,step:.01,className:"form-control",placeholder:e.commission||0,value:f[e.groupId]||"",onChange:function(t){return p(Object(j.a)(Object(j.a)({},f),{},Object(ie.a)({},e.groupId,t.target.value)))},onFocus:function(e){return e.target.select()}})]})]},e.groupId)}))})}),Object(m.jsx)(ke.a.Footer,{className:"px-0 pb-2",children:Object(m.jsxs)("div",{className:"container-fluid d-flex justify-content-between align-items-center gap-5",children:[Object(m.jsx)("div",{className:"col-9",children:v.text&&Object(m.jsx)(Ne.a,{variant:v.error?"danger":"success",className:"mb-0 mt-0 p-1",children:v.text})}),Object(m.jsxs)("div",{className:"col-3 d-flex flex-wrap gap-2",children:[Object(m.jsx)(k.a,{type:"submit",variant:"success",disabled:0===Object.keys(f).length||v.loading,children:"Enviar"}),Object(m.jsx)(k.a,{variant:"danger",onClick:a,children:"Cerrar"})]})]})})]})]})},Te=function(e){var t=e.onDateSubmit,r=Object(n.useState)(!1),a=Object(b.a)(r,2),c=a[0],s=a[1],o=Object(n.useState)(null),i=Object(b.a)(o,2),l=i[0],u=i[1],d=Object(n.useState)(!1),j=Object(b.a)(d,2),f=j[0],O=j[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"col-12 mb-4",children:[Object(m.jsxs)("div",{className:"row justify-content-end",children:[Object(m.jsx)("div",{className:"col-6 mb-2",children:Object(m.jsx)(ye,{onSelect:u})}),Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)(k.a,{variant:"primary",disabled:!l,onClick:function(){return O(!0)},children:"Asignar comisi\xf3n"})})]}),Object(m.jsx)(L,{onSubmit:function(e,r){e.preventDefault(),l&&(s(!0),we(l.id,r).then((function(e){s(!1),t(e)})))},loading:c,submitDisabled:!l})]}),f&&Object(m.jsx)(Le,{show:f,onClose:function(){return O(!1)},employee:l})]})},Pe=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),r=t[0],a=t[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsxs)("div",{className:"col-sm-12 col-xl-8",children:[Object(m.jsx)(Te,{onDateSubmit:function(e){a(e)}}),Object(m.jsx)(xe,{data:r})]})})})},De=r(30),Ie=r(143);var _e=function(){var e=Object(De.f)();return Object(m.jsx)("div",{className:"App bg-dark",children:Object(m.jsxs)(i.a,{fluid:!0,id:"main",className:"m-0 p-0 vh-100",children:[Object(m.jsx)(o.a,{bg:"dark",variant:"dark",className:"border-bottom",expand:"lg",children:Object(m.jsxs)(i.a,{fluid:!0,children:[Object(m.jsx)(o.a.Brand,{children:"SISTEMA DE REPORTES"}),Object(m.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsx)(i.a,{fluid:!0,children:Object(m.jsx)(l.a,{className:"me-auto",children:["ventas","clientes","productos","vendedores"].map((function(t,r){return Object(m.jsx)(Ie.b,{to:"/".concat(t),className:"text-decoration-none mx-1 text-secondary nav-link ".concat(e.pathname.includes(t)?"active":""),children:Object(m.jsx)("span",{style:{textTransform:"capitalize"},children:t})},r)}))})})})]})}),Object(m.jsx)(i.a,{fluid:!0,className:"py-3",children:Object(m.jsxs)(De.c,{children:[Object(m.jsx)(De.a,{path:"/ventas",component:P}),Object(m.jsx)(De.a,{path:"/clientes",component:re}),Object(m.jsx)(De.a,{path:"/productos",component:pe}),Object(m.jsx)(De.a,{path:"/vendedores",component:Pe})]})})]})})};r(434);s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(Ie.a,{children:Object(m.jsx)(_e,{})})}),document.getElementById("root"))}},[[435,1,2]]]);
//# sourceMappingURL=main.4ca89a5f.chunk.js.map