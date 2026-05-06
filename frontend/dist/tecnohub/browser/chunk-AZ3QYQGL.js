import {
  ScadaService
} from "./chunk-NGWBMD4A.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-B2JNEFE6.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  RouterModule,
  Subject,
  UpperCasePipe,
  interval,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Y4GLGG7Z.js";

// src/app/features/scada/dashboard/dashboard.component.ts
function ScadaDashboardComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Actualizado: ", \u0275\u0275pipeBind2(2, 1, ctx_r0.lastUpdate, "HH:mm:ss"), " ");
  }
}
function ScadaDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0 ", ctx_r0.error, "");
  }
}
function ScadaDashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0 ", ctx_r0.commandError, "");
  }
}
function ScadaDashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Conectando con Node-RED\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ScadaDashboardComponent_ng_container_11_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "strong");
    \u0275\u0275text(2, "\xDAltimo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.lastCommand.tag, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "result-" + ctx_r0.lastCommand.resultado);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.lastCommand.resultado === "success" ? "\u2713 OK" : "\u2717 Error", " ");
  }
}
function ScadaDashboardComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13)(3, "div", 14);
    \u0275\u0275element(4, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "DEP\xD3SITO 1");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "div", 16);
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 17);
    \u0275\u0275text(10, " VAL ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 16);
    \u0275\u0275elementStart(12, "div", 13)(13, "div", 17);
    \u0275\u0275text(14, " B1 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "div", 16);
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 17);
    \u0275\u0275text(18, " B2 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "div", 16);
    \u0275\u0275elementStart(20, "div", 13)(21, "div", 18);
    \u0275\u0275text(22, " LAMP ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 14);
    \u0275\u0275element(24, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26, "DEP\xD3SITO 2");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 20)(28, "div", 21);
    \u0275\u0275text(29, "TIEMPO OPERATIVO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 22);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 23)(33, "button", 24);
    \u0275\u0275listener("click", function ScadaDashboardComponent_ng_container_11_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modoAuto());
    });
    \u0275\u0275text(34, "MODO AUTO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 25);
    \u0275\u0275listener("click", function ScadaDashboardComponent_ng_container_11_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.emergencia());
    });
    \u0275\u0275text(36, "EMERGENCIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 26);
    \u0275\u0275listener("click", function ScadaDashboardComponent_ng_container_11_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirValvula());
    });
    \u0275\u0275text(38, "ABRIR V");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 26);
    \u0275\u0275listener("click", function ScadaDashboardComponent_ng_container_11_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarValvula());
    });
    \u0275\u0275text(40, "CERRAR V");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 27);
    \u0275\u0275listener("click", function ScadaDashboardComponent_ng_container_11_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.rearmeOn());
    });
    \u0275\u0275text(42, "REARME ON");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 26);
    \u0275\u0275listener("click", function ScadaDashboardComponent_ng_container_11_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.lamparaOn());
    });
    \u0275\u0275text(44, "L\xC1MPARA ON");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 26);
    \u0275\u0275listener("click", function ScadaDashboardComponent_ng_container_11_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.lamparaOff());
    });
    \u0275\u0275text(46, "L\xC1MPARA OFF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 28);
    \u0275\u0275listener("click", function ScadaDashboardComponent_ng_container_11_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.marcha());
    });
    \u0275\u0275text(48, "MARCHA B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 29);
    \u0275\u0275listener("click", function ScadaDashboardComponent_ng_container_11_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.paro());
    });
    \u0275\u0275text(50, "PARO B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 25);
    \u0275\u0275listener("click", function ScadaDashboardComponent_ng_container_11_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.rearmeOff());
    });
    \u0275\u0275text(52, "REARME OFF");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, ScadaDashboardComponent_ng_container_11_div_53_Template, 6, 3, "div", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275classProp("on", ctx_r0.isActive(ctx_r0.dashboardState.O_VAL))("off", !ctx_r0.isActive(ctx_r0.dashboardState.O_VAL));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("on", ctx_r0.isActive(ctx_r0.dashboardState.O_B1))("off", !ctx_r0.isActive(ctx_r0.dashboardState.O_B1));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("on", ctx_r0.isActive(ctx_r0.dashboardState.O_B2))("off", !ctx_r0.isActive(ctx_r0.dashboardState.O_B2));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("on", ctx_r0.isActive(ctx_r0.dashboardState.O_LAMP))("off", !ctx_r0.isActive(ctx_r0.dashboardState.O_LAMP));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tank-active", ctx_r0.isActive(ctx_r0.dashboardState.O_LAMP));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.tiempoDisplay);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingCommand);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingCommand);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingCommand);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingCommand);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingCommand);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingCommand);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingCommand);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingCommand);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingCommand);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingCommand);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.lastCommand);
  }
}
var ScadaDashboardComponent = class _ScadaDashboardComponent {
  constructor(scadaService) {
    this.scadaService = scadaService;
    this.dashboardState = null;
    this.loading = false;
    this.error = null;
    this.lastUpdate = null;
    this.sendingCommand = false;
    this.commandError = null;
    this.lastCommand = null;
    this.tiempoActual = 0;
    this.bomba2Activa = false;
    this.ultimoTiempoServidor = -1;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.loadDashboard();
    this.startAutoRefresh();
    this.startClientTimer();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /** Carga inicial del dashboard */
  loadDashboard() {
    this.loading = true;
    this.error = null;
    this.scadaService.getDashboard().pipe(takeUntil(this.destroy$)).subscribe({
      next: (state) => {
        this.applyState(state);
        this.lastUpdate = /* @__PURE__ */ new Date();
        this.loading = false;
      },
      error: () => {
        this.error = "No se pudo conectar a Node-RED";
        this.loading = false;
      }
    });
  }
  /**
   * Polling cada 2000ms (igual que v1.1).
   * Sincroniza estados del PLC sin interferir con el cronómetro client-side.
   */
  startAutoRefresh() {
    interval(2e3).pipe(takeUntil(this.destroy$), switchMap(() => this.scadaService.getDashboard())).subscribe({
      next: (state) => {
        this.applyState(state);
        this.lastUpdate = /* @__PURE__ */ new Date();
        this.error = null;
      },
      error: () => {
        this.error = "Conexi\xF3n perdida con Node-RED";
      }
    });
  }
  /**
   * Cronómetro client-side: avanza cada segundo si bomba2 está activa.
   * El servidor resetea el tiempo vía REARME (envía TIEMPO diferente al anterior).
   */
  startClientTimer() {
    interval(1e3).pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.bomba2Activa) {
        this.tiempoActual++;
      }
    });
  }
  /**
   * Aplica estado recibido del servidor.
   * Detecta cambio de TIEMPO del servidor para sincronizar el contador local (REARME).
   */
  applyState(state) {
    this.dashboardState = state;
    this.bomba2Activa = this.isActive(state.O_B2);
    const tiempoServidor = parseInt(String(state.TIEMPO ?? 0), 10);
    if (!isNaN(tiempoServidor) && tiempoServidor !== this.ultimoTiempoServidor) {
      this.tiempoActual = tiempoServidor;
      this.ultimoTiempoServidor = tiempoServidor;
    }
  }
  /** Formatea el tiempo en MM:SS */
  get tiempoDisplay() {
    const min = Math.floor(this.tiempoActual / 60).toString().padStart(2, "0");
    const seg = (this.tiempoActual % 60).toString().padStart(2, "0");
    return `${min}:${seg}`;
  }
  // ─── Comandos (alineados con tags de v1.1) ────────────────────────────────
  send(tag, valor) {
    this.sendingCommand = true;
    this.commandError = null;
    this.scadaService.enviarComando(tag, valor).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.lastCommand = res.data;
        this.sendingCommand = false;
      },
      error: (err) => {
        this.commandError = err?.error?.error ?? "Error al enviar comando";
        this.sendingCommand = false;
      }
    });
  }
  modoAuto() {
    this.send("Auto", true);
  }
  emergencia() {
    this.send("PE", true);
  }
  abrirValvula() {
    this.send("Abrir_Val", true);
  }
  cerrarValvula() {
    this.send("Cerrar_Val", true);
  }
  rearmeOn() {
    this.send("REARME", true);
  }
  rearmeOff() {
    this.send("REARME", false);
  }
  lamparaOn() {
    this.send("ON_LAMP", true);
  }
  lamparaOff() {
    this.send("OFF_LAMP", true);
  }
  marcha() {
    this.send("Marcha_B", true);
  }
  paro() {
    this.send("Paro_B", true);
  }
  // ─── Helpers ──────────────────────────────────────────────────────────────
  /** Normaliza distintos formatos booleanos que puede enviar Node-RED */
  isActive(val) {
    return val === true || val === 1 || val === "true" || val === "1";
  }
  getEstadoTexto(val) {
    return this.isActive(val) ? "ACTIVO" : "INACTIVO";
  }
  getEstadoClase(val) {
    return this.isActive(val) ? "estado-activo" : "estado-inactivo";
  }
  static {
    this.\u0275fac = function ScadaDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScadaDashboardComponent)(\u0275\u0275directiveInject(ScadaService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScadaDashboardComponent, selectors: [["app-scada-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 6, consts: [[1, "scada-dashboard"], [1, "dashboard-header"], [1, "header-info"], ["class", "last-update", 4, "ngIf"], [1, "btn-refresh", 3, "click", "disabled"], ["class", "alert-error", 4, "ngIf"], ["class", "state-loading", 4, "ngIf"], [4, "ngIf"], [1, "last-update"], [1, "alert-error"], [1, "state-loading"], [1, "spinner"], [1, "process-view"], [1, "component"], [1, "tank"], [1, "water", 2, "height", "60%"], [1, "pipe"], [1, "device-icon"], [1, "lamp"], [1, "water", 2, "height", "40%"], [1, "clock-container"], [1, "clock-label"], [1, "digital-clock"], [1, "control-panel"], [1, "btn", "btn-auto", 3, "click", "disabled"], [1, "btn", "btn-emergency", 3, "click", "disabled"], [1, "btn", "btn-std", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-marcha", 3, "click", "disabled"], [1, "btn", "btn-paro", 3, "click", "disabled"], ["class", "last-command", 4, "ngIf"], [1, "last-command"], [3, "ngClass"]], template: function ScadaDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "HMI CONTROL INDUSTRIAL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275template(5, ScadaDashboardComponent_span_5_Template, 3, 4, "span", 3);
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275listener("click", function ScadaDashboardComponent_Template_button_click_6_listener() {
          return ctx.loadDashboard();
        });
        \u0275\u0275text(7, " \u27F2 Actualizar ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(8, ScadaDashboardComponent_div_8_Template, 2, 1, "div", 5)(9, ScadaDashboardComponent_div_9_Template, 2, 1, "div", 5)(10, ScadaDashboardComponent_div_10_Template, 4, 0, "div", 6)(11, ScadaDashboardComponent_ng_container_11_Template, 54, 30, "ng-container", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.lastUpdate);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading || ctx.sendingCommand);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.commandError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading && !ctx.dashboardState);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dashboardState);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, DatePipe], styles: ['\n\n.scada-dashboard[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #0F172A;\n  min-height: 100vh;\n  color: #FFFFFF;\n  font-family: "Segoe UI", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: 0.05em;\n}\n.header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.last-update[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94A3B8;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  background: #4F46E5;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338CA;\n}\n.btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.alert-error[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  border-radius: 8px;\n  padding: 10px 16px;\n  color: #FCA5A5;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  gap: 12px;\n  color: #94A3B8;\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #334155;\n  border-top-color: #4F46E5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.process-view[_ngcontent-%COMP%] {\n  background: #1E293B;\n  padding: 50px;\n  border-radius: 20px;\n  width: 950px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  border: 1px solid #334155;\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);\n  margin-bottom: 24px;\n  position: relative;\n}\n.pipe[_ngcontent-%COMP%] {\n  height: 20px;\n  background:\n    linear-gradient(\n      to bottom,\n      #94A3B8 0%,\n      #475569 50%,\n      #94A3B8 100%);\n  border: 2px solid #334155;\n  flex-grow: 1;\n  margin: 0 -5px;\n  z-index: 1;\n  border-radius: 5px;\n}\n.component[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-size: 12px;\n  z-index: 2;\n}\n.component[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 11px;\n  color: #94A3B8;\n  letter-spacing: 0.04em;\n}\n.tank[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 180px;\n  border: 4px solid #CBD5E1;\n  border-radius: 10px;\n  background: #334155;\n  position: relative;\n  overflow: hidden;\n}\n.tank.tank-active[_ngcontent-%COMP%] {\n  border-color: #22C55E !important;\n  background: #166534 !important;\n  box-shadow: 0 0 16px rgba(34, 197, 94, 0.4);\n  transition: all 0.3s;\n}\n.water[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  background: #38BDF8;\n  transition: height 0.5s;\n}\n.device-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #475569;\n  font-size: 14px;\n  font-weight: 700;\n  border: 4px solid #334155;\n  margin-bottom: 10px;\n  transition: all 0.3s;\n}\n.device-icon.on[_ngcontent-%COMP%] {\n  background: #22C55E;\n  color: #FFFFFF;\n  border-color: #16A34A;\n  box-shadow: 0 0 20px #22C55E;\n}\n.device-icon.off[_ngcontent-%COMP%] {\n  background: #64748B;\n  border-color: #475569;\n}\n.lamp[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #475569;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 12px;\n  margin: 0 auto 10px;\n  transition: background 0.3s;\n}\n.lamp.on[_ngcontent-%COMP%] {\n  background: #22C55E;\n  animation: _ngcontent-%COMP%_blink 0.8s infinite;\n  box-shadow: 0 0 20px #22C55E;\n  color: #FFFFFF;\n}\n.lamp.off[_ngcontent-%COMP%] {\n  background: #64748B;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.2;\n  }\n}\n.clock-container[_ngcontent-%COMP%] {\n  background: #000;\n  padding: 15px 30px;\n  border-radius: 10px;\n  border: 4px solid #333;\n  text-align: center;\n  margin-bottom: 24px;\n}\n.clock-label[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.digital-clock[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 60px;\n  color: #0F0;\n  text-shadow: 0 0 10px #0F0;\n  line-height: 1.1;\n}\n.control-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 15px;\n  width: 950px;\n  margin-bottom: 20px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 10px;\n  font-weight: 800;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.04em;\n}\n.btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(4px);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn.btn-std[_ngcontent-%COMP%] {\n  background: #6B7280;\n  color: #FFFFFF;\n}\n.btn.btn-std[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4B5563;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #007BFF;\n  color: #FFFFFF;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0056B3;\n}\n.btn.btn-emergency[_ngcontent-%COMP%] {\n  background: #DC2626;\n  color: #FFFFFF;\n}\n.btn.btn-emergency[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #B91C1C;\n}\n.btn.btn-auto[_ngcontent-%COMP%] {\n  background: #FBBF24;\n  color: #111;\n}\n.btn.btn-auto[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #F59E0B;\n}\n.btn.btn-marcha[_ngcontent-%COMP%] {\n  background: #2ECC71;\n  color: #FFFFFF;\n}\n.btn.btn-marcha[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #27AE60;\n}\n.btn.btn-paro[_ngcontent-%COMP%] {\n  background: #E67E22;\n  color: #FFFFFF;\n}\n.btn.btn-paro[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #D35400;\n}\n.last-command[_ngcontent-%COMP%] {\n  background: #1E293B;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  padding: 10px 16px;\n  font-size: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: #94A3B8;\n}\n.last-command[_ngcontent-%COMP%]   .result-success[_ngcontent-%COMP%] {\n  color: #22C55E;\n  font-weight: 600;\n}\n.last-command[_ngcontent-%COMP%]   .result-error[_ngcontent-%COMP%] {\n  color: #EF4444;\n  font-weight: 600;\n}\n.last-command[_ngcontent-%COMP%]   .result-timeout[_ngcontent-%COMP%] {\n  color: #F59E0B;\n  font-weight: 600;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScadaDashboardComponent, { className: "ScadaDashboardComponent", filePath: "app\\features\\scada\\dashboard\\dashboard.component.ts", lineNumber: 15 });
})();

// src/app/features/scada/historicos/historicos.component.ts
function HistoricosComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u26A0 ", ctx_r0.error, "");
  }
}
function HistoricosComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando hist\xF3rico\u2026");
    \u0275\u0275elementEnd()();
  }
}
function HistoricosComponent_ng_container_21_tr_18_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, " \u2713 Completado ");
    \u0275\u0275elementEnd();
  }
}
function HistoricosComponent_ng_container_21_tr_18_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cmd_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2717 ", cmd_r3.error_mensaje || "Error desconocido", " ");
  }
}
function HistoricosComponent_ng_container_21_tr_18_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, " \u23F1 Timeout ");
    \u0275\u0275elementEnd();
  }
}
function HistoricosComponent_ng_container_21_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 22)(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 25)(6, "code");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 26)(9, "code");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 27)(12, "span", 28);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 29);
    \u0275\u0275template(16, HistoricosComponent_ng_container_21_tr_18_span_16_Template, 2, 0, "span", 30)(17, HistoricosComponent_ng_container_21_tr_18_span_17_Template, 2, 1, "span", 31)(18, HistoricosComponent_ng_container_21_tr_18_span_18_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cmd_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.getResultClase(cmd_r3.resultado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(cmd_r3.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((cmd_r3.user == null ? null : cmd_r3.user.name) || "Desconocido");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cmd_r3.tag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cmd_r3.valor);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "resultado-" + cmd_r3.resultado);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.getResultIcon(cmd_r3.resultado), " ", \u0275\u0275pipeBind1(14, 11, cmd_r3.resultado), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cmd_r3.resultado === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cmd_r3.resultado === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cmd_r3.resultado === "timeout");
  }
}
function HistoricosComponent_ng_container_21_span_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 36)(1, "button", 37);
    \u0275\u0275listener("click", function HistoricosComponent_ng_container_21_span_24_Template_button_click_1_listener() {
      const page_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(page_r5));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", page_r5 === ctx_r0.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r5, " ");
  }
}
function HistoricosComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "table", 16)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Fecha y Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Comando (Tag)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Valor Enviado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Resultado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Respuesta Node-RED");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, HistoricosComponent_ng_container_21_tr_18_Template, 19, 13, "tr", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 18)(20, "button", 19);
    \u0275\u0275listener("click", function HistoricosComponent_ng_container_21_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(1));
    });
    \u0275\u0275text(21, " \xAB Primero ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 19);
    \u0275\u0275listener("click", function HistoricosComponent_ng_container_21_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275text(23, " \u2039 Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, HistoricosComponent_ng_container_21_span_24_Template, 3, 3, "span", 20);
    \u0275\u0275elementStart(25, "button", 19);
    \u0275\u0275listener("click", function HistoricosComponent_ng_container_21_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275text(26, " Siguiente \u203A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 19);
    \u0275\u0275listener("click", function HistoricosComponent_ng_container_21_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.totalPages));
    });
    \u0275\u0275text(28, " \xDAltimo \xBB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 21);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.commands);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" P\xE1gina ", ctx_r0.currentPage, " de ", ctx_r0.totalPages, " (", ctx_r0.total, " registros) ");
  }
}
function HistoricosComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "p");
    \u0275\u0275text(2, "\u{1F4ED} No hay hist\xF3rico de comandos");
    \u0275\u0275elementEnd()();
  }
}
var HistoricosComponent = class _HistoricosComponent {
  constructor(scadaService) {
    this.scadaService = scadaService;
    this.commands = [];
    this.loading = false;
    this.error = null;
    this.days = 30;
    this.perPage = 50;
    this.currentPage = 1;
    this.total = 0;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.loadHistoricos();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * Carga el histórico de comandos
   */
  loadHistoricos() {
    this.loading = true;
    this.error = null;
    this.scadaService.getHistoricos(void 0, this.days, this.perPage, this.currentPage).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.commands = res.data;
        this.total = res.pagination.total;
        this.loading = false;
      },
      error: (err) => {
        this.error = "No se pudo cargar el hist\xF3rico";
        this.loading = false;
      }
    });
  }
  /**
   * Cambia el filtro de días y recarga
   */
  onDaysChange() {
    this.currentPage = 1;
    this.loadHistoricos();
  }
  /**
   * Cambia la página
   */
  goToPage(page) {
    this.currentPage = page;
    this.loadHistoricos();
  }
  /**
   * Obtiene el ícono según el resultado
   */
  getResultIcon(resultado) {
    switch (resultado) {
      case "success":
        return "\u2713";
      case "error":
        return "\u2717";
      case "timeout":
        return "\u23F1";
      default:
        return "?";
    }
  }
  /**
   * Obtiene la clase CSS según el resultado
   */
  getResultClase(resultado) {
    return `resultado-${resultado}`;
  }
  /**
   * Formatea la fecha y hora
   */
  formatDateTime(date) {
    return new Date(date).toLocaleString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  /**
   * Calcula total de páginas
   */
  get totalPages() {
    return Math.ceil(this.total / this.perPage);
  }
  /**
   * Obtiene array de números de página para paginación
   */
  get pageNumbers() {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  static {
    this.\u0275fac = function HistoricosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HistoricosComponent)(\u0275\u0275directiveInject(ScadaService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoricosComponent, selectors: [["app-scada-historicos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 9, consts: [[1, "historicos-container"], [1, "historicos-header"], [1, "subtitle"], [1, "filters-bar"], [1, "filter-group"], ["for", "days-filter"], ["id", "days-filter", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["class", "alert-error", 4, "ngIf"], ["class", "state-loading", 4, "ngIf"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "alert-error"], [1, "state-loading"], [1, "spinner"], [1, "table-container"], [1, "historicos-table"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], ["class", "page-number", 4, "ngFor", "ngForOf"], [1, "pagination-info"], [3, "ngClass"], [1, "col-datetime"], [1, "col-user"], [1, "col-tag"], [1, "col-valor"], [1, "col-resultado"], [1, "resultado-badge", 3, "ngClass"], [1, "col-response"], ["class", "response-ok", 4, "ngIf"], ["class", "response-error", 4, "ngIf"], ["class", "response-timeout", 4, "ngIf"], [1, "response-ok"], [1, "response-error"], [1, "response-timeout"], [1, "page-number"], [3, "click"], [1, "empty-state"]], template: function HistoricosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Hist\xF3rico de Comandos y Auditor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Registro completo de todas las operaciones SCADA");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "label", 5);
        \u0275\u0275text(9, "\xDAltimos d\xEDas:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function HistoricosComponent_Template_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.days, $event) || (ctx.days = $event);
          return $event;
        });
        \u0275\u0275listener("change", function HistoricosComponent_Template_select_change_10_listener() {
          return ctx.onDaysChange();
        });
        \u0275\u0275elementStart(11, "option", 7);
        \u0275\u0275text(12, "7 d\xEDas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "option", 7);
        \u0275\u0275text(14, "30 d\xEDas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option", 7);
        \u0275\u0275text(16, "90 d\xEDas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "option", 7);
        \u0275\u0275text(18, "1 a\xF1o");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(19, HistoricosComponent_div_19_Template, 3, 1, "div", 8)(20, HistoricosComponent_div_20_Template, 4, 0, "div", 9)(21, HistoricosComponent_ng_container_21_Template, 31, 9, "ng-container", 10)(22, HistoricosComponent_div_22_Template, 3, 0, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.days);
        \u0275\u0275advance();
        \u0275\u0275property("value", 7);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 30);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 90);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 365);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.commands.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.commands.length === 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, UpperCasePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.historicos-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #ffffff;\n  min-height: 100vh;\n}\n.historicos-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.historicos-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 8px 0;\n}\n.historicos-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 24px;\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1e293b;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 6px 12px;\n  font-size: 13px;\n  color: #1e293b;\n  background: #ffffff;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f46e5;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  border-radius: 8px;\n  padding: 12px 16px;\n  color: #EF4444;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  gap: 12px;\n  color: #64748b;\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.historicos-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.historicos-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  border-bottom: 1px solid #e2e8f0;\n}\n.historicos-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #1e293b;\n  white-space: nowrap;\n}\n.historicos-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.1s;\n}\n.historicos-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.historicos-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.resultado-success[_ngcontent-%COMP%] {\n  --accent: #10B981;\n}\n.historicos-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.resultado-error[_ngcontent-%COMP%] {\n  --accent: #EF4444;\n  background: #FEF2F2;\n}\n.historicos-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.resultado-timeout[_ngcontent-%COMP%] {\n  --accent: #F59E0B;\n}\n.historicos-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: #1e293b;\n}\n.historicos-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  border-radius: 4px;\n  padding: 2px 6px;\n  font-family: "Courier New", monospace;\n  font-size: 12px;\n  color: #1e293b;\n}\n.col-datetime[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.col-user[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.col-resultado[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.resultado-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.resultado-badge.resultado-success[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #10B981;\n}\n.resultado-badge.resultado-error[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #EF4444;\n}\n.resultado-badge.resultado-timeout[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #92400E;\n}\n.response-ok[_ngcontent-%COMP%], \n.response-error[_ngcontent-%COMP%], \n.response-timeout[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.response-ok[_ngcontent-%COMP%] {\n  color: #10B981;\n}\n.response-error[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.response-timeout[_ngcontent-%COMP%] {\n  color: #F59E0B;\n}\n.empty-state[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px dashed #e2e8f0;\n  border-radius: 8px;\n  padding: 48px 24px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 16px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 16px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.pagination-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 6px 12px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n  color: #1e293b;\n}\n.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4f46e5;\n  color: #fff;\n  border-color: #4f46e5;\n}\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-number[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 6px 10px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n  color: #1e293b;\n  min-width: 36px;\n}\n.page-number[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #4f46e5;\n  color: #4f46e5;\n}\n.page-number[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #fff;\n  border-color: #4f46e5;\n  font-weight: 600;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=historicos.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoricosComponent, { className: "HistoricosComponent", filePath: "app\\features\\scada\\historicos\\historicos.component.ts", lineNumber: 16 });
})();

// src/app/features/scada/scada-routing.module.ts
var routes = [
  {
    path: "",
    component: ScadaDashboardComponent
  },
  {
    path: "dashboard",
    component: ScadaDashboardComponent
  },
  {
    path: "historicos",
    component: HistoricosComponent
  }
];
var ScadaRoutingModule = class _ScadaRoutingModule {
  static {
    this.\u0275fac = function ScadaRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScadaRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ScadaRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/scada/scada.module.ts
var ScadaModule = class _ScadaModule {
  static {
    this.\u0275fac = function ScadaModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScadaModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ScadaModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      ScadaRoutingModule,
      ScadaDashboardComponent,
      HistoricosComponent
    ] });
  }
};
export {
  ScadaModule
};
//# sourceMappingURL=chunk-AZ3QYQGL.js.map
