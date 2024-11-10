import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:11022');

  joinRoom(conversationId: string){
    console.log('conversationId: ', conversationId);
    this.socket.emit('joinRoom', conversationId);
  }

  getMessages() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('messages', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };  
    });
    return observable;
  }

  constructor() { }
}
