import {
  ProductService
} from "./chunk-VOC6WKN7.js";
import {
  CartService,
  GuestCartStorageService
} from "./chunk-J4UNXGQC.js";
import {
  environment
} from "./chunk-NW4XVQFF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-B2JNEFE6.js";
import {
  BrowserModule,
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  concatMap,
  inject,
  map,
  platformBrowser,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Y4GLGG7Z.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, cartService) {
    this.http = http;
    this.cartService = cartService;
    this.tokenKey = "auth_token";
    this.userKey = "auth_user";
    this.apiUrl = environment.apiUrl;
  }
  isAuthenticated() {
    const token = localStorage.getItem(this.tokenKey);
    return !!token && token.length > 0;
  }
  getUser() {
    const raw = localStorage.getItem(this.userKey);
    return raw ? JSON.parse(raw) : null;
  }
  setToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(tap((res) => {
      localStorage.setItem(this.tokenKey, res.token);
      localStorage.setItem(this.userKey, JSON.stringify(res.user));
    }));
  }
  register(name, email, password) {
    return this.http.post(`${this.apiUrl}/auth/register`, { name, email, password }).pipe(tap((res) => {
      localStorage.setItem(this.tokenKey, res.token);
      localStorage.setItem(this.userKey, JSON.stringify(res.user));
    }));
  }
  logout() {
    return this.http.post(`${this.apiUrl}/auth/logout`, {}).pipe(tap(() => this.clearSession()));
  }
  completeLoginWithGuestCartMerge(token) {
    this.setToken(token);
    return this.cartService.mergeGuestCartFromStorage().pipe(concatMap((info) => this.cartService.getCart().pipe(map(() => info))));
  }
  clearSession() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(CartService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/guards/layout-match.guards.ts
var guestLayoutMatch = () => {
  return !inject(AuthService).isAuthenticated();
};
var authLayoutMatch = () => {
  return inject(AuthService).isAuthenticated();
};

// src/app/layout/sidebar/sidebar.component.ts
function SidebarComponent_a_11__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 22);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_a_11__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 23);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_a_11__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 24)(2, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_a_11__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 26)(2, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_a_11__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 28);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_a_11__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_a_11__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 30);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18);
    \u0275\u0275template(1, SidebarComponent_a_11__svg_svg_1_Template, 2, 0, "svg", 19)(2, SidebarComponent_a_11__svg_svg_2_Template, 2, 0, "svg", 19)(3, SidebarComponent_a_11__svg_svg_3_Template, 3, 0, "svg", 19)(4, SidebarComponent_a_11__svg_svg_4_Template, 3, 0, "svg", 19)(5, SidebarComponent_a_11__svg_svg_5_Template, 2, 0, "svg", 19)(6, SidebarComponent_a_11__svg_svg_6_Template, 2, 0, "svg", 19)(7, SidebarComponent_a_11__svg_svg_7_Template, 2, 0, "svg", 19);
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.isActive(item_r1.route));
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.icon === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.icon === "user");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.icon === "docs");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.icon === "software");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.icon === "cart");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.icon === "ticket");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.icon === "scada");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
    this.currentUser = null;
    this.navItems = [
      { label: "Dashboard", route: "/dashboard", icon: "grid" },
      { label: "Mis datos", route: "/mis-datos", icon: "user" },
      { label: "Mi documentaci\xF3n", route: "/mi-documentacion", icon: "docs" },
      { label: "Software", route: "/software", icon: "software" },
      { label: "Recambios", route: "/recambios", icon: "cart" },
      { label: "Incidencias", route: "/incidencias", icon: "ticket" },
      { label: "SCADA", route: "/scada", icon: "scada", roles: ["technician", "admin"] }
    ];
    this.currentUser = this.auth.getUser();
  }
  isActive(route) {
    return this.router.url.startsWith(route);
  }
  logout() {
    this.auth.clearSession();
    void this.router.navigateByUrl("/");
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], decls: 23, vars: 4, consts: [[1, "sidebar"], [1, "sidebar-logo"], [1, "logo-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 2L2 7l10 5 10-5-10-5z", "fill", "#818CF8"], ["d", "M2 17l10 5 10-5", "stroke", "#A5B4FC", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M2 12l10 5 10-5", "stroke", "#C7D2FE", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "logo-text"], [1, "logo-title"], [1, "sidebar-nav"], ["class", "nav-item", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], [1, "user-info"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"], [1, "user-role"], ["type", "button", 1, "sidebar-logout", 3, "click"], [1, "nav-item", 3, "routerLink"], ["class", "nav-icon", "viewBox", "0 0 20 20", "fill", "currentColor", 4, "ngIf"], [1, "nav-label"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "nav-icon"], ["d", "M2 4a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm9 0a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V4zM2 13a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3zm9 0a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3z"], ["d", "M10 2a4 4 0 100 8 4 4 0 000-8zM3 17a7 7 0 1114 0v1H3v-1z"], ["d", "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 1.414L14.586 7H12a1 1 0 01-1-1V3.414z"], ["d", "M7 10h6v1H7v-1zM7 13h6v1H7v-1z"], ["d", "M3 4a2 2 0 012-2h10a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm2 0v7h10V4H5z"], ["d", "M7 15h6a1 1 0 110 2H7a1 1 0 110-2z"], ["d", "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z", "clip-rule", "evenodd"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4)(5, "path", 5)(6, "path", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "div", 7)(8, "span", 8);
        \u0275\u0275text(9, "TecnoHub");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "nav", 9);
        \u0275\u0275template(11, SidebarComponent_a_11_Template, 10, 11, "a", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 14)(17, "span", 15);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 16);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "button", 17);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_21_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(22, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate((tmp_1_0 = ctx.currentUser == null ? null : ctx.currentUser.name == null ? null : (tmp_1_0 = ctx.currentUser.name.charAt(0)) == null ? null : tmp_1_0.toUpperCase()) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "U");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_2_0 = ctx.currentUser == null ? null : ctx.currentUser.name) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "Usuario");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_3_0 = ctx.currentUser == null ? null : ctx.currentUser.role) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "Operario");
      }
    }, dependencies: [NgForOf, NgIf, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 240px;\n  min-width: 240px;\n  height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 240px;\n  height: 100%;\n  background: #0b1120;\n  overflow: hidden;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 20px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: rgba(99, 102, 241, 0.25);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.logo-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.logo-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 0.01em;\n}\n.logo-subtitle[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n  color: #CBD5E1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 16px 12px;\n  overflow-y: auto;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 8px;\n  color: #CBD5E1;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background 150ms ease, color 150ms ease;\n  position: relative;\n  cursor: pointer;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #334155;\n  color: #FFFFFF;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #4F46E5;\n  color: #FFFFFF;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  color: #CBD5E1;\n  transition: color 150ms ease;\n}\n.nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 16px 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background 150ms ease;\n  cursor: pointer;\n}\n.user-info[_ngcontent-%COMP%]:hover {\n  background: #334155;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #4F46E5;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #FFFFFF;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #CBD5E1;\n}\n.sidebar-logout[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 8px 10px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 8px;\n  background: transparent;\n  color: #CBD5E1;\n  font-size: 12px;\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n  transition:\n    background 150ms ease,\n    color 150ms ease,\n    border-color 150ms ease;\n}\n.sidebar-logout[_ngcontent-%COMP%]:hover {\n  background: #334155;\n  color: #FFFFFF;\n  border-color: rgba(255, 255, 255, 0.12);\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "app\\layout\\sidebar\\sidebar.component.ts", lineNumber: 17 });
})();

// src/app/layout/authenticated-layout/authenticated-layout.component.ts
var AuthenticatedLayoutComponent = class _AuthenticatedLayoutComponent {
  static {
    this.\u0275fac = function AuthenticatedLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthenticatedLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthenticatedLayoutComponent, selectors: [["app-authenticated-layout"]], decls: 4, vars: 0, consts: [[1, "app-shell"], [1, "main-content"]], template: function AuthenticatedLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "main", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterOutlet, SidebarComponent], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  width: 100%;\n}\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow-y: auto;\n  background: #ffffff;\n}\n/*# sourceMappingURL=authenticated-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthenticatedLayoutComponent, { className: "AuthenticatedLayoutComponent", filePath: "app\\layout\\authenticated-layout\\authenticated-layout.component.ts", lineNumber: 9 });
})();

