/**
 * C02 - Orientação a Objetos e MVC
 * O que é orientação a objeto ?
 * É um estilo de programação é uma forma de programar .
 * 
 * com Orientação a Objeto ficou muito mais facil voçê cria uma classe onde fica toda sua regra de negócio ela fica agrupada
 * em pequenos blocos de codigos que chamamos de metodos que também são chamados de funções  fora da classe dentro da classe 
 * o nome desse bonitinho é metodo , então esse metodos são trechos de codigos que voçê pode reutilizar toda vez que voçê precisa.
 * analise como é bem mais pratico ou mesmo se eu tiver trabalhando em varios projetos  eu crio uma classe com minha regra de negocio 
 * e se eu preciso aplicar ela a um determinado Projeto eu crio um objeto dessa classe , essse nome bonitinho dá o nome de instância 
 * instancia  é quando um objeto representa uma  classe. 
 * 
 * por que programar Orientada a Objeto ?
 * è mais pratico eu não tenho que reprogramar nada eu reutilizo codigo .
 * 
 * 
 * O que tem dentro de uma Classe, variasveis que se chaman atributos e funções que se chaman metodos ,
 * elas tem um diferença elas podem ser acessadas em quelquer lugar na classe.
 * 
 * O objeto é como fosse um professor ele representa uma classe , então o objeto é um representante da nossa classe.
 * 
 * C03 - Método Constructor e Encapsulamento
 * 
 * class CalcController 
 * {
 *      constructor()
 *       o metodo construtor sempre é chamdao quando a calsse for instanciado pelo objeto
 *      {
 *         this._dispayCalc = "0"
 *         o comando this ele referencia a o metodo ou atributo a contexto que esta 
 *         como o javascript não tem comando de encapsilamento a linguagem usa underline como convenção para dizer que o atributo  é privado
 *         this._dataAtual;
 *      }
 * 
 *      get displayCalcl ()
 *      // o get ele paga a informção e cria camadas para proteger o atribhuto privado
 *      {
 *          return this._displauCalc; 
 *      }
 *      
 *      set displayCalc(value)
 *      // o set ele altera o valor da informação e cria camadas para proteger o atributo privado 
 *      {
 *          this._displayCalc = value;
 *      }
 *      
 *      get dataAtual()
 *      {
 *           return this._displayCalc;
 *      }
 * 
 *      set dataAtual(value)
 *      {
 *         thi._displayCalc = value;
 *      }
 * }
 * 
 * C04 - Manipulando o Dom 
 *  class CalcController {
 *
 *      constructor(){

            this._displayCalc = "0";
            this._currentDate;
            this.initialize();

        }

        initialize(){
            colocamos o resultado do query selector dentro de variaveis para podemos 
            manipular eles. 
            let displayCalcEl = document.querySelector("#display");
            let dateEl = document.querySelector("#data");
            let timeEl = document.querySelector("#hora");

            o display a data e a hora estão nessas três variaveis a partir de agora o JS entende o javascript

            displayCalcEl.innerHTML = "4567";
            o innerHTML é uma propriedade  que toda vez que trabalhamos com o dom trabalhamos com ela pega 
            a informação passada e coloca dentro  d display em formato html .
            dateEl.innerHTML = "15/04/2021";
            timeEl.innerHTML = "11:14";
            nos estamos mudando html via javascript 

        }

        get displayCalc(){

            return this._displayCalc;

        }

        set displayCalc(valor){

            this._displayCalc = valor;

        }

        get currentDate(){

            return this._currentDate;

        }

        set currentDate(valor){

            this._currentDate = valor;

        }

    }
 * 
 *  C05 - Data e Hora
 * 
 * class CalcController {

    constructor(){

        this._locale = 'pt-BR';
        //Note que o pt-BR vai estar em varios lugares então vamos criar um atributo.
        this._displayCalcEl = document.querySelector("#display");
        // Aqui daremos acesso ao display
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval( ()=>{
            ||        ||
            ||        ||
            ||        ==> Arrow Function
            ||            è uma função so com recursos masis simples do que 
            ||            uma função comum.
            ||            1 - eu não vou Precisar a palavra function para declarar .
            ||            2 - Os parêntese que nós colocamos para os parâmetros eles
            ||                podem ser opcionais caso seja só um parametro mais que
            ||                isso é obriagtorio, essa chave(ou seta) é como apontasse
            ||                para o que a função deve fazer.
            ||
            ==> Esse metodo ele define um intervalo, ele fica rodando 
                quero que você execute isso durante essa quantidade 
                de milissegundos exato. 
                ele recebe dois parametros primeiro a função e depois o
                tempo em  milissegundos.

            this.setDisplayDateTime();

        }, 1000 ==> esse é segundo parâmetro que vai falar qual vai ser o intervalo de tempo a cada atualização );

    }

    setDisplayDateTime()
       ||==> Criado para evitar repitição.
            Precismaos pegar o conceito que tudo que eu copio e reutilizo é um metodo,
            caso precise reultilizar use um metodo.
    {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
        ||                  ||                  ||                ||
        ||                  ||                  ||                ==> Note que o pt-BR vai
        ||                  ||                  ||                    estar em varios lugares 
        ||                  ||                  ||                    então vamos criar um atributo.
        ||                  ||                  ==> aqui vamos pegar 
        ||                  ||                     só a data.
        ||                  ||
        ||                  ||
        ||                  ==> O retorno da
        ||                      instancia de  
        ||                      uma nova data.       
        ==> o display que
            tem acesso a 
            data vai receber.
       
            após a this._locale colocamos uma virgula e personalizamos o nossa data por extenso 
            day: "2-digit",
            ||== passa o dia com dois digitos
            month: "long",
            ||==> passa o mês pelo nome completo se você quiser abreviado usa o short.
            year: "numeric"
            ||==> o ano passando numeric ele retorna o ano em quatro digito.

        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        ||                 ||                 ||                ||
        ||                 ||                 ||                ==> Note que o pt-BR vai
        ||                 ||                 ||                    estar em varios lugares 
        ||                 ||                 ||                    então vamos criar um atributo.
        ||                 ||                  ==> aqui vamos pegar 
        ||                 ||                     só a hora.
        ||                 ||
        ||                 ||
        ||                  ==> O retorno da
        ||                      instancia de  
        ||                      uma nova data.       
        ==> o display que
            tem acesso a 
            Hora vai receber.

    }

    get displayTime(){

        return this._timeEl.innerHTML;
        retorna a hora

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;
        

    }

    get displayDate(){

        return this._dateEl.innerHTML;
        retorna data
        

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;
        

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;
        se nos temos acesso ao display agora podemos pegar o conteurdo interno

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();
        essa Classe retornara a data para manipulação

    }

    set currentDate(value){

        this._currentDate = value;

    }

}
 vamos supor que quisermos que o javascript quisesse que espera-se um tempo  e executasse somente uma vez uma ação
 então agente teria que usar setTimeout(()=>{

                                       } , 1000)

 *  C06 - Trabalhando com querySelector

 *    class CalcController {

    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    initButtonsEvents()
    //Esse Metodo Trabalho com eventos do Butão
    {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
            ||                              ||
            ||==> vamos colocar a conulta   ||
                   ne uma variavel so para  ||
                   trabalharmos os eventos. ||
                                            ||
                                            ==>esse codigo esta selecionado  por meio de uma consulta no documennto
                                            todos que casam com a consulta que estou fazendo
                        

        document.querySelector("#buttons > g, #parts > g");
        esse codigo esta selecionado  por meio de uma consulta no documennto
        o primeiro que achei ta ok

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}
 *  C07 - Adicionando Evento Click 
    
    O que é um evento ?
    O javascript ele escuta tudo que acontec no navegador ,
    ele reage a eventos de teclado de mouse e de tempo  e 
    interações do proprio usuario.
    Um addEventListener é uma escuta de um evento ,
    Mós podemos adicionar varias escutas de evento
    e reagir com funções ou com códigos métodos,
    quando eles ocorrem.


    class CalcController {

    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
                  //> vamos percorrer para cada botão
                 //  que ele encontrar nessa lista ele vai executar esse código.
        buttons.forEach((btn, index)=>{
          ||      ||      \\> o botão da vez. que ta passando ali.
          ||      ==> por razões do método 
          ||          addEventListener  ser 
          ||          um método de um elemento
          ||          teremnos que percorrelo
          ||          para adicionar evento em
          ||          cada um da lista . 
          ||
          ==> que é o cara que vai ser monitorado 
              ele é uma lsiat de elementos.

            btn.addEventListener('click', e => {
            ||         ||             ||    \\> O que eu devo fazer
            ||         ||             ==> O evento que você quer.
            ||         => esse método recebe
            ||          dois pârametros que são ?
            ||==> no botão da vez 
                eu adiciono o elemnto          
                      
                console.log(btn.className.baseVal.replace("btn-",""));
                             \------------------/  \---------------/
            })                      \\                   \\
                                     \\                    Aquie peagmos o nome da classe e tiramos
                                      \\                   o valor  btn- e ficamos só com valor dela.
                                     Aqui estamos recuperando 
                                     o nome da classe.  

        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}
 * 
      C08 - Aplicando Varios Eventos 
      usando split();
 *   
      class CalcController {

    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    addEventListenerAll(element, events, fn){
                          ||       ||     \\> e a função
                          ||       ||>O nomes dos eventos
                          ||
                          ||
                          ||> elemento que será 
                              executado.
        Agora repare que os eventos que é o segundo 
        parâmetro ele tem um espaço ali entre o click e drag 
        então o ideal seria que agente fazer alfuma coisa para
        separar, por que de qualquer forma o javascript vai 
        colcar um evento por vez. 
        agente só vai conseguir percorrer os eventos se for um array
        e no momento o eventos não são array e sim uma string. 
                              
        events.split(' ').forEach(event => {
          ||     ||         \-------/
          ||     ||             ||=> percorremos o array event 
          ||     ||                  que é  a divisão da string 
          ||     ||                  events. 
          ||     ==> convertemos para o array
          ||          aráves do split que recebemos
          ||          o parametro que vai ser o ponto 
          ||          de divisão. 
          ==> recebemos o evento qu é um string
            element.addEventListener(event, fn, false);
               \--------------/        ||    ||    \\> como agente tem dois botão um encima do
                    ||                 ||    ||       outro para caso ancontenca uma vez ja aborte.
                    ||                 ||    ||
                    ||                 ||    \/
                    ||                 \/    a Função que quero exexcutar 
                    ||                 o evento
                    \/
                   em cada elemento eu quero adiconar  o meu evento 
        }) 
    
    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {
                                      ||       ||        ||> e qual a função
                                      ||       ||> agente passa quias são os eventos.       
                                      ||         
                                      ||          
                                      ||
                                      ||
                                      ||         
                                      ||> Temos que passar 
                                          o Elemento que Executaremos 
                                          os eventos.
                        
                                               
                console.log(btn.className.baseVal.replace("btn-",""));

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";
                \quero pegar meu botão e quando acionar esse evento 
                acessa o style e moda o cursor para pointer/    
            })
            \------------------------------------------------------------------/
              a ideia dessa parte aqui é quando o usario passar por cima do  botões
              ele percerber que é clickavel virar um mãozinha.
        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}
 * 

   C09 - Switch

   class CalcController {

    constructor(){

        this._operation = [];
        \---------------/
             ||=> vai gardar nossa operação.

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        })
    
    }

    clearAll(){
    \=====/
       \=> esse metodo vai ser chamado 
           para limpar a operação.
        this._operation = [];
        \==================/
            \=> aqui ta peagando o atributo _operation
                 que é um array , e limpando ele .

    }

    clearEntry(){
     \======/
        \=> esse metodo vai ser chamado 
            para limpar a ultima entrada.

        this._operation.pop();
        \==================/
            \=> aqui ta peagando o atributo _operation
                 que é um array , e limpando a ultima entrada.


    }

    addOperation(value)
    \==========/
        \=> vai adionar uma operação 
    
    {

        this._operation.push(value);
        \-------------/ \--------/
             \              \=> qua vai adiconar um novo valor
              \=> array de operções

        console.log(this._operation);

    }

    setError(){

        this.displayCalc = "Error";
        
    }

    execBtn(value){
    \---/    \\> o valor recebido é a variavel textBtn do metodo initButtonsEvents .
     ||
     ==> esse metodo ele vai executar a ação desse botão
         Porque nos precismos tomar um ação baseada na 
         interação do usuario. 

              ||==> aqui no switch vamos testar os possiveis casos desse value 
              ||     que é  variavel textBtn do metodo initButtonsEvents.
         /---------\
        switch (value) {
            ||     \\> o valor recebido é a variavel textBtn do metodo initButtonsEvents .
            ==> 
             O switch é uma estrura que eu ja sei
             quais são as pções que podem acontecer.

            case 'ac':
                quando entra nesse caso vai apagar 
                toda operação.
                this.clearAll().
                \======/
                   \=> esse metodo vai ser chamado 
                       para limpar a operação.
                break;

            case 'ce':
                 quando entrar nesse case vamos 
                 cancelar a ultima entrada.
                this.clearEntry();
                 \======/
                   \=> esse metodo vai ser chamado 
                       para limpar a ultima entrada.
                break;

            case 'soma':
                
                break;

            case 'subtracao':
                
                break;

            case 'divisao':
                
                break;

            case 'porcento':
                
                break;

            case 'igual':
                
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;            \-------------/
                \-------/               \=> como o value vindo da class é uma string vou fazer 
                \                            um ParseInt para convertelo para number
                 \=> como numero é tudo igual , so vou precisar pegar o valor do numero e adicionalo ,
                     entçao vou criar varios case para adiconar o value vindo da variavel let textButtons .  

            default:
                this.setError();
                \=========/
                    \=> caso algo der errado 
                        vai passar por aqui e chamar
                        o metodo de erro.
                break;

        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");
                            \----------------------------------------/
                                           ||
                                           \/
                                aqui nos temos o texto que extraimos da 
                                classe do botão e colacamos esse valor 
                                na variavel let textBtn;
                this.execBtn(textBtn);
                 \---------/    \\> enviamos o valor do botão para execBtn.
                     ||
                     ==> esse metodo ele vai executar a ação desse botão
                        Porque nos precismos tomar um ação baseada na 
                        nteração do usuario.  
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            })

        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}
 *   c10-Adicionado Operações isNan e array.lenght

   class CalcController {

    constructor(){

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        })
    
    }

    clearAll(){

        this._operation = [];

    }

    clearEntry(){

        this._operation.pop();

    }

    getLastOperation()
    \-------------/
           \==> vai pegar a ultima posição do array 
    {
    
        return  this._operation[this._operation.length-1];
           \      \------------/  \-------------------/
            \            \                  \==> vou pegar a quantidade de intes menos um; 
             => fazer     \
             o retorno     \
             da ultima      \
             posição         \=====> vou pegar o nosso array;
    }

    setLastOperation(value)
    \======================/
    Esse método recebe um valor e substitui 
    a ultima posição do array por um novo valor
    {


        this._operation[this._operation.length-1] = value;
        \------------/  \-------------------/    \=> e subtituir um novo valor nessa posição que nocaso é ultima.
                  \                  \==> vou pegar a quantidade de itens menos um; 
                   \
                    \
                     \
                      \=====> vou pegar o nosso array;
    }

    isOperator(value)
    \==============/
    esse metodo vai receber o valor e comparar
    com array e ver se é um operador.
    {

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);
                 \----------------------/  \----------/
                   \> array com todos        \> agente pega o
                     operadores.                 o valor recebido e
                                                compara com os valores 
                                                presentes no array 
                                                caso não seja encontrado
                                                nada retorna -1 se não ele
                                                 vai trazer o indice;
    }

    addOperation(value){
                    |
                    ==> o value é  valor atual caso entre no if vamos 
                        verificar se o valor pssado na ultima vez é um numero ou não.  

        console.log('A', isNaN(this.getLastOperation()));

        if (isNaN(this.getLastOperation())) {
        \---------------------------------/
        se  a ultima posição não é um numero.
        então se não é um numero ou é sinal ou um ponto.

            if (this.isOperator(value))
            \-------------------------/
            se o valor recebido for um operador 
            ele vai chamar o metodo isOperator 
            passando o valor recebido ele vai fazer 
            a comparção trazendo se true ou false
            {
                se entrar aqui ele vai substituir o ultimo item pelo novo caso
                o ultima posiçõ for um operador e a nova também.
                this.setLastOperation(value);
                 \------------------/
                    \=> esse metodo vai alterar a ultima posição do array com base no valor passado
            } else if (isNaN(value)){
        
                console.log(value);

            } else {
                só vai entrar aqui se for um numero é a primeria vez que colocamos 
                valores aqui no nosso array.
                this._operation.push(value);
                então fazemos um push do valor recebido

            }

        } else 
          \--/
            \==> se não é um numero
        {
            se entrar aqui a intenção e que pegue a ultma posição e concatene com o posição atual

           let newValue  =  this.getLastOperation().toString()     +  value.toString();
            \==========/   |\------------------------------        |   aqui estamos pegando o valor
            |=> aqui       |  aqui estamos pegando o ultimo valor  |   atual e convertento para
            nessa variavel |  do nosso array e convertento para    |   string assim poderemos concatenalo 
            vamos receber  |  string assim poderemos concatenalo   |   com o valor da ultima posição
            receber o novo |  com novo valor.                      |
              valor.       |
           
                
            this.setLastOperation(parseInt(newValue));
            \------------------/
                    \=> esse metodo vai alterar a ultima posição do array com base no valor passado
               

        }

        console.log(this._operation);

    }

    setError(){

        this.displayCalc = "Error";
        
    }

    execBtn(value){

        switch (value) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                
                break;

            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;

        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            })

        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}

   C11 - Eval , Validando primeiro Operador e claculando  resultado

   class CalcController {

    constructor(){

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        })
    
    }

    clearAll(){

        this._operation = [];

    }

    clearEntry(){

        this._operation.pop();

    }

    getLastOperation(){

        return this._operation[this._operation.length-1];

    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;

    }

    isOperator(value){

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);

    }

    pushOperation(value)
    \-----------------------/
    esse método vai ser responsavel por fazer o push.

    {

        this._operation.push(value);
        aqui estamos o array opertion e fazendo o push

        if (this._operation.length > 3) 
        \=============================/
        se o array operation tiver uma quantidade maior que três faça
        {
           
            this.calc();
            chame  o metodo que fara o cálculo
            porque quando array for maior que três
            vou ter que fazer o resultado dos três  
            posição do array com o proximo valor que vir .


        }

    }

    calc(){

        let last = this._operation.pop();
                   \===================/
                aqui vou pegar o ultimo valor do array 
                e retiralo e colocalo ne uma variavel last.
                      /=> o metodo eval ele pega qaulquer codigo js e executa. 
        let result = eval(this._operation.join(""));
                     \============================/
                        aqui estamos peagndo o valor 
                        do array e covertendo para string 
                        passamo o pârametro vazio para 
                        tirae a virgula  do array.
                        e vamos passar o resultado para 
                        colocar na variavel result.


        this._operation = [result, last];
        \------------------------------/
           estamos pegando o array e  passando novos valores 
           que serão o resultado e ultima posição.

    }

    setLastNumberToDisplay(){

        

    }

    addOperation(value){


        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this.setLastOperation(value);

            } else if (isNaN(value)){

                console.log("outra coisa",value);

            } else {

                this.pushOperation(value);
                \-----------------------/
                esse método vai ser responsavel por fazer o push.


            }

        } else {

            Com if que faz a verificção geral ele pergunta se ultimo é 
            um numero então para fazer adição de um operador 
            no array precisamos tratralo aqui para fazer o push.

            if (this.isOperator(value))
            se ele é um operador  
            {
                adicionar no meu array
                this.pushOperation(value);
                \-----------------------/
                esse método vai ser responsavel por fazer o push.

            } else {
                  

                let newValue = this.getLastOperation().toString() + value.toString();

                this.setLastOperation(parseInt(newValue));

                this.setLastNumberToDisplay();

            }

        }

    }

    setError(){

        this.displayCalc = "Error";
        
    }

    execBtn(value){

        switch (value) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                
                break;

            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;

        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            })

        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}



C12 - For- Procurando o último número do array

class CalcController {

    constructor(){

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        })
    
    }

    clearAll(){

        this._operation = [];

    }

    clearEntry(){

        this._operation.pop();

    }

    getLastOperation(){

        return this._operation[this._operation.length-1];

    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;

    }

    isOperator(value){

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);

    }

    pushOperation(value){

        this._operation.push(value);

        if (this._operation.length > 3) {

            this.calc();

        }

    }

    calc(){

        let last = this._operation.pop();
        
        let result = eval(this._operation.join(""));

        this._operation = [result, last];

        this.setLastNumberToDisplay();
        \---------------------------/
                   esse metodo tem como ponto alto
                   sempre mostra o ultimo numero no display


    }

    setLastNumberToDisplay(){
   esse metodo tem como ponto alto
   sempre mostra o ultimo numero no display

        let lastNumber;
        \=> precisamos descobri o ultimo numero.

        for (let i = this._operation.length-1; i >= 0; i--){
                 ||                               ||    ||=> repetição
                 ||                               ||
                 ||                               ==> condição
                 ===> valor inicial 
                      começa no total de itens 
                      do array.


            if (!this.isOperator(this._operation[i])) {
                se não for um operador  porque eu achei um numero
                então coloca esse numero na minha variavel.
                lastNumber = this._operation[i];

                break;

            }

        }

        this.displayCalc = lastNumber;

    }

    addOperation(value){


        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this.setLastOperation(value);

            } else if (isNaN(value)){

                console.log("outra coisa",value);

            } else {

                this.pushOperation(value);

                this.setLastNumberToDisplay();
                \---------------------------/
                   esse metodo tem como ponto alto
                   sempre mostra o ultimo numero no display


            }

        } else {

            if (this.isOperator(value)){

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString();

                this.setLastOperation(parseInt(newValue));

                this.setLastNumberToDisplay();
                \---------------------------/
                   esse metodo tem como ponto alto
                   sempre mostra o ultimo numero no display

            }

        }

    }

    setError(){

        this.displayCalc = "Error";
        
    }

    execBtn(value){

        switch (value) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                
                break;

            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;

        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            })

        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}

  C13 - O botão porcento


class CalcController {

    constructor(){

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

        this.setLastNumberToDisplay();

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        })
    
    }

    clearAll(){

        this._operation = [];

        this.setLastNumberToDisplay();

    }

    clearEntry(){

        this._operation.pop();

        this.setLastNumberToDisplay();

    }

    getLastOperation(){

        return this._operation[this._operation.length-1];

    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;

    }

    isOperator(value){

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);

    }

    pushOperation(value){

        this._operation.push(value);

        if (this._operation.length > 3) {

            this.calc();

        }

    }

    calc(){

        o ultimo é o simbolo de porcentagem,
        AGENETE TÉM QUE FAZER ESSA VALIDAÇÃO

        let last = '';

        if (this._operation.length > 3) 
        \-----------------------------/
        se a operação for maior que três
        indice eu bou tirar o ultimo indice.
        {

            last = this._operation.pop();

        }
        
        let result = eval(this._operation.join(""));
        

        if (last == '%')
        \--------------/
        SE o  ultimo é igual ao simbolo de porcentagem.
        {
         
            result /= 100;
            aqui vamos dividir por cem .

            this._operation = [result];
            aqui so vamos atualizar o result por que já usamo o porcento 
            para calculo.

        } else {
           se não faz isso
            this._operation = [result];

            if (last) this._operation.push(last);
            se last não for vazio agente faz o push do last

        }

        this.setLastNumberToDisplay();

    }

    setLastNumberToDisplay(){

        let lastNumber;

        for (let i = this._operation.length-1; i >= 0; i--){

            if (!this.isOperator(this._operation[i])) {

                lastNumber = this._operation[i];

                break;

            }

        }

        if (!lastNumber) lastNumber = 0;

        this.displayCalc = lastNumber;

    }

    addOperation(value){


        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this.setLastOperation(value);

            } else if (isNaN(value)){

                console.log("outra coisa",value);

            } else {

                this.pushOperation(value);

                this.setLastNumberToDisplay();

            }

        } else {

            if (this.isOperator(value)){

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString();

                this.setLastOperation(parseInt(newValue));

                this.setLastNumberToDisplay();

            }

        }

    }

    setError(){

        this.displayCalc = "Error";
        
    }

    execBtn(value){

        switch (value) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                ele vai calcular a expressão é so mandar 
                this.calc();
                para esse metodo para fazer o resultado.
                break;

            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;

        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            })

        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}

 C14 - Clikando mais de uma vez no botão igual

  class CalcController {

    constructor(){

        this._lastOperator = '';
        this._lastNumber = '';

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

        this.setLastNumberToDisplay();

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        })
    
    }

    clearAll(){

        this._operation = [];

        this.setLastNumberToDisplay();

    }

    clearEntry(){

        this._operation.pop();

        this.setLastNumberToDisplay();

    }

    getLastOperation(){

        return this._operation[this._operation.length-1];

    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;

    }

    isOperator(value){

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);

    }

    pushOperation(value){

        this._operation.push(value);

        if (this._operation.length > 3) {

            this.calc();

        }

    }

    getResult(){
    ele simplesmente vai fazer um eval da operação 


        return eval(this._operation.join(""));

    }

    calc(){

        1 caso se o usuario apertar duas vezes e ultima posição for um operador = 
        ele garda o ultimo operador e o valor do resultado e toda vez que eu 
        apertar no igual ele vai fazer a operção com o resultado .

        2 caso se o usuario apertar duas vezes e ultima posição for um operador =
        caso o ultima posiçao no array for um numero e o penultima for um operador 
        e clickar no igual mais de uma vez, vai pegar o rsultado e  pegar o penultimo 
        operador e o ultimo posição e fazer a operação com o ultimo valor encima do resultado 

        let last = '';
        
        this._lastOperator = this.getLastItem();
        e gardar o ultimo operador eu chamo esse metodo 
        que vai buscar o ultimo item e passo nada por padrão.

        if (this._operation.length < 3)
        se   a quantidade do nosso array for menor que três
        {

            let firstItem = this._operation[0];
            pegamos o primeiro item antes de fazer um novo array.


            this._operation = [firstItem, this._lastOperator, this._lastNumber];
          aqui no novo array passamos o item que salvmos na variavel de cima
           e no sehundo indice colocamos o operador , e no ultimo item que é nosso lastNumber 
        }

        if (this._operation.length > 3) {

            last = this._operation.pop();

            this._lastNumber = this.getResult();
            gardar o ultimo numero

        } else if (this._operation.length == 3) {
                se essa operation for igual 3 eu gardo o ultimo numero.
            this._lastNumber = this.getLastItem(false);
            gardar o ultimo numero

        }
        
        let result = this.getResult();

        if (last == '%') {

            result /= 100;

            this._operation = [result];

        } else {

            this._operation = [result];

            if (last) this._operation.push(last);

        }

        this.setLastNumberToDisplay();

    }

    getLastItem(isOperator = true)
     vou pegar o ultino item por pradão 
     ele sempre vai trazer para min o ultimo operador 
    {

        let lastItem;
        ultimo item

        for (let i = this._operation.length-1; i >= 0; i--){

            if (this.isOperator(this._operation[i]) == isOperator) 
               O resultado do meu isOperator tem que ser igual ao meu parametro isOperator
            {
    
                lastItem = this._operation[i];
    
                break;
    
            }

        }

        if (!lastItem) {
         se não encontrar gaca 
            lastItem = (isOperator) ? this._lastOperator : this._lastNumber;
            o last item = for operator então  agente quer o ultimo operador se não o ultimo numero

        }

        return lastItem;

    }

    setLastNumberToDisplay(){

        let lastNumber = this.getLastItem(false);

        if (!lastNumber) lastNumber = 0;

        this.displayCalc = lastNumber;

    }

    addOperation(value){


        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this.setLastOperation(value);

            } else if (isNaN(value)){

                console.log("outra coisa",value);

            } else {

                this.pushOperation(value);

                this.setLastNumberToDisplay();

            }

        } else {

            if (this.isOperator(value)){

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString();

                this.setLastOperation(parseInt(newValue));

                this.setLastNumberToDisplay();

            }

        }

    }

    setError(){

        this.displayCalc = "Error";
        
    }

    execBtn(value){

        switch (value) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                this.calc();
                break;

            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;

        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            })

        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}



C15 - Botão ponto
class CalcController {

    constructor(){

        this._lastOperator = '';
        this._lastNumber = '';

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

        this.setLastNumberToDisplay();

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        })
    
    }

    clearAll(){

        this._operation = [];
        como nessa parte estamos soó limpando  o array 
        agora precisamos limpar as variveis que crimos para tratar 
        o ponto e outras cois.
        this._lastNumber = '';
        this._lastOperator = '';

        this.setLastNumberToDisplay();

    }

    clearEntry(){

        this._operation.pop();

        this.setLastNumberToDisplay();

    }

    getLastOperation(){

        return this._operation[this._operation.length-1];

    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;

    }

    isOperator(value){

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);

    }

    pushOperation(value){

        this._operation.push(value);

        if (this._operation.length > 3) {

            this.calc();

        }

    }

    getResult(){



        return eval(this._operation.join(""));

    }

    calc(){

        let last = '';
        
        this._lastOperator = this.getLastItem();

        if (this._operation.length < 3) {

            let firstItem = this._operation[0];

            this._operation = [firstItem, this._lastOperator, this._lastNumber];

        }

        if (this._operation.length > 3) {

            last = this._operation.pop();

            this._lastNumber = this.getResult();

        } else if (this._operation.length == 3) {

            this._lastNumber = this.getLastItem(false);

        }
        
        let result = this.getResult();

        if (last == '%') {

            result /= 100;

            this._operation = [result];

        } else {

            this._operation = [result];

            if (last) this._operation.push(last);

        }

        this.setLastNumberToDisplay();

    }

    getLastItem(isOperator = true){

        let lastItem;

        for (let i = this._operation.length-1; i >= 0; i--){

            if (this.isOperator(this._operation[i]) == isOperator) {
    
                lastItem = this._operation[i];
    
                break;
    
            }

        }

        if (!lastItem) {

            lastItem = (isOperator) ? this._lastOperator : this._lastNumber;

        }

        return lastItem;

    }

    setLastNumberToDisplay(){

        let lastNumber = this.getLastItem(false);

        if (!lastNumber) lastNumber = 0;

        this.displayCalc = lastNumber;

    }

    addOperation(value){


        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this.setLastOperation(value);

            } else {

                this.pushOperation(value);

                this.setLastNumberToDisplay();

            }

        } else {

            if (this.isOperator(value)){

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString();

                this.setLastOperation(parseFloat(newValue));

                this.setLastNumberToDisplay();

            }

        }

    }

    setError(){

        this.displayCalc = "Error";
        
    }

    addDot(){

        let lastOperation = this.getLastOperation();
        qual é a ultima operação

        if (this.isOperator(lastOperation) || !lastOperation) 
        \---------------------------------------------------/
        se for um operador ou for undefined
        {

            this.pushOperation('0.');
            fazer um push na operção de 0.


        } else {

            this.setLastOperation(lastOperation.toString() + '.');
            eu quero subscrever  aminha ultima operação, pegar a ulrima operção convertela para string 
            e concatenala com o ponto.


        }

        após isso é so atualizar a tela

        this.setLastNumberToDisplay();
        
    }

    execBtn(value){

        switch (value) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                this.calc();
                break;

            case 'ponto':
                this.addDot();
                esse metodo vai adicionar o  ponto.
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;

        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            })

        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}

c16 - Bugs com ponto 
  
 addOperation(value){


        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this.setLastOperation(value);

            } else {

                this.pushOperation(value);

                this.setLastNumberToDisplay();

            }

        } else {

            if (this.isOperator(value)){

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString();

                this.setLastOperation(newValue);
                é nessesario tira o parseFloat do metodo 

                this.setLastNumberToDisplay();

            }

        }

    }

    
    addDot(){

        let lastOperation = this.getLastOperation();

        if (typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1) return;
        se ela existe e se  o tipo lastOperation é identico a string  e faça um split de lastOperation e
         apos faça uma pesquisa vendo se existe um ponto ai dentro  caso seja maior que  -1 é por   que existe entaão da return.    
        if (this.isOperator(lastOperation) || !lastOperation) {

            this.pushOperation('0.');

        } else {

            this.setLastOperation(lastOperation.toString() + '.');

        }

        this.setLastNumberToDisplay();
        
    }

    C17 - eventos de teclado 

     initKeyboard() {

        document.addEventListener('keyup', e=> {
            ||         ||             ||    \\> O que eu devo fazer
            ||         ||             ==> O evento que você quer.
            ||         => esse método recebe
            ||          dois pârametros que são ?
            ||==> o foco é no documento.   

            switch (e.key) {
                      \=> vai pegar o valor da tecla
                case 'Escape':
                    this.clearAll();
                    break; 
    
                case 'Backspace':
                    this.clearEntry();
                    break;
    
                case '+':    
                case '-':    
                case '*':    
                case '/':    
                case '%':
                    this.addOperation(e.key);
                    break;
    
                case 'Enter':
                case '=':
                    this.calc();
                    break;
    
                case '.':
                case ',':
                    this.addDot();
                    break;
    
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this.addOperation(parseInt(e.key));
                    break;
    
            }

        })

    }
 

    C17 - Control C e Control V

     pasteFromClipboard()
               \-----/
          colar da Area de Trasferencia
     {

        document.addEventListener
        aqui estamos que esta escutando para ver se alfuem quer colar
        ('paste', e=>{

            let text = e.clipboardData.getData('Text');
                 aui estamos pegando o valor que foi colado

            this.displayCalc = parseFloat(text);
             aqui estamos mostrando o valor no display

        });

    }

    copyToClipboard()
    Copiando Area de Trasferencia 
    {

        let input = document.createElement('input');
        como estamos trabalhando vamos criar input , ai vamos passar o
        valor do nosso display e depois acessar esse input para depois 
        copiar.

        input.value = this.displayCalc;
        aqui estamos colocando o valor do nosso display dentro do nosso input

        document.body.appendChild(input);
        aqui o nosso inpu  vai abraçar o body 

        input.select();
        acessar o conteudo dele 

        document.execCommand("Copy");
        coomando para copiar a informação do input.

        input.remove();
        aqui o inpunt não ficara invisivel.

    }

     initKeyboard() {

        document.addEventListener('keyup', e=> {

            switch (e.key) {

                case 'Escape':
                    this.clearAll();
                    break;
    
                case 'Backspace':
                    this.clearEntry();
                    break;
    
                case '+':    
                case '-':    
                case '*':    
                case '/':    
                case '%':
                    this.addOperation(e.key);
                    break;
    
                case 'Enter':
                case '=':
                    this.calc();
                    break;
    
                case '.':
                case ',':
                    this.addDot();
                    break;
    
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this.addOperation(parseInt(e.key));
                    break;

                case 'c':
                    if (e.ctrlKey) this.copyToClipboard();
                    break;
    
            }

        })

    }

    C18 - Api de audio

    constructor(){

        this._audio = new Audio('click.mp3');
        this._audioOnOff = false;
        this._lastOperator = '';
        this._lastNumber = '';

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
        this.initKeyboard();

    }


    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

        this.setLastNumberToDisplay();
        this.pasteFromClipboard();

        document.querySelectorAll('.btn-ac').forEach(btn=>{

            btn.addEventListener('dblclick', e=>{

                this.toggleAudio();

            });

        });

    }

    toggleAudio(){

        this._audioOnOff = !this._audioOnOff;

    }
 */