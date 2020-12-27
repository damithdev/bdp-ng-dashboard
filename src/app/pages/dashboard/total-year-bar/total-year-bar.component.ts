import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {FileioService} from '../fileio.service';

@Component({
  selector: 'ngx-total-year-bar',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class TotalYearBarComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  data: string[][];

  constructor(private theme: NbThemeService, private fileioService: FileioService) {
  }

  getData() {
    this.fileioService.readCSVFileTranspose('assets/data/histogram.csv', (data) => {
      this.data = data;
      this.doLoadChart(data);
    });
  }

  doLoadChart(data) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: data[1],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Score',
            type: 'bar',
            barWidth: '80%',
            data: data[2],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.getData();
  }
}
