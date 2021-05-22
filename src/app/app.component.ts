import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-angular';

  myElement = document.getElementById("myNav");
  public boundedValue= this.openNav.bind(this);

  closeNav() {
    if(
this.myElement
      ){
    this.myElement.style.width = "0%";
  }
}
public openNav(myElement:any):void {
  if(
this.myElement
    ){
  this.myElement.style.width = "0%";
}
}
}
