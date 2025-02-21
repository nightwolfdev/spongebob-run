import { makeBackground } from '../objects/background';
import { makeInstructionText } from '../ui/instruction-text';
import { makeSelectCharacter } from '../ui/select-character';
import { makeSoundText } from '../ui/sound-text';
import { makeTitleText } from '../ui/title-text';

export default function mainMenu() {
    makeBackground();
    makeTitleText(200);
    makeInstructionText(300);
    makeSoundText(400);
    makeSelectCharacter();
}