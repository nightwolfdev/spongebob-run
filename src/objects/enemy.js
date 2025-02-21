import k from '../kaplay-ctx';

export const ENEMY_SCALE = 3;

export function makeEnemy(pos) {
    const enemies = [
        { sprite: 'jellyfish', scale: 3, size: 28 },
        { sprite: 'thugfish', scale: 3, size: 65 },
        { sprite: 'thugfish2', scale: 3, size: 45 },
        { sprite: 'plankton', scale: 1, size: 45 }
    ];
    const randomNumber = Math.floor(k.rand(0, enemies.length));
    const randomEnemy = enemies[randomNumber];

    const enemy = k.add([
        k.sprite(randomEnemy.sprite, { anim: 'run' }),
        k.area({ shape: new k.Rect(k.vec2(-5, 0), randomEnemy.size, randomEnemy.size) }),
        k.scale(randomEnemy.scale),
        k.anchor('center'),
        k.pos(pos),
        k.offscreen(),
        'enemy'
    ]);

    return enemy;
}