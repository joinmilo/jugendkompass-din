import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRestorationService } from 'ngx-cinlib/core';
import { DeviceService } from './core/services/device.service';
import { FavIconService } from './core/services/favicon.service';
import { SchemaService } from './core/services/schema.service';
import { ThemeService } from './core/services/theme.service';
import { BrowserTitleService } from './core/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(
    public browserTitleService: BrowserTitleService,
    public deviceService: DeviceService,
    public themeService: ThemeService,
    public favIconService: FavIconService,
    public schemaService: SchemaService,
    public scrollRestorationService: ScrollRestorationService,
  ) { }

}
