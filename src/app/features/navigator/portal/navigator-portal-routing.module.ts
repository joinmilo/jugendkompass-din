import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navigatorFeatureKey } from 'src/app/core/constants/feature.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';

const routes: Routes = [
  // {
  //   path: navigatorFeatureKey,
  //   loadChildren: () => import('src/app/features/navigator/portal/details/navigator-portal-details.module')
  //     .then((imported) => imported.NavigatorPortalDetailsModule),
  // },
  {
    path: `${navigatorFeatureKey}/:${slug}`,
    loadChildren: () => import('src/app/features/navigator/portal/details/navigator-portal-details.module')
      .then((imported) => imported.NavigatorPortalDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigatorPortalRoutingModule { }