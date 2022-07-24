import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text: string = 'JP Parreira';
  imgURL: string = 'https://picsum.photos/300/300';
  imgDesc: string = 'É uma imagem.';
  buttonText: string = 'Clique aqui';
  textRed: boolean = false;
  bgColor: string = 'green';
  fontSize: string = '20px';
  widthImg: number = 600;
  textInput: string = '';
  number: number = 0;
  destroy: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicou(){
    this.text = 'Ivo soares'
    console.log('clicou aqui');
    this.textRed = true;
  }

  keyboardWatcher(value: any){
    console.log('clicou aqui', value);
  }

  clicouNoFilho(text: any){
    console.log(text);
  }

  incrementa(){
    this.number++;
  }

  destroiComponente(){
    this.destroy = true;
  }

}
