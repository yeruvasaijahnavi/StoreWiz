import{a as b}from"./chunk-ZZCGRA56.js";import"./chunk-TLFITDCG.js";import"./chunk-B2IUXAZL.js";import{pb as _,qb as S}from"./chunk-OXXXM4EK.js";import"./chunk-YHGVW4GW.js";import{a as C}from"./chunk-3Q3JJAWE.js";import"./chunk-KEDPSKOD.js";import"./chunk-OBMS4ODY.js";import{$c as y,Fc as u,Gb as p,Rb as n,Sb as e,Tb as I,ab as o,ac as s,ad as g,da as f,jd as E,mc as h,nc as r,oc as d,pb as x,pc as m,wb as c}from"./chunk-HB3EFGHP.js";import"./chunk-JKOY2XUY.js";function T(i,l){if(i&1&&(n(0,"div",4),r(1),e()),i&2){let t=s();o(),m(" ",t.errorMessage," ")}}function M(i,l){if(i&1&&(n(0,"tr",9)(1,"td"),r(2),e(),n(3,"td"),r(4),e(),n(5,"td"),r(6),e(),n(7,"td"),r(8),e(),n(9,"td"),r(10),e()()),i&2){let t=l.$implicit,a=l.index;o(2),d(a+1),o(2),d(t.itemName),o(2),d(t.stockLevel),o(2),m("\u20B9",t.unitPrice,""),o(2),m("\u20B9",t.totalValue,"")}}function V(i,l){if(i&1&&(n(0,"div")(1,"h3"),r(2),e(),n(3,"table",5)(4,"thead",6)(5,"tr")(6,"th",7),r(7,"#"),e(),n(8,"th",7),r(9,"Item Name"),e(),n(10,"th",7),r(11,"Stock Level"),e(),n(12,"th",7),r(13,"Unit Price"),e(),n(14,"th",7),r(15,"Total Value"),e()()(),n(16,"tbody"),c(17,M,11,5,"tr",8),e()()()),i&2){let t=s();o(2),m("Total Inventory Value: \u20B9",t.totalValue,""),o(15),p("ngForOf",t.report)}}function D(i,l){i&1&&(n(0,"p"),r(1,"No inventory data available."),e())}var U=(()=>{class i{constructor(){this.totalValue=0,this.report=[],this.errorMessage="",this.inventoryService=f(C)}ngOnInit(){this.fetchInventoryReport()}fetchInventoryReport(){this.inventoryService.getInventoryReport().subscribe({next:t=>{this.totalValue=t.totalValue,this.report=t.detailedReport},error:t=>{console.error("Error fetching report:",t),this.errorMessage="Failed to load inventory report."}})}static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275cmp=x({type:i,selectors:[["app-inventory-report"]],decls:8,vars:3,consts:[["noData",""],[1,"container"],["class","alert alert-danger",4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"alert","alert-danger"],["cTable","","hover","",1,"table","table-bordered","table-striped"],[1,"table-primary"],["scope","col"],["class","table-row-hover",4,"ngFor","ngForOf"],[1,"table-row-hover"]],template:function(a,v){if(a&1&&(n(0,"div",1)(1,"h2"),r(2,"Inventory Valuation Report"),e(),I(3,"app-inventory-dashboard"),c(4,T,2,1,"div",2)(5,V,18,2,"div",3)(6,D,2,0,"ng-template",null,0,u),e()),a&2){let R=h(7);o(4),p("ngIf",v.errorMessage),o(),p("ngIf",v.report.length>0)("ngIfElse",R)}},dependencies:[E,y,g,b,S,_],encapsulation:2})}}return i})();export{U as InventoryReportComponent};