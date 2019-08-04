import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  private lists =new BehaviorSubject<any>(['the initial list','the final list']);
  list=this.lists.asObservable();

  constructor() { }
    changeList(list: any) {
      this.lists.next(list);
    }
   

}
