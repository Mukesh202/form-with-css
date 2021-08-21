import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateService } from './template.service';


@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

  constructor(private templateservice:TemplateService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
           { return false
      if(this.templateservice.isTamplateRight())
      {
      return true;
    } else 
    {
      alert ("you have not permited,redirecting to home");
      this.router.navigate(['home']);
    }
  }
  
}
