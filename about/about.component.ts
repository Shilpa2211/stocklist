import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  lists: any;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.list.subscribe(res => this.lists = res);
  }

}
