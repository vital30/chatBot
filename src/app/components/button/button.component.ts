import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output()
  public emitButtonClick:EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public disabled: boolean | null;

  @Input()
  public value: string;

  @Input()
  public title: string;

  public emitClick() {
    this.emitButtonClick.emit()
   }
}
