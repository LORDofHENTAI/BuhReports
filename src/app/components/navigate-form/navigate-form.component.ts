import { Component } from '@angular/core';

@Component({
  selector: 'app-navigate-form',
  templateUrl: './navigate-form.component.html',
  styleUrls: ['./navigate-form.component.scss']
})
export class NavigateFormComponent {
  selectedButton: number
  selectedClick(element: number) {
    this.selectedButton = element;
  }

}
