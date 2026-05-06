import {
  ProductService
} from "./chunk-VOC6WKN7.js";
import {
  CartService
} from "./chunk-J4UNXGQC.js";
import {
  environment
} from "./chunk-NW4XVQFF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-B2JNEFE6.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  __async,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-Y4GLGG7Z.js";

// src/app/features/cart/catalog/catalog.component.ts
function CatalogComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cartCount);
  }
}
function CatalogComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function CatalogComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearSearch());
    });
    \u0275\u0275text(1, "Limpiar");
    \u0275\u0275elementEnd();
  }
}
function CatalogComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function CatalogComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function CatalogComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando cat\xE1logo\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_div_26_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 44);
  }
  if (rf & 2) {
    const product_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r4.image, \u0275\u0275sanitizeUrl)("alt", product_r4.name);
  }
}
function CatalogComponent_div_26_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "rect", 47)(3, "circle", 48)(4, "path", 49);
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_div_26_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r4.description);
  }
}
function CatalogComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275template(2, CatalogComponent_div_26_div_1_img_2_Template, 1, 2, "img", 34)(3, CatalogComponent_div_26_div_1_div_3_Template, 5, 0, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CatalogComponent_div_26_div_1_p_9_Template, 2, 1, "p", 39);
    \u0275\u0275elementStart(10, "div", 40)(11, "span", 41);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 43);
    \u0275\u0275listener("click", function CatalogComponent_div_26_div_1_Template_button_click_15_listener() {
      const product_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToCart(product_r4));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r4.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !product_r4.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r4.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(product_r4.price));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.stockClass(product_r4.stock));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.stockLabel(product_r4.stock), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", product_r4.stock === 0 || ctx_r0.addingProductId === product_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.addingProductId === product_r4.id ? "A\xF1adiendo\u2026" : "A\xF1adir al carrito", " ");
  }
}
function CatalogComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, CatalogComponent_div_26_div_1_Template, 17, 11, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function CatalogComponent_div_27_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ning\xFAn producto coincide con \xAB", ctx_r0.lastSearchQuery, "\xBB.");
  }
}
function CatalogComponent_div_27_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No hay productos disponibles en el cat\xE1logo.");
    \u0275\u0275elementEnd();
  }
}
function CatalogComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 52);
    \u0275\u0275element(2, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CatalogComponent_div_27_p_3_Template, 2, 1, "p", 54)(4, CatalogComponent_div_27_ng_template_4_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emptyCatalogMsg_r5 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.lastSearchQuery)("ngIfElse", emptyCatalogMsg_r5);
  }
}
var CatalogComponent = class _CatalogComponent {
  get cartCount() {
    return this.cartService.itemCount();
  }
  constructor(productService, cartService, router) {
    this.productService = productService;
    this.cartService = cartService;
    this.router = router;
    this.products = [];
    this.loading = true;
    this.error = null;
    this.addingProductId = null;
    this.successMessage = null;
    this.searchInput = "";
    this.lastSearchQuery = "";
    this.loadSeq = 0;
    this.searchDebounceHandle = null;
    this.searchDebounceMs = 400;
  }
  ngOnInit() {
    this.loadProducts();
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
      this.loadProducts(term.length > 0 ? term : void 0);
    }, this.searchDebounceMs);
  }
  flushSearch() {
    this.cancelSearchDebounce();
    const term = this.searchInput.trim();
    this.loadProducts(term.length > 0 ? term : void 0);
  }
  clearSearch() {
    this.cancelSearchDebounce();
    this.searchInput = "";
    this.loadProducts();
  }
  cancelSearchDebounce() {
    if (this.searchDebounceHandle !== null) {
      clearTimeout(this.searchDebounceHandle);
      this.searchDebounceHandle = null;
    }
  }
  loadProducts(search) {
    const seq = ++this.loadSeq;
    this.loading = true;
    this.error = null;
    const query = search?.trim();
    const param = query && query.length > 0 ? query : void 0;
    this.productService.getProducts(param).subscribe({
      next: (res) => {
        if (seq !== this.loadSeq) {
          return;
        }
        this.products = Array.isArray(res?.data) ? res.data : [];
        this.lastSearchQuery = param ?? "";
        this.loading = false;
      },
      error: (err) => {
        if (seq !== this.loadSeq) {
          return;
        }
        this.products = [];
        this.error = err.status === 0 ? "No hay conexi\xF3n con el servidor. Comprueba que la API est\xE9 en marcha." : "No se pudo cargar el cat\xE1logo. Int\xE9ntalo de nuevo.";
        this.loading = false;
      }
    });
  }
  addToCart(product) {
    if (product.stock === 0) {
      return;
    }
    this.addingProductId = product.id;
    this.cartService.addItem({ product_id: product.id, quantity: 1 }).subscribe({
      next: () => {
        this.addingProductId = null;
        this.successMessage = `"${product.name}" a\xF1adido al carrito.`;
        setTimeout(() => this.successMessage = null, 3e3);
      },
      error: (err) => {
        this.addingProductId = null;
        this.error = err.error?.message ?? "Error al a\xF1adir al carrito.";
        setTimeout(() => this.error = null, 4e3);
      }
    });
  }
  goToCart() {
    void this.router.navigate(["/recambios/carrito"]);
  }
  formatPrice(amount) {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR"
    }).format(amount);
  }
  stockLabel(stock) {
    if (stock === 0) {
      return "Sin stock";
    }
    if (stock < 5) {
      return "Pocas unidades";
    }
    return "Disponible";
  }
  stockClass(stock) {
    if (stock === 0) {
      return "out";
    }
    if (stock < 5) {
      return "low";
    }
    return "";
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CatalogComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], decls: 28, vars: 8, consts: [["emptyCatalogMsg", ""], [1, "catalog-page"], [1, "catalog-header"], [1, "catalog-title"], [1, "catalog-subtitle"], ["type", "button", 1, "btn-cart", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["class", "cart-badge", 4, "ngIf"], ["role", "search", "aria-label", "Buscar productos", 1, "catalog-toolbar"], [1, "catalog-search"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "catalog-search__icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "M21 21l-4.35-4.35"], ["id", "app-catalog-search", "type", "search", "placeholder", "Buscar por nombre o SKU\u2026", "autocomplete", "off", 1, "catalog-search__input", 3, "input", "keydown.enter", "value"], ["type", "button", 1, "btn-search", 3, "click"], ["type", "button", "class", "btn-clear-search", 3, "click", 4, "ngIf"], ["class", "alert-success", 4, "ngIf"], ["class", "alert-error", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "product-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "cart-badge"], ["type", "button", 1, "btn-clear-search", 3, "click"], [1, "alert-success"], [1, "alert-error"], [1, "loading-state"], [1, "spinner"], [1, "product-grid"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "product-image"], [3, "src", "alt", 4, "ngIf"], ["class", "product-placeholder", 4, "ngIf"], [1, "product-info"], [1, "product-sku"], [1, "product-name"], ["class", "product-desc", 4, "ngIf"], [1, "product-footer"], [1, "product-price"], [1, "stock-badge"], ["type", "button", 1, "btn-add", 3, "click", "disabled"], [3, "src", "alt"], [1, "product-placeholder"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#CBD5E1", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "3"], ["cx", "12", "cy", "10", "r", "3"], ["d", "M4 20c0-3.31 3.58-6 8-6s8 2.69 8 6"], [1, "product-desc"], [1, "empty-state"], ["width", "56", "height", "56", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#CBD5E1", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], [4, "ngIf", "ngIfElse"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
        \u0275\u0275text(4, "Cat\xE1logo de Recambios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Selecciona los productos para a\xF1adir a tu pedido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function CatalogComponent_Template_button_click_7_listener() {
          return ctx.goToCart();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 6);
        \u0275\u0275element(9, "circle", 7)(10, "circle", 8)(11, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Ver carrito ");
        \u0275\u0275template(13, CatalogComponent_span_13_Template, 2, 1, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 12);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 13);
        \u0275\u0275element(17, "circle", 14)(18, "path", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "input", 16);
        \u0275\u0275listener("input", function CatalogComponent_Template_input_input_19_listener($event) {
          return ctx.onSearchInput($event.target.value);
        })("keydown.enter", function CatalogComponent_Template_input_keydown_enter_19_listener() {
          return ctx.flushSearch();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 17);
        \u0275\u0275listener("click", function CatalogComponent_Template_button_click_20_listener() {
          return ctx.flushSearch();
        });
        \u0275\u0275text(21, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, CatalogComponent_button_22_Template, 2, 0, "button", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, CatalogComponent_div_23_Template, 2, 1, "div", 19)(24, CatalogComponent_div_24_Template, 2, 1, "div", 20)(25, CatalogComponent_div_25_Template, 4, 0, "div", 21)(26, CatalogComponent_div_26_Template, 2, 1, "div", 22)(27, CatalogComponent_div_27_Template, 6, 2, "div", 23);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.cartCount > 0);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.searchInput);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.searchInput.trim());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.products.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.products.length === 0);
      }
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n.catalog-page[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1200px;\n}\n.catalog-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.catalog-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1 1 220px;\n  min-width: 0;\n  max-width: 400px;\n  padding: 8px 12px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.catalog-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #a5b4fc;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);\n}\n.catalog-search__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #94a3b8;\n}\n.catalog-search__input[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: #1e293b;\n  outline: none;\n}\n.catalog-search__input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.btn-search[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  background: #4f46e5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-search[_ngcontent-%COMP%]:hover {\n  background: #4338ca;\n}\n.btn-clear-search[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #64748b;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition:\n    color 0.15s ease,\n    border-color 0.15s ease,\n    background 0.15s ease;\n}\n.btn-clear-search[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n  border-color: #c7d2fe;\n  background: #eef2ff;\n}\n.catalog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.catalog-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0 0 4px;\n}\n.catalog-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748B;\n  margin: 0;\n}\n.btn-cart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: #4F46E5;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.btn-cart[_ngcontent-%COMP%]:hover {\n  background: #4338CA;\n}\n.btn-cart[_ngcontent-%COMP%]   .cart-badge[_ngcontent-%COMP%] {\n  background: #EF4444;\n  color: white;\n  border-radius: 50%;\n  min-width: 20px;\n  height: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #DCFCE7;\n  border: 1px solid #86EFAC;\n  border-radius: 8px;\n  color: #166534;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  border-radius: 8px;\n  color: #991B1B;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  color: #64748B;\n  font-size: 14px;\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #E2E8F0;\n  border-top-color: #4F46E5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 20px;\n}\n.product-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  transition: box-shadow 0.2s, transform 0.15s;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.product-image[_ngcontent-%COMP%] {\n  height: 150px;\n  background: #F8FAFC;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.product-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.product-info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.product-sku[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  display: block;\n  margin-bottom: 4px;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1E293B;\n  margin: 0 0 6px;\n  line-height: 1.3;\n}\n.product-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.product-price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #4F46E5;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 12px;\n  background: #DCFCE7;\n  color: #166534;\n}\n.stock-badge.low[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #92400E;\n}\n.stock-badge.out[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #991B1B;\n}\n.btn-add[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background: #4F46E5;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-add[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338CA;\n}\n.btn-add[_ngcontent-%COMP%]:disabled {\n  background: #E2E8F0;\n  color: #94A3B8;\n  cursor: not-allowed;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: #94a3b8;\n  font-size: 14px;\n  text-align: center;\n  max-width: 420px;\n  margin: 0 auto;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "app\\features\\cart\\catalog\\catalog.component.ts", lineNumber: 12 });
})();

