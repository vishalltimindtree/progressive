import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerTS } from '../../types/tstypes/Customerts';
import { of } from 'rxjs';

@Component({
  selector: 'app-customersample',
  standalone: true,
  imports: [],
  templateUrl: './customersample.component.html',
  styleUrls: ['./customersample.component.css']
})
export class CustomersampleComponent {

  customer: CustomerTS = new CustomerTS("Abhishek", "abhishek@gmail.com", "Abhishek1061", "abcdefg", "Developer", "2");

}