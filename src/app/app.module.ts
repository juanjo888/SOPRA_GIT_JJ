import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductosModule } from './modules/productos/productos.module';
import { AboutModule } from './modules/about/about.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopguardModule } from './modules/shopguard/shopguard.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DateInterceptor } from './interceptor/date.interceptor';
import { FormModule } from './modules/form/form.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ProductosModule,
    AboutModule,
    FormModule,
    ShopguardModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DateInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
