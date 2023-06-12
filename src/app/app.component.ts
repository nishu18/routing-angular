import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'routing-blog';
    user:any
    constructor(private userData:UserdataService){
      userData.user().subscribe((data)=>{
     
        console.log('data',data)

        
        this.user=data
      })
    }


}


// export class AppComponent {
//   title = 'routing-blog';
//   users:any;
//   constructor(private userdata:UserdataService){
//     // console.log(userdata.users())
//     // this.users=userdata.users()
//   }
// }
