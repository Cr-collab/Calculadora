class CalcController
{
      constructor()//parâmetros são informações que a função ou metodo precisa para funcioanr
      {
           //aqui dentro eu vou tratar os parâmetros
           // recebidos pelo função ou metodo nessa caso o constructor
           this._audio = new Audio('click.mp3');
           this._audioOnOff = false;
           this._lastOperator = ''
           this._lastNumber = ''
           this._operation = [] // o operation vai gardar a nossa operação
           this._locale = 'pt-BR'
           this._displayCalcEl =  document.querySelector('#display')
           this._dateEl = document.querySelector('#data')
           this._timeEl = document.querySelector('#hora')
           this._currentDate;
           this.initialize();
           this.initButtonsEvents();
           this.initKeyBoard();
           this.pasteFromClipboard();
           this.toggleAudio();
           //como o construtor ele inicializado automaticamente o metodo vai ser chamadao aqui dentro
           


           // o comando intero this ele faz referencia ao objeto que foi instanciado 
      }


      pasteFromClipboard()
      {
           document.addEventListener('paste', e=>
           {
              let text = e.clipboardData.getData('Text');

              this.displayCalc = parseFloat(text)
           })
      }

      copyToClipboard()
      {
          let input = document.createElement('input');
          input.value = this.displayCalc;
          document.body.appendChild(input);
          input.select();

          document.execCommand("Copy")

          input.remove();
      }

      initialize()
      {
          /**
           * Então esse metodo ele vai ser chamdo quando eu iniciliazar 
           * minha calculadora , tudo que ela fazer vai ficar aqui dentro
           */
          /** o innerHTML  significa o seguinte pega esse objeto que estou falndo olha bem para quem é  displayCalcEl,
           * coloque uma informação lá dentro no formato HTML é isso que o innerHTML faz 
           */

           /** Funçaõ executada em um intervalo de Tempo "setInterval O tempo é marcado em milisegundos"  */
           this.setDispalyDateTime();

        setInterval(()=>
        {
            /** Arrow Function Um novo recurso para criações de Função 
             * é um recurso mais simples do que é uma função 
             * 1- não preciso escrever a palvra function  par fazer uma função
             * 2- os parêntese que nos colocamos é para os parâmetros ele podem ser até opcionais
             * e o igual e o maior  essa seta  é como eu fala-se isso éssa função vai fazer isso
             * ai eu abro e fecho colchetes para colocar a logica da função
             * 
            */

            this.setDispalyDateTime();
 
           

        },1000)
        this.setLastNumberToDisplay();

        document.querySelectorAll('.btn-ac').forEach(btn=>{

          btn.addEventListener('dblclick', e=>{

              this.toggleAudio();

          });

      });

  }

  toggleAudio(){

      this._audioOnOff = !this._audioOnOff;

  }

  playAudio(){

      if (this._audioOnOff) {

          this._audio.currentTime = 0;
          this._audio.play();

      }

      }


      initKeyBoard()
      {
           document.addEventListener('keyup', e =>
           {
           
            this.playAudio();
             switch(e.key)
             {

                 case 'Escape':
                  this.clearAll()
                 break;

                 case 'Backspace':
                   this.clearEntry()
                 break;
                 
                 case '+':
                    this.addOperation(e.key);
                 break;

                 case '-':
                    this.addOperation(e.key);
                 break;

                 case '*' :
                    this.addOperation(e.key);
                 break;

                 case '/' :
                    this.addOperation(e.key);
                 break;

                 case '%' :
                    this.addOperation(e.key);
                 break;

                 case 'Enter' :
                 case '=':
                    this.calc();
                 break;

                 case ',':
                 case '.':
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

                     if(e.ctrlKey) this.copyToClipboard();
                     break;


            
                 
             }

           }); 
      }

      addEventListenerAll(element , events,fn)
      {
              events.split(" ")/** quero fazer um forEach no split do events */.forEach(event => /** passando em cada um dos eventos */
                {
                    element/** pega esse elemento que no caso é o btn */.addEventListener(event/**primeiro o evento */, fn  /**e depois a função que eu
                         quero executar */, false /** o false vai ser par impedir duplicidade por causa das camadas do frontend */)
                })

                /** esse evento é da nossa classe  que passamos elemento que vamos afetar o eventos que queremos usar e a função, 
                 *  para converte uma string em um array é o split vamos receber no parametro eventos  uma string que vai ser o nome do evento
                 *  e cada evento é separado por um espaco e o criterio para separar cada elemento dentro split vai ser o espaço assim
                 *  criando uma array de ventos, o parametro que se passa no split vai ser o criterio para divisão do array que vais ser gerado. 
                 * 
                 */
      }

      clearAll()
      {
          /**Esse metodo vai apagar tudo  */
          this._operation = [];
          this._lastNumber = ''
          this._lastOperator = ''
          this.setLastNumberToDisplay();

      }

      clearEntry()
      {
          /** Esse Metodo so vai apagar a primera entrada */
          this._operation.pop()
          this.setLastNumberToDisplay();

      }

      getLastOpertion()
      {
         return this._operation[this._operation.length - 1]
         /**Retorna a ultima podição do array */
      }

      setLastOperation(value)
      {
        this._operation[this._operation.length-1] = value;
      }

      isOperator(value)
      {

        /*
        * Nos podemos criar um array com sinais +,-,*,/,% 
        * if( ['+','-','*','%','/'].indexOf(value) 
        * aqui esta pergunta se existe ai dentro se ele
        * encontra o valor ele vai trazer o indice do valor se não encontra vai se -1 
        * // se o index of for maior que -1 então significa que é um operador  
        * > -1 ){
        * return true
        * }else
        * {
        *   retur false
        * }
        */
          
       return (['+','-','*','%','/'].indexOf(value) > -1)
              /** essa forma retorna o resultado de true e false de uma forma menos verbosa 
               *  a condição que estaria no if seria essa com a logica de retor false e true 
               * mais o javascript tem a inteligente de ja dar um retorno true ou false 
               * dependendo da condição sem precisar explicitar o retorno
              */
  
      }


      pushOperation(value)
      {
        this._operation.push(value)

        if(this._operation.length > 3 )
        {
            this.calc()
        }
      }

      getResult()
      {
        console.log('getResult', this._operation)

         try{
           return eval(this._operation.join(""))
         }
         catch(e)
         {
           setTimeout(()=>{
            this.setError();
           }, 1)
            
         }
      }

      calc()
      {
        let last = ''

        this._lastOperator = this.getLastItem(true);

        if(this._operation.length < 3)
        {
          let firstNumber =this._operation[0]
          this._operation = [firstNumber, this._lastOperator,this._lastNumber]
        }

        if(this._operation.length > 3)
        {
           last = this._operation.pop()
           this._lastNumber = this.getResult()
        } else if(this._operation.length == 3)
        {
           
          this._lastNumber = this.getLastItem(false)
          
        }
        
        console.log('Operador', this._lastOperator)
        console.log('Numero',  this._lastNumber)
        

        let result= this.getResult()

        if(last == '%')
        {
          result /= 100
          this._operation = [result]
        }
        else
        {
        this._operation = [result]

        if (last) this._operation.push(last)

        }
        this.setLastNumberToDisplay();

      }


      getLastItem(isOperator = true)
      {
        let lastItem;
          for(let i = this._operation.length - 1; i >= 0; i-- )
          {
               
                  if(this.isOperator(this._operation[i]) == isOperator)
                  {
                    lastItem = this._operation[i];
                    
                    break;
                  }
                  
                
        }

        if(!lastItem)
        {
          lastItem = (isOperator) ? this._lastOperator : this._lastNumber
        }

      
        return lastItem;
          
    
      }

      setLastNumberToDisplay()
      {
            let lastNumber = this.getLastItem(false);

            
            if(!lastNumber) lastNumber = 0
            this.displayCalc = lastNumber;
      }

      addOperation(value /**esse é o cara do momento  */)
      {
          if(isNaN(this.getLastOpertion()))
          /** o value é o cara do momento e aqui aqui no tratamento estamos falando do ultimo value que esta no array operation   */
       // se não for um numero , então se não vier um numero vai dar verdadeiro entrando no bloco do se 
          {
                // vai entar no caso se for uma string

                /** se for um operador um ponto   agente vai tratar diferente */
                /** Agente vai ter que fazer uma validação se o ultimo for um operador 
                 * e novo também for um operdaor então significa que estamos trocando */
                  if(this.isOperator(value))
                  /** se entra nesse if e se esse valor for um operador 
                   * a gente pode criar um  metodo para fazer a pesquisa e com base na pesquisa faremos a troca  
                   * */
                  {
                      this._operation[this._operation.length - 1]/** aqui estou pegando o valor do ultimo item  */ = value;
                      /** aqui nes trecho de codigo estou pegando o valor do ultimo item e trocando pelo var recebido  */
                  }
                  else
                  {   
                        
                        /** se passar por tudo isso então é um numero então vai ser a primeri vez que ´e adicionado um numero então é so fazer um push */
                        this.pushOperation(value)
                        this.setLastNumberToDisplay();

                  }

          }else // se não é um numero aqui é feito o tratamneto do numero no array
          {

              
            if(this.isOperator(value))
            {
              this.pushOperation(value)
            }
            else
            {
              
                  // numero
              // se for um numero eu não quero adicionar mais um item no array eu quero concatenalo com o valor que ja estava 
               /** um detalhe no metodo addOperation eu estou recebendo o numero da vez que o usuario digito  
                * mais aqui eu não estou pegando o valor em questão e, eu to perguntando como é que esta la o ultimo antes 
                * de fazer alguma coisa com valor que esta la , tem sinal , tem numero , tem um ponto */
                let newValue = this.getLastOpertion().toString()/** vou peagar o ultimo valor que 
                foi digitado  que esta noa array _opeartion e vou converter para string */ + value.toString() /** com o valor do momento  que veio metodo initbutton e tratada no metodo execButtons  */;
                               
               this.setLastOperation(newValue)
                /** aqui no novo valor agente não pode fazer um push agente tem que trocar a posição do ultimo  o valor  */
                //esse novo valor vou adicionar no array 


                //O mometo de atualizar o display
                this.setLastNumberToDisplay();

            }
             
          }
           
          console.log(this._operation)

        }

        
      

      setError()
      {
          this.displayCalc = 'Error';
      }

      addDot()
      {
          let lastOperation = this.getLastOpertion()

          if(typeof lastOperation ==='string' && lastOperation.split("").indexOf('.') > -1) return;

          if(this.isOperator(lastOperation) || !lastOperation)
          {
            this.pushOperation('0.')
          }else
          {
             this.setLastOperation(lastOperation.toString() + '.')
          }
        

          this.setLastNumberToDisplay()
      }

      execBtn(value)
      {     
           this.playAudio();
             switch(value)
             {

                 case 'ac':
                  this.clearAll()
                 break;

                 case 'ce':
                   this.clearEntry()
                 break;
                 
                 case 'soma':
                    this.addOperation('+');
                 break;

                 case 'subtracao':
                    this.addOperation('-');
                 break;

                 case 'multiplicacao' :
                    this.addOperation('*');
                 break;

                 case 'divisao' :
                    this.addOperation('/');
                 break;

                 case 'porcento' :
                    this.addOperation('%');
                 break;

                 case 'igual' :
                    this.calc();
                 break;

                 case 'ponto':
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
                     this.addOperation(parseInt(value));
                     break;


                 default:
                   this.setError();
                 break;


             }
      }

      initButtonsEvents()
      {
          let buttons = document.querySelectorAll("#buttons > g, #parts > g");
          /** o document.querySelectorAll ele vai selecionar todos aquele que casam com a consulta que estou fazendo */
          
          /** Quem vai ser o cara que vai ser monitorado  no caso é buttons*/
          /** addEventListener  tem dois parametros o evento que voce quer e a ação que você vai tomar baseada no evento e 
           * para isso usamos uma função 
           * passando parametro  para receber o evento ,
           * o addEventListener é um metodo de um elemento não de uma lista de elementos 
           * eu vou percorrer o node list de btns passando o botão da vez como parametro  em cima do parametro
           *  que é botão da vez  eu adiciono o evento
           * 
           * 
            */
          buttons.forEach((btn)=>
            { 
              
                this.addEventListenerAll(btn ,'click drag ', e =>
                {
                  
                     let textBtn = btn.className.baseVal.replace('btn-','')

                     this.execBtn(textBtn)
                     // esse metodo vai executar a ação do buttão e o botão recebido é o resultado enviado 
                })

                this.addEventListenerAll(btn, 'mouseover mouseup mousedown' ,e=>
                {
                    btn.style.cursor = "pointer"
                })
                
            })
          
      }
      

      setDispalyDateTime()
      {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
      }

      get displayTime ()
      {
          return this._timeEl.innerHTML;
      }

      set  displayTime(value)
      {
          return this._timeEl.innerHTML = value;
      }

      get displayDate()
      {
          return this._dateEl.innerHTML;
      }

      set displayDate(value)
      {
        return this._dateEl.innerHTML = value;
      }


      get/** o get ele pega o valor*/ displayCalc()
      {
          return this._displayCalcEl.innerHTML;
      }

      set /** Toda vez que você criar um atributo privado voçe precisa do getter e do setter dele */ displayCalc(value)
      {
        if(value.toString().length > 10)
        {
          this.setError();
          return false;
        }
         return this._displayCalcEl.innerHTML = value;
      }

      
      get currentDate()
      {
          return new Date ();
      }

     
 
}