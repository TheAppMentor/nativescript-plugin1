import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTestIosNativePackage } from '@demo/shared';
import { } from '@prash/test-ios-native-package';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTestIosNativePackage {
	
}
