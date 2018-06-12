import { Component, OnInit } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';



@Component({
  selector: 'app-modal-contactos',
  templateUrl: 'modal-contactos.component.html',
})
export class ModalContactosComponent implements OnInit {
  constructor(public viewCtrl: ViewController) {  }

  ngOnInit() {}

  dismiss() {
  let data = { 'foo': 'bar' };
  this.viewCtrl.dismiss(data);
}

}
