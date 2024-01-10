# Classes de um Jogo

### Objetivo

Criar a classe  `Heroi` com os seguintes atributos:

- `nome`
- `idade`
- `tipo` (ex: guerreiro, mago, monge, ninja )

Além disso, apresenta o  método chamado `atacar` que deve atender os seguientes requisitos:

- exibir a mensagem: `"O {tipo} atacou usando {ataque}")`
- Onde o atributo `this.tipo` deve ser concatenando o tipo que está na propriedade da classe
- E a variável `ataque` deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

* se mago -> no ataque exibir (magia)
* se guerreiro -> no ataque exibir (espada)
* se monge -> no ataque exibir (artes marciais)
* se ninja -> no ataque exibir (shuriken)

### Saída

Ao final deve se exibir uma mensagem:

 `"O ${this.tipo} atacou usando ${ataque}"`
  
  ## Exemplos:

`const hero1 = new Heroi('Rick', 50, 'guerreiro');`
`hero1.atacar();`

guerreiro atacou usando espada

 `const hero2 = new Heroi('Gleen', 250, 'mago');`
`hero2.atacar();`

mago atacou usando magia

