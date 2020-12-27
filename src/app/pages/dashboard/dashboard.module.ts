import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {TotalPlayedResultComponent} from './total-played-result/total-played-result.component';
import {TotalHomeGoalsBarComponent} from './total-home-goals-bar/total-home-goals-bar.component';
import {TopTenAwayAvgGoalsComponent} from './top-ten-away-avg-goals/top-ten-away-avg-goals.component';
import {TopFiveLostMostComponent} from './top-five-lost-most/top-five-lost-most.component';
import {TotalPlayedCityComponent} from './total-played-city/total-played-city.component';
import {MoreTypePieComponent} from './more-type-pie/more-type-pie.component';
import {TotalYearBarComponent} from './total-year-bar/total-year-bar.component';
import {TotalWinLossComponent} from './total-win-loss/total-win-loss.component';
import {NbCardModule, NbIconModule, NbListModule, NbProgressBarModule} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {TotalHomeGoalsChartComponent} from './total-home-goals-bar/total-home-goals-chart.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {ChartPanelHeaderComponent} from './total-home-goals-bar/chart-panel-header/chart-panel-header.component';
import {DashboardLegendChartComponent} from './component/legend-chart/legend-chart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TotalPlayedResultComponent,
    TotalHomeGoalsBarComponent,
    TopTenAwayAvgGoalsComponent,
    TopFiveLostMostComponent,
    TotalPlayedCityComponent,
    MoreTypePieComponent,
    TotalYearBarComponent,
    TotalWinLossComponent,
    TotalHomeGoalsChartComponent,
    ChartPanelHeaderComponent,
    DashboardLegendChartComponent],
  imports: [
    CommonModule,
    NbProgressBarModule,
    NbCardModule,
    ThemeModule,
    NbListModule,
    NbIconModule,
    NgxEchartsModule,
  ],
})
export class DashboardModule {
}
