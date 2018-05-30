import { Component, OnInit } from '@angular/core';
import { HandleDataService } from '../handle-data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
  })
export class ListDataComponent implements OnInit {

  values  = [];
  constructor(private HandleDataService : HandleDataService) { }

  ngOnInit() {
    this.values = this.HandleDataService.getData();
  }

}
