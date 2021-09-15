import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ReportPdfService } from 'src/services/report-pdf.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private userService : UserService,private reportPdfservice : ReportPdfService) { }
  finalUser : any = this.userService.currentUser
  element = document.getElementById('pdfData')
  ngOnInit(): void {
    
  }
}
