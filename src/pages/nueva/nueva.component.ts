import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import {ModalContactosComponent} from '../modal-contactos/modal-contactos.component';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import {ContactosService} from '../../app/services/contactos.service';



@Component({
  selector: 'app-nueva',
  templateUrl: 'nueva.component.html',
})
export class NuevaComponent implements OnInit {
  listaContactos:any;
  invitados=[];
  constructor(public modalCtrl: ModalController,
              private _contactosService:ContactosService) {
                this.listaContactos=this._contactosService.getContactos();
               }

  ngOnInit() {}


    presentProfileModal() {
    let profileModal = this.modalCtrl.create(ModalContactosComponent,{contactos:this.listaContactos});
    profileModal.onDidDismiss(data => {
      if(data){this.invitados.push(data);}
    });
    profileModal.present();
  }
}
