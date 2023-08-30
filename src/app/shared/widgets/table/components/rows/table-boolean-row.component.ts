import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-boolean-row',
  template: `
    <fa-icon [icon]="input 
      ? ['fas', 'check'] 
      : ['fas', 'xmark']">
    </fa-icon>
  `,
})
export class TableBooleanRowComponent {

  @Input()
  public input?: boolean;

}