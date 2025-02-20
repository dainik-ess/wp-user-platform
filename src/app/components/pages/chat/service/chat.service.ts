import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket = io('https://api.nidhiji.com');

  joinRoom(joinConversationId: string,leaveConversationId:string) {
    this.socket.emit("joinRoom", JSON.stringify({joinConversationId,leaveConversationId}));
  }

  getMessages() {
    return new Observable((observer) => {
      this.socket.on('messages', (message) => {
        observer.next(message);
      });
    });
  }

  getConversation() {
    return new Observable((observer) => {
      this.socket.on('conversations', (conversations) => {
        observer.next(conversations);
      });
    });
  }

  constructor() {}
}
