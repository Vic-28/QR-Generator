import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Qr-Generator';
  string: string = '';

  constructor() {}

  createQrCode() {
 
    var qrData = document.getElementsByTagName('input')[0].value;

    if (qrData.trim() === '') {
      Swal.fire({
        icon: 'error',  
        title: 'Error', 
        text: 'El campo de texto del QR no puede estar vacío.'  
      });
      return;
    }

    this.string = qrData; 
  }

  downloadQrCode() {

    const qrCanvas = document.querySelector('qrcode canvas') as HTMLCanvasElement;

    if (qrCanvas) {
      const qrImageUrl = qrCanvas.toDataURL("image/png");

      const link = document.createElement('a');
      link.href = qrImageUrl;
      link.download = 'qrcode.png'; 
      link.click();  
    } else {
      alert('No se pudo encontrar el código QR para descargar.');
    }
  }
}
