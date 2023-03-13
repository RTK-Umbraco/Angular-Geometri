import { Component, Input } from '@angular/core';
import { Rektangel } from 'src/app/class/rektangel/rektangel';

@Component({
  selector: 'app-geometri',
  templateUrl: './geometri.component.html',
  styleUrls: ['./geometri.component.css']
})
export class GeometriComponent {
  sideA: number | undefined;

  geometriImageUrl:string = "./assets/img/geometri.png"

  styling:string = 'italicClass boldClass colorClass';
  perimeter: number
  areal: number;

  constructor() {
    this.perimeter = this.rektangel.CalculatePerimeter();
    this.areal   = this.rektangel.CalculateArea();
  }
  rektangel = new Rektangel(2);


}
