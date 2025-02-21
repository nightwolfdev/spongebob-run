import k from '../kaplay-ctx';

export function makeSelectCharacter() {
    k.add([
        k.text('Select Character', { font: 'spongebob-font', size: 48 }),
        k.anchor('center'),
        k.pos(k.center().x, 625)
    ]);

    const spongebob = k.add([
        k.sprite('spongebob'),
        k.area(),
        k.scale(3),
        k.anchor('center'),
        k.pos(k.center().x - 300, 775),
        'character'
    ]);

    const patrick = k.add([
        k.sprite('patrick'),
        k.area(),
        k.scale(3),
        k.anchor('center'),
        k.pos(k.center().x - 100, 765),
        'character'
    ])

    const sandy = k.add([
        k.sprite('sandy'),
        k.area(),
        k.scale(3),
        k.anchor('center'),
        k.pos(k.center().x + 100, 765),
        'character'
    ]);

    const mrKrabs = k.add([
        k.sprite('mr-krabs'),
        k.area(),
        k.scale(3),
        k.anchor('center'),
        k.pos(k.center().x + 300, 765),
        'character'
    ]);

    const characters = k.get('character');

    characters.forEach(character => {
        character.onHover(() => {
            k.setCursor('pointer');
            character.scale = k.vec2(3.2);
        });

        character.onHoverEnd(() => {
            k.setCursor('default');
            character.scale = k.vec2(3);
        });

        character.onClick(() => {
            k.setData('spongebob-run-runner', character.sprite);
            k.go('game');
        });
    });
}