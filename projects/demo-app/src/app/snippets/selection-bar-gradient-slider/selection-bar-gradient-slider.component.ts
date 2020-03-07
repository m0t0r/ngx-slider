import { Component } from '@angular/core';
import { Options } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-selection-bar-gradient-slider',
  templateUrl: './selection-bar-gradient-slider.component.html'
})
export class SelectionBarGradientSliderComponent {
  minValue = 0;
  maxValue = 80;
  options: Options = {
    ceil: 100,
    showSelectionBar: true,
    selectionBarGradient: {
      from: 'white',
      to: '#FC0'
    }
  };
}
