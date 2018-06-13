import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class LugarService {
  key:any;
  constructor(private http:Http) {
  this.key="AIzaSyAUNOx7GjU1M1ZLle6FC7CtTcvcWoCaTds"
  }


  getLugares(palabra){
    let url="https://maps.googleapis.com/maps/api/place/textsearch/json?query="
    let newPalabra=this.conviertePalabra(palabra);
    let urlCompleto=url+newPalabra+"&key="+this.key;
    console.log(urlCompleto);
     return this.http.get(urlCompleto)
      .map(res=>res.json())
  }



  conviertePalabra(palabra:string){
    let newP:any=palabra;
    for(let i=0;i<palabra.length;i++){
      if(palabra[i]==" "){
        newP=newP.replace(" ","+")
      }
    }
    return newP
  }

}
