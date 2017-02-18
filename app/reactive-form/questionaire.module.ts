import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { QuestionaireComponent } from './containers/questionaire/questionaire.component';
// components

const routes: Routes = [
  {
    path: 'questions',
    children: [
     { path: '', component: QuestionaireComponent }
    ]
  }
];

@NgModule({
  declarations: [
    QuestionaireComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    
  ]
})
export class FamilyQuestionaireModule {}