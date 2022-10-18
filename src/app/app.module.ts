import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from './Features/Product/product.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/header/header.component';
import { FooterComponent } from './Core/footer/footer.component';
import { MenuComponent } from './Core/menu/menu.component';
import { DropdownComponent } from './Shared/dropdown/dropdown.component';
import { ShoppingListComponent } from './Features/shopping-list/shopping-list.component';
import { ProductService } from './Features/Product/product.service';
import { ErrorPageComponent } from './Core/error-page/error-page.component';
import { LoginComponent } from './Core/authorize/login/login.component';
import { RegisterComponent } from './Core/register/register.component';
import { MyInterceptor } from './Core/authorize/myInterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DropdownComponent,
    ShoppingListComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'product-listing', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '**', component: ErrorPageComponent}
    ], {scrollPositionRestoration: 'top'})
  ],
  providers: [
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
