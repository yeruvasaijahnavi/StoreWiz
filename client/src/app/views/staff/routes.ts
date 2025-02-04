import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./staff-list/staff-list.component").then(
				(m) => m.StaffListComponent
			),
		data: {
			title: "Staff List",
		},
	},
	{
		path: "view/:id",
		loadComponent: () =>
			import("./staff-view/staff-view.component").then(
				(m) => m.StaffViewComponent
			),
		data: {
			title: "Staff View",
		},
	},
	{
		path: "add",
		loadComponent: () =>
			import("./staff-add/staff-add.component").then(
				(m) => m.StaffAddComponent
			),
		data: {
			title: "Add Staff",
		},
	},
	{
		path: "update/:id",
		loadComponent: () =>
			import("./staff-update/staff-update.component").then(
				(m) => m.StaffUpdateComponent
			),
		data: {
			title: "Update Staff",
		},
	},
];
