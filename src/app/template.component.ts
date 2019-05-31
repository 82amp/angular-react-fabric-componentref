import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-template',
    template: `hello world`,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class TemplateComponent {
  
  }