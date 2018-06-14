import { Injectable } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Injectable()
export class ContactosService {
  listaContactos:any=[];
  constructor(private contacts: Contacts) {
    console.log("Servicio iniciado")


       console.log(this.listaContactos)

   }


   getContactos(){
     return this.listaContactos;
   }



   consultaContactos(){
     return this.contacts.find(["*"])     
   }
}
