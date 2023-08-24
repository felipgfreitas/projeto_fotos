import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../model/cadastro.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  texto = "Usúarios";

  meusDados: Cadastro[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void{
    this.http.get<Cadastro[]>('http://localhost:3000/Dados').subscribe(result => this.meusDados = result);
  }

}
