import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { SliderElementDirective } from '../directives/slider-element.directive';
import { SliderHandleDirective } from '../directives/slider-handle.directive';
import { SliderLabelDirective } from '../directives/slider-label.directive';
import { TooltipWrapperComponent } from '../tooltip-wrapper/tooltip-wrapper.component';

/**
 * NgxSlider module
 *
 * The module exports the slider component
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SliderComponent,
    SliderElementDirective,
    SliderHandleDirective,
    SliderLabelDirective,
    TooltipWrapperComponent
  ],
  exports: [
    SliderComponent
  ]
})
export class NgxSliderModule { }
