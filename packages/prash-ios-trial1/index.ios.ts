import { LabelMarqueeCommon } from './common';

export class LabelMarquee extends LabelMarqueeCommon {
  createNativeView() {
    return MarqueeLabel.alloc().init();
  }

  initNativeView() {
    const nativeView = <MarqueeLabel>this.nativeView;
    nativeView.fadeLength = 10;
    nativeView.scrollDuration = 8;
  }
}
