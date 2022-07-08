import { Component, NgZone } from '@angular/core';
import { DemoSharedPrashIosTrial1 } from '@demo/shared';
import { } from '@prash/prash-ios-trial1';

@Component({
	selector: 'demo-prash-ios-trial1',
	templateUrl: 'prash-ios-trial1.component.html',
})
export class PrashIosTrial1Component {
  
  demoShared: DemoSharedPrashIosTrial1;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedPrashIosTrial1();
  }

}