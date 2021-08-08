import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('ngNavAnchor') ngNavAnchor: ElementRef;
  @ViewChild('stickyMenu') menuElement: ElementRef;


  sticky: boolean = false;
  elementPostion: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // Using Anchor to avoid a page reload causing offset to be incorrect
    this.elementPostion = this.ngNavAnchor.nativeElement.offsetTop;
  }

  // Detect when the window is resized and adjust the height offset
  @HostListener('window:resize', ['$event'])
    onResize(event: UIEvent) {
      const w = event.target as Window;
      this.elementPostion = w.innerHeight;
    }

  // Listener that will determine if navbar needs to follow window
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      //console.log(`WS|EP: ${windowScroll} | ${this.elementPostion}`);
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
    const yOffset = -1*this.menuElement.nativeElement.offsetHeight;
    const element = document.getElementById(tagValue);

    if (element === null){
      alert('oopsie')
    } else {
      const yValue = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      console.log(this.menuElement.nativeElement.offsetHeight);
      window.scrollTo({top: yValue, behavior: 'smooth'});
    }
  }

}
