import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolios = [
    {
      "githublink": "https://github.com/your-repo",
      "img": "/assets/img/Pollo loco 1.svg",
      "website": "https://yourwebsite.com",
      "title": "Pollo loco",
      "description": "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      "skills": "HTML | CSS | JavaScript"
    },
    {
      "githublink": "https://github.com/your-repo",
      "img": "/assets/img/Join.svg",
      "website": "https://yourwebsite.com",
      "title": "Join",
      "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      "skills": "HTML | CSS | JavaScript"
    }
  ]

  constructor() {
    
  }
}