// src/app/features/cart/cart-page/cart-page.component.ts
function CartPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 6);
    \u0275\u0275listener("click", function CartPageComponent_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = null);
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0 ", ctx_r1.error, " ");
  }
}
function CartPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando carrito\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CartPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Tu carrito est\xE1 vac\xEDo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "A\xF1ade recambios desde el cat\xE1logo para comenzar tu pedido.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 11);
    \u0275\u0275text(8, "Ir al cat\xE1logo");
    \u0275\u0275elementEnd()();
  }
}
function CartPageComponent_div_4_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 44);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r5.product_image, \u0275\u0275sanitizeUrl)("alt", item_r5.product_name);
  }
}
function CartPageComponent_div_4_div_7_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Ref: ", item_r5.product_sku, " ");
  }
}
function CartPageComponent_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275template(2, CartPageComponent_div_4_div_7_img_2_Template, 1, 2, "img", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "p", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CartPageComponent_div_4_div_7_p_6_Template, 2, 1, "p", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 38)(8, "span", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 40)(11, "button", 41);
    \u0275\u0275listener("click", function CartPageComponent_div_4_div_7_Template_button_click_11_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(item_r5, item_r5.quantity - 1));
    });
    \u0275\u0275text(12, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 41);
    \u0275\u0275listener("click", function CartPageComponent_div_4_div_7_Template_button_click_15_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(item_r5, item_r5.quantity + 1));
    });
    \u0275\u0275text(16, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 43);
    \u0275\u0275listener("click", function CartPageComponent_div_4_div_7_Template_button_click_17_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeItem(item_r5));
    });
    \u0275\u0275text(18, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("updating", ctx_r1.updatingItemId === item_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r5.product_image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.product_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.product_sku);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(item_r5.subtotal));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", item_r5.quantity <= 1 || ctx_r1.updatingItemId === item_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.updatingItemId === item_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.updatingItemId === item_r5.id);
  }
}
function CartPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "span", 15);
    \u0275\u0275text(4, "Tu Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CartPageComponent_div_4_div_7_Template, 19, 10, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18)(9, "div", 19)(10, "h3", 20);
    \u0275\u0275text(11, "Resumen del Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "div", 21);
    \u0275\u0275elementStart(13, "div", 22)(14, "span", 23);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 24);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 22)(19, "span", 23);
    \u0275\u0275text(20, "IVA (21%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 24);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 21);
    \u0275\u0275elementStart(24, "div", 25)(25, "span", 26);
    \u0275\u0275text(26, "Total incl. IVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 27);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 28);
    \u0275\u0275listener("click", function CartPageComponent_div_4_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.proceedToCheckout());
    });
    \u0275\u0275text(30, " Proceder al Pago \u2192 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 29)(32, "span", 30);
    \u0275\u0275text(33, "\u{1F6E1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 31);
    \u0275\u0275text(35, "Pago 100% seguro con cifrado SSL");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.cart.item_count, " art\xEDculos");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cart.items)("ngForTrackBy", ctx_r1.trackByItemId);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Subtotal (", ctx_r1.cart.item_count, " uds.)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(ctx_r1.cart.subtotal));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(ctx_r1.cart.tax));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(ctx_r1.cart.total));
  }
}
var CartPageComponent = class _CartPageComponent {
  constructor(cartService, router) {
    this.cartService = cartService;
    this.router = router;
    this.cart = null;
    this.loading = true;
    this.error = null;
    this.updatingItemId = null;
  }
  // Carga el carrito al iniciar el componente
  ngOnInit() {
    this.loadCart();
  }
  // Métodos para manejar el carrito: cargar, actualizar cantidad, eliminar, vaciar y proceder al checkout
  loadCart() {
    this.loading = true;
    this.cartService.getCart().subscribe({
      next: (res) => {
        this.cart = res.data;
        this.loading = false;
      },
      error: () => {
        this.error = "No se pudo cargar el carrito. Int\xE9ntalo de nuevo.";
        this.loading = false;
      }
    });
  }
  // Actualiza la cantidad de un producto en el carrito, con validación de rango
  updateQuantity(item, newQty) {
    if (newQty < 1 || newQty > 99)
      return;
    this.updatingItemId = item.id;
    this.cartService.updateItem(item.id, { quantity: newQty }).subscribe({
      next: () => this.loadCart(),
      error: (err) => {
        this.error = err.error?.message ?? "Error al actualizar la cantidad.";
        this.updatingItemId = null;
      }
    });
  }
  // Elimina un producto del carrito
  removeItem(item) {
    this.updatingItemId = item.id;
    this.cartService.removeItem(item.id).subscribe({
      next: () => this.loadCart(),
      error: () => {
        this.error = "Error al eliminar el producto.";
        this.updatingItemId = null;
      }
    });
  }
  // Vacía todo el carrito con confirmación del usuario
  clearCart() {
    if (!confirm("\xBFVaciar todo el carrito?"))
      return;
    this.cartService.clearCart().subscribe({
      next: () => this.loadCart()
    });
  }
  // Navega a la página de checkout
  proceedToCheckout() {
    this.router.navigate(["/recambios/checkout"]);
  }
  // Formatea un número como precio en euros
  formatPrice(amount) {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR"
    }).format(amount);
  }
  // Función de trackBy para optimizar la renderización de la lista de productos en el carrito
  trackByItemId(_, item) {
    return item.id;
  }
  static {
    this.\u0275fac = function CartPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartPageComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartPageComponent, selectors: [["app-cart-page"]], decls: 5, vars: 4, consts: [[1, "cart-page"], ["class", "alert-error", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "cart-layout", 4, "ngIf"], [1, "alert-error"], [1, "close-btn", 3, "click"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], ["routerLink", "/recambios", 1, "btn-primary"], [1, "cart-layout"], [1, "cart-col"], [1, "cart-header"], [1, "cart-title"], [1, "cart-badge"], ["class", "cart-item", 3, "updating", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "summary-col"], [1, "summary-card"], [1, "summary-title"], [1, "divider"], [1, "sum-row"], [1, "sum-label"], [1, "sum-value"], [1, "sum-row", "total-row"], [1, "total-label"], [1, "total-amount"], [1, "btn-checkout", 3, "click"], [1, "ssl-row"], [1, "ssl-icon"], [1, "ssl-text"], [1, "cart-item"], [1, "item-thumb"], [3, "src", "alt", 4, "ngIf"], [1, "item-info"], [1, "item-name"], ["class", "item-ref", 4, "ngIf"], [1, "item-right"], [1, "item-price"], [1, "qty-box"], [1, "qty-btn", 3, "click", "disabled"], [1, "qty-num"], ["title", "Eliminar", 1, "btn-remove", 3, "click", "disabled"], [3, "src", "alt"], [1, "item-ref"]], template: function CartPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, CartPageComponent_div_1_Template, 4, 1, "div", 1)(2, CartPageComponent_div_2_Template, 4, 0, "div", 2)(3, CartPageComponent_div_3_Template, 9, 0, "div", 3)(4, CartPageComponent_div_4_Template, 36, 7, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && (!ctx.cart || ctx.cart.items.length === 0));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.cart && ctx.cart.items.length > 0);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.cart-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #F8FAFC;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  border-radius: 8px;\n  padding: 12px 16px;\n  color: #DC2626;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  font-size: 16px;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n  color: #64748B;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #E2E8F0;\n  border-top-color: #4F46E5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #0F172A;\n  margin: 0 0 8px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 24px;\n  background: #4F46E5;\n  color: #FFFFFF;\n  border-radius: 8px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #4338CA;\n}\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cart-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.cart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.cart-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.cart-badge[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4F46E5;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  transition: opacity 0.15s;\n}\n.cart-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.cart-item.updating[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.item-thumb[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  border-radius: 6px;\n  background: #EEF2FF;\n  flex-shrink: 0;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.item-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0F172A;\n  margin: 0 0 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item-ref[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  margin: 0;\n}\n.item-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.item-price[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.qty-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  height: 28px;\n  overflow: hidden;\n}\n.qty-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n  font-size: 15px;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.1s;\n}\n.qty-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #F1F5F9;\n}\n.qty-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.qty-num[_ngcontent-%COMP%] {\n  min-width: 28px;\n  text-align: center;\n  font-size: 13px;\n  color: #374151;\n  border-left: 1px solid #E2E8F0;\n  border-right: 1px solid #E2E8F0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94A3B8;\n  cursor: pointer;\n  font-size: 14px;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.1s, color 0.1s;\n}\n.btn-remove[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #FEF2F2;\n  color: #EF4444;\n}\n.summary-col[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 24px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.summary-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 16px;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E2E8F0;\n  margin: 12px 0;\n}\n.sum-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.sum-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748B;\n}\n.sum-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0F172A;\n}\n.total-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.total-amount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #4F46E5;\n}\n.btn-checkout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  background: #4F46E5;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  margin-bottom: 12px;\n}\n.btn-checkout[_ngcontent-%COMP%]:hover {\n  background: #4338CA;\n}\n.ssl-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.ssl-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #22C55E;\n}\n.ssl-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n}\n/*# sourceMappingURL=cart-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartPageComponent, { className: "CartPageComponent", filePath: "app\\features\\cart\\cart-page\\cart-page.component.ts", lineNumber: 11 });
})();

