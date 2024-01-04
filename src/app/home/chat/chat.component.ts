import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Messages } from '../../interfaces/messages.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnChanges{
  @Input()
  public chatHistory: Messages[] | null;
  
  @ViewChild('scrollDown') private myScrollContainer: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['chatHistory']){
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;    
    }
  }
}
