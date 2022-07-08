import { Component, NgZone } from '@angular/core';
import { DemoSharedPrashPodPlugin } from '@demo/shared';
import { } from '@prash/prash-pod-plugin';

@Component({
	selector: 'demo-prash-pod-plugin',
	templateUrl: 'prash-pod-plugin.component.html',
})
export class PrashPodPluginComponent {
  
  demoShared: DemoSharedPrashPodPlugin;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedPrashPodPlugin();
  }

}