import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Maybe, collapse } from 'ngx-cinlib/core';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconComponent, RegularIcon, SolidIcon } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
@Component({
  selector: 'app-gradient-button',
  templateUrl: './gradient-button.component.html',
  styleUrls: ['./gradient-button.component.scss'],
  standalone: true,
  imports: [
    CoreModule,
    I18nDirective,
    IconComponent,
    MatButtonModule,
    NgTemplateOutlet,
    RouterModule,
  ],
  animations:[
    collapse()
  ]
})
export class GradientButtonComponent {

  @Input()
  public description?: Maybe<string>;

  @Input()
  public icon?: SolidIcon | RegularIcon;

  @Input()
  public label?: Maybe<string>;

  @Input()
  public name?: Maybe<string>;

  @Input()
  public url?: Maybe<string>;

  @Input()
  public openNewTab = false;

  public showDescription = false;

}
