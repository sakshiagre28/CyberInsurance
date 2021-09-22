import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/services/user.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-policy',
  templateUrl: './get-policy.component.html',
  styleUrls: ['./get-policy.component.css']
})
export class GetPolicyComponent implements OnInit {

  
  @ViewChild('htmlData') htmlData:ElementRef;
  constructor(private userService: UserService,private router : Router) { }
  finalUser : any = this.userService.currentUser
  
  
  element = document.getElementById('pdfData')
  ngOnInit(): void { 
    
  } 
  
  
  getPolicyReport(){
    var element = document.getElementById('pdfData')

    html2canvas(element).then((canvas) => {
     
      var imageData = canvas.toDataURL('image/png')
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      var doc = new jsPDF()
      doc.addImage(imageData,'PNG',0,0,fileWidth,fileHeight)
      doc.save("report.pdf")
      
    })
  }

  goToHome(){
    this.router.navigate([''])
  }


}
