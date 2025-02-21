import k from './kaplay-ctx';
import game from './scenes/game';
import gameOver from './scenes/game-over';
import mainMenu from './scenes/main-menu';

k.loadSprite('background', 'graphics/background.png');

k.loadSprite('mr-krabs', 'graphics/mr-krabs.png', {
    anims: {
        jump: {
            from: 3,
            to: 4,
            speed: 10
        },
        run: {
            from: 0,
            to: 2,
            loop: true,
            speed: 15
        }
    },
    sliceX: 3,
    sliceY: 2
});

k.loadSprite('patrick', 'graphics/patrick.png', {
    anims: {
        jump: {
            from: 9,
            to: 13,
            speed: 10
        },
        run: {
            from: 0,
            to: 8,
            loop: true,
            speed: 20
        }
    },
    sliceX: 9,
    sliceY: 2
});

k.loadSprite('sandy', 'graphics/sandy.png', {
    anims: {
        jump: {
            from: 6,
            to: 8,
            speed: 10
        },
        run: {
            from: 0,
            to: 5,
            loop: true,
            speed: 15
        }
    },
    sliceX: 6,
    sliceY: 2
});

k.loadSprite('spongebob', 'graphics/spongebob.png', {
    anims: {
        jump: {
            from: 9,
            to: 14,
            speed: 10
        },
        run: {
            from: 0,
            to: 8,
            loop: true,
            speed: 20
        }
    },
    sliceX: 9,
    sliceY: 2
});

k.loadSprite('clam', 'graphics/clam.png', {
    anims: {
        spin: {
            from: 0,
            to: 3,
            loop: true,
            speed: 5
        },
    },
    sliceX: 4,
    sliceY: 1
});

k.loadSprite('jellyfish', 'graphics/jellyfish.png', {
    anims: {
        run: {
            from: 0,
            to: 3,
            loop: true,
            speed: 5
        }
    },
    sliceX: 4,
    sliceY: 1
});

k.loadSprite('plankton', 'graphics/plankton.png', {
    anims: {
        run: {
            from: 0,
            to: 9,
            loop: true,
            speed: 20
        }
    },
    sliceX: 10,
    sliceY: 1
});

k.loadSprite('thugfish', 'graphics/thugfish.png', {
    anims: {
        run: {
            from: 0,
            to: 7,
            loop: true,
            speed: 20
        }
    },
    sliceX: 8,
    sliceY: 1
});

k.loadSprite('thugfish2', 'graphics/thugfish2.png', {
    anims: {
        run: {
            from: 0,
            to: 8,
            loop: true,
            speed: 10
        }
    },
    sliceX: 9,
    sliceY: 1
});

k.loadFont('spongebob-font', 'fonts/spongebob-font.ttf');

k.loadSound('background', 'sounds/background.mp3');
k.loadSound('destroy', 'sounds/destroy.wav');
k.loadSound('hyper-ring', 'sounds/hyper-ring.wav');
k.loadSound('jump', 'sounds/jump.wav');
k.loadSound('oops', 'sounds/oops.mp3');
k.loadSound('ring', 'sounds/ring.wav');

k.scene('main-menu', mainMenu);
k.scene('game', game);
k.scene('game-over', gameOver);

k.go('main-menu');