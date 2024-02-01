import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { CaptchaService } from 'ngx-cinlib/forms/captcha';
import { FeedbackService } from 'ngx-cinlib/modals/feedback';
import { SidenavService } from 'ngx-cinlib/modals/sidenav';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AppEntity, ConfigurationEntity, LabelEntity, LanguageEntity, SocialMediaEntity, ThemeEntity } from 'src/app/core/api/generated/schema';
import { GetAppsGQL } from '../../api/generated/get-apps.query.generated';
import { GetConfigurationsGQL } from '../../api/generated/get-configurations.query.generated';
import { GetLabelsGQL } from '../../api/generated/get-labels.query.generated';
import { GetLanguagesGQL } from '../../api/generated/get-languages.query.generated';
import { GetSocialMediaGQL } from '../../api/generated/get-social-media.query.generated';
import { GetThemeGQL } from '../../api/generated/get-theme.query.generated';
import { GetServerInformationGQL } from '../../api/generated/server-info.query.generated';
import { HelpComponent } from '../../components/help/help.component';
import { hCaptchaSitekeyConfig } from '../../constants/configuration.constants';
import { CoreActions } from '../actions/core.actions';
@Injectable()
export class CoreEffects implements OnInitEffects {

  ngrxOnInitEffects(): Action {
    return CoreActions.init();
  }

  getApps = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getAppsService.watch().valueChanges),
    map(response => CoreActions.setApps(response.data.getApps?.result as AppEntity[]))
  ));

  getConfigurations = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getCofigurationsService.watch().valueChanges),
    filter(response => !!response.data.getConfigurations?.result?.length),
    map(response => CoreActions.setConfigurations(response.data.getConfigurations?.result as ConfigurationEntity[]))
  ));

  getLabels = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getLabelsService.watch().valueChanges),
    filter(response => !!response?.data?.getLabels?.result?.length),
    map(response => CoreActions.setLabels(response.data.getLabels?.result as LabelEntity[]))
  ));

  getLanguages = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getLanguagesService.watch({
      params: {
        expression: {
          entity: {
            path: 'active',
            value: 'true'
          }
        }
      }
    }).valueChanges),
    filter(response => !!response?.data?.getLanguages?.result?.length),
    map(response => CoreActions.setLanguages(response.data.getLanguages?.result as LanguageEntity[]))
  ));

  getServerInfo = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getServerInfoService.watch().valueChanges),
    filter(response => !!response?.data?.getInformation?.version),
    map(response => CoreActions.setServerInfo(response.data.getInformation))
  ));

  getSocialMedia = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getSocialMediaService.watch().valueChanges),
    map(response => CoreActions.setSocialMedia(response.data.getSocialMedias?.result as SocialMediaEntity[]))
  ));

  getTheme = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getThemeService.watch().valueChanges),
    filter(response => !!response?.data?.getThemes?.result?.length),
    map(response => CoreActions.setThemes(response.data.getThemes?.result as ThemeEntity[]))
  ));

  setCaptchaSiteKey = createEffect(() => this.actions.pipe(
    ofType(CoreActions.setConfigurations),
    tap(action => console.log(action?.configurations?.find(c => c?.code === hCaptchaSitekeyConfig)?.value as string)),
    tap(action => this.captchaService.addSiteKey(action?.configurations?.find(c => c?.code === hCaptchaSitekeyConfig)?.value as string)),
  ), { dispatch: false });

  setFeedback = createEffect(() => this.actions.pipe(
    ofType(CoreActions.setFeedback),
    tap(action => this.feedbackService.open(action.feedback)),
  ), { dispatch: false });

  setHelp = createEffect(() => this.actions.pipe(
    ofType(CoreActions.setHelp),
    tap(action => this.sidenavService.open({
      component: HelpComponent,
      params: {
        help: action.help,
      }
    })),
  ), { dispatch: false });

  setSidenav = createEffect(() => this.actions.pipe(
    ofType(CoreActions.setSidenavComponent),
    tap(action => this.sidenavService.open(action.sidenav)),
  ), { dispatch: false });

  constructor(
    private actions: Actions,
    private captchaService: CaptchaService,
    private feedbackService: FeedbackService,
    private getAppsService: GetAppsGQL,
    private getCofigurationsService: GetConfigurationsGQL,
    private getLabelsService: GetLabelsGQL,
    private getLanguagesService: GetLanguagesGQL,
    private getServerInfoService: GetServerInformationGQL,
    private getSocialMediaService: GetSocialMediaGQL,
    private getThemeService: GetThemeGQL,

    private sidenavService: SidenavService,
  ) { }
}
