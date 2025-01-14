import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
@Injectable({
	providedIn: "root",
})
export class OrderDashboardService {
	private baseUrl = `${environment.apiUrl}/dashboard`; // Replace with your API base URL

	constructor(private http: HttpClient) {}

	getTotalOrders(): Observable<{ totalOrders: number }> {
		return this.http.get<{ totalOrders: number }>(
			`${this.baseUrl}/orders-total-count`
		);
	}

	getDistinctCustomerCount(): Observable<{ distinctCustomers: number }> {
		return this.http.get<{ distinctCustomers: number }>(
			`${this.baseUrl}/orders-distinct-customers`
		);
	}

	getOrderStatusDistribution(): Observable<
		Array<{ status: string; count: number }>
	> {
		return this.http.get<Array<{ status: string; count: number }>>(
			`${this.baseUrl}/orders-status-distribution`
		);
	}
}
