import {
  environment
} from "./chunk-NW4XVQFF.js";
import {
  FormsModule
} from "./chunk-B2JNEFE6.js";
import {
  CommonModule,
  HttpClient,
  HttpParams,
  NgForOf,
  NgIf,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Y4GLGG7Z.js";

// src/app/core/services/software.service.ts
var SoftwareService = class _SoftwareService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/software`;
  }
  getAll(search) {
    let params = new HttpParams();
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(this.apiUrl, { params });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function SoftwareService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SoftwareService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SoftwareService, factory: _SoftwareService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/software-list/software-list.component.ts
function SoftwareListComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function SoftwareListComponent_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275text(1, "Limpiar");
    \u0275\u0275elementEnd();
  }
}
function SoftwareListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function SoftwareListComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando cat\xE1logo\u2026");
    \u0275\u0275elementEnd()();
  }
}
function SoftwareListComponent_div_18_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.descripcion);
  }
}
function SoftwareListComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SoftwareListComponent_div_18_div_1_p_6_Template, 2, 1, "p", 27);
    \u0275\u0275elementStart(7, "div", 28)(8, "span", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("v", item_r3.version, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.descripcion);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(item_r3.precio));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.estadoClass(item_r3.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.estadoLabel(item_r3.estado), " ");
  }
}
function SoftwareListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, SoftwareListComponent_div_18_div_1_Template, 12, 7, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.softwareList);
  }
}
function SoftwareListComponent_div_19_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ning\xFAn software coincide con \xAB", ctx_r1.lastSearchQuery, "\xBB.");
  }
}
function SoftwareListComponent_div_19_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No hay software disponible en el cat\xE1logo.");
    \u0275\u0275elementEnd();
  }
}
function SoftwareListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "rect", 34)(3, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SoftwareListComponent_div_19_p_4_Template, 2, 1, "p", 36)(5, SoftwareListComponent_div_19_ng_template_5_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emptyMsg_r4 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.lastSearchQuery)("ngIfElse", emptyMsg_r4);
  }
}
var SoftwareListComponent = class _SoftwareListComponent {
  constructor(softwareService) {
    this.softwareService = softwareService;
    this.softwareList = [];
    this.loading = true;
    this.error = null;
    this.searchInput = "";
    this.lastSearchQuery = "";
    this.loadSeq = 0;
    this.searchDebounceHandle = null;
    this.searchDebounceMs = 400;
  }
  ngOnInit() {
    this.loadSoftware();
  }
  ngOnDestroy() {
    this.cancelSearchDebounce();
  }
  onSearchInput(rawValue) {
    this.searchInput = rawValue;
    this.cancelSearchDebounce();
    this.searchDebounceHandle = setTimeout(() => {
      this.searchDebounceHandle = null;
      const term = rawValue.trim();
      this.loadSoftware(term.length > 0 ? term : void 0);
    }, this.searchDebounceMs);
  }
  flushSearch() {
    this.cancelSearchDebounce();
    const term = this.searchInput.trim();
    this.loadSoftware(term.length > 0 ? term : void 0);
  }
  clearSearch() {
    this.cancelSearchDebounce();
    this.searchInput = "";
    this.loadSoftware();
  }
  cancelSearchDebounce() {
    if (this.searchDebounceHandle !== null) {
      clearTimeout(this.searchDebounceHandle);
      this.searchDebounceHandle = null;
    }
  }
  loadSoftware(search) {
    const seq = ++this.loadSeq;
    this.loading = true;
    this.error = null;
    const param = search?.trim() || void 0;
    this.softwareService.getAll(param).subscribe({
      next: (res) => {
        if (seq !== this.loadSeq)
          return;
        this.softwareList = Array.isArray(res?.data) ? res.data : [];
        this.lastSearchQuery = param ?? "";
        this.loading = false;
      },
      error: (err) => {
        if (seq !== this.loadSeq)
          return;
        this.softwareList = [];
        this.error = err.status === 0 ? "No hay conexi\xF3n con el servidor. Comprueba que la API est\xE9 en marcha." : "No se pudo cargar el cat\xE1logo de software. Int\xE9ntalo de nuevo.";
        this.loading = false;
      }
    });
  }
  formatPrice(amount) {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR"
    }).format(amount);
  }
  estadoLabel(estado) {
    return estado?.toLowerCase() === "activo" ? "Disponible" : "No disponible";
  }
  estadoClass(estado) {
    return estado?.toLowerCase() === "activo" ? "" : "out";
  }
  static {
    this.\u0275fac = function SoftwareListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SoftwareListComponent)(\u0275\u0275directiveInject(SoftwareService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SoftwareListComponent, selectors: [["app-software-list"]], decls: 20, vars: 6, consts: [["emptyMsg", ""], [1, "catalog-page"], [1, "catalog-header"], [1, "catalog-title"], [1, "catalog-subtitle"], ["role", "search", "aria-label", "Buscar software", 1, "catalog-toolbar"], [1, "catalog-search"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "catalog-search__icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "M21 21l-4.35-4.35"], ["id", "app-software-search", "type", "search", "placeholder", "Buscar por nombre o versi\xF3n\u2026", "autocomplete", "off", 1, "catalog-search__input", 3, "input", "keydown.enter", "value"], ["type", "button", 1, "btn-search", 3, "click"], ["type", "button", "class", "btn-clear-search", 3, "click", 4, "ngIf"], ["class", "alert-error", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "product-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["type", "button", 1, "btn-clear-search", 3, "click"], [1, "alert-error"], [1, "loading-state"], [1, "spinner"], [1, "product-grid"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "product-info"], [1, "product-sku"], [1, "product-name"], ["class", "product-desc", 4, "ngIf"], [1, "product-footer"], [1, "product-price"], [1, "stock-badge"], [1, "product-desc"], [1, "empty-state"], ["width", "56", "height", "56", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#CBD5E1", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["d", "M9 9h6M9 12h6M9 15h4"], [4, "ngIf", "ngIfElse"]], template: function SoftwareListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
        \u0275\u0275text(4, "Cat\xE1logo de Software");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Consulta el software disponible para tu equipo");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 7);
        \u0275\u0275element(10, "circle", 8)(11, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "input", 10);
        \u0275\u0275listener("input", function SoftwareListComponent_Template_input_input_12_listener($event) {
          return ctx.onSearchInput($event.target.value);
        })("keydown.enter", function SoftwareListComponent_Template_input_keydown_enter_12_listener() {
          return ctx.flushSearch();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 11);
        \u0275\u0275listener("click", function SoftwareListComponent_Template_button_click_13_listener() {
          return ctx.flushSearch();
        });
        \u0275\u0275text(14, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, SoftwareListComponent_button_15_Template, 2, 0, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, SoftwareListComponent_div_16_Template, 2, 1, "div", 13)(17, SoftwareListComponent_div_17_Template, 4, 0, "div", 14)(18, SoftwareListComponent_div_18_Template, 2, 1, "div", 15)(19, SoftwareListComponent_div_19_Template, 7, 2, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("value", ctx.searchInput);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.searchInput.trim());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.softwareList.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.softwareList.length === 0);
      }
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n.catalog-page[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1200px;\n}\n.catalog-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.catalog-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1 1 220px;\n  min-width: 0;\n  max-width: 400px;\n  padding: 8px 12px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.catalog-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #a5b4fc;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);\n}\n.catalog-search__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #94a3b8;\n}\n.catalog-search__input[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: #1e293b;\n  outline: none;\n}\n.catalog-search__input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.btn-search[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  background: #4f46e5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-search[_ngcontent-%COMP%]:hover {\n  background: #4338ca;\n}\n.btn-clear-search[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #64748b;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition:\n    color 0.15s ease,\n    border-color 0.15s ease,\n    background 0.15s ease;\n}\n.btn-clear-search[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n  border-color: #c7d2fe;\n  background: #eef2ff;\n}\n.catalog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.catalog-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 4px;\n}\n.catalog-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #991b1b;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  color: #64748b;\n  font-size: 14px;\n  gap: 12px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 20px;\n}\n.product-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  transition: box-shadow 0.2s, transform 0.15s;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.product-info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.product-sku[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  display: block;\n  margin-bottom: 4px;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 6px;\n  line-height: 1.3;\n}\n.product-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #4f46e5;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 12px;\n  background: #dcfce7;\n  color: #166534;\n}\n.stock-badge.out[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: #94a3b8;\n  font-size: 14px;\n  text-align: center;\n  max-width: 420px;\n  margin: 0 auto;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=software-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SoftwareListComponent, { className: "SoftwareListComponent", filePath: "app\\features\\software-list\\software-list.component.ts", lineNumber: 9 });
})();

// src/app/features/software-list/software.module.ts
var routes = [
  { path: "", component: SoftwareListComponent }
];
var SoftwareModule = class _SoftwareModule {
  static {
    this.\u0275fac = function SoftwareModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SoftwareModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SoftwareModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(routes)
    ] });
  }
};
export {
  SoftwareModule
};
//# sourceMappingURL=chunk-PZ3G7B52.js.map
