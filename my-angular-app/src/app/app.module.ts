import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { WordDetailsModule } from './components/word-details/word-details.module';
import { WordDetailsComponent } from './components/word-details/word-details.component';

const routes: Routes = [
  { path: 'word-details', component: WordDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    WordDetailsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
