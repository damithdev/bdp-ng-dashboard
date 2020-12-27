import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserActive, UserActivityData} from '../../../@core/data/user-activity';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';
import {FileioService} from '../fileio.service';

@Component({
  selector: 'ngx-total-played-city',
  templateUrl: './total-played-city.component.html',
  styleUrls: ['./total-played-city.component.scss'],
})
export class TotalPlayedCityComponent implements OnDestroy {

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
    this.fileioService.readTSVFile('assets/data/matchcityresult.tsv', (data) => {
      this.data = data;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
