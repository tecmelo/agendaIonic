import { Injectable } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { AlertController } from 'ionic-angular';


@Injectable()
export class ContactosService {
  listaContactos:any=[];
  constructor(private contacts: Contacts,
              private alertCtrl: AlertController) {
    console.log("Servicio iniciado")





    this.contacts.find(["*"])
       .then(res => {
         console.log("res",res)
         res.map((item) =>{
           if(item.displayName != null && item.phoneNumbers != null){
             this.listaContactos.push({displayName:item.displayName,phoneNumbers:item.phoneNumbers})
           }
         })

         let alert = this.alertCtrl.create({
           title: 'Eliminación',
           message: 'Confirm ',
           buttons: [
             {
               text: 'Cancelar',
               role: 'cancel'
             }
           ]
         });
         alert.present();

       },error => {
         console.log("erro",{error:error})
       })

       console.log(this.listaContactos)

   }


   getContactos(){
     return this.listaContactos;
   }



   consultaContactos(){


   }
}
