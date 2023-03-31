import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductosModule } from './modules/productos/productos.module';
import { AboutModule } from './modules/about/about.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent,
  HeaderComponent,
FooterComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ProductosModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
