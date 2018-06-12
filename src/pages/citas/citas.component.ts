import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'
import {CitasService} from '../../app/services/citas.service';
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


  constructor(private _citasService:CitasService) {
    this.actualizaLista()
  }

  actualizaLista(){
    this.eventos=[]
    this._citasService.getCitas().subscribe(data=>{
      console.log(data)
      for(let key$ in data){
        let h=data[key$]
        h.key$=key$;
        this.eventos.push(data[key$])
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

  onChange($event){
    let from=new Date(this.dateRange.from._d)
    let to=new Date(this.dateRange.to._d)
    let filtro=this.getEventosOnRange(from,to);
    console.log(filtro);

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
    this.actualizaLista()

  }

  getEventosOnRange(from,to){
    let citasFiltradas=[];

    for(let cita of this.eventos){
      let cta=this.sumarDias(new Date(cita.fechaInicio),1) ;
      let to2=this.sumarDias(new Date(to),1)
      console.log(to2)
      if(cta.getTime()<=to2.getTime() && cta.getTime()>=from.getTime()){
        citasFiltradas.push(cita);
        console.log(cita.fechaInicio,"   ",cta)
      }
    }


    return citasFiltradas;


  }

  sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}


  ngOnInit() {

  }
}
