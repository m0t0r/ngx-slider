import { Component } from '@angular/core';
import { Options } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-ticks-tooltips-slider',
  templateUrl: './ticks-tooltips-slider.component.html'
})
export class TicksTooltipsSliderComponent {
  value = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showTicks: true,
    ticksTooltip: (v: number): string => {
      return 'Tooltip for ' + v;
    }
  };
}
