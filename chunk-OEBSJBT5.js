import{a as s}from"./chunk-KMW6CVZW.js";import{Z as r,ca as n,pd as i}from"./chunk-HB3EFGHP.js";var p=(()=>{class e{constructor(t){this.http=t,this.baseUrl=`${s.apiUrl}/auth`}signup(t){return this.http.post(`${this.baseUrl}/register`,t)}login(t){return this.http.post(`${this.baseUrl}/login`,t)}logout(){localStorage.removeItem("token")}isLoggedIn(){return localStorage.getItem("token")!==null}getUser(){let t=localStorage.getItem("token");if(t){let o=JSON.parse(atob(t.split(".")[1]));return console.log(o),{username:o.username,role:o.role}}return{username:"",role:""}}static{this.\u0275fac=function(o){return new(o||e)(n(i))}}static{this.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{p as a};
