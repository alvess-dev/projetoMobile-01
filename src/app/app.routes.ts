import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicial',
    loadComponent: () => import('./inicial/inicial.page').then( m => m.InicialPage)
  },
  {
    path: '',
    redirectTo: 'inicial',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'projeto',
    loadComponent: () => import('./projeto/projeto.page').then( m => m.ProjetoPage)
  },
  {
    path: 'equipe',
    loadComponent: () => import('./equipe/equipe.page').then( m => m.EquipePage)
  },
  {
    path: 'entrar',
    loadComponent: () => import('./entrar/entrar.page').then( m => m.EntrarPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },

];
