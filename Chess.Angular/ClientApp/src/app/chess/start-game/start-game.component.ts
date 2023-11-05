import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent {

  constructor(private router: Router){
    
  }

  StartGame(){
    alert("test");
    this.router.navigate(["/game"]);
  }
}
