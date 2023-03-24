import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html'
})
export class GameControlComponent {
    @Output() intervalFired = new EventEmitter<number>();
    intervalId?: any;
    lastNumber: number = 0;

    onPauseGame() {
        clearInterval(this.intervalId);
    }

    onStartGame() {
        this.intervalId = setInterval(() => {
            this.lastNumber = this.lastNumber + 1;
            this.intervalFired.emit(this.lastNumber);
        }, 1000)
    }
}