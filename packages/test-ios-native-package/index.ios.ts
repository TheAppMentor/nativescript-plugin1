import { TestIosNativePackageCommon, RAOViewCommon } from './common';

export class TestIosNativePackage extends TestIosNativePackageCommon {

}

export class RAOView extends RAOViewCommon {
    createNativeView() {
        var myView = UIView.alloc().initWithFrame(CGRectMake(0, 0, 200, 200));
        myView.backgroundColor = UIColor.greenColor;
        return myView 
    }

    initNativeView() {
        const nativeView = <RAOView>this.nativeView as RAOView;
    }
}
