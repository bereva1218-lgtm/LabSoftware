class MenuScene extends Phaser.Scene {

    constructor(){
        super({ key: 'MenuScene' });
    }
    preload(){
        this.load.image('robotMenu', 'recursos/robotMenu.png');
    }

    create(){
        //fondo
        this.cameras.main.setBackgroundColor('#24252A');

        //titulo
        this.add.text(400, 100, '¡WELCOME TO \n THE MAZE!',{
        fontSize: '35px',
        textAlign: 'center',
        fill: '#fff',
        fontStyle: 'bold',
        align: 'center'
        }).setOrigin(0.5, 0);

        //Añadir imagen
        this.add.image(400, 260, 'robotMenu').setScale(1).setOrigin(0.5, 0.6);

        //Añadir instrucciones
        this.add.text(400, 340, 'Usa las flechas para moverte por el laberinto\n y resuelve cada acertijo para avanzar', {
        fontSize: '25px',
        fill: '#fff',
        align: 'center'
        }).setOrigin(0.5, 0.5); // lo baje un poquito para que no se superponga con la imagen o se choquen mucho

        //Botón Jugar
        let botonJugar = this.add.text(400, 400, 'JUGAR', {
            fontSize: '25px',
            fill: '#ffffff',
            backgroundColor: ' #0077ff',
            padding: { x: 20, y: 10 },
            borderRadius: 35
        }).setOrigin(0.5, 0.5).setInteractive();

        botonJugar.on('pointerdown', () =>{
            this.scene.start('AnimacionScene');
        });

        botonJugar.on('pointerover', () =>{
            botonJugar.setStyle({ fill: ' #004088' });
        })

        botonJugar.on('pointerout', () =>{
            botonJugar.setStyle({ fill: '#ffffff' });
        });

        //Botón Ver Créditos
        let botonCreditos = this.add.text(400, 470, 'VER CRÉDITOS', {
            fontSize: '24px',
            fill: '#ffffff',
            backgroundColor: ' #0077ff',
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