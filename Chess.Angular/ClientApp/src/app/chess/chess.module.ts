import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { ChessRoutingModule } from './chess-routing.module';
import { StartGameComponent } from './start-game/start-game.component';
import { BoardComponent } from './board/board.component';
import { ActiveGameComponent } from './active-game/active-game.component';


@NgModule({
  declarations: [
    StartGameComponent,
    BoardComponent,
    ActiveGameComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    ChessRoutingModule
  ]
})
export class ChessModule { }
