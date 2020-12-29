import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Author } from 'src/app/shared/models/author.model';
import { Document } from 'src/app/shared/models/document.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  @Output() documentEmitter = new EventEmitter<Document>();
  @Input() loading:boolean;

  form: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      students: new FormControl(new Array<Author>(), Validators.required),
      university: ['', Validators.required],
      course: ['', Validators.required],
      profesor: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  get students(){
    return this.form.get('students');
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.students.setValue([...this.students.value, {name: value.trim()}]);
      this.students.updateValueAndValidity();
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(student: Author): void {
    const index = this.students.value.indexOf(student);

    if (index >= 0) {
      this.students.value.splice(index, 1);
      this.students.updateValueAndValidity();
    }
  }

  crearDocumento(): void{
    const document:Document = {
      title: this.form.value.title,
      authors: this.form.value.students,
      university: this.form.value.university,
      course: this.form.value.course,
      profesor: this.form.value.profesor,
      date: this.form.value.date,
      type: 'Estudiante'
    }
    this.documentEmitter.emit(document);
  }

}
