import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/services/shared-service.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  trainers;

  constructor(
    private service: SharedServiceService
  ) { }

  ngOnInit() {
    this.service.getTrainers().subscribe(
      res => {
        this.trainers = res;
      }
    );
  }

  deleteItem(item) {
    this.service.deleteTrainer(item).subscribe(
      res => {
        this.trainers = res;
      }
    );
  }

  onClickSubmit(item) {
    item['_id'] = this.trainers.length + 1;
    this.service.createTrainer(item).subscribe(
      res => {
        this.trainers = res;
        document.getElementById('close').click();
      }
    );
  }
}
