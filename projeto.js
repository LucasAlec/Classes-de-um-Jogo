// Criando classe do heroi
class Heroi{
    // Criando objeto e suas propriedades 

    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

// Definindo o método 'atacar'
    atacar() {
        let ataque;

        switch(this.tipo){
            case 'mago':
                ataque = 'magia';
                break;
            
            case 'guerreiro':
                ataque = 'espada';
                break;
            
            case 'monge':
                ataque = 'artes marciais';
                break;
            
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'atacou';
        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

//Exemplos 

const hero1 = new Heroi('Rick', 50, 'guerreiro');
hero1.atacar();
const hero2 = new Heroi('Glenn', 250, 'mago');
hero2.atacar();
const hero3 = new Heroi('Andrea', 38, 'ninja');
hero3.atacar();
const hero4 = new Heroi('Isolde', 98, 'monge');
hero4.atacar();
const hero5 = new Heroi('Rita', 26, 'policial');
hero5.atacar();