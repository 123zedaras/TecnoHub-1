import {
  environment
} from "./chunk-NW4XVQFF.js";
import {
  HttpClient,
  HttpParams,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Y4GLGG7Z.js";

// src/app/core/services/tickets.service.ts
var TicketsService = class _TicketsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/tickets`;
  }
  // GET /api/tickets
  getTickets(filters = {}) {
    let params = new HttpParams();
    if (filters.status)
      params = params.set("status", filters.status);
    if (filters.priority)
      params = params.set("priority", filters.priority);
    if (filters.machine_name)
      params = params.set("machine_name", filters.machine_name);
    if (filters.page)
      params = params.set("page", filters.page.toString());
    return this.http.get(this.apiUrl, { params });
  }
  // POST /api/tickets
  createTicket(request) {
    return this.http.post(this.apiUrl, request).pipe(map((res) => res.data));
  }
  // GET /api/tickets/{id}
  getTicket(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(map((res) => res.data));
  }
  // PUT /api/tickets/{id}
  updateTicket(id, request) {
    return this.http.put(`${this.apiUrl}/${id}`, request).pipe(map((res) => res.data));
  }
  // POST /api/tickets/{id}/messages
  sendMessage(ticketId, content) {
    return this.http.post(`${this.apiUrl}/${ticketId}/messages`, { content }).pipe(map((res) => res.data));
  }
  // GET /api/machines  (used by ticket-create to populate machine selector)
  getMachines() {
    const machinesUrl = `${environment.apiUrl}/machines`;
    return this.http.get(machinesUrl).pipe(map((res) => res.data ?? res));
  }
  static {
    this.\u0275fac = function TicketsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TicketsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TicketsService, factory: _TicketsService.\u0275fac, providedIn: "root" });
  }
};

export {
  TicketsService
};
//# sourceMappingURL=chunk-7REM7NL4.js.map
