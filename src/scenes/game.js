import k from '../kaplay-ctx';
import { makeBackground, animateBackground } from '../objects/background';
import { makeClam } from '../objects/clam';
import { makeRunner } from '../objects/runner';
import { makeEnemy } from '../objects/enemy';
import { makeScoreText } from '../ui/score-text';

export default function game() {
    k.setCursor('default');
    k.setGravity(3100);

    const soundEnabled = k.getData('spongebob-run-sound');
    let backgroundSound;

    if (soundEnabled) {
        backgroundSound = k.play('background', { volume: 0.2, loop: true });
    }

    const background = makeBackground();
    const scoreText = makeScoreText();

    let score = 0;
    let scoreMultiplier = 0;

    const runner = makeRunner(k.vec2(200, 760));
    runner.setControls();
    runner.setEvents();

    runner.onCollide('enemy', (enemy) => {
        if (!runner.isGrounded() && runner.pos.y < enemy.pos.y && runner.vel.y > 0) {
            if (soundEnabled) {
                k.play('destroy', { volume: 0.2 });
                k.play('hyper-ring', { volume: 0.2 });
            }

            k.destroy(enemy);
            runner.play('jump');
            runner.jump();
            scoreMultiplier++;
            score += 10 * scoreMultiplier;
            scoreText.updateText(score);
            runner.clamCollection.text = `${scoreMultiplier === 1 ? '+10' : 'x' + scoreMultiplier}`;
            k.wait(1, () => (runner.clamCollection.text = ''));
            return;
        }

        if (soundEnabled) {
            k.play('oops', { volume: 0.2 });
        }

        k.setData('spongebob-run-score', score);
        k.go('game-over', { backgroundSound });
    });

    runner.onCollide('clam', (clam) => {
        if (soundEnabled) {
            k.play('ring', { volume: 0.2 });
        }

        k.destroy(clam);
        score++;
        scoreText.updateText(score);
        runner.clamCollection.text = '+1';
        k.wait(1, () => (runner.clamCollection.text = ''));
    });

    k.add([
        k.rect(1920, 300),
        k.pos(0, 845),
        k.opacity(0),
        k.area(),
        k.body({ isStatic: true })
    ]);


    let gameSpeed = 300;

    k.loop(1, () => {
        gameSpeed += 50;
    });

    const spawnEnemy = () => {
        const enemy = makeEnemy(k.vec2(1950, 760));

        enemy.onUpdate(() => {
            if (gameSpeed < 3000) {
                enemy.move(-(gameSpeed + 300), 0);
                return;
            }

            enemy.move(-gameSpeed, 0);
        });

        enemy.onExitScreen(() => {
            if (enemy.pos.x < 0) {
                k.destroy(enemy);
            }
        });

        const waitTime = k.rand(0.5, 2.5);
        k.wait(waitTime, spawnEnemy);
    };

    spawnEnemy();

    const spawnClam = () => {
        const clam = makeClam(k.vec2(1950, 500));

        clam.onUpdate(() => {
            if (gameSpeed < 3000) {
                clam.move(-(gameSpeed + 300), 0);
                return;
            }

            clam.move(-gameSpeed, 0);
        });

        clam.onExitScreen(() => {
            if (clam.pos.x < 0) {
                k.destroy(clam);
            }
        });

        const waitTime = k.rand(0.5, 3);
        k.wait(waitTime, spawnClam);
    };

    spawnClam();

    k.onUpdate(() => {
        if (runner.isGrounded()) {
            scoreMultiplier = 0;
        }

        animateBackground(background, gameSpeed);
    });
}