import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

private url = "http://localhost:3000/produtos";

  constructor(private _httpClient: HttpClient) { }

  getProduto(id:any): Observable<Produto>{
    const urlIdProduto = `${this.url}?id={id}`;
    return ;
  }
}
