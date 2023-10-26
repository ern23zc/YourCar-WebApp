import {ApplicationConfig} from "@angular/core";
import {provideRouter} from "@angular/router";
import {firebaseProviders} from "./firebase.config";

export const appConfig : ApplicationConfig = {
  providers: [provideRouter(routes), firebaseProviders]
}
