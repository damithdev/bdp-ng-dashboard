// tslint:disable:no-console

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileioService {


  constructor(private http: HttpClient) {
  }

  readFile(filePath: string, callback): void {
    const reader = new FileReader();
    reader.onload = function() {
      callback(reader.result);
    };

    this.http.get(filePath, { responseType: 'blob'}).pipe(
      map((data) => {
        return data;

      }), catchError(err => {
        console.log(err);
        return throwError('Something went wrong');
      }),
    ).subscribe(
      data => {
        reader.readAsText(data);
      },
    );
  }

  public readHiveFile(filePath: string, callback): void  {
    this.readFile(filePath, function (tsv: string) {

      const lines = tsv.split('\n');
      console.log(lines);

      const matrix = lines.filter(function (line) {
        return !(line === '');

      }).map( line => {
        return line.split('');
      });

      callback(matrix);
    });
  }

  public readCSVFile(filePath: string, callback) {
    this.readFile(filePath, function (tsv: string) {
      const lines = tsv.split('\n');
      const headers = lines.shift();
      const matrix = lines.filter(function (line) {
        return line !== '';
      }).map( line => {
        return line.split(',');
      });
      callback(matrix);
    });
  }

  public readTSVFile(filePath: string, callback): void {
    this.readFile(filePath, function (tsv: string) {
      const lines = tsv.split('\n');
      const matrix = lines.filter(function (line) {
        return line !== '';
      }).map( line => {
        return line.split('\t');
      });
      // const matrix: string[][] = [];
      // for (let j = 0; j < lines.length ; j++) {
      //   const line = lines[j];
      //   if (line !== '') {
      //     const row = line.split('\t');
      //     for (let i = 0; i < row.length ; i++) {
      //       if (matrix[i] === undefined)matrix[i] = [];
      //       matrix[i][j] = row[i];
      //     }
      //   }
      //
      // }
      // const headers = lines.shift().split('\t');
      // console.log(headers);
      // const json = lines.map(line => {
      //   const data = line.split('\t');
      //   return headers.reduce((obj, nextkey, index) => {
      //     obj[nextkey] = data[index];
      //     console.log(obj);
      //     return obj;
      //   }, {});
      // });

      // const json = {};
      callback(matrix);
    });
  }
}
