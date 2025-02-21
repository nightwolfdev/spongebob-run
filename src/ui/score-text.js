import k from '../kaplay-ctx';

export function makeScoreText() {
    const scoreText = k.add([
        k.text('Score: 0', { font: 'spongebob-font', size: 48 }),
        k.pos(20, 20),
        {
            updateText(score) {
                this.text = `Score: ${score}`;
            }
        }
    ]);

    return scoreText;
}