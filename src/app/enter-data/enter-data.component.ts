import { Component, OnInit } from '@angular/core';
// import { FormArray, FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HandleDataService } from '../handle-data.service';

@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.css']
})
export class EnterDataComponent implements OnInit {
  userName: String;
  language: String;
  values: any = [];

  constructor(private HandleDataService: HandleDataService) { }

  ngOnInit() {
    this.values = this.HandleDataService.getData();
  }

  onSubmit (form) {
    // this.values.push(form.value);
    this.HandleDataService.saveData(form.value);
    form.reset();

  }

}
