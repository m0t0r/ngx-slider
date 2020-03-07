import { Component } from '@angular/core';
import { Options } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-log-scale-slider',
  templateUrl: './log-scale-slider.component.html'
})
export class LogScaleSliderComponent {
  value = 1;
  options: Options = {
    floor: 1,
    ceil: 100,
    logScale: true,
    showTicks: true
  };
}
