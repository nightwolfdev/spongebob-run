import k from '../kaplay-ctx';

const TEXT_SIZE = 96;

export function makeTitleText(y) {
    const titleText = k.add([
        k.text('SPONGEBOB RUN', { font: 'spongebob-font', size: TEXT_SIZE }),
        k.anchor('center'),
        k.pos(k.center().x, y)
    ]);

    return titleText;
}