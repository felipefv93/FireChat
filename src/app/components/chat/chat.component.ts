import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this._chatService.cargarMensajes()
      .subscribe( (mensajes:any[] )=>{
        console.log(mensajes);
      })
  }

  enviarMensaje(){
    console.log(this.mensaje);
    this.mensaje = "";
  }

}
