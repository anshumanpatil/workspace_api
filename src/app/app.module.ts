import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { AddProduct } from './dashboard/addProduct/addProduct.component';
import { ModifyProduct } from './dashboard/modifyProduct/modifyProduct.component';

import { AppRoutingModule } from './app.router';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';

import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    GridComponent,
    AddProduct,
    ModifyProduct
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    //MatDialogModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([])
  ],
  providers: [UserService, ProductService, AuthGuard],
  entryComponents: [LoginComponent, RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
