import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
  standalone: true,
  imports: [MatInputModule, 
            MatFormFieldModule, 
            MatSlideToggleModule, 
            MatDatepickerModule, 
            MatNativeDateModule,
            MatButtonModule]
})
export class ExperienciaLaboralComponent {

  constructor() { }

}
