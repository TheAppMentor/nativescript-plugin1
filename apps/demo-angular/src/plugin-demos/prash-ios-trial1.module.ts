import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PrashIosTrial1Component } from './prash-ios-trial1.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: PrashIosTrial1Component }])],
  declarations: [PrashIosTrial1Component],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class PrashIosTrial1Module {}
