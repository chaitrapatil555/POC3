import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationformComponent } from './registrationform/registrationform.component'
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { OrderModule } from 'ngx-order-pipe';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponentComponent,
    RegistrationformComponent,
    SearchComponent,
    SortComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
