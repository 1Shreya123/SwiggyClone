import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLeftComponent } from './main-left/main-left.component';
import { MainRightComponent } from './main-right/main-right.component';
import { MainBottomComponent } from './main-bottom/main-bottom.component';
import { SwiggyTitleComponent } from './swiggy-title/swiggy-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLeftComponent,
    MainRightComponent,
    MainBottomComponent,
    SwiggyTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
