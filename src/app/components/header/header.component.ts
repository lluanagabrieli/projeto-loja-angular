import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    // variável atribuída à classe '.active'
    isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        // ao clicar na div com o íconezinho de menu, esse método vai ser chamado, fazendo com que o valor que era falso se tornar verdadeiro, ativando a classe .active. O contrário tb acontece.
    }
}
