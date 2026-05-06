import {
  CartService
} from "./chunk-J4UNXGQC.js";
import {
  TicketsService
} from "./chunk-7REM7NL4.js";
import "./chunk-NW4XVQFF.js";
import {
  ScadaService
} from "./chunk-NGWBMD4A.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Y4GLGG7Z.js";

// src/app/features/dashboard/dashboard.component.ts
function DashboardComponent_div_13__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 25);
    \u0275\u0275element(1, "path", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kpi_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("color", kpi_r2.color);
  }
}
function DashboardComponent_div_13__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 25);
    \u0275\u0275element(1, "circle", 27)(2, "circle", 28)(3, "path", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kpi_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("color", kpi_r2.color);
  }
}
function DashboardComponent_div_13__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 25);
    \u0275\u0275element(1, "rect", 30)(2, "path", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kpi_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("color", kpi_r2.color);
  }
}
function DashboardComponent_div_13__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 25);
    \u0275\u0275element(1, "polyline", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kpi_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("color", kpi_r2.color);
  }
}
function DashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function DashboardComponent_div_13_Template_div_click_0_listener() {
      const kpi_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigate(kpi_r2.route));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275template(2, DashboardComponent_div_13__svg_svg_2_Template, 2, 2, "svg", 19)(3, DashboardComponent_div_13__svg_svg_3_Template, 4, 2, "svg", 19)(4, DashboardComponent_div_13__svg_svg_4_Template, 3, 2, "svg", 19)(5, DashboardComponent_div_13__svg_svg_5_Template, 2, 2, "svg", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20)(7, "span", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 24);
    \u0275\u0275text(14, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kpi_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", kpi_r2.color + "1A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kpi_r2.icon === "ticket");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kpi_r2.icon === "cart");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kpi_r2.icon === "machine");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kpi_r2.icon === "scada");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kpi_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r2.sub);
  }
}
function DashboardComponent_button_18__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 40);
    \u0275\u0275element(1, "path", 26)(2, "line", 41)(3, "line", 42);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_button_18__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 40);
    \u0275\u0275element(1, "circle", 27)(2, "circle", 28)(3, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_button_18__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 40);
    \u0275\u0275element(1, "polyline", 32);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_button_18__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 40);
    \u0275\u0275element(1, "path", 43)(2, "polyline", 44)(3, "line", 45)(4, "line", 46)(5, "polyline", 47);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function DashboardComponent_button_18_Template_button_click_0_listener() {
      const a_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigate(a_r5.route));
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275template(2, DashboardComponent_button_18__svg_svg_2_Template, 4, 0, "svg", 35)(3, DashboardComponent_button_18__svg_svg_3_Template, 4, 0, "svg", 35)(4, DashboardComponent_button_18__svg_svg_4_Template, 2, 0, "svg", 35)(5, DashboardComponent_button_18__svg_svg_5_Template, 6, 0, "svg", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 36)(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 39);
    \u0275\u0275text(12, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", a_r5.icon === "plus-ticket");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r5.icon === "cart");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r5.icon === "scada");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r5.icon === "log");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.description);
  }
}
var DashboardComponent = class _DashboardComponent {
  get todayLabel() {
    return this.today.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
  get greeting() {
    if (this.currentHour < 12)
      return "Buenos d\xEDas";
    if (this.currentHour < 21)
      return "Buenas tardes";
    return "Buenas noches";
  }
  constructor(router, ticketsService, cartService, scadaService) {
    this.router = router;
    this.ticketsService = ticketsService;
    this.cartService = cartService;
    this.scadaService = scadaService;
    this.today = /* @__PURE__ */ new Date();
    this.currentHour = this.today.getHours();
    this.kpis = [
      {
        label: "Tickets Abiertos",
        value: "\u2014",
        sub: "Incidencias activas",
        icon: "ticket",
        color: "#F59E0B",
        route: "/incidencias"
      },
      {
        label: "Pedidos Pendientes",
        value: "\u2014",
        sub: "Recambios en proceso",
        icon: "cart",
        color: "#4F46E5",
        route: "/recambios"
      },
      {
        label: "Dispositivos Activos",
        value: "\u2014",
        sub: "En producci\xF3n",
        icon: "machine",
        color: "#10B981",
        route: "/scada"
      },
      {
        label: "Estado SCADA",
        value: "\u2014",
        sub: "Comprobando conexi\xF3n\u2026",
        icon: "scada",
        color: "#6366F1",
        route: "/scada"
      }
    ];
    this.quickActions = [
      {
        label: "Nueva Incidencia",
        description: "Reportar un problema o aver\xEDa en planta",
        route: "/incidencias/nueva",
        icon: "plus-ticket"
      },
      {
        label: "Ver Carrito",
        description: "Gestionar pedido de recambios",
        route: "/recambios",
        icon: "cart"
      },
      {
        label: "Control SCADA",
        description: "Acceder al panel HMI de automatizaci\xF3n",
        route: "/scada/dashboard",
        icon: "scada"
      },
      {
        label: "Hist\xF3rico SCADA",
        description: "Consultar registros y auditor\xEDa de comandos",
        route: "/scada/historicos",
        icon: "log"
      }
    ];
  }
  ngOnInit() {
    this.loadTicketsAbiertos();
    this.loadPedidosPendientes();
    this.loadScadaEstado();
  }
  loadTicketsAbiertos() {
    this.ticketsService.getTickets({ status: "open" }).subscribe({
      next: (res) => {
        this.kpis[0].value = res.total;
        this.kpis[0].sub = res.total === 1 ? "1 incidencia activa" : `${res.total} incidencias activas`;
      },
      error: () => {
        this.kpis[0].value = "\u2014";
      }
    });
  }
  loadPedidosPendientes() {
    this.cartService.getOrders().subscribe({
      next: (res) => {
        const pendientes = res.data.filter((o) => o.status === "confirmed" || o.status === "processing");
        if (pendientes.length === 0) {
          this.kpis[1].value = "0";
          this.kpis[1].sub = "No hay pedidos pendientes";
        } else {
          this.kpis[1].value = pendientes.length;
          this.kpis[1].sub = pendientes.length === 1 ? "1 pedido en proceso" : `${pendientes.length} pedidos en proceso`;
        }
      },
      error: () => {
        this.kpis[1].value = "\u2014";
        this.kpis[1].sub = "Error de carga";
      }
    });
  }
  loadScadaEstado() {
    this.scadaService.getDashboard().subscribe({
      next: (state) => {
        const isActive = (v) => v === true || v === 1 || v === "true" || v === "1";
        const activos = [state.O_B1, state.O_B2, state.O_VAL, state.O_LAMP].filter(isActive).length;
        this.kpis[2].value = activos;
        this.kpis[2].sub = activos === 1 ? "1 dispositivo activo" : `${activos} dispositivos activos`;
        this.kpis[3].value = "Online";
        this.kpis[3].sub = "Node-RED conectado";
      },
      error: () => {
        this.kpis[2].value = "\u2014";
        this.kpis[2].sub = "Sin conexi\xF3n SCADA";
        this.kpis[3].value = "Offline";
        this.kpis[3].sub = "Node-RED no disponible";
      }
    });
  }
  navigate(route) {
    this.router.navigate([route]);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TicketsService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(ScadaService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 23, vars: 4, consts: [[1, "dashboard"], [1, "dash-header"], [1, "dash-header-text"], [1, "dash-title"], [1, "dash-subtitle"], [1, "dash-date"], [1, "date-label"], [1, "date-value"], [1, "kpi-grid"], ["class", "kpi-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "section"], [1, "section-title"], [1, "actions-grid"], ["class", "action-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "system-status"], [1, "status-dot", "status-dot--ok"], [1, "status-text"], [1, "kpi-card", 3, "click"], [1, "kpi-icon-wrap"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", 3, "color", 4, "ngIf"], [1, "kpi-body"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-sub"], [1, "kpi-arrow"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M15 5v2M15 11v2M15 17v2M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2z"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2"], ["d", "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v3M8 12h8"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], [1, "action-card", 3, "click"], [1, "action-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", 4, "ngIf"], [1, "action-text"], [1, "action-label"], [1, "action-desc"], [1, "action-arrow"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "10", "y1", "12", "x2", "14", "y2", "12"], ["x1", "12", "y1", "10", "x2", "12", "y2", "14"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Panel de control \u2014 TecnoHub");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "span", 6);
        \u0275\u0275text(9, "Hoy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275template(13, DashboardComponent_div_13_Template, 15, 9, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "section", 10)(15, "h2", 11);
        \u0275\u0275text(16, "Acciones R\xE1pidas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 12);
        \u0275\u0275template(18, DashboardComponent_button_18_Template, 13, 6, "button", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 14);
        \u0275\u0275element(20, "div", 15);
        \u0275\u0275elementStart(21, "span", 16);
        \u0275\u0275text(22, "Todos los sistemas operativos \xB7 TecnoHub v1.0");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", ctx.greeting, ", Operario");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.todayLabel);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.kpis);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.quickActions);
      }
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.dashboard[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  background: #ffffff;\n  min-height: 100%;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.dash-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.dash-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n}\n.dash-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.date-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 28px;\n}\n@media (max-width: 1100px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 18px 20px;\n  cursor: pointer;\n  transition: box-shadow 0.15s, transform 0.15s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);\n  transform: translateY(-1px);\n}\n.kpi-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.2;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.kpi-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n}\n.kpi-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 14px;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1100px) {\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.action-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px 18px;\n  cursor: pointer;\n  text-align: left;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    box-shadow 0.15s;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  background: #f5f3ff;\n  border-color: #c7d2fe;\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.1);\n}\n.action-card[_ngcontent-%COMP%]:hover   .action-icon[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.action-card[_ngcontent-%COMP%]:hover   .action-arrow[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: #64748b;\n  transition: color 0.15s;\n}\n.action-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.action-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.action-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.action-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #94a3b8;\n  flex-shrink: 0;\n  transition: color 0.15s;\n}\n.system-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.status-dot--ok[_ngcontent-%COMP%] {\n  background: #10B981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);\n}\n.status-dot--warning[_ngcontent-%COMP%] {\n  background: #F59E0B;\n}\n.status-dot--error[_ngcontent-%COMP%] {\n  background: #EF4444;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app\\features\\dashboard\\dashboard.component.ts", lineNumber: 28 });
})();

// src/app/features/dashboard/dashboard.module.ts
var routes = [
  { path: "", component: DashboardComponent }
];
var DashboardModule = class _DashboardModule {
  static {
    this.\u0275fac = function DashboardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ] });
  }
};
export {
  DashboardModule
};
//# sourceMappingURL=chunk-G3FGTVWG.js.map
