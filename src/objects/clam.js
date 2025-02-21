import k from '../kaplay-ctx';

export const CLAM_SCALE = 4;

export function makeClam(pos) {
    const clam = k.add([
        k.sprite('clam', { anim: 'spin' }),
        k.area(),
        k.scale(CLAM_SCALE),
        k.anchor('center'),
        k.pos(pos),
        k.offscreen(),
        'clam'
    ]);

    return clam;
}