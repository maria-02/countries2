import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() title = 'button';
  @Input() type = 'primary';
  @Input() icon = '';

  constructor() { }

  ngOnInit(): void {
    console.log('El componente <app-button></app-button> se inició');
  }

  click(e:any){
    console.log(`click en ${this.title}`, e);
  }


}
