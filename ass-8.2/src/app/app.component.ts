import { Component } from '@angular/core';
import { ListService } from "app/service/list.service";
// defining component details like selector ,templateUrl,styleUrls
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class RootComponent {
  title: string;
  name: string;
  lastName: string;
  arrayList: any[] = [];

  constructor(private _listService: ListService) { }

  ngOnInit() { }

// defining  submit function 
  submit(Name: string, LastName: string) {
    let model = {
      name: Name,
      lastName: LastName
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }
}
