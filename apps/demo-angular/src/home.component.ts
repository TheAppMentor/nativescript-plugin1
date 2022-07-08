import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: 'prash-ios-trial1'
	},
	{
		name: 'prash-pod-plugin'
	},
	{
		name: 'test-ios-native-package'
	}
];
}