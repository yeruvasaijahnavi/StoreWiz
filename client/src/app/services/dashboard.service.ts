import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class DashboardService {
	private baseUrl = "http://localhost:3000/dashboard"; // Update with your API URL

	constructor(private http: HttpClient) {}

	getInventoryTotalValue(): Observable<{ totalValue: number }> {
		return this.http.get<{ totalValue: number }>(
			`${this.baseUrl}/inventory-total-value`
		);
	}
	//   getInventoryValueByCategory(): Observable<any> {
	//     return this.http.get(`${this.baseUrl}/inventory-value-by-category`);
	//   }

	//   getCOGS(): Observable<any> {
	//     return this.http.get(`${this.baseUrl}/cogs`);
	//   }

	//   getLowStockItems(): Observable<any> {
	//     return this.http.get(`${this.baseUrl}/low-stock-items`);
	//   }

	//   getInventoryTurnover(): Observable<any> {
	//     return this.http.get(`${this.baseUrl}/inventory-turnover`);
	//   }

	//   getOverstockedItems(): Observable<any> {
	//     return this.http.get(`${this.baseUrl}/overstocked-items`);
	//   }

	//   getInventoryAging(): Observable<any> {
	//     return this.http.get(`${this.baseUrl}/inventory-aging`);
	//   }

	//   getTopPerformingCategories(): Observable<any> {
	//     return this.http.get(`${this.baseUrl}/top-performing-categories`);
	//   }

	//   getRestockEfficiency(): Observable<any> {
	//     return this.http.get(`${this.baseUrl}/restock-efficiency`);
	//   }
}