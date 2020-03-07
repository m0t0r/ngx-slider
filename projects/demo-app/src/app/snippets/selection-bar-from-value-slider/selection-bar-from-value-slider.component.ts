import { Component } from '@angular/core';
import { Options } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-selection-bar-from-value-slider',
  templateUrl: './selection-bar-from-value-slider.component.html'
})
export class SelectionBarFromValueSliderComponent {
  value = 5;
  options: Options = {
    floor: -10,
    ceil: 10,
    showSelectionBarFromValue: 0
  };
}