// src/app/layout/public-layout/public-layout.component.ts
function PublicLayoutComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.guestCart.guestUnitCount());
  }
}
function PublicLayoutComponent_p_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1, " No has a\xF1adido ning\xFAn art\xEDculo a\xFAn. ");
    \u0275\u0275elementEnd();
  }
}
function PublicLayoutComponent_ul_31_li_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.lineSubtotal(line_r2)));
  }
}
function PublicLayoutComponent_ul_31_li_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PublicLayoutComponent_ul_31_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 53)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PublicLayoutComponent_ul_31_li_1_span_5_Template, 2, 1, "span", 56)(6, PublicLayoutComponent_ul_31_li_1_span_6_Template, 2, 0, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.displayLineName(line_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xD7", line_r2.quantity, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", line_r2.unit_price != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", line_r2.unit_price == null);
  }
}
function PublicLayoutComponent_ul_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 51);
    \u0275\u0275template(1, PublicLayoutComponent_ul_31_li_1_Template, 7, 4, "li", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.guestCart.guestLines())("ngForTrackBy", ctx_r0.trackByProductId);
  }
}
function PublicLayoutComponent_a_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("click", function PublicLayoutComponent_a_32_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCartDropdown());
    });
    \u0275\u0275text(1, "Ver cesta");
    \u0275\u0275elementEnd();
  }
}
function PublicLayoutComponent_nav_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 61)(1, "a", 62);
    \u0275\u0275listener("click", function PublicLayoutComponent_nav_39_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeMobileNav());
    });
    \u0275\u0275text(2, "Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 63);
    \u0275\u0275listener("click", function PublicLayoutComponent_nav_39_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeMobileNav());
    });
    \u0275\u0275text(4, "Cesta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 64);
    \u0275\u0275listener("click", function PublicLayoutComponent_nav_39_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeMobileNav());
    });
    \u0275\u0275text(6, "Software");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 65);
    \u0275\u0275listener("click", function PublicLayoutComponent_nav_39_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeMobileNav());
    });
    \u0275\u0275text(8, "Documentaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 66);
    \u0275\u0275listener("click", function PublicLayoutComponent_nav_39_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeMobileNav());
    });
    \u0275\u0275text(10, "FAQ");
    \u0275\u0275elementEnd()();
  }
}
var PublicLayoutComponent = class _PublicLayoutComponent {
  /** Expuesto como `readonly` para usar guestCart.guestLines() y guestUnitCount() en la plantilla. */
  constructor(guestCart) {
    this.guestCart = guestCart;
    this.mobileNavOpen = false;
    this.cartDropdownOpen = false;
  }
  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
    if (this.mobileNavOpen) {
      this.cartDropdownOpen = false;
    }
  }
  closeMobileNav() {
    this.mobileNavOpen = false;
  }
  toggleCartDropdown(event) {
    event?.stopPropagation();
    this.cartDropdownOpen = !this.cartDropdownOpen;
    if (this.cartDropdownOpen) {
      this.mobileNavOpen = false;
    }
  }
  /** Tras navegar a «Ver cesta» cerramos el desplegable para no dejar UI flotante encima de la nueva ruta. */
  closeCartDropdown() {
    this.cartDropdownOpen = false;
  }
  lineSubtotal(line) {
    if (line.unit_price == null) {
      return 0;
    }
    return line.unit_price * line.quantity;
  }
  formatPrice(amount) {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR"
    }).format(amount);
  }
  displayLineName(line) {
    return line.product_name?.trim() || `Producto #${line.product_id}`;
  }
  trackByProductId(_, line) {
    return line.product_id;
  }
  onDocumentClick(event) {
    const el = event.target;
    if (this.mobileNavOpen && !el.closest(".public-topnav")) {
      this.mobileNavOpen = false;
    }
    if (this.cartDropdownOpen && !el.closest(".public-cart-wrap")) {
      this.cartDropdownOpen = false;
    }
  }
  onEscape() {
    this.mobileNavOpen = false;
    this.cartDropdownOpen = false;
  }
  static {
    this.\u0275fac = function PublicLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicLayoutComponent)(\u0275\u0275directiveInject(GuestCartStorageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLayoutComponent, selectors: [["app-public-layout"]], hostBindings: function PublicLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function PublicLayoutComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument)("keydown.escape", function PublicLayoutComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 91, vars: 13, consts: [[1, "public-shell"], [1, "public-topnav"], [1, "public-topnav__inner"], [1, "public-topnav__left"], ["routerLink", "/", 1, "public-brand"], [1, "public-topnav__center"], ["aria-label", "Secciones principales", 1, "public-topnav__desktop-nav"], ["routerLink", "/productos", "routerLinkActive", "public-navlink--active", 1, "public-navlink"], ["routerLink", "/", "fragment", "software", 1, "public-navlink"], ["routerLink", "/", "fragment", "documentacion", 1, "public-navlink"], ["routerLink", "/", "fragment", "faq", 1, "public-navlink"], ["type", "button", "aria-controls", "public-mobile-menu", "aria-label", "Men\xFA de secciones", 1, "public-menu-toggle", 3, "click"], ["aria-hidden", "true", 1, "public-menu-toggle__bar"], [1, "public-topnav__right"], [1, "public-cart-wrap"], ["type", "button", "aria-haspopup", "true", "aria-controls", "public-cart-panel", "aria-label", "Cesta", "title", "Ver cesta", 1, "public-iconbtn", "public-cart-trigger", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["class", "public-cart-trigger__badge", 4, "ngIf"], ["id", "public-cart-panel", "role", "region", "aria-label", "Resumen de la cesta", 1, "public-cart-panel", 3, "click"], [1, "public-cart-panel__inner"], ["class", "public-cart-empty", 4, "ngIf"], ["class", "public-cart-list", 4, "ngIf"], ["routerLink", "/cesta", "class", "public-cart-cta", 3, "click", 4, "ngIf"], ["routerLink", "/login", 1, "public-profilebtn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "public-profilebtn__icon"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["id", "public-mobile-menu", "class", "public-mobile-dropdown", "aria-label", "Secciones principales", 4, "ngIf"], [1, "public-outlet-wrap"], ["aria-label", "Pie de p\xE1gina principal", 1, "public-footer"], [1, "public-footer__inner"], [1, "public-footer__brand"], [1, "public-footer__logo"], [1, "public-footer__tagline"], ["aria-hidden", "true", 1, "public-footer__visual"], [1, "public-footer__plate", "public-footer__plate--one"], [1, "public-footer__plate", "public-footer__plate--two"], [1, "public-footer__plate", "public-footer__plate--three"], [1, "public-footer__columns"], [1, "public-footer__column"], ["routerLink", "/"], [1, "public-footer__bottom"], ["aria-label", "Redes sociales", 1, "public-footer__social"], ["routerLink", "/", "aria-label", "Instagram"], ["routerLink", "/", "aria-label", "LinkedIn"], ["routerLink", "/", "aria-label", "YouTube"], [1, "public-cart-trigger__badge"], [1, "public-cart-empty"], [1, "public-cart-list"], ["class", "public-cart-line", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "public-cart-line"], [1, "public-cart-line__name"], [1, "public-cart-line__qty"], ["class", "public-cart-line__price", 4, "ngIf"], ["class", "public-cart-line__price public-cart-line__price--muted", 4, "ngIf"], [1, "public-cart-line__price"], [1, "public-cart-line__price", "public-cart-line__price--muted"], ["routerLink", "/cesta", 1, "public-cart-cta", 3, "click"], ["id", "public-mobile-menu", "aria-label", "Secciones principales", 1, "public-mobile-dropdown"], ["routerLink", "/productos", "routerLinkActive", "public-mobile-dropdown__link--active", 1, "public-mobile-dropdown__link", 3, "click"], ["routerLink", "/cesta", 1, "public-mobile-dropdown__link", 3, "click"], ["routerLink", "/", "fragment", "software", 1, "public-mobile-dropdown__link", 3, "click"], ["routerLink", "/", "fragment", "documentacion", 1, "public-mobile-dropdown__link", 3, "click"], ["routerLink", "/", "fragment", "faq", 1, "public-mobile-dropdown__link", 3, "click"]], template: function PublicLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275text(5, "TecnoHub");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "nav", 6)(8, "a", 7);
        \u0275\u0275text(9, "Productos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 8);
        \u0275\u0275text(11, "Software");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 9);
        \u0275\u0275text(13, "Documentaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 10);
        \u0275\u0275text(15, "FAQ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275listener("click", function PublicLayoutComponent_Template_button_click_16_listener($event) {
          ctx.toggleMobileNav();
          return $event.stopPropagation();
        });
        \u0275\u0275element(17, "span", 12)(18, "span", 12)(19, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "button", 15);
        \u0275\u0275listener("click", function PublicLayoutComponent_Template_button_click_22_listener($event) {
          return ctx.toggleCartDropdown($event);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(23, "svg", 16);
        \u0275\u0275element(24, "circle", 17)(25, "circle", 18)(26, "path", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, PublicLayoutComponent_span_27_Template, 2, 1, "span", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(28, "div", 21);
        \u0275\u0275listener("click", function PublicLayoutComponent_Template_div_click_28_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(29, "div", 22);
        \u0275\u0275template(30, PublicLayoutComponent_p_30_Template, 2, 0, "p", 23)(31, PublicLayoutComponent_ul_31_Template, 2, 2, "ul", 24)(32, PublicLayoutComponent_a_32_Template, 2, 0, "a", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(34, "svg", 27);
        \u0275\u0275element(35, "path", 28)(36, "circle", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38, "Iniciar sesi\xF3n");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(39, PublicLayoutComponent_nav_39_Template, 11, 0, "nav", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "main", 31);
        \u0275\u0275element(41, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "footer", 32)(43, "div", 33)(44, "div", 34)(45, "div", 35);
        \u0275\u0275text(46, "TECNOHUB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "p", 36);
        \u0275\u0275text(48, " Espacio para una breve descripci\xF3n de marca o propuesta de valor. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 37);
        \u0275\u0275element(50, "span", 38)(51, "span", 39)(52, "span", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 41)(54, "section", 42)(55, "h3");
        \u0275\u0275text(56, "Contacto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p");
        \u0275\u0275text(58, "Tel: +34 XXX XXX XXX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p");
        \u0275\u0275text(60, "WhatsApp: +34 XXX XXX XXX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p");
        \u0275\u0275text(62, "Email: ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "section", 42)(64, "h3");
        \u0275\u0275text(65, "Horario");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "p");
        \u0275\u0275text(67, "Lunes a Jueves: 08:00 - 18:00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p");
        \u0275\u0275text(69, "Viernes: 08:00 - 15:00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "p");
        \u0275\u0275text(71, "Soporte: 24/7 (placeholder)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "section", 42)(73, "h3");
        \u0275\u0275text(74, "Enlaces");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "a", 43);
        \u0275\u0275text(76, "Aviso legal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "a", 43);
        \u0275\u0275text(78, "Pol\xEDtica de privacidad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "a", 43);
        \u0275\u0275text(80, "Condiciones de uso");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(81, "div", 44)(82, "span");
        \u0275\u0275text(83, "2026 \xA9 TecnoHub. Todos los derechos reservados.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 45)(85, "a", 46);
        \u0275\u0275text(86, "IG");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "a", 47);
        \u0275\u0275text(88, "IN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "a", 48);
        \u0275\u0275text(90, "YT");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275classProp("public-menu-toggle--open", ctx.mobileNavOpen);
        \u0275\u0275attribute("aria-expanded", ctx.mobileNavOpen);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("public-cart-wrap--open", ctx.cartDropdownOpen);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-expanded", ctx.cartDropdownOpen);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.guestCart.guestUnitCount() > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("public-cart-panel--visible", ctx.cartDropdownOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.guestCart.guestLines().length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.guestCart.guestLines().length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.guestCart.guestLines().length > 0);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.mobileNavOpen);
      }
    }, dependencies: [NgForOf, NgIf, RouterOutlet, RouterLink, RouterLinkActive], styles: ['@charset "UTF-8";\n\n\n\n.public-shell[_ngcontent-%COMP%] {\n  --public-bg: #ffffff;\n  --public-surface: #ffffff;\n  --public-surface-soft: #1a2438;\n  --public-border: rgba(11, 17, 32, 0.25);\n  --public-text: #0f172a;\n  --public-text-muted: #5b6b88;\n  --public-accent: #0b1120;\n  --public-accent-hover: #ffffff;\n  --public-accent-soft: rgba(255, 255, 255, 0.12);\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--public-bg);\n  color: var(--public-text);\n}\n.public-topnav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  background: rgba(10, 18, 36, 0.92);\n  backdrop-filter: blur(8px);\n  border-bottom: 1px solid #1e3158;\n  box-shadow: 0 10px 26px rgba(2, 6, 23, 0.35);\n}\n.public-topnav__inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.public-topnav__left[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.public-topnav__center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  min-width: 0;\n}\n.public-topnav__desktop-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.public-menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  border: 1px solid #2e4578;\n  border-radius: var(--radius, 8px);\n  background: #0f1b34;\n  color: #e7efff;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.public-menu-toggle[_ngcontent-%COMP%]:hover {\n  border-color: #ffffff;\n  background: #142444;\n}\n.public-menu-toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--public-accent);\n  outline-offset: 2px;\n}\n.public-menu-toggle__bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 18px;\n  height: 2px;\n  border-radius: 1px;\n  background: currentColor;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n}\n.public-menu-toggle--open[_ngcontent-%COMP%]   .public-menu-toggle__bar[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.public-menu-toggle--open[_ngcontent-%COMP%]   .public-menu-toggle__bar[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.public-menu-toggle--open[_ngcontent-%COMP%]   .public-menu-toggle__bar[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n.public-mobile-dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: -1px;\n  padding: 4px 0 12px;\n  background: rgba(10, 18, 36, 0.98);\n  backdrop-filter: blur(8px);\n  border-top: 1px solid #1e3158;\n  border-bottom: 1px solid #1e3158;\n  box-shadow: 0 12px 24px rgba(2, 6, 23, 0.45);\n}\n.public-mobile-dropdown__link[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #e7efff;\n  text-decoration: none;\n  border-top: 1px solid #1e3158;\n}\n.public-mobile-dropdown__link[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.public-mobile-dropdown__link[_ngcontent-%COMP%]:hover, \n.public-mobile-dropdown__link[_ngcontent-%COMP%]:focus-visible {\n  background: var(--public-surface-soft);\n  color: #ffffff;\n}\n.public-mobile-dropdown__link.public-mobile-dropdown__link--active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: var(--public-accent-soft);\n}\n@media (max-width: 768px) {\n  .public-topnav__desktop-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .public-menu-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.public-topnav__right[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.public-cart-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.public-cart-trigger[_ngcontent-%COMP%] {\n  position: relative;\n}\n.public-cart-trigger__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  background: var(--public-accent);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 18px;\n  text-align: center;\n  pointer-events: none;\n}\n.public-cart-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 8px);\n  width: min(340px, 100vw - 32px);\n  z-index: 60;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-6px);\n  transition:\n    opacity 0.18s ease,\n    transform 0.18s ease,\n    visibility 0.18s;\n  pointer-events: none;\n  max-height: 0;\n  overflow: hidden;\n}\n.public-cart-panel--visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n  pointer-events: auto;\n  max-height: min(380px, 70vh);\n  overflow: visible;\n}\n.public-cart-panel__inner[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: 12px;\n  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);\n  padding: 14px 14px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.public-cart-empty[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px 4px 4px;\n  font-size: 14px;\n  color: #5b6b88;\n  line-height: 1.45;\n}\n.public-cart-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 220px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.public-cart-line[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  gap: 8px 10px;\n  align-items: baseline;\n  padding: 10px 0;\n  border-bottom: 1px solid #e7efff;\n  font-size: 13px;\n}\n.public-cart-line[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n  padding-bottom: 4px;\n}\n.public-cart-line__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.public-cart-line__qty[_ngcontent-%COMP%] {\n  color: #5b6b88;\n  font-variant-numeric: tabular-nums;\n}\n.public-cart-line__price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n}\n.public-cart-line__price--muted[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #94a3b8;\n}\n.public-cart-cta[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: var(--public-accent);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  margin-top: 2px;\n  transition: background 0.15s ease;\n  border: 1px solid transparent;\n}\n.public-cart-cta[_ngcontent-%COMP%]:hover {\n  background: var(--public-accent-hover);\n  color: #0b1120;\n  border-color: #0b1120;\n}\n.public-brand[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #e7efff;\n  text-decoration: none;\n}\n.public-brand[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.public-navlink[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: var(--radius, 8px);\n  font-size: 0.9rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #e7efff;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.public-navlink[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background: var(--public-surface-soft);\n}\n.public-navlink.public-navlink--active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: var(--public-accent-soft);\n}\n.public-iconbtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius, 8px);\n  color: #dbe7ff;\n  border: 1px solid var(--public-border);\n  background: var(--public-surface);\n  text-decoration: none;\n  transition:\n    color 0.15s ease,\n    border-color 0.15s ease,\n    background 0.15s ease;\n}\n.public-iconbtn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  border-color: #3f5c93;\n  background: var(--public-surface-soft);\n}\n.public-profilebtn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 40px;\n  padding: 0 14px;\n  border-radius: var(--radius, 8px);\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  background: var(--public-accent);\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.public-profilebtn[_ngcontent-%COMP%]:hover {\n  background: var(--public-accent-hover);\n  color: #0b1120;\n}\n.public-profilebtn__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.public-outlet-wrap[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  width: 100%;\n}\n.public-footer[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  background: #0b1120;\n  color: #e2e8f0;\n}\n.public-footer__inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2.5rem 1rem 2rem;\n  display: grid;\n  grid-template-columns: 1.2fr 1.8fr;\n  gap: 2rem;\n}\n.public-footer__brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.public-footer__logo[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: #fff;\n}\n.public-footer__tagline[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 32ch;\n  line-height: 1.55;\n  color: #94a3b8;\n}\n.public-footer__visual[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n  position: relative;\n  height: 120px;\n}\n.public-footer__plate[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  border-radius: 10px;\n  border: 1px solid rgba(148, 163, 184, 0.25);\n  box-shadow: 0 12px 22px rgba(2, 6, 23, 0.35);\n}\n.public-footer__plate--one[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 90px;\n  bottom: 0;\n  left: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #475569,\n      #334155);\n}\n.public-footer__plate--two[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 80px;\n  bottom: 14px;\n  left: 70px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f766e,\n      #134e4a);\n}\n.public-footer__plate--three[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 74px;\n  bottom: 26px;\n  left: 132px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4c1d95);\n}\n.public-footer__columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(140px, 1fr));\n  gap: 1.5rem;\n}\n.public-footer__column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.public-footer__column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.public-footer__column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 0.45rem;\n  line-height: 1.45;\n  font-size: 0.92rem;\n  color: #cbd5e1;\n  text-decoration: none;\n}\n.public-footer__column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #a5b4fc;\n}\n.public-footer__bottom[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1rem;\n  border-top: 1px solid rgba(148, 163, 184, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  color: #94a3b8;\n  font-size: 0.86rem;\n}\n.public-footer__social[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.public-footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #e2e8f0;\n  text-decoration: none;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.public-footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc;\n  color: #a5b4fc;\n}\n@media (max-width: 640px) {\n  .public-footer__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding-top: 2rem;\n  }\n  .public-footer__columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .public-footer__bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=public-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayoutComponent, { className: "PublicLayoutComponent", filePath: "app\\layout\\public-layout\\public-layout.component.ts", lineNumber: 14 });
})();

// src/app/features/public-home/public-home.component.ts
function PublicHomeComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function PublicHomeComponent_button_15_Template_button_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.slideIndex = i_r2);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("carousel__dot--active", i_r2 === ctx_r2.slideIndex);
    \u0275\u0275attribute("aria-label", "Ir a la diapositiva " + (i_r2 + 1))("aria-selected", i_r2 === ctx_r2.slideIndex);
  }
}
var PublicHomeComponent = class _PublicHomeComponent {
  constructor() {
    this.slides = [
      {
        imageUrl: "https://picsum.photos/id/48/1400/787",
        title: "Control industrial unificado",
        subtitle: "Monitoriza procesos, recambios e incidencias desde un solo panel."
      },
      {
        imageUrl: "https://picsum.photos/id/180/1400/787",
        title: "Datos en tiempo real",
        subtitle: "Integraci\xF3n con SCADA y alertas para tu planta."
      },
      {
        imageUrl: "https://picsum.photos/id/28/1400/787",
        title: "Soporte y documentaci\xF3n",
        subtitle: "Resuelve dudas con FAQs y gu\xEDas pensadas para operarios."
      }
    ];
    this.slideIndex = 0;
  }
  prevSlide() {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }
  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }
  static {
    this.\u0275fac = function PublicHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicHomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicHomeComponent, selectors: [["app-public-home"]], decls: 91, vars: 5, consts: [[1, "home"], ["aria-roledescription", "carrusel", "aria-label", "Destacados", 1, "hero-carousel"], [1, "carousel"], ["type", "button", "aria-label", "Diapositiva anterior", 1, "carousel__arrow", "carousel__arrow--prev", 3, "click"], [1, "carousel__frame"], ["width", "1400", "height", "787", 1, "carousel__image", 3, "src", "alt"], [1, "carousel__caption"], [1, "carousel__title"], [1, "carousel__subtitle"], ["type", "button", "aria-label", "Diapositiva siguiente", 1, "carousel__arrow", "carousel__arrow--next", 3, "click"], ["role", "tablist", "aria-label", "Seleccionar diapositiva", 1, "carousel__dots"], ["type", "button", "class", "carousel__dot", 3, "carousel__dot--active", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Accesos a secciones", 1, "home-section-nav"], [1, "home-section-nav__grid"], ["routerLink", "/", "fragment", "producto", 1, "home-navcard"], [1, "home-navcard__text"], [1, "home-navcard__label"], [1, "home-navcard__title"], [1, "home-navcard__hint"], ["aria-hidden", "true", 1, "home-navcard__iconwrap"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "home-navcard__icon"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], ["routerLink", "/", "fragment", "software", 1, "home-navcard"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["x1", "8", "y1", "21", "x2", "16", "y2", "21"], ["x1", "12", "y1", "17", "x2", "12", "y2", "21"], ["routerLink", "/", "fragment", "documentacion", 1, "home-navcard"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"], ["x1", "8", "y1", "7", "x2", "16", "y2", "7"], ["x1", "8", "y1", "11", "x2", "14", "y2", "11"], ["routerLink", "/", "fragment", "faq", 1, "home-navcard"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["id", "producto", 1, "anchor-block"], ["id", "software", 1, "anchor-block"], ["id", "documentacion", 1, "anchor-block"], ["id", "faq", 1, "anchor-block"], ["type", "button", 1, "carousel__dot", 3, "click"]], template: function PublicHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function PublicHomeComponent_Template_button_click_3_listener() {
          return ctx.prevSlide();
        });
        \u0275\u0275text(4, " \u2039 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275element(6, "img", 5);
        \u0275\u0275elementStart(7, "div", 6)(8, "h1", 7);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "button", 9);
        \u0275\u0275listener("click", function PublicHomeComponent_Template_button_click_12_listener() {
          return ctx.nextSlide();
        });
        \u0275\u0275text(13, " \u203A ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275template(15, PublicHomeComponent_button_15_Template, 1, 4, "button", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "nav", 12)(17, "div", 13)(18, "a", 14)(19, "div", 15)(20, "span", 16);
        \u0275\u0275text(21, "Secci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 17);
        \u0275\u0275text(23, "Producto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 18);
        \u0275\u0275text(25, "Hardware y servicios");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 19);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 20);
        \u0275\u0275element(28, "path", 21)(29, "polyline", 22)(30, "line", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "a", 24)(32, "div", 15)(33, "span", 16);
        \u0275\u0275text(34, "Secci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 17);
        \u0275\u0275text(36, "Software");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 18);
        \u0275\u0275text(38, "Apps e integraciones");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 19);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(40, "svg", 20);
        \u0275\u0275element(41, "rect", 25)(42, "line", 26)(43, "line", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(44, "a", 28)(45, "div", 15)(46, "span", 16);
        \u0275\u0275text(47, "Secci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "span", 17);
        \u0275\u0275text(49, "Documentaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span", 18);
        \u0275\u0275text(51, "Manuales y APIs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 19);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(53, "svg", 20);
        \u0275\u0275element(54, "path", 29)(55, "path", 30)(56, "line", 31)(57, "line", 32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(58, "a", 33)(59, "div", 15)(60, "span", 16);
        \u0275\u0275text(61, "Secci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 17);
        \u0275\u0275text(63, "FAQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "span", 18);
        \u0275\u0275text(65, "Preguntas frecuentes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 19);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(67, "svg", 20);
        \u0275\u0275element(68, "circle", 34)(69, "path", 35)(70, "line", 36);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(71, "section", 37)(72, "h2");
        \u0275\u0275text(73, "Producto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p");
        \u0275\u0275text(75, "Describe aqu\xED tu oferta de hardware o servicios.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "section", 38)(77, "h2");
        \u0275\u0275text(78, "Software");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p");
        \u0275\u0275text(80, "Detalle de aplicaciones, licencias o integraciones.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "section", 39)(82, "h2");
        \u0275\u0275text(83, "Documentaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "p");
        \u0275\u0275text(85, "Manuales, APIs y gu\xEDas de despliegue.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "section", 40)(87, "h2");
        \u0275\u0275text(88, "FAQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "p");
        \u0275\u0275text(90, "Preguntas frecuentes para clientes y operarios.");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("src", ctx.slides[ctx.slideIndex].imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx.slides[ctx.slideIndex].title);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.slides[ctx.slideIndex].title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.slides[ctx.slideIndex].subtitle);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.slides);
      }
    }, dependencies: [NgForOf, RouterLink], styles: ["\n\n.home[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.hero-carousel[_ngcontent-%COMP%] {\n  padding: 24px 16px 8px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 8px;\n}\n.carousel__arrow[_ngcontent-%COMP%] {\n  flex: 0 0 44px;\n  align-self: center;\n  height: 44px;\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: var(--radius, 8px);\n  background: #fff;\n  font-size: 22px;\n  line-height: 1;\n  color: #1e3158;\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.carousel__arrow[_ngcontent-%COMP%]:hover {\n  background: rgba(11, 17, 32, 0.08);\n  border-color: #0b1120;\n}\n.carousel__frame[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  border-radius: var(--radius-lg, 12px);\n  overflow: hidden;\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  background: #fff;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);\n}\n.carousel__image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16/9;\n  object-fit: cover;\n}\n.carousel__caption[_ngcontent-%COMP%] {\n  padding: 20px 24px 24px;\n  text-align: center;\n}\n.carousel__title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e3158;\n}\n.carousel__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #5b6b88;\n}\n.carousel__dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px 0 8px;\n}\n.carousel__dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background: rgba(11, 17, 32, 0.25);\n  cursor: pointer;\n  transition: background 0.15s ease, transform 0.15s ease;\n}\n.carousel__dot--active[_ngcontent-%COMP%] {\n  background: #0b1120;\n  transform: scale(1.15);\n}\n.carousel__dot[_ngcontent-%COMP%]:hover:not(.carousel__dot--active) {\n  background: #93a8cc;\n}\n.home-section-nav[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px 16px 8px;\n}\n.home-section-nav__grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.home-navcard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex: 1 1 calc(25% - 0.75rem);\n  min-width: min(100%, 200px);\n  box-sizing: border-box;\n  padding: 1.125rem 1.25rem;\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: var(--radius-lg, 12px);\n  background: #fff;\n  text-decoration: none;\n  color: inherit;\n  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);\n  transition:\n    border-color 0.15s ease,\n    box-shadow 0.15s ease,\n    transform 0.15s ease;\n}\n.home-navcard[_ngcontent-%COMP%]:hover {\n  border-color: #0b1120;\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.1);\n}\n.home-navcard[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #0b1120;\n  outline-offset: 2px;\n}\n.home-navcard__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.25rem;\n  min-width: 0;\n}\n.home-navcard__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: #5b6b88;\n}\n.home-navcard__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1e3158;\n  line-height: 1.2;\n}\n.home-navcard__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #5b6b88;\n  line-height: 1.35;\n}\n.home-navcard__iconwrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius, 8px);\n  background: rgba(11, 17, 32, 0.1);\n  color: #0b1120;\n}\n.home-navcard__icon[_ngcontent-%COMP%] {\n  display: block;\n}\n.anchor-block[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 48px 16px;\n  scroll-margin-top: 72px;\n}\n.anchor-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.25rem;\n  color: #1e3158;\n}\n.anchor-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5b6b88;\n  line-height: 1.6;\n}\n.anchor-block[_ngcontent-%COMP%]    + .anchor-block[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7efff;\n}\n@media (max-width: 640px) {\n  .carousel[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .carousel__arrow[_ngcontent-%COMP%] {\n    align-self: stretch;\n    width: 100%;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=public-home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicHomeComponent, { className: "PublicHomeComponent", filePath: "app\\features\\public-home\\public-home.component.ts", lineNumber: 15 });
})();

// src/app/features/public-login/public-login.component.ts
function PublicLoginComponent_form_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loginError);
  }
}
function PublicLoginComponent_form_9_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, " El email es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function PublicLoginComponent_form_9_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, " La contrase\xF1a es obligatoria. ");
    \u0275\u0275elementEnd();
  }
}
function PublicLoginComponent_form_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function PublicLoginComponent_form_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLoginSubmit());
    });
    \u0275\u0275template(1, PublicLoginComponent_form_9_div_1_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(2, "label", 8);
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function PublicLoginComponent_form_9_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.loginForm.email, $event) || (ctx_r1.loginForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PublicLoginComponent_form_9_small_5_Template, 2, 0, "small", 10);
    \u0275\u0275elementStart(6, "label", 11);
    \u0275\u0275text(7, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function PublicLoginComponent_form_9_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.loginForm.password, $event) || (ctx_r1.loginForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PublicLoginComponent_form_9_small_9_Template, 2, 0, "small", 10);
    \u0275\u0275elementStart(10, "a", 13);
    \u0275\u0275listener("click", function PublicLoginComponent_form_9_Template_a_click_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onForgotPassword($event));
    });
    \u0275\u0275text(11, "\xBFHas olvidado tu contrase\xF1a?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loginError);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loginForm.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loginSubmitted && !ctx_r1.loginForm.email.trim());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loginForm.password);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loginSubmitted && !ctx_r1.loginForm.password);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Iniciando sesi\xF3n\u2026" : "Iniciar sesi\xF3n", " ");
  }
}
function PublicLoginComponent_form_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.registerError);
  }
}
function PublicLoginComponent_form_10_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, " El email es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function PublicLoginComponent_form_10_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, " El nombre es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function PublicLoginComponent_form_10_small_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, " La contrase\xF1a debe tener al menos 8 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function PublicLoginComponent_form_10_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, " Las contrase\xF1as no coinciden. ");
    \u0275\u0275elementEnd();
  }
}
function PublicLoginComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function PublicLoginComponent_form_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRegisterSubmit());
    });
    \u0275\u0275template(1, PublicLoginComponent_form_10_div_1_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(2, "label", 17);
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function PublicLoginComponent_form_10_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.email, $event) || (ctx_r1.registerForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PublicLoginComponent_form_10_small_5_Template, 2, 0, "small", 10);
    \u0275\u0275elementStart(6, "label", 19);
    \u0275\u0275text(7, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function PublicLoginComponent_form_10_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.name, $event) || (ctx_r1.registerForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PublicLoginComponent_form_10_small_9_Template, 2, 0, "small", 10);
    \u0275\u0275elementStart(10, "label", 21);
    \u0275\u0275text(11, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PublicLoginComponent_form_10_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.password, $event) || (ctx_r1.registerForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PublicLoginComponent_form_10_small_13_Template, 2, 0, "small", 10);
    \u0275\u0275elementStart(14, "label", 23);
    \u0275\u0275text(15, "Repetir contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PublicLoginComponent_form_10_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.confirmPassword, $event) || (ctx_r1.registerForm.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PublicLoginComponent_form_10_small_17_Template, 2, 0, "small", 10);
    \u0275\u0275elementStart(18, "button", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.registerError);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.registerSubmitted && !ctx_r1.registerForm.email.trim());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.registerSubmitted && !ctx_r1.registerForm.name.trim());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.password);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.registerSubmitted && ctx_r1.registerForm.password.length > 0 && ctx_r1.registerForm.password.length < 8);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.passwordsDoNotMatch);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Creando cuenta\u2026" : "Crear cuenta", " ");
  }
}
var PublicLoginComponent = class _PublicLoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.activeTab = "login";
    this.loginForm = { email: "", password: "" };
    this.registerForm = { email: "", name: "", password: "", confirmPassword: "" };
    this.loginSubmitted = false;
    this.registerSubmitted = false;
    this.loading = false;
    this.loginError = null;
    this.registerError = null;
  }
  setTab(tab) {
    this.activeTab = tab;
    this.loginError = null;
    this.registerError = null;
  }
  onLoginSubmit() {
    this.loginSubmitted = true;
    this.loginError = null;
    if (!this.isLoginFormValid)
      return;
    this.loading = true;
    this.auth.login(this.loginForm.email, this.loginForm.password).subscribe({
      next: () => void this.router.navigate(["/dashboard"]),
      error: (err) => {
        this.loginError = err?.error?.message ?? "No se pudo iniciar sesi\xF3n. Comprueba tus datos.";
        this.loading = false;
      }
    });
  }
  onRegisterSubmit() {
    this.registerSubmitted = true;
    this.registerError = null;
    if (!this.isRegisterFormValid)
      return;
    this.loading = true;
    this.auth.register(this.registerForm.name, this.registerForm.email, this.registerForm.password).subscribe({
      next: () => void this.router.navigate(["/dashboard"]),
      error: (err) => {
        this.registerError = err?.error?.message ?? err?.error?.errors?.email?.[0] ?? "No se pudo crear la cuenta. Int\xE9ntalo de nuevo.";
        this.loading = false;
      }
    });
  }
  get isLoginFormValid() {
    return this.loginForm.email.trim().length > 0 && this.loginForm.password.length > 0;
  }
  get isRegisterFormValid() {
    return this.registerForm.email.trim().length > 0 && this.registerForm.name.trim().length > 0 && this.registerForm.password.length >= 8 && this.registerForm.password === this.registerForm.confirmPassword;
  }
  get passwordsDoNotMatch() {
    return this.registerSubmitted && this.registerForm.confirmPassword.length > 0 && this.registerForm.password !== this.registerForm.confirmPassword;
  }
  onForgotPassword(event) {
    event.preventDefault();
  }
  static {
    this.\u0275fac = function PublicLoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicLoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLoginComponent, selectors: [["app-public-login"]], decls: 13, vars: 6, consts: [[1, "auth-shell"], [1, "auth-card"], ["role", "tablist", "aria-label", "Elegir formulario", 1, "tab-actions"], ["type", "button", 1, "tab-btn", 3, "click"], ["class", "auth-form", 3, "ngSubmit", 4, "ngIf"], ["routerLink", "/", 1, "back-link"], [1, "auth-form", 3, "ngSubmit"], ["class", "alert-error", 4, "ngIf"], ["for", "login-email"], ["id", "login-email", "name", "email", "type", "email", "autocomplete", "email", "required", "", 3, "ngModelChange", "ngModel"], ["class", "error", 4, "ngIf"], ["for", "login-password"], ["id", "login-password", "name", "password", "type", "password", "autocomplete", "current-password", "required", "", 3, "ngModelChange", "ngModel"], ["href", "#", 1, "forgot-link", 3, "click"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "alert-error"], [1, "error"], ["for", "register-email"], ["id", "register-email", "name", "email", "type", "email", "autocomplete", "email", "required", "", 3, "ngModelChange", "ngModel"], ["for", "register-name"], ["id", "register-name", "name", "name", "type", "text", "autocomplete", "name", "required", "", 3, "ngModelChange", "ngModel"], ["for", "register-password"], ["id", "register-password", "name", "password", "type", "password", "autocomplete", "new-password", "required", "", 3, "ngModelChange", "ngModel"], ["for", "register-confirm-password"], ["id", "register-confirm-password", "name", "confirmPassword", "type", "password", "autocomplete", "new-password", "required", "", 3, "ngModelChange", "ngModel"]], template: function PublicLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Accede a tu cuenta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
        \u0275\u0275listener("click", function PublicLoginComponent_Template_button_click_5_listener() {
          return ctx.setTab("login");
        });
        \u0275\u0275text(6, " Iniciar sesi\xF3n ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function PublicLoginComponent_Template_button_click_7_listener() {
          return ctx.setTab("register");
        });
        \u0275\u0275text(8, " Reg\xEDstrate ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, PublicLoginComponent_form_9_Template, 14, 7, "form", 4)(10, PublicLoginComponent_form_10_Template, 20, 11, "form", 4);
        \u0275\u0275elementStart(11, "a", 5);
        \u0275\u0275text(12, "\u2190 Volver al inicio");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "login");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "register");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTab === "login");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "register");
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.auth-shell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 2.5rem 1rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: min(100%, 32rem);\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: 14px;\n  padding: 1.5rem;\n  background: #fff;\n  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.08);\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  text-align: center;\n  font-size: 1.5rem;\n  color: #1e3158;\n}\n.tab-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  background: #f8fbff;\n  color: #5b6b88;\n  border-radius: 10px;\n  padding: 0.6rem 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  border-color: #0b1120;\n  background: rgba(11, 17, 32, 0.08);\n  color: #1e3158;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  font-weight: 600;\n  color: #1e3158;\n}\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: 10px;\n  padding: 0.65rem 0.75rem;\n  font-size: 0.95rem;\n  background: #fff;\n  color: #1e3158;\n}\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0b1120;\n  box-shadow: 0 0 0 3px rgba(11, 17, 32, 0.16);\n}\n.forgot-link[_ngcontent-%COMP%], \n.back-link[_ngcontent-%COMP%] {\n  color: #0b1120;\n  text-decoration: none;\n  font-weight: 600;\n}\n.forgot-link[_ngcontent-%COMP%]:hover, \n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  margin-top: 0.65rem;\n  font-size: 0.92rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  margin-top: 0.9rem;\n  border: none;\n  border-radius: 10px;\n  padding: 0.72rem 0.95rem;\n  font-weight: 700;\n  background: #0b1120;\n  color: #fff;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #0b1120;\n  border-color: #0b1120;\n}\n.test-btn[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  border-radius: 10px;\n  padding: 0.72rem 0.95rem;\n  font-weight: 700;\n  background: #fff;\n  color: #0b1120;\n  cursor: pointer;\n  border: 1px solid #0b1120;\n}\n.test-btn[_ngcontent-%COMP%]:hover {\n  background: #0b1120;\n  color: #fff;\n}\n.error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.8rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: inline-block;\n}\n/*# sourceMappingURL=public-login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLoginComponent, { className: "PublicLoginComponent", filePath: "app\\features\\public-login\\public-login.component.ts", lineNumber: 10 });
})();

