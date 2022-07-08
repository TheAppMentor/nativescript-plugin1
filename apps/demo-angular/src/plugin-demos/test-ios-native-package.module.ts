import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { TestIosNativePackageComponent } from './test-ios-native-package.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: TestIosNativePackageComponent }])],
  declarations: [TestIosNativePackageComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class TestIosNativePackageModule {}
