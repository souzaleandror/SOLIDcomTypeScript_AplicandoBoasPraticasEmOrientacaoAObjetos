#17/07/2026

SOLID com TypeScript:
Aplicando boas práticas em orientação a objetos
Continuar Curso

Adicionar a uma trilha
MINHAS TRILHAS
Swift / IOs - Julho/Agosto
Extra Linguagens - programação funcional - Set/Out
Android - Set/Out
Nov / Dez / Jan - Flutter
Nov / Dez / Jan - Reactive
PHP Fev/Mar
Front Framework - JS Fev/Mar
IOS / Abril

Adicionar em nova trilha
 
Outras ações
FAVORITAR
Separe os cursos que mais gostar para estudar em outro momento.
CONCLUIR
Certificado de conclusão quando atingir no mínimo 60% de progresso.
SAIR DO CURSO
Não ver mais esse curso na dashboard e em “Meus cursos” até iniciá-lo novamente.
Faça esse curso de JavaScript & Node.js e:
Aplique na prática dos cinco princípios SOLID em um projeto real usando Typescript
Aprenda a refatorar e melhorar a estrutura de um sistema complexo seguindo as boas práticas de desenvolvimento
Pratique as estratégias para dividir um sistema em módulos e classes com responsabilidades bem definidas
Use técnicas para garantir a flexibilidade e a manutenibilidade do código através da correta aplicação dos princípios de design de software
Implemente um sistema de gestão de projetos com foco na qualidade do código e na eficiência do desenvolvimento

Separando as responsabilidades
Ver primeiro vídeo
0 / 14
27min
Apresentação
Preparando o ambiente: ferramentas do curso
Entendendo o código ''faz-tudo''
Para saber mais: tipos de acoplamento
Para saber mais: tipos de coesão
Dividindo as responsabilidades em classes
Coesão e acoplamento em módulos
Testando as implementações
Para saber mais: afinal, o que significa SOLID?
Princípio da responsabilidade única
Para saber mais: quebrando o módulo
Mão na massa: dividindo tarefas na cozinha
Para saber mais: Uncle Bob, o Tio Bob
O que aprendemos?

Estendendo as funcionalidades dos módulos
0 / 9
17min
Projeto da aula anterior
Lidando com códigos sem extensibilidade
Implementando uma nova forma de contrato
Para saber mais: extensibilidade, confiabilidade e abstração
Princípio aberto/fechado
Implementando contrato PJ
Mão na massa: melhorando extensibilidade com uma batedeira
Para saber mais: Bertrand Meyer
O que aprendemos?

Refatorando as abstrações de um módulo
0 / 11
16min
Projeto da aula anterior
Analisando heranças com erros
Refatorando classes derivadas
Para saber mais: Sobrescrita x Sobrecarga
Princípio da substituição de Liskov
Para saber mais: outro exemplo do princípio de Liskov
Implementando o princípio de Liskov em classes
Para saber mais: Barbara Liskov
Faça como eu fiz: alterando a modelagem
Mão na massa: O Princípio de Liskov na lanchonete
O que aprendemos?

Simplificando interfaces
0 / 8
13min
Projeto da aula anterior
Implementando o PIX no módulo de pagamento
Refatorando interfaces sobrecarregadas
Princípio da segregação de interfaces
Implementando diferentes formas de pagamento
Para saber mais: Uncle Bob e o problema da impressora
Mão na massa: entendendo a segregação da interface em uma cozinha
O que aprendemos?

Desacoplando o banco de dados
0 / 12
19min
Projeto da aula anterior
Lidando com códigos sem extensibilidade
Implementando uma nova forma de contrato
Para saber mais: Inversão x Injeção de dependência
Princípio da inversão de dependência
Para saber mais: KISS, DRY e YAGNI
Desacoplamento em ação
Mão na massa: invertendo dependências na cozinha
Projeto final
O que aprendemos?
Conclusão
Créditos

@01-Estendendo as funcionalidades dos módulos

@@01-Apresentação



Olá! Boas-vindas a este curso de Solid.

Meu nome é Emerson Laranja, sou instrutor na Escola de Programação.

Audiodescrição: Emerson se descreve como um homem negro com barba e cabelo curtos. Está usando óculos quadrados e uma blusa azul. Ao fundo, há uma parede iluminada nas cores azul e verde.

Se desejam escrever um código mais limpo e seguro, este conteúdo é perfeito para vocês. Ao longo deste curso, vamos explorar os cinco princípios do Solid, que são:

Responsabilidade única,
Aberto/Fechado,
Substituição de Liskov,
Segregação das interfaces;
Inversão de dependência.
Vamos ver tudo isso, na prática, em um sistema de gerenciamento de uma empresa. Vamos explorar o módulo que gerencia pessoas, pagamentos e até mesmo a infraestrutura desse sistema.

Para acompanhar melhor este conteúdo, é importante que já tenham conhecimento básico de TypeScript e de programação orientada a objetos.

Convidamos vocês a aproveitarem os recursos da plataforma e ir além dos vídeos, cumprindo as atividades, tirando suas dúvidas no fórum do curso e conversando com outras pessoas que estejam estudando este mesmo assunto na nossa comunidade no Discord.

Então, vamos lá?

@@02-Preparando o ambiente: ferramentas do curso
DISCUTIR NO FÓRUM
Projeto inicial

Para este curso, deixamos preparado um projeto inicial com algumas configurações que serão usadas ao longo das aulas. Baixe o projeto ou visualize os arquivos no GitHub.

Após o download, instale as dependências com npm install.

NodeJS

Caso já tenha feito algum curso anterior de JavaScript para back-end, o NodeJS pode já estar instalado no seu computador. Caso não tenha certeza, é possível conferir com os seguintes passos:

1 - Abra uma janela do terminal em seu computador. Isso pode ser feito da seguinte forma:

Windows: no campo de busca do menu Iniciar, procure por Prompt de Comando ou acesse via Menu Iniciar > Sistema do Windows > Prompt de Comando.

MacOs: acesse o terminal disponível no menu de Aplicações, dentro da pasta de Utilitários.

Linux (Ubuntu): acesse oTerminal disponível no menu de Programas/Aplicações. Caso não localize, pode estar dentro da pasta Utilitários.

2 - No terminal, digite node --version ou node -v. Caso retorne um número de versão, por exemplo v16.17.0, isso significa que o NodeJS já está instalado. Vale ressaltar que este curso foi desenvolvido utilizando a versão 18.15.0.

Caso não esteja instalado, você pode seguir o passo a passo do artigo “Como instalar o Node.js no Windows, Linux e macOS”!

Git

Para trabalhar com o código do projeto, é necessário ter o Git instalado em seu computador. Você pode fazer o download e seguir as instruções de instalação no site oficial do Git.

Navegando entre branches com Git

Durante o desenvolvimento do projeto, será necessário alternar entre diferentes branches do repositório Git. Para isso, utilizamos o comando git checkout. Aqui está como você pode navegar entre branches:

Para listar todas as branches disponíveis no repositório local:

Copiar
git branch

Para mudar para uma branch específica (por exemplo, a branch tarefa-1-pendente):

Copiar
git checkout tarefa-1-pendente

Certifique-se de substituir tarefa-1-pendente pelo nome da branch que deseja acessar.

Visual Studio Code

É o editor que escolhemos utilizar para escrever nossos códigos durante este curso. Acesse o site oficial do VSC onde há links para baixar e instalar a IDE.

Tudo pronto? Então vamos começar!

https://github.com/alura-cursos/solid/archive/refs/heads/tarefa-1-pendente.zip

https://github.com/alura-cursos/solid.git

https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos

https://git-scm.com/downloads

https://code.visualstudio.com/

@@03-Entendendo o código ''faz-tudo''

Fomos contratados para implementar algumas melhorias e refatorações em um sistema de gerenciamento de uma empresa. As atividades que precisaremos executar foram listadas no Trello, que temos aberto.

Conhecendo as tarefas do projeto

A primeira tarefa é "Código Canivete Suíço". Vamos abrir o card para entendermos melhor do que se trata. Tivemos uma conversa inicial com o Tech Lead (Líder Técnico) e fomos informados que a maioria dessas melhorias não está relacionada a um código legado ou a uma nova biblioteca que precisa ser usada, mas sim a algumas refatorações de boas práticas que precisaremos implementar. Começando com a descrição desta primeira atividade:

