import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Messages } from '../interfaces/messages.interface';

@Injectable({providedIn: 'root'})

export class Service{

  BASE_URL = `http://localhost:3000/`;

  public constructor(public readonly http: HttpClient) { }

  sendMessage(): Observable<Messages[]> {
    return this.http.get<Messages[]>('./assets/mockData.json');
  }

 
}