// node_modules/@stripe/stripe-js/dist/index.mjs
var V3_URL = "https://js.stripe.com/v3";
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
var findScript = function findScript2() {
  var scripts = document.querySelectorAll('script[src^="'.concat(V3_URL, '"]'));
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }
    return script;
  }
  return null;
};
var injectScript = function injectScript2(params) {
  var queryString = params && !params.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
  var script = document.createElement("script");
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
  }
  headOrBody.appendChild(script);
  return script;
};
var registerWrapper = function registerWrapper2(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }
  stripe._registerWrapper({
    name: "stripe-js",
    version: "4.6.0",
    startTime
  });
};
var stripePromise = null;
var onErrorListener = null;
var onLoadListener = null;
var onError = function onError2(reject) {
  return function() {
    reject(new Error("Failed to load Stripe.js"));
  };
};
var onLoad = function onLoad2(resolve, reject) {
  return function() {
    if (window.Stripe) {
      resolve(window.Stripe);
    } else {
      reject(new Error("Stripe.js not available"));
    }
  };
};
var loadScript = function loadScript2(params) {
  if (stripePromise !== null) {
    return stripePromise;
  }
  stripePromise = new Promise(function(resolve, reject) {
    if (typeof window === "undefined" || typeof document === "undefined") {
      resolve(null);
      return;
    }
    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }
    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }
    try {
      var script = findScript();
      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      } else if (script && onLoadListener !== null && onErrorListener !== null) {
        var _script$parentNode;
        script.removeEventListener("load", onLoadListener);
        script.removeEventListener("error", onErrorListener);
        (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
        script = injectScript(params);
      }
      onLoadListener = onLoad(resolve, reject);
      onErrorListener = onError(reject);
      script.addEventListener("load", onLoadListener);
      script.addEventListener("error", onErrorListener);
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise["catch"](function(error) {
    stripePromise = null;
    return Promise.reject(error);
  });
};
var initStripe = function initStripe2(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }
  var stripe = maybeStripe.apply(void 0, args);
  registerWrapper(stripe, startTime);
  return stripe;
};
var stripePromise$1;
var loadCalled = false;
var getStripePromise = function getStripePromise2() {
  if (stripePromise$1) {
    return stripePromise$1;
  }
  stripePromise$1 = loadScript(null)["catch"](function(error) {
    stripePromise$1 = null;
    return Promise.reject(error);
  });
  return stripePromise$1;
};
Promise.resolve().then(function() {
  return getStripePromise();
})["catch"](function(error) {
  if (!loadCalled) {
    console.warn(error);
  }
});
var loadStripe = function loadStripe2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  loadCalled = true;
  var startTime = Date.now();
  return getStripePromise().then(function(maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};

// src/app/core/services/stripe.service.ts
var StripeService = class _StripeService {
  constructor() {
    this.stripePromise = loadStripe(environment.stripePublicKey);
  }
  getStripe() {
    return __async(this, null, function* () {
      return this.stripePromise;
    });
  }
  /**
   * Confirma un pago usando un client_secret de Stripe y un CardElement montado.
   * Devuelve el PaymentIntent si el pago es exitoso, o lanza error si falla.
   */
  confirmPayment(clientSecret, cardElement, billingDetails) {
    return __async(this, null, function* () {
      const stripe = yield this.getStripe();
      if (!stripe)
        throw new Error("Stripe no est\xE1 disponible.");
      const { error, paymentIntent } = yield stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: billingDetails
        }
      });
      if (error) {
        throw new Error(error.message ?? "Error al procesar el pago.");
      }
      if (paymentIntent?.status !== "succeeded") {
        throw new Error(`El pago no pudo completarse. Estado: ${paymentIntent?.status}`);
      }
      return { paymentIntentId: paymentIntent.id };
    });
  }
  static {
    this.\u0275fac = function StripeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StripeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StripeService, factory: _StripeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/cart/checkout/checkout.component.ts
var _c0 = ["cardElement"];
function CheckoutComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Preparando el pago...");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0 ", ctx_r0.error, " ");
  }
}
function CheckoutComponent_div_8_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F512} Pagar ", ctx_r0.cart ? ctx_r0.formatPrice(ctx_r0.cart.total) : "", " ");
  }
}
function CheckoutComponent_div_8_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275text(2, " Procesando... ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_8_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.product_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xD7", item_r3.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(item_r3.subtotal));
  }
}
function CheckoutComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "h2", 15);
    \u0275\u0275text(5, "Datos de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "span");
    \u0275\u0275text(8, "Pagos seguros por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, " Stripe");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 17)(12, "div", 18)(13, "label", 19);
    \u0275\u0275text(14, "Direcci\xF3n de entrega ");
    \u0275\u0275elementStart(15, "span", 20);
    \u0275\u0275text(16, "(opcional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_8_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.shippingAddress, $event) || (ctx_r0.shippingAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "label", 19);
    \u0275\u0275text(20, "Datos de la tarjeta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 22);
    \u0275\u0275element(22, "div", 23, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 24);
    \u0275\u0275text(25, " \u{1F512} Tarjeta de prueba: ");
    \u0275\u0275elementStart(26, "code");
    \u0275\u0275text(27, "4242 4242 4242 4242");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " \xB7 Fecha futura \xB7 CVC cualquiera ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 25);
    \u0275\u0275listener("click", function CheckoutComponent_div_8_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitPayment());
    });
    \u0275\u0275template(30, CheckoutComponent_div_8_span_30_Template, 2, 1, "span", 26)(31, CheckoutComponent_div_8_span_31_Template, 3, 0, "span", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 28)(33, "div", 13)(34, "div", 14)(35, "h2", 15);
    \u0275\u0275text(36, "Resumen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29);
    \u0275\u0275template(38, CheckoutComponent_div_8_div_38_Template, 8, 3, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 31)(40, "div", 32)(41, "span");
    \u0275\u0275text(42, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 32)(46, "span");
    \u0275\u0275text(47, "IVA (21%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "div", 33);
    \u0275\u0275elementStart(51, "div", 34)(52, "span");
    \u0275\u0275text(53, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 35);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.shippingAddress);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r0.paymentLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.paymentLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentLoading);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.cart.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.cart.subtotal));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.cart.tax));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.cart.total));
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor(cartService, stripeService, router) {
    this.cartService = cartService;
    this.stripeService = stripeService;
    this.router = router;
    this.cart = null;
    this.loading = true;
    this.paymentLoading = false;
    this.error = null;
    this.successMessage = null;
    this.shippingAddress = "";
    this.stripe = null;
    this.elements = null;
    this.cardElement = null;
    this.clientSecret = null;
    this.paymentIntentId = null;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.loadCartAndInitStripe();
    });
  }
  ngOnDestroy() {
    this.cardElement?.destroy();
  }
  loadCartAndInitStripe() {
    return __async(this, null, function* () {
      this.loading = true;
      this.cartService.getCart().subscribe({
        next: (res) => __async(this, null, function* () {
          this.cart = res.data;
          if (this.cart.items.length === 0) {
            this.router.navigate(["/recambios/carrito"]);
            return;
          }
          this.cartService.createPaymentIntent().subscribe({
            next: (intentRes) => __async(this, null, function* () {
              this.clientSecret = intentRes.client_secret;
              this.paymentIntentId = intentRes.payment_intent_id;
              this.stripe = yield this.stripeService.getStripe();
              if (this.stripe) {
                this.elements = this.stripe.elements();
                this.cardElement = this.elements.create("card", {
                  style: {
                    base: {
                      fontFamily: "Inter, Arial, sans-serif",
                      fontSize: "16px",
                      color: "#1E293B",
                      "::placeholder": { color: "#94A3B8" }
                    }
                  }
                });
                setTimeout(() => {
                  if (this.cardElementRef?.nativeElement) {
                    this.cardElement.mount(this.cardElementRef.nativeElement);
                  }
                }, 0);
              }
              this.loading = false;
            }),
            error: () => {
              this.error = "No se pudo inicializar el pago. Int\xE9ntalo de nuevo.";
              this.loading = false;
            }
          });
        }),
        error: () => {
          this.error = "No se pudo cargar el carrito.";
          this.loading = false;
        }
      });
    });
  }
  submitPayment() {
    return __async(this, null, function* () {
      if (!this.stripe || !this.cardElement || !this.clientSecret)
        return;
      this.paymentLoading = true;
      this.error = null;
      try {
        const { error, paymentIntent } = yield this.stripe.confirmCardPayment(this.clientSecret, {
          payment_method: {
            card: this.cardElement
          }
        });
        if (error)
          throw new Error(error.message ?? "Error al procesar el pago.");
        if (paymentIntent?.status !== "succeeded") {
          throw new Error("El pago no pudo completarse.");
        }
        this.cartService.createOrder(paymentIntent.id, this.shippingAddress).subscribe({
          next: (res) => {
            this.router.navigate(["/pedidos", res.data.id], {
              queryParams: { success: true }
            });
          },
          error: () => {
            this.error = "El pago se proces\xF3 correctamente pero hubo un error al registrar el pedido. Contacta con soporte.";
            this.paymentLoading = false;
          }
        });
      } catch (err) {
        this.error = err.message;
        this.paymentLoading = false;
      }
    });
  }
  formatPrice(amount) {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR"
    }).format(amount);
  }
  goBack() {
    this.router.navigate(["/recambios/carrito"]);
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(StripeService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], viewQuery: function CheckoutComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cardElementRef = _t.first);
      }
    }, decls: 9, vars: 3, consts: [["cardElement", ""], [1, "page-wrapper"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "page-title"], ["class", "loading-state", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "checkout-layout", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "alert", "alert-error"], [1, "checkout-layout"], [1, "payment-col"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "stripe-badge"], [1, "card-body"], [1, "form-group"], [1, "form-label"], [1, "optional"], ["type", "text", "placeholder", "Ej: Calle Industrial 5, Nave A, 28000 Madrid", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "stripe-card-container"], ["id", "card-element"], [1, "form-hint"], [1, "btn-pay", 3, "click", "disabled"], [4, "ngIf"], ["class", "loading-text", 4, "ngIf"], [1, "summary-col"], [1, "summary-items"], ["class", "summary-item", 4, "ngFor", "ngForOf"], [1, "summary-footer"], [1, "summary-row"], [1, "summary-divider"], [1, "summary-row", "total-row"], [1, "total-amount"], [1, "loading-text"], [1, "spinner-sm"], [1, "summary-item"], [1, "item-info"], [1, "item-name"], [1, "item-qty"], [1, "item-subtotal"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        \u0275\u0275text(3, "\u2190 Volver al carrito");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 4);
        \u0275\u0275text(5, "Confirmar Pago");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, CheckoutComponent_div_6_Template, 4, 0, "div", 5)(7, CheckoutComponent_div_7_Template, 2, 1, "div", 6)(8, CheckoutComponent_div_8_Template, 56, 8, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.cart);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 32px;\n  background: #F8FAFC;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 28px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #475569;\n  cursor: pointer;\n  font-size: 14px;\n  padding: 0;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  color: #4F46E5;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: #1E293B;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n  color: #475569;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #E2E8F0;\n  border-top-color: #4F46E5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #DC2626;\n  border: 1px solid #FECACA;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid #E2E8F0;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1E293B;\n  margin: 0;\n}\n.stripe-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1E293B;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #94A3B8;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #1E293B;\n  background: #F8FAFC;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n}\n.stripe-card-container[_ngcontent-%COMP%] {\n  padding: 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #F8FAFC;\n  transition: border-color 0.15s;\n}\n.stripe-card-container[_ngcontent-%COMP%]:focus-within {\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n}\n.form-hint[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 12px;\n  color: #94A3B8;\n}\n.form-hint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-family: monospace;\n  color: #1E293B;\n}\n.btn-pay[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  background: #4F46E5;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.btn-pay[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2d22e0;\n}\n.btn-pay[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #FFFFFF;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.summary-items[_ngcontent-%COMP%] {\n  padding: 16px 24px 0;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.summary-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.item-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1E293B;\n}\n.item-qty[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n  background: #F8FAFC;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.item-subtotal[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.summary-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px 24px;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  color: #475569;\n  margin-bottom: 10px;\n}\n.summary-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E2E8F0;\n  margin: 10px 0;\n}\n.total-row[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1E293B;\n  font-size: 15px;\n}\n.total-amount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #4F46E5;\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "app\\features\\cart\\checkout\\checkout.component.ts", lineNumber: 14 });
})();

// src/app/features/cart/cart.module.ts
var routes = [
  { path: "", component: CatalogComponent },
  // /recambios         → catálogo
  { path: "carrito", component: CartPageComponent },
  // /recambios/carrito → carrito
  { path: "checkout", component: CheckoutComponent }
  // /recambios/checkout → checkout
];
var CartModule = class _CartModule {
  static {
    this.\u0275fac = function CartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CartModule });
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
  CartModule
};
//# sourceMappingURL=chunk-CHDIEWZT.js.map
