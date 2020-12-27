// tslint:disable:no-console

import {Component, Input, OnInit} from '@angular/core';
import {FileioService} from '../fileio.service';

@Component({
  selector: 'ngx-total-played-result',
  templateUrl: './total-played-result.component.html',
  styleUrls: ['./total-played-result.component.scss'],
})
export class TotalPlayedResultComponent implements OnInit {
  _data: string[][];

  @Input()
  get data(): string[][] {return  this._data;
  }
  set data(data) {
    this._data = data;
    if (data !== null) {
      const total = data.map( arr => {
          return arr[1];
        },
      ).reduce(function (a, b): string {
          return (parseInt(a, 10) + parseInt(b, 10)).toString();
        },
      );

      this._data.push(['TOTAL', total ]);
    }

    // console.log(this._data);
  }

  constructor(private fileioService: FileioService) { }

  ngOnInit(): void {
    this.fileioService.readTSVFile('assets/data/matchresult.tsv', (data) => {
      this.data = data;
    });
  }

}
