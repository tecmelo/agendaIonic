import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { CitasService} from '../../app/services/citas.service';
import {ModalContactosComponent} from '../modal-contactos/modal-contactos.component';
@Component({
  selector: 'editar-app',
  templateUrl: 'editar.component.html',
})
export class EditarComponent implements OnInit {


    cita:any={
      key$:"",
      titulo:"",
      lugar:"",
      tipo:"",
      descripcion:"",
      fechaInicio:"",
      fechaTermino:"",
      hora:"",
      invitados:[]
    };

  constructor(private params:NavParams,
              public modalCtrl: ModalController,
              private viewCtrl:ViewController,
              private _citasService:CitasService) {
    this.cita=this.params.get('cita');
    console.log(this.cita);

   }

   editaCita(){
     this._citasService.editaCita(this.cita).subscribe(data=>{
       console.log(data)
     })

     this.dismiss()
   }
   deleteInvitado(invitado){
     for(let invi in this.cita.invitados){
       if(this.cita.invitados[invi].displayName==invitado.displayName)
         this.cita.invitados.splice(parseInt(invi),1);
     }
   }
   presentProfileModal() {
   let profileModal = this.modalCtrl.create(ModalContactosComponent);
   profileModal.onDidDismiss(data => {
     if(data){this.cita.invitados.push(data)}

   });
   profileModal.present();
 }

   dismiss() {

   this.viewCtrl.dismiss();
 }



  ngOnInit() {}
}
