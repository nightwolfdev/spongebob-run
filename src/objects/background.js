import k from '../kaplay-ctx';

export const BACKGROUND_WIDTH = 1920;
export const BACKGROUND_SCALE = 1;

export function makeBackground() {
    // Using two for animating horizontally
    const background = [
        k.add([
            k.sprite('background'),
            k.pos(0, 0)
        ]),
        k.add([
            k.sprite('background'),
            k.pos(BACKGROUND_WIDTH, 0)
        ])
    ];

    return background;
}

export function animateBackground(background, speed) {
    if (background[1].pos.x < 0) {
        background[0].moveTo(background[1].pos.x + BACKGROUND_WIDTH, 0);
        background.push(background.shift());
    }

    background[0].move(-speed, 0);
    background[1].moveTo(background[0].pos.x + BACKGROUND_WIDTH, 0);
}