import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/services/shared-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users;
  
  constructor(
    private service: SharedServiceService
  ) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      res => {
        this.users = res;
      }
    )
  }

  deleteItem(item) {
    this.service.deleteUser(item).subscribe(
      res => {
        this.users = res;
      }
    )
  }

  userSubmit(item) {
    item['_id'] = this.users.length + 1;
    this.service.createUser(item).subscribe(
      res => {
        this.users = res;
        document.getElementById('close').click();
      }
    );
  }

}
