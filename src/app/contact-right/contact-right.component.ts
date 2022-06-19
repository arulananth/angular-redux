import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contact-right',
  templateUrl: './contact-right.component.html',
  styleUrls: ['./contact-right.component.css']
})
export class ContactRightComponent implements OnInit {

  
  @Input() showUserDetail : any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
   
  }

}
