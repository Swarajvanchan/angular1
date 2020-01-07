import { Component, OnInit, Input } from '@angular/core';
import { TabRow } from '../data-domain';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

  @Input()
  row: TabRow
  constructor() { }

  ngOnInit() {
  }

}
 