import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number;
  btnText:string = 'Add an list';
  listText:string = 'my first stock list';
  lists = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this.itemCount = this.lists.length;
    this._data.list.subscribe(res => this.lists = res);
    this._data.changeList(this.lists);
  }
  addList(){
    this.lists.push(this.listText);
    this.listText = "";
    this.itemCount=this.lists.length;
    this._data.changeList(this.lists);
    }
    
    removeList() {
      this.lists.splice(1);
    }

}
