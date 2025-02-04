import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StaffService } from "../../../services/staff.service";
import { CommonModule } from "@angular/common";
import { TableModule } from "@coreui/angular";
import { IconDirective } from "@coreui/icons-angular";
import { NgxPaginationModule } from "ngx-pagination";

@Component({
	selector: "app-staff-list",
	templateUrl: "./staff-list.component.html",
	styleUrls: ["./staff-list.component.scss"],
	imports: [CommonModule, TableModule, IconDirective, NgxPaginationModule],
})
export class StaffListComponent implements OnInit {
	staffList: any[] = [];
	currentPage = 1;
	itemsPerPage = 6;

	router = inject(Router);
	staffService = inject(StaffService);

	ngOnInit(): void {
		this.fetchStaffMembers();
	}

	fetchStaffMembers(): void {
		this.staffService.getStaffMembers().subscribe({
			next: (data) => {
				this.staffList = data;
			},
			error: (err) => console.error("Error fetching staff members:", err),
		});
	}

	viewStaffDetails(staffId: string) {
		this.router.navigate(["/staff/view", staffId]);
	}
	updateStaffMember(staffId: string) {
		console.log("Navigating to update staff with staffId:", staffId);
		this.router.navigate(["/staff/update", staffId]);
	}

	deleteStaffMember(staffId: string) {
		if (confirm("Are you sure you want to delete this staff member?")) {
			this.staffService.deleteStaff(staffId).subscribe({
				next: (response) => {
					console.log("Staff member deleted successfully:", response);
					this.staffList = this.staffList.filter(
						(staff) => staff.staffId !== staffId
					);
				},
				error: (error) => {
					console.error("Error deleting staff member:", error);
				},
			});
		}
	}
}
