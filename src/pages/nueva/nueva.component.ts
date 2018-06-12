import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import {ModalContactosComponent} from '../modal-contactos/modal-contactos.component';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'app-nueva',
  templateUrl: 'nueva.component.html',
})
export class NuevaComponent implements OnInit {
  listaContactos:any;
  constructor(public modalCtrl: ModalController,
              private contacts: Contacts) {
                //
                // this.contacts.find(["*"])
                //    .then(res => {
                //      let datosMostar:any[]=[];
                //      res.map((item) =>{
                //        if(item.displayName != null && item.phoneNumbers != null){
                //          datosMostar.push({displayName:item.displayName,phoneNumbers:item.phoneNumbers})
                //        }
                //      })
                //      this.listaContactos = datosMostar;
                //    },error => {
                //      console.log({error:error})
                //    })
                //
                //    console.log(this.listaContactos)



               }

  ngOnInit() {}


    presentProfileModal() {
    let profileModal = this.modalCtrl.create(ModalContactosComponent);
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
}
