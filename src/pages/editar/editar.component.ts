import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';


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
              private viewCtrl:ViewController) {
    this.cita=this.params.get('cita');
    console.log(this.cita);

   }

   editaCita(){}
   deleteInvitado(){}
   presentProfileModalContacto(){}

   dismiss() {

   this.viewCtrl.dismiss();
 }


  ngOnInit() {}
}
