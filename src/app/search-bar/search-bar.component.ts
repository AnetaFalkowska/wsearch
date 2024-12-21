import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
term = ""
// onInput(value:string) {
//   this.term = value
// }
@Output() submitted = new EventEmitter<string>()
onSubmit(event:any) {
event.preventDefault();
this.submitted.emit(this.term)
}
}
