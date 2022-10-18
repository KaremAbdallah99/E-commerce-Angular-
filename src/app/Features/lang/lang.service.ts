import { Lang } from './../../_model/lang';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  lang: Lang[] = [
    {id: 1, name: 'English'},
    {id: 2, name: 'Arabic'},
    {id: 3, name: 'French'}
  ]

  constructor() { }

  getAll(): Lang[] {
    return this.lang;
  }
}
