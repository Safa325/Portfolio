import { Routes } from '@angular/router';
import { AbouMeComponent } from './main-content/abou-me/abou-me.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { ImpressumComponent } from './side-content/impressum/impressum.component';
import { PrivacyPolicyComponent } from './side-content/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: 'privacy-policy', component:PrivacyPolicyComponent},
    { path: 'impressum', component:ImpressumComponent},
];
