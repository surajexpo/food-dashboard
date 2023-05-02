import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {SubcateComponent } from './components/categories/sub-cate/sub-cate.component'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthtokenService } from './services/authtoken/authtoken.service';
import { ConfirmationBoxComponent } from './shared/confirmation-box/confirmation-box.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ProductComponent } from './components/categories/sub-cate/product/product.component';
import { NgChartsModule } from 'ng2-charts';
import { CouponComponent } from './components/coupon/coupon.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    CategoriesComponent,
    SubcateComponent,
    ConfirmationBoxComponent,
    AlertComponent,
    ProductComponent,
    CouponComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,MatIconModule,MatExpansionModule,MatTableModule,MatPaginatorModule,MatSnackBarModule,
    ReactiveFormsModule,MatDialogModule,NgChartsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthtokenService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