Temos um módulo do sistema que realiza diversas funções e isso dificulta a manutenção. Trata-se da classe Sistema no código anexado.

Além disso, estamos repetindo código para calcular o salário, já que não conseguimos reutilizar código com tudo tao acoplado.

Por favor, resolva o problema e realize as refatoraçóes necessárias.

Explorando o projeto disponibilizado

No card da tarefa, temos um projeto no GitHub em anexo, que eu já deixei no nosso editor de código, o VS Code. Com o código aberto, vamos visualizar do que se trata essa primeira tarefa. No explorador de arquivos do VS Code, temos a pasta "tarefa-1" e alguns outros arquivos para a configuração do projeto Node.

Na pasta "tarefa 1", temos as pastas "dist", onde ficará o nosso código compilado em JavaScript e "enum", com o arquio cargos.ts, com os cargos possíveis na empresa:

Estagiário,
Júnior,
Pleno,
Sênior.
Na pasta "tarefa-1", temos também a classe Colaborado, com três atributos: nome, _cargo e _saldo. Nela também temos, e algumas operações de get e set. Além disso, temos a classe main e a classe Sistema.

Podemos então abrir o Sistema.ts, onde está, de fato, nosso problema. Neste arquivo temos dois atributos: _colaboradores, do tipo Colaborador, e _salarioBase, do tipo number. Além disso, ele possui vários métodos, como contratarColaborador, demitirColaborador, calcularSalario, pagarColaborador, gerarRelatorioJSON e um get dos colaboradores desse sistema.

Analisando os problemas

Como podemos ver, é uma classe grande, o que dificulta tanto entender o código, quanto fazer a manutenção dele. Além disso, esse código apresenta baixa coesão, o que significa que ele assume responsabilidades que não são dele.

Por exemplo, temos um sistema que, além de lidar com colaboradores, lida com pagamento. Para termos uma alta coesão, o ideal é que os métodos da nossa classe se relacionem com a sua definição. Se é uma classe de pagamento, ali lidaremos com pagamento apenas, não com manipulações com colaborador.

Além disso, possuímos um alto acoplamento. Porque hoje, se precisarmos, como exigido pela tarefa, calcular o salário, precisaremos importar uma instância de todo o sistema, com vários outros métodos, só para calcular um salário. Quando o ideal seria ter um módulo para lidar apenas com isso.

Para facilitar o entendimento de como seria essa solução, já criei um diagrama. Voltando ao nosso navegador, vou abrir o Lucidchart, onde tem um quadrado com a metade superior sendo um fundo vermelho e a metade inferior é um fundo verde.

No fundo vermelho, temos a nossa situação atual, e, no fundo verde, onde queremos chegar, ou seja, o código correto, assim digamos. Vamos ampliar o que está escrito no fundo vermelho para entendermos como está a relação hoje dessas classes.

Imagem

Temos um Colaborador e um Sistema, que possuem alguns métodos que precisam dos Cargos. O Sistema se liga ao Colaborador, porque possui um quadro de colaboradores, e nosso objetivo é resolver o fato do nosso Sistema ter tantos métodos, ou seja, tantas responsabilidades.

No nosso cenário ideal, de fundo verde, continuamos com o Colaborador e o enum, ou seja, os Cargos. Não vamos alterar essa parte, apenas não teremos mais uma classe Sistema, mas sim, novas quatro classes, cada uma com uma das responsabilidades do método Sistema.

Se vamos lidar com pagamento, temos a classe Pagamento. Para calcular o salário, teremos uma classe CalculaSalario, bem como uma classe apenas para gerar o relatório (GeraRelatorio) e outra para lidar com o quadro de colaboradores (QuadroColaboradores), onde vamos contratar, demitir e buscar esses colaboradores.

A implementação do que temos como solução, veremos na sequência.

@@04-Para saber mais: tipos de acoplamento
DISCUTIR NO FÓRUM
No desenvolvimento de software, a busca por um baixo acoplamento é essencial para criar sistemas flexíveis e de fácil manutenção, uma medida de qualidade do software.

O acoplamento, que representa a dependência entre os diversos módulos ou componentes de um sistema, pode tornar o código complexo e difícil de modificar quando não é adequadamente gerenciado.

Por isso, entender os diferentes tipos de acoplamento e suas implicações é fundamental para pessoas desenvolvedoras que desejam criar sistemas robustos e escaláveis.

Vamos explorar mais sobre o que é acoplamento e os diferentes tipos que podem ser encontrados no desenvolvimento de software.

O que é acoplamento?

Acoplamento, no contexto da engenharia de software, refere-se ao grau de dependência entre diferentes partes de um sistema. Quanto maior o acoplamento entre componentes, mais forte é a interdependência entre eles.

Alto acoplamento significa que os módulos estão intimamente conectados, assim, alterações em um dos módulos podem afetar os demais. Baixo acoplamento significa que os módulos são independentes, então as alterações em um módulo têm pouco impacto nos outros.

Existem diversos tipos de acoplamento que influenciam a estrutura e a manutenção de um sistema de software.

Principais tipos de acoplamento:

1 - Data Coupling (Acoplamento de Dados):

Ocorre quando um módulo depende apenas das estruturas de dados específicas de outro. Isso significa que os módulos são independentes uns dos outros e só há uma dependência nos tipos de dados sendo passados entre os módulos.

O acoplamento de dados é usado comumente em programação orientada a objetos e programação procedural.


Copiar
class Usuario {
  constructor(private nome: string) {}

  getNome(): string {
    return this.nome;
  }
}

class GerenciadorUsuario {
  constructor(private usuario: Usuario) {}

  mostrarNomeUsuario(): void {
    console.log(this.usuario.getNome());
  }
}

// Utilização dos Módulos A e B
const usuario = new Usuario("Ana");
const gerenciadorUsuario = new GerenciadorUsuario(usuario);
gerenciadorUsuario.mostrarNomeUsuario();

Neste exemplo, o GerenciadorUsuario depende diretamente do Usuario para funcionar corretamente, logo, qualquer alteração na estrutura ou comportamento da classe Usuario pode afetar diretamente o GerenciadorUsuario.

2 - Stamp Coupling (Acoplamento por Carimbo):

Refere-se a uma forma de acoplamento de dados na qual os módulos compartilham muitos campos em uma estrutura de dados complexa, mas cada módulo usa apenas um subconjunto desses campos.


Copiar
// Módulo A
class Pedido {
  constructor(private id: number, private descricao: string, private valor: number) {}

  getId(): number {
    return this.id;
  }
}

// Módulo B
class GerenciadorPedido {
  constructor(private pedido: Pedido) {}

  mostrarIdPedido(): void {
    console.log(this.pedido.getId());
  }
}

// Utilização dos Módulos A e B
const pedido = new Pedido(1, "Produto A", 100);
const gerenciadorPedido = new GerenciadorPedido(pedido);
gerenciadorPedido.mostrarIdPedido();

Neste exemplo, o GerenciadorPedido depende de um objeto Pedido que possui uma estrutura de dados complexa, mas apenas usa um subconjunto específico de campos desse objeto (id). Isso demonstra um acoplamento por carimbo.

3 - Control Coupling (Acoplamento de Controle):

Envolve a dependência entre módulos devido ao compartilhamento de informações de controle, como valores de flags ou indicadores que afetam o fluxo de execução do programa.

Quando os módulos se relacionam ou se comunicam de forma organizada, compartilhando dados de maneira coordenada, isso é conhecido como acoplamento de controle. Esse tipo de acoplamento implica que um módulo exerce controle sobre o fluxo de dados ou informações entre os demais, direcionando as instruções sobre como proceder.


Copiar
// Módulo A 
class ProcessadorPagamento {
  processarPagamento(status: boolean): void {
    if (status) {
      console.log("Pagamento processado com sucesso.");
    } else {
      console.log("Falha ao processar pagamento.");
    }
  }
}

// Módulo B 
class CarrinhoCompras {
  constructor(private processador: ProcessadorPagamento) {}

  finalizarCompra(status: boolean): void {
    this.processador.processarPagamento(status);
  }
}

// Utilização dos Módulos A e B
const processador = new ProcessadorPagamento();
const carrinho = new CarrinhoCompras(processador);
carrinho.finalizarCompra(true);

Neste exemplo, o CarrinhoCompras depende do ProcessadorPagamento para determinar se a compra deve ser finalizada com sucesso ou não, com base no status do pagamento. Isso demonstra um acoplamento de controle.

