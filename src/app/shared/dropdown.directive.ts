import { Directive, HostListener, HostBinding, Input, Renderer2, ElementRef} from '@angular/core';

@Directive( {
    selector: '[appDropdown]'
})

export class DropdownDirective {
    private open: boolean = false;

    @HostListener('click') click(eventData: Event) {
        this.open = !this.open;
        if (this.open) {
            this.renderer.addClass(this.el.nativeElement, 'open');
        } else {
            this.renderer.removeClass(this.el.nativeElement, 'open');
        }
        // Instead:
        // he did:
        //@HostBinding('class.open') isOpen = false;
        // faster easier moreproductive

    }

    /*@Input() set unless(opened: boolean) {
        @HostBinding('class')
    }*/
    
    constructor(private renderer: Renderer2, private el: ElementRef) {
    }


}