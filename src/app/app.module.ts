import { AngularReactBrowserModule } from '@angular-react/core';
import { NgModule } from '@angular/core';
import { FabDetailsListModule } from '@angular-react/fabric';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent
  ],
  imports: [
    AngularReactBrowserModule,
    FabDetailsListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TemplateComponent]
})
export class AppModule { }
