import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomComponent } from './mycom/mycom.component';
import { FormsModule } from '@angular/forms';
import { DirComponent } from './dir/dir.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomComponent,
    DirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
