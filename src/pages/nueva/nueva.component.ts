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
  constructor(public modalCtrl: ModalController) {

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
