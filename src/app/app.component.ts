import { Component, ComponentRef, Injector, ComponentFactoryResolver, ChangeDetectionStrategy } from '@angular/core';
import { TemplateComponent } from './template.component';

@Component({
  selector: 'app-root',
  template: `<fab-details-list [columns]="columns" [items]="data"></fab-details-list>`,
})
export class AppComponent {

  columns;

  data = [
    {name: 'person 1', email: 'fake@email.com'},
    {name: 'person 2', email: 'ignore@this'}
  ];

  componentRef: ComponentRef<any>;

  constructor(componentFactory: ComponentFactoryResolver, injector: Injector) {
    this.componentRef = componentFactory.resolveComponentFactory(TemplateComponent).create(injector);
    this.columns = [
      {key: 'name', name: 'Name', fieldName: 'name', minWidth: 100},
      {key: 'email', name: 'Email', fieldName: 'email', minWidth: 300, render: this.componentRef}
    ];
  }
}
