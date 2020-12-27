import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {FileioService} from '../fileio.service';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'ngx-top-ten-away-avg-goals',
  templateUrl: './top-ten-away-avg-goals.component.html',
  styleUrls: ['./top-ten-away-avg-goals.component.scss'],
})
export class TopTenAwayAvgGoalsComponent implements OnDestroy {

  private alive = true;

  data: string[][];

  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private fileioService: FileioService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });

    this.getData();
  }

  getData() {
    this.fileioService.readHiveFile('assets/data/topavggoals', (data) => {
      const d: string[][] = [];
      for ( let i = 0; i < data.length; i++) {
        const num = Math.round((parseFloat(data[i][1]) + Number.EPSILON) * 100) / 100;
        if (d[i] === undefined) d[i] = [];
        d[i][0] = (i + 1).toString();
        d[i][1] = data[i][0];
        d[i][2] = num.toString();
      }
      this.data = d;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
