import { Directive, Input, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @Input() appColor!: string[];
  @HostBinding('style.backgroundColor') color: any;
  @HostListener('click')
  itemClicked() {
    this.color = this.appColor[0];
  }

  constructor() { }

ngOnInit() {
}

}
