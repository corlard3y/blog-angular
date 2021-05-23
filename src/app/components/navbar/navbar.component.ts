import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  myElement = window.document.getElementById("myNav");

  closeNav() {
    if(
      document.getElementById("myNav")
      ){
     document.getElementById("myNav")!.style.width = "0%";
  }
}
 openNav() {
  if(
    document.getElementById("myNav")
    ){
   document.getElementById("myNav")!.style.width = "100%";
}
}

  ngOnInit(): void {
  }
 
}
