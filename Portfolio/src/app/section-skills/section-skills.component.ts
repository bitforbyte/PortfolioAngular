import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.css' , '../sections/sections.component.css']
})
export class SectionSkillsComponent implements OnInit {

  skillList: any [] = [
    {
      title: "Front End",
      skills : [
        {
          iconImagePath: '../../assets/img/icons/icon_html5.png', title: 'HTML 5/CSS', description: 'Experienced with building responsive programs using HTML5. Tutored HTML5 during a Web design course at Walters State'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_angular.png', title: 'Angular', description: 'Experience with debugging and developing front end applications using angular'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_js.png', title: 'JS/TypeScript', description: 'Experience in Javascript for both websites as well as Node js to create Applications'
        }
      ]
    },
    {
      title: "Back End",
      skills : [
        {
          iconImagePath: '../../assets/img/icons/icon_cs.png', title: 'C#', description: 'Knowledge in using C# language to build applications, such as Map Reduce(Listed below), also familiar using lambda functions, event handling, and using the .NET framework'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_sql.png', title: 'SQL', description: 'Experience using SQL to interact with databases, created a working bookstore database while attending Walters State'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_cpp.png', title: 'C++', description: 'Strong background in C++, including knowledge in dynamic programing, Network Flow, B-Trees , and search algorithms'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_python.png', title: 'Python', description: 'Experience using python to develop different types of projects from web-scrappers to scientific Computation'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_c.png', title: 'C', description: 'Extensive knowledge in C Language, including multithreading using forks and threads to create applications such as jmalloc to allocate an manage memory similar to malloc'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_java.png', title: 'Java', description: 'Experienced in using java to develop different applications including a Android Todo list Application'
        }
      ]
    },
    {
      title: "Coding Environments",
      skills : [
        {
          iconImagePath: '../../assets/img/icons/icon_visstd.png', title: 'Visual Studio Pro/Code', description: 'Using both Visual Studio pro and VS code for day to day work'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_vim.png', title: 'Vim', description: 'Familiar with working in vim to write code'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_git.png', title: 'Git', description: 'Experienced in both the command line interface and desktop interface'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_jenkins.png', title: 'Jenkins', description: 'Using Jenkins to manage our continious deployment'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_docker.png', title: 'Docker', description: 'Using Docker in our applications and familiar with it to containerizing .NET Core'
        },
        {
          iconImagePath: '../../assets/img/icons/icon_postman.png', title: 'Postman', description: 'Familiar working with postman to test REST/SOAP apis'
        }
      ]
    }

  ]

  skillsFrontEnd: any[] = [
    {
      iconImagePath: '../../assets/img/icons/icon_html5.png', title: 'HTML 5/CSS', description: 'Experienced with building responsive programs using HTML5. Tutored HTML5 during a Web design course at Walters State'
    },
    {
      iconImagePath: '../../assets/img/icons/icon_angular.png', title: 'Angular', description: 'Experience with debugging and developing front end applications using angular'
    },
    {
      iconImagePath: '../../assets/img/icons/icon_js.png', title: 'JS/TypeScript', description: 'Experience in Javascript for both websites as well as Node js to create Applications'
    }
  ]

  skillsBackEnd: any[] = [
    {
      iconImagePath: '../../assets/img/icons/icon_cs.png', title: 'C#', description: 'Knowledge in using C# language to build applications, such as Map Reduce(Listed below), also familiar using lambda functions, event handling, and using the .NET framework'
    },
    {
      iconImagePath: '../../assets/img/icons/icon_sql.png', title: 'SQL', description: 'Experience using SQL to interact with databases, created a working bookstore database while attending Walters State'
    },
    {
      iconImagePath: '../../assets/img/icons/icon_cpp.png', title: 'C++', description: 'Strong background in C++, including knowledge in dynamic programing, Network Flow, B-Trees , and search algorithms'
    },
    {
      iconImagePath: '../../assets/img/icons/icon_python.png', title: 'Python', description: 'Experience using python to develop different types of projects from web-scrappers to scientific Computation'
    },
    {
      iconImagePath: '../../assets/img/icons/icon_c.png', title: 'C', description: 'Extensive knowledge in C Language, including multithreading using forks and threads to create applications such as jmalloc to allocate an manage memory similar to malloc'
    },
    {
      iconImagePath: '../../assets/img/icons/icon_java.png', title: 'Java', description: 'Experienced in using java to develop different applications including a Android Todo list Application'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
