import{b as _}from"./chunk-TLFITDCG.js";import{_ as S}from"./chunk-B2IUXAZL.js";import{Aa as T,Ba as V,Da as D,Jb as Q,Kb as M,db as C,la as b,o as h,p as f,q as I,r as g}from"./chunk-OXXXM4EK.js";import{x}from"./chunk-YHGVW4GW.js";import{a as w}from"./chunk-KMW6CVZW.js";import{Gb as l,Rb as s,Sb as c,Tb as m,Z as u,ab as r,bb as v,ca as p,pa as i,pb as y,pd as d,wb as a}from"./chunk-HB3EFGHP.js";var j=(()=>{class e{constructor(t){this.http=t,this.baseUrl=`${w.apiUrl}/dashboard`}getInventoryTotalValue(){return this.http.get(`${this.baseUrl}/inventory-total-value`)}getInventoryTotalQuantity(){return this.http.get(`${this.baseUrl}/inventory-total-quantity`)}static{this.\u0275fac=function(o){return new(o||e)(p(d))}}static{this.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function G(e,E){e&1&&(i(),m(0,"svg",5))}function $(e,E){e&1&&(i(),m(0,"svg",5))}var O=(()=>{class e{constructor(t){this.inventoryDashboardService=t,this.totalInventoryValue=null,this.totalInventoryQuantity=null,this.loading=!0,this.icons={cilInbox:S}}ngOnInit(){this.fetchInventoryTotalValue(),this.fetchInventoryTotalQuantity()}fetchInventoryTotalValue(){this.inventoryDashboardService.getInventoryTotalValue().subscribe({next:t=>{t&&t.length>0?(this.totalInventoryValue=t[0].totalValue,console.log("Total inventory value:",this.totalInventoryValue)):(console.log("No data found"),this.totalInventoryValue=0),this.loading=!1},error:t=>{console.error("Error fetching inventory total value:",t),this.loading=!1}})}fetchInventoryTotalQuantity(){this.inventoryDashboardService.getInventoryTotalQuantity().subscribe({next:t=>{t&&t.length>0?this.totalInventoryQuantity=t[0].totalQuantity:this.totalInventoryQuantity=0},error:t=>{console.error("Error fetching inventory total quantity:",t)}})}static{this.\u0275fac=function(o){return new(o||e)(v(j))}}static{this.\u0275cmp=y({type:e,selectors:[["app-inventory-dashboard"]],decls:7,vars:4,consts:[[1,"my-4"],["xl","6","md","6","sm","6"],["color","success","padding","",3,"title","value"],["cTemplateId","widgetIconTemplate"],["color","primary","padding","",3,"title","value"],["cIcon","","name","cilInbox","size","xl","width","24"]],template:function(o,n){o&1&&(s(0,"c-row",0)(1,"c-col",1)(2,"c-widget-stat-f",2),a(3,G,1,0,"ng-template",3),c()(),s(4,"c-col",1)(5,"c-widget-stat-f",4),a(6,$,1,0,"ng-template",3),c()()()),o&2&&(r(2),l("title","Total Inventory Value")("value",n.totalInventoryValue?"\u20B9 "+n.totalInventoryValue:"Loading..."),r(3),l("title","Total Quantity of Inventory")("value",n.totalInventoryQuantity?n.totalInventoryQuantity+" items":"Loading..."))},dependencies:[x,g,I,M,Q,C,b,_,f,h,T,V,D],encapsulation:2})}}return e})();export{O as a};
