import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  constructor(private afs: AngularFirestore) { }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc').limit(5));
    // this.chats = this.itemsCollection.valueChanges();
    return this.itemsCollection.valueChanges()
      .map( (mensajes:Mensaje[]) =>{
        console.log(mensajes);
        this.chats = [];
        for(let mensaje of mensajes){
          this.chats.unshift( mensaje );
        }
        // this.chats = mensajes;
      })
  }

  agregarMensaje(texto: string){
    //TODO falta el uid del usuario
    let mensaje: Mensaje = {
      nombre : 'Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    }

    return this.itemsCollection.add( mensaje );
  }
}
