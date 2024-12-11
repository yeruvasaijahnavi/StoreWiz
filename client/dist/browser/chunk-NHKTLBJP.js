import{a as M}from"./chunk-MVATZ33H.js";import{a as F}from"./chunk-XW433U3Y.js";import"./chunk-NA7KRPX3.js";import{a as $}from"./chunk-LAF7HK6A.js";import{ea as D,fa as A,o as T}from"./chunk-THIE4GUI.js";import"./chunk-ZW3IAS25.js";import"./chunk-KEDPSKOD.js";import{h as k}from"./chunk-WM7ALVV2.js";import{Jb as i,Kb as t,Lb as f,Mc as C,Nc as L,Pb as v,Sb as u,Sc as y,Ub as d,Uc as V,Ya as r,ba as x,dc as n,ec as l,fc as E,ib as b,la as c,ma as p,na as _,oa as I,oc as O,pb as S,qc as w,zb as h}from"./chunk-ECNHR75B.js";import"./chunk-4CLCTAJ7.js";function R(a,g){if(a&1){let e=v();i(0,"button",8),u("click",function(){c(e);let s=d();return p(s.router.navigate(["/orders/add"]))}),n(1," Add Order "),t()}}function N(a,g){if(a&1){let e=v();i(0,"span",16),u("click",function(){c(e);let s=d().$implicit,m=d();return p(m.assignStaff(s.orderId))}),_(),f(1,"svg",17),t()}}function U(a,g){if(a&1){let e=v();i(0,"tr",9)(1,"td"),n(2),t(),i(3,"td"),n(4),t(),i(5,"td"),n(6),t(),i(7,"td"),n(8),t(),i(9,"td"),n(10),t(),i(11,"td"),n(12),t(),i(13,"td"),n(14),t(),i(15,"td"),n(16),O(17,"date"),t(),i(18,"td"),n(19),t(),i(20,"td")(21,"div",10)(22,"span",11),u("click",function(){let s=c(e).$implicit,m=d();return p(m.viewOrder(s.orderId))}),_(),f(23,"svg",12),t(),I(),i(24,"span",13),u("click",function(){let s=c(e).$implicit,m=d();return p(m.router.navigate(["/orders/update-status",s.orderId]))}),_(),f(25,"svg",14),t(),S(26,N,2,0,"span",15),t()()()}if(a&2){let e=g.$implicit,o=d();r(2),l(e.orderId),r(2),l(e.customerId),r(2),l(e.inventoryItem==null?null:e.inventoryItem.sku),r(2),l(e.inventoryItem==null?null:e.inventoryItem.name),r(2),l(e.quantity),r(2),l(e.status),r(2),l(e.shippingAddress),r(2),l(w(17,10,e.orderDate,"short")),r(3),E(" ",e.assignedStaff?e.assignedStaff.name:"Not Assigned"," "),r(7),h("ngIf",o.isRole("admin"))}}var Y=(()=>{class a{constructor(){this.orderList=[],this.filteredOrderList=[],this.orderService=x(M),this.router=x(k),this.authService=x($)}ngOnInit(){this.orderService.getOrders().subscribe(e=>{this.orderList=e,this.filterOrders()})}filterOrders(){let e=this.authService.getUser();console.log(this.orderList,e),e.role==="staff"?this.filteredOrderList=this.orderList.filter(o=>o.assignedStaff?.email===e.email):this.filteredOrderList=this.orderList}viewOrder(e){console.log("Viewing order with ID:",e),this.router.navigate([`/orders/view/${e}`])}assignStaff(e){this.router.navigate([`/orders/assign-staff/${e}`])}isRole(e){return this.authService.hasRole(e)}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=b({type:a,selectors:[["app-order-list"]],decls:31,vars:2,consts:[[1,"container","mt-4"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"mb-0"],["class","btn btn-primary",3,"click",4,"ngIf"],["cTable","","hover","",1,"table","table-bordered","table-striped"],[1,"table-primary"],["scope","col"],["class","table-row-hover",4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"],[1,"table-row-hover"],[1,"d-flex","align-items-center"],["title","View",1,"text-info","me-3",3,"click"],["cIcon","","name","cil-description"],["title","Update Status",1,"text-warning","me-3",3,"click"],["cIcon","","name","cil-pencil"],["class","text-primary","title","Assign Staff",3,"click",4,"ngIf"],["title","Assign Staff",1,"text-primary",3,"click"],["cIcon","","name","cil-user-follow"]],template:function(o,s){o&1&&(i(0,"div",0)(1,"div",1)(2,"h2",2),n(3,"Order List"),t(),S(4,R,2,0,"button",3),t(),i(5,"table",4)(6,"thead",5)(7,"tr")(8,"th",6),n(9,"Order ID"),t(),i(10,"th",6),n(11,"Customer ID"),t(),i(12,"th",6),n(13,"SKU"),t(),i(14,"th",6),n(15,"Item Name"),t(),i(16,"th",6),n(17,"Quantity"),t(),i(18,"th",6),n(19,"Status"),t(),i(20,"th",6),n(21,"Shipping Address"),t(),i(22,"th",6),n(23,"Order Date"),t(),i(24,"th",6),n(25,"Assigned Staff"),t(),i(26,"th",6),n(27,"Actions"),t()()(),i(28,"tbody"),S(29,U,27,13,"tr",7),t()(),f(30,"app-order-dashboard"),t()),o&2&&(r(4),h("ngIf",s.isRole("admin")),r(25),h("ngForOf",s.filteredOrderList))},dependencies:[V,C,L,y,F,A,D,T],encapsulation:2})}}return a})();export{Y as OrderListComponent};