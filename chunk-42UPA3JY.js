import{a as n}from"./chunk-KMW6CVZW.js";import{Z as s,ca as i,pd as a}from"./chunk-HB3EFGHP.js";var u=(()=>{class r{constructor(t){this.http=t,this.baseUrl=`${n.apiUrl}/orders`}getOrders(){return this.http.get(this.baseUrl)}getOrderById(t){return this.http.get(`${this.baseUrl}/${t}`)}addOrder(t){return this.http.post(`${this.baseUrl}`,t)}updateOrderStatus(t,e){return this.http.put(`${this.baseUrl}/${t}/status`,{status:e})}assignStaff(t,e){return this.http.put(`${this.baseUrl}/${t}/assign-staff`,{staffId:e})}static{this.\u0275fac=function(e){return new(e||r)(i(a))}}static{this.\u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{u as a};
