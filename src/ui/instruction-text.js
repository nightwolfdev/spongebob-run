import k from '../kaplay-ctx';

const TEXT_SIZE = 48;

export function makeInstructionText(y) {
    const titleText = k.add([
        k.text('Click, Spacebar, or Tap to Jump', { font: 'spongebob-font', size: TEXT_SIZE }),
        k.anchor('center'),
        k.pos(k.center().x, y)
    ]);

    return titleText;
}