import { Component } from '@angular/core';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  btnName = 'Contenido';
  faCoffee = faChalkboard;
  asignatureItems: any[] = [
    {
      id: 0,
      title: 'Matemáticas',
    },
    {
      id: 1,
      title: 'Ciencias',
    },
    {
      id: 2,
      title: 'Sociales',
    },
    {
      id: 3,
      title: 'Lenguaje',
    },
  ];

}
