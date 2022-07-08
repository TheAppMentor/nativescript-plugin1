import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPrashPodPlugin } from '@demo/shared';
import { } from '@prash/prash-pod-plugin';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPrashPodPlugin {
	
}
