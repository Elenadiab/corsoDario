import { Component } from '@angular/core';
import { Server } from './models/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1-esercizio';


  //voglio mostrare la proprieta admin dichiarata in App (Parent) in Client (child)
  admin: {
    nome:string,
    cognome:string
  } = {
    nome: "Jacopo",
    cognome: "Rossi"
  }

  listaServer:Server[] = [
    {
      nome:"ITReti",
      tipo:"Application",
      status: true
    },
    {
      nome:"FastWeb",
      tipo:"MailServer",
      status: false
    },
    {
      nome:"Sip",
      tipo:"Telefonia",
      status: true
    },

  ]


  onPrendiServer(server:Server){
    console.log(server);
    this.listaServer.push(server);
    
  }
  
  
  

}


