import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TabRow } from '../data-domain';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.css']
})
export class DataTabComponent implements OnInit {

  @ViewChild('id',{static:false})
  id :ElementRef

  @ViewChild('item',{static:false})
  item:ElementRef

  @ViewChild('qty',{static:false})
  quantity:ElementRef

  @ViewChild('price',{static:false})
  price :ElementRef

  @Input()
 rows: Array<TabRow> = new Array()
 @Output('delete')
 deleteRow: EventEmitter<TabRow>=new EventEmitter()

  constructor() { }

  ngOnInit() {
    //this.rows.push({id:1,item:'pc',qty:3,price:30000})
    //this.rows.push({id:1,item:'pc',qty:3,price:30000})
    //this.rows.push({id:1,item:'pc',qty:3,price:30000})
   // this.rows.push({id:1,item:'pc',qty:3,price:30000})
  }
  OnRowDelete(row : TabRow){
    console.log('Delete Clicked',row)
    this.deleteRow.emit(row)
  }
  sort1(id: TabRow){
    //var arr = id
//var sorted =
//id.sort();
 //console.log( + id );

 
}

}
