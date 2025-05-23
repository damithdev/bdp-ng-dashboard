import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import { DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
    DashboardModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
