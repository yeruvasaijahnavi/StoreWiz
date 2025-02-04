import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
	providedIn: "root",
})
export class StaffService {
	baseUrl = `${environment.apiUrl}/staff`; // Update this if necessary

	constructor(private http: HttpClient) {}

	getStaffMembers() {
		return this.http.get<any[]>(this.baseUrl);
	}

	addStaffMember(staffData: any) {
		return this.http.post(`${this.baseUrl}`, staffData);
	}

	getStaffById(staffId: string) {
		return this.http.get<any>(`${this.baseUrl}/${staffId}`);
	}

	updateStaff(staffId: string, staffData: any) {
		return this.http.put(`${this.baseUrl}/${staffId}`, staffData);
	}

	deleteStaff(staffId: string) {
		return this.http.delete(`${this.baseUrl}/${staffId}`);
	}
}
