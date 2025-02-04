import { Component, OnInit, inject } from "@angular/core";
import { AuditLogService } from "../../services/audit-log.service";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";

@Component({
	selector: "app-audit-logs",
	templateUrl: "./audit-logs.component.html",
	styleUrls: ["./audit-logs.component.scss"],
	imports: [CommonModule, NgxPaginationModule],
})
export class AuditLogsComponent implements OnInit {
	auditLogs: any[] = [];
	errorMessage = "";
	currentPage = 1;
	itemsPerPage = 10;
	private auditLogService = inject(AuditLogService);

	ngOnInit(): void {
		this.fetchAuditLogs();
	}

	fetchAuditLogs(): void {
		this.auditLogService.getAuditLogs().subscribe(
			(logs: any[]) => {
				this.auditLogs = logs;
			},
			(error: any) => {
				console.error("Error fetching audit logs:", error);
				this.errorMessage = "Failed to load audit logs.";
			}
		);
	}
}
