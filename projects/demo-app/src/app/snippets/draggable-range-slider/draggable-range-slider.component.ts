import { Component } from '@angular/core';
import { Options } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-draggable-range-slider',
  templateUrl: './draggable-range-slider.component.html'
})
export class DraggableRangeSliderComponent {
  minValue = 1;
  maxValue = 8;
  options: Options = {
    floor: 0,
    ceil: 10,
    draggableRange: true
  };
}
