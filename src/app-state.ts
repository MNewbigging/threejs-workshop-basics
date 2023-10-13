import { Game } from "./game";

export class AppState {
  game?: Game;

  startGame() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (!canvas) {
      console.error("could not find canvas");
      return;
    }

    this.game = new Game(canvas);
  }
}
