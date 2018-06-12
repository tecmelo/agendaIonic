import { Component } from '@angular/core';


import { CitasComponent } from '../citas/citas.component';
import { NuevaComponent } from '../nueva/nueva.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CitasComponent;
  tab2Root = NuevaComponent;
  constructor() {

  }
}
