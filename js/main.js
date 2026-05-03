class GameScene extends Phaser.Scene {
    constructor(){
        super({key: 'GameScene'});
    }

    preload(){
        this.load.image('laberinto', 'recursos/laberinto.png');
    }

    create(){
        this.add.image(400, 300, 'laberinto');
    }
}