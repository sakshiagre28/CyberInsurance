import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IUser } from 'src/models/user';
import { UserService } from 'src/services/user.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ReportPdfService } from 'src/services/report-pdf.service';
@Component({
  selector: 'app-get-policy',
  templateUrl: './get-policy.component.html',
  styleUrls: ['./get-policy.component.css']
})
export class GetPolicyComponent implements OnInit {

  
  @ViewChild('htmlData') htmlData:ElementRef;
  constructor(private userService: UserService,private reportPdfService : ReportPdfService) { }
  finalUser : any = this.userService.currentUser
  element = document.getElementById('pdfData')
  ngOnInit(): void { 
    //this.finalUser = this.userService.getFinalUser()
    //console.log(this.finalUser)
    //this.finalUser.concat(this.userService.finalUser)
    
  }
  
  
  getPolicyReport(){
    var element = document.getElementById('pdfData')

    html2canvas(element).then((canvas) => {
      console.log(canvas)
      var imageData = canvas.toDataURL('image/png')
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      var doc = new jsPDF()
      doc.addImage(imageData,'PNG',0,0,fileWidth,fileHeight)
      doc.save("report.pdf")
      
    })
    
   
  }
  

  get finalUserBody(){
    
    return Object.keys(this.finalUser)
  }

}
