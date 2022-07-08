import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPrashIosTrial1 } from '@demo/shared';
import { } from '@prash/prash-ios-trial1';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPrashIosTrial1 {
	
}
