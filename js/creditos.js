class Creditos extends Phaser.Scene {
    constructor(){
        super({ key: 'Creditos' });
    }

    init(data) {
        this.finalScore = data.score || 0;
    }

    create(){
        // Fondo
        this.cameras.main.setBackgroundColor('#24252A');

        // Título Game Over
        this.add.text(400, 80, 'GAME OVER', {
            fontSize: '48px', 
            fill: '#ff0000',
            fontStyle: 'bold',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        // Puntaje final
        this.add.text(400, 180, 'Puntaje Final:', {
            fontSize: '32px',
            fill: '#ffff00',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        this.add.text(400, 250, this.finalScore.toString(), {
            fontSize: '64px',
            fill: '#19d45d',
            fontStyle: 'bold',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        // Créditos
        this.add.text(400, 350, 'Créditos', {
            fontSize: '35px',
            fill: '#ffffff',
            fontStyle: 'bold',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        this.add.text(400, 400, 'Valeria Becerra Rendon - 30000139481', {
            fontSize: '25px',
            fill: '#cccccc',
            align: 'center'
        }).setOrigin(0.5, 0.5); //para poner el texto en el centro

        this.add.text(400, 445, 'Miley Carrera Pinto - 30000140456', {
            fontSize: '25px',
            fill: '#cccccc',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        // Botón Volver al Menú
        let botonMenu = this.add.text(400, 530, 'Volver al menú', {
            fontSize: '24px',
            fill: '#000',
            backgroundColor: '#fff',
            padding: { x: 15, y: 10 },
            borderRadius: 10,
            align: 'center'
        }).setOrigin(0.5, 0.5).setInteractive();

        botonMenu.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });

        botonMenu.on('pointerover', () => {
            botonMenu.setStyle({ fill: 'rgb(255, 221, 27)' });
        });

        botonMenu.on('pointerout', () => {
            botonMenu.setStyle({ fill: '#000' });
        });
    }
}