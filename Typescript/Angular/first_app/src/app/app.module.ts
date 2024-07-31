import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomComponent } from './mycom/mycom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirComponent } from './dir/dir.component';
import { FormsComponent } from './forms/forms.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
import { noSpace } from './pipes/noSpace.pipe';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ParentComponent } from './parent/parent.component';
import { SuperComponent } from './super/super.component';
import { DerviedComponent } from './super/dervied/dervied.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomComponent,
    DirComponent,
    FormsComponent,
    UsingPipesComponent,
    noSpace,
    ReactiveFormsComponent,
    ParentComponent,
    SuperComponent,
    DerviedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
