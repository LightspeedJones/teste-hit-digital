import { NgModule } from "@angular/core";
import { IntroducaoComponent } from "./introducao/introducao.component";
import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ContatoComponent } from "./contato/contato.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IntroducaoComponent,
    ContatoComponent
  ],
  imports:[
    RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}