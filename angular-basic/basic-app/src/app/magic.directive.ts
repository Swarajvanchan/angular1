import { Directive, ElementRef ,Renderer2 ,HostBinding} from '@angular/core';

@Directive({
  selector: '[appMagic]'
})
export class MagicDirective {

  @HostBinding('style.height.px')
  ht=200
  
  @HostBinding('style.height.px')
  brd='1px solid red'
  constructor(
    private elRf:ElementRef,
    private rend:Renderer2
    
  ) { }

  ngOnInit(){
    console.log(this.elRf.nativeElement)
    //this.elRf.nativeElement.style.border='1px solid red'
    //this.elRf.nativeElement.style.border='1px solid red'
    this.rend.setStyle(this.elRf.nativeElement,'border','1px solid yellow')
    this.rend.setStyle(this.elRf.nativeElement,'height.px','${this.ht}px')
  }
}
  