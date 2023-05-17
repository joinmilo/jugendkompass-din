import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { EventFilterModule } from 'src/app/shared/event-filter/event-filter.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalSurveyOverviewComponent } from './components/overview/portal-survey-overview.component';
import { portalSurveyOverviewStateKey } from './constants/portal-survey-overview.constant';
import { PortalSurveyOverviewRoutingModule } from './portal-survey-overview-routing.module';
import { PortalSurveyOverviewEffects } from './state/portal-survey-overview.effects';
import { portalSurveyOverviewReducer } from './state/portal-survey-overview.reducer';

const components = [
  PortalSurveyOverviewComponent,
];

const framework = [
  CommonModule
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  CardModule,
  EventFilterModule,
  FormModule,
  MatCardModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  PortalSurveyOverviewRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(
    portalSurveyOverviewStateKey,
    portalSurveyOverviewReducer
  ),
  EffectsModule.forFeature([PortalSurveyOverviewEffects]),
];

// const providers = [QueryRouterService];

@NgModule({
  declarations: [...components],
  imports: [...framework, ...materials, ...modules, ...libs],
  exports: [...components],
  // providers: [...providers],
})
export class PortalSurveyOverviewModule {}