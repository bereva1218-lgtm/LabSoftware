class MenuScene extends Phaser.Scene {

    constructor(){
        super({ key: 'MenuScene' });
    }
    preload(){
    this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png')
    }

    create(){
        //fondo
        this.cameras.main.setBackgroundColor('#24252A');

        //titulo
        this.add.text(400, 100, '¡THE MAZE!',{
        fontSize: '42px', 
        fill: '#fff',
        fontStyle: 'bold',
        align: 'center'
        }).setOrigin(0.5, 0);

        //Añadir imagen
        this.add.image(400, 260, 'ghost').setScale(0.4).setOrigin(0.5, 0.8);

        //Añadir instrucciones

        this.add.text(400, 340, 'Usa las flechas para moverte por el laberinto\n y resuelve cada acertijo para avanzar', {
        fontSize: '25px',
        fill: '#fff',
        align: 'center'
        }).setOrigin(0.5, 0.5); // lo baje un poquito para que no se superponga con la imagen o se choquen mucho

        //bton
 let boton= this.add.text(400, 430, 'JUGAR', {
            fontSize: '32px', 
            fill: '#000',
            backgroundColor: '#fff',
            padding: { x: 20, y: 10 },
            borderRadius: 35
        }).setOrigin(0.5, 0.1).setInteractive(); // para que el btn sea funcional

        boton.on('pointerdown', () =>{
            this.scene.start('GameScene');
        });

        boton.on('pointerover', () =>{
            boton.setStyle({ fill: 'rgb(255, 0, 0)' });
        })

        boton.on('pointerout', () =>{
            boton.setStyle({ fill: '#00ff00' });
        });

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: MenuScene
};

new Phaser.Game(config);