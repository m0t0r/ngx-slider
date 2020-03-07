import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';
import { SliderElementDirective } from '../directives/slider-element.directive';
import { SliderHandleDirective } from '../directives/slider-handle.directive';
import { SliderLabelDirective } from '../directives/slider-label.directive';
import { TooltipWrapperComponent } from '../tooltip-wrapper/tooltip-wrapper.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SliderComponent,
        SliderElementDirective,
        SliderHandleDirective,
        SliderLabelDirective,
        TooltipWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    component.options = {
      floor: 0,
      ceil: 10
    };
    component.value = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
