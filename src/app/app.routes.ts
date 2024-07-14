import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImpressumComponent } from './side-content/impressum/impressum.component';
import { PrivacyPolicyComponent } from './side-content/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: 'privacy-policy', component:PrivacyPolicyComponent},
    { path: 'impressum', component:ImpressumComponent},
];
