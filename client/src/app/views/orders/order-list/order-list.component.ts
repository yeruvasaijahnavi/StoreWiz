import { Component, OnInit, inject } from "@angular/core";
import { OrderService } from "../../../services/order.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { OrdersDashboardComponent } from "../../dashboard/orders-dashboard/orders-dashboard.component";
import { TableModule } from "@coreui/angular";
import { IconDirective } from "@coreui/icons-angular";
import { AuthService } from "../../../services/auth.service";
import { NgxPaginationModule } from "ngx-pagination";
import { TabsModule } from "ngx-bootstrap/tabs";
@Component({
	selector: "app-order-list",
	templateUrl: "./order-list.component.html",
	styleUrls: ["./order-list.component.scss"],
	imports: [
		CommonModule,
		OrdersDashboardComponent,
		TableModule,
		IconDirective,
		NgxPaginationModule,
		TabsModule,
	],
})
export class OrderListComponent implements OnInit {
	orderList: any[] = [];
	public filteredOrderList: any[] = [];
	orderService = inject(OrderService);
	router = inject(Router);
	authService = inject(AuthService);

	// Pagination variables
	currentPage = 1;
	itemsPerPage = 5;

	ngOnInit(): void {
		this.orderService.getOrders().subscribe((orders: any) => {
			this.orderList = orders;
			this.filterOrders();
		});
	}

	filterOrders(): void {
		const currentUser = this.authService.getUser();
		if (currentUser.role === "staff") {
			this.filteredOrderList = this.orderList.filter(
				(order) => order.assignedStaff?.email === currentUser.email
			);
		} else {
			this.filteredOrderList = this.orderList;
		}
	}

	viewOrder(orderId: string): void {
		this.router.navigate([`/orders/view/${orderId}`]);
	}

	assignStaff(orderId: string): void {
		this.router.navigate([`/orders/assign-staff/${orderId}`]);
	}

	isRole(role: string): boolean {
		return this.authService.hasRole(role);
	}
}
