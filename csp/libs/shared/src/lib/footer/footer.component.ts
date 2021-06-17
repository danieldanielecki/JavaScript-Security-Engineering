import { Component } from '@angular/core';

@Component({
  selector: 'fedex-test-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public currentDate: Date = new Date();
}
