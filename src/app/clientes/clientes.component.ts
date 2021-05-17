import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente'
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  
})
export class ClientesComponent implements OnInit {
  public urlAsset:string = "../../assets/images/";
  clientes: Cliente[] = [
    {id:1,nombre:'Esteban',apellido:'Hernandez',createAt:'2021-05-22',email:'luke@asd.com',foto:'chico.jpg',skills:['Java','spring','hibernate'],provincia:'Buenos Aires',localidad:'San Fernando', idioma:['Ingles']},
    {id:2,nombre:'Jacinto',apellido:'Peralta',createAt:'2021-07-22',email:'ls@asd.com',foto:'chico2.jpg',skills:['php','larabel','html5','css3'],provincia:'CABA',localidad:'Retiro', idioma:['Ingles','Aleman']},
    {id:3,nombre:'Camila',apellido:'Gonzalez',createAt:'2021-06-22',email:'aaae@asd.com',foto:'chica2.jpg',skills:['C#','MySQL','javascript'],provincia:'Buenos Aires',localidad:'Pilar', idioma:['Ingles','Frances','Portugues']},
    {id:4,nombre:'Soledad',apellido:'IRIARTE',createAt:'2021-02-22',email:'sda@asd.com',foto:'chico2.jpg',skills:['NodeJs','JS','EXPRESS'],provincia:'Buenos Aires',localidad:'Del Viso', idioma:['Ingles']},
    {id:5,nombre:'Javier',apellido:'CASAS',createAt:'2021-07-22',email:'asddd@asd.com',foto:'descarga.jpg',skills:['Python','flask','Reactjs'],provincia:'Jujuy',localidad:'Tilcara', idioma:['Ingles','Polaco']}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
                                                                                      /*   ciudad:string;
                                                                                        localidad:string;
                                                                                        skills:string[];
                                                                                        idioma:string[];
                                                                                        */
