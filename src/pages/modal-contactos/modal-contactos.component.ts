import { Component, OnInit } from '@angular/core';
import { ModalController, ViewController,NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

import {ContactosService} from '../../app/services/contactos.service';


@Component({
  selector: 'app-modal-contactos',
  templateUrl: 'modal-contactos.component.html',
})
export class ModalContactosComponent implements OnInit {
  listaContactos:any;


  constructor(public viewCtrl: ViewController,
              private contacts: Contacts,
              private _contactosService:ContactosService,
              private params: NavParams) {
              this.listaContactos=params.get('contactos');


 }

  ngOnInit() {}

  dismiss(contacto) {

  this.viewCtrl.dismiss(contacto);
}

}
