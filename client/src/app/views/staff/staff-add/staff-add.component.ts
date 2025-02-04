import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StaffService } from "../../../services/staff.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-staff-add",
	templateUrl: "./staff-add.component.html",
	styleUrls: ["./staff-add.component.scss"],
	imports: [FormsModule, CommonModule],
})
export class StaffAddComponent {
	newStaff = {
		name: "",
		email: "",
		role: "operator", // Default role
		shift: "Morning", // Default shift
		status: "active", // Default status
	};

	roles = ["operator", "packer"];
	shifts = ["Morning", "Evening", "Night"];
	statuses = ["active", "inactive"];

	constructor(private staffService: StaffService, private router: Router) {}

	addStaffMember() {
		this.staffService.addStaffMember(this.newStaff).subscribe({
			next: (response) => {
				console.log("Staff member added successfully:", response);
				this.router.navigate(["/staff"]);
			},
			error: (error) => {
				console.error("Error adding staff member:", error);
			},
		});
	}
}
