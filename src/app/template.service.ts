import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  isTamplateRight():boolean {
    return true;
  };

  constructor() { }
}
