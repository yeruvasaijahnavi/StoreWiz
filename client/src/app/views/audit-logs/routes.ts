import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./audit-logs.component").then((m) => m.AuditLogsComponent),
		data: {
			title: "Logs",
		},
	},
];
