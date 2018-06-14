import { Injectable } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { AlertController, LoadingController } from 'ionic-angular';



@Injectable()
export class ContactosService {
  listaContactos:any=[];
  constructor(private contacts: Contacts,
              private alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
    console.log("Servicio iniciado")
    let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();




    this.contacts.find(["*"])
       .then(res => {
         console.log("res",res)
         res.map((item) =>{
           if(item.displayName != null && item.phoneNumbers != null){
             this.listaContactos.push({displayName:item.displayName,phoneNumbers:item.phoneNumbers})
           }
         })

          loading.dismiss();

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
