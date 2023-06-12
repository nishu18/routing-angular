import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent {

    title = 'routing-blog';
    users:any;
    constructor(private userdata:UserdataService){
      // console.log(userdata.users())
      // this.users=userdata.users()
    }
}
