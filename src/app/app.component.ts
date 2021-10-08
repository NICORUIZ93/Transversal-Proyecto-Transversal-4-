import { SocketService } from './services/socket.service';
import { Socket } from 'socket.io-client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Transversal';
  datos:any="";
  constructor(private socket: SocketService) {}
  ngOnInit(): void {
    this.socket.listen().subscribe((data):any => {
      this.datos=data;
    });
  }
}
