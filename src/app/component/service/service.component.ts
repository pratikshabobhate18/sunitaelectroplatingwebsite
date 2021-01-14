import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(180deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('800ms ease-out')),
      transition('inactive => active', animate('800ms ease-in'))
    ])
  ]
})
export class ServiceComponent implements OnInit {

  constructor() { }
  imageUrl1 : string = "/assets/img/img1.jpg";
  imageUrl2 : string = "/assets/img/img2.png";
  imageUrl3 : string = "/assets/img/img3.png";
  imageUrl4 : string = "/assets/img/img4.jpg";
  imageUrl5 : string = "/assets/img/img5.png";

  flip: string = 'inactive';
  flip1: string = 'inactive';
  flip2: string = 'inactive';
  flip3: string = 'inactive';
  flip4: string = 'inactive';

  ngOnInit(): void {   //ha ahe ngon init ha jevha componrnt load hoto back krun ethe hoto ,hnje jevha ha componet
                      ////open hoto tevha he fun bydefauld load hot
  this.flip= 'inactive';
  this.flip1= 'inactive';
  this.flip2= 'inactive';
  this.flip3= 'inactive';
  this.flip4= 'inactive';

  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    this.flip1= 'inactive';
    this.flip2= 'inactive';
    this.flip3= 'inactive';
    this.flip4= 'inactive';
    
  }
  toggleFlip1() {
    this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
    this.flip= 'inactive';
    this.flip2= 'inactive';
    this.flip3= 'inactive';
    this.flip4= 'inactive'
  }
  toggleFlip2() {
    this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
    this.flip= 'inactive';
    this.flip1= 'inactive';
    this.flip3= 'inactive';
    this.flip4= 'inactive'
  }
  toggleFlip3() {
    this.flip3 = (this.flip3 == 'inactive') ? 'active' : 'inactive';
    this.flip= 'inactive';
    this.flip1= 'inactive';
    this.flip2= 'inactive';
    this.flip4= 'inactive'
  }
  toggleFlip4() {
    this.flip4 = (this.flip4 == 'inactive') ? 'active' : 'inactive';
    this.flip= 'inactive';
    this.flip1= 'inactive';
    this.flip2= 'inactive';
    this.flip3= 'inactive';
  }

}
