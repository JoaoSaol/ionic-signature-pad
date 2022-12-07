import { Component, OnInit, ViewChild, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import SignaturePad from 'signature_pad';
import { jsPDF } from "jspdf";
// import { PDFGenerator } from '@ionic-native/pdf-generator';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true }) signaturePadElement;
  signaturePad: any;
  canvasWidth: number;
  canvasHeight: number;

  constructor(private elementRef: ElementRef,
    // private androidPermissions: AndroidPermissions
    // private pdfGenerator: Generator
    // private base64ToGallery: Base64ToGallery
  ) { }

  ngOnInit(): void {
    this.init();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.init();
  }

  init() {
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 140;
    if (this.signaturePad) {
      this.signaturePad.clear(); // Clear the pad on init
    }
  }

  public ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    this.signaturePad.penColor = 'rgb(56,128,255)';
  }

  save(): void {
    const img = this.signaturePad.toDataURL();
    console.log('Baixou e salvou ')

    const doc = new jsPDF();
    doc.setFontSize(40)
    doc.text("Assinatura Salva", 10, 10);
    doc.addImage(img, 'JPEG', 15, 40, 180, 160)
    doc.save("a4.pdf");
  }

  isCanvasBlank(): boolean {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clear() {
    this.signaturePad.clear();
  }

  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }
}