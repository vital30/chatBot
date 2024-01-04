import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Input()
  public chatHistory: string[];

  @Input()
  public isLoading: boolean | null;

  searchText:string = '';

  @Output()
  public sendMessage:EventEmitter<string> = new EventEmitter<string>();

  public emitMessage():void {
   this.sendMessage.emit(this.searchText)
   this.searchText = ''
  }

}
