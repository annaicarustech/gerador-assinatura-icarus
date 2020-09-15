import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  assinaturaForm
  assinatura = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.assinaturaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      cargo: ['', Validators.required],
      telefone: [''],
    });
  }

  submitForm(){
    this.assinatura = true;
  }

}
