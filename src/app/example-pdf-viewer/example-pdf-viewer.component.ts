import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  NgxExtendedPdfViewerService,
  pdfDefaultOptions,
} from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-example-pdf-viewer',
  templateUrl: './example-pdf-viewer.component.html',
  styleUrls: ['./example-pdf-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplePdfViewerComponent {
  formData: { [key: string]: string | number | boolean | string[] | null } = {
    name: 'MAX PERALTA',
    address: '123 Turtle Avenue, Guelph, ON',
    'Health Number': '5555555555',
    version: '',
    sex: false,
    y_birth2: '2021',
    m_birth2: '01',
    d_birth2: '17',
    Province: '',
    'Other Provincial Registration Number': '',
    patientTelephone: '',
    'Patient’s Last Name as per OHIP Card': 'PERALTA',
    patienFname: 'MAX',
    patienLname: 'PERALTA',
    clinician: false,
    'Patient’s Address including Postal Code': '123 Turtle Avenue, Guelph, ON',
    'Other Tests – one test per line, GC specify source': 'TSH',
    checkOne: 'ohip',
    lname: 'doctor 00002',
    fname: '',
    contactNumber1: '+1519000000',
    Date: '2023/10/22',
    'Additional Clinical Information eg diagnosis': '',
    address2a: '100 test drive ',
    'ClinicianPractitioner Number': '0000',
    'CPSO  Registration No': '0000',
    y_birth: '2023',
    m_birth: '11',
    d_birth: '21',
  };
  constructor(private pdfService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.doubleTapZoomFactor = '150%';
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5;
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }
  async print() {
    const _blob = await this.pdfService.getCurrentDocumentAsBlob();
    const blob = new Blob([_blob], { type: 'application/pdf' });
    const file = new Blob([blob], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    iframe.style.display = 'none';
    iframe.src = fileURL;
    iframe.onload = () => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    };
  }
}
