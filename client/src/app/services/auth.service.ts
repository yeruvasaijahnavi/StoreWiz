import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private http: HttpClient) {}
	baseUrl = `${environment.apiUrl}/auth`;

	signup(data: any) {
		return this.http.post(`${this.baseUrl}/register`, data);
	}
	login(data: any) {
		return this.http.post<any>(`${this.baseUrl}/login`, data);
	}
	logout() {
		console.log("Token before logout:", localStorage.getItem("token"));
		localStorage.removeItem("token");
		console.log("Token after logout:", localStorage.getItem("token"));
	}
	isLoggedIn() {
		return localStorage.getItem("token") !== null;
	}
	// auth.service.ts
	getUser() {
		const token = localStorage.getItem("token");
		if (token) {
			const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decoding JWT
			// console.log(decodedToken);
			return {
				username: decodedToken.username,
				role: decodedToken.role,
				email: decodedToken.email,
			};
		}
		return { username: "", role: "" };
	}
	hasRole(requiredRole: string): boolean {
		const user = this.getUser();
		return user.role === requiredRole;
	}
}
