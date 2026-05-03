class GameScene extends Phaser.Scene
{
    constructor ()
    {
        super({key:'GameScene'});
    }

    preload () 
    {
        this.load.image('laberinto', 'recursos/laberinto.png');
        this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png')
    }

    create () 
    {
        this.laberinto = this.add.image(600, 300, 'laberinto');
        this.laberinto.setScale(0.8);
        this.player = this.add.image(400, 300, 'player');
        this.player.setScale(1);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update(){
    
    //para que no se pueda jugar al salir el game over
    if (this.gameOver) return;

    //movimiento jugador
    if(this.cursors.left.isDown){
        this.player.x -= 3;
    }
    else if(this.cursors.right.isDown){
        this.player.x += 3;
    }

    if(this.cursors.up.isDown){
        this.player.y -= 3;
    }
    else if(this.cursors.down.isDown){
        this.player.y += 3;
    }
    
    this.player.x= Phaser.Math.Clamp(this.player.x, 20, 780); // se delimita el movimiento del jugador para que no salga de la pantalla
    this.player.y= Phaser.Math.Clamp(this.player.y, 20, 580);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 1200,
    height: 600,
    backgroundColor: '#000000',
    scene: GameScene,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);

