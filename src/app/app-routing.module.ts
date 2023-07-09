import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlfredComponent } from './alfred/alfred.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'alfred', pathMatch: 'full' },
  { path: 'alfred', component: AlfredComponent, pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
