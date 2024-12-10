import { a as j } from "./chunk-2KAOWCLR.js";
import {
	c as F,
	d as V,
	g as T,
	j as D,
	k as R,
	q,
	r as B,
	s as W,
	u as k,
	w as A,
} from "./chunk-YHGVW4GW.js";
import "./chunk-KEDPSKOD.js";
import { f as w, h as U } from "./chunk-OBMS4ODY.js";
import {
	$c as y,
	Fc as b,
	Gb as p,
	Rb as r,
	Sb as o,
	Xb as _,
	_b as h,
	ab as a,
	ac as d,
	ad as N,
	da as l,
	jd as E,
	mc as v,
	na as c,
	nc as s,
	oa as g,
	oc as x,
	pb as S,
	pc as C,
	sc as O,
	tc as M,
	uc as I,
	wb as f,
} from "./chunk-HB3EFGHP.js";
import "./chunk-JKOY2XUY.js";
function G(e, m) {
	if ((e & 1 && (r(0, "option", 9), s(1), o()), e & 2)) {
		let t = m.$implicit;
		p("value", t), a(), C(" ", t, " ");
	}
}
function L(e, m) {
	if (e & 1) {
		let t = _();
		r(0, "div")(1, "h2", 2),
			s(2, "Update Order Status"),
			o(),
			r(3, "form", 3),
			h("ngSubmit", function () {
				c(t);
				let i = d();
				return g(i.updateOrderStatus());
			}),
			r(4, "div", 4)(5, "select", 5),
			I("ngModelChange", function (i) {
				c(t);
				let u = d();
				return M(u.status, i) || (u.status = i), g(i);
			}),
			f(6, G, 2, 2, "option", 6),
			o(),
			r(7, "label", 7),
			s(8, "Select Status"),
			o()(),
			r(9, "button", 8),
			s(10, "Update Status"),
			o()()();
	}
	if (e & 2) {
		let t = d();
		a(5), O("ngModel", t.status), a(), p("ngForOf", t.validStatuses);
	}
}
function P(e, m) {
	if ((e & 1 && (r(0, "p", 10), s(1), o()), e & 2)) {
		let t = d();
		a(), x(t.errorMessage);
	}
}
var tt = (() => {
	class e {
		constructor() {
			(this.orderId = null),
				(this.status = ""),
				(this.validStatuses = [
					"pending",
					"assigned",
					"shipped",
					"delivered",
				]),
				(this.errorMessage = ""),
				(this.orderService = l(j)),
				(this.route = l(w)),
				(this.router = l(U));
		}
		ngOnInit() {
			this.route.paramMap.subscribe((t) => {
				(this.orderId = t.get("id")),
					this.orderId ||
						(this.errorMessage = "No order ID provided.");
			});
		}
		updateOrderStatus() {
			if (!this.orderId || !this.status) {
				this.errorMessage = "Order ID and status are required.";
				return;
			}
			if (!this.validStatuses.includes(this.status)) {
				this.errorMessage = "Invalid status.";
				return;
			}
			this.orderService
				.updateOrderStatus(this.orderId, this.status)
				.subscribe({
					next: (t) => {
						console.log("Order status updated successfully:", t),
							this.router.navigate(["/orders"]);
					},
					error: (t) => {
						console.error("Error updating order status:", t),
							(this.errorMessage =
								"Failed to update the order status.");
					},
				});
		}
		static {
			this.ɵfac = function (n) {
				return new (n || e)();
			};
		}
		static {
			this.ɵcmp = S({
				type: e,
				selectors: [["app-order-status-update"]],
				decls: 3,
				vars: 2,
				consts: [
					["errorBlock", ""],
					[4, "ngIf", "ngIfElse"],
					[1, "mb-4"],
					[3, "ngSubmit"],
					[1, "form-floating", "mb-3"],
					[
						"id",
						"status",
						"name",
						"status",
						"required",
						"",
						1,
						"form-select",
						3,
						"ngModelChange",
						"ngModel",
					],
					[3, "value", 4, "ngFor", "ngForOf"],
					["for", "status"],
					["type", "submit", 1, "btn", "btn-primary"],
					[3, "value"],
					[1, "error"],
				],
				template: function (n, i) {
					if (
						(n & 1 &&
							f(0, L, 11, 2, "div", 1)(
								1,
								P,
								2,
								1,
								"ng-template",
								null,
								0,
								b
							),
						n & 2)
					) {
						let u = v(2);
						p("ngIf", i.orderId)("ngIfElse", u);
					}
				},
				dependencies: [E, y, N, A, R, B, W, q, F, V, k, D, T],
				encapsulation: 2,
			});
		}
	}
	return e;
})();
export { tt as OrderStatusUpdateComponent };
