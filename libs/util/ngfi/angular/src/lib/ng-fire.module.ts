import { NgModule } from '@angular/core';

import { AuthService } from './auth';
import { BackendService } from './backend';

/**
 * NgFire Module
 *
 * Contains: Interactions with backend, Authentication.
 */
@NgModule({
  imports: [],
  providers: [AuthService, BackendService],
  exports: [],
})
export class NgFireModule {}
