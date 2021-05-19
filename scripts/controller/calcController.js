class CalcController
{
      constructor()//parâmetros são informações que a função ou metodo precisa para funcioanr
      {
           //aqui dentro eu vou tratar os parâmetros
           // recebidos pelo função ou metodo nessa caso o constructor

           this._locale = 'pt-BR'
           this._displayCalcEl =  document.querySelector('#display')
           this._dateEl = document.querySelector('#data')
           this._timeEl = document.querySelector('#hora')
           this._currentDate;
           this.initialize();
           this.initButtonsEvents();
           //como o construtor ele inicializado automaticamente o metodo vai ser chamadao aqui dentro
           


           // o comando intero this ele faz referencia ao objeto que foi instanciado 
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
                    console.log(btn.className.baseVal.replace('btn-',''))
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
         return this.displayCalcEl.innerHTML = value;
      }

      
      get currentDate()
      {
          return new Date ();
      }

     
 
}