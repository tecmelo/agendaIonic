import { Injectable } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Injectable()
export class ContactosService {
  listaContactos:any;
  constructor(private contacts: Contacts) {

    this.contacts.find(["*"])
       .then(res => {
         let datosMostar:any[]=[];
         res.map((item) =>{
           if(item.displayName != null && item.phoneNumbers != null){
             datosMostar.push({displayName:item.displayName,phoneNumbers:item.phoneNumbers})
           }
         })
         this.listaContactos = datosMostar;
       },error => {
         console.log({error:error})
       })

       console.log(this.listaContactos)

   }


   getContactos(){
     return this.listaContactos;
   }
}
