import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { Service } from './_service/service.service';
import { BehaviorSubject } from 'rxjs';
import { Messages } from './interfaces/messages.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public chatHistory$: BehaviorSubject<Messages[]> = new BehaviorSubject<Messages[]>([]);
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  messageId:number = 0;

  constructor(private service: Service) { }

  public sendMessage(message:string):void {
    this.messageId++;
    this.chatHistory$.next([...this.chatHistory$.value, {id: this.messageId,role:'You','message': message}]);
    this.isLoadintState();
     setTimeout(() => this.gethttpRequest(),300) /// backend imitation
  }

  public gethttpRequest(): void{
    this.service.sendMessage().pipe(
       map(apps => apps.filter(apps =>  apps.id === this.messageId)))
      .subscribe(response => {
        this.isLoadintState();
        this.chatHistory$.next([...this.chatHistory$.value, {id: response[0].id, role:'ChatBot','message': response[0].message}]);
    });
  }

  public isLoadintState(): void{
    this.isLoading$.next(!this.isLoading$.value);
  }


  public startNewChat(): void {
    this.chatHistory$.next([])
   }
  
}