// src/app/features/public-catalog/public-catalog.component.ts
function PublicCatalogComponent_span_13_Template(rf, ctx) {
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
function PublicCatalogComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function PublicCatalogComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearSearch());
    });
    \u0275\u0275text(1, "Limpiar");
    \u0275\u0275elementEnd();
  }
}
function PublicCatalogComponent_div_23_Template(rf, ctx) {
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
function PublicCatalogComponent_div_24_Template(rf, ctx) {
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
function PublicCatalogComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando cat\xE1logo\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PublicCatalogComponent_div_26_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 44);
  }
  if (rf & 2) {
    const product_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r4.image, \u0275\u0275sanitizeUrl)("alt", product_r4.name);
  }
}
function PublicCatalogComponent_div_26_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "rect", 47)(3, "circle", 48)(4, "path", 49);
    \u0275\u0275elementEnd()();
  }
}
function PublicCatalogComponent_div_26_div_1_p_9_Template(rf, ctx) {
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
function PublicCatalogComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275template(2, PublicCatalogComponent_div_26_div_1_img_2_Template, 1, 2, "img", 34)(3, PublicCatalogComponent_div_26_div_1_div_3_Template, 5, 0, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PublicCatalogComponent_div_26_div_1_p_9_Template, 2, 1, "p", 39);
    \u0275\u0275elementStart(10, "div", 40)(11, "span", 41);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 43);
    \u0275\u0275listener("click", function PublicCatalogComponent_div_26_div_1_Template_button_click_15_listener() {
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.addingProductId === product_r4.id ? "A\xF1adiendo\u2026" : "A\xF1adir a la cesta", " ");
  }
}
function PublicCatalogComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, PublicCatalogComponent_div_26_div_1_Template, 17, 11, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function PublicCatalogComponent_div_27_p_3_Template(rf, ctx) {
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
function PublicCatalogComponent_div_27_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No hay productos en el cat\xE1logo.");
    \u0275\u0275elementEnd();
  }
}
function PublicCatalogComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 52);
    \u0275\u0275element(2, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PublicCatalogComponent_div_27_p_3_Template, 2, 1, "p", 54)(4, PublicCatalogComponent_div_27_ng_template_4_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emptyCatalog_r5 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.lastSearchQuery)("ngIfElse", emptyCatalog_r5);
  }
}
var PublicCatalogComponent = class _PublicCatalogComponent {
  get cartCount() {
    return this.auth.isAuthenticated() ? this.cartService.itemCount() : this.guestCart.guestUnitCount();
  }
  constructor(productService, cartService, auth, guestCart, router) {
    this.productService = productService;
    this.cartService = cartService;
    this.auth = auth;
    this.guestCart = guestCart;
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
        this.error = err.status === 0 ? "No hay conexi\xF3n con el servidor!!" : "No se pudo cargar el cat\xE1logo. Int\xE9ntalo de nuevo.";
        this.loading = false;
      }
    });
  }
  addToCart(product) {
    if (product.stock === 0) {
      return;
    }
    this.addingProductId = product.id;
    if (!this.auth.isAuthenticated()) {
      this.guestCart.addOrMergeLine({
        product_id: product.id,
        quantity: 1,
        product_name: product.name,
        unit_price: product.price
      });
      this.addingProductId = null;
      this.successMessage = `"${product.name}" guardado en tu cesta (inicia sesi\xF3n para sincronizar).`;
      setTimeout(() => this.successMessage = null, 3e3);
      return;
    }
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
  /** El botón cesta lleva a la vista de cesta pública (misma que el icono del header). */
  goToCart() {
    void this.router.navigate(["/cesta"]);
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
    this.\u0275fac = function PublicCatalogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicCatalogComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(GuestCartStorageService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicCatalogComponent, selectors: [["app-public-catalog"]], decls: 28, vars: 8, consts: [["emptyCatalog", ""], [1, "catalog-page", "public-catalog"], [1, "catalog-header"], [1, "catalog-title"], [1, "catalog-subtitle"], ["type", "button", 1, "btn-cart", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["class", "cart-badge", 4, "ngIf"], ["role", "search", "aria-label", "Buscar productos por nombre", 1, "catalog-toolbar"], [1, "catalog-search"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "catalog-search__icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "M21 21l-4.35-4.35"], ["id", "public-catalog-search", "type", "search", "placeholder", "Buscar por nombre de producto\u2026", "autocomplete", "off", 1, "catalog-search__input", 3, "input", "keydown.enter", "value"], ["type", "button", 1, "btn-search", 3, "click"], ["type", "button", "class", "btn-clear-search", 3, "click", 4, "ngIf"], ["class", "alert-success", 4, "ngIf"], ["class", "alert-error", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "product-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "cart-badge"], ["type", "button", 1, "btn-clear-search", 3, "click"], [1, "alert-success"], [1, "alert-error"], [1, "loading-state"], [1, "spinner"], [1, "product-grid"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "product-image"], [3, "src", "alt", 4, "ngIf"], ["class", "product-placeholder", 4, "ngIf"], [1, "product-info"], [1, "product-sku"], [1, "product-name"], ["class", "product-desc", 4, "ngIf"], [1, "product-footer"], [1, "product-price"], [1, "stock-badge"], ["type", "button", 1, "btn-add", 3, "click", "disabled"], [3, "src", "alt"], [1, "product-placeholder"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#CBD5E1", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "3"], ["cx", "12", "cy", "10", "r", "3"], ["d", "M4 20c0-3.31 3.58-6 8-6s8 2.69 8 6"], [1, "product-desc"], [1, "empty-state"], ["width", "56", "height", "56", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#CBD5E1", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], [4, "ngIf", "ngIfElse"]], template: function PublicCatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
        \u0275\u0275text(4, "Cat\xE1logo de productos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Consulta nuestra gran variedad de productos.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function PublicCatalogComponent_Template_button_click_7_listener() {
          return ctx.goToCart();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 6);
        \u0275\u0275element(9, "circle", 7)(10, "circle", 8)(11, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Ver cesta ");
        \u0275\u0275template(13, PublicCatalogComponent_span_13_Template, 2, 1, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 12);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 13);
        \u0275\u0275element(17, "circle", 14)(18, "path", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "input", 16);
        \u0275\u0275listener("input", function PublicCatalogComponent_Template_input_input_19_listener($event) {
          return ctx.onSearchInput($event.target.value);
        })("keydown.enter", function PublicCatalogComponent_Template_input_keydown_enter_19_listener() {
          return ctx.flushSearch();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 17);
        \u0275\u0275listener("click", function PublicCatalogComponent_Template_button_click_20_listener() {
          return ctx.flushSearch();
        });
        \u0275\u0275text(21, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, PublicCatalogComponent_button_22_Template, 2, 0, "button", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, PublicCatalogComponent_div_23_Template, 2, 1, "div", 19)(24, PublicCatalogComponent_div_24_Template, 2, 1, "div", 20)(25, PublicCatalogComponent_div_25_Template, 4, 0, "div", 21)(26, PublicCatalogComponent_div_26_Template, 2, 1, "div", 22)(27, PublicCatalogComponent_div_27_Template, 6, 2, "div", 23);
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
    }, dependencies: [NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.public-catalog.catalog-page[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.catalog-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.catalog-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1 1 220px;\n  min-width: 0;\n  max-width: 400px;\n  padding: 8px 12px;\n  background: #fff;\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: 10px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.catalog-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #0b1120;\n  box-shadow: 0 0 0 3px rgba(11, 17, 32, 0.14);\n}\n.catalog-search__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #93a8cc;\n}\n.catalog-search__input[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: #1e3158;\n  outline: none;\n}\n.catalog-search__input[_ngcontent-%COMP%]::placeholder {\n  color: #93a8cc;\n}\n.btn-search[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  background: #0b1120;\n  border: 1px solid transparent;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-search[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #0b1120;\n  border-color: #0b1120;\n}\n.btn-clear-search[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #5b6b88;\n  background: #fff;\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: 8px;\n  cursor: pointer;\n  transition:\n    color 0.15s ease,\n    border-color 0.15s ease,\n    background 0.15s ease;\n}\n.btn-clear-search[_ngcontent-%COMP%]:hover {\n  color: #1e3158;\n  border-color: #0b1120;\n  background: rgba(11, 17, 32, 0.08);\n}\n.catalog-page[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1200px;\n}\n.catalog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 28px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.catalog-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1e3158;\n  margin: 0 0 4px;\n}\n.catalog-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5b6b88;\n  margin: 0;\n}\n.btn-cart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: #0b1120;\n  border: 1px solid transparent;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.btn-cart[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #0b1120;\n  border-color: #0b1120;\n}\n.btn-cart[_ngcontent-%COMP%]   .cart-badge[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  min-width: 20px;\n  height: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(22, 101, 52, 0.25);\n  border: 1px solid rgba(34, 197, 94, 0.4);\n  border-radius: 8px;\n  color: #bbf7d0;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(127, 29, 29, 0.25);\n  border: 1px solid rgba(248, 113, 113, 0.35);\n  border-radius: 8px;\n  color: #fecaca;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  color: #5b6b88;\n  font-size: 14px;\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(11, 17, 32, 0.2);\n  border-top-color: #0b1120;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 20px;\n}\n.product-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: box-shadow 0.2s, transform 0.15s;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.12);\n  transform: translateY(-2px);\n}\n.product-image[_ngcontent-%COMP%] {\n  height: 150px;\n  background: #f6f9ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.product-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.product-info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.product-sku[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  display: block;\n  margin-bottom: 4px;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1e3158;\n  margin: 0 0 6px;\n  line-height: 1.3;\n}\n.product-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5b6b88;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.product-price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #8fb0ff;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 12px;\n  background: #dcfce7;\n  color: #166534;\n}\n.stock-badge.low[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.stock-badge.out[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn-add[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background: #0b1120;\n  border: 1px solid transparent;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-add[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fff;\n  color: #0b1120;\n  border-color: #0b1120;\n}\n.btn-add[_ngcontent-%COMP%]:disabled {\n  background: #1c2a4d;\n  color: #7f93ba;\n  cursor: not-allowed;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: #5b6b88;\n  font-size: 14px;\n  text-align: center;\n  max-width: 420px;\n  margin: 0 auto;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=public-catalog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicCatalogComponent, { className: "PublicCatalogComponent", filePath: "app\\features\\public-catalog\\public-catalog.component.ts", lineNumber: 18 });
})();

// src/app/features/public-cart-page/public-cart-page.component.ts
function PublicCartPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Tu cesta est\xE1 vac\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No has a\xF1adido ning\xFAn art\xEDculo a\xFAn.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 5);
    \u0275\u0275text(8, "Ir al cat\xE1logo");
    \u0275\u0275elementEnd()();
  }
}
function PublicCartPageComponent_div_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, " Algunos art\xEDculos se a\xF1adieron antes de guardar el precio en el navegador; revisa cantidades o vuelve a a\xF1adirlos desde el cat\xE1logo. ");
    \u0275\u0275elementEnd();
  }
}
function PublicCartPageComponent_div_2_div_8_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatPrice(ctx_r2.lineSubtotal(line_r2)));
  }
}
function PublicCartPageComponent_div_2_div_8_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PublicCartPageComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "p", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275template(5, PublicCartPageComponent_div_2_div_8_span_5_Template, 2, 1, "span", 31)(6, PublicCartPageComponent_div_2_div_8_span_6_Template, 2, 0, "span", 32);
    \u0275\u0275elementStart(7, "div", 33)(8, "button", 34);
    \u0275\u0275listener("click", function PublicCartPageComponent_div_2_div_8_Template_button_click_8_listener() {
      const line_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(line_r2, line_r2.quantity - 1));
    });
    \u0275\u0275text(9, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 34);
    \u0275\u0275listener("click", function PublicCartPageComponent_div_2_div_8_Template_button_click_12_listener() {
      const line_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(line_r2, line_r2.quantity + 1));
    });
    \u0275\u0275text(13, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 36);
    \u0275\u0275listener("click", function PublicCartPageComponent_div_2_div_8_Template_button_click_14_listener() {
      const line_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeLine(line_r2));
    });
    \u0275\u0275text(15, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.displayName(line_r2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", line_r2.unit_price != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", line_r2.unit_price == null);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", line_r2.quantity <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r2.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", line_r2.quantity >= 99);
  }
}
function PublicCartPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "span", 9);
    \u0275\u0275text(4, "Tu cesta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, PublicCartPageComponent_div_2_p_7_Template, 2, 0, "p", 11)(8, PublicCartPageComponent_div_2_div_8_Template, 16, 6, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14)(11, "h3", 15);
    \u0275\u0275text(12, "Resumen");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "div", 16);
    \u0275\u0275elementStart(14, "div", 17)(15, "span", 18);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 19);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 17)(20, "span", 18);
    \u0275\u0275text(21, "IVA (21%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 19);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "div", 16);
    \u0275\u0275elementStart(25, "div", 20)(26, "span", 21);
    \u0275\u0275text(27, "Total incl. IVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 22);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "p", 23);
    \u0275\u0275text(31, " Para completar la compra, debes iniciar sesi\xF3n. Tus art\xEDculos se sincronizar\xE1n con tu cesta al entrar. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "a", 24);
    \u0275\u0275text(33, "Iniciar sesi\xF3n para completar la compra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "a", 25);
    \u0275\u0275text(35, "\u2190 Seguir comprando");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.totalUnits(), " art\xEDculos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasUnknownPrices());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.lines())("ngForTrackBy", ctx_r2.trackByProductId);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Subtotal (", ctx_r2.totalUnits(), " uds.)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatPrice(ctx_r2.subtotal()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatPrice(ctx_r2.tax()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatPrice(ctx_r2.total()));
  }
}
var PublicCartPageComponent = class _PublicCartPageComponent {
  constructor(guestCart) {
    this.guestCart = guestCart;
  }
  lines() {
    return this.guestCart.guestLines();
  }
  /** Subtotal por línea; si falta precio en datos antiguos, devolvemos 0 para no inventar importes. */
  lineSubtotal(line) {
    if (line.unit_price == null) {
      return 0;
    }
    return line.unit_price * line.quantity;
  }
  subtotal() {
    return this.lines().reduce((sum, l) => sum + this.lineSubtotal(l), 0);
  }
  /** Misma lógica de IVA que la cesta autenticada (21 %) para coherencia visual con /recambios. */
  tax() {
    return Math.round(this.subtotal() * 0.21 * 100) / 100;
  }
  total() {
    return Math.round((this.subtotal() + this.tax()) * 100) / 100;
  }
  totalUnits() {
    return this.guestCart.guestUnitCount();
  }
  /** True si quedaron líneas guardadas antes de que guardáramos precio en localStorage (cesta legada). */
  hasUnknownPrices() {
    return this.lines().some((l) => l.unit_price == null);
  }
  updateQuantity(line, newQty) {
    if (newQty < 1 || newQty > 99) {
      return;
    }
    this.guestCart.setLineQuantity(line.product_id, newQty);
  }
  removeLine(line) {
    this.guestCart.removeLine(line.product_id);
  }
  formatPrice(amount) {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR"
    }).format(amount);
  }
  /** Fallback amigable si el JSON antiguo no tenía nombre de producto. */
  displayName(line) {
    return line.product_name?.trim() || `Producto #${line.product_id}`;
  }
  trackByProductId(_, line) {
    return line.product_id;
  }
  static {
    this.\u0275fac = function PublicCartPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicCartPageComponent)(\u0275\u0275directiveInject(GuestCartStorageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicCartPageComponent, selectors: [["app-public-cart-page"]], decls: 3, vars: 2, consts: [[1, "cart-page", "public-cart-page"], ["class", "empty-state", 4, "ngIf"], ["class", "cart-layout", 4, "ngIf"], [1, "empty-state"], [1, "empty-icon"], ["routerLink", "/productos", 1, "btn-primary"], [1, "cart-layout"], [1, "cart-col"], [1, "cart-header"], [1, "cart-title"], [1, "cart-badge"], ["class", "guest-hint", 4, "ngIf"], ["class", "cart-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "summary-col"], [1, "summary-card"], [1, "summary-title"], [1, "divider"], [1, "sum-row"], [1, "sum-label"], [1, "sum-value"], [1, "sum-row", "total-row"], [1, "total-label"], [1, "total-amount"], [1, "login-notice"], ["routerLink", "/login", 1, "btn-login-cta"], ["routerLink", "/productos", 1, "link-back"], [1, "guest-hint"], [1, "cart-item"], [1, "item-info", "item-info--wide"], [1, "item-name"], [1, "item-right"], ["class", "item-price", 4, "ngIf"], ["class", "item-price item-price--muted", 4, "ngIf"], [1, "qty-box"], ["type", "button", 1, "qty-btn", 3, "click", "disabled"], [1, "qty-num"], ["type", "button", "title", "Quitar", 1, "btn-remove", 3, "click"], [1, "item-price"], [1, "item-price", "item-price--muted"]], template: function PublicCartPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PublicCartPageComponent_div_1_Template, 9, 0, "div", 1)(2, PublicCartPageComponent_div_2_Template, 36, 8, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.lines().length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.lines().length > 0);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.cart-page.public-cart-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #ffffff;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: #5b6b88;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e3158;\n  margin: 0 0 8px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  display: inline-block;\n  padding: 10px 24px;\n  background: #0b1120;\n  color: #ffffff;\n  border-radius: 8px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #0b1120;\n  border-color: #0b1120;\n}\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.cart-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1e3158;\n}\n.cart-badge[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #0b1120;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.guest-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #92400e;\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  padding: 10px 12px;\n  margin: 0 0 16px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #fff;\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.cart-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.item-info--wide[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e3158;\n  margin: 0;\n  line-height: 1.35;\n}\n.item-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.item-price[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e3158;\n}\n.item-price--muted[_ngcontent-%COMP%] {\n  color: #5b6b88;\n  font-weight: 500;\n}\n.qty-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: 6px;\n  height: 28px;\n  overflow: hidden;\n}\n.qty-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n  font-size: 15px;\n  color: #1e3158;\n}\n.qty-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(11, 17, 32, 0.08);\n}\n.qty-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.qty-num[_ngcontent-%COMP%] {\n  min-width: 28px;\n  text-align: center;\n  font-size: 13px;\n  border-left: 1px solid rgba(11, 17, 32, 0.2);\n  border-right: 1px solid rgba(11, 17, 32, 0.2);\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #93a8cc;\n  cursor: pointer;\n  font-size: 14px;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.summary-col[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 72px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(11, 17, 32, 0.2);\n  border-radius: 12px;\n  padding: 24px;\n}\n.summary-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e3158;\n  margin: 0 0 16px;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(11, 17, 32, 0.2);\n  margin: 12px 0;\n}\n.sum-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sum-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5b6b88;\n}\n.sum-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1e3158;\n}\n.total-row[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e3158;\n}\n.total-amount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0b1120;\n}\n.login-notice[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.5;\n  color: #5b6b88;\n  margin: 0 0 14px;\n}\n.btn-login-cta[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  padding: 14px 16px;\n  background: #0b1120;\n  color: #ffffff;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  margin-bottom: 12px;\n  transition: background 0.15s;\n}\n.btn-login-cta[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #0b1120;\n  border-color: #0b1120;\n}\n.link-back[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5b6b88;\n  text-decoration: none;\n}\n.link-back[_ngcontent-%COMP%]:hover {\n  color: #0b1120;\n}\n/*# sourceMappingURL=public-cart-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicCartPageComponent, { className: "PublicCartPageComponent", filePath: "app\\features\\public-cart-page\\public-cart-page.component.ts", lineNumber: 15 });
})();

// src/app/app-routing.module.ts
var routes = [
  /* Layout público: solo entra si guestLayoutMatch (sin auth_token). */
  {
    path: "",
    canMatch: [guestLayoutMatch],
    component: PublicLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: PublicHomeComponent
      },
      {
        path: "login",
        component: PublicLoginComponent
      },
      {
        path: "productos",
        component: PublicCatalogComponent
      },
      {
        path: "cesta",
        component: PublicCartPageComponent
      }
    ]
  },
  /* Layout autenticado: sidebar + outlet; solo si authLayoutMatch (hay auth_token). */
  {
    path: "",
    canMatch: [authLayoutMatch],
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard"
      },
      {
        path: "dashboard",
        loadChildren: () => import("./chunk-G3FGTVWG.js").then((m) => m.DashboardModule)
      },
      {
        path: "software",
        loadChildren: () => import("./chunk-PZ3G7B52.js").then((m) => m.SoftwareModule)
      },
      {
        path: "recambios",
        loadChildren: () => import("./chunk-CHDIEWZT.js").then((m) => m.CartModule)
      },
      {
        path: "incidencias",
        loadChildren: () => import("./chunk-ZYE424OO.js").then((m) => m.TicketsModule)
      },
      {
        path: "scada",
        loadChildren: () => import("./chunk-AZ3QYQGL.js").then((m) => m.ScadaModule)
      }
    ]
  },
  /* Rutas desconocidas: vuelven a '' y el router resuelve público vs app según sesión. */
  {
    path: "**",
    redirectTo: ""
  }
];
var AppRoutingModule = class _AppRoutingModule {
  static {
    this.\u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled"
    }), RouterModule] });
  }
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], styles: ['@charset "UTF-8";\n\n\n\n/*# sourceMappingURL=app.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app\\app.component.ts", lineNumber: 9 });
})();

// src/app/core/interceptors/auth.interceptor.ts
var AuthInterceptor = class _AuthInterceptor {
  intercept(req, next) {
    const token = localStorage.getItem("auth_token");
    if (token) {
      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
  static {
    this.\u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthInterceptor)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
  }
};

// src/app/app.module.ts
var AppModule = class _AppModule {
  static {
    this.\u0275fac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ], imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule
    ] });
  }
};

// src/main.ts
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
