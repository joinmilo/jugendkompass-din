import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.scss']
})
export class PortalHeaderComponent {

  public scrolled = false;

  @HostListener('window:scroll', ['$event'])
  public onScroll(): void {
    this.scrolled = window?.scrollY > 0;
  }
}
