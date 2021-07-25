import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome(){
    this.smoothScrollToSection("home");
  }

  toAbout(){
    this.smoothScrollToSection("about");
  }

  toExperience(){
    this.smoothScrollToSection("experience");
  }

  toSkills(){
    this.smoothScrollToSection("Skills");
  }

  toContactMe(){
    this.smoothScrollToSection("ContactMe");
  }

  smoothScrollToSection(tagValue: string){
    document.getElementById(tagValue)?.scrollIntoView({behavior: "smooth"});
  }

}
