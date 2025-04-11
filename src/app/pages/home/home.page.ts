import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  register: boolean = false;
  show: boolean = false;
  currentDate?: string;

  constructor() {}

  ngOnInit() {
    this.currentDate = new Date().toLocaleTimeString();
  }

}
