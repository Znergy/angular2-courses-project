import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
  // attribute of autoGrow on an input (that's the target any inputs with autoGrow)
  // syntax for selecting attribute
  selector: '[autoGrow]',
  // host is like our template, we add a key:value pair for each condition we are wanting to run code on
  // if input has focus -> onFocus()
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class AutoGrowDirective {
  // Two ways to declare private varibles
  // Example A:
  _elementRef: ElementRef;
  // double dependency injection.. Example B: private in constructor
  constructor(elementRef : ElementRef, private renderer : Renderer) {
    // Example A:
    this._elementRef = elementRef;

  }
  onFocus() {
    // arguments: 1st = element to apply a style on, 2nd = name of style, 3rd = value
    this.renderer.setElementStyle(this._elementRef.nativeElement, 'width', '200');
  }
  onBlur() {
    this.renderer.setElementStyle(this._elementRef.nativeElement, 'width', '120');
  }
}
