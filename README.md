# Projeto Nxt Dev - Level Up 

<h2>:calendar: Semana 1 </h2>

<p>:small_blue_diamond: Criando Repositório

:book: Objetivos:

<ol> 
<li>Crie um novo repositório no GitHub chamado ecomm. 
<li>Clone o repositório para sua máquina.
<li>Crie uma pasta chamada product na raiz do repositório e dentro dela Inicialize um projeto Node na raiz do repositório usando npm init.</li>
<li>Crie um arquivo chamado main.js dentro da pasta product/src que simplesmente faz log da mensagem: iniciando product.</li>
<li>Execute esse arquivo com o Node e valide que a mensagem está sendo impressa no terminal.</li>
<li>Faça commit das suas mudanças.</li>
</ol>

</p> 

<p>:small_orange_diamond: Criando imagem do serviço

:book: Objetivos:

<ol>
<li>Crie um arquivo Dockerfile dentro da pasta product no repositório.</li>
<li>Use as instruções necessárias para copiar tudo que estiver na pasta src dentro da pasta product para dentro da Imagem.</li>
<li>Configure o comando base de inicialização do container dessa imagem para executar o arquivo main.js que está dentro de src.</li>
<li>Faça o build dessa imagem, crie um container a partir dela e verifique se nos logs do container, a mensagem de log que criamos na tarefa anterior é exibido.</li>
</ol>

</p>

<p> :small_red_triangle: Executando serviços

:book: Objetivos:

<ol>
<li>Crie um arquivo docker-compose.yml na raiz do repositório.
Faça com que ao executar o comando docker-compose up, o container da aplicação product seja criado se necessário e executado.</li>
<li>Ao fazer docker-compose down este mesmo container deve ser destruído.</li>
</ol>
</p>

<h2>:calendar: Semana 2 </h2>

<p>:small_blue_diamond: Criando a conta de usuário

:book: Objetivos:

<ol>
<li>Uma nova pasta na raiz do repositório chamada account onde deverá ser inicializado um novo projeto node com npm init. </li>
<li>Dentro da pasta account crie uma pasta src e dentro dela, uma nova pasta chamada use-case. Dentro desta crie um arquivo chamado createUserAccount.js que exporta uma função chamada createUserUseCase. Esta função deve receber o nome, email e senha como parâmetros e deve retornar um objeto.</li>
<li>Crie uma pasta chamada test no mesmo nível da pasta src e dentro dela um arquivo chamado createUserAccount.test.js que importa a função criada no arquivo createUserAccount.js e a executa passando os parâmetros necessários e use o retorno dessa função no console.log para visualizarmos o resultado.</li>
</ol>

</p>

<p>:small_orange_diamond: Criando um novo container

:book: Objetivos:

<ol>
<li>Dentro da pasta account crie um novo dockerfile que usa uma imagem do Node como base.</li>
<li>Copie os arquivos package.json e package-lock.json para dentro da imagem e em seguida, execute o comando npm install para que as dependências do projeto sejam instaladas.</li>
<li>Copie os demais arquivos do projeto para dentro da imagem.</li>
<li>Defina o comando inicial que deve ser executado quando um novo container for criado a partir dessa imagem.</li>
<li>Adicione a inicialização de um container dessa nova imagem dentro do docker-compose que deverá estar fora das pastas account e product.</li>
</ol>
</p>