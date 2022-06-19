import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactRightComponent } from '../contact-right/contact-right.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userDetails : any = [];
  currentUser:any = {}

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/user-detail.json").subscribe((data:any) =>{      
      this.userDetails = data.userDetail;
      if(this.userDetails && this.userDetails.length>0)
      {
        this.currentUser = this.userDetails[0]
      }
    })
  }
  showDetail(item){
    this.currentUser=item;
  }

}
