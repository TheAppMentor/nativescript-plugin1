import { Label } from '@nativescript/core';
import { PrashPodPluginCommon, PrashTextClassCommon } from './common';

export class PrashPodPlugin extends PrashPodPluginCommon {
    saySomething() {
        return "Talking from inside pod prash-pod-plugin : Hellow World"
    }

    /* 
    let someGuy = PrashTest.alloc().init()
    console.log("We are in the PrashPodPlugin - iOS Guy")
    console.log("We are in the PrashPodPlugin")
    */
}


export class PrashTextClass extends PrashTextClassCommon {
  createNativeView() {
      //return PrashTestClassFromFraework.alloc().init()
      //let someGuy = PrashTest.alloc().init()
      console.log("We are in the PrashPodPlugin - iOS Guy")
      console.log("We are in the PrashPodPlugin")
      
      const prashTest = PrashTest.alloc().init();
      const showText = prashTest.someFunc() 
     
      console.log("Holy Cow", showText)

      const myView = UIView.alloc().initWithFrame(CGRectMake(0, 0, 200, 200));
      myView.backgroundColor = UIColor.greenColor;
      return myView 
  }

    initNativeView() {
    console.log("Here we are man.. ")
        const nativeView = <PrashTextClass>this.nativeView as PrashTextClass;
    }
}
