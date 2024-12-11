import{a as x}from"./chunk-2OHDUKIU.js";import{a as T}from"./chunk-MVATZ33H.js";import{c as M,d as y,f as A,h as N,i as F,k as O,l as E,m as w,o as j,p as L}from"./chunk-ZW3IAS25.js";import"./chunk-KEDPSKOD.js";import{f as C,h as I}from"./chunk-WM7ALVV2.js";import{Jb as n,Kb as r,Mc as _,Sb as g,Uc as b,Ya as f,Za as s,dc as a,gc as S,hc as u,ib as c,ic as v,jc as h,pb as p,zb as d}from"./chunk-ECNHR75B.js";import"./chunk-4CLCTAJ7.js";function V(t,R){if(t&1&&(n(0,"option",9),a(1),r()),t&2){let e=R.$implicit;d("value",e._id),f(),S(" ",e.name," (",e.role,") ")}}var H=(()=>{class t{constructor(e,o,i,l){this.staffService=e,this.orderService=o,this.router=i,this.route=l,this.staffList=[],this.selectedStaffId="",this.orderId=""}ngOnInit(){this.orderId=this.route.snapshot.paramMap.get("id"),this.staffService.getStaffMembers().subscribe(e=>{this.staffList=e})}assignStaff(){this.orderService.assignStaff(this.orderId,this.selectedStaffId).subscribe({next:()=>{alert("Staff assigned successfully!"),this.router.navigate(["/orders"])},error:e=>{console.error("Error assigning staff:",e)}})}static{this.\u0275fac=function(o){return new(o||t)(s(x),s(T),s(I),s(C))}}static{this.\u0275cmp=c({type:t,selectors:[["app-assign-staff"]],decls:12,vars:2,consts:[[1,"container","mt-4"],[1,"mb-4"],[1,"row","g-3",3,"ngSubmit"],[1,"col-md-6","form-floating"],["id","staff","name","staff","required","",1,"form-select",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["for","staff"],[1,"col-12"],["type","submit",1,"btn","btn-primary"],[3,"value"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"h2",1),a(2,"Assign Staff"),r(),n(3,"form",2),g("ngSubmit",function(){return i.assignStaff()}),n(4,"div",3)(5,"select",4),h("ngModelChange",function(m){return v(i.selectedStaffId,m)||(i.selectedStaffId=m),m}),p(6,V,2,3,"option",5),r(),n(7,"label",6),a(8,"Select Staff"),r()(),n(9,"div",7)(10,"button",8),a(11,"Assign"),r()()()()),o&2&&(f(5),u("ngModel",i.selectedStaffId),f(),d("ngForOf",i.staffList))},dependencies:[b,_,L,F,E,w,O,M,y,j,N,A],encapsulation:2})}}return t})();export{H as AssignStaffComponent};