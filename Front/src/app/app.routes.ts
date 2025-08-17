import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'profile',
        loadComponent: () =>
            import('./pages/profile/profile.component').then((m) => m.ProfileComponent),
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
    },
    {
        path: 'experience',
        loadComponent: () =>
            import('./pages/experience/experience.component').then((m) => m.ExperienceComponent),
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    },
    { path: '**', redirectTo: 'home' }
];

