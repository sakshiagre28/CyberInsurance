import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private userService : UserService) { }
  finalUser : any = this.userService.currentUser
  ngOnInit(): void {
    
  }
}
