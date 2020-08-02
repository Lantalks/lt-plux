import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		pathMatch: 'full',
		data: {animation: 'HomePage'}
	},
	{
		path: '**',
		component: Error404Component,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
