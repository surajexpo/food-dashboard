import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubcateComponent } from './components/categories/sub-cate/sub-cate.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './components/categories/sub-cate/product/product.component';
import { CouponComponent } from './components/coupon/coupon.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'subcate',
        component: SubcateComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'coupon',
        component: CouponComponent,
      },

     
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
