import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StaffService } from "../../../services/staff.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-staff-update",
	templateUrl: "./staff-update.component.html",
	styleUrls: ["./staff-update.component.scss"],
	imports: [FormsModule, CommonModule],
})
export class StaffUpdateComponent implements OnInit {
	staffId: string = "";
	staffDetails: any = {
		name: "",
		email: "",
		role: "",
		shift: "",
		status: "",
	};

	roles = ["operator", "packer"];
	shifts = ["Morning", "Evening", "Night"];
	statuses = ["active", "inactive"];

	constructor(
		private staffService: StaffService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.staffId = this.route.snapshot.paramMap.get("id") || "";
		if (this.staffId) {
			this.fetchStaffDetails();
		}
	}

	fetchStaffDetails(): void {
		this.staffService.getStaffById(this.staffId).subscribe(
			(data) => {
				if (data) {
					this.staffDetails = data;
				}
			},
			(error) => {
				console.error("Error fetching staff details:", error);
			}
		);
	}

	updateStaff(): void {
		this.staffService
			.updateStaff(this.staffId, this.staffDetails)
			.subscribe(
				(response) => {
					console.log("Staff member updated successfully:", response);
					this.router.navigate(["/staff"]); // Redirect to staff list after update
				},
				(error) => {
					console.error("Error updating staff member:", error);
				}
			);
	}
}
