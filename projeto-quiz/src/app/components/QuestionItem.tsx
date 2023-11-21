import { Question } from "../types/Question";

type Props = {
    question: Question;
    count: number;      // **count para saber qual é a pergunta que ta sendo exibida
    onAnswer: (answer: number) => void;    
}


//Passo 7 - Fazer as props para as perguntas, criar componente especifico para pergunta
// que dentro do componente cria todo processo de gestao daquela pergunta especifica,
// exibição dela, verificação se ta correta, se clicou na correta ou nao;
// **count para saber qual é a pergunta que ta sendo exibida
// onAnswer para mandar a tela principal a resposta
// Passo 8 - Mandar os parametros feitos na typagem para dentro do Props {question, count, onAnswer}
// PAsso 9 - começa a passar as props para div
// Passo 10 - faz as alternativas com o map
// ** item é o proprio texto da alternativa
// Passo 12 - Processo de clicar, para verificar, mas passe isso precisamos de uma state dentro do componente, para saber qual foi clicado. Começa com null, para nao fala alternativa
// Passo 13 - onClick manda executar o checkQuestion e manda o key(alternativa que clicou)
// passo 14 - faz o if para proteger, com a alternativa que clicou
export const QuestionItem = ({ question, count, onAnswer} :Props)  => {
    const [selectedAnswer, setSelectAnswer] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null) {
            setSelectAnswer(key);
            onAnswer(key);
        }
    }

    return (
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key={key}  
                        onClick={() => checkQuestion(key)}
                        className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300
                    
                        ${selectedAnswer !== null ? 'cursor-auto' : ' cursor pointer hover:opacity-60' }
                        `}
                    >{item}</div>
                ))}
            </div>
        </div>
    );
}