import { Question } from "../types/Question";


// Passo 1 criar array--Passo3 3 - COlocar a typagem feito no Question
export const questions: Question[] = [
    {
        question: 'Qual ingrediente não pode faltar?',
        options: [
            'Farinha',
            'Corante',
            'Água',
            'Açúcar'
        ],
        answer: 1
    },
    {
        question: 'Qual o melhor método de cozinhar?',
        options: [
            'Microondas',
            'Fogão',
            'Fogueira',
            'Lança-chamas'
        ],
        answer: 3
    }
];