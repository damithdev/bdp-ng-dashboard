import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {FileioService} from '../fileio.service';

@Component({
  selector: 'ngx-more-type-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class MoreTypePieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  data: string[][];

  constructor(private theme: NbThemeService, private fileioService: FileioService) {
  }

  getData() {
    this.fileioService.readCSVFile('assets/data/countrypercentagetype.csv', (data) => {
      this.data = data;
      this.doLoadData(data);
    });
  }

  doLoadData(data) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Hosted Only One Type', 'Hosted More than One Type'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Countries',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: data[1][2], name: 'Hosted Only One Type' },
              { value: data[0][2], name: 'Hosted More than One Type' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
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
