import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./products/product.component";

import { OKTA_CONFIG, OktaAuthModule } from "@okta/okta-angular";
import { OktaAuth } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
  issuer: "https://dev-90421809.okta.com/oauth2/default",
  clientId: "0oa8731fmdUQktuvk5d7",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
});

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, OktaAuthModule],
  providers: [{ provide: OKTA_CONFIG, useValue: { oktaAuth } }],
  bootstrap: [AppComponent],
})
export class AppModule {}
