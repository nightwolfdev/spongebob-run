import kaplay from 'kaplay';

const options = {
    background: [0, 0, 0],
    buttons: {
        jump: {
            keyboard: ['space'],
            mouse: 'left'
        }
    },
    global: false,
    height: 1080,
    letterbox: true,
    touchToMouse: true,
    width: 1920
};

const k = kaplay(options);

export default k;