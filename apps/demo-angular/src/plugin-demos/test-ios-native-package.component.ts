import { Component, NgZone } from '@angular/core';
import { DemoSharedTestIosNativePackage } from '@demo/shared';
import { } from '@prash/test-ios-native-package';

@Component({
	selector: 'demo-test-ios-native-package',
	templateUrl: 'test-ios-native-package.component.html',
})
export class TestIosNativePackageComponent {
  
  demoShared: DemoSharedTestIosNativePackage;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedTestIosNativePackage();
  }

}