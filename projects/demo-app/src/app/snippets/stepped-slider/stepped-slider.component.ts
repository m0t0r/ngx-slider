import { Component } from '@angular/core';
import { Options } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-stepped-slider',
  templateUrl: './stepped-slider.component.html'
})
export class SteppedSliderComponent {
  value = 12;
  options: Options = {
    floor: 10,
    ceil: 100,
    step: 5
  };
}
