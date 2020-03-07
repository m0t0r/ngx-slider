# ngx-slider

A customizable slider component for Angular >= 9 based on [ng5-slider](https://github.com/angular-slider/ng5-slider).

If you are looking for Angular support with version < 9, please use the original package: [ng5-slider](https://github.com/angular-slider/ng5-slider)

## Installation

To add the slider to your Angular project:
```
npm install --save @m0t0r/ngx-slider
```

Once installed, add the slider to your `app.module.ts`:
```typescript
import { NgxSliderModule } from '@m0t0r/ngx-slider';

...

@NgModule({
   ...
   imports: [
     ...
     NgxSliderModule,
    ...
   ],
   ...
})
export class AppModule {}
```

## Sample usage

Now you can use the slider component in your app components, for example in `app.component.ts`:
```typescript
import { Options } from '@m0t0r/ngx-slider';
...

@Component({...})
export class AppComponent {
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };
}
```

And in template file `app.component.html`:
```html
<ngx-slider [(value)]="value" [options]="options"></ngx-slider>
```


## Styling

An overview of how to apply your own style to the slider is described in [STYLING.md](STYLING.md).

## Animations

The current verion of slider features CSS animations of slider movement. If you prefer the previous behaviour, without animations, you can set the flag `animate: false` in your slider options.

## Tooltips

The slider allows for customising how to implement tooltips. See [TOOLTIPS.md](TOOLTIPS.md) for more information.

## Known Issues

Before reporting a new bug, please look at [KNOWN_ISSUES.md](KNOWN_ISSUES.md) for a list of known problems and their workarounds. New bugs reports for these problems will not be accepted.

## Developer information

If you would like to contribute to the project, see [DEVELOPERS.md](DEVELOPERS.md).

## Disclaimer

Due to lack of support of the original package ([ng5-slider](https://github.com/angular-slider/ng5-slider)), it has been forked with the addition of Angular 9+ support. The intent of this package is to support newer versions of Angular (9+), if you are looking for support of Angular version < 9, please use [ng5-slider](https://github.com/angular-slider/ng5-slider).

## License

MIT license.
