import React, {useState} from 'react'

const QuizFrontEnd = () => {
    // Array criado de objetos
    const questions = [
        {
            // propriedade "questionsText" representa uma pergunta no quiz
            questionText: 'Qual é a principal responsabilidade do desenvolvedor Front-End?',
            // Array de outros objetos, cada alternativa tem uma propriedade que será true ou false
            answerOptions: [
                { answerText: 'Criar bancos de dados.', isCorrect: false },
                { answerText: 'Desenvolver a parte visual e interativa de um site ou aplicativo.', isCorrect: true },
                { answerText: 'Gerenciar servidores.', isCorrect: false },
                { answerText: 'Realizar testes de segurança.', isCorrect: false },
            ],
        },
        {
            questionText: 'Quais são as linguagens de programação utilizadas no desenvolvimento Front-End?',
            answerOptions: [
                { answerText: 'PHP, Ruby e SQL', isCorrect: false },
                { answerText: 'Python, Java e C++', isCorrect: false },
                { answerText: 'HTML, CSS e JavaScript', isCorrect: true },
                { answerText: 'C#, Swift e Objective-C', isCorrect: false },
            ],
        },
        {
            questionText: 'Quais são alguns frameworks e bibliotecas populares utilizados no desenvolvimento Front-End?',
            answerOptions: [
                { answerText: 'Node.js, Spring e ASP.NET', isCorrect: false },
                { answerText: 'Django, Flask e Express.js', isCorrect: false },
                { answerText: 'Laravel, Symfony e Ruby on Rails', isCorrect: false },
                { answerText: 'React, Angular e Vue.js', isCorrect: true },
            ],
        },
    ];

    // Criando os objetos de estado
    // "currenteQuestion", que é um número que representa qual pergunta o usuário está respondendo atualmente
    const [currenteQuestion, setCurrentQuestion] = useState(0);
    // "showScore" booleano que indica se o quiz terminou ou não
    const [showScore, setShowScore] = useState(false);
    // showScore controla o placar final
    const [score, setScore] = useState(0);
    // showAnswers controla qual resposta será exibida no final
    const [showAnswers, setShowAnswers] = useState(false);

    //Funcção "handleAnswerButtonClick" é chamada quando o usuário clica em uma opção de resposta
    const handleAnswerButtonClick = (isCorrect) => {
      // vendo se está verdadeiro ou false, se for verdadeiro soma 1 ponto
      if(isCorrect){
        setScore(score+1);

      }
      // Apenas pulando as questões, se estiver na 0 vai para a 1 se estiver na 1 vai p 2... Isso acontecerá enquanto o next question for menos que o tamanho do array questions
      // verifica se ainda há mais perguntas a serem respondidas e atualiza o estado "currenteQuestion" ou "showScore" adequadamente.
      const nextQuestion = currenteQuestion + 1;
      if (nextQuestion < questions.length){
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
        setShowAnswers(true);
      }

    }
    
    // Função para reiniciar o quiz
    const restartQuiz = () => {
    // redefine os estados "currenteQuestion", "showScore" e "score" para seus valores iniciais
    setCurrentQuestion(0);
    setShowScore(false);
    setShowAnswers(false);
    setScore(0);
    };


    return (
        <div className="QuizFrontEnd">
            {/* quando o atributo do showScore for true vai ser rodado essa tela que mostra o resultado final */}
            {showScore ? (
              <>
                <div className='score-section'>Você acertou {score} questão de {questions.length}.</div> 
                
                <div className="answers">
                  <p>Todas as respostas corretas:</p>
                  <ul>
                    {questions.map((question, index) => (
                      <li key={index}>
                        <span>{question.questionText}</span>
                        {showAnswers && (
                          <span>Resposta: {question.answerOptions.find((option) => option.isCorrect).answerText}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                <button className="restart" onClick={restartQuiz}>Reiniciar quiz</button>
                </div>  
              </>      
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            {/* Vamos colocar o array da questão atual + 1 para poder vizualmente ficar bonito, array 0 será 1, o 1 será 2 e assim por diante */}
                            <span>Question {currenteQuestion+1}</span>/{questions.length}
                        </div>
                        {/* //Pegando a questão de dentro do Array questions, que está na posição atual currentQuestion. */}
                        <div className='question-text'>{questions[currenteQuestion].questionText}</div>
                    </div>
                    {/* Aqui usaremos uma função "map" para poder percorrer as respostas de cada determinada pergunta e assim saber se é true ou false*/}
                    {/* Aqui no onclick colocamos o handleButtonClick para toda vez que clicar na resposta, esteja ela certa ou errada ele vai para a proxima. */}
                    <div className='answer-section'>
                      {questions[currenteQuestion].answerOptions.map((answerOption, index) => (
                      <button onClick={()=>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
                    </div>
                </>
            )}
        </div>
    );
}

export default QuizFrontEnd