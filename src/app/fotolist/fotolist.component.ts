import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../model/cadastro.model';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent {
  
  /* Meu array de fotos */
  /* meusDados:Dados[] = [];

  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.http.get<Dados[]>('http://localhost:3000/Dados').subscribe(caixinha => this.meusDados = caixinha );
  } */
}
