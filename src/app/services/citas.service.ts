import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class CitasService {
  url="https://agenda-4f673.firebaseio.com/citas.json"
  urlGeneral="https://agenda-4f673.firebaseio.com/citas"
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


  getCitas(){
    return this.http.get(this.url)
      .map(res=>res.json())
  }

  editaCita(cita){
    let url=`${this.urlGeneral}/${cita.key$}.json`
    delete cita.key$;
    let body=JSON.stringify(cita);
    let headers=new Headers({
      'Content-Type':'application/json'
    });




    return this.http.put(url,body,{headers})
      .map(res=>{
        console.log(res.json())
      })

  }

  eliminaCita(id){
    let url=`${this.urlGeneral}/${id}.json`

    return this.http.delete(url)
      .map(res=>{
        console.log(res.json())
      })
  }

}
