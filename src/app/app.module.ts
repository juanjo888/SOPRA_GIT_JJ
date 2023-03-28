import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AsideComponent, FooterComponent, MainComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
