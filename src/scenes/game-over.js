import { makeBackground } from '../objects/background';
import { makeGameOverText } from '../ui/game-over-text';
import { makeSelectCharacter } from '../ui/select-character';
import { makeSoundText } from '../ui/sound-text';

export default function gameOver(data) {
    if (data.backgroundSound) {
        data.backgroundSound.paused = true;
    }

    makeBackground();
    makeGameOverText(200);
    makeSoundText(400);
    makeSelectCharacter();
}