4 - Common Coupling (Acoplamento Comum):

Ocorre quando dois ou mais módulos dependem de um terceiro módulo comum para realizar suas funções. Isso cria uma forte interdependência entre os módulos, tornando o sistema mais difícil de ser modularizado e mantido.


Copiar
// Módulo A
class Log {
  registrarMensagem(mensagem: string): void {
    console.log(`[LOG] ${mensagem}`);
  }
}

// Módulo B
class ServicoAutenticacao {
  constructor(private log: Log) {}

  autenticarUsuario(): void {
    // Lógica de autenticação
    this.log.registrarMensagem("Usuário autenticado com sucesso.");
  }
}

// Utilização dos Módulos A e B
const log = new Log();
const servicoAutenticacao = new ServicoAutenticacao(log);
servicoAutenticacao.autenticarUsuario();

Neste exemplo, o ServicoAutenticacao depende do Log para registrar mensagens de log durante o processo de autenticação. Ambos os módulos compartilham a mesma dependência do Log, demonstrando um acoplamento comum.

5 - Content Coupling (Acoplamento de Conteúdo):

É o tipo mais forte de acoplamento, onde um módulo depende diretamente da implementação interna de outro módulo, acessando e manipulando suas variáveis internas.


Copiar
// Módulo A
class Calculadora {
  private resultado: number = 0;

  somar(a: number, b: number): void {
    this.resultado = a + b;
  }

  obterResultado(): number {
    return this.resultado;
  }
}

// Módulo B
class Logger {
  private calculadora: Calculadora;

  constructor(calculadora: Calculadora) {
    this.calculadora = calculadora;
  }

  registrarLog(): void {
    console.log(`Resultado da operação: ${this.calculadora.obterResultado()}`);
  }
}

// Utilização dos Módulos A e B
const calculadora = new Calculadora();
calculadora.somar(2, 3);
const logger = new Logger(calculadora);
logger.registrarLog();

Neste exemplo, o Logger depende diretamente da implementação interna da classe Calculadora, usando e manipulando sua variável interna resultado. Isso demonstra um acoplamento de conteúdo, considerado o tipo mais forte.

Vantagens do baixo acoplamento

Maior facilidade de manutenção: o baixo acoplamento reduz o impacto das alterações de um módulo em outros módulos, facilitando a modificação ou substituição de componentes individuais sem afetar todo o sistema.
Modularidade aprimorada: o baixo acoplamento permite que os módulos sejam desenvolvidos e testados isoladamente, melhorando a modularidade e a reutilização do código.
Melhor escalabilidade: o baixo acoplamento facilita a adição de novos módulos e a remoção dos existentes, facilitando o dimensionamento do sistema conforme necessário.
Desvantagens do alto acoplamento

Maior complexidade: o alto acoplamento aumenta a interdependência entre os módulos, tornando o sistema mais complexo e difícil de entender.
Flexibilidade reduzida:o alto acoplamento dificulta modificar ou substituir componentes individuais sem afetar todo o sistema.
Modularidade diminuída: o alto acoplamento dificulta desenvolver e testar módulos isoladamente, reduzindo a modularidade e a reutilização do código.
Se você quiser se aprofundar no assunto, vou deixar algumas referências, em inglês, para que possa mergulhar no assunto:

Leituras Recomendadas:

Coupling and Cohesion – Software Engineering (Acoplamento e Coesão – Engenharia de Software)
Data Coupling - Types Of Coupling(Acoplamento de dados - Tipos de acoplamento)
Ao compreender os diferentes tipos de acoplamento e sua aplicação no desenvolvimento em TypeScript, você estará melhor preparado para projetar sistemas de software mais modularizados, flexíveis e de fácil manutenção, seguindo os princípios da SOLID, além de outros princípios de design de software.

https://www.geeksforgeeks.org/software-engineering-coupling-and-cohesion/

https://www.linkedin.com/pulse/data-coupling-types-ofcoupling-ahmed-samir-ahmed/

@@05-Para saber mais: tipos de coesão
DISCUTIR NO FÓRUM
No desenvolvimento de software, o conceito de coesão está relacionado à forma como as responsabilidades são atribuídas aos diferentes componentes de um sistema.

Uma alta coesão significa que os componentes de um sistema estão fortemente relacionados e têm um propósito bem definido, enquanto uma baixa coesão indica que os componentes têm responsabilidades divergentes e pouco relacionadas.

Assim como o acoplamento, a coesão desempenha um papel crucial na qualidade e na manutenibilidade do software, influenciando diretamente a modularidade e a escalabilidade do sistema.

Vamos explorar os diferentes tipos de coesão e como eles podem impactar o design e a implementação de sistemas de software.

Principais Tipos de Coesão:

1 - Coesão Funcional:

A coesão funcional ocorre quando os elementos de um módulo estão relacionados e executam uma única função ou tarefa específica. Isso significa que cada componente dentro do módulo está diretamente relacionado à sua função principal e contribui para alcançar o mesmo objetivo.


Copiar
// Exemplo de Coesão Funcional
class Calculadora {
  somar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    return a / b;
  }
}

Neste exemplo, a classe Calculadora possui métodos que realizam operações matemáticas distintas, mantendo uma alta coesão funcional, pois cada método contribui para a funcionalidade principal da calculadora.

2 - Coesão Sequencial:

A coesão sequencial ocorre quando as operações em um módulo são organizadas em uma sequência específica, com a saída de uma operação sendo a entrada da próxima. Isso significa que os elementos do módulo estão relacionados de forma sequencial e dependem uns dos outros para executar uma série de etapas em ordem.


Copiar
// Exemplo de Coesão Sequencial
class ProcessoPedido {
  processarPedido(pedido: Pedido): void {
    this.validarPedido(pedido);
    this.atualizarEstoque(pedido);
    this.enviarConfirmacao(pedido);
  }

  validarPedido(pedido: Pedido): void {
    // Lógica de validação do pedido
  }

  atualizarEstoque(pedido: Pedido): void {
    // Lógica de atualização do estoque
  }

  enviarConfirmacao(pedido: Pedido): void {
    // Lógica de envio de confirmação
  }
}

Neste exemplo, a classe ProcessoPedido possui métodos que executam etapas sequenciais para processar um pedido, mantendo uma alta coesão sequencial, pois cada método depende do resultado do método anterior.

3 - Coesão Temporal:

A coesão temporal ocorre quando as operações em um módulo estão relacionadas no tempo e devem ser executadas juntas devido a uma dependência temporal. Isso significa que os elementos do módulo estão agrupados com base em quando devem ser executados, em vez de suas funcionalidades específicas.


Copiar
// Exemplo de Coesão Temporal
class AgendadorTarefas {
  agendarTarefa(tarefa: Tarefa, hora: string): void {
    // Lógica de agendamento de tarefa
  }

  cancelarTarefa(tarefa: Tarefa): void {
    // Lógica de cancelamento de tarefa
  }

  executarTarefa(tarefa: Tarefa): void {
    // Lógica de execução de tarefa
  }
}

Neste exemplo, a classe AgendadorTarefas possui métodos que lidam com o agendamento, cancelamento e execução de tarefas, mantendo uma alta coesão temporal, pois cada método está relacionado no tempo e deve ser executado em momentos específicos.

4 - Coesão Lógica:

A coesão lógica ocorre quando os elementos de um módulo estão relacionados por uma lógica específica ou operam em um conjunto comum de dados. Isso significa que os elementos do módulo estão agrupados com base em uma lógica compartilhada ou na manipulação dos mesmos dados.


Copiar
// Exemplo de Coesão Lógica
class ValidadorFormulario {
  validarCampoRequerido(valor: string): boolean {
    // Lógica de validação de campo requerido
    return valor.trim() !== '';
  }

  validarCampoEmail(valor: string): boolean {
    // Lógica de validação de campo

 de e-mail
    return /\S+@\S+\.\S+/.test(valor);
  }

  validarFormulario(formulario: Formulario): boolean {
    // Lógica de validação do formulário
    return this.validarCampoRequerido(formulario.nome) && this.validarCampoEmail(formulario.email);
  }
}

Neste exemplo, a classe ValidadorFormulario possui métodos que lidam com a validação de campos de um formulário, mantendo uma alta coesão lógica, pois cada método está relacionado por uma lógica específica de validação.

5 - Coesão Coincidental:

