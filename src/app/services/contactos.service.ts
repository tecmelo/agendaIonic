import { Injectable } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Injectable()
export class ContactosService {
  listaContactos:any;
  constructor(private contacts: Contacts) {
    console.log("Servicio iniciado")


    this.contacts.find(["*"])
       .then(res => {
         console.log("res",res)
         let datosMostar:any[]=[];
         let i=0;
         res.map((item) =>{
           if(item.displayName != null && item.phoneNumbers != null && (i<=100)){
             datosMostar.push({displayName:item.displayName,phoneNumbers:item.phoneNumbers})
             i++;
           }
         })
         this.listaContactos = datosMostar;
       },error => {
         console.log("erro",{error:error})
       })

       console.log(this.listaContactos)

   }


   getContactos(){
     return this.listaContactos;
   }
}
