import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabrina-home',
  templateUrl: './sabrina-home.component.html',
  styleUrls: ['./sabrina-home.component.css']
})
export class SabrinaHomeComponent implements OnInit {
  data1 = new Date();
  constructor() { }

  ngOnInit() {
  }

}