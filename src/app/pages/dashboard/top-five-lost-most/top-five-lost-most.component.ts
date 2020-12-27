import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {FileioService} from '../fileio.service';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'ngx-top-five-lost-most',
  templateUrl: './top-five-lost-most.component.html',
  styleUrls: ['./top-five-lost-most.component.scss']
})
export class TopFiveLostMostComponent implements OnDestroy {

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
    this.fileioService.readHiveFile('assets/data/mostlost', (data) => {
      this.data = data;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
