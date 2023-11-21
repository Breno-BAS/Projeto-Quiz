"use client"

import { useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from "./components/QuestionItem";

// Passo 4- Organizar a tabela do quiz -- Passo 5(linhar 15): importando a quantidade de perguntas
// e faz uma validação para saber se vai ter o s ou náo
//Passo 6- Fazer os states, para controlar a pergunta que vai ser exibida na linha 19
//Passo 11 - Envia o QuestionItem e tem que preencher com qual pergunta, atraves do currentquestin
const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = 'Quiz de Culinária';

  const handleAnswered = (answer: number) => {}

  return (
    <div className="w-screen h-screen mx-auto flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          <QuestionItem 
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
        </div>
        <div className="p-5 text-center border-t  border-gray-300">
          {currentQuestion + 1} de {questions.length} pergunta {questions.length === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  )
}

export default Page;