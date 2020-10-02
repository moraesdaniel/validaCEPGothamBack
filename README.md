# Validador de CEPs de Gotham City (back-end)

## Esta é o back-end da aplicação que valida os CEPs de Gotham City. Aqui estão os serviços que irão armazenar e listar os CEPs cadastrados pelos usuários.

Tabela de conteúdos
=================
<!--ts-->
   * [Tecnologias](#tecnologias)
   * [Como executar](#como-executar)
      * [MongoDB](#mongodb)	  	 
      * [NodeJS](#nodejs)
      * [Mocha](#mocha)
      * [Chai](#chai)			
      * [PM2](#pm2)
      * [Testes automatizados](#testes-automatizados)
<!--te-->

### Tecnologias

As seguintes tecnologias foram utilizadas na construção do projeto:
- [Node.js](https://nodejs.org/en/)
- [PM2](https://pm2.keymetrics.io/)
- [MongoDB](https://www.mongodb.com/try?jmp=nav#community)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

### Como executar

#### MongoDB
- Acesse o link de download do [MongoDB](https://www.mongodb.com/try?jmp=nav#community).
- Como vamos realizar uma instalação local, clique na opção On-Premisses e depois na opção MongoDB Community Server, para encontrar o botão de download.
- Rode o instalador do MongoDB. Valem algumas ressalvas: na terceira tela do wizard, escolha o botão *Complete*, na quarta basta dar um *Next*, já na quinta, desmarque a opção *Install MongoDB Compass* presente na parte inferior esquerda da tela pois, não vamos o utilizar. Agora é só concluir a instalação.
- Agora você precisa escolher a pasta onde o banco ficará. Minha dica é que você crie uma pasta com o nome *data* dentro do projeto do back-end.
- Para levantar o servidor, navegue com seu prompt de comando até a pasta *bin* do local onde o mesmo foi instalado. Se você instalou na pasta padrão, deve ser algo como *C:\Program Files\MongoDB\Server\4.4\bin*. A partir daí basta executar o comando `mongod --dbpath nome_da_pasta` e seu servidor do MongoDB estará em pé.
- Abra outro prompt e navegue novamente até a pasta *bin*, vamos testar se o MongoDB está operando. Dentro da pasta *bin*, digite `mongo`. Depois, digite `show databases` para ver as bases disponíveis por padrão. Devem aparecer **admin**, **config** e **local**. Em seguida digite `use validaCEPGotham` e pronto.
#### NodeJS
- Para começar, você precisa instalar o [NodeJS](https://nodejs.org/en/) no seu ambiente. Dica: Sempre opte pela versão LTS pois é a mais estável. No momento em que este projeto foi desenvolvido, a LTS era a 12.18.4.
- Realize o clone deste repositório para uma pasta de sua escolha
- Através do prompt de comando, navegue até a pasta onde realizou o clone
- Digite o comando `npm install`. Com este comando simples, o Node irá baixar todas as dependências necessárias para rodar seu projeto.
#### Mocha
- O Mocha e o Chai serão utilizados para rodar os testes automatizados. Para instalar o Mocha, digite o seguinte comando no seu prompt: `npm install mocha -g`.
- A instalação local já deve ter sido garantida pelo comando `npm install` que rodamos anteriormente. Caso precise ou queira garantir, rode o comando: `npm install --save -dev mocha`.
#### Chai
- Da mesma forma vamos instalar o Chai globalmente com o comando: `npm install chai -g`.
- - A instalação local já deve ter sido garantida pelo comando `npm install` que rodamos anteriormente. Caso precise ou queira garantir, rode o comando: `npm install --save -dev chai`.
#### PM2
- O PM2 é um gerenciador de aplicações que te ajudará a manter o banck-end no ar.
- Para instalar o mesmo, digite o seguinte comando no seu prompt: `npm install pm2 -g`.
- Para colocar o back-end no ar, navegue até a pasta do seu projeto com o prompt de comando e digite o seguinte comando: `pm2 start index.js --name validaCEPGotham`. Agora você pode até fechar essa janela do prompt que o pm2 se encarregará de manter seu back-end rodando. O parâmetro `--name`, serve para nomear o processo dentro do pm2. Isso facilita quando você quiser derrubar o serviço por exemplo, basta digitar `pm2 stop validaCEPGotham`.
#### Testes automatizados
- Para executar os testes automatizados é muito simples, basta navegar até a pasta do projeto com o prompt de comando e digitar `mocha` para rodar os testes e visualizar os resultados.