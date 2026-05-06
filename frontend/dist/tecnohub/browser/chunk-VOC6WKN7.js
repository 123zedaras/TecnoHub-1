import {
  environment
} from "./chunk-NW4XVQFF.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Y4GLGG7Z.js";

// src/app/core/services/product.service.ts
var ProductService = class _ProductService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/products`;
  }
  /**
   * GET /api/products
   * El backend acepta opcionalmente ?search= para filtrar por nombre o SKU.
   */
  getProducts(search) {
    const q = search?.trim() ?? "";
    let params = new HttpParams();
    if (q.length > 0) {
      params = params.set("search", q);
    }
    return this.http.get(this.apiUrl, { params });
  }
  getProduct(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function ProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProductService
};
//# sourceMappingURL=chunk-VOC6WKN7.js.map
