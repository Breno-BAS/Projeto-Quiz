"use client"

import { useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from "./components/QuestionItem";
import { Results } from "./components/Results";


const Page = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const title = 'Quiz de Culinária';

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true);
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers ([ ...answers, answer]);
    loadNextQuestion();
  }

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }


  return (
    <div className="w-full h-screen mx-auto flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult &&
          <QuestionItem 
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
          }
          {showResult &&
            <Results questions={questions} answers={answers} />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
          `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={handleRestartButton} className="px-3 py-2 rounded-md bg-blue-800 text-white">Reiniciar Quiz</button>
          }

          
        </div>
      </div>
    </div>
  )
}

export default Page;




// Passo 4- Organizar a tabela do quiz -- Passo 5(linhar 15): importando a quantidade de perguntas
// e faz uma validação para saber se vai ter o s ou náo
//Passo 6- Fazer os states, para controlar a pergunta que vai ser exibida na linha 19
//Passo 11 - Envia o QuestionItem e tem que preencher com qual pergunta, atraves do currentquestin