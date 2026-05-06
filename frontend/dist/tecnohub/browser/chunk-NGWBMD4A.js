import {
  HttpClient,
  HttpParams,
  interval,
  map,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Y4GLGG7Z.js";

// src/app/core/services/scada.service.ts
var ScadaService = class _ScadaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "/api/scada";
  }
  /**
   * GET /api/scada/dashboard
   * Obtiene el estado actual del sistema SCADA desde Node-RED
   */
  getDashboard() {
    return this.http.get(`${this.apiUrl}/dashboard`).pipe(map((res) => res.data));
  }
  /**
   * Polling automático cada 800ms del dashboard SCADA
   */
  getDashboardAutoRefresh(intervalMs = 800) {
    return interval(intervalMs).pipe(switchMap(() => this.getDashboard()));
  }
  /**
   * POST /api/scada/enviar-comando
   * Envía un comando a Node-RED
   */
  enviarComando(tag, valor) {
    return this.http.post(`${this.apiUrl}/enviar-comando`, { tag, valor });
  }
  /**
   * GET /api/scada/historicos
   * Devuelve histórico de comandos y eventos
   */
  getHistoricos(machineId, days = 30, perPage = 50, page = 1) {
    let params = new HttpParams().set("days", days.toString()).set("per_page", perPage.toString()).set("page", page.toString());
    if (machineId) {
      params = params.set("machine_id", machineId.toString());
    }
    return this.http.get(`${this.apiUrl}/historicos`, { params });
  }
  /**
   * GET /api/scada/eventos-maquina/{machineId}
   * Devuelve eventos históricos de una máquina (para integración con Tickets)
   */
  getEventosMaquina(machineId, days = 7, perPage = 30, page = 1) {
    const params = new HttpParams().set("days", days.toString()).set("per_page", perPage.toString()).set("page", page.toString());
    return this.http.get(`${this.apiUrl}/eventos-maquina/${machineId}`, { params });
  }
  /**
   * POST /api/scada/evento-manual
   * Registra un evento manual (solo para admins)
   */
  registrarEventoManual(machineId, eventoType, valorAnterior, valorNuevo) {
    return this.http.post(`${this.apiUrl}/evento-manual`, {
      machine_id: machineId,
      evento_type: eventoType,
      valor_anterior: valorAnterior,
      valor_nuevo: valorNuevo
    });
  }
  static {
    this.\u0275fac = function ScadaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScadaService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScadaService, factory: _ScadaService.\u0275fac, providedIn: "root" });
  }
};

export {
  ScadaService
};
//# sourceMappingURL=chunk-NGWBMD4A.js.map
