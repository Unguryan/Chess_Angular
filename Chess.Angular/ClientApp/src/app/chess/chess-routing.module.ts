import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartGameComponent } from './start-game/start-game.component';
import { BoardComponent } from './board/board.component';
import { ActiveGameComponent } from './active-game/active-game.component';

const routes: Routes = [
  { path: 'start', component: StartGameComponent },
  { path: 'game', component: ActiveGameComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChessRoutingModule { }
