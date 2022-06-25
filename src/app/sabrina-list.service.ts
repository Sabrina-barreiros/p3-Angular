import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Repo{
  id: number;
  brand: string;
  name: string;
}

@Injectable()
export class SabrinaListService {
  repos: Array<Repo> = [];

  constructor(private http: HttpClient) { }
  update()
{
  this.http.get<Array<Repo>>('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').subscribe(data =>{
    this.repos = data;
  })
}}