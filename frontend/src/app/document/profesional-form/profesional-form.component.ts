import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/shared/models/author.model';
import { Document } from 'src/app/shared/models/document.model';

@Component({
  selector: 'app-profesional-form',
  templateUrl: './profesional-form.component.html',
  styleUrls: ['./profesional-form.component.scss']
})
export class ProfesionalFormComponent implements OnInit {

  @Output() documentEmitter = new EventEmitter<Document>();
  @Input() loading: boolean;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      shortTitle: ['', Validators.required],
      title: ['', Validators.required],
      autor: ['', Validators.required],
      afiliacion: ['', Validators.required],
      authorNote: [''],
      date: ['', Validators.required]
    });
  }

  crearDocumento(): void{
    const autor: Author = {
      name: this.form.value.autor,
      afiliation: this.form.value.afiliacion
    };
    const document: Document = {
      shortTitle: this.form.value.shortTitle,
      title: this.form.value.title,
      authors: [autor],
      authorNote: this.form.value.authorNote,
      date: this.form.value.date,
      type: 'Profesional'
    }
    this.documentEmitter.emit(document);
  }

}
