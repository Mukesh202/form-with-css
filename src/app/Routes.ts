import { Routes } from "@angular/router";
import { FormvalidatorComponent } from "./formvalidator/formvalidator.component";
import { TemplateformComponent } from "./templateform/templateform.component";
import { ActivateGuard } from "./activate.guard";
import { Component } from "@angular/core";


export const Approutes: Routes = [
    { path: '', component: FormvalidatorComponent},
    { path: 'formvalidator', component: FormvalidatorComponent },
    { path: 'templateform', component: TemplateformComponent,canActivate:[ActivateGuard]},
];

