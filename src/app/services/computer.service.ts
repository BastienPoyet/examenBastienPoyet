import { Injectable } from '@angular/core';
import { Computer } from '../models/computer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import{retry,catchError}from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  computers: Computer[];
  marquesDispo: string[];
  typesDispo: string[];
  categoriesDispo: string[];
  apiURL="http://localhost:3000/computers";
  httpOptions={
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { 
    this.computers=[];
    this.marquesDispo=['Dell','Hp','Apple','Asus'];
    this.typesDispo=['Portable','Fixe','Tablette hybride'];
    this.categoriesDispo=['Gaming','Bureautique','Premier prix']
  }
  getAllComputers():Observable<Computer[]>{
    return this.http.get<Computer[]>(this.apiURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getOneComputer(id: number):Observable<Computer>{
    return this.http.get<Computer>(this.apiURL+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  addComputer(computerForm: Computer):Observable<Computer>{
    return this.http.post<Computer>(this.apiURL,computerForm,this.httpOptions).pipe(
      catchError(this.handleError)
    )
  }
  editComputer(computerForm: Computer): Observable<Computer>{
    return this.http.put<Computer>(this.apiURL+'/'+computerForm.id,computerForm,this.httpOptions).pipe(
      catchError(this.handleError)
    )
  }
  deleteComputer(id: number): Observable<Computer>{
    return this.http.delete<Computer>(this.apiURL+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error) {    
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
        // Get client-side error 
       errorMessage = error.error.message;} else {      
       // Get server-side error     
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }    
       window.alert(errorMessage);
       return throwError(errorMessage);
 }
}
