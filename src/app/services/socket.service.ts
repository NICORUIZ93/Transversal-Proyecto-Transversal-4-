import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: Socket;
  constructor() {
    this.socket = io(environment.urlServer);
  }

  listen() {
    return new Observable((observador) => {
      this.socket.on('mensaje', (data) => {
        observador.next(data);
      });
    });
  }
}


