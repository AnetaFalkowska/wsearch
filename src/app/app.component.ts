import { Component } from '@angular/core';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PageListComponent } from "./page-list/page-list.component";
import { WikipediaService } from './wikipedia.service';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [ SearchBarComponent, PageListComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  

  pages: {}[] = []

constructor(private wikipedia:WikipediaService) {}
  onTerm(term:string) {
    
    this.wikipedia.search(term).subscribe((response)=>{this.pages = response})
    
  }
}
