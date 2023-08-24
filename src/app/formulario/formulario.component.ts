import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NegritoComponent } from '../negrito/negrito.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

texto = "cadastro";

httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

nameButton = "Enviar";
 


constructor(private http:HttpClient){}


 cadastro(form:any){
  
  this.http.post('http://localhost:3000/Dados',form.value, this.httpOptions).subscribe();
  /* setTimeout(this.refresh, 2000); */
  
  
   }
   refresh(){
    location.reload();
   }
 }


