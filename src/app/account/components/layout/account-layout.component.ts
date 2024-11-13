import { Component } from '@angular/core';
import { DeviceService } from 'src/app/core/services/device.service';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent {

  constructor(
    public deviceService: DeviceService,
  ) {}

}
