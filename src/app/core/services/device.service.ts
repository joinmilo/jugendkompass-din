import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {

  public isIOs: boolean = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

  constructor() {
    if (this.isIOs) {
      document.documentElement.style.setProperty('--header-height', '7rem');
    }
  }

}
