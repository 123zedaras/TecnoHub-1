import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticatedLayoutComponent } from './layout/authenticated-layout/authenticated-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PublicHomeComponent } from './features/public-home/public-home.component';
import { PublicLoginComponent } from './features/public-login/public-login.component';
import { PublicCatalogComponent } from './features/public-catalog/public-catalog.component';
import { PublicCartPageComponent } from './features/public-cart-page/public-cart-page.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedLayoutComponent,
    PublicLayoutComponent,
    PublicHomeComponent,
    PublicLoginComponent,
    PublicCatalogComponent,
    PublicCartPageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
