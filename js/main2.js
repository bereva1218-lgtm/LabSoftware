class AnimacionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'AnimacionScene' });
    }

    preload() {
        this.load.spritesheet('robot', 'recursos/robot.png', {
            frameWidth: 50,
            frameHeight: 95
        });
    }

    create() {
        // Animación quieto (frames 0-3)
        this.anims.create({
            key: 'quieto',
            frames: this.anims.generateFrameNumbers('robot',
            { start: 0,
            end: 3 }),
            frameRate: 5,
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
    }

    update() {
        let moviendose = false;

        if (this.cursors.left.isDown) {
            this.player.x -= 3;
            moviendose = true;
        } else if (this.cursors.right.isDown) {
            this.player.x += 3;
            moviendose = true;
        }

        if (this.cursors.up.isDown) {
            this.player.y -= 3;
            moviendose = true;
        } else if (this.cursors.down.isDown) {
            this.player.y += 3;
            moviendose = true;
        }

        this.player.x = Phaser.Math.Clamp(this.player.x, 20, 780);
        this.player.y = Phaser.Math.Clamp(this.player.y, 20, 580);

        if (moviendose) {
            if (this.player.anims.currentAnim?.key !== 'caminar') {
                this.player.play('caminar');
            }
        } else if (this.player.anims.currentAnim?.key !== 'quieto') {
            this.player.play('quieto');
        }
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