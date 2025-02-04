import { Routes } from '@angular/router';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { Lesson7Component } from './lesson7/lesson7.component';
import { Lesson8Component } from './lesson8/lesson8.component';
import { Lesson9Component } from './lesson9/lesson9.component';
import { Lesson10Component } from './lesson10/lesson10.component';
import { Lesson11Component } from './lesson11/lesson11.component';
import { Lesson12Component } from './lesson12/lesson12.component';
import { Lesson13Component } from './lesson13/lesson13.component';
import { Lesson14Component } from './lesson14/lesson14.component';
import { Lesson15Component } from './lesson15/lesson15.component';
import { Lesson16Component } from './lesson16/lesson16.component';
import { Lesson17Component } from './lesson17/lesson17.component';
import { Lesson18Component } from './lesson18/lesson18.component';
import { Lesson19Component } from './lesson19/lesson19.component';
import { Lesson20Component } from './lesson20/lesson20.component';
import { Lesson21Component } from './lesson21/lesson21.component';
import { Lesson22Component } from './lesson22/lesson22.component';
import { Lesson23Component } from './lesson23/lesson23.component';
import { Lesson24Component } from './lesson24/lesson24.component';
import { Lesson25Component } from './lesson25/lesson25.component';
import { Lesson26Component } from './lesson26/lesson26.component';
import { Lesson27Component } from './lesson27/lesson27.component';
import { Lesson28Component } from './lesson28/lesson28.component';
import { Lesson29Component } from './lesson29/lesson29.component';
import { Lesson30Component } from './lesson30/lesson30.component';
import { Lesson31Component } from './lesson31/lesson31.component';
import { Lesson32Component } from './lesson32/lesson33.component';
import { Lesson33Component } from './lesson33/lesson33.component';
import { Lesson34Component } from './lesson34/lesson34.component';
import { Lesson35Component } from './lesson35/lesson35.component';
import { Lesson36Component } from './lesson36/lesson36.component';
import { Lesson37Component } from './lesson37/lesson37.component';
import { Lesson38Component } from './lesson38/lesson38.component';
import { Lesson39Component } from './lesson39/lesson39.component';
import { Lesson40Component } from './lesson40/lesson40.component';
import { QuizComponent } from './quiz/quiz.component';
import { FillBlankComponent } from './fill-blank/fill-blank.component';



export const routes: Routes = [

    { path: '', component: Lesson1Component },// Lesson 1 route
    { path: 'les1', component: Lesson1Component },
    { path: 'les2', component: Lesson2Component },
    { path: 'les3', component: Lesson3Component },
    { path: 'les4', component: Lesson4Component },
    { path: 'les5', component: Lesson5Component },
    { path: 'les6', component: Lesson6Component },
    { path: 'les7', component: Lesson7Component },
    { path: 'les8', component: Lesson8Component },
    { path: 'les9', component: Lesson9Component },
    { path: 'les10', component: Lesson10Component },
    { path: 'les11', component: Lesson11Component },
    { path: 'les12', component: Lesson12Component },
    { path: 'les13', component: Lesson13Component },
    { path: 'les14', component: Lesson14Component },
    { path: 'les15', component: Lesson15Component },
    { path: 'les16', component: Lesson16Component },
    { path: 'les17', component: Lesson17Component },
    { path: 'les18', component: Lesson18Component },
    { path: 'les19', component: Lesson19Component },
    { path: 'les20', component: Lesson20Component },
    { path: 'les21', component: Lesson21Component },
    { path: 'les22', component: Lesson22Component },
    { path: 'les23', component: Lesson23Component },
    { path: 'les24', component: Lesson24Component },
    { path: 'les25', component: Lesson25Component },
    { path: 'les26', component: Lesson26Component },
    { path: 'les27', component: Lesson27Component },
    { path: 'les28', component: Lesson28Component },
    { path: 'les29', component: Lesson29Component },
    { path: 'les30', component: Lesson30Component },
    { path: 'les31', component: Lesson31Component },
    { path: 'les32', component: Lesson32Component },
    { path: 'les33', component: Lesson33Component },
    { path: 'les34', component: Lesson34Component },
    { path: 'les35', component: Lesson35Component },
    { path: 'les36', component: Lesson36Component },
    { path: 'les37', component: Lesson37Component },
    { path: 'les38', component: Lesson38Component },
    { path: 'les39', component: Lesson39Component },
    { path: 'les40', component: Lesson40Component },    
    { path: 'quiz/:lessonId', component: QuizComponent },
    { path: 'fillblank/:lessonId', component: FillBlankComponent }

];
