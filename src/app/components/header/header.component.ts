import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
// TypeScript
    private cabecalhoMobile: HTMLElement;
    private cabecalhoNavegacao: HTMLElement;

    constructor(){
        this.cabecalhoMobile = document.querySelector(".cabecalho-navegacao-mobile")!;
        this.cabecalhoNavegacao = document.querySelector(".cabecalho-navegacao")!;
        this.click();
    }

    click(){
            if (this.cabecalhoMobile && this.cabecalhoNavegacao) {
                this.cabecalhoMobile.addEventListener("click", () => {
                this.cabecalhoNavegacao.classList.toggle("active");
                });
            }
            };
    }
 const instancia = new HeaderComponent();
