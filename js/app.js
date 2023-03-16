import { importCss } from "./import.js";

importCss('css/style.css');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

class Slider {
    constructor(options) {
        this.$src = options.src;
        this.sliders = options.arrPictures;
        this.frame = options.frame;
    }

    set(image) {
        this.$src.style.backgroundImage = 
        'url('+image+')';
    }

    init() {
        this.set(this.sliders[this.frame]);
    }
};

class ActionsSlider extends Slider {
    constructor(options) {
        super(options);
    }

    left() {
        this.frame--;
        if (this.frame < 0) {
            this.frame = this.sliders.length - 1;
        }
        this.set(this.sliders[this.frame]);
    }

    right() {
        this.frame++;
        if (this.frame === this.sliders.length) {
            this.frame = 0;
        }
        this.set(this.sliders[this.frame]);
    }
}

const slider = new ActionsSlider({
    src: document.querySelector('#src'),
    arrPictures: ['/img/6.jpg', '/img/7.jpg', '/img/8.jpg', '/img/9.jpg'],
    frame: 0,
});

left.addEventListener('click', () => slider.left());
right.addEventListener('click', () => slider.right());

document.addEventListener('DOMContentLoaded', () => {
    slider.init();
    setInterval(() => {
        slider.right();
    }, 5000);
});