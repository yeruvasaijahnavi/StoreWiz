import{c as A}from"./chunk-4WCO7H6E.js";import{Ra as k,l as U,s as j}from"./chunk-B2IUXAZL.js";import{Aa as D,Ba as T,Q as w,R as _,U as F,n as s,o as $}from"./chunk-OXXXM4EK.js";import{f as y}from"./chunk-OBMS4ODY.js";import{Gb as l,Pb as I,Qb as v,Rb as n,Sb as c,Tb as p,ab as o,ac as x,bb as m,nc as d,oc as g,pa as C,pb as u,pc as S,qa as h,yc as b}from"./chunk-HB3EFGHP.js";import{a as r}from"./chunk-JKOY2XUY.js";var E=(i,a)=>a[0];function H(i,a){if(i&1&&(n(0,"c-col",2),C(),p(1,"svg",3),h(),n(2,"div"),d(3),c()()),i&2){let t=a.$implicit,e=x();l("md",3)("sm",4)("xl",2)("xs",6),o(),l("name",t[0])("title",t[0]),o(2),g(e.toKebabCase(t[0]))}}var O=(()=>{class i{constructor(t,e){this.route=t,this.iconSet=e,this.title="CoreUI Icons",e.icons=r(r(r({},k),U),j)}ngOnInit(){let t=this.route?.routeConfig?.path,e="cil";t==="coreui-icons"?(this.title=`${this.title} - Free`,e="cil"):t==="brands"?(this.title=`${this.title} - Brands`,e="cib"):t==="flags"&&(this.title=`${this.title} - Flags`,e="cif"),this.icons=this.getIconsView(e)}toKebabCase(t){return t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}getIconsView(t){return Object.entries(this.iconSet.icons).filter(e=>e[0].startsWith(t))}static{this.\u0275fac=function(e){return new(e||i)(m(y),m(s))}}static{this.\u0275cmp=u({type:i,selectors:[["ng-component"]],features:[b([s])],decls:8,vars:1,consts:[["href","https://github.com/coreui/coreui-icons","text","GitHub"],[1,"text-center"],[1,"mb-5",3,"md","sm","xl","xs"],["cIcon","","size","3xl",3,"name","title"]],template:function(e,f){e&1&&(n(0,"c-card")(1,"c-card-header"),d(2),p(3,"app-docs-link",0),c(),n(4,"c-card-body")(5,"c-row",1),I(6,H,4,7,"c-col",2,E),c()()()),e&2&&(o(2),S(" ",f.title," "),o(4),v(f.icons))},dependencies:[w,F,_,D,A,$,T],encapsulation:2})}}return i})();export{O as CoreUIIconsComponent};