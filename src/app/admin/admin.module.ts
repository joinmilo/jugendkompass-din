import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { PortalFooterModule } from '../portal/modules/footer/portal-footer.module';
import { PortalHeaderModule } from '../portal/modules/header/portal-header.module';
import { LoadingComponent } from '../shared/layout/loading/loading.component';
import { PortalRoutingModule } from './admin-routing.module';
import { adminStateKey } from './constants/admin.constants';
import { AdminLandingComponent } from './modules/landing/admin-landing.component';
import { AdminLayoutModule } from './modules/layout/admin-layout.module';
import { adminReducer } from './state/admin.reducer';

const framework = [
  CommonModule,
  PortalRoutingModule
];

const modules = [
  AdminLandingComponent,
  AdminLayoutModule,
  LoadingComponent,
  PortalHeaderModule,
  PortalFooterModule,
];

const libs = [
  StoreModule.forFeature(adminStateKey, adminReducer),
];

@NgModule({
  imports: [
    ...framework,
    ...libs,
    ...modules,
  ],
})
export class AdminModule { }