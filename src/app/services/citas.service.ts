import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class CitasService {
  url="https://agenda-4f673.firebaseio.com/citas.json"
  constructor(private http:Http) {  }

  agregaCita(cita){
    let body=JSON.stringify(cita);
    let headers=new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post(this.url,body,{headers})
      .map(res=>{
        console.log(res.json())
      })
  }
}
