import {
  TicketsService
} from "./chunk-7REM7NL4.js";
import "./chunk-NW4XVQFF.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-B2JNEFE6.js";
import {
  ActivatedRoute,
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-Y4GLGG7Z.js";

// src/app/shared/models/ticket.model.ts
var PRIORITY_LABELS = {
  critical: "Cr\xEDtica",
  high: "Alta",
  normal: "Normal",
  low: "Baja"
};
var STATUS_LABELS = {
  open: "Abierto",
  in_process: "En Proceso",
  resolved: "Resuelto",
  closed: "Cerrado"
};
var PRIORITY_COLORS = {
  critical: "#DC2626",
  high: "#EA580C",
  normal: "#CA8A04",
  low: "#16A34A"
};
var STATUS_COLORS = {
  open: "#EF4444",
  in_process: "#F59E0B",
  resolved: "#10B981",
  closed: "#6B7280"
};

// src/app/features/tickets/ticket-list/ticket-list.component.ts
function TicketListComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function TicketListComponent_button_10_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(tab_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeFilter === tab_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap("cnt-" + ((tmp_4_0 = tab_r2.value) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "all"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.value === null ? ctx_r2.total : ctx_r2.getCountForStatus(tab_r2.value), " ");
  }
}
function TicketListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando incidencias\u2026");
    \u0275\u0275elementEnd()();
  }
}
function TicketListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 18);
    \u0275\u0275listener("click", function TicketListComponent_div_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadTickets());
    });
    \u0275\u0275text(4, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function TicketListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "\u{1F3AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function TicketListComponent_div_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newTicket());
    });
    \u0275\u0275text(6, "+ Nueva Incidencia");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("No hay tickets", ctx_r2.activeFilter ? " con este estado" : "", ".");
  }
}
function TicketListComponent_div_14_div_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ticket_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ticket_r7.machine_name);
  }
}
function TicketListComponent_div_14_div_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_div_14_div_18_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ticket_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ticket_r7.assigned_technician.name);
  }
}
function TicketListComponent_div_14_div_18_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Sin asignar");
    \u0275\u0275elementEnd();
  }
}
function TicketListComponent_div_14_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function TicketListComponent_div_14_div_18_Template_div_click_0_listener() {
      const ticket_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTicket(ticket_r7));
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275template(4, TicketListComponent_div_14_div_18_span_4_Template, 2, 1, "span", 34)(5, TicketListComponent_div_14_div_18_span_5_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26)(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 27)(12, "span", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 39);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 29);
    \u0275\u0275template(17, TicketListComponent_div_14_div_18_span_17_Template, 2, 1, "span", 34)(18, TicketListComponent_div_14_div_18_span_18_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 40);
    \u0275\u0275listener("click", function TicketListComponent_div_14_div_18_Template_div_click_19_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(20, "button", 41);
    \u0275\u0275listener("click", function TicketListComponent_div_14_div_18_Template_button_click_20_listener() {
      const ticket_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTicket(ticket_r7));
    });
    \u0275\u0275text(21, "Ver \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ticket_r7 = ctx.$implicit;
    const odd_r8 = ctx.odd;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("odd", odd_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ticket_r7.ticket_number);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ticket_r7.machine_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ticket_r7.machine_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ticket_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r2.PRIORITY_BG[ticket_r7.priority])("color", ctx_r2.PRIORITY_COLORS[ticket_r7.priority]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.PRIORITY_LABELS[ticket_r7.priority], " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r2.STATUS_COLORS[ticket_r7.status]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.STATUS_ICONS[ticket_r7.status], " ", ctx_r2.STATUS_LABELS[ticket_r7.status], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ticket_r7.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ticket_r7.assigned_technician);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ticket_r7.assigned_technician);
  }
}
function TicketListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23);
    \u0275\u0275text(3, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275text(5, "M\xC1QUINA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275text(7, "T\xCDTULO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275text(9, "PRIORIDAD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 27);
    \u0275\u0275text(11, "ESTADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 28);
    \u0275\u0275text(13, "FECHA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 29);
    \u0275\u0275text(15, "ASIGNADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 30);
    \u0275\u0275text(17, "ACCIONES");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, TicketListComponent_div_14_div_18_Template, 22, 18, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.tickets)("ngForTrackBy", ctx_r2.trackById);
  }
}
function TicketListComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function TicketListComponent_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.currentPage = ctx_r2.currentPage - 1;
      return \u0275\u0275resetView(ctx_r2.loadTickets());
    });
    \u0275\u0275text(2, "\u2190 Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function TicketListComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.currentPage = ctx_r2.currentPage + 1;
      return \u0275\u0275resetView(ctx_r2.loadTickets());
    });
    \u0275\u0275text(6, "Siguiente \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r2.currentPage, " de ", ctx_r2.lastPage, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.lastPage);
  }
}
var TicketListComponent = class _TicketListComponent {
  constructor(ticketsService, router) {
    this.ticketsService = ticketsService;
    this.router = router;
    this.tickets = [];
    this.loading = true;
    this.error = null;
    this.activeFilter = null;
    this.currentPage = 1;
    this.lastPage = 1;
    this.total = 0;
    this.statusCounts = {};
    this.tabs = [
      { label: "Todos", value: null },
      { label: "Abiertos", value: "open" },
      { label: "En Proceso", value: "in_process" },
      { label: "Cerrados", value: "closed" }
    ];
    this.STATUS_LABELS = STATUS_LABELS;
    this.STATUS_COLORS = STATUS_COLORS;
    this.PRIORITY_LABELS = PRIORITY_LABELS;
    this.PRIORITY_COLORS = PRIORITY_COLORS;
    this.PRIORITY_BG = {
      critical: "#FEF2F2",
      high: "#FFF7ED",
      normal: "#EFF6FF",
      low: "#F0FDF4"
    };
    this.STATUS_ICONS = {
      open: "Abierto",
      in_process: "\u25C9",
      resolved: "\u2713",
      closed: "\u2713"
    };
    this.STATUS_BG = {
      open: "#FEF3C7",
      in_process: "#EEF2FF",
      resolved: "#F0FDF4",
      closed: "#F1F5F9"
    };
  }
  ngOnInit() {
    this.loadTickets();
  }
  loadTickets() {
    this.loading = true;
    const filters = { page: this.currentPage };
    if (this.activeFilter)
      filters.status = this.activeFilter;
    this.ticketsService.getTickets(filters).subscribe({
      next: (res) => {
        this.tickets = res.data;
        this.lastPage = res.last_page ?? 1;
        this.total = res.total ?? res.data.length;
        this.statusCounts = res.status_counts ?? {};
        this.loading = false;
      },
      error: () => {
        this.error = "No se pudieron cargar los tickets.";
        this.loading = false;
      }
    });
  }
  setFilter(status) {
    this.activeFilter = status;
    this.currentPage = 1;
    this.loadTickets();
  }
  getCountForStatus(status) {
    return this.statusCounts[status] ?? 0;
  }
  openTicket(ticket) {
    this.router.navigate(["/incidencias", ticket.id]);
  }
  newTicket() {
    this.router.navigate(["/incidencias/nueva"]);
  }
  trackById(_, t) {
    return t.id;
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  static {
    this.\u0275fac = function TicketListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TicketListComponent)(\u0275\u0275directiveInject(TicketsService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketListComponent, selectors: [["app-ticket-list"]], decls: 16, vars: 6, consts: [[1, "tickets-page"], [1, "page-header"], [1, "header-titles"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-new", 3, "click"], [1, "tabs-bar"], ["class", "tab-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "state-loading", 4, "ngIf"], ["class", "state-error", 4, "ngIf"], ["class", "state-empty", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "tab-pill", 3, "click"], [1, "tab-count"], [1, "state-loading"], [1, "spinner"], [1, "state-error"], [1, "btn-retry", 3, "click"], [1, "state-empty"], [1, "empty-icon"], [1, "table-card"], [1, "tbl-row", "tbl-header"], [1, "col-id"], [1, "col-machine"], [1, "col-title"], [1, "col-priority"], [1, "col-status"], [1, "col-date"], [1, "col-assigned"], [1, "col-actions"], ["class", "tbl-row tbl-data", 3, "odd", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tbl-row", "tbl-data", 3, "click"], [1, "col-id", "ticket-id"], [4, "ngIf"], ["class", "muted", 4, "ngIf"], [1, "col-title", "ticket-title-cell"], [1, "prio-badge"], [1, "status-text"], [1, "col-date", "muted"], [1, "col-actions", 3, "click"], [1, "btn-ver", 3, "click"], [1, "muted"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function TicketListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Incidencias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Gesti\xF3n de tickets de soporte");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function TicketListComponent_Template_button_click_7_listener() {
          return ctx.newTicket();
        });
        \u0275\u0275text(8, "+ Nueva Incidencia");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275template(10, TicketListComponent_button_10_Template, 4, 6, "button", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, TicketListComponent_div_11_Template, 4, 0, "div", 8)(12, TicketListComponent_div_12_Template, 5, 1, "div", 9)(13, TicketListComponent_div_13_Template, 7, 1, "div", 10)(14, TicketListComponent_div_14_Template, 19, 2, "div", 11)(15, TicketListComponent_div_15_Template, 7, 4, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.tickets.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.tickets.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.lastPage > 1);
      }
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.tickets-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  background: #ffffff;\n  min-height: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.header-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #4f46e5;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: #4338CA;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: #f1f5f9;\n  border-radius: 8px;\n  padding: 4px;\n  width: fit-content;\n  margin-bottom: 20px;\n}\n.tab-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 14px;\n  height: 36px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  font-size: 13px;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  white-space: nowrap;\n}\n.tab-pill[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.tab-pill.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f172a;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(2, 6, 23, 0.35);\n}\n.tab-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.cnt-all[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #64748b;\n}\n.cnt-open[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #D97706;\n}\n.cnt-in_process[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4f46e5;\n}\n.cnt-closed[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.cnt-resolved[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.state-loading[_ngcontent-%COMP%], \n.state-error[_ngcontent-%COMP%], \n.state-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 32px;\n  text-align: center;\n  color: #64748b;\n  gap: 12px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.btn-retry[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  color: #0f172a;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80px 150px 1fr 110px 110px 110px 130px 100px;\n  align-items: center;\n}\n.tbl-header[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  height: 44px;\n}\n.tbl-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.tbl-header[_ngcontent-%COMP%]    > div.col-id[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n.tbl-header[_ngcontent-%COMP%]    > div.col-machine[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n.tbl-header[_ngcontent-%COMP%]    > div.col-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.tbl-data[_ngcontent-%COMP%] {\n  height: 52px;\n  border-bottom: 1px solid #e2e8f0;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.tbl-data[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tbl-data[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.tbl-data.odd[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.tbl-data.odd[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.tbl-data[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  font-size: 13px;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tbl-data[_ngcontent-%COMP%]    > div.col-id[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n.tbl-data[_ngcontent-%COMP%]    > div.col-machine[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n.tbl-data[_ngcontent-%COMP%]    > div.col-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ticket-id[_ngcontent-%COMP%] {\n  color: #4f46e5 !important;\n  font-weight: 600 !important;\n}\n.ticket-title-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.prio-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.btn-ver[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #4f46e5;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.1s;\n}\n.btn-ver[_ngcontent-%COMP%]:hover {\n  background: #eef2ff;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 20px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 13px;\n  color: #0f172a;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1f5f9;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n/*# sourceMappingURL=ticket-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketListComponent, { className: "TicketListComponent", filePath: "app\\features\\tickets\\ticket-list\\ticket-list.component.ts", lineNumber: 19 });
})();

// src/app/features/tickets/ticket-create/ticket-create.component.ts
function TicketCreateComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function TicketCreateComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, " Este campo es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function TicketCreateComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, " M\xEDnimo 5 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function TicketCreateComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, " M\xEDnimo 10 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function TicketCreateComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function TicketCreateComponent_button_39_Template_button_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPriority(p_r4.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--p-color", p_r4.color)("--p-bg", p_r4.bg)("--p-border", p_r4.border);
    \u0275\u0275classProp("selected", ((tmp_6_0 = ctx_r1.form.get("priority")) == null ? null : tmp_6_0.value) === p_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r4.emoji, " ", p_r4.label, " ");
  }
}
function TicketCreateComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
function TicketCreateComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2709");
    \u0275\u0275elementEnd();
  }
}
var TicketCreateComponent = class _TicketCreateComponent {
  constructor(fb, ticketsService, router) {
    this.fb = fb;
    this.ticketsService = ticketsService;
    this.router = router;
    this.loading = false;
    this.error = null;
    this.priorities = [
      { value: "critical", label: "Cr\xEDtica", emoji: "\u{1F534}", color: "#DC2626", bg: "#FEF2F2", border: "#FCA5A5" },
      { value: "high", label: "Alta", emoji: "\u{1F7E0}", color: "#EA580C", bg: "#FFF7ED", border: "#FDBA74" },
      { value: "normal", label: "Normal", emoji: "\u{1F7E1}", color: "#CA8A04", bg: "#FEFCE8", border: "#FDE68A" }
    ];
  }
  ngOnInit() {
    this.form = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      description: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(5e3)]],
      priority: ["critical", Validators.required],
      machine_name: ["", Validators.required]
    });
  }
  setPriority(value) {
    this.form.patchValue({ priority: value });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = null;
    this.ticketsService.createTicket(this.form.value).subscribe({
      next: (ticket) => this.router.navigate(["/incidencias", ticket.id]),
      error: (err) => {
        this.error = err?.error?.message ?? "No se pudo crear la incidencia.";
        this.loading = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/incidencias"]);
  }
  fieldError(field) {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
  static {
    this.\u0275fac = function TicketCreateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TicketCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TicketsService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketCreateComponent, selectors: [["app-ticket-create"]], decls: 61, vars: 16, consts: [["fileInput", ""], [1, "create-page"], [1, "breadcrumb"], [1, "back-btn", 3, "click"], [1, "sep"], [1, "crumb-active"], [1, "create-layout"], [1, "form-col"], ["class", "alert-error", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field-group"], ["for", "machine_name", 1, "field-label"], [1, "req"], ["id", "machine_name", "type", "text", "formControlName", "machine_name", "placeholder", "Nombre o referencia de la m\xE1quina", 1, "field-input"], ["class", "field-error", 4, "ngIf"], ["for", "title", 1, "field-label"], ["id", "title", "type", "text", "formControlName", "title", "placeholder", "Describe brevemente el problema", 1, "field-input"], ["for", "description", 1, "field-label"], ["id", "description", "formControlName", "description", "rows", "5", "placeholder", "Describe el problema con detalle: s\xEDntomas, cu\xE1ndo ocurri\xF3, qu\xE9 medidas se han tomado\u2026", 1, "field-textarea"], [1, "field-label"], [1, "priority-row"], ["type", "button", "class", "prio-btn", 3, "selected", "--p-color", "--p-bg", "--p-border", "click", 4, "ngFor", "ngForOf"], [1, "file-zone", 3, "click"], [1, "file-icon"], [1, "file-text"], ["type", "file", "multiple", "", "hidden", ""], [1, "form-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "send-icon", 4, "ngIf"], [1, "right-col"], [1, "machine-card", "machine-card--empty"], [1, "empty-hint"], [1, "alert-error"], [1, "field-error"], ["type", "button", 1, "prio-btn", 3, "click"], [1, "spinner"], [1, "send-icon"]], template: function TicketCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "button", 3);
        \u0275\u0275listener("click", function TicketCreateComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cancel());
        });
        \u0275\u0275text(3, "Incidencias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5, "\u203A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, "Nueva Incidencia");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
        \u0275\u0275template(10, TicketCreateComponent_div_10_Template, 2, 1, "div", 8);
        \u0275\u0275elementStart(11, "form", 9);
        \u0275\u0275listener("ngSubmit", function TicketCreateComponent_Template_form_ngSubmit_11_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275elementStart(12, "div", 10)(13, "label", 11);
        \u0275\u0275text(14, " M\xE1quina afectada ");
        \u0275\u0275elementStart(15, "span", 12);
        \u0275\u0275text(16, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(17, "input", 13);
        \u0275\u0275template(18, TicketCreateComponent_span_18_Template, 2, 0, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 10)(20, "label", 15);
        \u0275\u0275text(21, " T\xEDtulo de la incidencia ");
        \u0275\u0275elementStart(22, "span", 12);
        \u0275\u0275text(23, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(24, "input", 16);
        \u0275\u0275template(25, TicketCreateComponent_span_25_Template, 2, 0, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 10)(27, "label", 17);
        \u0275\u0275text(28, " Descripci\xF3n detallada ");
        \u0275\u0275elementStart(29, "span", 12);
        \u0275\u0275text(30, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(31, "textarea", 18);
        \u0275\u0275template(32, TicketCreateComponent_span_32_Template, 2, 0, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 10)(34, "label", 19);
        \u0275\u0275text(35, " Prioridad ");
        \u0275\u0275elementStart(36, "span", 12);
        \u0275\u0275text(37, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 20);
        \u0275\u0275template(39, TicketCreateComponent_button_39_Template, 2, 10, "button", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 10)(41, "label", 19);
        \u0275\u0275text(42, "Adjuntar archivos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 22);
        \u0275\u0275listener("click", function TicketCreateComponent_Template_div_click_43_listener() {
          \u0275\u0275restoreView(_r1);
          const fileInput_r5 = \u0275\u0275reference(49);
          return \u0275\u0275resetView(fileInput_r5.click());
        });
        \u0275\u0275elementStart(44, "span", 23);
        \u0275\u0275text(45, "\u2B06");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 24);
        \u0275\u0275text(47, "Arrastra archivos o haz clic para adjuntar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "input", 25, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 26)(51, "button", 27);
        \u0275\u0275listener("click", function TicketCreateComponent_Template_button_click_51_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cancel());
        });
        \u0275\u0275text(52, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 28);
        \u0275\u0275template(54, TicketCreateComponent_span_54_Template, 1, 0, "span", 29)(55, TicketCreateComponent_span_55_Template, 2, 0, "span", 30);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "div", 31)(58, "div", 32)(59, "p", 33);
        \u0275\u0275text(60, "Indica el nombre o referencia de la m\xE1quina afectada.");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("invalid", ctx.fieldError("machine_name"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldError("machine_name"));
        \u0275\u0275advance(6);
        \u0275\u0275classProp("invalid", ctx.fieldError("title"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldError("title"));
        \u0275\u0275advance(6);
        \u0275\u0275classProp("invalid", ctx.fieldError("description"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldError("description"));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.priorities);
        \u0275\u0275advance(14);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Creando\u2026" : "Crear Incidencia", " ");
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.create-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #64748B;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 0;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: #4F46E5;\n}\n.sep[_ngcontent-%COMP%] {\n  color: #CBD5E1;\n}\n.crumb-active[_ngcontent-%COMP%] {\n  color: #0F172A;\n  font-weight: 500;\n}\n.create-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .create-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  border-radius: 8px;\n  padding: 10px 14px;\n  color: #DC2626;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.field-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.req[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.field-select[_ngcontent-%COMP%] {\n  width: 100%;\n  appearance: none;\n  border: 1px solid #D1D5DB;\n  border-radius: 6px;\n  padding: 0 36px 0 12px;\n  height: 40px;\n  font-size: 14px;\n  color: #0F172A;\n  background: #FFFFFF;\n  cursor: pointer;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.field-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.select-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748B;\n  pointer-events: none;\n  font-size: 12px;\n}\n.field-input[_ngcontent-%COMP%], \n.field-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #D1D5DB;\n  border-radius: 6px;\n  padding: 10px 12px;\n  font-size: 14px;\n  color: #0F172A;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n  font-family: inherit;\n}\n.field-input[_ngcontent-%COMP%]:focus, \n.field-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);\n}\n.field-input.invalid[_ngcontent-%COMP%], \n.field-textarea.invalid[_ngcontent-%COMP%] {\n  border-color: #EF4444;\n}\n.field-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n  line-height: 1.5;\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #EF4444;\n  margin-top: 4px;\n}\n.priority-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.prio-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 36px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #64748B;\n  background: #FFFFFF;\n  border: 1px solid #D1D5DB;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.prio-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--p-border);\n  background: var(--p-bg);\n  color: var(--p-color);\n}\n.prio-btn.selected[_ngcontent-%COMP%] {\n  background: var(--p-bg);\n  border-color: var(--p-border);\n  color: var(--p-color);\n  font-weight: 600;\n}\n.file-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 72px;\n  border: 1px dashed #CBD5E1;\n  border-radius: 8px;\n  background: #F8FAFC;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.file-zone[_ngcontent-%COMP%]:hover {\n  background: #EEF2FF;\n  border-color: #4F46E5;\n}\n.file-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #94A3B8;\n}\n.file-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 4px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 0 20px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748B;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #E2E8F0;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  height: 40px;\n  background: #4F46E5;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338CA;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #FFFFFF;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.machine-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.machine-card--empty[_ngcontent-%COMP%] {\n  height: 120px;\n  align-items: center;\n  justify-content: center;\n  background: #F8FAFC;\n  border-style: dashed;\n}\n.empty-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94A3B8;\n  text-align: center;\n  margin: 0;\n}\n.mcard-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mcard-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.mcard-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.mcard-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #16A34A;\n  background: #F0FDF4;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.mcard-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n  margin: 0;\n}\n.mcard-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E2E8F0;\n}\n.mcard-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.metric-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #0F172A;\n}\n/*# sourceMappingURL=ticket-create.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketCreateComponent, { className: "TicketCreateComponent", filePath: "app\\features\\tickets\\ticket-create\\ticket-create.component.ts", lineNumber: 21 });
})();

// src/app/features/tickets/ticket-detail/ticket-detail.component.ts
var _c0 = ["messagesEnd"];
function TicketDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando ticket\u2026");
    \u0275\u0275elementEnd()();
  }
}
function TicketDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function TicketDetailComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(4, "\u2190 Volver");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function TicketDetailComponent_ng_container_3_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function TicketDetailComponent_ng_container_3_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeTicket());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.updatingStatus);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", ctx_r1.updatingStatus ? "Cerrando\u2026" : "Cerrar Ticket", " ");
  }
}
function TicketDetailComponent_ng_container_3_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "Ticket cerrado");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_ng_container_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "div", 52)(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userInitials(ctx_r1.ticket.user.name));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.ticket.user.name, " (Operario)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(ctx_r1.ticket.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.ticket.description);
  }
}
function TicketDetailComponent_ng_container_3_ng_container_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 60);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", msg_r5.user.name, " (T\xE9cnico)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(msg_r5.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r5.content);
  }
}
function TicketDetailComponent_ng_container_3_ng_container_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "div", 52)(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userInitials(msg_r5.user.name));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", msg_r5.user.name, " (Operario)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(msg_r5.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r5.content);
  }
}
function TicketDetailComponent_ng_container_3_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TicketDetailComponent_ng_container_3_ng_container_23_div_1_Template, 9, 3, "div", 56)(2, TicketDetailComponent_ng_container_3_ng_container_23_div_2_Template, 11, 4, "div", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isOwnMessage(msg_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOwnMessage(msg_r5));
  }
}
function TicketDetailComponent_ng_container_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1, " S\xE9 el primero en responder. ");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_ng_container_3_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusError);
  }
}
function TicketDetailComponent_ng_container_3_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.messageError);
  }
}
function TicketDetailComponent_ng_container_3_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2709");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_ng_container_3_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function TicketDetailComponent_ng_container_3_div_63_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function TicketDetailComponent_ng_container_3_div_63_button_1_Template_button_click_0_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeStatus(s_r7.value));
    });
    \u0275\u0275element(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("current", ctx_r1.ticket.status === s_r7.value);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.STATUS_COLORS[s_r7.value]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r7.label, " ");
  }
}
function TicketDetailComponent_ng_container_3_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275template(1, TicketDetailComponent_ng_container_3_div_63_button_1_Template, 3, 5, "button", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.availableStatuses);
  }
}
function TicketDetailComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "span", 12);
    \u0275\u0275text(4, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function TicketDetailComponent_ng_container_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(6, "Incidencias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 14);
    \u0275\u0275text(8, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17);
    \u0275\u0275template(14, TicketDetailComponent_ng_container_3_button_14_Template, 2, 2, "button", 18)(15, TicketDetailComponent_ng_container_3_span_15_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 20)(17, "div", 21)(18, "div", 22)(19, "span", 23);
    \u0275\u0275text(20, "Conversaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 24);
    \u0275\u0275template(22, TicketDetailComponent_ng_container_3_div_22_Template, 11, 4, "div", 25)(23, TicketDetailComponent_ng_container_3_ng_container_23_Template, 3, 2, "ng-container", 26)(24, TicketDetailComponent_ng_container_3_div_24_Template, 2, 0, "div", 27);
    \u0275\u0275element(25, "div", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, TicketDetailComponent_ng_container_3_div_27_Template, 2, 1, "div", 28);
    \u0275\u0275elementStart(28, "div", 29);
    \u0275\u0275template(29, TicketDetailComponent_ng_container_3_div_29_Template, 2, 1, "div", 30);
    \u0275\u0275elementStart(30, "div", 31)(31, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_ng_container_3_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newMessage, $event) || (ctx_r1.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function TicketDetailComponent_ng_container_3_Template_input_keydown_enter_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 33);
    \u0275\u0275listener("click", function TicketDetailComponent_ng_container_3_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275template(33, TicketDetailComponent_ng_container_3_span_33_Template, 2, 0, "span", 4)(34, TicketDetailComponent_ng_container_3_span_34_Template, 1, 0, "span", 34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 35)(36, "div", 36)(37, "span", 37);
    \u0275\u0275text(38, "Informaci\xF3n del Ticket");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 38)(40, "span", 39);
    \u0275\u0275text(41, "M\xC1QUINA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 40);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 38)(45, "span", 39);
    \u0275\u0275text(46, "PRIORIDAD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 41);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 38)(50, "span", 39);
    \u0275\u0275text(51, "ESTADO ACTUAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 42);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 38)(55, "span", 39);
    \u0275\u0275text(56, "T\xC9CNICO ASIGNADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 40);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 43)(60, "div", 44)(61, "button", 45);
    \u0275\u0275listener("click", function TicketDetailComponent_ng_container_3_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleStatusMenu());
    });
    \u0275\u0275text(62, " Cambiar Estado \u25BC ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, TicketDetailComponent_ng_container_3_div_63_Template, 2, 1, "div", 46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_27_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("Ticket #", ctx_r1.ticket.ticket_number, "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.STATUS_BG[ctx_r1.ticket.status])("color", ctx_r1.STATUS_COLORS[ctx_r1.ticket.status]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u25CF ", ctx_r1.STATUS_LABELS[ctx_r1.ticket.status], " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.ticket.status !== "closed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ticket.status === "closed");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.ticket.user);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.ticket.messages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.ticket.messages || ctx_r1.ticket.messages.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.statusError);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.isClosed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.messageError);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", ctx_r1.isClosed ? "Ticket cerrado." : "Escribe un mensaje\u2026");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMessage);
    \u0275\u0275property("disabled", ctx_r1.isClosed || ctx_r1.sendingMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.newMessage.trim() || ctx_r1.isClosed || ctx_r1.sendingMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.sendingMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sendingMessage);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.ticket.machine_name ? ctx_r1.ticket.machine_name + " \xB7 Nave A" : "Sin m\xE1quina", " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", ctx_r1.PRIORITY_BG[ctx_r1.ticket.priority])("color", ctx_r1.PRIORITY_COLORS[ctx_r1.ticket.priority]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F534} ", ctx_r1.PRIORITY_LABELS[ctx_r1.ticket.priority], " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", ctx_r1.STATUS_BG[ctx_r1.ticket.status])("color", ctx_r1.STATUS_COLORS[ctx_r1.ticket.status]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u25CF ", ctx_r1.STATUS_LABELS[ctx_r1.ticket.status], " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_27_0 = ctx_r1.ticket.assigned_technician == null ? null : ctx_r1.ticket.assigned_technician.name) !== null && tmp_27_0 !== void 0 ? tmp_27_0 : "Sin asignar", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.updatingStatus || ctx_r1.ticket.status === "closed");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showStatusMenu);
  }
}
function TicketDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function TicketDetailComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStatusMenu = false);
    });
    \u0275\u0275elementEnd();
  }
}
var TicketDetailComponent = class _TicketDetailComponent {
  constructor(route, router, ticketsService) {
    this.route = route;
    this.router = router;
    this.ticketsService = ticketsService;
    this.ticket = null;
    this.loading = true;
    this.error = null;
    this.newMessage = "";
    this.sendingMessage = false;
    this.messageError = null;
    this.updatingStatus = false;
    this.showStatusMenu = false;
    this.statusError = null;
    this.STATUS_LABELS = STATUS_LABELS;
    this.STATUS_COLORS = STATUS_COLORS;
    this.PRIORITY_LABELS = PRIORITY_LABELS;
    this.PRIORITY_COLORS = PRIORITY_COLORS;
    this.STATUS_BG = {
      open: "#FEF3C7",
      in_process: "#FEF3C7",
      resolved: "#F0FDF4",
      closed: "#F1F5F9"
    };
    this.PRIORITY_BG = {
      critical: "#FEE2E2",
      high: "#FFEDD5",
      normal: "#EFF6FF",
      low: "#F0FDF4"
    };
    this.availableStatuses = [
      { value: "open", label: "Abierto" },
      { value: "in_process", label: "En Proceso" },
      { value: "resolved", label: "Resuelto" },
      { value: "closed", label: "Cerrado" }
    ];
    this.shouldScrollToBottom = false;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.loadTicket(id);
  }
  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }
  loadTicket(id) {
    this.loading = true;
    this.ticketsService.getTicket(id).subscribe({
      next: (ticket) => {
        this.ticket = ticket;
        this.loading = false;
        this.shouldScrollToBottom = true;
      },
      error: () => {
        this.error = "No se pudo cargar el ticket.";
        this.loading = false;
      }
    });
  }
  sendMessage() {
    if (!this.newMessage.trim() || !this.ticket)
      return;
    this.sendingMessage = true;
    this.messageError = null;
    this.ticketsService.sendMessage(this.ticket.id, this.newMessage.trim()).subscribe({
      next: (message) => {
        if (!this.ticket.messages)
          this.ticket.messages = [];
        this.ticket.messages.push(message);
        this.newMessage = "";
        this.sendingMessage = false;
        this.shouldScrollToBottom = true;
      },
      error: (err) => {
        this.messageError = err?.error?.message ?? "No se pudo enviar el mensaje.";
        this.sendingMessage = false;
      }
    });
  }
  changeStatus(status) {
    if (!this.ticket || this.ticket.status === status) {
      this.showStatusMenu = false;
      return;
    }
    this.updatingStatus = true;
    this.statusError = null;
    this.showStatusMenu = false;
    this.ticketsService.updateTicket(this.ticket.id, { status }).subscribe({
      next: (updated) => {
        this.ticket = updated;
        this.updatingStatus = false;
      },
      error: (err) => {
        this.statusError = err?.error?.message ?? "No se pudo cambiar el estado.";
        this.updatingStatus = false;
      }
    });
  }
  closeTicket() {
    this.changeStatus("closed");
  }
  goBack() {
    this.router.navigate(["/incidencias"]);
  }
  toggleStatusMenu() {
    this.showStatusMenu = !this.showStatusMenu;
  }
  isOwnMessage(message) {
    const userId = Number(sessionStorage.getItem("user_id") || localStorage.getItem("user_id"));
    return userId > 0 && message.user_id === userId;
  }
  userInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  formatTime(date) {
    return new Date(date).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  get isClosed() {
    return this.ticket?.status === "closed" || this.ticket?.status === "resolved";
  }
  scrollToBottom() {
    try {
      this.messagesEndRef?.nativeElement?.scrollIntoView({ behavior: "smooth" });
    } catch (_) {
    }
  }
  static {
    this.\u0275fac = function TicketDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TicketDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TicketsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketDetailComponent, selectors: [["app-ticket-detail"]], viewQuery: function TicketDetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesEndRef = _t.first);
      }
    }, decls: 5, vars: 4, consts: [["messagesEnd", ""], [1, "detail-page"], ["class", "state-loading", 4, "ngIf"], ["class", "state-error", 4, "ngIf"], [4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], [1, "state-loading"], [1, "spinner"], [1, "state-error"], [1, "btn-back", 3, "click"], [1, "page-header"], [1, "header-left"], [1, "arrow-icon"], [1, "breadcrumb-link", 3, "click"], [1, "sep"], [1, "ticket-ref"], [1, "status-inline-badge"], [1, "header-actions"], ["class", "btn-close-ticket", 3, "disabled", "click", 4, "ngIf"], ["class", "closed-tag", 4, "ngIf"], [1, "detail-layout"], [1, "chat-col"], [1, "chat-heading"], [1, "chat-title"], [1, "msgs-area"], ["class", "msg-row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "no-msgs", 4, "ngIf"], ["class", "alert-error", 4, "ngIf"], [1, "chat-input-bar"], ["class", "msg-err", 4, "ngIf"], [1, "input-row"], ["type", "text", 1, "chat-input", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder", "disabled"], [1, "send-btn", 3, "click", "disabled"], ["class", "spinner-sm", 4, "ngIf"], [1, "info-panel"], [1, "panel-heading"], [1, "panel-title"], [1, "info-field"], [1, "info-label"], [1, "info-value"], [1, "prio-badge-panel"], [1, "status-field-badge"], [1, "panel-action"], [1, "status-dropdown-wrapper"], [1, "btn-change-status", 3, "click", "disabled"], ["class", "status-menu", 4, "ngIf"], [1, "btn-close-ticket", 3, "click", "disabled"], [1, "closed-tag"], [1, "msg-row"], [1, "msg-avatar", "av-op"], [1, "msg-body"], [1, "msg-meta"], [1, "msg-author"], [1, "msg-time"], [1, "msg-bubble", "bubble-op"], ["class", "msg-row msg-tech", 4, "ngIf"], [1, "msg-row", "msg-tech"], [1, "msg-body-right"], [1, "msg-meta", "msg-meta-right"], [1, "msg-bubble", "bubble-tech"], [1, "no-msgs"], [1, "alert-error"], [1, "msg-err"], [1, "spinner-sm"], [1, "status-menu"], ["class", "smenu-item", 3, "current", "click", 4, "ngFor", "ngForOf"], [1, "smenu-item", 3, "click"], [1, "s-dot"], [1, "overlay", 3, "click"]], template: function TicketDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, TicketDetailComponent_div_1_Template, 4, 0, "div", 2)(2, TicketDetailComponent_div_2_Template, 5, 1, "div", 3)(3, TicketDetailComponent_ng_container_3_Template, 64, 35, "ng-container", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, TicketDetailComponent_div_4_Template, 1, 0, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ticket && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showStatusMenu);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.detail-page[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.state-loading[_ngcontent-%COMP%], \n.state-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  gap: 12px;\n  color: #64748B;\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #E2E8F0;\n  border-top-color: #4F46E5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  height: 64px;\n  background: #FFFFFF;\n  border-bottom: 1px solid #E2E8F0;\n  flex-shrink: 0;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  color: #64748B;\n  font-size: 16px;\n}\n.breadcrumb-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #64748B;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 0;\n}\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  color: #4F46E5;\n}\n.sep[_ngcontent-%COMP%] {\n  color: #CBD5E1;\n  font-size: 14px;\n}\n.ticket-ref[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.status-inline-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-close-ticket[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  border: 1px solid #6EE7B7;\n  border-radius: 8px;\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #059669;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-close-ticket[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #D1FAE5;\n}\n.btn-close-ticket[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.closed-tag[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.chat-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #F8FAFC;\n  overflow: hidden;\n}\n.chat-heading[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: #FFFFFF;\n  border-bottom: 1px solid #E2E8F0;\n  flex-shrink: 0;\n}\n.chat-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.msgs-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.no-msgs[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94A3B8;\n  font-size: 14px;\n  padding: 32px;\n}\n.msg-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.msg-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #FFFFFF;\n  flex-shrink: 0;\n}\n.msg-avatar.av-op[_ngcontent-%COMP%] {\n  background: #64748B;\n}\n.msg-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.msg-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.msg-author[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #64748B;\n}\n.msg-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 10px 12px;\n  font-size: 14px;\n  line-height: 1.55;\n  color: #1E293B;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.bubble-op[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n}\n.msg-tech[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.msg-body-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.msg-meta-right[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.bubble-tech[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  max-width: 80%;\n}\n.chat-input-bar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 16px 12px;\n  background: #FFFFFF;\n  border-top: 1px solid #E2E8F0;\n}\n.chat-input-bar.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.msg-err[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #EF4444;\n  margin-bottom: 6px;\n}\n.input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.chat-input[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 44px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 0 16px;\n  font-size: 14px;\n  color: #1E293B;\n  background: #F8FAFC;\n  transition: border-color 0.15s;\n}\n.chat-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.chat-input[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.chat-input[_ngcontent-%COMP%]::placeholder {\n  color: #94A3B8;\n}\n.send-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #4F46E5;\n  border: none;\n  color: #FFFFFF;\n  font-size: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338CA;\n}\n.send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #FFFFFF;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.info-panel[_ngcontent-%COMP%] {\n  width: 360px;\n  flex-shrink: 0;\n  background: #FFFFFF;\n  border-left: 1px solid #E2E8F0;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.panel-heading[_ngcontent-%COMP%] {\n  padding: 20px 16px;\n  border-bottom: 1px solid #E2E8F0;\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.info-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 14px 20px;\n  border-bottom: 1px solid #F1F5F9;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.prio-badge-panel[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  align-self: flex-start;\n}\n.status-field-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  align-self: flex-start;\n}\n.panel-action[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n.status-dropdown-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.btn-change-status[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  background: #4F46E5;\n  border: none;\n  border-radius: 8px;\n  color: #FFFFFF;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-change-status[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338CA;\n}\n.btn-change-status[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.status-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  overflow: hidden;\n}\n.smenu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  font-size: 13px;\n  color: #374151;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.1s;\n}\n.smenu-item[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\n.smenu-item.current[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4F46E5;\n  font-weight: 600;\n}\n.s-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  border-radius: 8px;\n  padding: 8px 14px;\n  color: #DC2626;\n  font-size: 13px;\n  margin: 0 12px 8px;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 99;\n}\n/*# sourceMappingURL=ticket-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketDetailComponent, { className: "TicketDetailComponent", filePath: "app\\features\\tickets\\ticket-detail\\ticket-detail.component.ts", lineNumber: 15 });
})();

// src/app/features/tickets/tickets.module.ts
var routes = [
  { path: "", component: TicketListComponent },
  { path: "nueva", component: TicketCreateComponent },
  { path: ":id", component: TicketDetailComponent }
];
var TicketsModule = class _TicketsModule {
  static {
    this.\u0275fac = function TicketsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TicketsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TicketsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
    ] });
  }
};
export {
  TicketsModule
};
//# sourceMappingURL=chunk-ZYE424OO.js.map
