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
      .subscribe();
  }

  enviarMensaje(){
    if(this.mensaje.length == 0)
      return;

    this._chatService.agregarMensaje(this.mensaje)
      .then(()=> this.mensaje = "" )
      .catch((err)=>console.error("error al enviar",err));
    console.log(this.mensaje);
  }


}