A coesão coincidental ocorre quando os elementos de um módulo estão agrupados arbitrariamente, sem relação significativa entre si. Isso significa que os elementos do módulo estão reunidos por conveniência ou acaso, e não por uma lógica ou propósito comum.


Copiar
// Exemplo de Coesão Coincidental
class Utilitario {
  gerarRelatorio(dados: any): void {
    // Lógica de geração de relatório
  }

  enviarEmail(destinatario: string, mensagem: string): void {
    // Lógica de envio de e-mail
  }

  calcularImpostos(dados: any): void {
    // Lógica de cálculo de impostos
  }
}

Neste exemplo, a classe Utilitario possui métodos que realizam diferentes tarefas sem relação significativa entre si, mantendo uma baixa coesão coincidental.

Compreender os diferentes tipos de coesão é essencial para projetar sistemas de software modularizados, flexíveis e de fácil manutenção. Ao escolher o tipo certo de coesão para cada componente do sistema, podemos criar sistemas mais robustos e escaláveis, seguindo os princípios da SOLID e outros princípios de design de software.

Leituras Recomendadas:

Coupling and Cohesion – Software Engineering (Acoplamento e Coesão – Engenharia de Software)
Types of Cohesion (Tipos de coesão)

https://www.geeksforgeeks.org/software-engineering-coupling-and-cohesion/

https://medium.com/software-architecture/types-of-cohesion-6d1b06918acd

@@06-Dividindo as responsabilidades em classes

Vimos anteriormente que a nossa classe Sistema possuía alguns problemas. O primeiro deles é se quisermos utilizar o método de calcular um salário em outras partes do nosso código.

Temos um problema de autoacoplamento, pois ele depende de todos os outros métodos e atributos definidos no Sistema. Precisaríamos criar uma instância do Sistema para conseguir utilizar apenas esse método de calcular o salário. Outro ponto que vimos é a baixa coesão, onde ele assume responsabilidades que não são dele. Seria melhor, como vimos no nosso diagrama, separar as responsabilidades.

Voltando ao nosso diagrama, notamos que essa separação das responsabilidades foi resolvida criando quatro classes: Pagamento, CalculaSalario, GeraRelatorio e QuadroDeColaboradores, que vai substituir o nosso Sistema. E é assim que vamos começar.

Voltando ao nosso VS Code, criarems esses arquivos. Clicaremos pasta tarefa-1 e depois no botão "Novo arquivo", criando o Pagamento.ts. Repetiremos o processo para criarmos os arquivos CalculaSalario.ts e o GeraRelatorio.ts.

Criando a classe CalculaSalario

Feito isso, retornamos ao Sistema.ts, onde recortaremos cada uma das responsabilidades, ou seja, cada método correspondente a cada um dos arquivos. Começaremos com o método calcularSalario(), que está na nossa linha 22. Selecionamos todo o método, que vai da linha 22 até a 40, pressionamos "Ctrl + X" para recortá-lo.


Copiar
calcularSalario(cargo: Cargos) {

        if (cargo === Cargos.Estagiario) {
                return this.salarioBase * 1.2;
        }

        else if (cargo === Cargos.Junior) {
                return this.salarioBase * 3;
        }

        else if (cargo === Cargos.Pleno) {
                return this.salarioBase * 5;
        }

        else if (cargo === Cargos.Senior) {
                return this.salarioBase * 7;
        }
        return 0;
}

Antes de colar esse código no arquivo CalculaSalario, precisamos exportar e definir a classe. Para isso, escrevemos export default class CalculaSalario{}. Dentro das chaves, colaremos o código que recortamos. O próprio VS Code já indica que precisamos fazer a importação dos nossos Cargos, então clicamos nele, que está na linha 2, com uma marcação de erro, e pressionamos "Ctrl + espaço" para concluir a importação.


Copiar
import { Cargos } from "./enum/cargos";

export default class CalculaSalario {

    calcularSalario(cargo: Cargos) {

        if (cargo === Cargos.Estagiario) {
            return this.salarioBase * 1.2;
        }

        else if (cargo === Cargos.Junior) {
            return this.salarioBase * 3;
        }

        else if (cargo === Cargos.Pleno) {
            return this.salarioBase * 5;
        }

        else if (cargo === Cargos.Senior) {
            return this.salarioBase * 7;
        }
        return 0;
    }
}

Precisamos voltar ao Sistema.ts e recortar também o atributo salarioBase. Como também vamos precisar do construtor, selecionamos da linha 6, onde temos a definição dos atributos, até a linha 12, onde temos final do construtor.


Copiar
private _colaboradores: Colaborador[];
protected salarioBase: number;

constructor(salarioBase: number = 1000) {
        
        this.salarioBase = salarioBase;
}

Voltamos para o CalculaSalario.ts e colamos esse trecho embaixo do nome da classe. Como não precisaremos de _colaboradores, podemos excluir a linha private _colaboradores: Colaborador[];. Consequentemente, excluiremos também a this._colaboradores = [] de dentro do construtor.


Copiar
import { Cargos } from "./enum/cargos";

export default class CalculaSalario {
    protected salarioBase: number;

    constructor(salarioBase: number = 1000) {
        this.salarioBase = salarioBase;
    }

    calcularSalario(cargo: Cargos) {

        if (cargo === Cargos.Estagiario) {
            return this.salarioBase * 1.2;
        }

        else if (cargo === Cargos.Junior) {
            return this.salarioBase * 3;
        }

        else if (cargo === Cargos.Pleno) {
            return this.salarioBase * 5;
        }

        else if (cargo === Cargos.Senior) {
            return this.salarioBase * 7;
        }
        return 0;
    }
}

Agora sim, temos o salarioBase, o construtor e o método funcionando. Agora, se precisarmos, em outra parte do nosso código, calcular o salário, só precisamos dessa classe. Não temos mais nenhuma outra dependência, resolvendo a questão do autoacoplamento do nosso código.

Criando a classe Pagamento

Ainda temos algumas melhorias para fazer. Vamos voltar para o nosso Sistema.ts e agora recortar o método pagaColaborador(). Portanto, selecionamos da linha 24 a 27 e pressionamos "Ctrl + X". Abriemos agora o arquivo Pagamento.ts, onde começaremos codando export default class Pagamento{}. Dentro das chaves, colaremos o método pagaColaborador().


