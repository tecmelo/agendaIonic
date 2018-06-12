import { Component, OnInit } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';



@Component({
  selector: 'app-modal-contactos',
  templateUrl: 'modal-contactos.component.html',
})
export class ModalContactosComponent implements OnInit {
  listaContactos:any;


  constructor(public viewCtrl: ViewController,
              private contacts: Contacts) {


                                this.contacts.find(["*"])
                                   .then(res => {
                                     let datosMostar:any[]=[];
                                     res.map((item) =>{
                                       if(item.displayName != null && item.phoneNumbers != null){
                                         datosMostar.push({displayName:item.displayName,phoneNumbers:item.phoneNumbers})
                                       }
                                     })
                                     this.listaContactos = datosMostar;
                                   },error => {
                                     console.log({error:error})
                                   })

                                   console.log(this.listaContactos)

 }

  ngOnInit() {}

  dismiss(contacto) {

  this.viewCtrl.dismiss(contacto);
}

}
