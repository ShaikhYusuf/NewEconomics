import { Routes } from '@angular/router';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';


export const routes: Routes = [
    
    { path: 'les1', component: Lesson1Component },// Lesson 1 route
    { path: 'les2', component: Lesson2Component },
    { path: 'les3', component: Lesson3Component },
    { path: 'les4', component: Lesson4Component },
    { path: 'les5', component: Lesson5Component },
];
