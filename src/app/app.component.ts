import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { IntroducaoComponent } from './introducao/introducao.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'teste-hit-digital';
  introducao: boolean = true
  contatos: boolean = false

  public exibirIntroducao(){
    this.introducao = true;
    this.contatos = false;
  }

  public exibirContatos(){
    this.contatos = true;
    this.introducao = false;
  }
}
