import { Component } from '@angular/core';
import {environment} from '../environments/environment'

@Component({
  selector: 'app-root',
  template: `AppComponent`,
  standalone: true,
})
export class AppComponent {
  constructor(){
    console.log(environment.production);
    console.log(environment.apiEndPoint);
    
  }
  title = 'Configurations';
}
