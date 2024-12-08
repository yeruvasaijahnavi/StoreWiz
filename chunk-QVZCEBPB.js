import{H as T,o as L,pb as D,qb as $}from"./chunk-OXXXM4EK.js";import{a as A}from"./chunk-UYQHZHID.js";import{h as V}from"./chunk-OBMS4ODY.js";import{$c as C,Cc as h,Dc as w,Gb as u,Rb as n,Sb as t,Tb as x,Xb as y,_b as p,ab as o,ac as c,ad as E,da as g,hd as b,jd as k,na as d,nc as i,oa as v,oc as m,pa as _,pb as S,wb as f}from"./chunk-HB3EFGHP.js";import"./chunk-JKOY2XUY.js";function F(r,I){if(r&1){let e=y();n(0,"span",11),p("click",function(){d(e);let l=c().$implicit,s=c();return v(s.updateInventoryItem(l.sku))}),_(),x(1,"svg",12),t()}}function M(r,I){if(r&1){let e=y();n(0,"span",13),p("click",function(){d(e);let l=c().$implicit,s=c();return v(s.deleteInventoryItem(l.sku))}),_(),x(1,"svg",14),t()}}function N(r,I){if(r&1){let e=y();n(0,"tr",6)(1,"td"),i(2),t(),n(3,"td"),i(4),t(),n(5,"td"),i(6),t(),n(7,"td"),i(8),t(),n(9,"td"),i(10),t(),n(11,"td"),i(12),h(13,"currency"),t(),n(14,"td"),i(15),t(),n(16,"td")(17,"span",7),p("click",function(){let l=d(e).$implicit,s=c();return v(s.viewInventoryItem(l.sku))}),_(),x(18,"svg",8),t(),f(19,F,2,0,"span",9)(20,M,2,0,"span",10),t()()}if(r&2){let e=I.$implicit,a=c();o(2),m(e.sku),o(2),m(e.name),o(2),m(e.category),o(2),m(e.description),o(2),m(e.quantity),o(2),m(w(13,9,e.price)),o(3),m(e.location),o(4),u("ngIf",a.isAdmin()),o(),u("ngIf",a.isAdmin())}}var z=(()=>{class r{constructor(){this.inventoryList=[],this.inventoryService=g(A),this.router=g(V)}ngOnInit(){this.inventoryService.getInventoryItems().subscribe(e=>{this.inventoryList=e})}addInventory(){this.router.navigate(["/inventory/add"])}viewInventoryItem(e){console.log("Viewing item with sku:",e),this.router.navigate([`/inventory/view/${e}`])}updateInventoryItem(e){console.log("Navigating to update item with sku:",e),this.router.navigate([`/inventory/update/${e}`])}deleteInventoryItem(e){console.log("Navigating to delete item with sku:",e),this.router.navigate([`/inventory/delete/${e}`])}isAdmin(){return localStorage.getItem("role")==="admin"}static{this.\u0275fac=function(a){return new(a||r)}}static{this.\u0275cmp=S({type:r,selectors:[["app-inventory-list"]],decls:26,vars:1,consts:[[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"btn","btn-primary",3,"click"],["cTable","","hover","",1,"table","table-bordered","table-striped"],[1,"table-primary"],["scope","col"],["class","table-row-hover",4,"ngFor","ngForOf"],[1,"table-row-hover"],["title","View",1,"text-info","me-3",3,"click"],["cIcon","","name","cil-description"],["class","text-warning me-3","title","Update",3,"click",4,"ngIf"],["class","text-danger","title","Delete",3,"click",4,"ngIf"],["title","Update",1,"text-warning","me-3",3,"click"],["cIcon","","name","cil-pencil"],["title","Delete",1,"text-danger",3,"click"],["cIcon","","name","cil-trash"]],template:function(a,l){a&1&&(n(0,"div",0)(1,"h3"),i(2,"Inventory"),t(),n(3,"button",1),p("click",function(){return l.addInventory()}),i(4,"Add Item"),t()(),n(5,"table",2)(6,"thead",3)(7,"tr")(8,"th",4),i(9,"SKU"),t(),n(10,"th",4),i(11,"Name"),t(),n(12,"th",4),i(13,"Category"),t(),n(14,"th",4),i(15,"Description"),t(),n(16,"th",4),i(17,"Quantity"),t(),n(18,"th",4),i(19,"Price"),t(),n(20,"th",4),i(21,"Location"),t(),n(22,"th",4),i(23,"Actions"),t()()(),n(24,"tbody"),f(25,N,21,11,"tr",5),t()()),a&2&&(o(25),u("ngForOf",l.inventoryList))},dependencies:[k,C,E,b,$,D,T,L],encapsulation:2})}}return r})();export{z as InventoryListComponent};
