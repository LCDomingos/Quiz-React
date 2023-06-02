import React, { useState } from 'react'

const QuizBancoDados = () => {
     // Array criado de objetos
     const questions = [
        {
            // propriedade "questionsText" representa uma pergunta no quiz
            questionText: 'Qual é a linguagem usada para gerenciar Bancos de Dados relacionais?',
            // Array de outros objetos, cada alternativa tem uma propriedade que será true ou false
            answerOptions: [
                { answerText: 'SQL (Structured Query Language).', isCorrect: true },
                { answerText: 'HTML (Hypertext Markup Language).', isCorrect: false },
                { answerText: 'CSS (Cascading Style Sheets).', isCorrect: false },
                { answerText: 'JavaScript.', isCorrect: false },
            ],
        },
        {
            questionText: 'Qual é o principal objetivo de um Banco de Dados?',
            answerOptions: [
                { answerText: 'Armazenar informações de forma não estruturada.', isCorrect: false },
                { answerText: 'Gerenciar informações de forma eficiente e confiável.', isCorrect: true },
                { answerText: 'Realizar cálculos complexos em grandes volumes de dados.', isCorrect: false },
                { answerText: 'Exibir informações em um formato visualmente atraente.', isCorrect: false },
            ],
        },
        {
            questionText: 'O que são chaves primárias e estrangeiras em um Banco de Dados relacional?',
            answerOptions: [
                { answerText: 'Chaves primárias são usadas para identificar de forma exclusiva cada linha em uma tabela, enquanto chaves estrangeiras estabelecem relações entre tabelas.', isCorrect: true },
                { answerText: 'Chaves primárias são usadas para estabelecer relações entre tabelas, enquanto chaves estrangeiras identificam de forma exclusiva cada linha em uma tabela.', isCorrect: false },
                { answerText: 'Chaves primárias e estrangeiras são usadas para realizar consultas complexas em bancos de dados relacionais.', isCorrect: false },
                { answerText: 'Chaves primárias e estrangeiras são usadas para realizar cálculos matemáticos em bancos de dados relacionais.', isCorrect: false },
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
        <div className="QuizBancoDados">
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

export default QuizBancoDados