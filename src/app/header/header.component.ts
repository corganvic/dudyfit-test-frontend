import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild("home", {static: false}) home: ElementRef;
  @ViewChild("user", {static: false}) user: ElementRef;
  @ViewChild("trainer", {static: false}) trainer: ElementRef;
  @ViewChild("navigation", {static: false}) navigation: ElementRef;

  constructor(
  ) { }

  ngOnInit() {

  }

}
