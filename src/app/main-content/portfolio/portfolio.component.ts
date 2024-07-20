import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { Subscription } from 'rxjs';

// Definieren der Schnittstelle für ein Portfolio-Element
interface PortfolioItem {
  githublink: string;
  img: string;
  website: string;
  title: string;
  description: string;
  skills: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolios: PortfolioItem[] = [];

  portfoliosEn: PortfolioItem[] = [
    {
      "githublink": "https://github.com/Safa325/pollo_loco",
      "img": "/assets/img/Pollo loco 1.svg",
      "website": "https://safa-shamari.developerakademie.net/pollo_loco/index.html",
      "title": "Pollo loco",
      "description": "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      "skills": "HTML | CSS | JavaScript"
    },
    {
      "githublink": "https://github.com/Safa325/join",
      "img": "/assets/img/Join.svg",
      "website": "https://join-113.developerakademie.net/join/login.html",
      "title": "Join",
      "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      "skills": "HTML | CSS | JavaScript"
    }
  ];

  portfoliosDe: PortfolioItem[] = [
    {
      "githublink": "https://github.com/Safa325/pollo_loco",
      "img": "/assets/img/Pollo loco 1.svg",
      "website": "https://safa-shamari.developerakademie.net/pollo_loco/index.html",
      "title": "Pollo loco",
      "description": "Springe, renne und werfe im objektorientierten Spiel. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.",
      "skills": "HTML | CSS | JavaScript"
    },
    {
      "githublink": "https://github.com/Safa325/join",
      "img": "/assets/img/Join.svg",
      "website": "https://join-113.developerakademie.net/join/login.html",
      "title": "Join",
      "description": "Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.",
      "skills": "HTML | CSS | JavaScript"
    }
  ];

  en$ = this.languageService.en$;
  de$ = this.languageService.de$;
  private languageSubscription: Subscription | null = null;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageSubscription = this.en$.subscribe(en => this.updatePortfolios());
    this.languageSubscription.add(this.de$.subscribe(de => this.updatePortfolios()));
    this.updatePortfolios();
  }

  updatePortfolios() {
    this.en$.subscribe(en => {
      if (en) {
        this.portfolios = this.portfoliosEn;
      }
    });
    this.de$.subscribe(de => {
      if (de) {
        this.portfolios = this.portfoliosDe;
      }
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
