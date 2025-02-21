import k from '../kaplay-ctx';

export const RUNNER_SCALE = 4;

export function makeRunner(pos) {
    const soundEnabled = k.getData('spongebob-run-sound');
    const selectedRunner = k.getData('spongebob-run-runner');

    const runner = k.add([
        k.sprite(selectedRunner, { anim: 'run' }),
        k.scale(RUNNER_SCALE),
        k.area(),
        k.anchor('center'),
        k.pos(pos),
        k.body({ jumpForce: 1500 }),
        {
            clamCollection: '',
            setControls() {
                k.onButtonPress('jump', () => {
                    if (this.isGrounded()) {
                        this.play('jump');
                        this.jump();

                        if (soundEnabled) {
                            k.play('jump', { volume: 0.3 });
                        }
                    }
                })
            },
            setEvents() {
                this.onGround(() => {
                    this.play('run');
                });
            }
        }
    ]);

    runner.clamCollection = runner.add([
        k.text('', { font: 'spongebob-font', size: 12 }),
        k.color(255, 255, 0),
        k.anchor('center'),
        k.pos(25, -10)
    ]);

    return runner;
}