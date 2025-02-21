import k from '../kaplay-ctx';

export function makeGameOverText(y) {
    const score = k.getData('spongebob-run-score');

    const gameOverText = [
        k.add([
            k.text('GAME OVER', { font: 'spongebob-font', size: 96 }),
            k.anchor('center'),
            k.pos(k.center().x, y)
        ]),
        k.add([
            k.text(`Score: ${score}`, { font: 'spongebob-font', size: 64 }),
            k.anchor('center'),
            k.pos(k.center().x, y + 100)
        ])
    ];

    return gameOverText;
}