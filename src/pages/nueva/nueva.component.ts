import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import {ModalContactosComponent} from '../modal-contactos/modal-contactos.component';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import {CitasService} from '../../app/services/citas.service';
@Component({
  selector: 'app-nueva',
  templateUrl: 'nueva.component.html',
})
export class NuevaComponent implements OnInit {
  listaContactos:any;


  nuevaCita={
    titulo:"",
    lugar:"",
    tipo:"",
    descripcion:"",
    fechaInicio:"",
    fechaTermino:"",
    hora:"",
    invitados:[]
  }
  constructor(public modalCtrl: ModalController,
              private _citasService:CitasService) {
    console.log(this.nuevaCita.invitados)

               }

  ngOnInit() {}

  guardaCita(){
    console.log(this.nuevaCita);
    this._citasService.agregaCita(this.nuevaCita).subscribe(data=>{})
  }

  deleteInvitado(invitado){
    for(let invi in this.nuevaCita.invitados){
      if(this.nuevaCita.invitados[invi].displayName==invitado.displayName)
        this.nuevaCita.invitados.splice(parseInt(invi),1);
    }

    console.log(this.nuevaCita.invitados);
  }


    presentProfileModal() {
    let profileModal = this.modalCtrl.create(ModalContactosComponent);
    profileModal.onDidDismiss(data => {
      if(data){this.nuevaCita.invitados.push(data)}

    });
    profileModal.present();
  }
}
