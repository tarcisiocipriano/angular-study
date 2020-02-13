import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  formType: string;
  private buttonStatusSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buttonStatusSub = this.route.params.subscribe((params: Params) => {
      this.formType = params.formType;
    });
  }

  onButton() {
    if (this.formType === 'template-driven') {
      this.router.navigate(['../reactive'], {relativeTo: this.route});
    } else if (this.formType === 'reactive') {
      this.router.navigate(['../template-driven'], { relativeTo: this.route });
    }
  }

  ngOnDestroy() {
    this.buttonStatusSub.unsubscribe();
  }

}
