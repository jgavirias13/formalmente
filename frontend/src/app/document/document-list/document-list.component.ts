import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentFormComponent } from '../document-form/document-form.component';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDocumentForm(): void{
    const dialogRef = this.dialog.open(DocumentFormComponent, {
      maxWidth: '100%',
      minWidth: '40%'
    });
  }

}
