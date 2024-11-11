import { Component, HostListener } from '@angular/core';
import { isIOs } from 'src/app/core/utils/device.utils';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.scss']
})
export class PortalHeaderComponent {

  public scrolled = false;
  public isIOs = isIOs();

  @HostListener('window:scroll', ['$event'])
  public onScroll(): void {
    this.scrolled = window?.scrollY > 0;
  }
}
