import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from 'src/app/shared/models/document.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = `${environment.apiUrl}/document`;

  constructor(private httpClient: HttpClient) { }

  public createDocument(document: Document): Observable<Document>{
    return this.httpClient.post<Document>(this.apiUrl, document);
  }
}
