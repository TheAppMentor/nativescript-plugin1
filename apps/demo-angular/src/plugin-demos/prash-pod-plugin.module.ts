import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PrashPodPluginComponent } from './prash-pod-plugin.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: PrashPodPluginComponent }])],
  declarations: [PrashPodPluginComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class PrashPodPluginModule {}
