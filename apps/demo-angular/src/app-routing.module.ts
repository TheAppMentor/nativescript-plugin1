import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'prash-ios-trial1', loadChildren: () => import('./plugin-demos/prash-ios-trial1.module').then(m => m.PrashIosTrial1Module) },
	{ path: 'prash-pod-plugin', loadChildren: () => import('./plugin-demos/prash-pod-plugin.module').then(m => m.PrashPodPluginModule) },
	{ path: 'test-ios-native-package', loadChildren: () => import('./plugin-demos/test-ios-native-package.module').then(m => m.TestIosNativePackageModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
