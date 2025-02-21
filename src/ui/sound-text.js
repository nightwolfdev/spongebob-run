import k from '../kaplay-ctx';

const TEXT_SIZE = 32;
const HOVER_SIZE = 34;

export function makeSoundText(y) {
    const enabled = k.getData('spongebob-run-sound', true);

    const soundText = k.add([
        k.text(enabled ? 'Sound: ON' : 'Sound: OFF', { font: 'spongebob-font', size: TEXT_SIZE }),
        k.anchor('center'),
        k.pos(k.center().x, y),
        k.area(),
        {
            enabled
        }
    ]);

    soundText.onHover(() => {
        k.setCursor('pointer');
        soundText.color = k.Color.fromArray([255, 255, 0]);
        soundText.textSize = HOVER_SIZE;
    });

    soundText.onHoverEnd(() => {
        k.setCursor('default');
        soundText.color = k.Color.fromArray([255, 255, 255]);
        soundText.textSize = TEXT_SIZE;
    });

    soundText.onClick(() => {
        soundText.enabled = !soundText.enabled;
        soundText.text = soundText.enabled ? 'Sound: ON' : 'Sound: OFF';
        k.setData('spongebob-run-sound', soundText.enabled);
    });

    return soundText;
}