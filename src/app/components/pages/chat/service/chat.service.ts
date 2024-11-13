import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('https://api.nidhiji.com');

  joinRoom(conversationId: string){
    console.log("Join Room Event Called...");
    this.socket.emit('joinRoom', conversationId);
  }

  getMessages() {
    return new Observable(observer => {
      this.socket.on('messages', (message) => {
        console.log('message: ', message);
        observer.next(message);
      });
    });
  }

  constructor() { }
}
