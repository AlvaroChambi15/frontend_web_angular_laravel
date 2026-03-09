import { Component } from '@angular/core';
import { Nav } from '../components/nav/nav';

@Component({
  selector: 'app-servicios',
  imports: [Nav],
  templateUrl: './servicios.html',
  styles: `
  @import url('https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css');

.gradient {
        background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}


  `,
})
export class Servicios {

}
