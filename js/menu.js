class MenuScene extends Phaser.Scene {

    constructor(){
        super({ key: 'MenuScene' });
    }
    preload(){
        /*this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
        this.load.image('ghost', 'https://labs.phaser.io/assets/sprites/ghost.png'); */
    }

    create(){
        //fondo
        this.cameras.main.setBackgroundColor('#24252A');

        //titulo
        this.add.text(400, 100, '¡WELCOME TO \n THE MAZE!',{
        fontSize: '42px',
        textAlign: 'center',
        fill: '#fff',
        fontStyle: 'bold',
        align: 'center'
        }).setOrigin(0.5, 0);

        //Añadir imagen
        //this.add.image(400, 260, 'ghost').setScale(0.4).setOrigin(0.5, 0.8);

        //Añadir instrucciones

        this.add.text(400, 340, 'Usa las flechas para moverte por el laberinto\n y resuelve cada acertijo para avanzar', {
        fontSize: '25px',
        fill: '#fff',
        align: 'center'
        }).setOrigin(0.5, 0.5); // lo baje un poquito para que no se superponga con la imagen o se choquen mucho

        //Botón Jugar
        let botonJugar = this.add.text(400, 400, 'JUGAR', {
            fontSize: '32px', 
            fill: '#000',
            backgroundColor: '#fff',
            padding: { x: 20, y: 10 },
            borderRadius: 35
        }).setOrigin(0.5, 0.5).setInteractive();

        botonJugar.on('pointerdown', () =>{
            this.scene.start('GameScene');
        });

        botonJugar.on('pointerover', () =>{
            botonJugar.setStyle({ fill: 'rgb(255, 221, 27)' });
        })

        botonJugar.on('pointerout', () =>{
            botonJugar.setStyle({ fill: '#000' });
        });

        //Botón Ver Créditos
        let botonCreditos = this.add.text(400, 470, 'VER CRÉDITOS', {
            fontSize: '24px',
            fill: '#000',
            backgroundColor: '#00ff00',
            padding: { x: 15, y: 8 },
            borderRadius: 25
        }).setOrigin(0.5, 0.5).setInteractive();

        botonCreditos.on('pointerdown', () =>{
            this.scene.start('Creditos');
        });

        botonCreditos.on('pointerover', () =>{
            botonCreditos.setStyle({ fill: 'rgb(255, 255, 255)' });
        })

        botonCreditos.on('pointerout', () =>{
            botonCreditos.setStyle({ fill: '#000' });
        });
    }
}