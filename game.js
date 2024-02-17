var config = {  
    // Configurações básicas do game
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// declaração de vaiáveis
var game = new Phaser.Game(config);
var velocidadeX = 7;
var velocidadeY = 5;

// ciclo de funcionamento do jogo
function preload() { // carregar os recursos do game
    this.load.image('bg', 'assets/bg_space.png'); // carregar o background
    this.load.spritesheet('bird', 'assets/bird-purple.png', { frameWidth:75, fameHeight: 75 }); // carregar o pássaro
}

function create() { // criar e configurar elementos do game
    this.add.image(400, 300, 'bg').setScale(1.2); // coloca o background na tela
    passarinho = this.add.sprite(100, 300, 'bird').setScale(1.3); // coloca o pássaro na tela

    // configuração da animação do voo
    this.anims.create({ 
        key: 'fly', // nome para chamar a animação
        frames: this.anims.generateFrameNumbers('bird', {start: 0, end: 7}), // definição das sprites a serem usadas na animação
        frameRate: 10, // velocidade da animação
        repeat: -1 //definição da repetição em loop
    });

    passarinho.anims.play('fly', true) // iniciando a animação
}

function update() {  // lógica de atualização em tempo real
   while(passarinho.x < 700 || passarinho.x > 100){ // loop para manter o movimento do passaro dentro dos limites no eixo x
        passarinho.x += velocidadeX // define a velocidade de deslocamento no eixo x
        if(passarinho.x > 700 || passarinho.x < 100) { // inversão de movimento ao ultrapassar os limites do campo
            velocidadeX *= -1
        }
        break;
   }

    while(passarinho.y < 500 || passarinho.y > 100){ // loop para manter o movimento do passaro dentro dos limites no eixo y
        passarinho.y += velocidadeY // define a velocidade de deslocamento no eixo y
        if (passarinho.y > 500 || passarinho.y < 100) { // inversão de movimento ao ultrapassar os limites do campo
            velocidadeY *= -1
        }
        break;
    }


    if(velocidadeX > 0) { // condição de espelhamento da imagem de acordo com o movimento no eixo x
        passarinho.setFlip(false, false)
    } else{
        passarinho.setFlip(true, false)
    }

}
