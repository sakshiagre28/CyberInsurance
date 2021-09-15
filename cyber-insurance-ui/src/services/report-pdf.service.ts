import { Injectable } from '@angular/core';
import jsPDF from 'jspdf'
@Injectable({
  providedIn: 'root'
})
export class ReportPdfService {

  constructor() {
    
   }
   pdfReport : jsPDF
   setPdf(pdf : jsPDF){
      this.pdfReport = pdf
  }

  getPdf() : jsPDF{
    return this.pdfReport
  }
}
