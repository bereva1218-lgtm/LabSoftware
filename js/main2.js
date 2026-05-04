class AnimacionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'AnimacionScene' });
    }
    preload(){
        this.load.spritesheet('robot','recursos/animacion.png',
            { frameWidth: 107, frameHeight: 125});
    }

    create(){
    this.anims.create({
        key: 'caminar',
        frames: this.anims.generateFrameNumbers('robot', {
            start: 0,
            end: 6
        }),
        frameRate: 10,
        repeat: -1
    });

     // Crear sprite
        this.player = this.add.sprite(400, 300, 'robot');

        // Reproducir animación
        this.player.play('caminar');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: AnimacionScene
};

new Phaser.Game(config);