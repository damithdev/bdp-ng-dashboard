// tslint:disable:no-console

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FileioService} from '../fileio.service';
import {StatsBarData} from '../../../@core/data/stats-bar';
import {takeWhile} from 'rxjs/operators';
import {ProfitBarAnimationChartData} from '../../../@core/data/profit-bar-animation-chart';
import {ProfitChart} from '../../../@core/data/profit-chart';
import {OrderProfitChartSummary, OrdersProfitChartData} from '../../../@core/data/orders-profit-chart';

@Component({
  selector: 'ngx-total-home-goals-bar',
  templateUrl: './total-home-goals-bar.component.html',
  styleUrls: ['./total-home-goals-bar.component.scss'],
})
export class TotalHomeGoalsBarComponent implements OnInit {
  goalsChartData: TotalGoalsChart;

  private alive = true;

  chartData: number[];

  constructor(private fileioService: FileioService, private ordersProfitChartService: OrdersProfitChartData) {
    this.goalsChartData = {
      chartLabel: [],
      data: [[], []],
    };
  }


  data: string[][];



  ngOnInit(): void {
    this.fileioService.readHiveFile('assets/data/goalsbyteam', (data) => {
      const chartData = {
        chartLabel: [],
        data: [
          [],
          [],
        ],
      };

      data.forEach((item: string[]) => {
        chartData.chartLabel.push(item[0]);
        chartData.data[0].push(parseInt(item[1], 10));
        chartData.data[1].push(parseInt(item[2], 10));

      });
      this.goalsChartData = chartData;
    });

  }


}

export interface TotalGoalsChart {
  chartLabel: string[];
  data: number[][];
}
