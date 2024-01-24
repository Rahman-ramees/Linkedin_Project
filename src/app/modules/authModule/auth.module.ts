import { NgModule } from "@angular/core";
import { SignUpComponent } from "./Components/sign-up/sign-up.component";
import { LogInComponent } from "./Components/log-in/log-in.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";


@NgModule({
    declarations: [
        SignUpComponent,
        LogInComponent,
    ],
    imports: [
        ReactiveFormsModule        
    ],
    exports: [
        SignUpComponent,
        LogInComponent
    ],
    providers: [],
})
export class AuthModule {

}