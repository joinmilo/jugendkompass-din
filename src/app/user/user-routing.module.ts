import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { slug } from '../core/constants/core.constants';
import { LoginComponent } from './components/login/login.component';
import { PasswordSendMailComponent } from './components/password-send-mail/password-send-mail.component';
import { PasswordSetNewComponent } from './components/password-set-new/password-set-new.component';
import { RegistrationRequiredComponent } from './components/registration-required/registration-required.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VerificationSendMailComponent } from './components/verification-send-mail/verification-send-mail.component';
import { VerificationComponent } from './components/verification/verification.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'registration-required',
    component: RegistrationRequiredComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'password',
    component: PasswordSendMailComponent
  },
  {
    path: `password/:${slug}`,
    component: PasswordSetNewComponent
  },
  {
    path: `verification`,
    component: VerificationSendMailComponent
  },
  {
    path: `verification/:${slug}`,
    component: VerificationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserPortalRoutingModule {}
