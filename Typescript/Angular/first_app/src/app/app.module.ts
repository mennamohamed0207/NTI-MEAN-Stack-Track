import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomComponent } from './mycom/mycom.component';
import { FormsModule } from '@angular/forms';
import { DirComponent } from './dir/dir.component';
import { FormsComponent } from './forms/forms.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
import { noSpace } from './pipes/noSpace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MycomComponent,
    DirComponent,
    FormsComponent,
    UsingPipesComponent,
    noSpace
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
