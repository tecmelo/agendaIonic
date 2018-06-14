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




    this.contacts.find(['displayName','phoneNumbers'], {filter: "", multiple: true})
       .then(res => {
         console.log("res",res)
         this.listaContactos=res;
         this.listaContactos.length=100;

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
