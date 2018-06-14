import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'
import { ModalController, NavParams } from 'ionic-angular';
import {EditarComponent} from '../editar/editar.component';
import { AlertController } from 'ionic-angular';
import {LugarService} from '../../app/services/lugar.service';
import {CitasService} from '../../app/services/citas.service';
import { LocalNotifications } from '@ionic-native/local-notifications';
import {ContactosService} from '../../app/services/contactos.service';

@Component({
  selector: 'app-citas',
  templateUrl: 'citas.component.html',
})
export class CitasComponent implements OnInit {

  dateRange: { from: string; to: string; };
 type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
 optionsRange: CalendarComponentOptions = {
   pickMode: 'range'
 };

 eventos:any=[];
 examenes=[];
 juntas=[];
 citas=[];
 proyectos=[];
 otro=[];
fechaIinial:any;
fechaFinal:any;
to:any;
from:any=null;
today:any=null;

  constructor(private _citasService:CitasService,
              public modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private _lugarService:LugarService,
              private localNotifications: LocalNotifications,
              private _contactoService:ContactosService) {

            this.actualizaLista();
            console.log(this.localNotifications.getScheduledIds())

  }

  actualizaLista(){
    this.eventos=[]
    this._citasService.getCitas().subscribe(data=>{
      console.log("Eventos",data)
      for(let key$ in data){
        let h=data[key$]
        h.key$=key$;
        this.eventos.push(data[key$])
      }



      if(!(this.to&&this.from)){
        this.today=new Date()
        //console.log("Hoy",this.today);
        this.today.setHours(0);
        let filtro=this.getEventosOnRange(this.today,this.today)
        this.actualizaSecciones(filtro)
      }else{
        let filtro=this.getEventosOnRange(this.from,this.to)
        this.actualizaSecciones(filtro)
      }
      console.log(this.eventos)
    })
  }




  getJuntas(citas){
    this.juntas=[]
    for(let cita of citas){
      if(cita.tipo=="junta")
        this.juntas.push(cita);
      }

  }

  getProyectos(citas){
    this.proyectos=[];
    for(let cita of citas){
      if(cita.tipo=="proyecto")
        this.proyectos.push(cita)
    }
  }

  getExamenes(citas){
    this.examenes=[];
    for(let cita of citas){
      if(cita.tipo=="examen")
        this.examenes.push(cita)
    }
  }

  getOtros(citas){
    this.otro=[];
    for(let cita of citas){
      if(cita.tipo=="otro")
        this.otro.push(cita)
    }
  }

  getCitas(citas){
    this.citas=[];
    for(let cita of citas){
      if(cita.tipo=="cita")
        this.citas.push(cita)
    }
  }

  actualizaSecciones(filtro){
    console.log(filtro,"filtro");

    this.getCitas(filtro)
    this.getJuntas(filtro)
    this.getProyectos(filtro)
    this.getOtros(filtro)
    this.getExamenes(filtro)

    console.log("juntas",this.juntas)
    console.log("citas",this.citas)
    console.log("examenes",this.examenes)
    console.log("otro",this.otro)
    console.log("proyectos",this.proyectos)
  }

  onChange($event){
    let from=$event.from._d
    let to=$event.to._d
    this.to=to;
    this.from=from;
    this.actualizaLista()
    let filtro=this.getEventosOnRange(from,to);
    this.actualizaSecciones(filtro);
  }

  getEventosOnRange(from,to){
    let citasFiltradas=[];
      for(let cita of this.eventos){
        //console.log(cita)
        let cta=this.sumarDias(new Date(cita.fechaInicio),1)
        let ctaF=this.sumarDias(new Date(cita.fechaTermino),1)
        ctaF.setHours(0)
        cta.setHours(0);
        //console.log(ctaF,"  ",from," ",to)
        if(cta.getTime()<=to.getTime() && cta.getTime()>=from.getTime()){
          citasFiltradas.push(cita);
        }else if(from.getTime()>=cta.getTime()&&from.getTime()<=ctaF.getTime()){
          citasFiltradas.push(cita);
        }
      }
    return citasFiltradas;


  }

  sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

editaCita(cita){
  //console.log(cita)
  this.presentProfileModal(cita)

}

presentProfileModal(cita) {
let profileModal = this.modalCtrl.create(EditarComponent,{cita:cita});
profileModal.onDidDismiss(data => {
  this.actualizaLista();

});
profileModal.present();
}


eliminaCita(cita){
  this._citasService.eliminaCita(cita.key$).subscribe(res=>{
    console.log(res)
    let filtro=this.getEventosOnRange(this.from,this.to);
    this.actualizaLista();
    this.actualizaSecciones(filtro);
  })

}


presentConfirmDelete(cita) {
  let alert = this.alertCtrl.create({
    title: 'Eliminación',
    message: 'Estas seguro que deseas eliminar el evento '+cita.titulo,
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Aceptar',
        handler: () => {
          this.eliminaCita(cita);
        }
      }
    ]
  });
  alert.present();
}


  ngOnInit() {


  }
}
