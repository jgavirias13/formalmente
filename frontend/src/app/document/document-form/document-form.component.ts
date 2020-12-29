import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Document } from 'src/app/shared/models/document.model';
import { DocumentService } from 'src/app/services/document/document.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss']
})
export class DocumentFormComponent implements OnInit {

  public documentTypes = ['Estudiante', 'Profesional'];
  public selectedType: string;
  form: FormGroup;
  creationInvalid = false;
  loading = false;
  message = '';

  constructor(
    private fb: FormBuilder,
    private documentService: DocumentService,
    private authService: AuthService,
    private dialogref: MatDialogRef<DocumentFormComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      documentType: ['', Validators.required]
    });
  }

  onDocumentTypeChange(event){
    this.selectedType = event.value;
    this.creationInvalid = false;
  }

  addDocument(document: Document): void{
    this.loading = true;
    document.owner = this.authService.getUser().id;
    this.documentService.createDocument(document).subscribe((response) => {
      this.snackBar.open('Documento creado con exito', '', {
        duration: 2000
      });
      this.loading = false;
      this.dialogref.close();
    }, err => {
      console.log(err);
      this.creationInvalid = true;
      if(err.error && err.error.message){
        this.message = err.error.message;
      }else{
        this.message = 'Ha ocurrido un error, por favor vuelve a intentarlo mas tarde';
      }
      this.loading = false;
    });
  }

}
