import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  cursos: string[] = ['Java','C#','PHP','PYTHON','RUBY ON RAILS']
  habilitar: boolean= true;
  constructor() { }

  ngOnInit(): void {
  }
  setHabilitar(){
    this.habilitar = (this.habilitar==true)?false:true;
  }
}
