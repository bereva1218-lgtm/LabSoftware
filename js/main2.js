class AnimacionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'AnimacionScene' });
    }

    preload() {
        this.load.spritesheet('robot', 'recursos/robot.png', {
            frameWidth: 50,
            frameHeight: 95
        });
        
        this.load.image('background',
            'recursos/background.png');
    }

    create() {
        this.add.image(0,0,'background').setOrigin(0);
        //  Set the camera bounds to be the size of the image
        this.cameras.main.setBounds(0, 0, 1920, 1080);

        // Animación quieto (frames 0-3)
        this.anims.create({
            key: 'quieto',
            frames: this.anims.generateFrameNumbers('robot',
            { start: 0,
            end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        // Animación caminar (frames 4-10)
        this.anims.create({
            key: 'caminar',
            frames: this.anims.generateFrameNumbers('robot', { start: 4, end: 10 }),
            frameRate: 10,
            repeat: -1
        });
        this.player = this.add.sprite(400, 300, 'robot');
        this.player.play('quieto'); // empieza quieto
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player.flipX = false; // inicialmente mira a la derecha
        
        // Hacer que la cámara siga al jugador
        this.cameras.main.startFollow(this.player);

    }

    update(time, delta) {
        let moviendose = false;

        if (this.cursors.left.isDown) {
            this.player.x -= 3;
            this.player.flipX = false; // girar a la izquierda
            moviendose = true;
        } else if (this.cursors.right.isDown) {
            this.player.x += 3;
            this.player.flipX = true; // girar a la derecha
            moviendose = true;
        }

        if (this.cursors.up.isDown) {
            this.player.y -= 3;
            moviendose = true;
        } else if (this.cursors.down.isDown) {
            this.player.y += 3;
            moviendose = true;
        }

        this.player.x = Phaser.Math.Clamp(this.player.x, 0, 1600); //cambiarle valores para que no se oculte
        this.player.y = Phaser.Math.Clamp(this.player.y, 0, 1150);

        if (moviendose) {
            if (this.player.anims.currentAnim?.key !== 'caminar') {
                this.player.play('caminar');
            }
        } else if (this.player.anims.currentAnim?.key !== 'quieto') {
            this.player.play('quieto');
        }
    }
}

/*const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#000000',
    scene: AnimacionScene,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};
*/
const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: [MenuScene, AnimacionScene, Creditos],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

new Phaser.Game(config);