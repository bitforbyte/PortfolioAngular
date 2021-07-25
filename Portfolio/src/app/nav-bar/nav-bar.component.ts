import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPostion: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.elementPostion = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if (windowScroll >= this.elementPostion){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
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
