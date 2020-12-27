import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {FileioService} from '../fileio.service';
import {takeWhile} from 'rxjs/operators';


@Component({
  selector: 'ngx-total-win-loss',
  templateUrl: './total-win-loss.component.html',
  styleUrls: ['./total-win-loss.component.scss'],
})
export class TotalWinLossComponent implements OnDestroy {

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
    this.fileioService.readCSVFile('assets/data/total_summary_matches.csv', (data) => {
      this.data = data;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
