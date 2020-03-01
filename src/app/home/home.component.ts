import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/services/shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  assigned = [];
  queuing = [];
  constructor(
    private service: SharedServiceService
  ) { }

  ngOnInit() {
    this.service.getAssignedUsers().subscribe(
      (res: any) => {
        this.assigned = [...res.assigned];
        this.queuing = [...res.queuing];
      }
    )
  }

}