Copiar
export default class Pagamento {
    paraColaborador(colaborador: Colaborador) {
        const salarioColaborador = this.calcularSalario(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}

Como a classe já se refere a pagamento, renomearemos o método para apenas pagar(). Precisaremos fazer a importação do tipo Colaborador, que está marcado com erro. Em seguida, na linha 5, temos uma reclamação do TypeScript, porque vamos precisar de um método para calcular o salário, referente à classe que acabamos de criar.

Para isso, escreveremos nosso construtor(){} e, nos parênteses, digitamos: private servicoCalculaSalario, que é o nome que quero dar para essa classe, e ela será do tipo calculaSalario. Depois, na const salarioColaborador, podemos substituir o método por this.servicoCalculaSalario.calcularSalario. Portanto, o servicoCalculaSalario tem o método calculaSalario.


Copiar
import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class Pagamento {

    constructor(private servicoCalculaSalario: CalculaSalario) { }

    pagar(colaborador: Colaborador) {
        const salarioColaborador = this.servicoCalculaSalario.calcularSalario(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}

Aprimorando a clareza do código

Podemos fazer uma na nossa classe calculaSalario, mudando o nome do método calcularSalario. Agora que resolvemos a coesão da classe, o método faz exatamente o que a classe diz, assumindo uma única responsabilidade. Sendo assim, mudaremos o nome do método para calcular(), apenas, porque já sabemos que será calculado um salário.


Copiar
import { Cargos } from "./enum/cargos";

export default class CalculaSalario {
    protected salarioBase: number;

    constructor(salarioBase: number = 1000) {
        this.salarioBase = salarioBase;
    }

    calcular(cargo: Cargos) {
            // código omitido
        }
}

E agora quando voltarmos para o Pagamento.ts, fica muito mais claro que o servicoCalculaSalario possui o método calcular. E assim finalizamos também o nosso pagamento.


Copiar
import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class Pagamento {

    constructor(private servicoCalculaSalario: CalculaSalario) { }

    pagar(colaborador: Colaborador) {
        const salarioColaborador = this.servicoCalculaSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}

Criando a classe QuadroColaboradores

Agora que no Sistema.ts temos o método contratarColaborador() e demitirColaborador(), podemos renomear a classe para QuadroColaboradores, como tínhamos definido no diagrama. Para isso, no Explocador de Arquivos, à esquerda, selecionaremos Sistema.ts e pressionaremos "F2".

Mudaremos o nome para QuadroColaboradores e pressionaremos "Enter". Uma janela irá aparecer no centro da tela pedindo para atualizar as importações para QuadroColaboradores. Clicaremos no botão "Não", no canto inferior direito da janela, porque faremos essas mudanças manualmente.

Começando pela linha 4 do QuadroColaboradores.ts, porque o nome da classe agora será QuadroColaboradores. Repassando o código, percebemos que, nessa classe, temos os métodos:

contratarColaborador()
demitirColaborador()
gerarRelatorioJSON()
O gerarRelatorioJSON() não tem relação com a classe QuadroColaboradores, e sim com o arquivo GeraRelatorio.ts, que criamos anteriormente. Então vamos recortar esse trecho de código e abrir o arquivo GeraRelatorio.ts.

Criando a classe GeraRelatorio

No começo do arquivo, novamente vamos digitar export default class GeraRelatorio{}. Dentro das chaves, colaremos o código que recortamos.


Copiar
export default class GeraRelatorio {
    gerarRelatorioJSON() {
        let relatorio = this._colaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.calculaSalario(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    }
}

Precisamos dos colaboradores e do método calculoSalario, então faremos isso inserindo o nosso constructor(){} logo abaixo do nome da classe. Nos parênteses, codamos private _colaboradores: Colaborador[]. Após a array de Colaborador[], escrevemos uma vírgula, porque precisaremos também do private servicoCalculaSalario: CalculaSalario.


Copiar
export default class GeraRelatorio {
    constructor(
        private quadroDeColaboradores: Colaborador[],
        private servicoCalculaSalario: CalculaSalario
    ) { }
        //Código omitido

Agora basta importarmos nosso Colaborador, que está marcado com erro, e modificar o método do salario para this.servicoCalculaSalario.calcular(). Assim conseguimos separar as funcionalidades do nosso relatório. Inclusive, podemos renomear o método de geraRelatorioJSON() para apenas gerarJSON.


Copiar
import CalculaSalario from "./CalculaSalario"
import Colaborador from "./Colaborador"

export default class GeraRelatorio {
    constructor(
        private quadroDeColaboradores: Colaborador[],
        private servicoCalculaSalario: CalculaSalario
    ) { }

    gerarJSON() {

        let relatorio = this.quadroDeColaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.servicoCalculaSalario.calcular(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    };
}

Voltando ao nosso QuadroColaboradores, notamos que agora só possuímos funções relacionadas a pessoas colaboradoras. Assim, resolvemos o problema do autocoplamento e a coesão, porque agora o que é feito dentro da classe tem a ver com a definição dela.

Alterando a main.js para testarmos o código

Agora podemos testar todas essas funcionalidades integradas. Para isso, no menu explorar, à esquerda, abriremos o arquivo main.ts. Essa é a versão sem as alterações que fizemos, usando o Sistema. Na linha 5, criamos uma instância desse Sistema e criamos três colaboradores diferentes:

José, que é um estagiário,
Maria, que é uma júnior,
João, que é pleno.

Copiar
const sistema = new Sistema();

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

// código omitido

Após isso, contratamos cada um deles, adicionando essas pessoas no nosso array Colaboradores. Em seguida, mostramos um relatório de quem são as pessoas colaboradoras e fazemos uma operação para mostrar o salário do colaborador1 antes e depois de pagar o salário.


Copiar
// código omitido

sistema.contratarColaborador(colaborador1);
sistema.contratarColaborador(colaborador2);
sistema.contratarColaborador(colaborador3);

console.log(sistema.gerarRelatorioJSON());

console.log(colaborador1);
sistema.pagaColaborador(colaborador1);
console.log(colaborador1);

Podemos agora alterar essa funcionalidade respeitando as responsabilidades que dividimos. Para isso vamos renomear onde tem sistema para quadroColaboradores e excluir o import Sistema from "./Sistema";, na linha 3.

Eu já tinha feito uma "cola" do que mais precisamos alterar, então vou apenas substituir no código e depois importaremos as instâncias novas, com "Ctrl + Espaço". Lembrando que na GeraRelatorio(), precisamos passar o quadroColaboradores e a calculaSalario. Já no Pagamento() passamos apenas o calcularSalario.


Copiar
// importações omitidas

const quadroColaboradores = new QuadroColaboradores();
const calculaSalario = new CalculaSalario();
const geradorDeRelatorios = new GeraRelatorio(quadroColaboradores.colaboradores, calculaSalario);
const pagamento = new Pagamento(calculaSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroColaboradores.contratarColaborador(colaborador1);
quadroColaboradores.contratarColaborador(colaborador2);
quadroColaboradores.contratarColaborador(colaborador3);

console.log(quadroColaboradores.gerarRelatorioJSON());

console.log(colaborador1);
quadroColaboradores.pagaColaborador(colaborador1);
console.log(colaborador1);

O que vamos fazer agora é, mantendo a criação dos colaboradores, que não precisamos alterar, assim como os códigos de quadroColaboradores.contratarColaborador(), precisamos agora gerar os relatórios. Essa não é mais uma responsabilidade do quadroColaboradores, e sim do nosso geradorDeRelatorios.geraJSON().


Copiar
console.log(geradorDeRelatorios.gerarJSON());

Outra modificação que não é o quadroColaboradores é no pagamento. Quem lida com isso agora é o Pagamento, portanto, na linha 27, codamos pagamento.pagar(), manteremos o colaborador1 como parâmetro.


Copiar
// importações omitidas

const quadroColaboradores = new QuadroColaboradores();
const calculaSalario = new CalculaSalario();
const geradorDeRelatorios = new GeraRelatorio(quadroColaboradores.colaboradores, calculaSalario);
const pagamento = new Pagamento(calculaSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroColaboradores.contratarColaborador(colaborador1);
quadroColaboradores.contratarColaborador(colaborador2);
quadroColaboradores.contratarColaborador(colaborador3);

console.log(geradorDeRelatorios.gerarJSON());

console.log(colaborador1);
pagamento.pagar(colaborador1);
console.log(colaborador1);

Executando o teste

Agora para executarmos, eu deixei alguns scripts no arquivo package.jsom. Entre eles, temos o tarefa-1, que é referente a main dessa tarefa que acabamos de concluir. Para testarmos, abriremos o terminal, com o atalho "Ctrl + Shift + '", e codaremos:


Copiar
npm run tarefa-1

Após aguardarmos alguns instantes, até compilar o nosso código. O primeiro retorno que temos é o console.log do relatório, onde temos os nossos três colaboradores retornados como JSON: José, Maria e João. Em seguida, temos o console.log de pagamento do colaborador 1, que antes tinha o saldo igual a zero e, depois de fazermos o pagamento tem como saldo de 1.200, que é o valor do salário dele.

Portanto, conseguimos fazer as melhorias, as refatorações, sem afetar o comportamento que tínhamos antes. E essa foi a aplicação do primeiro princípio, o princípio da responsabilidade única, em que vamos entender mais detalhes na sequência.

@@07-Coesão e acoplamento em módulos
DISCUTIR NO FÓRUM
Você está trabalhando para uma empresa de tecnologia como pessoa desenvolvedora. O seu desafio é criar um módulo de gerenciamento de funcionários que lide com funções de cadastro e remoção de funcionários, além de processamento de pagamentos.

Para garantir a manutenção e a escalabilidade do sistema, é crucial que o módulo apresente baixo acoplamento e alta coesão. Abaixo está um trecho de código para o módulo de RH:


Copiar
class GerenciamentoFuncionario {
  adicionarFuncionario(funcionario: Funcionario) {
    // Código para adicionar funcionário
  }

  removerFuncionario(id: number) {
    // Código para remover funcionário
  }

  processarPagamento(id: number, valor: number) {
    // Código para processar pagamento
  }
}

Analise as alternativas e escolha as duas opções que melhor representam uma refatoração do código, para alcançar os objetivos de baixo acoplamento e alta coesão:

Selecione 2 alternativas:

A
class GerenciamentoFuncionario {
  gerenciarFuncionario(funcionario: Funcionario, acao: string) {
    if (acao === 'adicionar') {
      // Código para adicionar funcionário
    } else if (acao === 'remover') {
      // Código para remover funcionário
    }
  }

  processarPagamento(id: number, valor: number) {
    // Código para processar pagamento
  }
}

interface Funcionario {
  // Definição da interface Funcionario
}

interface FuncionarioRepository {
  adicionarFuncionario(funcionario: Funcionario): void;
  removerFuncionario(id: number): void;
}

interface PagamentoService {
  processarPagamento(id: number, valor: number): void;
}

class FuncionarioRHService implements FuncionarioRepository {
  adicionarFuncionario(funcionario: Funcionario) {
    // Código para adicionar funcionário
  }

  removerFuncionario(id: number) {
    // Código para remover funcionário
  }
}

class PagamentoRHService implements PagamentoService {
  processarPagamento(id: number, valor: number) {
    // Código para processar pagamento
  }
}
Esta alternativa utiliza interfaces para definir os contratos dos serviços relacionados a funcionários e pagamentos. Em seguida, as classes FuncionarioRHService e PagamentoRHService implementam essas interfaces, garantindo que elas forneçam as funcionalidades necessárias de forma coesa e com baixo acoplamento. Cada interface representa um conjunto de responsabilidades coesas e independentes, enquanto a classe de implementação mantém a separação de preocupações.


class FuncionarioService {
  adicionarFuncionario(funcionario: Funcionario) {
    // Código para adicionar funcionário
  }

  removerFuncionario(id: number) {
    // Código para remover funcionário
  }
}

class PagamentoService {
  processarPagamento(id: number, valor: number) {
    // Código para processar pagamento
  }
}
Esta alternativa demonstra um alto nível de coesão ao dividir as responsabilidades em serviços distintos, bem como baixo acoplamento, pois cada serviço pode evoluir independentemente.


D
class FuncionarioService {
  handleRequest(acao: string, dados: any) {
    // Código para tratar a ação e os dados fornecidos
  }
}

E
class FuncionarioController {
  adicionarFuncionario(funcionario: Funcionario) {
    // Código para adicionar funcionário
  }
}

class PagamentoController {
  removerFuncionario(id: number) {
    // Código para remover funcionário
  }

  processarPagamento(id: number, valor: number) {
    // Código para processar pagamento
  }
}

@@08-Testando as implementações

Finalizamos a implementação do que está no nosso diagrama, as quatro classes: Pagamento, CalculaSalario, GeraRelatorio e QuadroColaboradores. Agora, precisamos testar essas classes interagindo.

Para isso, deixamos no nosso projeto o arquivo main.ts, onde temos a versão sem alterações, utilizando o Sistema:

main.ts


Copiar
import Colaborador from "./Colaborador";
import Sistema from "./Sistema";
import { Cargos } from "./enum/cargos";

const sistema = new Sistema();


const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

sistema.contratarColaborador(colaborador1);
sistema.contratarColaborador(colaborador2);
sistema.contratarColaborador(colaborador3);

console.log(sistema.gerarRelatorioJSON());

console.log(colaborador1);
sistema.pagaColaborador(colaborador1);
console.log(colaborador1);

Na linha 5, criamos uma instância desse sistema. Nas linhas 7, 8 e 9, criamos três colaboradores com a nossa classe Colaborador: José, que é um estagiário, Maria, que é júnior e João, que é pleno.

Após isso, utilizamos a nossa instância do sistema para contratar esses colaboradores, ou seja, pegar cada um deles e adicionar no vetor de colaboradores. Fazemos isso nas linhas 11, 12, 13, para os três colaboradores que criamos.

Em seguida, chamamos o console.log() para gerar o quadro dos colaboradores no formato JSON. Por fim, realizamos uma operação onde exibimos os dados do colaborador1, ao qual inicialmente não efetuamos nenhum pagamento, então ele possui um saldo igual a zero. Pagamos esse colaborador, dependendo do cargo dele, e depois disso o exibimos novamente para ver seu salário de fato.

Refatorando main.ts

Agora vamos alterar partes desse código, pois não estamos mais usando o Sistema, e sim, dividimos as responsabilidades com as quatro classes criadas. Então vamos excluir a importação na linha 2 e, na linha 4, onde temos new Sistema(), vamos mudar para QuadroColaboradores().

Também vamos selecionar a palavra sistema, apertar F2, e alterar para quadroColaboradores. Assim, serão alteradas todas as ocorrências de sistema para quadroColaboradores.

main.ts


Copiar
const quadroColaboradores = new QuadroColaboradores();

Vamos manter os três colaboradores que vamos adicionar, e o quadroColaboradores continua fazendo a contratação desses colaboradores. Porém, não é mais responsabilidade desse quadroColaboradores gerar o relatório em JSON.

Então, vamos precisar, abaixo do nosso quadroColaboradores, criar a instância que gera relatório. Para isso, vamos adicionar const geraRelatorio = new GeraRelatorio().

Porém, a nossa instância GeraRelatorio() precisa receber um quadroColaboradores. Para isso, vamos passar o quadroColaboradores.colaboradores.

E além disso, ela espera mais um argumento, este para servicoCalculaSalario. Então, antes dessa linha de GeraRelatorio, vamos precisar também da instância de CalculaSalario. Para isso, adicionamos const calculaSalario = new CalculaSalario;.

Vamos passar esse calculaSalario como segundo argumento nosso GeraRelatorio.


Copiar
const quadroColaboradores = new QuadroColaboradores();
const calculaSalario = new CalculaSalario();
const geraRelatorio = new GeraRelatorio(quadroColaboradores.colaboradores, calculaSalario);

Podemos agora, na linha 22, apagar o que está dentro do console.log e digitar geraRelatorio.gerarJSON. Vamos ter o mesmo comportamento, porém, não é mais responsabilidade do QuadroColaboradores.


Copiar
console.log(geraRelatorio.gerarJSON());

Assim como, na linha 25, não é responsabilidade do quadroColaboradores pagar um colaborador. Vamos voltar abaixo da nossa linha 9 (após const geraRelatorio) e criar uma instância que faz os pagamentos.

No caso, vamos digitar const pagamento = new Pagamento. O TypeScript está indicando que é esperado um argumento, e esse argumento é do tipo servicoCalculaSalario, que já criamos: o calculaSalario da linha 9. Vamos copiar e colar dentro desses parâmetros.


Copiar
const pagamento = new Pagamento(calculaSalario);

Agora, basta voltarmos na linha 27, apagar a parte do quadroColaboradores e substituir por pagamento.pagar.


Copiar
pagamento.pagar(colaborador1);

Para testar, vamos abrir o terminal com o comando "Ctrl + J" e executar o script que já deixamos pronto para testar essa primeira tarefa:


Copiar
npm run tarefa-1

Vamos aguardar uns segundos para ele compilar o nosso programa.

No resultado, o primeiro console.log é o nosso relatório em JSON, o segundo console.log é o nosso colaborador com saldo zerado, e depois que fizemos o pagamento dele, visto que ele é um estagiário, o saldo dele aparece, quando chamamos novamente console.log na linha 28, e foi para 1.200.

[{"nome":"José", "cargo":"Estagiário", "salario":1200},{"nome":"Maria","cargo":"Júnior", ...] Colaborador { nome: 'José', _cargo: 'Estagiário', _saldo: 0 } Colaborador { nome: 'José', cargo: 'Estagiário', _saldo: 1200 }

Conseguimos fazer as refatorações necessárias, dividindo o código em classes menores e mantendo seu comportamento.

Essa foi a aplicação do primeiro princípio: o Princípio da Responsabilidade Única, que vamos entender mais detalhadamente na sequência.

Até lá!

@@09-Para saber mais: afinal, o que significa SOLID?
DISCUTIR NO FÓRUM
O SOLID é como um guia para desenvolver de forma mais inteligente e eficiente. Ele nos ajuda a manter nosso código limpo, organizado e fácil de entender. Os cinco princípios desse padrão são:

S - Princípio da Responsabilidade Única (Single Responsibility Principle): uma classe deve ter uma única responsabilidade.
O - Princípio Aberto/Fechado (Open/Closed Principle): as entidades de software devem estar abertas para extensão, mas fechadas para modificação.
L - Princípio da Substituição de Liskov (Liskov Substitution Principle): objetos de um programa devem ser substituíveis por instâncias de suas subclasses sem que isso altere a correção do programa.
I - Princípio da Segregação de Interfaces (Interface Segregation Principle): muitas interfaces específicas são melhores do que uma única interface geral.
D - Princípio da Inversão de Dependência (Dependency Inversion Principle): módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
O SOLID é útil porque nos ajuda a evitar problemas comuns quando escrevemos código, já que nos ensina a dividi-lo em partes menores e mais simples, facilitando a adição de novos recursos e a correção de erros.

Ao longo do curso veremos na prática cada um desses princípios, mas deixamos também como recomendação alguns conteúdos sobre SOLID para você se aprofundar no assunto.

Leia o artigo SOLID: o que é e quais os 5 princípios da Programação Orientada a Objetos (POO)
Leia o artigo Princípios do Código Sólido na orientação a objetos
Assista ao vídeo SOLID com PHP: princípios da programação orientada a objetos
C#: aplique princípios SOLID
Ouça o Podcast Hipsters Ponto Tech: SOLID: Código bom e bonito
Assista ao vídeo no youtube Clean Code e Solid com Alberto Sousa, o Dev Eficiente | #HipstersPontoTube
Faça o curso online SOLID com PHP: princípios da programação orientada a objetos

Avançar

https://www.alura.com.br/artigos/solid

https://www.alura.com.br/artigos/principios-do-codigo-solido-na-orientacao-a-objetos

https://www.alura.com.br/conteudo/solid-php-principios-orientacao-a-objetos

@@10-Princípio da responsabilidade única

Retornando ao nosso Trello, já deveríamos ter movido a nossa primeira tarefa para a coluna "Fazendo", e agora teremos o prazer de mover para a coluna "Feito. Conseguimos pegar aquela classe Sistema com várias responsabilidades e separá-la em classes menores!

Essa ação não foi sem propósito. Foi a aplicação do primeiro princípio do SOLID, o Princípio da Responsabilidade Única.

Esse princípio foi criado por Robert Martin, conhecido como Uncle Bob ou Tio Bob, que afirma:

"Uma classe só deveria ter um único motivo para mudar."

Pensemos no nosso sistema como estava anteriormente. Se temos um método que calcula o salário e precisamos modificar, por exemplo, o salário base de 1.200 para 1.800, esse é um motivo para mudar essa classe Sistema. Mas se também decidirmos que não queremos mais gerar o relatório em JSON, mas em XML, já é outro motivo para alterar a mesma classe.

O que Tio Bob quer dizer com esse primeiro princípio de mudar com apenas um único motivo é que as classes devem ser separadas de forma específica. A classe que calcula salário terá essa única responsabilidade e só terá um motivo para mudar: quando alterarmos o método que calcula o salário.

Responsabilidade concentrada x Responsabilidade única

Para entendermos melhor, vamos considerar o contexto de um restaurante.

Se temos uma única pessoa que prepara o prato principal, serve as bebidas, faz a limpeza do local e anota os pedidos, ela ficará sobrecarregada com tantas responsabilidades.

Em um cenário onde aplicamos o Princípio da Responsabilidade Única, cada pessoa executa apenas uma tarefa, tendo apenas uma responsabilidade.

Para trazer isso para o mundo do código, separamos um arquivo contendo um cenário errado: uma classe Restaurante com vários métodos, como organizarMesas, cozinharPratoPrincipal, dentre outros. Colocamos dentro dos métodos o console.log apenas para facilitar o entendimento.

errado.ts


Copiar
class Restaurante {
//código omitido

    organizarMesas() {
        console.log("Organizando as mesas ...");
    }
    cozinharPratoPrincipal() {
        console.log("Preparando o prato principal");
    }
    anotarPedido() {
        console.log("Anotando o pedido ...");
    }
    limpar() {
        console.log("Limpando o local ...");
    }
    prepararSobremesa() {
        console.log("Fazendo as sobremesas ...");
    }
    servirBebidas() {
        console.log("Servindo as bebidas ...");
    }
}

Quando criamos uma instância no final do arquivo desse restaurante e chamamos iniciar(), estaremos usando todos esses métodos que estão dentro da classe Restaurante, dificultando tanto o entendimento quanto a questão de coesão e acoplamento do código.


Copiar
class Restaurante {
  constructor() {}

  iniciar() {
    this.organizarMesas();
    this.cozinharPratoPrincipal();
    this.anotarPedido();
    this.limpar();
    this.prepararSobremesa();
    this.servirBebidas();
  }
}

// código omitido

const restaurante = new Restaurante();
restaurante.iniciar();

Em um cenário ideal, poderíamos dividir as responsabilidades em cada uma das classes. Se você é uma pessoa recepcionista, vai organizar as mesas. Se você é a pessoa chefe de cozinha, vai cozinhar o prato principal.

certo.ts


Copiar
class Recepcionista {
  organizarMesas() {
    console.log("Organizando as mesas ...");
  }
}

class ChefCozinha {
  cozinharPratoPrincipal() {
    console.log("Preparando o prato principal");
  }
}

class Garcom {
  anotarPedido() {
    console.log("Anotando o pedido ...");
  }
}

class AuxiliarLimpeza {
  limpar() {
    console.log("Limpando o local ...");
  }
}

class ChefConfeitaria {
  prepararSobremesa() {
    console.log("Fazendo as sobremesas ...");
  }
}

class Cumin {
  servirBebidas() {
    console.log("Servindo as bebidas ...");
  }
}

E assim, quando chegarmos na instanciação da nossa classe Restaurante, não mudamos nada do que fizemos. Instanciamos o restaurante, chamamos o método iniciar, porém agora, dentro do Restaurante, conseguimos dividir as responsabilidades para cada uma das classes.


Copiar
class Restaurante {
  private recepcionista: Recepcionista;
  private chefCozinha: ChefCozinha;
  private garcom: Garcom;
  private auxiliarLimpeza: AuxiliarLimpeza;
  private chefConfeitaria: ChefConfeitaria;
  private cumin: Cumim;
  constructor() {
    this.recepcionista = new Recepcionista();
    this.chefCozinha = new ChefCozinha();
    this.garcom = new Garcom();
    this.auxiliarLimpeza = new AuxiliarLimpeza();
    this.chefConfeitaria = new ChefConfeitaria();
    this.cumin = new Cumim();
  }
  iniciar() {
    this.recepcionista.organizarMesas();
    this.garcom.anotarPedido();
    this.chefCozinha.cozinharPratoPrincipal();
    this.auxiliarLimpeza.limpar();
    this.chefConfeitaria.prepararSobremesa();
    this.cumin.servirBebidas();
  }
}
const restaurante = new Restaurante();
restaurante.iniciar();

Características da Responsabilidade Única

Responsabilidade única é ter um módulo especialista, com apenas uma responsabilidade.

Além disso, a responsabilidade única não se limita a classes. Você pode aplicar esse princípio dentro de uma estrutura condicional, dentro de uma função, qualquer que seja o seu contexto.

E é importante lembrar que responsabilidade única é diferente de ter uma única ação.

Como vimos no nosso projeto, refatoramos a classe Sistema para QuadroColaboradores, e dentro do QuadroColaboradores tínhamos três métodos: um para admitir um colaborador, um para demitir e outro para retornar todos os colaboradores. Mas todos esses métodos lidam com um colaborador.

Poderíamos pensar nisso como se fosse uma calculadora. Dentro dela temos as operações como sendo os métodos dessa classe calculadora, como adicao, subtracao, divisao e multiplicacao, ou poderiam ser classes separadas.

O quanto vamos dividir as classes em classes menores depende de quanta complexidade isso vai trazer para a compreensão do nosso projeto.

Conclusão

Conseguimos concluir a primeira tarefa, mas ainda temos algumas outras tarefas para cumprir que vão exigir uma nova forma de pensar, que é o que veremos na sequência.

Até lá!

@@11-Para saber mais: quebrando o módulo
DISCUTIR NO FÓRUM
Quando se trata de escrever código limpo e modular, dividir um módulo em partes menores é fundamental. Isso não apenas melhora a legibilidade e a manutenção do código, mas também ajuda a seguir o princípio da responsabilidade única. Ao dividir um módulo, podemos ter diferentes níveis de granularidade para separar as responsabilidades, dependendo das necessidades do projeto e até onde podemos ir sem deixar o código confuso.

Mas como já vimos, o princípio da responsabilidade única não significa, necessariamente, ter apenas um método por classe. Vamos considerar o exemplo de uma calculadora para explorar diferentes abordagens.

Uma calculadora com métodos para todas as operações:

Considere uma calculadora em TypeScript. Podemos aplicar o princípio de diversas maneiras. Uma delas é ter uma única classe Calculadora que contenha métodos para adição, subtração, multiplicação e divisão. Isso mantém todas as operações relacionadas em um único lugar, facilitando o acesso e a compreensão.


Copiar
class Calculadora {
  somar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Não é possível dividir por zero.");
    }
  }
}

// Utilização
const minhaCalculadora = new Calculadora();
console.log(minhaCalculadora.somar(5, 3)); // Saída: 8

No exemplo acima, cada método está relacionado à funcionalidade central da calculadora - realizar operações matemáticas básicas. Portanto, do ponto de vista da responsabilidade da classe, a calculadora ainda está cumprindo uma única responsabilidade: fornecer funcionalidades relacionadas à matemática.

Se isso for suficiente para o seu caso, você pode seguir desta forma!

Separando as Operações em Classes Distintas:

No entanto, se a calculadora precisasse lidar com operações matemáticas mais avançadas ou funcionalidades adicionais, como armazenar um histórico de operações, poderíamos dividir a classe em componentes mais específicos para cada responsabilidade. Isso garantiria que cada classe tivesse uma única razão para mudar e uma responsabilidade claramente definida.


Copiar
class Somador {
  somar(a: number, b: number): number {
    return a + b;
  }
}

class Subtrator {
  subtrair(a: number, b: number): number {
    return a - b;
  }
}

class Multiplicador {
  multiplicar(a: number, b: number): number {
    return a * b;
  }
}

class Divisor {
  dividir(a: number, b: number): number {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Não é possível dividir por zero.");
    }
  }
}

// Utilização
const somador = new Somador();
console.log(somador.somar(5, 3)); // Saída: 8

No exemplo acima separamos cada operação matemática em sua própria classe, seguindo ainda o princípio da responsabilidade única.

Esses exemplos destacam que a estratégia de divisão de módulos depende das necessidades específicas do projeto. Pode-se optar por ter uma classe Calculadora única, que agrupa todas as operações, ou dividir em classes separadas, cada uma responsável por uma operação específica.

O objetivo é encontrar um equilíbrio entre a granularidade e a clareza do código, garantindo que a aplicação do princípio da responsabilidade única resulte em um código gerenciável e compreensível.

Ao decidir como dividir seus módulos, leve em consideração o contexto e o nível de complexidade do seu projeto.

@@12-Mão na massa: dividindo tarefas na cozinha
DISCUTIR NO FÓRUM
Ao longo da aula, vimos o cenário de um restaurante em que uma única pessoa tem várias responsabilidades, como preparar o prato principal, anotar os pedidos, limpar o local, servir as bebidas, entre outras tarefas, conforme vemos no lado esquerdo da figura abaixo.

Imagem

Também vimos a implementação do código nesse cenário:


Copiar
class Restaurante {
  constructor() {}

  iniciar() {
    this.organizarMesas();
    this.cozinharPratoPrincipal();
    this.anotarPedido();
    this.limpar();
    this.prepararSobremesa();
    this.servirBebidas();
  }

  organizarMesas() {
    console.log("Organizando as mesas...");
  }
  cozinharPratoPrincipal() {
    console.log("Preparando o prato principal");
  }
  anotarPedido() {
    console.log("Anotando o pedido...");
  }
  limpar() {
    console.log("Limpando o local...");
  }
  prepararSobremesa() {
    console.log("Fazendo as sobremesas...");
  }
  servirBebidas() {
    console.log("Servindo as bebidas...");
  }
}

const restaurante = new Restaurante();
restaurante.iniciar();

Sua tarefa será aplicar o primeiro princípio do SOLID a este código, gerando um cenário em que as responsabilidades sejam bem divididas.

Boa prática! Caso tenha dúvidas e queira ver uma possível solução para a atividade, clique em “Opinião da pessoa instrutora”.

Opinião do instrutor
•

Opções
Uma possível solução é mostrada no código abaixo:


Copiar
class Recepcionista {
  organizarMesas() {
    console.log("Organizando as mesas...");
  }
}
class ChefCozinha {
  cozinharPratoPrincipal() {
    console.log("Preparando o prato principal");
  }
}
class Garcom {
  anotarPedido() {
    console.log("Anotando o pedido...");
  }
}
class AuxiliarLimpeza {
  limpar() {
    console.log("Limpando o local...");
  }
}
class ChefConfeitaria {
  prepararSobremesa() {
    console.log("Fazendo as sobremesas...");
  }
}
class Cumin {
  servirBebidas() {
    console.log("Servindo as bebidas...");
  }
}

class Restaurante {
  private recepcionista: Recepcionista;
  private chefCozinha: ChefCozinha;
  private garcom: Garcom;
  private auxiliarLimpeza: AuxiliarLimpeza;
  private chefConfeitaria: ChefConfeitaria;
  private cumin: Cumin;
  constructor() {
    this.recepcionista = new Recepcionista();
    this.chefCozinha = new ChefCozinha();
    this.garcom = new Garcom();
    this.auxiliarLimpeza = new AuxiliarLimpeza();
    this.chefConfeitaria = new ChefConfeitaria();
    this.cumin = new Cumin();
  }
  iniciar() {
    this.recepcionista.organizarMesas();
    this.garcom.anotarPedido();
    this.chefCozinha.cozinharPratoPrincipal();
    this.garcom.anotarPedido();
    this.auxiliarLimpeza.limpar();
    this.chefConfeitaria.prepararSobremesa();
    this.cumin.servirBebidas();
  }
}
const restaurante = new Restaurante();
restaurante.iniciar();

Pensamos em alguns cargos dentro do restaurante e cada método tornou-se uma responsabilidade diferente. E para cada uma das responsabilidades, foi criada uma classe, sendo o cargo o nome da classe. Ou seja, para a responsabilidade de anotar os pedidos criou-se uma classe garçom, por exemplo.

Por fim, mantivemos a classe Cozinha, que no entanto é composta agora de várias pessoas de diferentes cargos.

@@13-Para saber mais: Uncle Bob, o Tio Bob
DISCUTIR NO FÓRUM
Robert C. Martin, também conhecido como "Uncle Bob", é uma figura proeminente no mundo da programação e engenharia de software. Ele é autor de vários livros, incluindo "Clean Code: A Handbook of Agile Software Craftsmanship", e é um defensor fervoroso de práticas de desenvolvimento de software limpo, robusto e sustentável.

Imagem

O primeiro princípio do SOLID, conhecido como “Princípio da Responsabilidade Única” (SRP - Single Responsibility Principle), afirma que uma classe deve ter uma única função, ou seja, apenas uma responsabilidade que estará completamente encapsulada pela classe.

Uncle Bob desempenhou um papel fundamental na popularização de princípios do SOLID como o SRP, enfatizando sua importância na criação de código limpo, modular e fácil de manter. Ele argumenta que, ao aderir tais princípios, pessoas que desenvolvem podem criar sistemas de software mais robustos, flexíveis e escaláveis.

Além disso, Uncle Bob é um forte defensor da escrita de código compreensível e autoexplicativo, o que pode ser conquistado com a adoção de práticas como a escolha de nomes significativos para classes, métodos e variáveis, bem como de dividir o código em partes menores e mais gerenciáveis. Isso está diretamente alinhado com o SRP, pois classes bem nomeadas e focadas em uma única responsabilidade tendem a ser mais fáceis de entender e manter.

Em resumo, Uncle Bob desempenha um papel crucial ao promover práticas de desenvolvimento de software sustentáveis e de alta qualidade. Ele continua a inspirar pessoas desenvolvedoras em todo o mundo a escrever código, seguindo os princípios sólidos de engenharia de software.

Você pode encontrar mais informações sobre seus conteúdos como artigos e aulas em seu site Clean Coder.

http://cleancoder.com/products

@@14-O que aprendemos?
DISCUTIR NO FÓRUM
Nessa aula, você aprendeu:

A aplicar o princípio da responsabilidade única, segundo o qual uma classe deve ter apenas uma responsabilidade, para melhorar a qualidade do código;
A desacoplar as funcionalidades da classe Sistema, permitindo que trechos de códigos possam ser usados em outras partes do sistema;
A Implementar melhorias no código para promover a coesão e manutenibilidade no sistema de gerenciamento.

