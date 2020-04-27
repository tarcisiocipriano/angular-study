import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan-reduce',
  templateUrl: './scan-reduce.component.html',
  styleUrls: ['./scan-reduce.component.scss']
})
export class ScanReduceComponent implements OnInit {

  reduce: number;

  scan: number[] = [];

  observable = of( 1, 2, 3, 4, 5 );

  ngOnInit() {
    this.observable
    .pipe(
      reduce((total, current) => total + current)
    )
    .subscribe(value => this.reduce = value);

    this.observable
    .pipe(
      scan((total, current) => total + current)
    )
    .subscribe(value => this.scan.push(value));
  }

}
