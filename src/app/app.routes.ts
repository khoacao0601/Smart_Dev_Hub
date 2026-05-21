import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'log-analyzer', pathMatch: 'full' },
  {
    path: 'log-analyzer',
    loadComponent: () =>
      import('./features/log-analyzer/log-analyzer.component')
        .then(m => m.LogAnalyzerComponent)
  },
];
