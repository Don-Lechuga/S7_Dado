import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  numeroDado:number = 0
  cara: number = Math.floor(Math.random()*6)+1


  GirarDado(){
    this.numeroDado = this.cara
  }
  RecogerDado(){
    event :  document.location.reload()
  }
}
